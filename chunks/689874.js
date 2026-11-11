var l = t(477900),
    s = t(855986),
    i = t(866665),
    r = t(805251),
    o = t(176781),
    a = t(628983),
    c = t(644727),
    u = t(616356),
    d = t(419490),
    x = t(898105),
    g = t(572164),
    h = t(88519),
    p = t(806931),
    f = t(792996),
    j = t(874566);
function m(e) {
    let { channelId: n } = e,
        { enabled: t } = (0, x.r)("ClipsEnabledIndicator");
    return t ? (0, l.jsx)(h.A, { channelId: n }, `clips-in-call-chip-${n}`) : (0, l.jsx)(A, {});
}
function A() {
    return (0, l.jsx)(i.m, {
        text: f.intl.string(f.t.DJXW3G),
        children: (0, l.jsx)("div", {
            className: j.g,
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
                t = (0, s.bG)([u.A, a.A, d.Ay, c.Ay], () => {
                    if (null == n) return !1;
                    let e = u.A.getCurrentUserActiveStream(),
                        t = c.Ay.getVisibleGame()?.windowHandle;
                    return (
                        (!!(0, g.T)() && (null != e || null != t)) ||
                        a.A.getParticipants(n).some(
                            (e) => e.type === p.lp.USER && d.Ay.isClipsEnabledForUser(e.user.id),
                        )
                    );
                });
            return (0, h.y)(n) && null != n ? (0, l.jsx)(m, { channelId: n }) : t ? (0, l.jsx)(A, {}) : null;
        },
    },
);
