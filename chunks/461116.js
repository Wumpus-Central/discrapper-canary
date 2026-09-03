n.d(t, { A: () => e2 });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(17928),
    i = n(982240),
    o = n(643056),
    d = n(988341),
    c = n(234e3),
    u = n(555149),
    m = n(287809),
    f = n(702841),
    g = n(885386),
    E = n(351906),
    p = n(375708);
let b = "legacy_username";
function h(e, t) {
    let n = g.m$.useSetting(),
        a = (0, f.bG)([m.default], () => m.default.getCurrentUser()),
        l = (0, f.bG)([E.A], () => E.A.hidePersonalInformation);
    if (null == e) return [];
    let r = e?.getBadges() ?? [];
    return (
        null != a && a.id === e.userId && (void 0 !== t ? t : n) && (r = r.filter((e) => e.id !== b)),
        l && (r = r.map((e) => ({ ...e, description: e.id === b ? p.intl.string(p.t.Br1ls3) : e.description }))),
        r
    );
}
var x = n(503698),
    _ = n.n(x),
    A = n(834730),
    v = n(192308),
    N = n(28863),
    R = n(866665),
    I = n(259678),
    j = n(22231),
    y = n(922016),
    C = n(983555),
    T = n(274670),
    S = n(144779),
    D = n(793574),
    P = n(688810),
    M = n(682618),
    O = n(992526),
    U = n(609782);
let B = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var k = n(248284),
    G = n(686246),
    w = n(425763),
    L = n(952270),
    H = n(365199),
    V = n(315710),
    $ = n(297264),
    F = n(821609),
    z = n(442433),
    X = n(450232),
    K = n(451395),
    W = n(327791),
    Y = n(315629),
    q = n(403581),
    Q = n(87719),
    Z = n(207711);
