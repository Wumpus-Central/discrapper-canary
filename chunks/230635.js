l.d(t, { W: () => f });
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927),
    i = l(688810),
    o = l(601255),
    s = l(162232),
    u = l(562819),
    c = l(919395),
    d = l(71393),
    p = l(287809),
    m = l(84540),
    h = l(930349),
    x = l(985018);
function b(e) {
    let { user: t, guildId: l, avatarDecorationOverride: n } = e;
    return (0, a.jsx)(s.A, {
        user: t,
        guildId: l,
        avatarSize: r._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: n,
    });
}
function y(e) {
    let { user: t, guildId: l } = e,
        { analyticsLocations: r } = (0, i.Ay)(),
        s = (0, n.bG)([d.A], () => (null != l ? d.A.getGuild(l) : null)),
        p = null != l,
        y = (0, c.a4)({ user: t }),
        f = (0, c.a4)({ user: t, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: g } = (0, c.CP)(l ?? void 0),
        v = (0, o.A)((0, c.lw)({ userValue: y, guildValue: f, pendingValue: g, guildId: l })),
        E = void 0 !== g,
        _ = () => (0, u.L)({ analyticsLocations: r, guild: s ?? void 0, stackingBehavior: "stack" });
    if (null == v)
        return (0, a.jsx)(h.k, {
            variant: "square",
            onClick: _,
            accessibleLabel: x.intl.string(x.t.HykynS),
            children: (0, a.jsx)(b, { user: t, guildId: l, avatarDecorationOverride: E ? v : void 0 }),
        });
    let C = p && null != y,
        j = (E ? null != g : null != f)
            ? {
                  onClick: () => (0, m.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                  type: C ? "reset" : "remove",
                  accessibleLabel: x.intl.string(C ? x.t.GaEG4t : x.t["2A+piL"]),
              }
            : void 0;
    return (0, a.jsx)(h.N, {
        variant: "square",
        onClick: _,
        accessibleLabel: x.intl.string(x.t.HykynS),
        deleteButtonConfig: j,
        children: (0, a.jsx)(b, { user: t, guildId: l, avatarDecorationOverride: E ? v : void 0 }),
    });
}
function f(e) {
    let { guildId: t } = e,
        l = (0, n.bG)([p.default], () => p.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(y, { user: l, guildId: t });
}
