t.d(i, { A: () => T, V: () => C });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    r = t.n(s),
    a = t(17928),
    u = t(97808),
    o = t(935154),
    d = t(890856),
    A = t(960076),
    c = t(793574),
    h = t(688810),
    p = t(178418),
    g = t(290863),
    m = t(158045),
    f = t(19575),
    v = t(183555),
    I = t(146655),
    M = t(854627),
    R = t(939496),
    b = t(305385),
    y = t(518477),
    E = t(652215),
    w = t(202541),
    N = t(375708),
    V = t(329801);
let O = f.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function C(e) {
    let {
            user: i,
            displayProfile: t,
            guildId: n,
            channelId: s,
            avatarSize: r,
            animateOnHover: u,
            previewStatus: d,
            avatarDecorationOverride: c,
            avatarOverride: h,
        } = e,
        { theme: f } = (0, R.E)(),
        v = m.Ay.isPremiumAtLeast(t?.premiumType, w.PremiumTypes.TIER_2),
        b = l.useMemo(() => i.isNonUserBot() || (0, p.c)(i, s), [i, s]),
        { live: N } = (0, I.A)(i.id),
        [V] = N,
        {
            status: O,
            isMobileOnline: C,
            isVROnline: T,
        } = (0, a.cf)([g.A], () => ({
            status: (0, A.A)(V) ? E.clD.STREAMING : g.A.getStatus(i.id),
            isMobileOnline: g.A.isMobileOnline(i.id),
            isVROnline: g.A.isVROnline(i.id),
        })),
        {
            avatarDecorationSrc: P,
            avatarSrc: _,
            eventHandlers: k,
            isAnimating: x,
        } = (0, M.A)({
            userId: i.id,
            guildId: null != t ? t.guildId : n,
            size: r,
            animateOnHover: u,
            avatarDecorationOverride: c,
            avatarOverride: h,
        });
    return {
        avatarProps: {
            src: _,
            avatarDecoration: P,
            size: r,
            "aria-label": i.username,
            status: b ? E.clD.UNKNOWN : void 0 !== d ? d : O,
            statusBackdropColor: v && !b ? (0, o.C$)(f) : void 0,
            isMobile: C,
            isVR: T,
            statusTooltip: !0,
            statusTooltipDelay: y.In,
        },
        eventHandlers: k,
        isAnimating: x,
    };
}
function T(e) {
    let { onOpenProfile: i, onOpenAvatar: t, className: l, imageAnimatingClassName: s, ...a } = e,
        { analyticsLocations: u } = (0, h.Ay)(c.A.AVATAR),
        { trackUserProfileAction: o } = (0, v.NJ)(),
        { avatarProps: A, eventHandlers: p, isAnimating: g } = C(a),
        m = r()(V.my, l),
        f = a.displayProfile?.guildId ?? a.guildId,
        I = null != a.user.avatar || a.user.hasAvatarForGuild(f) ? t : void 0;
    return null == i && null == I
        ? (0, n.jsx)("div", { ...p, className: m, children: (0, n.jsx)(O, { ...A, imageClassName: g ? s : void 0 }) })
        : (0, n.jsx)(d.s, {
              "aria-label": N.intl.string(null != I ? N.t.xB7MI3 : N.t["+Xp3hq"]),
              ...p,
              onMouseEnter: function () {
                  (p.onMouseEnter(), null != I && (0, b.V)({ user: a.user, guildId: f }));
              },
              className: r()(m, V.vk),
              focusProps: { ringClassName: V.Rg },
              onClick: () => {
                  if (null != I) {
                      (o({ action: y.pt.VIEW_AVATAR, analyticsLocations: u }), I());
                      return;
                  }
                  (o({ action: y.pt.PRESS_VIEW_PROFILE, analyticsLocations: u }), i?.());
              },
              children: (0, n.jsx)(O, { ...A, imageClassName: r()(V.Lw, g && s) }),
          });
}
