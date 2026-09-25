n.d(t, { A: () => ta });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    i = n(17928),
    s = n(982240),
    o = n(643056),
    d = n(988341),
    c = n(234e3),
    u = n(555149),
    f = n(287809),
    m = n(262),
    g = n(503698),
    p = n.n(g),
    E = n(612324),
    h = n(70283),
    b = n(834730),
    x = n(559106),
    _ = n(307301),
    A = n(192308),
    N = n(28863),
    v = n(866665),
    R = n(140735),
    I = n(22231),
    j = n(922016),
    y = n(983555),
    T = n(274670),
    C = n(144779),
    S = n(793574),
    D = n(688810),
    M = n(682618),
    P = n(992526),
    U = n(609782);
let O = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var B = n(248284),
    G = n(686246),
    w = n(425763),
    k = n(952270),
    L = n(365199),
    H = n(315710),
    V = n(297264),
    $ = n(821609),
    F = n(442433),
    z = n(450232),
    X = n(183555),
    K = n(451395),
    W = n(327791),
    Y = n(315629),
    q = n(403581),
    Z = n(87719),
    Q = n(375708),
    J = n(207711);
function ee(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(Y.h, {
        color: "nitro-pink",
        className: J.U,
        children: [
            (0, a.jsx)(b.E, {
                variant: "text-xs/medium",
                color: "text-default",
                className: J.t,
                children: Q.intl.string(Q.t.cKIIzk),
            }),
            (0, a.jsx)($.$, {
                variant: "expressive",
                size: "sm",
                icon: q.t,
                text: Q.intl.string(Q.t.pj0XBN),
                onClick: function () {
                    (t(), (0, Z.e)());
                },
            }),
        ],
    });
}
var et = n(470739),
    en = n(577931),
    ea = n(494881);
let el = "PROFILE_BADGES",
    er = "BADGE";
