n.d(t, { A: () => e9 });
var a,
    l = n(477900),
    r = n(582128),
    s = n(435558),
    i = n(855986),
    o = n(982240),
    d = n(643056),
    c = n(988341),
    u = n(234e3),
    m = n(555149),
    f = n(287809),
    g = n(262),
    p = n(503698),
    E = n.n(p),
    h = n(612324),
    b = n(70283),
    x = n(834730),
    _ = n(559106),
    A = n(307301),
    N = n(192308),
    v = n(28863),
    R = n(866665),
    j = n(140735),
    y = n(22231),
    I = n(265872),
    T = n(564508),
    S = n(438457),
    C = n(144779),
    D = n(793574),
    M = n(688810),
    O = n(682618),
    P = n(731309),
    U = n(620143),
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
    Y = n(451395),
    K = n(327791),
    W = n(315629),
    Z = n(403581),
    q = n(87719),
    Q = n(792996),
    J = n(207711);
function ee(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(W.h, {
        color: "nitro-pink",
        className: J.U,
        children: [
            (0, l.jsx)(x.E, {
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
        o = (0, k.VU)(),
        d = r.useRef(null);
    return (0, l.jsxs)(Y.mG, {
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
            (0, l.jsx)(Y.jV, {
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
        g = (0, U.e)({ location: "BadgeCustomizationPopout", hasUnread: f }) && f,
        p = Q.intl.formatToPlainString(m ? Q.t["3Uwmdt"] : Q.t.Ci7gvp, { badgeName: t.name, position: a + 1 });
    return (0, l.jsxs)("div", {
        className: E()(ea.fw, d && ea.HV),
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
                        className: E()(ea.pC, m && ea.jx),
                    }),
            }),
            g && (0, l.jsx)("div", { className: ea.Zm, "aria-hidden": !0 }),
            m &&
                (0, l.jsx)("div", {
                    className: ea.Gf,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(w.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, l.jsx)(_.vN, {
                children: (0, l.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: ea.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": g ? `${p}, ${Q.intl.string(Q.t.y2b7CA)}` : p,
                    onClick: u,
                    children: (0, l.jsx)(L.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
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
    let { analyticsLocations: c } = (0, M.Ay)(D.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: m } = (0, X.NJ)();
    r.useEffect(() => {
        m({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: c });
    }, []);
    let { fixedBadges: g, reorderableBadges: p, hiddenBadges: h } = (0, en.A)(),
        b = (0, K.A)(),
        _ = (0, k.VU)(),
        A =
            (0, G.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === er;
            }) && !_,
        N = r.useMemo(() => p.map((e) => e.badge_id), [p]),
        v = r.useRef(new Map());
    function R(e) {
        return (t) => {
            null == t ? v.current.delete(e) : v.current.set(e, t);
        };
    }
    function j(e) {
        requestAnimationFrame(() => v.current.get(e)?.focus());
    }
    let y = g.length + p.length + h.length,
        I = (0, i.bG)([o.Ay, f.default], () => {
            let e = f.default.getCurrentUser()?.id;
            return null != e && o.Ay.hasCatalogFor(e);
        });
    function T(e, t) {
        (0, u.hB)((0, u.i1)(N, e, t));
    }
    let S = (0, Y.w9)({ listType: el, itemType: er, onFallbackDrop: (e) => T(e.index, N.length - 1) }),
        C = (0, Y.w9)({ listType: el, itemType: er });
    r.useLayoutEffect(() => {
        if (A)
            return (
                C(document.body),
                () => {
                    C(null);
                }
            );
    }, [C, A]);
    let O = y > 0,
        P = I && !O,
        U = !b && !P,
        B = b ? Q.t.VHaYM7 : Q.t["7Qs/YX"];
    function w() {
        (null != a && (a.current = !0), t());
    }
    return (0, l.jsxs)("div", {
        ref: s,
        className: E()(ea.SW, P && ea.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, l.jsxs)("div", {
                className: E()(ea.Qs, U && ea.bY),
                children: [
                    (0, l.jsxs)("div", {
                        className: ea.wx,
                        children: [
                            (0, l.jsxs)("div", {
                                className: ea.$,
                                children: [
                                    b && (0, l.jsx)(z.A, { size: "xs", className: ea.oU }),
                                    (0, l.jsx)(V.D, {
                                        id: d,
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: Q.intl.string(Q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !P &&
                                (0, l.jsx)(x.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: Q.intl.string(B),
                                }),
                        ],
                    }),
                    U && (0, l.jsx)(ee, { onClose: t }),
                    P &&
                        (0, l.jsx)(x.E, {
                            className: ea.p$,
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: Q.intl.string(Q.t.VT02mI),
                        }),
                    O &&
                        (0, l.jsxs)("div", {
                            className: E()(ea.yq, A && ea.T0),
                            role: "group",
                            "aria-label": Q.intl.string(Q.t.VWV0y5),
                            children: [
                                b &&
                                    (0, l.jsx)("div", {
                                        ref: (e) => {
                                            S(e);
                                        },
                                        className: ea.u$,
                                        "aria-hidden": !0,
                                    }),
                                g.map((e, t) =>
                                    (0, l.jsx)(
                                        ei,
                                        { badge: e, index: t, onClose: w, onAction: j, controlRef: R(e.badge_id) },
                                        e.badge_id,
                                    ),
                                ),
                                p.map((e, t) =>
                                    b
                                        ? (0, l.jsx)(
                                              es,
                                              {
                                                  badge: e,
                                                  index: g.length + t,
                                                  onClose: w,
                                                  onAction: j,
                                                  controlRef: R(e.badge_id),
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
                                                  onClose: w,
                                                  onAction: j,
                                                  controlRef: R(e.badge_id),
                                              },
                                              e.badge_id,
                                          ),
                                ),
                                h.map((e, t) =>
                                    (0, l.jsx)(
                                        ei,
                                        {
                                            badge: e,
                                            index: g.length + p.length + t,
                                            onClose: w,
                                            onAction: j,
                                            controlRef: R(e.badge_id),
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
                    (m({ action: "PRESS_VIEW_BADGES", analyticsLocations: c }),
                        w(),
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
var eE = n(647729);
function eh(e) {
    return `${e.badge_id}:${e.current_tier}`;
}
function eb(e) {
    return null == e || !o.Ay.isCatalogStaleFor(e) || o.Ay.hasCatalogFetchErrorFor(e);
}
function ex(e) {
    let t,
        n,
        a,
        { children: s, legacyBadgeId: d, userId: u, fallbackTitle: m, fallbackIconSrc: g, shouldShow: p } = e,
        E = (0, P.w0)(d),
        h = (0, i.bG)([o.Ay], () => (null != E && null != u ? o.Ay.getBadgeById(E, u) : void 0), [E, u]),
        x = (0, i.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        _ = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.id),
        A = null != u && u === _ && h?.has_updates === !0,
        N = (0, U.e)({ location: "BadgeMiniTooltip", hasUnread: A }),
        [v, R] = r.useState(null),
        [j, y] = r.useState(0),
        [I, T] = r.useState(null),
        [S, C] = r.useState(null),
        D = r.useCallback(() => {
            null != v && (T(eh(v)), (0, O.zd)(v.badge_id));
        }, [v]),
        [M, B] = r.useState(!1),
        G = (0, i.bG)([o.Ay], () => M && eb(u), [M, u]),
        k = N && A && null != h && eh(h) !== I,
        w = r.useCallback(
            (e) => {
                let t = e && k;
                (R(t ? h : null), C(null), t && y((e) => e + 1));
            },
            [h, k],
        ),
        L = r.useCallback(() => {
            let e = !1 !== p,
                t = eb(u);
            (w(e && t), B(e && !t), null != u && o.Ay.isCatalogStaleFor(u) && (0, O.RS)(u));
        }, [p, w, u]);
    G && (B(!1), w(!0));
    let H = v ?? h,
        V = H?.badge_id === b.$.PREMIUM_TENURE,
        $ = E === b.$.LEGACY_USERNAME,
        F = E === b.$.ORB_VOID,
        z = null != H ? (0, c.YU)(H, H.current_tier)?.name : void 0,
        X = F ? H?.stats?.find((e) => e.unit === ec.BURNT_ORBS) : void 0,
        Y =
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
        K = V ? Q.intl.string(Q.t.Ipxkog) : (H?.name ?? m);
    V
        ? (a = n = null != z ? `${K} ${z}` : K)
        : F && null != Y
          ? ((t = K), (n = Y.value), (a = null != z ? `${K} ${z}` : K))
          : null != z
            ? ((t = K), (n = z), (a = `${K} ${z}`))
            : ((n = K), (a = K));
    let W = x ? void 0 : H?.complex_icon_animated_url,
        Z = W ?? H?.complex_icon_static_url ?? H?.simple_icon_url ?? g,
        q = null != W && Z === W;
    if ($) return (0, l.jsx)(e_, { userId: u, title: n, badgeImage: Z, shouldShow: p, children: s });
    let J = v?.previous_acked_tier,
        ee =
            null != v
                ? {
                      id: j,
                      graphic: (0, l.jsx)(eE.A, {
                          badge: v,
                          previousTierKey: J,
                          canStart: !0,
                          size: "small",
                          startDelay: 0,
                          onStart: C,
                          onEnd: D,
                      }),
                      label: (0, c.kD)(v, J),
                      timingStyle: (0, eE.$)({
                          isLevelUp: null != (0, c.YU)(v, J),
                          startDelay: 0,
                          isMotionSkipped: !0 === S,
                      }),
                      isStarted: null != S,
                  }
                : void 0,
        et = (0, o.H5)(H),
        en =
            Y?.label ??
            H?.info_label ??
            (null != et ? Q.intl.formatToPlainString(Q.t["0aEh2a"], { date: new Date(et) }) : void 0);
    return (0, l.jsx)(em.A, {
        title: n,
        eyebrow: t,
        body: en,
        screenReaderBody: null != Y ? (H?.info_label ?? `${Y.value} ${Y.label}`) : void 0,
        badgeImage: Z,
        badgeName: a,
        variant: V ? "nitro" : "default",
        isAnimated: q,
        unlock: ee,
        isUnlockPending: M && k,
        shouldShow: p,
        onShow: L,
        children: s,
    });
}
function e_(e) {
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
var eA = n(969935),
    eN = n(683063);
function ev(e) {
    let { targetElementRef: t, delay: n, forceOpen: a, badgeDescription: r, children: s } = e;
    return (0, l.jsx)(eN.u, {
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
var eR = n(116833),
    ej = n(704640),
    ey = n(208223),
    eI = n(642481),
    eT = n(424746),
    eS = n(682901),
    eC = n(49999),
    eD = n(518477);
let eM = function (e) {
    let {
            badgeId: t = eS.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: a,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eS.VD[t].nameUnformattedNitro,
        m = Q.intl.string(u).toLocaleUpperCase(),
        f = eS.VD[t].rarity,
        g = (0, ej.A)(t),
        p = (0, ey.I)(t).standard;
    (0, r.useEffect)(() => {
        (eR.m[eR.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, r.useCallback)(() => {
        n?.(eC.i.USER_DISMISS);
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
            component: eR.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, l.jsx)(eT.A, {
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
                  (0, l.jsx)(eI.A, {
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
let eP = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: a } = e;
    return (0, l.jsxs)("div", {
        className: eO.R,
        children: [t, (0, l.jsx)("div", { className: eO.A, children: n }), a],
    });
};
var eU = n(224016),
    eB = n(747278);
let eG = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        a = (0, ey.I)(n.id).standard;
    return (0, l.jsxs)(eP, {
        assetComponent: (0, l.jsx)("img", { src: a, alt: "" }),
        tooltipWordmarkComponent: (0, l.jsx)(eU.A, { width: 56, className: eB.R }),
        children: [
            (0, l.jsx)(V.D, { variant: "heading-xl/semibold", children: Q.intl.string(n.nameUnformatted) }),
            (0, l.jsx)(x.E, {
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
    eY = n(370277);
function eK(e) {
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
            (0, l.jsxs)(eF.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, l.jsx)(eW, { showSubtext: s }), (0, l.jsx)(ez.F, {})],
            }),
        ],
    });
}
function eW(e) {
    let { showSubtext: t = !1 } = e;
    return (0, l.jsxs)(eP, {
        assetComponent: (0, l.jsx)(eX.A, { className: eY.jc }),
        tooltipWordmarkComponent: (0, l.jsx)(V.D, {
            variant: "heading-sm/semibold",
            className: eY.RK,
            children: Q.intl.string(Q.t.ElYQFS),
        }),
        children: [
            (0, l.jsx)(V.D, {
                variant: "heading-xl/semibold",
                className: t ? void 0 : eY.Qn,
                children: Q.intl.string(Q.t.lTHkqd),
            }),
            t
                ? (0, l.jsx)(x.E, { variant: "body-xs/normal", className: eY.lV, children: Q.intl.string(Q.t.MEV0GI) })
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
            overflowCount: a,
            className: s,
            badgeClassName: c,
            displayProfile: u,
            onClose: m,
            shouldOpenBadgeTooltip: p,
            shouldGlowTenureBadge: G,
            popoutAnchorRef: k,
            containerRef: w,
            isTargetUserBot: L,
        } = e,
        H = (0, B.A)((e) => e.isOpen),
        V = r.useRef(null),
        $ = (0, h.A)(V, w),
        F = r.useRef(null),
        z = r.useRef(null),
        Y = r.useRef(null),
        K = r.useRef(null),
        W = r.useRef(!1),
        { analyticsLocations: Z } = (0, M.Ay)(D.A.BADGE),
        { context: q, trackUserProfileAction: J } = (0, X.NJ)(),
        ee = f.default.getCurrentUser(),
        en = u?.userId === ee?.id,
        ea = (0, eq.CC)(ee?.premiumType, eS.PremiumTypes.TIER_2),
        el = (0, d.d)({ location: "UserProfileBadgeList" });
    r.useEffect(() => {
        el && u?.userId != null && !o.Ay.hasCatalogFor(u.userId) && (0, O.RS)(u.userId);
    }, [el, u?.userId]);
    let er = u?.userId,
        es = en && el && null != k,
        ei = !es && el,
        eo = es && 0 === n.length,
        ec = ee?.id,
        eu = en && el,
        em = (0, i.bG)([o.Ay], () => eu && null != ec && o.Ay.getUnreadBadges(ec).length > 0, [eu, ec]),
        ef = (0, U.e)({ location: "UserProfileBadgeList", hasUnread: em }) && em,
        eg = (0, i.bG)(
            [o.Ay],
            () => null != ec && (!o.Ay.hasCatalogFor(ec) || o.Ay.getBadges(ec).some((e) => e.owned)),
            [ec],
        ),
        ep = es && H;
    function eE(e) {
        if ((B.A.setState({ isOpen: e }), !e)) {
            if (W.current) {
                W.current = !1;
                return;
            }
            requestAnimationFrame(() => K.current?.focus());
        }
    }
    let eh = (0, e0.AP)(ee?.id ?? null),
        eb = (0, g.A)(eh).some((e) => e.id === e$.A.ORB_PROFILE_BADGE),
        e_ = es && !eo && 0 === a,
        eN = null;
    a > 0 &&
        ((eN = (0, l.jsx)(x.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "text-default",
            className: e4.AX,
            "aria-hidden": !0,
            children: Q.intl.format(Q.t.n7CiSK, { count: a }),
        })),
        (t = Q.intl.formatToPlainString(Q.t.eIHfGZ, { overflow_count: a })));
    let eR = (0, l.jsxs)("div", {
        ref: $,
        className: E()(e4.kL, el && !0 !== L && e4.Yq, es && e4.Tx, e_ && e4.gK, ef && e4.TW, s),
        ...(eo
            ? null
            : {
                  "aria-label": ef
                      ? `${Q.intl.string(Q.t.VWV0y5)}, ${Q.intl.string(Q.t.y2b7CA)}`
                      : Q.intl.string(Q.t.VWV0y5),
                  role: "group",
              }),
        ...(es && !eo ? { onClick: () => eE(!ep) } : null),
        children: [
            ef && (0, l.jsx)("span", { className: e4.Zm, "aria-hidden": !0 }),
            eo &&
                (0, l.jsx)(_.vN, {
                    children: (0, l.jsxs)("button", {
                        ref: K,
                        type: "button",
                        className: e4.p$,
                        "aria-label": ef ? `${Q.intl.string(Q.t.l6w3Vj)}, ${Q.intl.string(Q.t.y2b7CA)}` : void 0,
                        "aria-haspopup": "dialog",
                        "aria-expanded": ep,
                        onClick: (e) => {
                            (e.stopPropagation(), eE(!ep));
                        },
                        children: [
                            (0, l.jsx)(A.PlusSmallIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, l.jsx)(x.E, {
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
                    a = (0, eQ.e0)(e.id),
                    r = null != a || e.id === e5.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== a && e.id !== e5.K,
                    o = (0, l.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? (0, eD.L7)(e.icon),
                        className: E()(e4.qS, c),
                    }),
                    d = null != p && p(e.id),
                    h = {
                        onClick: (a) => {
                            if (
                                (J({ action: "PRESS_BADGE" }),
                                (0, eJ.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: Z,
                                    ...q,
                                }),
                                es)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? f.default.getUser(u.userId) : null;
                            if (el && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, et.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, P.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, P.w0)(e.id) === b.$.GIFTING) {
                                (a.preventDefault(),
                                    m?.(),
                                    (0, eV.openUserSettings)(eH.X.GIFT_PANEL, { analyticsLocations: Z }));
                                return;
                            }
                            if (n) {
                                ((0, eA.Cz)({
                                    tab: e2.G2.ORBS,
                                    analyticsLocations: Z,
                                    analyticsSource: D.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    m?.(),
                                    (0, N.s7)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eZ.default.track(e8.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: ea,
                                        viewed_user_id: u?.userId,
                                    }),
                                    ea)
                                ) {
                                    (en
                                        ? ((0, eL.pX)(e8.BVt.NITRO_HOME), (0, N.s7)())
                                        : (0, ek.D)({ analyticsLocations: Z, displayProfile: u }),
                                        m?.());
                                    return;
                                }
                                if (en) {
                                    let t = null != e.link ? (0, T.default)(e.link, { analyticsLocations: Z }) : null;
                                    if (null == t) return;
                                    return (m?.(), (0, N.s7)(), t(a));
                                }
                                return ((0, ek.D)({ analyticsLocations: Z, displayProfile: u }), void m?.());
                            }
                            let s = null != e.link ? (0, T.default)(e.link, { analyticsLocations: Z }) : null;
                            if (null != s) return (m?.(), (0, N.s7)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === g.h &&
                                (0, S.r)({
                                    type: C.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: ew.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                J({ action: "HOVER_BADGE" }),
                                (0, eJ.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: Z,
                                    ...q,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(es ? { "aria-haspopup": "dialog", "aria-expanded": ep } : null),
                        style: { filter: G && null != a ? `drop-shadow(0 0 5px ${a.glowColor})` : void 0 },
                    };
                if (el)
                    return (0, l.jsx)(
                        ex,
                        {
                            shouldShow: !ep,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eD.L7)(e.icon),
                            children: (0, l.jsx)(v.Anchor, { ...h, children: o }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, l.jsx)(v.Anchor, { ...h, ref: F, children: o });
                    return (0, l.jsx)(
                        "div",
                        {
                            children: (0, l.jsx)(eM, {
                                badgeId: e.id,
                                targetElementRef: F,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eZ.default.track(e8.HAw.TOOLTIP_VIEWED, {
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
                    let n = (0, l.jsx)(v.Anchor, { ...h, ref: z, children: o });
                    return (0, l.jsx)(
                        eK,
                        {
                            targetElementRef: z,
                            delay: 300,
                            showSubtext: !eb && !e.isPreviewMode,
                            forceOpen: d,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, l.jsx)(v.Anchor, { ...h, ref: Y, children: o });
                    return (0, l.jsx)(
                        ev,
                        { targetElementRef: Y, delay: 300, forceOpen: d, badgeDescription: e.description, children: n },
                        `${e.id}-${t}`,
                    );
                }
                let x = (0, l.jsx)(v.Anchor, { ...h, children: o }),
                    _ = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== e5.K
                            ? (0, l.jsx)(eG, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e5.K ? a : void 0 });
                return (0, l.jsx)(
                    R.m,
                    { __unsupportedReactNodeAsText: _, forceOpen: d, delay: 300, ariaHidden: !0, children: x },
                    `${e.id}-${t}`,
                );
            }),
            a > 0 &&
                (ei
                    ? (0, l.jsx)(_.vN, {
                          children: (0, l.jsx)("button", {
                              type: "button",
                              className: E()(e4.$O, e4.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != er ? f.default.getUser(er) : null;
                                  (0, et.openBadgeDirectoryModal)({
                                      targetUserId: er,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: eN,
                          }),
                      })
                    : (0, l.jsxs)("span", { className: e4.$O, children: [(0, l.jsx)(j.A, { children: t }), eN] })),
            es &&
                !eo &&
                (0, l.jsx)(R.m, {
                    text: Q.intl.string(Q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: K,
                    children: (0, l.jsx)(_.vN, {
                        children: (0, l.jsx)("button", {
                            ref: K,
                            type: "button",
                            className: E()(e4.r9, a > 0 ? e4.v_ : e4.Y5),
                            "aria-label": Q.intl.string(Q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": ep,
                            onClick: (e) => {
                                (e.stopPropagation(), eE(!ep));
                            },
                            children: (0, l.jsx)(y.PencilIcon, {
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
    return es
        ? (0, l.jsx)(I.Y, {
              targetElementRef: eo && !eg ? V : k,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: ep,
              onRequestClose: (e) => {
                  let t = e?.target;
                  V.current?.contains(t) === !0 || (t?.closest(`[${e1.m}]`) == null && eE(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(ed, { onClose: t, returnFocusRef: K, skipReturnFocusRef: W });
              },
              children: () => eR,
          })
        : eR;
}
var e7 = n(996988);
let e6 = {
    [e7.d.POPOUT]: 12,
    [e7.d.MODAL]: 26,
    [e7.d.SIDEBAR]: 12,
    [e7.d.VIDEO_TILE_BACKGROUND]: 12,
    [e7.d.EMBED]: 12,
};
function e9(e) {
    let t,
        {
            displayProfile: n,
            themeType: a,
            pendingLegacyUsernameDisabled: c,
            pendingBadges: p,
            showPendingBadgeEdits: E = !1,
            onClose: h,
            shouldOpenBadgeTooltip: b,
            shouldGlowTenureBadge: x,
            popoutAnchorRef: _,
            containerRef: A,
        } = e,
        N = (0, d.d)({ location: "UserProfileBadgeListRows" }),
        v = n?.userId,
        R = (0, i.bG)([f.default], () => null != v && f.default.getUser(v)?.bot === !0, [v]),
        j = (0, g.A)(n, c),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: I } = (0, m.A)(),
        T = (0, i.yK)([o.Ay], () => (E && null != v && o.Ay.hasCatalogFor(v) ? o.Ay.getBadges(v) : []), [E, v]),
        S = r.useMemo(() => {
            let e = j;
            if (null != p) {
                let t = new Set(j.map((e) => e.id));
                e = [...j, ...p.filter((e) => !t.has(e.id))];
            }
            return E ? (0, u.Rr)(e, T, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: I }) : e;
        }, [j, p, E, T, y, I]);
    if (0 === S.length && !E) return null;
    let C = N && !R,
        D = C ? Math.max(S.length - 6, 0) : 0;
    return (
        (t = C ? [S.slice(0, 6)] : a === e7.d.MODAL_V2 ? [S] : (0, s.chunk)(S, e6[a])),
        (0, l.jsx)(l.Fragment, {
            children: t.map((e, t) =>
                (0, l.jsx)(
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
