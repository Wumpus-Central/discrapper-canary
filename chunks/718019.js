"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(146655),
    E = n(854627),
    A = n(939496),
    I = n(518477),
    T = n(652215),
    y = n(788868),
    S = n(996988),
    v = n(985018),
    C = n(735027);
let b = h.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;
function N(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            channelId: h,
            themeType: N,
            animateOnHover: R,
            onOpenProfile: O,
            className: D,
            previewStatus: L,
        } = e,
        { theme: w } = (0, A.E)(),
        { analyticsLocations: x } = (0, d.Ay)(c.A.AVATAR),
        { trackUserProfileAction: P } = (0, m.NJ)(),
        M = p.Ay.isPremiumAtLeast(n?.premiumType, y.PremiumTypes.TIER_2),
        k = i.useMemo(() => t.isNonUserBot() || (0, _.c)(t, h), [t, h]),
        { live: U } = (0, g.A)(t.id),
        [G] = U,
        {
            status: V,
            isMobileOnline: F,
            isVROnline: B,
        } = (0, o.cf)([f.A], () => ({
            status: (0, u.A)(G) ? T.clD.STREAMING : f.A.getStatus(t.id),
            isMobileOnline: f.A.isMobileOnline(t.id),
            isVROnline: f.A.isVROnline(t.id),
        })),
        j = void 0 !== L ? L : V,
        H = [S.d.MODAL, S.d.MODAL_V2].includes(N) ? l._3J.SIZE_120 : l._3J.SIZE_80,
        Y = s()(C.my, D),
        {
            avatarDecorationSrc: W,
            avatarSrc: K,
            eventHandlers: z,
        } = (0, E.A)({ userId: t.id, guildId: null != n ? n.guildId : a, size: H, animateOnHover: R }),
        $ = (0, r.jsx)(b, {
            src: K,
            avatarDecoration: W,
            size: H,
            "aria-label": t.username,
            imageClassName: null != O ? C.Lw : void 0,
            status: k ? T.clD.UNKNOWN : j,
            statusBackdropColor: M && !k ? (0, l.C$5)(w) : void 0,
            isMobile: F,
            isVR: B,
            statusTooltip: !0,
            statusTooltipDelay: I.In,
        });
    return null == O
        ? (0, r.jsx)("div", { ...z, className: Y, children: $ })
        : (0, r.jsx)(l.sqX, {
              "aria-label": v.intl.string(v.t["+Xp3hq"]),
              ...z,
              className: s()(Y, C.vk),
              focusProps: { ringClassName: C.Rg },
              onClick: () => {
                  P({ action: "PRESS_VIEW_PROFILE", analyticsLocations: x }), O?.();
              },
              children: $,
          });
}
