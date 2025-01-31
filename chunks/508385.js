var i = n(575270).RBTree;
function r(e, t, n) {
    (this.discrete = !1 === e), (this.delta = e || 0.01), (this.K = void 0 === t ? 25 : t), (this.CX = void 0 === n ? 1.1 : n), (this.centroids = new i(a)), (this.nreset = 0), this.reset();
}
function a(e, t) {
    return e.mean > t.mean ? 1 : e.mean < t.mean ? -1 : 0;
}
function s(e, t) {
    return e.mean_cumn - t.mean_cumn;
}
function o(e) {
    var t = Math.floor(Math.random() * e.length);
    return e.splice(t, 1)[0];
}
function l(e) {
    (this.config = e || {}), (this.mode = this.config.mode || 'auto'), r.call(this, 'cont' === this.mode && e.delta), (this.digest_ratio = this.config.ratio || 0.9), (this.digest_thresh = this.config.thresh || 1000), (this.n_unique = 0);
}
(r.prototype.reset = function () {
    this.centroids.clear(), (this.n = 0), (this.nreset += 1), (this.last_cumulate = 0);
}),
    (r.prototype.size = function () {
        return this.centroids.size;
    }),
    (r.prototype.toArray = function (e) {
        var t = [];
        return (
            e
                ? (this._cumulate(!0),
                  this.centroids.each(function (e) {
                      t.push(e);
                  }))
                : this.centroids.each(function (e) {
                      t.push({
                          mean: e.mean,
                          n: e.n
                      });
                  }),
            t
        );
    }),
    (r.prototype.summary = function () {
        return [(this.discrete ? 'exact ' : 'approximating ') + this.n + ' samples using ' + this.size() + ' centroids', 'min = ' + this.percentile(0), 'Q1  = ' + this.percentile(0.25), 'Q2  = ' + this.percentile(0.5), 'Q3  = ' + this.percentile(0.75), 'max = ' + this.percentile(1)].join('\n');
    }),
    (r.prototype.push = function (e, t) {
        (t = t || 1), (e = Array.isArray(e) ? e : [e]);
        for (var n = 0; n < e.length; n++) this._digest(e[n], t);
    }),
    (r.prototype.push_centroid = function (e) {
        e = Array.isArray(e) ? e : [e];
        for (var t = 0; t < e.length; t++) this._digest(e[t].mean, e[t].n);
    }),
    (r.prototype._cumulate = function (e) {
        if (this.n !== this.last_cumulate && (e || !this.CX || !(this.CX > this.n / this.last_cumulate))) {
            var t = 0;
            this.centroids.each(function (e) {
                (e.mean_cumn = t + e.n / 2), (t = e.cumn = t + e.n);
            }),
                (this.n = this.last_cumulate = t);
        }
    }),
    (r.prototype.find_nearest = function (e) {
        if (0 === this.size()) return null;
        var t = this.centroids.lowerBound({ mean: e }),
            n = null === t.data() ? t.prev() : t.data();
        if (n.mean === e || this.discrete) return n;
        var i = t.prev();
        return i && Math.abs(i.mean - e) < Math.abs(n.mean - e) ? i : n;
    }),
    (r.prototype._new_centroid = function (e, t, n) {
        var i = {
            mean: e,
            n: t,
            cumn: n
        };
        return this.centroids.insert(i), (this.n += t), i;
    }),
    (r.prototype._addweight = function (e, t, n) {
        t !== e.mean && (e.mean += (n * (t - e.mean)) / (e.n + n)), (e.cumn += n), (e.mean_cumn += n / 2), (e.n += n), (this.n += n);
    }),
    (r.prototype._digest = function (e, t) {
        var n = this.centroids.min(),
            i = this.centroids.max(),
            r = this.find_nearest(e);
        if (r && r.mean === e) this._addweight(r, e, t);
        else if (r === n) this._new_centroid(e, t, 0);
        else if (r === i) this._new_centroid(e, t, this.n);
        else if (this.discrete) this._new_centroid(e, t, r.cumn);
        else {
            var a = r.mean_cumn / this.n;
            Math.floor(4 * this.n * this.delta * a * (1 - a)) - r.n >= t ? this._addweight(r, e, t) : this._new_centroid(e, t, r.cumn);
        }
        this._cumulate(!1), !this.discrete && this.K && this.size() > this.K / this.delta && this.compress();
    }),
    (r.prototype.bound_mean = function (e) {
        var t = this.centroids.upperBound({ mean: e }),
            n = t.prev(),
            i = n.mean === e ? n : t.next();
        return [n, i];
    }),
    (r.prototype.p_rank = function (e) {
        var t = (Array.isArray(e) ? e : [e]).map(this._p_rank, this);
        return Array.isArray(e) ? t : t[0];
    }),
    (r.prototype._p_rank = function (e) {
        if (0 !== this.size()) {
            if (e < this.centroids.min().mean) return 0;
            if (e > this.centroids.max().mean) return 1;
            this._cumulate(!0);
            var t = this.bound_mean(e),
                n = t[0],
                i = t[1];
            if (this.discrete) return n.cumn / this.n;
            var r = n.mean_cumn;
            return n !== i && (r += ((e - n.mean) * (i.mean_cumn - n.mean_cumn)) / (i.mean - n.mean)), r / this.n;
        }
    }),
    (r.prototype.bound_mean_cumn = function (e) {
        this.centroids._comparator = s;
        var t = this.centroids.upperBound({ mean_cumn: e });
        this.centroids._comparator = a;
        var n = t.prev(),
            i = n && n.mean_cumn === e ? n : t.next();
        return [n, i];
    }),
    (r.prototype.percentile = function (e) {
        var t = (Array.isArray(e) ? e : [e]).map(this._percentile, this);
        return Array.isArray(e) ? t : t[0];
    }),
    (r.prototype._percentile = function (e) {
        if (0 !== this.size()) {
            this._cumulate(!0), this.centroids.min(), this.centroids.max();
            var t = this.n * e,
                n = this.bound_mean_cumn(t),
                i = n[0],
                r = n[1];
            return r === i || null === i || null === r ? (i || r).mean : this.discrete ? (t <= i.cumn ? i.mean : r.mean) : i.mean + ((t - i.mean_cumn) * (r.mean - i.mean)) / (r.mean_cumn - i.mean_cumn);
        }
    }),
    (r.prototype.compress = function () {
        if (!this.compressing) {
            var e = this.toArray();
            for (this.reset(), this.compressing = !0; e.length > 0; ) this.push_centroid(o(e));
            this._cumulate(!0), (this.compressing = !1);
        }
    }),
    (l.prototype = Object.create(r.prototype)),
    (l.prototype.constructor = l),
    (l.prototype.push = function (e) {
        r.prototype.push.call(this, e), this.check_continuous();
    }),
    (l.prototype._new_centroid = function (e, t, n) {
        (this.n_unique += 1), r.prototype._new_centroid.call(this, e, t, n);
    }),
    (l.prototype._addweight = function (e, t, n) {
        1 === e.n && (this.n_unique -= 1), r.prototype._addweight.call(this, e, t, n);
    }),
    (l.prototype.check_continuous = function () {
        return !('auto' !== this.mode || this.size() < this.digest_thresh) && this.n_unique / this.size() > this.digest_ratio && ((this.mode = 'cont'), (this.discrete = !1), (this.delta = this.config.delta || 0.01), this.compress(), !0);
    }),
    (e.exports = {
        TDigest: r,
        Digest: l
    });
