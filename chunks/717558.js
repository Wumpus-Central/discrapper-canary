"use strict";
n.d(t, { A: () => l, R: () => d });
var i = n(17928),
    r = n(209932),
    s = n(309010),
    a = n(485296),
    o = n(977997);
function l(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: l = !0, checkIsMuted: d = !1, context: _ } = e,
        u = (0, i.bG)([o.A, s.A], () => {
            let e = s.A.getVoiceChannelId();
            return null != e ? o.A.getVoiceStateForChannel(e, t) : null;
        }),
        c = d && (u?.mute || u?.selfMute),
        E = (0, i.bG)([a.A], () => a.A.isSpeaking(t, _) && !c),
        h = (0, i.bG)([a.A], () => a.A.isSoundSharing(t) && n),
        m = (0, i.bG)([r.A], () => r.A.isUserPlayingSounds(t) && l);
    return E || m || h;
}
function d(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: i = !0, checkIsMuted: l = !1, context: d } = e,
        [_, u, c, E] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A, s.A, a.A, r.A],
        h = u.getVoiceChannelId(),
        m = null != h ? _.getVoiceStateForChannel(h, t) : null,
        f = l && (m?.mute || m?.selfMute),
        g = c.isSpeaking(t, d) && !f,
        p = c.isSoundSharing(t) && n,
        A = E.isUserPlayingSounds(t) && i;
    return g || A || p;
}
