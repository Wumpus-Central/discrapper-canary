n.d(t, { A: () => e4 });
var a,
    r = n(477900),
    l = n(582128),
    s = n(435558),
    i = n(855986),
    o = n(982240),
    d = n(643056);
n(988341);
var c = n(234e3),
    u = n(555149),
    m = n(287809),
    f = n(262),
    g = n(503698),
    p = n.n(g),
    E = n(612324),
    h = n(70283),
    b = n(834730),
    x = n(559106),
    A = n(307301),
    _ = n(192308),
    N = n(28863),
    R = n(866665),
    v = n(140735),
    j = n(22231),
    y = n(265872),
    I = n(564508),
    T = n(438457),
    C = n(144779),
    S = n(793574),
    D = n(688810),
    O = n(682618),
    M = n(731309),
    P = n(620143),
    U = n(248284),
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
    Z = n(87719),
    q = n(792996),
    Q = n(207711);
function J(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(W.h, {
        color: "nitro-pink",
        className: Q.U,
        children: [
            (0, r.jsx)(b.E, {
                variant: "body-xs/medium",
                color: "text-default",
                className: Q.t,
                children: q.intl.string(q.t.cKIIzk),
            }),
            (0, r.jsx)(V.$, {
                variant: "expressive",
                size: "sm",
                icon: Y.NitroWheelIcon,
                text: q.intl.string(q.t.pj0XBN),
                onClick: function () {
                    (t(), (0, Z.e)());
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
    let { reorderableIndex: t, onReorder: n, ...a } = e,
        { badge: s, index: i } = a,
        o = (0, G.VU)(),
        d = l.useRef(null);
    return (0, r.jsxs)(X.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: ea,
        itemType: er,
        "aria-label": q.intl.formatToPlainString(q.t.n5kHOr, { position: i + 1, badgeName: s.name }),
        onReorder: n,
        onEnd: function () {
            o && requestAnimationFrame(() => d.current?.focus());
        },
        className: en.oE,
        draggingClassName: en.Id,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        children: [
            (0, r.jsx)(es, { ...a }),
            (0, r.jsx)(X.jV, {
                buttonRef: d,
                className: en.BU,
                "aria-label": q.intl.formatToPlainString(q.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function es(e) {
    let { badge: t, index: a, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = l.useState(!1);
    function u(e) {
        (c(!0),
            (0, $.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e(918024), n.e(434691), n.e(787847)]).then(
                        n.bind(n, 842810),
                    );
                    return (n) => (0, r.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: i });
                },
                { onClose: () => c(!1) },
            ));
    }
    let m = t.hidden ?? !1,
        f = !0 === t.has_updates,
        g = (0, P.e)({ location: "BadgeCustomizationPopout", hasUnread: f }) && f,
        E = q.intl.formatToPlainString(m ? q.t["3Uwmdt"] : q.t.Ci7gvp, { badgeName: t.name, position: a + 1 });
    return (0, r.jsxs)("div", {
        className: p()(en.fw, d && en.HV),
        onContextMenu: u,
        children: [
            (0, r.jsx)("div", {
                className: en.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, r.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: p()(en.pC, m && en.jx),
                    }),
            }),
            g && (0, r.jsx)("div", { className: en.Zm, "aria-hidden": !0 }),
            m &&
                (0, r.jsx)("div", {
                    className: en.Gf,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(w.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(x.vN, {
                children: (0, r.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: en.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": g ? `${E}, ${q.intl.string(q.t.y2b7CA)}` : E,
                    onClick: u,
                    children: (0, r.jsx)(k.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
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
    let a = n.y - 32 * !!e;
    return (0, r.jsx)("div", {
        className: en.dk,
        style: { transform: `translate3d(${n.x}px, ${a}px, 0)` },
        children: (0, r.jsx)("div", {
            className: en.yk,
            children:
                null != t.simple_icon_url &&
                (0, r.jsx)("img", {
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
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: a } = e,
        s = l.useRef(null),
        d = l.useId();
    (l.useLayoutEffect(() => {
        s.current?.focus();
    }, []),
        (0, L.tj)(s, { returnRef: n }));
    let { analyticsLocations: u } = (0, D.Ay)(S.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: f } = (0, z.NJ)();
    l.useEffect(() => {
        f({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: u });
    }, []);
    let { fixedBadges: g, reorderableBadges: E, hiddenBadges: h } = (0, et.A)(),
        x = (0, K.A)(),
        A = (0, G.VU)(),
        _ =
            (0, B.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === er;
            }) && !A,
        N = l.useMemo(() => E.map((e) => e.badge_id), [E]),
        R = l.useRef(new Map());
    function v(e) {
        return (t) => {
            null == t ? R.current.delete(e) : R.current.set(e, t);
        };
    }
    function j(e) {
        requestAnimationFrame(() => R.current.get(e)?.focus());
    }
    let y = g.length + E.length + h.length,
        I = (0, i.bG)([o.Ay, m.default], () => {
            let e = m.default.getCurrentUser()?.id;
            return null != e && o.Ay.hasCatalogFor(e);
        });
    function T(e, t) {
        (0, c.hB)((0, c.i1)(N, e, t));
    }
    let C = (0, X.w9)({ listType: ea, itemType: er, onFallbackDrop: (e) => T(e.index, N.length - 1) }),
        O = (0, X.w9)({ listType: ea, itemType: er });
    l.useLayoutEffect(() => {
        if (_)
            return (
                O(document.body),
                () => {
                    O(null);
                }
            );
    }, [O, _]);
    let M = y > 0,
        P = I && !M,
        U = !x && !P,
        w = x ? q.t.VHaYM7 : q.t["7Qs/YX"];
    function k() {
        (null != a && (a.current = !0), t());
    }
    return (0, r.jsxs)("div", {
        ref: s,
        className: p()(en.SW, P && en.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, r.jsxs)("div", {
                className: p()(en.Qs, U && en.bY),
                children: [
                    (0, r.jsxs)("div", {
                        className: en.wx,
                        children: [
                            (0, r.jsxs)("div", {
                                className: en.$,
                                children: [
                                    x && (0, r.jsx)(F.A, { size: "xs", className: en.oU }),
                                    (0, r.jsx)(H.D, {
                                        id: d,
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: q.intl.string(q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !P &&
                                (0, r.jsx)(b.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: q.intl.string(w),
                                }),
                        ],
                    }),
                    U && (0, r.jsx)(J, { onClose: t }),
                    P &&
                        (0, r.jsx)(b.E, {
                            className: en.p$,
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: q.intl.string(q.t.VT02mI),
                        }),
                    M &&
                        (0, r.jsxs)("div", {
                            className: p()(en.yq, _ && en.T0),
                            role: "group",
                            "aria-label": q.intl.string(q.t.VWV0y5),
                            children: [
                                x &&
                                    (0, r.jsx)("div", {
                                        ref: (e) => {
                                            C(e);
                                        },
                                        className: en.u$,
                                        "aria-hidden": !0,
                                    }),
                                g.map((e, t) =>
                                    (0, r.jsx)(
                                        es,
                                        { badge: e, index: t, onClose: k, onAction: j, controlRef: v(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                E.map((e, t) =>
                                    x
                                        ? (0, r.jsx)(
                                              el,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: k,
                                                  onAction: j,
                                                  controlRef: v(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: T,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, r.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: k,
                                                  onAction: j,
                                                  controlRef: v(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                h.map((e, t) =>
                                    (0, r.jsx)(
                                        es,
                                        {
                                            badge: e,
                                            index: g.length + E.length + t,
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
            (0, r.jsx)(ei, {}),
            (0, r.jsx)(V.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: q.intl.string(q.t.fN2how),
                onClick: function () {
                    (f({ action: "PRESS_VIEW_BADGES", analyticsLocations: u }),
                        k(),
                        (0, ee.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ed =
        (((a = {}).BURNT_ORBS = "burnt_orbs"),
        (a.DAYS = "days"),
        (a.GAMES = "games"),
        (a.HOURS = "hours"),
        (a.MONTHS = "months"),
        (a.YEARS = "years"),
        a),
    ec = n(775602),
    eu = n(328464),
    em = n(851767),
    ef = n(351906);
let eg = { [ed.BURNT_ORBS]: q.t.ZzNZM2 };
function ep(e) {
    let t,
        n,
        a,
        { children: s, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: m, shouldShow: f } = e,
        g = (0, M.w0)(d),
        {
            badgeData: p,
            currentTier: E,
            obtainedAt: b,
        } = (0, i.cf)(
            [o.Ay],
            () =>
                null == g || null == c
                    ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
                    : {
                          badgeData: o.Ay.getBadgeById(g, c),
                          currentTier: o.Ay.getCurrentTier(g, c),
                          obtainedAt: o.Ay.getObtainedAt(g, c),
                      },
            [g, c],
        ),
        x = (0, i.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
        A = l.useCallback(() => {
            null != c && o.Ay.isCatalogStaleFor(c) && (0, O.RS)(c);
        }, [c]),
        _ = p?.badge_id === h.$.PREMIUM_TENURE,
        N = g === h.$.LEGACY_USERNAME,
        R = g === h.$.ORB_VOID,
        v = E?.name,
        j = R ? p?.stats?.find((e) => e.unit === ed.BURNT_ORBS) : void 0,
        y =
            null != j
                ? (function (e) {
                      let t = eg[e.unit];
                      if (null != t)
                          return {
                              value: q.intl.formatToPlainString(q.t.SXPtrb, { count: e.value }),
                              label: q.intl.formatToPlainString(t, { count: e.value }),
                          };
                  })(j)
                : void 0,
        I = _ ? q.intl.string(q.t.Ipxkog) : (p?.name ?? u);
    _
        ? (a = n = null != v ? `${I} ${v}` : I)
        : R && null != y
          ? ((t = I), (n = y.value), (a = null != v ? `${I} ${v}` : I))
          : null != v
            ? ((t = I), (n = v), (a = `${I} ${v}`))
            : ((n = I), (a = I));
    let T = x ? void 0 : p?.complex_icon_animated_url,
        C = T ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? m,
        S = null != T && C === T;
    if (N) return (0, r.jsx)(eE, { userId: c, title: n, badgeImage: C, shouldShow: f, children: s });
    let D =
        y?.label ??
        p?.info_label ??
        (null != b ? q.intl.formatToPlainString(q.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, r.jsx)(eu.A, {
        title: n,
        eyebrow: t,
        body: D,
        screenReaderBody: null != y ? (p?.info_label ?? `${y.value} ${y.label}`) : void 0,
        badgeImage: C,
        badgeName: a,
        variant: _ ? "nitro" : "default",
        isAnimated: S,
        shouldShow: f,
        onShow: A,
        children: s,
    });
}
function eE(e) {
    let { children: t, userId: n, title: a, badgeImage: l, shouldShow: s } = e,
        o = (0, i.bG)(
            [em.A, ef.A],
            () =>
                ef.A.hidePersonalInformation
                    ? q.intl.string(q.t.Br1ls3)
                    : null != n
                      ? (em.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, r.jsx)(eu.A, { title: a, body: o, badgeImage: l, badgeName: a, shouldShow: s, children: t });
}
var eh = n(969935),
    eb = n(683063);
function ex(e) {
    let { targetElementRef: t, delay: n, forceOpen: a, badgeDescription: l, children: s } = e;
    return (0, r.jsx)(eb.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: a,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: l,
        children: s,
    });
}
var eA = n(116833),
    e_ = n(704640),
    eN = n(208223),
    eR = n(642481),
    ev = n(424746),
    ej = n(682901),
    ey = n(49999),
    eI = n(518477);
let eT = function (e) {
    let {
            badgeId: t = ej.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: a,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = ej.VD[t].nameUnformattedNitro,
        m = q.intl.string(u).toLocaleUpperCase(),
        f = ej.VD[t].rarity,
        g = (0, e_.A)(t),
        p = (0, eN.I)(t).standard;
    (0, l.useEffect)(() => {
        (eA.m[eA.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, l.useCallback)(() => {
        n?.(ey.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, r.jsx)(eu.A, {
            targetElementRef: s,
            onShow: c,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: p,
            badgeName: m,
            progressCircle: t,
            children: a,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: eA.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, r.jsx)(ev.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: 300,
              onShow: c,
              ...h,
              children: a,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  a,
                  (0, r.jsx)(eR.A, {
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
var eC = n(592265);
let eS = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: a } = e;
    return (0, r.jsxs)("div", {
        className: eC.R,
        children: [t, (0, r.jsx)("div", { className: eC.A, children: n }), a],
    });
};
var eD = n(224016),
    eO = n(747278);
let eM = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        a = (0, eN.I)(n.id).standard;
    return (0, r.jsxs)(eS, {
        assetComponent: (0, r.jsx)("img", { src: a, alt: "" }),
        tooltipWordmarkComponent: (0, r.jsx)(eD.A, { width: 56, className: eO.R }),
        children: [
            (0, r.jsx)(H.D, { variant: "heading-xl/semibold", children: q.intl.string(n.nameUnformatted) }),
            (0, r.jsx)(b.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: eO.K,
                children: t.description,
            }),
        ],
    });
};
var eP = n(30084),
    eU = n(506988),
    eB = n(976860),
    eG = n(780964),
    ew = n(766075),
    ek = n(305003),
    eL = n(195118),
    eH = n(31188),
    eV = n(620882),
    e$ = n(370277);
function eF(e) {
    let { children: t, targetElementRef: n, delay: a, showSubtext: s, forceOpen: i } = e,
        [o, d] = l.useState(!1),
        c = l.useRef(null),
        u = l.useCallback(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }, []);
    l.useEffect(() => u, [u]);
    let m = l.useCallback(() => {
        (u(),
            (c.current = window.setTimeout(() => {
                ((c.current = null), d(!0));
            }, a)));
    }, [a, u]);
    l.useEffect(() => {
        i && !o && m();
    }, [i, o, m]);
    let f = l.useCallback(() => {
            m();
        }, [m]),
        g = l.useCallback(() => {
            (u(), d(!1));
        }, [u]);
    return (0, r.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: g,
        children: [
            t,
            (0, r.jsxs)(eL.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, r.jsx)(ez, { showSubtext: s }), (0, r.jsx)(eH.F, {})],
            }),
        ],
    });
}
function ez(e) {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(eS, {
        assetComponent: (0, r.jsx)(eV.A, { className: e$.jc }),
        tooltipWordmarkComponent: (0, r.jsx)(H.D, {
            variant: "heading-sm/semibold",
            className: e$.RK,
            children: q.intl.string(q.t.ElYQFS),
        }),
        children: [
            (0, r.jsx)(H.D, {
                variant: "heading-xl/semibold",
                className: t ? void 0 : e$.Qn,
                children: q.intl.string(q.t.lTHkqd),
            }),
            t
                ? (0, r.jsx)(b.E, { variant: "body-xs/normal", className: e$.lV, children: q.intl.string(q.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eX = n(129230),
    eK = n(474090),
    eW = n(439174),
    eY = n(741534),
    eZ = n(527212),
    eq = n(874402),
    eQ = n(652215),
    eJ = n(758836),
    e0 = n(854232),
    e1 = n(816645);
function e8(e) {
    let t,
        {
            badges: n,
            overflowCount: a,
            className: s,
            badgeClassName: c,
            displayProfile: u,
            onClose: g,
            shouldOpenBadgeTooltip: B,
            shouldGlowTenureBadge: G,
            popoutAnchorRef: w,
            containerRef: k,
            isTargetUserBot: L,
        } = e,
        H = (0, U.A)((e) => e.isOpen),
        V = l.useRef(null),
        $ = (0, E.A)(V, k),
        F = l.useRef(null),
        X = l.useRef(null),
        K = l.useRef(null),
        W = l.useRef(null),
        Y = l.useRef(!1),
        { analyticsLocations: Z } = (0, D.Ay)(S.A.BADGE),
        { context: Q, trackUserProfileAction: J } = (0, z.NJ)(),
        et = m.default.getCurrentUser(),
        en = u?.userId === et?.id,
        ea = (0, eK.CC)(et?.premiumType, ej.PremiumTypes.TIER_2),
        er = (0, d.d)({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        er && u?.userId != null && !o.Ay.hasCatalogFor(u.userId) && (0, O.RS)(u.userId);
    }, [er, u?.userId]);
    let el = u?.userId,
        es = en && er && null != w,
        ei = !es && er,
        ed = es && 0 === n.length,
        ec = et?.id,
        eu = en && er,
        em = (0, i.bG)([o.Ay], () => eu && null != ec && o.Ay.getUnreadBadges(ec).length > 0, [eu, ec]),
        ef = (0, P.e)({ location: "UserProfileBadgeList", hasUnread: em }) && em,
        eg = (0, i.bG)(
            [o.Ay],
            () => null != ec && (!o.Ay.hasCatalogFor(ec) || o.Ay.getBadges(ec).some((e) => e.owned)),
            [ec],
        ),
        eE = es && H;
    function eb(e) {
        if ((U.A.setState({ isOpen: e }), !e)) {
            if (Y.current) {
                Y.current = !1;
                return;
            }
            requestAnimationFrame(() => W.current?.focus());
        }
    }
    let eA = (0, eZ.AP)(et?.id ?? null),
        e_ = (0, f.A)(eA).some((e) => e.id === ek.A.ORB_PROFILE_BADGE),
        eN = es && !ed && 0 === a,
        eR = null;
    a > 0 &&
        ((eR = (0, r.jsx)(b.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "text-default",
            className: e1.AX,
            "aria-hidden": !0,
            children: q.intl.format(q.t.n7CiSK, { count: a }),
        })),
        (t = q.intl.formatToPlainString(q.t.eIHfGZ, { overflow_count: a })));
    let ev = (0, r.jsxs)("div", {
        ref: $,
        className: p()(e1.kL, er && !0 !== L && e1.Yq, es && e1.Tx, eN && e1.gK, ef && e1.TW, s),
        ...(ed
            ? null
            : {
                  "aria-label": ef
                      ? `${q.intl.string(q.t.VWV0y5)}, ${q.intl.string(q.t.y2b7CA)}`
                      : q.intl.string(q.t.VWV0y5),
                  role: "group",
              }),
        ...(es && !ed ? { onClick: () => eb(!eE) } : null),
        children: [
            ef && (0, r.jsx)("span", { className: e1.Zm, "aria-hidden": !0 }),
            ed &&
                (0, r.jsx)(x.vN, {
                    children: (0, r.jsxs)("button", {
                        ref: W,
                        type: "button",
                        className: e1.p$,
                        "aria-label": ef ? `${q.intl.string(q.t.l6w3Vj)}, ${q.intl.string(q.t.y2b7CA)}` : void 0,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eE,
                        onClick: (e) => {
                            (e.stopPropagation(), eb(!eE));
                        },
                        children: [
                            (0, r.jsx)(A.PlusSmallIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, r.jsx)(b.E, {
                                tag: "span",
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: q.intl.string(q.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === ek.A.ORB_PROFILE_BADGE,
                    a = (0, eW.e0)(e.id),
                    l = null != a || e.id === e0.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== a && e.id !== e0.K,
                    o = (0, r.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? (0, eI.L7)(e.icon),
                        className: p()(e1.qS, c),
                    }),
                    d = null != B && B(e.id),
                    E = {
                        onClick: (a) => {
                            if (
                                (J({ action: "PRESS_BADGE" }),
                                (0, eY.vP)({
                                    badgeId: (0, M.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: Z,
                                    ...Q,
                                }),
                                es)
                            )
                                return void a.preventDefault();
                            let r = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (er && r?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, ee.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, M.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: r?.globalName ?? r?.username,
                                    }));
                                return;
                            }
                            if ((0, M.w0)(e.id) === h.$.GIFTING) {
                                (a.preventDefault(),
                                    g?.(),
                                    (0, ew.openUserSettings)(eG.X.GIFT_PANEL, { analyticsLocations: Z }));
                                return;
                            }
                            if (n) {
                                ((0, eh.Cz)({
                                    tab: eJ.G2.ORBS,
                                    analyticsLocations: Z,
                                    analyticsSource: S.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    g?.(),
                                    (0, _.s7)());
                                return;
                            }
                            if (l) {
                                if (
                                    (a.preventDefault(),
                                    eX.default.track(eQ.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: ea,
                                        viewed_user_id: u?.userId,
                                    }),
                                    ea)
                                ) {
                                    (en
                                        ? ((0, eB.pX)(eQ.BVt.NITRO_HOME), (0, _.s7)())
                                        : (0, eP.D)({ analyticsLocations: Z, displayProfile: u }),
                                        g?.());
                                    return;
                                }
                                if (en) {
                                    let t = null != e.link ? (0, I.default)(e.link, { analyticsLocations: Z }) : null;
                                    if (null == t) return;
                                    return (g?.(), (0, _.s7)(), t(a));
                                }
                                return ((0, eP.D)({ analyticsLocations: Z, displayProfile: u }), void g?.());
                            }
                            let s = null != e.link ? (0, I.default)(e.link, { analyticsLocations: Z }) : null;
                            if (null != s) return (g?.(), (0, _.s7)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === f.h &&
                                (0, T.r)({
                                    type: C.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: eU.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                J({ action: "HOVER_BADGE" }),
                                (0, eY.vP)({
                                    badgeId: (0, M.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: Z,
                                    ...Q,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(es ? { "aria-haspopup": "dialog", "aria-expanded": eE } : null),
                        style: { filter: G && null != a ? `drop-shadow(0 0 5px ${a.glowColor})` : void 0 },
                    };
                if (er)
                    return (0, r.jsx)(
                        ep,
                        {
                            shouldShow: !eE,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eI.L7)(e.icon),
                            children: (0, r.jsx)(N.Anchor, { ...E, children: o }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, r.jsx)(N.Anchor, { ...E, ref: F, children: o });
                    return (0, r.jsx)(
                        "div",
                        {
                            children: (0, r.jsx)(eT, {
                                badgeId: e.id,
                                targetElementRef: F,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eX.default.track(eQ.HAw.TOOLTIP_VIEWED, {
                                        type: "tiered_tenure_badge_profile_" + (en ? "self" : "other"),
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
                    let n = (0, r.jsx)(N.Anchor, { ...E, ref: X, children: o });
                    return (0, r.jsx)(
                        eF,
                        {
                            targetElementRef: X,
                            delay: 300,
                            showSubtext: !e_ && !e.isPreviewMode,
                            forceOpen: d,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, r.jsx)(N.Anchor, { ...E, ref: K, children: o });
                    return (0, r.jsx)(
                        ex,
                        { targetElementRef: K, delay: 300, forceOpen: d, badgeDescription: e.description, children: n },
                        `${e.id}-${t}`,
                    );
                }
                let b = (0, r.jsx)(N.Anchor, { ...E, children: o }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== e0.K
                            ? (0, r.jsx)(eM, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: l && e.id !== e0.K ? a : void 0 });
                return (0, r.jsx)(
                    R.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: d, delay: 300, ariaHidden: !0, children: b },
                    `${e.id}-${t}`,
                );
            }),
            a > 0 &&
                (ei
                    ? (0, r.jsx)(x.vN, {
                          children: (0, r.jsx)("button", {
                              type: "button",
                              className: p()(e1.$O, e1.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != el ? m.default.getUser(el) : null;
                                  (0, ee.openBadgeDirectoryModal)({
                                      targetUserId: el,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: eR,
                          }),
                      })
                    : (0, r.jsxs)("span", { className: e1.$O, children: [(0, r.jsx)(v.A, { children: t }), eR] })),
            es &&
                !ed &&
                (0, r.jsx)(R.m, {
                    text: q.intl.string(q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: W,
                    children: (0, r.jsx)(x.vN, {
                        children: (0, r.jsx)("button", {
                            ref: W,
                            type: "button",
                            className: p()(e1.r9, a > 0 ? e1.v_ : e1.Y5),
                            "aria-label": q.intl.string(q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eE,
                            onClick: (e) => {
                                (e.stopPropagation(), eb(!eE));
                            },
                            children: (0, r.jsx)(j.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e1.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return es
        ? (0, r.jsx)(y.Y, {
              targetElementRef: ed && !eg ? V : w,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: eE,
              onRequestClose: (e) => {
                  let t = e?.target;
                  V.current?.contains(t) === !0 || (t?.closest(`[${eq.m}]`) == null && eb(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(eo, { onClose: t, returnFocusRef: W, skipReturnFocusRef: Y });
              },
              children: () => ev,
          })
        : ev;
}
var e2 = n(996988);
let e5 = {
    [e2.d.POPOUT]: 12,
    [e2.d.MODAL]: 26,
    [e2.d.SIDEBAR]: 12,
    [e2.d.VIDEO_TILE_BACKGROUND]: 12,
    [e2.d.EMBED]: 12,
};
function e4(e) {
    let t,
        {
            displayProfile: n,
            themeType: a,
            pendingLegacyUsernameDisabled: g,
            pendingBadges: p,
            showPendingBadgeEdits: E = !1,
            onClose: h,
            shouldOpenBadgeTooltip: b,
            shouldGlowTenureBadge: x,
            popoutAnchorRef: A,
            containerRef: _,
        } = e,
        N = (0, d.d)({ location: "UserProfileBadgeListRows" }),
        R = n?.userId,
        v = (0, i.bG)([m.default], () => null != R && m.default.getUser(R)?.bot === !0, [R]),
        j = (0, f.A)(n, g),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: I } = (0, u.A)(),
        T = (0, i.yK)([o.Ay], () => (E && null != R && o.Ay.hasCatalogFor(R) ? o.Ay.getBadges(R) : []), [E, R]),
        C = l.useMemo(() => {
            let e = j;
            if (null != p) {
                let t = new Set(j.map((e) => e.id));
                e = [...j, ...p.filter((e) => !t.has(e.id))];
            }
            return E ? (0, c.Rr)(e, T, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: I }) : e;
        }, [j, p, E, T, y, I]);
    if (0 === C.length && !E) return null;
    let S = N && !v,
        D = S ? Math.max(C.length - 6, 0) : 0;
    return (
        (t = S ? [C.slice(0, 6)] : a === e2.d.MODAL_V2 ? [C] : (0, s.chunk)(C, e5[a])),
        (0, r.jsx)(r.Fragment, {
            children: t.map((e, t) =>
                (0, r.jsx)(
                    e8,
                    {
                        badges: e,
                        overflowCount: D,
                        displayProfile: n,
                        onClose: h,
                        shouldOpenBadgeTooltip: b,
                        shouldGlowTenureBadge: x,
                        isTargetUserBot: v,
                        popoutAnchorRef: A,
                        containerRef: 0 === t ? _ : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
