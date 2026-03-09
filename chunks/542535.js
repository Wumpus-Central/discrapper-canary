"use strict";
n.d(t, { A: () => U });
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
    f = n(508591),
    p = n(603538),
    h = n(30084),
    m = n(341915),
    E = n(590202),
    g = n(976860),
    A = n(305003),
    I = n(588455),
    T = n(287809),
    S = n(954571),
    y = n(474090),
    v = n(439174),
    N = n(183555),
    C = n(672385),
    R = n(262),
    O = n(950191),
    b = n(518477),
    D = n(652215),
    L = n(758836),
    w = n(788868),
    M = n(854232),
    x = n(985018),
    P = n(448263);
let k = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === A.A.ORB_PROFILE_BADGE
        ? (0, r.jsx)(I.A, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== M.K
          ? (0, r.jsx)(p.A, { profileBadge: t, tenureBadge: n })
          : t.description;
};
function U(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: p,
            onClose: I,
            shouldOpenBadgeTooltip: U,
            shouldGlowTenureBadge: G,
        } = e,
        F = i.useRef(null),
        { analyticsLocations: V } = (0, d.Ay)(c.A.BADGE),
        { context: B, trackUserProfileAction: H } = (0, N.NJ)(),
        j = T.default.getCurrentUser(),
        Y = (0, y.CC)(j?.premiumType, w.PremiumTypes.TIER_2),
        W = (0, O.AP)(j?.id ?? null),
        K = (0, R.A)(W).some((e) => e.id === A.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: a()(P.k, n),
        "aria-label": x.intl.string(x.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === A.A.ORB_PROFILE_BADGE,
                i = (0, v.e0)(e.id),
                d = null != i || e.id === M.K,
                T = p?.userId === j?.id,
                y = (t) => {
                    if ((H({ action: "PRESS_BADGE" }), (0, C.R9)({ badge: e.id, analyticsLocations: V, ...B }), n))
                        return void (0, _.Cz)({
                            tab: L.G2.ORBS,
                            analyticsLocations: V,
                            analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (d) {
                        if (
                            (t.preventDefault(),
                            S.default.track(D.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: Y,
                                viewed_user_id: p?.userId,
                            }),
                            Y)
                        ) {
                            T ? (0, g.pX)(D.BVt.NITRO_HOME) : (0, h.D)({ analyticsLocations: V, displayProfile: p }),
                                I?.();
                            return;
                        }
                        if (T) {
                            let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: V }) : null;
                            if (null == n) return;
                            return I?.(), n(t);
                        }
                        return (0, h.D)({ analyticsLocations: V, displayProfile: p }), void I?.();
                    }
                    let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: V }) : null;
                    if (null != r) return I?.(), r(t);
                },
                N = () => {
                    e.id === R.h &&
                        S.default.track(D.HAw.QUEST_CONTENT_VIEWED, {
                            ...(0, E.fF)(m.uF.QUEST_BADGE),
                            is_targeted: !1,
                        }),
                        H({ action: "HOVER_BADGE" }),
                        (0, C.sQ)({ badge: e.id, analyticsLocations: V, ...B });
                },
                O = void 0 !== i && e.id !== M.K,
                w = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, b.L7)(e.icon),
                    className: a()(P.q, s),
                }),
                x = {
                    onClick: y,
                    onMouseEnter: N,
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: G && null != i ? `drop-shadow(0 0 5px ${i.glowColor})` : void 0 },
                };
            if (O) {
                let n = (0, r.jsx)(l.MzZ, { ...x, ref: F, children: w });
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(f.A, {
                            badgeId: e.id,
                            targetElementRef: F,
                            mode: "tooltip",
                            tooltipDelay: b.In,
                            body: e.description,
                            onShow: () => {
                                S.default.track(D.HAw.TOOLTIP_VIEWED, {
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
            let W = (0, r.jsx)(l.MzZ, { ...x, children: w }),
                $ = k({ badge: e, tieredTenureBadge: d && e.id !== M.K ? i : void 0, currentUserOwnsOrbBadge: K });
            return (0, r.jsx)(
                o.m,
                {
                    __unsupportedReactNodeAsText: $,
                    forceOpen: null != U && U(e.id),
                    delay: b.In,
                    ariaHidden: !0,
                    children: W,
                },
                `${e.id}-${t}`,
            );
        }),
    });
}
