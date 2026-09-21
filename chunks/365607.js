n.d(t, { A: () => tn });
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
    T = n(983555),
    y = n(274670),
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
let el = "BADGE";
function er(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: i, index: s } = r,
        o = (0, w.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(K.mG, {
        index: t,
        itemId: String(i.badge_id),
        itemPreviewProps: { badge: i },
        listType: "PROFILE_BADGES",
        itemType: el,
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
            (0, a.jsx)(ei, { ...r }),
            (0, a.jsx)(K.jV, {
                buttonRef: d,
                className: ea.BU,
                "aria-label": Q.intl.formatToPlainString(Q.t["9xRVLy"], { badgeName: i.name, position: s + 1 }),
            }),
        ],
    });
}
function ei(e) {
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
function es() {
    let e = (0, w.VU)(),
        { badge: t, sourceClientOffset: n } = (0, G.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === el ? t.itemPreviewProps?.badge : void 0,
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
function eo(e) {
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
        _ = l.useMemo(() => E.map((e) => e.badge_id), [E]),
        A = l.useRef(new Map());
    function N(e) {
        return (t) => {
            null == t ? A.current.delete(e) : A.current.set(e, t);
        };
    }
    function v(e) {
        requestAnimationFrame(() => A.current.get(e)?.focus());
    }
    function R(e) {
        (v(e.badge_id),
            (0, c.RC)({
                badgeId: e.badge_id,
                hidden: !1,
                reorderableBadgeIds: _,
                hiddenBadgeIds: h.map((e) => {
                    let { badge_id: t } = e;
                    return t;
                }),
                canReorder: x,
            }));
    }
    let I = g.length + E.length + h.length,
        j = (0, i.bG)([s.Ay, f.default], () => {
            let e = f.default.getCurrentUser()?.id;
            return null != e && s.Ay.hasCatalogFor(e);
        });
    function T(e, t) {
        (0, c.hB)((0, c.i1)(_, e, t));
    }
    let y = I > 0,
        C = j && !y,
        M = !x && !C,
        P = x ? Q.t.VHaYM7 : Q.t["7Qs/YX"];
    function U() {
        (null != r && (r.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: p()(ea.SW, C && ea.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, a.jsxs)("div", {
                className: p()(ea.Qs, M && ea.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: ea.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.$,
                                children: [
                                    (0, a.jsx)(z.A, { size: "xs", className: ea.oU }),
                                    (0, a.jsx)(V.D, {
                                        id: d,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: Q.intl.string(Q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !C &&
                                (0, a.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: Q.intl.string(P),
                                }),
                        ],
                    }),
                    M && (0, a.jsx)(ee, { onClose: t }),
                    C &&
                        (0, a.jsx)(b.E, {
                            className: ea.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Q.intl.string(Q.t.VT02mI),
                        }),
                    y &&
                        (0, a.jsxs)("div", {
                            className: ea.yq,
                            role: "group",
                            "aria-label": Q.intl.string(Q.t.VWV0y5),
                            children: [
                                g.map((e, t) =>
                                    (0, a.jsx)(
                                        ei,
                                        {
                                            badge: e,
                                            index: t,
                                            onClose: U,
                                            onAction: v,
                                            controlRef: N(e.badge_id),
                                            onUnhide: R,
                                        },
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
                                                  onClose: U,
                                                  onAction: v,
                                                  controlRef: N(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: T,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              ei,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: U,
                                                  onAction: v,
                                                  controlRef: N(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                h.map((e, t) =>
                                    (0, a.jsx)(
                                        ei,
                                        {
                                            badge: e,
                                            index: g.length + E.length + t,
                                            onClose: U,
                                            onAction: v,
                                            controlRef: N(e.badge_id),
                                            onUnhide: R,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(es, {}),
            (0, a.jsx)($.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: Q.intl.string(Q.t.fN2how),
                onClick: function () {
                    (m({ action: "PRESS_VIEW_BADGES", analyticsLocations: u }),
                        U(),
                        (0, et._)({ viewingCurrentUserBadges: !0 }));
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
        x = (0, i.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
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
        T = null != I && j === I;
    if (N) return (0, a.jsx)(eg, { userId: c, title: n, badgeImage: j, shouldShow: m, children: o });
    let y = p?.info_label ?? (null != b ? Q.intl.formatToPlainString(Q.t["0aEh2a"], { date: new Date(b) }) : void 0);
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
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: s } = e,
        o = (0, i.bG)(
            [eu.A, ef.A],
            () =>
                ef.A.hidePersonalInformation
                    ? Q.intl.string(Q.t.Br1ls3)
                    : null != n
                      ? (eu.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ec.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: s, children: t });
}
var ep = n(839534),
    eE = n(683063);
function eh(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: i } = e;
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
        children: i,
    });
}
var eb = n(38423),
    ex = n(998370),
    e_ = n(158390),
    eA = n(927813);
let eN = 5 * eA.A.Millis.MINUTE,
    ev = new Map(),
    eR = { badgeName: void 0, tierBySimpleIconUrl: new Map() };
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
            targetElementRef: i,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eS.VD[t].nameUnformattedNitro,
        f = Q.intl.string(u).toLocaleUpperCase(),
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
        })(s, o, d);
        return (0, a.jsx)(ec.A, {
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
            component: eI.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: f, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eC.A, {
              targetElementRef: i,
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
var eU = n(592265);
let eO = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eU.R,
        children: [t, (0, a.jsx)("div", { className: eU.A, children: n }), l],
    });
};
var eB = n(224016),
    eG = n(747278);
let ew = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, eT.I)(n.id).standard;
    return (0, a.jsxs)(eO, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eB.A, { width: 56, className: eG.R }),
        children: [
            (0, a.jsx)(V.D, { variant: "heading-xl/extrabold", children: Q.intl.string(n.nameUnformatted) }),
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
            (0, a.jsxs)(eK.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eQ, { showSubtext: i }), (0, a.jsx)(eW.F, {})],
            }),
        ],
    });
}
function eQ(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eO, {
        assetComponent: (0, a.jsx)(eY.A, { className: eq.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(V.D, {
            variant: "heading-md/extrabold",
            className: eq.RK,
            children: Q.intl.string(Q.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(V.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eq.Qn,
                children: Q.intl.string(Q.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", className: eq.lV, children: Q.intl.string(Q.t.MEV0GI) })
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
    e4 = n(758836),
    e3 = n(854232),
    e9 = n(816645);
function e6(e) {
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
        ei = (0, e0.CC)(er?.premiumType, eS.PremiumTypes.TIER_2),
        es = (0, P.J)({ location: "UserProfileBadgeList" }),
        ed = (0, o.d)({ location: "UserProfileBadgeList" }),
        eu = (function (e) {
            let { location: t } = e;
            return O.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        { enabled: ef } = ex.J.useConfig({ location: "UserProfileBadgeList" }),
        eg = ef && !es && c.some((e) => (0, U.w0)(e.id) === h.$.GIFTING),
        eE =
            ((t = (0, eb.b9)(`UserProfileBadgeList${eg ? "" : "-DISABLED"}`) && eg),
            (n = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.id)),
            (r = (0, i.bG)([s.Ay], () => (null != n ? s.Ay.getBadgeById(h.$.GIFTING, n) : void 0), [n])),
            l.useEffect(() => {
                if (!t || null == n) return;
                if (null != r) return void ev.delete(n);
                let e = ev.get(n) ?? { backoff: new e_.A(eA.A.Millis.MINUTE, eN, !0), gateUntil: 0 };
                Date.now() < e.gateUntil ||
                    ((e.gateUntil = Date.now() + e.backoff.fail()), ev.set(n, e), (0, M.o0)(h.$.GIFTING));
            }, [t, n, r]),
            l.useMemo(() => {
                if (!t || null == r) return eR;
                let e = new Map();
                for (let t of r.tiers) null != t.simple_icon_url && e.set(t.simple_icon_url, t);
                return { badgeName: r.name, tierBySimpleIconUrl: e };
            }, [t, r]));
    l.useEffect(() => {
        (es || eu) && w?.userId != null && !s.Ay.hasCatalogFor(w.userId) && (0, M.RS)(w.userId);
    }, [es, eu, w?.userId]);
    let eI = w?.userId,
        ej = (0, i.bG)(
            [s.Ay],
            () => {
                if (!eu || null == eI) return null;
                let e = {};
                for (let t of c) {
                    let n = (0, U.w0)(t.id);
                    if (null == n) continue;
                    let a = s.Ay.getBadgeById(n, eI)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [eu, eI, c],
        ),
        eT = w?.userId === er?.id,
        ey = eT && es && ed && null != V,
        eC = !ey && es,
        eD = ey && 0 === c.length,
        eU = er?.id,
        eO = (0, i.bG)(
            [s.Ay],
            () => null != eU && (!s.Ay.hasCatalogFor(eU) || s.Ay.getBadges(eU).some((e) => e.owned)),
            [eU],
        ),
        eB = ey && z;
    function eG(e) {
        if ((B.A.setState({ isOpen: e }), !e)) {
            if (ee.current) {
                ee.current = !1;
                return;
            }
            requestAnimationFrame(() => J.current?.focus());
        }
    }
    let eK = (0, e2.AP)(er?.id ?? null),
        eW = (0, m.A)(eK).some((e) => e.id === eX.A.ORB_PROFILE_BADGE),
        eY = ey && 0 === u ? c.length - 1 : -1,
        eq = null;
    u > 0 &&
        ((eq = (0, a.jsx)(b.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: e9.AX,
            "aria-hidden": !0,
            children: Q.intl.format(Q.t.n7CiSK, { count: u }),
        })),
        (d = Q.intl.formatToPlainString(Q.t.eIHfGZ, { overflow_count: u })));
    let eQ = (0, a.jsxs)("div", {
        ref: W,
        className: p()(e9.kL, ed && !0 !== F && e9.Yq, ey && e9.Tx, g),
        ...(eD ? null : { "aria-label": Q.intl.string(Q.t.VWV0y5), role: "group" }),
        ...(ey && !eD ? { onClick: () => eG(!eB) } : null),
        children: [
            eD &&
                (0, a.jsx)(x.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: J,
                        type: "button",
                        className: e9.p$,
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
                let n = e.id === eX.A.ORB_PROFILE_BADGE,
                    l = (0, e1.e0)(e.id),
                    r = null != l || e.id === e3.K,
                    i = "april_fools_2026" === e.id,
                    s = void 0 !== l && e.id !== e3.K,
                    o = ej?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eM.L7)(e.icon),
                        className: p()(e9.qS, null != o && e9.Do, t === eY && e9.el, G),
                    }),
                    c = null != L && L(e.id),
                    u = {
                        onClick: (a) => {
                            if (
                                (el({ action: "PRESS_BADGE" }),
                                (0, e8.vP)({
                                    badgeId: (0, U.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: en,
                                    ...ea,
                                }),
                                ey)
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
                                    (0, ez.openUserSettings)(eF.X.GIFT_PANEL, { analyticsLocations: en }));
                                return;
                            }
                            if (n) {
                                ((0, ep.Cz)({
                                    tab: e4.G2.ORBS,
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
                                    eJ.default.track(e5.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: ei,
                                        viewed_user_id: w?.userId,
                                    }),
                                    ei)
                                ) {
                                    (eT
                                        ? ((0, e$.pX)(e5.BVt.NITRO_HOME), (0, A.closeAllModals)())
                                        : (0, ek.D)({ analyticsLocations: en, displayProfile: w }),
                                        k?.());
                                    return;
                                }
                                if (eT) {
                                    let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: en }) : null;
                                    if (null == t) return;
                                    return (k?.(), (0, A.closeAllModals)(), t(a));
                                }
                                return ((0, ek.D)({ analyticsLocations: en, displayProfile: w }), void k?.());
                            }
                            let i = null != e.link ? (0, T.default)(e.link, { analyticsLocations: en }) : null;
                            if (null != i) return (k?.(), (0, A.closeAllModals)(), i(a));
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
                                el({ action: "HOVER_BADGE" }),
                                (0, e8.vP)({
                                    badgeId: (0, U.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: en,
                                    ...ea,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ey ? { "aria-haspopup": "dialog", "aria-expanded": eB } : null),
                        style: { filter: H && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (es)
                    return (0, a.jsx)(
                        em,
                        {
                            shouldShow: !eB,
                            legacyBadgeId: e.id,
                            userId: w?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eM.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                let g = null != e.simple_icon_url ? eE.tierBySimpleIconUrl.get(e.simple_icon_url) : void 0;
                if (g?.complex_icon_static_url != null && null != eE.badgeName)
                    return (0, a.jsx)(
                        ec.K,
                        {
                            eyebrow: eE.badgeName,
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
                            children: (0, a.jsx)(eP, {
                                badgeId: e.id,
                                targetElementRef: Y,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eJ.default.track(e5.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (eT ? "self" : "other"),
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
                        eZ,
                        {
                            targetElementRef: q,
                            delay: eM.In,
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
                        eh,
                        {
                            targetElementRef: Z,
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
                        return void 0 !== n && t.id !== e3.K
                            ? (0, a.jsx)(ew, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e3.K ? l : void 0 });
                return (0, a.jsx)(
                    v.m,
                    { __unsupportedReactNodeAsText: b, forceOpen: c, delay: eM.In, ariaHidden: !0, children: E },
                    `${e.id}-${t}`,
                );
            }),
            u > 0 &&
                (eC
                    ? (0, a.jsx)(x.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: p()(e9.$O, e9.lv),
                              "aria-label": d,
                              onClick: function () {
                                  let e = null != eI ? f.default.getUser(eI) : null;
                                  (0, et._)({ targetUserId: eI, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: eq,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: e9.$O, children: [(0, a.jsx)(R.A, { children: d }), eq] })),
            ey &&
                !eD &&
                (0, a.jsx)(v.m, {
                    text: Q.intl.string(Q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: J,
                    children: (0, a.jsx)(x.vN, {
                        children: (0, a.jsx)("button", {
                            ref: J,
                            type: "button",
                            className: e9.r9,
                            "aria-label": Q.intl.string(Q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eB,
                            onClick: (e) => {
                                (e.stopPropagation(), eG(!eB));
                            },
                            children: (0, a.jsx)(I.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e9.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return ey
        ? (0, a.jsx)(j.Y, {
              targetElementRef: eD && !eO ? K : V,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${c.length}`,
              scrollBehavior: "close",
              shouldShow: eB,
              onRequestClose: (e) => {
                  let t = e?.target;
                  K.current?.contains(t) === !0 || (t?.closest(`[${e7.m}]`) == null && eG(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(eo, { onClose: t, returnFocusRef: J, skipReturnFocusRef: ee });
              },
              children: () => eQ,
          })
        : eQ;
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
            containerRef: v,
        } = e,
        R = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        I = n?.userId,
        j = (0, i.bG)([f.default], () => null != I && f.default.getUser(I)?.bot === !0, [I]),
        T = (0, m.A)(n, E),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        S = (0, i.yK)([s.Ay], () => (b && null != I && s.Ay.hasCatalogFor(I) ? s.Ay.getBadges(I) : []), [b, I]),
        D = l.useMemo(() => {
            let e = T;
            if (null != h) {
                let t = new Set(T.map((e) => e.id));
                e = [...T, ...h.filter((e) => !t.has(e.id))];
            }
            return b ? (0, c.Rr)(e, S, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C }) : e;
        }, [T, h, b, S, y, C]);
    if (0 === D.length && !b) return null;
    let M = R && !j,
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
                        containerRef: 0 === t ? v : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
