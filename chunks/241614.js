n.d(t, { A: () => e3 });
var a,
    l = n(477900),
    r = n(582128),
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
    R = n(28863),
    N = n(866665),
    v = n(140735),
    j = n(22231),
    y = n(265872),
    I = n(564508),
    T = n(438457),
    C = n(144779),
    S = n(793574),
    D = n(688810),
    O = n(682618),
    P = n(731309),
    M = n(620143);
let U = (0, n(945810).mj)({
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
    z = n(450232),
    X = n(183555),
    K = n(451395),
    W = n(327791),
    Y = n(315629),
    Z = n(403581),
    q = n(87719),
    Q = n(792996),
    J = n(207711);
function ee(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(Y.h, {
        color: "nitro-pink",
        className: J.U,
        children: [
            (0, l.jsx)(b.E, {
                variant: "body-xs/medium",
                color: "text-default",
                className: J.t,
                children: Q.intl.string(Q.t.cKIIzk),
            }),
            (0, l.jsx)($.$, {
                variant: "expressive",
                size: "sm",
                icon: Z.NitroWheelIcon,
                text: Q.intl.string(Q.t.pj0XBN),
                onClick: function () {
                    (t(), (0, q.e)());
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
function es(e) {
    let { reorderableIndex: t, onReorder: n, ...a } = e,
        { badge: s, index: i } = a,
        o = (0, w.VU)(),
        d = r.useRef(null);
    return (0, l.jsxs)(K.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: el,
        itemType: er,
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
            (0, l.jsx)(ei, { ...a }),
            (0, l.jsx)(K.jV, {
                buttonRef: d,
                className: ea.BU,
                "aria-label": Q.intl.formatToPlainString(Q.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function ei(e) {
    let { badge: t, index: a, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = r.useState(!1);
    function u(e) {
        (c(!0),
            (0, F.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e(918024), n.e(434691), n.e(787847)]).then(
                        n.bind(n, 842810),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: i });
                },
                { onClose: () => c(!1) },
            ));
    }
    let m = t.hidden ?? !1,
        f = !0 === t.has_updates,
        g = (0, M.e)({ location: "BadgeCustomizationPopout", hasUnread: f }) && f,
        E = Q.intl.formatToPlainString(m ? Q.t["3Uwmdt"] : Q.t.Ci7gvp, { badgeName: t.name, position: a + 1 });
    return (0, l.jsxs)("div", {
        className: p()(ea.fw, d && ea.HV),
        onContextMenu: u,
        children: [
            (0, l.jsx)("div", {
                className: ea.yk,
                children:
                    null != t.simple_icon_url &&
                    (0, l.jsx)("img", {
                        src: t.simple_icon_url,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                        className: p()(ea.pC, m && ea.jx),
                    }),
            }),
            g && (0, l.jsx)("div", { className: ea.Zm, "aria-hidden": !0 }),
            m &&
                (0, l.jsx)("div", {
                    className: ea.Gf,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(k.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, l.jsx)(x.vN, {
                children: (0, l.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: ea.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": g ? `${E}, ${Q.intl.string(Q.t.y2b7CA)}` : E,
                    onClick: u,
                    children: (0, l.jsx)(L.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
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
    let a = n.y - 32 * !!e;
    return (0, l.jsx)("div", {
        className: ea.dk,
        style: { transform: `translate3d(${n.x}px, ${a}px, 0)` },
        children: (0, l.jsx)("div", {
            className: ea.yk,
            children:
                null != t.simple_icon_url &&
                (0, l.jsx)("img", {
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
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: a } = e,
        s = r.useRef(null),
        d = r.useId();
    (r.useLayoutEffect(() => {
        s.current?.focus();
    }, []),
        (0, H.tj)(s, { returnRef: n }));
    let { analyticsLocations: u } = (0, D.Ay)(S.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: f } = (0, X.NJ)();
    r.useEffect(() => {
        f({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: u });
    }, []);
    let { fixedBadges: g, reorderableBadges: E, hiddenBadges: h } = (0, en.A)(),
        x = (0, W.A)(),
        A = (0, w.VU)(),
        _ =
            (0, G.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === er;
            }) && !A,
        R = r.useMemo(() => E.map((e) => e.badge_id), [E]),
        N = r.useRef(new Map());
    function v(e) {
        return (t) => {
            null == t ? N.current.delete(e) : N.current.set(e, t);
        };
    }
    function j(e) {
        requestAnimationFrame(() => N.current.get(e)?.focus());
    }
    let y = g.length + E.length + h.length,
        I = (0, i.bG)([o.Ay, m.default], () => {
            let e = m.default.getCurrentUser()?.id;
            return null != e && o.Ay.hasCatalogFor(e);
        });
    function T(e, t) {
        (0, c.hB)((0, c.i1)(R, e, t));
    }
    let C = (0, K.w9)({ listType: el, itemType: er, onFallbackDrop: (e) => T(e.index, R.length - 1) }),
        O = (0, K.w9)({ listType: el, itemType: er });
    r.useLayoutEffect(() => {
        if (_)
            return (
                O(document.body),
                () => {
                    O(null);
                }
            );
    }, [O, _]);
    let P = y > 0,
        M = I && !P,
        U = !x && !M,
        B = x ? Q.t.VHaYM7 : Q.t["7Qs/YX"];
    function k() {
        (null != a && (a.current = !0), t());
    }
    return (0, l.jsxs)("div", {
        ref: s,
        className: p()(ea.SW, M && ea.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, l.jsxs)("div", {
                className: p()(ea.Qs, U && ea.bY),
                children: [
                    (0, l.jsxs)("div", {
                        className: ea.wx,
                        children: [
                            (0, l.jsxs)("div", {
                                className: ea.$,
                                children: [
                                    x && (0, l.jsx)(z.A, { size: "xs", className: ea.oU }),
                                    (0, l.jsx)(V.D, {
                                        id: d,
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: Q.intl.string(Q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !M &&
                                (0, l.jsx)(b.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: Q.intl.string(B),
                                }),
                        ],
                    }),
                    U && (0, l.jsx)(ee, { onClose: t }),
                    M &&
                        (0, l.jsx)(b.E, {
                            className: ea.p$,
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: Q.intl.string(Q.t.VT02mI),
                        }),
                    P &&
                        (0, l.jsxs)("div", {
                            className: p()(ea.yq, _ && ea.T0),
                            role: "group",
                            "aria-label": Q.intl.string(Q.t.VWV0y5),
                            children: [
                                x &&
                                    (0, l.jsx)("div", {
                                        ref: (e) => {
                                            C(e);
                                        },
                                        className: ea.u$,
                                        "aria-hidden": !0,
                                    }),
                                g.map((e, t) =>
                                    (0, l.jsx)(
                                        ei,
                                        { badge: e, index: t, onClose: k, onAction: j, controlRef: v(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                E.map((e, t) =>
                                    x
                                        ? (0, l.jsx)(
                                              es,
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
                                        : (0, l.jsx)(
                                              ei,
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
                                    (0, l.jsx)(
                                        ei,
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
            (0, l.jsx)(eo, {}),
            (0, l.jsx)($.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: Q.intl.string(Q.t.fN2how),
                onClick: function () {
                    (f({ action: "PRESS_VIEW_BADGES", analyticsLocations: u }),
                        k(),
                        (0, et.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ec =
        (((a = {}).BURNT_ORBS = "burnt_orbs"),
        (a.DAYS = "days"),
        (a.GAMES = "games"),
        (a.HOURS = "hours"),
        (a.MONTHS = "months"),
        (a.YEARS = "years"),
        a),
    eu = n(775602),
    em = n(328464),
    ef = n(851767),
    eg = n(351906);
let ep = { [ec.BURNT_ORBS]: Q.t.ZzNZM2 };
function eE(e) {
    let t,
        n,
        a,
        { children: s, legacyBadgeId: d, userId: c, fallbackTitle: u, fallbackIconSrc: m, shouldShow: f } = e,
        g = (0, P.w0)(d),
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
        x = (0, i.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        A = r.useCallback(() => {
            null != c && o.Ay.isCatalogStaleFor(c) && (0, O.RS)(c);
        }, [c]),
        _ = p?.badge_id === h.$.PREMIUM_TENURE,
        R = g === h.$.LEGACY_USERNAME,
        N = g === h.$.ORB_VOID,
        v = E?.name,
        j = N ? p?.stats?.find((e) => e.unit === ec.BURNT_ORBS) : void 0,
        y =
            null != j
                ? (function (e) {
                      let t = ep[e.unit];
                      if (null != t)
                          return {
                              value: Q.intl.formatToPlainString(Q.t.SXPtrb, { count: e.value }),
                              label: Q.intl.formatToPlainString(t, { count: e.value }),
                          };
                  })(j)
                : void 0,
        I = _ ? Q.intl.string(Q.t.Ipxkog) : (p?.name ?? u);
    _
        ? (a = n = null != v ? `${I} ${v}` : I)
        : N && null != y
          ? ((t = I), (n = y.value), (a = null != v ? `${I} ${v}` : I))
          : null != v
            ? ((t = I), (n = v), (a = `${I} ${v}`))
            : ((n = I), (a = I));
    let T = x ? void 0 : p?.complex_icon_animated_url,
        C = T ?? p?.complex_icon_static_url ?? p?.simple_icon_url ?? m,
        S = null != T && C === T;
    if (R) return (0, l.jsx)(eh, { userId: c, title: n, badgeImage: C, shouldShow: f, children: s });
    let D =
        y?.label ??
        p?.info_label ??
        (null != b ? Q.intl.formatToPlainString(Q.t["0aEh2a"], { date: new Date(b) }) : void 0);
    return (0, l.jsx)(em.A, {
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
function eh(e) {
    let { children: t, userId: n, title: a, badgeImage: r, shouldShow: s } = e,
        o = (0, i.bG)(
            [ef.A, eg.A],
            () =>
                eg.A.hidePersonalInformation
                    ? Q.intl.string(Q.t.Br1ls3)
                    : null != n
                      ? (ef.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, l.jsx)(em.A, { title: a, body: o, badgeImage: r, badgeName: a, shouldShow: s, children: t });
}
var eb = n(969935),
    ex = n(683063);
function eA(e) {
    let { targetElementRef: t, delay: n, forceOpen: a, badgeDescription: r, children: s } = e;
    return (0, l.jsx)(ex.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: a,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: r,
        children: s,
    });
}
var e_ = n(116833),
    eR = n(704640),
    eN = n(208223),
    ev = n(642481),
    ej = n(424746),
    ey = n(682901),
    eI = n(49999),
    eT = n(518477);
let eC = function (e) {
    let {
            badgeId: t = ey.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: a,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = ey.VD[t].nameUnformattedNitro,
        m = Q.intl.string(u).toLocaleUpperCase(),
        f = ey.VD[t].rarity,
        g = (0, eR.A)(t),
        p = (0, eN.I)(t).standard;
    (0, r.useEffect)(() => {
        (e_.m[e_.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(eI.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, l.jsx)(em.A, {
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
            component: e_.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, l.jsx)(ej.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: 300,
              onShow: c,
              ...h,
              children: a,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  a,
                  (0, l.jsx)(ev.A, {
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
var eS = n(592265);
let eD = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: a } = e;
    return (0, l.jsxs)("div", {
        className: eS.R,
        children: [t, (0, l.jsx)("div", { className: eS.A, children: n }), a],
    });
};
var eO = n(224016),
    eP = n(747278);
let eM = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        a = (0, eN.I)(n.id).standard;
    return (0, l.jsxs)(eD, {
        assetComponent: (0, l.jsx)("img", { src: a, alt: "" }),
        tooltipWordmarkComponent: (0, l.jsx)(eO.A, { width: 56, className: eP.R }),
        children: [
            (0, l.jsx)(V.D, { variant: "heading-xl/semibold", children: Q.intl.string(n.nameUnformatted) }),
            (0, l.jsx)(b.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: eP.K,
                children: t.description,
            }),
        ],
    });
};
var eU = n(30084),
    eB = n(506988),
    eG = n(976860),
    ew = n(780964),
    ek = n(766075),
    eL = n(305003),
    eH = n(195118),
    eV = n(31188),
    e$ = n(620882),
    eF = n(370277);
function ez(e) {
    let { children: t, targetElementRef: n, delay: a, showSubtext: s, forceOpen: i } = e,
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
            }, a)));
    }, [a, u]);
    r.useEffect(() => {
        i && !o && m();
    }, [i, o, m]);
    let f = r.useCallback(() => {
            m();
        }, [m]),
        g = r.useCallback(() => {
            (u(), d(!1));
        }, [u]);
    return (0, l.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: g,
        children: [
            t,
            (0, l.jsxs)(eH.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, l.jsx)(eX, { showSubtext: s }), (0, l.jsx)(eV.F, {})],
            }),
        ],
    });
}
function eX(e) {
    let { showSubtext: t = !1 } = e;
    return (0, l.jsxs)(eD, {
        assetComponent: (0, l.jsx)(e$.A, { className: eF.jc }),
        tooltipWordmarkComponent: (0, l.jsx)(V.D, {
            variant: "heading-sm/semibold",
            className: eF.RK,
            children: Q.intl.string(Q.t.ElYQFS),
        }),
        children: [
            (0, l.jsx)(V.D, {
                variant: "heading-xl/semibold",
                className: t ? void 0 : eF.Qn,
                children: Q.intl.string(Q.t.lTHkqd),
            }),
            t
                ? (0, l.jsx)(b.E, { variant: "body-xs/normal", className: eF.lV, children: Q.intl.string(Q.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eK = n(129230),
    eW = n(474090),
    eY = n(439174),
    eZ = n(741534),
    eq = n(527212),
    eQ = n(874402),
    eJ = n(652215),
    e0 = n(758836),
    e1 = n(854232),
    e8 = n(816645);
function e2(e) {
    let t,
        {
            badges: n,
            overflowCount: a,
            className: s,
            badgeClassName: c,
            displayProfile: u,
            onClose: g,
            shouldOpenBadgeTooltip: G,
            shouldGlowTenureBadge: w,
            popoutAnchorRef: k,
            containerRef: L,
            isTargetUserBot: H,
        } = e,
        V = (0, B.A)((e) => e.isOpen),
        $ = r.useRef(null),
        F = (0, E.A)($, L),
        z = r.useRef(null),
        K = r.useRef(null),
        W = r.useRef(null),
        Y = r.useRef(null),
        Z = r.useRef(!1),
        { analyticsLocations: q } = (0, D.Ay)(S.A.BADGE),
        { context: J, trackUserProfileAction: ee } = (0, X.NJ)(),
        en = m.default.getCurrentUser(),
        ea = u?.userId === en?.id,
        el = (0, eW.CC)(en?.premiumType, ey.PremiumTypes.TIER_2),
        er = (0, d.d)({ location: "UserProfileBadgeList" }),
        es = (function (e) {
            let { location: t } = e;
            return U.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        (er || es) && u?.userId != null && !o.Ay.hasCatalogFor(u.userId) && (0, O.RS)(u.userId);
    }, [er, es, u?.userId]);
    let ei = u?.userId,
        eo = (0, i.bG)(
            [o.Ay],
            () => {
                if (!es || null == ei) return null;
                let e = {};
                for (let t of n) {
                    let n = (0, P.w0)(t.id);
                    if (null == n) continue;
                    let a = o.Ay.getBadgeById(n, ei)?.simple_icon_url;
                    null != a && (e[t.id] = a);
                }
                return e;
            },
            [es, ei, n],
        ),
        ec = ea && er && null != k,
        eu = !ec && er,
        em = ec && 0 === n.length,
        ef = en?.id,
        eg = ea && er,
        ep = (0, i.bG)([o.Ay], () => eg && null != ef && o.Ay.getUnreadBadges(ef).length > 0, [eg, ef]),
        eh = (0, M.e)({ location: "UserProfileBadgeList", hasUnread: ep }) && ep,
        ex = (0, i.bG)(
            [o.Ay],
            () => null != ef && (!o.Ay.hasCatalogFor(ef) || o.Ay.getBadges(ef).some((e) => e.owned)),
            [ef],
        ),
        e_ = ec && V;
    function eR(e) {
        if ((B.A.setState({ isOpen: e }), !e)) {
            if (Z.current) {
                Z.current = !1;
                return;
            }
            requestAnimationFrame(() => Y.current?.focus());
        }
    }
    let eN = (0, eq.AP)(en?.id ?? null),
        ev = (0, f.A)(eN).some((e) => e.id === eL.A.ORB_PROFILE_BADGE),
        ej = ec && !em && 0 === a,
        eI = null;
    a > 0 &&
        ((eI = (0, l.jsx)(b.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "text-default",
            className: e8.AX,
            "aria-hidden": !0,
            children: Q.intl.format(Q.t.n7CiSK, { count: a }),
        })),
        (t = Q.intl.formatToPlainString(Q.t.eIHfGZ, { overflow_count: a })));
    let eS = (0, l.jsxs)("div", {
        ref: F,
        className: p()(e8.kL, er && !0 !== H && e8.Yq, ec && e8.Tx, ej && e8.gK, eh && e8.TW, s),
        ...(em
            ? null
            : {
                  "aria-label": eh
                      ? `${Q.intl.string(Q.t.VWV0y5)}, ${Q.intl.string(Q.t.y2b7CA)}`
                      : Q.intl.string(Q.t.VWV0y5),
                  role: "group",
              }),
        ...(ec && !em ? { onClick: () => eR(!e_) } : null),
        children: [
            eh && (0, l.jsx)("span", { className: e8.Zm, "aria-hidden": !0 }),
            em &&
                (0, l.jsx)(x.vN, {
                    children: (0, l.jsxs)("button", {
                        ref: Y,
                        type: "button",
                        className: e8.p$,
                        "aria-label": eh ? `${Q.intl.string(Q.t.l6w3Vj)}, ${Q.intl.string(Q.t.y2b7CA)}` : void 0,
                        "aria-haspopup": "dialog",
                        "aria-expanded": e_,
                        onClick: (e) => {
                            (e.stopPropagation(), eR(!e_));
                        },
                        children: [
                            (0, l.jsx)(A.PlusSmallIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, l.jsx)(b.E, {
                                tag: "span",
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === eL.A.ORB_PROFILE_BADGE,
                    a = (0, eY.e0)(e.id),
                    r = null != a || e.id === e1.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== a && e.id !== e1.K,
                    o = eo?.[e.id],
                    d = (0, l.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? o ?? (0, eT.L7)(e.icon),
                        className: p()(e8.qS, null != o && e8.Do, c),
                    }),
                    E = null != G && G(e.id),
                    b = {
                        onClick: (a) => {
                            if (
                                (ee({ action: "PRESS_BADGE" }),
                                (0, eZ.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...J,
                                }),
                                ec)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (er && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, et.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, P.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, P.w0)(e.id) === h.$.GIFTING) {
                                (a.preventDefault(),
                                    g?.(),
                                    (0, ek.openUserSettings)(ew.X.GIFT_PANEL, { analyticsLocations: q }));
                                return;
                            }
                            if (n) {
                                ((0, eb.Cz)({
                                    tab: e0.G2.ORBS,
                                    analyticsLocations: q,
                                    analyticsSource: S.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    g?.(),
                                    (0, _.s7)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eK.default.track(eJ.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: el,
                                        viewed_user_id: u?.userId,
                                    }),
                                    el)
                                ) {
                                    (ea
                                        ? ((0, eG.pX)(eJ.BVt.NITRO_HOME), (0, _.s7)())
                                        : (0, eU.D)({ analyticsLocations: q, displayProfile: u }),
                                        g?.());
                                    return;
                                }
                                if (ea) {
                                    let t = null != e.link ? (0, I.default)(e.link, { analyticsLocations: q }) : null;
                                    if (null == t) return;
                                    return (g?.(), (0, _.s7)(), t(a));
                                }
                                return ((0, eU.D)({ analyticsLocations: q, displayProfile: u }), void g?.());
                            }
                            let s = null != e.link ? (0, I.default)(e.link, { analyticsLocations: q }) : null;
                            if (null != s) return (g?.(), (0, _.s7)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === f.h &&
                                (0, T.r)({
                                    type: C.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: eB.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                ee({ action: "HOVER_BADGE" }),
                                (0, eZ.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...J,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ec ? { "aria-haspopup": "dialog", "aria-expanded": e_ } : null),
                        style: { filter: w && null != a ? `drop-shadow(0 0 5px ${a.glowColor})` : void 0 },
                    };
                if (er)
                    return (0, l.jsx)(
                        eE,
                        {
                            shouldShow: !e_,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eT.L7)(e.icon),
                            children: (0, l.jsx)(R.Anchor, { ...b, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, l.jsx)(R.Anchor, { ...b, ref: z, children: d });
                    return (0, l.jsx)(
                        "div",
                        {
                            children: (0, l.jsx)(eC, {
                                badgeId: e.id,
                                targetElementRef: z,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eK.default.track(eJ.HAw.TOOLTIP_VIEWED, {
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
                    let n = (0, l.jsx)(R.Anchor, { ...b, ref: K, children: d });
                    return (0, l.jsx)(
                        ez,
                        {
                            targetElementRef: K,
                            delay: 300,
                            showSubtext: !ev && !e.isPreviewMode,
                            forceOpen: E,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, l.jsx)(R.Anchor, { ...b, ref: W, children: d });
                    return (0, l.jsx)(
                        eA,
                        { targetElementRef: W, delay: 300, forceOpen: E, badgeDescription: e.description, children: n },
                        `${e.id}-${t}`,
                    );
                }
                let x = (0, l.jsx)(R.Anchor, { ...b, children: d }),
                    A = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== e1.K
                            ? (0, l.jsx)(eM, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e1.K ? a : void 0 });
                return (0, l.jsx)(
                    N.m,
                    { __unsupportedReactNodeAsText: A, forceOpen: E, delay: 300, ariaHidden: !0, children: x },
                    `${e.id}-${t}`,
                );
            }),
            a > 0 &&
                (eu
                    ? (0, l.jsx)(x.vN, {
                          children: (0, l.jsx)("button", {
                              type: "button",
                              className: p()(e8.$O, e8.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != ei ? m.default.getUser(ei) : null;
                                  (0, et.openBadgeDirectoryModal)({
                                      targetUserId: ei,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: eI,
                          }),
                      })
                    : (0, l.jsxs)("span", { className: e8.$O, children: [(0, l.jsx)(v.A, { children: t }), eI] })),
            ec &&
                !em &&
                (0, l.jsx)(N.m, {
                    text: Q.intl.string(Q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: Y,
                    children: (0, l.jsx)(x.vN, {
                        children: (0, l.jsx)("button", {
                            ref: Y,
                            type: "button",
                            className: p()(e8.r9, a > 0 ? e8.v_ : e8.Y5),
                            "aria-label": Q.intl.string(Q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": e_,
                            onClick: (e) => {
                                (e.stopPropagation(), eR(!e_));
                            },
                            children: (0, l.jsx)(j.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e8.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return ec
        ? (0, l.jsx)(y.Y, {
              targetElementRef: em && !ex ? $ : k,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: e_,
              onRequestClose: (e) => {
                  let t = e?.target;
                  $.current?.contains(t) === !0 || (t?.closest(`[${eQ.m}]`) == null && eR(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(ed, { onClose: t, returnFocusRef: Y, skipReturnFocusRef: Z });
              },
              children: () => eS,
          })
        : eS;
}
var e5 = n(996988);
let e4 = {
    [e5.d.POPOUT]: 12,
    [e5.d.MODAL]: 26,
    [e5.d.SIDEBAR]: 13,
    [e5.d.VIDEO_TILE_BACKGROUND]: 12,
    [e5.d.EMBED]: 12,
};
function e3(e) {
    let t,
        {
            displayProfile: n,
            themeType: a,
            isRedesignEnabled: g,
            pendingLegacyUsernameDisabled: p,
            pendingBadges: E,
            showPendingBadgeEdits: h = !1,
            onClose: b,
            shouldOpenBadgeTooltip: x,
            shouldGlowTenureBadge: A,
            popoutAnchorRef: _,
            containerRef: R,
        } = e,
        N = (0, d.d)({ location: "UserProfileBadgeListRows" }),
        v = n?.userId,
        j = (0, i.bG)([m.default], () => null != v && m.default.getUser(v)?.bot === !0, [v]),
        y = (0, f.A)(n, p),
        { pendingBadgeDisplayOrder: I, pendingBadgeHiddenBadges: T } = (0, u.A)(),
        C = (0, i.yK)([o.Ay], () => (h && null != v && o.Ay.hasCatalogFor(v) ? o.Ay.getBadges(v) : []), [h, v]),
        S = r.useMemo(() => {
            let e = y;
            if (null != E) {
                let t = new Set(y.map((e) => e.id));
                e = [...y, ...E.filter((e) => !t.has(e.id))];
            }
            return h ? (0, c.Rr)(e, C, { pendingBadgeDisplayOrder: I, pendingBadgeHiddenBadges: T }) : e;
        }, [y, E, h, C, I, T]);
    if (0 === S.length && !h) return null;
    let D = N && !j,
        O = D ? Math.max(S.length - 6, 0) : 0;
    return (
        (t = D
            ? [S.slice(0, 6)]
            : a === e5.d.MODAL_V2
              ? [S]
              : (0, s.chunk)(S, !0 === g && a === e5.d.SIDEBAR ? e4[e5.d.POPOUT] : e4[a])),
        (0, l.jsx)(l.Fragment, {
            children: t.map((e, t) =>
                (0, l.jsx)(
                    e2,
                    {
                        badges: e,
                        overflowCount: O,
                        displayProfile: n,
                        onClose: b,
                        shouldOpenBadgeTooltip: x,
                        shouldGlowTenureBadge: A,
                        isTargetUserBot: j,
                        popoutAnchorRef: _,
                        containerRef: 0 === t ? R : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
