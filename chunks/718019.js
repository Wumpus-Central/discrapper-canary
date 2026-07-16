"use strict";
n.d(t, { A: () => v, V: () => D });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(97808),
    d = n(133171),
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
    S = n(518477),
    N = n(652215),
    C = n(202541),
    R = n(985253),
    O = n(375708),
    L = n(106106);
let y = f.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function D(e) {
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
        O = I.Ay.isPremiumAtLeast(n?.premiumType, C.PremiumTypes.TIER_2),
        L = r.useMemo(() => t.isNonUserBot() || (0, A.c)(t, a), [t, a]),
        { live: y } = (0, T.A)(t.id),
        [D] = y,
        {
            status: v,
            isMobileOnline: b,
            isVROnline: M,
        } = (0, l.cf)([h.A], () => ({
            status: (0, u.A)(D) ? N.clD.STREAMING : h.A.getStatus(t.id),
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
            status: L ? N.clD.UNKNOWN : void 0 !== c ? c : v,
            statusBackdropColor: O && !L ? (0, d.C$)(p) : void 0,
            isMobile: b,
            isVR: M,
            statusTooltip: !0,
            statusTooltipDelay: S.In,
        },
        eventHandlers: G,
    };
}
function v(e) {
    let { onOpenProfile: t, className: n, ...r } = e,
        { analyticsLocations: a } = (0, E.Ay)(_.A.AVATAR),
        { trackUserProfileAction: l } = (0, p.NJ)(),
        { avatarProps: o, eventHandlers: d } = D(r),
        u = s()(L.my, n);
    return null == t
        ? (0, i.jsx)("div", { ...d, className: u, children: (0, i.jsx)(y, { ...o }) })
        : (0, i.jsx)(c.s, {
              "aria-label": O.intl.string(O.t["+Xp3hq"]),
              ...d,
              className: s()(u, L.vk),
              focusProps: { ringClassName: L.Rg },
              onClick: () => {
                  l({ action: "PRESS_VIEW_PROFILE", analyticsLocations: a }), t?.();
              },
              children: (0, i.jsx)(y, { ...o, imageClassName: L.Lw }),
          });
}
