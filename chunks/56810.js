n.d(t, { A: () => e7 });
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
    j = n(22231),
    y = n(265872),
    I = n(564508),
    T = n(438457),
    S = n(144779),
    C = n(793574),
    D = n(688810),
    M = n(682618),
    P = n(731309),
    O = n(620143),
    U = n(248284),
    B = n(675816),
    G = n(425763),
    k = n(952270),
    w = n(365199),
    L = n(315710),
    H = n(534514),
    V = n(821609),
    $ = n(442433),
    F = n(450232),
    z = n(183555),
    X = n(451395),
    K = n(327791),
    Y = n(315629),
    W = n(403581),
    Z = n(87719),
    q = n(792996),
    Q = n(207711);
function J(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)(Y.h, {
        color: "nitro-pink",
        className: Q.U,
        children: [
            (0, a.jsx)(b.E, {
                variant: "body-xs/medium",
                color: "text-default",
                className: Q.t,
                children: q.intl.string(q.t.cKIIzk),
            }),
            (0, a.jsx)(V.$, {
                variant: "expressive",
                size: "sm",
                icon: W.NitroWheelIcon,
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
    el = "BADGE";
function er(e) {
    let { reorderableIndex: t, onReorder: n, ...r } = e,
        { badge: s, index: i } = r,
        o = (0, G.VU)(),
        d = l.useRef(null);
    return (0, a.jsxs)(X.mG, {
        index: t,
        itemId: String(s.badge_id),
        itemPreviewProps: { badge: s },
        listType: ea,
        itemType: el,
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
            (0, a.jsx)(es, { ...r }),
            (0, a.jsx)(X.jV, {
                buttonRef: d,
                className: en.BU,
                "aria-label": q.intl.formatToPlainString(q.t["9xRVLy"], { badgeName: s.name, position: i + 1 }),
            }),
        ],
    });
}
function es(e) {
    let { badge: t, index: r, onClose: s, onAction: i, controlRef: o } = e,
        [d, c] = l.useState(!1);
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
        g = (0, O.e)({ location: "BadgeCustomizationPopout", hasUnread: f }) && f,
        E = q.intl.formatToPlainString(m ? q.t["3Uwmdt"] : q.t.Ci7gvp, { badgeName: t.name, position: r + 1 });
    return (0, a.jsxs)("div", {
        className: p()(en.fw, d && en.HV),
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
                        className: p()(en.pC, m && en.jx),
                    }),
            }),
            g && (0, a.jsx)("div", { className: en.Zm, "aria-hidden": !0 }),
            m &&
                (0, a.jsx)("div", {
                    className: en.Gf,
                    "aria-hidden": !0,
                    children: (0, a.jsx)(k.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, a.jsx)(x.vN, {
                children: (0, a.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: en.lv,
                    "aria-haspopup": "menu",
                    "aria-expanded": d,
                    "aria-label": g ? `${E}, ${q.intl.string(q.t.y2b7CA)}` : E,
                    onClick: u,
                    children: (0, a.jsx)(w.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
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
                badge: t?.itemType === el ? t.itemPreviewProps?.badge : void 0,
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
function eo(e) {
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: r } = e,
        o = l.useRef(null),
        d = l.useId();
    (l.useLayoutEffect(() => {
        o.current?.focus();
    }, []),
        (0, L.tj)(o, { returnRef: n }));
    let { analyticsLocations: u } = (0, D.Ay)(C.A.BADGE_CUSTOMIZATION_POPOUT),
        { trackUserProfileAction: f } = (0, z.NJ)();
    l.useEffect(() => {
        f({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: u });
    }, []);
    let { fixedBadges: g, reorderableBadges: E, hiddenBadges: h } = (0, et.A)(),
        x = (0, K.A)(),
        _ = (0, G.VU)(),
        A =
            (0, B.V)((e) => {
                let t = e.getItem();
                return e.isDragging() && t?.itemType === el;
            }) && !_,
        N = l.useMemo(() => E.map((e) => e.badge_id), [E]),
        v = l.useRef(new Map());
    function R(e) {
        return (t) => {
            null == t ? v.current.delete(e) : v.current.set(e, t);
        };
    }
    function j(e) {
        requestAnimationFrame(() => v.current.get(e)?.focus());
    }
    let y = g.length + E.length + h.length,
        I = (0, s.bG)([i.Ay, m.default], () => {
            let e = m.default.getCurrentUser()?.id;
            return null != e && i.Ay.hasCatalogFor(e);
        });
    function T(e, t) {
        (0, c.hB)((0, c.i1)(N, e, t));
    }
    let S = (0, X.w9)({ listType: ea, itemType: el, onFallbackDrop: (e) => T(e.index, N.length - 1) }),
        M = (0, X.w9)({ listType: ea, itemType: el });
    l.useLayoutEffect(() => {
        if (A)
            return (
                M(document.body),
                () => {
                    M(null);
                }
            );
    }, [M, A]);
    let P = y > 0,
        O = I && !P,
        U = !x && !O,
        k = x ? q.t.VHaYM7 : q.t["7Qs/YX"];
    function w() {
        (null != r && (r.current = !0), t());
    }
    return (0, a.jsxs)("div", {
        ref: o,
        className: p()(en.SW, O && en.B2),
        role: "dialog",
        tabIndex: -1,
        "aria-labelledby": d,
        children: [
            (0, a.jsxs)("div", {
                className: p()(en.Qs, U && en.bY),
                children: [
                    (0, a.jsxs)("div", {
                        className: en.wx,
                        children: [
                            (0, a.jsxs)("div", {
                                className: en.$,
                                children: [
                                    x && (0, a.jsx)(F.A, { size: "xs", className: en.oU }),
                                    (0, a.jsx)(H.D, {
                                        id: d,
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        children: q.intl.string(q.t.PXIyjF),
                                    }),
                                ],
                            }),
                            !O &&
                                (0, a.jsx)(b.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children: q.intl.string(k),
                                }),
                        ],
                    }),
                    U && (0, a.jsx)(J, { onClose: t }),
                    O &&
                        (0, a.jsx)(b.E, {
                            className: en.p$,
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: q.intl.string(q.t.VT02mI),
                        }),
                    P &&
                        (0, a.jsxs)("div", {
                            className: p()(en.yq, A && en.T0),
                            role: "group",
                            "aria-label": q.intl.string(q.t.VWV0y5),
                            children: [
                                x &&
                                    (0, a.jsx)("div", {
                                        ref: (e) => {
                                            S(e);
                                        },
                                        className: en.u$,
                                        "aria-hidden": !0,
                                    }),
                                g.map((e, t) =>
                                    (0, a.jsx)(
                                        es,
                                        { badge: e, index: t, onClose: w, onAction: j, controlRef: R(e.badge_id) },
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
                                                  onClose: w,
                                                  onAction: j,
                                                  controlRef: R(e.badge_id),
                                                  reorderableIndex: t,
                                                  onReorder: T,
                                              },
                                              e.badge_id,
                                          )
                                        : (0, a.jsx)(
                                              es,
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
                                    (0, a.jsx)(
                                        es,
                                        {
                                            badge: e,
                                            index: g.length + E.length + t,
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
            (0, a.jsx)(ei, {}),
            (0, a.jsx)(V.$, {
                variant: "secondary",
                size: "sm",
                fullWidth: !0,
                text: q.intl.string(q.t.fN2how),
                onClick: function () {
                    (f({ action: "PRESS_VIEW_BADGES", analyticsLocations: u }),
                        w(),
                        (0, ee.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
                },
            }),
        ],
    });
}
var ed = n(824114),
    ec = n(775602),
    eu = n(328464),
    em = n(851767),
    ef = n(351906);
let eg = { [ed.m.BURNT_ORBS]: q.t.ZzNZM2 };
var ep = n(647729);
function eE(e) {
    return `${e.badge_id}:${e.current_tier}`;
}
function eh(e) {
    return null == e || !i.Ay.isCatalogStaleFor(e) || i.Ay.hasCatalogFetchErrorFor(e);
}
function eb(e) {
    let t,
        n,
        r,
        { children: o, legacyBadgeId: c, userId: u, fallbackTitle: f, fallbackIconSrc: g, shouldShow: p } = e,
        E = (0, P.w0)(c),
        b = (0, s.bG)([i.Ay], () => (null != E && null != u ? i.Ay.getBadgeById(E, u) : void 0), [E, u]),
        x = (0, s.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
        _ = (0, s.bG)([m.default], () => m.default.getCurrentUser()?.id),
        A = null != u && u === _ && b?.has_updates === !0,
        N = (0, O.e)({ location: "BadgeMiniTooltip", hasUnread: A }),
        [v, R] = l.useState(null),
        [j, y] = l.useState(0),
        [I, T] = l.useState(null),
        [S, C] = l.useState(null),
        D = l.useCallback(() => {
            null != v && (T(eE(v)), (0, M.zd)(v.badge_id));
        }, [v]),
        [U, B] = l.useState(!1),
        G = (0, s.bG)([i.Ay], () => U && eh(u), [U, u]),
        k = N && A && null != b && eE(b) !== I,
        w = l.useCallback(
            (e) => {
                let t = e && k;
                (R(t ? b : null), C(null), t && y((e) => e + 1));
            },
            [b, k],
        ),
        L = l.useCallback(() => {
            let e = !1 !== p,
                t = eh(u);
            (w(e && t), B(e && !t), null != u && i.Ay.isCatalogStaleFor(u) && (0, M.RS)(u));
        }, [p, w, u]);
    G && (B(!1), w(!0));
    let H = v ?? b,
        V = H?.badge_id === h.$.PREMIUM_TENURE,
        $ = E === h.$.LEGACY_USERNAME,
        F = E === h.$.ORB_VOID,
        z = null != H ? (0, d.YU)(H, H.current_tier)?.name : void 0,
        X = F ? H?.stats?.find((e) => e.unit === ed.m.BURNT_ORBS) : void 0,
        K =
            null != X
                ? (function (e) {
                      let t = eg[e.unit];
                      if (null != t)
                          return {
                              value: q.intl.formatToPlainString(q.t.SXPtrb, { count: e.value }),
                              label: q.intl.formatToPlainString(t, { count: e.value }),
                          };
                  })(X)
                : void 0,
        Y = V ? q.intl.string(q.t.Ipxkog) : (H?.name ?? f);
    V
        ? (r = n = null != z ? `${Y} ${z}` : Y)
        : F && null != K
          ? ((t = Y), (n = K.value), (r = null != z ? `${Y} ${z}` : Y))
          : null != z
            ? ((t = Y), (n = z), (r = `${Y} ${z}`))
            : ((n = Y), (r = Y));
    let W = x ? void 0 : H?.complex_icon_animated_url,
        Z = W ?? H?.complex_icon_static_url ?? H?.simple_icon_url ?? g,
        Q = null != W && Z === W;
    if ($) return (0, a.jsx)(ex, { userId: u, title: n, badgeImage: Z, shouldShow: p, children: o });
    let J = v?.previous_acked_tier,
        ee =
            null != v
                ? {
                      id: j,
                      graphic: (0, a.jsx)(ep.A, {
                          badge: v,
                          previousTierKey: J,
                          canStart: !0,
                          size: "small",
                          startDelay: 0,
                          onStart: C,
                          onEnd: D,
                      }),
                      label: (0, d.kD)(v, J),
                      timingStyle: (0, ep.$)({
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
            (null != et ? q.intl.formatToPlainString(q.t["0aEh2a"], { date: new Date(et) }) : void 0);
    return (0, a.jsx)(eu.A, {
        title: n,
        eyebrow: t,
        body: en,
        screenReaderBody: null != K ? (H?.info_label ?? `${K.value} ${K.label}`) : void 0,
        badgeImage: Z,
        badgeName: r,
        variant: V ? "nitro" : "default",
        isAnimated: Q,
        unlock: ee,
        isUnlockPending: U && k,
        shouldShow: p,
        onShow: L,
        children: o,
    });
}
function ex(e) {
    let { children: t, userId: n, title: l, badgeImage: r, shouldShow: i } = e,
        o = (0, s.bG)(
            [em.A, ef.A],
            () =>
                ef.A.hidePersonalInformation
                    ? q.intl.string(q.t.Br1ls3)
                    : null != n
                      ? (em.A.getUserProfile(n)?.legacyUsername ?? void 0)
                      : void 0,
            [n],
        );
    return (0, a.jsx)(eu.A, { title: l, body: o, badgeImage: r, badgeName: l, shouldShow: i, children: t });
}
var e_ = n(969935),
    eA = n(683063);
function eN(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: r, children: s } = e;
    return (0, a.jsx)(eA.u, {
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
var ev = n(116833),
    eR = n(704640),
    ej = n(208223),
    ey = n(642481),
    eI = n(424746),
    eT = n(682901),
    eS = n(49999),
    eC = n(518477);
let eD = function (e) {
    let {
            badgeId: t = eT.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: r,
            targetElementRef: s,
            progressCircleText: i,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: c,
        } = e,
        u = eT.VD[t].nameUnformattedNitro,
        m = q.intl.string(u).toLocaleUpperCase(),
        f = eT.VD[t].rarity,
        g = (0, eR.A)(t),
        p = (0, ej.I)(t).standard;
    (0, l.useEffect)(() => {
        (ev.m[ev.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = p));
    }, [p]);
    let E = (0, l.useCallback)(() => {
        n?.(eS.i.USER_DISMISS);
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
            children: r,
        });
    }
    let h = {
        gradientColor: g,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ev.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: p, alt: m, progressCircleText: i, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, a.jsx)(eI.A, {
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
                  (0, a.jsx)(ey.A, {
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
    eU = n(747278);
let eB = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, ej.I)(n.id).standard;
    return (0, a.jsxs)(eP, {
        assetComponent: (0, a.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, a.jsx)(eO.A, { width: 56, className: eU.R }),
        children: [
            (0, a.jsx)(H.D, { variant: "heading-xl/semibold", children: q.intl.string(n.nameUnformatted) }),
            (0, a.jsx)(b.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: eU.K,
                children: t.description,
            }),
        ],
    });
};
var eG = n(30084),
    ek = n(506988),
    ew = n(976860),
    eL = n(780964),
    eH = n(766075),
    eV = n(305003),
    e$ = n(195118),
    eF = n(31188),
    ez = n(620882),
    eX = n(370277);
function eK(e) {
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
            (0, a.jsxs)(e$.x, {
                targetElementRef: n,
                shouldShow: !!(o || i),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, a.jsx)(eY, { showSubtext: s }), (0, a.jsx)(eF.F, {})],
            }),
        ],
    });
}
function eY(e) {
    let { showSubtext: t = !1 } = e;
    return (0, a.jsxs)(eP, {
        assetComponent: (0, a.jsx)(ez.A, { className: eX.jc }),
        tooltipWordmarkComponent: (0, a.jsx)(H.D, {
            variant: "heading-sm/semibold",
            className: eX.RK,
            children: q.intl.string(q.t.ElYQFS),
        }),
        children: [
            (0, a.jsx)(H.D, {
                variant: "heading-xl/semibold",
                className: t ? void 0 : eX.Qn,
                children: q.intl.string(q.t.lTHkqd),
            }),
            t
                ? (0, a.jsx)(b.E, { variant: "body-xs/normal", className: eX.lV, children: q.intl.string(q.t.MEV0GI) })
                : void 0,
        ],
    });
}
var eW = n(129230),
    eZ = n(474090),
    eq = n(439174),
    eQ = n(741534),
    eJ = n(527212),
    e0 = n(874402),
    e1 = n(652215),
    e8 = n(758836),
    e2 = n(854232),
    e5 = n(816645);
function e4(e) {
    let t,
        {
            badges: n,
            overflowCount: r,
            className: d,
            badgeClassName: c,
            displayProfile: u,
            onClose: g,
            shouldOpenBadgeTooltip: B,
            shouldGlowTenureBadge: G,
            popoutAnchorRef: k,
            containerRef: w,
            isTargetUserBot: L,
        } = e,
        H = (0, U.A)((e) => e.isOpen),
        V = l.useRef(null),
        $ = (0, E.A)(V, w),
        F = l.useRef(null),
        X = l.useRef(null),
        K = l.useRef(null),
        Y = l.useRef(null),
        W = l.useRef(!1),
        { analyticsLocations: Z } = (0, D.Ay)(C.A.BADGE),
        { context: Q, trackUserProfileAction: J } = (0, z.NJ)(),
        et = m.default.getCurrentUser(),
        en = u?.userId === et?.id,
        ea = (0, eZ.CC)(et?.premiumType, eT.PremiumTypes.TIER_2),
        el = (0, o.d)({ location: "UserProfileBadgeList" });
    l.useEffect(() => {
        el && u?.userId != null && !i.Ay.hasCatalogFor(u.userId) && (0, M.RS)(u.userId);
    }, [el, u?.userId]);
    let er = u?.userId,
        es = en && el && null != k,
        ei = !es && el,
        ed = es && 0 === n.length,
        ec = et?.id,
        eu = en && el,
        em = (0, s.bG)([i.Ay], () => eu && null != ec && i.Ay.getUnreadBadges(ec).length > 0, [eu, ec]),
        ef = (0, O.e)({ location: "UserProfileBadgeList", hasUnread: em }) && em,
        eg = (0, s.bG)(
            [i.Ay],
            () => null != ec && (!i.Ay.hasCatalogFor(ec) || i.Ay.getBadges(ec).some((e) => e.owned)),
            [ec],
        ),
        ep = es && H;
    function eE(e) {
        if ((U.A.setState({ isOpen: e }), !e)) {
            if (W.current) {
                W.current = !1;
                return;
            }
            requestAnimationFrame(() => Y.current?.focus());
        }
    }
    let eh = (0, eJ.AP)(et?.id ?? null),
        ex = (0, f.A)(eh).some((e) => e.id === eV.A.ORB_PROFILE_BADGE),
        eA = es && !ed && 0 === r,
        ev = null;
    r > 0 &&
        ((ev = (0, a.jsx)(b.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "text-default",
            className: e5.AX,
            "aria-hidden": !0,
            children: q.intl.format(q.t.n7CiSK, { count: r }),
        })),
        (t = q.intl.formatToPlainString(q.t.eIHfGZ, { overflow_count: r })));
    let eR = (0, a.jsxs)("div", {
        ref: $,
        className: p()(e5.kL, el && !0 !== L && e5.Yq, es && e5.Tx, eA && e5.gK, ef && e5.TW, d),
        ...(ed
            ? null
            : {
                  "aria-label": ef
                      ? `${q.intl.string(q.t.VWV0y5)}, ${q.intl.string(q.t.y2b7CA)}`
                      : q.intl.string(q.t.VWV0y5),
                  role: "group",
              }),
        ...(es && !ed ? { onClick: () => eE(!ep) } : null),
        children: [
            ef && (0, a.jsx)("span", { className: e5.Zm, "aria-hidden": !0 }),
            ed &&
                (0, a.jsx)(x.vN, {
                    children: (0, a.jsxs)("button", {
                        ref: Y,
                        type: "button",
                        className: e5.p$,
                        "aria-label": ef ? `${q.intl.string(q.t.l6w3Vj)}, ${q.intl.string(q.t.y2b7CA)}` : void 0,
                        "aria-haspopup": "dialog",
                        "aria-expanded": ep,
                        onClick: (e) => {
                            (e.stopPropagation(), eE(!ep));
                        },
                        children: [
                            (0, a.jsx)(_.PlusSmallIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(b.E, {
                                tag: "span",
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: q.intl.string(q.t.l6w3Vj),
                            }),
                        ],
                    }),
                }),
            n.map((e, t) => {
                let n = e.id === eV.A.ORB_PROFILE_BADGE,
                    l = (0, eq.e0)(e.id),
                    r = null != l || e.id === e2.K,
                    s = "april_fools_2026" === e.id,
                    i = void 0 !== l && e.id !== e2.K,
                    o = (0, a.jsx)("img", {
                        alt: " ",
                        "aria-hidden": !0,
                        src: e.iconSrc ?? (0, eC.L7)(e.icon),
                        className: p()(e5.qS, c),
                    }),
                    d = null != B && B(e.id),
                    E = {
                        onClick: (a) => {
                            if (
                                (J({ action: "PRESS_BADGE" }),
                                (0, eQ.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "PRESS_BADGE",
                                    position: t,
                                    analyticsLocations: Z,
                                    ...Q,
                                }),
                                es)
                            )
                                return void a.preventDefault();
                            let l = u?.userId != null ? m.default.getUser(u.userId) : null;
                            if (el && l?.bot !== !0) {
                                (a.preventDefault(),
                                    (0, ee.openBadgeDirectoryModal)({
                                        initialBadgeId: (0, P.w0)(e.id),
                                        targetUserId: u?.userId,
                                        targetUsername: l?.globalName ?? l?.username,
                                    }));
                                return;
                            }
                            if ((0, P.w0)(e.id) === h.$.GIFTING) {
                                (a.preventDefault(),
                                    g?.(),
                                    (0, eH.openUserSettings)(eL.X.GIFT_PANEL, { analyticsLocations: Z }));
                                return;
                            }
                            if (n) {
                                ((0, e_.Cz)({
                                    tab: e8.G2.ORBS,
                                    analyticsLocations: Z,
                                    analyticsSource: C.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                                }),
                                    g?.(),
                                    (0, A.s7)());
                                return;
                            }
                            if (r) {
                                if (
                                    (a.preventDefault(),
                                    eW.default.track(e1.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                        badge: e.id,
                                        premium_type: ea,
                                        viewed_user_id: u?.userId,
                                    }),
                                    ea)
                                ) {
                                    (en
                                        ? ((0, ew.pX)(e1.BVt.NITRO_HOME), (0, A.s7)())
                                        : (0, eG.D)({ analyticsLocations: Z, displayProfile: u }),
                                        g?.());
                                    return;
                                }
                                if (en) {
                                    let t = null != e.link ? (0, I.default)(e.link, { analyticsLocations: Z }) : null;
                                    if (null == t) return;
                                    return (g?.(), (0, A.s7)(), t(a));
                                }
                                return ((0, eG.D)({ analyticsLocations: Z, displayProfile: u }), void g?.());
                            }
                            let s = null != e.link ? (0, I.default)(e.link, { analyticsLocations: Z }) : null;
                            if (null != s) return (g?.(), (0, A.s7)(), s(a));
                        },
                        onMouseEnter: () => {
                            (e.id === f.h &&
                                (0, T.r)({
                                    type: S.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                                    surfaceId: ek.uF.QUEST_BADGE,
                                    isTargeted: !1,
                                }),
                                J({ action: "HOVER_BADGE" }),
                                (0, eQ.vP)({
                                    badgeId: (0, P.w0)(e.id),
                                    badgeAction: "HOVER_BADGE",
                                    position: t,
                                    analyticsLocations: Z,
                                    ...Q,
                                }));
                        },
                        href: e.link,
                        "aria-label": e.description,
                        ...(es ? { "aria-haspopup": "dialog", "aria-expanded": ep } : null),
                        style: { filter: G && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                    };
                if (el)
                    return (0, a.jsx)(
                        eb,
                        {
                            shouldShow: !ep,
                            legacyBadgeId: e.id,
                            userId: u?.userId,
                            fallbackTitle: e.description,
                            fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eC.L7)(e.icon),
                            children: (0, a.jsx)(N.Anchor, { ...E, children: o }),
                        },
                        `${e.id}-${t}`,
                    );
                if (i) {
                    let n = (0, a.jsx)(N.Anchor, { ...E, ref: F, children: o });
                    return (0, a.jsx)(
                        "div",
                        {
                            children: (0, a.jsx)(eD, {
                                badgeId: e.id,
                                targetElementRef: F,
                                mode: "tooltip",
                                body: e.description,
                                onShow: () => {
                                    eW.default.track(e1.HAw.TOOLTIP_VIEWED, {
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
                    let n = (0, a.jsx)(N.Anchor, { ...E, ref: X, children: o });
                    return (0, a.jsx)(
                        eK,
                        {
                            targetElementRef: X,
                            delay: 300,
                            showSubtext: !ex && !e.isPreviewMode,
                            forceOpen: d,
                            children: n,
                        },
                        `${e.id}-${t}`,
                    );
                }
                if (s) {
                    let n = (0, a.jsx)(N.Anchor, { ...E, ref: K, children: o });
                    return (0, a.jsx)(
                        eN,
                        { targetElementRef: K, delay: 300, forceOpen: d, badgeDescription: e.description, children: n },
                        `${e.id}-${t}`,
                    );
                }
                let b = (0, a.jsx)(N.Anchor, { ...E, children: o }),
                    x = (function (e) {
                        let { badge: t, tieredTenureBadge: n } = e;
                        return void 0 !== n && t.id !== e2.K
                            ? (0, a.jsx)(eB, { profileBadge: t, tenureBadge: n })
                            : t.description;
                    })({ badge: e, tieredTenureBadge: r && e.id !== e2.K ? l : void 0 });
                return (0, a.jsx)(
                    v.m,
                    { __unsupportedReactNodeAsText: x, forceOpen: d, delay: 300, ariaHidden: !0, children: b },
                    `${e.id}-${t}`,
                );
            }),
            r > 0 &&
                (ei
                    ? (0, a.jsx)(x.vN, {
                          children: (0, a.jsx)("button", {
                              type: "button",
                              className: p()(e5.$O, e5.lv),
                              "aria-label": t,
                              onClick: function () {
                                  let e = null != er ? m.default.getUser(er) : null;
                                  (0, ee.openBadgeDirectoryModal)({
                                      targetUserId: er,
                                      targetUsername: e?.globalName ?? e?.username,
                                  });
                              },
                              children: ev,
                          }),
                      })
                    : (0, a.jsxs)("span", { className: e5.$O, children: [(0, a.jsx)(R.A, { children: t }), ev] })),
            es &&
                !ed &&
                (0, a.jsx)(v.m, {
                    text: q.intl.string(q.t.PXIyjF),
                    asContainer: !0,
                    ariaHidden: !0,
                    anchorRef: Y,
                    children: (0, a.jsx)(x.vN, {
                        children: (0, a.jsx)("button", {
                            ref: Y,
                            type: "button",
                            className: p()(e5.r9, r > 0 ? e5.v_ : e5.Y5),
                            "aria-label": q.intl.string(q.t.PXIyjF),
                            "aria-haspopup": "dialog",
                            "aria-expanded": ep,
                            onClick: (e) => {
                                (e.stopPropagation(), eE(!ep));
                            },
                            children: (0, a.jsx)(j.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: e5.IZ,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
                }),
        ],
    });
    return es
        ? (0, a.jsx)(y.Y, {
              targetElementRef: ed && !eg ? V : k,
              position: "bottom",
              align: "left",
              spacing: 4,
              positionKey: `${n.length}`,
              scrollBehavior: "close",
              shouldShow: ep,
              onRequestClose: (e) => {
                  let t = e?.target;
                  V.current?.contains(t) === !0 || (t?.closest(`[${e0.m}]`) == null && eE(!1));
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, a.jsx)(eo, { onClose: t, returnFocusRef: Y, skipReturnFocusRef: W });
              },
              children: () => eR,
          })
        : eR;
}
var e3 = n(996988);
let e6 = {
    [e3.d.POPOUT]: 12,
    [e3.d.MODAL]: 26,
    [e3.d.SIDEBAR]: 12,
    [e3.d.VIDEO_TILE_BACKGROUND]: 12,
    [e3.d.EMBED]: 12,
};
function e7(e) {
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
        j = (0, f.A)(n, g),
        { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: I } = (0, u.A)(),
        T = (0, s.yK)([i.Ay], () => (E && null != v && i.Ay.hasCatalogFor(v) ? i.Ay.getBadges(v) : []), [E, v]),
        S = l.useMemo(() => {
            let e = j;
            if (null != p) {
                let t = new Set(j.map((e) => e.id));
                e = [...j, ...p.filter((e) => !t.has(e.id))];
            }
            return E ? (0, c.Rr)(e, T, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: I }) : e;
        }, [j, p, E, T, y, I]);
    if (0 === S.length && !E) return null;
    let C = N && !R,
        D = C ? Math.max(S.length - 6, 0) : 0;
    return (
        (t = C ? [S.slice(0, 6)] : d === e3.d.MODAL_V2 ? [S] : (0, r.chunk)(S, e6[d])),
        (0, a.jsx)(a.Fragment, {
            children: t.map((e, t) =>
                (0, a.jsx)(
                    e4,
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
