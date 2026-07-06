n.d(t, { A: () => ev });
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
    p = n(349288),
    b = n(464792),
    h = n(793574),
    A = n(688810),
    R = n(682618),
    v = n(992526),
    x = n(982240);
let I = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(70283),
    T = n(775602),
    j = n(461536),
    S = n(321191),
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
            [x.Ay],
            () =>
                null == u || null == s
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: x.Ay.getBadgeById(u, s),
                          currentTier: x.Ay.getCurrentTier(u, s),
                          obtainedAt: x.Ay.getObtainedAt(u, s),
                      },
            [u, s],
        ),
        g = (0, _.bG)([T.Ay], () => T.Ay.useReducedMotion),
        p = f?.badge_id === N.$.PREMIUM_TENURE,
        b = u === N.$.LEGACY_USERNAME,
        h = m?.name,
        A = p ? c.intl.string(c.t.Ipxkog) : (f?.name ?? d);
    p ? (r = n = null != h ? `${A} ${h}` : A) : null != h ? ((t = A), (n = h), (r = `${A} ${h}`)) : ((n = A), (r = A));
    let R = g ? void 0 : f?.complex_icon_animated_url,
        v = R ?? f?.complex_icon_static_url ?? f?.simple_icon_url ?? o,
        I = null != R && v === R;
    if (b) return (0, a.jsx)(M, { userId: s, title: n, badgeImage: v, children: l });
    let S = f?.info_label ?? (null != E ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(E) }) : void 0);
    return (0, a.jsx)(j.A, {
        title: n,
        eyebrow: t,
        body: S,
        badgeImage: v,
        badgeName: r,
        variant: p ? "nitro" : "default",
        isAnimated: I,
        children: l,
    });
}
function M(e) {
    let { children: t, userId: n, title: r, badgeImage: l } = e,
        i = (0, _.bG)(
            [S.A, d.A],
            () =>
                d.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (S.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(j.A, { title: r, body: i, badgeImage: l, badgeName: r, children: t });
}
var D = n(470739),
    O = n(662388),
    U = n(459192);
function P(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: l, children: i } = e;
    return (0, a.jsx)(U.u, {
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
var B = n(116833),
    G = n(704640),
    k = n(425713),
    L = n(642481),
    w = n(720879),
    H = n(202541),
    V = n(49999),
    $ = n(518477);
let X = function (e) {
    let {
            badgeId: t = H.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: l,
            targetElementRef: i,
            progressCircleText: s,
            progressCirclePercent: d,
            progressCircleUrgency: o,
            onShow: u,
        } = e,
        f = H.VD[t].nameUnformattedNitro,
        m = c.intl.string(f).toLocaleUpperCase(),
        E = H.VD[t].rarity,
        _ = (0, G.A)(t),
        g = (0, k.I)(t).standard;
    (0, r.useEffect)(() => {
        B.m[B.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = g);
    }, [g]);
    let p = (0, r.useCallback)(() => {
        n?.(V.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, d, o);
        return (0, a.jsx)(j.A, {
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
            component: B.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: g, alt: m, progressCircleText: s, progressCirclePercent: d, progressCircleUrgency: o },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(w.A, {
              targetElementRef: i,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: $.In,
              onShow: u,
              ...b,
              children: l,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  l,
                  (0, a.jsx)(L.A, {
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
var F = n(534514),
    Y = n(834730),
    z = n(775549);
let W = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, a.jsxs)("div", { className: z.R, children: [t, (0, a.jsx)("div", { className: z.A, children: n }), r] });
};
var q = n(224016),
    K = n(852443);
let Q = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, k.I)(n.id).standard;
    return (0, a.jsxs)(W, {
        assetComponent: (0, a.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(q.A, { width: 56, className: K.R }),
        children: [
            (0, a.jsx)(F.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: K.K,
                children: t.description,
            }),
        ],
    });
};
var Z = n(30084),
    J = n(24001),
    ee = n(590202),
    et = n(976860),
    en = n(305003),
    ea = n(312640),
    er = n(798618),
    el = n(752079),
    ei = n(414690);
function es(e) {
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
            (0, a.jsxs)(ea.x, {
                targetElementRef: n,
                shouldShow: !!(d || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(ed, { showSubtext: i }), (0, a.jsx)(er.F, {})],
            }),
        ],
    });
}
function ed(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(W, {
        assetComponent: (0, a.jsx)(el.A, { className: ei.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(F.D, {
            variant: "heading-md/extrabold",
            className: ei.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(F.D, {
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
var eo = n(174459),
    ec = n(474090),
    eu = n(439174),
    ef = n(183555),
    em = n(47675),
    eE = n(999291),
    e_ = n(652215),
    eg = n(758836);
let ep = "premium";
var eb = n(992028);
function eh(e) {
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
        N = r.useRef(null),
        T = r.useRef(null),
        { analyticsLocations: j } = (0, A.Ay)(h.A.BADGE),
        { context: S, trackUserProfileAction: M } = (0, ef.NJ)(),
        U = o.default.getCurrentUser(),
        B = (0, ec.CC)(U?.premiumType, H.PremiumTypes.TIER_2),
        G = (0, v.J9)({ location: "UserProfileBadgeList" }),
        k = (function (e) {
            let { location: t } = e;
            return I.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (G || k) && i?.userId != null && !x.Ay.hasCatalogFor(i.userId) && (0, R.R)(i.userId);
    }, [G, k, i?.userId]);
    let L = i?.userId,
        w = (0, _.bG)([x.Ay], () => {
            if (!k || null == L) return null;
            let e = {};
            for (let n of t) {
                let t = (0, C.w0)(n.id);
                if (null == t) continue;
                let a = x.Ay.getBadgeById(t, L)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [k, L, t]),
        V = f((0, eE.AP)(U?.id ?? null)).some((e) => e.id === en.A.ORB_PROFILE_BADGE);
    return (0, a.jsx)("div", {
        className: E()(eb.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === en.A.ORB_PROFILE_BADGE,
                r = (0, eu.e0)(e.id),
                c = null != r || e.id === ep,
                f = i?.userId === U?.id,
                _ = "april_fools_2026" === e.id,
                A = void 0 !== r && e.id !== ep,
                R = w?.[e.id],
                v = (0, a.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? R ?? (0, $.L7)(e.icon),
                    className: E()(eb.qS, null != R && eb.Do, l),
                }),
                x = null != d && d(e.id),
                I = {
                    onClick: (a) => {
                        M({ action: "PRESS_BADGE" }),
                            (0, em.vP)({
                                badgeId: (0, C.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: j,
                                ...S,
                            });
                        let r = e.id.startsWith("staff") && !f,
                            l = i?.userId != null ? o.default.getUser(i.userId) : null;
                        if (G && !r && l?.bot !== !0) {
                            a.preventDefault(),
                                (0, D._)({
                                    initialBadgeId: (0, C.w0)(e.id),
                                    targetUserId: i?.userId,
                                    targetUsername: l?.globalName ?? l?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, O.Cz)({
                                tab: eg.G2.ORBS,
                                analyticsLocations: j,
                                analyticsSource: h.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                s?.();
                            return;
                        }
                        if (c) {
                            if (
                                (a.preventDefault(),
                                eo.default.track(e_.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: B,
                                    viewed_user_id: i?.userId,
                                }),
                                B)
                            ) {
                                f
                                    ? (0, et.pX)(e_.BVt.NITRO_HOME)
                                    : (0, Z.D)({ analyticsLocations: j, displayProfile: i }),
                                    s?.();
                                return;
                            }
                            if (f) {
                                let t = null != e.link ? (0, b.default)(e.link, { analyticsLocations: j }) : null;
                                if (null == t) return;
                                return s?.(), t(a);
                            }
                            return (0, Z.D)({ analyticsLocations: j, displayProfile: i }), void s?.();
                        }
                        let d = null != e.link ? (0, b.default)(e.link, { analyticsLocations: j }) : null;
                        if (null != d) return s?.(), d(a);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            eo.default.track(e_.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, ee.fF)(J.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            M({ action: "HOVER_BADGE" }),
                            (0, em.vP)({
                                badgeId: (0, C.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: j,
                                ...S,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: u && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (G)
                return (0, a.jsx)(
                    y,
                    {
                        legacyBadgeId: e.id,
                        userId: i?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, $.L7)(e.icon),
                        children: (0, a.jsx)(p.Anchor, { ...I, children: v }),
                    },
                    `${e.id}-${t}`,
                );
            if (A) {
                let n = (0, a.jsx)(p.Anchor, { ...I, ref: m, children: v });
                return (0, a.jsx)(
                    "div",
                    {
                        children: (0, a.jsx)(X, {
                            badgeId: e.id,
                            targetElementRef: m,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                eo.default.track(e_.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, a.jsx)(p.Anchor, { ...I, ref: N, children: v });
                return (0, a.jsx)(
                    es,
                    {
                        targetElementRef: N,
                        delay: $.In,
                        showSubtext: !V && !e.isPreviewMode,
                        forceOpen: x,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (_) {
                let n = (0, a.jsx)(p.Anchor, { ...I, ref: T, children: v });
                return (0, a.jsx)(
                    P,
                    { targetElementRef: T, delay: $.In, forceOpen: x, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let k = (0, a.jsx)(p.Anchor, { ...I, children: v }),
                L = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ep
                        ? (0, a.jsx)(Q, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== ep ? r : void 0 });
            return (0, a.jsx)(
                g.m,
                { __unsupportedReactNodeAsText: L, forceOpen: x, delay: $.In, ariaHidden: !0, children: k },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eA = n(996988);
let eR = { [eA.d.POPOUT]: 12, [eA.d.MODAL]: 26, [eA.d.SIDEBAR]: 13, [eA.d.VIDEO_TILE_BACKGROUND]: 12 };
function ev(e) {
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
    let _ = n === eA.d.MODAL_V2 ? [E] : (0, l.chunk)(E, !0 === i && n === eA.d.SIDEBAR ? eR[eA.d.POPOUT] : eR[n]);
    return (0, a.jsx)(a.Fragment, {
        children: _.map((e) =>
            (0, a.jsx)(
                eh,
                { badges: e, displayProfile: t, onClose: o, shouldOpenBadgeTooltip: c, shouldGlowTenureBadge: u },
                e[0].id,
            ),
        ),
    });
}
