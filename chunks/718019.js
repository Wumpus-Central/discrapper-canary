l.d(t, { A: () => x, V: () => C });
var n = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    s = l(17928),
    u = l(97808),
    o = l(133171),
    d = l(890856),
    c = l(960076),
    A = l(793574),
    _ = l(688810),
    T = l(178418),
    h = l(290863),
    g = l(927578),
    E = l(19575),
    O = l(183555),
    m = l(146655),
    N = l(854627),
    S = l(939496),
    p = l(518477),
    I = l(652215),
    b = l(788868),
    D = l(985253),
    f = l(985018),
    R = l(106106);
let v = E.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function C(e) {
    let {
            user: t,
            displayProfile: l,
            guildId: n,
            channelId: r,
            themeType: a,
            animateOnHover: u,
            previewStatus: d,
            specOverrides: A,
            avatarDecorationOverride: _,
            avatarOverride: E,
        } = e,
        { theme: O } = (0, S.E)(),
        f = g.Ay.isPremiumAtLeast(l?.premiumType, b.PremiumTypes.TIER_2),
        R = i.useMemo(() => t.isNonUserBot() || (0, T.c)(t, r), [t, r]),
        { live: v } = (0, m.A)(t.id),
        [C] = v,
        {
            status: x,
            isMobileOnline: M,
            isVROnline: y,
        } = (0, s.cf)([h.A], () => ({
            status: (0, c.A)(C) ? I.clD.STREAMING : h.A.getStatus(t.id),
            isMobileOnline: h.A.isMobileOnline(t.id),
            isVROnline: h.A.isVROnline(t.id),
        })),
        U = A?.avatarSize ?? D.T[a].avatarSize,
        {
            avatarDecorationSrc: L,
            avatarSrc: j,
            eventHandlers: H,
        } = (0, N.A)({
            userId: t.id,
            guildId: null != l ? l.guildId : n,
            size: U,
            animateOnHover: u,
            avatarDecorationOverride: _,
            avatarOverride: E,
        });
    return {
        avatarProps: {
            src: j,
            avatarDecoration: L,
            size: U,
            "aria-label": t.username,
            status: R ? I.clD.UNKNOWN : void 0 !== d ? d : x,
            statusBackdropColor: f && !R ? (0, o.C$)(O) : void 0,
            isMobile: M,
            isVR: y,
            statusTooltip: !0,
            statusTooltipDelay: p.In,
        },
        eventHandlers: H,
    };
}
function x(e) {
    let { onOpenProfile: t, className: l, ...i } = e,
        { analyticsLocations: r } = (0, _.Ay)(A.A.AVATAR),
        { trackUserProfileAction: s } = (0, O.NJ)(),
        { avatarProps: u, eventHandlers: o } = C(i),
        c = a()(R.my, l);
    return null == t
        ? (0, n.jsx)("div", { ...o, className: c, children: (0, n.jsx)(v, { ...u }) })
        : (0, n.jsx)(d.s, {
              "aria-label": f.intl.string(f.t["+Xp3hq"]),
              ...o,
              className: a()(c, R.vk),
              focusProps: { ringClassName: R.Rg },
              onClick: () => {
                  s({ action: "PRESS_VIEW_PROFILE", analyticsLocations: r }), t?.();
              },
              children: (0, n.jsx)(v, { ...u, imageClassName: R.Lw }),
          });
}
