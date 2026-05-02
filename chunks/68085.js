n.d(t, { A: () => es });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(349288),
    d = n(464792),
    u = n(793574),
    c = n(688810);
let E = (0, n(945810).mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var _ = n(192308);
let m = function () {
    let { initialBadgeId: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, _.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("13445"), n.e("68629")]).then(n.bind(n, 825076));
            return (n) => (0, l.jsx)(t, { ...n, initialBadgeId: e });
        },
        { stackingBehavior: "stack" },
    );
};
var g = n(859040),
    p = n(459192);
function f(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: i, children: a } = e;
    return (0, l.jsx)(p.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: i,
        children: a,
    });
}
var h = n(116833),
    R = n(704640),
    v = n(425713),
    x = n(642481),
    A = n(720879),
    O = n(788868),
    I = n(49999),
    b = n(375708);
let U = (e) => {
    let {
            badgeId: t = O.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: i,
            mode: a = "popover",
            tooltipDelay: s = 300,
            targetElementRef: o,
            body: d,
            progressCircleText: u,
            progressCirclePercent: c,
            progressCircleUrgency: E,
            actions: _,
            onShow: m,
            estimatedTooltipHeight: g = 300,
        } = e,
        p = O.VD[t].nameUnformattedNitro,
        f = b.intl.string(p).toLocaleUpperCase(),
        U = (0, R.A)(t),
        C = (0, v.I)(t).standard;
    (0, r.useEffect)(() => {
        h.m[h.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = C);
    }, [C]);
    let T = (0, r.useCallback)(() => {
            n?.(I.i.USER_DISMISS);
        }, [n]),
        S = {
            gradientColor: U,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: h.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: C, alt: f, progressCircleText: u, progressCirclePercent: c, progressCircleUrgency: E },
            },
            title: f,
            body: d,
            actions: _,
        };
    return "tooltip" === a
        ? (0, l.jsx)(A.A, { targetElementRef: o, estimatedTooltipHeight: g, delay: s, onShow: m, ...S, children: i })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  i,
                  (0, l.jsx)(x.A, {
                      targetElementRef: o,
                      shouldShow: !0,
                      onRequestClose: T,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...S,
                  }),
              ],
          });
};
var C = n(534514),
    T = n(834730),
    S = n(775549);
let j = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, l.jsxs)("div", { className: S.R, children: [t, (0, l.jsx)("div", { className: S.A, children: n }), r] });
};
var D = n(224016),
    L = n(74824);
let y = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, v.I)(n.id).standard;
    return (0, l.jsxs)(j, {
        assetComponent: (0, l.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, l.jsx)(D.A, { width: 56, className: L.R }),
        children: [
            (0, l.jsx)(C.D, { variant: "heading-xl/extrabold", children: b.intl.string(n.nameUnformatted) }),
            (0, l.jsx)(T.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: L.K,
                children: t.description,
            }),
        ],
    });
};
var N = n(30084),
    P = n(507107),
    B = n(590202),
    k = n(976860),
    M = n(305003),
    G = n(312640),
    $ = n(798618),
    H = n(752079),
    w = n(414690);
function F(e) {
    let { children: t, targetElementRef: n, delay: i, showSubtext: a, forceOpen: s } = e,
        [o, d] = r.useState(!1),
        u = r.useRef(null),
        c = r.useCallback(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }, []);
    r.useEffect(() => c, [c]);
    let E = r.useCallback(() => {
        c(),
            (u.current = window.setTimeout(() => {
                (u.current = null), d(!0);
            }, i));
    }, [i, c]);
    r.useEffect(() => {
        s && !o && E();
    }, [s, o, E]);
    let _ = r.useCallback(() => {
            E();
        }, [E]),
        m = r.useCallback(() => {
            c(), d(!1);
        }, [c]);
    return (0, l.jsxs)("div", {
        onMouseEnter: _,
        onMouseLeave: m,
        children: [
            t,
            (0, l.jsxs)(G.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, l.jsx)(V, { showSubtext: a }), (0, l.jsx)($.F, {})],
            }),
        ],
    });
}
function V(e) {
    let { showSubtext: t = !1 } = e;
    return (0, l.jsxs)(j, {
        assetComponent: (0, l.jsx)(H.A, { className: w.jc }),
        tooltipWordmarkComponent: (0, l.jsx)(C.D, {
            variant: "heading-md/extrabold",
            className: w.RK,
            children: b.intl.string(b.t.ElYQFS),
        }),
        children: [
            (0, l.jsx)(C.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : w.Qn,
                children: b.intl.string(b.t.lTHkqd),
            }),
            t
                ? (0, l.jsx)(T.E, { variant: "text-xs/normal", className: w.lV, children: b.intl.string(b.t.MEV0GI) })
                : void 0,
        ],
    });
}
var Q = n(287809),
    Y = n(174459),
    q = n(474090),
    K = n(439174),
    W = n(183555),
    z = n(47675);
let J = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var X = n(262),
    Z = n(999291),
    ee = n(518477);
