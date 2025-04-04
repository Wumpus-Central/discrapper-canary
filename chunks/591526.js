n.d(t, { Z: () => a }), n(47120);
var r = n(710845),
    i = n(287328);
let o = new r.Z('ChannelReader');
class a {
    static getSync(e, t) {
        let n = performance.now(),
            r = i.Z.channels(e).getManySyncUnsafe(t),
            a = performance.now() - n;
        return o.log('synchronously loaded in '.concat(a, 'ms (guild: ').concat(t, ', channels: ').concat(r.length, ')')), [r, a];
    }
    static async getAsync(e, t) {
        let n = performance.now(),
            r = await i.Z.channels(e).getMany(t),
            a = performance.now() - n;
        return o.verbose('loaded in '.concat(a, 'ms (guild: ').concat(t, ', channels: ').concat(r.length, ')')), r;
    }
    static async getGuildIds() {
        try {
            var e;
            let t = i.Z.channels();
            if (null == t) return new Set();
            let n = (null != (e = await t.getGuildIds()) ? e : []).filter((e) => null !== e && 'string' == typeof e);
            return new Set(n);
        } catch (e) {
            return o.warn("couldn't get guild ids", e), new Set();
        }
    }
}
