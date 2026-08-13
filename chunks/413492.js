"use strict";
n.d(t, { A: () => eO });
var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n(702841),
    l = n(885386),
    o = n(351906),
    d = n(287809),
    c = n(375708);
let u = "legacy_username";
function _(e, t) {
    let n = l.m$.useSetting(),
        i = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        r = (0, s.bG)([o.A], () => o.A.hidePersonalInformation);
    if (null == e) return [];
    let a = e?.getBadges() ?? [];
    return (
        null != i && i.id === e.userId && (void 0 !== t ? t : n) && (a = a.filter((e) => e.id !== u)),
        r && (a = a.map((e) => ({ ...e, description: e.id === u ? c.intl.string(c.t.Br1ls3) : e.description }))),
        a
    );
}
var E = n(503698),
    A = n.n(E),
    h = n(17928),
    I = n(192308),
    f = n(349288),
    p = n(866665),
    T = n(983555),
    m = n(274670),
    g = n(144779),
    S = n(793574),
    N = n(688810),
    C = n(682618),
    R = n(992526),
    O = n(982240),
    L = n(609782);
let D = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = n(70283),
    v = n(775602),
    b = n(461536),
    M = n(321191);
function P(e) {
    let t,
        n,
        a,
        { children: s, legacyBadgeId: l, userId: o, fallbackTitle: d, fallbackIconSrc: u } = e,
        _ = (0, L.w0)(l),
        {
            badgeData: E,
            currentTier: A,
            obtainedAt: I,
        } = (0, h.cf)(
            [O.Ay],
            () =>
                null == _ || null == o
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: O.Ay.getBadgeById(_, o),
                          currentTier: O.Ay.getCurrentTier(_, o),
                          obtainedAt: O.Ay.getObtainedAt(_, o),
                      },
            [_, o],
        ),
        f = (0, h.bG)([v.Ay], () => v.Ay.useReducedMotion),
        p = r.useCallback(() => {
            null != o && O.Ay.isCatalogStaleFor(o) && (0, C.RS)(o);
        }, [o]),
        T = E?.badge_id === y.$.PREMIUM_TENURE,
        m = _ === y.$.LEGACY_USERNAME,
        g = A?.name,
        S = T ? c.intl.string(c.t.Ipxkog) : (E?.name ?? d);
    T ? (a = n = null != g ? `${S} ${g}` : S) : null != g ? ((t = S), (n = g), (a = `${S} ${g}`)) : ((n = S), (a = S));
    let N = f ? void 0 : E?.complex_icon_animated_url,
        R = N ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? u,
        D = null != N && R === N;
    if (m) return (0, i.jsx)(U, { userId: o, title: n, badgeImage: R, children: s });
    let M = E?.info_label ?? (null != I ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(I) }) : void 0);
    return (0, i.jsx)(b.A, {
        title: n,
        eyebrow: t,
        body: M,
        badgeImage: R,
        badgeName: a,
        variant: T ? "nitro" : "default",
        isAnimated: D,
        onShow: p,
        children: s,
    });
}
function U(e) {
    let { children: t, userId: n, title: r, badgeImage: a } = e,
        s = (0, h.bG)(
            [M.A, o.A],
            () =>
                o.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (M.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, i.jsx)(b.A, { title: r, body: s, badgeImage: a, badgeName: r, children: t });
}
var w = n(470739),
    G = n(839534),
    x = n(459192);
function k(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: a, children: s } = e;
    return (0, i.jsx)(x.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: a,
        children: s,
    });
}
var F = n(116833),
    V = n(704640),
    B = n(425713),
    H = n(642481),
    j = n(720879),
    W = n(202541),
    Y = n(49999),
    K = n(518477);
let $ = function (e) {
    let {
            badgeId: t = W.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: a,
            targetElementRef: s,
            progressCircleText: l,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: u,
        } = e,
        _ = W.VD[t].nameUnformattedNitro,
        E = c.intl.string(_).toLocaleUpperCase(),
        A = W.VD[t].rarity,
        h = (0, V.A)(t),
        I = (0, B.I)(t).standard;
    (0, r.useEffect)(() => {
        F.m[F.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = I);
    }, [I]);
    let f = (0, r.useCallback)(() => {
        n?.(Y.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(l, o, d);
        return (0, i.jsx)(b.A, {
            targetElementRef: s,
            onShow: u,
            title: E,
            body: e.body,
            variant: "nitro",
            rarity: A,
            badgeImage: I,
            badgeName: E,
            progressCircle: t,
            children: a,
        });
    }
    let p = {
        gradientColor: h,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: F.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: I, alt: E, progressCircleText: l, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: E,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(j.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: K.In,
              onShow: u,
              ...p,
              children: a,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  a,
                  (0, i.jsx)(H.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: f,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...p,
                  }),
              ],
          });
};
var z = n(297264),
    Z = n(834730),
    q = n(214981);
