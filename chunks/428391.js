n.d(t, { A: () => eI });
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n(702841),
    s = n(885386),
    o = n(351906),
    d = n(287809),
    u = n(375708);
let c = "legacy_username";
function m(e, t) {
    let n = s.m$.useSetting(),
        l = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        r = (0, a.bG)([o.A], () => o.A.hidePersonalInformation);
    if (null == e) return [];
    let i = e?.getBadges() ?? [];
    return (
        null != l && l.id === e.userId && (void 0 !== t ? t : n) && (i = i.filter((e) => e.id !== c)),
        r && (i = i.map((e) => ({ ...e, description: e.id === c ? u.intl.string(u.t.Br1ls3) : e.description }))),
        i
    );
}
var g = n(305003);
let f = (e) => e.sort((e, t) => (e.id === g.A.ORB_PROFILE_BADGE ? 1 : t.id === g.A.ORB_PROFILE_BADGE ? -1 : 0));
var p = n(503698),
    h = n.n(p),
    _ = n(17928),
    x = n(990078),
    b = n(349288),
    v = n(464792),
    E = n(793574),
    j = n(688810),
    y = n(682618),
    A = n(945810);
let C = (0, A.mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(0, A.mj)({
    name: "2026-05-badge-discovery-milestone-2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = n(982240);
let R = (0, A.mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(70283),
    S = n(775602),
    T = n(461536),
    k = n(841595),
    B = n(975858);
function O(e) {
    let t,
        n,
        r,
        { children: i, legacyBadgeId: a, userId: s, fallbackTitle: o, fallbackIconSrc: d } = e,
        c = (0, B.w0)(a),
        {
            badgeData: m,
            currentTier: g,
            obtainedAt: f,
        } = (0, _.cf)(
            [I.Ay],
            () =>
                null == c || null == s
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: I.Ay.getBadgeById(c, s),
                          currentTier: I.Ay.getCurrentTier(c, s),
                          obtainedAt: I.Ay.getObtainedAt(c, s),
                      },
            [c, s],
        ),
        p = (0, _.bG)([S.Ay], () => S.Ay.useReducedMotion),
        h = m?.badge_id === N.$.PREMIUM_TENURE,
        x = c === N.$.LEGACY_USERNAME,
        b = g?.name,
        v = h ? u.intl.string(u.t.Ipxkog) : (m?.name ?? o);
    h ? (r = n = null != b ? `${v} ${b}` : v) : null != b ? ((t = v), (n = b), (r = `${v} ${b}`)) : ((n = v), (r = v));
    let E = p ? void 0 : m?.complex_icon_animated_url,
        j = E ?? m?.complex_icon_static_url ?? m?.simple_icon_url ?? d,
        y = null != E && j === E;
    if (x) return (0, l.jsx)(D, { userId: s, title: n, badgeImage: j, rarity: m?.rarity, children: i });
    let A = m?.info_label ?? (null != f ? u.intl.formatToPlainString(u.t["0aEh2a"], { date: new Date(f) }) : void 0);
    return (0, l.jsx)(T.A, {
        title: n,
        eyebrow: t,
        body: A,
        badgeImage: j,
        badgeName: r,
        rarity: m?.rarity,
        variant: h ? "nitro" : "default",
        isAnimated: y,
        children: i,
    });
}
function D(e) {
    let { children: t, userId: n, title: r, badgeImage: i, rarity: a } = e,
        s = (0, _.bG)(
            [k.A, o.A],
            () =>
                o.A.hidePersonalInformation
                    ? u.intl.string(u.t.Br1ls3)
                    : null != n
                      ? (k.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, l.jsx)(T.A, { title: r, body: s, badgeImage: i, badgeName: r, rarity: a, children: t });
}
var w = n(470739),
    U = n(859040),
    P = n(459192);
function L(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: i, children: a } = e;
    return (0, l.jsx)(P.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: i,
        children: a,
    });
}
var M = n(116833),
    G = n(704640),
    $ = n(425713),
    H = n(642481),
    F = n(720879),
    V = n(788868),
    q = n(49999),
    W = n(518477);
let z = (e) => {
    let {
            badgeId: t = V.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: i,
            targetElementRef: a,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        m = V.VD[t].nameUnformattedNitro,
        g = u.intl.string(m).toLocaleUpperCase(),
        f = V.VD[t].rarity,
        p = (0, G.A)(t),
        h = (0, $.I)(t).standard;
    (0, r.useEffect)(() => {
        M.m[M.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = h);
    }, [h]);
    let _ = (0, r.useCallback)(() => {
        n?.(q.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, o, d);
        return (0, l.jsx)(T.A, {
            targetElementRef: a,
            onShow: c,
            title: g,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: h,
            badgeName: g,
            progressCircle: t,
            children: i,
        });
    }
    let x = {
        gradientColor: p,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: M.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: h, alt: g, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: g,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, l.jsx)(F.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: W.In,
              onShow: c,
              ...x,
              children: i,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  i,
                  (0, l.jsx)(H.A, {
                      targetElementRef: a,
                      shouldShow: !0,
                      onRequestClose: _,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...x,
                  }),
              ],
          });
};
var K = n(534514),
    Q = n(834730),
    Y = n(775549);
let X = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, l.jsxs)("div", { className: Y.R, children: [t, (0, l.jsx)("div", { className: Y.A, children: n }), r] });
};
var J = n(224016),
    Z = n(74824);
