"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(349288),
    u = n(352423),
    c = n(793574),
    d = n(688810),
    _ = n(979286),
    f = n(841917),
    p = n(508591),
    h = n(603538),
    E = n(30084),
    m = n(341915),
    g = n(590202),
    A = n(976860),
    I = n(305003),
    T = n(588455),
    S = n(287809),
    y = n(954571),
    N = n(474090),
    v = n(439174),
    C = n(183555),
    O = n(672385),
    R = n(585618),
    b = n(262),
    D = n(950191),
    L = n(60080),
    w = n(518477),
    M = n(652215),
    P = n(758836),
    x = n(985418),
    k = n(788868),
    U = n(854232),
    G = n(985018),
    F = n(992028);
function V(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: V,
            onClose: B,
            shouldOpenBadgeTooltip: H,
            shouldGlowTenureBadge: j,
        } = e,
        Y = i.useRef(null),
        W = i.useRef(null),
        K = i.useRef(null),
        $ = i.useRef(null),
        { analyticsLocations: z } = (0, d.Ay)(c.A.BADGE),
        { context: q, trackUserProfileAction: X } = (0, C.NJ)(),
        Q = S.default.getCurrentUser(),
        Z = (0, N.CC)(Q?.premiumType, k.PremiumTypes.TIER_2),
        J = (0, R.e)("UserProfileBadgeList"),
        ee = (0, D.AP)(Q?.id ?? null),
        et = (0, b.A)(ee).some((e) => e.id === I.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: a()(F.k, n),
        "aria-label": G.intl.string(G.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === I.A.ORB_PROFILE_BADGE,
                i = (0, v.e0)(e.id),
                d = null != i || e.id === U.K,
                S = V?.userId === Q?.id,
                N = e.id === x.G,
                C = e.id.startsWith(w.Ky),
                R = void 0 !== i && e.id !== U.K,
                D = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, w.L7)(e.icon),
                    className: a()(F.q, s),
                }),
                k = null != H && H(e.id),
                G = {
                    onClick: (t) => {
                        if (
                            (X({ action: "PRESS_BADGE" }), (0, O.R9)({ badge: e.id, analyticsLocations: z, ...q }), n)
                        ) {
                            (0, _.Cz)({
                                tab: P.G2.ORBS,
                                analyticsLocations: z,
                                analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                B?.();
                            return;
                        }
                        if (d) {
                            if (
                                (t.preventDefault(),
                                y.default.track(M.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: Z,
                                    viewed_user_id: V?.userId,
                                }),
                                Z)
                            ) {
                                S
                                    ? (0, A.pX)(M.BVt.NITRO_HOME)
                                    : (0, E.D)({ analyticsLocations: z, displayProfile: V }),
                                    B?.();
                                return;
                            }
                            if (S) {
                                let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: z }) : null;
                                if (null == n) return;
                                return B?.(), n(t);
                            }
                            return (0, E.D)({ analyticsLocations: z, displayProfile: V }), void B?.();
                        }
                        let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: z }) : null;
                        if (null != r) return B?.(), r(t);
                    },
                    onMouseEnter: () => {
                        e.id === b.h &&
                            y.default.track(M.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, g.fF)(m.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            X({ action: "HOVER_BADGE" }),
                            (0, O.sQ)({ badge: e.id, analyticsLocations: z, ...q });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: j && null != i ? `drop-shadow(0 0 5px ${i.glowColor})` : void 0 },
                };
            if (R) {
                let n = (0, r.jsx)(l.Anchor, { ...G, ref: Y, children: D });
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(p.A, {
                            badgeId: e.id,
                            targetElementRef: Y,
                            mode: "tooltip",
                            tooltipDelay: w.In,
                            body: e.description,
                            onShow: () => {
                                y.default.track(M.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (S ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: 220,
                            children: n,
                        }),
                    },
                    `${e.id}-${t}`,
                );
            }
            if (n) {
                let n = (0, r.jsx)(l.Anchor, { ...G, ref: W, children: D });
                return (0, r.jsx)(
                    T.d,
                    {
                        targetElementRef: W,
                        delay: w.In,
                        showSubtext: !et && !e.isPreviewMode,
                        forceOpen: k,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (N) {
                let n = (0, r.jsx)(l.Anchor, { ...G, ref: K, children: D });
                return (0, r.jsx)(
                    f.A,
                    { targetElementRef: K, delay: w.In, forceOpen: k, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (C && V?.premiumGuildSince != null && J) {
                let n = (0, r.jsx)(l.Anchor, { ...G, ref: $, children: D });
                return (0, r.jsx)(
                    L.A,
                    {
                        targetElementRef: $,
                        delay: w.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: V.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let ee = (0, r.jsx)(l.Anchor, { ...G, children: D }),
                en = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== U.K
                        ? (0, r.jsx)(h.A, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: d && e.id !== U.K ? i : void 0 });
            return (0, r.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: en, forceOpen: k, delay: w.In, ariaHidden: !0, children: ee },
                `${e.id}-${t}`,
            );
        }),
    });
}
