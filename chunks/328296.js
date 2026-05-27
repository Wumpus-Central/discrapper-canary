"use strict";
n.d(t, { A: () => ey });
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
var f = n(305003);
let h = (e) => e.sort((e, t) => (e.id === f.A.ORB_PROFILE_BADGE ? 1 : t.id === f.A.ORB_PROFILE_BADGE ? -1 : 0));
var p = n(503698),
    E = n.n(p),
    m = n(990078),
    g = n(349288),
    A = n(464792),
    I = n(793574),
    T = n(688810),
    S = n(682618);
let N = (0, n(945810).mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = n(982240),
    C = n(70283),
    v = n(17928),
    O = n(775602),
    R = n(716574),
    b = n(841595),
    D = n(92111);
function L(e) {
    let { children: t, legacyBadgeId: n, userId: r, fallbackTitle: s, fallbackIconSrc: a } = e,
        o = (0, D.P3)(n),
        {
            badgeData: l,
            currentTier: u,
            obtainedAt: d,
        } = (0, v.cf)(
            [y.Ay],
            () =>
                null == o || null == r
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: y.Ay.getBadgeById(o, r),
                          currentTier: y.Ay.getCurrentTier(o, r),
                          obtainedAt: y.Ay.getObtainedAt(o, r),
                      },
            [o, r],
        ),
        _ = (0, v.bG)([O.A], () => O.A.useReducedMotion),
        f = l?.badge_id === C.$.PREMIUM_TENURE,
        h = o === C.$.LEGACY_USERNAME,
        p = u?.name,
        E = f ? c.intl.string(c.t.Ipxkog) : (l?.name ?? s),
        m = null != p ? `${E} ${p}` : E,
        g = _ ? void 0 : l?.complex_icon_animated_url,
        A = g ?? l?.complex_icon_static_url ?? l?.simple_icon_url ?? a,
        I = null != g && A === g;
    if (h) return (0, i.jsx)(w, { userId: r, title: m, badgeImage: A, rarity: l?.rarity, children: t });
    let T = null != d ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(d) }) : void 0;
    return (0, i.jsx)(R.A, {
        title: m,
        body: T,
        badgeImage: A,
        badgeName: m,
        rarity: l?.rarity,
        variant: f ? "nitro" : "default",
        isAnimated: I,
        children: t,
    });
}
function w(e) {
    let { children: t, userId: n, title: r, badgeImage: s, rarity: a } = e,
        o = (0, v.bG)(
            [b.A, l.A],
            () =>
                l.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (b.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, i.jsx)(R.A, { title: r, body: o, badgeImage: s, badgeName: r, rarity: a, children: t });
}
var M = n(470739),
    P = n(859040),
    x = n(459192);
function U(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(x.u, {
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
var k = n(116833),
    G = n(704640),
    F = n(425713),
    V = n(642481),
    B = n(720879),
    H = n(788868),
    j = n(49999),
    Y = n(518477);
let W = (e) => {
    let {
            badgeId: t = H.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            targetElementRef: a,
            progressCircleText: o,
            progressCirclePercent: l,
            progressCircleUrgency: u,
            onShow: d,
        } = e,
        _ = H.VD[t].nameUnformattedNitro,
        f = c.intl.string(_).toLocaleUpperCase(),
        h = H.VD[t].rarity,
        p = (0, G.A)(t),
        E = (0, F.I)(t).standard;
    (0, r.useEffect)(() => {
        k.m[k.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E);
    }, [E]);
    let m = (0, r.useCallback)(() => {
        n?.(j.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(o, l, u);
        return (0, i.jsx)(R.A, {
            targetElementRef: a,
            onShow: d,
            title: f,
            body: e.body,
            variant: "nitro",
            rarity: h,
            badgeImage: E,
            badgeName: f,
            progressCircle: t,
            children: s,
        });
    }
    let g = {
        gradientColor: p,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: k.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: E, alt: f, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(B.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: Y.In,
              onShow: d,
              ...g,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(V.A, {
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
var K = n(534514),
    z = n(834730),
    $ = n(775549);
let q = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: $.R, children: [t, (0, i.jsx)("div", { className: $.A, children: n }), r] });
};
var X = n(224016),
    Z = n(74824);
let Q = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, F.I)(n.id).standard;
    return (0, i.jsxs)(q, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(X.A, { width: 56, className: Z.R }),
        children: [
            (0, i.jsx)(K.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(z.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Z.K,
                children: t.description,
            }),
        ],
    });
};
var J = n(30084),
    ee = n(507107),
    et = n(590202),
    en = n(976860),
    ei = n(312640),
    er = n(798618),
    es = n(752079),
    ea = n(414690);
function eo(e) {
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
            (0, i.jsxs)(ei.x, {
                targetElementRef: n,
                shouldShow: !!(l || o),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(el, { showSubtext: a }), (0, i.jsx)(er.F, {})],
            }),
        ],
    });
}
function el(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(q, {
        assetComponent: (0, i.jsx)(es.A, { className: ea.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(K.D, {
            variant: "heading-md/extrabold",
            className: ea.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(K.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : ea.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(z.E, { variant: "text-xs/normal", className: ea.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eu = n(174459),
    ec = n(474090),
    ed = n(439174),
    e_ = n(183555),
    ef = n(47675);
let eh = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ep = n(999291);
function eE(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: s, premiumGuildSince: a } = e,
        o = (0, Y.L7)(s),
        l = c.intl.string(c.t.OAq2KW).toLocaleUpperCase(),
        u = c.intl.formatToPlainString(c.t.rTUArF, { date: a });
    return (0, i.jsx)(B.A, {
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
var em = n(652215),
    eg = n(758836);
let eA = "premium";
var eI = n(992028);
function eT(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: s,
            displayProfile: a,
            onClose: o,
            shouldOpenBadgeTooltip: l,
            shouldGlowTenureBadge: d,
        } = e,
        h = r.useRef(null),
        p = r.useRef(null),
        C = r.useRef(null),
        v = r.useRef(null),
        { analyticsLocations: O } = (0, T.Ay)(I.A.BADGE),
        { context: R, trackUserProfileAction: b } = (0, e_.NJ)(),
        w = u.default.getCurrentUser(),
        x = (0, ec.CC)(w?.premiumType, H.PremiumTypes.TIER_2),
        k = eh.useConfig({ location: "UserProfileBadgeList" }).enabled,
        G = (function (e) {
            let { location: t } = e;
            return N.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        G && a?.userId != null && !y.Ay.hasCatalogFor(a.userId) && (0, S.R)(a.userId);
    }, [G, a?.userId]);
    let F = _((0, ep.AP)(w?.id ?? null)).some((e) => e.id === f.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: E()(eI.k, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === f.A.ORB_PROFILE_BADGE,
                r = (0, ed.e0)(e.id),
                c = null != r || e.id === eA,
                _ = a?.userId === w?.id,
                T = "april_fools_2026" === e.id,
                S = e.id.startsWith(Y.Ky),
                N = void 0 !== r && e.id !== eA,
                y = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, Y.L7)(e.icon),
                    className: E()(eI.q, s),
                }),
                V = null != l && l(e.id),
                B = {
                    onClick: (t) => {
                        b({ action: "PRESS_BADGE" }), (0, ef.R9)({ badge: e.id, analyticsLocations: O, ...R });
                        let i = e.id.startsWith("staff") && !_;
                        if (G && !i) {
                            t.preventDefault();
                            let n = a?.userId != null ? u.default.getUser(a.userId) : null;
                            (0, M._)({
                                initialBadgeId: (0, D.P3)(e.id),
                                targetUserId: a?.userId,
                                targetUsername: n?.globalName ?? n?.username,
                            });
                            return;
                        }
                        if (n) {
                            (0, P.Cz)({
                                tab: eg.G2.ORBS,
                                analyticsLocations: O,
                                analyticsSource: I.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                o?.();
                            return;
                        }
                        if (c) {
                            if (
                                (t.preventDefault(),
                                eu.default.track(em.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: x,
                                    viewed_user_id: a?.userId,
                                }),
                                x)
                            ) {
                                _
                                    ? (0, en.pX)(em.BVt.NITRO_HOME)
                                    : (0, J.D)({ analyticsLocations: O, displayProfile: a }),
                                    o?.();
                                return;
                            }
                            if (_) {
                                let n = null != e.link ? (0, A.default)(e.link, { analyticsLocations: O }) : null;
                                if (null == n) return;
                                return o?.(), n(t);
                            }
                            return (0, J.D)({ analyticsLocations: O, displayProfile: a }), void o?.();
                        }
                        let r = null != e.link ? (0, A.default)(e.link, { analyticsLocations: O }) : null;
                        if (null != r) return o?.(), r(t);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            eu.default.track(em.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, et.fF)(ee.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            b({ action: "HOVER_BADGE" }),
                            (0, ef.sQ)({ badge: e.id, analyticsLocations: O, ...R });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: d && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (G)
                return (0, i.jsx)(
                    L,
                    {
                        legacyBadgeId: e.id,
                        userId: a?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? (0, Y.L7)(e.icon),
                        children: (0, i.jsx)(g.Anchor, { ...B, children: y }),
                    },
                    `${e.id}-${t}`,
                );
            if (N) {
                let n = (0, i.jsx)(g.Anchor, { ...B, ref: h, children: y });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(W, {
                            badgeId: e.id,
                            targetElementRef: h,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                eu.default.track(em.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(g.Anchor, { ...B, ref: p, children: y });
                return (0, i.jsx)(
                    eo,
                    {
                        targetElementRef: p,
                        delay: Y.In,
                        showSubtext: !F && !e.isPreviewMode,
                        forceOpen: V,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (T) {
                let n = (0, i.jsx)(g.Anchor, { ...B, ref: C, children: y });
                return (0, i.jsx)(
                    U,
                    { targetElementRef: C, delay: Y.In, forceOpen: V, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (S && a?.premiumGuildSince != null && k) {
                let n = (0, i.jsx)(g.Anchor, { ...B, ref: v, children: y });
                return (0, i.jsx)(
                    eE,
                    {
                        targetElementRef: v,
                        delay: Y.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: a.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let H = (0, i.jsx)(g.Anchor, { ...B, children: y }),
                j = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== eA
                        ? (0, i.jsx)(Q, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== eA ? r : void 0 });
            return (0, i.jsx)(
                m.m,
                { __unsupportedReactNodeAsText: j, forceOpen: V, delay: Y.In, ariaHidden: !0, children: H },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eS = n(996988);
let eN = {
    [eS.d.POPOUT]: 12,
    [eS.d.MODAL]: 26,
    [eS.d.MODAL_V2]: 16,
    [eS.d.SIDEBAR]: 13,
    [eS.d.VIDEO_TILE_BACKGROUND]: 12,
};
function ey(e) {
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
        f = r.useMemo(() => {
            if (null == o) return h(d);
            let e = new Set(d.map((e) => e.id));
            return h([...d, ...o.filter((t) => !e.has(t.id))]);
        }, [d, o]);
    return 0 === f.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, s.chunk)(f, eN[n]).map((e) =>
                  (0, i.jsx)(
                      eT,
                      { badges: e, displayProfile: t, onClose: l, shouldOpenBadgeTooltip: u, shouldGlowTenureBadge: c },
                      e[0].id,
                  ),
              ),
          });
}
