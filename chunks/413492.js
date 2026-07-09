n.d(t, { A: () => ex });
var a = n(627968),
    r = n(64700),
    l = n(735438),
    i = n(702841),
    s = n(885386),
    d = n(351906),
    o = n(287809),
    c = n(375708);
let u = "legacy_username";
function f(e, t) {
    let n = s.m$.useSetting(),
        a = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        r = (0, i.bG)([d.A], () => d.A.hidePersonalInformation);
    if (null == e) return [];
    let l = e?.getBadges() ?? [];
    return (
        null != a && a.id === e.userId && (void 0 !== t ? t : n) && (l = l.filter((e) => e.id !== u)),
        r && (l = l.map((e) => ({ ...e, description: e.id === u ? c.intl.string(c.t.Br1ls3) : e.description }))),
        l
    );
}
var m = n(503698),
    E = n.n(m),
    _ = n(17928),
    g = n(990078),
    p = n(192308),
    b = n(349288),
    h = n(464792),
    A = n(793574),
    R = n(688810),
    v = n(682618),
    x = n(992526),
    I = n(982240);
let N = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var T = n(70283),
    j = n(775602),
    S = n(461536),
    M = n(321191),
    C = n(975858);
function y(e) {
    let t,
        n,
        r,
        { children: l, legacyBadgeId: i, userId: s, fallbackTitle: d, fallbackIconSrc: o } = e,
        u = (0, C.w0)(i),
        {
            badgeData: f,
            currentTier: m,
            obtainedAt: E,
        } = (0, _.cf)(
            [I.Ay],
            () =>
                null == u || null == s
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: I.Ay.getBadgeById(u, s),
                          currentTier: I.Ay.getCurrentTier(u, s),
                          obtainedAt: I.Ay.getObtainedAt(u, s),
                      },
            [u, s],
        ),
        g = (0, _.bG)([j.Ay], () => j.Ay.useReducedMotion),
        p = f?.badge_id === T.$.PREMIUM_TENURE,
        b = u === T.$.LEGACY_USERNAME,
        h = m?.name,
        A = p ? c.intl.string(c.t.Ipxkog) : (f?.name ?? d);
    p ? (r = n = null != h ? `${A} ${h}` : A) : null != h ? ((t = A), (n = h), (r = `${A} ${h}`)) : ((n = A), (r = A));
    let R = g ? void 0 : f?.complex_icon_animated_url,
        v = R ?? f?.complex_icon_static_url ?? f?.simple_icon_url ?? o,
        x = null != R && v === R;
    if (b) return (0, a.jsx)(D, { userId: s, title: n, badgeImage: v, children: l });
    let N = f?.info_label ?? (null != E ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(E) }) : void 0);
    return (0, a.jsx)(S.A, {
        title: n,
        eyebrow: t,
        body: N,
        badgeImage: v,
        badgeName: r,
        variant: p ? "nitro" : "default",
        isAnimated: x,
        children: l,
    });
}
function D(e) {
    let { children: t, userId: n, title: r, badgeImage: l } = e,
        i = (0, _.bG)(
            [M.A, d.A],
            () =>
                d.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (M.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(S.A, { title: r, body: i, badgeImage: l, badgeName: r, children: t });
}
var O = n(470739),
    U = n(662388),
    P = n(459192);
function B(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: l, children: i } = e;
    return (0, a.jsx)(P.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: l,
        children: i,
    });
}
var G = n(116833),
    k = n(704640),
    L = n(425713),
    w = n(642481),
    H = n(720879),
    V = n(202541),
    $ = n(49999),
    X = n(518477);
let F = function (e) {
    let {
            badgeId: t = V.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: l,
            targetElementRef: i,
            progressCircleText: s,
            progressCirclePercent: d,
            progressCircleUrgency: o,
            onShow: u,
        } = e,
        f = V.VD[t].nameUnformattedNitro,
        m = c.intl.string(f).toLocaleUpperCase(),
        E = V.VD[t].rarity,
        _ = (0, k.A)(t),
        g = (0, L.I)(t).standard;
    (0, r.useEffect)(() => {
        G.m[G.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = g);
    }, [g]);
    let p = (0, r.useCallback)(() => {
        n?.($.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, d, o);
        return (0, a.jsx)(S.A, {
            targetElementRef: i,
            onShow: u,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: E,
            badgeImage: g,
            badgeName: m,
            progressCircle: t,
            children: l,
        });
    }
    let b = {
        gradientColor: _,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: G.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: g, alt: m, progressCircleText: s, progressCirclePercent: d, progressCircleUrgency: o },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(H.A, {
              targetElementRef: i,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: X.In,
              onShow: u,
              ...b,
              children: l,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  l,
                  (0, a.jsx)(w.A, {
                      targetElementRef: i,
                      shouldShow: !0,
                      onRequestClose: p,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...b,
                  }),
              ],
          });
};
var Y = n(534514),
    z = n(834730),
    W = n(775549);
