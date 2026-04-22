"use strict";
n.d(t, { Ay: () => m, dx: () => c, k0: () => o });
var i,
    l = n(635377),
    s = n.n(l),
    r = n(311907),
    a = n(73153),
    o = (((i = {}).VOICE_MESSAGE = "voice_message"), i);
let c = (e, t) => `${e}-${t}`,
    u = { rates: { voice_message: 1 }, positions: new (s())({ max: 25 }) },
    d = { ...u };
class h extends r.Ay.DeviceSettingsStore {
    static displayName = "MediaPlaybackStore";
    static persistKey = "MediaPlaybackStore";
    initialize(e) {
        let { positions: t, ...n } = e ?? {};
        (d = { ...u, ...n }), null != t && d.positions.load(t);
    }
    getUserAgnosticState() {
        return { rates: d.rates, positions: d.positions.dump() };
    }
    getPlaybackRate(e) {
        return d.rates[e] ?? 1;
    }
    getPlaybackPosition(e) {
        return d.positions.get(e) ?? 0;
    }
}
let m = new h(a.h, {
    MEDIA_PLAYBACK_RATE_UPDATE: function (e) {
        let { rate: t, playbackType: n } = e;
        d = { ...d, rates: { ...d.rates, [n]: t } };
    },
    MEDIA_PLAYBACK_POSITION_UPDATE: function (e) {
        let { cacheKey: t, position: n, duration: i } = e;
        n > 0.5 && n < 0.95 * i ? d.positions.set(t, n) : d.positions.del(t);
    },
});
