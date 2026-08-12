"use strict";
n.d(t, { A: () => v, V: () => y });
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
    I = n(158045),
    f = n(19575),
    p = n(183555),
    T = n(146655),
    m = n(854627),
    g = n(939496),
    S = n(305385),
    N = n(518477),
    C = n(652215),
    O = n(202541),
    R = n(375708),
    L = n(145762);
let D = f.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function y(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: i,
            channelId: a,
            avatarSize: s,
            animateOnHover: o,
            previewStatus: c,
            avatarDecorationOverride: _,
            avatarOverride: E,
        } = e,
        { theme: f } = (0, g.E)(),
        p = I.Ay.isPremiumAtLeast(n?.premiumType, O.PremiumTypes.TIER_2),
        S = r.useMemo(() => t.isNonUserBot() || (0, A.c)(t, a), [t, a]),
        { live: R } = (0, T.A)(t.id),
        [L] = R,
        {
            status: D,
            isMobileOnline: y,
            isVROnline: v,
        } = (0, l.cf)([h.A], () => ({
            status: (0, u.A)(L) ? C.clD.STREAMING : h.A.getStatus(t.id),
            isMobileOnline: h.A.isMobileOnline(t.id),
            isVROnline: h.A.isVROnline(t.id),
        })),
        {
            avatarDecorationSrc: b,
            avatarSrc: M,
            eventHandlers: P,
        } = (0, m.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : i,
            size: s,
            animateOnHover: o,
            avatarDecorationOverride: _,
            avatarOverride: E,
        });
    return {
        avatarProps: {
            src: M,
            avatarDecoration: b,
            size: s,
            "aria-label": t.username,
            status: S ? C.clD.UNKNOWN : void 0 !== c ? c : D,
            statusBackdropColor: p && !S ? (0, d.C$)(f) : void 0,
            isMobile: y,
            isVR: v,
            statusTooltip: !0,
            statusTooltipDelay: N.In,
        },
        eventHandlers: P,
    };
}
function v(e) {
    let { onOpenProfile: t, onOpenAvatar: n, className: r, ...a } = e,
        { analyticsLocations: l } = (0, E.Ay)(_.A.AVATAR),
        { trackUserProfileAction: o } = (0, p.NJ)(),
        { avatarProps: d, eventHandlers: u } = y(a),
        A = s()(L.my, r),
        h = a.displayProfile?.guildId ?? a.guildId,
        I = null != a.user.avatar || a.user.hasAvatarForGuild(h) ? n : void 0;
    return null == t && null == I
        ? (0, i.jsx)("div", { ...u, className: A, children: (0, i.jsx)(D, { ...d }) })
        : (0, i.jsx)(c.s, {
              "aria-label": R.intl.string(null != I ? R.t.xB7MI3 : R.t["+Xp3hq"]),
              ...u,
              onMouseEnter: function () {
                  u.onMouseEnter(), null != I && (0, S.V)({ user: a.user, guildId: h });
              },
              className: s()(A, L.vk),
              focusProps: { ringClassName: L.Rg },
              onClick: () => {
                  if (null != I) {
                      o({ action: N.pt.VIEW_AVATAR, analyticsLocations: l }), I();
                      return;
                  }
                  o({ action: N.pt.PRESS_VIEW_PROFILE, analyticsLocations: l }), t?.();
              },
              children: (0, i.jsx)(D, { ...d, imageClassName: L.Lw }),
          });
}
