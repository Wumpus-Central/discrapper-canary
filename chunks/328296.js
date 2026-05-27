n.d(t, { A: () => eA });
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n(702841),
    s = n(885386),
    o = n(351906),
    d = n(287809),
    u = n(375708);
let c = "legacy_username";
function m(e, t) {
    let n = s.m$.useSetting(),
        r = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        l = (0, a.bG)([o.A], () => o.A.hidePersonalInformation);
    if (null == e) return [];
    let i = e?.getBadges() ?? [];
    return (
        null != r && r.id === e.userId && (void 0 !== t ? t : n) && (i = i.filter((e) => e.id !== c)),
        l && (i = i.map((e) => ({ ...e, description: e.id === c ? u.intl.string(u.t.Br1ls3) : e.description }))),
        i
    );
}
var g = n(305003);
let p = (e) => e.sort((e, t) => (e.id === g.A.ORB_PROFILE_BADGE ? 1 : t.id === g.A.ORB_PROFILE_BADGE ? -1 : 0));
var f = n(503698),
    _ = n.n(f),
    h = n(990078),
    E = n(349288),
    x = n(464792),
    v = n(793574),
    R = n(688810),
    b = n(682618),
    C = n(945810);
let y = (0, C.mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(0, C.mj)({
    name: "2026-05-badge-discovery-milestone-2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var A = n(982240),
    I = n(70283),
    j = n(17928),
    T = n(775602),
    S = n(716574),
    O = n(841595),
    N = n(92111);
function U(e) {
    let { children: t, legacyBadgeId: n, userId: l, fallbackTitle: i, fallbackIconSrc: a } = e,
        s = (0, N.P3)(n),
        {
            badgeData: o,
            currentTier: d,
            obtainedAt: c,
        } = (0, j.cf)(
            [A.Ay],
            () =>
                null == s || null == l
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: A.Ay.getBadgeById(s, l),
                          currentTier: A.Ay.getCurrentTier(s, l),
                          obtainedAt: A.Ay.getObtainedAt(s, l),
                      },
            [s, l],
        ),
        m = (0, j.bG)([T.A], () => T.A.useReducedMotion),
        g = o?.badge_id === I.$.PREMIUM_TENURE,
        p = s === I.$.LEGACY_USERNAME,
        f = d?.name,
        _ = g ? u.intl.string(u.t.Ipxkog) : (o?.name ?? i),
        h = null != f ? `${_} ${f}` : _,
        E = m ? void 0 : o?.complex_icon_animated_url,
        x = E ?? o?.complex_icon_static_url ?? o?.simple_icon_url ?? a,
        v = null != E && x === E;
    if (p) return (0, r.jsx)(B, { userId: l, title: h, badgeImage: x, rarity: o?.rarity, children: t });
    let R = null != c ? u.intl.formatToPlainString(u.t["0aEh2a"], { date: new Date(c) }) : void 0;
    return (0, r.jsx)(S.A, {
        title: h,
        body: R,
        badgeImage: x,
        badgeName: h,
        rarity: o?.rarity,
        variant: g ? "nitro" : "default",
        isAnimated: v,
        children: t,
    });
}
function B(e) {
    let { children: t, userId: n, title: l, badgeImage: i, rarity: a } = e,
        s = (0, j.bG)(
            [O.A, o.A],
            () =>
                o.A.hidePersonalInformation
                    ? u.intl.string(u.t.Br1ls3)
                    : null != n
                      ? (O.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, r.jsx)(S.A, { title: l, body: s, badgeImage: i, badgeName: l, rarity: a, children: t });
}
var D = n(470739),
    M = n(859040),
    k = n(459192);
function P(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: i, children: a } = e;
    return (0, r.jsx)(k.u, {
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
var L = n(116833),
    w = n(704640),
    $ = n(425713),
    G = n(642481),
    H = n(720879),
    F = n(788868),
    V = n(49999),
    q = n(518477);
let Y = (e) => {
    let {
            badgeId: t = F.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: i,
            targetElementRef: a,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        m = F.VD[t].nameUnformattedNitro,
        g = u.intl.string(m).toLocaleUpperCase(),
        p = F.VD[t].rarity,
        f = (0, w.A)(t),
        _ = (0, $.I)(t).standard;
    (0, l.useEffect)(() => {
        L.m[L.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = _);
    }, [_]);
    let h = (0, l.useCallback)(() => {
        n?.(V.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, o, d);
        return (0, r.jsx)(S.A, {
            targetElementRef: a,
            onShow: c,
            title: g,
            body: e.body,
            variant: "nitro",
            rarity: p,
            badgeImage: _,
            badgeName: g,
            progressCircle: t,
            children: i,
        });
    }
    let E = {
        gradientColor: f,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: L.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: _, alt: g, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: g,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, r.jsx)(H.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: q.In,
              onShow: c,
              ...E,
              children: i,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  i,
                  (0, r.jsx)(G.A, {
                      targetElementRef: a,
                      shouldShow: !0,
                      onRequestClose: h,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...E,
                  }),
              ],
          });
};
var W = n(534514),
    Q = n(834730),
    K = n(775549);
let z = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, r.jsxs)("div", { className: K.R, children: [t, (0, r.jsx)("div", { className: K.A, children: n }), l] });
};
var X = n(224016),
    J = n(74824);
let Z = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, $.I)(n.id).standard;
    return (0, r.jsxs)(z, {
        assetComponent: (0, r.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, r.jsx)(X.A, { width: 56, className: J.R }),
        children: [
            (0, r.jsx)(W.D, { variant: "heading-xl/extrabold", children: u.intl.string(n.nameUnformatted) }),
            (0, r.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: J.K,
                children: t.description,
            }),
        ],
    });
};
var ee = n(30084),
    et = n(507107),
    en = n(590202),
    er = n(976860),
    el = n(312640),
    ei = n(798618),
    ea = n(752079),
    es = n(414690);
