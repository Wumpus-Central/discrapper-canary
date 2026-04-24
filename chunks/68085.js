t.d(n, { A: () => ei });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    a = t.n(i),
    s = t(990078),
    o = t(349288),
    d = t(464792),
    u = t(793574),
    c = t(688810);
let m = (0, t(945810).mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var f = t(192308),
    p = t(693477),
    g = t(459192);
function h(e) {
    let { targetElementRef: n, delay: t, forceOpen: r, badgeDescription: i, children: a } = e;
    return (0, l.jsx)(g.u, {
        targetElementRef: n,
        delay: t,
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
var x = t(116833),
    j = t(704640),
    v = t(425713),
    C = t(642481),
    E = t(720879),
    b = t(788868),
    A = t(49999),
    y = t(985018);
let R = (e) => {
    let {
            badgeId: n = b.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: t,
            children: i,
            mode: a = "popover",
            tooltipDelay: s = 300,
            targetElementRef: o,
            body: d,
            progressCircleText: u,
            progressCirclePercent: c,
            progressCircleUrgency: m,
            actions: f,
            onShow: p,
            estimatedTooltipHeight: g = 300,
        } = e,
        h = b.VD[n].nameUnformattedNitro,
        R = y.intl.string(h).toLocaleUpperCase(),
        _ = (0, j.A)(n),
        k = (0, v.I)(n).standard;
    (0, r.useEffect)(() => {
        x.m[x.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = k);
    }, [k]);
    let N = (0, r.useCallback)(() => {
            t?.(A.i.USER_DISMISS);
        }, [t]),
        I = {
            gradientColor: _,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: x.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: k, alt: R, progressCircleText: u, progressCirclePercent: c, progressCircleUrgency: m },
            },
            title: R,
            body: d,
            actions: f,
        };
    return "tooltip" === a
        ? (0, l.jsx)(E.A, { targetElementRef: o, estimatedTooltipHeight: g, delay: s, onShow: p, ...I, children: i })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  i,
                  (0, l.jsx)(C.A, {
                      targetElementRef: o,
                      shouldShow: !0,
                      onRequestClose: N,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...I,
                  }),
              ],
          });
};
var _ = t(534514),
    k = t(834730),
    N = t(775549);
let I = (e) => {
    let { assetComponent: n, tooltipWordmarkComponent: t, children: r } = e;
    return (0, l.jsxs)("div", { className: N.R, children: [n, (0, l.jsx)("div", { className: N.A, children: t }), r] });
};
var D = t(224016),
    S = t(74824);
let T = (e) => {
    let { profileBadge: n, tenureBadge: t } = e,
        r = (0, v.I)(t.id).standard;
    return (0, l.jsxs)(I, {
        assetComponent: (0, l.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, l.jsx)(D.A, { width: 56, className: S.R }),
        children: [
            (0, l.jsx)(_.D, { variant: "heading-xl/extrabold", children: y.intl.string(t.nameUnformatted) }),
            (0, l.jsx)(k.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: S.K,
                children: n.description,
            }),
        ],
    });
};
var O = t(30084),
    w = t(507107),
    B = t(590202),
    G = t(976860),
    L = t(305003),
    M = t(312640),
    P = t(798618),
    H = t(752079),
    U = t(414690);
function F(e) {
    let { children: n, targetElementRef: t, delay: i, showSubtext: a, forceOpen: s } = e,
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
    let f = r.useCallback(() => {
            m();
        }, [m]),
        p = r.useCallback(() => {
            c(), d(!1);
        }, [c]);
    return (0, l.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: p,
        children: [
            n,
            (0, l.jsxs)(M.x, {
                targetElementRef: t,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, l.jsx)(V, { showSubtext: a }), (0, l.jsx)(P.F, {})],
            }),
        ],
    });
}
function V(e) {
    let { showSubtext: n = !1 } = e;
    return (0, l.jsxs)(I, {
        assetComponent: (0, l.jsx)(H.A, { className: U.jc }),
        tooltipWordmarkComponent: (0, l.jsx)(_.D, {
            variant: "heading-md/extrabold",
            className: U.RK,
            children: y.intl.string(y.t.ElYQFS),
        }),
        children: [
            (0, l.jsx)(_.D, {
                variant: "heading-xl/extrabold",
                className: n ? void 0 : U.Qn,
                children: y.intl.string(y.t.lTHkqd),
            }),
            n
                ? (0, l.jsx)(k.E, { variant: "text-xs/normal", className: U.lV, children: y.intl.string(y.t.MEV0GI) })
                : void 0,
        ],
    });
}
var $ = t(287809),
    W = t(954571),
    z = t(474090),
    K = t(439174),
    q = t(183555),
    Q = t(47675);
let Y = (0, t(250105).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var J = t(262),
    X = t(999291),
    Z = t(518477);
function ee(e) {
    let { children: n, targetElementRef: t, delay: r, badgeIcon: i, premiumGuildSince: a } = e,
        s = (0, Z.L7)(i),
        o = y.intl.string(y.t.OAq2KW).toLocaleUpperCase(),
        d = y.intl.formatToPlainString(y.t.rTUArF, { date: a });
    return (0, l.jsx)(E.A, {
        targetElementRef: t,
        estimatedTooltipHeight: 220,
        delay: r,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: s, aspectRatio: "6/4" },
        title: o,
        body: d,
        children: n,
    });
}
var en = t(652215),
    et = t(758836);
