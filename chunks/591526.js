n.d(t, { Z: () => o }), n(388685);
var r = n(710845),
    i = n(287328);
let a = new r.Z('ChannelReader');
class o {
    static getSync(e, t) {
        let n = performance.now(),
            r = i.Z.channels(e).getManySyncUnsafe(t),
            o = performance.now() - n;
        return a.log('synchronously loaded in '.concat(o, 'ms (guild: ').concat(t, ', channels: ').concat(r.length, ')')), [r, o];
    }
    static async getAsync(e, t) {
        let n = performance.now(),
            r = await i.Z.channels(e).getMany(t),
            o = performance.now() - n;
        return a.verbose('loaded in '.concat(o, 'ms (guild: ').concat(t, ', channels: ').concat(r.length, ')')), r;
    }
    static async getGuildIds() {
        try {
            var e;
            let t = i.Z.channels();
            if (null == t) return new Set();
            let n = (null != (e = await t.getGuildIds()) ? e : []).filter((e) => null !== e && 'string' == typeof e);
            return new Set(n);
        } catch (e) {
            return a.warn("couldn't get guild ids", e), new Set();
        }
    }
}
