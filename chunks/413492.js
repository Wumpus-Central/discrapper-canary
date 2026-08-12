n.d(t, { A: () => eT });
var a = n(477900),
    r = n(582128),
    l = n(435558),
    s = n(702841),
    i = n(885386),
    d = n(351906),
    o = n(287809),
    c = n(375708);
let u = "legacy_username";
function f(e, t) {
    let n = i.m$.useSetting(),
        a = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        r = (0, s.bG)([d.A], () => d.A.hidePersonalInformation);
    if (null == e) return [];
    let l = e?.getBadges() ?? [];
    return (
        null != a && a.id === e.userId && (void 0 !== t ? t : n) && (l = l.filter((e) => e.id !== u)),
        r && (l = l.map((e) => ({ ...e, description: e.id === u ? c.intl.string(c.t.Br1ls3) : e.description }))),
        l
    );
}
var E = n(503698),
    m = n.n(E),
    g = n(17928),
    p = n(192308),
    _ = n(349288),
    b = n(866665),
    h = n(983555),
    A = n(274670),
    R = n(144779),
    N = n(793574),
    x = n(688810),
    I = n(682618),
    v = n(992526),
    T = n(982240),
    S = n(609782);
let D = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var j = n(70283),
    C = n(775602),
    y = n(461536),
    M = n(321191);
function O(e) {
    let t,
        n,
        l,
        { children: s, legacyBadgeId: i, userId: d, fallbackTitle: o, fallbackIconSrc: u } = e,
        f = (0, S.w0)(i),
        {
            badgeData: E,
            currentTier: m,
            obtainedAt: p,
        } = (0, g.cf)(
            [T.Ay],
            () =>
                null == f || null == d
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: T.Ay.getBadgeById(f, d),
                          currentTier: T.Ay.getCurrentTier(f, d),
                          obtainedAt: T.Ay.getObtainedAt(f, d),
                      },
            [f, d],
        ),
        _ = (0, g.bG)([C.Ay], () => C.Ay.useReducedMotion),
        b = r.useCallback(() => {
            null != d && T.Ay.isCatalogStaleFor(d) && (0, I.RS)(d);
        }, [d]),
        h = E?.badge_id === j.$.PREMIUM_TENURE,
        A = f === j.$.LEGACY_USERNAME,
        R = m?.name,
        N = h ? c.intl.string(c.t.Ipxkog) : (E?.name ?? o);
    h ? (l = n = null != R ? `${N} ${R}` : N) : null != R ? ((t = N), (n = R), (l = `${N} ${R}`)) : ((n = N), (l = N));
    let x = _ ? void 0 : E?.complex_icon_animated_url,
        v = x ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? u,
        D = null != x && v === x;
    if (A) return (0, a.jsx)(P, { userId: d, title: n, badgeImage: v, children: s });
    let M = E?.info_label ?? (null != p ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(p) }) : void 0);
    return (0, a.jsx)(y.A, {
        title: n,
        eyebrow: t,
        body: M,
        badgeImage: v,
        badgeName: l,
        variant: h ? "nitro" : "default",
        isAnimated: D,
        onShow: b,
        children: s,
    });
}
function P(e) {
    let { children: t, userId: n, title: r, badgeImage: l } = e,
        s = (0, g.bG)(
            [M.A, d.A],
            () =>
                d.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (M.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(y.A, { title: r, body: s, badgeImage: l, badgeName: r, children: t });
}
var U = n(470739),
    B = n(839534),
    G = n(459192);
function k(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: l, children: s } = e;
    return (0, a.jsx)(G.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: l,
        children: s,
    });
}
var L = n(116833),
    w = n(704640),
    H = n(425713),
    V = n(642481),
    $ = n(720879),
    X = n(202541),
    F = n(49999),
    z = n(518477);
let W = function (e) {
    let {
            badgeId: t = X.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: l,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: d,
            progressCircleUrgency: o,
            onShow: u,
        } = e,
        f = X.VD[t].nameUnformattedNitro,
        E = c.intl.string(f).toLocaleUpperCase(),
        m = X.VD[t].rarity,
        g = (0, w.A)(t),
        p = (0, H.I)(t).standard;
    (0, r.useEffect)(() => {
        L.m[L.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let _ = (0, r.useCallback)(() => {
        n?.(F.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, d, o);
        return (0, a.jsx)(y.A, {
            targetElementRef: s,
            onShow: u,
            title: E,
            body: e.body,
            variant: "nitro",
            rarity: m,
            badgeImage: p,
            badgeName: E,
            progressCircle: t,
            children: l,
        });
    }
    let b = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: L.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: E, progressCircleText: i, progressCirclePercent: d, progressCircleUrgency: o },
        },
        title: E,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)($.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: z.In,
              onShow: u,
              ...b,
              children: l,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  l,
                  (0, a.jsx)(V.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: _,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...b,
                  }),
              ],
          });
};
var Y = n(297264),
    K = n(834730),
    q = n(214981);
