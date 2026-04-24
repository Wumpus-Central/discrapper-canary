"use strict";
n.d(t, { A: () => ei });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(349288),
    d = n(464792),
    _ = n(793574),
    u = n(688810),
    c = n(29292),
    E = n(459192);
function h(e) {
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
var m = n(116833),
    f = n(704640),
    g = n(425713),
    p = n(642481),
    A = n(720879),
    I = n(788868),
    T = n(49999),
    S = n(985018);
let N = (e) => {
    let {
            badgeId: t = I.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            mode: a = "popover",
            tooltipDelay: o = 300,
            targetElementRef: l,
            body: d,
            progressCircleText: _,
            progressCirclePercent: u,
            progressCircleUrgency: c,
            actions: E,
            onShow: h,
            estimatedTooltipHeight: N = 300,
        } = e,
        C = I.VD[t].nameUnformattedNitro,
        R = S.intl.string(C).toLocaleUpperCase(),
        O = (0, f.A)(t),
        y = (0, g.I)(t).standard;
    (0, r.useEffect)(() => {
        m.m[m.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = y);
    }, [y]);
    let v = (0, r.useCallback)(() => {
            n?.(T.i.USER_DISMISS);
        }, [n]),
        D = {
            gradientColor: O,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: m.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: y, alt: R, progressCircleText: _, progressCirclePercent: u, progressCircleUrgency: c },
            },
            title: R,
            body: d,
            actions: E,
        };
    return "tooltip" === a
        ? (0, i.jsx)(A.A, { targetElementRef: l, estimatedTooltipHeight: N, delay: o, onShow: h, ...D, children: s })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(p.A, {
                      targetElementRef: l,
                      shouldShow: !0,
                      onRequestClose: v,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...D,
                  }),
              ],
          });
};
var C = n(534514),
    R = n(834730),
    O = n(775549);
let y = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: O.R, children: [t, (0, i.jsx)("div", { className: O.A, children: n }), r] });
};
var v = n(224016),
    D = n(74824);
let L = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, g.I)(n.id).standard;
    return (0, i.jsxs)(y, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(v.A, { width: 56, className: D.R }),
        children: [
            (0, i.jsx)(C.D, { variant: "heading-xl/extrabold", children: S.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(R.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: D.K,
                children: t.description,
            }),
        ],
    });
};
var b = n(30084),
    w = n(507107),
    P = n(590202),
    k = n(976860),
    M = n(305003),
    U = n(312640),
    x = n(798618),
    G = n(752079),
    V = n(414690);
