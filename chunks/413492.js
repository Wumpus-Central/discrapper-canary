"use strict";
n.d(t, { A: () => eS });
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
var h = n(503698),
    f = n.n(h),
    p = n(17928),
    E = n(990078),
    m = n(349288),
    g = n(464792),
    A = n(793574),
    I = n(688810),
    T = n(682618),
    S = n(992526),
    y = n(982240);
let C = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(70283),
    v = n(775602),
    R = n(461536),
    O = n(841595),
    b = n(975858);
function D(e) {
    let t,
        n,
        r,
        { children: s, legacyBadgeId: a, userId: o, fallbackTitle: l, fallbackIconSrc: u } = e,
        d = (0, b.w0)(a),
        {
            badgeData: _,
            currentTier: h,
            obtainedAt: f,
        } = (0, p.cf)(
            [y.Ay],
            () =>
                null == d || null == o
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: y.Ay.getBadgeById(d, o),
                          currentTier: y.Ay.getCurrentTier(d, o),
                          obtainedAt: y.Ay.getObtainedAt(d, o),
                      },
            [d, o],
        ),
        E = (0, p.bG)([v.Ay], () => v.Ay.useReducedMotion),
        m = _?.badge_id === N.$.PREMIUM_TENURE,
        g = d === N.$.LEGACY_USERNAME,
        A = h?.name,
        I = m ? c.intl.string(c.t.Ipxkog) : (_?.name ?? l);
    m ? (r = n = null != A ? `${I} ${A}` : I) : null != A ? ((t = I), (n = A), (r = `${I} ${A}`)) : ((n = I), (r = I));
    let T = E ? void 0 : _?.complex_icon_animated_url,
        S = T ?? _?.complex_icon_static_url ?? _?.simple_icon_url ?? u,
        C = null != T && S === T;
    if (g) return (0, i.jsx)(L, { userId: o, title: n, badgeImage: S, rarity: _?.rarity, children: s });
    let O = _?.info_label ?? (null != f ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(f) }) : void 0);
    return (0, i.jsx)(R.A, {
        title: n,
        eyebrow: t,
        body: O,
        badgeImage: S,
        badgeName: r,
        rarity: _?.rarity,
        variant: m ? "nitro" : "default",
        isAnimated: C,
        children: s,
    });
}
function L(e) {
    let { children: t, userId: n, title: r, badgeImage: s, rarity: a } = e,
        o = (0, p.bG)(
            [O.A, l.A],
            () =>
                l.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (O.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, i.jsx)(R.A, { title: r, body: o, badgeImage: s, badgeName: r, rarity: a, children: t });
}
var w = n(470739),
    M = n(662388),
    P = n(459192);
function x(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(P.u, {
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
    U = n(704640),
    G = n(425713),
    F = n(642481),
    V = n(720879),
    B = n(788868),
    j = n(49999),
    H = n(518477);
let Y = function (e) {
    let {
            badgeId: t = B.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: s,
            targetElementRef: a,
            progressCircleText: o,
            progressCirclePercent: l,
            progressCircleUrgency: u,
            onShow: d,
        } = e,
        _ = B.VD[t].nameUnformattedNitro,
        h = c.intl.string(_).toLocaleUpperCase(),
        f = B.VD[t].rarity,
        p = (0, U.A)(t),
        E = (0, G.I)(t).standard;
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
            title: h,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: E,
            badgeName: h,
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
            props: { src: E, alt: h, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: h,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(V.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: H.In,
              onShow: d,
              ...g,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(F.A, {
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
var W = n(534514),
    K = n(834730),
    $ = n(833021);
let z = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: $.R, children: [t, (0, i.jsx)("div", { className: $.A, children: n }), r] });
};
var q = n(224016),
    Z = n(597531);
let X = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, G.I)(n.id).standard;
    return (0, i.jsxs)(z, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(q.A, { width: 56, className: Z.R }),
        children: [
            (0, i.jsx)(W.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, i.jsx)(K.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Z.K,
                children: t.description,
            }),
        ],
    });
};
var Q = n(30084),
    J = n(507107),
    ee = n(590202),
    et = n(976860),
    en = n(305003),
    ei = n(312640),
    er = n(798618),
    es = n(752079),
    ea = n(427426);
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
    let h = r.useCallback(() => {
            _();
        }, [_]),
        f = r.useCallback(() => {
            d(), u(!1);
        }, [d]);
    return (0, i.jsxs)("div", {
        onMouseEnter: h,
        onMouseLeave: f,
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
    return (0, i.jsxs)(z, {
        assetComponent: (0, i.jsx)(es.A, { className: ea.jc }),
        tooltipWordmarkComponent: (0, i.jsx)(W.D, {
            variant: "heading-md/extrabold",
            className: ea.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(W.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : ea.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, i.jsx)(K.E, { variant: "text-xs/normal", className: ea.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eu = n(174459),
    ec = n(474090),
    ed = n(439174),
    e_ = n(183555),
    eh = n(47675),
    ef = n(999291),
    ep = n(652215),
    eE = n(758836);
let em = "premium";
var eg = n(168796);
function eA(e) {
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
        N = r.useRef(null),
        v = r.useRef(null),
        { analyticsLocations: R } = (0, I.Ay)(A.A.BADGE),
        { context: O, trackUserProfileAction: L } = (0, e_.NJ)(),
        P = u.default.getCurrentUser(),
        k = (0, ec.CC)(P?.premiumType, B.PremiumTypes.TIER_2),
        U = (0, S.J9)({ location: "UserProfileBadgeList" }),
        G = (function (e) {
            let { location: t } = e;
            return C.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (U || G) && a?.userId != null && !y.Ay.hasCatalogFor(a.userId) && (0, T.R)(a.userId);
    }, [U, G, a?.userId]);
    let F = a?.userId,
        V = (0, p.bG)([y.Ay], () => {
            if (!G || null == F) return null;
            let e = {};
            for (let n of t) {
                let t = (0, b.w0)(n.id);
                if (null == t) continue;
                let i = y.Ay.getBadgeById(t, F)?.simple_icon_url;
                null != i && (e[n.id] = i);
            }
            return e;
        }, [G, F, t]),
        j = _((0, ef.AP)(P?.id ?? null)).some((e) => e.id === en.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: f()(eg.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === en.A.ORB_PROFILE_BADGE,
                r = (0, ed.e0)(e.id),
                c = null != r || e.id === em,
                _ = a?.userId === P?.id,
                p = "april_fools_2026" === e.id,
                I = void 0 !== r && e.id !== em,
                T = V?.[e.id],
                S = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? T ?? (0, H.L7)(e.icon),
                    className: f()(eg.qS, null != T && eg.Do, s),
                }),
                y = null != l && l(e.id),
                C = {
                    onClick: (i) => {
                        L({ action: "PRESS_BADGE" }),
                            (0, eh.vP)({
                                badgeId: (0, b.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: R,
                                ...O,
                            });
                        let r = e.id.startsWith("staff") && !_,
                            s = a?.userId != null ? u.default.getUser(a.userId) : null;
                        if (U && !r && s?.bot !== !0) {
                            i.preventDefault(),
                                (0, w._)({
                                    initialBadgeId: (0, b.w0)(e.id),
                                    targetUserId: a?.userId,
                                    targetUsername: s?.globalName ?? s?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, M.Cz)({
                                tab: eE.G2.ORBS,
                                analyticsLocations: R,
                                analyticsSource: A.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                o?.();
                            return;
                        }
                        if (c) {
                            if (
                                (i.preventDefault(),
                                eu.default.track(ep.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: k,
                                    viewed_user_id: a?.userId,
                                }),
                                k)
                            ) {
                                _
                                    ? (0, et.pX)(ep.BVt.NITRO_HOME)
                                    : (0, Q.D)({ analyticsLocations: R, displayProfile: a }),
                                    o?.();
                                return;
                            }
                            if (_) {
                                let t = null != e.link ? (0, g.default)(e.link, { analyticsLocations: R }) : null;
                                if (null == t) return;
                                return o?.(), t(i);
                            }
                            return (0, Q.D)({ analyticsLocations: R, displayProfile: a }), void o?.();
                        }
                        let l = null != e.link ? (0, g.default)(e.link, { analyticsLocations: R }) : null;
                        if (null != l) return o?.(), l(i);
                    },
                    onMouseEnter: () => {
                        "quest_completed" === e.id &&
                            eu.default.track(ep.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, ee.fF)(J.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            L({ action: "HOVER_BADGE" }),
                            (0, eh.vP)({
                                badgeId: (0, b.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: R,
                                ...O,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: d && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (U)
                return (0, i.jsx)(
                    D,
                    {
                        legacyBadgeId: e.id,
                        userId: a?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, H.L7)(e.icon),
                        children: (0, i.jsx)(m.Anchor, { ...C, children: S }),
                    },
                    `${e.id}-${t}`,
                );
            if (I) {
                let n = (0, i.jsx)(m.Anchor, { ...C, ref: h, children: S });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(Y, {
                            badgeId: e.id,
                            targetElementRef: h,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                eu.default.track(ep.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(m.Anchor, { ...C, ref: N, children: S });
                return (0, i.jsx)(
                    eo,
                    {
                        targetElementRef: N,
                        delay: H.In,
                        showSubtext: !j && !e.isPreviewMode,
                        forceOpen: y,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (p) {
                let n = (0, i.jsx)(m.Anchor, { ...C, ref: v, children: S });
                return (0, i.jsx)(
                    x,
                    { targetElementRef: v, delay: H.In, forceOpen: y, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let G = (0, i.jsx)(m.Anchor, { ...C, children: S }),
                F = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== em
                        ? (0, i.jsx)(X, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== em ? r : void 0 });
            return (0, i.jsx)(
                E.m,
                { __unsupportedReactNodeAsText: F, forceOpen: y, delay: H.In, ariaHidden: !0, children: G },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eI = n(996988);
let eT = {
    [eI.d.POPOUT]: 12,
    [eI.d.MODAL]: 26,
    [eI.d.MODAL_V2]: 16,
    [eI.d.SIDEBAR]: 13,
    [eI.d.VIDEO_TILE_BACKGROUND]: 12,
};
function eS(e) {
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
        h = r.useMemo(() => {
            if (null == o) return d;
            let e = new Set(d.map((e) => e.id));
            return [...d, ...o.filter((t) => !e.has(t.id))];
        }, [d, o]);
    return 0 === h.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, s.chunk)(h, eT[n]).map((e) =>
                  (0, i.jsx)(
                      eA,
                      { badges: e, displayProfile: t, onClose: l, shouldOpenBadgeTooltip: u, shouldGlowTenureBadge: c },
                      e[0].id,
                  ),
              ),
          });
}
