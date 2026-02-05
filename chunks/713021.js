"use strict";
n.d(t, { Ay: () => h, dx: () => l, k0: () => o });
var r = n(635377),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = (function (e) {
        return (e.VOICE_MESSAGE = "voice_message"), e;
    })({});
let l = (e, t) => `${e}-${t}`,
    u = 25,
    c = { rates: { voice_message: 1 }, positions: new (i())({ max: u }) },
    d = { ...c };
function _(e) {
    let { rate: t, playbackType: n } = e;
    d = { ...d, rates: { ...d.rates, [n]: t } };
}
function f(e) {
    let { cacheKey: t, position: n, duration: r } = e;
    n > 0.5 && n < 0.95 * r ? d.positions.set(t, n) : d.positions.del(t);
}
class p extends a.Ay.DeviceSettingsStore {
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
let h = new p(s.h, { MEDIA_PLAYBACK_RATE_UPDATE: _, MEDIA_PLAYBACK_POSITION_UPDATE: f });
