"use strict";
n.d(t, { A: () => O, V: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(960076),
    c = n(793574),
    d = n(688810),
    _ = n(178418),
    f = n(290863),
    p = n(927578),
    h = n(837921),
    m = n(183555),
    E = n(146655),
    g = n(854627),
    A = n(939496),
    I = n(518477),
    T = n(652215),
    S = n(788868),
    y = n(985253),
    v = n(985018),
    N = n(321386);
let C = h.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;
function R(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: r,
            channelId: s,
            themeType: a,
            animateOnHover: c,
            previewStatus: d,
            specOverrides: h,
            avatarDecorationOverride: m,
            avatarOverride: v,
        } = e,
        { theme: N } = (0, A.E)(),
        C = p.Ay.isPremiumAtLeast(n?.premiumType, S.PremiumTypes.TIER_2),
        R = i.useMemo(() => t.isNonUserBot() || (0, _.c)(t, s), [t, s]),
        { live: O } = (0, E.A)(t.id),
        [b] = O,
        {
            status: D,
            isMobileOnline: L,
            isVROnline: w,
        } = (0, o.cf)([f.A], () => ({
            status: (0, u.A)(b) ? T.clD.STREAMING : f.A.getStatus(t.id),
            isMobileOnline: f.A.isMobileOnline(t.id),
            isVROnline: f.A.isVROnline(t.id),
        })),
        M = void 0 !== d ? d : D,
        x = h?.avatarSize ?? y.T[a].avatarSize,
        {
            avatarDecorationSrc: P,
            avatarSrc: k,
            eventHandlers: U,
        } = (0, g.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : r,
            size: x,
            animateOnHover: c,
            avatarDecorationOverride: m,
            avatarOverride: v,
        });
    return {
        avatarProps: {
            src: k,
            avatarDecoration: P,
            size: x,
            "aria-label": t.username,
            status: R ? T.clD.UNKNOWN : M,
            statusBackdropColor: C && !R ? (0, l.C$5)(N) : void 0,
            isMobile: L,
            isVR: w,
            statusTooltip: !0,
            statusTooltipDelay: I.In,
        },
        eventHandlers: U,
    };
}
function O(e) {
    let { onOpenProfile: t, className: n, ...i } = e,
        { analyticsLocations: s } = (0, d.Ay)(c.A.AVATAR),
        { trackUserProfileAction: o } = (0, m.NJ)(),
        { avatarProps: u, eventHandlers: _ } = R(i),
        f = a()(N.my, n);
    return null == t
        ? (0, r.jsx)("div", { ..._, className: f, children: (0, r.jsx)(C, { ...u }) })
        : (0, r.jsx)(l.sqX, {
              "aria-label": v.intl.string(v.t["+Xp3hq"]),
              ..._,
              className: a()(f, N.vk),
              focusProps: { ringClassName: N.Rg },
              onClick: () => {
                  o({ action: "PRESS_VIEW_PROFILE", analyticsLocations: s }), t?.();
              },
              children: (0, r.jsx)(C, { ...u, imageClassName: N.Lw }),
          });
}
