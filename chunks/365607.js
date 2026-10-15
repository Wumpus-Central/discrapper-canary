n.d(t, { A: () => tn });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(17928),
    i = n(982240),
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
    R = n(866665),
    v = n(140735),
    I = n(22231),
    j = n(922016),
    T = n(983555),
    y = n(274670),
    C = n(144779),
    S = n(793574),
    D = n(688810),
    M = n(682618),
    P = n(609782);
let O = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var U = n(248284),
    B = n(675816),
    G = n(425763),
    w = n(952270),
    k = n(365199),
    L = n(315710),
    H = n(297264),
    V = n(821609),
    $ = n(442433),
    F = n(450232),
    z = n(183555),
    X = n(451395),
    K = n(327791),
    W = n(315629),
    Y = n(403581),
    q = n(87719),
    Z = n(105292),
    Q = n(207711);
function J(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(W.h, {
        color: "nitro-pink",
        className: Q.U,
        children: [
            (0, a.jsx)(b.E, {
                variant: "text-xs/medium",
                color: "text-default",
                className: Q.t,
                children: Z.intl.string(Z.t.cKIIzk),
            }),
            (0, a.jsx)(V.$, {
                variant: "expressive",
                size: "sm",
                icon: Y.t,
                text: Z.intl.string(Z.t.pj0XBN),
                onClick: function () {
                    (t(), (0, q.e)());
                },
            }),
        ],
    });
}
var ee = n(470739),
    et = n(577931),
    en = n(494881);
let ea = "PROFILE_BADGES",
    el = "BADGE";