let q = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, a.jsxs)("div", { className: W.R, children: [t, (0, a.jsx)("div", { className: W.A, children: n }), r] });
};
var K = n(224016),
    Q = n(852443);
let Z = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, L.I)(n.id).standard;
    return (0, a.jsxs)(q, {
        assetComponent: (0, a.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(K.A, { width: 56, className: Q.R }),
        children: [
            (0, a.jsx)(Y.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(z.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Q.K,
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
    er = n(312640),
    el = n(798618),
    ei = n(752079),
    es = n(414690);
function ed(e) {
    let { children: t, targetElementRef: n, delay: l, showSubtext: i, forceOpen: s } = e,
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
        s && !d && f();
    }, [s, d, f]);
    let m = r.useCallback(() => {
            f();
        }, [f]),
        E = r.useCallback(() => {
            u(), o(!1);
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: m,
        onMouseLeave: E,
        children: [
            t,
            (0, a.jsxs)(er.x, {
                targetElementRef: n,
                shouldShow: !!(d || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eo, { showSubtext: i }), (0, a.jsx)(el.F, {})],
            }),
        ],
    });
}
function eo(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(q, {
        assetComponent: (0, a.jsx)(ei.A, { className: es.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(Y.D, {
            variant: "heading-md/extrabold",
            className: es.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(Y.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : es.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(z.E, { variant: "text-xs/normal", className: es.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ec = n(174459),
    eu = n(474090),
    ef = n(439174),
    em = n(183555),
    eE = n(47675),
    e_ = n(999291),
    eg = n(652215),
    ep = n(758836);
let eb = "premium";
var eh = n(992028);
function eA(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: l,
            displayProfile: i,
            onClose: s,
            shouldOpenBadgeTooltip: d,
            shouldGlowTenureBadge: u,
        } = e,
        m = r.useRef(null),
        T = r.useRef(null),
        j = r.useRef(null),
        { analyticsLocations: S } = (0, R.Ay)(A.A.BADGE),
        { context: M, trackUserProfileAction: D } = (0, em.NJ)(),
        P = o.default.getCurrentUser(),
        G = (0, eu.CC)(P?.premiumType, V.PremiumTypes.TIER_2),
        k = (0, x.J9)({ location: "UserProfileBadgeList" }),
        L = (function (e) {
            let { location: t } = e;
            return N.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (k || L) && i?.userId != null && !I.Ay.hasCatalogFor(i.userId) && (0, v.R)(i.userId);
    }, [k, L, i?.userId]);
    let w = i?.userId,
        H = (0, _.bG)([I.Ay], () => {
            if (!L || null == w) return null;
            let e = {};
            for (let n of t) {
                let t = (0, C.w0)(n.id);
                if (null == t) continue;
                let a = I.Ay.getBadgeById(t, w)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [L, w, t]),
        $ = f((0, e_.AP)(P?.id ?? null)).some((e) => e.id === ea.A.ORB_PROFILE_BADGE);
    return (0, a.jsx)("div", {
        className: E()(eh.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === ea.A.ORB_PROFILE_BADGE,
                r = (0, ef.e0)(e.id),
                c = null != r || e.id === eb,
                f = i?.userId === P?.id,
                _ = "april_fools_2026" === e.id,
                R = void 0 !== r && e.id !== eb,
                v = H?.[e.id],
                x = (0, a.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? v ?? (0, X.L7)(e.icon),
                    className: E()(eh.qS, null != v && eh.Do, l),
                }),
                I = null != d && d(e.id),
                N = {
                    onClick: (a) => {
                        D({ action: "PRESS_BADGE" }),
                            (0, eE.vP)({
                                badgeId: (0, C.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: S,
                                ...M,
                            });
                        let r = e.id.startsWith("staff") && !f,
                            l = i?.userId != null ? o.default.getUser(i.userId) : null;
                        if (k && !r && l?.bot !== !0) {
                            a.preventDefault(),
                                (0, O._)({
                                    initialBadgeId: (0, C.w0)(e.id),
                                    targetUserId: i?.userId,
                                    targetUsername: l?.globalName ?? l?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, U.Cz)({
                                tab: ep.G2.ORBS,
                                analyticsLocations: S,
                                analyticsSource: A.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                s?.(),
                                (0, p.closeAllModals)();
                            return;
                        }
                        if (c) {
                            if (
                                (a.preventDefault(),
                                ec.default.track(eg.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: G,
                                    viewed_user_id: i?.userId,
                                }),
                                G)
                            ) {
                                f
                                    ? ((0, en.pX)(eg.BVt.NITRO_HOME), (0, p.closeAllModals)())
                                    : (0, J.D)({ analyticsLocations: S, displayProfile: i }),
                                    s?.();
                                return;
                            }
                            if (f) {
                                let t = null != e.link ? (0, h.default)(e.link, { analyticsLocations: S }) : null;
                                if (null == t) return;
                                return s?.(), (0, p.closeAllModals)(), t(a);
                            }
                            return (0, J.D)({ analyticsLocations: S, displayProfile: i }), void s?.();
                        }
                        let d = null != e.link ? (0, h.default)(e.link, { analyticsLocations: S }) : null;
                        if (null != d) return s?.(), (0, p.closeAllModals)(), d(a);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ec.default.track(eg.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, et.fF)(ee.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            D({ action: "HOVER_BADGE" }),
                            (0, eE.vP)({
                                badgeId: (0, C.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: S,
                                ...M,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: u && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (k)
                return (0, a.jsx)(
                    y,
                    {
                        legacyBadgeId: e.id,
                        userId: i?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, X.L7)(e.icon),
                        children: (0, a.jsx)(b.Anchor, { ...N, children: x }),
                    },
                    `${e.id}-${t}`,
                );
            if (R) {
                let n = (0, a.jsx)(b.Anchor, { ...N, ref: m, children: x });
                return (0, a.jsx)(
                    "div",
                    {
                        children: (0, a.jsx)(F, {
                            badgeId: e.id,
                            targetElementRef: m,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                ec.default.track(eg.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, a.jsx)(b.Anchor, { ...N, ref: T, children: x });
                return (0, a.jsx)(
                    ed,
                    {
                        targetElementRef: T,
                        delay: X.In,
                        showSubtext: !$ && !e.isPreviewMode,
                        forceOpen: I,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (_) {
                let n = (0, a.jsx)(b.Anchor, { ...N, ref: j, children: x });
                return (0, a.jsx)(
                    B,
                    { targetElementRef: j, delay: X.In, forceOpen: I, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let L = (0, a.jsx)(b.Anchor, { ...N, children: x }),
                w = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== eb
                        ? (0, a.jsx)(Z, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== eb ? r : void 0 });
            return (0, a.jsx)(
                g.m,
                { __unsupportedReactNodeAsText: w, forceOpen: I, delay: X.In, ariaHidden: !0, children: L },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eR = n(996988);
let ev = { [eR.d.POPOUT]: 12, [eR.d.MODAL]: 26, [eR.d.SIDEBAR]: 13, [eR.d.VIDEO_TILE_BACKGROUND]: 12 };
function ex(e) {
    let {
            displayProfile: t,
            themeType: n,
            isRedesignEnabled: i,
            pendingLegacyUsernameDisabled: s,
            pendingBadges: d,
            onClose: o,
            shouldOpenBadgeTooltip: c,
            shouldGlowTenureBadge: u,
        } = e,
        m = f(t, s),
        E = r.useMemo(() => {
            if (null == d) return m;
            let e = new Set(m.map((e) => e.id));
            return [...m, ...d.filter((t) => !e.has(t.id))];
        }, [m, d]);
    if (0 === E.length) return null;
    let _ = n === eR.d.MODAL_V2 ? [E] : (0, l.chunk)(E, !0 === i && n === eR.d.SIDEBAR ? ev[eR.d.POPOUT] : ev[n]);
    return (0, a.jsx)(a.Fragment, {
        children: _.map((e) =>
            (0, a.jsx)(
                eA,
                { badges: e, displayProfile: t, onClose: o, shouldOpenBadgeTooltip: c, shouldGlowTenureBadge: u },
                e[0].id,
            ),
        ),
    });
}
