n.d(t, { Z: () => s }), n(47120);
var i = n(710845),
    r = n(287328);
let a = new i.Z('ChannelReader');
class s {
    static getSync(e, t) {
        let n = performance.now(),
            i = r.Z.channels(e).getManySyncUnsafe(t),
            s = performance.now() - n;
        return a.log('synchronously loaded in '.concat(s, 'ms (guild: ').concat(t, ', channels: ').concat(i.length, ')')), [i, s];
    }
    static async getAsync(e, t) {
        let n = performance.now(),
            i = await r.Z.channels(e).getMany(t),
            s = performance.now() - n;
        return a.verbose('loaded in '.concat(s, 'ms (guild: ').concat(t, ', channels: ').concat(i.length, ')')), i;
    }
    static async getGuildIds() {
        try {
            var e;
            let t = r.Z.channels();
            if (null == t) return new Set();
            let n = (null !== (e = await t.getGuildIds()) && void 0 !== e ? e : []).filter((e) => null !== e && 'string' == typeof e);
            return new Set(n);
        } catch (e) {
            return a.warn("couldn't get guild ids", e), new Set();
        }
    }
}