function ei(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: i, index: s } = r,
        o = (0, w.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(K.mG, {
        index: t,
        itemId: String(i.badge_id),
        itemPreviewProps: { badge: i },
        listType: el,
        itemType: er,
        "aria-label": Q.intl.formatToPlainString(Q.t.n5kHOr, { position: s + 1, badgeName: i.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: ea.oE,
        draggingClassName: ea.Id,
        dropBeforeClassName: ea.A,
        dropAfterClassName: ea.Ze,
        children: [
            (0, a.jsx)(es, { ...r }),
            (0, a.jsx)(K.jV, {
                buttonRef: d,
                className: ea.BU,
                "aria-label": Q.intl.formatToPlainString(Q.t["9xRVLy"], { badgeName: i.name, position: s + 1 }),
            }),
        ],
    });
}
function es(e) {
    let { badge: t, index: r, onClose: i, onAction: s, controlRef: o, onUnhide: d } = e,
        [c, u] = l.useState(!1),
        f = l.useRef(null),
        m = (0, E.A)(f, o);
    function g(e) {
        (u(!0),
            (0, F.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("918024"), n.e("787847")]).then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: i, onAction: s });
                },
                { onClose: () => u(!1) },
            ));
    }
    let h = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: p()(ea.fw, c && ea.HV),
        onContextMenu: h ? void 0 : g,
        children: [
            (0, a.jsx)("div", {
                className: ea.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: p()(ea.pC, h && ea.jx),
                    }),
            }),
            h
                ? (0, a.jsx)(v.m, {
                      position: "top",
                      text: Q.intl.string(Q.t.RXOPc3),
                      asContainer: !0,
                      ariaHidden: !0,
                      anchorRef: f,
                      children: (0, a.jsx)(x.vN, {
                          children: (0, a.jsx)("button", {
                              ref: m,
                              type: "button",
                              className: ea.KJ,
                              "aria-label": Q.intl.formatToPlainString(Q.t.GhK5nf, {
                                  badgeName: t.name,
                                  position: r + 1,
                              }),
                              onClick: () => d?.(t),
                              children: (0, a.jsx)(k.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      }),
                  })
                : (0, a.jsx)(x.vN, {
                      children: (0, a.jsx)("button", {
                          ref: o,
                          type: "button",
                          className: ea.lv,
                          "aria-haspopup": "menu",
                          "aria-expanded": c,
                          "aria-label": Q.intl.formatToPlainString(Q.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                          onClick: g,
                          children: (0, a.jsx)(L.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                      }),
                  }),
        ],
    });
}
function eo() {
    let e = (0, w.VU)(),
        { badge: t, sourceClientOffset: n } = (0, G.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === er ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: ea.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: ea.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ea.pC,
                }),
        }),
    });
}
function ed(e) {
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: r } = e,
        o = l.useRef(null),
        d = l.useId();
    (l.useLayoutEffect(() => {
        o.current?.focus();
    }, []),
        (0, H.tj)(o, { returnRef: n }));
    let { analyticsLocations: u } = (0, D.Ay)(S.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: m } = (0, X.NJ)();
    l.useEffect(() => {
        m({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: u });
    }, []);
    let { fixedBadges: g, reorderableBadges: E, hiddenBadges: h } = (0, en.A)(),
        x = (0, W.A)(),
        _ = (0, w.VU)(),
        A =
            (0, G.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === er;
            }) && !_,
        N = l.useMemo(() => E.map((e) => e.badge_id), [E]),
        v = l.useRef(new Map());
    function R(e) {
        return (t) => {
            null == t ? v.current.delete(e) : v.current.set(e, t);
        };
    }
    function I(e) {
        requestAnimationFrame(() => v.current.get(e)?.focus());
    }
    function j(e) {
        (I(e.badge_id),
            (0, c.RC)({
                badgeId: e.badge_id,
                hidden: !1,
                reorderableBadgeIds: N,
                hiddenBadgeIds: h.map((e) => {
                    let { badge_id: t } = e;
                    return t;
                }),
                canReorder: x,
            }));
    }
    let y = g.length + E.length + h.length,
        T = (0, i.bG)([s.Ay, f.default], () => {
            let e = f.default.getCurrentUser()?.id;
            return null != e && s.Ay.hasCatalogFor(e);
        });
    function C(e, t) {
        (0, c.hB)((0, c.i1)(N, e, t));
    }
    let M = (0, K.w9)({ listType: el, itemType: er, onFallbackDrop: (e) => C(e.index, N.length - 1) }),
        P = (0, K.w9)({ listType: el, itemType: er });
    l.useLayoutEffect(() => {
        if (A)
            return (
                P(document.body),
                () => {
                    P(null);
                }
            );
    }, [P, A]);
    let U = y > 0,
        O = T && !U,
        B = !x && !O,
        k = x ? Q.t.VHaYM7 : Q.t["7Qs/YX"];
    function L() {
        (null != r && (r.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: p()(ea.SW, O && ea.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, a.jsxs)("div", {
                className: p()(ea.Qs, B && ea.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: ea.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.$,
                                children: [
                                    x && (0, a.jsx)(z.A, { size: "xs", className: ea.oU }),
                                    (0, a.jsx)(V.D, {
                                        id: d,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: Q.intl.string(Q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !O &&
                                (0, a.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: Q.intl.string(k),
                                }),
                        ],
                    }),
                    B && (0, a.jsx)(ee, { onClose: t }),
                    O &&
                        (0, a.jsx)(b.E, {
                            className: ea.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Q.intl.string(Q.t.VT02mI),
                        }),
                    U &&
                        (0, a.jsxs)("div", {
                            className: p()(ea.yq, A && ea.T0),
                            role: "group",
                            "aria-label": Q.intl.string(Q.t.VWV0y5),
                            children: [
                                x &&
                                    (0, a.jsx)("div", {
                                        ref: (e) => {
                                            M(e);
                                        },
                                        className: ea.u$,
                                        "aria-hidden": !0,
                                    }),
                                g.map((e, t) =>
                                    (0, a.jsx)(
                                        es,
                                        {
                                            badge: e,
                                            index: t,
                                            onClose: L,
                                            onAction: I,
                                            controlRef: R(e.badge_id),
                                            onUnhide: j,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                                E.map((e, t) =>
                                    x
                                        ? (0, a.jsx)(
                                              ei,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: L,
                                                  onAction: I,
                                                  controlRef: R(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: C,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: L,
                                                  onAction: I,
                                                  controlRef: R(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                h.map((e, t) =>
                                    (0, a.jsx)(
                                        es,
                                        {
                                            badge: e,
                                            index: g.length + E.length + t,
                                            onClose: L,
                                            onAction: I,
                                            controlRef: R(e.badge_id),
                                            onUnhide: j,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(eo, {}),
            (0, a.jsx)($.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: Q.intl.string(Q.t.fN2how),
                onClick: function () {
                    (m({ action: "PRESS_VIEW_BADGES", analyticsLocations: u }),
                        L(),
                        (0, et._)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ec = n(775602),
    eu = n(461536),
    ef = n(321191),
    em = n(351906);
function eg(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: f, shouldShow: m } = e,
        g = (0, U.w0)(d),
        {
            badgeData: p,
            currentTier: E,
            obtainedAt: b,
        } = (0, i.cf)(
            [s.Ay],
            () =>
                null == g || null == c
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: s.Ay.getBadgeById(g, c),
                          currentTier: s.Ay.getCurrentTier(g, c),
                          obtainedAt: s.Ay.getObtainedAt(g, c),
                      },
            [g, c],
        ),
        x = (0, i.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && s.Ay.isCatalogStaleFor(c) && (0, M.RS)(c);
        }, [c]),
        A = p?.badge_id === h.$.PREMIUM_TENURE,
        N = g === h.$.LEGACY_USERNAME,
        v = E?.name,
        R = A ? Q.intl.string(Q.t.Ipxkog) : (p?.name ?? u);
    A ? (r = n = null != v ? `${R} ${v}` : R) : null != v ? ((t = R), (n = v), (r = `${R} ${v}`)) : ((n = R), (r = R));
    let I = x ? void 0 : p?.complex_icon_animated_url,
        j = I ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? f,
        y = null != I && j === I;
    if (N) return (0, a.jsx)(ep, { userId: c, title: n, badgeImage: j, shouldShow: m, children: o });
    let T = p?.info_label ?? (null != b ? Q.intl.formatToPlainString(Q.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, a.jsx)(eu.A, {
        title: n,
        eyebrow: t,
        body: T,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: y,
        shouldShow: m,
        onShow: _,
        children: o,
    });
}
function ep(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: s } = e,
        o = (0, i.bG)(
            [ef.A, em.A],
            () =>
                em.A.hidePersonalInformation
                    ? Q.intl.string(Q.t.Br1ls3)
                    : null != n
                      ? (ef.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(eu.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: s, children: t });
}
var eE = n(839534),
    eh = n(683063);
function eb(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: i } = e;
    return (0, a.jsx)(eh.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: l,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: r,
        children: i,
    });
}
var ex = n(859492),
    e_ = n(998370),
    eA = n(158390),
    eN = n(927813);
let ev = 5 * eN.A.Millis.MINUTE,
    eR = new Map(),
    eI = { badgeName: void 0, tierBySimpleIconUrl: new Map() };
var ej = n(116833),
    ey = n(704640),
    eT = n(425713),
    eC = n(642481),
    eS = n(720879),
    eD = n(202541),
    eM = n(49999),
    eP = n(518477);
let eU = function (e) {
    let {
            badgeId: t = eD.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: i,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eD.VD[t].nameUnformattedNitro,
        f = Q.intl.string(u).toLocaleUpperCase(),
        m = eD.VD[t].rarity,
        g = (0, ey.A)(t),
        p = (0, eT.I)(t).standard;
    (0, l.useEffect)(() => {
        (ej.m[ej.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, l.useCallback)(() => {
        n?.(eM.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, o, d);
        return (0, a.jsx)(eu.A, {
            targetElementRef: i,
            onShow: c,
            title: f,
            body: e.body,
            variant: "nitro",
            rarity: m,
            badgeImage: p,
            badgeName: f,
            progressCircle: t,
            children: r,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ej.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: f, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eS.A, {
              targetElementRef: i,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: eP.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(eC.A, {
                      targetElementRef: i,
                      shouldShow: !0,
                      onRequestClose: E,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...h,
                  }),
              ],
          });
};
var eO = n(592265);
let eB = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eO.R,
        children: [t, (0, a.jsx)("div", { className: eO.A, children: n }), l],
    });
};
var eG = n(224016),
    ew = n(747278);
let ek = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, eT.I)(n.id).standard;
    return (0, a.jsxs)(eB, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eG.A, { width: 56, className: ew.R }),
        children: [
            (0, a.jsx)(V.D, { variant: "heading-xl/extrabold", children: Q.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(b.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: ew.K,
                children: t.description,
            }),
        ],
    });
};
var eL = n(30084),
    eH = n(738822),
    eV = n(104886),
    e$ = n(590202),
    eF = n(976860),
    ez = n(780964),
    eX = n(766075),
    eK = n(305003),
    eW = n(273875),
    eY = n(798618),
    eq = n(752079),
    eZ = n(370277);
function eQ(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: i, forceOpen: s } = e,
        [o, d] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let f = l.useCallback(() => {
        (u(),
            (c.current = window.setTimeout(() => {
                ((c.current = null), d(!0));
            }, r)));
    }, [r, u]);
    l.useEffect(() => {
        s && !o && f();
    }, [s, o, f]);
    let m = l.useCallback(() => {
            f();
        }, [f]),
        g = l.useCallback(() => {
            (u(), d(!1));
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: m,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(eW.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eJ, { showSubtext: i }), (0, a.jsx)(eY.F, {})],
            }),
        ],
    });
}
function eJ(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eB, {
        assetComponent: (0, a.jsx)(eq.A, { className: eZ.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(V.D, {
            variant: "heading-md/extrabold",
            className: eZ.RK,
            children: Q.intl.string(Q.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(V.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eZ.Qn,
                children: Q.intl.string(Q.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", className: eZ.lV, children: Q.intl.string(Q.t.MEV0GI) })
                : void 0,
        ],
    });
}
var e0 = n(174459),
    e1 = n(474090),
    e8 = n(439174),
    e2 = n(47675),
    e7 = n(999291),
    e5 = n(874402),
    e4 = n(652215),
    e3 = n(758836),
    e9 = n(854232),
    e6 = n(816645);
function te(e) {
    var t;
    let n,
        r,
        d,
        {
            badges: c,
            overflowCount: u,
            className: g,
            badgeClassName: G,
            displayProfile: w,
            onClose: k,
            shouldOpenBadgeTooltip: L,
            shouldGlowTenureBadge: H,
            popoutAnchorRef: V,
            containerRef: $,
            isTargetUserBot: F,
        } = e,
        z = (0, B.A)((e) => e.isOpen),
        K = l.useRef(null),
        W = (0, E.A)(K, $),
        Y = l.useRef(null),
        q = l.useRef(null),
        Z = l.useRef(null),
        J = l.useRef(null),
        ee = l.useRef(!1),
        { analyticsLocations: en } = (0, D.Ay)(S.A.BADGE),
        { context: ea, trackUserProfileAction: el } = (0, X.NJ)(),
        er = f.default.getCurrentUser(),
        ei = (0, e1.CC)(er?.premiumType, eD.PremiumTypes.TIER_2),
        es = (0, P.J)({ location: "UserProfileBadgeList" }),
        eo = (0, o.d)({ location: "UserProfileBadgeList" }),
        ec = (function (e) {
            let { location: t } = e;
            return O.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        { enabled: ef } = e_.J.useConfig({ location: "UserProfileBadgeList" }),
        em = ef && !es && c.some((e) => (0, U.w0)(e.id) === h.$.GIFTING),
        ep =
            ((t = (0, ex.b9)(`UserProfileBadgeList${em ? "" : "-DISABLED"}`) && em),
            (n = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.id)),
            (r = (0, i.bG)([s.Ay], () => (null != n ? s.Ay.getBadgeById(h.$.GIFTING, n) : void 0), [n])),
            l.useEffect(() => {
                if (!t || null == n) return;
                if (null != r) return void eR.delete(n);
                let e = eR.get(n) ?? { backoff: new eA.A(eN.A.Millis.MINUTE, ev, !0), gateUntil: 0 };
                Date.now() < e.gateUntil ||
                    ((e.gateUntil = Date.now() + e.backoff.fail()), eR.set(n, e), (0, M.o0)(h.$.GIFTING));
            }, [t, n, r]),
            l.useMemo(() => {
                if (!t || null == r) return eI;
                let e = new Map();
                for (let t of r.tiers) null != t.simple_icon_url && e.set(t.simple_icon_url, t);
                return { badgeName: r.name, tierBySimpleIconUrl: e };
            }, [t, r]));
    l.useEffect(() => {
        (es || ec) && w?.userId != null && !s.Ay.hasCatalogFor(w.userId) && (0, M.RS)(w.userId);
    }, [es, ec, w?.userId]);
    let eh = w?.userId,
        ej = (0, i.bG)(
            [s.Ay],
            () => {
                if (!ec || null == eh) return null;
                let e = {};
                for (let t of c) {
                    let n = (0, U.w0)(t.id);
                    if (null == n) continue;
                    let a = s.Ay.getBadgeById(n, eh)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [ec, eh, c],
        ),
        ey = w?.userId === er?.id,
        eT = ey && es && eo && null != V,
        eC = !eT && es,
        eS = eT && 0 === c.length,
        eM = er?.id,
        eO = (0, i.bG)(
            [s.Ay],
            () => null != eM && (!s.Ay.hasCatalogFor(eM) || s.Ay.getBadges(eM).some((e) => e.owned)),
            [eM],
        ),
        eB = eT && z;
    function eG(e) {
        if ((B.A.setState({ isOpen: e }), !e)) {
            if (ee.current) {
                ee.current = !1;
                return;
            }
            requestAnimationFrame(() => J.current?.focus());
        }
    }
    let ew = (0, e7.AP)(er?.id ?? null),
        eW = (0, m.A)(ew).some((e) => e.id === eK.A.ORB_PROFILE_BADGE),
        eY = eT && !eS && 0 === u,
        eq = null;
    u > 0 &&
        ((eq = (0, a.jsx)(b.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: e6.AX,
            "aria-hidden": !0,
            children: Q.intl.format(Q.t.n7CiSK, { count: u }),
        })),
        (d = Q.intl.formatToPlainString(Q.t.eIHfGZ, { overflow_count: u })));
    let eZ = (0, a.jsxs)("div", {
        ref: W,
        className: p()(e6.kL, eo && !0 !== F && e6.Yq, eT && e6.Tx, eY && e6.gK, g),
        ...(eS ? null : { "aria-label": Q.intl.string(Q.t.VWV0y5), role: "group" }),
        ...(eT && !eS ? { onClick: () => eG(!eB) } : null),
        children: [
            eS &&
                (0, a.jsx)(x.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: J,
                        type: "button",
                        className: e6.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eB,
                        onClick: (e) => {
                            (e.stopPropagation(), eG(!eB));
                        },
                        children: [
                            (0, a.jsx)(_.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(b.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            c.map((e, t) => {
                let n = e.id === eK.A.ORB_PROFILE_BADGE,
                    l = (0, e8.e0)(e.id),
                    r = null != l || e.id === e9.K,
                    i = "april_fools_2026" === e.id,
                    s = void 0 !== l && e.id !== e9.K,
                    o = ej?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eP.L7)(e.icon),
                        className: p()(e6.qS, null != o && e6.Do, G),
                    }),
                    c = null != L && L(e.id),
                    u = {
                        onClick: (a) => {
                            if (
                                (el({ action: "PRESS_BADGE" }),
                                (0, e2.vP)({
                                    badgeId: (0, U.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: en,
                                    ...ea,
                                }),
                                eT)
                            )
                                return void a.preventDefault();
                            let l = w?.userId != null ? f.default.getUser(w.userId) : null;
                            if (es && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, et._)({
                                        initialBadgeId: (0, U.w0)(e.id),
                                        targetUserId: w?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, U.w0)(e.id) === h.$.GIFTING) {
                                (a.preventDefault(),
                                    k?.(),
                                    (0, eX.openUserSettings)(ez.X.GIFT_PANEL, { analyticsLocations: en }));
                                return;
                            }
                            if (n) {
                                ((0, eE.Cz)({
                                    tab: e3.G2.ORBS,
                                    analyticsLocations: en,
                                    analyticsSource: S.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    k?.(),
                                    (0, A.closeAllModals)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    e0.default.track(e4.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: ei,
                                        viewed_user_id: w?.userId,
                                    }),
                                    ei)
                                ) {
                                    (ey
                                        ? ((0, eF.pX)(e4.BVt.NITRO_HOME), (0, A.closeAllModals)())
                                        : (0, eL.D)({ analyticsLocations: en, displayProfile: w }),
                                        k?.());
                                    return;
                                }
                                if (ey) {
                                    let t = null != e.link ? (0, y.default)(e.link, { analyticsLocations: en }) : null;
                                    if (null == t) return;
                                    return (k?.(), (0, A.closeAllModals)(), t(a));
                                }
                                return ((0, eL.D)({ analyticsLocations: en, displayProfile: w }), void k?.());
                            }
                            let i = null != e.link ? (0, y.default)(e.link, { analyticsLocations: en }) : null;
                            if (null != i) return (k?.(), (0, A.closeAllModals)(), i(a));
                        },
                        onMouseEnter: () => {
                            (e.id === m.h &&
                                ((0, eV.E5)(eV.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, T.r)({
                                          type: C.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eH.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : e0.default.track(e4.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, e$.fF)(eH.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                el({ action: "HOVER_BADGE" }),
                                (0, e2.vP)({
                                    badgeId: (0, U.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: en,
                                    ...ea,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(eT ? { "aria-haspopup": "dialog", "aria-expanded": eB } : null),
                        style: { filter: H && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (es)
                    return (0, a.jsx)(
                        eg,
                        {
                            shouldShow: !eB,
                            legacyBadgeId: e.id,
                            userId: w?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eP.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                let g = null != e.simple_icon_url ? ep.tierBySimpleIconUrl.get(e.simple_icon_url) : void 0;
                if (g?.complex_icon_static_url != null && null != ep.badgeName)
                    return (0, a.jsx)(
                        eu.K,
                        {
                            eyebrow: ep.badgeName,
                            title: g.name ?? e.description,
                            badgeImage: g.complex_icon_static_url,
                            badgeName: e.description,
                            shouldShow: !eB,
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: Y, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eU, {
                                badgeId: e.id,
                                targetElementRef: Y,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    e0.default.track(e4.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (ey ? "self" : "other"),
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
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: q, children: d });
                    return (0, a.jsx)(
                        eQ,
                        {
                            targetElementRef: q,
                            delay: eP.In,
                            showSubtext: !eW && !e.isPreviewMode,
                            forceOpen: c,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: Z, children: d });
                    return (0, a.jsx)(
                        eb,
                        {
                            targetElementRef: Z,
                            delay: eP.In,
                            forceOpen: c,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let E = (0, a.jsx)(N.Anchor, { ...u, children: d }),
                    b = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== e9.K
                            ? (0, a.jsx)(ek, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e9.K ? l : void 0 });
                return (0, a.jsx)(
                    v.m,
                    { __unsupportedReactNodeAsText: b, forceOpen: c, delay: eP.In, ariaHidden: !0, children: E },
                    `${e.id}-${t}`,
                );
            }),
            u > 0 &&
                (eC
                    ? (0, a.jsx)(x.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: p()(e6.$O, e6.lv),
                              "aria-label": d,
                              onClick: function () {
                                  let e = null != eh ? f.default.getUser(eh) : null;
                                  (0, et._)({ targetUserId: eh, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: eq,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: e6.$O, children: [(0, a.jsx)(R.A, { children: d }), eq] })),
            eT &&
                !eS &&
                (0, a.jsx)(v.m, {
                    text: Q.intl.string(Q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: J,
                    children: (0, a.jsx)(x.vN, {
                        children: (0, a.jsx)("button", {
                            ref: J,
                            type: "button",
                            className: p()(e6.r9, u > 0 ? e6.v_ : e6.Y5),
                            "aria-label": Q.intl.string(Q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eB,
                            onClick: (e) => {
                                (e.stopPropagation(), eG(!eB));
                            },
                            children: (0, a.jsx)(I.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e6.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return eT
        ? (0, a.jsx)(j.Y, {
              targetElementRef: eS && !eO ? K : V,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${c.length}`,
              scrollBehavior: "close",
              shouldShow: eB,
              onRequestClose: (e) => {
                  let t = e?.target;
                  K.current?.contains(t) === !0 || (t?.closest(`[${e5.m}]`) == null && eG(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(ed, { onClose: t, returnFocusRef: J, skipReturnFocusRef: ee });
              },
              children: () => eZ,
          })
        : eZ;
}
var tt = n(996988);
let tn = {
    [tt.d.POPOUT]: 12,
    [tt.d.MODAL]: 26,
    [tt.d.SIDEBAR]: 13,
    [tt.d.VIDEO_TILE_BACKGROUND]: 12,
    [tt.d.EMBED]: 12,
};
function ta(e) {
    let t,
        {
            displayProfile: n,
            themeType: g,
            isRedesignEnabled: p,
            pendingLegacyUsernameDisabled: E,
            pendingBadges: h,
            showPendingBadgeEdits: b = !1,
            onClose: x,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: N,
            containerRef: v,
        } = e,
        R = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        I = n?.userId,
        j = (0, i.bG)([f.default], () => null != I && f.default.getUser(I)?.bot === !0, [I]),
        y = (0, m.A)(n, E),
        { pendingBadgeDisplayOrder: T, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        S = (0, i.yK)([s.Ay], () => (b && null != I && s.Ay.hasCatalogFor(I) ? s.Ay.getBadges(I) : []), [b, I]),
        D = l.useMemo(() => {
            let e = y;
            if (null != h) {
                let t = new Set(y.map((e) => e.id));
                e = [...y, ...h.filter((e) => !t.has(e.id))];
            }
            return b ? (0, c.Rr)(e, S, { pendingBadgeDisplayOrder: T, pendingBadgeHiddenBadges: C }) : e;
        }, [y, h, b, S, T, C]);
    if (0 === D.length && !b) return null;
    let M = R && !j,
        P = M ? Math.max(D.length - d.k9, 0) : 0;
    return (
        (t = M
            ? [D.slice(0, d.k9)]
            : g === tt.d.MODAL_V2
              ? [D]
              : (0, r.chunk)(D, !0 === p && g === tt.d.SIDEBAR ? tn[tt.d.POPOUT] : tn[g])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    te,
                    {
                        badges: e,
                        overflowCount: P,
                        displayProfile: n,
                        onClose: x,
                        shouldOpenBadgeTooltip: _,
                        shouldGlowTenureBadge: A,
                        isTargetUserBot: j,
                        popoutAnchorRef: N,
                        containerRef: 0 === t ? v : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
