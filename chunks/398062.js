n.d(t, { A: () => eP });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(702841),
    i = n(885386),
    d = n(351906),
    o = n(287809),
    c = n(375708);
let u = "legacy_username";
function f(e, t) {
    let n = i.m$.useSetting(),
        a = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        l = (0, s.bG)([d.A], () => d.A.hidePersonalInformation);
    if (null == e) return [];
    let r = e?.getBadges() ?? [];
    return (
        null != a && a.id === e.userId && (void 0 !== t ? t : n) && (r = r.filter((e) => e.id !== u)),
        l && (r = r.map((e) => ({ ...e, description: e.id === u ? c.intl.string(c.t.Br1ls3) : e.description }))),
        r
    );
}
var E = n(503698),
    m = n.n(E),
    g = n(17928),
    p = n(192308),
    b = n(28863),
    _ = n(866665),
    h = n(922016),
    A = n(983555),
    R = n(274670),
    x = n(144779),
    N = n(793574),
    I = n(688810),
    v = n(682618),
    T = n(992526),
    S = n(982240),
    j = n(609782),
    C = n(945810);
let D = (0, C.mj)({
        name: "2026-08-badge-management",
        kind: "user",
        defaultConfig: { enabled: !1, tenureBadgeHideable: !1 },
        variations: { 1: { enabled: !0, tenureBadgeHideable: !0 }, 2: { enabled: !0, tenureBadgeHideable: !1 } },
    }),
    y = (0, C.mj)({
        name: "2026-06-use-new-badge-image-source",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var M = n(315710),
    O = n(297264),
    P = n(834730),
    U = n(821609),
    B = n(450232),
    k = n(470739),
    G = n(494881);
function w(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    return (
        l.useLayoutEffect(() => {
            n.current?.focus();
        }, []),
        (0, M.tj)(n),
        (0, a.jsxs)("div", {
            ref: n,
            className: G.SW,
            role: "dialog",
            tabIndex: -1,
            "aria-labelledby": r,
            children: [
                (0, a.jsxs)("div", {
                    className: G.wx,
                    children: [
                        (0, a.jsxs)("div", {
                            className: G.$,
                            children: [
                                (0, a.jsx)(B.A, { size: "xs", className: G.oU }),
                                (0, a.jsx)(O.D, {
                                    id: r,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: c.intl.string(c.t.PXIyjF),
                                }),
                            ],
                        }),
                        (0, a.jsx)(P.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: c.intl.string(c.t.VHaYM7),
                        }),
                    ],
                }),
                (0, a.jsx)(U.$, {
                    variant: "secondary",
                    size: "sm",
                    fullWidth: !0,
                    text: c.intl.string(c.t.fN2how),
                    onClick: function () {
                        t(), (0, k._)({ viewingCurrentUserBadges: !0 });
                    },
                }),
            ],
        })
    );
}
var L = n(70283),
    H = n(775602),
    V = n(461536),
    $ = n(321191);
function X(e) {
    let t,
        n,
        r,
        { children: s, legacyBadgeId: i, userId: d, fallbackTitle: o, fallbackIconSrc: u, shouldShow: f } = e,
        E = (0, j.w0)(i),
        {
            badgeData: m,
            currentTier: p,
            obtainedAt: b,
        } = (0, g.cf)(
            [S.Ay],
            () =>
                null == E || null == d
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: S.Ay.getBadgeById(E, d),
                          currentTier: S.Ay.getCurrentTier(E, d),
                          obtainedAt: S.Ay.getObtainedAt(E, d),
                      },
            [E, d],
        ),
        _ = (0, g.bG)([H.Ay], () => H.Ay.useReducedMotion),
        h = l.useCallback(() => {
            null != d && S.Ay.isCatalogStaleFor(d) && (0, v.RS)(d);
        }, [d]),
        A = m?.badge_id === L.$.PREMIUM_TENURE,
        R = E === L.$.LEGACY_USERNAME,
        x = p?.name,
        N = A ? c.intl.string(c.t.Ipxkog) : (m?.name ?? o);
    A ? (r = n = null != x ? `${N} ${x}` : N) : null != x ? ((t = N), (n = x), (r = `${N} ${x}`)) : ((n = N), (r = N));
    let I = _ ? void 0 : m?.complex_icon_animated_url,
        T = I ?? m?.complex_icon_static_url ?? m?.simple_icon_url ?? u,
        C = null != I && T === I;
    if (R) return (0, a.jsx)(F, { userId: d, title: n, badgeImage: T, shouldShow: f, children: s });
    let D = m?.info_label ?? (null != b ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, a.jsx)(V.A, {
        title: n,
        eyebrow: t,
        body: D,
        badgeImage: T,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: C,
        shouldShow: f,
        onShow: h,
        children: s,
    });
}
function F(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: s } = e,
        i = (0, g.bG)(
            [$.A, d.A],
            () =>
                d.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? ($.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(V.A, { title: l, body: i, badgeImage: r, badgeName: l, shouldShow: s, children: t });
}
var z = n(839534),
    W = n(683063);
function Y(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(W.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: l,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: r,
        children: s,
    });
}
var K = n(116833),
    q = n(704640),
    Q = n(425713),
    Z = n(642481),
    J = n(720879),
    ee = n(202541),
    et = n(49999),
    en = n(518477);
