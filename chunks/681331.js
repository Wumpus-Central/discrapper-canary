n.d(t, { A: () => ek });
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
var m = n(503698),
    E = n.n(m),
    g = n(17928),
    p = n(192308),
    b = n(28863),
    _ = n(866665),
    h = n(922016),
    A = n(983555),
    x = n(274670),
    R = n(144779),
    N = n(793574),
    v = n(688810),
    I = n(682618),
    T = n(992526),
    j = n(982240),
    S = n(609782),
    C = n(643056);
let D = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = n(248284),
    M = n(365199),
    O = n(315710),
    P = n(297264),
    U = n(834730),
    B = n(821609),
    k = n(442433),
    G = n(450232),
    w = n(470739),
    L = n(494881);
function H(e) {
    let { badge: t, index: r, onClose: s } = e,
        [i, d] = l.useState(!1);
    function o(e) {
        d(!0),
            (0, k.L3)(
                e,
                async () => {
                    let { default: e } = await n.e("787847").then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s });
                },
                { onClose: () => d(!1) },
            );
    }
    let u = c.intl.formatToPlainString(c.t.Ci7gvp, { badgeName: t.name, position: r + 1 });
    return (0, a.jsxs)("div", {
        className: E()(L.fw, i && L.HV),
        onContextMenu: o,
        children: [
            (0, a.jsx)("div", {
                className: L.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: L.pC,
                    }),
            }),
            (0, a.jsx)("button", {
                type: "button",
                className: L.lv,
                "aria-haspopup": "menu",
                "aria-expanded": i,
                "aria-label": u,
                onClick: o,
                children: (0, a.jsx)(M.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function V(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, O.tj)(n);
    let s = o.default.getCurrentUser()?.id,
        i = (0, g.yK)([j.Ay], () => (null == s ? [] : j.Ay.getBadges(s).filter((e) => e.owned && !0 !== e.hidden)), [
            s,
        ]);
    return (0, a.jsxs)("div", {
        ref: n,
        className: L.SW,
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: L.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: L.$,
                        children: [
                            (0, a.jsx)(G.A, { size: "xs", className: L.oU }),
                            (0, a.jsx)(P.D, {
                                id: r,
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: c.intl.string(c.t.PXIyjF),
                            }),
                        ],
                    }),
                    (0, a.jsx)(U.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: c.intl.string(c.t.VHaYM7),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, a.jsx)("div", {
                    className: L.yq,
                    role: "group",
                    "aria-label": c.intl.string(c.t.VWV0y5),
                    children: i.map((e, n) => (0, a.jsx)(H, { badge: e, index: n, onClose: t }, e.badge_id)),
                }),
            (0, a.jsx)(B.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: c.intl.string(c.t.fN2how),
                onClick: function () {
                    t(), (0, w._)({ viewingCurrentUserBadges: !0 });
                },
            }),
        ],
    });
}
var $ = n(70283),
    X = n(775602),
    F = n(461536),
    z = n(321191);