let X = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: q.R, children: [t, (0, i.jsx)("div", { className: q.A, children: n }), r] });
};
var Q = n(224016),
    J = n(632707);
let ee = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, B.I)(n.id).standard;
    return (0, i.jsxs)(X, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(Q.A, { width: 56, className: J.R }),
        children: [
            (0, i.jsx)(z.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(Z.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: J.K,
                children: t.description,
            }),
        ],
    });
};
var et = n(30084),
    en = n(24001),
    ei = n(104886),
    er = n(590202),
    ea = n(976860),
    es = n(305003),
    el = n(273875),
    eo = n(798618),
    ed = n(752079),
    ec = n(641066);
function eu(e) {
    let { children: t, targetElementRef: n, delay: a, showSubtext: s, forceOpen: l } = e,
        [o, d] = r.useState(!1),
        c = r.useRef(null),
        u = r.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    r.useEffect(() => u, [u]);
    let _ = r.useCallback(() => {
        u(),
            (c.current = window.setTimeout(() => {
                (c.current = null), d(!0);
            }, a));
    }, [a, u]);
    r.useEffect(() => {
        l && !o && _();
    }, [l, o, _]);
    let E = r.useCallback(() => {
            _();
        }, [_]),
        A = r.useCallback(() => {
            u(), d(!1);
        }, [u]);
    return (0, i.jsxs)("div", {
        onMouseEnter: E,
        onMouseLeave: A,
        children: [
            t,
            (0, i.jsxs)(el.x, {
                targetElementRef: n,
                shouldShow: !!(o || l),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(e_, { showSubtext: s }), (0, i.jsx)(eo.F, {})],
            }),
        ],
    });
}
function e_(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(X, {
        assetComponent: (0, i.jsx)(ed.A, { className: ec.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(z.D, {
            variant: "heading-md/extrabold",
            className: ec.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(z.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : ec.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(Z.E, { variant: "text-xs/normal", className: ec.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eE = n(174459),
    eA = n(474090),
    eh = n(439174),
    eI = n(183555),
    ef = n(47675),
    ep = n(999291),
    eT = n(652215),
    em = n(758836);
let eg = "premium";
var eS = n(892724);
function eN(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: a,
            displayProfile: s,
            onClose: l,
            shouldOpenBadgeTooltip: o,
            shouldGlowTenureBadge: u,
        } = e,
        E = r.useRef(null),
        y = r.useRef(null),
        v = r.useRef(null),
        { analyticsLocations: b } = (0, N.Ay)(S.A.BADGE),
        { context: M, trackUserProfileAction: U } = (0, eI.NJ)(),
        x = d.default.getCurrentUser(),
        F = (0, eA.CC)(x?.premiumType, W.PremiumTypes.TIER_2),
        V = (0, R.J9)({ location: "UserProfileBadgeList" }),
        B = (function (e) {
            let { location: t } = e;
            return D.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (V || B) && s?.userId != null && !O.Ay.hasCatalogFor(s.userId) && (0, C.RS)(s.userId);
    }, [V, B, s?.userId]);
    let H = s?.userId,
        j = (0, h.bG)([O.Ay], () => {
            if (!B || null == H) return null;
            let e = {};
            for (let n of t) {
                let t = (0, L.w0)(n.id);
                if (null == t) continue;
                let i = O.Ay.getBadgeById(t, H)?.simple_icon_url;
                null != i && (e[n.id] = i);
            }
            return e;
        }, [B, H, t]),
        Y = _((0, ep.AP)(x?.id ?? null)).some((e) => e.id === es.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: A()(eS.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === es.A.ORB_PROFILE_BADGE,
                r = (0, eh.e0)(e.id),
                c = null != r || e.id === eg,
                _ = s?.userId === x?.id,
                h = "april_fools_2026" === e.id,
                N = void 0 !== r && e.id !== eg,
                C = j?.[e.id],
                R = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? C ?? (0, K.L7)(e.icon),
                    className: A()(eS.qS, null != C && eS.Do, a),
                }),
                O = null != o && o(e.id),
                D = {
                    onClick: (i) => {
                        U({ action: "PRESS_BADGE" }),
                            (0, ef.vP)({
                                badgeId: (0, L.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: b,
                                ...M,
                            });
                        let r = s?.userId != null ? d.default.getUser(s.userId) : null;
                        if (V && r?.bot !== !0) {
                            i.preventDefault(),
                                (0, w._)({
                                    initialBadgeId: (0, L.w0)(e.id),
                                    targetUserId: s?.userId,
                                    targetUsername: r?.globalName ?? r?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, G.Cz)({
                                tab: em.G2.ORBS,
                                analyticsLocations: b,
                                analyticsSource: S.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                l?.(),
                                (0, I.closeAllModals)();
                            return;
                        }
                        if (c) {
                            if (
                                (i.preventDefault(),
                                eE.default.track(eT.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: F,
                                    viewed_user_id: s?.userId,
                                }),
                                F)
                            ) {
                                _
                                    ? ((0, ea.pX)(eT.BVt.NITRO_HOME), (0, I.closeAllModals)())
                                    : (0, et.D)({ analyticsLocations: b, displayProfile: s }),
                                    l?.();
                                return;
                            }
                            if (_) {
                                let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: b }) : null;
                                if (null == t) return;
                                return l?.(), (0, I.closeAllModals)(), t(i);
                            }
                            return (0, et.D)({ analyticsLocations: b, displayProfile: s }), void l?.();
                        }
                        let a = null != e.link ? (0, T.default)(e.link, { analyticsLocations: b }) : null;
                        if (null != a) return l?.(), (0, I.closeAllModals)(), a(i);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ((0, ei.E5)(ei.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                ? (0, m.r)({
                                      type: g.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                      surfaceId: en.uF.QUEST_BADGE,
                                      isTargeted: !1,
                                  })
                                : eE.default.track(eT.HAw.QUEST_CONTENT_VIEWED, {
                                      ...(0, er.fF)(en.uF.QUEST_BADGE),
                                      is_targeted: !1,
                                  })),
                            U({ action: "HOVER_BADGE" }),
                            (0, ef.vP)({
                                badgeId: (0, L.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: b,
                                ...M,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: u && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (V)
                return (0, i.jsx)(
                    P,
                    {
                        legacyBadgeId: e.id,
                        userId: s?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, K.L7)(e.icon),
                        children: (0, i.jsx)(f.Anchor, { ...D, children: R }),
                    },
                    `${e.id}-${t}`,
                );
            if (N) {
                let n = (0, i.jsx)(f.Anchor, { ...D, ref: E, children: R });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)($, {
                            badgeId: e.id,
                            targetElementRef: E,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                eE.default.track(eT.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(f.Anchor, { ...D, ref: y, children: R });
                return (0, i.jsx)(
                    eu,
                    {
                        targetElementRef: y,
                        delay: K.In,
                        showSubtext: !Y && !e.isPreviewMode,
                        forceOpen: O,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (h) {
                let n = (0, i.jsx)(f.Anchor, { ...D, ref: v, children: R });
                return (0, i.jsx)(
                    k,
                    { targetElementRef: v, delay: K.In, forceOpen: O, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let B = (0, i.jsx)(f.Anchor, { ...D, children: R }),
                H = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== eg
                        ? (0, i.jsx)(ee, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== eg ? r : void 0 });
            return (0, i.jsx)(
                p.m,
                { __unsupportedReactNodeAsText: H, forceOpen: O, delay: K.In, ariaHidden: !0, children: B },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eC = n(996988);
let eR = {
    [eC.d.POPOUT]: 12,
    [eC.d.MODAL]: 26,
    [eC.d.SIDEBAR]: 13,
    [eC.d.VIDEO_TILE_BACKGROUND]: 12,
    [eC.d.EMBED]: 12,
};
function eO(e) {
    let {
            displayProfile: t,
            themeType: n,
            isRedesignEnabled: s,
            pendingLegacyUsernameDisabled: l,
            pendingBadges: o,
            onClose: d,
            shouldOpenBadgeTooltip: c,
            shouldGlowTenureBadge: u,
        } = e,
        E = _(t, l),
        A = r.useMemo(() => {
            if (null == o) return E;
            let e = new Set(E.map((e) => e.id));
            return [...E, ...o.filter((t) => !e.has(t.id))];
        }, [E, o]);
    if (0 === A.length) return null;
    let h = n === eC.d.MODAL_V2 ? [A] : (0, a.chunk)(A, !0 === s && n === eC.d.SIDEBAR ? eR[eC.d.POPOUT] : eR[n]);
    return (0, i.jsx)(i.Fragment, {
        children: h.map((e) =>
            (0, i.jsx)(
                eN,
                { badges: e, displayProfile: t, onClose: d, shouldOpenBadgeTooltip: c, shouldGlowTenureBadge: u },
                e[0].id,
            ),
        ),
    });
}
