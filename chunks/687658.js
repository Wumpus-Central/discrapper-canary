n.d(t, {
    d: () => a,
}),
    n(321073),
    n(896048);
var r = n(509973);

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class a {
    addSample(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        (this.total += e * t),
            (this.totalWeight += t),
            this.samples++,
            r.TDigest.prototype.push.call(this.digest, e, t),
            this.digest.check_continuous();
    }
    getReport() {
        var e, t, n, r;
        let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
            a = {};
        for (let e of i) a[e] = null != (r = this.digest.percentile(e / 100)) ? r : 0;
        return {
            min: null != (e = this.digest.percentile(0)) ? e : 0,
            max: null != (t = this.digest.percentile(1)) ? t : 0,
            count: null != (n = this.digest.size()) ? n : 0,
            percentiles: a,
            mean: this.totalWeight > 0 ? this.total / this.totalWeight : 0,
            samples: this.samples,
        };
    }
    constructor() {
        i(this, "digest", new r.Digest()), i(this, "total", 0), i(this, "samples", 0), i(this, "totalWeight", 0);
    }
}
