"use strict";
n.d(t, { A: () => s });
var r = n(626584),
    i = n(723176);
let a = new r.A("ChannelReader");
class s {
    static getSync(e, t) {
        let n = performance.now(),
            r = i.A.channels(e).getManySyncUnsafe(t),
            s = performance.now() - n;
        return a.log(`synchronously loaded in ${s}ms (guild: ${t}, channels: ${r.length})`), [r, s];
    }
    static async getAsync(e, t) {
        let n = performance.now(),
            r = await i.A.channels(e).getMany(t),
            s = performance.now() - n;
        return a.verbose(`loaded in ${s}ms (guild: ${t}, channels: ${r.length})`), r;
    }
    static async getGuildIds() {
        try {
            let e = i.A.channels();
            if (null == e) return new Set();
            let t = ((await e.getGuildIds()) ?? []).filter((e) => null !== e && "string" == typeof e);
            return new Set(t);
        } catch (e) {
            return a.warn("couldn't get guild ids", e), new Set();
        }
    }
}
