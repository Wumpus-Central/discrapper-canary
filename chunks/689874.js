var l = t(477900),
    i = t(855986),
    s = t(866665),
    r = t(805251),
    o = t(176781),
    a = t(628983),
    c = t(644727),
    u = t(616356),
    d = t(734057),
    x = t(312809),
    g = t(419490),
    p = t(572164),
    h = t(88519),
    A = t(806931),
    f = t(792996),
    C = t(874566);
function j(e) {
    let { channelId: n } = e,
        { marketingEnabled: t } = x.A.useConfig({ location: "autoclips_ea:in_call_clips_chip" });
    return t ? (0, l.jsx)(h.A, { channelId: n }, `clips-in-call-chip-${n}`) : (0, l.jsx)(m, {});
}
function m() {
    return (0, l.jsx)(s.m, {
        text: f.intl.string(f.t.DJXW3G),
        children: (0, l.jsx)("div", {
            className: C.g,
            children: (0, l.jsx)(r.E, {
                type: { text: f.intl.string(f.t.pCMkDb) },
                variant: "secondary",
                icon: o.ClipsIcon,
            }),
        }),
    });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channelId: n } = e,
                t = (0, i.bG)([d.A], () => d.A.getChannel(n)?.isGuildStageVoice() ?? !1, [n]),
                s = (0, i.bG)([u.A, a.A, g.Ay, c.Ay], () => {
                    if (null == n) return !1;
                    let e = u.A.getCurrentUserActiveStream(),
                        t = c.Ay.getVisibleGame()?.windowHandle;
                    return (
                        (!!(0, p.T)() && (null != e || null != t)) ||
                        a.A.getParticipants(n).some(
                            (e) => e.type === A.lp.USER && g.Ay.isClipsEnabledForUser(e.user.id),
                        )
                    );
                }),
                r = (0, h.y)(n);
            return t ? null : r && null != n ? (0, l.jsx)(j, { channelId: n }) : s ? (0, l.jsx)(m, {}) : null;
        },
    },
);
