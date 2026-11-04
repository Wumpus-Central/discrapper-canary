n.d(t, { A: () => e8 });
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
    f = n(262),
    m = n(503698),
    g = n.n(m),
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
    I = n(697794),
    y = n(438457),
    T = n(144779),
    C = n(793574),
    S = n(688810),
    D = n(682618),
    O = n(731309);
let M = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var P = n(248284),
    U = n(675816),
    B = n(425763),
    G = n(952270),
    w = n(365199),
    k = n(315710),
    L = n(534514),
    H = n(821609),
    V = n(442433),
    $ = n(450232),
    F = n(183555),
    X = n(451395),
    z = n(327791),
    K = n(315629),
    Y = n(403581),
    W = n(87719),
    q = n(792996),
    Z = n(207711);
function Q(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(K.h, {
        color: "nitro-pink",
        className: Z.U,
        children: [
            (0, a.jsx)(h.E, {
                variant: "body-xs/medium",
                color: "text-default",
                className: Z.t,
                children: q.intl.string(q.t.cKIIzk),
            }),
            (0, a.jsx)(H.$, {
                variant: "expressive",
                size: "sm",
                icon: Y.t,
                text: q.intl.string(q.t.pj0XBN),
                onClick: function () {
                    (t(), (0, W.e)());
                },
            }),
        ],
    });
}
var J = n(470739),
    ee = n(577931),
    et = n(494881);
let en = "PROFILE_BADGES",
    ea = "BADGE";
