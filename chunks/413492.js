n.d(t, { A: () => eN });
var a = n(627968),
    l = n(64700),
    r = n(735438),
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
    p = n(990078),
    b = n(192308),
    _ = n(349288),
    h = n(983555),
    A = n(793574),
    R = n(688810),
    x = n(682618),
    N = n(992526),
    v = n(982240),
    I = n(609782);
let T = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var j = n(70283),
    C = n(775602),
    S = n(461536),
    y = n(321191);
function D(e) {
    let t,
        n,
        r,
        { children: s, legacyBadgeId: i, userId: d, fallbackTitle: o, fallbackIconSrc: u } = e,
        f = (0, I.w0)(i),
        {
            badgeData: E,
            currentTier: m,
            obtainedAt: p,
        } = (0, g.cf)(
            [v.Ay],
            () =>
                null == f || null == d
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: v.Ay.getBadgeById(f, d),
                          currentTier: v.Ay.getCurrentTier(f, d),
                          obtainedAt: v.Ay.getObtainedAt(f, d),
                      },
            [f, d],
        ),
        b = (0, g.bG)([C.Ay], () => C.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != d && v.Ay.isCatalogStaleFor(d) && (0, x.R)(d);
        }, [d]),
        h = E?.badge_id === j.$.PREMIUM_TENURE,
        A = f === j.$.LEGACY_USERNAME,
        R = m?.name,
        N = h ? c.intl.string(c.t.Ipxkog) : (E?.name ?? o);
    h ? (r = n = null != R ? `${N} ${R}` : N) : null != R ? ((t = N), (n = R), (r = `${N} ${R}`)) : ((n = N), (r = N));
    let T = b ? void 0 : E?.complex_icon_animated_url,
        y = T ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? u,
        D = null != T && y === T;
    if (A) return (0, a.jsx)(M, { userId: d, title: n, badgeImage: y, children: s });
    let O = E?.info_label ?? (null != p ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(p) }) : void 0);
    return (0, a.jsx)(S.A, {
        title: n,
        eyebrow: t,
        body: O,
        badgeImage: y,
        badgeName: r,
        variant: h ? "nitro" : "default",
        isAnimated: D,
        onShow: _,
        children: s,
    });
}
function M(e) {
    let { children: t, userId: n, title: l, badgeImage: r } = e,
        s = (0, g.bG)(
            [y.A, d.A],
            () =>
                d.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (y.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(S.A, { title: l, body: s, badgeImage: r, badgeName: l, children: t });
}
var O = n(470739),
    P = n(662388),
    U = n(459192);
function B(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(U.u, {
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
var k = n(116833),
    G = n(704640),
    w = n(425713),
    L = n(642481),
    H = n(720879),
    V = n(202541),
    $ = n(49999),
    X = n(518477);
let F = function (e) {
    let {
            badgeId: t = V.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: d,
            progressCircleUrgency: o,
            onShow: u,
        } = e,
        f = V.VD[t].nameUnformattedNitro,
        E = c.intl.string(f).toLocaleUpperCase(),
        m = V.VD[t].rarity,
        g = (0, G.A)(t),
        p = (0, w.I)(t).standard;
    (0, l.useEffect)(() => {
        k.m[k.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let b = (0, l.useCallback)(() => {
        n?.($.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, d, o);
        return (0, a.jsx)(S.A, {
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
            component: k.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: E, progressCircleText: i, progressCirclePercent: d, progressCircleUrgency: o },
        },
        title: E,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(H.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: X.In,
              onShow: u,
              ..._,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(L.A, {
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
var z = n(297264),
    Y = n(834730),
    W = n(775549);
let K = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", { className: W.R, children: [t, (0, a.jsx)("div", { className: W.A, children: n }), l] });
};
var q = n(224016),
    Z = n(852443);
let Q = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, w.I)(n.id).standard;
    return (0, a.jsxs)(K, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(q.A, { width: 56, className: Z.R }),
        children: [
            (0, a.jsx)(z.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Z.K,
                children: t.description,
            }),
        ],
    });
};
var J = n(30084),
    ee = n(24001),
    et = n(590202),
    en = n(976860),
    ea = n(305003),
    el = n(312640),
    er = n(798618),
    es = n(752079),
    ei = n(414690);
function ed(e) {
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
            (0, a.jsxs)(el.x, {
                targetElementRef: n,
                shouldShow: !!(d || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eo, { showSubtext: s }), (0, a.jsx)(er.F, {})],
            }),
        ],
    });
}
function eo(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(K, {
        assetComponent: (0, a.jsx)(es.A, { className: ei.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(z.D, {
            variant: "heading-md/extrabold",
            className: ei.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(z.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : ei.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(Y.E, { variant: "text-xs/normal", className: ei.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ec = n(174459),
    eu = n(474090),
    ef = n(439174),
    eE = n(183555),
    em = n(47675),
    eg = n(999291),
    ep = n(652215),
    eb = n(758836);
let e_ = "premium";
var eh = n(992028);
function eA(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: r,
            displayProfile: s,
            onClose: i,
            shouldOpenBadgeTooltip: d,
            shouldGlowTenureBadge: u,
        } = e,
        E = l.useRef(null),
        j = l.useRef(null),
        C = l.useRef(null),
        { analyticsLocations: S } = (0, R.Ay)(A.A.BADGE),
        { context: y, trackUserProfileAction: M } = (0, eE.NJ)(),
        U = o.default.getCurrentUser(),
        k = (0, eu.CC)(U?.premiumType, V.PremiumTypes.TIER_2),
        G = (0, N.J9)({ location: "UserProfileBadgeList" }),
        w = (function (e) {
            let { location: t } = e;
            return T.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (G || w) && s?.userId != null && !v.Ay.hasCatalogFor(s.userId) && (0, x.R)(s.userId);
    }, [G, w, s?.userId]);
    let L = s?.userId,
        H = (0, g.bG)([v.Ay], () => {
            if (!w || null == L) return null;
            let e = {};
            for (let n of t) {
                let t = (0, I.w0)(n.id);
                if (null == t) continue;
                let a = v.Ay.getBadgeById(t, L)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [w, L, t]),
        $ = f((0, eg.AP)(U?.id ?? null)).some((e) => e.id === ea.A.ORB_PROFILE_BADGE);
    return (0, a.jsx)("div", {
        className: m()(eh.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === ea.A.ORB_PROFILE_BADGE,
                l = (0, ef.e0)(e.id),
                c = null != l || e.id === e_,
                f = s?.userId === U?.id,
                g = "april_fools_2026" === e.id,
                R = void 0 !== l && e.id !== e_,
                x = H?.[e.id],
                N = (0, a.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? x ?? (0, X.L7)(e.icon),
                    className: m()(eh.qS, null != x && eh.Do, r),
                }),
                v = null != d && d(e.id),
                T = {
                    onClick: (a) => {
                        M({ action: "PRESS_BADGE" }),
                            (0, em.vP)({
                                badgeId: (0, I.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: S,
                                ...y,
                            });
                        let l = e.id.startsWith("staff") && !f,
                            r = s?.userId != null ? o.default.getUser(s.userId) : null;
                        if (G && !l && r?.bot !== !0) {
                            a.preventDefault(),
                                (0, O._)({
                                    initialBadgeId: (0, I.w0)(e.id),
                                    targetUserId: s?.userId,
                                    targetUsername: r?.globalName ?? r?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, P.Cz)({
                                tab: eb.G2.ORBS,
                                analyticsLocations: S,
                                analyticsSource: A.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                i?.(),
                                (0, b.closeAllModals)();
                            return;
                        }
                        if (c) {
                            if (
                                (a.preventDefault(),
                                ec.default.track(ep.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: k,
                                    viewed_user_id: s?.userId,
                                }),
                                k)
                            ) {
                                f
                                    ? ((0, en.pX)(ep.BVt.NITRO_HOME), (0, b.closeAllModals)())
                                    : (0, J.D)({ analyticsLocations: S, displayProfile: s }),
                                    i?.();
                                return;
                            }
                            if (f) {
                                let t = null != e.link ? (0, h.default)(e.link, { analyticsLocations: S }) : null;
                                if (null == t) return;
                                return i?.(), (0, b.closeAllModals)(), t(a);
                            }
                            return (0, J.D)({ analyticsLocations: S, displayProfile: s }), void i?.();
                        }
                        let d = null != e.link ? (0, h.default)(e.link, { analyticsLocations: S }) : null;
                        if (null != d) return i?.(), (0, b.closeAllModals)(), d(a);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ec.default.track(ep.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, et.fF)(ee.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            M({ action: "HOVER_BADGE" }),
                            (0, em.vP)({
                                badgeId: (0, I.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: S,
                                ...y,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: u && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                };
            if (G)
                return (0, a.jsx)(
                    D,
                    {
                        legacyBadgeId: e.id,
                        userId: s?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, X.L7)(e.icon),
                        children: (0, a.jsx)(_.Anchor, { ...T, children: N }),
                    },
                    `${e.id}-${t}`,
                );
            if (R) {
                let n = (0, a.jsx)(_.Anchor, { ...T, ref: E, children: N });
                return (0, a.jsx)(
                    "div",
                    {
                        children: (0, a.jsx)(F, {
                            badgeId: e.id,
                            targetElementRef: E,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                ec.default.track(ep.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, a.jsx)(_.Anchor, { ...T, ref: j, children: N });
                return (0, a.jsx)(
                    ed,
                    {
                        targetElementRef: j,
                        delay: X.In,
                        showSubtext: !$ && !e.isPreviewMode,
                        forceOpen: v,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (g) {
                let n = (0, a.jsx)(_.Anchor, { ...T, ref: C, children: N });
                return (0, a.jsx)(
                    B,
                    { targetElementRef: C, delay: X.In, forceOpen: v, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let w = (0, a.jsx)(_.Anchor, { ...T, children: N }),
                L = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== e_
                        ? (0, a.jsx)(Q, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== e_ ? l : void 0 });
            return (0, a.jsx)(
                p.m,
                { __unsupportedReactNodeAsText: L, forceOpen: v, delay: X.In, ariaHidden: !0, children: w },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eR = n(996988);
let ex = { [eR.d.POPOUT]: 12, [eR.d.MODAL]: 26, [eR.d.SIDEBAR]: 13, [eR.d.VIDEO_TILE_BACKGROUND]: 12 };
function eN(e) {
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
        m = l.useMemo(() => {
            if (null == d) return E;
            let e = new Set(E.map((e) => e.id));
            return [...E, ...d.filter((t) => !e.has(t.id))];
        }, [E, d]);
    if (0 === m.length) return null;
    let g = n === eR.d.MODAL_V2 ? [m] : (0, r.chunk)(m, !0 === s && n === eR.d.SIDEBAR ? ex[eR.d.POPOUT] : ex[n]);
    return (0, a.jsx)(a.Fragment, {
        children: g.map((e) =>
            (0, a.jsx)(
                eA,
                { badges: e, displayProfile: t, onClose: o, shouldOpenBadgeTooltip: c, shouldGlowTenureBadge: u },
                e[0].id,
            ),
        ),
    });
}