function er(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, G.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(X.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: ea,
        itemType: el,
        "aria-label": Z.intl.formatToPlainString(Z.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: en.oE,
        draggingClassName: en.Id,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        children: [
            (0, a.jsx)(es, { ...r }),
            (0, a.jsx)(X.jV, {
                buttonRef: d,
                className: en.BU,
                "aria-label": Z.intl.formatToPlainString(Z.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function es(e) {
    let { badge: t, index: r, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = l.useState(!1);
    function u(e) {
        (c(!0),
            (0, $.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("434691"), n.e("918024"), n.e("787847")]).then(
                        n.bind(n, 842810),
                    );
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: i });
                },
                { onClose: () => c(!1) },
            ));
    }
    let f = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: p()(en.fw, d && en.HV),
        onContextMenu: u,
        children: [
            (0, a.jsx)("div", {
                className: en.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: p()(en.pC, f && en.jx),
                    }),
            }),
            f &&
                (0, a.jsx)("div", {
                    className: en.Gf,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(w.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(x.vN, {
                children: (0, a.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: en.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": Z.intl.formatToPlainString(f ? Z.t["3Uwmdt"] : Z.t.Ci7gvp, {
                        badgeName: t.name,
                        position: r + 1,
                    }),
                    onClick: u,
                    children: (0, a.jsx)(k.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function ei() {
    let e = (0, G.VU)(),
        { badge: t, sourceClientOffset: n } = (0, B.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === el ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let l = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: en.dk,
        style: { transform: `translate3d(${n.x}px, ${l}px, 0)` },
        children: (0, a.jsx)("div", {
            className: en.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: en.pC,
                }),
        }),
    });
}
function eo(e) {
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: r } = e,
        o = l.useRef(null),
        d = l.useId();
    (l.useLayoutEffect(() => {
        o.current?.focus();
    }, []),
        (0, L.tj)(o, { returnRef: n }));
    let { analyticsLocations: u } = (0, D.Ay)(S.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: m } = (0, z.NJ)();
    l.useEffect(() => {
        m({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: u });
    }, []);
    let { fixedBadges: g, reorderableBadges: E, hiddenBadges: h } = (0, et.A)(),
        x = (0, K.A)(),
        _ = (0, G.VU)(),
        A =
            (0, B.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === el;
            }) && !_,
        N = l.useMemo(() => E.map((e) => e.badge_id), [E]),
        R = l.useRef(new Map());
    function v(e) {
        return (t) => {
            null == t ? R.current.delete(e) : R.current.set(e, t);
        };
    }
    function I(e) {
        requestAnimationFrame(() => R.current.get(e)?.focus());
    }
    let j = g.length + E.length + h.length,
        T = (0, s.bG)([i.Ay, f.default], () => {
            let e = f.default.getCurrentUser()?.id;
            return null != e && i.Ay.hasCatalogFor(e);
        });
    function y(e, t) {
        (0, c.hB)((0, c.i1)(N, e, t));
    }
    let C = (0, X.w9)({ listType: ea, itemType: el, onFallbackDrop: (e) => y(e.index, N.length - 1) }),
        M = (0, X.w9)({ listType: ea, itemType: el });
    l.useLayoutEffect(() => {
        if (A)
            return (
                M(document.body),
                () => {
                    M(null);
                }
            );
    }, [M, A]);
    let P = j > 0,
        O = T && !P,
        U = !x && !O,
        w = x ? Z.t.VHaYM7 : Z.t["7Qs/YX"];
    function k() {
        (null != r && (r.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: p()(en.SW, O && en.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, a.jsxs)("div", {
                className: p()(en.Qs, U && en.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: en.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.$,
                                children: [
                                    x && (0, a.jsx)(F.A, { size: "xs", className: en.oU }),
                                    (0, a.jsx)(H.D, {
                                        id: d,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !O &&
                                (0, a.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: Z.intl.string(w),
                                }),
                        ],
                    }),
                    U && (0, a.jsx)(J, { onClose: t }),
                    O &&
                        (0, a.jsx)(b.E, {
                            className: en.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Z.intl.string(Z.t.VT02mI),
                        }),
                    P &&
                        (0, a.jsxs)("div", {
                            className: p()(en.yq, A && en.T0),
                            role: "group",
                            "aria-label": Z.intl.string(Z.t.VWV0y5),
                            children: [
                                x &&
                                    (0, a.jsx)("div", {
                                        ref: (e) => {
                                            C(e);
                                        },
                                        className: en.u$,
                                        "aria-hidden": !0,
                                    }),
                                g.map((e, t) =>
                                    (0, a.jsx)(
                                        es,
                                        { badge: e, index: t, onClose: k, onAction: I, controlRef: v(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                E.map((e, t) =>
                                    x
                                        ? (0, a.jsx)(
                                              er,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: k,
                                                  onAction: I,
                                                  controlRef: v(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: y,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: k,
                                                  onAction: I,
                                                  controlRef: v(e.badge_id),
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
                                            onClose: k,
                                            onAction: I,
                                            controlRef: v(e.badge_id),
                                        },
                                        e.badge_id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(ei, {}),
            (0, a.jsx)(V.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: Z.intl.string(Z.t.fN2how),
                onClick: function () {
                    (m({ action: "PRESS_VIEW_BADGES", analyticsLocations: u }),
                        k(),
                        (0, ee.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ed = n(775602),
    ec = n(461536),
    eu = n(321191),
    ef = n(351906);
function em(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: f, shouldShow: m } = e,
        g = (0, P.w0)(d),
        {
            badgeData: p,
            currentTier: E,
            obtainedAt: b,
        } = (0, s.cf)(
            [i.Ay],
            () =>
                null == g || null == c
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: i.Ay.getBadgeById(g, c),
                          currentTier: i.Ay.getCurrentTier(g, c),
                          obtainedAt: i.Ay.getObtainedAt(g, c),
                      },
            [g, c],
        ),
        x = (0, s.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, M.RS)(c);
        }, [c]),
        A = p?.badge_id === h.$.PREMIUM_TENURE,
        N = g === h.$.LEGACY_USERNAME,
        R = E?.name,
        v = A ? Z.intl.string(Z.t.Ipxkog) : (p?.name ?? u);
    A ? (r = n = null != R ? `${v} ${R}` : v) : null != R ? ((t = v), (n = R), (r = `${v} ${R}`)) : ((n = v), (r = v));
    let I = x ? void 0 : p?.complex_icon_animated_url,
        j = I ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? f,
        T = null != I && j === I;
    if (N) return (0, a.jsx)(eg, { userId: c, title: n, badgeImage: j, shouldShow: m, children: o });
    let y = p?.info_label ?? (null != b ? Z.intl.formatToPlainString(Z.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, a.jsx)(ec.A, {
        title: n,
        eyebrow: t,
        body: y,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: T,
        shouldShow: m,
        onShow: _,
        children: o,
    });
}
function eg(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [eu.A, ef.A],
            () =>
                ef.A.hidePersonalInformation
                    ? Z.intl.string(Z.t.Br1ls3)
                    : null != n
                      ? (eu.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ec.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var ep = n(815996),
    eE = n(683063);
function eh(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(eE.u, {
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
var eb = n(859492),
    ex = n(998370),
    e_ = n(158390),
    eA = n(927813);
let eN = 5 * eA.A.Millis.MINUTE,
    eR = new Map(),
    ev = { badgeName: void 0, tierBySimpleIconUrl: new Map() };
var eI = n(116833),
    ej = n(704640),
    eT = n(425713),
    ey = n(642481),
    eC = n(720879),
    eS = n(202541),
    eD = n(49999),
    eM = n(518477);
let eP = function (e) {
    let {
            badgeId: t = eS.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eS.VD[t].nameUnformattedNitro,
        f = Z.intl.string(u).toLocaleUpperCase(),
        m = eS.VD[t].rarity,
        g = (0, ej.A)(t),
        p = (0, eT.I)(t).standard;
    (0, l.useEffect)(() => {
        (eI.m[eI.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, l.useCallback)(() => {
        n?.(eD.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(ec.A, {
            targetElementRef: s,
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
            component: eI.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: f, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eC.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: eM.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(ey.A, {
                      targetElementRef: s,
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
let eU = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eO.R,
        children: [t, (0, a.jsx)("div", { className: eO.A, children: n }), l],
    });
};
var eB = n(224016),
    eG = n(747278);
let ew = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, eT.I)(n.id).standard;
    return (0, a.jsxs)(eU, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eB.A, { width: 56, className: eG.R }),
        children: [
            (0, a.jsx)(H.D, { variant: "heading-xl/extrabold", children: Z.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(b.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eG.K,
                children: t.description,
            }),
        ],
    });
};
var ek = n(30084),
    eL = n(738822),
    eH = n(104886),
    eV = n(590202),
    e$ = n(976860),
    eF = n(780964),
    ez = n(766075),
    eX = n(305003),
    eK = n(273875),
    eW = n(798618),
    eY = n(752079),
    eq = n(370277);
function eZ(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
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
        i && !o && f();
    }, [i, o, f]);
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
            (0, a.jsxs)(eK.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eQ, { showSubtext: s }), (0, a.jsx)(eW.F, {})],
            }),
        ],
    });
}
function eQ(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eU, {
        assetComponent: (0, a.jsx)(eY.A, { className: eq.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(H.D, {
            variant: "heading-md/extrabold",
            className: eq.RK,
            children: Z.intl.string(Z.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(H.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eq.Qn,
                children: Z.intl.string(Z.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", className: eq.lV, children: Z.intl.string(Z.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eJ = n(174459),
    e0 = n(474090),
    e1 = n(439174),
    e8 = n(47675),
    e2 = n(999291),
    e7 = n(874402),
    e5 = n(652215),
    e9 = n(758836),
    e4 = n(854232),
    e3 = n(816645);
function e6(e) {
    var t;
    let n,
        r,
        d,
        {
            badges: c,
            overflowCount: u,
            className: g,
            badgeClassName: B,
            displayProfile: G,
            onClose: w,
            shouldOpenBadgeTooltip: k,
            shouldGlowTenureBadge: L,
            popoutAnchorRef: H,
            containerRef: V,
            isTargetUserBot: $,
        } = e,
        F = (0, U.A)((e) => e.isOpen),
        X = l.useRef(null),
        K = (0, E.A)(X, V),
        W = l.useRef(null),
        Y = l.useRef(null),
        q = l.useRef(null),
        Q = l.useRef(null),
        J = l.useRef(!1),
        { analyticsLocations: et } = (0, D.Ay)(S.A.BADGE),
        { context: en, trackUserProfileAction: ea } = (0, z.NJ)(),
        el = f.default.getCurrentUser(),
        er = (0, e0.CC)(el?.premiumType, eS.PremiumTypes.TIER_2),
        es = (0, o.d)({ location: "UserProfileBadgeList" }),
        ei = (function (e) {
            let { location: t } = e;
            return O.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        { enabled: ed } = ex.J.useConfig({ location: "UserProfileBadgeList" }),
        eu = ed && !es && c.some((e) => (0, P.w0)(e.id) === h.$.GIFTING),
        ef =
            ((t = (0, eb.b9)(`UserProfileBadgeList${eu ? "" : "-DISABLED"}`) && eu),
            (n = (0, s.bG)([f.default], () => f.default.getCurrentUser()?.id)),
            (r = (0, s.bG)([i.Ay], () => (null != n ? i.Ay.getBadgeById(h.$.GIFTING, n) : void 0), [n])),
            l.useEffect(() => {
                if (!t || null == n) return;
                if (null != r) return void eR.delete(n);
                let e = eR.get(n) ?? { backoff: new e_.A(eA.A.Millis.MINUTE, eN, !0), gateUntil: 0 };
                Date.now() < e.gateUntil ||
                    ((e.gateUntil = Date.now() + e.backoff.fail()), eR.set(n, e), (0, M.o0)(h.$.GIFTING));
            }, [t, n, r]),
            l.useMemo(() => {
                if (!t || null == r) return ev;
                let e = new Map();
                for (let t of r.tiers) null != t.simple_icon_url && e.set(t.simple_icon_url, t);
                return { badgeName: r.name, tierBySimpleIconUrl: e };
            }, [t, r]));
    l.useEffect(() => {
        (es || ei) && G?.userId != null && !i.Ay.hasCatalogFor(G.userId) && (0, M.RS)(G.userId);
    }, [es, ei, G?.userId]);
    let eg = G?.userId,
        eE = (0, s.bG)(
            [i.Ay],
            () => {
                if (!ei || null == eg) return null;
                let e = {};
                for (let t of c) {
                    let n = (0, P.w0)(t.id);
                    if (null == n) continue;
                    let a = i.Ay.getBadgeById(n, eg)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [ei, eg, c],
        ),
        eI = G?.userId === el?.id,
        ej = eI && es && null != H,
        eT = !ej && es,
        ey = ej && 0 === c.length,
        eC = el?.id,
        eD = (0, s.bG)(
            [i.Ay],
            () => null != eC && (!i.Ay.hasCatalogFor(eC) || i.Ay.getBadges(eC).some((e) => e.owned)),
            [eC],
        ),
        eO = ej && F;
    function eU(e) {
        if ((U.A.setState({ isOpen: e }), !e)) {
            if (J.current) {
                J.current = !1;
                return;
            }
            requestAnimationFrame(() => Q.current?.focus());
        }
    }
    let eB = (0, e2.AP)(el?.id ?? null),
        eG = (0, m.A)(eB).some((e) => e.id === eX.A.ORB_PROFILE_BADGE),
        eK = ej && !ey && 0 === u,
        eW = null;
    u > 0 &&
        ((eW = (0, a.jsx)(b.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: e3.AX,
            "aria-hidden": !0,
            children: Z.intl.format(Z.t.n7CiSK, { count: u }),
        })),
        (d = Z.intl.formatToPlainString(Z.t.eIHfGZ, { overflow_count: u })));
    let eY = (0, a.jsxs)("div", {
        ref: K,
        className: p()(e3.kL, es && !0 !== $ && e3.Yq, ej && e3.Tx, eK && e3.gK, g),
        ...(ey ? null : { "aria-label": Z.intl.string(Z.t.VWV0y5), role: "group" }),
        ...(ej && !ey ? { onClick: () => eU(!eO) } : null),
        children: [
            ey &&
                (0, a.jsx)(x.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: Q,
                        type: "button",
                        className: e3.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eO,
                        onClick: (e) => {
                            (e.stopPropagation(), eU(!eO));
                        },
                        children: [
                            (0, a.jsx)(_.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(b.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Z.intl.string(Z.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            c.map((e, t) => {
                let n = e.id === eX.A.ORB_PROFILE_BADGE,
                    l = (0, e1.e0)(e.id),
                    r = null != l || e.id === e4.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== e4.K,
                    o = eE?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eM.L7)(e.icon),
                        className: p()(e3.qS, null != o && e3.Do, B),
                    }),
                    c = null != k && k(e.id),
                    u = {
                        onClick: (a) => {
                            if (
                                (ea({ action: "PRESS_BADGE" }),
                                (0, e8.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: et,
                                    ...en,
                                }),
                                ej)
                            )
                                return void a.preventDefault();
                            let l = G?.userId != null ? f.default.getUser(G.userId) : null;
                            if (es && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, ee.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, P.w0)(e.id),
                                        targetUserId: G?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, P.w0)(e.id) === h.$.GIFTING) {
                                (a.preventDefault(),
                                    w?.(),
                                    (0, ez.openUserSettings)(eF.X.GIFT_PANEL, { analyticsLocations: et }));
                                return;
                            }
                            if (n) {
                                ((0, ep.Cz)({
                                    tab: e9.G2.ORBS,
                                    analyticsLocations: et,
                                    analyticsSource: S.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    w?.(),
                                    (0, A.closeAllModals)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eJ.default.track(e5.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: er,
                                        viewed_user_id: G?.userId,
                                    }),
                                    er)
                                ) {
                                    (eI
                                        ? ((0, e$.pX)(e5.BVt.NITRO_HOME), (0, A.closeAllModals)())
                                        : (0, ek.D)({ analyticsLocations: et, displayProfile: G }),
                                        w?.());
                                    return;
                                }
                                if (eI) {
                                    let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: et }) : null;
                                    if (null == t) return;
                                    return (w?.(), (0, A.closeAllModals)(), t(a));
                                }
                                return ((0, ek.D)({ analyticsLocations: et, displayProfile: G }), void w?.());
                            }
                            let s = null != e.link ? (0, T.default)(e.link, { analyticsLocations: et }) : null;
                            if (null != s) return (w?.(), (0, A.closeAllModals)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === m.h &&
                                ((0, eH.E5)(eH.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, y.r)({
                                          type: C.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eL.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eJ.default.track(e5.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eV.fF)(eL.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                ea({ action: "HOVER_BADGE" }),
                                (0, e8.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: et,
                                    ...en,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ej ? { "aria-haspopup": "dialog", "aria-expanded": eO } : null),
                        style: { filter: L && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (es)
                    return (0, a.jsx)(
                        em,
                        {
                            shouldShow: !eO,
                            legacyBadgeId: e.id,
                            userId: G?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eM.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                let g = null != e.simple_icon_url ? ef.tierBySimpleIconUrl.get(e.simple_icon_url) : void 0;
                if (g?.complex_icon_static_url != null && null != ef.badgeName)
                    return (0, a.jsx)(
                        ec.K,
                        {
                            eyebrow: ef.badgeName,
                            title: g.name ?? e.description,
                            badgeImage: g.complex_icon_static_url,
                            badgeName: e.description,
                            shouldShow: !eO,
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: W, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eP, {
                                badgeId: e.id,
                                targetElementRef: W,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eJ.default.track(e5.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (eI ? "self" : "other"),
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
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: Y, children: d });
                    return (0, a.jsx)(
                        eZ,
                        {
                            targetElementRef: Y,
                            delay: eM.In,
                            showSubtext: !eG && !e.isPreviewMode,
                            forceOpen: c,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: q, children: d });
                    return (0, a.jsx)(
                        eh,
                        {
                            targetElementRef: q,
                            delay: eM.In,
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
                        return void 0 !== n && t.id !== e4.K
                            ? (0, a.jsx)(ew, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e4.K ? l : void 0 });
                return (0, a.jsx)(
                    R.m,
                    { __unsupportedReactNodeAsText: b, forceOpen: c, delay: eM.In, ariaHidden: !0, children: E },
                    `${e.id}-${t}`,
                );
            }),
            u > 0 &&
                (eT
                    ? (0, a.jsx)(x.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: p()(e3.$O, e3.lv),
                              "aria-label": d,
                              onClick: function () {
                                  let e = null != eg ? f.default.getUser(eg) : null;
                                  (0, ee.openBadgeDirectoryModal)({
                                      targetUserId: eg,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: eW,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: e3.$O, children: [(0, a.jsx)(v.A, { children: d }), eW] })),
            ej &&
                !ey &&
                (0, a.jsx)(R.m, {
                    text: Z.intl.string(Z.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: Q,
                    children: (0, a.jsx)(x.vN, {
                        children: (0, a.jsx)("button", {
                            ref: Q,
                            type: "button",
                            className: p()(e3.r9, u > 0 ? e3.v_ : e3.Y5),
                            "aria-label": Z.intl.string(Z.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eO,
                            onClick: (e) => {
                                (e.stopPropagation(), eU(!eO));
                            },
                            children: (0, a.jsx)(I.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e3.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return ej
        ? (0, a.jsx)(j.Y, {
              targetElementRef: ey && !eD ? X : H,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${c.length}`,
              scrollBehavior: "close",
              shouldShow: eO,
              onRequestClose: (e) => {
                  let t = e?.target;
                  X.current?.contains(t) === !0 || (t?.closest(`[${e7.m}]`) == null && eU(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(eo, { onClose: t, returnFocusRef: Q, skipReturnFocusRef: J });
              },
              children: () => eY,
          })
        : eY;
}
var te = n(996988);
let tt = {
    [te.d.POPOUT]: 12,
    [te.d.MODAL]: 26,
    [te.d.SIDEBAR]: 13,
    [te.d.VIDEO_TILE_BACKGROUND]: 12,
    [te.d.EMBED]: 12,
};
function tn(e) {
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
            containerRef: R,
        } = e,
        v = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        I = n?.userId,
        j = (0, s.bG)([f.default], () => null != I && f.default.getUser(I)?.bot === !0, [I]),
        T = (0, m.A)(n, E),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        S = (0, s.yK)([i.Ay], () => (b && null != I && i.Ay.hasCatalogFor(I) ? i.Ay.getBadges(I) : []), [b, I]),
        D = l.useMemo(() => {
            let e = T;
            if (null != h) {
                let t = new Set(T.map((e) => e.id));
                e = [...T, ...h.filter((e) => !t.has(e.id))];
            }
            return b ? (0, c.Rr)(e, S, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C }) : e;
        }, [T, h, b, S, y, C]);
    if (0 === D.length && !b) return null;
    let M = v && !j,
        P = M ? Math.max(D.length - d.k9, 0) : 0;
    return (
        (t = M
            ? [D.slice(0, d.k9)]
            : g === te.d.MODAL_V2
              ? [D]
              : (0, r.chunk)(D, !0 === p && g === te.d.SIDEBAR ? tt[te.d.POPOUT] : tt[g])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e6,
                    {
                        badges: e,
                        overflowCount: P,
                        displayProfile: n,
                        onClose: x,
                        shouldOpenBadgeTooltip: _,
                        shouldGlowTenureBadge: A,
                        isTargetUserBot: j,
                        popoutAnchorRef: N,
                        containerRef: 0 === t ? R : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
