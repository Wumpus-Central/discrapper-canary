e.exports = (function () {
    "use strict";
    function e(e, t) {
        (this.scrollbar_ = { position_: 0, range_: 0 }),
            (this.devicePixelRatio = t || 1),
            (this.canvas_ = e),
            (e.width = parseInt(e.width, 10) * this.devicePixelRatio),
            (e.height = parseInt(e.height, 10) * this.devicePixelRatio),
            (this.gridColor = "#CCC"),
            (this.textColor = "#000"),
            (this.backgroundColor = "#FFF"),
            (this.fontWeight = "normal"),
            (this.fontSize = 10),
            (this.fontFamily = "sans-serif"),
            (this.timeLocales = []),
            (this.timeOptions = {}),
            (this.startTime_ = 0),
            (this.endTime_ = 1),
            (this.graph_ = null),
            (this.scale_ = 1e3 / this.devicePixelRatio),
            this.updateScrollbarRange_(!0);
    }
    e.prototype = {
        setScale: function (e) {
            this.scale_ = e;
        },
        getLength_: function () {
            return Math.floor((this.endTime_ - this.startTime_) / this.scale_);
        },
        graphScrolledToRightEdge_: function () {
            return this.scrollbar_.position_ == this.scrollbar_.range_;
        },
        updateScrollbarRange_: function (e) {
            var t = this.getLength_() - this.canvas_.width;
            t < 0 && (t = 0),
                this.scrollbar_.position_ > t && (e = !0),
                (this.scrollbar_.range_ = t),
                e && ((this.scrollbar_.position_ = t), this.repaint());
        },
        setDateRange: function (e, t) {
            (this.startTime_ = e.getTime()),
                (this.endTime_ = t.getTime()),
                this.endTime_ <= this.startTime_ && (this.startTime_ = this.endTime_ - 1),
                this.updateScrollbarRange_(!0);
        },
        updateEndDate: function (e) {
            (this.endTime_ = e || new Date().getTime()), this.updateScrollbarRange_(this.graphScrolledToRightEdge_());
        },
        getStartDate: function () {
            return new Date(this.startTime_);
        },
        setDataSeries: function (e) {
            this.graph_ = new t(this.devicePixelRatio);
            for (var n = 0; n < e.length; ++n) this.graph_.addDataSeries(e[n]);
            this.repaint();
        },
        addDataSeries: function (e) {
            this.graph_ || (this.graph_ = new t(this.devicePixelRatio)), this.graph_.addDataSeries(e), this.repaint();
        },
        repaint: function () {
            if (null !== this.canvas_.offsetParent) {
                this.repaintTimerRunning_ = !1;
                var e = this.canvas_.width,
                    t = this.canvas_.height,
                    n = this.canvas_.getContext("2d");
                if (
                    ((n.fillStyle = this.backgroundColor),
                    n.fillRect(0, 0, e, t),
                    !(4 * this.fontSize > t) && !(e < 50))
                ) {
                    n.save();
                    var i = this.scrollbar_.position_;
                    0 == this.scrollbar_.range_ && (i = this.getLength_() - e);
                    var r = this.startTime_ + i * this.scale_,
                        s = t;
                    (t -= Math.ceil(this.fontSize * this.devicePixelRatio) + 4),
                        this.drawTimeLabels(n, e, t, s, r),
                        (n.strokeStyle = this.gridColor),
                        (n.lineWidth = this.devicePixelRatio),
                        n.strokeRect(1, 1, e - 1, t - 1),
                        this.graph_ &&
                            (this.graph_.layout(e, t, this.fontSize, r, this.scale_),
                            this.graph_.drawTicks(n),
                            this.graph_.drawLines(n),
                            this.graph_.drawLabels(n)),
                        n.restore();
                }
            }
        },
        drawTimeLabels: function (e, t, n, i, r) {
            var s = 6e4 * Math.ceil(r / 6e4);
            for (
                e.textBaseline = "bottom",
                    e.textAlign = "center",
                    e.fillStyle = this.textColor,
                    e.strokeStyle = this.gridColor,
                    e.lineWidth = this.devicePixelRatio,
                    e.font = `${this.fontWeight} ${this.fontSize * this.devicePixelRatio}px ${this.fontFamily}`;
                ;
            ) {
                var a = Math.round((s - r) / this.scale_);
                if (a >= t) break;
                var o = new Date(s).toLocaleTimeString(this.timeLocales, this.timeOptions);
                e.fillText(o, a, i), e.beginPath(), e.lineTo(a, 1), e.lineTo(a, n), e.stroke(), (s += 6e4);
            }
        },
        getDataSeriesCount: function () {
            return this.graph_ ? this.graph_.dataSeries_.length : 0;
        },
        hasDataSeries: function (e) {
            return !!this.graph_ && this.graph_.hasDataSeries(e);
        },
    };
    var t = (function () {
        function e(e) {
            (this.devicePixelRatio = e || 1),
                (this.dataSeries_ = []),
                (this.width_ = 0),
                (this.height_ = 0),
                (this.fontHeight_ = 0),
                (this.startTime_ = 0),
                (this.scale_ = 0),
                (this.min_ = 0),
                (this.max_ = 0),
                (this.labels_ = []);
        }
        return (
            (e.prototype = {
                addDataSeries: function (e) {
                    this.dataSeries_.push(e);
                },
                hasDataSeries: function (e) {
                    for (var t = 0; t < this.dataSeries_.length; ++t) if (this.dataSeries_[t] == e) return !0;
                    return !1;
                },
                getValues: function (e) {
                    return e.isVisible() ? e.getValues(this.startTime_, this.scale_, this.width_) : null;
                },
                layout: function (e, t, n, i, r) {
                    (this.width_ = e),
                        (this.height_ = t),
                        (this.fontHeight_ = n),
                        (this.startTime_ = i),
                        (this.scale_ = r);
                    for (var s = 0, a = 0, o = 0; o < this.dataSeries_.length; ++o) {
                        var l = this.getValues(this.dataSeries_[o]);
                        if (l) for (var u = 0; u < l.length; ++u) l[u] > s ? (s = l[u]) : l[u] < a && (a = l[u]);
                    }
                    this.layoutLabels_(a, s);
                },
                layoutLabels_: function (e, t) {
                    if (t - e < 1024) return void this.layoutLabelsBasic_(e, t, 2);
                    var n = ["", "k", "M", "G", "T", "P"],
                        i = 1;
                    for (e /= 1024, t /= 1024; n[i + 1] && t - e >= 1024; ) (e /= 1024), (t /= 1024), ++i;
                    this.layoutLabelsBasic_(e, t, 2);
                    for (var r = 0; r < this.labels_.length; ++r) this.labels_[r] += " " + n[i];
                    (this.min_ *= Math.pow(1024, i)), (this.max_ *= Math.pow(1024, i));
                },
                layoutLabelsBasic_: function (e, t, n) {
                    this.labels_ = [];
                    var i = t - e;
                    if (0 == i) {
                        this.min_ = this.max_ = t;
                        return;
                    }
                    var r = 2 * this.fontHeight_ + 4,
                        s = 1 + this.height_ / r;
                    s < 2 ? (s = 2) : s > 6 && (s = 6);
                    for (var a = Math.pow(10, -n), o = n; !(Math.ceil(i / a) + 1 <= s); ) {
                        if (Math.ceil(i / (2 * a)) + 1 <= s) {
                            a *= 2;
                            break;
                        }
                        if (Math.ceil(i / (5 * a)) + 1 <= s) {
                            a *= 5;
                            break;
                        }
                        (a *= 10), o > 0 && --o;
                    }
                    (this.max_ = Math.ceil(t / a) * a), (this.min_ = Math.floor(e / a) * a);
                    for (var l = this.max_; l >= this.min_; l -= a) this.labels_.push(l.toFixed(o));
                },
                drawTicks: function (e) {
                    (t = this.width_ - 1),
                        (n = this.width_ - 1 - 10),
                        (e.fillStyle = this.gridColor),
                        (e.lineWidth = this.devicePixelRatio),
                        e.beginPath();
                    for (var t, n, i = 1; i < this.labels_.length - 1; ++i) {
                        var r = Math.round((this.height_ * i) / (this.labels_.length - 1));
                        e.moveTo(t, r), e.lineTo(n, r);
                    }
                    e.stroke();
                },
                drawLines: function (e) {
                    var t = 0,
                        n = this.height_ - 1;
                    this.max_ && (t = n / (this.max_ - this.min_));
                    for (var i = this.dataSeries_.length - 1; i >= 0; --i) {
                        var r = this.getValues(this.dataSeries_[i]);
                        if (r) {
                            (e.strokeStyle = this.dataSeries_[i].getColor()),
                                (e.lineWidth = this.devicePixelRatio),
                                e.beginPath();
                            for (var s = 0; s < r.length; ++s) e.lineTo(s, n - Math.round((r[s] - this.min_) * t));
                            e.stroke();
                        }
                    }
                },
                drawLabels: function (e) {
                    if (0 != this.labels_.length) {
                        var t = this.width_ - 3;
                        (e.fillStyle = this.textColor),
                            (e.textAlign = "right"),
                            (e.textBaseline = "top"),
                            e.fillText(this.labels_[0], t, 0),
                            (e.textBaseline = "bottom");
                        for (
                            var n = (this.height_ - 1) / (this.labels_.length - 1), i = 1;
                            i < this.labels_.length;
                            ++i
                        )
                            e.fillText(this.labels_[i], t, n * i);
                    }
                },
            }),
            e
        );
    })();
    return e;
})();
