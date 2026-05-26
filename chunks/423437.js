n.d(t, { A: () => e_ });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(349288),
    d = n(464792),
    u = n(793574),
    c = n(688810),
    g = n(682618);
let m = (0, n(945810).mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var p = n(982240),
    f = n(70283),
    _ = n(17928),
    h = n(775602),
    E = n(716574),
    x = n(841595),
    v = n(351906),
    R = n(92111),
    b = n(375708);
function A(e) {
    let { children: t, legacyBadgeId: n, userId: l, fallbackTitle: i, fallbackIconSrc: a } = e,
        s = (0, R.P3)(n),
        {
            badgeData: o,
            currentTier: d,
            obtainedAt: u,
        } = (0, _.cf)(
            [p.Ay],
            () =>
                null == s || null == l
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: p.Ay.getBadgeById(s, l),
                          currentTier: p.Ay.getCurrentTier(s, l),
                          obtainedAt: p.Ay.getObtainedAt(s, l),
                      },
            [s, l],
        ),
        c = (0, _.bG)([h.A], () => h.A.useReducedMotion),
        g = o?.badge_id === f.$.PREMIUM_TENURE,
        m = s === f.$.LEGACY_USERNAME,
        x = d?.name,
        v = g ? b.intl.string(b.t.Ipxkog) : (o?.name ?? i),
        A = null != x ? `${v} ${x}` : v,
        y = c ? void 0 : o?.complex_icon_animated_url,
        I = y ?? o?.complex_icon_static_url ?? o?.simple_icon_url ?? a,
        j = null != y && I === y;
    if (m) return (0, r.jsx)(C, { userId: l, title: A, badgeImage: I, rarity: o?.rarity, children: t });
    let T = null != u ? b.intl.formatToPlainString(b.t["0aEh2a"], { date: new Date(u) }) : void 0;
    return (0, r.jsx)(E.A, {
        title: A,
        body: T,
        badgeImage: I,
        badgeName: A,
        rarity: o?.rarity,
        variant: g ? "nitro" : "default",
        isAnimated: j,
        children: t,
    });
}
function C(e) {
    let { children: t, userId: n, title: l, badgeImage: i, rarity: a } = e,
        s = (0, _.bG)(
            [x.A, v.A],
            () =>
                v.A.hidePersonalInformation
                    ? b.intl.string(b.t.Br1ls3)
                    : null != n
                      ? (x.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, r.jsx)(E.A, { title: l, body: s, badgeImage: i, badgeName: l, rarity: a, children: t });
}
var y = n(470739),
    I = n(859040),
    j = n(459192);
function T(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: i, children: a } = e;
    return (0, r.jsx)(j.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: l,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: i,
        children: a,
    });
}
var S = n(116833),
    O = n(704640),
    N = n(425713),
    U = n(642481),
    B = n(720879),
    D = n(788868),
    M = n(49999),
    P = n(518477);
let k = (e) => {
    let {
            badgeId: t = D.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: i,
            targetElementRef: a,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: u,
        } = e,
        c = D.VD[t].nameUnformattedNitro,
        g = b.intl.string(c).toLocaleUpperCase(),
        m = D.VD[t].rarity,
        p = (0, O.A)(t),
        f = (0, N.I)(t).standard;
    (0, l.useEffect)(() => {
        S.m[S.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = f);
    }, [f]);
    let _ = (0, l.useCallback)(() => {
        n?.(M.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, o, d);
        return (0, r.jsx)(E.A, {
            targetElementRef: a,
            onShow: u,
            title: g,
            body: e.body,
            variant: "nitro",
            rarity: m,
            badgeImage: f,
            badgeName: g,
            progressCircle: t,
            children: i,
        });
    }
    let h = {
        gradientColor: p,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: S.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: f, alt: g, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: g,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, r.jsx)(B.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: P.In,
              onShow: u,
              ...h,
              children: i,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  i,
                  (0, r.jsx)(U.A, {
                      targetElementRef: a,
                      shouldShow: !0,
                      onRequestClose: _,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...h,
                  }),
              ],
          });
};
var L = n(534514),
    w = n(834730),
    $ = n(775549);
