l.d(t, { W: () => g });
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927),
    i = l(688810),
    o = l(601255),
    s = l(162232),
    d = l(562819),
    c = l(919395),
    u = l(71393),
    p = l(287809),
    m = l(84540),
    h = l(930349),
    x = l(985018),
    b = l(987118);
function y(e) {
    let { user: t, guildId: l, avatarDecorationOverride: n, isEmpty: i } = e;
    return (0, a.jsx)(s.A, {
        className: i ? b.y : void 0,
        user: t,
        guildId: l,
        avatarSize: r._3J.SIZE_56,
        "aria-hidden": !0,
        avatarDecorationOverride: n,
    });
}
function f(e) {
    let { user: t, guildId: l } = e,
        { analyticsLocations: r } = (0, i.Ay)(),
        s = (0, n.bG)([u.A], () => (null != l ? u.A.getGuild(l) : null)),
        p = null != l,
        b = (0, c.a4)({ user: t }),
        f = (0, c.a4)({ user: t, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: g } = (0, c.CP)(l ?? void 0),
        v = (0, o.A)((0, c.lw)({ userValue: b, guildValue: f, pendingValue: g, guildId: l })),
        _ = void 0 !== g,
        E = () => (0, d.L)({ analyticsLocations: r, guild: s ?? void 0, stackingBehavior: "stack" });
    if (null == v)
        return (0, a.jsx)(h.kL, {
            variant: "square",
            onClick: E,
            accessibleLabel: x.intl.string(x.t.HykynS),
            children: (0, a.jsx)(y, { isEmpty: !0, user: t, guildId: l, avatarDecorationOverride: _ ? v : void 0 }),
        });
    let C = p && null != b,
        j = (_ ? null != g : null != f)
            ? {
                  onClick: () => (0, m.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                  type: C ? "reset" : "remove",
                  accessibleLabel: x.intl.string(C ? x.t.pJsnPf : x.t["2U4Bga"]),
              }
            : void 0;
    return (0, a.jsx)(h.NW, {
        variant: "square",
        onClick: E,
        accessibleLabel: x.intl.string(x.t.HykynS),
        deleteButtonConfig: j,
        children: (0, a.jsx)(y, { user: t, guildId: l, avatarDecorationOverride: _ ? v : void 0 }),
    });
}
function g(e) {
    let { guildId: t } = e,
        l = (0, n.bG)([p.default], () => p.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(f, { user: l, guildId: t });
}
