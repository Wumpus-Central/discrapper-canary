t.d(e, { A: () => _, V: () => T });
var s = t(477900),
    a = t(582128),
    n = t(503698),
    l = t.n(n),
    r = t(17928),
    u = t(97808),
    o = t(935154),
    d = t(890856),
    c = t(960076),
    A = t(793574),
    p = t(688810),
    h = t(178418),
    m = t(290863),
    g = t(158045),
    f = t(19575),
    v = t(183555),
    I = t(146655),
    M = t(854627),
    R = t(939496),
    E = t(305385),
    N = t(518477),
    w = t(652215),
    y = t(202541),
    V = t(375708),
    b = t(145762);
let C = f.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function T(i) {
    let {
            user: e,
            displayProfile: t,
            guildId: s,
            channelId: n,
            avatarSize: l,
            animateOnHover: u,
            previewStatus: d,
            avatarDecorationOverride: A,
            avatarOverride: p,
        } = i,
        { theme: f } = (0, R.E)(),
        v = g.Ay.isPremiumAtLeast(t?.premiumType, y.PremiumTypes.TIER_2),
        E = a.useMemo(() => e.isNonUserBot() || (0, h.c)(e, n), [e, n]),
        { live: V } = (0, I.A)(e.id),
        [b] = V,
        {
            status: C,
            isMobileOnline: T,
            isVROnline: _,
        } = (0, r.cf)([m.A], () => ({
            status: (0, c.A)(b) ? w.clD.STREAMING : m.A.getStatus(e.id),
            isMobileOnline: m.A.isMobileOnline(e.id),
            isVROnline: m.A.isVROnline(e.id),
        })),
        {
            avatarDecorationSrc: k,
            avatarSrc: O,
            eventHandlers: P,
            isAnimating: S,
        } = (0, M.A)({
            userId: e.id,
            guildId: null != t ? t.guildId : s,
            size: l,
            animateOnHover: u,
            avatarDecorationOverride: A,
            avatarOverride: p,
        });
    return {
        avatarProps: {
            src: O,
            avatarDecoration: k,
            size: l,
            "aria-label": e.username,
            status: E ? w.clD.UNKNOWN : void 0 !== d ? d : C,
            statusBackdropColor: v && !E ? (0, o.C$)(f) : void 0,
            isMobile: T,
            isVR: _,
            statusTooltip: !0,
            statusTooltipDelay: N.In,
        },
        eventHandlers: P,
        isAnimating: S,
    };
}
function _(i) {
    let { onOpenProfile: e, onOpenAvatar: t, className: a, imageAnimatingClassName: n, ...r } = i,
        { analyticsLocations: u } = (0, p.Ay)(A.A.AVATAR),
        { trackUserProfileAction: o } = (0, v.NJ)(),
        { avatarProps: c, eventHandlers: h, isAnimating: m } = T(r),
        g = l()(b.my, a),
        f = r.displayProfile?.guildId ?? r.guildId,
        I = null != r.user.avatar || r.user.hasAvatarForGuild(f) ? t : void 0;
    return null == e && null == I
        ? (0, s.jsx)("div", { ...h, className: g, children: (0, s.jsx)(C, { ...c, imageClassName: m ? n : void 0 }) })
        : (0, s.jsx)(d.s, {
              "aria-label": V.intl.string(null != I ? V.t.xB7MI3 : V.t["+Xp3hq"]),
              ...h,
              onMouseEnter: function () {
                  h.onMouseEnter(), null != I && (0, E.V)({ user: r.user, guildId: f });
              },
              className: l()(g, b.vk),
              focusProps: { ringClassName: b.Rg },
              onClick: () => {
                  if (null != I) {
                      o({ action: N.pt.VIEW_AVATAR, analyticsLocations: u }), I();
                      return;
                  }
                  o({ action: N.pt.PRESS_VIEW_PROFILE, analyticsLocations: u }), e?.();
              },
              children: (0, s.jsx)(C, { ...c, imageClassName: l()(b.Lw, m && n) }),
          });
}
