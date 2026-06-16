"use strict";
n.d(t, { A: () => l, R: () => u });
var i = n(17928),
    r = n(209932),
    s = n(309010),
    a = n(485296),
    o = n(977997);
function l(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: l = !0, checkIsMuted: u = !1, context: c } = e,
        d = (0, i.bG)([o.A, s.A], () => {
            let e = s.A.getVoiceChannelId();
            return null != e ? o.A.getVoiceStateForChannel(e, t) : null;
        }),
        _ = u && (d?.mute || d?.selfMute),
        h = (0, i.bG)([a.A], () => a.A.isSpeaking(t, c) && !_),
        f = (0, i.bG)([a.A], () => a.A.isSoundSharing(t) && n),
        p = (0, i.bG)([r.A], () => r.A.isUserPlayingSounds(t) && l);
    return h || p || f;
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: i = !0, checkIsMuted: l = !1, context: u } = e,
        [c, d, _, h] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A, s.A, a.A, r.A],
        f = d.getVoiceChannelId(),
        p = null != f ? c.getVoiceStateForChannel(f, t) : null,
        E = l && (p?.mute || p?.selfMute),
        m = _.isSpeaking(t, u) && !E,
        g = _.isSoundSharing(t) && n,
        A = h.isUserPlayingSounds(t) && i;
    return m || A || g;
}