function eo(e) {
    let { children: t, targetElementRef: n, delay: i, showSubtext: a, forceOpen: s } = e,
        [o, d] = l.useState(!1),
        u = l.useRef(null),
        c = l.useCallback(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }, []);
    l.useEffect(() => c, [c]);
    let m = l.useCallback(() => {
        c(),
            (u.current = window.setTimeout(() => {
                (u.current = null), d(!0);
            }, i));
    }, [i, c]);
    l.useEffect(() => {
        s && !o && m();
    }, [s, o, m]);
    let g = l.useCallback(() => {
            m();
        }, [m]),
        p = l.useCallback(() => {
            c(), d(!1);
        }, [c]);
    return (0, r.jsxs)("div", {
        onMouseEnter: g,
        onMouseLeave: p,
        children: [
            t,
            (0, r.jsxs)(el.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, r.jsx)(ed, { showSubtext: a }), (0, r.jsx)(ei.F, {})],
            }),
        ],
    });
}
function ed(e) {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(z, {
        assetComponent: (0, r.jsx)(ea.A, { className: es.jc }),
        tooltipWordmarkComponent: (0, r.jsx)(W.D, {
            variant: "heading-md/extrabold",
            className: es.RK,
            children: u.intl.string(u.t.ElYQFS),
        }),
        children: [
            (0, r.jsx)(W.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : es.Qn,
                children: u.intl.string(u.t.lTHkqd),
            }),
            t
                ? (0, r.jsx)(Q.E, { variant: "text-xs/normal", className: es.lV, children: u.intl.string(u.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eu = n(174459),
    ec = n(474090),
    em = n(439174),
    eg = n(183555),
    ep = n(47675);
let ef = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var e_ = n(999291);
function eh(e) {
    let { children: t, targetElementRef: n, delay: l, badgeIcon: i, premiumGuildSince: a } = e,
        s = (0, q.L7)(i),
        o = u.intl.string(u.t.OAq2KW).toLocaleUpperCase(),
        d = u.intl.formatToPlainString(u.t.rTUArF, { date: a });
    return (0, r.jsx)(H.A, {
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
var eE = n(652215),
    ex = n(758836);
let ev = "premium";
var eR = n(992028);
function eb(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: i,
            displayProfile: a,
            onClose: s,
            shouldOpenBadgeTooltip: o,
            shouldGlowTenureBadge: c,
        } = e,
        p = l.useRef(null),
        f = l.useRef(null),
        C = l.useRef(null),
        I = l.useRef(null),
        { analyticsLocations: j } = (0, R.Ay)(v.A.BADGE),
        { context: T, trackUserProfileAction: S } = (0, eg.NJ)(),
        O = d.default.getCurrentUser(),
        B = (0, ec.CC)(O?.premiumType, F.PremiumTypes.TIER_2),
        k = ef.useConfig({ location: "UserProfileBadgeList" }).enabled,
        L = (function (e) {
            let { location: t } = e;
            return y.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        L && a?.userId != null && !A.Ay.hasCatalogFor(a.userId) && (0, b.R)(a.userId);
    }, [L, a?.userId]);
    let w = m((0, e_.AP)(O?.id ?? null)).some((e) => e.id === g.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: _()(eR.k, n),
        "aria-label": u.intl.string(u.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === g.A.ORB_PROFILE_BADGE,
                l = (0, em.e0)(e.id),
                u = null != l || e.id === ev,
                m = a?.userId === O?.id,
                R = "april_fools_2026" === e.id,
                b = e.id.startsWith(q.Ky),
                y = void 0 !== l && e.id !== ev,
                A = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, q.L7)(e.icon),
                    className: _()(eR.q, i),
                }),
                $ = null != o && o(e.id),
                G = {
                    onClick: (t) => {
                        S({ action: "PRESS_BADGE" }), (0, ep.R9)({ badge: e.id, analyticsLocations: j, ...T });
                        let r = e.id.startsWith("staff") && !m;
                        if (L && !r) {
                            t.preventDefault();
                            let n = a?.userId != null ? d.default.getUser(a.userId) : null;
                            (0, D._)({
                                initialBadgeId: (0, N.P3)(e.id),
                                targetUserId: a?.userId,
                                targetUsername: n?.globalName ?? n?.username,
                            });
                            return;
                        }
                        if (n) {
                            (0, M.Cz)({
                                tab: ex.G2.ORBS,
                                analyticsLocations: j,
                                analyticsSource: v.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                s?.();
                            return;
                        }
                        if (u) {
                            if (
                                (t.preventDefault(),
                                eu.default.track(eE.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: B,
                                    viewed_user_id: a?.userId,
                                }),
                                B)
                            ) {
                                m
                                    ? (0, er.pX)(eE.BVt.NITRO_HOME)
                                    : (0, ee.D)({ analyticsLocations: j, displayProfile: a }),
                                    s?.();
                                return;
                            }
                            if (m) {
                                let n = null != e.link ? (0, x.default)(e.link, { analyticsLocations: j }) : null;
                                if (null == n) return;
                                return s?.(), n(t);
                            }
                            return (0, ee.D)({ analyticsLocations: j, displayProfile: a }), void s?.();
                        }
                        let l = null != e.link ? (0, x.default)(e.link, { analyticsLocations: j }) : null;
                        if (null != l) return s?.(), l(t);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            eu.default.track(eE.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, en.fF)(et.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            S({ action: "HOVER_BADGE" }),
                            (0, ep.sQ)({ badge: e.id, analyticsLocations: j, ...T });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: c && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                };
            if (L)
                return (0, r.jsx)(
                    U,
                    {
                        legacyBadgeId: e.id,
                        userId: a?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? (0, q.L7)(e.icon),
                        children: (0, r.jsx)(E.Anchor, { ...G, children: A }),
                    },
                    `${e.id}-${t}`,
                );
            if (y) {
                let n = (0, r.jsx)(E.Anchor, { ...G, ref: p, children: A });
                return (0, r.jsx)(
                    "div",
                    {
                        children: (0, r.jsx)(Y, {
                            badgeId: e.id,
                            targetElementRef: p,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                eu.default.track(eE.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, r.jsx)(E.Anchor, { ...G, ref: f, children: A });
                return (0, r.jsx)(
                    eo,
                    {
                        targetElementRef: f,
                        delay: q.In,
                        showSubtext: !w && !e.isPreviewMode,
                        forceOpen: $,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (R) {
                let n = (0, r.jsx)(E.Anchor, { ...G, ref: C, children: A });
                return (0, r.jsx)(
                    P,
                    { targetElementRef: C, delay: q.In, forceOpen: $, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (b && a?.premiumGuildSince != null && k) {
                let n = (0, r.jsx)(E.Anchor, { ...G, ref: I, children: A });
                return (0, r.jsx)(
                    eh,
                    {
                        targetElementRef: I,
                        delay: q.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: a.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let H = (0, r.jsx)(E.Anchor, { ...G, children: A }),
                F = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ev
                        ? (0, r.jsx)(Z, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: u && e.id !== ev ? l : void 0 });
            return (0, r.jsx)(
                h.m,
                { __unsupportedReactNodeAsText: F, forceOpen: $, delay: q.In, ariaHidden: !0, children: H },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eC = n(996988);
let ey = {
    [eC.d.POPOUT]: 12,
    [eC.d.MODAL]: 26,
    [eC.d.MODAL_V2]: 16,
    [eC.d.SIDEBAR]: 13,
    [eC.d.VIDEO_TILE_BACKGROUND]: 12,
};
function eA(e) {
    let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: a,
            pendingBadges: s,
            onClose: o,
            shouldOpenBadgeTooltip: d,
            shouldGlowTenureBadge: u,
        } = e,
        c = m(t, a),
        g = l.useMemo(() => {
            if (null == s) return p(c);
            let e = new Set(c.map((e) => e.id));
            return p([...c, ...s.filter((t) => !e.has(t.id))]);
        }, [c, s]);
    return 0 === g.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: (0, i.chunk)(g, ey[n]).map((e) =>
                  (0, r.jsx)(
                      eb,
                      { badges: e, displayProfile: t, onClose: o, shouldOpenBadgeTooltip: d, shouldGlowTenureBadge: u },
                      e[0].id,
                  ),
              ),
          });
}