let Q = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, a.jsxs)("div", { className: q.R, children: [t, (0, a.jsx)("div", { className: q.A, children: n }), r] });
};
var Z = n(224016),
    J = n(632707);
let ee = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, H.I)(n.id).standard;
    return (0, a.jsxs)(Q, {
        assetComponent: (0, a.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(Z.A, { width: 56, className: J.R }),
        children: [
            (0, a.jsx)(Y.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(K.E, {
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
    ea = n(104886),
    er = n(590202),
    el = n(976860),
    es = n(305003),
    ei = n(273875),
    ed = n(798618),
    eo = n(752079),
    ec = n(641066);
function eu(e) {
    let { children: t, targetElementRef: n, delay: l, showSubtext: s, forceOpen: i } = e,
        [d, o] = r.useState(!1),
        c = r.useRef(null),
        u = r.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    r.useEffect(() => u, [u]);
    let f = r.useCallback(() => {
        u(),
            (c.current = window.setTimeout(() => {
                (c.current = null), o(!0);
            }, l));
    }, [l, u]);
    r.useEffect(() => {
        i && !d && f();
    }, [i, d, f]);
    let E = r.useCallback(() => {
            f();
        }, [f]),
        m = r.useCallback(() => {
            u(), o(!1);
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: E,
        onMouseLeave: m,
        children: [
            t,
            (0, a.jsxs)(ei.x, {
                targetElementRef: n,
                shouldShow: !!(d || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(ef, { showSubtext: s }), (0, a.jsx)(ed.F, {})],
            }),
        ],
    });
}
function ef(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(Q, {
        assetComponent: (0, a.jsx)(eo.A, { className: ec.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(Y.D, {
            variant: "heading-md/extrabold",
            className: ec.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(Y.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : ec.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(K.E, { variant: "text-xs/normal", className: ec.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eE = n(174459),
    em = n(474090),
    eg = n(439174),
    ep = n(183555),
    e_ = n(47675),
    eb = n(999291),
    eh = n(652215),
    eA = n(758836);
let eR = "premium";
var eN = n(892724);
function ex(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: l,
            displayProfile: s,
            onClose: i,
            shouldOpenBadgeTooltip: d,
            shouldGlowTenureBadge: u,
        } = e,
        E = r.useRef(null),
        j = r.useRef(null),
        C = r.useRef(null),
        { analyticsLocations: y } = (0, x.Ay)(N.A.BADGE),
        { context: M, trackUserProfileAction: P } = (0, ep.NJ)(),
        G = o.default.getCurrentUser(),
        L = (0, em.CC)(G?.premiumType, X.PremiumTypes.TIER_2),
        w = (0, v.J9)({ location: "UserProfileBadgeList" }),
        H = (function (e) {
            let { location: t } = e;
            return D.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (w || H) && s?.userId != null && !T.Ay.hasCatalogFor(s.userId) && (0, I.RS)(s.userId);
    }, [w, H, s?.userId]);
    let V = s?.userId,
        $ = (0, g.bG)([T.Ay], () => {
            if (!H || null == V) return null;
            let e = {};
            for (let n of t) {
                let t = (0, S.w0)(n.id);
                if (null == t) continue;
                let a = T.Ay.getBadgeById(t, V)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [H, V, t]),
        F = f((0, eb.AP)(G?.id ?? null)).some((e) => e.id === es.A.ORB_PROFILE_BADGE);
    return (0, a.jsx)("div", {
        className: m()(eN.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === es.A.ORB_PROFILE_BADGE,
                r = (0, eg.e0)(e.id),
                c = null != r || e.id === eR,
                f = s?.userId === G?.id,
                g = "april_fools_2026" === e.id,
                x = void 0 !== r && e.id !== eR,
                I = $?.[e.id],
                v = (0, a.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? I ?? (0, z.L7)(e.icon),
                    className: m()(eN.qS, null != I && eN.Do, l),
                }),
                T = null != d && d(e.id),
                D = {
                    onClick: (a) => {
                        P({ action: "PRESS_BADGE" }),
                            (0, e_.vP)({
                                badgeId: (0, S.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: y,
                                ...M,
                            });
                        let r = s?.userId != null ? o.default.getUser(s.userId) : null;
                        if (w && r?.bot !== !0) {
                            a.preventDefault(),
                                (0, U._)({
                                    initialBadgeId: (0, S.w0)(e.id),
                                    targetUserId: s?.userId,
                                    targetUsername: r?.globalName ?? r?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, B.Cz)({
                                tab: eA.G2.ORBS,
                                analyticsLocations: y,
                                analyticsSource: N.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                i?.(),
                                (0, p.closeAllModals)();
                            return;
                        }
                        if (c) {
                            if (
                                (a.preventDefault(),
                                eE.default.track(eh.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: L,
                                    viewed_user_id: s?.userId,
                                }),
                                L)
                            ) {
                                f
                                    ? ((0, el.pX)(eh.BVt.NITRO_HOME), (0, p.closeAllModals)())
                                    : (0, et.D)({ analyticsLocations: y, displayProfile: s }),
                                    i?.();
                                return;
                            }
                            if (f) {
                                let t = null != e.link ? (0, h.default)(e.link, { analyticsLocations: y }) : null;
                                if (null == t) return;
                                return i?.(), (0, p.closeAllModals)(), t(a);
                            }
                            return (0, et.D)({ analyticsLocations: y, displayProfile: s }), void i?.();
                        }
                        let l = null != e.link ? (0, h.default)(e.link, { analyticsLocations: y }) : null;
                        if (null != l) return i?.(), (0, p.closeAllModals)(), l(a);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ((0, ea.E5)(ea.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                ? (0, A.r)({
                                      type: R.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                      surfaceId: en.uF.QUEST_BADGE,
                                      isTargeted: !1,
                                  })
                                : eE.default.track(eh.HAw.QUEST_CONTENT_VIEWED, {
                                      ...(0, er.fF)(en.uF.QUEST_BADGE),
                                      is_targeted: !1,
                                  })),
                            P({ action: "HOVER_BADGE" }),
                            (0, e_.vP)({
                                badgeId: (0, S.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: y,
                                ...M,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: u && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (w)
                return (0, a.jsx)(
                    O,
                    {
                        legacyBadgeId: e.id,
                        userId: s?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, z.L7)(e.icon),
                        children: (0, a.jsx)(_.Anchor, { ...D, children: v }),
                    },
                    `${e.id}-${t}`,
                );
            if (x) {
                let n = (0, a.jsx)(_.Anchor, { ...D, ref: E, children: v });
                return (0, a.jsx)(
                    "div",
                    {
                        children: (0, a.jsx)(W, {
                            badgeId: e.id,
                            targetElementRef: E,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                eE.default.track(eh.HAw.TOOLTIP_VIEWED, {
                                    type: "tiered_tenure_badge_profile_" + (f ? "self" : "other"),
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
                let n = (0, a.jsx)(_.Anchor, { ...D, ref: j, children: v });
                return (0, a.jsx)(
                    eu,
                    {
                        targetElementRef: j,
                        delay: z.In,
                        showSubtext: !F && !e.isPreviewMode,
                        forceOpen: T,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (g) {
                let n = (0, a.jsx)(_.Anchor, { ...D, ref: C, children: v });
                return (0, a.jsx)(
                    k,
                    { targetElementRef: C, delay: z.In, forceOpen: T, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let H = (0, a.jsx)(_.Anchor, { ...D, children: v }),
                V = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== eR
                        ? (0, a.jsx)(ee, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== eR ? r : void 0 });
            return (0, a.jsx)(
                b.m,
                { __unsupportedReactNodeAsText: V, forceOpen: T, delay: z.In, ariaHidden: !0, children: H },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eI = n(996988);
let ev = {
    [eI.d.POPOUT]: 12,
    [eI.d.MODAL]: 26,
    [eI.d.SIDEBAR]: 13,
    [eI.d.VIDEO_TILE_BACKGROUND]: 12,
    [eI.d.EMBED]: 12,
};
function eT(e) {
    let {
            displayProfile: t,
            themeType: n,
            isRedesignEnabled: s,
            pendingLegacyUsernameDisabled: i,
            pendingBadges: d,
            onClose: o,
            shouldOpenBadgeTooltip: c,
            shouldGlowTenureBadge: u,
        } = e,
        E = f(t, i),
        m = r.useMemo(() => {
            if (null == d) return E;
            let e = new Set(E.map((e) => e.id));
            return [...E, ...d.filter((t) => !e.has(t.id))];
        }, [E, d]);
    if (0 === m.length) return null;
    let g = n === eI.d.MODAL_V2 ? [m] : (0, l.chunk)(m, !0 === s && n === eI.d.SIDEBAR ? ev[eI.d.POPOUT] : ev[n]);
    return (0, a.jsx)(a.Fragment, {
        children: g.map((e) =>
            (0, a.jsx)(
                ex,
                { badges: e, displayProfile: t, onClose: o, shouldOpenBadgeTooltip: c, shouldGlowTenureBadge: u },
                e[0].id,
            ),
        ),
    });
}
