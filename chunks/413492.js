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
    E = n(17928),
    p = n(990078),
    m = n(349288),
    g = n(464792),
    A = n(793574),
    I = n(688810),
    T = n(682618),
    S = n(992526),
    N = n(982240);
let C = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = n(70283),
    O = n(775602),
    R = n(461536),
    v = n(321191),
    b = n(975858);
function L(e) {
    let t,
        n,
        r,
        { children: s, legacyBadgeId: a, userId: o, fallbackTitle: l, fallbackIconSrc: u } = e,
        d = (0, b.w0)(a),
        {
            badgeData: _,
            currentTier: h,
            obtainedAt: f,
        } = (0, E.cf)(
            [N.Ay],
            () =>
                null == d || null == o
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: N.Ay.getBadgeById(d, o),
                          currentTier: N.Ay.getCurrentTier(d, o),
                          obtainedAt: N.Ay.getObtainedAt(d, o),
                      },
            [d, o],
        ),
        p = (0, E.bG)([O.Ay], () => O.Ay.useReducedMotion),
        m = _?.badge_id === y.$.PREMIUM_TENURE,
        g = d === y.$.LEGACY_USERNAME,
        A = h?.name,
        I = m ? c.intl.string(c.t.Ipxkog) : (_?.name ?? l);
    m ? (r = n = null != A ? `${I} ${A}` : I) : null != A ? ((t = I), (n = A), (r = `${I} ${A}`)) : ((n = I), (r = I));
    let T = p ? void 0 : _?.complex_icon_animated_url,
        S = T ?? _?.complex_icon_static_url ?? _?.simple_icon_url ?? u,
        C = null != T && S === T;
    if (g) return (0, i.jsx)(D, { userId: o, title: n, badgeImage: S, children: s });
    let v = _?.info_label ?? (null != f ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(f) }) : void 0);
    return (0, i.jsx)(R.A, {
        title: n,
        eyebrow: t,
        body: v,
        badgeImage: S,
        badgeName: r,
        variant: m ? "nitro" : "default",
        isAnimated: C,
        children: s,
    });
}
function D(e) {
    let { children: t, userId: n, title: r, badgeImage: s } = e,
        a = (0, E.bG)(
            [v.A, l.A],
            () =>
                l.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (v.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, i.jsx)(R.A, { title: r, body: a, badgeImage: s, badgeName: r, children: t });
}
var w = n(470739),
    P = n(662388),
    M = n(459192);
function x(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: s, children: a } = e;
    return (0, i.jsx)(M.u, {
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
var U = n(116833),
    k = n(704640),
    G = n(425713),
    V = n(642481),
    F = n(720879),
    B = n(202541),
    H = n(49999),
    j = n(518477);
let W = function (e) {
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
        E = (0, k.A)(t),
        p = (0, G.I)(t).standard;
    (0, r.useEffect)(() => {
        U.m[U.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let m = (0, r.useCallback)(() => {
        n?.(H.i.USER_DISMISS);
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
            badgeImage: p,
            badgeName: h,
            progressCircle: t,
            children: s,
        });
    }
    let g = {
        gradientColor: E,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: U.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: h, progressCircleText: o, progressCirclePercent: l, progressCircleUrgency: u },
        },
        title: h,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, i.jsx)(F.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: j.In,
              onShow: d,
              ...g,
              children: s,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  s,
                  (0, i.jsx)(V.A, {
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
var Y = n(534514),
    K = n(834730),
    $ = n(775549);
let z = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", { className: $.R, children: [t, (0, i.jsx)("div", { className: $.A, children: n }), r] });
};
var q = n(224016),
    Z = n(852443);
let X = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, G.I)(n.id).standard;
    return (0, i.jsxs)(z, {
        assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, i.jsx)(q.A, { width: 56, className: Z.R }),
        children: [
            (0, i.jsx)(Y.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
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
    J = n(24001),
    ee = n(590202),
    et = n(976860),
    en = n(305003),
    ei = n(312640),
    er = n(798618),
    es = n(752079),
    ea = n(414690);
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
        tooltipWordmarkComponent: (0, i.jsx)(Y.D, {
            variant: "heading-md/extrabold",
            className: ea.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, i.jsx)(Y.D, {
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
    eE = n(652215),
    ep = n(758836);
let em = "premium";
var eg = n(992028);
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
        y = r.useRef(null),
        O = r.useRef(null),
        { analyticsLocations: R } = (0, I.Ay)(A.A.BADGE),
        { context: v, trackUserProfileAction: D } = (0, e_.NJ)(),
        M = u.default.getCurrentUser(),
        U = (0, ec.CC)(M?.premiumType, B.PremiumTypes.TIER_2),
        k = (0, S.J9)({ location: "UserProfileBadgeList" }),
        G = (function (e) {
            let { location: t } = e;
            return C.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (k || G) && a?.userId != null && !N.Ay.hasCatalogFor(a.userId) && (0, T.R)(a.userId);
    }, [k, G, a?.userId]);
    let V = a?.userId,
        F = (0, E.bG)([N.Ay], () => {
            if (!G || null == V) return null;
            let e = {};
            for (let n of t) {
                let t = (0, b.w0)(n.id);
                if (null == t) continue;
                let i = N.Ay.getBadgeById(t, V)?.simple_icon_url;
                null != i && (e[n.id] = i);
            }
            return e;
        }, [G, V, t]),
        H = _((0, ef.AP)(M?.id ?? null)).some((e) => e.id === en.A.ORB_PROFILE_BADGE);
    return (0, i.jsx)("div", {
        className: f()(eg.kL, n),
        "aria-label": c.intl.string(c.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === en.A.ORB_PROFILE_BADGE,
                r = (0, ed.e0)(e.id),
                c = null != r || e.id === em,
                _ = a?.userId === M?.id,
                E = "april_fools_2026" === e.id,
                I = void 0 !== r && e.id !== em,
                T = F?.[e.id],
                S = (0, i.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? T ?? (0, j.L7)(e.icon),
                    className: f()(eg.qS, null != T && eg.Do, s),
                }),
                N = null != l && l(e.id),
                C = {
                    onClick: (i) => {
                        D({ action: "PRESS_BADGE" }),
                            (0, eh.vP)({
                                badgeId: (0, b.w0)(e.id),
                                badgeAction: "PRESS_BADGE",
                                position: t,
                                analyticsLocations: R,
                                ...v,
                            });
                        let r = e.id.startsWith("staff") && !_,
                            s = a?.userId != null ? u.default.getUser(a.userId) : null;
                        if (k && !r && s?.bot !== !0) {
                            i.preventDefault(),
                                (0, w._)({
                                    initialBadgeId: (0, b.w0)(e.id),
                                    targetUserId: a?.userId,
                                    targetUsername: s?.globalName ?? s?.username,
                                });
                            return;
                        }
                        if (n) {
                            (0, P.Cz)({
                                tab: ep.G2.ORBS,
                                analyticsLocations: R,
                                analyticsSource: A.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                o?.();
                            return;
                        }
                        if (c) {
                            if (
                                (i.preventDefault(),
                                eu.default.track(eE.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: U,
                                    viewed_user_id: a?.userId,
                                }),
                                U)
                            ) {
                                _
                                    ? (0, et.pX)(eE.BVt.NITRO_HOME)
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
                            eu.default.track(eE.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, ee.fF)(J.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            D({ action: "HOVER_BADGE" }),
                            (0, eh.vP)({
                                badgeId: (0, b.w0)(e.id),
                                badgeAction: "HOVER_BADGE",
                                position: t,
                                analyticsLocations: R,
                                ...v,
                            });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: d && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                };
            if (k)
                return (0, i.jsx)(
                    L,
                    {
                        legacyBadgeId: e.id,
                        userId: a?.userId,
                        fallbackTitle: e.description,
                        fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, j.L7)(e.icon),
                        children: (0, i.jsx)(m.Anchor, { ...C, children: S }),
                    },
                    `${e.id}-${t}`,
                );
            if (I) {
                let n = (0, i.jsx)(m.Anchor, { ...C, ref: h, children: S });
                return (0, i.jsx)(
                    "div",
                    {
                        children: (0, i.jsx)(W, {
                            badgeId: e.id,
                            targetElementRef: h,
                            mode: "tooltip",
                            body: e.description,
                            onShow: () => {
                                eu.default.track(eE.HAw.TOOLTIP_VIEWED, {
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
                let n = (0, i.jsx)(m.Anchor, { ...C, ref: y, children: S });
                return (0, i.jsx)(
                    eo,
                    {
                        targetElementRef: y,
                        delay: j.In,
                        showSubtext: !H && !e.isPreviewMode,
                        forceOpen: N,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (E) {
                let n = (0, i.jsx)(m.Anchor, { ...C, ref: O, children: S });
                return (0, i.jsx)(
                    x,
                    { targetElementRef: O, delay: j.In, forceOpen: N, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            let G = (0, i.jsx)(m.Anchor, { ...C, children: S }),
                V = (function (e) {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== em
                        ? (0, i.jsx)(X, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== em ? r : void 0 });
            return (0, i.jsx)(
                p.m,
                { __unsupportedReactNodeAsText: V, forceOpen: N, delay: j.In, ariaHidden: !0, children: G },
                `${e.id}-${t}`,
            );
        }),
    });
}
var eI = n(996988);
let eT = { [eI.d.POPOUT]: 12, [eI.d.MODAL]: 26, [eI.d.SIDEBAR]: 13, [eI.d.VIDEO_TILE_BACKGROUND]: 12 };
function eS(e) {
    let {
            displayProfile: t,
            themeType: n,
            isRedesignEnabled: a,
            pendingLegacyUsernameDisabled: o,
            pendingBadges: l,
            onClose: u,
            shouldOpenBadgeTooltip: c,
            shouldGlowTenureBadge: d,
        } = e,
        h = _(t, o),
        f = r.useMemo(() => {
            if (null == l) return h;
            let e = new Set(h.map((e) => e.id));
            return [...h, ...l.filter((t) => !e.has(t.id))];
        }, [h, l]);
    if (0 === f.length) return null;
    let E = n === eI.d.MODAL_V2 ? [f] : (0, s.chunk)(f, !0 === a && n === eI.d.SIDEBAR ? eT[eI.d.POPOUT] : eT[n]);
    return (0, i.jsx)(i.Fragment, {
        children: E.map((e) =>
            (0, i.jsx)(
                eA,
                { badges: e, displayProfile: t, onClose: u, shouldOpenBadgeTooltip: c, shouldGlowTenureBadge: d },
                e[0].id,
            ),
        ),
    });
}
