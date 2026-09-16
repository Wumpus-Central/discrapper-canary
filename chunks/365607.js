n.d(t, { A: () => tt });
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
    x = n(259678),
    _ = n(307301),
    A = n(192308),
    N = n(28863),
    v = n(866665),
    R = n(22231),
    I = n(922016),
    j = n(983555),
    y = n(274670),
    T = n(144779),
    C = n(793574),
    S = n(688810),
    D = n(682618),
    M = n(992526),
    P = n(609782);
let U = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var O = n(248284),
    B = n(686246),
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
    Z = n(375708),
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
let ea = "BADGE";
function el(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: i, index: s } = r,
        o = (0, G.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(X.mG, {
        index: t,
        itemId: String(i.badge_id),
        itemPreviewProps: { badge: i },
        listType: "PROFILE_BADGES",
        itemType: ea,
        "aria-label": Z.intl.formatToPlainString(Z.t.n5kHOr, { position: s + 1, badgeName: i.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: en.oE,
        draggingClassName: en.Id,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        children: [
            (0, a.jsx)(er, { ...r }),
            (0, a.jsx)(X.jV, {
                buttonRef: d,
                className: en.BU,
                "aria-label": Z.intl.formatToPlainString(Z.t["9xRVLy"], { badgeName: i.name, position: s + 1 }),
            }),
        ],
    });
}
function er(e) {
    let { badge: t, index: r, onClose: i, onAction: s, controlRef: o, onUnhide: d } = e,
        [c, u] = l.useState(!1);
    function f(e) {
        (u(!0),
            (0, $.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("918024"), n.e("787847")]).then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: i, onAction: s });
                },
                { onClose: () => u(!1) },
            ));
    }
    let m = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: p()(en.fw, c && en.HV),
        onContextMenu: m ? void 0 : f,
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
                        className: p()(en.pC, m && en.jx),
                    }),
            }),
            m
                ? (0, a.jsx)(v.m, {
                      position: "top",
                      text: Z.intl.string(Z.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          ref: o,
                          type: "button",
                          className: en.KJ,
                          "aria-label": Z.intl.formatToPlainString(Z.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => d?.(t),
                          children: (0, a.jsx)(w.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      ref: o,
                      type: "button",
                      className: en.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": c,
                      "aria-label": Z.intl.formatToPlainString(Z.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: f,
                      children: (0, a.jsx)(k.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function ei() {
    let e = (0, G.VU)(),
        { badge: t, sourceClientOffset: n } = (0, B.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === ea ? t.itemPreviewProps?.badge : void 0,
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
function es(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    (l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, L.tj)(n, { keyboardModeEnabled: !0 }));
    let { analyticsLocations: o } = (0, S.Ay)(C.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: d } = (0, z.NJ)();
    l.useEffect(() => {
        d({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: o });
    }, []);
    let { fixedBadges: u, reorderableBadges: m, hiddenBadges: g } = (0, et.A)(),
        E = (0, K.A)(),
        h = l.useMemo(() => m.map((e) => e.badge_id), [m]),
        x = l.useRef(new Map());
    function _(e) {
        return (t) => {
            null == t ? x.current.delete(e) : x.current.set(e, t);
        };
    }
    function A(e) {
        requestAnimationFrame(() => x.current.get(e)?.focus());
    }
    function N(e) {
        (A(e.badge_id),
            (0, c.RC)({
                badgeId: e.badge_id,
                hidden: !1,
                reorderableBadgeIds: h,
                hiddenBadgeIds: g.map((e) => {
                    let { badge_id: t } = e;
                    return t;
                }),
                canReorder: E,
            }));
    }
    let v = u.length + m.length + g.length,
        R = (0, i.bG)([s.Ay, f.default], () => {
            let e = f.default.getCurrentUser()?.id;
            return null != e && s.Ay.hasCatalogFor(e);
        });
    function I(e, t) {
        (0, c.hB)((0, c.i1)(h, e, t));
    }
    let j = v > 0,
        y = R && !j,
        T = !E && !y,
        D = E ? Z.t.VHaYM7 : Z.t["7Qs/YX"];
    return (0, a.jsxs)("div", {
        ref: n,
        className: p()(en.SW, y && en.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: p()(en.Qs, T && en.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: en.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.$,
                                children: [
                                    (0, a.jsx)(F.A, { size: "xs", className: en.oU }),
                                    (0, a.jsx)(H.D, {
                                        id: r,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !y &&
                                (0, a.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children: Z.intl.string(D),
                                }),
                        ],
                    }),
                    T && (0, a.jsx)(J, { onClose: t }),
                    y &&
                        (0, a.jsx)(b.E, {
                            className: en.p$,
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: Z.intl.string(Z.t.VT02mI),
                        }),
                    j &&
                        (0, a.jsxs)("div", {
                            className: en.yq,
                            role: "group",
                            "aria-label": Z.intl.string(Z.t.VWV0y5),
                            children: [
                                u.map((e, n) =>
                                    (0, a.jsx)(
                                        er,
                                        {
                                            badge: e,
                                            index: n,
                                            onClose: t,
                                            onAction: A,
                                            controlRef: _(e.badge_id),
                                            onUnhide: N,
                                        },
                                        e.badge_id,
                                    ),
                                ),
                                m.map((e, n) =>
                                    E
                                        ? (0, a.jsx)(
                                              el,
                                              {
                                                  badge: e,
                                                  index: u.length + n,
                                                  onClose: t,
                                                  onAction: A,
                                                  controlRef: _(e.badge_id),
                                                  reorderableIndex: n,
                                                  onReorder: I,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              er,
                                              {
                                                  badge: e,
                                                  index: u.length + n,
                                                  onClose: t,
                                                  onAction: A,
                                                  controlRef: _(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                g.map((e, n) =>
                                    (0, a.jsx)(
                                        er,
                                        {
                                            badge: e,
                                            index: u.length + m.length + n,
                                            onClose: t,
                                            onAction: A,
                                            controlRef: _(e.badge_id),
                                            onUnhide: N,
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
                    (d({ action: "PRESS_VIEW_BADGES", analyticsLocations: o }),
                        t(),
                        (0, ee._)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var eo = n(775602),
    ed = n(461536),
    ec = n(321191),
    eu = n(351906);
function ef(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: f, shouldShow: m } = e,
        g = (0, P.w0)(d),
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
        x = (0, i.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        _ = l.useCallback(() => {
            null != c && s.Ay.isCatalogStaleFor(c) && (0, D.RS)(c);
        }, [c]),
        A = p?.badge_id === h.$.PREMIUM_TENURE,
        N = g === h.$.LEGACY_USERNAME,
        v = E?.name,
        R = A ? Z.intl.string(Z.t.Ipxkog) : (p?.name ?? u);
    A ? (r = n = null != v ? `${R} ${v}` : R) : null != v ? ((t = R), (n = v), (r = `${R} ${v}`)) : ((n = R), (r = R));
    let I = x ? void 0 : p?.complex_icon_animated_url,
        j = I ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? f,
        y = null != I && j === I;
    if (N) return (0, a.jsx)(em, { userId: c, title: n, badgeImage: j, shouldShow: m, children: o });
    let T = p?.info_label ?? (null != b ? Z.intl.formatToPlainString(Z.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, a.jsx)(ed.A, {
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
function em(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: s } = e,
        o = (0, i.bG)(
            [ec.A, eu.A],
            () =>
                eu.A.hidePersonalInformation
                    ? Z.intl.string(Z.t.Br1ls3)
                    : null != n
                      ? (ec.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ed.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: s, children: t });
}
var eg = n(839534),
    ep = n(683063);
function eE(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: i } = e;
    return (0, a.jsx)(ep.u, {
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
var eh = n(38423),
    eb = n(998370),
    ex = n(158390),
    e_ = n(927813);
let eA = 5 * e_.A.Millis.MINUTE,
    eN = new Map(),
    ev = { badgeName: void 0, tierBySimpleIconUrl: new Map() };
var eR = n(116833),
    eI = n(704640),
    ej = n(425713),
    ey = n(642481),
    eT = n(720879),
    eC = n(202541),
    eS = n(49999),
    eD = n(518477);
let eM = function (e) {
    let {
            badgeId: t = eC.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: i,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eC.VD[t].nameUnformattedNitro,
        f = Z.intl.string(u).toLocaleUpperCase(),
        m = eC.VD[t].rarity,
        g = (0, eI.A)(t),
        p = (0, ej.I)(t).standard;
    (0, l.useEffect)(() => {
        (eR.m[eR.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, l.useCallback)(() => {
        n?.(eS.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, o, d);
        return (0, a.jsx)(ed.A, {
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
            component: eR.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: f, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eT.A, {
              targetElementRef: i,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: eD.In,
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
var eP = n(592265);
let eU = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eP.R,
        children: [t, (0, a.jsx)("div", { className: eP.A, children: n }), l],
    });
};
var eO = n(224016),
    eB = n(747278);
let eG = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, ej.I)(n.id).standard;
    return (0, a.jsxs)(eU, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eO.A, { width: 56, className: eB.R }),
        children: [
            (0, a.jsx)(H.D, { variant: "heading-xl/extrabold", children: Z.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(b.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eB.K,
                children: t.description,
            }),
        ],
    });
};
var ew = n(30084),
    ek = n(738822),
    eL = n(104886),
    eH = n(590202),
    eV = n(976860),
    e$ = n(780964),
    eF = n(766075),
    ez = n(305003),
    eX = n(273875),
    eK = n(798618),
    eW = n(752079),
    eY = n(370277);
function eq(e) {
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
            (0, a.jsxs)(eX.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eZ, { showSubtext: i }), (0, a.jsx)(eK.F, {})],
            }),
        ],
    });
}
function eZ(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eU, {
        assetComponent: (0, a.jsx)(eW.A, { className: eY.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(H.D, {
            variant: "heading-md/extrabold",
            className: eY.RK,
            children: Z.intl.string(Z.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(H.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eY.Qn,
                children: Z.intl.string(Z.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", className: eY.lV, children: Z.intl.string(Z.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eQ = n(174459),
    eJ = n(474090),
    e0 = n(439174),
    e1 = n(47675),
    e8 = n(999291),
    e2 = n(874402),
    e7 = n(652215),
    e5 = n(758836),
    e4 = n(854232),
    e3 = n(816645);
function e9(e) {
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
        } = e,
        $ = (0, O.A)((e) => e.isOpen),
        F = l.useRef(null),
        X = (0, E.A)(F, V),
        K = l.useRef(null),
        W = l.useRef(null),
        Y = l.useRef(null),
        q = l.useRef(null),
        { analyticsLocations: Q } = (0, S.Ay)(C.A.BADGE),
        { context: J, trackUserProfileAction: et } = (0, z.NJ)(),
        en = f.default.getCurrentUser(),
        ea = (0, eJ.CC)(en?.premiumType, eC.PremiumTypes.TIER_2),
        el = (0, M.J)({ location: "UserProfileBadgeList" }),
        er = (0, o.d)({ location: "UserProfileBadgeList" }),
        ei = (function (e) {
            let { location: t } = e;
            return U.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        { enabled: eo } = eb.J.useConfig({ location: "UserProfileBadgeList" }),
        ec = eo && !el && c.some((e) => (0, P.w0)(e.id) === h.$.GIFTING),
        eu =
            ((t = (0, eh.b9)(`UserProfileBadgeList${ec ? "" : "-DISABLED"}`) && ec),
            (n = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.id)),
            (r = (0, i.bG)([s.Ay], () => (null != n ? s.Ay.getBadgeById(h.$.GIFTING, n) : void 0), [n])),
            l.useEffect(() => {
                if (!t || null == n) return;
                if (null != r) return void eN.delete(n);
                let e = eN.get(n) ?? { backoff: new ex.A(e_.A.Millis.MINUTE, eA, !0), gateUntil: 0 };
                Date.now() < e.gateUntil ||
                    ((e.gateUntil = Date.now() + e.backoff.fail()), eN.set(n, e), (0, D.o0)(h.$.GIFTING));
            }, [t, n, r]),
            l.useMemo(() => {
                if (!t || null == r) return ev;
                let e = new Map();
                for (let t of r.tiers) null != t.simple_icon_url && e.set(t.simple_icon_url, t);
                return { badgeName: r.name, tierBySimpleIconUrl: e };
            }, [t, r]));
    l.useEffect(() => {
        (el || ei) && G?.userId != null && !s.Ay.hasCatalogFor(G.userId) && (0, D.RS)(G.userId);
    }, [el, ei, G?.userId]);
    let em = G?.userId,
        ep = (0, i.bG)(
            [s.Ay],
            () => {
                if (!ei || null == em) return null;
                let e = {};
                for (let t of c) {
                    let n = (0, P.w0)(t.id);
                    if (null == n) continue;
                    let a = s.Ay.getBadgeById(n, em)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [ei, em, c],
        ),
        eR = G?.userId === en?.id,
        eI = eR && el && er && null != H,
        ej = !eI && el,
        ey = eI && 0 === c.length,
        eT = en?.id,
        eS = (0, i.bG)(
            [s.Ay],
            () => null != eT && (!s.Ay.hasCatalogFor(eT) || s.Ay.getBadges(eT).some((e) => e.owned)),
            [eT],
        ),
        eP = eI && $;
    function eU(e) {
        O.A.setState({ isOpen: e });
    }
    let eO = (0, e8.AP)(en?.id ?? null),
        eB = (0, m.A)(eO).some((e) => e.id === ez.A.ORB_PROFILE_BADGE),
        eX = eI && 0 === u ? c.length - 1 : -1,
        eK = null;
    u > 0 &&
        ((eK = (0, a.jsx)(b.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: e3.AX,
            children: Z.intl.format(Z.t.n7CiSK, { count: u }),
        })),
        (d = Z.intl.formatToPlainString(Z.t.eIHfGZ, { overflow_count: u })));
    let eW = (0, a.jsxs)("div", {
        ref: X,
        className: p()(e3.kL, er && e3.Yq, eI && e3.Tx, g),
        ...(ey ? null : { "aria-label": Z.intl.string(Z.t.VWV0y5), role: "group" }),
        ...(eI && !ey ? { onClick: () => eU(!eP) } : null),
        children: [
            ey &&
                (0, a.jsx)(x.vN, {
                    children: (0, a.jsxs)("button", {
                        type: "button",
                        className: e3.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eP,
                        onClick: (e) => {
                            (e.stopPropagation(), eU(!eP));
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
                let n = e.id === ez.A.ORB_PROFILE_BADGE,
                    l = (0, e0.e0)(e.id),
                    r = null != l || e.id === e4.K,
                    i = "april_fools_2026" === e.id,
                    s = void 0 !== l && e.id !== e4.K,
                    o = ep?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eD.L7)(e.icon),
                        className: p()(e3.qS, null != o && e3.Do, t === eX && e3.el, B),
                    }),
                    c = null != k && k(e.id),
                    u = {
                        onClick: (a) => {
                            if (
                                (et({ action: "PRESS_BADGE" }),
                                (0, e1.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: Q,
                                    ...J,
                                }),
                                eI)
                            )
                                return void a.preventDefault();
                            let l = G?.userId != null ? f.default.getUser(G.userId) : null;
                            if (el && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, ee._)({
                                        initialBadgeId: (0, P.w0)(e.id),
                                        targetUserId: G?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, P.w0)(e.id) === h.$.GIFTING) {
                                (a.preventDefault(),
                                    w?.(),
                                    (0, eF.openUserSettings)(e$.X.GIFT_PANEL, { analyticsLocations: Q }));
                                return;
                            }
                            if (n) {
                                ((0, eg.Cz)({
                                    tab: e5.G2.ORBS,
                                    analyticsLocations: Q,
                                    analyticsSource: C.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    w?.(),
                                    (0, A.closeAllModals)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eQ.default.track(e7.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: ea,
                                        viewed_user_id: G?.userId,
                                    }),
                                    ea)
                                ) {
                                    (eR
                                        ? ((0, eV.pX)(e7.BVt.NITRO_HOME), (0, A.closeAllModals)())
                                        : (0, ew.D)({ analyticsLocations: Q, displayProfile: G }),
                                        w?.());
                                    return;
                                }
                                if (eR) {
                                    let t = null != e.link ? (0, j.default)(e.link, { analyticsLocations: Q }) : null;
                                    if (null == t) return;
                                    return (w?.(), (0, A.closeAllModals)(), t(a));
                                }
                                return ((0, ew.D)({ analyticsLocations: Q, displayProfile: G }), void w?.());
                            }
                            let i = null != e.link ? (0, j.default)(e.link, { analyticsLocations: Q }) : null;
                            if (null != i) return (w?.(), (0, A.closeAllModals)(), i(a));
                        },
                        onMouseEnter: () => {
                            (e.id === m.h &&
                                ((0, eL.E5)(eL.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, y.r)({
                                          type: T.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: ek.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : eQ.default.track(e7.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eH.fF)(ek.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                et({ action: "HOVER_BADGE" }),
                                (0, e1.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: Q,
                                    ...J,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(eI ? { "aria-haspopup": "dialog", "aria-expanded": eP } : null),
                        style: { filter: L && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (el)
                    return (0, a.jsx)(
                        ef,
                        {
                            shouldShow: !eP,
                            legacyBadgeId: e.id,
                            userId: G?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eD.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                let g = null != e.simple_icon_url ? eu.tierBySimpleIconUrl.get(e.simple_icon_url) : void 0;
                if (g?.complex_icon_static_url != null && null != eu.badgeName)
                    return (0, a.jsx)(
                        ed.K,
                        {
                            eyebrow: eu.badgeName,
                            title: g.name ?? e.description,
                            badgeImage: g.complex_icon_static_url,
                            badgeName: e.description,
                            shouldShow: !eP,
                            children: (0, a.jsx)(N.Anchor, { ...u, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: K, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eM, {
                                badgeId: e.id,
                                targetElementRef: K,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eQ.default.track(e7.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (eR ? "self" : "other"),
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
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: W, children: d });
                    return (0, a.jsx)(
                        eq,
                        {
                            targetElementRef: W,
                            delay: eD.In,
                            showSubtext: !eB && !e.isPreviewMode,
                            forceOpen: c,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...u, ref: Y, children: d });
                    return (0, a.jsx)(
                        eE,
                        {
                            targetElementRef: Y,
                            delay: eD.In,
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
                            ? (0, a.jsx)(eG, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e4.K ? l : void 0 });
                return (0, a.jsx)(
                    v.m,
                    { __unsupportedReactNodeAsText: b, forceOpen: c, delay: eD.In, ariaHidden: !0, children: E },
                    `${e.id}-${t}`,
                );
            }),
            u > 0 &&
                (ej
                    ? (0, a.jsx)(x.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: p()(e3.$O, e3.lv),
                              "aria-label": d,
                              onClick: function () {
                                  let e = null != em ? f.default.getUser(em) : null;
                                  (0, ee._)({ targetUserId: em, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: eK,
                          }),
                      })
                    : (0, a.jsx)("span", { className: e3.$O, children: eK })),
            eI &&
                !ey &&
                (0, a.jsx)(v.m, {
                    text: Z.intl.string(Z.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: q,
                    children: (0, a.jsx)(x.vN, {
                        children: (0, a.jsx)("button", {
                            ref: q,
                            type: "button",
                            className: e3.r9,
                            "aria-label": Z.intl.string(Z.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eP,
                            onClick: (e) => {
                                (e.stopPropagation(), eU(!eP));
                            },
                            children: (0, a.jsx)(R.PencilIcon, {
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
    return eI
        ? (0, a.jsx)(I.Y, {
              targetElementRef: ey && !eS ? F : H,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${c.length}`,
              scrollBehavior: "close",
              shouldShow: eP,
              onRequestClose: (e) => {
                  let t = e?.target;
                  F.current?.contains(t) === !0 || (t?.closest(`[${e2.m}]`) == null && eU(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(es, { onClose: t });
              },
              children: () => eW,
          })
        : eW;
}
var e6 = n(996988);
let te = {
    [e6.d.POPOUT]: 12,
    [e6.d.MODAL]: 26,
    [e6.d.SIDEBAR]: 13,
    [e6.d.VIDEO_TILE_BACKGROUND]: 12,
    [e6.d.EMBED]: 12,
};
function tt(e) {
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
            : g === e6.d.MODAL_V2
              ? [D]
              : (0, r.chunk)(D, !0 === p && g === e6.d.SIDEBAR ? te[e6.d.POPOUT] : te[g])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e9,
                    {
                        badges: e,
                        overflowCount: P,
                        displayProfile: n,
                        onClose: x,
                        shouldOpenBadgeTooltip: _,
                        shouldGlowTenureBadge: A,
                        popoutAnchorRef: N,
                        containerRef: 0 === t ? v : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
