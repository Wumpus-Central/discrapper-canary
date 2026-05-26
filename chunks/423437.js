"use strict";
n.d(t, { A: () => eE });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(349288),
    u = n(464792),
    c = n(793574),
    d = n(688810),
    _ = n(682618);
let f = (0, n(945810).mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var h = n(982240),
    p = n(70283),
    E = n(17928),
    m = n(775602),
    g = n(716574),
    A = n(841595),
    I = n(351906),
    T = n(92111),
    S = n(375708);
function N(e) {
    let { children: t, legacyBadgeId: n, userId: r, fallbackTitle: s, fallbackIconSrc: a } = e,
        o = (0, T.P3)(n),
        {
            badgeData: l,
            currentTier: u,
            obtainedAt: c,
        } = (0, E.cf)(
            [h.Ay],
            () =>
                null == o || null == r
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: h.Ay.getBadgeById(o, r),
                          currentTier: h.Ay.getCurrentTier(o, r),
                          obtainedAt: h.Ay.getObtainedAt(o, r),
                      },
            [o, r],
        ),
        d = (0, E.bG)([m.A], () => m.A.useReducedMotion),
        _ = l?.badge_id === p.$.PREMIUM_TENURE,
        f = o === p.$.LEGACY_USERNAME,
        A = u?.name,
        I = _ ? S.intl.string(S.t.Ipxkog) : (l?.name ?? s),
        N = null != A ? `${I} ${A}` : I,
        C = d ? void 0 : l?.complex_icon_animated_url,
        v = C ?? l?.complex_icon_static_url ?? l?.simple_icon_url ?? a,
        O = null != C && v === C;
    if (f) return (0, i.jsx)(y, { userId: r, title: N, badgeImage: v, rarity: l?.rarity, children: t });
    let R = null != c ? S.intl.formatToPlainString(S.t["0aEh2a"], { date: new Date(c) }) : void 0;
    return (0, i.jsx)(g.A, {
        title: N,
        body: R,
        badgeImage: v,
        badgeName: N,
        rarity: l?.rarity,
        variant: _ ? "nitro" : "default",
        isAnimated: O,
        children: t,
    });
}
function y(e) {
    let { children: t, userId: n, title: r, badgeImage: s, rarity: a } = e,
        o = (0, E.bG)(
            [A.A, I.A],
            () =>
                I.A.hidePersonalInformation
                    ? S.intl.string(S.t.Br1ls3)
                    : null != n
                      ? (A.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, i.jsx)(g.A, { title: r, body: o, badgeImage: s, badgeName: r, rarity: a, children: t });
}
var C = n(470739),
    v = n(859040),
    O = n(459192);
function R(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(O.u, {
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
var b = n(116833),
    D = n(704640),
    L = n(425713),
    w = n(642481),
    M = n(720879),
    P = n(788868),
    x = n(49999),
    U = n(518477);
let k = (e) => {
    let {
            badgeId: t = P.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            targetElementRef: a,
            progressCircleText: o,
            progressCirclePercent: l,
            progressCircleUrgency: u,
            onShow: c,
        } = e,
        d = P.VD[t].nameUnformattedNitro,
        _ = S.intl.string(d).toLocaleUpperCase(),
        f = P.VD[t].rarity,
        h = (0, D.A)(t),
        p = (0, L.I)(t).standard;
    (0, r.useEffect)(() => {
        b.m[b.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(x.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(o, l, u);
        return (0, i.jsx)(g.A, {
            targetElementRef: a,
            onShow: c,
            title: _,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: p,
            badgeName: _,
            progressCircle: t,
            children: s,
        });
    }
    let m = {
        gradientColor: h,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: b.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: _, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: _,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(M.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: U.In,
              onShow: c,
              ...m,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(w.A, {
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
var G = n(534514),
    F = n(834730),
    V = n(775549);
let B = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: V.R, children: [t, (0, i.jsx)("div", { className: V.A, children: n }), r] });
};
var H = n(224016),
    j = n(74824);
let Y = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, L.I)(n.id).standard;
    return (0, i.jsxs)(B, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(H.A, { width: 56, className: j.R }),
        children: [
            (0, i.jsx)(G.D, { variant: "heading-xl/extrabold", children: S.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(F.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: j.K,
                children: t.description,
            }),
        ],
    });
};
var W = n(30084),
    K = n(507107),
    z = n(590202),
    $ = n(976860),
    q = n(305003),
    X = n(312640),
    Z = n(798618),
    Q = n(752079),
    J = n(414690);
function ee(e) {
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
            (0, i.jsxs)(X.x, {
                targetElementRef: n,
                shouldShow: !!(l || o),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(et, { showSubtext: a }), (0, i.jsx)(Z.F, {})],
            }),
        ],
    });
}
function et(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(B, {
        assetComponent: (0, i.jsx)(Q.A, { className: J.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(G.D, {
            variant: "heading-md/extrabold",
            className: J.RK,
            children: S.intl.string(S.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(G.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : J.Qn,
                children: S.intl.string(S.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(F.E, { variant: "text-xs/normal", className: J.lV, children: S.intl.string(S.t.MEV0GI) })
                : void 0,
        ],
    });
}
var en = n(287809),
    ei = n(174459),
    er = n(474090),
    es = n(439174),
    ea = n(183555),
    eo = n(47675);
let el = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eu = n(262),
    ec = n(999291);
function ed(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: s, premiumGuildSince: a } = e,
        o = (0, U.L7)(s),
        l = S.intl.string(S.t.OAq2KW).toLocaleUpperCase(),
        u = S.intl.formatToPlainString(S.t.rTUArF, { date: a });
    return (0, i.jsx)(M.A, {
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
var e_ = n(652215),
    ef = n(758836);
let eh = "premium";
var ep = n(992028);
function eE(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: p,
            onClose: E,
            shouldOpenBadgeTooltip: m,
            shouldGlowTenureBadge: g,
        } = e,
        A = r.useRef(null),
        I = r.useRef(null),
        y = r.useRef(null),
        O = r.useRef(null),
        { analyticsLocations: b } = (0, d.Ay)(c.A.BADGE),
        { context: D, trackUserProfileAction: L } = (0, ea.NJ)(),
        w = en.default.getCurrentUser(),
        M = (0, er.CC)(w?.premiumType, P.PremiumTypes.TIER_2),
        x = el.useConfig({ location: "UserProfileBadgeList" }).enabled,
        G = (function (e) {
            let { location: t } = e;
            return f.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        G && p?.userId != null && !h.Ay.hasCatalogFor(p.userId) && (0, _.R)(p.userId);
    }, [G, p?.userId]);
    let F = (0, ec.AP)(w?.id ?? null),
        V = (0, eu.A)(F).some((e) => e.id === q.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: a()(ep.k, n),
        "aria-label": S.intl.string(S.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === q.A.ORB_PROFILE_BADGE,
                r = (0, es.e0)(e.id),
                d = null != r || e.id === eh,
                _ = p?.userId === w?.id,
                f = "april_fools_2026" === e.id,
                h = e.id.startsWith(U.Ky),
                S = void 0 !== r && e.id !== eh,
                P = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, U.L7)(e.icon),
                    className: a()(ep.q, s),
                }),
                F = null != m && m(e.id),
                B = {
                    onClick: (t) => {
                        L({ action: "PRESS_BADGE" }), (0, eo.R9)({ badge: e.id, analyticsLocations: b, ...D });
                        let i = e.id.startsWith("staff") && !_;
                        if (G && !i) {
                            t.preventDefault();
                            let n = p?.userId != null ? en.default.getUser(p.userId) : null;
                            (0, C._)({
                                initialBadgeId: (0, T.P3)(e.id),
                                targetUserId: p?.userId,
                                targetUsername: n?.globalName ?? n?.username,
                            });
                            return;
                        }
                        if (n) {
                            (0, v.Cz)({
                                tab: ef.G2.ORBS,
                                analyticsLocations: b,
                                analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                E?.();
                            return;
                        }
                        if (d) {
                            if (
                                (t.preventDefault(),
                                ei.default.track(e_.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: M,
                                    viewed_user_id: p?.userId,
                                }),
                                M)
                            ) {
                                _
                                    ? (0, $.pX)(e_.BVt.NITRO_HOME)
                                    : (0, W.D)({ analyticsLocations: b, displayProfile: p }),
                                    E?.();
                                return;
                            }
                            if (_) {
                                let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: b }) : null;
                                if (null == n) return;
                                return E?.(), n(t);
                            }
                            return (0, W.D)({ analyticsLocations: b, displayProfile: p }), void E?.();
                        }
                        let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: b }) : null;
                        if (null != r) return E?.(), r(t);
                    },
                    onMouseEnter: () => {
                        e.id === eu.h &&
                            ei.default.track(e_.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, z.fF)(K.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            L({ action: "HOVER_BADGE" }),
                            (0, eo.sQ)({ badge: e.id, analyticsLocations: b, ...D });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: g && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (G)
                return (0, i.jsx)(
                    N,
                    {
                        legacyBadgeId: e.id,
                        userId: p?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? (0, U.L7)(e.icon),
                        children: (0, i.jsx)(l.Anchor, { ...B, children: P }),
                    },
                    `${e.id}-${t}`,
                );
            if (S) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: A, children: P });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(k, {
                            badgeId: e.id,
                            targetElementRef: A,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                ei.default.track(e_.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: I, children: P });
                return (0, i.jsx)(
                    ee,
                    {
                        targetElementRef: I,
                        delay: U.In,
                        showSubtext: !V && !e.isPreviewMode,
                        forceOpen: F,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (f) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: y, children: P });
                return (0, i.jsx)(
                    R,
                    { targetElementRef: y, delay: U.In, forceOpen: F, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (h && p?.premiumGuildSince != null && x) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: O, children: P });
                return (0, i.jsx)(
                    ed,
                    {
                        targetElementRef: O,
                        delay: U.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: p.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let H = (0, i.jsx)(l.Anchor, { ...B, children: P }),
                j = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== eh
                        ? (0, i.jsx)(Y, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: d && e.id !== eh ? r : void 0 });
            return (0, i.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: j, forceOpen: F, delay: U.In, ariaHidden: !0, children: H },
                `${e.id}-${t}`,
            );
        }),
    });
}
