"use strict";
n.d(t, { A: () => el });
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
            let { default: t } = await Promise.all([n.e("13445"), n.e("9778")]).then(n.bind(n, 890473));
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
    T = n(716574),
    S = n(642481),
    N = n(720879),
    y = n(788868),
    C = n(49999),
    v = n(518477),
    O = n(375708);
let R = (e) => {
    let {
            badgeId: t = y.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            targetElementRef: a,
            progressCircleText: o,
            progressCirclePercent: l,
            progressCircleUrgency: u,
            onShow: c,
        } = e,
        d = y.VD[t].nameUnformattedNitro,
        _ = O.intl.string(d).toLocaleUpperCase(),
        f = y.VD[t].rarity,
        h = (0, A.A)(t),
        p = (0, I.I)(t).standard;
    (0, r.useEffect)(() => {
        g.m[g.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(C.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode)
        return (0, i.jsx)(T.A, {
            targetElementRef: a,
            onShow: c,
            title: _,
            body: e.body,
            variant: "nitro",
            rarity: f,
            graphic: {
                type: "dynamic",
                component: g.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "16/9",
                props: {
                    src: p,
                    alt: _,
                    progressCircleText: o,
                    progressCirclePercent: l,
                    progressCircleUrgency: u,
                    compact: !0,
                },
            },
            children: s,
        });
    let m = {
        gradientColor: h,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: g.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: _, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: _,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(N.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: v.In,
              onShow: c,
              ...m,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(S.A, {
                      targetElementRef: a,
                      shouldShow: !0,
                      onRequestClose: E,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...m,
                  }),
              ],
          });
};
var b = n(534514),
    D = n(834730),
    L = n(775549);
let w = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: L.R, children: [t, (0, i.jsx)("div", { className: L.A, children: n }), r] });
};
var M = n(224016),
    P = n(74824);
let x = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, I.I)(n.id).standard;
    return (0, i.jsxs)(w, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(M.A, { width: 56, className: P.R }),
        children: [
            (0, i.jsx)(b.D, { variant: "heading-xl/extrabold", children: O.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: P.K,
                children: t.description,
            }),
        ],
    });
};
var U = n(30084),
    k = n(507107),
    G = n(590202),
    F = n(976860),
    V = n(305003),
    B = n(312640),
    H = n(798618),
    j = n(752079),
    Y = n(414690);
