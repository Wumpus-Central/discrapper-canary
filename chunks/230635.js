l.d(t, { A: () => C });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(778712),
    o = l(97808),
    s = l(688810),
    d = l(601255),
    c = l(562819),
    u = l(713517),
    p = l(919395),
    m = l(71393),
    b = l(837921),
    h = l(84540),
    x = l(854627),
    y = l(930349),
    v = l(985018),
    g = l(209150);
let f = i._3.SIZE_72,
    _ = b.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function E(e) {
    let { user: t, guildId: l, avatarDecorationOverride: n, isEmpty: r, isHovered: i, disabled: o } = e,
        {
            avatarDecorationSrc: s,
            avatarSrc: d,
            avatarPlaceholderSrc: c,
            eventHandlers: u,
        } = (0, x.A)({
            userId: t.id,
            guildId: l,
            size: f,
            showPending: !0,
            avatarDecorationOverride: n,
            animateOnHover: !i,
        });
    return (0, a.jsx)(_, {
        className: r ? g.yT : void 0,
        src: i ? d : c,
        imageClassName: i && !o ? g.WG : void 0,
        avatarDecoration: s,
        size: f,
        "aria-hidden": !0,
        ...u,
    });
}
function C(e) {
    let { user: t, guildId: l, disabled: i } = e,
        { analyticsLocations: o } = (0, s.Ay)(),
        b = (0, r.bG)([m.A], () => (null != l ? m.A.getGuild(l) : null)),
        x = null != l,
        g = n.useRef(null),
        { isHoveringOrFocusing: f } = (0, u.A)(g),
        _ = (0, p.a4)({ user: t }),
        C = (0, p.a4)({ user: t, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: S } = (0, p.CP)(l ?? void 0),
        j = (0, d.A)((0, p.lw)({ userValue: _, guildValue: C, pendingValue: S, guildId: l })),
        T = void 0 !== S,
        P = () => (0, c.L)({ analyticsLocations: o, guild: b ?? void 0, stackingBehavior: "stack" }),
        I = x && null != _,
        A =
            null != j && (T ? null != S : null != C)
                ? {
                      onClick: () => (0, h.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: I ? "reset" : "remove",
                      accessibleLabel: v.intl.string(I ? v.t.pJsnPf : v.t["2U4Bga"]),
                  }
                : void 0,
        k = (0, a.jsx)(E, {
            user: t,
            guildId: l,
            avatarDecorationOverride: T ? j : void 0,
            isEmpty: null == j,
            isHovered: null != j && f,
            disabled: i,
        });
    return (0, a.jsx)("div", {
        ref: g,
        children:
            null == j
                ? (0, a.jsx)(y.kL, {
                      variant: "square",
                      onClick: P,
                      accessibleLabel: v.intl.string(v.t.HykynS),
                      disabled: i,
                      children: k,
                  })
                : (0, a.jsx)(y.NW, {
                      variant: "square",
                      onClick: P,
                      accessibleLabel: v.intl.string(v.t.HykynS),
                      deleteButtonConfig: A,
                      disabled: i,
                      children: k,
                  }),
    });
}
