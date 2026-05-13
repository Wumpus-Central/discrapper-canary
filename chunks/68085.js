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
let m = (0, n(945810).mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var g = n(192308);
let p = function () {
    let { initialBadgeId: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, g.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("13445"), n.e("68629")]).then(n.bind(n, 825076));
            return (n) => (0, l.jsx)(t, { ...n, initialBadgeId: e });
        },
        { stackingBehavior: "stack" },
    );
};
var _ = n(859040),
    f = n(459192);
function E(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: i, children: a } = e;
    return (0, l.jsx)(f.u, {
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
    v = n(704640),
    R = n(425713),
    x = n(642481),
    b = n(720879),
    C = n(788868),
    j = n(49999),
    A = n(375708);
let I = (e) => {
    let {
            badgeId: t = C.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: i,
            mode: a = "popover",
            tooltipDelay: s = 300,
            targetElementRef: o,
            body: d,
            progressCircleText: u,
            progressCirclePercent: c,
            progressCircleUrgency: m,
            actions: g,
            onShow: p,
            estimatedTooltipHeight: _ = 300,
        } = e,
        f = C.VD[t].nameUnformattedNitro,
        E = A.intl.string(f).toLocaleUpperCase(),
        I = (0, v.A)(t),
        O = (0, R.I)(t).standard;
    (0, r.useEffect)(() => {
        h.m[h.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = O);
    }, [O]);
    let y = (0, r.useCallback)(() => {
            n?.(j.i.USER_DISMISS);
        }, [n]),
        T = {
            gradientColor: I,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: h.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: O, alt: E, progressCircleText: u, progressCirclePercent: c, progressCircleUrgency: m },
            },
            title: E,
            body: d,
            actions: g,
        };
    return "tooltip" === a
        ? (0, l.jsx)(b.A, { targetElementRef: o, estimatedTooltipHeight: _, delay: s, onShow: p, ...T, children: i })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  i,
                  (0, l.jsx)(x.A, {
                      targetElementRef: o,
                      shouldShow: !0,
                      onRequestClose: y,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...T,
                  }),
              ],
          });
};
var O = n(534514),
    y = n(834730),
    T = n(775549);
let S = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, l.jsxs)("div", { className: T.R, children: [t, (0, l.jsx)("div", { className: T.A, children: n }), r] });
};
var U = n(224016),
    N = n(74824);
let D = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, R.I)(n.id).standard;
    return (0, l.jsxs)(S, {
        assetComponent: (0, l.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, l.jsx)(U.A, { width: 56, className: N.R }),
        children: [
            (0, l.jsx)(O.D, { variant: "heading-xl/extrabold", children: A.intl.string(n.nameUnformatted) }),
            (0, l.jsx)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: N.K,
                children: t.description,
            }),
        ],
    });
};
var k = n(30084),
    B = n(507107),
    L = n(590202),
    P = n(976860),
    M = n(305003),
    $ = n(312640),
    G = n(798618),
    w = n(752079),
    H = n(414690);
