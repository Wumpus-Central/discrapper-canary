"use strict";
n.d(t, { A: () => eo });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(349288),
    u = n(464792),
    c = n(793574),
    d = n(688810);
let _ = (0, n(945810).mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var f = n(192308);
let h = function () {
    let { initialBadgeId: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, f.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("13445"), n.e("68629")]).then(n.bind(n, 825076));
            return (n) => (0, i.jsx)(t, { ...n, initialBadgeId: e });
        },
        { stackingBehavior: "stack" },
    );
};
var p = n(859040),
    E = n(459192);
function m(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(E.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: s,
        children: a,
    });
}
var g = n(116833),
    A = n(704640),
    I = n(425713),
    T = n(642481),
    S = n(720879),
    N = n(788868),
    y = n(49999),
    C = n(375708);
let v = (e) => {
    let {
            badgeId: t = N.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            mode: a = "popover",
            tooltipDelay: o = 300,
            targetElementRef: l,
            body: u,
            progressCircleText: c,
            progressCirclePercent: d,
            progressCircleUrgency: _,
            actions: f,
            onShow: h,
            estimatedTooltipHeight: p = 300,
        } = e,
        E = N.VD[t].nameUnformattedNitro,
        m = C.intl.string(E).toLocaleUpperCase(),
        v = (0, A.A)(t),
        O = (0, I.I)(t).standard;
    (0, r.useEffect)(() => {
        g.m[g.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = O);
    }, [O]);
    let R = (0, r.useCallback)(() => {
            n?.(y.i.USER_DISMISS);
        }, [n]),
        b = {
            gradientColor: v,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: g.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: O, alt: m, progressCircleText: c, progressCirclePercent: d, progressCircleUrgency: _ },
            },
            title: m,
            body: u,
            actions: f,
        };
    return "tooltip" === a
        ? (0, i.jsx)(S.A, { targetElementRef: l, estimatedTooltipHeight: p, delay: o, onShow: h, ...b, children: s })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(T.A, {
                      targetElementRef: l,
                      shouldShow: !0,
                      onRequestClose: R,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...b,
                  }),
              ],
          });
};
var O = n(534514),
    R = n(834730),
    b = n(775549);
let D = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: b.R, children: [t, (0, i.jsx)("div", { className: b.A, children: n }), r] });
};
var L = n(224016),
    w = n(74824);
let M = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, I.I)(n.id).standard;
    return (0, i.jsxs)(D, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(L.A, { width: 56, className: w.R }),
        children: [
            (0, i.jsx)(O.D, { variant: "heading-xl/extrabold", children: C.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(R.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: w.K,
                children: t.description,
            }),
        ],
    });
};
var P = n(30084),
    x = n(507107),
    U = n(590202),
    k = n(976860),
    G = n(305003),
    F = n(312640),
    V = n(798618),
    B = n(752079),
    H = n(414690);