function er(e) {
    let { reorderableIndex: t, onReorder: n, ...l } = e,
        { badge: s, index: i } = l,
        o = (0, B.VU)(),
        d = r.useRef(null);
    return (0, a.jsxs)(X.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: en,
        itemType: ea,
        "aria-label": q.intl.formatToPlainString(q.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: et.oE,
        draggingClassName: et.Id,
        dropBeforeClassName: et.A,
        dropAfterClassName: et.Ze,
        children: [
            (0, a.jsx)(el, { ...l }),
            (0, a.jsx)(X.jV, {
                buttonRef: d,
                className: et.BU,
                "aria-label": q.intl.formatToPlainString(q.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function el(e) {
    let { badge: t, index: l, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = r.useState(!1);
    function u(e) {
        (c(!0),
            (0, V.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e(434691), n.e(918024), n.e(787847)]).then(
                        n.bind(n, 842810),
                    );
                    return (n) => (0, a.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: i });
                },
                { onClose: () => c(!1) },
            ));
    }
    let f = t.hidden ?? !1;
    return (0, a.jsxs)("div", {
        className: g()(et.fw, d && et.HV),
        onContextMenu: u,
        children: [
            (0, a.jsx)("div", {
                className: et.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, a.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: g()(et.pC, f && et.jx),
                    }),
            }),
            f &&
                (0, a.jsx)("div", {
                    className: et.Gf,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(G.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(b.vN, {
                children: (0, a.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: et.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": q.intl.formatToPlainString(f ? q.t["3Uwmdt"] : q.t.Ci7gvp, {
                        badgeName: t.name,
                        position: l + 1,
                    }),
                    onClick: u,
                    children: (0, a.jsx)(w.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function es() {
    let e = (0, B.VU)(),
        { badge: t, sourceClientOffset: n } = (0, U.V)((e) => {
            let t = e.getItem();
            return {
                badge: t?.itemType === ea ? t.itemPreviewProps?.badge : void 0,
                sourceClientOffset: e.getSourceClientOffset(),
            };
        });
    if (null == t || null == n) return null;
    let r = n.y - 32 * !!e;
    return (0, a.jsx)("div", {
        className: et.dk,
        style: { transform: `translate3d(${n.x}px, ${r}px, 0)` },
        children: (0, a.jsx)("div", {
            className: et.yk,
            children:
                null != t.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: et.pC,
                }),
        }),
    });
}
function ei(e) {
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: l } = e,
        o = r.useRef(null),
        c = r.useId();
    (r.useLayoutEffect(() => {
        o.current?.focus();
    }, []),
        (0, k.tj)(o, { returnRef: n }));
    let { analyticsLocations: f } = (0, S.Ay)(C.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: m } = (0, F.NJ)();
    r.useEffect(() => {
        m({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: f });
    }, []);
    let { fixedBadges: p, reorderableBadges: E, hiddenBadges: b } = (0, ee.A)(),
        x = (0, z.A)(),
        A = (0, B.VU)(),
        _ =
            (0, U.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === ea;
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
    let D = (0, X.w9)({ listType: en, itemType: ea, onFallbackDrop: (e) => T(e.index, N.length - 1) }),
        O = (0, X.w9)({ listType: en, itemType: ea });
    r.useLayoutEffect(() => {
        if (_)
            return (
                O(document.body),
                () => {
                    O(null);
                }
            );
    }, [O, _]);
    let M = I > 0,
        P = y && !M,
        G = !x && !P,
        w = x ? q.t.VHaYM7 : q.t["7Qs/YX"];
    function V() {
        (null != l && (l.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: g()(et.SW, P && et.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": c,
        children: [
            (0, a.jsxs)("div", {
                className: g()(et.Qs, G && et.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: et.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: et.$,
                                children: [
                                    x && (0, a.jsx)($.A, { size: "xs", className: et.oU }),
                                    (0, a.jsx)(L.D, {
                                        id: c,
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: q.intl.string(q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !P &&
                                (0, a.jsx)(h.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: q.intl.string(w),
                                }),
                        ],
                    }),
                    G && (0, a.jsx)(Q, { onClose: t }),
                    P &&
                        (0, a.jsx)(h.E, {
                            className: et.p$,
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: q.intl.string(q.t.VT02mI),
                        }),
                    M &&
                        (0, a.jsxs)("div", {
                            className: g()(et.yq, _ && et.T0),
                            role: "group",
                            "aria-label": q.intl.string(q.t.VWV0y5),
                            children: [
                                x &&
                                    (0, a.jsx)("div", {
                                        ref: (e) => {
                                            D(e);
                                        },
                                        className: et.u$,
                                        "aria-hidden": !0,
                                    }),
                                p.map((e, t) =>
                                    (0, a.jsx)(
                                        el,
                                        { badge: e, index: t, onClose: V, onAction: j, controlRef: v(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                E.map((e, t) =>
                                    x
                                        ? (0, a.jsx)(
                                              er,
                                              {
                                                  badge: e,
                                                  index: p.length + t,
                                                  onClose: V,
                                                  onAction: j,
                                                  controlRef: v(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: T,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              el,
                                              {
                                                  badge: e,
                                                  index: p.length + t,
                                                  onClose: V,
                                                  onAction: j,
                                                  controlRef: v(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                b.map((e, t) =>
                                    (0, a.jsx)(
                                        el,
                                        {
                                            badge: e,
                                            index: p.length + E.length + t,
                                            onClose: V,
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
            (0, a.jsx)(es, {}),
            (0, a.jsx)(H.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: q.intl.string(q.t.fN2how),
                onClick: function () {
                    (m({ action: "PRESS_VIEW_BADGES", analyticsLocations: f }),
                        V(),
                        (0, J.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var eo = n(775602),
    ed = n(328464),
    ec = n(851767),
    eu = n(351906);
function ef(e) {
    let t,
        n,
        l,
        { children: o, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: f, shouldShow: m } = e,
        g = (0, O.w0)(d),
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
        x = (0, s.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        A = r.useCallback(() => {
            null != c && i.Ay.isCatalogStaleFor(c) && (0, D.RS)(c);
        }, [c]),
        _ = p?.badge_id === E.$.PREMIUM_TENURE,
        N = g === E.$.LEGACY_USERNAME,
        R = h?.name,
        v = _ ? q.intl.string(q.t.Ipxkog) : (p?.name ?? u);
    _ ? (l = n = null != R ? `${v} ${R}` : v) : null != R ? ((t = v), (n = R), (l = `${v} ${R}`)) : ((n = v), (l = v));
    let j = x ? void 0 : p?.complex_icon_animated_url,
        I = j ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? f,
        y = null != j && I === j;
    if (N) return (0, a.jsx)(em, { userId: c, title: n, badgeImage: I, shouldShow: m, children: o });
    let T = p?.info_label ?? (null != b ? q.intl.formatToPlainString(q.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, a.jsx)(ed.A, {
        title: n,
        eyebrow: t,
        body: T,
        badgeImage: I,
        badgeName: l,
        variant: _ ? "nitro" : "default",
        isAnimated: y,
        shouldShow: m,
        onShow: A,
        children: o,
    });
}
function em(e) {
    let { children: t, userId: n, title: r, badgeImage: l, shouldShow: i } = e,
        o = (0, s.bG)(
            [ec.A, eu.A],
            () =>
                eu.A.hidePersonalInformation
                    ? q.intl.string(q.t.Br1ls3)
                    : null != n
                      ? (ec.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(ed.A, { title: r, body: o, badgeImage: l, badgeName: r, shouldShow: i, children: t });
}
var eg = n(110676),
    ep = n(683063);
function eE(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: l, children: s } = e;
    return (0, a.jsx)(ep.u, {
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
var eh = n(116833),
    eb = n(704640),
    ex = n(208223),
    eA = n(642481),
    e_ = n(424746),
    eN = n(682901),
    eR = n(49999),
    ev = n(518477);
let ej = function (e) {
    let {
            badgeId: t = eN.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: l,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eN.VD[t].nameUnformattedNitro,
        f = q.intl.string(u).toLocaleUpperCase(),
        m = eN.VD[t].rarity,
        g = (0, eb.A)(t),
        p = (0, ex.I)(t).standard;
    (0, r.useEffect)(() => {
        (eh.m[eh.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(eR.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(ed.A, {
            targetElementRef: s,
            onShow: c,
            title: f,
            body: e.body,
            variant: "nitro",
            rarity: m,
            badgeImage: p,
            badgeName: f,
            progressCircle: t,
            children: l,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: eh.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: f, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: f,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(e_.A, {
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
                  (0, a.jsx)(eA.A, {
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
var eI = n(592265);
let ey = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, a.jsxs)("div", {
        className: eI.R,
        children: [t, (0, a.jsx)("div", { className: eI.A, children: n }), r],
    });
};
var eT = n(224016),
    eC = n(747278);
let eS = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        r = (0, ex.I)(n.id).standard;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)("img", { src: r, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eT.A, { width: 56, className: eC.R }),
        children: [
            (0, a.jsx)(L.D, { variant: "heading-xl/semibold", children: q.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(h.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: eC.K,
                children: t.description,
            }),
        ],
    });
};
var eD = n(30084),
    eO = n(506988),
    eM = n(976860),
    eP = n(780964),
    eU = n(766075),
    eB = n(305003),
    eG = n(195118),
    ew = n(31188),
    ek = n(620882),
    eL = n(370277);
function eH(e) {
    let { children: t, targetElementRef: n, delay: l, showSubtext: s, forceOpen: i } = e,
        [o, d] = r.useState(!1),
        c = r.useRef(null),
        u = r.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    r.useEffect(() => u, [u]);
    let f = r.useCallback(() => {
        (u(),
            (c.current = window.setTimeout(() => {
                ((c.current = null), d(!0));
            }, l)));
    }, [l, u]);
    r.useEffect(() => {
        i && !o && f();
    }, [i, o, f]);
    let m = r.useCallback(() => {
            f();
        }, [f]),
        g = r.useCallback(() => {
            (u(), d(!1));
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: m,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(eG.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eV, { showSubtext: s }), (0, a.jsx)(ew.F, {})],
            }),
        ],
    });
}
function eV(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(ey, {
        assetComponent: (0, a.jsx)(ek.A, { className: eL.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(L.D, {
            variant: "heading-sm/semibold",
            className: eL.RK,
            children: q.intl.string(q.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(L.D, {
                variant: "heading-xl/semibold",
                className: t ? void 0 : eL.Qn,
                children: q.intl.string(q.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(h.E, { variant: "body-xs/normal", className: eL.lV, children: q.intl.string(q.t.MEV0GI) })
                : void 0,
        ],
    });
}
var e$ = n(129230),
    eF = n(474090),
    eX = n(439174),
    ez = n(741534),
    eK = n(527212),
    eY = n(874402),
    eW = n(652215),
    eq = n(758836),
    eZ = n(854232),
    eQ = n(816645);
function eJ(e) {
    let t,
        {
            badges: n,
            overflowCount: l,
            className: d,
            badgeClassName: c,
            displayProfile: m,
            onClose: U,
            shouldOpenBadgeTooltip: B,
            shouldGlowTenureBadge: G,
            popoutAnchorRef: w,
            containerRef: k,
            isTargetUserBot: L,
        } = e,
        H = (0, P.A)((e) => e.isOpen),
        V = r.useRef(null),
        $ = (0, p.A)(V, k),
        X = r.useRef(null),
        z = r.useRef(null),
        K = r.useRef(null),
        Y = r.useRef(null),
        W = r.useRef(!1),
        { analyticsLocations: Z } = (0, S.Ay)(C.A.BADGE),
        { context: Q, trackUserProfileAction: ee } = (0, F.NJ)(),
        et = u.default.getCurrentUser(),
        en = (0, eF.CC)(et?.premiumType, eN.PremiumTypes.TIER_2),
        ea = (0, o.d)({ location: "UserProfileBadgeList" }),
        er = (function (e) {
            let { location: t } = e;
            return M.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (ea || er) && m?.userId != null && !i.Ay.hasCatalogFor(m.userId) && (0, D.RS)(m.userId);
    }, [ea, er, m?.userId]);
    let el = m?.userId,
        es = (0, s.bG)(
            [i.Ay],
            () => {
                if (!er || null == el) return null;
                let e = {};
                for (let t of n) {
                    let n = (0, O.w0)(t.id);
                    if (null == n) continue;
                    let a = i.Ay.getBadgeById(n, el)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [er, el, n],
        ),
        eo = m?.userId === et?.id,
        ed = eo && ea && null != w,
        ec = !ed && ea,
        eu = ed && 0 === n.length,
        em = et?.id,
        ep = (0, s.bG)(
            [i.Ay],
            () => null != em && (!i.Ay.hasCatalogFor(em) || i.Ay.getBadges(em).some((e) => e.owned)),
            [em],
        ),
        eh = ed && H;
    function eb(e) {
        if ((P.A.setState({ isOpen: e }), !e)) {
            if (W.current) {
                W.current = !1;
                return;
            }
            requestAnimationFrame(() => Y.current?.focus());
        }
    }
    let ex = (0, eK.AP)(et?.id ?? null),
        eA = (0, f.A)(ex).some((e) => e.id === eB.A.ORB_PROFILE_BADGE),
        e_ = ed && !eu && 0 === l,
        eR = null;
    l > 0 &&
        ((eR = (0, a.jsx)(h.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "text-default",
            className: eQ.AX,
            "aria-hidden": !0,
            children: q.intl.format(q.t.n7CiSK, { count: l }),
        })),
        (t = q.intl.formatToPlainString(q.t.eIHfGZ, { overflow_count: l })));
    let eI = (0, a.jsxs)("div", {
        ref: $,
        className: g()(eQ.kL, ea && !0 !== L && eQ.Yq, ed && eQ.Tx, e_ && eQ.gK, d),
        ...(eu ? null : { "aria-label": q.intl.string(q.t.VWV0y5), role: "group" }),
        ...(ed && !eu ? { onClick: () => eb(!eh) } : null),
        children: [
            eu &&
                (0, a.jsx)(b.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: Y,
                        type: "button",
                        className: eQ.p$,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eh,
                        onClick: (e) => {
                            (e.stopPropagation(), eb(!eh));
                        },
                        children: [
                            (0, a.jsx)(x.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(h.E, {
                                tag: "span",
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: q.intl.string(q.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === eB.A.ORB_PROFILE_BADGE,
                    r = (0, eX.e0)(e.id),
                    l = null != r || e.id === eZ.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== r && e.id !== eZ.K,
                    o = es?.[e.id],
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, ev.L7)(e.icon),
                        className: g()(eQ.qS, null != o && eQ.Do, c),
                    }),
                    p = null != B && B(e.id),
                    h = {
                        onClick: (a) => {
                            if (
                                (ee({ action: "PRESS_BADGE" }),
                                (0, ez.vP)({
                                    badgeId: (0, O.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: Z,
                                    ...Q,
                                }),
                                ed)
                            )
                                return void a.preventDefault();
                            let r = m?.userId != null ? u.default.getUser(m.userId) : null;
                            if (ea && r?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, J.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, O.w0)(e.id),
                                        targetUserId: m?.userId,
                                        targetUsername: r?.globalName ?? r?.username,
                                    }));
                                return;
                            }
                            if ((0, O.w0)(e.id) === E.$.GIFTING) {
                                (a.preventDefault(),
                                    U?.(),
                                    (0, eU.openUserSettings)(eP.X.GIFT_PANEL, { analyticsLocations: Z }));
                                return;
                            }
                            if (n) {
                                ((0, eg.Cz)({
                                    tab: eq.G2.ORBS,
                                    analyticsLocations: Z,
                                    analyticsSource: C.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    U?.(),
                                    (0, A.s7)());
                                return;
                            }
                            if (l) {
                                if (
                                    (a.preventDefault(),
                                    e$.default.track(eW.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: en,
                                        viewed_user_id: m?.userId,
                                    }),
                                    en)
                                ) {
                                    (eo
                                        ? ((0, eM.pX)(eW.BVt.NITRO_HOME), (0, A.s7)())
                                        : (0, eD.D)({ analyticsLocations: Z, displayProfile: m }),
                                        U?.());
                                    return;
                                }
                                if (eo) {
                                    let t = null != e.link ? (0, I.default)(e.link, { analyticsLocations: Z }) : null;
                                    if (null == t) return;
                                    return (U?.(), (0, A.s7)(), t(a));
                                }
                                return ((0, eD.D)({ analyticsLocations: Z, displayProfile: m }), void U?.());
                            }
                            let s = null != e.link ? (0, I.default)(e.link, { analyticsLocations: Z }) : null;
                            if (null != s) return (U?.(), (0, A.s7)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === f.h &&
                                (0, y.r)({
                                    type: T.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: eO.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                ee({ action: "HOVER_BADGE" }),
                                (0, ez.vP)({
                                    badgeId: (0, O.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: Z,
                                    ...Q,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ed ? { "aria-haspopup": "dialog", "aria-expanded": eh } : null),
                        style: { filter: G && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
                    };
                if (ea)
                    return (0, a.jsx)(
                        ef,
                        {
                            shouldShow: !eh,
                            legacyBadgeId: e.id,
                            userId: m?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, ev.L7)(e.icon),
                            children: (0, a.jsx)(_.Anchor, { ...h, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: X, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(ej, {
                                badgeId: e.id,
                                targetElementRef: X,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    e$.default.track(eW.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (eo ? "self" : "other"),
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
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: z, children: d });
                    return (0, a.jsx)(
                        eH,
                        {
                            targetElementRef: z,
                            delay: 300,
                            showSubtext: !eA && !e.isPreviewMode,
                            forceOpen: p,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(_.Anchor, { ...h, ref: K, children: d });
                    return (0, a.jsx)(
                        eE,
                        { targetElementRef: K, delay: 300, forceOpen: p, badgeDescription: e.description, children: n },
                        `${e.id}-${t}`,
                    );
                }
                let b = (0, a.jsx)(_.Anchor, { ...h, children: d }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== eZ.K
                            ? (0, a.jsx)(eS, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: l && e.id !== eZ.K ? r : void 0 });
                return (0, a.jsx)(
                    N.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: p, delay: 300, ariaHidden: !0, children: b },
                    `${e.id}-${t}`,
                );
            }),
            l > 0 &&
                (ec
                    ? (0, a.jsx)(b.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: g()(eQ.$O, eQ.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != el ? u.default.getUser(el) : null;
                                  (0, J.openBadgeDirectoryModal)({
                                      targetUserId: el,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: eR,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: eQ.$O, children: [(0, a.jsx)(R.A, { children: t }), eR] })),
            ed &&
                !eu &&
                (0, a.jsx)(N.m, {
                    text: q.intl.string(q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: Y,
                    children: (0, a.jsx)(b.vN, {
                        children: (0, a.jsx)("button", {
                            ref: Y,
                            type: "button",
                            className: g()(eQ.r9, l > 0 ? eQ.v_ : eQ.Y5),
                            "aria-label": q.intl.string(q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eh,
                            onClick: (e) => {
                                (e.stopPropagation(), eb(!eh));
                            },
                            children: (0, a.jsx)(v.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: eQ.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return ed
        ? (0, a.jsx)(j.Y, {
              targetElementRef: eu && !ep ? V : w,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: eh,
              onRequestClose: (e) => {
                  let t = e?.target;
                  V.current?.contains(t) === !0 || (t?.closest(`[${eY.m}]`) == null && eb(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(ei, { onClose: t, returnFocusRef: Y, skipReturnFocusRef: W });
              },
              children: () => eI,
          })
        : eI;
}
var e0 = n(996988);
let e1 = {
    [e0.d.POPOUT]: 12,
    [e0.d.MODAL]: 26,
    [e0.d.SIDEBAR]: 13,
    [e0.d.VIDEO_TILE_BACKGROUND]: 12,
    [e0.d.EMBED]: 12,
};
function e8(e) {
    let t,
        {
            displayProfile: n,
            themeType: m,
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
        I = (0, f.A)(n, p),
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
        O = D ? Math.max(S.length - 6, 0) : 0;
    return (
        (t = D
            ? [S.slice(0, 6)]
            : m === e0.d.MODAL_V2
              ? [S]
              : (0, l.chunk)(S, !0 === g && m === e0.d.SIDEBAR ? e1[e0.d.POPOUT] : e1[m])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    eJ,
                    {
                        badges: e,
                        overflowCount: O,
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
