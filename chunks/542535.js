"use strict";
n.d(t, { A: () => U });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    u = n(352423),
    c = n(793574),
    d = n(688810),
    _ = n(979286),
    f = n(508591),
    p = n(603538),
    h = n(30084),
    m = n(341915),
    g = n(590202),
    E = n(976860),
    A = n(305003),
    I = n(588455),
    T = n(287809),
    y = n(954571),
    S = n(474090),
    v = n(439174),
    C = n(183555),
    b = n(672385),
    N = n(262),
    R = n(950191),
    O = n(518477),
    D = n(652215),
    L = n(758836),
    w = n(788868),
    x = n(854232),
    P = n(985018),
    M = n(448263);
let k = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === A.A.ORB_PROFILE_BADGE
        ? (0, r.jsx)(I.A, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== x.K
          ? (0, r.jsx)(p.A, { profileBadge: t, tenureBadge: n })
          : t.description;
};
function U(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: a,
            displayProfile: p,
            onClose: I,
            shouldOpenBadgeTooltip: U,
            shouldGlowTenureBadge: G,
        } = e,
        V = i.useRef(null),
        { analyticsLocations: F } = (0, d.Ay)(c.A.BADGE),
        { context: B, trackUserProfileAction: j } = (0, C.NJ)(),
        H = T.default.getCurrentUser(),
        Y = (0, S.CC)(H?.premiumType, w.PremiumTypes.TIER_2),
        W = (0, R.AP)(H?.id ?? null),
        K = (0, N.A)(W).some((e) => e.id === A.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: s()(M.k, n),
        "aria-label": P.intl.string(P.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === A.A.ORB_PROFILE_BADGE,
                i = (0, v.e0)(e.id),
                d = null != i || e.id === x.K,
                T = p?.userId === H?.id,
                S = (t) => {
                    if ((j({ action: "PRESS_BADGE" }), (0, b.R9)({ badge: e.id, analyticsLocations: F, ...B }), n))
                        return void (0, _.Cz)({
                            tab: L.G2.ORBS,
                            analyticsLocations: F,
                            analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (d) {
                        if (
                            (t.preventDefault(),
                            y.default.track(D.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: Y,
                                viewed_user_id: p?.userId,
                            }),
                            Y)
                        ) {
                            T ? (0, E.pX)(D.BVt.NITRO_HOME) : (0, h.D)({ analyticsLocations: F, displayProfile: p }),
                                I?.();
                            return;
                        }
                        if (T) {
                            let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: F }) : null;
                            if (null == n) return;
                            return I?.(), n(t);
                        }
                        return (0, h.D)({ analyticsLocations: F, displayProfile: p }), void I?.();
                    }
                    let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: F }) : null;
                    if (null != r) return I?.(), r(t);
                },
                C = () => {
                    e.id === N.h &&
                        y.default.track(D.HAw.QUEST_CONTENT_VIEWED, {
                            ...(0, g.fF)(m.uF.QUEST_BADGE),
                            is_targeted: !1,
                        }),
                        j({ action: "HOVER_BADGE" }),
                        (0, b.sQ)({ badge: e.id, analyticsLocations: F, ...B });
                },
                R = void 0 !== i && e.id !== x.K,
                w = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, O.L7)(e.icon),
                    className: s()(M.q, a),
                }),
                P = {
                    onClick: S,
                    onMouseEnter: C,
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: G && null != i ? `drop-shadow(0 0 5px ${i.glowColor})` : void 0 },
                };
            if (R) {
                let n = (0, r.jsx)(l.MzZ, { ...P, ref: V, children: w });
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(f.A, {
                            badgeId: e.id,
                            targetElementRef: V,
                            mode: "tooltip",
                            tooltipDelay: O.In,
                            body: e.description,
                            onShow: () => {
                                y.default.track(D.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (T ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: 220,
                            children: n,
                        }),
                    },
                    `${e.id}-${t}`,
                );
            }
            let W = (0, r.jsx)(l.MzZ, { ...P, children: w }),
                z = k({ badge: e, tieredTenureBadge: d && e.id !== x.K ? i : void 0, currentUserOwnsOrbBadge: K });
            return (0, r.jsx)(
                o.m,
                {
                    __unsupportedReactNodeAsText: z,
                    forceOpen: null != U && U(e.id),
                    delay: O.In,
                    ariaHidden: !0,
                    children: W,
                },
                `${e.id}-${t}`,
            );
        }),
    });
}
