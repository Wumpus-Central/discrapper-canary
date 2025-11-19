t.exports = (function () {
    function t(t, e) {
        (this.scrollbar_ = {
            position_: 0,
            range_: 0,
        }),
            (this.devicePixelRatio = e || 1),
            (this.canvas_ = t),
            (t.width = parseInt(t.width, 10) * this.devicePixelRatio),
            (t.height = parseInt(t.height, 10) * this.devicePixelRatio),
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
            (this.scale_ = 1000 / this.devicePixelRatio),
            this.updateScrollbarRange_(!0);
    }
    t.prototype = {
        setScale: function (t) {
            this.scale_ = t;
        },
        getLength_: function () {
            return Math.floor((this.endTime_ - this.startTime_) / this.scale_);
        },
        graphScrolledToRightEdge_: function () {
            return this.scrollbar_.position_ == this.scrollbar_.range_;
        },
        updateScrollbarRange_: function (t) {
            var e = this.getLength_() - this.canvas_.width;
            e < 0 && (e = 0),
                this.scrollbar_.position_ > e && (t = !0),
                (this.scrollbar_.range_ = e),
                t && ((this.scrollbar_.position_ = e), this.repaint());
        },
        setDateRange: function (t, e) {
            (this.startTime_ = t.getTime()),
                (this.endTime_ = e.getTime()),
                this.endTime_ <= this.startTime_ && (this.startTime_ = this.endTime_ - 1),
                this.updateScrollbarRange_(!0);
        },
        updateEndDate: function (t) {
            (this.endTime_ = t || new Date().getTime()), this.updateScrollbarRange_(this.graphScrolledToRightEdge_());
        },
        getStartDate: function () {
            return new Date(this.startTime_);
        },
        setDataSeries: function (t) {
            this.graph_ = new e(this.devicePixelRatio);
            for (var i = 0; i < t.length; ++i) this.graph_.addDataSeries(t[i]);
            this.repaint();
        },
        addDataSeries: function (t) {
            this.graph_ || (this.graph_ = new e(this.devicePixelRatio)), this.graph_.addDataSeries(t), this.repaint();
        },
        repaint: function () {
            if (null !== this.canvas_.offsetParent) {
                this.repaintTimerRunning_ = !1;
                var t = this.canvas_.width,
                    e = this.canvas_.height,
                    i = this.canvas_.getContext("2d");
                if (
                    ((i.fillStyle = this.backgroundColor),
                    i.fillRect(0, 0, t, e),
                    !(4 * this.fontSize > e) && !(t < 50))
                ) {
                    i.save();
                    var n = this.scrollbar_.position_;
                    0 == this.scrollbar_.range_ && (n = this.getLength_() - t);
                    var r = this.startTime_ + n * this.scale_,
                        a = e;
                    (e -= Math.ceil(this.fontSize * this.devicePixelRatio) + 4),
                        this.drawTimeLabels(i, t, e, a, r),
                        (i.strokeStyle = this.gridColor),
                        (i.lineWidth = this.devicePixelRatio),
                        i.strokeRect(1, 1, t - 1, e - 1),
                        this.graph_ &&
                            (this.graph_.layout(t, e, this.fontSize, r, this.scale_),
                            this.graph_.drawTicks(i),
                            this.graph_.drawLines(i),
                            this.graph_.drawLabels(i)),
                        i.restore();
                }
            }
        },
        drawTimeLabels: function (t, e, i, n, r) {
            var a = 60000 * Math.ceil(r / 60000);
            for (
                t.textBaseline = "bottom",
                    t.textAlign = "center",
                    t.fillStyle = this.textColor,
                    t.strokeStyle = this.gridColor,
                    t.lineWidth = this.devicePixelRatio,
                    t.font = `${this.fontWeight} ${this.fontSize * this.devicePixelRatio}px ${this.fontFamily}`;
                ;
            ) {
                var s = Math.round((a - r) / this.scale_);
                if (s >= e) break;
                var o = new Date(a).toLocaleTimeString(this.timeLocales, this.timeOptions);
                t.fillText(o, s, n), t.beginPath(), t.lineTo(s, 1), t.lineTo(s, i), t.stroke(), (a += 60000);
            }
        },
        getDataSeriesCount: function () {
            return this.graph_ ? this.graph_.dataSeries_.length : 0;
        },
        hasDataSeries: function (t) {
            return !!this.graph_ && this.graph_.hasDataSeries(t);
        },
    };
    var e = (function () {
        function t(t) {
            (this.devicePixelRatio = t || 1),
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
            (t.prototype = {
                addDataSeries: function (t) {
                    this.dataSeries_.push(t);
                },
                hasDataSeries: function (t) {
                    for (var e = 0; e < this.dataSeries_.length; ++e) if (this.dataSeries_[e] == t) return !0;
                    return !1;
                },
                getValues: function (t) {
                    return t.isVisible() ? t.getValues(this.startTime_, this.scale_, this.width_) : null;
                },
                layout: function (t, e, i, n, r) {
                    (this.width_ = t),
                        (this.height_ = e),
                        (this.fontHeight_ = i),
                        (this.startTime_ = n),
                        (this.scale_ = r);
                    for (var a = 0, s = 0, o = 0; o < this.dataSeries_.length; ++o) {
                        var h = this.getValues(this.dataSeries_[o]);
                        if (h) for (var l = 0; l < h.length; ++l) h[l] > a ? (a = h[l]) : h[l] < s && (s = h[l]);
                    }
                    this.layoutLabels_(s, a);
                },
                layoutLabels_: function (t, e) {
                    if (e - t < 1024) return void this.layoutLabelsBasic_(t, e, 2);
                    var i = ["", "k", "M", "G", "T", "P"],
                        n = 1;
                    for (t /= 1024, e /= 1024; i[n + 1] && e - t >= 1024; ) (t /= 1024), (e /= 1024), ++n;
                    this.layoutLabelsBasic_(t, e, 2);
                    for (var r = 0; r < this.labels_.length; ++r) this.labels_[r] += " " + i[n];
                    (this.min_ *= Math.pow(1024, n)), (this.max_ *= Math.pow(1024, n));
                },
                layoutLabelsBasic_: function (t, e, i) {
                    this.labels_ = [];
                    var n = e - t;
                    if (0 == n) {
                        this.min_ = this.max_ = e;
                        return;
                    }
                    var r = 2 * this.fontHeight_ + 4,
                        a = 1 + this.height_ / r;
                    a < 2 ? (a = 2) : a > 6 && (a = 6);
                    for (var s = Math.pow(10, -i), o = i; !(Math.ceil(n / s) + 1 <= a); ) {
                        if (Math.ceil(n / (2 * s)) + 1 <= a) {
                            s *= 2;
                            break;
                        }
                        if (Math.ceil(n / (5 * s)) + 1 <= a) {
                            s *= 5;
                            break;
                        }
                        (s *= 10), o > 0 && --o;
                    }
                    (this.max_ = Math.ceil(e / s) * s), (this.min_ = Math.floor(t / s) * s);
                    for (var h = this.max_; h >= this.min_; h -= s) this.labels_.push(h.toFixed(o));
                },
                drawTicks: function (t) {
                    (e = this.width_ - 1),
                        (i = this.width_ - 1 - 10),
                        (t.fillStyle = this.gridColor),
                        (t.lineWidth = this.devicePixelRatio),
                        t.beginPath();
                    for (var e, i, n = 1; n < this.labels_.length - 1; ++n) {
                        var r = Math.round((this.height_ * n) / (this.labels_.length - 1));
                        t.moveTo(e, r), t.lineTo(i, r);
                    }
                    t.stroke();
                },
                drawLines: function (t) {
                    var e = 0,
                        i = this.height_ - 1;
                    this.max_ && (e = i / (this.max_ - this.min_));
                    for (var n = this.dataSeries_.length - 1; n >= 0; --n) {
                        var r = this.getValues(this.dataSeries_[n]);
                        if (r) {
                            (t.strokeStyle = this.dataSeries_[n].getColor()),
                                (t.lineWidth = this.devicePixelRatio),
                                t.beginPath();
                            for (var a = 0; a < r.length; ++a) t.lineTo(a, i - Math.round((r[a] - this.min_) * e));
                            t.stroke();
                        }
                    }
                },
                drawLabels: function (t) {
                    if (0 != this.labels_.length) {
                        var e = this.width_ - 3;
                        (t.fillStyle = this.textColor),
                            (t.textAlign = "right"),
                            (t.textBaseline = "top"),
                            t.fillText(this.labels_[0], e, 0),
                            (t.textBaseline = "bottom");
                        for (
                            var i = (this.height_ - 1) / (this.labels_.length - 1), n = 1;
                            n < this.labels_.length;
                            ++n
                        )
                            t.fillText(this.labels_[n], e, i * n);
                    }
                },
            }),
            t
        );
    })();
    return t;
})();
