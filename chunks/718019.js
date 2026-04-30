"use strict";
n.d(t, { A: () => D, V: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(97808),
    u = n(133171),
    c = n(890856),
    d = n(960076),
    _ = n(793574),
    f = n(688810),
    h = n(178418),
    p = n(290863),
    E = n(927578),
    m = n(19575),
    g = n(183555),
    A = n(146655),
    I = n(854627),
    T = n(939496),
    S = n(518477),
    N = n(652215),
    y = n(788868),
    C = n(985253),
    v = n(375708),
    O = n(106106);
let R = m.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu;
function b(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: i,
            channelId: s,
            themeType: a,
            animateOnHover: l,
            previewStatus: c,
            specOverrides: _,
            avatarDecorationOverride: f,
            avatarOverride: m,
        } = e,
        { theme: g } = (0, T.E)(),
        v = E.Ay.isPremiumAtLeast(n?.premiumType, y.PremiumTypes.TIER_2),
        O = r.useMemo(() => t.isNonUserBot() || (0, h.c)(t, s), [t, s]),
        { live: R } = (0, A.A)(t.id),
        [b] = R,
        {
            status: D,
            isMobileOnline: L,
            isVROnline: w,
        } = (0, o.cf)([p.A], () => ({
            status: (0, d.A)(b) ? N.clD.STREAMING : p.A.getStatus(t.id),
            isMobileOnline: p.A.isMobileOnline(t.id),
            isVROnline: p.A.isVROnline(t.id),
        })),
        M = _?.avatarSize ?? C.T[a].avatarSize,
        {
            avatarDecorationSrc: P,
            avatarSrc: x,
            eventHandlers: U,
        } = (0, I.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : i,
            size: M,
            animateOnHover: l,
            avatarDecorationOverride: f,
            avatarOverride: m,
        });
    return {
        avatarProps: {
            src: x,
            avatarDecoration: P,
            size: M,
            "aria-label": t.username,
            status: O ? N.clD.UNKNOWN : void 0 !== c ? c : D,
            statusBackdropColor: v && !O ? (0, u.C$)(g) : void 0,
            isMobile: L,
            isVR: w,
            statusTooltip: !0,
            statusTooltipDelay: S.In,
        },
        eventHandlers: U,
    };
}
function D(e) {
    let { onOpenProfile: t, className: n, ...r } = e,
        { analyticsLocations: s } = (0, f.Ay)(_.A.AVATAR),
        { trackUserProfileAction: o } = (0, g.NJ)(),
        { avatarProps: l, eventHandlers: u } = b(r),
        d = a()(O.my, n);
    return null == t
        ? (0, i.jsx)("div", { ...u, className: d, children: (0, i.jsx)(R, { ...l }) })
        : (0, i.jsx)(c.s, {
              "aria-label": v.intl.string(v.t["+Xp3hq"]),
              ...u,
              className: a()(d, O.vk),
              focusProps: { ringClassName: O.Rg },
              onClick: () => {
                  o({ action: "PRESS_VIEW_PROFILE", analyticsLocations: s }), t?.();
              },
              children: (0, i.jsx)(R, { ...l, imageClassName: O.Lw }),
          });
}
