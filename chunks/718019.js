"use strict";
i.d(t, { A: () => N, V: () => O });
var r = i(627968),
    a = i(64700),
    n = i(503698),
    s = i.n(n),
    l = i(311907),
    o = i(97808),
    c = i(935154),
    d = i(890856),
    u = i(960076),
    _ = i(793574),
    p = i(688810),
    h = i(178418),
    f = i(290863),
    A = i(927578),
    g = i(837921),
    b = i(183555),
    m = i(146655),
    v = i(854627),
    E = i(939496),
    I = i(518477),
    T = i(652215),
    x = i(788868),
    C = i(985253),
    y = i(985018),
    S = i(106106);
let R = g.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function O(e) {
    let {
            user: t,
            displayProfile: i,
            guildId: r,
            channelId: n,
            themeType: s,
            animateOnHover: o,
            previewStatus: d,
            specOverrides: _,
            avatarDecorationOverride: p,
            avatarOverride: g,
        } = e,
        { theme: b } = (0, E.E)(),
        y = A.Ay.isPremiumAtLeast(i?.premiumType, x.PremiumTypes.TIER_2),
        S = a.useMemo(() => t.isNonUserBot() || (0, h.c)(t, n), [t, n]),
        { live: R } = (0, m.A)(t.id),
        [O] = R,
        {
            status: N,
            isMobileOnline: L,
            isVROnline: w,
        } = (0, l.cf)([f.A], () => ({
            status: (0, u.A)(O) ? T.clD.STREAMING : f.A.getStatus(t.id),
            isMobileOnline: f.A.isMobileOnline(t.id),
            isVROnline: f.A.isVROnline(t.id),
        })),
        P = _?.avatarSize ?? C.T[s].avatarSize,
        {
            avatarDecorationSrc: j,
            avatarSrc: M,
            eventHandlers: U,
        } = (0, v.A)({
            userId: t.id,
            guildId: null != i ? i.guildId : r,
            size: P,
            animateOnHover: o,
            avatarDecorationOverride: p,
            avatarOverride: g,
        });
    return {
        avatarProps: {
            src: M,
            avatarDecoration: j,
            size: P,
            "aria-label": t.username,
            status: S ? T.clD.UNKNOWN : void 0 !== d ? d : N,
            statusBackdropColor: y && !S ? (0, c.C$)(b) : void 0,
            isMobile: L,
            isVR: w,
            statusTooltip: !0,
            statusTooltipDelay: I.In,
        },
        eventHandlers: U,
    };
}
function N(e) {
    let { onOpenProfile: t, className: i, ...a } = e,
        { analyticsLocations: n } = (0, p.Ay)(_.A.AVATAR),
        { trackUserProfileAction: l } = (0, b.NJ)(),
        { avatarProps: o, eventHandlers: c } = O(a),
        u = s()(S.my, i);
    return null == t
        ? (0, r.jsx)("div", { ...c, className: u, children: (0, r.jsx)(R, { ...o }) })
        : (0, r.jsx)(d.s, {
              "aria-label": y.intl.string(y.t["+Xp3hq"]),
              ...c,
              className: s()(u, S.vk),
              focusProps: { ringClassName: S.Rg },
              onClick: () => {
                  l({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n }), t?.();
              },
              children: (0, r.jsx)(R, { ...o, imageClassName: S.Lw }),
          });
}
