"use strict";
n.d(t, { A: () => ev });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(702841),
    o = n(885386),
    l = n(351906),
    u = n(287809),
    c = n(375708);
let d = "legacy_username";
function _(e, t) {
    let n = o.m$.useSetting(),
        i = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        r = (0, a.bG)([l.A], () => l.A.hidePersonalInformation);
    if (null == e) return [];
    let s = e?.getBadges() ?? [];
    return (
        null != i && i.id === e.userId && (void 0 !== t ? t : n) && (s = s.filter((e) => e.id !== d)),
        r && (s = s.map((e) => ({ ...e, description: e.id === d ? c.intl.string(c.t.Br1ls3) : e.description }))),
        s
    );
}
var h = n(305003);
let f = (e) => e.sort((e, t) => (e.id === h.A.ORB_PROFILE_BADGE ? 1 : t.id === h.A.ORB_PROFILE_BADGE ? -1 : 0));
var p = n(503698),
    E = n.n(p),
    m = n(990078),
    g = n(349288),
    A = n(464792),
    I = n(793574),
    T = n(688810),
    S = n(682618),
    y = n(945810);
let N = (0, y.mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(0, y.mj)({
    name: "2026-05-badge-discovery-milestone-2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = n(982240),
    C = n(70283),
    R = n(17928),
    O = n(775602),
    b = n(716574),
    D = n(841595),
    L = n(92111);
function w(e) {
    let { children: t, legacyBadgeId: n, userId: r, fallbackTitle: s, fallbackIconSrc: a } = e,
        o = (0, L.P3)(n),
        {
            badgeData: l,
            currentTier: u,
            obtainedAt: d,
        } = (0, R.cf)(
            [v.Ay],
            () =>
                null == o || null == r
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: v.Ay.getBadgeById(o, r),
                          currentTier: v.Ay.getCurrentTier(o, r),
                          obtainedAt: v.Ay.getObtainedAt(o, r),
                      },
            [o, r],
        ),
        _ = (0, R.bG)([O.A], () => O.A.useReducedMotion),
        h = l?.badge_id === C.$.PREMIUM_TENURE,
        f = o === C.$.LEGACY_USERNAME,
        p = u?.name,
        E = h ? c.intl.string(c.t.Ipxkog) : (l?.name ?? s),
        m = null != p ? `${E} ${p}` : E,
        g = _ ? void 0 : l?.complex_icon_animated_url,
        A = g ?? l?.complex_icon_static_url ?? l?.simple_icon_url ?? a,
        I = null != g && A === g;
    if (f) return (0, i.jsx)(M, { userId: r, title: m, badgeImage: A, rarity: l?.rarity, children: t });
    let T = null != d ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(d) }) : void 0;
    return (0, i.jsx)(b.A, {
        title: m,
        body: T,
        badgeImage: A,
        badgeName: m,
        rarity: l?.rarity,
        variant: h ? "nitro" : "default",
        isAnimated: I,
        children: t,
    });
}
function M(e) {
    let { children: t, userId: n, title: r, badgeImage: s, rarity: a } = e,
        o = (0, R.bG)(
            [D.A, l.A],
            () =>
                l.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (D.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, i.jsx)(b.A, { title: r, body: o, badgeImage: s, badgeName: r, rarity: a, children: t });
}
var P = n(470739),
    x = n(859040),
    k = n(459192);
function U(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(k.u, {
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
var G = n(116833),
    F = n(704640),
    V = n(425713),
    B = n(642481),
    H = n(720879),
    j = n(788868),
    Y = n(49999),
    W = n(518477);
let K = (e) => {
    let {
            badgeId: t = j.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            targetElementRef: a,
            progressCircleText: o,
            progressCirclePercent: l,
            progressCircleUrgency: u,
            onShow: d,
        } = e,
        _ = j.VD[t].nameUnformattedNitro,
        h = c.intl.string(_).toLocaleUpperCase(),
        f = j.VD[t].rarity,
        p = (0, F.A)(t),
        E = (0, V.I)(t).standard;
    (0, r.useEffect)(() => {
        G.m[G.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E);
    }, [E]);
    let m = (0, r.useCallback)(() => {
        n?.(Y.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(o, l, u);
        return (0, i.jsx)(b.A, {
            targetElementRef: a,
            onShow: d,
            title: h,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: E,
            badgeName: h,
            progressCircle: t,
            children: s,
        });
    }
    let g = {
        gradientColor: p,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: G.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: E, alt: h, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: h,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(H.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: W.In,
              onShow: d,
              ...g,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(B.A, {
                      targetElementRef: a,
                      shouldShow: !0,
                      onRequestClose: m,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...g,
                  }),
              ],
          });
};
var $ = n(534514),
    z = n(834730),
    q = n(775549);
let X = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: q.R, children: [t, (0, i.jsx)("div", { className: q.A, children: n }), r] });
};
var Z = n(224016),
    Q = n(74824);
let J = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, V.I)(n.id).standard;
    return (0, i.jsxs)(X, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(Z.A, { width: 56, className: Q.R }),
        children: [
            (0, i.jsx)($.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(z.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Q.K,
                children: t.description,
            }),
        ],
    });
};
var ee = n(30084),
    et = n(507107),
    en = n(590202),
    ei = n(976860),
    er = n(312640),
    es = n(798618),
    ea = n(752079),
    eo = n(414690);