function W(e) {
    let t,
        n,
        r,
        { children: s, legacyBadgeId: i, userId: d, fallbackTitle: o, fallbackIconSrc: u, shouldShow: f } = e,
        m = (0, S.w0)(i),
        {
            badgeData: E,
            currentTier: p,
            obtainedAt: b,
        } = (0, g.cf)(
            [j.Ay],
            () =>
                null == m || null == d
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: j.Ay.getBadgeById(m, d),
                          currentTier: j.Ay.getCurrentTier(m, d),
                          obtainedAt: j.Ay.getObtainedAt(m, d),
                      },
            [m, d],
        ),
        _ = (0, g.bG)([X.Ay], () => X.Ay.useReducedMotion),
        h = l.useCallback(() => {
            null != d && j.Ay.isCatalogStaleFor(d) && (0, I.RS)(d);
        }, [d]),
        A = E?.badge_id === $.$.PREMIUM_TENURE,
        x = m === $.$.LEGACY_USERNAME,
        R = p?.name,
        N = A ? c.intl.string(c.t.Ipxkog) : (E?.name ?? o);
    A ? (r = n = null != R ? `${N} ${R}` : N) : null != R ? ((t = N), (n = R), (r = `${N} ${R}`)) : ((n = N), (r = N));
    let v = _ ? void 0 : E?.complex_icon_animated_url,
        T = v ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? u,
        C = null != v && T === v;
    if (x) return (0, a.jsx)(Y, { userId: d, title: n, badgeImage: T, shouldShow: f, children: s });
    let D = E?.info_label ?? (null != b ? c.intl.formatToPlainString(c.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, a.jsx)(F.A, {
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
function Y(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: s } = e,
        i = (0, g.bG)(
            [z.A, d.A],
            () =>
                d.A.hidePersonalInformation
                    ? c.intl.string(c.t.Br1ls3)
                    : null != n
                      ? (z.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(F.A, { title: l, body: i, badgeImage: r, badgeName: l, shouldShow: s, children: t });
}
var q = n(839534),
    K = n(683063);
function Q(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(K.u, {
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
var Z = n(116833),
    J = n(704640),
    ee = n(425713),
    et = n(642481),
    en = n(720879),
    ea = n(202541),
    el = n(49999),
    er = n(518477);
let es = function (e) {
    let {
            badgeId: t = ea.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: d,
            progressCircleUrgency: o,
            onShow: u,
        } = e,
        f = ea.VD[t].nameUnformattedNitro,
        m = c.intl.string(f).toLocaleUpperCase(),
        E = ea.VD[t].rarity,
        g = (0, J.A)(t),
        p = (0, ee.I)(t).standard;
    (0, l.useEffect)(() => {
        Z.m[Z.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p);
    }, [p]);
    let b = (0, l.useCallback)(() => {
        n?.(el.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, d, o);
        return (0, a.jsx)(F.A, {
            targetElementRef: s,
            onShow: u,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: E,
            badgeImage: p,
            badgeName: m,
            progressCircle: t,
            children: r,
        });
    }
    let _ = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: Z.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: i, progressCirclePercent: d, progressCircleUrgency: o },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(en.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: er.In,
              onShow: u,
              ..._,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(et.A, {
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
var ei = n(592265);
let ed = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: ei.R,
        children: [t, (0, a.jsx)("div", { className: ei.A, children: n }), l],
    });
};
var eo = n(224016),
    ec = n(747278);
let eu = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, ee.I)(n.id).standard;
    return (0, a.jsxs)(ed, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eo.A, { width: 56, className: ec.R }),
        children: [
            (0, a.jsx)(P.D, { variant: "heading-xl/extrabold", children: c.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(U.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: ec.K,
                children: t.description,
            }),
        ],
    });
};
var ef = n(30084),
    em = n(24001),
    eE = n(104886),
    eg = n(590202),
    ep = n(976860),
    eb = n(305003),
    e_ = n(273875),
    eh = n(798618),
    eA = n(752079),
    ex = n(370277);
function eR(e) {
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
    let m = l.useCallback(() => {
            f();
        }, [f]),
        E = l.useCallback(() => {
            u(), o(!1);
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: m,
        onMouseLeave: E,
        children: [
            t,
            (0, a.jsxs)(e_.x, {
                targetElementRef: n,
                shouldShow: !!(d || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eN, { showSubtext: s }), (0, a.jsx)(eh.F, {})],
            }),
        ],
    });
}
function eN(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ed, {
        assetComponent: (0, a.jsx)(eA.A, { className: ex.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(P.D, {
            variant: "heading-md/extrabold",
            className: ex.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(P.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : ex.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(U.E, { variant: "text-xs/normal", className: ex.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
var ev = n(174459),
    eI = n(474090),
    eT = n(439174),
    ej = n(183555),
    eS = n(47675),
    eC = n(999291),
    eD = n(652215),
    ey = n(758836);
let eM = "premium";
var eO = n(816645);
function eP(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: r,
            displayProfile: s,
            onClose: i,
            shouldOpenBadgeTooltip: d,
            shouldGlowTenureBadge: u,
            popoutAnchorRef: m,
        } = e,
        M = (0, y.A)((e) => e.isOpen),
        O = l.useRef(null),
        P = l.useRef(null),
        U = l.useRef(null),
        B = l.useRef(null),
        { analyticsLocations: k } = (0, v.Ay)(N.A.BADGE),
        { context: G, trackUserProfileAction: L } = (0, ej.NJ)(),
        H = o.default.getCurrentUser(),
        $ = (0, eI.CC)(H?.premiumType, ea.PremiumTypes.TIER_2),
        X = (0, T.J9)({ location: "UserProfileBadgeList" }),
        F = (0, C.d)({ location: "UserProfileBadgeList" }),
        z = (function (e) {
            let { location: t } = e;
            return D.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (X || z) && s?.userId != null && !j.Ay.hasCatalogFor(s.userId) && (0, I.RS)(s.userId);
    }, [X, z, s?.userId]);
    let Y = s?.userId,
        K = (0, g.bG)([j.Ay], () => {
            if (!z || null == Y) return null;
            let e = {};
            for (let n of t) {
                let t = (0, S.w0)(n.id);
                if (null == t) continue;
                let a = j.Ay.getBadgeById(t, Y)?.simple_icon_url;
                null != a && (e[n.id] = a);
            }
            return e;
        }, [z, Y, t]),
        Z = s?.userId === H?.id,
        J = Z && X && F && null != m,
        ee = J && M;
    function et(e) {
        y.A.setState({ isOpen: e });
    }
    let en = f((0, eC.AP)(H?.id ?? null)).some((e) => e.id === eb.A.ORB_PROFILE_BADGE),
        el = (0, a.jsx)("div", {
            ref: O,
            className: E()(eO.kL, F && eO.Yq, J && eO.Tx, n),
            "aria-label": c.intl.string(c.t.VWV0y5),
            role: "group",
            ...(J ? { onClick: () => et(!ee) } : null),
            children: t.map((e, t) => {
                let n = e.id === eb.A.ORB_PROFILE_BADGE,
                    l = (0, eT.e0)(e.id),
                    c = null != l || e.id === eM,
                    f = "april_fools_2026" === e.id,
                    m = void 0 !== l && e.id !== eM,
                    g = K?.[e.id],
                    h = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? g ?? (0, er.L7)(e.icon),
                        className: E()(eO.qS, null != g && eO.Do, r),
                    }),
                    v = null != d && d(e.id),
                    I = {
                        onClick: (a) => {
                            if (
                                (L({ action: "PRESS_BADGE" }),
                                (0, eS.vP)({
                                    badgeId: (0, S.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: k,
                                    ...G,
                                }),
                                J)
                            )
                                return void a.preventDefault();
                            let l = s?.userId != null ? o.default.getUser(s.userId) : null;
                            if (X && l?.bot !== !0) {
                                a.preventDefault(),
                                    (0, w._)({
                                        initialBadgeId: (0, S.w0)(e.id),
                                        targetUserId: s?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    });
                                return;
                            }
                            if (n) {
                                (0, q.Cz)({
                                    tab: ey.G2.ORBS,
                                    analyticsLocations: k,
                                    analyticsSource: N.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    i?.(),
                                    (0, p.closeAllModals)();
                                return;
                            }
                            if (c) {
                                if (
                                    (a.preventDefault(),
                                    ev.default.track(eD.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: $,
                                        viewed_user_id: s?.userId,
                                    }),
                                    $)
                                ) {
                                    Z
                                        ? ((0, ep.pX)(eD.BVt.NITRO_HOME), (0, p.closeAllModals)())
                                        : (0, ef.D)({ analyticsLocations: k, displayProfile: s }),
                                        i?.();
                                    return;
                                }
                                if (Z) {
                                    let t = null != e.link ? (0, A.default)(e.link, { analyticsLocations: k }) : null;
                                    if (null == t) return;
                                    return i?.(), (0, p.closeAllModals)(), t(a);
                                }
                                return (0, ef.D)({ analyticsLocations: k, displayProfile: s }), void i?.();
                            }
                            let r = null != e.link ? (0, A.default)(e.link, { analyticsLocations: k }) : null;
                            if (null != r) return i?.(), (0, p.closeAllModals)(), r(a);
                        },
                        onMouseEnter: () => {
                            "quest_completed" === e.id &&
                                ((0, eE.E5)(eE.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, x.r)({
                                          type: R.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: em.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : ev.default.track(eD.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eg.fF)(em.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                L({ action: "HOVER_BADGE" }),
                                (0, eS.vP)({
                                    badgeId: (0, S.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: k,
                                    ...G,
                                });
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(J ? { "aria-haspopup": "dialog", "aria-expanded": ee } : null),
                        style: { filter: u && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (X)
                    return (0, a.jsx)(
                        W,
                        {
                            shouldShow: !ee,
                            legacyBadgeId: e.id,
                            userId: s?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, er.L7)(e.icon),
                            children: (0, a.jsx)(b.Anchor, { ...I, children: h }),
                        },
                        `${e.id}-${t}`,
                    );
                if (m) {
                    let n = (0, a.jsx)(b.Anchor, { ...I, ref: P, children: h });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(es, {
                                badgeId: e.id,
                                targetElementRef: P,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    ev.default.track(eD.HAw.TOOLTIP_VIEWED, {
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
                    let n = (0, a.jsx)(b.Anchor, { ...I, ref: U, children: h });
                    return (0, a.jsx)(
                        eR,
                        {
                            targetElementRef: U,
                            delay: er.In,
                            showSubtext: !en && !e.isPreviewMode,
                            forceOpen: v,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (f) {
                    let n = (0, a.jsx)(b.Anchor, { ...I, ref: B, children: h });
                    return (0, a.jsx)(
                        Q,
                        {
                            targetElementRef: B,
                            delay: er.In,
                            forceOpen: v,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let T = (0, a.jsx)(b.Anchor, { ...I, children: h }),
                    j = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eM
                            ? (0, a.jsx)(eu, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: c && e.id !== eM ? l : void 0 });
                return (0, a.jsx)(
                    _.m,
                    { __unsupportedReactNodeAsText: j, forceOpen: v, delay: er.In, ariaHidden: !0, children: T },
                    `${e.id}-${t}`,
                );
            }),
        });
    return J
        ? (0, a.jsx)(h.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              spacing: 4,
              scrollBehavior: "close",
              shouldShow: ee,
              onRequestClose: (e) => {
                  O.current?.contains(e?.target ?? null) !== !0 && et(!1);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(V, { onClose: t });
              },
              children: () => el,
          })
        : el;
}
var eU = n(996988);
let eB = {
    [eU.d.POPOUT]: 12,
    [eU.d.MODAL]: 26,
    [eU.d.SIDEBAR]: 13,
    [eU.d.VIDEO_TILE_BACKGROUND]: 12,
    [eU.d.EMBED]: 12,
};
function ek(e) {
    let {
            displayProfile: t,
            themeType: n,
            isRedesignEnabled: s,
            pendingLegacyUsernameDisabled: i,
            pendingBadges: d,
            onClose: o,
            shouldOpenBadgeTooltip: c,
            shouldGlowTenureBadge: u,
            popoutAnchorRef: m,
        } = e,
        E = f(t, i),
        g = l.useMemo(() => {
            if (null == d) return E;
            let e = new Set(E.map((e) => e.id));
            return [...E, ...d.filter((t) => !e.has(t.id))];
        }, [E, d]);
    if (0 === g.length) return null;
    let p = n === eU.d.MODAL_V2 ? [g] : (0, r.chunk)(g, !0 === s && n === eU.d.SIDEBAR ? eB[eU.d.POPOUT] : eB[n]);
    return (0, a.jsx)(a.Fragment, {
        children: p.map((e) =>
            (0, a.jsx)(
                eP,
                {
                    badges: e,
                    displayProfile: t,
                    onClose: o,
                    shouldOpenBadgeTooltip: c,
                    shouldGlowTenureBadge: u,
                    popoutAnchorRef: m,
                },
                e[0].id,
            ),
        ),
    });
}
