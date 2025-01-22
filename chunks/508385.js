var i = r(575270).RBTree;
function a(e, n, r) {
    (this.discrete = !1 === e), (this.delta = e || 0.01), (this.K = void 0 === n ? 25 : n), (this.CX = void 0 === r ? 1.1 : r), (this.centroids = new i(o)), (this.nreset = 0), this.reset();
}
function o(e, n) {
    return e.mean > n.mean ? 1 : e.mean < n.mean ? -1 : 0;
}
function s(e, n) {
    return e.mean_cumn - n.mean_cumn;
}
function l(e) {
    var n = Math.floor(Math.random() * e.length);
    return e.splice(n, 1)[0];
}
function u(e) {
    (this.config = e || {}), (this.mode = this.config.mode || 'auto'), a.call(this, 'cont' === this.mode && e.delta), (this.digest_ratio = this.config.ratio || 0.9), (this.digest_thresh = this.config.thresh || 1000), (this.n_unique = 0);
}
(a.prototype.reset = function () {
    this.centroids.clear(), (this.n = 0), (this.nreset += 1), (this.last_cumulate = 0);
}),
    (a.prototype.size = function () {
        return this.centroids.size;
    }),
    (a.prototype.toArray = function (e) {
        var n = [];
        return (
            e
                ? (this._cumulate(!0),
                  this.centroids.each(function (e) {
                      n.push(e);
                  }))
                : this.centroids.each(function (e) {
                      n.push({
                          mean: e.mean,
                          n: e.n
                      });
                  }),
            n
        );
    }),
    (a.prototype.summary = function () {
        return [(this.discrete ? 'exact ' : 'approximating ') + this.n + ' samples using ' + this.size() + ' centroids', 'min = ' + this.percentile(0), 'Q1  = ' + this.percentile(0.25), 'Q2  = ' + this.percentile(0.5), 'Q3  = ' + this.percentile(0.75), 'max = ' + this.percentile(1)].join('\n');
    }),
    (a.prototype.push = function (e, n) {
        (n = n || 1), (e = Array.isArray(e) ? e : [e]);
        for (var r = 0; r < e.length; r++) this._digest(e[r], n);
    }),
    (a.prototype.push_centroid = function (e) {
        e = Array.isArray(e) ? e : [e];
        for (var n = 0; n < e.length; n++) this._digest(e[n].mean, e[n].n);
    }),
    (a.prototype._cumulate = function (e) {
        if (this.n !== this.last_cumulate && (!!e || !this.CX || !(this.CX > this.n / this.last_cumulate))) {
            var n = 0;
            this.centroids.each(function (e) {
                (e.mean_cumn = n + e.n / 2), (n = e.cumn = n + e.n);
            }),
                (this.n = this.last_cumulate = n);
        }
    }),
    (a.prototype.find_nearest = function (e) {
        if (0 === this.size()) return null;
        var n = this.centroids.lowerBound({ mean: e }),
            r = null === n.data() ? n.prev() : n.data();
        if (r.mean === e || this.discrete) return r;
        var i = n.prev();
        return i && Math.abs(i.mean - e) < Math.abs(r.mean - e) ? i : r;
    }),
    (a.prototype._new_centroid = function (e, n, r) {
        var i = {
            mean: e,
            n: n,
            cumn: r
        };
        return this.centroids.insert(i), (this.n += n), i;
    }),
    (a.prototype._addweight = function (e, n, r) {
        n !== e.mean && (e.mean += (r * (n - e.mean)) / (e.n + r)), (e.cumn += r), (e.mean_cumn += r / 2), (e.n += r), (this.n += r);
    }),
    (a.prototype._digest = function (e, n) {
        var r = this.centroids.min(),
            i = this.centroids.max(),
            a = this.find_nearest(e);
        if (a && a.mean === e) this._addweight(a, e, n);
        else if (a === r) this._new_centroid(e, n, 0);
        else if (a === i) this._new_centroid(e, n, this.n);
        else if (this.discrete) this._new_centroid(e, n, a.cumn);
        else {
            var o = a.mean_cumn / this.n;
            Math.floor(4 * this.n * this.delta * o * (1 - o)) - a.n >= n ? this._addweight(a, e, n) : this._new_centroid(e, n, a.cumn);
        }
        this._cumulate(!1), !this.discrete && this.K && this.size() > this.K / this.delta && this.compress();
    }),
    (a.prototype.bound_mean = function (e) {
        var n = this.centroids.upperBound({ mean: e }),
            r = n.prev(),
            i = r.mean === e ? r : n.next();
        return [r, i];
    }),
    (a.prototype.p_rank = function (e) {
        var n = (Array.isArray(e) ? e : [e]).map(this._p_rank, this);
        return Array.isArray(e) ? n : n[0];
    }),
    (a.prototype._p_rank = function (e) {
        if (0 !== this.size()) {
            if (e < this.centroids.min().mean) return 0;
            if (e > this.centroids.max().mean) return 1;
            this._cumulate(!0);
            var n = this.bound_mean(e),
                r = n[0],
                i = n[1];
            if (this.discrete) return r.cumn / this.n;
            var a = r.mean_cumn;
            return r !== i && (a += ((e - r.mean) * (i.mean_cumn - r.mean_cumn)) / (i.mean - r.mean)), a / this.n;
        }
    }),
    (a.prototype.bound_mean_cumn = function (e) {
        this.centroids._comparator = s;
        var n = this.centroids.upperBound({ mean_cumn: e });
        this.centroids._comparator = o;
        var r = n.prev(),
            i = r && r.mean_cumn === e ? r : n.next();
        return [r, i];
    }),
    (a.prototype.percentile = function (e) {
        var n = (Array.isArray(e) ? e : [e]).map(this._percentile, this);
        return Array.isArray(e) ? n : n[0];
    }),
    (a.prototype._percentile = function (e) {
        if (0 !== this.size()) {
            this._cumulate(!0), this.centroids.min(), this.centroids.max();
            var n = this.n * e,
                r = this.bound_mean_cumn(n),
                i = r[0],
                a = r[1];
            if (a === i || null === i || null === a) return (i || a).mean;
            if (!this.discrete) return i.mean + ((n - i.mean_cumn) * (a.mean - i.mean)) / (a.mean_cumn - i.mean_cumn);
            if (n <= i.cumn) return i.mean;
            else return a.mean;
        }
    }),
    (a.prototype.compress = function () {
        if (!this.compressing) {
            var e = this.toArray();
            for (this.reset(), this.compressing = !0; e.length > 0; ) this.push_centroid(l(e));
            this._cumulate(!0), (this.compressing = !1);
        }
    }),
    (u.prototype = Object.create(a.prototype)),
    (u.prototype.constructor = u),
    (u.prototype.push = function (e) {
        a.prototype.push.call(this, e), this.check_continuous();
    }),
    (u.prototype._new_centroid = function (e, n, r) {
        (this.n_unique += 1), a.prototype._new_centroid.call(this, e, n, r);
    }),
    (u.prototype._addweight = function (e, n, r) {
        1 === e.n && (this.n_unique -= 1), a.prototype._addweight.call(this, e, n, r);
    }),
    (u.prototype.check_continuous = function () {
        return !('auto' !== this.mode || this.size() < this.digest_thresh) && !!(this.n_unique / this.size() > this.digest_ratio) && ((this.mode = 'cont'), (this.discrete = !1), (this.delta = this.config.delta || 0.01), this.compress(), !0);
    }),
    (e.exports = {
        TDigest: a,
        Digest: u
    });
