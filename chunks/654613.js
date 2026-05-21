"use strict";
n.d(t, { A: () => eh });
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
    A = n(92111),
    I = n(375708);
function T(e) {
    let { children: t, legacyBadgeId: n, userId: r, fallbackTitle: s, fallbackIconSrc: a } = e,
        o = (0, A.P3)(n),
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
        f = u?.name,
        T = _ ? I.intl.string(I.t.Ipxkog) : (l?.name ?? s),
        S = null != f ? `${T} ${f}` : T,
        N = (d ? void 0 : l?.complex_icon_animated_url) ?? l?.complex_icon_static_url ?? l?.simple_icon_url ?? a,
        y = null != c ? I.intl.formatToPlainString(I.t["0aEh2a"], { date: new Date(c) }) : void 0;
    return (0, i.jsx)(g.A, {
        title: S,
        body: y,
        badgeImage: N,
        badgeName: S,
        rarity: l?.rarity,
        variant: _ ? "nitro" : "default",
        children: t,
    });
}
var S = n(192308);
let N = function () {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: r,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, S.openModalLazy)(
        async () => {
            let { default: s } = await Promise.all([n.e("13445"), n.e("62762")]).then(n.bind(n, 235121));
            return (n) => (0, i.jsx)(s, { ...n, initialBadgeId: e, targetUserId: t, targetUsername: r });
        },
        { stackingBehavior: "stack" },
    );
};
var y = n(859040),
    C = n(459192);
