var n = t(477900),
    l = t(582128),
    s = t(503698),
    r = t.n(s),
    a = t(855986),
    u = t(97808),
    o = t(935154),
    d = t(890856),
    c = t(960076),
    A = t(793574),
    h = t(688810),
    p = t(178418),
    g = t(290863),
    m = t(448645),
    v = t(253400),
    f = t(183555),
    M = t(146655),
    R = t(854627),
    b = t(939496),
    I = t(305385),
    y = t(518477),
    E = t(652215),
    w = t(682901),
    N = t(792996),
    V = t(329801);
let O = v.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function C(e) {
    let {
            user: i,
            displayProfile: t,
            guildId: n,
            channelId: s,
            avatarSize: r,
            animateOnHover: u,
            previewStatus: d,
            avatarDecorationOverride: A,
            avatarOverride: h,
        } = e,
        { theme: v } = (0, b.E)(),
        f = m.Ay.isPremiumAtLeast(t?.premiumType, w.PremiumTypes.TIER_2),
        I = l.useMemo(() => i.isNonUserBot() || (0, p.c)(i, s), [i, s]),
        { live: y } = (0, M.A)(i.id),
        [N] = y,
        {
            status: V,
            isMobileOnline: O,
            isVROnline: C,
        } = (0, a.cf)([g.A], () => ({
            status: (0, c.A)(N) ? E.clD.STREAMING : g.A.getStatus(i.id),
            isMobileOnline: g.A.isMobileOnline(i.id),
            isVROnline: g.A.isVROnline(i.id),
        })),
        {
            avatarDecorationSrc: T,
            avatarSrc: P,
            eventHandlers: _,
            isAnimating: k,
        } = (0, R.A)({
            userId: i.id,
            guildId: null != t ? t.guildId : n,
            size: r,
            animateOnHover: u,
            avatarDecorationOverride: A,
            avatarOverride: h,
        });
    return {
        avatarProps: {
            src: P,
            avatarDecoration: T,
            size: r,
            "aria-label": i.username,
            status: I ? E.clD.UNKNOWN : void 0 !== d ? d : V,
            statusBackdropColor: f && !I ? (0, o.C$)(v) : void 0,
            isMobile: O,
            isVR: C,
            statusTooltip: !0,
            statusTooltipDelay: 300,
        },
        eventHandlers: _,
        isAnimating: k,
    };
}
t.d(
    i,
    {},
    {
        A: function (e) {
            let { onOpenProfile: i, onOpenAvatar: t, className: l, imageAnimatingClassName: s, ...a } = e,
                { analyticsLocations: u } = (0, h.Ay)(A.A.AVATAR),
                { trackUserProfileAction: o } = (0, f.NJ)(),
                { avatarProps: c, eventHandlers: p, isAnimating: g } = C(a),
                m = r()(V.my, l),
                v = a.displayProfile?.guildId ?? a.guildId,
                M = null != a.user.avatar || a.user.hasAvatarForGuild(v) ? t : void 0;
            return null == i && null == M
                ? (0, n.jsx)("div", {
                      ...p,
                      className: m,
                      children: (0, n.jsx)(O, { ...c, imageClassName: g ? s : void 0 }),
                  })
                : (0, n.jsx)(d.s, {
                      "aria-label": N.intl.string(null != M ? N.t.xB7MI3 : N.t["+Xp3hq"]),
                      ...p,
                      onMouseEnter: function () {
                          (p.onMouseEnter(), null != M && (0, I.V)({ user: a.user, guildId: v }));
                      },
                      className: r()(m, V.vk),
                      focusProps: { ringClassName: V.Rg },
                      onClick: () => {
                          if (null != M) {
                              (o({ action: y.pt.VIEW_AVATAR, analyticsLocations: u }), M());
                              return;
                          }
                          (o({ action: y.pt.PRESS_VIEW_PROFILE, analyticsLocations: u }), i?.());
                      },
                      children: (0, n.jsx)(O, { ...c, imageClassName: r()(V.Lw, g && s) }),
                  });
        },
        V: C,
    },
);
