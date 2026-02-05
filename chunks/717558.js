"use strict";
n.d(t, { A: () => u, R: () => c });
var r = n(311907),
    i = n(209932),
    a = n(309010),
    s = n(485296),
    o = n(977997);
function l(e, t, n) {
    return e || t || n;
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: u = !0, checkIsMuted: c = !1, context: d } = e,
        _ = (0, r.bG)([o.A, a.A], () => {
            let e = a.A.getVoiceChannelId();
            return null != e ? o.A.getVoiceStateForChannel(e, t) : null;
        }),
        f = c && (_?.mute || _?.selfMute),
        p = (0, r.bG)([s.A], () => s.A.isSpeaking(t, d) && !f),
        h = (0, r.bG)([s.A], () => s.A.isSoundSharing(t) && n);
    return l(
        p,
        (0, r.bG)([i.A], () => i.A.isUserPlayingSounds(t) && u),
        h,
    );
}
function c(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: r = !0, checkIsMuted: u = !1, context: c } = e,
        [d, _, f, p] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A, a.A, s.A, i.A],
        h = _.getVoiceChannelId(),
        m = null != h ? d.getVoiceStateForChannel(h, t) : null,
        g = u && (m?.mute || m?.selfMute),
        E = f.isSpeaking(t, c) && !g,
        A = f.isSoundSharing(t) && n;
    return l(E, p.isUserPlayingSounds(t) && r, A);
}