let G = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, r.jsxs)("div", { className: $.R, children: [t, (0, r.jsx)("div", { className: $.A, children: n }), l] });
};
var H = n(224016),
    F = n(74824);
let V = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, N.I)(n.id).standard;
    return (0, r.jsxs)(G, {
        assetComponent: (0, r.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, r.jsx)(H.A, { width: 56, className: F.R }),
        children: [
            (0, r.jsx)(L.D, { variant: "heading-xl/extrabold", children: b.intl.string(n.nameUnformatted) }),
            (0, r.jsx)(w.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: F.K,
                children: t.description,
            }),
        ],
    });
};
var q = n(30084),
    Y = n(507107),
    W = n(590202),
    Q = n(976860),
    K = n(305003),
    z = n(312640),
    X = n(798618),
    J = n(752079),
    Z = n(414690);
function ee(e) {
    let { children: t, targetElementRef: n, delay: i, showSubtext: a, forceOpen: s } = e,
        [o, d] = l.useState(!1),
        u = l.useRef(null),
        c = l.useCallback(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }, []);
    l.useEffect(() => c, [c]);
    let g = l.useCallback(() => {
        c(),
            (u.current = window.setTimeout(() => {
                (u.current = null), d(!0);
            }, i));
    }, [i, c]);
    l.useEffect(() => {
        s && !o && g();
    }, [s, o, g]);
    let m = l.useCallback(() => {
            g();
        }, [g]),
        p = l.useCallback(() => {
            c(), d(!1);
        }, [c]);
    return (0, r.jsxs)("div", {
        onMouseEnter: m,
        onMouseLeave: p,
        children: [
            t,
            (0, r.jsxs)(z.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, r.jsx)(et, { showSubtext: a }), (0, r.jsx)(X.F, {})],
            }),
        ],
    });
}
function et(e) {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(G, {
        assetComponent: (0, r.jsx)(J.A, { className: Z.jc }),
        tooltipWordmarkComponent: (0, r.jsx)(L.D, {
            variant: "heading-md/extrabold",
            className: Z.RK,
            children: b.intl.string(b.t.ElYQFS),
        }),
        children: [
            (0, r.jsx)(L.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : Z.Qn,
                children: b.intl.string(b.t.lTHkqd),
            }),
            t
                ? (0, r.jsx)(w.E, { variant: "text-xs/normal", className: Z.lV, children: b.intl.string(b.t.MEV0GI) })
                : void 0,
        ],
    });
}
var en = n(287809),
    er = n(174459),
    el = n(474090),
    ei = n(439174),
    ea = n(183555),
    es = n(47675);
let eo = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ed = n(262),
    eu = n(999291);
function ec(e) {
    let { children: t, targetElementRef: n, delay: l, badgeIcon: i, premiumGuildSince: a } = e,
        s = (0, P.L7)(i),
        o = b.intl.string(b.t.OAq2KW).toLocaleUpperCase(),
        d = b.intl.formatToPlainString(b.t.rTUArF, { date: a });
    return (0, r.jsx)(B.A, {
        targetElementRef: n,
        estimatedTooltipHeight: 220,
        delay: l,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: s, aspectRatio: "6/4" },
        title: o,
        body: d,
        children: t,
    });
}
var eg = n(652215),
    em = n(758836);