let ea = function (e) {
    let {
            badgeId: t = ee.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: d,
            progressCircleUrgency: o,
            onShow: u,
        } = e,
        f = ee.VD[t].nameUnformattedNitro,
        E = c.intl.string(f).toLocaleUpperCase(),
        m = ee.VD[t].rarity,
        g = (0, q.A)(t),
        p = (0, Q.I)(t).standard;
    (0, l.useEffect)(() => {
        K.m[K.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let b = (0, l.useCallback)(() => {
        n?.(et.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, d, o);
        return (0, a.jsx)(V.A, {
            targetElementRef: s,
            onShow: u,
            title: E,
            body: e.body,
            variant: "nitro",
            rarity: m,
            badgeImage: p,
            badgeName: E,
            progressCircle: t,
            children: r,
        });
    }
    let _ = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: K.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: E, progressCircleText: i, progressCirclePercent: d, progressCircleUrgency: o },
        },
        title: E,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(J.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: en.In,
              onShow: u,
              ..._,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(Z.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: b,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ..._,
                  }),
              ],
          });
};
var el = n(592265);
let er = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: el.R,
        children: [t, (0, a.jsx)("div", { className: el.A, children: n }), l],
    });
};
var es = n(224016),
    ei = n(747278);
let ed = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, Q.I)(n.id).standard;
    return (0, a.jsxs)(er, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(es.A, { width: 56, className: ei.R }),
        children: [
            (0, a.jsx)(O.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(P.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: ei.K,
                children: t.description,
            }),
        ],
    });
};
var eo = n(30084),
    ec = n(24001),
    eu = n(104886),
    ef = n(590202),
    eE = n(976860),
    em = n(305003),
    eg = n(273875),
    ep = n(798618),
    eb = n(752079),
    e_ = n(370277);