function J(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(Y.h, {
        color: "nitro-pink",
        className: Z.U,
        children: [
            (0, a.jsx)(A.E, {
                variant: "text-xs/medium",
                color: "text-default",
                className: Z.t,
                children: p.intl.string(p.t.cKIIzk),
            }),
            (0, a.jsx)(F.$, {
                variant: "expressive",
                size: "sm",
                icon: q.t,
                text: p.intl.string(p.t.pj0XBN),
                onClick: function () {
                    t(), (0, Q.e)();
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
        { badge: s, index: i } = r,
        o = (0, w.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(K.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: "PROFILE_BADGES",
        itemType: ea,
        "aria-label": p.intl.formatToPlainString(p.t.n5kHOr, { position: i + 1, badgeName: s.name }),
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
            (0, a.jsx)(K.jV, {
                buttonRef: d,
                className: en.BU,
                "aria-label": p.intl.formatToPlainString(p.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function er(e) {
    let { badge: t, index: r, onClose: s, onUnhide: i } = e,
        [o, d] = l.useState(!1);
    function c(e) {
        d(!0),
            (0, z.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("918024"), n.e("787847")]).then(n.bind(n, 842810));
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s });
                },
                { onClose: () => d(!1) },
            );
    }
    let u = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: _()(en.fw, o && en.HV),
        onContextMenu: u ? void 0 : c,
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
                        className: _()(en.pC, u && en.jx),
                    }),
            }),
            u
                ? (0, a.jsx)(R.m, {
                      position: "top",
                      text: p.intl.string(p.t.RXOPc3),
                      children: (0, a.jsx)("button", {
                          type: "button",
                          className: en.KJ,
                          "aria-label": p.intl.formatToPlainString(p.t.GhK5nf, { badgeName: t.name, position: r + 1 }),
                          onClick: () => i?.(t),
                          children: (0, a.jsx)(L.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                      }),
                  })
                : (0, a.jsx)("button", {
                      type: "button",
                      className: en.lv,
                      "aria-haspopup": "menu",
                      "aria-expanded": o,
                      "aria-label": p.intl.formatToPlainString(p.t.Ci7gvp, { badgeName: t.name, position: r + 1 }),
                      onClick: c,
                      children: (0, a.jsx)(H.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                  }),
        ],
    });
}
function es() {
    let e = (0, w.VU)(),
        { badge: t, sourceClientOffset: n } = (0, G.V)((e) => {
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
function ei(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        r = l.useId();
    l.useLayoutEffect(() => {
        n.current?.focus();
    }, []),
        (0, V.tj)(n, { keyboardModeEnabled: !0 });
    let { fixedBadges: s, reorderableBadges: i, hiddenBadges: o } = (0, et.A)(),
        d = (0, W.A)(),
        u = l.useMemo(() => i.map((e) => e.badge_id), [i]);
    function m(e) {
        (0, c.RC)({
            badgeId: e.badge_id,
            hidden: !1,
            reorderableBadgeIds: u,
            hiddenBadgeIds: o.map((e) => {
                let { badge_id: t } = e;
                return t;
            }),
            canReorder: d,
        });
    }
    let f = s.length + i.length + o.length;
    function g(e, t) {
        (0, c.hB)((0, c.i1)(u, e, t));
    }
    return (0, a.jsxs)("div", {
        ref: n,
        className: en.SW,
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": r,
        children: [
            (0, a.jsxs)("div", {
                className: _()(en.Qs, !d && en.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: en.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.$,
                                children: [
                                    (0, a.jsx)(X.A, { size: "xs", className: en.oU }),
                                    (0, a.jsx)($.D, {
                                        id: r,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: p.intl.string(p.t.PXIyjF),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(A.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: p.intl.string(d ? p.t.VHaYM7 : p.t["7Qs/YX"]),
                            }),
                        ],
                    }),
                    !d && (0, a.jsx)(J, { onClose: t }),
                    f > 0 &&
                        (0, a.jsxs)("div", {
                            className: en.yq,
                            role: "group",
                            "aria-label": p.intl.string(p.t.VWV0y5),
                            children: [
                                s.map((e, n) =>
                                    (0, a.jsx)(er, { badge: e, index: n, onClose: t, onUnhide: m }, e.badge_id),
                                ),
                                i.map((e, n) =>
                                    d
                                        ? (0, a.jsx)(
                                              el,
                                              {
                                                  badge: e,
                                                  index: s.length + n,
                                                  onClose: t,
                                                  reorderableIndex: n,
                                                  onReorder: g,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(er, { badge: e, index: s.length + n, onClose: t }, e.badge_id),
                                ),
                                o.map((e, n) =>
                                    (0, a.jsx)(
                                        er,
                                        { badge: e, index: s.length + i.length + n, onClose: t, onUnhide: m },
                                        e.badge_id,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)(es, {}),
            (0, a.jsx)(F.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: p.intl.string(p.t.fN2how),
                onClick: function () {
                    t(), (0, ee._)({ viewingCurrentUserBadges: !0 });
                },
            }),
        ],
    });
}
var eo = n(70283),
    ed = n(775602),
    ec = n(461536),
    eu = n(321191);
function em(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: m, shouldShow: f } = e,
        g = (0, U.w0)(d),
        {
            badgeData: E,
            currentTier: b,
            obtainedAt: h,
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
        A = E?.badge_id === eo.$.PREMIUM_TENURE,
        v = g === eo.$.LEGACY_USERNAME,
        N = b?.name,
        R = A ? p.intl.string(p.t.Ipxkog) : (E?.name ?? u);
    A ? (r = n = null != N ? `${R} ${N}` : R) : null != N ? ((t = R), (n = N), (r = `${R} ${N}`)) : ((n = R), (r = R));
    let I = x ? void 0 : E?.complex_icon_animated_url,
        j = I ?? E?.complex_icon_static_url ?? E?.simple_icon_url ?? m,
        y = null != I && j === I;
    if (v) return (0, a.jsx)(ef, { userId: c, title: n, badgeImage: j, shouldShow: f, children: o });
    let C = E?.info_label ?? (null != h ? p.intl.formatToPlainString(p.t["0aEh2a"], { date: new Date(h) }) : void 0);
    return (0, a.jsx)(ec.A, {
        title: n,
        eyebrow: t,
        body: C,
        badgeImage: j,
        badgeName: r,
        variant: A ? "nitro" : "default",
        isAnimated: y,
        shouldShow: f,
        onShow: _,
        children: o,
    });
}
function ef(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [eu.A, E.A],
            () =>
                E.A.hidePersonalInformation
                    ? p.intl.string(p.t.Br1ls3)
                    : null != n
                      ? (eu.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ec.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var eg = n(839534),
    eE = n(683063);
function ep(e) {
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
var eb = n(116833),
    eh = n(704640),
    ex = n(425713),
    e_ = n(642481),
    eA = n(720879),
    ev = n(202541),
    eN = n(49999),
    eR = n(518477);
let eI = function (e) {
    let {
            badgeId: t = ev.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = ev.VD[t].nameUnformattedNitro,
        m = p.intl.string(u).toLocaleUpperCase(),
        f = ev.VD[t].rarity,
        g = (0, eh.A)(t),
        E = (0, ex.I)(t).standard;
    (0, l.useEffect)(() => {
        eb.m[eb.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = E);
    }, [E]);
    let b = (0, l.useCallback)(() => {
        n?.(eN.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(ec.A, {
            targetElementRef: s,
            onShow: c,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: E,
            badgeName: m,
            progressCircle: t,
            children: r,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: eb.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: E, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eA.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: eR.In,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(e_.A, {
                      targetElementRef: s,
                      shouldShow: !0,
                      onRequestClose: b,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...h,
                  }),
              ],
          });
};
var ej = n(592265);
let ey = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: ej.R,
        children: [t, (0, a.jsx)("div", { className: ej.A, children: n }), l],
    });
};
var eC = n(224016),
    eT = n(747278);
let eS = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, ex.I)(n.id).standard;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eC.A, { width: 56, className: eT.R }),
        children: [
            (0, a.jsx)($.D, { variant: "heading-xl/extrabold", children: p.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(A.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eT.K,
                children: t.description,
            }),
        ],
    });
};
var eD = n(30084),
    eP = n(738822),
    eM = n(104886),
    eO = n(590202),
    eU = n(976860),
    eB = n(305003),
    ek = n(273875),
    eG = n(798618),
    ew = n(752079),
    eL = n(370277);
function eH(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
        [o, d] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let m = l.useCallback(() => {
        u(),
            (c.current = window.setTimeout(() => {
                (c.current = null), d(!0);
            }, r));
    }, [r, u]);
    l.useEffect(() => {
        i && !o && m();
    }, [i, o, m]);
    let f = l.useCallback(() => {
            m();
        }, [m]),
        g = l.useCallback(() => {
            u(), d(!1);
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(ek.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eV, { showSubtext: s }), (0, a.jsx)(eG.F, {})],
            }),
        ],
    });
}
function eV(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)(ew.A, { className: eL.jc }),
        tooltipWordmarkComponent: (0, a.jsx)($.D, {
            variant: "heading-md/extrabold",
            className: eL.RK,
            children: p.intl.string(p.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)($.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : eL.Qn,
                children: p.intl.string(p.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(A.E, { variant: "text-xs/normal", className: eL.lV, children: p.intl.string(p.t.MEV0GI) })
                : void 0,
        ],
    });
}
var e$ = n(174459),
    eF = n(474090),
    ez = n(439174),
    eX = n(183555),
    eK = n(47675),
    eW = n(999291),
    eY = n(874402),
    eq = n(652215),
    eQ = n(758836),
    eZ = n(854232),
    eJ = n(816645);
function e0(e) {
    let t,
        {
            badges: n,
            overflowCount: r,
            className: d,
            badgeClassName: c,
            displayProfile: u,
            onClose: f,
            shouldOpenBadgeTooltip: g,
            shouldGlowTenureBadge: E,
            popoutAnchorRef: b,
        } = e,
        x = (0, k.A)((e) => e.isOpen),
        G = l.useRef(null),
        w = l.useRef(null),
        L = l.useRef(null),
        H = l.useRef(null),
        { analyticsLocations: V } = (0, P.Ay)(D.A.BADGE),
        { context: $, trackUserProfileAction: F } = (0, eX.NJ)(),
        z = m.default.getCurrentUser(),
        X = (0, eF.CC)(z?.premiumType, ev.PremiumTypes.TIER_2),
        K = (0, O.J9)({ location: "UserProfileBadgeList" }),
        W = (0, o.d)({ location: "UserProfileBadgeList" }),
        Y = (function (e) {
            let { location: t } = e;
            return B.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        (K || Y) && u?.userId != null && !i.Ay.hasCatalogFor(u.userId) && (0, M.RS)(u.userId);
    }, [K, Y, u?.userId]);
    let q = u?.userId,
        Q = (0, s.bG)([i.Ay], () => {
            if (!Y || null == q) return null;
            let e = {};
            for (let t of n) {
                let n = (0, U.w0)(t.id);
                if (null == n) continue;
                let a = i.Ay.getBadgeById(n, q)?.simple_icon_url;
                null != a && (e[t.id] = a);
            }
            return e;
        }, [Y, q, n]),
        Z = u?.userId === z?.id,
        J = Z && K && W && null != b,
        et = !J && K,
        en = J && x;
    function ea(e) {
        k.A.setState({ isOpen: e });
    }
    let el = h((0, eW.AP)(z?.id ?? null)).some((e) => e.id === eB.A.ORB_PROFILE_BADGE),
        er = J && 0 === r ? n.length - 1 : -1,
        es = null;
    r > 0 &&
        ((es = (0, a.jsx)(A.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-default",
            className: eJ.AX,
            children: p.intl.format(p.t.n7CiSK, { count: r }),
        })),
        (t = p.intl.formatToPlainString(p.t.eIHfGZ, { overflow_count: r })));
    let eo = (0, a.jsxs)("div", {
        ref: G,
        className: _()(eJ.kL, W && eJ.Yq, J && eJ.Tx, d),
        "aria-label": p.intl.string(p.t.VWV0y5),
        role: "group",
        ...(J ? { onClick: () => ea(!en) } : null),
        children: [
            n.map((e, t) => {
                let n = e.id === eB.A.ORB_PROFILE_BADGE,
                    l = (0, ez.e0)(e.id),
                    r = null != l || e.id === eZ.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== eZ.K,
                    o = Q?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eR.L7)(e.icon),
                        className: _()(eJ.qS, null != o && eJ.Do, t === er && eJ.el, c),
                    }),
                    p = null != g && g(e.id),
                    b = {
                        onClick: (a) => {
                            if (
                                (F({ action: "PRESS_BADGE" }),
                                (0, eK.vP)({
                                    badgeId: (0, U.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: V,
                                    ...$,
                                }),
                                J)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (K && l?.bot !== !0) {
                                a.preventDefault(),
                                    (0, ee._)({
                                        initialBadgeId: (0, U.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    });
                                return;
                            }
                            if (n) {
                                (0, eg.Cz)({
                                    tab: eQ.G2.ORBS,
                                    analyticsLocations: V,
                                    analyticsSource: D.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    f?.(),
                                    (0, v.closeAllModals)();
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    e$.default.track(eq.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: X,
                                        viewed_user_id: u?.userId,
                                    }),
                                    X)
                                ) {
                                    Z
                                        ? ((0, eU.pX)(eq.BVt.NITRO_HOME), (0, v.closeAllModals)())
                                        : (0, eD.D)({ analyticsLocations: V, displayProfile: u }),
                                        f?.();
                                    return;
                                }
                                if (Z) {
                                    let t = null != e.link ? (0, C.default)(e.link, { analyticsLocations: V }) : null;
                                    if (null == t) return;
                                    return f?.(), (0, v.closeAllModals)(), t(a);
                                }
                                return (0, eD.D)({ analyticsLocations: V, displayProfile: u }), void f?.();
                            }
                            let s = null != e.link ? (0, C.default)(e.link, { analyticsLocations: V }) : null;
                            if (null != s) return f?.(), (0, v.closeAllModals)(), s(a);
                        },
                        onMouseEnter: () => {
                            "quest_completed" === e.id &&
                                ((0, eM.E5)(eM.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                                    ? (0, T.r)({
                                          type: S.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                          surfaceId: eP.uF.QUEST_BADGE,
                                          isTargeted: !1,
                                      })
                                    : e$.default.track(eq.HAw.QUEST_CONTENT_VIEWED, {
                                          ...(0, eO.fF)(eP.uF.QUEST_BADGE),
                                          is_targeted: !1,
                                      })),
                                F({ action: "HOVER_BADGE" }),
                                (0, eK.vP)({
                                    badgeId: (0, U.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: V,
                                    ...$,
                                });
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(J ? { "aria-haspopup": "dialog", "aria-expanded": en } : null),
                        style: { filter: E && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (K)
                    return (0, a.jsx)(
                        em,
                        {
                            shouldShow: !en,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eR.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...b, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: w, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eI, {
                                badgeId: e.id,
                                targetElementRef: w,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    e$.default.track(eq.HAw.TOOLTIP_VIEWED, {
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
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: L, children: d });
                    return (0, a.jsx)(
                        eH,
                        {
                            targetElementRef: L,
                            delay: eR.In,
                            showSubtext: !el && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: H, children: d });
                    return (0, a.jsx)(
                        ep,
                        {
                            targetElementRef: H,
                            delay: eR.In,
                            forceOpen: p,
                            badgeDescription: e.description,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                let h = (0, a.jsx)(N.Anchor, { ...b, children: d }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eZ.K
                            ? (0, a.jsx)(eS, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== eZ.K ? l : void 0 });
                return (0, a.jsx)(
                    R.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: p, delay: eR.In, ariaHidden: !0, children: h },
                    `${e.id}-${t}`,
                );
            }),
            r > 0 &&
                (et
                    ? (0, a.jsx)(I.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: _()(eJ.$O, eJ.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != q ? m.default.getUser(q) : null;
                                  (0, ee._)({ targetUserId: q, targetUsername: e?.globalName ?? e?.username });
                              },
                              children: es,
                          }),
                      })
                    : (0, a.jsx)("span", { className: eJ.$O, children: es })),
            J &&
                (0, a.jsx)(I.vN, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: eJ.r9,
                        "aria-label": p.intl.string(p.t.PXIyjF),
                        "aria-haspopup": "dialog",
                        "aria-expanded": en,
                        onClick: (e) => {
                            e.stopPropagation(), ea(!en);
                        },
                        children: (0, a.jsx)(j.PencilIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: eJ.IZ,
                            "aria-hidden": !0,
                        }),
                    }),
                }),
        ],
    });
    return J
        ? (0, a.jsx)(y.Y, {
              targetElementRef: b,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: en,
              onRequestClose: (e) => {
                  let t = e?.target;
                  G.current?.contains(t) === !0 || (t?.closest(`[${eY.m}]`) == null && ea(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(ei, { onClose: t });
              },
              children: () => eo,
          })
        : eo;
}
var e1 = n(996988);
let e8 = {
    [e1.d.POPOUT]: 12,
    [e1.d.MODAL]: 26,
    [e1.d.SIDEBAR]: 13,
    [e1.d.VIDEO_TILE_BACKGROUND]: 12,
    [e1.d.EMBED]: 12,
};
function e2(e) {
    let t,
        {
            displayProfile: n,
            themeType: f,
            isRedesignEnabled: g,
            pendingLegacyUsernameDisabled: E,
            pendingBadges: p,
            showPendingBadgeEdits: b = !1,
            onClose: x,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: v,
        } = e,
        N = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        R = n?.userId,
        I = (0, s.bG)([m.default], () => null != R && m.default.getUser(R)?.bot === !0, [R]),
        j = h(n, E),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C } = (0, u.A)(),
        T = (0, s.yK)([i.Ay], () => (b && null != R && i.Ay.hasCatalogFor(R) ? i.Ay.getBadges(R) : []), [b, R]),
        S = l.useMemo(() => {
            let e = j;
            if (null != p) {
                let t = new Set(j.map((e) => e.id));
                e = [...j, ...p.filter((e) => !t.has(e.id))];
            }
            return b ? (0, c.Rr)(e, T, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: C }) : e;
        }, [j, p, b, T, y, C]);
    if (0 === S.length && !b) return null;
    let D = N && !I,
        P = D ? Math.max(S.length - d.k9, 0) : 0;
    return (
        (t = D
            ? [S.slice(0, d.k9)]
            : f === e1.d.MODAL_V2
              ? [S]
              : (0, r.chunk)(S, !0 === g && f === e1.d.SIDEBAR ? e8[e1.d.POPOUT] : e8[f])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e0,
                    {
                        badges: e,
                        overflowCount: P,
                        displayProfile: n,
                        onClose: x,
                        shouldOpenBadgeTooltip: _,
                        shouldGlowTenureBadge: A,
                        popoutAnchorRef: v,
                    },
                    t,
                ),
            ),
        })
    );
}