function F(e) {
    let { children: t, targetElementRef: n, delay: s, showSubtext: a, forceOpen: o } = e,
        [l, d] = r.useState(!1),
        _ = r.useRef(null),
        u = r.useCallback(() => {
            null != _.current && (clearTimeout(_.current), (_.current = null));
        }, []);
    r.useEffect(() => u, [u]);
    let c = r.useCallback(() => {
        u(),
            (_.current = window.setTimeout(() => {
                (_.current = null), d(!0);
            }, s));
    }, [s, u]);
    r.useEffect(() => {
        o && !l && c();
    }, [o, l, c]);
    let E = r.useCallback(() => {
            c();
        }, [c]),
        h = r.useCallback(() => {
            u(), d(!1);
        }, [u]);
    return (0, i.jsxs)("div", {
        onMouseEnter: E,
        onMouseLeave: h,
        children: [
            t,
            (0, i.jsxs)(U.x, {
                targetElementRef: n,
                shouldShow: !!(l || o),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(B, { showSubtext: a }), (0, i.jsx)(x.F, {})],
            }),
        ],
    });
}
function B(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(y, {
        assetComponent: (0, i.jsx)(G.A, { className: V.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(C.D, {
            variant: "heading-md/extrabold",
            className: V.RK,
            children: S.intl.string(S.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(C.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : V.Qn,
                children: S.intl.string(S.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(R.E, { variant: "text-xs/normal", className: V.lV, children: S.intl.string(S.t.MEV0GI) })
                : void 0,
        ],
    });
}
var H = n(287809),
    j = n(954571),
    W = n(474090),
    Y = n(439174),
    K = n(183555),
    z = n(47675);
let $ = (0, n(250105).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var q = n(262),
    X = n(999291),
    Z = n(518477);
function Q(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: s, premiumGuildSince: a } = e,
        o = (0, Z.L7)(s),
        l = S.intl.string(S.t.OAq2KW).toLocaleUpperCase(),
        d = S.intl.formatToPlainString(S.t.rTUArF, { date: a });
    return (0, i.jsx)(A.A, {
        targetElementRef: n,
        estimatedTooltipHeight: 220,
        delay: r,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: o, aspectRatio: "6/4" },
        title: l,
        body: d,
        children: t,
    });
}
var J = n(652215),
    ee = n(758836);
let et = "premium";
var en = n(992028);
function ei(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: E,
            onClose: m,
            shouldOpenBadgeTooltip: f,
            shouldGlowTenureBadge: g,
        } = e,
        p = r.useRef(null),
        A = r.useRef(null),
        T = r.useRef(null),
        C = r.useRef(null),
        { analyticsLocations: R } = (0, u.Ay)(_.A.BADGE),
        { context: O, trackUserProfileAction: y } = (0, K.NJ)(),
        v = H.default.getCurrentUser(),
        D = (0, W.CC)(v?.premiumType, I.PremiumTypes.TIER_2),
        U = $.useConfig({ location: "UserProfileBadgeList" }).enabled,
        x = (0, X.AP)(v?.id ?? null),
        G = (0, q.A)(x).some((e) => e.id === M.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: a()(en.k, n),
        "aria-label": S.intl.string(S.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === M.A.ORB_PROFILE_BADGE,
                r = (0, Y.e0)(e.id),
                u = null != r || e.id === et,
                I = E?.userId === v?.id,
                S = "april_fools_2026" === e.id,
                x = e.id.startsWith(Z.Ky),
                V = void 0 !== r && e.id !== et,
                B = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, Z.L7)(e.icon),
                    className: a()(en.q, s),
                }),
                H = null != f && f(e.id),
                W = {
                    onClick: (t) => {
                        if (
                            (y({ action: "PRESS_BADGE" }), (0, z.R9)({ badge: e.id, analyticsLocations: R, ...O }), n)
                        ) {
                            (0, c.Cz)({
                                tab: ee.G2.ORBS,
                                analyticsLocations: R,
                                analyticsSource: _.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                m?.();
                            return;
                        }
                        if (u) {
                            if (
                                (t.preventDefault(),
                                j.default.track(J.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: D,
                                    viewed_user_id: E?.userId,
                                }),
                                D)
                            ) {
                                I
                                    ? (0, k.pX)(J.BVt.NITRO_HOME)
                                    : (0, b.D)({ analyticsLocations: R, displayProfile: E }),
                                    m?.();
                                return;
                            }
                            if (I) {
                                let n = null != e.link ? (0, d.default)(e.link, { analyticsLocations: R }) : null;
                                if (null == n) return;
                                return m?.(), n(t);
                            }
                            return (0, b.D)({ analyticsLocations: R, displayProfile: E }), void m?.();
                        }
                        let i = null != e.link ? (0, d.default)(e.link, { analyticsLocations: R }) : null;
                        if (null != i) return m?.(), i(t);
                    },
                    onMouseEnter: () => {
                        e.id === q.h &&
                            j.default.track(J.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, P.fF)(w.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            y({ action: "HOVER_BADGE" }),
                            (0, z.sQ)({ badge: e.id, analyticsLocations: R, ...O });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: g && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (V) {
                let n = (0, i.jsx)(l.Anchor, { ...W, ref: p, children: B });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(N, {
                            badgeId: e.id,
                            targetElementRef: p,
                            mode: "tooltip",
                            tooltipDelay: Z.In,
                            body: e.description,
                            onShow: () => {
                                j.default.track(J.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (I ? "self" : "other"),
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
                let n = (0, i.jsx)(l.Anchor, { ...W, ref: A, children: B });
                return (0, i.jsx)(
                    F,
                    {
                        targetElementRef: A,
                        delay: Z.In,
                        showSubtext: !G && !e.isPreviewMode,
                        forceOpen: H,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (S) {
                let n = (0, i.jsx)(l.Anchor, { ...W, ref: T, children: B });
                return (0, i.jsx)(
                    h,
                    { targetElementRef: T, delay: Z.In, forceOpen: H, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (x && E?.premiumGuildSince != null && U) {
                let n = (0, i.jsx)(l.Anchor, { ...W, ref: C, children: B });
                return (0, i.jsx)(
                    Q,
                    {
                        targetElementRef: C,
                        delay: Z.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: E.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let K = (0, i.jsx)(l.Anchor, { ...W, children: B }),
                $ = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== et
                        ? (0, i.jsx)(L, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: u && e.id !== et ? r : void 0 });
            return (0, i.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: $, forceOpen: H, delay: Z.In, ariaHidden: !0, children: K },
                `${e.id}-${t}`,
            );
        }),
    });
}
