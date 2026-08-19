var n = r(105953).RBTree;
function o(e, t, r) {
    (this.discrete = !1 === e),
        (this.delta = e || 0.01),
        (this.K = void 0 === t ? 25 : t),
        (this.CX = void 0 === r ? 1.1 : r),
        (this.centroids = new n(i)),
        (this.nreset = 0),
        this.reset();
}
function i(e, t) {
    return e.mean > t.mean ? 1 : e.mean < t.mean ? -1 : 0;
}
function a(e, t) {
    return e.mean_cumn - t.mean_cumn;
}
function s(e) {
    (this.config = e || {}),
        (this.mode = this.config.mode || "auto"),
        o.call(this, "cont" === this.mode && e.delta),
        (this.digest_ratio = this.config.ratio || 0.9),
        (this.digest_thresh = this.config.thresh || 1e3),
        (this.n_unique = 0);
}
(o.prototype.reset = function () {
    this.centroids.clear(), (this.n = 0), (this.nreset += 1), (this.last_cumulate = 0);
}),
    (o.prototype.size = function () {
        return this.centroids.size;
    }),
    (o.prototype.toArray = function (e) {
        var t = [];
        return (
            e
                ? (this._cumulate(!0),
                  this.centroids.each(function (e) {
                      t.push(e);
                  }))
                : this.centroids.each(function (e) {
                      t.push({ mean: e.mean, n: e.n });
                  }),
            t
        );
    }),
    (o.prototype.summary = function () {
        return [
            (this.discrete ? "exact " : "approximating ") + this.n + " samples using " + this.size() + " centroids",
            "min = " + this.percentile(0),
            "Q1  = " + this.percentile(0.25),
            "Q2  = " + this.percentile(0.5),
            "Q3  = " + this.percentile(0.75),
            "max = " + this.percentile(1),
        ].join("\n");
    }),
    (o.prototype.push = function (e, t) {
        (t = t || 1), (e = Array.isArray(e) ? e : [e]);
        for (var r = 0; r < e.length; r++) this._digest(e[r], t);
    }),
    (o.prototype.push_centroid = function (e) {
        e = Array.isArray(e) ? e : [e];
        for (var t = 0; t < e.length; t++) this._digest(e[t].mean, e[t].n);
    }),
    (o.prototype._cumulate = function (e) {
        if (this.n !== this.last_cumulate && (e || !this.CX || !(this.CX > this.n / this.last_cumulate))) {
            var t = 0;
            this.centroids.each(function (e) {
                (e.mean_cumn = t + e.n / 2), (t = e.cumn = t + e.n);
            }),
                (this.n = this.last_cumulate = t);
        }
    }),
    (o.prototype.find_nearest = function (e) {
        if (0 === this.size()) return null;
        var t = this.centroids.lowerBound({ mean: e }),
            r = null === t.data() ? t.prev() : t.data();
        if (r.mean === e || this.discrete) return r;
        var n = t.prev();
        return n && Math.abs(n.mean - e) < Math.abs(r.mean - e) ? n : r;
    }),
    (o.prototype._new_centroid = function (e, t, r) {
        var n = { mean: e, n: t, cumn: r };
        return this.centroids.insert(n), (this.n += t), n;
    }),
    (o.prototype._addweight = function (e, t, r) {
        t !== e.mean && (e.mean += (r * (t - e.mean)) / (e.n + r)),
            (e.cumn += r),
            (e.mean_cumn += r / 2),
            (e.n += r),
            (this.n += r);
    }),
    (o.prototype._digest = function (e, t) {
        var r = this.centroids.min(),
            n = this.centroids.max(),
            o = this.find_nearest(e);
        if (o && o.mean === e) this._addweight(o, e, t);
        else if (o === r) this._new_centroid(e, t, 0);
        else if (o === n) this._new_centroid(e, t, this.n);
        else if (this.discrete) this._new_centroid(e, t, o.cumn);
        else {
            var i = o.mean_cumn / this.n;
            Math.floor(4 * this.n * this.delta * i * (1 - i)) - o.n >= t
                ? this._addweight(o, e, t)
                : this._new_centroid(e, t, o.cumn);
        }
        this._cumulate(!1), !this.discrete && this.K && this.size() > this.K / this.delta && this.compress();
    }),
    (o.prototype.bound_mean = function (e) {
        var t = this.centroids.upperBound({ mean: e }),
            r = t.prev(),
            n = r.mean === e ? r : t.next();
        return [r, n];
    }),
    (o.prototype.p_rank = function (e) {
        var t = (Array.isArray(e) ? e : [e]).map(this._p_rank, this);
        return Array.isArray(e) ? t : t[0];
    }),
    (o.prototype._p_rank = function (e) {
        if (0 !== this.size()) {
            if (e < this.centroids.min().mean) return 0;
            if (e > this.centroids.max().mean) return 1;
            this._cumulate(!0);
            var t = this.bound_mean(e),
                r = t[0],
                n = t[1];
            if (this.discrete) return r.cumn / this.n;
            var o = r.mean_cumn;
            return r !== n && (o += ((e - r.mean) * (n.mean_cumn - r.mean_cumn)) / (n.mean - r.mean)), o / this.n;
        }
    }),
    (o.prototype.bound_mean_cumn = function (e) {
        this.centroids._comparator = a;
        var t = this.centroids.upperBound({ mean_cumn: e });
        this.centroids._comparator = i;
        var r = t.prev(),
            n = r && r.mean_cumn === e ? r : t.next();
        return [r, n];
    }),
    (o.prototype.percentile = function (e) {
        var t = (Array.isArray(e) ? e : [e]).map(this._percentile, this);
        return Array.isArray(e) ? t : t[0];
    }),
    (o.prototype._percentile = function (e) {
        if (0 !== this.size()) {
            this._cumulate(!0), this.centroids.min(), this.centroids.max();
            var t = this.n * e,
                r = this.bound_mean_cumn(t),
                n = r[0],
                o = r[1];
            return o === n || null === n || null === o
                ? (n || o).mean
                : this.discrete
                  ? t <= n.cumn
                      ? n.mean
                      : o.mean
                  : n.mean + ((t - n.mean_cumn) * (o.mean - n.mean)) / (o.mean_cumn - n.mean_cumn);
        }
    }),
    (o.prototype.compress = function () {
        if (!this.compressing) {
            var e = this.toArray();
            for (this.reset(), this.compressing = !0; e.length > 0; )
                this.push_centroid(
                    (function (e) {
                        var t = Math.floor(Math.random() * e.length);
                        return e.splice(t, 1)[0];
                    })(e),
                );
            this._cumulate(!0), (this.compressing = !1);
        }
    }),
    (s.prototype = Object.create(o.prototype)),
    (s.prototype.constructor = s),
    (s.prototype.push = function (e) {
        o.prototype.push.call(this, e), this.check_continuous();
    }),
    (s.prototype._new_centroid = function (e, t, r) {
        (this.n_unique += 1), o.prototype._new_centroid.call(this, e, t, r);
    }),
    (s.prototype._addweight = function (e, t, r) {
        1 === e.n && (this.n_unique -= 1), o.prototype._addweight.call(this, e, t, r);
    }),
    (s.prototype.check_continuous = function () {
        return (
            !("auto" !== this.mode || this.size() < this.digest_thresh) &&
            this.n_unique / this.size() > this.digest_ratio &&
            ((this.mode = "cont"), (this.discrete = !1), (this.delta = this.config.delta || 0.01), this.compress(), !0)
        );
    }),
    (e.exports = { TDigest: o, Digest: s });
