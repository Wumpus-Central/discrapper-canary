"use strict";
n.d(t, { Ay: () => m, dx: () => c, k0: () => o });
var l,
    i = n(635377),
    s = n.n(i),
    a = n(17928),
    r = n(228366),
    o = (((l = {}).VOICE_MESSAGE = "voice_message"), l);
let c = (e, t) => `${e}-${t}`,
    u = { rates: { voice_message: 1 }, positions: new (s())({ max: 25 }) },
    d = { ...u };
class h extends a.Ay.DeviceSettingsStore {
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
let m = new h(r.h, {
    MEDIA_PLAYBACK_RATE_UPDATE: function (e) {
        let { rate: t, playbackType: n } = e;
        d = { ...d, rates: { ...d.rates, [n]: t } };
    },
    MEDIA_PLAYBACK_POSITION_UPDATE: function (e) {
        let { cacheKey: t, position: n, duration: l } = e;
        n > 0.5 && n < 0.95 * l ? d.positions.set(t, n) : d.positions.del(t);
    },
});
