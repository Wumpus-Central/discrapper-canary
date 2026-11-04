var i = n(855986),
    r = n(209932),
    a = n(309010),
    s = n(485296),
    l = n(977997);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { userId: t, checkSoundSharing: n = !1, checkIsMuted: r = !1, context: o } = e,
                d = (0, i.bG)([l.A, a.Ay], () => {
                    let e = a.Ay.getVoiceChannelId();
                    return null != e ? l.A.getVoiceStateForChannel(e, t) : null;
                }),
                c = r && (d?.mute || d?.selfMute),
                u = (0, i.bG)([s.A], () => s.A.isSpeaking(t, o) && !c),
                _ = (0, i.bG)([s.A], () => s.A.isSoundSharing(t) && n);
            return u || _;
        },
        R: function (e) {
            let { userId: t, checkSoundSharing: n = !1, checkIsMuted: i = !1, context: o } = e,
                [d, c, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A, a.Ay, s.A, r.A],
                _ = c.getVoiceChannelId(),
                E = null != _ ? d.getVoiceStateForChannel(_, t) : null,
                A = i && (E?.mute || E?.selfMute),
                h = u.isSpeaking(t, o) && !A,
                f = u.isSoundSharing(t) && n;
            return h || f;
        },
    },
);
