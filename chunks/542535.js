"use strict";
n.d(t, { A: () => B });
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
    O = n(585618),
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
let V = (e) => {
    let { badge: t, tieredTenureBadge: n } = e;
    return void 0 !== n && t.id !== U.K ? (0, r.jsx)(h.A, { profileBadge: t, tenureBadge: n }) : t.description;
};
function B(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: h,
            onClose: B,
            shouldOpenBadgeTooltip: H,
            shouldGlowTenureBadge: j,
        } = e,
        Y = i.useRef(null),
        W = i.useRef(null),
        K = i.useRef(null),
        $ = i.useRef(null),
        { analyticsLocations: z } = (0, d.Ay)(c.A.BADGE),
        { context: q, trackUserProfileAction: Z } = (0, C.NJ)(),
        X = S.default.getCurrentUser(),
        Q = (0, v.CC)(X?.premiumType, k.PremiumTypes.TIER_2),
        J = (0, O.e)("UserProfileBadgeList"),
        ee = (0, D.AP)(X?.id ?? null),
        et = (0, b.A)(ee).some((e) => e.id === I.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: a()(F.k, n),
        "aria-label": G.intl.string(G.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === I.A.ORB_PROFILE_BADGE,
                i = (0, N.e0)(e.id),
                d = null != i || e.id === U.K,
                S = h?.userId === X?.id,
                v = e.id === x.G,
                C = e.id.startsWith(w.Ky),
                O = (t) => {
                    if ((Z({ action: "PRESS_BADGE" }), (0, R.R9)({ badge: e.id, analyticsLocations: z, ...q }), n)) {
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
                                premium_type: Q,
                                viewed_user_id: h?.userId,
                            }),
                            Q)
                        ) {
                            S ? (0, A.pX)(M.BVt.NITRO_HOME) : (0, m.D)({ analyticsLocations: z, displayProfile: h }),
                                B?.();
                            return;
                        }
                        if (S) {
                            let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: z }) : null;
                            if (null == n) return;
                            return B?.(), n(t);
                        }
                        return (0, m.D)({ analyticsLocations: z, displayProfile: h }), void B?.();
                    }
                    let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: z }) : null;
                    if (null != r) return B?.(), r(t);
                },
                D = () => {
                    e.id === b.h &&
                        y.default.track(M.HAw.QUEST_CONTENT_VIEWED, {
                            ...(0, g.fF)(E.uF.QUEST_BADGE),
                            is_targeted: !1,
                        }),
                        Z({ action: "HOVER_BADGE" }),
                        (0, R.sQ)({ badge: e.id, analyticsLocations: z, ...q });
                },
                k = void 0 !== i && e.id !== U.K,
                G = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, w.L7)(e.icon),
                    className: a()(F.q, s),
                }),
                ee = null != H && H(e.id),
                en = {
                    onClick: O,
                    onMouseEnter: D,
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: j && null != i ? `drop-shadow(0 0 5px ${i.glowColor})` : void 0 },
                };
            if (k) {
                let n = (0, r.jsx)(l.MzZ, { ...en, ref: Y, children: G });
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
                let n = (0, r.jsx)(l.MzZ, { ...en, ref: W, children: G });
                return (0, r.jsx)(
                    T.d,
                    {
                        targetElementRef: W,
                        delay: w.In,
                        showSubtext: !et && !e.isPreviewMode,
                        forceOpen: ee,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (v) {
                let n = (0, r.jsx)(l.MzZ, { ...en, ref: K, children: G });
                return (0, r.jsx)(
                    f.A,
                    { targetElementRef: K, delay: w.In, forceOpen: ee, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (C && h?.premiumGuildSince != null && J) {
                let n = (0, r.jsx)(l.MzZ, { ...en, ref: $, children: G });
                return (0, r.jsx)(
                    L.A,
                    {
                        targetElementRef: $,
                        delay: w.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: h.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let er = (0, r.jsx)(l.MzZ, { ...en, children: G }),
                ei = V({ badge: e, tieredTenureBadge: d && e.id !== U.K ? i : void 0 });
            return (0, r.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: ei, forceOpen: ee, delay: w.In, ariaHidden: !0, children: er },
                `${e.id}-${t}`,
            );
        }),
    });
}
