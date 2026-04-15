l.d(t, { A: () => E });
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
let g = i._3J.SIZE_72,
    v = m.Ay.getEnableHardwareAcceleration() ? i.JsQ : i.euF;
function _(e) {
    let { user: t, guildId: l, avatarDecorationOverride: n, isEmpty: r, isHovered: i, disabled: o } = e,
        {
            avatarDecorationSrc: s,
            avatarSrc: d,
            avatarPlaceholderSrc: c,
            eventHandlers: u,
        } = (0, x.A)({
            userId: t.id,
            guildId: l,
            size: g,
            showPending: !0,
            avatarDecorationOverride: n,
            animateOnHover: !i,
        });
    return (0, a.jsx)(v, {
        className: r ? f.yT : void 0,
        src: i ? d : c,
        imageClassName: i && !o ? f.WG : void 0,
        avatarDecoration: s,
        size: g,
        "aria-hidden": !0,
        ...u,
    });
}
function E(e) {
    let { user: t, guildId: l, disabled: i } = e,
        { analyticsLocations: m } = (0, o.Ay)(),
        x = (0, r.bG)([p.A], () => (null != l ? p.A.getGuild(l) : null)),
        f = null != l,
        g = n.useRef(null),
        { isHoveringOrFocusing: v } = (0, c.A)(g),
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
        I = (0, a.jsx)(_, {
            user: t,
            guildId: l,
            avatarDecorationOverride: T ? S : void 0,
            isEmpty: null == S,
            isHovered: null != S && v,
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
