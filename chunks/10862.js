var e = n(477900);
n(582128);
var a = n(855986),
    i = n(978940),
    o = n(808107),
    r = n(451394),
    s = n(512474),
    u = n(146151),
    c = n(983851),
    p = n(148719),
    d = n(576705),
    A = n(818348);
n.d(
    l,
    {},
    {
        A: function (t) {
            let { channel: l, ...n } = t,
                m = (0, a.bG)([d.A], () => l.isPrivate() || d.A.can(A.xB.CONNECT, l));
            if (l.isDM() || l.isGroupDM()) return (0, e.jsx)(i.PhoneCallIcon, { ...n });
            let x = l.isGuildStageVoice(),
                I = !m || (0, p.A)(l);
            return x && I
                ? (0, e.jsx)(o.StageLockIcon, { ...n })
                : x
                  ? (0, e.jsx)(r.StageIcon, { ...n })
                  : l.isNSFW()
                    ? (0, e.jsx)(s.VoiceWarningIcon, { ...n })
                    : I
                      ? (0, e.jsx)(u.VoiceLockIcon, { ...n })
                      : (0, e.jsx)(c.VoiceNormalIcon, { ...n });
        },
    },
);
