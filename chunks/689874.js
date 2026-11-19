var l = t(477900),
    i = t(855986),
    s = t(866665),
    r = t(805251),
    o = t(176781),
    a = t(628983),
    c = t(644727),
    u = t(616356),
    d = t(734057),
    x = t(419490),
    g = t(424739),
    h = t(572164),
    p = t(88519),
    f = t(806931),
    j = t(792996),
    m = t(874566);
function A(e) {
    let { channelId: n } = e;
    return (0, g.H)("ClipsEnabledIndicator")
        ? (0, l.jsx)(p.A, { channelId: n }, `clips-in-call-chip-${n}`)
        : (0, l.jsx)(C, {});
}
function C() {
    return (0, l.jsx)(s.m, {
        text: j.intl.string(j.t.DJXW3G),
        children: (0, l.jsx)("div", {
            className: m.g,
            children: (0, l.jsx)(r.E, {
                type: { text: j.intl.string(j.t.pCMkDb) },
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
                s = (0, i.bG)([u.A, a.A, x.Ay, c.Ay], () => {
                    if (null == n) return !1;
                    let e = u.A.getCurrentUserActiveStream(),
                        t = c.Ay.getVisibleGame()?.windowHandle;
                    return (
                        (!!(0, h.T)() && (null != e || null != t)) ||
                        a.A.getParticipants(n).some(
                            (e) => e.type === f.lp.USER && x.Ay.isClipsEnabledForUser(e.user.id),
                        )
                    );
                }),
                r = (0, p.y)(n);
            return t ? null : r && null != n ? (0, l.jsx)(A, { channelId: n }) : s ? (0, l.jsx)(C, {}) : null;
        },
    },
);