function eh(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
        [d, o] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let f = l.useCallback(() => {
        u(),
            (c.current = window.setTimeout(() => {
                (c.current = null), o(!0);
            }, r));
    }, [r, u]);
    l.useEffect(() => {
        i && !d && f();
    }, [i, d, f]);
    let E = l.useCallback(() => {
            f();
        }, [f]),
        m = l.useCallback(() => {
            u(), o(!1);
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: E,
        onMouseLeave: m,
        children: [
            t,
            (0, a.jsxs)(eg.x, {
                targetElementRef: n,
                shouldShow: !!(d || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eA, { showSubtext: s }), (0, a.jsx)(ep.F, {})],
            }),
        ],
    });
}
function eA(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(er, {
        assetComponent: (0, a.jsx)(eb.A, { className: e_.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(O.D, {
            variant: "heading-md/extrabold",
            className: e_.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(O.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : e_.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(P.E, { variant: "text-xs/normal", className: e_.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eR = n(174459),
    ex = n(474090),
    eN = n(439174),
    eI = n(183555),
    ev = n(47675),
    eT = n(999291),
    eS = n(652215),
    ej = n(758836);
let eC = "premium";
var eD = n(816645);
function ey(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: r,
            displayProfile: s,
            onClose: i,
            shouldOpenBadgeTooltip: d,
            shouldGlowTenureBadge: u,
            popoutAnchorRef: E,
        } = e,
        [C, M] = l.useState(!1),
        O = l.useRef(null),
        P = l.useRef(null),
        U = l.useRef(null),
        B = l.useRef(null),
        { analyticsLocations: G } = (0, I.Ay)(N.A.BADGE),
        { context: L, trackUserProfileAction: H } = (0, eI.NJ)(),
        V = o.default.getCurrentUser(),
        $ = (0, ex.CC)(V?.premiumType, ee.PremiumTypes.TIER_2),
        F = (0, T.J9)({ location: "UserProfileBadgeList" }),
        W = (function (e) {
            let { location: t } = e;
            return D.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        K = (function (e) {
            let { location: t } = e;
            return y.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (F || K) && s?.userId != null && !S.Ay.hasCatalogFor(s.userId) && (0, v.RS)(s.userId);
    }, [F, K, s?.userId]);
    let q = s?.userId,
        Q = (0, g.bG)([S.Ay], () => {
            if (!K || null == q) return null;
            let e = {};
            for (let n of t) {
                let t = (0, j.w0)(n.id);
                if (null == t) continue;
                let a = S.Ay.getBadgeById(t, q)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [K, q, t]),
        Z = s?.userId === V?.id,
        J = Z && F && W && null != E,
        et = f((0, eT.AP)(V?.id ?? null)).some((e) => e.id === em.A.ORB_PROFILE_BADGE),
        el = (0, a.jsx)("div", {
            ref: O,
            className: m()(eD.kL, J && eD.Tx, n),
            "aria-label": c.intl.string(c.t.VWV0y5),
            role: "group",
            ...(J ? { onClick: () => M((e) => !e) } : null),
            children: t.map((e, t) => {
                let n = e.id === em.A.ORB_PROFILE_BADGE,
                    l = (0, eN.e0)(e.id),
                    c = null != l || e.id === eC,
                    f = "april_fools_2026" === e.id,
                    E = void 0 !== l && e.id !== eC,
                    g = Q?.[e.id],
                    h = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? g ?? (0, en.L7)(e.icon),
                        className: m()(eD.qS, null != g && eD.Do, r),
                    }),
                    I = null != d && d(e.id),
                    v = {
                        onClick: (a) => {
                            if (
                                (H({ action: "PRESS_BADGE" }),
                                (0, ev.vP)({
                                    badgeId: (0, j.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: G,
                                    ...L,
                                }),
                                J)
                            )
                                return void a.preventDefault();
                            let l = s?.userId != null ? o.default.getUser(s.userId) : null;
                            if (F && l?.bot !== !0) {
                                a.preventDefault(),
                                    (0, k._)({
                                        initialBadgeId: (0, j.w0)(e.id),
                                        targetUserId: s?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    });
                                return;
                            }
                            if (n) {
                                (0, z.Cz)({
                                    tab: ej.G2.ORBS,
                                    analyticsLocations: G,
                                    analyticsSource: N.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    i?.(),
                                    (0, p.closeAllModals)();
                                return;
                            }
                            if (c) {
                                if (
                                    (a.preventDefault(),
                                    eR.default.track(eS.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: $,
                                        viewed_user_id: s?.userId,
                                    }),
                                    $)
                                ) {
                                    Z
                                        ? ((0, eE.pX)(eS.BVt.NITRO_HOME), (0, p.closeAllModals)())
                                        : (0, eo.D)({ analyticsLocations: G, displayProfile: s }),
                                        i?.();
                                    return;
                                }
                                if (Z) {
                                    let t = null != e.link ? (0, A.default)(e.link, { analyticsLocations: G }) : null;
                                    if (null == t) return;
                                    return i?.(), (0, p.closeAllModals)(), t(a);
                                }
                                return (0, eo.D)({ analyticsLocations: G, displayProfile: s }), void i?.();
                            }
                            let r = null != e.link ? (0, A.default)(e.link, { analyticsLocations: G }) : null;
                            if (null != r) return i?.(), (0, p.closeAllModals)(), r(a);
                        },
                        onMouseEnter: () => {
                            "quest_completed" === e.id &&
                                ((0, eu.E5)(eu.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, R.r)({
                                          type: x.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: ec.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eR.default.track(eS.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, ef.fF)(ec.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                H({ action: "HOVER_BADGE" }),
                                (0, ev.vP)({
                                    badgeId: (0, j.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: G,
                                    ...L,
                                });
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(J ? { "aria-haspopup": "dialog", "aria-expanded": C } : null),
                        style: { filter: u && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (F)
                    return (0, a.jsx)(
                        X,
                        {
                            shouldShow: !C,
                            legacyBadgeId: e.id,
                            userId: s?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, en.L7)(e.icon),
                            children: (0, a.jsx)(b.Anchor, { ...v, children: h }),
                        },
                        `${e.id}-${t}`,
                    );
                if (E) {
                    let n = (0, a.jsx)(b.Anchor, { ...v, ref: P, children: h });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(ea, {
                                badgeId: e.id,
                                targetElementRef: P,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eR.default.track(eS.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (Z ? "self" : "other"),
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
                    let n = (0, a.jsx)(b.Anchor, { ...v, ref: U, children: h });
                    return (0, a.jsx)(
                        eh,
                        {
                            targetElementRef: U,
                            delay: en.In,
                            showSubtext: !et && !e.isPreviewMode,
                            forceOpen: I,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (f) {
                    let n = (0, a.jsx)(b.Anchor, { ...v, ref: B, children: h });
                    return (0, a.jsx)(
                        Y,
                        {
                            targetElementRef: B,
                            delay: en.In,
                            forceOpen: I,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let T = (0, a.jsx)(b.Anchor, { ...v, children: h }),
                    S = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eC
                            ? (0, a.jsx)(ed, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: c && e.id !== eC ? l : void 0 });
                return (0, a.jsx)(
                    _.m,
                    { __unsupportedReactNodeAsText: S, forceOpen: I, delay: en.In, ariaHidden: !0, children: T },
                    `${e.id}-${t}`,
                );
            }),
        });
    return J
        ? (0, a.jsx)(h.Y, {
              targetElementRef: E,
              position: "bottom",
              align: "left",
              spacing: 4,
              scrollBehavior: "close",
              shouldShow: C,
              onRequestClose: (e) => {
                  O.current?.contains(e?.target ?? null) !== !0 && M(!1);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(w, { onClose: t });
              },
              children: () => el,
          })
        : el;
}
var eM = n(996988);
let eO = {
    [eM.d.POPOUT]: 12,
    [eM.d.MODAL]: 26,
    [eM.d.SIDEBAR]: 13,
    [eM.d.VIDEO_TILE_BACKGROUND]: 12,
    [eM.d.EMBED]: 12,
};
function eP(e) {
    let {
            displayProfile: t,
            themeType: n,
            isRedesignEnabled: s,
            pendingLegacyUsernameDisabled: i,
            pendingBadges: d,
            onClose: o,
            shouldOpenBadgeTooltip: c,
            shouldGlowTenureBadge: u,
            popoutAnchorRef: E,
        } = e,
        m = f(t, i),
        g = l.useMemo(() => {
            if (null == d) return m;
            let e = new Set(m.map((e) => e.id));
            return [...m, ...d.filter((t) => !e.has(t.id))];
        }, [m, d]);
    if (0 === g.length) return null;
    let p = n === eM.d.MODAL_V2 ? [g] : (0, r.chunk)(g, !0 === s && n === eM.d.SIDEBAR ? eO[eM.d.POPOUT] : eO[n]);
    return (0, a.jsx)(a.Fragment, {
        children: p.map((e) =>
            (0, a.jsx)(
                ey,
                {
                    badges: e,
                    displayProfile: t,
                    onClose: o,
                    shouldOpenBadgeTooltip: c,
                    shouldGlowTenureBadge: u,
                    popoutAnchorRef: E,
                },
                e[0].id,
            ),
        ),
    });
}
