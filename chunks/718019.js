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
    N = n(735027);
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
        } = e,
        { theme: M } = (0, A.E)(),
        { analyticsLocations: x } = (0, d.Ay)(c.A.AVATAR),
        { trackUserProfileAction: P } = (0, m.NJ)(),
        k = p.Ay.isPremiumAtLeast(n?.premiumType, S.PremiumTypes.TIER_2),
        U = i.useMemo(() => t.isNonUserBot() || (0, _.c)(t, h), [t, h]),
        { live: G } = (0, E.A)(t.id),
        [F] = G,
        {
            status: V,
            isMobileOnline: B,
            isVROnline: H,
        } = (0, o.cf)([f.A], () => ({
            status: (0, u.A)(F) ? T.clD.STREAMING : f.A.getStatus(t.id),
            isMobileOnline: f.A.isMobileOnline(t.id),
            isVROnline: f.A.isVROnline(t.id),
        })),
        j = void 0 !== L ? L : V,
        Y = y.T[R],
        W = w?.avatarSize ?? Y.avatarSize,
        K = a()(N.my, D),
        {
            avatarDecorationSrc: $,
            avatarSrc: z,
            eventHandlers: q,
        } = (0, g.A)({ userId: t.id, guildId: null != n ? n.guildId : s, size: W, animateOnHover: O }),
        Z = (0, r.jsx)(C, {
            src: z,
            avatarDecoration: $,
            size: W,
            "aria-label": t.username,
            imageClassName: null != b ? N.Lw : void 0,
            status: U ? T.clD.UNKNOWN : j,
            statusBackdropColor: k && !U ? (0, l.C$5)(M) : void 0,
            isMobile: B,
            isVR: H,
            statusTooltip: !0,
            statusTooltipDelay: I.In,
        });
    return null == b
        ? (0, r.jsx)("div", { ...q, className: K, children: Z })
        : (0, r.jsx)(l.sqX, {
              "aria-label": v.intl.string(v.t["+Xp3hq"]),
              ...q,
              className: a()(K, N.vk),
              focusProps: { ringClassName: N.Rg },
              onClick: () => {
                  P({ action: "PRESS_VIEW_PROFILE", analyticsLocations: x }), b?.();
              },
              children: Z,
          });
}
