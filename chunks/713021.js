"use strict";
n.d(t, { Ay: () => E, dx: () => d, k0: () => l });
var i,
    r = n(635377),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = (((i = {}).VOICE_MESSAGE = "voice_message"), i);
let d = (e, t) => `${e}-${t}`,
    _ = { rates: { voice_message: 1 }, positions: new (s())({ max: 25 }) },
    u = { ..._ };
class c extends a.Ay.DeviceSettingsStore {
    static displayName = "MediaPlaybackStore";
    static persistKey = "MediaPlaybackStore";
    initialize(e) {
        let { positions: t, ...n } = e ?? {};
        (u = { ..._, ...n }), null != t && u.positions.load(t);
    }
    getUserAgnosticState() {
        return { rates: u.rates, positions: u.positions.dump() };
    }
    getPlaybackRate(e) {
        return u.rates[e] ?? 1;
    }
    getPlaybackPosition(e) {
        return u.positions.get(e) ?? 0;
    }
}
let E = new c(o.h, {
    MEDIA_PLAYBACK_RATE_UPDATE: function (e) {
        let { rate: t, playbackType: n } = e;
        u = { ...u, rates: { ...u.rates, [n]: t } };
    },
    MEDIA_PLAYBACK_POSITION_UPDATE: function (e) {
        let { cacheKey: t, position: n, duration: i } = e;
        n > 0.5 && n < 0.95 * i ? u.positions.set(t, n) : u.positions.del(t);
    },
});
