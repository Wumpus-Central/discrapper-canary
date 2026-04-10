"use strict";
n.d(t, { A: () => R });
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
            guildId: s,
            channelId: h,
            themeType: R,
            animateOnHover: O,
            onOpenProfile: b,
            className: D,
            previewStatus: L,
            specOverrides: w,
            avatarDecorationOverride: M,
            avatarOverride: x,
        } = e,
        { theme: P } = (0, A.E)(),
        { analyticsLocations: k } = (0, d.Ay)(c.A.AVATAR),
        { trackUserProfileAction: U } = (0, m.NJ)(),
        G = p.Ay.isPremiumAtLeast(n?.premiumType, S.PremiumTypes.TIER_2),
        F = i.useMemo(() => t.isNonUserBot() || (0, _.c)(t, h), [t, h]),
        { live: V } = (0, E.A)(t.id),
        [B] = V,
        {
            status: H,
            isMobileOnline: j,
            isVROnline: Y,
        } = (0, o.cf)([f.A], () => ({
            status: (0, u.A)(B) ? T.clD.STREAMING : f.A.getStatus(t.id),
            isMobileOnline: f.A.isMobileOnline(t.id),
            isVROnline: f.A.isVROnline(t.id),
        })),
        W = void 0 !== L ? L : H,
        K = y.T[R],
        $ = w?.avatarSize ?? K.avatarSize,
        z = a()(N.my, D),
        {
            avatarDecorationSrc: q,
            avatarSrc: Z,
            eventHandlers: X,
        } = (0, g.A)({
            userId: t.id,
            guildId: null != n ? n.guildId : s,
            size: $,
            animateOnHover: O,
            avatarDecorationOverride: M,
            avatarOverride: x,
        }),
        Q = (0, r.jsx)(C, {
            src: Z,
            avatarDecoration: q,
            size: $,
            "aria-label": t.username,
            imageClassName: null != b ? N.Lw : void 0,
            status: F ? T.clD.UNKNOWN : W,
            statusBackdropColor: G && !F ? (0, l.C$5)(P) : void 0,
            isMobile: j,
            isVR: Y,
            statusTooltip: !0,
            statusTooltipDelay: I.In,
        });
    return null == b
        ? (0, r.jsx)("div", { ...X, className: z, children: Q })
        : (0, r.jsx)(l.sqX, {
              "aria-label": v.intl.string(v.t["+Xp3hq"]),
              ...X,
              className: a()(z, N.vk),
              focusProps: { ringClassName: N.Rg },
              onClick: () => {
                  U({ action: "PRESS_VIEW_PROFILE", analyticsLocations: k }), b?.();
              },
              children: Q,
          });
}