function et(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: i, premiumGuildSince: a } = e,
        s = (0, ee.L7)(i),
        o = b.intl.string(b.t.OAq2KW).toLocaleUpperCase(),
        d = b.intl.formatToPlainString(b.t.rTUArF, { date: a });
    return (0, l.jsx)(A.A, {
        targetElementRef: n,
        estimatedTooltipHeight: 220,
        delay: r,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: s, aspectRatio: "6/4" },
        title: o,
        body: d,
        children: t,
    });
}
var en = n(652215),
    el = n(92111),
    er = n(758836);
let ei = "premium";
var ea = n(992028);
function es(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: i,
            displayProfile: _,
            onClose: p,
            shouldOpenBadgeTooltip: h,
            shouldGlowTenureBadge: R,
        } = e,
        v = r.useRef(null),
        x = r.useRef(null),
        A = r.useRef(null),
        I = r.useRef(null),
        { analyticsLocations: C } = (0, c.Ay)(u.A.BADGE),
        { context: T, trackUserProfileAction: S } = (0, W.NJ)(),
        j = Q.default.getCurrentUser(),
        D = (0, q.CC)(j?.premiumType, O.PremiumTypes.TIER_2),
        L = J.useConfig({ location: "UserProfileBadgeList" }).enabled,
        G = (function (e) {
            let { location: t } = e;
            return E.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        $ = (0, Z.AP)(j?.id ?? null),
        H = (0, X.A)($).some((e) => e.id === M.A.ORB_PROFILE_BADGE);
    return (0, l.jsx)("div", {
        className: a()(ea.k, n),
        "aria-label": b.intl.string(b.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === M.A.ORB_PROFILE_BADGE,
                r = (0, K.e0)(e.id),
                c = null != r || e.id === ei,
                E = _?.userId === j?.id,
                O = "april_fools_2026" === e.id,
                b = e.id.startsWith(ee.Ky),
                $ = void 0 !== r && e.id !== ei,
                w = (0, l.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, ee.L7)(e.icon),
                    className: a()(ea.q, i),
                }),
                V = null != h && h(e.id),
                Q = {
                    onClick: (t) => {
                        S({ action: "PRESS_BADGE" }), (0, z.R9)({ badge: e.id, analyticsLocations: C, ...T });
                        let l = e.id.startsWith("staff") && !E;
                        if (G && !l) {
                            t.preventDefault(), m({ initialBadgeId: (0, el.P)(e.id) });
                            return;
                        }
                        if (n) {
                            (0, g.Cz)({
                                tab: er.G2.ORBS,
                                analyticsLocations: C,
                                analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                p?.();
                            return;
                        }
                        if (c) {
                            if (
                                (t.preventDefault(),
                                Y.default.track(en.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: D,
                                    viewed_user_id: _?.userId,
                                }),
                                D)
                            ) {
                                E
                                    ? (0, k.pX)(en.BVt.NITRO_HOME)
                                    : (0, N.D)({ analyticsLocations: C, displayProfile: _ }),
                                    p?.();
                                return;
                            }
                            if (E) {
                                let n = null != e.link ? (0, d.default)(e.link, { analyticsLocations: C }) : null;
                                if (null == n) return;
                                return p?.(), n(t);
                            }
                            return (0, N.D)({ analyticsLocations: C, displayProfile: _ }), void p?.();
                        }
                        let r = null != e.link ? (0, d.default)(e.link, { analyticsLocations: C }) : null;
                        if (null != r) return p?.(), r(t);
                    },
                    onMouseEnter: () => {
                        e.id === X.h &&
                            Y.default.track(en.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, B.fF)(P.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            S({ action: "HOVER_BADGE" }),
                            (0, z.sQ)({ badge: e.id, analyticsLocations: C, ...T });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: R && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if ($) {
                let n = (0, l.jsx)(o.Anchor, { ...Q, ref: v, children: w });
                return (0, l.jsx)(
                    "div",
                    {
                        children: (0, l.jsx)(U, {
                            badgeId: e.id,
                            targetElementRef: v,
                            mode: "tooltip",
                            tooltipDelay: ee.In,
                            body: e.description,
                            onShow: () => {
                                Y.default.track(en.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (E ? "self" : "other"),
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
                let n = (0, l.jsx)(o.Anchor, { ...Q, ref: x, children: w });
                return (0, l.jsx)(
                    F,
                    {
                        targetElementRef: x,
                        delay: ee.In,
                        showSubtext: !H && !e.isPreviewMode,
                        forceOpen: V,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (O) {
                let n = (0, l.jsx)(o.Anchor, { ...Q, ref: A, children: w });
                return (0, l.jsx)(
                    f,
                    { targetElementRef: A, delay: ee.In, forceOpen: V, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (b && _?.premiumGuildSince != null && L) {
                let n = (0, l.jsx)(o.Anchor, { ...Q, ref: I, children: w });
                return (0, l.jsx)(
                    et,
                    {
                        targetElementRef: I,
                        delay: ee.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: _.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let q = (0, l.jsx)(o.Anchor, { ...Q, children: w }),
                W = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ei
                        ? (0, l.jsx)(y, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== ei ? r : void 0 });
            return (0, l.jsx)(
                s.m,
                { __unsupportedReactNodeAsText: W, forceOpen: V, delay: ee.In, ariaHidden: !0, children: q },
                `${e.id}-${t}`,
            );
        }),
    });
}