let ee = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, $.I)(n.id).standard;
    return (0, l.jsxs)(X, {
        assetComponent: (0, l.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, l.jsx)(J.A, { width: 56, className: Z.R }),
        children: [
            (0, l.jsx)(K.D, { variant: "heading-xl/extrabold", children: u.intl.string(n.nameUnformatted) }),
            (0, l.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Z.K,
                children: t.description,
            }),
        ],
    });
};
var et = n(30084),
    en = n(507107),
    el = n(590202),
    er = n(976860),
    ei = n(312640),
    ea = n(798618),
    es = n(752079),
    eo = n(414690);
function ed(e) {
    let { children: t, targetElementRef: n, delay: i, showSubtext: a, forceOpen: s } = e,
        [o, d] = r.useState(!1),
        u = r.useRef(null),
        c = r.useCallback(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }, []);
    r.useEffect(() => c, [c]);
    let m = r.useCallback(() => {
        c(),
            (u.current = window.setTimeout(() => {
                (u.current = null), d(!0);
            }, i));
    }, [i, c]);
    r.useEffect(() => {
        s && !o && m();
    }, [s, o, m]);
    let g = r.useCallback(() => {
            m();
        }, [m]),
        f = r.useCallback(() => {
            c(), d(!1);
        }, [c]);
    return (0, l.jsxs)("div", {
        onMouseEnter: g,
        onMouseLeave: f,
        children: [
            t,
            (0, l.jsxs)(ei.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, l.jsx)(eu, { showSubtext: a }), (0, l.jsx)(ea.F, {})],
            }),
        ],
    });
}
function eu(e) {
    let { showSubtext: t = !1 } = e;
    return (0, l.jsxs)(X, {
        assetComponent: (0, l.jsx)(es.A, { className: eo.jc }),
        tooltipWordmarkComponent: (0, l.jsx)(K.D, {
            variant: "heading-md/extrabold",
            className: eo.RK,
            children: u.intl.string(u.t.ElYQFS),
        }),
        children: [
            (0, l.jsx)(K.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eo.Qn,
                children: u.intl.string(u.t.lTHkqd),
            }),
            t
                ? (0, l.jsx)(Q.E, { variant: "text-xs/normal", className: eo.lV, children: u.intl.string(u.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ec = n(174459),
    em = n(474090),
    eg = n(439174),
    ef = n(183555),
    ep = n(47675);
let eh = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var e_ = n(999291);
function ex(e) {
    let { children: t, targetElementRef: n, delay: r, badgeIcon: i, premiumGuildSince: a } = e,
        s = (0, W.L7)(i),
        o = u.intl.string(u.t.OAq2KW).toLocaleUpperCase(),
        d = u.intl.formatToPlainString(u.t.rTUArF, { date: a });
    return (0, l.jsx)(F.A, {
        targetElementRef: n,
        estimatedTooltipHeight: 220,
        delay: r,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: s, aspectRatio: "6/4" },
        title: o,
        body: d,
        children: t,
    });
}
var eb = n(652215),
    ev = n(758836);
let eE = "premium";
var ej = n(992028);
function ey(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: i,
            displayProfile: a,
            onClose: s,
            shouldOpenBadgeTooltip: o,
            shouldGlowTenureBadge: c,
        } = e,
        f = r.useRef(null),
        p = r.useRef(null),
        A = r.useRef(null),
        N = r.useRef(null),
        { analyticsLocations: S } = (0, j.Ay)(E.A.BADGE),
        { context: T, trackUserProfileAction: k } = (0, ef.NJ)(),
        D = d.default.getCurrentUser(),
        P = (0, em.CC)(D?.premiumType, V.PremiumTypes.TIER_2),
        M = eh.useConfig({ location: "UserProfileBadgeList" }).enabled,
        G = (function (e) {
            let { location: t } = e;
            return C.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        $ = (function (e) {
            let { location: t } = e;
            return R.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (G || $) && a?.userId != null && !I.Ay.hasCatalogFor(a.userId) && (0, y.R)(a.userId);
    }, [G, $, a?.userId]);
    let H = a?.userId,
        F = (0, _.bG)([I.Ay], () => {
            if (!$ || null == H) return null;
            let e = {};
            for (let n of t) {
                let t = (0, B.w0)(n.id);
                if (null == t) continue;
                let l = I.Ay.getBadgeById(t, H)?.simple_icon_url;
                null != l && (e[n.id] = l);
            }
            return e;
        }, [$, H, t]),
        q = m((0, e_.AP)(D?.id ?? null)).some((e) => e.id === g.A.ORB_PROFILE_BADGE);
    return (0, l.jsx)("div", {
        className: h()(ej.kL, n),
        "aria-label": u.intl.string(u.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === g.A.ORB_PROFILE_BADGE,
                r = (0, eg.e0)(e.id),
                u = null != r || e.id === eE,
                m = a?.userId === D?.id,
                _ = "april_fools_2026" === e.id,
                j = e.id.startsWith(W.Ky),
                y = void 0 !== r && e.id !== eE,
                C = F?.[e.id],
                I = (0, l.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? C ?? (0, W.L7)(e.icon),
                    className: h()(ej.qS, null != C && ej.Do, i),
                }),
                R = null != o && o(e.id),
                $ = {
                    onClick: (l) => {
                        k({ action: "PRESS_BADGE" }),
                            (0, ep.vP)({
                                badgeId: (0, B.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: S,
                                ...T,
                            });
                        let r = e.id.startsWith("staff") && !m,
                            i = a?.userId != null ? d.default.getUser(a.userId) : null;
                        if (G && !r && i?.bot !== !0) {
                            l.preventDefault(),
                                (0, w._)({
                                    initialBadgeId: (0, B.w0)(e.id),
                                    targetUserId: a?.userId,
                                    targetUsername: i?.globalName ?? i?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, U.Cz)({
                                tab: ev.G2.ORBS,
                                analyticsLocations: S,
                                analyticsSource: E.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                s?.();
                            return;
                        }
                        if (u) {
                            if (
                                (l.preventDefault(),
                                ec.default.track(eb.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: P,
                                    viewed_user_id: a?.userId,
                                }),
                                P)
                            ) {
                                m
                                    ? (0, er.pX)(eb.BVt.NITRO_HOME)
                                    : (0, et.D)({ analyticsLocations: S, displayProfile: a }),
                                    s?.();
                                return;
                            }
                            if (m) {
                                let t = null != e.link ? (0, v.default)(e.link, { analyticsLocations: S }) : null;
                                if (null == t) return;
                                return s?.(), t(l);
                            }
                            return (0, et.D)({ analyticsLocations: S, displayProfile: a }), void s?.();
                        }
                        let o = null != e.link ? (0, v.default)(e.link, { analyticsLocations: S }) : null;
                        if (null != o) return s?.(), o(l);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            ec.default.track(eb.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, el.fF)(en.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            k({ action: "HOVER_BADGE" }),
                            (0, ep.vP)({
                                badgeId: (0, B.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: S,
                                ...T,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: c && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (G)
                return (0, l.jsx)(
                    O,
                    {
                        legacyBadgeId: e.id,
                        userId: a?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, W.L7)(e.icon),
                        children: (0, l.jsx)(b.Anchor, { ...$, children: I }),
                    },
                    `${e.id}-${t}`,
                );
            if (y) {
                let n = (0, l.jsx)(b.Anchor, { ...$, ref: f, children: I });
                return (0, l.jsx)(
                    "div",
                    {
                        children: (0, l.jsx)(z, {
                            badgeId: e.id,
                            targetElementRef: f,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                ec.default.track(eb.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, l.jsx)(b.Anchor, { ...$, ref: p, children: I });
                return (0, l.jsx)(
                    ed,
                    {
                        targetElementRef: p,
                        delay: W.In,
                        showSubtext: !q && !e.isPreviewMode,
                        forceOpen: R,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (_) {
                let n = (0, l.jsx)(b.Anchor, { ...$, ref: A, children: I });
                return (0, l.jsx)(
                    L,
                    { targetElementRef: A, delay: W.In, forceOpen: R, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (j && a?.premiumGuildSince != null && M) {
                let n = (0, l.jsx)(b.Anchor, { ...$, ref: N, children: I });
                return (0, l.jsx)(
                    ex,
                    {
                        targetElementRef: N,
                        delay: W.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: a.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let H = (0, l.jsx)(b.Anchor, { ...$, children: I }),
                V = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== eE
                        ? (0, l.jsx)(ee, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: u && e.id !== eE ? r : void 0 });
            return (0, l.jsx)(
                x.m,
                { __unsupportedReactNodeAsText: V, forceOpen: R, delay: W.In, ariaHidden: !0, children: H },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eA = n(996988);
let eC = {
    [eA.d.POPOUT]: 12,
    [eA.d.MODAL]: 26,
    [eA.d.MODAL_V2]: 16,
    [eA.d.SIDEBAR]: 13,
    [eA.d.VIDEO_TILE_BACKGROUND]: 12,
};
function eI(e) {
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
        g = r.useMemo(() => {
            if (null == s) return f(c);
            let e = new Set(c.map((e) => e.id));
            return f([...c, ...s.filter((t) => !e.has(t.id))]);
        }, [c, s]);
    return 0 === g.length
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: (0, i.chunk)(g, eC[n]).map((e) =>
                  (0, l.jsx)(
                      ey,
                      { badges: e, displayProfile: t, onClose: o, shouldOpenBadgeTooltip: d, shouldGlowTenureBadge: u },
                      e[0].id,
                  ),
              ),
          });
}