function j(e) {
    let { children: t, targetElementRef: n, delay: s, showSubtext: a, forceOpen: o } = e,
        [l, u] = r.useState(!1),
        c = r.useRef(null),
        d = r.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    r.useEffect(() => d, [d]);
    let _ = r.useCallback(() => {
        d(),
            (c.current = window.setTimeout(() => {
                (c.current = null), u(!0);
            }, s));
    }, [s, d]);
    r.useEffect(() => {
        o && !l && _();
    }, [o, l, _]);
    let f = r.useCallback(() => {
            _();
        }, [_]),
        h = r.useCallback(() => {
            d(), u(!1);
        }, [d]);
    return (0, i.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: h,
        children: [
            t,
            (0, i.jsxs)(F.x, {
                targetElementRef: n,
                shouldShow: !!(l || o),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(Y, { showSubtext: a }), (0, i.jsx)(V.F, {})],
            }),
        ],
    });
}
function Y(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(D, {
        assetComponent: (0, i.jsx)(B.A, { className: H.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(O.D, {
            variant: "heading-md/extrabold",
            className: H.RK,
            children: C.intl.string(C.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(O.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : H.Qn,
                children: C.intl.string(C.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(R.E, { variant: "text-xs/normal", className: H.lV, children: C.intl.string(C.t.MEV0GI) })
                : void 0,
        ],
    });
}
var W = n(287809),
    K = n(174459),
    z = n(474090),
    $ = n(439174),
    q = n(183555),
    Z = n(47675);
let X = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var Q = n(262),
    J = n(999291),
    ee = n(518477);
function et(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: s, premiumGuildSince: a } = e,
        o = (0, ee.L7)(s),
        l = C.intl.string(C.t.OAq2KW).toLocaleUpperCase(),
        u = C.intl.formatToPlainString(C.t.rTUArF, { date: a });
    return (0, i.jsx)(S.A, {
        targetElementRef: n,
        estimatedTooltipHeight: 220,
        delay: r,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: o, aspectRatio: "6/4" },
        title: l,
        body: u,
        children: t,
    });
}
var en = n(652215),
    ei = n(92111),
    er = n(758836);
let es = "premium";
var ea = n(992028);
function eo(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: f,
            onClose: E,
            shouldOpenBadgeTooltip: g,
            shouldGlowTenureBadge: A,
        } = e,
        I = r.useRef(null),
        T = r.useRef(null),
        S = r.useRef(null),
        y = r.useRef(null),
        { analyticsLocations: O } = (0, d.Ay)(c.A.BADGE),
        { context: R, trackUserProfileAction: b } = (0, q.NJ)(),
        D = W.default.getCurrentUser(),
        L = (0, z.CC)(D?.premiumType, N.PremiumTypes.TIER_2),
        w = X.useConfig({ location: "UserProfileBadgeList" }).enabled,
        F = (function (e) {
            let { location: t } = e;
            return _.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        V = (0, J.AP)(D?.id ?? null),
        B = (0, Q.A)(V).some((e) => e.id === G.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: a()(ea.k, n),
        "aria-label": C.intl.string(C.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === G.A.ORB_PROFILE_BADGE,
                r = (0, $.e0)(e.id),
                d = null != r || e.id === es,
                _ = f?.userId === D?.id,
                N = "april_fools_2026" === e.id,
                C = e.id.startsWith(ee.Ky),
                V = void 0 !== r && e.id !== es,
                H = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, ee.L7)(e.icon),
                    className: a()(ea.q, s),
                }),
                Y = null != g && g(e.id),
                W = {
                    onClick: (t) => {
                        b({ action: "PRESS_BADGE" }), (0, Z.R9)({ badge: e.id, analyticsLocations: O, ...R });
                        let i = e.id.startsWith("staff") && !_;
                        if (F && !i) {
                            t.preventDefault(), h({ initialBadgeId: (0, ei.P)(e.id) });
                            return;
                        }
                        if (n) {
                            (0, p.Cz)({
                                tab: er.G2.ORBS,
                                analyticsLocations: O,
                                analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                E?.();
                            return;
                        }
                        if (d) {
                            if (
                                (t.preventDefault(),
                                K.default.track(en.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: L,
                                    viewed_user_id: f?.userId,
                                }),
                                L)
                            ) {
                                _
                                    ? (0, k.pX)(en.BVt.NITRO_HOME)
                                    : (0, P.D)({ analyticsLocations: O, displayProfile: f }),
                                    E?.();
                                return;
                            }
                            if (_) {
                                let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: O }) : null;
                                if (null == n) return;
                                return E?.(), n(t);
                            }
                            return (0, P.D)({ analyticsLocations: O, displayProfile: f }), void E?.();
                        }
                        let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: O }) : null;
                        if (null != r) return E?.(), r(t);
                    },
                    onMouseEnter: () => {
                        e.id === Q.h &&
                            K.default.track(en.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, U.fF)(x.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            b({ action: "HOVER_BADGE" }),
                            (0, Z.sQ)({ badge: e.id, analyticsLocations: O, ...R });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: A && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (V) {
                let n = (0, i.jsx)(l.Anchor, { ...W, ref: I, children: H });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(v, {
                            badgeId: e.id,
                            targetElementRef: I,
                            mode: "tooltip",
                            tooltipDelay: ee.In,
                            body: e.description,
                            onShow: () => {
                                K.default.track(en.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (_ ? "self" : "other"),
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
                let n = (0, i.jsx)(l.Anchor, { ...W, ref: T, children: H });
                return (0, i.jsx)(
                    j,
                    {
                        targetElementRef: T,
                        delay: ee.In,
                        showSubtext: !B && !e.isPreviewMode,
                        forceOpen: Y,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (N) {
                let n = (0, i.jsx)(l.Anchor, { ...W, ref: S, children: H });
                return (0, i.jsx)(
                    m,
                    { targetElementRef: S, delay: ee.In, forceOpen: Y, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (C && f?.premiumGuildSince != null && w) {
                let n = (0, i.jsx)(l.Anchor, { ...W, ref: y, children: H });
                return (0, i.jsx)(
                    et,
                    {
                        targetElementRef: y,
                        delay: ee.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: f.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let z = (0, i.jsx)(l.Anchor, { ...W, children: H }),
                q = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== es
                        ? (0, i.jsx)(M, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: d && e.id !== es ? r : void 0 });
            return (0, i.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: q, forceOpen: Y, delay: ee.In, ariaHidden: !0, children: z },
                `${e.id}-${t}`,
            );
        }),
    });
}
