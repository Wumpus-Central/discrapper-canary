r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(710845),
    o = r(287328);
let s = new a.Z('ChannelReader');
class l {
    static getSync(e, n) {
        let r = performance.now(),
            i = o.Z.channels(e).getManySyncUnsafe(n),
            a = performance.now() - r;
        return s.log('synchronously loaded in '.concat(a, 'ms (guild: ').concat(n, ', channels: ').concat(i.length, ')')), [i, a];
    }
    static async getAsync(e, n) {
        let r = performance.now(),
            i = await o.Z.channels(e).getMany(n),
            a = performance.now() - r;
        return s.verbose('loaded in '.concat(a, 'ms (guild: ').concat(n, ', channels: ').concat(i.length, ')')), i;
    }
    static async getGuildIds() {
        try {
            var e;
            let n = o.Z.channels();
            if (null == n) return new Set();
            let r = (null !== (e = await n.getGuildIds()) && void 0 !== e ? e : []).filter((e) => null !== e && 'string' == typeof e);
            return new Set(r);
        } catch (e) {
            return s.warn("couldn't get guild ids", e), new Set();
        }
    }
}
