n.d(t, { A: () => e9 });
var a = n(477900),
    l = n(582128),
    r = n(435558),
    s = n(855986),
    i = n(982240),
    o = n(643056),
    d = n(988341),
    c = n(234e3),
    u = n(555149),
    m = n(287809),
    f = n(262),
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
    y = n(22231),
    j = n(265872),
    I = n(564508),
    T = n(438457),
    S = n(144779),
    C = n(793574),
    D = n(688810),
    U = n(682618),
    M = n(731309),
    P = n(620143),
    O = n(861304),
    B = n(248284),
    G = n(675816),
    k = n(425763),
    w = n(952270),
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
    return (0, a.jsxs)(Y.h, {
        color: "nitro-pink",
        className: J.U,
        children: [
            (0, a.jsx)(b.E, {
                variant: "body-xs/medium",
                color: "text-default",
                className: J.t,
                children: Q.intl.string(Q.t.cKIIzk),
            }),
            (0, a.jsx)($.$, {
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
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, k.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(K.mG, {
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
            (0, a.jsx)(ei, { ...r }),
            (0, a.jsx)(K.jV, {
                buttonRef: d,
                className: ea.BU,
                "aria-label": Q.intl.formatToPlainString(Q.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function ei(e) {
    let { badge: t, index: r, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = l.useState(!1);
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
    let m = t.hidden ?? !1,
        f = !0 === t.has_updates,
        g = (0, P.e)({ location: "BadgeCustomizationPopout", hasUnread: f }) && f,
        E = Q.intl.formatToPlainString(m ? Q.t["3Uwmdt"] : Q.t.Ci7gvp, { badgeName: t.name, position: r + 1 });
    return (0, a.jsxs)("div", {
        className: p()(ea.fw, d && ea.HV),
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
                        className: p()(ea.pC, m && ea.jx),
                    }),
            }),
            g && (0, a.jsx)("div", { className: ea.Zm, "aria-hidden": !0 }),
            m &&
                (0, a.jsx)("div", {
                    className: ea.Gf,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(w.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(x.vN, {
                children: (0, a.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: ea.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": g ? `${E}, ${Q.intl.string(Q.t.y2b7CA)}` : E,
                    onClick: u,
                    children: (0, a.jsx)(L.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function eo() {
    let e = (0, k.VU)(),
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
    let { onClose: t, hasUnreadIndicator: n, returnFocusRef: r, skipReturnFocusRef: o } = e,
        d = l.useRef(null),
        u = l.useId();
    (l.useLayoutEffect(() => {
        d.current?.focus();
    }, []),
        (0, H.tj)(d, { returnRef: r }));
    let { analyticsLocations: f } = (0, D.Ay)(C.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: g } = (0, X.NJ)();
    l.useEffect(() => {
        g({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: f, hasUnreadIndicator: n });
    }, []);
    let { fixedBadges: E, reorderableBadges: h, hiddenBadges: x } = (0, en.A)(),
        _ = (0, W.A)(),
        A = (0, k.VU)(),
        N =
            (0, G.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === er;
            }) && !A,
        v = l.useMemo(() => h.map((e) => e.badge_id), [h]),
        R = l.useRef(new Map());
    function y(e) {
        return (t) => {
            null == t ? R.current.delete(e) : R.current.set(e, t);
        };
    }
    function j(e) {
        requestAnimationFrame(() => R.current.get(e)?.focus());
    }
    let I = E.length + h.length + x.length,
        T = (0, s.bG)([i.Ay, m.default], () => {
            let e = m.default.getCurrentUser()?.id;
            return null != e && i.Ay.hasCatalogFor(e);
        });
    function S(e, t) {
        (0, c.hB)((0, c.i1)(v, e, t));
    }
    let U = (0, K.w9)({ listType: el, itemType: er, onFallbackDrop: (e) => S(e.index, v.length - 1) }),
        M = (0, K.w9)({ listType: el, itemType: er });
    l.useLayoutEffect(() => {
        if (N)
            return (
                M(document.body),
                () => {
                    M(null);
                }
            );
    }, [M, N]);
    let P = I > 0,
        B = T && !P,
        w = !_ && !B,
        L = _ ? Q.t.VHaYM7 : Q.t["7Qs/YX"];
    function F() {
        (null != o && (o.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: d,
        className: p()(ea.SW, B && ea.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": u,
        children: [
            (0, a.jsxs)("div", {
                className: p()(ea.Qs, w && ea.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: ea.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.$,
                                children: [
                                    _ && (0, a.jsx)(z.A, { size: "xs", className: ea.oU }),
                                    (0, a.jsx)(V.D, {
                                        id: u,
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: Q.intl.string(Q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !B &&
                                (0, a.jsx)(b.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: Q.intl.string(L),
                                }),
                        ],
                    }),
                    w && (0, a.jsx)(ee, { onClose: t }),
                    B &&
                        (0, a.jsx)(b.E, {
                            className: ea.p$,
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: Q.intl.string(Q.t.VT02mI),
                        }),
                    P &&
                        (0, a.jsxs)("div", {
                            className: p()(ea.yq, N && ea.T0),
                            role: "group",
                            "aria-label": Q.intl.string(Q.t.VWV0y5),
                            children: [
                                _ &&
                                    (0, a.jsx)("div", {
                                        ref: (e) => {
                                            U(e);
                                        },
                                        className: ea.u$,
                                        "aria-hidden": !0,
                                    }),
                                E.map((e, t) =>
                                    (0, a.jsx)(
                                        ei,
                                        { badge: e, index: t, onClose: F, onAction: j, controlRef: y(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                h.map((e, t) =>
                                    _
                                        ? (0, a.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: E.length + t,
                                                  onClose: F,
                                                  onAction: j,
                                                  controlRef: y(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: S,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              ei,
                                              {
                                                  badge: e,
                                                  index: E.length + t,
                                                  onClose: F,
                                                  onAction: j,
                                                  controlRef: y(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                x.map((e, t) =>
                                    (0, a.jsx)(
                                        ei,
                                        {
                                            badge: e,
                                            index: E.length + h.length + t,
                                            onClose: F,
                                            onAction: j,
                                            controlRef: y(e.badge_id),
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
                    (g({ action: "PRESS_VIEW_BADGES", analyticsLocations: f }),
                        (0, O.default)({
                            actionName: "badge_directory_opened",
                            displayedUserId: m.default.getCurrentUser()?.id,
                            isSociallyNavigated: !1,
                            hasUnreadIndicator: n,
                            source: "customize_popout",
                        }),
                        F(),
                        (0, et.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ec = n(824114),
    eu = n(775602),
    em = n(328464),
    ef = n(851767),
    eg = n(351906);
let ep = { [ec.m.BURNT_ORBS]: Q.t.ZzNZM2 };
var eE = n(647729);
function eh(e) {
    return `${e.badge_id}:${e.current_tier}`;
}
function eb(e) {
    return null == e || !i.Ay.isCatalogStaleFor(e) || i.Ay.hasCatalogFetchErrorFor(e);
}
function ex(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: c, userId: u, fallbackTitle: f, fallbackIconSrc: g, shouldShow: p } = e,
        E = (0, M.w0)(c),
        b = (0, s.bG)([i.Ay], () => (null != E && null != u ? i.Ay.getBadgeById(E, u) : void 0), [E, u]),
        x = (0, s.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        _ = (0, s.bG)([m.default], () => m.default.getCurrentUser()?.id),
        A = null != u && u === _ && b?.has_updates === !0,
        N = (0, P.e)({ location: "BadgeMiniTooltip", hasUnread: A }),
        [v, R] = l.useState(null),
        [y, j] = l.useState(0),
        [I, T] = l.useState(null),
        [S, C] = l.useState(null),
        D = l.useCallback(() => {
            null != v && (T(eh(v)), (0, U.zd)(v.badge_id));
        }, [v]),
        [O, B] = l.useState(!1),
        G = (0, s.bG)([i.Ay], () => O && eb(u), [O, u]),
        k = N && A && null != b && eh(b) !== I,
        w = l.useCallback(
            (e) => {
                let t = e && k;
                (R(t ? b : null), C(null), t && j((e) => e + 1));
            },
            [b, k],
        ),
        L = l.useCallback(() => {
            let e = !1 !== p,
                t = eb(u);
            (w(e && t), B(e && !t), null != u && i.Ay.isCatalogStaleFor(u) && (0, U.RS)(u));
        }, [p, w, u]);
    G && (B(!1), w(!0));
    let H = v ?? b,
        V = H?.badge_id === h.$.PREMIUM_TENURE,
        $ = E === h.$.LEGACY_USERNAME,
        F = E === h.$.ORB_VOID,
        z = null != H ? (0, d.YU)(H, H.current_tier)?.name : void 0,
        X = F ? H?.stats?.find((e) => e.unit === ec.m.BURNT_ORBS) : void 0,
        K =
            null != X
                ? (function (e) {
                      let t = ep[e.unit];
                      if (null != t)
                          return {
                              value: Q.intl.formatToPlainString(Q.t.SXPtrb, { count: e.value }),
                              label: Q.intl.formatToPlainString(t, { count: e.value }),
                          };
                  })(X)
                : void 0,
        W = V ? Q.intl.string(Q.t.Ipxkog) : (H?.name ?? f);
    V
        ? (r = n = null != z ? `${W} ${z}` : W)
        : F && null != K
          ? ((t = W), (n = K.value), (r = null != z ? `${W} ${z}` : W))
          : null != z
            ? ((t = W), (n = z), (r = `${W} ${z}`))
            : ((n = W), (r = W));
    let Y = x ? void 0 : H?.complex_icon_animated_url,
        Z = Y ?? H?.complex_icon_static_url ?? H?.simple_icon_url ?? g,
        q = null != Y && Z === Y;
    if ($) return (0, a.jsx)(e_, { userId: u, title: n, badgeImage: Z, shouldShow: p, children: o });
    let J = v?.previous_acked_tier,
        ee =
            null != v
                ? {
                      id: y,
                      graphic: (0, a.jsx)(eE.A, {
                          badge: v,
                          previousTierKey: J,
                          canStart: !0,
                          surface: "badge_tooltip",
                          size: "small",
                          startDelay: 0,
                          onStart: C,
                          onEnd: D,
                      }),
                      label: (0, d.kD)(v, J),
                      timingStyle: (0, eE.$)({
                          isLevelUp: null != (0, d.YU)(v, J),
                          startDelay: 0,
                          isMotionSkipped: !0 === S,
                      }),
                      isStarted: null != S,
                  }
                : void 0,
        et = (0, i.H5)(H),
        en =
            K?.label ??
            H?.info_label ??
            (null != et ? Q.intl.formatToPlainString(Q.t["0aEh2a"], { date: new Date(et) }) : void 0);
    return (0, a.jsx)(em.A, {
        title: n,
        eyebrow: t,
        body: en,
        screenReaderBody: null != K ? (H?.info_label ?? `${K.value} ${K.label}`) : void 0,
        badgeImage: Z,
        badgeName: r,
        variant: V ? "nitro" : "default",
        isAnimated: q,
        unlock: ee,
        isUnlockPending: O && k,
        shouldShow: p,
        onShow: L,
        children: o,
    });
}
function e_(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [ef.A, eg.A],
            () =>
                eg.A.hidePersonalInformation
                    ? Q.intl.string(Q.t.Br1ls3)
                    : null != n
                      ? (ef.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(em.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var eA = n(969935),
    eN = n(683063);
function ev(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(eN.u, {
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
var eR = n(116833),
    ey = n(704640),
    ej = n(208223),
    eI = n(642481),
    eT = n(424746),
    eS = n(682901),
    eC = n(49999),
    eD = n(518477);
let eU = function (e) {
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
        m = Q.intl.string(u).toLocaleUpperCase(),
        f = eS.VD[t].rarity,
        g = (0, ey.A)(t),
        p = (0, ej.I)(t).standard;
    (0, l.useEffect)(() => {
        (eR.m[eR.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, l.useCallback)(() => {
        n?.(eC.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(i, o, d);
        return (0, a.jsx)(em.A, {
            targetElementRef: s,
            onShow: c,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: f,
            badgeImage: p,
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
            component: eR.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eT.A, {
              targetElementRef: s,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: 300,
              onShow: c,
              ...h,
              children: r,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(eI.A, {
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
var eM = n(592265);
let eP = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, a.jsxs)("div", {
        className: eM.R,
        children: [t, (0, a.jsx)("div", { className: eM.A, children: n }), l],
    });
};
var eO = n(224016),
    eB = n(747278);
let eG = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, ej.I)(n.id).standard;
    return (0, a.jsxs)(eP, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eO.A, { width: 56, className: eB.R }),
        children: [
            (0, a.jsx)(V.D, { variant: "heading-xl/semibold", children: Q.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(b.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: eB.K,
                children: t.description,
            }),
        ],
    });
};
var ek = n(30084),
    ew = n(506988),
    eL = n(976860),
    eH = n(780964),
    eV = n(766075),
    e$ = n(305003),
    eF = n(195118),
    ez = n(31188),
    eX = n(620882),
    eK = n(370277);
function eW(e) {
    let { children: t, targetElementRef: n, delay: r, showSubtext: s, forceOpen: i } = e,
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
            }, r)));
    }, [r, u]);
    l.useEffect(() => {
        i && !o && m();
    }, [i, o, m]);
    let f = l.useCallback(() => {
            m();
        }, [m]),
        g = l.useCallback(() => {
            (u(), d(!1));
        }, [u]);
    return (0, a.jsxs)("div", {
        onMouseEnter: f,
        onMouseLeave: g,
        children: [
            t,
            (0, a.jsxs)(eF.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eY, { showSubtext: s }), (0, a.jsx)(ez.F, {})],
            }),
        ],
    });
}
function eY(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eP, {
        assetComponent: (0, a.jsx)(eX.A, { className: eK.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(V.D, {
            variant: "heading-sm/semibold",
            className: eK.RK,
            children: Q.intl.string(Q.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(V.D, {
                variant: "heading-xl/semibold",
                className: t ? void 0 : eK.Qn,
                children: Q.intl.string(Q.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(b.E, { variant: "body-xs/normal", className: eK.lV, children: Q.intl.string(Q.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eZ = n(129230),
    eq = n(474090),
    eQ = n(439174),
    eJ = n(741534),
    e0 = n(527212),
    e1 = n(874402),
    e8 = n(652215),
    e2 = n(758836),
    e5 = n(854232),
    e4 = n(816645);
function e3(e) {
    let t,
        {
            badges: n,
            overflowCount: r,
            className: d,
            badgeClassName: c,
            displayProfile: u,
            onClose: g,
            shouldOpenBadgeTooltip: G,
            shouldGlowTenureBadge: k,
            popoutAnchorRef: w,
            containerRef: L,
            isTargetUserBot: H,
        } = e,
        V = (0, B.A)((e) => e.isOpen),
        $ = l.useRef(null),
        F = (0, E.A)($, L),
        z = l.useRef(null),
        K = l.useRef(null),
        W = l.useRef(null),
        Y = l.useRef(null),
        Z = l.useRef(!1),
        { analyticsLocations: q } = (0, D.Ay)(C.A.BADGE),
        { context: J, trackUserProfileAction: ee } = (0, X.NJ)(),
        en = m.default.getCurrentUser(),
        ea = u?.userId === en?.id,
        el = (0, eq.CC)(en?.premiumType, eS.PremiumTypes.TIER_2),
        er = (0, o.d)({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        er && u?.userId != null && !i.Ay.hasCatalogFor(u.userId) && (0, U.RS)(u.userId);
    }, [er, u?.userId]);
    let es = u?.userId,
        ei = ea && er && null != w,
        eo = !ei && er,
        ec = ei && 0 === n.length,
        eu = en?.id,
        em = ea && er,
        ef = (0, s.bG)([i.Ay], () => em && null != eu && i.Ay.getUnreadBadges(eu).length > 0, [em, eu]),
        eg = (0, P.e)({ location: "UserProfileBadgeList", hasUnread: ef }) && ef,
        ep = l.useRef(!1);
    l.useEffect(() => {
        eg && !ep.current && ((ep.current = !0), ee({ action: "VIEW_BADGES_UNREAD_INDICATOR" }));
    }, [eg, ee]);
    let eE = (0, s.bG)(
        [i.Ay],
        () => null != eu && (!i.Ay.hasCatalogFor(eu) || i.Ay.getBadges(eu).some((e) => e.owned)),
        [eu],
    );
    function eh(e) {
        (0, O.default)({
            actionName: "badge_directory_opened",
            badge: e,
            displayedUserId: es,
            isSociallyNavigated: !ea,
            hasUnreadIndicator: eg,
            source: "profile_badge_row",
        });
    }
    let eb = ei && V;
    function e_(e) {
        if ((B.A.setState({ isOpen: e }), !e)) {
            if (Z.current) {
                Z.current = !1;
                return;
            }
            requestAnimationFrame(() => Y.current?.focus());
        }
    }
    let eN = (0, e0.AP)(en?.id ?? null),
        eR = (0, f.A)(eN).some((e) => e.id === e$.A.ORB_PROFILE_BADGE),
        ey = ei && !ec && 0 === r,
        ej = null;
    r > 0 &&
        ((ej = (0, a.jsx)(b.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "text-default",
            className: e4.AX,
            "aria-hidden": !0,
            children: Q.intl.format(Q.t.n7CiSK, { count: r }),
        })),
        (t = Q.intl.formatToPlainString(Q.t.eIHfGZ, { overflow_count: r })));
    let eI = (0, a.jsxs)("div", {
        ref: F,
        className: p()(e4.kL, er && !0 !== H && e4.Yq, ei && e4.Tx, ey && e4.gK, eg && e4.TW, d),
        ...(ec
            ? null
            : {
                  "aria-label": eg
                      ? `${Q.intl.string(Q.t.VWV0y5)}, ${Q.intl.string(Q.t.y2b7CA)}`
                      : Q.intl.string(Q.t.VWV0y5),
                  role: "group",
              }),
        ...(ei && !ec ? { onClick: () => e_(!eb) } : null),
        children: [
            eg && (0, a.jsx)("span", { className: e4.Zm, "aria-hidden": !0 }),
            ec &&
                (0, a.jsx)(x.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: Y,
                        type: "button",
                        className: e4.p$,
                        "aria-label": eg ? `${Q.intl.string(Q.t.l6w3Vj)}, ${Q.intl.string(Q.t.y2b7CA)}` : void 0,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eb,
                        onClick: (e) => {
                            (e.stopPropagation(), e_(!eb));
                        },
                        children: [
                            (0, a.jsx)(_.PlusSmallIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(b.E, {
                                tag: "span",
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === e$.A.ORB_PROFILE_BADGE,
                    l = (0, eQ.e0)(e.id),
                    r = null != l || e.id === e5.K,
                    s = "april_fools_2026" === e.id,
                    o = void 0 !== l && e.id !== e5.K,
                    d = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? (0, eD.L7)(e.icon),
                        className: p()(e4.qS, c),
                    }),
                    E = null != G && G(e.id),
                    b = {
                        onClick: (a) => {
                            if (
                                (ee({ action: "PRESS_BADGE" }),
                                (0, eJ.vP)({
                                    badgeId: (0, M.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...J,
                                }),
                                ei)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (er && l?.bot !== !0) {
                                a.preventDefault();
                                let t = (0, M.w0)(e.id);
                                (eh(null != t ? i.Ay.getBadgeById(t, u?.userId) : void 0),
                                    (0, et.openBadgeDirectoryModal)({
                                        initialBadgeId: t,
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, M.w0)(e.id) === h.$.GIFTING) {
                                (a.preventDefault(),
                                    g?.(),
                                    (0, eV.openUserSettings)(eH.X.GIFT_PANEL, { analyticsLocations: q }));
                                return;
                            }
                            if (n) {
                                ((0, eA.Cz)({
                                    tab: e2.G2.ORBS,
                                    analyticsLocations: q,
                                    analyticsSource: C.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    g?.(),
                                    (0, A.s7)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eZ.default.track(e8.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: el,
                                        viewed_user_id: u?.userId,
                                    }),
                                    el)
                                ) {
                                    (ea
                                        ? ((0, eL.pX)(e8.BVt.NITRO_HOME), (0, A.s7)())
                                        : (0, ek.D)({ analyticsLocations: q, displayProfile: u }),
                                        g?.());
                                    return;
                                }
                                if (ea) {
                                    let t = null != e.link ? (0, I.default)(e.link, { analyticsLocations: q }) : null;
                                    if (null == t) return;
                                    return (g?.(), (0, A.s7)(), t(a));
                                }
                                return ((0, ek.D)({ analyticsLocations: q, displayProfile: u }), void g?.());
                            }
                            let s = null != e.link ? (0, I.default)(e.link, { analyticsLocations: q }) : null;
                            if (null != s) return (g?.(), (0, A.s7)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === f.h &&
                                (0, T.r)({
                                    type: S.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: ew.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                ee({ action: "HOVER_BADGE" }),
                                (0, eJ.vP)({
                                    badgeId: (0, M.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: q,
                                    ...J,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(ei ? { "aria-haspopup": "dialog", "aria-expanded": eb } : null),
                        style: { filter: k && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (er)
                    return (0, a.jsx)(
                        ex,
                        {
                            shouldShow: !eb,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eD.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...b, children: d }),
                        },
                        `${e.id}-${t}`,
                    );
                if (o) {
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: z, children: d });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eU, {
                                badgeId: e.id,
                                targetElementRef: z,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eZ.default.track(e8.HAw.TOOLTIP_VIEWED, {
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
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: K, children: d });
                    return (0, a.jsx)(
                        eW,
                        {
                            targetElementRef: K,
                            delay: 300,
                            showSubtext: !eR && !e.isPreviewMode,
                            forceOpen: E,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...b, ref: W, children: d });
                    return (0, a.jsx)(
                        ev,
                        { targetElementRef: W, delay: 300, forceOpen: E, badgeDescription: e.description, children: n },
                        `${e.id}-${t}`,
                    );
                }
                let x = (0, a.jsx)(N.Anchor, { ...b, children: d }),
                    _ = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== e5.K
                            ? (0, a.jsx)(eG, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e5.K ? l : void 0 });
                return (0, a.jsx)(
                    v.m,
                    { __unsupportedReactNodeAsText: _, forceOpen: E, delay: 300, ariaHidden: !0, children: x },
                    `${e.id}-${t}`,
                );
            }),
            r > 0 &&
                (eo
                    ? (0, a.jsx)(x.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: p()(e4.$O, e4.lv),
                              "aria-label": t,
                              onClick: function () {
                                  eh();
                                  let e = null != es ? m.default.getUser(es) : null;
                                  (0, et.openBadgeDirectoryModal)({
                                      targetUserId: es,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: ej,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: e4.$O, children: [(0, a.jsx)(R.A, { children: t }), ej] })),
            ei &&
                !ec &&
                (0, a.jsx)(v.m, {
                    text: Q.intl.string(Q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: Y,
                    children: (0, a.jsx)(x.vN, {
                        children: (0, a.jsx)("button", {
                            ref: Y,
                            type: "button",
                            className: p()(e4.r9, r > 0 ? e4.v_ : e4.Y5),
                            "aria-label": Q.intl.string(Q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": eb,
                            onClick: (e) => {
                                (e.stopPropagation(), e_(!eb));
                            },
                            children: (0, a.jsx)(y.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e4.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return ei
        ? (0, a.jsx)(j.Y, {
              targetElementRef: ec && !eE ? $ : w,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: eb,
              onRequestClose: (e) => {
                  let t = e?.target;
                  $.current?.contains(t) === !0 || (t?.closest(`[${e1.m}]`) == null && e_(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(ed, {
                      onClose: t,
                      hasUnreadIndicator: eg,
                      returnFocusRef: Y,
                      skipReturnFocusRef: Z,
                  });
              },
              children: () => eI,
          })
        : eI;
}
var e6 = n(996988);
let e7 = {
    [e6.d.POPOUT]: 12,
    [e6.d.MODAL]: 26,
    [e6.d.SIDEBAR]: 12,
    [e6.d.VIDEO_TILE_BACKGROUND]: 12,
    [e6.d.EMBED]: 12,
};
function e9(e) {
    let t,
        {
            displayProfile: n,
            themeType: d,
            pendingLegacyUsernameDisabled: g,
            pendingBadges: p,
            showPendingBadgeEdits: E = !1,
            onClose: h,
            shouldOpenBadgeTooltip: b,
            shouldGlowTenureBadge: x,
            popoutAnchorRef: _,
            containerRef: A,
        } = e,
        N = (0, o.d)({ location: "UserProfileBadgeListRows" }),
        v = n?.userId,
        R = (0, s.bG)([m.default], () => null != v && m.default.getUser(v)?.bot === !0, [v]),
        y = (0, f.A)(n, g),
        { pendingBadgeDisplayOrder: j, pendingBadgeHiddenBadges: I } = (0, u.A)(),
        T = (0, s.yK)([i.Ay], () => (E && null != v && i.Ay.hasCatalogFor(v) ? i.Ay.getBadges(v) : []), [E, v]),
        S = l.useMemo(() => {
            let e = y;
            if (null != p) {
                let t = new Set(y.map((e) => e.id));
                e = [...y, ...p.filter((e) => !t.has(e.id))];
            }
            return E ? (0, c.Rr)(e, T, { pendingBadgeDisplayOrder: j, pendingBadgeHiddenBadges: I }) : e;
        }, [y, p, E, T, j, I]);
    if (0 === S.length && !E) return null;
    let C = N && !R,
        D = C ? Math.max(S.length - 6, 0) : 0;
    return (
        (t = C ? [S.slice(0, 6)] : d === e6.d.MODAL_V2 ? [S] : (0, r.chunk)(S, e7[d])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e3,
                    {
                        badges: e,
                        overflowCount: D,
                        displayProfile: n,
                        onClose: h,
                        shouldOpenBadgeTooltip: b,
                        shouldGlowTenureBadge: x,
                        isTargetUserBot: R,
                        popoutAnchorRef: _,
                        containerRef: 0 === t ? A : void 0,
                    },
                    t,
                ),
            ),
        })
    );
}