function W(e) {
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
            (0, i.jsxs)(B.x, {
                targetElementRef: n,
                shouldShow: !!(l || o),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(K, { showSubtext: a }), (0, i.jsx)(H.F, {})],
            }),
        ],
    });
}
function K(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(w, {
        assetComponent: (0, i.jsx)(j.A, { className: Y.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(b.D, {
            variant: "heading-md/extrabold",
            className: Y.RK,
            children: O.intl.string(O.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(b.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : Y.Qn,
                children: O.intl.string(O.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(D.E, { variant: "text-xs/normal", className: Y.lV, children: O.intl.string(O.t.MEV0GI) })
                : void 0,
        ],
    });
}
var z = n(287809),
    $ = n(174459),
    q = n(474090),
    Z = n(439174),
    X = n(183555),
    Q = n(47675);
let J = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ee = n(262),
    et = n(999291);
function en(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: s, premiumGuildSince: a } = e,
        o = (0, v.L7)(s),
        l = O.intl.string(O.t.OAq2KW).toLocaleUpperCase(),
        u = O.intl.formatToPlainString(O.t.rTUArF, { date: a });
    return (0, i.jsx)(N.A, {
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
var ei = n(652215),
    er = n(92111),
    es = n(758836);
let ea = "premium";
var eo = n(992028);
function el(e) {
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
        N = r.useRef(null),
        { analyticsLocations: C } = (0, d.Ay)(c.A.BADGE),
        { context: b, trackUserProfileAction: D } = (0, X.NJ)(),
        L = z.default.getCurrentUser(),
        w = (0, q.CC)(L?.premiumType, y.PremiumTypes.TIER_2),
        M = J.useConfig({ location: "UserProfileBadgeList" }).enabled,
        P = (function (e) {
            let { location: t } = e;
            return _.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        B = (0, et.AP)(L?.id ?? null),
        H = (0, ee.A)(B).some((e) => e.id === V.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: a()(eo.k, n),
        "aria-label": O.intl.string(O.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === V.A.ORB_PROFILE_BADGE,
                r = (0, Z.e0)(e.id),
                d = null != r || e.id === ea,
                _ = f?.userId === L?.id,
                y = "april_fools_2026" === e.id,
                B = e.id.startsWith(v.Ky),
                j = void 0 !== r && e.id !== ea,
                Y = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, v.L7)(e.icon),
                    className: a()(eo.q, s),
                }),
                K = null != g && g(e.id),
                z = {
                    onClick: (t) => {
                        D({ action: "PRESS_BADGE" }), (0, Q.R9)({ badge: e.id, analyticsLocations: C, ...b });
                        let i = e.id.startsWith("staff") && !_;
                        if (P && !i) {
                            t.preventDefault(), h({ initialBadgeId: (0, er.P3)(e.id) });
                            return;
                        }
                        if (n) {
                            (0, p.Cz)({
                                tab: es.G2.ORBS,
                                analyticsLocations: C,
                                analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                E?.();
                            return;
                        }
                        if (d) {
                            if (
                                (t.preventDefault(),
                                $.default.track(ei.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: w,
                                    viewed_user_id: f?.userId,
                                }),
                                w)
                            ) {
                                _
                                    ? (0, F.pX)(ei.BVt.NITRO_HOME)
                                    : (0, U.D)({ analyticsLocations: C, displayProfile: f }),
                                    E?.();
                                return;
                            }
                            if (_) {
                                let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: C }) : null;
                                if (null == n) return;
                                return E?.(), n(t);
                            }
                            return (0, U.D)({ analyticsLocations: C, displayProfile: f }), void E?.();
                        }
                        let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: C }) : null;
                        if (null != r) return E?.(), r(t);
                    },
                    onMouseEnter: () => {
                        e.id === ee.h &&
                            $.default.track(ei.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, G.fF)(k.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            D({ action: "HOVER_BADGE" }),
                            (0, Q.sQ)({ badge: e.id, analyticsLocations: C, ...b });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: A && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (j) {
                let n = P ? { ...z, "aria-label": O.intl.string(O.t["JEiq/c"]) } : z,
                    r = (0, i.jsx)(l.Anchor, { ...n, ref: I, children: Y });
                return (0, i.jsx)(
                    "div",
                    {
                        children: P
                            ? (0, i.jsx)(R, {
                                  badgeId: e.id,
                                  targetElementRef: I,
                                  mode: "mini-tooltip",
                                  body: "string" == typeof e.description ? e.description : void 0,
                                  onShow: () => {
                                      $.default.track(ei.HAw.TOOLTIP_VIEWED, {
                                          type: "tiered_tenure_badge_profile_" + (_ ? "self" : "other"),
                                      });
                                  },
                                  children: r,
                              })
                            : (0, i.jsx)(R, {
                                  badgeId: e.id,
                                  targetElementRef: I,
                                  mode: "tooltip",
                                  body: e.description,
                                  onShow: () => {
                                      $.default.track(ei.HAw.TOOLTIP_VIEWED, {
                                          type: "tiered_tenure_badge_profile_" + (_ ? "self" : "other"),
                                      });
                                  },
                                  estimatedTooltipHeight: 220,
                                  children: r,
                              }),
                    },
                    `${e.id}-${t}`,
                );
            }
            if (n) {
                let n = (0, i.jsx)(l.Anchor, { ...z, ref: T, children: Y });
                return (0, i.jsx)(
                    W,
                    {
                        targetElementRef: T,
                        delay: v.In,
                        showSubtext: !H && !e.isPreviewMode,
                        forceOpen: K,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (y) {
                let n = (0, i.jsx)(l.Anchor, { ...z, ref: S, children: Y });
                return (0, i.jsx)(
                    m,
                    { targetElementRef: S, delay: v.In, forceOpen: K, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (B && f?.premiumGuildSince != null && M) {
                let n = (0, i.jsx)(l.Anchor, { ...z, ref: N, children: Y });
                return (0, i.jsx)(
                    en,
                    {
                        targetElementRef: N,
                        delay: v.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: f.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let q = (0, i.jsx)(l.Anchor, { ...z, children: Y }),
                X = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ea
                        ? (0, i.jsx)(x, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: d && e.id !== ea ? r : void 0 });
            return (0, i.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: X, forceOpen: K, delay: v.In, ariaHidden: !0, children: q },
                `${e.id}-${t}`,
            );
        }),
    });
}
