n.d(t, { g: () => lw, A: () => lL }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n.n(r),
    d = n(158390),
    c = n(17928),
    u = n(554146),
    h = n(451988),
    m = n(97808),
    p = n(778712),
    g = n(922016),
    f = n(939249),
    A = n(140735),
    x = n(312138);
if (21552 == n.j) var v = n(192308);
var C = n(442433),
    E = n(820284),
    T = n(717558),
    _ = n(964486),
    I = n(220839),
    j = n(397244),
    N = n(394871),
    S = n(580929),
    y = n(866323),
    b = n(449450);
function M(e) {
    let { text: t } = e,
        n = (0, y.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(S.animated.div, { className: b.H, style: e, children: t })),
    });
}
var R = n(29160),
    k = n(793574),
    w = n(688810),
    O = n(992526),
    P = n(682618),
    L = n(982240),
    D = n(116833),
    U = n(43105),
    G = n(375708);
function F(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: G.intl.string(G.t.uwDBSq),
                  body: G.intl.formatToPlainString(G.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: G.intl.string(G.t["5GD53o"]), body: G.intl.string(G.t["2Rb7tE"]) };
    return (0, i.jsx)(U.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: D.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: G.intl.string(G.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
var H = n(470739),
    V = n(92111),
    W = n(49999);
function B(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(F, {
        ...t,
        onPrimaryAction: () => {
            l(W.i.TAKE_ACTION), (0, H._)();
        },
        onRequestClose: () => l(W.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var Z = n(521502),
    z = n(380610),
    K = n(313961),
    q = n(18235),
    Y = n(183184),
    $ = n(384059),
    X = n(480890),
    J = n(601255),
    Q = n(562819),
    ee = n(449582),
    et = n(351952),
    en = n(88686),
    ei = n(174755),
    el = n(302223),
    ea = n(248778),
    es = n(609425),
    er = n(922301),
    eo = n(660184),
    ed = n(643501),
    ec = n(297264),
    eu = n(834730),
    eh = n(789645),
    em = n(826673),
    ep = n(750506),
    eg = n(780964),
    ef = n(766075),
    eA = n(417146),
    ex = n(552122),
    ev = n(717421),
    eC = n(775602),
    eE = n(993843);
let eT = { mass: 10, tension: 550, friction: 140 };
function e_(e) {
    let { className: t, pageMultiplier: n } = e,
        a = (0, c.bG)([eC.Ay], () => eC.Ay.useReducedMotion),
        [r, d] = l.useState({ x: 0, y: 0 }),
        u = l.useMemo(
            () =>
                o().throttle((e) => {
                    a || d({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, a],
        );
    l.useEffect(() => (window.addEventListener("mousemove", u), () => window.removeEventListener("mousemove", u)), [u]);
    let [h, m] = (0, ev.z)(() => ({ x: 0, y: 0, config: eT }));
    return (
        l.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, i.jsx)(S.animated.div, {
            style: { transform: (0, S.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: s()(eE.T, t),
        })
    );
}
var eI = n(275883);
function ej(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: l } = e,
        a = ex.A.useIsEligible(),
        s = (0, em.JZ)(t),
        r = null != n,
        o = null != l ? { color: l } : void 0,
        { analyticsLocations: d } = (0, w.Ay)(k.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, em.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, ef.openUserSettings)(eg.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(W.i.TAKE_ACTION);
    }
    return a && !s
        ? (0, i.jsx)(ep.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eI.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, i.jsxs)("div", {
                              className: eI.o5,
                              children: [
                                  (0, i.jsx)(e_, { className: eI.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eI.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eI.c8 }),
                      (0, i.jsxs)("div", {
                          className: eI.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(ec.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: G.intl.string(G.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(eu.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: G.intl.format(G.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      f.D,
                                                      {
                                                          tag: "span",
                                                          className: eI.nf,
                                                          style: o,
                                                          onClick: u,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(f.D, {
                                  className: eI.l2,
                                  onClick: () => c(W.i.USER_DISMISS),
                                  children: (0, i.jsx)(eh.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eN() {
    return null == eA.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ej, {
              dismissibleContent: eA.A.coachmarkDismissibleContent,
              backgroundColor: eA.A.coachmarkBackgroundColor,
              specialTextColor: eA.A.coachmarkSpecialTextColor,
          });
}
var eS = n(74848),
    ey = n(607399),
    eb = n(707554),
    eM = n(224640),
    eR = n(305866),
    ek = n(364522),
    ew = n(22231),
    eO = n(812993),
    eP = n(133171),
    eL = n(780338);
if (21552 != n.j) var v = n(192308);
var eD = n(980707),
    eU = n(26137),
    eG = n(473935),
    eF = n(765671),
    eH = n(783041),
    eV = n(176781),
    eW = n(320448),
    eB = n(993401),
    eZ = n(447349);
function ez(e) {
    return (0, i.jsx)("div", {
        className: eZ.wE,
        children: (0, i.jsx)(eD.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eK(e) {
    let {
            action: t,
            onClick: n,
            icon: a,
            label: s,
            sublabel: r,
            trailing: o,
            renderSubmenu: d,
            ref: c,
            submenuTargetElementRef: u,
            submenuAlign: h,
        } = e,
        m = null != n,
        p = (0, eB.rE)({ action: t, onClick: n }),
        [A, x] = l.useState(!1),
        C = l.useRef(null),
        E = c ?? C,
        T = null != d,
        _ = T && m,
        I = l.useCallback(() => {
            x(!0);
        }, []),
        j = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || x(!1);
        }, []);
    function N() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eZ.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eZ.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eu.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eZ.W1,
                                    children: s,
                                }),
                                (0, i.jsx)(eu.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function S(e) {
        let t;
        return (
            (t = _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.D, { className: eZ.ef, onClick: p, children: N() }),
                          (0, i.jsx)(f.D, {
                              className: eZ.ap,
                              "aria-label": G.intl.string(G.t.PdRCRg),
                              ...e,
                              onClick: I,
                              children: (0, i.jsx)(eW._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : T
                  ? (0, i.jsxs)(f.D, {
                        className: eZ.ef,
                        ...e,
                        onClick: I,
                        children: [
                            N(),
                            (0, i.jsx)("div", {
                                className: eZ.ap,
                                children: (0, i.jsx)(eW._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(f.D, { className: eZ.ef, onClick: p, children: N() })),
            (0, i.jsx)("div", { ref: E, className: eZ.jG, children: t })
        );
    }
    return T
        ? (0, i.jsx)("li", {
              className: eZ.j$,
              onMouseEnter: I,
              onMouseLeave: j,
              children: (0, i.jsx)(g.Y, {
                  targetElementRef: u ?? E,
                  align: h,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: j,
                  children: S,
              }),
          })
        : (0, i.jsx)("li", { className: eZ.j$, children: S() });
}
function eq(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eY = n(734066),
    e$ = n(915725),
    eX = n(409067),
    eJ = n(271597),
    eQ = n(990078),
    e0 = n(475358),
    e1 = n(408278),
    e2 = n(625903),
    e3 = n(404778),
    e5 = n(689175),
    e6 = n(821609),
    e4 = n(532624),
    e7 = n(927813),
    e8 = n(879631),
    e9 = n(350535),
    te = n(372684),
    tt = n(974293),
    tn = n(572164),
    ti = n(953932),
    tl = n(280483),
    ta = n(890856),
    ts = n(713517),
    tr = n(609174),
    to = n(619744);
function td(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, tr.Y_)(),
        s = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eJ.p)({ initialEditingClipId: a.id });
            },
            [a, t],
        );
    return (0, i.jsx)(e6.$, {
        onClick: s,
        icon: ew.R,
        variant: n,
        size: "sm",
        text: G.intl.string(G.t.bt75uw),
        fullWidth: !0,
    });
}
var tc = n(82716),
    tu = n(585579),
    th = n(930317),
    tm = n(285072),
    tp = n(316305);
let tg = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: r } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: d } = (0, ts.A)(o),
        c = l.useCallback(() => {
            a?.(), (0, eJ.p)({ initialEditingClipId: t.id });
        }, [t.id, a]);
    return (0, i.jsx)(tr.Cl, {
        clip: t,
        children: (0, i.jsx)(ta.s, {
            ref: o,
            "aria-label": G.intl.string(G.t.bt75uw),
            onClick: c,
            className: s()(tp.Z1, r),
            children: (0, i.jsxs)(th.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eO.Lp, { className: tp.Ad, text: G.intl.string(G.t.y2b7CA) }),
                    (0, i.jsxs)(tm.h, {
                        isVisible: d,
                        className: tp.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tp.mY,
                                children: [(0, i.jsx)(tc.z, {}), (0, i.jsx)(to.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tp.E_,
                                children: [
                                    (0, i.jsx)(td, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tu.E, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tf = n(652215),
    tA = n(753070),
    tx = n(16590),
    tv = n(550350);
function tC(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, tl.A)();
    let r = (0, c.yK)([e$.Ay], () => Object.values(e$.Ay.getClips())),
        o = (0, c.bG)([e$.Ay], () => e$.Ay.getSettings()),
        d = (0, c.bG)([e$.Ay], () => e$.Ay.getNewClipIds()),
        u = (0, tt.aJ)("ClipsPopout"),
        h = (0, c.bG)([e$.Ay], () => e$.Ay.getEnableAutoclipping()),
        m = (0, c.bG)([e4.Ay], () => e4.Ay.getKeybindForAction(tf.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                s?.(e);
            },
            [s],
        ),
        g = !o.showPovClipsInGallery,
        f = l.useMemo(() => {
            let e = r.filter((e) => e.type === te.nQ.CLIP && "" !== e.thumbnail && (!g || !(0, eX.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, g]),
        A = l.useMemo(() => f.slice(0, 16), [f]),
        x = f.length > 16,
        v = null != m ? e9.dI(m.shortcut, !0) : null,
        C = [
            (0, e8.$)(o.clipsLength / e7.A.Millis.SECOND),
            (0, tA.zr)(o.clipsQuality.resolution),
            G.intl.formatToPlainString(G.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && C.push(G.intl.string(tx.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tv.SW,
            role: "dialog",
            "aria-label": G.intl.string(G.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tv.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tv.$,
                            children: [
                                (0, i.jsx)(ec.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: G.intl.string(G.t.z2jK6X),
                                }),
                                null != v && (0, i.jsx)(e0.e, { className: tv.P, shortcut: v }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tv.$s,
                            children: [
                                (0, i.jsx)(eQ.m, {
                                    text: G.intl.string(G.t["3D5yo/"]),
                                    children: (0, i.jsx)(e1.K, {
                                        onClick: () => n(),
                                        icon: e2.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": G.intl.string(G.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eQ.m, {
                                    text: G.intl.string(tx.default["55C2MH"]),
                                    children: (0, i.jsx)(e1.K, {
                                        onClick: () => t(),
                                        icon: eV.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": G.intl.string(tx.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tv.ov,
                    children: [
                        C.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tv.LO, children: "\u2022" }),
                                        (0, i.jsx)(eu.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tv.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        u &&
                            (0, i.jsx)(eu.E, {
                                variant: "text-xs/semibold",
                                color: h ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tv.wS,
                                children: h ? G.intl.string(tx.default.lTwKmt) : G.intl.string(tx.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(e3.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(e5.Ch, {
                          className: tv.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tg, { clip: e, isNew: d.includes(e.id), onClose: a }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tv.qr,
                                      children: (0, i.jsx)(e6.$, {
                                          onClick: () => t(),
                                          text: G.intl.string(tx.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tE, { keybindString: v }),
            ],
        })
    );
}
function tE(e) {
    let { keybindString: t } = e,
        n = (0, tn.Et)();
    return (0, i.jsxs)("div", {
        className: tv.p$,
        children: [
            (0, i.jsx)(eu.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tv.qO,
                children: G.intl.string(tx.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eu.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tv.CZ,
                      children: G.intl.format(tx.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eu.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(e0.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(ti.A, {}),
        ],
    });
}
function tT(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eY.sw)(),
        s = !(0, c.bG)([e$.Ay], () => e$.Ay.getSettings().showPovClipsInGallery),
        r = (0, c.bG)([e$.Ay], () => {
            let e = e$.Ay.getNewClipIds();
            return s
                ? e.filter((e) => {
                      let t = e$.Ay.getClipById(e);
                      return null != t && !(0, eX.kD)(t);
                  }).length
                : e.length;
        }, [s]),
        o = l.useCallback(
            (e) => {
                t(), (0, eJ.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        d = l.useCallback(() => {
            t(), (0, ef.openUserSettings)(eg.X.CLIPS_PANEL);
        }, [t]);
    return a
        ? (0, i.jsx)(eK, {
              action: "PRESS_CLIPS",
              icon: eV.x,
              label: G.intl.string(G.t.z2jK6X),
              trailing: r > 0 ? (0, i.jsx)(eO.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tC, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var t_ = n(480335),
    tI = n(577390),
    tj = n(474257),
    tN = n(31956),
    tS = n(744808),
    ty = n(645507),
    tb = n(131607),
    tM = n(970931),
    tR = n(315710),
    tk = n(832248),
    tw = n(462887),
    tO = n(736653),
    tP = n(439174),
    tL = n(428262),
    tD = n(878784),
    tU = n(202541);
function tG() {
    let e = (0, tD.Xb)(),
        t = (0, tL.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tU.sp.length - 1; t >= 0; t--) {
        let i = tU.VD[tU.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tF = {
        [tU.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tU.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tU.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tU.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tU.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tU.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tU.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tU.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tH = {
        [tU.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tU.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tU.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tU.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tU.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tU.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tU.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tU.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tV = n(682165);
let tW = l.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tB() {
    let e = (0, c.bG)([eC.Ay], () => eC.Ay.useReducedMotion),
        t = (0, tk.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tG(),
                t = (0, tw.M)((0, tO.Ay)());
            if (null == e) return null;
            let n = tF[e],
                i = tH[e],
                l = {
                    currentBadge: (0, tP.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tU.sp.indexOf(e);
            if (a > 0) {
                let e = tU.sp[a - 1],
                    n = tF[e];
                (l.prevBadge = (0, tP.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return l;
        })(),
        [a, s] = l.useState(null);
    return (null != n && null == a && s(n), e || !t || null == a) ? null : (0, i.jsx)(tZ, { levelUpData: a });
}
function tZ(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        a = l.useCallback(() => {
            tk.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tR.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tV.i,
            children: [
                (0, i.jsx)("div", {
                    className: tV.b,
                    children: (0, i.jsx)(eQ.m, {
                        text: G.intl.string(G.t.cpT0Cq),
                        children: (0, i.jsx)(e1.K, {
                            icon: eh.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": G.intl.string(G.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tW, { levelUpData: t }) }),
            ],
        }),
    });
}
var tz = n(206835),
    tK = n(183555),
    tq = n(999291),
    tY = n(975732),
    t$ = n(718019),
    tX = n(413492),
    tJ = n(915614),
    tQ = n(744753),
    t0 = n(559506),
    t1 = n(646986),
    t2 = n(349419),
    t3 = n(946356),
    t5 = n(878555),
    t6 = n(624479),
    t4 = n(206845),
    t7 = n(957565),
    t8 = n(427262),
    t9 = n(962352);
function ne(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tK.NJ)();
    return t7.p5
        ? (0, i.jsx)(t4.A, {
              text: G.intl.string(G.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t8.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(f.D, {
                      ...e,
                      className: s()(t9.c, { [t9.R]: n }),
                      "aria-label": G.intl.string(G.t.y5MwJy),
                      children: (0, i.jsx)(t6.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nt = n(983495),
    nn = n(442228),
    ni = n(885386),
    nl = n(290863),
    na = n(351906),
    ns = n(562153),
    nr = n(661531),
    no = n(477782),
    nd = n(628284),
    nc = n(695366),
    nu = n(363195),
    nh = n(889227),
    nm = n(287809),
    np = n(174459),
    ng = n(429707),
    nf = n(274303),
    nA = n(994125),
    nx = n(347853),
    nv = n(573879),
    nC = n(335020),
    nE = n(661439),
    nT = n(385113),
    n_ = n(352003),
    nI = n(429913),
    nj = n(334074),
    nN = n(633075),
    nS = n(667049),
    ny = n(280450),
    nb = n(90165),
    nM = n(403362),
    nR = n(518477);
function nk(e) {
    let { targetElementRef: t, onClose: a } = e,
        [s, r] = l.useState(!1),
        o = (0, c.bG)([ny.default], () => ny.default.getId()),
        { eligibleApplications: d, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([nT.A], () => nT.A.getFeaturedApplicationIds());
            (0, n_.A)(e),
                l.useEffect(() => {
                    (0, nE.X)();
                }, []);
            let t = (0, c.bG)([ny.default], () => ny.default.getId()),
                n = (0, nS.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nN.R), [n]),
                a = (0, nI.A)(e),
                s = l.useMemo(() => a.filter(nM.Vq), [a]),
                r = (0, c.cf)([nb.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = s.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nb.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return s.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = r[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [s, i, r]),
                { eligibleToShow: d, markAsDismissed: h } = (0, nj.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nj.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => d.includes(e.id)), [o, d]),
                markAsDismissed: h,
            };
        })();
    return ((0, l.useEffect)(() => {
        0 !== d.length &&
            Promise.all([
                n.e("69944"),
                n.e("28794"),
                n.e("91555"),
                n.e("47173"),
                n.e("60361"),
                n.e("49451"),
                n.e("81483"),
                n.e("27019"),
                n.e("15750"),
                n.e("29205"),
                n.e("73435"),
                n.e("996"),
                n.e("14211"),
                n.e("30170"),
                n.e("59252"),
                n.e("72197"),
                n.e("10949"),
                n.e("68501"),
                n.e("71519"),
                n.e("42335"),
                n.e("57507"),
                n.e("16334"),
                n.e("1744"),
                n.e("71406"),
                n.e("56985"),
                n.e("81619"),
                n.e("67039"),
                n.e("16881"),
                n.e("17268"),
                n.e("69979"),
                n.e("86122"),
                n.e("14831"),
                n.e("25821"),
                n.e("90645"),
                n.e("44400"),
                n.e("25781"),
                n.e("86832"),
                n.e("76342"),
                n.e("60988"),
                n.e("69273"),
                n.e("72210"),
                n.e("3155"),
                n.e("82104"),
                n.e("41711"),
                n.e("49623"),
                n.e("35316"),
                n.e("38838"),
                n.e("45214"),
                n.e("99253"),
                n.e("17202"),
                n.e("90862"),
                n.e("97189"),
                n.e("16918"),
                n.e("33730"),
                n.e("24059"),
                n.e("42306"),
                n.e("11291"),
                n.e("96846"),
                n.e("19709"),
                n.e("4251"),
                n.e("47412"),
                n.e("65327"),
                n.e("41625"),
                n.e("96490"),
                n.e("85484"),
                n.e("51772"),
                n.e("6605"),
                n.e("11262"),
                n.e("54483"),
                n.e("62461"),
                n.e("25677"),
                n.e("73679"),
                n.e("73178"),
                n.e("333"),
                n.e("97638"),
                n.e("22995"),
                n.e("59096"),
                n.e("55953"),
                n.e("56386"),
                n.e("38759"),
                n.e("51943"),
                n.e("90072"),
                n.e("88016"),
                n.e("84133"),
                n.e("13627"),
                n.e("57940"),
                n.e("58171"),
                n.e("44511"),
                n.e("39375"),
                n.e("47944"),
                n.e("84473"),
                n.e("70990"),
                n.e("15130"),
                n.e("74051"),
                n.e("50541"),
                n.e("62646"),
                n.e("53702"),
                n.e("12375"),
                n.e("25711"),
                n.e("53417"),
                n.e("23549"),
                n.e("23924"),
                n.e("42205"),
                n.e("55675"),
                n.e("48226"),
                n.e("68201"),
                n.e("10471"),
                n.e("64827"),
                n.e("63232"),
                n.e("68261"),
                n.e("7167"),
                n.e("12721"),
                n.e("84569"),
                n.e("60235"),
                n.e("61737"),
                n.e("92789"),
                n.e("21335"),
                n.e("77333"),
                n.e("47834"),
                n.e("11735"),
                n.e("85927"),
                n.e("834"),
                n.e("2368"),
                n.e("33115"),
                n.e("6338"),
                n.e("18573"),
                n.e("78157"),
                n.e("55936"),
                n.e("85404"),
                n.e("44057"),
                n.e("1453"),
                n.e("88774"),
                n.e("10120"),
                n.e("62175"),
                n.e("31988"),
                n.e("44571"),
                n.e("34303"),
                n.e("97270"),
                n.e("45959"),
                n.e("73122"),
                n.e("8304"),
                n.e("93159"),
                n.e("71202"),
                n.e("8739"),
                n.e("42834"),
                n.e("88131"),
                n.e("43430"),
                n.e("94723"),
                n.e("62931"),
                n.e("58529"),
                n.e("58038"),
                n.e("62531"),
                n.e("99081"),
                n.e("6174"),
                n.e("93103"),
                n.e("34552"),
                n.e("7170"),
                n.e("36877"),
                n.e("72963"),
                n.e("8757"),
                n.e("7575"),
                n.e("36594"),
                n.e("21930"),
                n.e("89018"),
                n.e("85968"),
                n.e("88599"),
                n.e("75842"),
                n.e("68403"),
                n.e("71273"),
                n.e("29787"),
                n.e("9640"),
                n.e("52548"),
                n.e("53984"),
                n.e("43780"),
                n.e("49736"),
                n.e("76273"),
                n.e("23532"),
                n.e("52557"),
                n.e("55654"),
                n.e("83161"),
                n.e("38513"),
                n.e("63645"),
                n.e("63123"),
                n.e("24038"),
                n.e("52229"),
                n.e("95340"),
                n.e("88469"),
                n.e("3930"),
                n.e("3663"),
                n.e("46430"),
                n.e("89523"),
                n.e("29260"),
                n.e("82486"),
                n.e("4098"),
                n.e("755"),
                n.e("41786"),
                n.e("53683"),
                n.e("48407"),
                n.e("96574"),
                n.e("87791"),
                n.e("4374"),
                n.e("86546"),
                n.e("82969"),
                n.e("95118"),
                n.e("37065"),
                n.e("43256"),
                n.e("41384"),
                n.e("5776"),
                n.e("19119"),
                n.e("46004"),
                n.e("73566"),
                n.e("84601"),
                n.e("62871"),
                n.e("86470"),
                n.e("53308"),
                n.e("54876"),
                n.e("14501"),
                n.e("27880"),
                n.e("8032"),
                n.e("77970"),
                n.e("75514"),
                n.e("71367"),
                n.e("75072"),
                n.e("91824"),
                n.e("49282"),
                n.e("35683"),
                n.e("2091"),
            ]).then(n.bind(n, 577593));
    }, [d.length]),
    0 === d.length)
        ? null
        : (0, i.jsx)(U.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/ea1ea066f1312b56d74e16232ca7da602ee5fc0206f0ea9ecc130e5094334683.svg",
              },
              title: G.intl.string(G.t.HMWL9c),
              body: G.intl.string(G.t["9hfy3A"]),
              onRequestClose: () =>
                  h(
                      d.map((e) => e.id),
                      W.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: G.intl.string(G.t.VSLDly),
                      loading: s,
                      onClick: function () {
                          r(!0),
                              (0, tY.openUserProfileModal)({ userId: o, tabSection: nR.RP.WIDGETS })
                                  .then(() => {
                                      let e = d.map((e) => e.id);
                                      (0, v.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("53702"),
                                                  n.e("12375"),
                                                  n.e("8978"),
                                                  n.e("4098"),
                                                  n.e("48407"),
                                                  n.e("46004"),
                                                  n.e("87591"),
                                              ]).then(n.bind(n, 333114));
                                              return (n) =>
                                                  (0, i.jsx)(t, {
                                                      ...n,
                                                      trackUserProfileEditAction: () => {},
                                                      highlightedApplicationIds: e,
                                                  });
                                          },
                                          { stackingBehavior: "stack" },
                                      ),
                                          h(
                                              d.map((e) => e.id),
                                              W.i.TAKE_ACTION,
                                          ),
                                          a();
                                  })
                                  .finally(() => r(!1));
                      },
                  },
              ],
          });
}
var nw = n(461213),
    nO = n(818348),
    nP = n(466573);
function nL() {
    let e = (0, c.bG)([nw.A], () => nw.A.getStatus()),
        t = (0, t8.MU)(e) ?? "",
        n = e === nO.cl.INVISIBLE || e === nO.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nP.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [G.intl.string(G.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eQ.m, {
                    text: G.intl.string(G.t.L99HQm),
                    children: (0, i.jsx)(nc.E, {
                        size: "xs",
                        color: nr.A.colors.STATUS_WARNING,
                        "aria-label": G.intl.string(G.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nD = n(379848),
    nU = n(321191);
let nG = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nF = n(501838),
    nH = n(760716),
    nV = n(915089),
    nW = n(13808);
function nB(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: a,
            children: r,
            height: o,
            className: d,
            contentClassName: c,
        } = e,
        u = (0, nV.GV)(),
        h = l.useRef(null),
        m = (0, ev.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, i.jsx)(S.animated.div, {
        className: s()(nW.kL, d),
        style: m,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nW.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nW.U1,
                    children: [
                        (0, i.jsx)(f.D, {
                            innerRef: h,
                            "aria-label": G.intl.string(G.t.WAI6xu),
                            className: nW.b,
                            onClick: () => {
                                t(W.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(eh.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(ec.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != a && (0, i.jsx)(eu.E, { variant: "text-md/normal", color: "text-subtle", children: a }),
                (0, i.jsx)(ek.Ip, {
                    className: nW.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: s()(nW.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nZ = n(123864),
    nz = n(871123),
    nK = n(44724),
    nq = n(501573);
function nY() {
    (0, nK.default)({ guildId: (0, nz.zf)() });
}
function n$(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e,
        { analyticsLocations: a } = (0, w.Ay)([k.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nB, {
              heading: G.intl.string(G.t["vy/61K"]),
              subheading: G.intl.string(G.t.tEee9t),
              markAsDismissed: l,
              className: nq.Zj,
              contentClassName: nq.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nZ.A, {
                      userId: t,
                      analyticsLocations: a,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nq.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nq.UD,
                      children: (0, i.jsx)(e6.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: G.intl.string(G.t.rg9FQp),
                          onClick: nY,
                      }),
                  }),
              ],
          });
}
function nX(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: a } = e,
        s = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nG.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nm.default], () => nm.default.getCurrentUser()),
                a = (0, c.bG)([nU.A], () => (null != i ? nU.A.getFirstWishlistId(i.id) : null)),
                s = (0, nH.i)((e) => e.recommendationApplicationIds),
                o = (0, nF.rY)(),
                d = (0, nF.qx)();
            return l.useMemo(
                () => (null != s || (null == a && n) ? (0, r.uniq)([...(s ?? []), ...d, ...o]).sort() : []),
                [n, a, d, o, s],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = l.useMemo(() => {
            let e = [];
            return s.length > 0 && e.push(u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [s]);
    return (0, i.jsx)(nD.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e;
            return null == a
                ? null
                : l === u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(n$, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: s })
                  : null;
        },
    });
}
var nJ = n(146901),
    nQ = n(827827);
let n0 = [
        { duration: 15 * e7.A.Millis.MINUTE, label: () => G.intl.string(G.t["8ot6gv"]) },
        { duration: e7.A.Millis.HOUR, label: () => G.intl.string(G.t.UMWBZr) },
        { duration: 8 * e7.A.Millis.HOUR, label: () => G.intl.string(G.t.EpAXPC) },
        { duration: e7.A.Millis.DAY, label: () => G.intl.string(G.t["755t4q"]) },
        { duration: 3 * e7.A.Millis.DAY, label: () => G.intl.string(G.t["f3/1ch"]) },
        { duration: void 0, label: () => G.intl.string(G.t["46dqJY"]) },
    ],
    n1 = "forever";
function n2(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== tf.clD.ONLINE,
        s = (0, i.jsx)(i.Fragment, {
            children: n0.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    no.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, nQ.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? n1,
                );
            }),
        });
    return (0, i.jsx)(no.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, t8.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eP.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nQ.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? s : void 0,
    });
}
function n3(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nJ._)(e);
    return "today" === t
        ? G.intl.formatToPlainString(G.t.ZxxHIO, { timeString: i })
        : G.intl.formatToPlainString(G.t["9OFjSe"], { dateString: n, timeString: i });
}
var n5 = n(996988),
    n6 = n(656884);
function n4(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: r, openedAt: o, className: d } = e,
        h = __OVERLAY__,
        g = (0, tq.Ay)(t.id, void 0),
        { analyticsLocations: f } = (0, w.Ay)(k.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tK.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: C, height: E } = (0, eF.Ay)(),
        { isHoveringOrFocusing: T, isHovering: _ } = (0, ts.A)(C);
    l.useEffect(() => {
        a?.(C.current);
    }, [C, a]),
        l.useEffect(
            () => (tk.A.setState({ isOpen: !0 }), () => tk.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let I = (0, c.bG)([nl.A], () => nl.A.getStatus(t.id)),
        j = n3(ni.CY.useSetting()),
        N = (0, c.bG)([na.A], () => na.A.hidePersonalInformation),
        S = (0, tM.kB)(),
        y = ni.Q_.useSetting(),
        b = (function (e) {
            let t = ni.CY.useSetting(),
                n = (0, tM.kB)(),
                l = ni.Jr.useSetting();
            function a(i) {
                let l = n3(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tf.clD.DND:
                        return n ? G.intl.string(G.t.day5A6) : G.intl.string(G.t["tq/fMK"]);
                    case tf.clD.INVISIBLE:
                        return G.intl.string(G.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, i.jsx)(i.Fragment, {
                    children: n0.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            no.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tM.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n1,
                        );
                    }),
                }),
                r = n2({ status: tf.clD.ONLINE, currentStatus: e }),
                o = n2({ status: tf.clD.IDLE, currentStatus: e, description: a(tf.clD.IDLE) }),
                d = n2({ status: tf.clD.DND, currentStatus: e, description: a(tf.clD.DND) }),
                c = n2({ status: tf.clD.INVISIBLE, currentStatus: e, description: a(tf.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    r,
                    (0, i.jsx)(no.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(no.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      no.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: G.intl.string(G.t.gJRnwK),
                                          iconLeft: eL.a,
                                          leadingAccessory: { type: "icon", icon: eL.a },
                                          badge: { text: G.intl.string(G.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? G.intl.format(G.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            G.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : G.intl.string(G.t["Br1q+x"]),
                                          action: () => {
                                              (0, tM.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: s,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            });
        })(I),
        M = (function (e) {
            let t = (0, c.bG)([nm.default], () => nm.default.getCurrentUser()),
                n = (0, c.bG)([na.A], () => na.A.hidePersonalInformation),
                l = (0, c.bG)([nu.A], () => (0, tw.M)(nu.A.theme)),
                { multiAccountUsers: a } = (0, nA.K)(),
                s = a.map((a) => {
                    let s = new nh.A(a),
                        r = s.id === t?.id,
                        o = a.tokenStatus === nf.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, i.jsx)(
                        no.Dr,
                        {
                            id: s.id,
                            focusedClassName: nC.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nC.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nC.DD,
                                            children: [
                                                (0, i.jsx)(eu.E, {
                                                    className: nC.gE,
                                                    variant: "text-sm/normal",
                                                    children: t8.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, i.jsx)(eu.E, {
                                                        className: nC.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(nd.y, {
                                                size: "sm",
                                                color: t
                                                    ? nr.A.unsafe_rawColors.WHITE.css
                                                    : nr.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nr.A.unsafe_rawColors.BRAND_500.css
                                                        : nr.A.unsafe_rawColors.WHITE.css,
                                                className: nC.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nc.E, {
                                                color: nr.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nr.A.unsafe_rawColors.BRAND_500.css
                                                        : nr.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nC.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nx.A)();
                                else {
                                    var n;
                                    (n = s.id) !== t?.id &&
                                        (np.default.track(tf.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tf.JJy.USER_PROFILE },
                                        }),
                                        ng.Mx(n, void 0, nv.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        s.id,
                    );
                });
            return (
                s.push(
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(no.bX, {}),
                            (0, i.jsx)(no.Dr, {
                                id: "manage-accounts",
                                label: G.intl.string(G.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nx.A)();
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        R = (0, tz.A)({ analyticsLocations: f }),
        O = (0, tL.TW)(t),
        P = l.useRef(null),
        L = l.useRef(null),
        D = (0, tj.A)(g?.profileFrame?.skuId, "UserProfileAccountPopout"),
        U = (0, tI.A)(g?.profileFrame?.skuId);
    (0, tN.A)({ skuId: g?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: f });
    let F = l.useRef((0, tk.A)((e) => e.shouldRenderTenureLevelUp)),
        H = l.useMemo(() => (0, ty.A)(), []),
        [V, B] = l.useState(() => tk.A.getState().shouldRenderTenureLevelUp);
    function Z(e) {
        n?.(), (0, tY.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: f, ...x, ...e });
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            B(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let z = g?.widgets != null && g.widgets.length > 0,
        K = l.useCallback(() => {
            n();
        }, [n]),
        q = l.useCallback(() => {
            R(), K();
        }, [R, K]),
        { enabled: Y } = eH.A.useConfig({ location: "UserProfileAccountPopout" }),
        $ = (0, ea.ux)("UserProfileAccountPopout"),
        [X, J] = (0, tb.kn)($ ? [u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE] : []),
        Q = X === u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
        ee = l.useId();
    return (0, i.jsx)(w.f5, {
        value: f,
        children: (0, i.jsx)(tK.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: g?.fetchStartedAt,
            fetchEndedAt: g?.fetchEndedAt,
            isLoaded: g?.isLoaded,
            children: (0, i.jsxs)(eR.l, {
                ref: C,
                "aria-labelledby": ee,
                className: s()(eZ.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, { children: (0, i.jsx)(eb.H, { id: ee, children: G.intl.string(G.t["5fWB8U"]) }) }),
                    (0, i.jsxs)(eb.F, {
                        children: [
                            (0, i.jsx)(nX, { displayProfile: g, handleOpenUserProfileModal: Z, height: E }),
                            (0, i.jsxs)(t3.A, {
                                className: eZ.BK,
                                user: t,
                                displayProfile: g,
                                themeType: n5.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n6.wx,
                                        children: [
                                            (0, i.jsx)(tJ.A, { user: t, displayProfile: g, themeType: n5.d.POPOUT }),
                                            (0, i.jsx)(t$.A, {
                                                user: t,
                                                displayProfile: g,
                                                themeType: n5.d.POPOUT,
                                                onOpenProfile: h ? void 0 : Z,
                                            }),
                                            (0, i.jsx)(nt.A, {
                                                ref: P,
                                                user: t,
                                                themeType: n5.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(ek.Ip, {
                                        className: eZ.rf,
                                        style: { pointerEvents: V ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(t0.A, { userId: t.id }),
                                            (0, i.jsx)(t5.Ay, {
                                                className: eZ.eF,
                                                user: t,
                                                displayName: ns.Ay.getName(void 0, null, t),
                                                onClickName: h ? void 0 : Z,
                                                displayNameTrailing: (0, i.jsx)(ne, { user: t, isVisible: T }),
                                                pronouns: g?.pronouns,
                                                trailing: (0, i.jsx)(tX.A, {
                                                    displayProfile: g,
                                                    themeType: n5.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: F.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tQ.A, { isPremiumUser: O, onInteraction: n }),
                                            (0, i.jsx)(nn.A, {
                                                userId: t.id,
                                                userBio: g?.bio,
                                                hidePersonalInformation: N,
                                                onClose: n,
                                            }),
                                            z &&
                                                (0, i.jsx)(t2.A, {
                                                    user: t,
                                                    widgets: g?.widgets,
                                                    onOpenUserProfileModal: Z,
                                                }),
                                            (0, i.jsx)(t1.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: Z,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eZ.T_,
                                                children: [
                                                    (0, i.jsx)(t3.A.Overlay, {
                                                        className: eZ.g0,
                                                        children: (0, i.jsxs)(eq, {
                                                            children: [
                                                                (0, i.jsx)(eK, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: G.intl.string(G.t.s5vZlQ),
                                                                    icon: ew.R,
                                                                    trailing:
                                                                        Q &&
                                                                        (0, i.jsx)(eO.Lp, {
                                                                            text: G.intl.string(G.t.y2b7CA),
                                                                            "aria-hidden": !0,
                                                                        }),
                                                                    onClick: () => {
                                                                        Q && J(W.i.TAKE_ACTION), q();
                                                                    },
                                                                    ref: L,
                                                                }),
                                                                (0, i.jsx)(eK, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nL, {}),
                                                                    sublabel: null != j && j,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eP.nW, { status: I, size: 12 }),
                                                                    trailing:
                                                                        (S || I === tf.clD.DND) &&
                                                                        (0, i.jsx)(eL.a, { size: "xxs" }),
                                                                    renderSubmenu: ey.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(ez, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eZ.hQ,
                                                                                  "aria-label": G.intl.string(
                                                                                      G.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: b,
                                                                              });
                                                                          },
                                                                    onClick: ey.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, v.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eM.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              G.intl.string(
                                                                                                                  G.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eD.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  G.intl.string(
                                                                                                                      G
                                                                                                                          .t
                                                                                                                          .E13trI,
                                                                                                                  ),
                                                                                                              hideScroller:
                                                                                                                  !0,
                                                                                                              onClose:
                                                                                                                  t,
                                                                                                              onSelect:
                                                                                                                  void 0,
                                                                                                              children:
                                                                                                                  b,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, i.jsx)(tT, { onClose: n, popoutContainerRef: C }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(t3.A.Overlay, {
                                                        className: eZ.g0,
                                                        children: (0, i.jsxs)(eq, {
                                                            children: [
                                                                (0, i.jsx)(eK, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eU.r,
                                                                    label: G.intl.string(G.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nx.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(ez, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": G.intl.string(G.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: M,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t7.p5 &&
                                                                    y &&
                                                                    (0, i.jsx)(eK, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eG.L,
                                                                        label: G.intl.string(G.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t7.C)(t.id), n();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    g?.profileEffect != null &&
                                        !F.current &&
                                        (0, i.jsx)(t_.A, { skuId: g.profileEffect.skuId, isHovering: _ }),
                                    null != D && (0, i.jsx)(tS.A, { frame: D, fadeIn: U }),
                                ],
                            }),
                            Y && (0, i.jsx)(nk, { targetElementRef: L, onClose: n }),
                            (0, i.jsx)(tB, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n7 = n(371912),
    n8 = n(655116),
    n9 = n(106531),
    ie = n(148411),
    it = n(342296),
    ii = n(852712),
    il = n(167579),
    ia = n(173660),
    is = n(186295),
    ir = n(763827),
    io = n(499156),
    id = n(731854);
let ic = 2.5 * e7.A.Millis.SECOND,
    iu = +e7.A.Millis.HOUR;
var ih = n(459838),
    im = n(485296);
let ip = 3 * e7.A.Millis.SECOND,
    ig = +e7.A.Millis.DAY;
var iA = n(616356),
    ix = n(734057),
    iv = n(629016),
    iC = n(186111),
    iE = n(967198),
    iT = n(486020),
    i_ = n(625494),
    iI = n(536194),
    ij = n(19575),
    iN = n(994314),
    iS = n(485599),
    iy = n(338854);
function ib(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: s = !0, children: r } = e,
        o = (0, eY.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            s && o
                ? (0, i.jsx)(iy.H, {
                      targetElementRef: t,
                      title: G.intl.string(tx.default.Qn21R6),
                      body: G.intl.string(tx.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: G.intl.string(G.t.RzWDqY),
                          onClick: function () {
                              n(W.i.TAKE_ACTION), l();
                          },
                      },
                      onRequestClose: function () {
                          n(W.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iM = n(626584),
    iR = n(757036),
    ik = n(591179),
    iw = n(531685),
    iO = n(259065),
    iP = n(864386);
let iL = new iM.A("DisplayNameStylesFlywheelCoachmark");
function iD(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: s } = (0, w.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, c.bG)([iw.A], () => iw.A.isFocused()),
        d = (0, iR.L)(tU.PremiumTypes.TIER_2),
        u = (0, ik.X)("DisplayNameStylesFlywheelCoachmark"),
        h = (0, l.useCallback)(() => {
            t(W.i.TAKE_ACTION);
            let e = nm.default.getCurrentUser();
            u && null != e
                ? (0, tY.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: s,
                      onModalOpen: () => {
                          (0, iO.L)({ analyticsLocations: s, stackingBehavior: "stack" });
                      },
                  })
                : (0, ef.openUserSettings)(eg.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
                      (0, iO.L)({ analyticsLocations: s });
                  });
        }, [t, s, u]),
        m = (0, l.useCallback)(() => {
            t(W.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iL.error) : o || r.current?.pause();
    }, [o]);
    let p = d ? [G.intl.string(iP.default.TyUdka)] : [G.intl.string(iP.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(U.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: m,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                    type: "video",
                    ref: r,
                    src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                badge: { type: "beta", variant: "expressive" },
                title: G.intl.string(iP.default.cYwrp8),
                body: p,
                actions: [{ text: G.intl.string(G.t["4P5I8V"]), variant: "primary", onClick: h }],
            }),
        ],
    });
}
var iU = n(45780),
    iG = n(696451),
    iF = n(71393),
    iH = n(685073),
    iV = n(228366);
let iW = { lastSeenInfos: {} },
    iB = iW;
class iZ extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iB = e ?? iW;
    }
    getState() {
        return iB;
    }
    getGuildLastSeenInfo(e) {
        return iB.lastSeenInfos[e] ?? null;
    }
}
let iz = new iZ(iV.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iB.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iB = iW;
    },
});
var iK = n(514661);
let iq = new iM.A("GuildTagAvailableCoachmark");
function iY(e) {
    let t = (0, c.bG)([iF.A], () => iF.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iV.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, iK.A)(t?.id ?? null, () => n(W.i.TAKE_ACTION));
    if (null == t || !(0, iH.q0)(t))
        return iq.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: G.intl.string(G.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: G.intl.string(G.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(U.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: D.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: G.intl.formatToPlainString(G.t["m/Tc3n"], { guildName: t.name }),
                body: G.intl.string(G.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(W.i.USER_DISMISS),
            }),
        ],
    });
}
function i$(e) {
    let t = (0, c.bG)([iF.A], () => iF.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, iK.A)(t?.id ?? null, () => n(W.i.TAKE_ACTION));
    if (null == t || !(0, iH.q0)(t))
        return iq.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: G.intl.string(G.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: G.intl.string(G.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(U.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: D.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: G.intl.formatToPlainString(G.t.VFqnyU, { guildName: t.name }),
                body: G.intl.string(G.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(W.i.USER_DISMISS),
            }),
        ],
    });
}
var iX = n(843010),
    iJ = n(764231),
    iQ = n(425713);
function i0(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tG(),
        a = (0, c.bG)([eC.Ay], () => eC.Ay.useReducedMotion),
        s = (0, tk.A)((e) => e.isOpen),
        r = (0, iX.G)();
    return a || null == l || s || r
        ? null
        : (0, i.jsx)(nD.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(i1, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i1(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: s } = e,
        r = tU.sp.indexOf(t),
        o = (0, iQ.I)(tU.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, l.useCallback)(() => {
            n(W.i.TAKE_ACTION),
                tk.A.setState({ shouldRenderTenureLevelUp: !0 }),
                i_._.dispatch(tf.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(W.i.USER_DISMISS);
        }, [n]),
        u = tU.VD[t],
        h = G.intl.formatToPlainString(G.t.ewkaVR, {
            timeMilestone: (0, iJ.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: G.intl.string(G.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(U.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: s,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: G.intl.string(G.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function i2(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n7.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iU.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tf.dJq),
                l = (0, c.bG)([iF.A, nm.default, iG.Ay], () => {
                    if (null === e) return !1;
                    let t = iF.A.getGuild(e);
                    if (void 0 === t || !(0, iH.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nm.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iG.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tb.ww)(l && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tf.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, c.bG)([iz], () => (null === l ? null : iz.getGuildLastSeenInfo(l))),
                s = (0, c.bG)([iF.A], () => iF.A.getGuild(l)?.profile?.tag),
                r = null != s && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === s,
                d = null !== l && r && !o;
            return (0, tb.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(i$, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iY, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i0, { groupName: W.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nD.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: W.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iD, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(ib, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eJ.p,
                                            children: e.children,
                                        });
                                    case u.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(B, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: l,
                                                    targetElementRef: e.targetElementRef,
                                                }),
                                            ],
                                        });
                                    default:
                                        return e.children;
                                }
                            },
                        }),
                    ],
                })
        : e.children;
}
var i3 = n(615675),
    i5 = n(900797),
    i6 = n(847374),
    i4 = n(348858),
    i7 = n(617354),
    i8 = n(829773),
    i9 = n(42473),
    le = n(490704),
    lt = n(967194);
function ln(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: r,
            iconForeground: o,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: u,
        } = e,
        h = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: f, onMouseLeave: A },
        } = (0, i4.I)(h ? "undeafen" : "deafen"),
        x = n ? i3.T : m,
        { name: v } = (0, eS.x5)(id.oh.AUDIO_OUTPUT),
        C = (0, i7.A)(t, n, a),
        { analyticsLocations: E } = (0, w.Ay)(k.A.AUDIO_OUTPUT_BUTTON),
        T = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [h, p]),
        (0, i.jsx)(w.f5, {
            value: E,
            children: (0, i.jsx)(g.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(w.f5, {
                            value: E,
                            children: (0, i.jsx)(i8.A, {
                                onInteraction: (0, X.s)("AudioDeviceMenu", k.A.ACCOUNT),
                                onClose: t,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: g.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: u } = t,
                        m = u ? i5.t : i6.a;
                    return (0, i.jsxs)("div", {
                        ref: T,
                        className: s()(le.Lh, { [le.v8]: h, [le.q6]: u }),
                        children: [
                            (0, i.jsx)(i9.A, {
                                "aria-checked": h,
                                "aria-label": G.intl.string(G.t.wjcRFX),
                                className: le.eT,
                                disabled: a,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? nr.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? lt.o : void 0,
                                innerClassName: s()({ [lt.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: f,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: C,
                            }),
                            (0, i.jsx)(i9.A, {
                                className: s()(le.UT, { [le.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(m, {
                                    className: le.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? nr.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? G.intl.formatToPlainString(G.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? G.intl.format(G.t["f+DDY/"], { outputDeviceName: v })
                                    : G.intl.string(G.t.aA4Vce),
                                "aria-label": c
                                    ? G.intl.formatToPlainString(G.t["f+DDY/"], { outputDeviceName: v })
                                    : G.intl.string(G.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var li = n(666654),
    ll = n(523875),
    la = n(993719);
let ls = {};
class lr extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return ls[e] ?? !1;
    }
}
let lo = new lr(iV.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        ls[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        ls[t] = !1;
    },
});
var ld = n(362823),
    lc = n(980923),
    lu = n(224585),
    lh = n(949341),
    lm = n(973324);
function lp(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: r,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: h,
            onClick: m,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: f,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: C,
            speaking: E,
        } = e,
        { showPTTIconIndicator: T } = io.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, c.bG)([is.Ay], () => is.Ay.getMode() === id.TB.PUSH_TO_TALK),
        I = (0, c.bG)([is.Ay], () => is.Ay.getSettings().modeOptions.shortcut),
        j = (0, c.bG)([lo], () => lo.getIsTutorialActive(ld.v.MUTE_TUTORIAL)),
        N = (0, c.bG)([ir.A], () => null != ir.A.getChannelId()),
        { name: S } = (0, eS.x5)(id.oh.AUDIO_INPUT),
        { enabledInputProfiles: y } = (0, ii.d)({ location: "MicrophoneButton" }),
        b = l.useRef(null),
        M = n || r || a,
        R = (0, ll.L)(M ? "unmute" : "mute"),
        { analyticsLocations: O } = (0, w.Ay)(k.A.AUDIO_INPUT_BUTTON),
        { Component: P, events: L, play: D } = R,
        F = a || r ? li.O : P;
    l.useEffect(() => () => D(), [M, D]);
    let H = (0, lc.A)(n, a, r, o);
    t = f
        ? { tooltipType: "green_void_do_not_use", tooltipText: G.intl.string(G.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: G.intl.format(G.t.c1qUOQ, { keybind: e9.dI(I).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: H };
    let V = T && _ && N,
        W = M ? nr.A.colors.ICON_VOICE_MUTED : "currentColor",
        B = l.useCallback(() => {
            m(), j && la.N(ld.v.MUTE_TUTORIAL);
        }, [m, j]);
    return (0, i.jsxs)(w.f5, {
        value: O,
        children: [
            (0, i.jsx)(g.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        C(),
                        (0, i.jsx)(w.f5, {
                            value: O,
                            children: (0, i.jsx)(i8.A, {
                                onInteraction: (0, X.s)("AudioDeviceMenu", k.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: y.length > 0,
                                renderInputDevices: !0,
                                maybeRenderInputMeter: !0,
                                renderInputVolume: !0,
                                renderSettingsButton: !0,
                            }),
                        })
                    );
                },
                position: "top",
                align: "left",
                animation: g.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: l } = e,
                        { isShown: a } = n,
                        r = a ? i5.t : i6.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: s()(le.Lh, { [le.v8]: M, [le.q6]: a }),
                        children: [
                            (0, i.jsx)(i9.A, {
                                "aria-checked": M,
                                "aria-label": G.intl.string(G.t.w4m945),
                                className: le.eT,
                                disabled: o,
                                icon: (0, i.jsx)(F, { size: "custom", width: 20, height: 20, color: W, className: d }),
                                onClick: B,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    u(), L.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    h(), L.onMouseLeave();
                                },
                                plated: null != p,
                                redGlow: M,
                                role: "switch",
                                ...t,
                                children: V ? (0, i.jsx)("div", { className: s()(lh.U, { [lh.z]: E }) }) : null,
                            }),
                            (0, i.jsx)(i9.A, {
                                "aria-label": x
                                    ? G.intl.formatToPlainString(G.t["18wnuD"], { inputDeviceName: S })
                                    : G.intl.string(G.t.fRzCbB),
                                className: s()(le.UT, { [le.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: le.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: W,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: u,
                                onMouseLeave: h,
                                plated: null != p,
                                redGlow: M,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? G.intl.formatToPlainString(G.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: x
                                    ? G.intl.format(G.t["18wnuD"], { inputDeviceName: S })
                                    : G.intl.string(G.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(U.A, {
                targetElementRef: b,
                shouldShow: j,
                graphic: { type: "image", src: lm.A },
                onRequestClose: () => {
                    la.N(ld.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: G.intl.string(lu.default.VG4zAf),
                body: G.intl.string(lu.default["8VIRzR"]),
            }),
        ],
    });
}
var lg = n(935399),
    lf = n(505312),
    lA = n(848847),
    lx = n(88001),
    lv = n(466919),
    lC = n(438705);
function lE(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        s = l.useCallback(() => {
            a(), (0, ef.openUserSettings)(eg.X.SUBSCRIPTIONS_PANEL);
        }, [a]);
    return (0, i.jsx)(U.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lC },
        shouldShow: n,
        title: G.intl.format(lv.default.bx8sR9, { premiumGroupProductName: (0, lx.DP)() }),
        body: G.intl.format(lv.default.Pw4OFZ, { premiumGroupProductName: (0, lx.DP)() }),
        onRequestClose: a,
        actions: [{ text: G.intl.string(lv.default.DD26QR), onClick: s }],
    });
}
var lT = n(873298),
    l_ = n(840387);
function lI(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, l_.Z)(),
        s = ni.KP.useSetting(),
        r = a && s !== lT.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            t(W.i.TAKE_ACTION), (0, ef.openUserSettings)(eg.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, l.useCallback)(() => {
            t(W.i.USER_DISMISS);
        }, [t]),
        c = r
            ? s === lT.KP.FRIENDS_ONLY
                ? G.intl.string(G.t["/hogEy"])
                : G.intl.string(G.t["6hEfm1"])
            : G.intl.string(G.t.bnNxW1);
    return (0, i.jsx)(U.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: d,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/0710b4aac8339f9213d3c43a8976071c26abe2b3236ccd8817180ce465f33673.svg",
        },
        title: G.intl.string(G.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: G.intl.string(G.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function lj(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: s,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: d,
            nameplate: c,
        } = e,
        h = l.useRef(null),
        [m, p] = l.useState(!1);
    (0, lg.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            i_._.subscribe(tf.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                i_._.unsubscribe(tf.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let g = l.useCallback(() => {
        p(!1), s();
    }, [s]);
    t = null != a ? G.intl.formatToPlainString(G.t.Gzh6ZP, { webBuildOverride: a.id }) : G.intl.string(G.t.cduTBL);
    let f = e2.Z,
        A = (0, lf.w)();
    return (
        (f = null != a ? lA.H : A.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i9.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: g,
                    onContextMenu: r,
                    "aria-label": G.intl.string(G.t.cduTBL),
                    icon: (0, i.jsx)(f, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...A.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lE, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, i.jsx)(nD.Ay, {
                    contentTypes: o,
                    groupName: W.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(lI, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var lN = n(489902);
let lS = ij.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    ly = 2.5 * e7.A.Millis.SECOND,
    lb = 2 * e7.A.Millis.MINUTE,
    lM = 2 * e7.A.Millis.MINUTE,
    lR = 5 * e7.A.Millis.SECOND;
function lk(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: a = -1 / 0,
            streaming: r,
            currentUser: o,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: h,
            nameplate: m,
            avatarDecoration: A,
            "data-jump-section": x,
        } = e,
        v = l.useRef(null),
        C = t ?? v,
        T = (0, iT.F_)({ avatarDecoration: A, size: (0, Q.Te)(p._3.SIZE_32) }),
        _ = (0, es.A)(),
        {
            updateOpenPopoutRef: j,
            highlightBadge: N,
            setHighlightBadge: S,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = l.useState(),
                [a, s] = l.useState(!1);
            return (
                (0, I.A)(() => s(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        i_._.subscribe(tf.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            i_._.unsubscribe(tf.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        y = (0, et.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(E.A, {
              object: tf.ZSU.AVATAR,
              children: (0, i.jsx)(it.A, {
                  user: o,
                  targetElementRef: C,
                  clickTrap: !0,
                  preload: () =>
                      (0, ie.A)(o.id, o.getAvatarURL(void 0, it.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(n4, {
                          currentUser: o,
                          highlightBadge: N,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lN.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: g.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), S(void 0);
                  },
                  children: (e) => {
                      j(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: C,
                          style: y,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: s()(lN.Q9, { [lN.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(f.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": G.intl.string(G.t["5fWB8U"]),
                                  focusProps: { ringTarget: C },
                                  className: lN.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lS, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tf.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: lN.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lN.oM, children: h(_) }),
                          ],
                      });
                  },
              }),
          });
}
class lw extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(lM, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = l.createRef();
    avatarWithPopoutRef = l.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: l, occluded: a, speakingWhilePTTInactive: s } = this.props;
        a !== i && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            s !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, Y.A)(e, t, tf.JJy.ACCOUNT_PANEL), (0, $.X)(k.A.ACCOUNT, $.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, q.A)(e, tf.JJy.ACCOUNT_PANEL), (0, $.X)(k.A.ACCOUNT, $.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ir.A.isConnected() ? (0, ef.openUserSettings)(eg.X.VOICE_AND_VIDEO_PANEL) : (0, ef.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79717"),
                    n.e("49905"),
                    n.e("41831"),
                    n.e("14144"),
                    n.e("97407"),
                    n.e("24856"),
                    n.e("93315"),
                    n.e("8813"),
                    n.e("78008"),
                    n.e("25610"),
                    n.e("42548"),
                    n.e("44190"),
                    n.e("41916"),
                    n.e("32443"),
                    n.e("13114"),
                    n.e("16227"),
                    n.e("10027"),
                    n.e("85408"),
                    n.e("8035"),
                    n.e("37634"),
                    n.e("812"),
                    n.e("39476"),
                    n.e("40821"),
                    n.e("86832"),
                    n.e("76342"),
                    n.e("60988"),
                    n.e("69273"),
                    n.e("72210"),
                    n.e("3155"),
                    n.e("82104"),
                    n.e("41711"),
                    n.e("49623"),
                    n.e("35316"),
                    n.e("38838"),
                    n.e("45214"),
                    n.e("99253"),
                    n.e("17202"),
                    n.e("90862"),
                    n.e("97189"),
                    n.e("16918"),
                    n.e("33730"),
                    n.e("24059"),
                    n.e("42306"),
                    n.e("11291"),
                    n.e("96846"),
                    n.e("19709"),
                    n.e("4251"),
                    n.e("47412"),
                    n.e("65327"),
                    n.e("41625"),
                    n.e("96490"),
                    n.e("85484"),
                    n.e("51772"),
                    n.e("6605"),
                    n.e("11262"),
                    n.e("54483"),
                    n.e("62461"),
                    n.e("25677"),
                    n.e("73679"),
                    n.e("73178"),
                    n.e("333"),
                    n.e("97638"),
                    n.e("22995"),
                    n.e("59096"),
                    n.e("55953"),
                    n.e("56386"),
                    n.e("38759"),
                    n.e("51943"),
                    n.e("90072"),
                    n.e("88016"),
                    n.e("84133"),
                    n.e("13627"),
                    n.e("57940"),
                    n.e("58171"),
                    n.e("44511"),
                    n.e("39375"),
                    n.e("47944"),
                    n.e("84473"),
                    n.e("70990"),
                    n.e("15130"),
                    n.e("74051"),
                    n.e("50541"),
                    n.e("32697"),
                    n.e("64622"),
                    n.e("47728"),
                    n.e("31270"),
                    n.e("6514"),
                    n.e("8641"),
                    n.e("6247"),
                    n.e("70298"),
                    n.e("82041"),
                    n.e("97238"),
                    n.e("30541"),
                    n.e("74187"),
                    n.e("8073"),
                    n.e("42157"),
                    n.e("85148"),
                    n.e("4676"),
                    n.e("53727"),
                    n.e("57034"),
                    n.e("78220"),
                    n.e("85948"),
                    n.e("12940"),
                    n.e("52443"),
                    n.e("11266"),
                    n.e("12124"),
                    n.e("18712"),
                    n.e("60654"),
                    n.e("70179"),
                    n.e("97690"),
                    n.e("87103"),
                    n.e("12410"),
                    n.e("52865"),
                    n.e("87960"),
                    n.e("57215"),
                    n.e("22535"),
                    n.e("31481"),
                    n.e("83140"),
                    n.e("18670"),
                    n.e("33238"),
                    n.e("31591"),
                    n.e("39111"),
                    n.e("58530"),
                    n.e("35426"),
                    n.e("51893"),
                    n.e("69487"),
                    n.e("87550"),
                    n.e("20631"),
                    n.e("8736"),
                    n.e("61285"),
                    n.e("97242"),
                    n.e("98795"),
                    n.e("65123"),
                    n.e("23549"),
                    n.e("83566"),
                    n.e("69722"),
                    n.e("80083"),
                    n.e("28510"),
                    n.e("78104"),
                    n.e("8502"),
                    n.e("29483"),
                    n.e("57236"),
                    n.e("20993"),
                    n.e("34161"),
                    n.e("69164"),
                    n.e("47173"),
                    n.e("92116"),
                    n.e("84200"),
                    n.e("33217"),
                    n.e("80050"),
                    n.e("37502"),
                    n.e("68316"),
                    n.e("62323"),
                    n.e("36885"),
                    n.e("42535"),
                    n.e("44819"),
                    n.e("72376"),
                    n.e("32802"),
                    n.e("32317"),
                    n.e("36081"),
                    n.e("40706"),
                    n.e("71453"),
                    n.e("56588"),
                    n.e("98902"),
                    n.e("81725"),
                    n.e("27655"),
                    n.e("61448"),
                    n.e("16607"),
                    n.e("50462"),
                    n.e("69848"),
                    n.e("6619"),
                    n.e("19019"),
                    n.e("47575"),
                    n.e("9639"),
                    n.e("3515"),
                    n.e("77335"),
                    n.e("67943"),
                    n.e("40775"),
                    n.e("38847"),
                    n.e("20469"),
                    n.e("21149"),
                    n.e("73515"),
                    n.e("6129"),
                    n.e("47334"),
                    n.e("11171"),
                    n.e("44448"),
                    n.e("19464"),
                    n.e("88429"),
                    n.e("90629"),
                    n.e("63251"),
                    n.e("25235"),
                    n.e("20750"),
                    n.e("88522"),
                    n.e("31333"),
                    n.e("96388"),
                    n.e("15750"),
                    n.e("39328"),
                    n.e("79886"),
                    n.e("79086"),
                    n.e("21293"),
                    n.e("37398"),
                    n.e("72196"),
                    n.e("1844"),
                    n.e("95820"),
                    n.e("78852"),
                    n.e("52264"),
                    n.e("44400"),
                    n.e("22929"),
                    n.e("50814"),
                    n.e("53702"),
                    n.e("98444"),
                    n.e("91064"),
                    n.e("8261"),
                    n.e("23017"),
                    n.e("23045"),
                    n.e("87121"),
                    n.e("90003"),
                    n.e("52307"),
                    n.e("61229"),
                    n.e("66721"),
                    n.e("91533"),
                    n.e("62965"),
                    n.e("5288"),
                    n.e("64345"),
                    n.e("25695"),
                    n.e("83705"),
                    n.e("95595"),
                    n.e("1780"),
                    n.e("40759"),
                    n.e("8445"),
                    n.e("61725"),
                    n.e("25512"),
                    n.e("80213"),
                    n.e("83185"),
                    n.e("51837"),
                    n.e("28946"),
                    n.e("36861"),
                    n.e("79364"),
                    n.e("78788"),
                    n.e("84805"),
                    n.e("38765"),
                    n.e("57123"),
                    n.e("25150"),
                    n.e("87193"),
                    n.e("10573"),
                    n.e("95932"),
                    n.e("29367"),
                    n.e("63252"),
                    n.e("81688"),
                    n.e("17465"),
                    n.e("18270"),
                    n.e("38389"),
                    n.e("10268"),
                    n.e("26142"),
                    n.e("44250"),
                    n.e("22957"),
                    n.e("79606"),
                    n.e("73978"),
                    n.e("69152"),
                    n.e("13585"),
                    n.e("53079"),
                    n.e("33885"),
                    n.e("46819"),
                    n.e("85355"),
                    n.e("27289"),
                    n.e("82895"),
                    n.e("15086"),
                    n.e("56821"),
                    n.e("59800"),
                    n.e("33422"),
                    n.e("50037"),
                    n.e("73505"),
                    n.e("92922"),
                    n.e("26858"),
                    n.e("29205"),
                    n.e("16328"),
                    n.e("51437"),
                    n.e("84287"),
                    n.e("79247"),
                    n.e("17773"),
                    n.e("81619"),
                    n.e("24143"),
                    n.e("59046"),
                    n.e("40650"),
                    n.e("44792"),
                    n.e("25006"),
                    n.e("43453"),
                    n.e("8225"),
                    n.e("18518"),
                    n.e("40065"),
                    n.e("86380"),
                    n.e("72244"),
                    n.e("97421"),
                    n.e("6095"),
                    n.e("30006"),
                    n.e("23924"),
                    n.e("42205"),
                    n.e("55675"),
                    n.e("48226"),
                    n.e("19402"),
                    n.e("68201"),
                    n.e("13111"),
                    n.e("27786"),
                    n.e("3376"),
                    n.e("13554"),
                    n.e("60241"),
                    n.e("26132"),
                    n.e("10471"),
                    n.e("64827"),
                    n.e("63232"),
                    n.e("68261"),
                    n.e("7167"),
                    n.e("12721"),
                    n.e("84569"),
                    n.e("60235"),
                    n.e("61737"),
                    n.e("92789"),
                    n.e("21335"),
                    n.e("77333"),
                    n.e("47834"),
                    n.e("11735"),
                    n.e("85927"),
                    n.e("834"),
                    n.e("2368"),
                    n.e("33115"),
                    n.e("6338"),
                    n.e("18573"),
                    n.e("78157"),
                    n.e("55936"),
                    n.e("85404"),
                    n.e("44057"),
                    n.e("1453"),
                    n.e("88774"),
                    n.e("10120"),
                    n.e("62175"),
                    n.e("31988"),
                    n.e("44571"),
                    n.e("34303"),
                    n.e("97270"),
                    n.e("45959"),
                    n.e("73122"),
                    n.e("8304"),
                    n.e("93159"),
                    n.e("71202"),
                    n.e("8739"),
                    n.e("42834"),
                    n.e("88131"),
                    n.e("43430"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("58529"),
                    n.e("58038"),
                    n.e("62531"),
                    n.e("99081"),
                    n.e("6174"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("81647"),
                    n.e("11310"),
                    n.e("34552"),
                    n.e("76602"),
                    n.e("7170"),
                    n.e("91763"),
                    n.e("21921"),
                    n.e("36877"),
                    n.e("72963"),
                    n.e("52511"),
                    n.e("40402"),
                    n.e("7575"),
                    n.e("53930"),
                    n.e("36594"),
                    n.e("42724"),
                    n.e("93766"),
                    n.e("13823"),
                    n.e("21930"),
                    n.e("89018"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("40258"),
                    n.e("98329"),
                    n.e("92583"),
                    n.e("43437"),
                    n.e("21957"),
                    n.e("66495"),
                    n.e("71210"),
                    n.e("8555"),
                    n.e("28095"),
                    n.e("86127"),
                    n.e("46070"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("21200"),
                    n.e("68403"),
                    n.e("95170"),
                    n.e("54622"),
                    n.e("28203"),
                    n.e("25949"),
                    n.e("88342"),
                    n.e("44502"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("79049"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("90365"),
                    n.e("89088"),
                    n.e("52548"),
                    n.e("17989"),
                    n.e("89421"),
                    n.e("35027"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("37977"),
                    n.e("98965"),
                    n.e("49653"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("3589"),
                    n.e("24689"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("84871"),
                    n.e("65437"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("49736"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("45413"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("90757"),
                    n.e("86672"),
                    n.e("94427"),
                    n.e("32756"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("2564"),
                    n.e("95152"),
                    n.e("71477"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("35313"),
                    n.e("14285"),
                    n.e("48330"),
                    n.e("95752"),
                    n.e("3332"),
                    n.e("8362"),
                    n.e("41678"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("2698"),
                    n.e("37021"),
                    n.e("18465"),
                    n.e("71430"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("85794"),
                    n.e("67837"),
                    n.e("35321"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("32209"),
                    n.e("9371"),
                    n.e("2362"),
                    n.e("23532"),
                    n.e("52557"),
                    n.e("87478"),
                    n.e("50033"),
                    n.e("55654"),
                    n.e("39171"),
                    n.e("74630"),
                    n.e("83161"),
                    n.e("36564"),
                    n.e("92513"),
                    n.e("48948"),
                    n.e("38513"),
                    n.e("63645"),
                    n.e("63244"),
                    n.e("68214"),
                    n.e("44780"),
                    n.e("63123"),
                    n.e("91450"),
                    n.e("24038"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("93438"),
                    n.e("36227"),
                    n.e("95340"),
                    n.e("88469"),
                    n.e("5557"),
                    n.e("62718"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("61156"),
                    n.e("91671"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("68763"),
                    n.e("16767"),
                    n.e("58273"),
                    n.e("6841"),
                    n.e("20930"),
                    n.e("59957"),
                    n.e("38056"),
                    n.e("48382"),
                    n.e("29666"),
                    n.e("8536"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("20379"),
                    n.e("57458"),
                    n.e("59466"),
                    n.e("8829"),
                    n.e("19193"),
                    n.e("1243"),
                    n.e("75133"),
                    n.e("15920"),
                    n.e("77487"),
                    n.e("58164"),
                    n.e("3930"),
                    n.e("96804"),
                    n.e("3663"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("46430"),
                    n.e("62875"),
                    n.e("37490"),
                    n.e("42234"),
                    n.e("66580"),
                    n.e("89523"),
                    n.e("26294"),
                    n.e("74678"),
                    n.e("29260"),
                    n.e("32737"),
                    n.e("81189"),
                    n.e("83230"),
                    n.e("96268"),
                    n.e("98972"),
                    n.e("12682"),
                    n.e("203"),
                    n.e("39103"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("78601"),
                    n.e("80407"),
                    n.e("42726"),
                    n.e("34546"),
                    n.e("10943"),
                    n.e("41701"),
                    n.e("4098"),
                    n.e("21455"),
                    n.e("60989"),
                    n.e("755"),
                    n.e("63359"),
                    n.e("25612"),
                    n.e("68083"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("49013"),
                    n.e("30167"),
                    n.e("76814"),
                    n.e("51892"),
                    n.e("41838"),
                    n.e("37937"),
                    n.e("18233"),
                    n.e("33448"),
                    n.e("3710"),
                    n.e("96325"),
                    n.e("45830"),
                    n.e("8979"),
                    n.e("1888"),
                    n.e("33771"),
                    n.e("77602"),
                    n.e("82178"),
                    n.e("38260"),
                    n.e("46039"),
                    n.e("95602"),
                    n.e("34409"),
                    n.e("22644"),
                    n.e("29569"),
                    n.e("51761"),
                    n.e("96480"),
                    n.e("73611"),
                    n.e("79006"),
                    n.e("94888"),
                    n.e("89541"),
                    n.e("44727"),
                    n.e("46149"),
                    n.e("5871"),
                    n.e("27462"),
                    n.e("86546"),
                    n.e("22455"),
                    n.e("60816"),
                    n.e("68031"),
                    n.e("97162"),
                    n.e("84820"),
                    n.e("10147"),
                    n.e("6627"),
                    n.e("43256"),
                    n.e("60536"),
                    n.e("73566"),
                    n.e("7408"),
                    n.e("46327"),
                    n.e("28011"),
                    n.e("15057"),
                    n.e("2846"),
                    n.e("91531"),
                    n.e("75284"),
                    n.e("13052"),
                    n.e("64926"),
                    n.e("72922"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("15622"),
                    n.e("61750"),
                    n.e("20803"),
                    n.e("95782"),
                    n.e("62418"),
                    n.e("61137"),
                    n.e("27687"),
                    n.e("31997"),
                    n.e("18710"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("71492"),
                    n.e("24564"),
                    n.e("34428"),
                    n.e("54876"),
                    n.e("39721"),
                    n.e("19631"),
                    n.e("82384"),
                    n.e("76892"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("7721"),
                    n.e("71811"),
                    n.e("62883"),
                    n.e("38249"),
                    n.e("40976"),
                    n.e("85216"),
                    n.e("83774"),
                    n.e("83102"),
                    n.e("80890"),
                    n.e("2552"),
                    n.e("89588"),
                    n.e("24084"),
                    n.e("44790"),
                    n.e("87641"),
                    n.e("44264"),
                    n.e("74913"),
                    n.e("35476"),
                    n.e("1691"),
                    n.e("14451"),
                    n.e("7755"),
                    n.e("93720"),
                    n.e("54658"),
                    n.e("71790"),
                    n.e("81754"),
                    n.e("61244"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("91824"),
                    n.e("56862"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: C.Z_, onInteraction: (0, X.s)("UserSettingsMenu", k.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, X.s)("AudioDeviceMenu", k.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, ii.d)({ location: "Account" });
                    return (0, i.jsx)(w.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: C.Z_,
                            renderInputDevices: !0,
                            renderInputProfiles: n.length > 0,
                            renderInputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
                };
            });
    };
    handleOutputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(w.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: C.Z_,
                            renderOutputDevices: !0,
                            renderOutputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleMouseEnterMute = () => {
        this.setState({
            hoveringOnMute: !0,
            shouldShowSpeakingWhileMutedTooltip: !1,
            shouldShowSpeakingWhilePTTTooltip: !1,
        }),
            this.speakingWhileMutedTooltipTimeout.stop(),
            this.speakingWhilePTTTooltipTimeout.stop();
    };
    handleMouseLeaveMute = () => {
        this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
        this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop();
    };
    dismissSpeakingWhilePTTTooltip = () => {
        this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop();
    };
    dismissTooltips = () => {
        this.props.onDismissDeviceChangedTooltip?.(),
            this.props.dismissPTTJoinTooltip?.(),
            this.dismissSpeakingWhileMutedTooltip(),
            this.dismissSpeakingWhilePTTTooltip();
    };
    handleOccludedChanged = () => {
        let { occluded: e } = this.props;
        e &&
            this.setState({
                shouldShowNametagTooltip: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                shouldShowSpeakingWhilePTTTooltip: !1,
            });
    };
    handleSpeakingWhileMutedChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhileMuted: i,
                occluded: l,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lb;
        i
            ? r ||
              !e ||
              t ||
              n ||
              l ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(ly, () =>
                          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              this.speakingWhileMutedTooltipTimeout.stop());
    };
    handleSpeakingWhilePTTChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhilePTTInactive: i,
                occluded: l,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? r ||
              e ||
              t ||
              n ||
              l ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(ly, () =>
                          this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop());
    };
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: l,
                status: a,
                userTag: s,
                voiceChannel: r,
            } = this.props;
        if (null == l) return null;
        if ((0, j.A)({ activities: t, status: a, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(R.A, {
                hoverText: s,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: t8.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(N.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lN.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tf.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: t8.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(el.A, { activity: o, emojiClassName: lN.Zg, className: lN.WO }),
                  ],
              })
            : null != a && a !== tf.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: t8.Ay.humanizeStatus(a) }),
                })
              : s;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: lN.eW,
                          children: (0, i.jsx)(iS.A, {
                              className: s()({ [lN.e8]: null != e }),
                              children: (0, i.jsx)(eo.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? er.G.ANIMATED : er.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lN.XP,
                          children: (0, i.jsx)(iN.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { badgeDirectoryNuxPopoverVariant: t, currentUser: n, dismissibleContents: l } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(i2, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  children: (0, i.jsx)(lk, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: a } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: s()(lN.kL, { [lN.UG]: null != n, [lN.bc]: !l, [lN.G5]: a }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ei.A, { nameplate: t, hovered: r, placement: en.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(lO, {
                                          ...this.props,
                                          ...this.state,
                                          accountContainerRef: this.containerRef,
                                          handleMouseEnterMute: this.handleMouseEnterMute,
                                          handleMouseLeaveMute: this.handleMouseLeaveMute,
                                          handleToggleSelfMute: this.handleToggleSelfMute,
                                          handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                                          handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                                          handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                                          handleOpenAccountSettings: this.handleOpenAccountSettings,
                                          handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu,
                                          dismissTooltips: this.dismissTooltips,
                                      }),
                                  ],
                              }),
                      }),
                      (0, i.jsx)(eN, {}),
                  ],
              });
    }
}
function lO(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: a,
            serverDeaf: s,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: d,
            webBuildOverride: c,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: h,
            handleToggleSelfDeaf: m,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: g,
            handleOutputAudioContextMenu: f,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: x,
            dismissibleContents: v,
            nameplate: C,
            accountContainerRef: E,
            deviceChangedTooltipType: T,
            shouldShowPTTJoinTooltip: _ = !1,
            dismissTooltips: I,
            speaking: j,
        } = e,
        N = (0, et.K)(C);
    return (0, i.jsxs)("div", {
        className: lN.Uo,
        style: N,
        children: [
            (0, i.jsx)(lp, {
                accountContainerRef: E,
                selfMute: n,
                serverMute: a,
                suppress: r,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: g,
                iconForeground: null != C ? lN.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: _,
                dismissTooltips: I,
                speaking: j,
            }),
            (0, i.jsx)(ln, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: m,
                onContextMenu: f,
                awaitingRemote: l,
                iconForeground: null != C ? lN.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: I,
            }),
            (0, i.jsx)(lj, {
                webBuildOverride: c,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: v.settings,
                iconForeground: null != C ? lN.t4 : void 0,
                nameplate: C,
            }),
        ],
    });
}
function lP(e) {
    let t = (0, c.bG)([ir.A], () => null != ir.A.getChannelId()),
        n = (0, eS.Py)(e),
        i = l.useRef(new h.Ep()),
        [a, s] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (s(!0),
            i.current.start(lR, () => {
                s(!1);
            }));
    }, [t, n]);
    let r = l.useCallback(() => {
        s(!1), i.current.stop();
    }, []);
    return (
        (0, _.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: r }
    );
}
function lL() {
    let e = (0, c.bG)([nm.default], () => nm.default.getCurrentUser()),
        t = (0, c.bG)([ny.default], () => ny.default.getId()),
        {
            activities: n,
            streaming: a,
            status: s,
        } = (0, c.cf)([nw.A], () => {
            let e = nw.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tf.$pd.STREAMING;
                    }),
                status: nw.A.getStatus(),
            };
        }),
        r = (0, c.bG)([iA.A], () => iA.A.getAnyStreamForUser(t)),
        d = (0, T.A)({ userId: t }),
        m = (0, c.bG)([im.A], () => im.A.getVoiceVolume(t)),
        p = t8.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([ir.A, ix.A], () => {
            let e = ir.A.getChannelId();
            return null != e ? ix.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: A, suppress: x } = (0, ia.A)(g),
        { selfDeaf: C, deaf: E } = (0, il.A)(g),
        I = (0, c.bG)([Z.A], () => ((0, z.kK)() ? Z.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([is.Ay], () => is.Ay.getSpeakingWhileMuted()),
        N = (0, c.bG)([K.A], () => K.A.isFullscreenInContext()),
        S = (0, c.bG)([iC.A], () => iC.A.hasLayers()),
        y = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || S || iI.P.isDisallowPopupsSet() || N,
        b = (0, c.bG)([ed.default], () => null != ed.default.getAwaitingRemoteSessionInfo()),
        M = (0, c.bG)([iE.A], () => iE.A.getGuildId()),
        R = e?.avatarDecoration,
        D = (0, J.A)(R),
        U = t8.Ay.useName(e) ?? "",
        { analyticsLocations: G } = (0, w.Ay)(k.A.ACCOUNT),
        F = (0, ee.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, n7.c9)(),
        W = (0, c.bG)([n8.A, nm.default, iv.A], () => {
            let e,
                t = n8.A.getSyncingWith(),
                n = n8.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iv.A.getParty(e) ?? []))
                        .map((e) => nm.default.getUser(e))
                        .filter(nM.Vq)
                        .value()),
                i.length > 1
            );
        }),
        B = { avatar: [], settings: [] },
        q = (0, n9.lX)("AccountCoachmark"),
        Y = (0, ea.ux)("AccountCoachmark"),
        $ = (0, O.VV)({ location: "AccountCoachmark" }),
        X = (function (e) {
            let { currentUserId: t, enabled: n } = e;
            l.useEffect(() => {
                null != t && n && !L.Ay.hasCatalogFor(t) && (0, P.R)(t);
            }, [t, n]);
            let i = (0, c.bG)([L.Ay], () => null != t && L.Ay.hasCatalogFor(t), [t]),
                a = (0, c.bG)(
                    [L.Ay],
                    () => (null != t ? L.Ay.getBadges(t).filter((e) => V.sC.has(e.badge_id) && e.owned).length : 0),
                    [t],
                );
            return n && null != t && i
                ? a > 0
                    ? { variant: "progress", newBadgeCount: a }
                    : { variant: "no-progress" }
                : null;
        })({ currentUserId: e?.id, enabled: $ });
    !y &&
        (Y && B.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != X && B.avatar.push(u.M.BADGE_DIRECTORY_NUX_POPOVER),
        q && B.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: et } = lP(id.oh.AUDIO_INPUT),
        { shouldShowTooltip: en, dismissTooltip: ei } = lP(id.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: el, dismissTooltip: es } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, c.bG)([is.Ay], () => is.Ay.getMode() === id.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [ir.A],
                    () => null != ir.A.getChannelId() && (ir.A.getDuration() ?? Number.MAX_VALUE) < ic,
                ),
                [a, s] = l.useState(!1),
                { showPTTJoinTooltip: r } = io.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = l.useRef(new h.Ep()),
                d = l.useRef(new h.Ep());
            l.useEffect(() => {
                if (i && n && !e) {
                    if ((io.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    s(!0),
                        t(!0),
                        d.current.start(iu, () => {
                            t(!1);
                        }),
                        o.current.start(ic, () => {
                            s(!1);
                        });
                }
                i || s(!1);
            }, [i, n, r, e]);
            let u = l.useCallback(() => {
                s(!1), o.current.stop();
            }, []);
            return (
                (0, _.l0)(() => {
                    o.current.stop(), d.current.stop();
                }),
                { shouldShowTooltip: a, dismissTooltip: u }
            );
        })(),
        er = (function () {
            let { showPTTSpeakingIndicator: e } = io.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = l.useState(!1),
                i = (0, c.bG)([is.Ay], () => is.Ay.getMode() === id.TB.PUSH_TO_TALK),
                a = (0, c.bG)([ir.A], () => ir.A.getRTCConnectionId()),
                s = (0, c.bG)([is.Ay], () => {
                    let e = is.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < ig;
                }),
                r = l.useRef(new h.Ep());
            return (
                l.useEffect(() => {
                    n(!1);
                }, [a]),
                l.useEffect(() => {
                    let t = 0,
                        l = r.current;
                    function o(e, i) {
                        let a = (i & id.ME.VOICE) === id.ME.VOICE,
                            s = im.A.isCurrentUserPTTActive();
                        a && !s
                            ? ++t >= 6 &&
                              (n(!0),
                              l.start(ip, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        s && e && i && null != a && is.Ay.getMediaEngine().on(ih.bg.VoiceActivity, o),
                        () => {
                            is.Ay.getMediaEngine().removeListener(ih.bg.VoiceActivity, o), l.stop();
                        }
                    );
                }, [e, i, s, a]),
                t
            );
        })(),
        eo = l.useMemo(() => (Q ? "input" : en ? "output" : void 0), [Q, en]),
        ec = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        et();
                        break;
                    case "output":
                        ei();
                }
            },
            [et, ei],
        );
    return (0, i.jsx)(w.f5, {
        value: G,
        children: (0, i.jsx)(lw, {
            currentUser: e,
            username: U,
            activities: n,
            applicationStream: r,
            voiceChannel: g,
            dismissibleContents: B,
            badgeDirectoryNuxPopoverVariant: X,
            userTag: p,
            occluded: y,
            selfDeaf: C,
            selfMute: A,
            serverDeaf: E,
            serverMute: f,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: j,
            speakingWhilePTTInactive: er,
            status: s,
            streaming: a,
            suppress: x,
            webBuildOverride: I,
            awaitingRemote: b,
            nameplate: F,
            selectedGuildId: M,
            avatarDecoration: D,
            isQuestBarEmpty: H,
            isListenAlongVisible: W,
            deviceChangedTooltipType: eo,
            onDismissDeviceChangedTooltip: () => ec(eo),
            shouldShowPTTJoinTooltip: el,
            dismissPTTJoinTooltip: es,
        }),
    });
}
