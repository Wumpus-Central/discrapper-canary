"use strict";
n.d(t, { A: () => G });
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
    h = n(603538),
    p = n(30084),
    g = n(341915),
    E = n(590202),
    A = n(976860),
    I = n(305003),
    T = n(588455),
    y = n(287809),
    S = n(954571),
    v = n(474090),
    C = n(439174),
    b = n(183555),
    N = n(672385),
    R = n(262),
    O = n(950191),
    D = n(518477),
    L = n(652215),
    w = n(758836),
    x = n(788868),
    P = n(854232),
    M = n(985018),
    k = n(30777);
let U = (e) => {
    let { badge: t, tieredTenureBadge: n, currentUserOwnsOrbBadge: i } = e;
    return t.id === I.A.ORB_PROFILE_BADGE
        ? (0, r.jsx)(T.A, { showSubtext: !i && !t.isPreviewMode })
        : void 0 !== n && t.id !== P.K
          ? (0, r.jsx)(h.A, { profileBadge: t, tenureBadge: n })
          : t.description;
};
function G(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: a,
            displayProfile: h,
            onClose: T,
            shouldOpenBadgeTooltip: G,
            shouldGlowTenureBadge: F,
        } = e,
        V = i.useRef(null),
        { analyticsLocations: B } = (0, d.Ay)(c.A.BADGE),
        { context: j, trackUserProfileAction: H } = (0, b.NJ)(),
        Y = y.default.getCurrentUser(),
        W = (0, v.CC)(Y?.premiumType, x.PremiumTypes.TIER_2),
        K = (0, O.AP)(Y?.id ?? null),
        $ = (0, R.A)(K).some((e) => e.id === I.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: s()(k.k, n),
        "aria-label": M.intl.string(M.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === I.A.ORB_PROFILE_BADGE,
                i = (0, C.e0)(e.id),
                d = null != i || e.id === P.K,
                y = h?.userId === Y?.id,
                v = (t) => {
                    if ((H({ action: "PRESS_BADGE" }), (0, N.R9)({ badge: e.id, analyticsLocations: B, ...j }), n))
                        return void (0, _.Cz)({
                            tab: w.G2.ORBS,
                            analyticsLocations: B,
                            analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                        });
                    if (d) {
                        if (
                            (t.preventDefault(),
                            S.default.track(L.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: W,
                                viewed_user_id: h?.userId,
                            }),
                            W)
                        ) {
                            y ? (0, A.pX)(L.BVt.NITRO_HOME) : (0, p.D)({ analyticsLocations: B, displayProfile: h }),
                                T?.();
                            return;
                        }
                        if (y) {
                            let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: B }) : null;
                            if (null == n) return;
                            return T?.(), n(t);
                        }
                        return (0, p.D)({ analyticsLocations: B, displayProfile: h }), void T?.();
                    }
                    let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: B }) : null;
                    if (null != r) return T?.(), r(t);
                },
                b = () => {
                    e.id === R.h &&
                        S.default.track(L.HAw.QUEST_CONTENT_VIEWED, {
                            ...(0, E.fF)(g.uF.QUEST_BADGE),
                            is_targeted: !1,
                        }),
                        H({ action: "HOVER_BADGE" }),
                        (0, N.sQ)({ badge: e.id, analyticsLocations: B, ...j });
                },
                O = void 0 !== i && e.id !== P.K,
                x = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, D.L7)(e.icon),
                    className: s()(k.q, a),
                }),
                M = {
                    onClick: v,
                    onMouseEnter: b,
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: F && null != i ? `drop-shadow(0 0 5px ${i.glowColor})` : void 0 },
                };
            if (O) {
                let n = (0, r.jsx)(l.MzZ, { ...M, ref: V, children: x });
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(f.A, {
                            badgeId: e.id,
                            targetElementRef: V,
                            mode: "tooltip",
                            tooltipDelay: D.In,
                            body: e.description,
                            onShow: () => {
                                S.default.track(L.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (y ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: 220,
                            children: n,
                        }),
                    },
                    `${e.id}-${t}`,
                );
            }
            let K = (0, r.jsx)(l.MzZ, { ...M, children: x }),
                z = U({ badge: e, tieredTenureBadge: d && e.id !== P.K ? i : void 0, currentUserOwnsOrbBadge: $ });
            return (0, r.jsx)(
                o.m,
                {
                    __unsupportedReactNodeAsText: z,
                    forceOpen: null != G && G(e.id),
                    delay: D.In,
                    ariaHidden: !0,
                    children: K,
                },
                `${e.id}-${t}`,
            );
        }),
    });
}
