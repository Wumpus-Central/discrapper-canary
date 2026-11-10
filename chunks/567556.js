n.d(t, { A: () => e2 });
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
    P = n(731309),
    M = n(620143);
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
    H = n(534514),
    V = n(821609),
    $ = n(442433),
    F = n(450232),
    z = n(183555),
    X = n(451395),
    K = n(327791),
    W = n(315629),
    Y = n(403581),
    q = n(87719),
    Z = n(792996),
    Q = n(207711);
function J(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(W.h, {
        color: "nitro-pink",
        className: Q.U,
        children: [
            (0, a.jsx)(h.E, {
                variant: "body-xs/medium",
                color: "text-default",
                className: Q.t,
                children: Z.intl.string(Z.t.cKIIzk),
            }),
            (0, a.jsx)(V.$, {
                variant: "expressive",
                size: "sm",
                icon: Y.NitroWheelIcon,
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
    er = "BADGE";
function el(e) {
    let { reorderableIndex: t, onReorder: n, ...l } = e,
        { badge: s, index: i } = l,
        o = (0, G.VU)(),
        d = r.useRef(null);
    return (0, a.jsxs)(X.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: ea,
        itemType: er,
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
            (0, a.jsx)(es, { ...l }),
            (0, a.jsx)(X.jV, {
                buttonRef: d,
                className: en.BU,
                "aria-label": Z.intl.formatToPlainString(Z.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function es(e) {
    let { badge: t, index: l, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = r.useState(!1);
    function u(e) {
        (c(!0),
            (0, $.L3)(
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
    let m = t.hidden ?? !1,
        f = !0 === t.has_updates,
        p = (0, M.e)({ location: "BadgeCustomizationPopout", hasUnread: f }) && f,
        E = Z.intl.formatToPlainString(m ? Z.t["3Uwmdt"] : Z.t.Ci7gvp, { badgeName: t.name, position: l + 1 });
    return (0, a.jsxs)("div", {
        className: g()(en.fw, d && en.HV),
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
                        className: g()(en.pC, m && en.jx),
                    }),
            }),
            p && (0, a.jsx)("div", { className: en.Zm, "aria-hidden": !0 }),
            m &&
                (0, a.jsx)("div", {
                    className: en.Gf,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(w.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(b.vN, {
                children: (0, a.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: en.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": p ? `${E}, ${Z.intl.string(Z.t.y2b7CA)}` : E,
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
                badge: t?.itemType === er ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let r = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: en.dk,
        style: { transform: `translate3d(${n.x}px, ${r}px, 0)` },
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
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: l } = e,
        o = r.useRef(null),
        c = r.useId();
    (r.useLayoutEffect(() => {
        o.current?.focus();
    }, []),
        (0, L.tj)(o, { returnRef: n }));
    let { analyticsLocations: m } = (0, S.Ay)(C.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: f } = (0, z.NJ)();
    r.useEffect(() => {
        f({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: m });
    }, []);
    let { fixedBadges: p, reorderableBadges: E, hiddenBadges: b } = (0, et.A)(),
        x = (0, K.A)(),
        A = (0, G.VU)(),
        _ =
            (0, B.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === er;
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
    let D = (0, X.w9)({ listType: ea, itemType: er, onFallbackDrop: (e) => T(e.index, N.length - 1) }),
        P = (0, X.w9)({ listType: ea, itemType: er });
    r.useLayoutEffect(() => {
        if (_)
            return (
                P(document.body),
                () => {
                    P(null);
                }
            );
    }, [P, _]);
    let M = I > 0,
        O = y && !M,
        U = !x && !O,
        w = x ? Z.t.VHaYM7 : Z.t["7Qs/YX"];
    function k() {
        (null != l && (l.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: g()(en.SW, O && en.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": c,
        children: [
            (0, a.jsxs)("div", {
                className: g()(en.Qs, U && en.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: en.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.$,
                                children: [
                                    x && (0, a.jsx)(F.A, { size: "xs", className: en.oU }),
                                    (0, a.jsx)(H.D, {
                                        id: c,
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !O &&
                                (0, a.jsx)(h.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: Z.intl.string(w),
                                }),
                        ],
                    }),
                    U && (0, a.jsx)(J, { onClose: t }),
                    O &&
                        (0, a.jsx)(h.E, {
                            className: en.p$,
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: Z.intl.string(Z.t.VT02mI),
                        }),
                    M &&
                        (0, a.jsxs)("div", {
                            className: g()(en.yq, _ && en.T0),
                            role: "group",
                            "aria-label": Z.intl.string(Z.t.VWV0y5),
                            children: [
                                x &&
                                    (0, a.jsx)("div", {
                                        ref: (e) => {
                                            D(e);
                                        },
                                        className: en.u$,
                                        "aria-hidden": !0,
                                    }),
                                p.map((e, t) =>
                                    (0, a.jsx)(
                                        es,
                                        { badge: e, index: t, onClose: k, onAction: j, controlRef: v(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                E.map((e, t) =>
                                    x
                                        ? (0, a.jsx)(
                                              el,
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
                                              es,
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
                                        es,
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
            (0, a.jsx)(ei, {}),
            (0, a.jsx)(V.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: Z.intl.string(Z.t.fN2how),
                onClick: function () {
                    (f({ action: "PRESS_VIEW_BADGES", analyticsLocations: m }),
                        k(),
                        (0, ee.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ed = n(775602),
    ec = n(328464),
    eu = n(851767),
    em = n(351906);
function ef(e) {
    let t,
        n,
        l,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: m, shouldShow: f } = e,
        g = (0, P.w0)(d),
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
        x = (0, s.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        A = r.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, D.RS)(c);
        }, [c]),
        _ = p?.badge_id === E.$.PREMIUM_TENURE,
        N = g === E.$.LEGACY_USERNAME,
        R = h?.name,
        v = _ ? Z.intl.string(Z.t.Ipxkog) : (p?.name ?? u);
    _ ? (l = n = null != R ? `${v} ${R}` : v) : null != R ? ((t = v), (n = R), (l = `${v} ${R}`)) : ((n = v), (l = v));
    let j = x ? void 0 : p?.complex_icon_animated_url,
        I = j ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? m,
        y = null != j && I === j;
    if (N) return (0, a.jsx)(eg, { userId: c, title: n, badgeImage: I, shouldShow: f, children: o });
    let T = p?.info_label ?? (null != b ? Z.intl.formatToPlainString(Z.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, a.jsx)(ec.A, {
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
function eg(e) {
    let { children: t, userId: n, title: r, badgeImage: l, shouldShow: i } = e,
        o = (0, s.bG)(
            [eu.A, em.A],
            () =>
                em.A.hidePersonalInformation
                    ? Z.intl.string(Z.t.Br1ls3)
                    : null != n
                      ? (eu.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ec.A, { title: r, body: o, badgeImage: l, badgeName: r, shouldShow: i, children: t });
}
var ep = n(429811),
    eE = n(683063);
function eh(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: l, children: s } = e;
    return (0, a.jsx)(eE.u, {
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
var eb = n(116833),
    ex = n(704640),
    eA = n(208223),
    e_ = n(642481),
    eN = n(424746),
    eR = n(682901),
    ev = n(49999),
    ej = n(518477);
let eI = function (e) {
    let {
            badgeId: t = eR.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: l,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eR.VD[t].nameUnformattedNitro,
        m = Z.intl.string(u).toLocaleUpperCase(),
        f = eR.VD[t].rarity,
        g = (0, ex.A)(t),
        p = (0, eA.I)(t).standard;
    (0, r.useEffect)(() => {
        (eb.m[eb.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(ev.i.USER_DISMISS);
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
            component: eb.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eN.A, {
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
                  (0, a.jsx)(e_.A, {
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
var ey = n(592265);
let eT = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, a.jsxs)("div", {
        className: ey.R,
        children: [t, (0, a.jsx)("div", { className: ey.A, children: n }), r],
    });
};
var eC = n(224016),
    eS = n(747278);
let eD = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, eA.I)(n.id).standard;
    return (0, a.jsxs)(eT, {
        assetComponent: (0, a.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eC.A, { width: 56, className: eS.R }),
        children: [
            (0, a.jsx)(H.D, { variant: "heading-xl/semibold", children: Z.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(h.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: eS.K,
                children: t.description,
            }),
        ],
    });
};
var eP = n(30084),
    eM = n(506988),
    eO = n(976860),
    eU = n(780964),
    eB = n(766075),
    eG = n(305003),
    ew = n(195118),
    ek = n(31188),
    eL = n(620882),
    eH = n(370277);
function eV(e) {
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
            (0, a.jsxs)(ew.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(e$, { showSubtext: s }), (0, a.jsx)(ek.F, {})],
            }),
        ],
    });
}
function e$(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eT, {
        assetComponent: (0, a.jsx)(eL.A, { className: eH.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(H.D, {
            variant: "heading-sm/semibold",
            className: eH.RK,
            children: Z.intl.string(Z.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(H.D, {
                variant: "heading-xl/semibold",
                className: t ? void 0 : eH.Qn,
                children: Z.intl.string(Z.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(h.E, { variant: "body-xs/normal", className: eH.lV, children: Z.intl.string(Z.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eF = n(129230),
    ez = n(474090),
    eX = n(439174),
    eK = n(741534),
    eW = n(527212),
    eY = n(874402),
    eq = n(652215),
    eZ = n(758836),
    eQ = n(854232),
    eJ = n(816645);
function e0(e) {
    let t,
        {
            badges: n,
            overflowCount: l,
            className: d,
            badgeClassName: c,
            displayProfile: f,
            onClose: B,
            shouldOpenBadgeTooltip: G,
            shouldGlowTenureBadge: w,
            popoutAnchorRef: k,
            containerRef: L,
            isTargetUserBot: H,
        } = e,
        V = (0, U.A)((e) => e.isOpen),
        $ = r.useRef(null),
        F = (0, p.A)($, L),
        X = r.useRef(null),
        K = r.useRef(null),
        W = r.useRef(null),
        Y = r.useRef(null),
        q = r.useRef(!1),
        { analyticsLocations: Q } = (0, S.Ay)(C.A.BADGE),
        { context: J, trackUserProfileAction: et } = (0, z.NJ)(),
        en = u.default.getCurrentUser(),
        ea = f?.userId === en?.id,
        er = (0, ez.CC)(en?.premiumType, eR.PremiumTypes.TIER_2),
        el = (0, o.d)({ location: "UserProfileBadgeList" }),
        es = (function (e) {
            let { location: t } = e;
            return O.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (el || es) && f?.userId != null && !i.Ay.hasCatalogFor(f.userId) && (0, D.RS)(f.userId);
    }, [el, es, f?.userId]);
    let ei = f?.userId,
        ed = (0, s.bG)(
            [i.Ay],
            () => {
                if (!es || null == ei) return null;
                let e = {};
                for (let t of n) {
                    let n = (0, P.w0)(t.id);
                    if (null == n) continue;
                    let a = i.Ay.getBadgeById(n, ei)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [es, ei, n],
        ),
        ec = ea && el && null != k,
        eu = !ec && el,
        em = ec && 0 === n.length,
        eg = en?.id,
        eE = ea && el,
        eb = (0, s.bG)([i.Ay], () => eE && null != eg && i.Ay.getUnreadBadges(eg).length > 0, [eE, eg]),
        ex = (0, M.e)({ location: "UserProfileBadgeList", hasUnread: eb }) && eb,
        eA = (0, s.bG)(
            [i.Ay],
            () => null != eg && (!i.Ay.hasCatalogFor(eg) || i.Ay.getBadges(eg).some((e) => e.owned)),
            [eg],
        ),
        e_ = ec && V;
    function eN(e) {
        if ((U.A.setState({ isOpen: e }), !e)) {
            if (q.current) {
                q.current = !1;
                return;
            }
            requestAnimationFrame(() => Y.current?.focus());
        }
    }
    let ev = (0, eW.AP)(en?.id ?? null),
        ey = (0, m.A)(ev).some((e) => e.id === eG.A.ORB_PROFILE_BADGE),
        eT = ec && !em && 0 === l,
        eC = null;
    l > 0 &&
        ((eC = (0, a.jsx)(h.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "text-default",
            className: eJ.AX,
            "aria-hidden": !0,
            children: Z.intl.format(Z.t.n7CiSK, { count: l }),
        })),
        (t = Z.intl.formatToPlainString(Z.t.eIHfGZ, { overflow_count: l })));
    let eS = (0, a.jsxs)("div", {
        ref: F,
        className: g()(eJ.kL, el && !0 !== H && eJ.Yq, ec && eJ.Tx, eT && eJ.gK, ex && eJ.TW, d),
        ...(em
            ? null
            : {
                  "aria-label": ex
                      ? `${Z.intl.string(Z.t.VWV0y5)}, ${Z.intl.string(Z.t.y2b7CA)}`
                      : Z.intl.string(Z.t.VWV0y5),
                  role: "group",
              }),
        ...(ec && !em ? { onClick: () => eN(!e_) } : null),
        children: [
            ex && (0, a.jsx)("span", { className: eJ.Zm, "aria-hidden": !0 }),
            em &&
                (0, a.jsx)(b.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: Y,
                        type: "button",
                        className: eJ.p$,
                        "aria-label": ex ? `${Z.intl.string(Z.t.l6w3Vj)}, ${Z.intl.string(Z.t.y2b7CA)}` : void 0,
                        "aria-haspopup": "dialog",
                        "aria-expanded": e_,
                        onClick: (e) => {
                            (e.stopPropagation(), eN(!e_));
                        },
                        children: [
                            (0, a.jsx)(x.PlusSmallIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(h.E, {
                                tag: "span",
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: Z.intl.string(Z.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === eG.A.ORB_PROFILE_BADGE,
                    r = (0, eX.e0)(e.id),
                    l = null != r || e.id === eQ.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== r && e.id !== eQ.K,
                    o = ed?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, ej.L7)(e.icon),
                        className: g()(eJ.qS, null != o && eJ.Do, c),
                    }),
                    p = null != G && G(e.id),
                    h = {
                        onClick: (a) => {
                            if (
                                (et({ action: "PRESS_BADGE" }),
                                (0, eK.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: Q,
                                    ...J,
                                }),
                                ec)
                            )
                                return void a.preventDefault();
                            let r = f?.userId != null ? u.default.getUser(f.userId) : null;
                            if (el && r?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, ee.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, P.w0)(e.id),
                                        targetUserId: f?.userId,
                                        targetUsername: r?.globalName ?? r?.username,
                                    }));
                                return;
                            }
                            if ((0, P.w0)(e.id) === E.$.GIFTING) {
                                (a.preventDefault(),
                                    B?.(),
                                    (0, eB.openUserSettings)(eU.X.GIFT_PANEL, { analyticsLocations: Q }));
                                return;
                            }
                            if (n) {
                                ((0, ep.Cz)({
                                    tab: eZ.G2.ORBS,
                                    analyticsLocations: Q,
                                    analyticsSource: C.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    B?.(),
                                    (0, A.s7)());
                                return;
                            }
                            if (l) {
                                if (
                                    (a.preventDefault(),
                                    eF.default.track(eq.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: er,
                                        viewed_user_id: f?.userId,
                                    }),
                                    er)
                                ) {
                                    (ea
                                        ? ((0, eO.pX)(eq.BVt.NITRO_HOME), (0, A.s7)())
                                        : (0, eP.D)({ analyticsLocations: Q, displayProfile: f }),
                                        B?.());
                                    return;
                                }
                                if (ea) {
                                    let t = null != e.link ? (0, I.default)(e.link, { analyticsLocations: Q }) : null;
                                    if (null == t) return;
                                    return (B?.(), (0, A.s7)(), t(a));
                                }
                                return ((0, eP.D)({ analyticsLocations: Q, displayProfile: f }), void B?.());
                            }
                            let s = null != e.link ? (0, I.default)(e.link, { analyticsLocations: Q }) : null;
                            if (null != s) return (B?.(), (0, A.s7)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === m.h &&
                                (0, y.r)({
                                    type: T.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: eM.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                et({ action: "HOVER_BADGE" }),
                                (0, eK.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: Q,
                                    ...J,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ec ? { "aria-haspopup": "dialog", "aria-expanded": e_ } : null),
                        style: { filter: w && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                    };
                if (el)
                    return (0, a.jsx)(
                        ef,
                        {
                            shouldShow: !e_,
                            legacyBadgeId: e.id,
                            userId: f?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ej.L7)(e.icon),
                            children: (0, a.jsx)(_.Anchor, { ...h, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: X, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eI, {
                                badgeId: e.id,
                                targetElementRef: X,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eF.default.track(eq.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (ea ? "self" : "other"),
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
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: K, children: d });
                    return (0, a.jsx)(
                        eV,
                        {
                            targetElementRef: K,
                            delay: 300,
                            showSubtext: !ey && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: W, children: d });
                    return (0, a.jsx)(
                        eh,
                        { targetElementRef: W, delay: 300, forceOpen: p, badgeDescription: e.description, children: n },
                        `${e.id}-${t}`,
                    );
                }
                let b = (0, a.jsx)(_.Anchor, { ...h, children: d }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eQ.K
                            ? (0, a.jsx)(eD, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: l && e.id !== eQ.K ? r : void 0 });
                return (0, a.jsx)(
                    N.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: p, delay: 300, ariaHidden: !0, children: b },
                    `${e.id}-${t}`,
                );
            }),
            l > 0 &&
                (eu
                    ? (0, a.jsx)(b.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: g()(eJ.$O, eJ.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != ei ? u.default.getUser(ei) : null;
                                  (0, ee.openBadgeDirectoryModal)({
                                      targetUserId: ei,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: eC,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: eJ.$O, children: [(0, a.jsx)(R.A, { children: t }), eC] })),
            ec &&
                !em &&
                (0, a.jsx)(N.m, {
                    text: Z.intl.string(Z.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: Y,
                    children: (0, a.jsx)(b.vN, {
                        children: (0, a.jsx)("button", {
                            ref: Y,
                            type: "button",
                            className: g()(eJ.r9, l > 0 ? eJ.v_ : eJ.Y5),
                            "aria-label": Z.intl.string(Z.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": e_,
                            onClick: (e) => {
                                (e.stopPropagation(), eN(!e_));
                            },
                            children: (0, a.jsx)(v.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: eJ.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return ec
        ? (0, a.jsx)(j.Y, {
              targetElementRef: em && !eA ? $ : k,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: e_,
              onRequestClose: (e) => {
                  let t = e?.target;
                  $.current?.contains(t) === !0 || (t?.closest(`[${eY.m}]`) == null && eN(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(eo, { onClose: t, returnFocusRef: Y, skipReturnFocusRef: q });
              },
              children: () => eS,
          })
        : eS;
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
        P = D ? Math.max(S.length - 6, 0) : 0;
    return (
        (t = D
            ? [S.slice(0, 6)]
            : f === e1.d.MODAL_V2
              ? [S]
              : (0, l.chunk)(S, !0 === g && f === e1.d.SIDEBAR ? e8[e1.d.POPOUT] : e8[f])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e0,
                    {
                        badges: e,
                        overflowCount: P,
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