function F(e) {
    let { children: t, targetElementRef: n, delay: i, showSubtext: a, forceOpen: s } = e,
        [o, d] = r.useState(!1),
        u = r.useRef(null),
        c = r.useCallback(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }, []);
    r.useEffect(() => c, [c]);
    let m = r.useCallback(() => {
        c(),
            (u.current = window.setTimeout(() => {
                (u.current = null), d(!0);
            }, i));
    }, [i, c]);
    r.useEffect(() => {
        s && !o && m();
    }, [s, o, m]);
    let g = r.useCallback(() => {
            m();
        }, [m]),
        p = r.useCallback(() => {
            c(), d(!1);
        }, [c]);
    return (0, l.jsxs)("div", {
        onMouseEnter: g,
        onMouseLeave: p,
        children: [
            t,
            (0, l.jsxs)($.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, l.jsx)(V, { showSubtext: a }), (0, l.jsx)(G.F, {})],
            }),
        ],
    });
}
function V(e) {
    let { showSubtext: t = !1 } = e;
    return (0, l.jsxs)(S, {
        assetComponent: (0, l.jsx)(w.A, { className: H.jc }),
        tooltipWordmarkComponent: (0, l.jsx)(O.D, {
            variant: "heading-md/extrabold",
            className: H.RK,
            children: A.intl.string(A.t.ElYQFS),
        }),
        children: [
            (0, l.jsx)(O.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : H.Qn,
                children: A.intl.string(A.t.lTHkqd),
            }),
            t
                ? (0, l.jsx)(y.E, { variant: "text-xs/normal", className: H.lV, children: A.intl.string(A.t.MEV0GI) })
                : void 0,
        ],
    });
}
var q = n(287809),
    Q = n(174459),
    K = n(474090),
    W = n(439174),
    Y = n(183555),
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
        o = A.intl.string(A.t.OAq2KW).toLocaleUpperCase(),
        d = A.intl.formatToPlainString(A.t.rTUArF, { date: a });
    return (0, l.jsx)(b.A, {
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
            displayProfile: g,
            onClose: f,
            shouldOpenBadgeTooltip: h,
            shouldGlowTenureBadge: v,
        } = e,
        R = r.useRef(null),
        x = r.useRef(null),
        b = r.useRef(null),
        j = r.useRef(null),
        { analyticsLocations: O } = (0, c.Ay)(u.A.BADGE),
        { context: y, trackUserProfileAction: T } = (0, Y.NJ)(),
        S = q.default.getCurrentUser(),
        U = (0, K.CC)(S?.premiumType, C.PremiumTypes.TIER_2),
        N = J.useConfig({ location: "UserProfileBadgeList" }).enabled,
        $ = (function (e) {
            let { location: t } = e;
            return m.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        G = (0, Z.AP)(S?.id ?? null),
        w = (0, X.A)(G).some((e) => e.id === M.A.ORB_PROFILE_BADGE);
    return (0, l.jsx)("div", {
        className: a()(ea.k, n),
        "aria-label": A.intl.string(A.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === M.A.ORB_PROFILE_BADGE,
                r = (0, W.e0)(e.id),
                c = null != r || e.id === ei,
                m = g?.userId === S?.id,
                C = "april_fools_2026" === e.id,
                A = e.id.startsWith(ee.Ky),
                G = void 0 !== r && e.id !== ei,
                H = (0, l.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, ee.L7)(e.icon),
                    className: a()(ea.q, i),
                }),
                V = null != h && h(e.id),
                q = {
                    onClick: (t) => {
                        T({ action: "PRESS_BADGE" }), (0, z.R9)({ badge: e.id, analyticsLocations: O, ...y });
                        let l = e.id.startsWith("staff") && !m;
                        if ($ && !l) {
                            t.preventDefault(), p({ initialBadgeId: (0, el.P3)(e.id) });
                            return;
                        }
                        if (n) {
                            (0, _.Cz)({
                                tab: er.G2.ORBS,
                                analyticsLocations: O,
                                analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                f?.();
                            return;
                        }
                        if (c) {
                            if (
                                (t.preventDefault(),
                                Q.default.track(en.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: U,
                                    viewed_user_id: g?.userId,
                                }),
                                U)
                            ) {
                                m
                                    ? (0, P.pX)(en.BVt.NITRO_HOME)
                                    : (0, k.D)({ analyticsLocations: O, displayProfile: g }),
                                    f?.();
                                return;
                            }
                            if (m) {
                                let n = null != e.link ? (0, d.default)(e.link, { analyticsLocations: O }) : null;
                                if (null == n) return;
                                return f?.(), n(t);
                            }
                            return (0, k.D)({ analyticsLocations: O, displayProfile: g }), void f?.();
                        }
                        let r = null != e.link ? (0, d.default)(e.link, { analyticsLocations: O }) : null;
                        if (null != r) return f?.(), r(t);
                    },
                    onMouseEnter: () => {
                        e.id === X.h &&
                            Q.default.track(en.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, L.fF)(B.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            T({ action: "HOVER_BADGE" }),
                            (0, z.sQ)({ badge: e.id, analyticsLocations: O, ...y });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: v && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (G) {
                let n = (0, l.jsx)(o.Anchor, { ...q, ref: R, children: H });
                return (0, l.jsx)(
                    "div",
                    {
                        children: (0, l.jsx)(I, {
                            badgeId: e.id,
                            targetElementRef: R,
                            mode: "tooltip",
                            tooltipDelay: ee.In,
                            body: e.description,
                            onShow: () => {
                                Q.default.track(en.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (m ? "self" : "other"),
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
                let n = (0, l.jsx)(o.Anchor, { ...q, ref: x, children: H });
                return (0, l.jsx)(
                    F,
                    {
                        targetElementRef: x,
                        delay: ee.In,
                        showSubtext: !w && !e.isPreviewMode,
                        forceOpen: V,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (C) {
                let n = (0, l.jsx)(o.Anchor, { ...q, ref: b, children: H });
                return (0, l.jsx)(
                    E,
                    { targetElementRef: b, delay: ee.In, forceOpen: V, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (A && g?.premiumGuildSince != null && N) {
                let n = (0, l.jsx)(o.Anchor, { ...q, ref: j, children: H });
                return (0, l.jsx)(
                    et,
                    {
                        targetElementRef: j,
                        delay: ee.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: g.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let K = (0, l.jsx)(o.Anchor, { ...q, children: H }),
                Y = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ei
                        ? (0, l.jsx)(D, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== ei ? r : void 0 });
            return (0, l.jsx)(
                s.m,
                { __unsupportedReactNodeAsText: Y, forceOpen: V, delay: ee.In, ariaHidden: !0, children: K },
                `${e.id}-${t}`,
            );
        }),
    });
}
