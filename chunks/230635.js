l.d(t, { W: () => y });
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927),
    i = l(688810),
    o = l(162232),
    s = l(562819),
    u = l(919395),
    c = l(71393),
    d = l(287809),
    p = l(84540),
    m = l(930349),
    h = l(985018);
function x(e) {
    let { user: t, guildId: l } = e;
    return (0, a.jsx)(o.A, { user: t, guildId: l, avatarSize: r._3J.SIZE_56, "aria-hidden": !0 });
}
function b(e) {
    let { user: t, guildId: l } = e,
        { analyticsLocations: r } = (0, i.Ay)(),
        o = (0, n.bG)([c.A], () => (null != l ? c.A.getGuild(l) : null)),
        d = (0, u.a4)({ user: t }),
        b = (0, u.a4)({ user: t, guildId: l ?? void 0 }),
        y = null != l,
        f = () => (0, s.L)({ analyticsLocations: r, guild: o ?? void 0 });
    if (null == (b ?? (y ? d : null)))
        return (0, a.jsx)(m.k, {
            variant: "square",
            onClick: f,
            accessibleLabel: h.intl.string(h.t.HykynS),
            children: (0, a.jsx)(x, { user: t, guildId: l }),
        });
    let g = y && null != d,
        v =
            null != b
                ? {
                      onClick: () => (0, p.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: g ? "reset" : "remove",
                      accessibleLabel: h.intl.string(g ? h.t.GaEG4t : h.t["2A+piL"]),
                  }
                : void 0;
    return (0, a.jsx)(m.N, {
        variant: "square",
        onClick: f,
        accessibleLabel: h.intl.string(h.t.HykynS),
        deleteButtonConfig: v,
        children: (0, a.jsx)(x, { user: t, guildId: l }),
    });
}
function y(e) {
    let { guildId: t } = e,
        l = (0, n.bG)([d.default], () => d.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(b, { user: l, guildId: t });
}
