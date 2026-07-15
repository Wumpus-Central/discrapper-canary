"use strict";
n.d(t, { A: () => eN });
var i = n(627968),
    r = n(64700),
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
    I = n(990078),
    f = n(192308),
    p = n(349288),
    T = n(983555),
    m = n(793574),
    g = n(688810),
    S = n(682618),
    N = n(992526),
    C = n(982240),
    R = n(609782);
let O = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var L = n(70283),
    D = n(775602),
    y = n(461536),
    v = n(321191);
function b(e) {
    let t,
        n,
        a,
        { children: s, legacyBadgeId: l, userId: o, fallbackTitle: d, fallbackIconSrc: u } = e,
        _ = (0, R.w0)(l),
        {
            badgeData: E,
            currentTier: A,
            obtainedAt: I,
        } = (0, h.cf)(
            [C.Ay],
            () =>
                null == _ || null == o
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: C.Ay.getBadgeById(_, o),
                          currentTier: C.Ay.getCurrentTier(_, o),
                          obtainedAt: C.Ay.getObtainedAt(_, o),
                      },
            [_, o],
        ),
        f = (0, h.bG)([D.Ay], () => D.Ay.useReducedMotion),
        p = r.useCallback(() => {
            null != o && C.Ay.isCatalogStaleFor(o) && (0, S.R)(o);
        }, [o]),
        T = E?.badge_id === L.$.PREMIUM_TENURE,
        m = _ === L.$.LEGACY_USERNAME,
        g = A?.name,
        N = T ? c.intl.string(c.t.Ipxkog) : (E?.name ?? d);
    T ? (a = n = null != g ? `${N} ${g}` : N) : null != g ? ((t = N), (n = g), (a = `${N} ${g}`)) : ((n = N), (a = N));
    let O = f ? void 0 : E?.complex_icon_animated_url,
        v = O ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? u,
        b = null != O && v === O;
    if (m) return (0, i.jsx)(M, { userId: o, title: n, badgeImage: v, children: s });
    let P = E?.info_label ?? (null != I ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(I) }) : void 0);
    return (0, i.jsx)(y.A, {
        title: n,
        eyebrow: t,
        body: P,
        badgeImage: v,
        badgeName: a,
        variant: T ? "nitro" : "default",
        isAnimated: b,
        onShow: p,
        children: s,
    });
}
function M(e) {
    let { children: t, userId: n, title: r, badgeImage: a } = e,
        s = (0, h.bG)(
            [v.A, o.A],
            () =>
                o.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (v.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, i.jsx)(y.A, { title: r, body: s, badgeImage: a, badgeName: r, children: t });
}
var P = n(470739),
    U = n(662388),
    w = n(459192);
function G(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: a, children: s } = e;
    return (0, i.jsx)(w.u, {
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
var x = n(116833),
    k = n(704640),
    F = n(425713),
    V = n(642481),
    B = n(720879),
    H = n(202541),
    j = n(49999),
    W = n(518477);
let Y = function (e) {
    let {
            badgeId: t = H.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: a,
            targetElementRef: s,
            progressCircleText: l,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: u,
        } = e,
        _ = H.VD[t].nameUnformattedNitro,
        E = c.intl.string(_).toLocaleUpperCase(),
        A = H.VD[t].rarity,
        h = (0, k.A)(t),
        I = (0, F.I)(t).standard;
    (0, r.useEffect)(() => {
        x.m[x.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = I);
    }, [I]);
    let f = (0, r.useCallback)(() => {
        n?.(j.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(l, o, d);
        return (0, i.jsx)(y.A, {
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
            component: x.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: I, alt: E, progressCircleText: l, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: E,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(B.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: W.In,
              onShow: u,
              ...p,
              children: a,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  a,
                  (0, i.jsx)(V.A, {
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
var K = n(297264),
    $ = n(834730),
    z = n(775549);
let q = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: z.R, children: [t, (0, i.jsx)("div", { className: z.A, children: n }), r] });
};
var Z = n(224016),
    X = n(852443);
let Q = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, F.I)(n.id).standard;
    return (0, i.jsxs)(q, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(Z.A, { width: 56, className: X.R }),
        children: [
            (0, i.jsx)(K.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, i.jsx)($.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: X.K,
                children: t.description,
            }),
        ],
    });
};
var J = n(30084),
    ee = n(24001),
    et = n(590202),
    en = n(976860),
    ei = n(305003),
    er = n(312640),
    ea = n(798618),
    es = n(752079),
    el = n(414690);
function eo(e) {
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
            (0, i.jsxs)(er.x, {
                targetElementRef: n,
                shouldShow: !!(o || l),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, i.jsx)(ed, { showSubtext: s }), (0, i.jsx)(ea.F, {})],
            }),
        ],
    });
}
function ed(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(q, {
        assetComponent: (0, i.jsx)(es.A, { className: el.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(K.D, {
            variant: "heading-md/extrabold",
            className: el.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(K.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : el.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)($.E, { variant: "text-xs/normal", className: el.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ec = n(174459),
    eu = n(474090),
    e_ = n(439174),
    eE = n(183555),
    eA = n(47675),
    eh = n(999291),
    eI = n(652215),
    ef = n(758836);
let ep = "premium";
var eT = n(992028);
function em(e) {
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
        L = r.useRef(null),
        D = r.useRef(null),
        { analyticsLocations: y } = (0, g.Ay)(m.A.BADGE),
        { context: v, trackUserProfileAction: M } = (0, eE.NJ)(),
        w = d.default.getCurrentUser(),
        x = (0, eu.CC)(w?.premiumType, H.PremiumTypes.TIER_2),
        k = (0, N.J9)({ location: "UserProfileBadgeList" }),
        F = (function (e) {
            let { location: t } = e;
            return O.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (k || F) && s?.userId != null && !C.Ay.hasCatalogFor(s.userId) && (0, S.R)(s.userId);
    }, [k, F, s?.userId]);
    let V = s?.userId,
        B = (0, h.bG)([C.Ay], () => {
            if (!F || null == V) return null;
            let e = {};
            for (let n of t) {
                let t = (0, R.w0)(n.id);
                if (null == t) continue;
                let i = C.Ay.getBadgeById(t, V)?.simple_icon_url;
                null != i && (e[n.id] = i);
            }
            return e;
        }, [F, V, t]),
        j = _((0, eh.AP)(w?.id ?? null)).some((e) => e.id === ei.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: A()(eT.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === ei.A.ORB_PROFILE_BADGE,
                r = (0, e_.e0)(e.id),
                c = null != r || e.id === ep,
                _ = s?.userId === w?.id,
                h = "april_fools_2026" === e.id,
                g = void 0 !== r && e.id !== ep,
                S = B?.[e.id],
                N = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? S ?? (0, W.L7)(e.icon),
                    className: A()(eT.qS, null != S && eT.Do, a),
                }),
                C = null != o && o(e.id),
                O = {
                    onClick: (i) => {
                        M({ action: "PRESS_BADGE" }),
                            (0, eA.vP)({
                                badgeId: (0, R.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: y,
                                ...v,
                            });
                        let r = e.id.startsWith("staff") && !_,
                            a = s?.userId != null ? d.default.getUser(s.userId) : null;
                        if (k && !r && a?.bot !== !0) {
                            i.preventDefault(),
                                (0, P._)({
                                    initialBadgeId: (0, R.w0)(e.id),
                                    targetUserId: s?.userId,
                                    targetUsername: a?.globalName ?? a?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, U.Cz)({
                                tab: ef.G2.ORBS,
                                analyticsLocations: y,
                                analyticsSource: m.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                l?.(),
                                (0, f.closeAllModals)();
                            return;
                        }
                        if (c) {
                            if (
                                (i.preventDefault(),
                                ec.default.track(eI.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: x,
                                    viewed_user_id: s?.userId,
                                }),
                                x)
                            ) {
                                _
                                    ? ((0, en.pX)(eI.BVt.NITRO_HOME), (0, f.closeAllModals)())
                                    : (0, J.D)({ analyticsLocations: y, displayProfile: s }),
                                    l?.();
                                return;
                            }
                            if (_) {
                                let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: y }) : null;
                                if (null == t) return;
                                return l?.(), (0, f.closeAllModals)(), t(i);
                            }
                            return (0, J.D)({ analyticsLocations: y, displayProfile: s }), void l?.();
                        }
                        let o = null != e.link ? (0, T.default)(e.link, { analyticsLocations: y }) : null;
                        if (null != o) return l?.(), (0, f.closeAllModals)(), o(i);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ec.default.track(eI.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, et.fF)(ee.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            M({ action: "HOVER_BADGE" }),
                            (0, eA.vP)({
                                badgeId: (0, R.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: y,
                                ...v,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: u && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (k)
                return (0, i.jsx)(
                    b,
                    {
                        legacyBadgeId: e.id,
                        userId: s?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, W.L7)(e.icon),
                        children: (0, i.jsx)(p.Anchor, { ...O, children: N }),
                    },
                    `${e.id}-${t}`,
                );
            if (g) {
                let n = (0, i.jsx)(p.Anchor, { ...O, ref: E, children: N });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(Y, {
                            badgeId: e.id,
                            targetElementRef: E,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                ec.default.track(eI.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(p.Anchor, { ...O, ref: L, children: N });
                return (0, i.jsx)(
                    eo,
                    {
                        targetElementRef: L,
                        delay: W.In,
                        showSubtext: !j && !e.isPreviewMode,
                        forceOpen: C,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (h) {
                let n = (0, i.jsx)(p.Anchor, { ...O, ref: D, children: N });
                return (0, i.jsx)(
                    G,
                    { targetElementRef: D, delay: W.In, forceOpen: C, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let F = (0, i.jsx)(p.Anchor, { ...O, children: N }),
                V = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ep
                        ? (0, i.jsx)(Q, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== ep ? r : void 0 });
            return (0, i.jsx)(
                I.m,
                { __unsupportedReactNodeAsText: V, forceOpen: C, delay: W.In, ariaHidden: !0, children: F },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eg = n(996988);
let eS = { [eg.d.POPOUT]: 12, [eg.d.MODAL]: 26, [eg.d.SIDEBAR]: 13, [eg.d.VIDEO_TILE_BACKGROUND]: 12 };
function eN(e) {
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
    let h = n === eg.d.MODAL_V2 ? [A] : (0, a.chunk)(A, !0 === s && n === eg.d.SIDEBAR ? eS[eg.d.POPOUT] : eS[n]);
    return (0, i.jsx)(i.Fragment, {
        children: h.map((e) =>
            (0, i.jsx)(
                em,
                { badges: e, displayProfile: t, onClose: d, shouldOpenBadgeTooltip: c, shouldGlowTenureBadge: u },
                e[0].id,
            ),
        ),
    });
}