function el(e) {
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
    let h = r.useCallback(() => {
            _();
        }, [_]),
        f = r.useCallback(() => {
            d(), u(!1);
        }, [d]);
    return (0, i.jsxs)("div", {
        onMouseEnter: h,
        onMouseLeave: f,
        children: [
            t,
            (0, i.jsxs)(er.x, {
                targetElementRef: n,
                shouldShow: !!(l || o),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(eu, { showSubtext: a }), (0, i.jsx)(es.F, {})],
            }),
        ],
    });
}
function eu(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(X, {
        assetComponent: (0, i.jsx)(ea.A, { className: eo.jc }),
        tooltipWordmarkComponent: (0, i.jsx)($.D, {
            variant: "heading-md/extrabold",
            className: eo.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)($.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eo.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(z.E, { variant: "text-xs/normal", className: eo.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ec = n(174459),
    ed = n(474090),
    e_ = n(439174),
    eh = n(183555),
    ef = n(47675);
let ep = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eE = n(999291);
function em(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: s, premiumGuildSince: a } = e,
        o = (0, W.L7)(s),
        l = c.intl.string(c.t.OAq2KW).toLocaleUpperCase(),
        u = c.intl.formatToPlainString(c.t.rTUArF, { date: a });
    return (0, i.jsx)(H.A, {
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
var eg = n(652215),
    eA = n(758836);
let eI = "premium";
var eT = n(992028);
function eS(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: a,
            onClose: o,
            shouldOpenBadgeTooltip: l,
            shouldGlowTenureBadge: d,
        } = e,
        f = r.useRef(null),
        p = r.useRef(null),
        y = r.useRef(null),
        C = r.useRef(null),
        { analyticsLocations: R } = (0, T.Ay)(I.A.BADGE),
        { context: O, trackUserProfileAction: b } = (0, eh.NJ)(),
        D = u.default.getCurrentUser(),
        M = (0, ed.CC)(D?.premiumType, j.PremiumTypes.TIER_2),
        k = ep.useConfig({ location: "UserProfileBadgeList" }).enabled,
        G = (function (e) {
            let { location: t } = e;
            return N.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        G && a?.userId != null && !v.Ay.hasCatalogFor(a.userId) && (0, S.R)(a.userId);
    }, [G, a?.userId]);
    let F = _((0, eE.AP)(D?.id ?? null)).some((e) => e.id === h.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: E()(eT.k, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === h.A.ORB_PROFILE_BADGE,
                r = (0, e_.e0)(e.id),
                c = null != r || e.id === eI,
                _ = a?.userId === D?.id,
                T = "april_fools_2026" === e.id,
                S = e.id.startsWith(W.Ky),
                N = void 0 !== r && e.id !== eI,
                v = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, W.L7)(e.icon),
                    className: E()(eT.q, s),
                }),
                V = null != l && l(e.id),
                B = {
                    onClick: (t) => {
                        b({ action: "PRESS_BADGE" }), (0, ef.R9)({ badge: e.id, analyticsLocations: R, ...O });
                        let i = e.id.startsWith("staff") && !_,
                            r = a?.userId != null ? u.default.getUser(a.userId) : null;
                        if (G && !i && r?.bot !== !0) {
                            t.preventDefault(),
                                (0, P._)({
                                    initialBadgeId: (0, L.P3)(e.id),
                                    targetUserId: a?.userId,
                                    targetUsername: r?.globalName ?? r?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, x.Cz)({
                                tab: eA.G2.ORBS,
                                analyticsLocations: R,
                                analyticsSource: I.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                o?.();
                            return;
                        }
                        if (c) {
                            if (
                                (t.preventDefault(),
                                ec.default.track(eg.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: M,
                                    viewed_user_id: a?.userId,
                                }),
                                M)
                            ) {
                                _
                                    ? (0, ei.pX)(eg.BVt.NITRO_HOME)
                                    : (0, ee.D)({ analyticsLocations: R, displayProfile: a }),
                                    o?.();
                                return;
                            }
                            if (_) {
                                let n = null != e.link ? (0, A.default)(e.link, { analyticsLocations: R }) : null;
                                if (null == n) return;
                                return o?.(), n(t);
                            }
                            return (0, ee.D)({ analyticsLocations: R, displayProfile: a }), void o?.();
                        }
                        let s = null != e.link ? (0, A.default)(e.link, { analyticsLocations: R }) : null;
                        if (null != s) return o?.(), s(t);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ec.default.track(eg.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, en.fF)(et.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            b({ action: "HOVER_BADGE" }),
                            (0, ef.sQ)({ badge: e.id, analyticsLocations: R, ...O });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: d && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (G)
                return (0, i.jsx)(
                    w,
                    {
                        legacyBadgeId: e.id,
                        userId: a?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? (0, W.L7)(e.icon),
                        children: (0, i.jsx)(g.Anchor, { ...B, children: v }),
                    },
                    `${e.id}-${t}`,
                );
            if (N) {
                let n = (0, i.jsx)(g.Anchor, { ...B, ref: f, children: v });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(K, {
                            badgeId: e.id,
                            targetElementRef: f,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                ec.default.track(eg.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(g.Anchor, { ...B, ref: p, children: v });
                return (0, i.jsx)(
                    el,
                    {
                        targetElementRef: p,
                        delay: W.In,
                        showSubtext: !F && !e.isPreviewMode,
                        forceOpen: V,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (T) {
                let n = (0, i.jsx)(g.Anchor, { ...B, ref: y, children: v });
                return (0, i.jsx)(
                    U,
                    { targetElementRef: y, delay: W.In, forceOpen: V, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (S && a?.premiumGuildSince != null && k) {
                let n = (0, i.jsx)(g.Anchor, { ...B, ref: C, children: v });
                return (0, i.jsx)(
                    em,
                    {
                        targetElementRef: C,
                        delay: W.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: a.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let H = (0, i.jsx)(g.Anchor, { ...B, children: v }),
                j = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== eI
                        ? (0, i.jsx)(J, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== eI ? r : void 0 });
            return (0, i.jsx)(
                m.m,
                { __unsupportedReactNodeAsText: j, forceOpen: V, delay: W.In, ariaHidden: !0, children: H },
                `${e.id}-${t}`,
            );
        }),
    });
}
var ey = n(996988);
let eN = {
    [ey.d.POPOUT]: 12,
    [ey.d.MODAL]: 26,
    [ey.d.MODAL_V2]: 16,
    [ey.d.SIDEBAR]: 13,
    [ey.d.VIDEO_TILE_BACKGROUND]: 12,
};
function ev(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: a,
            pendingBadges: o,
            onClose: l,
            shouldOpenBadgeTooltip: u,
            shouldGlowTenureBadge: c,
        } = e,
        d = _(t, a),
        h = r.useMemo(() => {
            if (null == o) return f(d);
            let e = new Set(d.map((e) => e.id));
            return f([...d, ...o.filter((t) => !e.has(t.id))]);
        }, [d, o]);
    return 0 === h.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, s.chunk)(h, eN[n]).map((e) =>
                  (0, i.jsx)(
                      eS,
                      { badges: e, displayProfile: t, onClose: l, shouldOpenBadgeTooltip: u, shouldGlowTenureBadge: c },
                      e[0].id,
                  ),
              ),
          });
}