function v(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(C.u, {
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
var O = n(116833),
    R = n(704640),
    b = n(425713),
    D = n(642481),
    L = n(720879),
    w = n(788868),
    M = n(49999),
    P = n(518477);
let x = (e) => {
    let {
            badgeId: t = w.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            targetElementRef: a,
            progressCircleText: o,
            progressCirclePercent: l,
            progressCircleUrgency: u,
            onShow: c,
        } = e,
        d = w.VD[t].nameUnformattedNitro,
        _ = I.intl.string(d).toLocaleUpperCase(),
        f = w.VD[t].rarity,
        h = (0, R.A)(t),
        p = (0, b.I)(t).standard;
    (0, r.useEffect)(() => {
        O.m[O.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(M.i.USER_DISMISS);
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
            component: O.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: _, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: _,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(L.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: P.In,
              onShow: c,
              ...m,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(D.A, {
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
var U = n(534514),
    k = n(834730),
    G = n(775549);
let F = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: G.R, children: [t, (0, i.jsx)("div", { className: G.A, children: n }), r] });
};
var V = n(224016),
    B = n(74824);
let H = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, b.I)(n.id).standard;
    return (0, i.jsxs)(F, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(V.A, { width: 56, className: B.R }),
        children: [
            (0, i.jsx)(U.D, { variant: "heading-xl/extrabold", children: I.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(k.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: B.K,
                children: t.description,
            }),
        ],
    });
};
var j = n(30084),
    Y = n(507107),
    W = n(590202),
    K = n(976860),
    z = n(305003),
    $ = n(312640),
    q = n(798618),
    Z = n(752079),
    X = n(414690);
function Q(e) {
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
            (0, i.jsxs)($.x, {
                targetElementRef: n,
                shouldShow: !!(l || o),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(J, { showSubtext: a }), (0, i.jsx)(q.F, {})],
            }),
        ],
    });
}
function J(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(F, {
        assetComponent: (0, i.jsx)(Z.A, { className: X.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(U.D, {
            variant: "heading-md/extrabold",
            className: X.RK,
            children: I.intl.string(I.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(U.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : X.Qn,
                children: I.intl.string(I.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(k.E, { variant: "text-xs/normal", className: X.lV, children: I.intl.string(I.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ee = n(287809),
    et = n(174459),
    en = n(474090),
    ei = n(439174),
    er = n(183555),
    es = n(47675);
let ea = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eo = n(262),
    el = n(999291);
function eu(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: s, premiumGuildSince: a } = e,
        o = (0, P.L7)(s),
        l = I.intl.string(I.t.OAq2KW).toLocaleUpperCase(),
        u = I.intl.formatToPlainString(I.t.rTUArF, { date: a });
    return (0, i.jsx)(L.A, {
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
var ec = n(652215),
    ed = n(758836);
let e_ = "premium";
var ef = n(992028);
function eh(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: p,
            onClose: E,
            shouldOpenBadgeTooltip: m,
            shouldGlowTenureBadge: g,
        } = e,
        S = r.useRef(null),
        C = r.useRef(null),
        O = r.useRef(null),
        R = r.useRef(null),
        { analyticsLocations: b } = (0, d.Ay)(c.A.BADGE),
        { context: D, trackUserProfileAction: L } = (0, er.NJ)(),
        M = ee.default.getCurrentUser(),
        U = (0, en.CC)(M?.premiumType, w.PremiumTypes.TIER_2),
        k = ea.useConfig({ location: "UserProfileBadgeList" }).enabled,
        G = (function (e) {
            let { location: t } = e;
            return f.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        G && p?.userId != null && !h.A.hasCatalogFor(p.userId) && (0, _.R)(p.userId);
    }, [G, p?.userId]);
    let F = (0, el.AP)(M?.id ?? null),
        V = (0, eo.A)(F).some((e) => e.id === z.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: a()(ef.k, n),
        "aria-label": I.intl.string(I.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === z.A.ORB_PROFILE_BADGE,
                r = (0, ei.e0)(e.id),
                d = null != r || e.id === e_,
                _ = p?.userId === M?.id,
                f = "april_fools_2026" === e.id,
                h = e.id.startsWith(P.Ky),
                I = void 0 !== r && e.id !== e_,
                w = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, P.L7)(e.icon),
                    className: a()(ef.q, s),
                }),
                F = null != m && m(e.id),
                B = {
                    onClick: (t) => {
                        L({ action: "PRESS_BADGE" }), (0, es.R9)({ badge: e.id, analyticsLocations: b, ...D });
                        let i = e.id.startsWith("staff") && !_;
                        if (G && !i) {
                            t.preventDefault();
                            let n = p?.userId != null ? ee.default.getUser(p.userId) : null;
                            N({
                                initialBadgeId: (0, A.P3)(e.id),
                                targetUserId: p?.userId,
                                targetUsername: n?.globalName ?? n?.username,
                            });
                            return;
                        }
                        if (n) {
                            (0, y.Cz)({
                                tab: ed.G2.ORBS,
                                analyticsLocations: b,
                                analyticsSource: c.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                E?.();
                            return;
                        }
                        if (d) {
                            if (
                                (t.preventDefault(),
                                et.default.track(ec.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: U,
                                    viewed_user_id: p?.userId,
                                }),
                                U)
                            ) {
                                _
                                    ? (0, K.pX)(ec.BVt.NITRO_HOME)
                                    : (0, j.D)({ analyticsLocations: b, displayProfile: p }),
                                    E?.();
                                return;
                            }
                            if (_) {
                                let n = null != e.link ? (0, u.default)(e.link, { analyticsLocations: b }) : null;
                                if (null == n) return;
                                return E?.(), n(t);
                            }
                            return (0, j.D)({ analyticsLocations: b, displayProfile: p }), void E?.();
                        }
                        let r = null != e.link ? (0, u.default)(e.link, { analyticsLocations: b }) : null;
                        if (null != r) return E?.(), r(t);
                    },
                    onMouseEnter: () => {
                        e.id === eo.h &&
                            et.default.track(ec.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, W.fF)(Y.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            L({ action: "HOVER_BADGE" }),
                            (0, es.sQ)({ badge: e.id, analyticsLocations: b, ...D });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: g && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (G)
                return (0, i.jsx)(
                    T,
                    {
                        legacyBadgeId: e.id,
                        userId: p?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? (0, P.L7)(e.icon),
                        children: (0, i.jsx)(l.Anchor, { ...B, children: w }),
                    },
                    `${e.id}-${t}`,
                );
            if (I) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: S, children: w });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(x, {
                            badgeId: e.id,
                            targetElementRef: S,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                et.default.track(ec.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: C, children: w });
                return (0, i.jsx)(
                    Q,
                    {
                        targetElementRef: C,
                        delay: P.In,
                        showSubtext: !V && !e.isPreviewMode,
                        forceOpen: F,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (f) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: O, children: w });
                return (0, i.jsx)(
                    v,
                    { targetElementRef: O, delay: P.In, forceOpen: F, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (h && p?.premiumGuildSince != null && k) {
                let n = (0, i.jsx)(l.Anchor, { ...B, ref: R, children: w });
                return (0, i.jsx)(
                    eu,
                    {
                        targetElementRef: R,
                        delay: P.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: p.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let $ = (0, i.jsx)(l.Anchor, { ...B, children: w }),
                q = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== e_
                        ? (0, i.jsx)(H, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: d && e.id !== e_ ? r : void 0 });
            return (0, i.jsx)(
                o.m,
                { __unsupportedReactNodeAsText: q, forceOpen: F, delay: P.In, ariaHidden: !0, children: $ },
                `${e.id}-${t}`,
            );
        }),
    });
}
