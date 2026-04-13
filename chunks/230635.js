l.d(t, { A: () => _ });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(397927),
    o = l(688810),
    s = l(601255),
    d = l(562819),
    c = l(713517),
    u = l(919395),
    p = l(71393),
    m = l(837921),
    h = l(84540),
    x = l(854627),
    b = l(930349),
    y = l(985018),
    f = l(987118);
let g = m.Ay.getEnableHardwareAcceleration() ? i.JsQ : i.euF;
function v(e) {
    let { user: t, guildId: l, avatarDecorationOverride: n, isEmpty: r, isHovered: o, disabled: s } = e,
        {
            avatarDecorationSrc: d,
            avatarSrc: c,
            avatarPlaceholderSrc: u,
            eventHandlers: p,
        } = (0, x.A)({
            userId: t.id,
            guildId: l,
            size: i._3J.SIZE_56,
            showPending: !0,
            avatarDecorationOverride: n,
            animateOnHover: !o,
        });
    return (0, a.jsx)(g, {
        className: r ? f.yT : void 0,
        src: o ? c : u,
        imageClassName: o && !s ? f.WG : void 0,
        avatarDecoration: d,
        size: i._3J.SIZE_56,
        "aria-hidden": !0,
        ...p,
    });
}
function _(e) {
    let { user: t, guildId: l, disabled: i } = e,
        { analyticsLocations: m } = (0, o.Ay)(),
        x = (0, r.bG)([p.A], () => (null != l ? p.A.getGuild(l) : null)),
        f = null != l,
        g = n.useRef(null),
        { isHoveringOrFocusing: _ } = (0, c.A)(g),
        E = (0, u.a4)({ user: t }),
        C = (0, u.a4)({ user: t, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: j } = (0, u.CP)(l ?? void 0),
        S = (0, s.A)((0, u.lw)({ userValue: E, guildValue: C, pendingValue: j, guildId: l })),
        T = void 0 !== j,
        A = () => (0, d.L)({ analyticsLocations: m, guild: x ?? void 0, stackingBehavior: "stack" }),
        P = f && null != E,
        k =
            null != S && (T ? null != j : null != C)
                ? {
                      onClick: () => (0, h.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: P ? "reset" : "remove",
                      accessibleLabel: y.intl.string(P ? y.t.pJsnPf : y.t["2U4Bga"]),
                  }
                : void 0,
        I = (0, a.jsx)(v, {
            user: t,
            guildId: l,
            avatarDecorationOverride: T ? S : void 0,
            isEmpty: null == S,
            isHovered: null != S && _,
            disabled: i,
        });
    return (0, a.jsx)("div", {
        ref: g,
        children:
            null == S
                ? (0, a.jsx)(b.kL, {
                      variant: "square",
                      onClick: A,
                      accessibleLabel: y.intl.string(y.t.HykynS),
                      disabled: i,
                      children: I,
                  })
                : (0, a.jsx)(b.NW, {
                      variant: "square",
                      onClick: A,
                      accessibleLabel: y.intl.string(y.t.HykynS),
                      deleteButtonConfig: k,
                      disabled: i,
                      children: I,
                  }),
    });
}
