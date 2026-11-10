n.d(t, { A: () => e5 });
var a = n(477900),
    r = n(582128),
    l = n(435558),
    s = n(855986),
    i = n(982240),
    o = n(643056);
n(988341);
var d = n(234e3),
    c = n(555149),
    u = n(287809),
    m = n(262),
    f = n(503698),
    g = n.n(f),
    p = n(612324),
    E = n(70283),
    h = n(834730),
    b = n(559106),
    x = n(307301),
    A = n(192308),
    _ = n(28863),
    N = n(866665),
    R = n(140735),
    v = n(22231),
    j = n(265872),
    I = n(564508),
    y = n(438457),
    T = n(144779),
    C = n(793574),
    S = n(688810),
    D = n(682618),
    M = n(731309),
    P = n(945810);
let O = (0, P.mj)({
        name: "2026-10-badges-unread-state",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    U = (0, P.mj)({
        name: "2026-06-use-new-badge-image-source",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
var B = n(248284),
    G = n(675816),
    w = n(425763),
    k = n(952270),
    L = n(365199),
    H = n(315710),
    V = n(534514),
    $ = n(821609),
    F = n(442433),
    X = n(450232),
    z = n(183555),
    K = n(451395),
    W = n(327791),
    Y = n(315629),
    q = n(403581),
    Z = n(87719),
    Q = n(792996),
    J = n(207711);
function ee(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(Y.h, {
        color: "nitro-pink",
        className: J.U,
        children: [
            (0, a.jsx)(h.E, {
                variant: "body-xs/medium",
                color: "text-default",
                className: J.t,
                children: Q.intl.string(Q.t.cKIIzk),
            }),
            (0, a.jsx)($.$, {
                variant: "expressive",
                size: "sm",
                icon: q.NitroWheelIcon,
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
let er = "PROFILE_BADGES",
    el = "BADGE";
function es(e) {
    let { reorderableIndex: t, onReorder: n, ...l } = e,
        { badge: s, index: i } = l,
        o = (0, w.VU)(),
        d = r.useRef(null);
    return (0, a.jsxs)(K.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: er,
        itemType: el,
        "aria-label": Q.intl.formatToPlainString(Q.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: ea.oE,
        draggingClassName: ea.Id,
        dropBeforeClassName: ea.A,
        dropAfterClassName: ea.Ze,
        children: [
            (0, a.jsx)(ei, { ...l }),
            (0, a.jsx)(K.jV, {
                buttonRef: d,
                className: ea.BU,
                "aria-label": Q.intl.formatToPlainString(Q.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function ei(e) {
    let { badge: t, index: l, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = r.useState(!1);
    function u(e) {
        (c(!0),
            (0, F.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e(918024), n.e(434691), n.e(787847)]).then(
                        n.bind(n, 842810),
                    );
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: i });
                },
                { onClose: () => c(!1) },
            ));
    }
    let m = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: g()(ea.fw, d && ea.HV),
        onContextMenu: u,
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
                        className: g()(ea.pC, m && ea.jx),
                    }),
            }),
            m &&
                (0, a.jsx)("div", {
                    className: ea.Gf,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(k.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(b.vN, {
                children: (0, a.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: ea.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": Q.intl.formatToPlainString(m ? Q.t["3Uwmdt"] : Q.t.Ci7gvp, {
                        badgeName: t.name,
                        position: l + 1,
                    }),
                    onClick: u,
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
                badge: t?.itemType === el ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let r = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: ea.dk,
        style: { transform: `translate3d(${n.x}px, ${r}px, 0)` },
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
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: l } = e,
        o = r.useRef(null),
        c = r.useId();
    (r.useLayoutEffect(() => {
        o.current?.focus();
    }, []),
        (0, H.tj)(o, { returnRef: n }));
    let { analyticsLocations: m } = (0, S.Ay)(C.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: f } = (0, z.NJ)();
    r.useEffect(() => {
        f({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: m });
    }, []);
    let { fixedBadges: p, reorderableBadges: E, hiddenBadges: b } = (0, en.A)(),
        x = (0, W.A)(),
        A = (0, w.VU)(),
        _ =
            (0, G.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === el;
            }) && !A,
        N = r.useMemo(() => E.map((e) => e.badge_id), [E]),
        R = r.useRef(new Map());
    function v(e) {
        return (t) => {
            null == t ? R.current.delete(e) : R.current.set(e, t);
        };
    }
    function j(e) {
        requestAnimationFrame(() => R.current.get(e)?.focus());
    }
    let I = p.length + E.length + b.length,
        y = (0, s.bG)([i.Ay, u.default], () => {
            let e = u.default.getCurrentUser()?.id;
            return null != e && i.Ay.hasCatalogFor(e);
        });
    function T(e, t) {
        (0, d.hB)((0, d.i1)(N, e, t));
    }
    let D = (0, K.w9)({ listType: er, itemType: el, onFallbackDrop: (e) => T(e.index, N.length - 1) }),
        M = (0, K.w9)({ listType: er, itemType: el });
    r.useLayoutEffect(() => {
        if (_)
            return (
                M(document.body),
                () => {
                    M(null);
                }
            );
    }, [M, _]);
    let P = I > 0,
        O = y && !P,
        U = !x && !O,
        B = x ? Q.t.VHaYM7 : Q.t["7Qs/YX"];
    function k() {
        (null != l && (l.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: g()(ea.SW, O && ea.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": c,
        children: [
            (0, a.jsxs)("div", {
                className: g()(ea.Qs, U && ea.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: ea.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.$,
                                children: [
                                    x && (0, a.jsx)(X.A, { size: "xs", className: ea.oU }),
                                    (0, a.jsx)(V.D, {
                                        id: c,
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: Q.intl.string(Q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !O &&
                                (0, a.jsx)(h.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: Q.intl.string(B),
                                }),
                        ],
                    }),
                    U && (0, a.jsx)(ee, { onClose: t }),
                    O &&
                        (0, a.jsx)(h.E, {
                            className: ea.p$,
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: Q.intl.string(Q.t.VT02mI),
                        }),
                    P &&
                        (0, a.jsxs)("div", {
                            className: g()(ea.yq, _ && ea.T0),
                            role: "group",
                            "aria-label": Q.intl.string(Q.t.VWV0y5),
                            children: [
                                x &&
                                    (0, a.jsx)("div", {
                                        ref: (e) => {
                                            D(e);
                                        },
                                        className: ea.u$,
                                        "aria-hidden": !0,
                                    }),
                                p.map((e, t) =>
                                    (0, a.jsx)(
                                        ei,
                                        { badge: e, index: t, onClose: k, onAction: j, controlRef: v(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                E.map((e, t) =>
                                    x
                                        ? (0, a.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: p.length + t,
                                                  onClose: k,
                                                  onAction: j,
                                                  controlRef: v(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: T,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              ei,
                                              {
                                                  badge: e,
                                                  index: p.length + t,
                                                  onClose: k,
                                                  onAction: j,
                                                  controlRef: v(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                b.map((e, t) =>
                                    (0, a.jsx)(
                                        ei,
                                        {
                                            badge: e,
                                            index: p.length + E.length + t,
                                            onClose: k,
                                            onAction: j,
                                            controlRef: v(e.badge_id),
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
                    (f({ action: "PRESS_VIEW_BADGES", analyticsLocations: m }),
                        k(),
                        (0, et.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ec = n(775602),
    eu = n(328464),
    em = n(851767),
    ef = n(351906);
function eg(e) {
    let t,
        n,
        l,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: m, shouldShow: f } = e,
        g = (0, M.w0)(d),
        {
            badgeData: p,
            currentTier: h,
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
        x = (0, s.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
        A = r.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, D.RS)(c);
        }, [c]),
        _ = p?.badge_id === E.$.PREMIUM_TENURE,
        N = g === E.$.LEGACY_USERNAME,
        R = h?.name,
        v = _ ? Q.intl.string(Q.t.Ipxkog) : (p?.name ?? u);
    _ ? (l = n = null != R ? `${v} ${R}` : v) : null != R ? ((t = v), (n = R), (l = `${v} ${R}`)) : ((n = v), (l = v));
    let j = x ? void 0 : p?.complex_icon_animated_url,
        I = j ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? m,
        y = null != j && I === j;
    if (N) return (0, a.jsx)(ep, { userId: c, title: n, badgeImage: I, shouldShow: f, children: o });
    let T = p?.info_label ?? (null != b ? Q.intl.formatToPlainString(Q.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, a.jsx)(eu.A, {
        title: n,
        eyebrow: t,
        body: T,
        badgeImage: I,
        badgeName: l,
        variant: _ ? "nitro" : "default",
        isAnimated: y,
        shouldShow: f,
        onShow: A,
        children: o,
    });
}
function ep(e) {
    let { children: t, userId: n, title: r, badgeImage: l, shouldShow: i } = e,
        o = (0, s.bG)(
            [em.A, ef.A],
            () =>
                ef.A.hidePersonalInformation
                    ? Q.intl.string(Q.t.Br1ls3)
                    : null != n
                      ? (em.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(eu.A, { title: r, body: o, badgeImage: l, badgeName: r, shouldShow: i, children: t });
}
var eE = n(429811),
    eh = n(683063);
function eb(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: l, children: s } = e;
    return (0, a.jsx)(eh.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: r,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: l,
        children: s,
    });
}
var ex = n(116833),
    eA = n(704640),
    e_ = n(208223),
    eN = n(642481),
    eR = n(424746),
    ev = n(682901),
    ej = n(49999),
    eI = n(518477);
let ey = function (e) {
    let {
            badgeId: t = ev.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: l,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = ev.VD[t].nameUnformattedNitro,
        m = Q.intl.string(u).toLocaleUpperCase(),
        f = ev.VD[t].rarity,
        g = (0, eA.A)(t),
        p = (0, e_.I)(t).standard;
    (0, r.useEffect)(() => {
        (ex.m[ex.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(ej.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(eu.A, {
            targetElementRef: s,
            onShow: c,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: p,
            badgeName: m,
            progressCircle: t,
            children: l,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ex.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eR.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: 300,
              onShow: c,
              ...h,
              children: l,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  l,
                  (0, a.jsx)(eN.A, {
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
var eT = n(592265);
let eC = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, a.jsxs)("div", {
        className: eT.R,
        children: [t, (0, a.jsx)("div", { className: eT.A, children: n }), r],
    });
};
var eS = n(224016),
    eD = n(747278);
let eM = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, e_.I)(n.id).standard;
    return (0, a.jsxs)(eC, {
        assetComponent: (0, a.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eS.A, { width: 56, className: eD.R }),
        children: [
            (0, a.jsx)(V.D, { variant: "heading-xl/semibold", children: Q.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(h.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: eD.K,
                children: t.description,
            }),
        ],
    });
};
var eP = n(30084),
    eO = n(506988),
    eU = n(976860),
    eB = n(780964),
    eG = n(766075),
    ew = n(305003),
    ek = n(195118),
    eL = n(31188),
    eH = n(620882),
    eV = n(370277);
function e$(e) {
    let { children: t, targetElementRef: n, delay: l, showSubtext: s, forceOpen: i } = e,
        [o, d] = r.useState(!1),
        c = r.useRef(null),
        u = r.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    r.useEffect(() => u, [u]);
    let m = r.useCallback(() => {
        (u(),
            (c.current = window.setTimeout(() => {
                ((c.current = null), d(!0));
            }, l)));
    }, [l, u]);
    r.useEffect(() => {
        i && !o && m();
    }, [i, o, m]);
    let f = r.useCallback(() => {
            m();
        }, [m]),
        g = r.useCallback(() => {
            (u(), d(!1));
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
                children: [(0, a.jsx)(eF, { showSubtext: s }), (0, a.jsx)(eL.F, {})],
            }),
        ],
    });
}
function eF(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eC, {
        assetComponent: (0, a.jsx)(eH.A, { className: eV.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(V.D, {
            variant: "heading-sm/semibold",
            className: eV.RK,
            children: Q.intl.string(Q.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(V.D, {
                variant: "heading-xl/semibold",
                className: t ? void 0 : eV.Qn,
                children: Q.intl.string(Q.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(h.E, { variant: "body-xs/normal", className: eV.lV, children: Q.intl.string(Q.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eX = n(129230),
    ez = n(474090),
    eK = n(439174),
    eW = n(741534),
    eY = n(527212),
    eq = n(874402),
    eZ = n(652215),
    eQ = n(758836),
    eJ = n(854232),
    e0 = n(816645);
function e1(e) {
    let t,
        {
            badges: n,
            overflowCount: l,
            className: d,
            badgeClassName: c,
            displayProfile: f,
            onClose: G,
            shouldOpenBadgeTooltip: w,
            shouldGlowTenureBadge: k,
            popoutAnchorRef: L,
            containerRef: H,
            isTargetUserBot: V,
        } = e,
        $ = (0, B.A)((e) => e.isOpen),
        F = r.useRef(null),
        X = (0, p.A)(F, H),
        K = r.useRef(null),
        W = r.useRef(null),
        Y = r.useRef(null),
        q = r.useRef(null),
        Z = r.useRef(!1),
        { analyticsLocations: J } = (0, S.Ay)(C.A.BADGE),
        { context: ee, trackUserProfileAction: en } = (0, z.NJ)(),
        ea = u.default.getCurrentUser(),
        er = f?.userId === ea?.id,
        el = (0, ez.CC)(ea?.premiumType, ev.PremiumTypes.TIER_2),
        es = (0, o.d)({ location: "UserProfileBadgeList" }),
        ei = (function (e) {
            let { location: t } = e;
            return U.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (es || ei) && f?.userId != null && !i.Ay.hasCatalogFor(f.userId) && (0, D.RS)(f.userId);
    }, [es, ei, f?.userId]);
    let eo = f?.userId,
        ec = (0, s.bG)(
            [i.Ay],
            () => {
                if (!ei || null == eo) return null;
                let e = {};
                for (let t of n) {
                    let n = (0, M.w0)(t.id);
                    if (null == n) continue;
                    let a = i.Ay.getBadgeById(n, eo)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [ei, eo, n],
        ),
        eu = er && es && null != L,
        em = !eu && es,
        ef = eu && 0 === n.length,
        ep = ea?.id,
        eh = er && es,
        ex = (0, s.bG)([i.Ay], () => eh && null != ep && i.Ay.getUnreadBadges(ep).length > 0, [eh, ep]),
        eA =
            (function (e) {
                let { location: t, hasUnread: n } = e;
                return (0, s.bG)([P.Bt], () => n && O.getConfig({ location: t }).enabled, [n, t]);
            })({ location: "UserProfileBadgeList", hasUnread: ex }) && ex,
        e_ = (0, s.bG)(
            [i.Ay],
            () => null != ep && (!i.Ay.hasCatalogFor(ep) || i.Ay.getBadges(ep).some((e) => e.owned)),
            [ep],
        ),
        eN = eu && $;
    function eR(e) {
        if ((B.A.setState({ isOpen: e }), !e)) {
            if (Z.current) {
                Z.current = !1;
                return;
            }
            requestAnimationFrame(() => q.current?.focus());
        }
    }
    let ej = (0, eY.AP)(ea?.id ?? null),
        eT = (0, m.A)(ej).some((e) => e.id === ew.A.ORB_PROFILE_BADGE),
        eC = eu && !ef && 0 === l,
        eS = null;
    l > 0 &&
        ((eS = (0, a.jsx)(h.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "text-default",
            className: e0.AX,
            "aria-hidden": !0,
            children: Q.intl.format(Q.t.n7CiSK, { count: l }),
        })),
        (t = Q.intl.formatToPlainString(Q.t.eIHfGZ, { overflow_count: l })));
    let eD = (0, a.jsxs)("div", {
        ref: X,
        className: g()(e0.kL, es && !0 !== V && e0.Yq, eu && e0.Tx, eC && e0.gK, eA && e0.TW, d),
        ...(ef
            ? null
            : {
                  "aria-label": eA
                      ? `${Q.intl.string(Q.t.VWV0y5)}, ${Q.intl.string(Q.t.y2b7CA)}`
                      : Q.intl.string(Q.t.VWV0y5),
                  role: "group",
              }),
        ...(eu && !ef ? { onClick: () => eR(!eN) } : null),
        children: [
            eA && (0, a.jsx)("span", { className: e0.Zm, "aria-hidden": !0 }),
            ef &&
                (0, a.jsx)(b.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: q,
                        type: "button",
                        className: e0.p$,
                        "aria-label": eA ? `${Q.intl.string(Q.t.l6w3Vj)}, ${Q.intl.string(Q.t.y2b7CA)}` : void 0,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eN,
                        onClick: (e) => {
                            (e.stopPropagation(), eR(!eN));
                        },
                        children: [
                            (0, a.jsx)(x.PlusSmallIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(h.E, {
                                tag: "span",
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === ew.A.ORB_PROFILE_BADGE,
                    r = (0, eK.e0)(e.id),
                    l = null != r || e.id === eJ.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== r && e.id !== eJ.K,
                    o = ec?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eI.L7)(e.icon),
                        className: g()(e0.qS, null != o && e0.Do, c),
                    }),
                    p = null != w && w(e.id),
                    h = {
                        onClick: (a) => {
                            if (
                                (en({ action: "PRESS_BADGE" }),
                                (0, eW.vP)({
                                    badgeId: (0, M.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: J,
                                    ...ee,
                                }),
                                eu)
                            )
                                return void a.preventDefault();
                            let r = f?.userId != null ? u.default.getUser(f.userId) : null;
                            if (es && r?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, et.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, M.w0)(e.id),
                                        targetUserId: f?.userId,
                                        targetUsername: r?.globalName ?? r?.username,
                                    }));
                                return;
                            }
                            if ((0, M.w0)(e.id) === E.$.GIFTING) {
                                (a.preventDefault(),
                                    G?.(),
                                    (0, eG.openUserSettings)(eB.X.GIFT_PANEL, { analyticsLocations: J }));
                                return;
                            }
                            if (n) {
                                ((0, eE.Cz)({
                                    tab: eQ.G2.ORBS,
                                    analyticsLocations: J,
                                    analyticsSource: C.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    G?.(),
                                    (0, A.s7)());
                                return;
                            }
                            if (l) {
                                if (
                                    (a.preventDefault(),
                                    eX.default.track(eZ.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: el,
                                        viewed_user_id: f?.userId,
                                    }),
                                    el)
                                ) {
                                    (er
                                        ? ((0, eU.pX)(eZ.BVt.NITRO_HOME), (0, A.s7)())
                                        : (0, eP.D)({ analyticsLocations: J, displayProfile: f }),
                                        G?.());
                                    return;
                                }
                                if (er) {
                                    let t = null != e.link ? (0, I.default)(e.link, { analyticsLocations: J }) : null;
                                    if (null == t) return;
                                    return (G?.(), (0, A.s7)(), t(a));
                                }
                                return ((0, eP.D)({ analyticsLocations: J, displayProfile: f }), void G?.());
                            }
                            let s = null != e.link ? (0, I.default)(e.link, { analyticsLocations: J }) : null;
                            if (null != s) return (G?.(), (0, A.s7)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === m.h &&
                                (0, y.r)({
                                    type: T.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: eO.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                en({ action: "HOVER_BADGE" }),
                                (0, eW.vP)({
                                    badgeId: (0, M.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: J,
                                    ...ee,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(eu ? { "aria-haspopup": "dialog", "aria-expanded": eN } : null),
                        style: { filter: k && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                    };
                if (es)
                    return (0, a.jsx)(
                        eg,
                        {
                            shouldShow: !eN,
                            legacyBadgeId: e.id,
                            userId: f?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eI.L7)(e.icon),
                            children: (0, a.jsx)(_.Anchor, { ...h, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: K, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(ey, {
                                badgeId: e.id,
                                targetElementRef: K,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eX.default.track(eZ.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (er ? "self" : "other"),
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
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: W, children: d });
                    return (0, a.jsx)(
                        e$,
                        {
                            targetElementRef: W,
                            delay: 300,
                            showSubtext: !eT && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: Y, children: d });
                    return (0, a.jsx)(
                        eb,
                        { targetElementRef: Y, delay: 300, forceOpen: p, badgeDescription: e.description, children: n },
                        `${e.id}-${t}`,
                    );
                }
                let b = (0, a.jsx)(_.Anchor, { ...h, children: d }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eJ.K
                            ? (0, a.jsx)(eM, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: l && e.id !== eJ.K ? r : void 0 });
                return (0, a.jsx)(
                    N.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: p, delay: 300, ariaHidden: !0, children: b },
                    `${e.id}-${t}`,
                );
            }),
            l > 0 &&
                (em
                    ? (0, a.jsx)(b.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: g()(e0.$O, e0.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != eo ? u.default.getUser(eo) : null;
                                  (0, et.openBadgeDirectoryModal)({
                                      targetUserId: eo,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: eS,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: e0.$O, children: [(0, a.jsx)(R.A, { children: t }), eS] })),
            eu &&
                !ef &&
                (0, a.jsx)(N.m, {
                    text: Q.intl.string(Q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: q,
                    children: (0, a.jsx)(b.vN, {
                        children: (0, a.jsx)("button", {
                            ref: q,
                            type: "button",
                            className: g()(e0.r9, l > 0 ? e0.v_ : e0.Y5),
                            "aria-label": Q.intl.string(Q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eN,
                            onClick: (e) => {
                                (e.stopPropagation(), eR(!eN));
                            },
                            children: (0, a.jsx)(v.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e0.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return eu
        ? (0, a.jsx)(j.Y, {
              targetElementRef: ef && !e_ ? F : L,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: eN,
              onRequestClose: (e) => {
                  let t = e?.target;
                  F.current?.contains(t) === !0 || (t?.closest(`[${eq.m}]`) == null && eR(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(ed, { onClose: t, returnFocusRef: q, skipReturnFocusRef: Z });
              },
              children: () => eD,
          })
        : eD;
}
var e8 = n(996988);
let e2 = {
    [e8.d.POPOUT]: 12,
    [e8.d.MODAL]: 26,
    [e8.d.SIDEBAR]: 13,
    [e8.d.VIDEO_TILE_BACKGROUND]: 12,
    [e8.d.EMBED]: 12,
};
function e5(e) {
    let t,
        {
            displayProfile: n,
            themeType: f,
            isRedesignEnabled: g,
            pendingLegacyUsernameDisabled: p,
            pendingBadges: E,
            showPendingBadgeEdits: h = !1,
            onClose: b,
            shouldOpenBadgeTooltip: x,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: _,
            containerRef: N,
        } = e,
        R = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        v = n?.userId,
        j = (0, s.bG)([u.default], () => null != v && u.default.getUser(v)?.bot === !0, [v]),
        I = (0, m.A)(n, p),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: T } = (0, c.A)(),
        C = (0, s.yK)([i.Ay], () => (h && null != v && i.Ay.hasCatalogFor(v) ? i.Ay.getBadges(v) : []), [h, v]),
        S = r.useMemo(() => {
            let e = I;
            if (null != E) {
                let t = new Set(I.map((e) => e.id));
                e = [...I, ...E.filter((e) => !t.has(e.id))];
            }
            return h ? (0, d.Rr)(e, C, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: T }) : e;
        }, [I, E, h, C, y, T]);
    if (0 === S.length && !h) return null;
    let D = R && !j,
        M = D ? Math.max(S.length - 6, 0) : 0;
    return (
        (t = D
            ? [S.slice(0, 6)]
            : f === e8.d.MODAL_V2
              ? [S]
              : (0, l.chunk)(S, !0 === g && f === e8.d.SIDEBAR ? e2[e8.d.POPOUT] : e2[f])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e1,
                    {
                        badges: e,
                        overflowCount: M,
                        displayProfile: n,
                        onClose: b,
                        shouldOpenBadgeTooltip: x,
                        shouldGlowTenureBadge: A,
                        isTargetUserBot: j,
                        popoutAnchorRef: _,
                        containerRef: 0 === t ? N : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
