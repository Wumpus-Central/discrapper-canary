"use strict";
n.d(t, { A: () => em });
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
            [h.A],
            () =>
                null == o || null == r
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: h.A.getBadgeById(o, r),
                          currentTier: h.A.getCurrentTier(o, r),
                          obtainedAt: h.A.getObtainedAt(o, r),
                      },
            [o, r],
        ),
        d = (0, E.bG)([m.A], () => m.A.useReducedMotion),
        _ = l?.badge_id === p.$.PREMIUM_TENURE,
        f = o === p.$.LEGACY_USERNAME,
        A = u?.name,
        I = _ ? S.intl.string(S.t.Ipxkog) : (l?.name ?? s),
        N = null != A ? `${I} ${A}` : I,
        C = (d ? void 0 : l?.complex_icon_animated_url) ?? l?.complex_icon_static_url ?? l?.simple_icon_url ?? a;
    if (f) return (0, i.jsx)(y, { userId: r, title: N, badgeImage: C, rarity: l?.rarity, children: t });
    let v = null != c ? S.intl.formatToPlainString(S.t["0aEh2a"], { date: new Date(c) }) : void 0;
    return (0, i.jsx)(g.A, {
        title: N,
        body: v,
        badgeImage: C,
        badgeName: N,
        rarity: l?.rarity,
        variant: _ ? "nitro" : "default",
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
var C = n(192308);
let v = function () {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: r,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, C.openModalLazy)(
        async () => {
            let { default: s } = await Promise.all([n.e("53502"), n.e("9473")]).then(n.bind(n, 613752));
            return (n) => (0, i.jsx)(s, { ...n, initialBadgeId: e, targetUserId: t, targetUsername: r });
        },
        { stackingBehavior: "stack" },
    );
};
var O = n(859040),
    R = n(459192);
function b(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(R.u, {
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
var D = n(116833),
    L = n(704640),
    w = n(425713),
    M = n(642481),
    P = n(720879),
    x = n(788868),
    U = n(49999),
    k = n(518477);
let G = (e) => {
    let {
            badgeId: t = x.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            targetElementRef: a,
            progressCircleText: o,
            progressCirclePercent: l,
            progressCircleUrgency: u,
            onShow: c,
        } = e,
        d = x.VD[t].nameUnformattedNitro,
        _ = S.intl.string(d).toLocaleUpperCase(),
        f = x.VD[t].rarity,
        h = (0, L.A)(t),
        p = (0, w.I)(t).standard;
    (0, r.useEffect)(() => {
        D.m[D.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(U.i.USER_DISMISS);
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
            component: D.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: _, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: _,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(P.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: k.In,
              onShow: c,
              ...m,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(M.A, {
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
var F = n(534514),
    V = n(834730),
    B = n(775549);
let H = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: B.R, children: [t, (0, i.jsx)("div", { className: B.A, children: n }), r] });
};
var j = n(224016),
    Y = n(74824);
let W = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, w.I)(n.id).standard;
    return (0, i.jsxs)(H, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(j.A, { width: 56, className: Y.R }),
        children: [
            (0, i.jsx)(F.D, { variant: "heading-xl/extrabold", children: S.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(V.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Y.K,
                children: t.description,
            }),
        ],
    });
};
var K = n(30084),
    z = n(507107),
    $ = n(590202),
    q = n(976860),
    Z = n(305003),
    X = n(312640),
    Q = n(798618),
    J = n(752079),
    ee = n(414690);
function et(e) {
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
                children: [(0, i.jsx)(en, { showSubtext: a }), (0, i.jsx)(Q.F, {})],
            }),
        ],
    });
}
function en(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(H, {
        assetComponent: (0, i.jsx)(J.A, { className: ee.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(F.D, {
            variant: "heading-md/extrabold",
            className: ee.RK,
            children: S.intl.string(S.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(F.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : ee.Qn,
                children: S.intl.string(S.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(V.E, { variant: "text-xs/normal", className: ee.lV, children: S.intl.string(S.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ei = n(287809),
    er = n(174459),
    es = n(474090),
    ea = n(439174),
    eo = n(183555),
    el = n(47675);
let eu = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ec = n(262),
    ed = n(999291);
function e_(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: s, premiumGuildSince: a } = e,
        o = (0, k.L7)(s),
        l = S.intl.string(S.t.OAq2KW).toLocaleUpperCase(),
        u = S.intl.formatToPlainString(S.t.rTUArF, { date: a });
    return (0, i.jsx)(P.A, {
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
var ef = n(652215),
    eh = n(758836);
let ep = "premium";
var eE = n(992028);
function em(e) {
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
        C = r.useRef(null),
        { analyticsLocations: R } = (0, d.Ay)(c.A.BADGE),
        { context: D, trackUserProfileAction: L } = (0, eo.NJ)(),
        w = ei.default.getCurrentUser(),
        M = (0, es.CC)(w?.premiumType, x.PremiumTypes.TIER_2),
        P = eu.useConfig({ location: "UserProfileBadgeList" }).enabled,
        U = (function (e) {
            let { location: t } = e;
            return f.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        U && p?.userId != null && !h.A.hasCatalogFor(p.userId) && (0, _.R)(p.userId);
    }, [U, p?.userId]);
    let F = (0, ed.AP)(w?.id ?? null),
        V = (0, ec.A)(F).some((e) => e.id === Z.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: a()(eE.k, n),
        "aria-label": S.intl.string(S.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === Z.A.ORB_PROFILE_BADGE,
                r = (0, ea.e0)(e.id),
                d = null != r || e.id === ep,
                _ = p?.userId === w?.id,
                f = "april_fools_2026" === e.id,
                h = e.id.startsWith(k.Ky),
                S = void 0 !== r && e.id !== ep,
                x = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, k.L7)(e.icon),
                    className: a()(eE.q, s),
                }),
                F = null != m && m(e.id),
                B = {
                    onClick: (t) => {
                        L({ action: "PRESS_BADGE" }), (0, el.R9)({ badge: e.id, analyticsLocations: R, ...D });
                        let i = e.id.startsWith("staff") && !_;
                        if (U && !i) {
                            t.preventDefault();
                            let n = p?.userId != null ? ei.default.getUser(p.userId) : null;
                            v({
                                initialBadgeId: (0, T.P3)(e.id),
                                targetUserId: p?.userId,
                                targetUsername: n?.globalName ?? n?.username,
                            });
                            return;
                        }
                        if (n) {
                            (0, O.Cz)({
                                tab: eh.G2.ORBS,
                                analyticsLocations: R,
                                analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                E?.();
                            return;
                        }
                        if (d) {
                            if (
                                (t.preventDefault(),
                                er.default.track(ef.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: M,
                                    viewed_user_id: p?.userId,
                                }),
                                M)
                            ) {
                                _
                                    ? (0, q.pX)(ef.BVt.NITRO_HOME)
                                    : (0, K.D)({ analyticsLocations: R, displayProfile: p }),
                                    E?.();
                                return;
                            }
                            if (_) {
                                let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: R }) : null;
                                if (null == n) return;
                                return E?.(), n(t);
                            }
                            return (0, K.D)({ analyticsLocations: R, displayProfile: p }), void E?.();
                        }
                        let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: R }) : null;
                        if (null != r) return E?.(), r(t);
                    },
                    onMouseEnter: () => {
                        e.id === ec.h &&
                            er.default.track(ef.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, $.fF)(z.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            L({ action: "HOVER_BADGE" }),
                            (0, el.sQ)({ badge: e.id, analyticsLocations: R, ...D });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: g && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (U)
                return (0, i.jsx)(
                    N,
                    {
                        legacyBadgeId: e.id,
                        userId: p?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? (0, k.L7)(e.icon),
                        children: (0, i.jsx)(l.Anchor, { ...B, children: x }),
                    },
                    `${e.id}-${t}`,
                );
            if (S) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: A, children: x });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(G, {
                            badgeId: e.id,
                            targetElementRef: A,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                er.default.track(ef.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: I, children: x });
                return (0, i.jsx)(
                    et,
                    {
                        targetElementRef: I,
                        delay: k.In,
                        showSubtext: !V && !e.isPreviewMode,
                        forceOpen: F,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (f) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: y, children: x });
                return (0, i.jsx)(
                    b,
                    { targetElementRef: y, delay: k.In, forceOpen: F, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (h && p?.premiumGuildSince != null && P) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: C, children: x });
                return (0, i.jsx)(
                    e_,
                    {
                        targetElementRef: C,
                        delay: k.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: p.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let H = (0, i.jsx)(l.Anchor, { ...B, children: x }),
                j = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ep
                        ? (0, i.jsx)(W, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: d && e.id !== ep ? r : void 0 });
            return (0, i.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: j, forceOpen: F, delay: k.In, ariaHidden: !0, children: H },
                `${e.id}-${t}`,
            );
        }),
    });
}