let ep = "premium";
var ef = n(992028);
function e_(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: i,
            displayProfile: f,
            onClose: _,
            shouldOpenBadgeTooltip: h,
            shouldGlowTenureBadge: E,
        } = e,
        x = l.useRef(null),
        v = l.useRef(null),
        C = l.useRef(null),
        j = l.useRef(null),
        { analyticsLocations: S } = (0, c.Ay)(u.A.BADGE),
        { context: O, trackUserProfileAction: N } = (0, ea.NJ)(),
        U = en.default.getCurrentUser(),
        B = (0, el.CC)(U?.premiumType, D.PremiumTypes.TIER_2),
        M = eo.useConfig({ location: "UserProfileBadgeList" }).enabled,
        L = (function (e) {
            let { location: t } = e;
            return m.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        L && f?.userId != null && !p.Ay.hasCatalogFor(f.userId) && (0, g.R)(f.userId);
    }, [L, f?.userId]);
    let w = (0, eu.AP)(U?.id ?? null),
        $ = (0, ed.A)(w).some((e) => e.id === K.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: a()(ef.k, n),
        "aria-label": b.intl.string(b.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === K.A.ORB_PROFILE_BADGE,
                l = (0, ei.e0)(e.id),
                c = null != l || e.id === ep,
                g = f?.userId === U?.id,
                m = "april_fools_2026" === e.id,
                p = e.id.startsWith(P.Ky),
                b = void 0 !== l && e.id !== ep,
                D = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, P.L7)(e.icon),
                    className: a()(ef.q, i),
                }),
                w = null != h && h(e.id),
                G = {
                    onClick: (t) => {
                        N({ action: "PRESS_BADGE" }), (0, es.R9)({ badge: e.id, analyticsLocations: S, ...O });
                        let r = e.id.startsWith("staff") && !g;
                        if (L && !r) {
                            t.preventDefault();
                            let n = f?.userId != null ? en.default.getUser(f.userId) : null;
                            (0, y._)({
                                initialBadgeId: (0, R.P3)(e.id),
                                targetUserId: f?.userId,
                                targetUsername: n?.globalName ?? n?.username,
                            });
                            return;
                        }
                        if (n) {
                            (0, I.Cz)({
                                tab: em.G2.ORBS,
                                analyticsLocations: S,
                                analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                _?.();
                            return;
                        }
                        if (c) {
                            if (
                                (t.preventDefault(),
                                er.default.track(eg.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: B,
                                    viewed_user_id: f?.userId,
                                }),
                                B)
                            ) {
                                g
                                    ? (0, Q.pX)(eg.BVt.NITRO_HOME)
                                    : (0, q.D)({ analyticsLocations: S, displayProfile: f }),
                                    _?.();
                                return;
                            }
                            if (g) {
                                let n = null != e.link ? (0, d.default)(e.link, { analyticsLocations: S }) : null;
                                if (null == n) return;
                                return _?.(), n(t);
                            }
                            return (0, q.D)({ analyticsLocations: S, displayProfile: f }), void _?.();
                        }
                        let l = null != e.link ? (0, d.default)(e.link, { analyticsLocations: S }) : null;
                        if (null != l) return _?.(), l(t);
                    },
                    onMouseEnter: () => {
                        e.id === ed.h &&
                            er.default.track(eg.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, W.fF)(Y.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            N({ action: "HOVER_BADGE" }),
                            (0, es.sQ)({ badge: e.id, analyticsLocations: S, ...O });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: E && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                };
            if (L)
                return (0, r.jsx)(
                    A,
                    {
                        legacyBadgeId: e.id,
                        userId: f?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? (0, P.L7)(e.icon),
                        children: (0, r.jsx)(o.Anchor, { ...G, children: D }),
                    },
                    `${e.id}-${t}`,
                );
            if (b) {
                let n = (0, r.jsx)(o.Anchor, { ...G, ref: x, children: D });
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(k, {
                            badgeId: e.id,
                            targetElementRef: x,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                er.default.track(eg.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (g ? "self" : "other"),
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
                let n = (0, r.jsx)(o.Anchor, { ...G, ref: v, children: D });
                return (0, r.jsx)(
                    ee,
                    {
                        targetElementRef: v,
                        delay: P.In,
                        showSubtext: !$ && !e.isPreviewMode,
                        forceOpen: w,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (m) {
                let n = (0, r.jsx)(o.Anchor, { ...G, ref: C, children: D });
                return (0, r.jsx)(
                    T,
                    { targetElementRef: C, delay: P.In, forceOpen: w, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (p && f?.premiumGuildSince != null && M) {
                let n = (0, r.jsx)(o.Anchor, { ...G, ref: j, children: D });
                return (0, r.jsx)(
                    ec,
                    {
                        targetElementRef: j,
                        delay: P.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: f.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let H = (0, r.jsx)(o.Anchor, { ...G, children: D }),
                F = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ep
                        ? (0, r.jsx)(V, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== ep ? l : void 0 });
            return (0, r.jsx)(
                s.m,
                { __unsupportedReactNodeAsText: F, forceOpen: w, delay: P.In, ariaHidden: !0, children: H },
                `${e.id}-${t}`,
            );
        }),
    });
}
