t.d(n, { A: () => H });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    a = t.n(i),
    s = t(990078),
    o = t(349288),
    d = t(352423),
    u = t(793574),
    c = t(688810),
    m = t(979286),
    p = t(841917),
    f = t(508591),
    g = t(603538),
    h = t(30084),
    x = t(341915),
    A = t(590202),
    E = t(976860),
    j = t(305003),
    v = t(588455),
    C = t(287809),
    b = t(954571),
    R = t(474090),
    _ = t(439174),
    y = t(183555),
    k = t(672385),
    N = t(585618),
    I = t(262),
    S = t(950191),
    T = t(60080),
    D = t(518477),
    O = t(652215),
    w = t(758836),
    B = t(985418),
    G = t(788868),
    L = t(854232),
    M = t(985018),
    P = t(992028);
function H(e) {
    let {
            badges: n,
            className: t,
            badgeClassName: i,
            displayProfile: H,
            onClose: U,
            shouldOpenBadgeTooltip: F,
            shouldGlowTenureBadge: V,
        } = e,
        $ = r.useRef(null),
        K = r.useRef(null),
        W = r.useRef(null),
        q = r.useRef(null),
        { analyticsLocations: z } = (0, c.Ay)(u.A.BADGE),
        { context: Y, trackUserProfileAction: Q } = (0, y.NJ)(),
        J = C.default.getCurrentUser(),
        X = (0, R.CC)(J?.premiumType, G.PremiumTypes.TIER_2),
        Z = (0, N.e)("UserProfileBadgeList"),
        ee = (0, S.AP)(J?.id ?? null),
        en = (0, I.A)(ee).some((e) => e.id === j.A.ORB_PROFILE_BADGE);
    return (0, l.jsx)("div", {
        className: a()(P.k, t),
        "aria-label": M.intl.string(M.t.VWV0y5),
        role: "group",
        children: n.map((e, n) => {
            let t = e.id === j.A.ORB_PROFILE_BADGE,
                r = (0, _.e0)(e.id),
                c = null != r || e.id === L.K,
                C = H?.userId === J?.id,
                R = e.id === B.G,
                y = e.id.startsWith(D.Ky),
                N = void 0 !== r && e.id !== L.K,
                S = (0, l.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, D.L7)(e.icon),
                    className: a()(P.q, i),
                }),
                G = null != F && F(e.id),
                M = {
                    onClick: (n) => {
                        if (
                            (Q({ action: "PRESS_BADGE" }), (0, k.R9)({ badge: e.id, analyticsLocations: z, ...Y }), t)
                        ) {
                            (0, m.Cz)({
                                tab: w.G2.ORBS,
                                analyticsLocations: z,
                                analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                U?.();
                            return;
                        }
                        if (c) {
                            if (
                                (n.preventDefault(),
                                b.default.track(O.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: X,
                                    viewed_user_id: H?.userId,
                                }),
                                X)
                            ) {
                                C
                                    ? (0, E.pX)(O.BVt.NITRO_HOME)
                                    : (0, h.D)({ analyticsLocations: z, displayProfile: H }),
                                    U?.();
                                return;
                            }
                            if (C) {
                                let t = null != e.link ? (0, d.default)(e.link, { analyticsLocations: z }) : null;
                                if (null == t) return;
                                return U?.(), t(n);
                            }
                            return (0, h.D)({ analyticsLocations: z, displayProfile: H }), void U?.();
                        }
                        let l = null != e.link ? (0, d.default)(e.link, { analyticsLocations: z }) : null;
                        if (null != l) return U?.(), l(n);
                    },
                    onMouseEnter: () => {
                        e.id === I.h &&
                            b.default.track(O.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, A.fF)(x.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            Q({ action: "HOVER_BADGE" }),
                            (0, k.sQ)({ badge: e.id, analyticsLocations: z, ...Y });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: V && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (N) {
                let t = (0, l.jsx)(o.Anchor, { ...M, ref: $, children: S });
                return (0, l.jsx)(
                    "div",
                    {
                        children: (0, l.jsx)(f.A, {
                            badgeId: e.id,
                            targetElementRef: $,
                            mode: "tooltip",
                            tooltipDelay: D.In,
                            body: e.description,
                            onShow: () => {
                                b.default.track(O.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (C ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: 220,
                            children: t,
                        }),
                    },
                    `${e.id}-${n}`,
                );
            }
            if (t) {
                let t = (0, l.jsx)(o.Anchor, { ...M, ref: K, children: S });
                return (0, l.jsx)(
                    v.d,
                    {
                        targetElementRef: K,
                        delay: D.In,
                        showSubtext: !en && !e.isPreviewMode,
                        forceOpen: G,
                        children: t,
                    },
                    `${e.id}-${n}`,
                );
            }
            if (R) {
                let t = (0, l.jsx)(o.Anchor, { ...M, ref: W, children: S });
                return (0, l.jsx)(
                    p.A,
                    { targetElementRef: W, delay: D.In, forceOpen: G, badgeDescription: e.description, children: t },
                    `${e.id}-${n}`,
                );
            }
            if (y && H?.premiumGuildSince != null && Z) {
                let t = (0, l.jsx)(o.Anchor, { ...M, ref: q, children: S });
                return (0, l.jsx)(
                    T.A,
                    {
                        targetElementRef: q,
                        delay: D.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: H.premiumGuildSince,
                        children: t,
                    },
                    `${e.id}-${n}`,
                );
            }
            let ee = (0, l.jsx)(o.Anchor, { ...M, children: S }),
                et = ((e) => {
                    let { badge: n, tieredTenureBadge: t } = e;
                    return void 0 !== t && n.id !== L.K
                        ? (0, l.jsx)(g.A, { profileBadge: n, tenureBadge: t })
                        : n.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== L.K ? r : void 0 });
            return (0, l.jsx)(
                s.m,
                { __unsupportedReactNodeAsText: et, forceOpen: G, delay: D.In, ariaHidden: !0, children: ee },
                `${e.id}-${n}`,
            );
        }),
    });
}
