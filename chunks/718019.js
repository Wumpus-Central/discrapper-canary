"use strict";
n.d(t, { A: () => b, V: () => v });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(97808),
    d = n(935154),
    c = n(890856),
    u = n(960076),
    _ = n(793574),
    E = n(688810),
    A = n(178418),
    h = n(290863),
    I = n(428262),
    f = n(19575),
    p = n(183555),
    T = n(146655),
    m = n(854627),
    g = n(939496),
    S = n(305385),
    N = n(518477),
    C = n(652215),
    O = n(202541),
    R = n(985253),
    L = n(375708),
    D = n(145762);
let y = f.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function v(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: i,
            channelId: a,
            themeType: s,
            animateOnHover: o,
            previewStatus: c,
            specOverrides: _,
            avatarDecorationOverride: E,
            avatarOverride: f,
        } = e,
        { theme: p } = (0, g.E)(),
        S = I.Ay.isPremiumAtLeast(n?.premiumType, O.PremiumTypes.TIER_2),
        L = r.useMemo(() => t.isNonUserBot() || (0, A.c)(t, a), [t, a]),
        { live: D } = (0, T.A)(t.id),
        [y] = D,
        {
            status: v,
            isMobileOnline: b,
            isVROnline: M,
        } = (0, l.cf)([h.A], () => ({
            status: (0, u.A)(y) ? C.clD.STREAMING : h.A.getStatus(t.id),
            isMobileOnline: h.A.isMobileOnline(t.id),
            isVROnline: h.A.isVROnline(t.id),
        })),
        P = _?.avatarSize ?? R.T[s].avatarSize,
        {
            avatarDecorationSrc: U,
            avatarSrc: w,
            eventHandlers: G,
        } = (0, m.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : i,
            size: P,
            animateOnHover: o,
            avatarDecorationOverride: E,
            avatarOverride: f,
        });
    return {
        avatarProps: {
            src: w,
            avatarDecoration: U,
            size: P,
            "aria-label": t.username,
            status: L ? C.clD.UNKNOWN : void 0 !== c ? c : v,
            statusBackdropColor: S && !L ? (0, d.C$)(p) : void 0,
            isMobile: b,
            isVR: M,
            statusTooltip: !0,
            statusTooltipDelay: N.In,
        },
        eventHandlers: G,
    };
}
function b(e) {
    let { onOpenProfile: t, onOpenAvatar: n, className: r, ...a } = e,
        { analyticsLocations: l } = (0, E.Ay)(_.A.AVATAR),
        { trackUserProfileAction: o } = (0, p.NJ)(),
        { avatarProps: d, eventHandlers: u } = v(a),
        A = s()(D.my, r),
        h = a.displayProfile?.guildId ?? a.guildId,
        I = null != a.user.avatar || a.user.hasAvatarForGuild(h) ? n : void 0;
    return null == t && null == I
        ? (0, i.jsx)("div", { ...u, className: A, children: (0, i.jsx)(y, { ...d }) })
        : (0, i.jsx)(c.s, {
              "aria-label": L.intl.string(null != I ? L.t.xB7MI3 : L.t["+Xp3hq"]),
              ...u,
              onMouseEnter: () => {
                  u.onMouseEnter(), null != I && (0, S.V)({ user: a.user, guildId: h });
              },
              className: s()(A, D.vk),
              focusProps: { ringClassName: D.Rg },
              onClick: () => {
                  if (null != I) {
                      o({ action: N.pt.VIEW_AVATAR, analyticsLocations: l }), I();
                      return;
                  }
                  o({ action: N.pt.PRESS_VIEW_PROFILE, analyticsLocations: l }), t?.();
              },
              children: (0, i.jsx)(y, { ...d, imageClassName: D.Lw }),
          });
}
