"use strict";
n.d(t, { g: () => rP, A: () => rG }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(158390),
    c = n(17928),
    u = n(554146),
    _ = n(451988),
    E = n(97808),
    A = n(778712),
    h = n(922016),
    I = n(939249),
    f = n(140735),
    p = n(312138),
    T = n(192308),
    m = n(442433),
    g = n(820284),
    S = n(717558),
    N = n(964486),
    C = n(220839),
    R = n(397244),
    O = n(394871),
    L = n(580929),
    D = n(866323),
    y = n(449450);
function v(e) {
    let { text: t } = e,
        n = (0, D.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: y.k,
        children: n((e, t) => (0, i.jsx)(L.animated.div, { className: y.H, style: e, children: t })),
    });
}
var b = n(29160),
    M = n(793574),
    P = n(688810),
    U = n(992526),
    w = n(682618),
    G = n(982240),
    x = n(116833),
    k = n(43105),
    F = n(375708);
function V(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: F.intl.string(F.t.uwDBSq),
                  body: F.intl.formatToPlainString(F.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: F.intl.string(F.t["5GD53o"]), body: F.intl.string(F.t["2Rb7tE"]) };
    return (0, i.jsx)(k.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: x.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: F.intl.string(F.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
var B = n(470739),
    H = n(92111),
    j = n(49999);
function W(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: r } = e;
    return (0, i.jsx)(V, {
        ...t,
        onPrimaryAction: () => {
            r(j.i.TAKE_ACTION), (0, B._)();
        },
        onRequestClose: () => r(j.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var Y = n(521502),
    K = n(380610),
    $ = n(313961),
    z = n(18235),
    q = n(183184),
    Z = n(384059),
    X = n(480890),
    Q = n(601255),
    J = n(562819),
    ee = n(449582),
    et = n(351952),
    en = n(88686),
    ei = n(174755),
    er = n(302223),
    ea = n(248778),
    es = n(609425),
    el = n(922301),
    eo = n(660184),
    ed = n(643501),
    ec = n(297264),
    eu = n(834730),
    e_ = n(789645),
    eE = n(826673),
    eA = n(750506),
    eh = n(780964),
    eI = n(766075),
    ef = n(417146),
    ep = n(552122),
    eT = n(717421),
    em = n(775602),
    eg = n(993843);
let eS = { mass: 10, tension: 550, friction: 140 };
function eN(e) {
    let { className: t, pageMultiplier: n } = e,
        a = (0, c.bG)([em.Ay], () => em.Ay.useReducedMotion),
        [l, d] = r.useState({ x: 0, y: 0 }),
        u = r.useMemo(
            () =>
                o().throttle((e) => {
                    a || d({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, a],
        );
    r.useEffect(() => (window.addEventListener("mousemove", u), () => window.removeEventListener("mousemove", u)), [u]);
    let [_, E] = (0, eT.z)(() => ({ x: 0, y: 0, config: eS }));
    return (
        r.useEffect(() => {
            E({ x: l.x, y: l.y });
        }, [l.x, l.y, E]),
        (0, i.jsx)(L.animated.div, {
            style: { transform: (0, L.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: s()(eg.T, t),
        })
    );
}
var eC = n(275883);
function eR(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: r } = e,
        a = ep.A.useIsEligible(),
        s = (0, eE.JZ)(t),
        l = null != n,
        o = null != r ? { color: r } : void 0,
        { analyticsLocations: d } = (0, P.Ay)(M.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, eE.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, eI.openUserSettings)(eh.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(j.i.TAKE_ACTION);
    }
    return a && !s
        ? (0, i.jsx)(eA.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eC.iE,
                  style: { backgroundColor: l ? n : void 0 },
                  children: [
                      !l &&
                          (0, i.jsxs)("div", {
                              className: eC.o5,
                              children: [
                                  (0, i.jsx)(eN, { className: eC.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eC.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eC.c8 }),
                      (0, i.jsxs)("div", {
                          className: eC.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(ec.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: F.intl.string(F.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(eu.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: F.intl.format(F.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      I.D,
                                                      {
                                                          tag: "span",
                                                          className: eC.nf,
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
                              (0, i.jsx)(I.D, {
                                  className: eC.l2,
                                  onClick: () => c(j.i.USER_DISMISS),
                                  children: (0, i.jsx)(e_.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eO() {
    return null == ef.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(eR, {
              dismissibleContent: ef.A.coachmarkDismissibleContent,
              backgroundColor: ef.A.coachmarkBackgroundColor,
              specialTextColor: ef.A.coachmarkSpecialTextColor,
          });
}
var eL = n(74848),
    eD = n(607399),
    ey = n(707554),
    ev = n(224640),
    eb = n(305866),
    eM = n(364522),
    eP = n(22231),
    eU = n(812993),
    ew = n(133171),
    eG = n(780338),
    ex = n(980707),
    ek = n(26137),
    eF = n(473935),
    eV = n(765671),
    eB = n(783041),
    eH = n(176781),
    ej = n(320448),
    eW = n(993401),
    eY = n(447349);
function eK(e) {
    return (0, i.jsx)("div", {
        className: eY.wE,
        children: (0, i.jsx)(ex.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function e$(e) {
    let {
            action: t,
            onClick: n,
            icon: a,
            label: s,
            sublabel: l,
            trailing: o,
            renderSubmenu: d,
            ref: c,
            submenuTargetElementRef: u,
            submenuAlign: _,
        } = e,
        E = null != n,
        A = (0, eW.rE)({ action: t, onClick: n }),
        [f, p] = r.useState(!1),
        m = r.useRef(null),
        g = c ?? m,
        S = null != d,
        N = S && E,
        C = r.useCallback(() => {
            p(!0);
        }, []),
        R = r.useCallback(() => {
            (0, T.hasAnyModalOpen)() || p(!1);
        }, []);
    function O() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eY.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eY.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eu.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eY.W1,
                                    children: s,
                                }),
                                (0, i.jsx)(eu.E, { color: "currentColor", variant: "text-xs/medium", children: l }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function L(e) {
        let t;
        return (
            (t = N
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(I.D, { className: eY.ef, onClick: A, children: O() }),
                          (0, i.jsx)(I.D, {
                              className: eY.ap,
                              "aria-label": F.intl.string(F.t.PdRCRg),
                              ...e,
                              onClick: C,
                              children: (0, i.jsx)(ej._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : S
                  ? (0, i.jsxs)(I.D, {
                        className: eY.ef,
                        ...e,
                        onClick: C,
                        children: [
                            O(),
                            (0, i.jsx)("div", {
                                className: eY.ap,
                                children: (0, i.jsx)(ej._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(I.D, { className: eY.ef, onClick: A, children: O() })),
            (0, i.jsx)("div", { ref: g, className: eY.jG, children: t })
        );
    }
    return S
        ? (0, i.jsx)("li", {
              className: eY.j$,
              onMouseEnter: C,
              onMouseLeave: R,
              children: (0, i.jsx)(h.Y, {
                  targetElementRef: u ?? g,
                  align: _,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: f,
                  onRequestClose: R,
                  children: L,
              }),
          })
        : (0, i.jsx)("li", { className: eY.j$, children: L() });
}
function ez(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eq = n(734066),
    eZ = n(915725),
    eX = n(409067),
    eQ = n(271597),
    eJ = n(990078),
    e0 = n(475358),
    e1 = n(408278),
    e2 = n(625903),
    e3 = n(404778),
    e6 = n(689175),
    e4 = n(821609),
    e5 = n(532624),
    e7 = n(927813),
    e8 = n(879631),
    e9 = n(350535),
    te = n(372684),
    tt = n(974293),
    tn = n(572164),
    ti = n(953932),
    tr = n(280483),
    ta = n(890856),
    ts = n(713517),
    tl = n(609174),
    to = n(619744);
function td(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, tl.Y_)(),
        s = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eQ.p)({ initialEditingClipId: a.id });
            },
            [a, t],
        );
    return (0, i.jsx)(e4.$, {
        onClick: s,
        icon: eP.R,
        variant: n,
        size: "sm",
        text: F.intl.string(F.t.bt75uw),
        fullWidth: !0,
    });
}
var tc = n(82716),
    tu = n(585579),
    t_ = n(930317),
    tE = n(285072),
    tA = n(316305);
let th = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: l } = e,
        o = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, ts.A)(o),
        c = r.useCallback(() => {
            a?.(), (0, eQ.p)({ initialEditingClipId: t.id });
        }, [t.id, a]);
    return (0, i.jsx)(tl.Cl, {
        clip: t,
        children: (0, i.jsx)(ta.s, {
            ref: o,
            "aria-label": F.intl.string(F.t.bt75uw),
            onClick: c,
            className: s()(tA.Z1, l),
            children: (0, i.jsxs)(t_.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eU.Lp, { className: tA.Ad, text: F.intl.string(F.t.y2b7CA) }),
                    (0, i.jsxs)(tE.h, {
                        isVisible: d,
                        className: tA.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tA.mY,
                                children: [(0, i.jsx)(tc.z, {}), (0, i.jsx)(to.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tA.E_,
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
var tI = n(652215),
    tf = n(753070),
    tp = n(16590),
    tT = n(550350);
function tm(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, tr.A)();
    let l = (0, c.yK)([eZ.Ay], () => Object.values(eZ.Ay.getClips())),
        o = (0, c.bG)([eZ.Ay], () => eZ.Ay.getSettings()),
        d = (0, c.bG)([eZ.Ay], () => eZ.Ay.getNewClipIds()),
        u = (0, tt.aJ)("ClipsPopout"),
        _ = (0, c.bG)([eZ.Ay], () => eZ.Ay.getEnableAutoclipping()),
        E = (0, c.bG)([e5.Ay], () => e5.Ay.getKeybindForAction(tI.hCu.SAVE_CLIP)),
        A = r.useCallback(
            (e) => {
                s?.(e);
            },
            [s],
        ),
        h = !o.showPovClipsInGallery,
        I = r.useMemo(() => {
            let e = l.filter((e) => e.type === te.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, eX.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [l, h]),
        f = r.useMemo(() => I.slice(0, 16), [I]),
        p = I.length > 16,
        T = null != E ? e9.dI(E.shortcut, !0) : null,
        m = [
            (0, e8.$)(o.clipsLength / e7.A.Millis.SECOND),
            (0, tf.zr)(o.clipsQuality.resolution),
            F.intl.formatToPlainString(F.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && m.push(F.intl.string(tp.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: A,
            className: tT.SW,
            role: "dialog",
            "aria-label": F.intl.string(F.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tT.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tT.$,
                            children: [
                                (0, i.jsx)(ec.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: F.intl.string(F.t.z2jK6X),
                                }),
                                null != T && (0, i.jsx)(e0.e, { className: tT.P, shortcut: T }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tT.$s,
                            children: [
                                (0, i.jsx)(eJ.m, {
                                    text: F.intl.string(F.t["3D5yo/"]),
                                    children: (0, i.jsx)(e1.K, {
                                        onClick: () => n(),
                                        icon: e2.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": F.intl.string(F.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eJ.m, {
                                    text: F.intl.string(tp.default["55C2MH"]),
                                    children: (0, i.jsx)(e1.K, {
                                        onClick: () => t(),
                                        icon: eH.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": F.intl.string(tp.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tT.ov,
                    children: [
                        m.map((e, t) =>
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tT.LO, children: "\u2022" }),
                                        (0, i.jsx)(eu.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tT.c5,
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
                                color: _ ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tT.wS,
                                children: _ ? F.intl.string(tp.default.lTwKmt) : F.intl.string(tp.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(e3.c, {}),
                f.length > 0
                    ? (0, i.jsxs)(e6.Ch, {
                          className: tT.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              f.map((e) => (0, i.jsx)(th, { clip: e, isNew: d.includes(e.id), onClose: a }, e.id)),
                              p &&
                                  (0, i.jsx)("div", {
                                      className: tT.qr,
                                      children: (0, i.jsx)(e4.$, {
                                          onClick: () => t(),
                                          text: F.intl.string(tp.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tg, { keybindString: T }),
            ],
        })
    );
}
function tg(e) {
    let { keybindString: t } = e,
        n = (0, tn.Et)();
    return (0, i.jsxs)("div", {
        className: tT.p$,
        children: [
            (0, i.jsx)(eu.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tT.qO,
                children: F.intl.string(tp.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eu.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tT.CZ,
                      children: F.intl.format(tp.default.y4zC7j, {
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
function tS(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eq.sw)(),
        s = !(0, c.bG)([eZ.Ay], () => eZ.Ay.getSettings().showPovClipsInGallery),
        l = (0, c.bG)([eZ.Ay], () => {
            let e = eZ.Ay.getNewClipIds();
            return s
                ? e.filter((e) => {
                      let t = eZ.Ay.getClipById(e);
                      return null != t && !(0, eX.kD)(t);
                  }).length
                : e.length;
        }, [s]),
        o = r.useCallback(
            (e) => {
                t(), (0, eQ.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        d = r.useCallback(() => {
            t(), (0, eI.openUserSettings)(eh.X.CLIPS_PANEL);
        }, [t]);
    return a
        ? (0, i.jsx)(e$, {
              action: "PRESS_CLIPS",
              icon: eH.x,
              label: F.intl.string(F.t.z2jK6X),
              trailing: l > 0 ? (0, i.jsx)(eU.hV, { count: l }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tm, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tN = n(480335),
    tC = n(577390),
    tR = n(474257),
    tO = n(31956),
    tL = n(744808),
    tD = n(645507),
    ty = n(131607),
    tv = n(970931),
    tb = n(315710),
    tM = n(832248),
    tP = n(462887),
    tU = n(736653),
    tw = n(439174),
    tG = n(428262),
    tx = n(878784),
    tk = n(202541);
function tF() {
    let e = (0, tx.Xb)(),
        t = (0, tG.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tk.sp.length - 1; t >= 0; t--) {
        let i = tk.VD[tk.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tV = {
        [tk.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tk.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tk.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tk.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tk.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tk.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tk.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tk.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tB = {
        [tk.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tk.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tk.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tk.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tk.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tk.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tk.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tk.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tH = n(682165);
let tj = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tW() {
    let e = (0, c.bG)([em.Ay], () => em.Ay.useReducedMotion),
        t = (0, tM.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tF(),
                t = (0, tP.M)((0, tU.Ay)());
            if (null == e) return null;
            let n = tV[e],
                i = tB[e],
                r = {
                    currentBadge: (0, tw.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tk.sp.indexOf(e);
            if (a > 0) {
                let e = tk.sp[a - 1],
                    n = tV[e];
                (r.prevBadge = (0, tw.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [a, s] = r.useState(null);
    return (null != n && null == a && s(n), e || !t || null == a) ? null : (0, i.jsx)(tY, { levelUpData: a });
}
function tY(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        a = r.useCallback(() => {
            tM.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tb.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tH.i,
            children: [
                (0, i.jsx)("div", {
                    className: tH.b,
                    children: (0, i.jsx)(eJ.m, {
                        text: F.intl.string(F.t.cpT0Cq),
                        children: (0, i.jsx)(e1.K, {
                            icon: e_.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": F.intl.string(F.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tj, { levelUpData: t }) }),
            ],
        }),
    });
}
var tK = n(206835),
    t$ = n(183555),
    tz = n(999291),
    tq = n(975732),
    tZ = n(718019),
    tX = n(413492),
    tQ = n(915614),
    tJ = n(744753),
    t0 = n(559506),
    t1 = n(646986),
    t2 = n(349419),
    t3 = n(946356),
    t6 = n(878555),
    t4 = n(624479),
    t5 = n(206845),
    t7 = n(957565),
    t8 = n(427262),
    t9 = n(962352);
function ne(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, t$.NJ)();
    return t7.p5
        ? (0, i.jsx)(t5.A, {
              text: F.intl.string(F.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t8.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(I.D, {
                      ...e,
                      className: s()(t9.c, { [t9.R]: n }),
                      "aria-label": F.intl.string(F.t.y5MwJy),
                      children: (0, i.jsx)(t4.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nt = n(983495),
    nn = n(442228),
    ni = n(885386),
    nr = n(290863),
    na = n(351906),
    ns = n(562153),
    nl = n(661531),
    no = n(477782),
    nd = n(628284),
    nc = n(695366),
    nu = n(363195),
    n_ = n(889227),
    nE = n(287809),
    nA = n(174459),
    nh = n(429707),
    nI = n(274303),
    nf = n(994125),
    np = n(347853),
    nT = n(573879),
    nm = n(335020),
    ng = n(661439),
    nS = n(385113),
    nN = n(352003),
    nC = n(429913),
    nR = n(334074),
    nO = n(633075),
    nL = n(667049),
    nD = n(280450),
    ny = n(90165),
    nv = n(403362),
    nb = n(518477);
function nM(e) {
    let { targetElementRef: t, onClose: a } = e,
        [s, l] = r.useState(!1),
        o = (0, c.bG)([nD.default], () => nD.default.getId()),
        { eligibleApplications: d, markAsDismissed: _ } = (function () {
            let e = (0, c.yK)([nS.A], () => nS.A.getFeaturedApplicationIds());
            (0, nN.A)(e),
                r.useEffect(() => {
                    (0, ng.X)();
                }, []);
            let t = (0, c.bG)([nD.default], () => nD.default.getId()),
                n = (0, nL.A)(t),
                i = r.useMemo(() => n.filter((e) => e instanceof nO.R), [n]),
                a = (0, nC.A)(e),
                s = r.useMemo(() => a.filter(nv.Vq), [a]),
                l = (0, c.cf)([ny.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = s.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = ny.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = r.useMemo(() => {
                    let e = Date.now();
                    return s.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = l[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [s, i, l]),
                { eligibleToShow: d, markAsDismissed: _ } = (0, nR.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nR.SH,
                });
            return {
                eligibleApplications: r.useMemo(() => o.filter((e) => d.includes(e.id)), [o, d]),
                markAsDismissed: _,
            };
        })();
    return ((0, r.useEffect)(() => {
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
                n.e("97189"),
                n.e("16918"),
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
                n.e("57578"),
                n.e("57016"),
                n.e("65673"),
                n.e("50541"),
                n.e("62646"),
                n.e("53702"),
                n.e("12375"),
                n.e("25711"),
                n.e("53417"),
                n.e("23549"),
                n.e("42205"),
                n.e("55675"),
                n.e("27962"),
                n.e("68201"),
                n.e("10471"),
                n.e("64827"),
                n.e("63232"),
                n.e("68261"),
                n.e("7167"),
                n.e("12721"),
                n.e("84569"),
                n.e("36850"),
                n.e("60235"),
                n.e("21335"),
                n.e("61060"),
                n.e("77333"),
                n.e("47834"),
                n.e("11735"),
                n.e("85927"),
                n.e("834"),
                n.e("2368"),
                n.e("6338"),
                n.e("18573"),
                n.e("78157"),
                n.e("85404"),
                n.e("44057"),
                n.e("1453"),
                n.e("88774"),
                n.e("21235"),
                n.e("62175"),
                n.e("31988"),
                n.e("44571"),
                n.e("34303"),
                n.e("40291"),
                n.e("33115"),
                n.e("97270"),
                n.e("45959"),
                n.e("73122"),
                n.e("8304"),
                n.e("93159"),
                n.e("71202"),
                n.e("55936"),
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
                n.e("7575"),
                n.e("54241"),
                n.e("8757"),
                n.e("24303"),
                n.e("21930"),
                n.e("14761"),
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
                n.e("23532"),
                n.e("52557"),
                n.e("76273"),
                n.e("55654"),
                n.e("29963"),
                n.e("83161"),
                n.e("38513"),
                n.e("63645"),
                n.e("63123"),
                n.e("24038"),
                n.e("50097"),
                n.e("88469"),
                n.e("52229"),
                n.e("95340"),
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
                n.e("48461"),
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
        : (0, i.jsx)(k.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/ea1ea066f1312b56d74e16232ca7da602ee5fc0206f0ea9ecc130e5094334683.svg",
              },
              title: F.intl.string(F.t.HMWL9c),
              body: F.intl.string(F.t["9hfy3A"]),
              onRequestClose: () =>
                  _(
                      d.map((e) => e.id),
                      j.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: F.intl.string(F.t.VSLDly),
                      loading: s,
                      onClick: function () {
                          l(!0),
                              (0, tq.openUserProfileModal)({ userId: o, tabSection: nb.RP.WIDGETS })
                                  .then(() => {
                                      let e = d.map((e) => e.id);
                                      (0, T.openModalLazy)(
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
                                          _(
                                              d.map((e) => e.id),
                                              j.i.TAKE_ACTION,
                                          ),
                                          a();
                                  })
                                  .finally(() => l(!1));
                      },
                  },
              ],
          });
}
var nP = n(461213),
    nU = n(818348),
    nw = n(466573);
function nG() {
    let e = (0, c.bG)([nP.A], () => nP.A.getStatus()),
        t = (0, t8.MU)(e) ?? "",
        n = e === nU.cl.INVISIBLE || e === nU.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nw.k,
        children: [
            (0, i.jsxs)(f.A, { tag: "div", children: [F.intl.string(F.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eJ.m, {
                    text: F.intl.string(F.t.L99HQm),
                    children: (0, i.jsx)(nc.E, {
                        size: "xs",
                        color: nl.A.colors.STATUS_WARNING,
                        "aria-label": F.intl.string(F.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nx = n(379848),
    nk = n(321191);
let nF = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nV = n(501838),
    nB = n(760716),
    nH = n(915089),
    nj = n(13808);
function nW(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: a,
            children: l,
            height: o,
            className: d,
            contentClassName: c,
        } = e,
        u = (0, nH.GV)(),
        _ = r.useRef(null),
        E = (0, eT.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(L.animated.div, {
        className: s()(nj.kL, d),
        style: E,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nj.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nj.U1,
                    children: [
                        (0, i.jsx)(I.D, {
                            innerRef: _,
                            "aria-label": F.intl.string(F.t.WAI6xu),
                            className: nj.b,
                            onClick: () => {
                                t(j.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(e_.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(ec.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != a && (0, i.jsx)(eu.E, { variant: "text-md/normal", color: "text-subtle", children: a }),
                (0, i.jsx)(eM.Ip, {
                    className: nj.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: s()(nj.gT, c), children: l }),
                }),
            ],
        }),
    });
}
var nY = n(123864),
    nK = n(871123),
    n$ = n(44724),
    nz = n(501573);
function nq() {
    (0, n$.default)({ guildId: (0, nK.zf)() });
}
function nZ(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: a } = (0, P.Ay)([M.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nW, {
              heading: F.intl.string(F.t["vy/61K"]),
              subheading: F.intl.string(F.t.tEee9t),
              markAsDismissed: r,
              className: nz.Zj,
              contentClassName: nz.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nY.A, {
                      userId: t,
                      analyticsLocations: a,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nz.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nz.UD,
                      children: (0, i.jsx)(e4.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: F.intl.string(F.t.rg9FQp),
                          onClick: nq,
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
                    return nF.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nE.default], () => nE.default.getCurrentUser()),
                a = (0, c.bG)([nk.A], () => (null != i ? nk.A.getFirstWishlistId(i.id) : null)),
                s = (0, nB.i)((e) => e.recommendationApplicationIds),
                o = (0, nV.rY)(),
                d = (0, nV.qx)();
            return r.useMemo(
                () => (null != s || (null == a && n) ? (0, l.uniq)([...(s ?? []), ...d, ...o]).sort() : []),
                [n, a, d, o, s],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = r.useMemo(() => {
            let e = [];
            return s.length > 0 && e.push(u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [s]);
    return (0, i.jsx)(nx.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: s } = e;
            return null == a
                ? null
                : r === u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nZ, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: s })
                  : null;
        },
    });
}
var nQ = n(146901),
    nJ = n(827827);
let n0 = [
        { duration: 15 * e7.A.Millis.MINUTE, label: () => F.intl.string(F.t["8ot6gv"]) },
        { duration: e7.A.Millis.HOUR, label: () => F.intl.string(F.t.UMWBZr) },
        { duration: 8 * e7.A.Millis.HOUR, label: () => F.intl.string(F.t.EpAXPC) },
        { duration: e7.A.Millis.DAY, label: () => F.intl.string(F.t["755t4q"]) },
        { duration: 3 * e7.A.Millis.DAY, label: () => F.intl.string(F.t["f3/1ch"]) },
        { duration: void 0, label: () => F.intl.string(F.t["46dqJY"]) },
    ],
    n1 = "forever";
function n2(e) {
    let { status: t, currentStatus: n, description: r } = e,
        a = t !== tI.clD.ONLINE,
        s = (0, i.jsx)(i.Fragment, {
            children: n0.map((e) => {
                let { duration: r, label: a } = e;
                return (0, i.jsx)(
                    no.Dr,
                    {
                        id: `${t}-${r}`,
                        label: a(),
                        action: () => (0, nJ.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? n1,
                );
            }),
        });
    return (0, i.jsx)(no.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, t8.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(ew.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nJ.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? s : void 0,
    });
}
function n3(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nQ._)(e);
    return "today" === t
        ? F.intl.formatToPlainString(F.t.ZxxHIO, { timeString: i })
        : F.intl.formatToPlainString(F.t["9OFjSe"], { dateString: n, timeString: i });
}
var n6 = n(996988),
    n4 = n(656884);
function n5(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: l, openedAt: o, className: d } = e,
        _ = __OVERLAY__,
        h = (0, tz.Ay)(t.id, void 0),
        { analyticsLocations: I } = (0, P.Ay)(M.A.USER_PROFILE_ACCOUNT_POPOUT),
        p = (0, t$.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: m, height: g } = (0, eV.Ay)(),
        { isHoveringOrFocusing: S, isHovering: N } = (0, ts.A)(m);
    r.useEffect(() => {
        a?.(m.current);
    }, [m, a]),
        r.useEffect(
            () => (tM.A.setState({ isOpen: !0 }), () => tM.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let C = (0, c.bG)([nr.A], () => nr.A.getStatus(t.id)),
        R = n3(ni.CY.useSetting()),
        O = (0, c.bG)([na.A], () => na.A.hidePersonalInformation),
        L = (0, tv.kB)(),
        D = ni.Q_.useSetting(),
        y = (function (e) {
            let t = ni.CY.useSetting(),
                n = (0, tv.kB)(),
                r = ni.Jr.useSetting();
            function a(i) {
                let r = n3(t);
                if (e === i && null != r) return r;
                switch (i) {
                    case tI.clD.DND:
                        return n ? F.intl.string(F.t.day5A6) : F.intl.string(F.t["tq/fMK"]);
                    case tI.clD.INVISIBLE:
                        return F.intl.string(F.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, i.jsx)(i.Fragment, {
                    children: n0.map((t) => {
                        let { duration: n, label: r } = t;
                        return (0, i.jsx)(
                            no.Dr,
                            {
                                id: `${e}-${n}`,
                                label: r(),
                                action: () => {
                                    (0, tv.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n1,
                        );
                    }),
                }),
                l = n2({ status: tI.clD.ONLINE, currentStatus: e }),
                o = n2({ status: tI.clD.IDLE, currentStatus: e, description: a(tI.clD.IDLE) }),
                d = n2({ status: tI.clD.DND, currentStatus: e, description: a(tI.clD.DND) }),
                c = n2({ status: tI.clD.INVISIBLE, currentStatus: e, description: a(tI.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    l,
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
                                          label: F.intl.string(F.t.gJRnwK),
                                          iconLeft: eG.a,
                                          leadingAccessory: { type: "icon", icon: eG.a },
                                          badge: { text: F.intl.string(F.t.ApAu9f) },
                                          subtext:
                                              null != r && "0" !== r
                                                  ? F.intl.format(F.t.BWD8fs, {
                                                        endTime: new Date(Number(r)).toLocaleString(
                                                            F.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : F.intl.string(F.t["Br1q+x"]),
                                          action: () => {
                                              (0, tv.ES)(!n);
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
        })(C),
        v = (function (e) {
            let t = (0, c.bG)([nE.default], () => nE.default.getCurrentUser()),
                n = (0, c.bG)([na.A], () => na.A.hidePersonalInformation),
                r = (0, c.bG)([nu.A], () => (0, tP.M)(nu.A.theme)),
                { multiAccountUsers: a } = (0, nf.K)(),
                s = a.map((a) => {
                    let s = new n_.A(a),
                        l = s.id === t?.id,
                        o = a.tokenStatus === nI.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, i.jsx)(
                        no.Dr,
                        {
                            id: s.id,
                            focusedClassName: nm.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nm.ci,
                                    children: [
                                        (0, i.jsx)(E.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: A._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nm.DD,
                                            children: [
                                                (0, i.jsx)(eu.E, {
                                                    className: nm.gE,
                                                    variant: "text-sm/normal",
                                                    children: t8.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, i.jsx)(eu.E, {
                                                        className: nm.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        l &&
                                            (0, i.jsx)(nd.y, {
                                                size: "sm",
                                                color: t
                                                    ? nl.A.unsafe_rawColors.WHITE.css
                                                    : nl.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? nl.A.unsafe_rawColors.BRAND_500.css
                                                        : nl.A.unsafe_rawColors.WHITE.css,
                                                className: nm.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nc.E, {
                                                color: nl.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? nl.A.unsafe_rawColors.BRAND_500.css
                                                        : nl.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nm.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, np.A)();
                                else {
                                    var n;
                                    (n = s.id) !== t?.id &&
                                        (nA.default.track(tI.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tI.JJy.USER_PROFILE },
                                        }),
                                        nh.Mx(n, void 0, nT.WX.MULTI_ACCOUNT_MENU));
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
                                label: F.intl.string(F.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, np.A)();
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        b = (0, tK.A)({ analyticsLocations: I }),
        U = (0, tG.TW)(t),
        w = r.useRef(null),
        G = r.useRef(null),
        x = (0, tR.A)(h?.profileFrame?.skuId, "UserProfileAccountPopout"),
        k = (0, tC.A)(h?.profileFrame?.skuId);
    (0, tO.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: p, analyticsLocations: I });
    let V = r.useRef((0, tM.A)((e) => e.shouldRenderTenureLevelUp)),
        B = r.useMemo(() => (0, tD.A)(), []),
        [H, W] = r.useState(() => tM.A.getState().shouldRenderTenureLevelUp);
    function Y(e) {
        n?.(), (0, tq.openUserProfileModal)({ customStatusPrompt: B, sourceAnalyticsLocations: I, ...p, ...e });
    }
    r.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let K = h?.widgets != null && h.widgets.length > 0,
        $ = r.useCallback(() => {
            n();
        }, [n]),
        z = r.useCallback(() => {
            b(), $();
        }, [b, $]),
        { enabled: q } = eB.A.useConfig({ location: "UserProfileAccountPopout" }),
        Z = (0, ea.ux)("UserProfileAccountPopout"),
        [X, Q] = (0, ty.kn)(Z ? [u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE] : []),
        J = X === u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
        ee = r.useId();
    return (0, i.jsx)(P.f5, {
        value: I,
        children: (0, i.jsx)(t$.of, {
            value: p,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(eb.l, {
                ref: m,
                "aria-labelledby": ee,
                className: s()(eY.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(ey.H, { id: ee, children: F.intl.string(F.t["5fWB8U"]) }) }),
                    (0, i.jsxs)(ey.F, {
                        children: [
                            (0, i.jsx)(nX, { displayProfile: h, handleOpenUserProfileModal: Y, height: g }),
                            (0, i.jsxs)(t3.A, {
                                className: eY.BK,
                                user: t,
                                displayProfile: h,
                                themeType: n6.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n4.wx,
                                        children: [
                                            (0, i.jsx)(tQ.A, { user: t, displayProfile: h, themeType: n6.d.POPOUT }),
                                            (0, i.jsx)(tZ.A, {
                                                user: t,
                                                displayProfile: h,
                                                themeType: n6.d.POPOUT,
                                                onOpenProfile: _ ? void 0 : Y,
                                            }),
                                            (0, i.jsx)(nt.A, {
                                                ref: w,
                                                user: t,
                                                themeType: n6.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: B,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eM.Ip, {
                                        className: eY.rf,
                                        style: { pointerEvents: H ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(t0.A, { userId: t.id }),
                                            (0, i.jsx)(t6.Ay, {
                                                className: eY.eF,
                                                user: t,
                                                displayName: ns.Ay.getName(void 0, null, t),
                                                onClickName: _ ? void 0 : Y,
                                                displayNameTrailing: (0, i.jsx)(ne, { user: t, isVisible: S }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(tX.A, {
                                                    displayProfile: h,
                                                    themeType: n6.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != l ? (e) => e === l : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tJ.A, { isPremiumUser: U, onInteraction: n }),
                                            (0, i.jsx)(nn.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: O,
                                                onClose: n,
                                            }),
                                            K &&
                                                (0, i.jsx)(t2.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: Y,
                                                }),
                                            (0, i.jsx)(t1.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: Y,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eY.T_,
                                                children: [
                                                    (0, i.jsx)(t3.A.Overlay, {
                                                        className: eY.g0,
                                                        children: (0, i.jsxs)(ez, {
                                                            children: [
                                                                (0, i.jsx)(e$, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: F.intl.string(F.t.s5vZlQ),
                                                                    icon: eP.R,
                                                                    trailing:
                                                                        J &&
                                                                        (0, i.jsx)(eU.Lp, {
                                                                            text: F.intl.string(F.t.y2b7CA),
                                                                            "aria-hidden": !0,
                                                                        }),
                                                                    onClick: () => {
                                                                        J && Q(j.i.TAKE_ACTION), z();
                                                                    },
                                                                    ref: G,
                                                                }),
                                                                (0, i.jsx)(e$, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nG, {}),
                                                                    sublabel: null != R && R,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ew.nW, { status: C, size: 12 }),
                                                                    trailing:
                                                                        (L || C === tI.clD.DND) &&
                                                                        (0, i.jsx)(eG.a, { size: "xxs" }),
                                                                    renderSubmenu: eD.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eK, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eY.hQ,
                                                                                  "aria-label": F.intl.string(
                                                                                      F.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: y,
                                                                              });
                                                                          },
                                                                    onClick: eD.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, T.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      ev.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              F.intl.string(
                                                                                                                  F.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(ex.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  F.intl.string(
                                                                                                                      F
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
                                                                                                                  y,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, i.jsx)(tS, { onClose: n, popoutContainerRef: m }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(t3.A.Overlay, {
                                                        className: eY.g0,
                                                        children: (0, i.jsxs)(ez, {
                                                            children: [
                                                                (0, i.jsx)(e$, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: ek.r,
                                                                    label: F.intl.string(F.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, np.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eK, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": F.intl.string(F.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: v,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t7.p5 &&
                                                                    D &&
                                                                    (0, i.jsx)(e$, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eF.L,
                                                                        label: F.intl.string(F.t["/AXYnE"]),
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
                                    h?.profileEffect != null &&
                                        !V.current &&
                                        (0, i.jsx)(tN.A, { skuId: h.profileEffect.skuId, isHovering: N }),
                                    null != x && (0, i.jsx)(tL.A, { frame: x, fadeIn: k }),
                                ],
                            }),
                            q && (0, i.jsx)(nM, { targetElementRef: G, onClose: n }),
                            (0, i.jsx)(tW, {}),
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
    ir = n(167579),
    ia = n(173660),
    is = n(186295),
    il = n(763827),
    io = n(499156),
    id = n(731854);
let ic = 2.5 * e7.A.Millis.SECOND,
    iu = +e7.A.Millis.HOUR;
var i_ = n(459838),
    iE = n(485296);
let iA = 3 * e7.A.Millis.SECOND,
    ih = +e7.A.Millis.DAY;
var iI = n(616356),
    ip = n(734057),
    iT = n(629016),
    im = n(186111),
    ig = n(967198),
    iS = n(486020),
    iN = n(625494),
    iC = n(536194),
    iR = n(19575),
    iO = n(994314),
    iL = n(485599),
    iD = n(338854);
function iy(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: r, position: a, shouldShow: s = !0, children: l } = e,
        o = (0, eq.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l,
            s && o
                ? (0, i.jsx)(iD.H, {
                      targetElementRef: t,
                      title: F.intl.string(tp.default.Qn21R6),
                      body: F.intl.string(tp.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: F.intl.string(F.t.RzWDqY),
                          onClick: function () {
                              n(j.i.TAKE_ACTION), r();
                          },
                      },
                      onRequestClose: function () {
                          n(j.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iv = n(626584),
    ib = n(757036),
    iM = n(591179),
    iP = n(531685),
    iU = n(259065),
    iw = n(864386);
let iG = new iv.A("DisplayNameStylesFlywheelCoachmark");
function ix(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: s } = (0, P.Ay)(),
        l = (0, r.useRef)(null),
        o = (0, c.bG)([iP.A], () => iP.A.isFocused()),
        d = (0, ib.L)(tk.PremiumTypes.TIER_2),
        u = (0, iM.X)("DisplayNameStylesFlywheelCoachmark"),
        _ = (0, r.useCallback)(() => {
            t(j.i.TAKE_ACTION);
            let e = nE.default.getCurrentUser();
            u && null != e
                ? (0, tq.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: s,
                      onModalOpen: () => {
                          (0, iU.L)({ analyticsLocations: s, stackingBehavior: "stack" });
                      },
                  })
                : (0, eI.openUserSettings)(eh.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
                      (0, iU.L)({ analyticsLocations: s });
                  });
        }, [t, s, u]),
        E = (0, r.useCallback)(() => {
            t(j.i.USER_DISMISS);
        }, [t]);
    (0, r.useEffect)(() => {
        o && l.current?.paused ? l.current?.play().catch(iG.error) : o || l.current?.pause();
    }, [o]);
    let A = d ? [F.intl.string(iw.default.TyUdka)] : [F.intl.string(iw.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(k.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: E,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                    type: "video",
                    ref: l,
                    src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                badge: { type: "beta", variant: "expressive" },
                title: F.intl.string(iw.default.cYwrp8),
                body: A,
                actions: [{ text: F.intl.string(F.t["4P5I8V"]), variant: "primary", onClick: _ }],
            }),
        ],
    });
}
var ik = n(45780),
    iF = n(696451),
    iV = n(71393),
    iB = n(685073),
    iH = n(228366);
let ij = { lastSeenInfos: {} },
    iW = ij;
class iY extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iW = e ?? ij;
    }
    getState() {
        return iW;
    }
    getGuildLastSeenInfo(e) {
        return iW.lastSeenInfos[e] ?? null;
    }
}
let iK = new iY(iH.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iW.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iW = ij;
    },
});
var i$ = n(514661);
let iz = new iv.A("GuildTagAvailableCoachmark");
function iq(e) {
    let t = (0, c.bG)([iV.A], () => iV.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iH.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: a, onEditProfile: s } = (0, i$.A)(t?.id ?? null, () => n(j.i.TAKE_ACTION));
    if (null == t || !(0, iB.q0)(t))
        return iz.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let l = [
        { text: F.intl.string(F.t.jwEaiX), loading: r, onClick: a, variant: "primary" },
        { text: F.intl.string(F.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(k.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: x.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: F.intl.formatToPlainString(F.t["m/Tc3n"], { guildName: t.name }),
                body: F.intl.string(F.t.DrAXIr),
                actions: l,
                size: "md",
                onRequestClose: () => n(j.i.USER_DISMISS),
            }),
        ],
    });
}
function iZ(e) {
    let t = (0, c.bG)([iV.A], () => iV.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: a, onEditProfile: s } = (0, i$.A)(t?.id ?? null, () => n(j.i.TAKE_ACTION));
    if (null == t || !(0, iB.q0)(t))
        return iz.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let l = [
        { text: F.intl.string(F.t.jwEaiX), loading: r, onClick: a, variant: "primary" },
        { text: F.intl.string(F.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(k.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: x.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: F.intl.formatToPlainString(F.t.VFqnyU, { guildName: t.name }),
                body: F.intl.string(F.t.DrAXIr),
                actions: l,
                size: "md",
                onRequestClose: () => n(j.i.USER_DISMISS),
            }),
        ],
    });
}
var iX = n(843010),
    iQ = n(764231),
    iJ = n(425713);
function i0(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tF(),
        a = (0, c.bG)([em.Ay], () => em.Ay.useReducedMotion),
        s = (0, tM.A)((e) => e.isOpen),
        l = (0, iX.G)();
    return a || null == r || s || l
        ? null
        : (0, i.jsx)(nx.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(i1, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i1(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: s } = e,
        l = tk.sp.indexOf(t),
        o = (0, iJ.I)(tk.sp[l > 0 ? l - 1 : l]).ambient,
        d = (0, r.useCallback)(() => {
            n(j.i.TAKE_ACTION),
                tM.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iN._.dispatch(tI.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(j.i.USER_DISMISS);
        }, [n]),
        u = tk.VD[t],
        _ = F.intl.formatToPlainString(F.t.ewkaVR, {
            timeMilestone: (0, iQ.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        E = [{ text: F.intl.string(F.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(k.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: s,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: F.intl.string(F.t.VoDxsV),
        body: _,
        actions: E,
    });
}
function i2(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n7.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [a, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, ik.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tI.dJq),
                r = (0, c.bG)([iV.A, nE.default, iF.Ay], () => {
                    if (null === e) return !1;
                    let t = iV.A.getGuild(e);
                    if (void 0 === t || !(0, iB.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nE.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iF.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, ty.ww)(r && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tI.eGj);
        })(e.guildId, { shouldShow: r }),
        [l, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                a = (0, c.bG)([iK], () => (null === r ? null : iK.getGuildLastSeenInfo(r))),
                s = (0, c.bG)([iV.A], () => iV.A.getGuild(r)?.profile?.tag),
                l = null != s && i?.identityGuildId === r && i?.tag === null,
                o = null != r && a?.tag === s,
                d = null !== r && l && !o;
            return (0, ty.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? a === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iZ, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : l === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iq, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i0, { groupName: j.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nx.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: j.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(ix, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iy, {
                                            markAsDismissed: r,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eQ.p,
                                            children: e.children,
                                        });
                                    case u.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(W, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: r,
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
    i6 = n(900797),
    i4 = n(847374),
    i5 = n(348858),
    i7 = n(617354),
    i8 = n(829773),
    i9 = n(42473),
    re = n(490704),
    rt = n(967194);
function rn(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: l,
            iconForeground: o,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: u,
        } = e,
        _ = t || n,
        {
            Component: E,
            play: A,
            events: { onMouseEnter: I, onMouseLeave: f },
        } = (0, i5.I)(_ ? "undeafen" : "deafen"),
        p = n ? i3.T : E,
        { name: T } = (0, eL.x5)(id.oh.AUDIO_OUTPUT),
        m = (0, i7.A)(t, n, a),
        { analyticsLocations: g } = (0, P.Ay)(M.A.AUDIO_OUTPUT_BUTTON),
        S = r.useRef(null);
    return (
        r.useEffect(() => () => A(), [_, A]),
        (0, i.jsx)(P.f5, {
            value: g,
            children: (0, i.jsx)(h.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(P.f5, {
                            value: g,
                            children: (0, i.jsx)(i8.A, {
                                onInteraction: (0, X.s)("AudioDeviceMenu", M.A.ACCOUNT),
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
                animation: h.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: r } = e,
                        { isShown: u } = t,
                        E = u ? i6.t : i4.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: s()(re.Lh, { [re.v8]: _, [re.q6]: u }),
                        children: [
                            (0, i.jsx)(i9.A, {
                                "aria-checked": _,
                                "aria-label": F.intl.string(F.t.wjcRFX),
                                className: re.eT,
                                disabled: a,
                                icon: (0, i.jsx)(p, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? nl.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: _ ? rt.o : void 0,
                                innerClassName: s()({ [rt.T]: n }),
                                onClick: l,
                                onContextMenu: r,
                                onMouseEnter: I,
                                onMouseLeave: f,
                                plated: null != d,
                                redGlow: _,
                                role: "switch",
                                tooltipText: m,
                            }),
                            (0, i.jsx)(i9.A, {
                                className: s()(re.UT, { [re.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(E, {
                                    className: re.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? nl.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: r,
                                onContextMenu: r,
                                plated: null != d,
                                redGlow: _,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? F.intl.formatToPlainString(F.t["f+DDY/"], { outputDeviceName: T })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? F.intl.format(F.t["f+DDY/"], { outputDeviceName: T })
                                    : F.intl.string(F.t.aA4Vce),
                                "aria-label": c
                                    ? F.intl.formatToPlainString(F.t["f+DDY/"], { outputDeviceName: T })
                                    : F.intl.string(F.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var ri = n(666654),
    rr = n(523875),
    ra = n(993719);
let rs = {};
class rl extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return rs[e] ?? !1;
    }
}
let ro = new rl(iH.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        rs[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        rs[t] = !1;
    },
});
var rd = n(362823),
    rc = n(980923),
    ru = n(224585),
    r_ = n(949341),
    rE = n(973324);
function rA(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: l,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: _,
            onClick: E,
            nameplate: A,
            shouldShowSpeakingWhileMutedTooltip: I,
            shouldShowSpeakingWhilePTTTooltip: f,
            shouldShowInputDeviceChangedTooltip: p,
            shouldShowPTTJoinTooltip: T,
            dismissTooltips: m,
            speaking: g,
        } = e,
        { showPTTIconIndicator: S } = io.A.useConfig({ location: "MicrophoneButton" }),
        N = (0, c.bG)([is.Ay], () => is.Ay.getMode() === id.TB.PUSH_TO_TALK),
        C = (0, c.bG)([is.Ay], () => is.Ay.getSettings().modeOptions.shortcut),
        R = (0, c.bG)([ro], () => ro.getIsTutorialActive(rd.v.MUTE_TUTORIAL)),
        O = (0, c.bG)([il.A], () => null != il.A.getChannelId()),
        { name: L } = (0, eL.x5)(id.oh.AUDIO_INPUT),
        { enabledInputProfiles: D } = (0, ii.d)({ location: "MicrophoneButton" }),
        y = r.useRef(null),
        v = n || l || a,
        b = (0, rr.L)(v ? "unmute" : "mute"),
        { analyticsLocations: U } = (0, P.Ay)(M.A.AUDIO_INPUT_BUTTON),
        { Component: w, events: G, play: x } = b,
        V = a || l ? ri.O : w;
    r.useEffect(() => () => x(), [v, x]);
    let B = (0, rc.A)(n, a, l, o);
    t = I
        ? { tooltipType: "green_void_do_not_use", tooltipText: F.intl.string(F.t["29gnR4"]), tooltipForceOpen: !0 }
        : T || f
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: F.intl.format(F.t.c1qUOQ, { keybind: e9.dI(C).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: B };
    let H = S && N && O,
        j = v ? nl.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = r.useCallback(() => {
            E(), R && ra.N(rd.v.MUTE_TUTORIAL);
        }, [E, R]);
    return (0, i.jsxs)(P.f5, {
        value: U,
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: y,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        m(),
                        (0, i.jsx)(P.f5, {
                            value: U,
                            children: (0, i.jsx)(i8.A, {
                                onInteraction: (0, X.s)("AudioDeviceMenu", M.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: D.length > 0,
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
                animation: h.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: r } = e,
                        { isShown: a } = n,
                        l = a ? i6.t : i4.a;
                    return (0, i.jsxs)("div", {
                        ref: y,
                        className: s()(re.Lh, { [re.v8]: v, [re.q6]: a }),
                        children: [
                            (0, i.jsx)(i9.A, {
                                "aria-checked": v,
                                "aria-label": F.intl.string(F.t.w4m945),
                                className: re.eT,
                                disabled: o,
                                icon: (0, i.jsx)(V, { size: "custom", width: 20, height: 20, color: j, className: d }),
                                onClick: W,
                                onContextMenu: r,
                                onMouseEnter: () => {
                                    u(), G.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    _(), G.onMouseLeave();
                                },
                                plated: null != A,
                                redGlow: v,
                                role: "switch",
                                ...t,
                                children: H ? (0, i.jsx)("div", { className: s()(r_.U, { [r_.z]: g }) }) : null,
                            }),
                            (0, i.jsx)(i9.A, {
                                "aria-label": p
                                    ? F.intl.formatToPlainString(F.t["18wnuD"], { inputDeviceName: L })
                                    : F.intl.string(F.t.fRzCbB),
                                className: s()(re.UT, { [re.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(l, {
                                    className: re.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: j,
                                }),
                                onClick: r,
                                onContextMenu: r,
                                onMouseEnter: u,
                                onMouseLeave: _,
                                plated: null != A,
                                redGlow: v,
                                tooltipType: p ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: p,
                                tooltipPositionKey: p
                                    ? F.intl.formatToPlainString(F.t["18wnuD"], { inputDeviceName: L })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: p
                                    ? F.intl.format(F.t["18wnuD"], { inputDeviceName: L })
                                    : F.intl.string(F.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(k.A, {
                targetElementRef: y,
                shouldShow: R,
                graphic: { type: "image", src: rE.A },
                onRequestClose: () => {
                    ra.N(rd.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: F.intl.string(ru.default.VG4zAf),
                body: F.intl.string(ru.default["8VIRzR"]),
            }),
        ],
    });
}
var rh = n(935399),
    rI = n(505312),
    rf = n(848847),
    rp = n(88001),
    rT = n(466919),
    rm = n(438705);
function rg(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        s = r.useCallback(() => {
            a(), (0, eI.openUserSettings)(eh.X.SUBSCRIPTIONS_PANEL);
        }, [a]);
    return (0, i.jsx)(k.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: rm },
        shouldShow: n,
        title: F.intl.format(rT.default.bx8sR9, { premiumGroupProductName: (0, rp.DP)() }),
        body: F.intl.format(rT.default.Pw4OFZ, { premiumGroupProductName: (0, rp.DP)() }),
        onRequestClose: a,
        actions: [{ text: F.intl.string(rT.default.DD26QR), onClick: s }],
    });
}
var rS = n(873298),
    rN = n(840387);
function rC(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, rN.Z)(),
        s = ni.KP.useSetting(),
        l = a && s !== rS.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, r.useCallback)(() => {
            t(j.i.TAKE_ACTION), (0, eI.openUserSettings)(eh.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, r.useCallback)(() => {
            t(j.i.USER_DISMISS);
        }, [t]),
        c = l
            ? s === rS.KP.FRIENDS_ONLY
                ? F.intl.string(F.t["/hogEy"])
                : F.intl.string(F.t["6hEfm1"])
            : F.intl.string(F.t.bnNxW1);
    return (0, i.jsx)(k.A, {
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
        title: F.intl.string(F.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: F.intl.string(F.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function rR(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: s,
            onContextMenu: l,
            dismissibleContents: o,
            iconForeground: d,
            nameplate: c,
        } = e,
        _ = r.useRef(null),
        [E, A] = r.useState(!1);
    (0, rh.Ay)(() => {
        function e() {
            return A(!0);
        }
        return (
            iN._.subscribe(tI.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iN._.unsubscribe(tI.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = r.useCallback(() => {
        A(!1), s();
    }, [s]);
    t = null != a ? F.intl.formatToPlainString(F.t.Gzh6ZP, { webBuildOverride: a.id }) : F.intl.string(F.t.cduTBL);
    let I = e2.Z,
        f = (0, rI.w)();
    return (
        (I = null != a ? rf.H : f.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i9.A, {
                    ref: _,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: l,
                    "aria-label": F.intl.string(F.t.cduTBL),
                    icon: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...f.events,
                    plated: null != c,
                }),
                (0, i.jsx)(rg, { targetElementRef: _, shouldShow: E, onDismiss: () => A(!1) }),
                (0, i.jsx)(nx.Ay, {
                    contentTypes: o,
                    groupName: j.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rC, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rO = n(489902);
let rL = iR.Ay.getEnableHardwareAcceleration() ? E.Js : E.eu,
    rD = 2.5 * e7.A.Millis.SECOND,
    ry = 2 * e7.A.Millis.MINUTE,
    rv = 2 * e7.A.Millis.MINUTE,
    rb = 5 * e7.A.Millis.SECOND;
function rM(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: a = -1 / 0,
            streaming: l,
            currentUser: o,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: _,
            nameplate: E,
            avatarDecoration: f,
            "data-jump-section": p,
        } = e,
        T = r.useRef(null),
        m = t ?? T,
        S = (0, iS.F_)({ avatarDecoration: f, size: (0, J.Te)(A._3.SIZE_32) }),
        N = (0, es.A)(),
        {
            updateOpenPopoutRef: R,
            highlightBadge: O,
            setHighlightBadge: L,
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = r.useState(),
                [a, s] = r.useState(!1);
            return (
                (0, C.A)(() => s(!0), 750),
                r.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        iN._.subscribe(tI.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iN._.unsubscribe(tI.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        D = (0, et.K)(E);
    return null == o
        ? null
        : (0, i.jsx)(g.A, {
              object: tI.ZSU.AVATAR,
              children: (0, i.jsx)(it.A, {
                  user: o,
                  targetElementRef: m,
                  clickTrap: !0,
                  preload: () =>
                      (0, ie.A)(o.id, o.getAvatarURL(void 0, it.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(n5, {
                          currentUser: o,
                          highlightBadge: O,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rO.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: h.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), L(void 0);
                  },
                  children: (e) => {
                      R(e);
                      let { onMouseEnter: t, onMouseDown: r, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: m,
                          style: D,
                          onMouseEnter: t,
                          onMouseDown: r,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: s()(rO.Q9, { [rO.ZQ]: null != E }),
                          children: [
                              (0, i.jsx)(I.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": F.intl.string(F.t["5fWB8U"]),
                                  focusProps: { ringTarget: m },
                                  className: rO.$n,
                                  "data-jump-section": p,
                              }),
                              (0, i.jsx)(rL, {
                                  size: A._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: l ? tI.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: rO.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rO.oM, children: _(N) }),
                          ],
                      });
                  },
              }),
          });
}
class rP extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(rv, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = r.createRef();
    avatarWithPopoutRef = r.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: r, occluded: a, speakingWhilePTTInactive: s } = this.props;
        a !== i && this.handleOccludedChanged(),
            r !== t && this.handleSpeakingWhileMutedChanged(),
            s !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, q.A)(e, t, tI.JJy.ACCOUNT_PANEL), (0, Z.X)(M.A.ACCOUNT, Z.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, z.A)(e, tI.JJy.ACCOUNT_PANEL), (0, Z.X)(M.A.ACCOUNT, Z.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            il.A.isConnected() ? (0, eI.openUserSettings)(eh.X.VOICE_AND_VIDEO_PANEL) : (0, eI.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, m.L3)(e, async () => {
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
                    n.e("57578"),
                    n.e("57016"),
                    n.e("65673"),
                    n.e("50541"),
                    n.e("32697"),
                    n.e("64622"),
                    n.e("47728"),
                    n.e("31270"),
                    n.e("6514"),
                    n.e("8641"),
                    n.e("6247"),
                    n.e("66614"),
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
                    n.e("38500"),
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
                    n.e("19180"),
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
                    n.e("42205"),
                    n.e("55675"),
                    n.e("27962"),
                    n.e("68201"),
                    n.e("27786"),
                    n.e("3376"),
                    n.e("56490"),
                    n.e("60241"),
                    n.e("26132"),
                    n.e("10471"),
                    n.e("64827"),
                    n.e("63232"),
                    n.e("68261"),
                    n.e("7167"),
                    n.e("12721"),
                    n.e("84569"),
                    n.e("36850"),
                    n.e("60235"),
                    n.e("21335"),
                    n.e("61060"),
                    n.e("77333"),
                    n.e("47834"),
                    n.e("11735"),
                    n.e("85927"),
                    n.e("834"),
                    n.e("2368"),
                    n.e("6338"),
                    n.e("18573"),
                    n.e("78157"),
                    n.e("85404"),
                    n.e("44057"),
                    n.e("1453"),
                    n.e("88774"),
                    n.e("21235"),
                    n.e("62175"),
                    n.e("31988"),
                    n.e("44571"),
                    n.e("34303"),
                    n.e("40291"),
                    n.e("33115"),
                    n.e("97270"),
                    n.e("45959"),
                    n.e("73122"),
                    n.e("8304"),
                    n.e("93159"),
                    n.e("71202"),
                    n.e("55936"),
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
                    n.e("7575"),
                    n.e("40402"),
                    n.e("54241"),
                    n.e("24303"),
                    n.e("53930"),
                    n.e("42724"),
                    n.e("93766"),
                    n.e("13823"),
                    n.e("21930"),
                    n.e("14761"),
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
                    n.e("23532"),
                    n.e("52557"),
                    n.e("9371"),
                    n.e("2362"),
                    n.e("55654"),
                    n.e("29963"),
                    n.e("87478"),
                    n.e("83161"),
                    n.e("50033"),
                    n.e("38513"),
                    n.e("63645"),
                    n.e("39171"),
                    n.e("74630"),
                    n.e("63123"),
                    n.e("36564"),
                    n.e("24038"),
                    n.e("92513"),
                    n.e("48948"),
                    n.e("63244"),
                    n.e("68214"),
                    n.e("44780"),
                    n.e("50097"),
                    n.e("88469"),
                    n.e("91450"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("93438"),
                    n.e("36227"),
                    n.e("95340"),
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
                    n.e("28011"),
                    n.e("73566"),
                    n.e("7408"),
                    n.e("46327"),
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
                    (0, i.jsx)(e, { ...t, onClose: m.Z_, onInteraction: (0, X.s)("UserSettingsMenu", M.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, X.s)("AudioDeviceMenu", M.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, ii.d)({ location: "Account" });
                    return (0, i.jsx)(P.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: m.Z_,
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
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(P.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: m.Z_,
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
                occluded: r,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: l } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > ry;
        i
            ? l ||
              !e ||
              t ||
              n ||
              r ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(rD, () =>
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
                occluded: r,
                shouldShowPTTJoinTooltip: a,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: l } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? l ||
              e ||
              t ||
              n ||
              r ||
              !o ||
              null != s ||
              a ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(rD, () =>
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
                currentUser: r,
                status: a,
                userTag: s,
                voiceChannel: l,
            } = this.props;
        if (null == r) return null;
        if ((0, R.A)({ activities: t, status: a, applicationStream: n, voiceChannel: l }))
            return (0, i.jsxs)(b.A, {
                hoverText: s,
                forceHover: e,
                children: [
                    (0, i.jsx)(f.A, { children: t8.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(O.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: l,
                        textClassName: rO.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tI.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(b.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(f.A, { children: t8.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(er.A, { activity: o, emojiClassName: rO.Zg, className: rO.WO }),
                  ],
              })
            : null != a && a !== tI.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(b.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, i.jsx)(v, { text: t8.Ay.humanizeStatus(a) }),
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
                          className: rO.eW,
                          children: (0, i.jsx)(iL.A, {
                              className: s()({ [rO.e8]: null != e }),
                              children: (0, i.jsx)(eo.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? el.G.ANIMATED : el.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: rO.XP,
                          children: (0, i.jsx)(iO.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { badgeDirectoryNuxPopoverVariant: t, currentUser: n, dismissibleContents: r } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(i2, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: r.avatar,
                  children: (0, i.jsx)(rM, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: a } = this.props,
            l = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(p.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: s()(rO.kL, { [rO.UG]: null != n, [rO.bc]: !r, [rO.G5]: a }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ei.A, { nameplate: t, hovered: l, placement: en.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rU, {
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
                      (0, i.jsx)(eO, {}),
                  ],
              });
    }
}
function rU(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: a,
            serverDeaf: s,
            suppress: l,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: d,
            webBuildOverride: c,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: _,
            handleToggleSelfDeaf: E,
            handleToggleSelfMute: A,
            handleInputAudioContextMenu: h,
            handleOutputAudioContextMenu: I,
            handleOpenAccountSettings: f,
            handleOpenSettingsContextMenu: p,
            dismissibleContents: T,
            nameplate: m,
            accountContainerRef: g,
            deviceChangedTooltipType: S,
            shouldShowPTTJoinTooltip: N = !1,
            dismissTooltips: C,
            speaking: R,
        } = e,
        O = (0, et.K)(m);
    return (0, i.jsxs)("div", {
        className: rO.Uo,
        style: O,
        children: [
            (0, i.jsx)(rA, {
                accountContainerRef: g,
                selfMute: n,
                serverMute: a,
                suppress: l,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: _,
                onClick: A,
                onContextMenu: h,
                iconForeground: null != m ? rO.t4 : void 0,
                nameplate: m,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: N,
                dismissTooltips: C,
                speaking: R,
            }),
            (0, i.jsx)(rn, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: E,
                onContextMenu: I,
                awaitingRemote: r,
                iconForeground: null != m ? rO.t4 : void 0,
                nameplate: m,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: C,
            }),
            (0, i.jsx)(rR, {
                webBuildOverride: c,
                onClick: f,
                onContextMenu: p,
                dismissibleContents: T.settings,
                iconForeground: null != m ? rO.t4 : void 0,
                nameplate: m,
            }),
        ],
    });
}
function rw(e) {
    let t = (0, c.bG)([il.A], () => null != il.A.getChannelId()),
        n = (0, eL.Py)(e),
        i = r.useRef(new _.Ep()),
        [a, s] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (s(!0),
            i.current.start(rb, () => {
                s(!1);
            }));
    }, [t, n]);
    let l = r.useCallback(() => {
        s(!1), i.current.stop();
    }, []);
    return (
        (0, N.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: l }
    );
}
function rG() {
    let e = (0, c.bG)([nE.default], () => nE.default.getCurrentUser()),
        t = (0, c.bG)([nD.default], () => nD.default.getId()),
        {
            activities: n,
            streaming: a,
            status: s,
        } = (0, c.cf)([nP.A], () => {
            let e = nP.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tI.$pd.STREAMING;
                    }),
                status: nP.A.getStatus(),
            };
        }),
        l = (0, c.bG)([iI.A], () => iI.A.getAnyStreamForUser(t)),
        d = (0, S.A)({ userId: t }),
        E = (0, c.bG)([iE.A], () => iE.A.getVoiceVolume(t)),
        A = t8.Ay.useUserTag(e, { decoration: "never" }),
        h = (0, c.bG)([il.A, ip.A], () => {
            let e = il.A.getChannelId();
            return null != e ? ip.A.getChannel(e) : null;
        }),
        { mute: I, selfMute: f, suppress: p } = (0, ia.A)(h),
        { selfDeaf: m, deaf: g } = (0, ir.A)(h),
        C = (0, c.bG)([Y.A], () => ((0, K.kK)() ? Y.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        R = (0, c.bG)([is.Ay], () => is.Ay.getSpeakingWhileMuted()),
        O = (0, c.bG)([$.A], () => $.A.isFullscreenInContext()),
        L = (0, c.bG)([im.A], () => im.A.hasLayers()),
        D = (0, T.useModalsStore)(T.hasAnyModalOpenSelector) || L || iC.P.isDisallowPopupsSet() || O,
        y = (0, c.bG)([ed.default], () => null != ed.default.getAwaitingRemoteSessionInfo()),
        v = (0, c.bG)([ig.A], () => ig.A.getGuildId()),
        b = e?.avatarDecoration,
        x = (0, Q.A)(b),
        k = t8.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, P.Ay)(M.A.ACCOUNT),
        V = (0, ee.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: B } = (0, n7.c9)(),
        j = (0, c.bG)([n8.A, nE.default, iT.A], () => {
            let e,
                t = n8.A.getSyncingWith(),
                n = n8.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iT.A.getParty(e) ?? []))
                        .map((e) => nE.default.getUser(e))
                        .filter(nv.Vq)
                        .value()),
                i.length > 1
            );
        }),
        W = { avatar: [], settings: [] },
        z = (0, n9.lX)("AccountCoachmark"),
        q = (0, ea.ux)("AccountCoachmark"),
        Z = (0, U.VV)({ location: "AccountCoachmark" }),
        X = (function (e) {
            let { currentUserId: t, enabled: n } = e;
            r.useEffect(() => {
                null != t && n && !G.Ay.hasCatalogFor(t) && (0, w.R)(t);
            }, [t, n]);
            let i = (0, c.bG)([G.Ay], () => null != t && G.Ay.hasCatalogFor(t), [t]),
                a = (0, c.bG)(
                    [G.Ay],
                    () => (null != t ? G.Ay.getBadges(t).filter((e) => H.sC.has(e.badge_id) && e.owned).length : 0),
                    [t],
                );
            return n && null != t && i
                ? a > 0
                    ? { variant: "progress", newBadgeCount: a }
                    : { variant: "no-progress" }
                : null;
        })({ currentUserId: e?.id, enabled: Z });
    !D &&
        (q && W.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != X && W.avatar.push(u.M.BADGE_DIRECTORY_NUX_POPOVER),
        z && W.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: J, dismissTooltip: et } = rw(id.oh.AUDIO_INPUT),
        { shouldShowTooltip: en, dismissTooltip: ei } = rw(id.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: er, dismissTooltip: es } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([is.Ay], () => is.Ay.getMode() === id.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [il.A],
                    () => null != il.A.getChannelId() && (il.A.getDuration() ?? Number.MAX_VALUE) < ic,
                ),
                [a, s] = r.useState(!1),
                { showPTTJoinTooltip: l } = io.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = r.useRef(new _.Ep()),
                d = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((io.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !l)) return;
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
            }, [i, n, l, e]);
            let u = r.useCallback(() => {
                s(!1), o.current.stop();
            }, []);
            return (
                (0, N.l0)(() => {
                    o.current.stop(), d.current.stop();
                }),
                { shouldShowTooltip: a, dismissTooltip: u }
            );
        })(),
        el = (function () {
            let { showPTTSpeakingIndicator: e } = io.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([is.Ay], () => is.Ay.getMode() === id.TB.PUSH_TO_TALK),
                a = (0, c.bG)([il.A], () => il.A.getRTCConnectionId()),
                s = (0, c.bG)([is.Ay], () => {
                    let e = is.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < ih;
                }),
                l = r.useRef(new _.Ep());
            return (
                r.useEffect(() => {
                    n(!1);
                }, [a]),
                r.useEffect(() => {
                    let t = 0,
                        r = l.current;
                    function o(e, i) {
                        let a = (i & id.ME.VOICE) === id.ME.VOICE,
                            s = iE.A.isCurrentUserPTTActive();
                        a && !s
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(iA, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        s && e && i && null != a && is.Ay.getMediaEngine().on(i_.bg.VoiceActivity, o),
                        () => {
                            is.Ay.getMediaEngine().removeListener(i_.bg.VoiceActivity, o), r.stop();
                        }
                    );
                }, [e, i, s, a]),
                t
            );
        })(),
        eo = r.useMemo(() => (J ? "input" : en ? "output" : void 0), [J, en]),
        ec = r.useCallback(
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
    return (0, i.jsx)(P.f5, {
        value: F,
        children: (0, i.jsx)(rP, {
            currentUser: e,
            username: k,
            activities: n,
            applicationStream: l,
            voiceChannel: h,
            dismissibleContents: W,
            badgeDirectoryNuxPopoverVariant: X,
            userTag: A,
            occluded: D,
            selfDeaf: m,
            selfMute: f,
            serverDeaf: g,
            serverMute: I,
            speaking: d,
            voiceDb: E,
            speakingWhileMuted: R,
            speakingWhilePTTInactive: el,
            status: s,
            streaming: a,
            suppress: p,
            webBuildOverride: C,
            awaitingRemote: y,
            nameplate: V,
            selectedGuildId: v,
            avatarDecoration: x,
            isQuestBarEmpty: B,
            isListenAlongVisible: j,
            deviceChangedTooltipType: eo,
            onDismissDeviceChangedTooltip: () => ec(eo),
            shouldShowPTTJoinTooltip: er,
            dismissPTTJoinTooltip: es,
        }),
    });
}
