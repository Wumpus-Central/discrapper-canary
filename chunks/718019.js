"use strict";
n.d(t, { A: () => L, V: () => b });
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
    h = n(688810),
    f = n(178418),
    E = n(290863),
    p = n(428262),
    m = n(19575),
    g = n(183555),
    A = n(146655),
    I = n(854627),
    T = n(939496),
    S = n(518477),
    N = n(652215),
    C = n(202541),
    y = n(985253),
    O = n(375708),
    R = n(106106);
let v = m.Ay.getEnableHardwareAcceleration() ? l.Js : l.eu;
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
            avatarDecorationOverride: h,
            avatarOverride: m,
        } = e,
        { theme: g } = (0, T.E)(),
        O = p.Ay.isPremiumAtLeast(n?.premiumType, C.PremiumTypes.TIER_2),
        R = r.useMemo(() => t.isNonUserBot() || (0, f.c)(t, s), [t, s]),
        { live: v } = (0, A.A)(t.id),
        [b] = v,
        {
            status: L,
            isMobileOnline: D,
            isVROnline: w,
        } = (0, o.cf)([E.A], () => ({
            status: (0, d.A)(b) ? N.clD.STREAMING : E.A.getStatus(t.id),
            isMobileOnline: E.A.isMobileOnline(t.id),
            isVROnline: E.A.isVROnline(t.id),
        })),
        P = _?.avatarSize ?? y.T[a].avatarSize,
        {
            avatarDecorationSrc: M,
            avatarSrc: x,
            eventHandlers: U,
        } = (0, I.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : i,
            size: P,
            animateOnHover: l,
            avatarDecorationOverride: h,
            avatarOverride: m,
        });
    return {
        avatarProps: {
            src: x,
            avatarDecoration: M,
            size: P,
            "aria-label": t.username,
            status: R ? N.clD.UNKNOWN : void 0 !== c ? c : L,
            statusBackdropColor: O && !R ? (0, u.C$)(g) : void 0,
            isMobile: D,
            isVR: w,
            statusTooltip: !0,
            statusTooltipDelay: S.In,
        },
        eventHandlers: U,
    };
}
function L(e) {
    let { onOpenProfile: t, className: n, ...r } = e,
        { analyticsLocations: s } = (0, h.Ay)(_.A.AVATAR),
        { trackUserProfileAction: o } = (0, g.NJ)(),
        { avatarProps: l, eventHandlers: u } = b(r),
        d = a()(R.my, n);
    return null == t
        ? (0, i.jsx)("div", { ...u, className: d, children: (0, i.jsx)(v, { ...l }) })
        : (0, i.jsx)(c.s, {
              "aria-label": O.intl.string(O.t["+Xp3hq"]),
              ...u,
              className: a()(d, R.vk),
              focusProps: { ringClassName: R.Rg },
              onClick: () => {
                  o({ action: "PRESS_VIEW_PROFILE", analyticsLocations: s }), t?.();
              },
              children: (0, i.jsx)(v, { ...l, imageClassName: R.Lw }),
          });
}