let el = "premium";
var er = t(992028);
function ei(e) {
    let {
            badges: n,
            className: i,
            badgeClassName: g,
            displayProfile: x,
            onClose: j,
            shouldOpenBadgeTooltip: v,
            shouldGlowTenureBadge: C,
        } = e,
        E = r.useRef(null),
        A = r.useRef(null),
        _ = r.useRef(null),
        k = r.useRef(null),
        { analyticsLocations: N } = (0, c.Ay)(u.A.BADGE),
        { context: I, trackUserProfileAction: D } = (0, q.NJ)(),
        S = $.default.getCurrentUser(),
        M = (0, z.CC)(S?.premiumType, b.PremiumTypes.TIER_2),
        P = Y.useConfig({ location: "UserProfileBadgeList" }).enabled,
        H = (function (e) {
            let { location: n } = e;
            return m.useConfig({ location: n }).enabled;
        })({ location: "UserProfileBadgeList" }),
        U = (0, X.AP)(S?.id ?? null),
        V = (0, J.A)(U).some((e) => e.id === L.A.ORB_PROFILE_BADGE);
    return (0, l.jsx)("div", {
        className: a()(er.k, i),
        "aria-label": y.intl.string(y.t.VWV0y5),
        role: "group",
        children: n.map((e, n) => {
            let r = e.id === L.A.ORB_PROFILE_BADGE,
                i = (0, K.e0)(e.id),
                c = null != i || e.id === el,
                m = x?.userId === S?.id,
                b = "april_fools_2026" === e.id,
                y = e.id.startsWith(Z.Ky),
                U = void 0 !== i && e.id !== el,
                $ = (0, l.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, Z.L7)(e.icon),
                    className: a()(er.q, g),
                }),
                z = null != v && v(e.id),
                q = {
                    onClick: (n) => {
                        D({ action: "PRESS_BADGE" }), (0, Q.R9)({ badge: e.id, analyticsLocations: N, ...I });
                        let i = e.id.startsWith("staff") && !m;
                        if (H && !i) {
                            n.preventDefault(),
                                (0, f.openModalLazy)(
                                    async () => {
                                        let { default: e } = await t.e("79879").then(t.bind(t, 367706));
                                        return (n) => (0, l.jsx)(e, { ...n });
                                    },
                                    { stackingBehavior: "stack" },
                                );
                            return;
                        }
                        if (r) {
                            (0, p.Cz)({
                                tab: et.G2.ORBS,
                                analyticsLocations: N,
                                analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                j?.();
                            return;
                        }
                        if (c) {
                            if (
                                (n.preventDefault(),
                                W.default.track(en.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: M,
                                    viewed_user_id: x?.userId,
                                }),
                                M)
                            ) {
                                m
                                    ? (0, G.pX)(en.BVt.NITRO_HOME)
                                    : (0, O.D)({ analyticsLocations: N, displayProfile: x }),
                                    j?.();
                                return;
                            }
                            if (m) {
                                let t = null != e.link ? (0, d.default)(e.link, { analyticsLocations: N }) : null;
                                if (null == t) return;
                                return j?.(), t(n);
                            }
                            return (0, O.D)({ analyticsLocations: N, displayProfile: x }), void j?.();
                        }
                        let a = null != e.link ? (0, d.default)(e.link, { analyticsLocations: N }) : null;
                        if (null != a) return j?.(), a(n);
                    },
                    onMouseEnter: () => {
                        e.id === J.h &&
                            W.default.track(en.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, B.fF)(w.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            D({ action: "HOVER_BADGE" }),
                            (0, Q.sQ)({ badge: e.id, analyticsLocations: N, ...I });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: C && null != i ? `drop-shadow(0 0 5px ${i.glowColor})` : void 0 },
                };
            if (U) {
                let t = (0, l.jsx)(o.Anchor, { ...q, ref: E, children: $ });
                return (0, l.jsx)(
                    "div",
                    {
                        children: (0, l.jsx)(R, {
                            badgeId: e.id,
                            targetElementRef: E,
                            mode: "tooltip",
                            tooltipDelay: Z.In,
                            body: e.description,
                            onShow: () => {
                                W.default.track(en.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (m ? "self" : "other"),
                                });
                            },
                            estimatedTooltipHeight: 220,
                            children: t,
                        }),
                    },
                    `${e.id}-${n}`,
                );
            }
            if (r) {
                let t = (0, l.jsx)(o.Anchor, { ...q, ref: A, children: $ });
                return (0, l.jsx)(
                    F,
                    {
                        targetElementRef: A,
                        delay: Z.In,
                        showSubtext: !V && !e.isPreviewMode,
                        forceOpen: z,
                        children: t,
                    },
                    `${e.id}-${n}`,
                );
            }
            if (b) {
                let t = (0, l.jsx)(o.Anchor, { ...q, ref: _, children: $ });
                return (0, l.jsx)(
                    h,
                    { targetElementRef: _, delay: Z.In, forceOpen: z, badgeDescription: e.description, children: t },
                    `${e.id}-${n}`,
                );
            }
            if (y && x?.premiumGuildSince != null && P) {
                let t = (0, l.jsx)(o.Anchor, { ...q, ref: k, children: $ });
                return (0, l.jsx)(
                    ee,
                    {
                        targetElementRef: k,
                        delay: Z.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: x.premiumGuildSince,
                        children: t,
                    },
                    `${e.id}-${n}`,
                );
            }
            let Y = (0, l.jsx)(o.Anchor, { ...q, children: $ }),
                X = ((e) => {
                    let { badge: n, tieredTenureBadge: t } = e;
                    return void 0 !== t && n.id !== el
                        ? (0, l.jsx)(T, { profileBadge: n, tenureBadge: t })
                        : n.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== el ? i : void 0 });
            return (0, l.jsx)(
                s.m,
                { __unsupportedReactNodeAsText: X, forceOpen: z, delay: Z.In, ariaHidden: !0, children: Y },
                `${e.id}-${n}`,
            );
        }),
    });
}
