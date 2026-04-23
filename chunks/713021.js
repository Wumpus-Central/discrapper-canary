"use strict";
n.d(t, { Ay: () => f, dx: () => u, k0: () => l });
var r,
    i = n(635377),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    l = (((r = {}).VOICE_MESSAGE = "voice_message"), r);
let u = (e, t) => `${e}-${t}`,
    c = { rates: { voice_message: 1 }, positions: new (s())({ max: 25 }) },
    d = { ...c };
class _ extends a.Ay.DeviceSettingsStore {
    static displayName = "MediaPlaybackStore";
    static persistKey = "MediaPlaybackStore";
    initialize(e) {
        let { positions: t, ...n } = e ?? {};
        (d = { ...c, ...n }), null != t && d.positions.load(t);
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
let f = new _(o.h, {
    MEDIA_PLAYBACK_RATE_UPDATE: function (e) {
        let { rate: t, playbackType: n } = e;
        d = { ...d, rates: { ...d.rates, [n]: t } };
    },
    MEDIA_PLAYBACK_POSITION_UPDATE: function (e) {
        let { cacheKey: t, position: n, duration: r } = e;
        n > 0.5 && n < 0.95 * r ? d.positions.set(t, n) : d.positions.del(t);
    },
});
