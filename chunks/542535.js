"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(397927),
    u = n(352423),
    c = n(793574),
    d = n(688810),
    _ = n(979286),
    f = n(841917),
    p = n(508591),
    h = n(603538),
    m = n(30084),
    E = n(341915),
    g = n(590202),
    A = n(976860),
    I = n(305003),
    T = n(588455),
    S = n(287809),
    y = n(954571),
    v = n(474090),
    N = n(439174),
    C = n(183555),
    R = n(672385),
    O = n(262),
    b = n(950191),
    D = n(518477),
    L = n(652215),
    w = n(758836),
    M = n(985418),
    P = n(788868),
    x = n(854232),
    k = n(985018),
    U = n(232972);
let G = (e) => {
    let { badge: t, tieredTenureBadge: n } = e;
    return void 0 !== n && t.id !== x.K ? (0, r.jsx)(h.A, { profileBadge: t, tenureBadge: n }) : t.description;
};
function F(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: h,
            onClose: F,
            shouldOpenBadgeTooltip: V,
            shouldGlowTenureBadge: B,
        } = e,
        H = i.useRef(null),
        j = i.useRef(null),
        Y = i.useRef(null),
        { analyticsLocations: W } = (0, d.Ay)(c.A.BADGE),
        { context: K, trackUserProfileAction: $ } = (0, C.NJ)(),
        z = S.default.getCurrentUser(),
        q = (0, v.CC)(z?.premiumType, P.PremiumTypes.TIER_2),
        Z = (0, b.AP)(z?.id ?? null),
        X = (0, O.A)(Z).some((e) => e.id === I.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: a()(U.k, n),
        "aria-label": k.intl.string(k.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === I.A.ORB_PROFILE_BADGE,
                i = (0, N.e0)(e.id),
                d = null != i || e.id === x.K,
                S = h?.userId === z?.id,
                v = e.id === M.G,
                C = (t) => {
                    if (($({ action: "PRESS_BADGE" }), (0, R.R9)({ badge: e.id, analyticsLocations: W, ...K }), n)) {
                        (0, _.Cz)({
                            tab: w.G2.ORBS,
                            analyticsLocations: W,
                            analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        }),
                            F?.();
                        return;
                    }
                    if (d) {
                        if (
                            (t.preventDefault(),
                            y.default.track(L.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: q,
                                viewed_user_id: h?.userId,
                            }),
                            q)
                        ) {
                            S ? (0, A.pX)(L.BVt.NITRO_HOME) : (0, m.D)({ analyticsLocations: W, displayProfile: h }),
                                F?.();
                            return;
                        }
                        if (S) {
                            let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: W }) : null;
                            if (null == n) return;
                            return F?.(), n(t);
                        }
                        return (0, m.D)({ analyticsLocations: W, displayProfile: h }), void F?.();
                    }
                    let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: W }) : null;
                    if (null != r) return F?.(), r(t);
                },
                b = () => {
                    e.id === O.h &&
                        y.default.track(L.HAw.QUEST_CONTENT_VIEWED, {
                            ...(0, g.fF)(E.uF.QUEST_BADGE),
                            is_targeted: !1,
                        }),
                        $({ action: "HOVER_BADGE" }),
                        (0, R.sQ)({ badge: e.id, analyticsLocations: W, ...K });
                },
                P = void 0 !== i && e.id !== x.K,
                k = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, D.L7)(e.icon),
                    className: a()(U.q, s),
                }),
                Z = null != V && V(e.id),
                Q = {
                    onClick: C,
                    onMouseEnter: b,
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: B && null != i ? `drop-shadow(0 0 5px ${i.glowColor})` : void 0 },
                };
            if (P) {
                let n = (0, r.jsx)(l.MzZ, { ...Q, ref: H, children: k });
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(p.A, {
                            badgeId: e.id,
                            targetElementRef: H,
                            mode: "tooltip",
                            tooltipDelay: D.In,
                            body: e.description,
                            onShow: () => {
                                y.default.track(L.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, r.jsx)(l.MzZ, { ...Q, ref: j, children: k });
                return (0, r.jsx)(
                    T.d,
                    {
                        targetElementRef: j,
                        delay: D.In,
                        showSubtext: !X && !e.isPreviewMode,
                        forceOpen: Z,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (v) {
                let n = (0, r.jsx)(l.MzZ, { ...Q, ref: Y, children: k });
                return (0, r.jsx)(
                    f.A,
                    { targetElementRef: Y, delay: D.In, forceOpen: Z, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let J = (0, r.jsx)(l.MzZ, { ...Q, children: k }),
                ee = G({ badge: e, tieredTenureBadge: d && e.id !== x.K ? i : void 0 });
            return (0, r.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: ee, forceOpen: Z, delay: D.In, ariaHidden: !0, children: J },
                `${e.id}-${t}`,
            );
        }),
    });
}
