l.d(t, { W: () => C });
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
    m = l(287809),
    h = l(837921),
    x = l(84540),
    b = l(854627),
    y = l(930349),
    f = l(985018),
    g = l(987118);
let v = h.Ay.getEnableHardwareAcceleration() ? i.JsQ : i.euF;
function _(e) {
    let { user: t, guildId: l, avatarDecorationOverride: n, isEmpty: r, isHovered: o } = e,
        {
            avatarDecorationSrc: s,
            avatarSrc: d,
            avatarPlaceholderSrc: c,
            eventHandlers: u,
        } = (0, b.A)({
            userId: t.id,
            guildId: l,
            size: i._3J.SIZE_56,
            showPending: !0,
            avatarDecorationOverride: n,
            animateOnHover: !o,
        });
    return (0, a.jsx)(v, {
        className: r ? g.yT : void 0,
        src: o ? d : c,
        imageClassName: o ? g.WG : void 0,
        avatarDecoration: s,
        size: i._3J.SIZE_56,
        "aria-hidden": !0,
        ...u,
    });
}
function E(e) {
    let { user: t, guildId: l } = e,
        { analyticsLocations: i } = (0, o.Ay)(),
        m = (0, r.bG)([p.A], () => (null != l ? p.A.getGuild(l) : null)),
        h = null != l,
        b = n.useRef(null),
        { isHoveringOrFocusing: g } = (0, c.A)(b),
        v = (0, u.a4)({ user: t }),
        E = (0, u.a4)({ user: t, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: C } = (0, u.CP)(l ?? void 0),
        j = (0, s.A)((0, u.lw)({ userValue: v, guildValue: E, pendingValue: C, guildId: l })),
        S = void 0 !== C,
        T = () => (0, d.L)({ analyticsLocations: i, guild: m ?? void 0, stackingBehavior: "stack" }),
        A = h && null != v,
        P =
            null != j && (S ? null != C : null != E)
                ? {
                      onClick: () => (0, x.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: f.intl.string(A ? f.t.pJsnPf : f.t["2U4Bga"]),
                  }
                : void 0,
        k = (0, a.jsx)(_, {
            user: t,
            guildId: l,
            avatarDecorationOverride: S ? j : void 0,
            isEmpty: null == j,
            isHovered: null != j && g,
        });
    return (0, a.jsx)("div", {
        ref: b,
        children:
            null == j
                ? (0, a.jsx)(y.kL, {
                      variant: "square",
                      onClick: T,
                      accessibleLabel: f.intl.string(f.t.HykynS),
                      children: k,
                  })
                : (0, a.jsx)(y.NW, {
                      variant: "square",
                      onClick: T,
                      accessibleLabel: f.intl.string(f.t.HykynS),
                      deleteButtonConfig: P,
                      children: k,
                  }),
    });
}
function C(e) {
    let { guildId: t } = e,
        l = (0, r.bG)([m.default], () => m.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(E, { user: l, guildId: t });
}
