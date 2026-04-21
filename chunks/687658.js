"use strict";
n.d(t, { d: () => i }), n(321073);
var r = n(509973);
class i {
    digest = new r.Digest();
    total = 0;
    samples = 0;
    totalWeight = 0;
    getSamples() {
        return this.samples;
    }
    addSample(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        (this.total += e * t),
            (this.totalWeight += t),
            this.samples++,
            r.TDigest.prototype.push.call(this.digest, e, t),
            this.digest.check_continuous();
    }
    addSamples(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        (this.total += e.reduce((e, n) => e + n * t, 0)),
            (this.totalWeight += t * e.length),
            (this.samples += e.length),
            r.TDigest.prototype.push.call(this.digest, e, t),
            this.digest.check_continuous();
    }
    getReport() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
            t = {};
        for (let n of e) t[n] = this.digest.percentile(n / 100) ?? 0;
        return {
            min: this.digest.percentile(0) ?? 0,
            max: this.digest.percentile(1) ?? 0,
            count: this.digest.size() ?? 0,
            percentiles: t,
            mean: this.totalWeight > 0 ? this.total / this.totalWeight : 0,
            samples: this.samples,
        };
    }
    getPercentile(e) {
        return this.digest.percentile(e / 100) ?? 0;
    }
}
