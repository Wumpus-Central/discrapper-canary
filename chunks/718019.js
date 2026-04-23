n.d(t, { A: () => O, V: () => L });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(311907),
    s = n(97808),
    d = n(935154),
    u = n(890856),
    _ = n(960076),
    c = n(793574),
    f = n(688810),
    A = n(178418),
    h = n(290863),
    p = n(927578),
    E = n(837921),
    T = n(183555),
    N = n(146655),
    S = n(854627),
    I = n(939496),
    m = n(518477),
    C = n(652215),
    g = n(788868),
    v = n(985253),
    x = n(985018),
    y = n(106106);
let b = E.Ay.getEnableHardwareAcceleration() ? s.Js : s.eu;
function L(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: l,
            channelId: r,
            themeType: a,
            animateOnHover: s,
            previewStatus: u,
            specOverrides: c,
            avatarDecorationOverride: f,
            avatarOverride: E,
        } = e,
        { theme: T } = (0, I.E)(),
        x = p.Ay.isPremiumAtLeast(n?.premiumType, g.PremiumTypes.TIER_2),
        y = i.useMemo(() => t.isNonUserBot() || (0, A.c)(t, r), [t, r]),
        { live: b } = (0, N.A)(t.id),
        [L] = b,
        {
            status: O,
            isMobileOnline: j,
            isVROnline: P,
        } = (0, o.cf)([h.A], () => ({
            status: (0, _.A)(L) ? C.clD.STREAMING : h.A.getStatus(t.id),
            isMobileOnline: h.A.isMobileOnline(t.id),
            isVROnline: h.A.isVROnline(t.id),
        })),
        R = c?.avatarSize ?? v.T[a].avatarSize,
        {
            avatarDecorationSrc: U,
            avatarSrc: G,
            eventHandlers: H,
        } = (0, S.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : l,
            size: R,
            animateOnHover: s,
            avatarDecorationOverride: f,
            avatarOverride: E,
        });
    return {
        avatarProps: {
            src: G,
            avatarDecoration: U,
            size: R,
            "aria-label": t.username,
            status: y ? C.clD.UNKNOWN : void 0 !== u ? u : O,
            statusBackdropColor: x && !y ? (0, d.C$)(T) : void 0,
            isMobile: j,
            isVR: P,
            statusTooltip: !0,
            statusTooltipDelay: m.In,
        },
        eventHandlers: H,
    };
}
function O(e) {
    let { onOpenProfile: t, className: n, ...i } = e,
        { analyticsLocations: r } = (0, f.Ay)(c.A.AVATAR),
        { trackUserProfileAction: o } = (0, T.NJ)(),
        { avatarProps: s, eventHandlers: d } = L(i),
        _ = a()(y.my, n);
    return null == t
        ? (0, l.jsx)("div", { ...d, className: _, children: (0, l.jsx)(b, { ...s }) })
        : (0, l.jsx)(u.s, {
              "aria-label": x.intl.string(x.t["+Xp3hq"]),
              ...d,
              className: a()(_, y.vk),
              focusProps: { ringClassName: y.Rg },
              onClick: () => {
                  o({ action: "PRESS_VIEW_PROFILE", analyticsLocations: r }), t?.();
              },
              children: (0, l.jsx)(b, { ...s, imageClassName: y.Lw }),
          });
}
