n.d(t, { g: () => lD, A: () => lF }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(435558),
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
    y = n(617498),
    S = n(866323),
    b = n(746306);
function M(e) {
    let { text: t } = e,
        n = (0, S.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(y.animated.div, { className: b.H, style: e, children: t })),
    });
}
var R = n(29160),
    k = n(793574),
    w = n(688810),
    O = n(992526),
    P = n(682618),
    L = n(982240),
    D = n(70283);
let U = [D.$.STREAMING, D.$.GAME_VARIETY, D.$.GAME_TIME, D.$.ACCOUNT_AGE];
var G = n(116833),
    F = n(43105),
    H = n(375708);
function V(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: H.intl.string(H.t.uwDBSq),
                  body: H.intl.formatToPlainString(H.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: H.intl.string(H.t["5GD53o"]), body: H.intl.string(H.t["2Rb7tE"]) };
    return (0, i.jsx)(F.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: G.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: H.intl.string(H.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
var B = n(470739),
    W = n(92111),
    Z = n(49999);
function z(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(V, {
        ...t,
        onPrimaryAction: () => {
            l(Z.i.TAKE_ACTION), (0, B._)();
        },
        onRequestClose: () => l(Z.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var K = n(521502),
    q = n(380610),
    Y = n(313961),
    $ = n(18235),
    X = n(183184),
    J = n(384059),
    Q = n(480890),
    ee = n(601255),
    et = n(562819),
    en = n(449582),
    ei = n(351952),
    el = n(88686),
    es = n(174755),
    ea = n(302223),
    er = n(248778),
    eo = n(609425),
    ed = n(922301),
    ec = n(660184),
    eu = n(643501),
    eh = n(297264),
    em = n(834730),
    ep = n(789645),
    eg = n(826673),
    ef = n(750506),
    eA = n(780964),
    ex = n(766075),
    ev = n(417146),
    eC = n(552122),
    eE = n(717421),
    eT = n(775602),
    e_ = n(186491);
let eI = { mass: 10, tension: 550, friction: 140 };
function ej(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, c.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        [r, d] = l.useState({ x: 0, y: 0 }),
        u = l.useMemo(
            () =>
                o().throttle((e) => {
                    s || d({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, s],
        );
    l.useEffect(() => (window.addEventListener("mousemove", u), () => window.removeEventListener("mousemove", u)), [u]);
    let [h, m] = (0, eE.z)(() => ({ x: 0, y: 0, config: eI }));
    return (
        l.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, i.jsx)(y.animated.div, {
            style: { transform: (0, y.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(e_.T, t),
        })
    );
}
var eN = n(364163);
function ey(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: l } = e,
        s = eC.A.useIsEligible(),
        a = (0, eg.HX)(t),
        r = null != n,
        o = null != l ? { color: l } : void 0,
        { analyticsLocations: d } = (0, w.Ay)(k.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, eg.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, ex.openUserSettings)(eA.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(Z.i.TAKE_ACTION);
    }
    return s && !a
        ? (0, i.jsx)(ef.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eN.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, i.jsxs)("div", {
                              className: eN.o5,
                              children: [
                                  (0, i.jsx)(ej, { className: eN.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eN.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eN.c8 }),
                      (0, i.jsxs)("div", {
                          className: eN.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(eh.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: H.intl.string(H.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(em.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: H.intl.format(H.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      f.D,
                                                      {
                                                          tag: "span",
                                                          className: eN.nf,
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
                                  className: eN.l2,
                                  onClick: () => c(Z.i.USER_DISMISS),
                                  children: (0, i.jsx)(ep.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eS() {
    return null == ev.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ey, {
              dismissibleContent: ev.A.coachmarkDismissibleContent,
              backgroundColor: ev.A.coachmarkBackgroundColor,
              specialTextColor: ev.A.coachmarkSpecialTextColor,
          });
}
var eb = n(74848),
    eM = n(607399),
    eR = n(707554),
    ek = n(224640),
    ew = n(305866),
    eO = n(364522),
    eP = n(22231),
    eL = n(812993),
    eD = n(133171),
    eU = n(780338);
if (21552 != n.j) var v = n(192308);
var eG = n(980707),
    eF = n(26137),
    eH = n(473935),
    eV = n(765671),
    eB = n(783041),
    eW = n(176781),
    eZ = n(320448),
    ez = n(993401),
    eK = n(890717);
function eq(e) {
    return (0, i.jsx)("div", {
        className: eK.wE,
        children: (0, i.jsx)(eG.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eY(e) {
    let {
            action: t,
            onClick: n,
            icon: s,
            label: a,
            sublabel: r,
            trailing: o,
            renderSubmenu: d,
            ref: c,
            submenuTargetElementRef: u,
            submenuAlign: h,
        } = e,
        m = null != n,
        p = (0, ez.rE)({ action: t, onClick: n }),
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
                (0, i.jsx)("div", { className: eK.iA, children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eK.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(em.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eK.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(em.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function y(e) {
        let t;
        return (
            (t = _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.D, { className: eK.ef, onClick: p, children: N() }),
                          (0, i.jsx)(f.D, {
                              className: eK.ap,
                              "aria-label": H.intl.string(H.t.PdRCRg),
                              ...e,
                              onClick: I,
                              children: (0, i.jsx)(eZ._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : T
                  ? (0, i.jsxs)(f.D, {
                        className: eK.ef,
                        ...e,
                        onClick: I,
                        children: [
                            N(),
                            (0, i.jsx)("div", {
                                className: eK.ap,
                                children: (0, i.jsx)(eZ._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(f.D, { className: eK.ef, onClick: p, children: N() })),
            (0, i.jsx)("div", { ref: E, className: eK.jG, children: t })
        );
    }
    return T
        ? (0, i.jsx)("li", {
              className: eK.j$,
              onMouseEnter: I,
              onMouseLeave: j,
              children: (0, i.jsx)(g.Y, {
                  targetElementRef: u ?? E,
                  align: h,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: j,
                  children: y,
              }),
          })
        : (0, i.jsx)("li", { className: eK.j$, children: y() });
}
function e$(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eX = n(734066),
    eJ = n(915725),
    eQ = n(409067),
    e0 = n(271597),
    e1 = n(475358),
    e2 = n(866665),
    e3 = n(408278),
    e6 = n(625903),
    e5 = n(404778),
    e4 = n(689175),
    e7 = n(821609),
    e8 = n(532624),
    e9 = n(927813),
    te = n(879631),
    tt = n(350535),
    tn = n(372684),
    ti = n(974293),
    tl = n(572164),
    ts = n(953932),
    ta = n(280483),
    tr = n(890856),
    to = n(713517),
    td = n(609174),
    tc = n(619744);
function tu(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        s = (0, td.Y_)(),
        a = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, e0.p)({ initialEditingClipId: s.id });
            },
            [s, t],
        );
    return (0, i.jsx)(e7.$, {
        onClick: a,
        icon: eP.R,
        variant: n,
        size: "sm",
        text: H.intl.string(H.t.bt75uw),
        fullWidth: !0,
    });
}
var th = n(82716),
    tm = n(585579),
    tp = n(930317),
    tg = n(285072),
    tf = n(13769);
let tA = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: r } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: d } = (0, to.A)(o),
        c = l.useCallback(() => {
            s?.(), (0, e0.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(td.Cl, {
        clip: t,
        children: (0, i.jsx)(tr.s, {
            ref: o,
            "aria-label": H.intl.string(H.t.bt75uw),
            onClick: c,
            className: a()(tf.Z1, r),
            children: (0, i.jsxs)(tp.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eL.Lp, { className: tf.Ad, text: H.intl.string(H.t.y2b7CA) }),
                    (0, i.jsxs)(tg.h, {
                        isVisible: d,
                        className: tf.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tf.mY,
                                children: [(0, i.jsx)(th.z, {}), (0, i.jsx)(tc.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tf.E_,
                                children: [
                                    (0, i.jsx)(tu, { onBeforeEdit: s, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tm.E, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tx = n(652215),
    tv = n(753070),
    tC = n(16590),
    tE = n(301414);
function tT(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e;
    (0, ta.A)();
    let r = (0, c.yK)([eJ.Ay], () => Object.values(eJ.Ay.getClips())),
        o = (0, c.bG)([eJ.Ay], () => eJ.Ay.getSettings()),
        d = (0, c.bG)([eJ.Ay], () => eJ.Ay.getNewClipIds()),
        u = (0, ti.aJ)("ClipsPopout"),
        h = (0, c.bG)([eJ.Ay], () => eJ.Ay.getEnableAutoclipping()),
        m = (0, c.bG)([e8.Ay], () => e8.Ay.getKeybindForAction(tx.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                a?.(e);
            },
            [a],
        ),
        g = !o.showPovClipsInGallery,
        f = l.useMemo(() => {
            let e = r.filter((e) => e.type === tn.nQ.CLIP && "" !== e.thumbnail && (!g || !(0, eQ.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, g]),
        A = l.useMemo(() => f.slice(0, 16), [f]),
        x = f.length > 16,
        v = null != m ? tt.dI(m.shortcut, !0) : null,
        C = [
            (0, te.$)(o.clipsLength / e9.A.Millis.SECOND),
            (0, tv.zr)(o.clipsQuality.resolution),
            H.intl.formatToPlainString(H.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && C.push(H.intl.string(tC.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tE.SW,
            role: "dialog",
            "aria-label": H.intl.string(H.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tE.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tE.$,
                            children: [
                                (0, i.jsx)(eh.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: H.intl.string(H.t.z2jK6X),
                                }),
                                null != v && (0, i.jsx)(e1.e, { className: tE.P, shortcut: v }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tE.$s,
                            children: [
                                (0, i.jsx)(e2.m, {
                                    text: H.intl.string(H.t["3D5yo/"]),
                                    children: (0, i.jsx)(e3.K, {
                                        onClick: () => n(),
                                        icon: e6.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": H.intl.string(H.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(e2.m, {
                                    text: H.intl.string(tC.default["55C2MH"]),
                                    children: (0, i.jsx)(e3.K, {
                                        onClick: () => t(),
                                        icon: eW.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": H.intl.string(tC.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tE.ov,
                    children: [
                        C.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tE.LO, children: "\u2022" }),
                                        (0, i.jsx)(em.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tE.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        u &&
                            (0, i.jsx)(em.E, {
                                variant: "text-xs/semibold",
                                color: h ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tE.wS,
                                children: h ? H.intl.string(tC.default.lTwKmt) : H.intl.string(tC.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(e5.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(e4.Ch, {
                          className: tE.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tA, { clip: e, isNew: d.includes(e.id), onClose: s }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tE.qr,
                                      children: (0, i.jsx)(e7.$, {
                                          onClick: () => t(),
                                          text: H.intl.string(tC.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(t_, { keybindString: v }),
            ],
        })
    );
}
function t_(e) {
    let { keybindString: t } = e,
        n = (0, tl.Et)();
    return (0, i.jsxs)("div", {
        className: tE.p$,
        children: [
            (0, i.jsx)(em.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tE.qO,
                children: H.intl.string(tC.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(em.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tE.CZ,
                      children: H.intl.format(tC.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  em.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(e1.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(ts.A, {}),
        ],
    });
}
function tI(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        s = (0, eX.sw)(),
        a = !(0, c.bG)([eJ.Ay], () => eJ.Ay.getSettings().showPovClipsInGallery),
        r = (0, c.bG)([eJ.Ay], () => {
            let e = eJ.Ay.getNewClipIds();
            return a
                ? e.filter((e) => {
                      let t = eJ.Ay.getClipById(e);
                      return null != t && !(0, eQ.kD)(t);
                  }).length
                : e.length;
        }, [a]),
        o = l.useCallback(
            (e) => {
                t(), (0, e0.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        d = l.useCallback(() => {
            t(), (0, ex.openUserSettings)(eA.X.CLIPS_PANEL);
        }, [t]);
    return s
        ? (0, i.jsx)(eY, {
              action: "PRESS_CLIPS",
              icon: eW.x,
              label: H.intl.string(H.t.z2jK6X),
              trailing: r > 0 ? (0, i.jsx)(eL.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tT, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tj = n(480335),
    tN = n(577390),
    ty = n(372320),
    tS = n(31956),
    tb = n(744808),
    tM = n(645507),
    tR = n(131607),
    tk = n(970931),
    tw = n(315710),
    tO = n(832248),
    tP = n(462887),
    tL = n(736653),
    tD = n(439174),
    tU = n(428262),
    tG = n(878784),
    tF = n(202541);
function tH() {
    let e = (0, tG.Xb)(),
        t = (0, tU.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tF.sp.length - 1; t >= 0; t--) {
        let i = tF.VD[tF.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tV = {
        [tF.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tF.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tF.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tF.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tF.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tF.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tF.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tF.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tB = {
        [tF.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tF.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tF.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tF.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tF.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tF.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tF.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tF.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tW = n(620701);
let tZ = l.lazy(() => Promise.all([n.e("3379"), n.e("24832")]).then(n.bind(n, 748579)));
function tz() {
    let e = (0, c.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        t = (0, tO.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tH(),
                t = (0, tP.M)((0, tL.Ay)());
            if (null == e) return null;
            let n = tV[e],
                i = tB[e],
                l = {
                    currentBadge: (0, tD.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tF.sp.indexOf(e);
            if (s > 0) {
                let e = tF.sp[s - 1],
                    n = tV[e];
                (l.prevBadge = (0, tD.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return l;
        })(),
        [s, a] = l.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tK, { levelUpData: s });
}
function tK(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        s = l.useCallback(() => {
            tO.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tw.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tW.i,
            children: [
                (0, i.jsx)("div", {
                    className: tW.b,
                    children: (0, i.jsx)(e2.m, {
                        text: H.intl.string(H.t.cpT0Cq),
                        children: (0, i.jsx)(e3.K, {
                            icon: ep.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": H.intl.string(H.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tZ, { levelUpData: t }) }),
            ],
        }),
    });
}
var tq = n(206835),
    tY = n(183555),
    t$ = n(999291),
    tX = n(975732),
    tJ = n(718019),
    tQ = n(413492),
    t0 = n(915614),
    t1 = n(744753),
    t2 = n(559506),
    t3 = n(646986),
    t6 = n(349419),
    t5 = n(946356),
    t4 = n(878555),
    t7 = n(624479),
    t8 = n(206845),
    t9 = n(957565),
    ne = n(427262),
    nt = n(966184);
function nn(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tY.NJ)();
    return t9.p5
        ? (0, i.jsx)(t8.A, {
              text: H.intl.string(H.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: ne.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(f.D, {
                      ...e,
                      className: a()(nt.c, { [nt.R]: n }),
                      "aria-label": H.intl.string(H.t.y5MwJy),
                      children: (0, i.jsx)(t7.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var ni = n(983495),
    nl = n(442228),
    ns = n(885386),
    na = n(290863),
    nr = n(351906),
    no = n(562153),
    nd = n(661531),
    nc = n(477782),
    nu = n(628284),
    nh = n(695366),
    nm = n(363195),
    np = n(889227),
    ng = n(287809),
    nf = n(174459),
    nA = n(429707),
    nx = n(274303),
    nv = n(994125),
    nC = n(347853),
    nE = n(573879),
    nT = n(570660),
    n_ = n(661439),
    nI = n(385113),
    nj = n(352003),
    nN = n(429913),
    ny = n(334074),
    nS = n(633075),
    nb = n(667049),
    nM = n(280450),
    nR = n(90165),
    nk = n(403362),
    nw = n(518477);
function nO(e) {
    let { targetElementRef: t, onClose: s } = e,
        [a, r] = l.useState(!1),
        o = (0, c.bG)([nM.default], () => nM.default.getId()),
        { eligibleApplications: d, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([nI.A], () => nI.A.getFeaturedApplicationIds());
            (0, nj.A)(e),
                l.useEffect(() => {
                    (0, n_.X)();
                }, []);
            let t = (0, c.bG)([nM.default], () => nM.default.getId()),
                n = (0, nb.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nS.R), [n]),
                s = (0, nN.A)(e),
                a = l.useMemo(() => s.filter(nk.Vq), [s]),
                r = (0, c.cf)([nR.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nR.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return a.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = r[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [a, i, r]),
                { eligibleToShow: d, markAsDismissed: h } = (0, ny.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: ny.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => d.includes(e.id)), [o, d]),
                markAsDismissed: h,
            };
        })();
    return ((0, l.useEffect)(() => {
        0 !== d.length &&
            Promise.all([
                n.e("99136"),
                n.e("25162"),
                n.e("78931"),
                n.e("35285"),
                n.e("53969"),
                n.e("92515"),
                n.e("46099"),
                n.e("33707"),
                n.e("79238"),
                n.e("57533"),
                n.e("6915"),
                n.e("27324"),
                n.e("16331"),
                n.e("78386"),
                n.e("9140"),
                n.e("72781"),
                n.e("47413"),
                n.e("48333"),
                n.e("83607"),
                n.e("83663"),
                n.e("10211"),
                n.e("9398"),
                n.e("2285"),
                n.e("97726"),
                n.e("8571"),
                n.e("97422"),
                n.e("84401"),
                n.e("52123"),
                n.e("72150"),
                n.e("26441"),
                n.e("12823"),
                n.e("1787"),
                n.e("47906"),
                n.e("65751"),
                n.e("41893"),
                n.e("57885"),
                n.e("57504"),
                n.e("1517"),
                n.e("4240"),
                n.e("98942"),
                n.e("31076"),
                n.e("66806"),
                n.e("26572"),
                n.e("39737"),
                n.e("85391"),
                n.e("56356"),
                n.e("29062"),
                n.e("5270"),
                n.e("42293"),
                n.e("44018"),
                n.e("60574"),
                n.e("82222"),
                n.e("23102"),
                n.e("42394"),
                n.e("44459"),
                n.e("98986"),
                n.e("18379"),
                n.e("21133"),
                n.e("60061"),
                n.e("44083"),
                n.e("62329"),
                n.e("18917"),
                n.e("94450"),
                n.e("86307"),
                n.e("3574"),
                n.e("711"),
                n.e("73153"),
                n.e("18151"),
                n.e("10543"),
                n.e("40981"),
                n.e("75030"),
                n.e("58235"),
                n.e("51869"),
                n.e("50693"),
                n.e("6487"),
                n.e("69794"),
                n.e("20661"),
                n.e("69190"),
                n.e("18315"),
                n.e("17776"),
                n.e("78969"),
                n.e("77770"),
                n.e("61275"),
                n.e("49557"),
                n.e("30072"),
                n.e("18629"),
                n.e("48227"),
                n.e("37175"),
                n.e("13920"),
                n.e("99424"),
                n.e("670"),
                n.e("99496"),
                n.e("44565"),
                n.e("88563"),
                n.e("24212"),
                n.e("20459"),
                n.e("1301"),
                n.e("55983"),
                n.e("47519"),
                n.e("80197"),
                n.e("48132"),
                n.e("61686"),
                n.e("91778"),
                n.e("94757"),
                n.e("97312"),
                n.e("38469"),
                n.e("9937"),
                n.e("84126"),
                n.e("24271"),
                n.e("11351"),
                n.e("56649"),
                n.e("94373"),
                n.e("42205"),
                n.e("55675"),
                n.e("27962"),
                n.e("68201"),
                n.e("64827"),
                n.e("63232"),
                n.e("7167"),
                n.e("10471"),
                n.e("84569"),
                n.e("61060"),
                n.e("54484"),
                n.e("60235"),
                n.e("77333"),
                n.e("6338"),
                n.e("47834"),
                n.e("18573"),
                n.e("78157"),
                n.e("44057"),
                n.e("53782"),
                n.e("88774"),
                n.e("31988"),
                n.e("44571"),
                n.e("34303"),
                n.e("40291"),
                n.e("2368"),
                n.e("33115"),
                n.e("97270"),
                n.e("73122"),
                n.e("8304"),
                n.e("93159"),
                n.e("55936"),
                n.e("89088"),
                n.e("69294"),
                n.e("94723"),
                n.e("62931"),
                n.e("45959"),
                n.e("58529"),
                n.e("58038"),
                n.e("71202"),
                n.e("62531"),
                n.e("44230"),
                n.e("6174"),
                n.e("93103"),
                n.e("34552"),
                n.e("7170"),
                n.e("36877"),
                n.e("8757"),
                n.e("72963"),
                n.e("7575"),
                n.e("54241"),
                n.e("24303"),
                n.e("21930"),
                n.e("14761"),
                n.e("85968"),
                n.e("68403"),
                n.e("88599"),
                n.e("75842"),
                n.e("29787"),
                n.e("71273"),
                n.e("9640"),
                n.e("52548"),
                n.e("53984"),
                n.e("43780"),
                n.e("29963"),
                n.e("38513"),
                n.e("63645"),
                n.e("23532"),
                n.e("52557"),
                n.e("63123"),
                n.e("834"),
                n.e("24038"),
                n.e("76273"),
                n.e("55654"),
                n.e("50097"),
                n.e("80445"),
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
                n.e("71294"),
                n.e("96574"),
                n.e("4374"),
                n.e("86546"),
                n.e("82969"),
                n.e("95118"),
                n.e("37065"),
                n.e("43256"),
                n.e("81004"),
                n.e("41384"),
                n.e("16956"),
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
                n.e("2454"),
                n.e("71367"),
                n.e("75072"),
                n.e("69443"),
                n.e("49282"),
                n.e("35683"),
                n.e("2091"),
            ]).then(n.bind(n, 577593));
    }, [d.length]),
    0 === d.length)
        ? null
        : (0, i.jsx)(F.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/ea1ea066f1312b56d74e16232ca7da602ee5fc0206f0ea9ecc130e5094334683.svg",
              },
              title: H.intl.string(H.t.HMWL9c),
              body: H.intl.string(H.t["9hfy3A"]),
              onRequestClose: () =>
                  h(
                      d.map((e) => e.id),
                      Z.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: H.intl.string(H.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          r(!0),
                              (0, tX.openUserProfileModal)({ userId: o, tabSection: nw.RP.WIDGETS })
                                  .then(() => {
                                      let e = d.map((e) => e.id);
                                      (0, v.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("84126"),
                                                  n.e("24271"),
                                                  n.e("30794"),
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
                                              Z.i.TAKE_ACTION,
                                          ),
                                          s();
                                  })
                                  .finally(() => r(!1));
                      },
                  },
              ],
          });
}
var nP = n(461213),
    nL = n(818348),
    nD = n(373765);
function nU() {
    let e = (0, c.bG)([nP.A], () => nP.A.getStatus()),
        t = (0, ne.MU)(e) ?? "",
        n = e === nL.cl.INVISIBLE || e === nL.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nD.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [H.intl.string(H.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(e2.m, {
                    text: H.intl.string(H.t.L99HQm),
                    children: (0, i.jsx)(nh.E, {
                        size: "xs",
                        color: nd.A.colors.STATUS_WARNING,
                        "aria-label": H.intl.string(H.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nG = n(379848),
    nF = n(321191);
let nH = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nV = n(501838),
    nB = n(760716),
    nW = n(915089),
    nZ = n(284600);
function nz(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: r,
            height: o,
            className: d,
            contentClassName: c,
        } = e,
        u = (0, nW.GV)(),
        h = l.useRef(null),
        m = (0, eE.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, i.jsx)(y.animated.div, {
        className: a()(nZ.kL, d),
        style: m,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nZ.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nZ.U1,
                    children: [
                        (0, i.jsx)(f.D, {
                            innerRef: h,
                            "aria-label": H.intl.string(H.t.WAI6xu),
                            className: nZ.b,
                            onClick: () => {
                                t(Z.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(ep.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(eh.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(em.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(eO.Ip, {
                    className: nZ.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nZ.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nK = n(889586),
    nq = n(973912),
    nY = n(871123),
    n$ = n(44724),
    nX = n(522445);
function nJ() {
    (0, n$.default)({ guildId: (0, nY.zf)() });
}
function nQ(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e;
    return null == t ? null : (0, i.jsx)(n0, { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l });
}
function n0(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e,
        { analyticsLocations: s } = (0, w.Ay)([k.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]),
        { items: a } = (0, nK.L)({ userId: t, numWishlistItemsToRecommend: 9 });
    return 0 === a.length
        ? null
        : (0, i.jsxs)(nz, {
              heading: H.intl.string(H.t["vy/61K"]),
              subheading: H.intl.string(H.t.tEee9t),
              markAsDismissed: l,
              className: nX.Zj,
              contentClassName: nX.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nq.A, {
                      items: a,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      className: nX.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nX.UD,
                      children: (0, i.jsx)(e7.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: H.intl.string(H.t.rg9FQp),
                          onClick: nJ,
                      }),
                  }),
              ],
          });
}
function n1(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nH.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([ng.default], () => ng.default.getCurrentUser()),
                s = (0, c.bG)([nF.A], () => (null != i ? nF.A.getFirstWishlistId(i.id) : null)),
                a = (0, nB.i)((e) => e.recommendationApplicationIds),
                o = (0, nV.rY)(),
                d = (0, nV.qx)();
            return l.useMemo(
                () => (null != a || (null == s && n) ? (0, r.uniq)([...(a ?? []), ...d, ...o]).sort() : []),
                [n, s, d, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = l.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nG.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: a } = e;
            return null == s
                ? null
                : l === u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nQ, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var n2 = n(146901),
    n3 = n(827827);
let n6 = [
        { duration: 15 * e9.A.Millis.MINUTE, label: () => H.intl.string(H.t["8ot6gv"]) },
        { duration: e9.A.Millis.HOUR, label: () => H.intl.string(H.t.UMWBZr) },
        { duration: 8 * e9.A.Millis.HOUR, label: () => H.intl.string(H.t.EpAXPC) },
        { duration: e9.A.Millis.DAY, label: () => H.intl.string(H.t["755t4q"]) },
        { duration: 3 * e9.A.Millis.DAY, label: () => H.intl.string(H.t["f3/1ch"]) },
        { duration: void 0, label: () => H.intl.string(H.t["46dqJY"]) },
    ],
    n5 = "forever";
function n4(e) {
    let { status: t, currentStatus: n, description: l } = e,
        s = t !== tx.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: n6.map((e) => {
                let { duration: l, label: s } = e;
                return (0, i.jsx)(
                    nc.Dr,
                    {
                        id: `${t}-${l}`,
                        label: s(),
                        action: () => (0, n3.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? n5,
                );
            }),
        });
    return (0, i.jsx)(nc.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, ne.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eD.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n3.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function n7(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, n2._)(e);
    return "today" === t
        ? H.intl.formatToPlainString(H.t.ZxxHIO, { timeString: i })
        : H.intl.formatToPlainString(H.t["9OFjSe"], { dateString: n, timeString: i });
}
var n8 = n(996988),
    n9 = n(83260);
function ie(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s, highlightBadge: r, openedAt: o, className: d } = e,
        h = __OVERLAY__,
        g = (0, t$.Ay)(t.id, void 0),
        { analyticsLocations: f } = (0, w.Ay)(k.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tY.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: C, height: E } = (0, eV.Ay)(),
        { isHoveringOrFocusing: T, isHovering: _ } = (0, to.A)(C);
    l.useEffect(() => {
        s?.(C.current);
    }, [C, s]),
        l.useEffect(
            () => (tO.A.setState({ isOpen: !0 }), () => tO.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let I = (0, c.bG)([na.A], () => na.A.getStatus(t.id)),
        j = n7(ns.CY.useSetting()),
        N = (0, c.bG)([nr.A], () => nr.A.hidePersonalInformation),
        y = (0, tk.kB)(),
        S = ns.Q_.useSetting(),
        b = (function (e) {
            let t = ns.CY.useSetting(),
                n = (0, tk.kB)(),
                l = ns.Jr.useSetting();
            function s(i) {
                let l = n7(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tx.clD.DND:
                        return n ? H.intl.string(H.t.day5A6) : H.intl.string(H.t["tq/fMK"]);
                    case tx.clD.INVISIBLE:
                        return H.intl.string(H.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: n6.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            nc.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tk.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n5,
                        );
                    }),
                }),
                r = n4({ status: tx.clD.ONLINE, currentStatus: e }),
                o = n4({ status: tx.clD.IDLE, currentStatus: e, description: s(tx.clD.IDLE) }),
                d = n4({ status: tx.clD.DND, currentStatus: e, description: s(tx.clD.DND) }),
                c = n4({ status: tx.clD.INVISIBLE, currentStatus: e, description: s(tx.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    r,
                    (0, i.jsx)(nc.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(nc.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      nc.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: H.intl.string(H.t.gJRnwK),
                                          iconLeft: eU.a,
                                          leadingAccessory: { type: "icon", icon: eU.a },
                                          badge: { text: H.intl.string(H.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? H.intl.format(H.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            H.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : H.intl.string(H.t["Br1q+x"]),
                                          action: () => {
                                              (0, tk.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: a,
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
            let t = (0, c.bG)([ng.default], () => ng.default.getCurrentUser()),
                n = (0, c.bG)([nr.A], () => nr.A.hidePersonalInformation),
                l = (0, c.bG)([nm.A], () => (0, tP.M)(nm.A.theme)),
                { multiAccountUsers: s } = (0, nv.K)(),
                a = s.map((s) => {
                    let a = new np.A(s),
                        r = a.id === t?.id,
                        o = s.tokenStatus === nx.U.INVALID,
                        d = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        nc.Dr,
                        {
                            id: a.id,
                            focusedClassName: nT.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nT.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nT.DD,
                                            children: [
                                                (0, i.jsx)(em.E, {
                                                    className: nT.gE,
                                                    variant: "text-sm/normal",
                                                    children: ne.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(em.E, {
                                                        className: nT.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(nu.y, {
                                                size: "sm",
                                                color: t
                                                    ? nd.A.unsafe_rawColors.WHITE.css
                                                    : nd.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nd.A.unsafe_rawColors.BRAND_500.css
                                                        : nd.A.unsafe_rawColors.WHITE.css,
                                                className: nT.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nh.E, {
                                                color: nd.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nd.A.unsafe_rawColors.BRAND_500.css
                                                        : nd.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nT.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nC.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nf.default.track(tx.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tx.JJy.USER_PROFILE },
                                        }),
                                        nA.Mx(n, void 0, nE.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        a.id,
                    );
                });
            return (
                a.push(
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(nc.bX, {}),
                            (0, i.jsx)(nc.Dr, {
                                id: "manage-accounts",
                                label: H.intl.string(H.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nC.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        R = (0, tq.A)({ analyticsLocations: f }),
        O = (0, tU.TW)(t),
        P = l.useRef(null),
        L = l.useRef(null),
        D = (0, ty.A)(g?.profileFrame?.skuId, "UserProfileAccountPopout"),
        U = (0, tN.A)(g?.profileFrame?.skuId);
    (0, tS.A)({ skuId: g?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: f });
    let G = l.useRef((0, tO.A)((e) => e.shouldRenderTenureLevelUp)),
        F = l.useMemo(() => (0, tM.A)(), []),
        [V, B] = l.useState(() => tO.A.getState().shouldRenderTenureLevelUp);
    function W(e) {
        n?.(), (0, tX.openUserProfileModal)({ customStatusPrompt: F, sourceAnalyticsLocations: f, ...x, ...e });
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
        { enabled: Y } = eB.A.useConfig({ location: "UserProfileAccountPopout" }),
        $ = (0, er.ux)("UserProfileAccountPopout"),
        [X, J] = (0, tR.kn)($ ? [u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE] : []),
        Q = X === u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
        ee = l.useId();
    return (0, i.jsx)(w.f5, {
        value: f,
        children: (0, i.jsx)(tY.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: g?.fetchStartedAt,
            fetchEndedAt: g?.fetchEndedAt,
            isLoaded: g?.isLoaded,
            children: (0, i.jsxs)(ew.l, {
                ref: C,
                "aria-labelledby": ee,
                className: a()(eK.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, { children: (0, i.jsx)(eR.H, { id: ee, children: H.intl.string(H.t["5fWB8U"]) }) }),
                    (0, i.jsxs)(eR.F, {
                        children: [
                            (0, i.jsx)(n1, { displayProfile: g, handleOpenUserProfileModal: W, height: E }),
                            (0, i.jsxs)(t5.A, {
                                className: eK.BK,
                                user: t,
                                displayProfile: g,
                                themeType: n8.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n9.wx,
                                        children: [
                                            (0, i.jsx)(t0.A, { user: t, displayProfile: g, themeType: n8.d.POPOUT }),
                                            (0, i.jsx)(tJ.A, {
                                                user: t,
                                                displayProfile: g,
                                                themeType: n8.d.POPOUT,
                                                onOpenProfile: h ? void 0 : W,
                                            }),
                                            (0, i.jsx)(ni.A, {
                                                ref: P,
                                                user: t,
                                                themeType: n8.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: F,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eO.Ip, {
                                        className: eK.rf,
                                        style: { pointerEvents: V ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(t2.A, { userId: t.id }),
                                            (0, i.jsx)(t4.Ay, {
                                                className: eK.eF,
                                                user: t,
                                                displayName: no.Ay.getName(void 0, null, t),
                                                onClickName: h ? void 0 : W,
                                                displayNameTrailing: (0, i.jsx)(nn, { user: t, isVisible: T }),
                                                pronouns: g?.pronouns,
                                                trailing: (0, i.jsx)(tQ.A, {
                                                    displayProfile: g,
                                                    themeType: n8.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: G.current,
                                                }),
                                            }),
                                            (0, i.jsx)(t1.A, { isPremiumUser: O, onInteraction: n }),
                                            (0, i.jsx)(nl.A, {
                                                userId: t.id,
                                                userBio: g?.bio,
                                                hidePersonalInformation: N,
                                                onClose: n,
                                            }),
                                            z &&
                                                (0, i.jsx)(t6.A, {
                                                    user: t,
                                                    widgets: g?.widgets,
                                                    onOpenUserProfileModal: W,
                                                }),
                                            (0, i.jsx)(t3.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: W,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eK.T_,
                                                children: [
                                                    (0, i.jsx)(t5.A.Overlay, {
                                                        className: eK.g0,
                                                        children: (0, i.jsxs)(e$, {
                                                            children: [
                                                                (0, i.jsx)(eY, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: H.intl.string(H.t.s5vZlQ),
                                                                    icon: eP.R,
                                                                    trailing:
                                                                        Q &&
                                                                        (0, i.jsx)(eL.Lp, {
                                                                            text: H.intl.string(H.t.y2b7CA),
                                                                            "aria-hidden": !0,
                                                                        }),
                                                                    onClick: () => {
                                                                        Q && J(Z.i.TAKE_ACTION), q();
                                                                    },
                                                                    ref: L,
                                                                }),
                                                                (0, i.jsx)(eY, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nU, {}),
                                                                    sublabel: null != j && j,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eD.nW, { status: I, size: 12 }),
                                                                    trailing:
                                                                        (y || I === tx.clD.DND) &&
                                                                        (0, i.jsx)(eU.a, { size: "xxs" }),
                                                                    renderSubmenu: eM.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eq, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eK.hQ,
                                                                                  "aria-label": H.intl.string(
                                                                                      H.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: b,
                                                                              });
                                                                          },
                                                                    onClick: eM.Fr
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
                                                                                                      ek.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              H.intl.string(
                                                                                                                  H.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eG.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  H.intl.string(
                                                                                                                      H
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
                                                                (0, i.jsx)(tI, { onClose: n, popoutContainerRef: C }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(t5.A.Overlay, {
                                                        className: eK.g0,
                                                        children: (0, i.jsxs)(e$, {
                                                            children: [
                                                                (0, i.jsx)(eY, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eF.r,
                                                                    label: H.intl.string(H.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nC.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eq, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": H.intl.string(H.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: M,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t9.p5 &&
                                                                    S &&
                                                                    (0, i.jsx)(eY, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eH.L,
                                                                        label: H.intl.string(H.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t9.C)(t.id), n();
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
                                        !G.current &&
                                        (0, i.jsx)(tj.A, { skuId: g.profileEffect.skuId, isHovering: _ }),
                                    null != D && (0, i.jsx)(tb.A, { frame: D, fadeIn: U }),
                                ],
                            }),
                            Y && (0, i.jsx)(nO, { targetElementRef: L, onClose: n }),
                            (0, i.jsx)(tz, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var it = n(764336),
    ii = n(655116),
    il = n(106531),
    is = n(148411),
    ia = n(342296),
    ir = n(852712),
    io = n(167579),
    id = n(173660),
    ic = n(186295),
    iu = n(763827),
    ih = n(499156),
    im = n(731854);
let ip = 2.5 * e9.A.Millis.SECOND,
    ig = +e9.A.Millis.HOUR;
var iA = n(459838),
    ix = n(485296);
let iv = 3 * e9.A.Millis.SECOND,
    iC = +e9.A.Millis.DAY;
var iE = n(616356),
    iT = n(734057),
    i_ = n(629016),
    iI = n(186111),
    ij = n(967198),
    iN = n(486020),
    iy = n(625494),
    iS = n(536194),
    ib = n(19575),
    iM = n(994314),
    iR = n(485599),
    ik = n(338854);
function iw(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: s, shouldShow: a = !0, children: r } = e,
        o = (0, eX.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            a && o
                ? (0, i.jsx)(ik.H, {
                      targetElementRef: t,
                      title: H.intl.string(tC.default.Qn21R6),
                      body: H.intl.string(tC.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: s,
                      caretConfig: { align: "center" },
                      action: {
                          text: H.intl.string(H.t.RzWDqY),
                          onClick: function () {
                              n(Z.i.TAKE_ACTION), l();
                          },
                      },
                      onRequestClose: function () {
                          n(Z.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iO = n(626584),
    iP = n(757036),
    iL = n(591179),
    iD = n(531685),
    iU = n(259065),
    iG = n(864386);
let iF = new iO.A("DisplayNameStylesFlywheelCoachmark");
function iH(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, w.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, c.bG)([iD.A], () => iD.A.isFocused()),
        d = (0, iP.L)(tF.PremiumTypes.TIER_2),
        u = (0, iL.X)("DisplayNameStylesFlywheelCoachmark"),
        h = (0, l.useCallback)(() => {
            t(Z.i.TAKE_ACTION);
            let e = ng.default.getCurrentUser();
            u && null != e
                ? (0, tX.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: a,
                      onModalOpen: () => {
                          (0, iU.L)({ analyticsLocations: a, stackingBehavior: "stack" });
                      },
                  })
                : (0, ex.openUserSettings)(eA.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                      (0, iU.L)({ analyticsLocations: a });
                  });
        }, [t, a, u]),
        m = (0, l.useCallback)(() => {
            t(Z.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iF.error) : o || r.current?.pause();
    }, [o]);
    let p = d ? [H.intl.string(iG.default.TyUdka)] : [H.intl.string(iG.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            (0, i.jsx)(F.A, {
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
                title: H.intl.string(iG.default.cYwrp8),
                body: p,
                actions: [{ text: H.intl.string(H.t["4P5I8V"]), variant: "primary", onClick: h }],
            }),
        ],
    });
}
var iV = n(45780),
    iB = n(696451),
    iW = n(71393),
    iZ = n(685073),
    iz = n(228366);
let iK = { lastSeenInfos: {} },
    iq = iK;
class iY extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iq = e ?? iK;
    }
    getState() {
        return iq;
    }
    getGuildLastSeenInfo(e) {
        return iq.lastSeenInfos[e] ?? null;
    }
}
let i$ = new iY(iz.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iq.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iq = iK;
    },
});
var iX = n(514661);
let iJ = new iO.A("GuildTagAvailableCoachmark");
function iQ(e) {
    let t = (0, c.bG)([iW.A], () => iW.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iz.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: l, onAdoptTag: s, onEditProfile: a } = (0, iX.A)(t?.id ?? null, () => n(Z.i.TAKE_ACTION));
    if (null == t || !(0, iZ.q0)(t))
        return iJ.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: H.intl.string(H.t.jwEaiX), loading: l, onClick: s, variant: "primary" },
        { text: H.intl.string(H.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(F.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: G.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: H.intl.formatToPlainString(H.t["m/Tc3n"], { guildName: t.name }),
                body: H.intl.string(H.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(Z.i.USER_DISMISS),
            }),
        ],
    });
}
function i0(e) {
    let t = (0, c.bG)([iW.A], () => iW.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: s, onEditProfile: a } = (0, iX.A)(t?.id ?? null, () => n(Z.i.TAKE_ACTION));
    if (null == t || !(0, iZ.q0)(t))
        return iJ.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: H.intl.string(H.t.jwEaiX), loading: l, onClick: s, variant: "primary" },
        { text: H.intl.string(H.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(F.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: G.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: H.intl.formatToPlainString(H.t.VFqnyU, { guildName: t.name }),
                body: H.intl.string(H.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(Z.i.USER_DISMISS),
            }),
        ],
    });
}
var i1 = n(843010),
    i2 = n(764231),
    i3 = n(425713);
function i6(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tH(),
        s = (0, c.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        a = (0, tO.A)((e) => e.isOpen),
        r = (0, i1.G)();
    return s || null == l || a || r
        ? null
        : (0, i.jsx)(nG.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(i5, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i5(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        r = tF.sp.indexOf(t),
        o = (0, i3.I)(tF.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, l.useCallback)(() => {
            n(Z.i.TAKE_ACTION),
                tO.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iy._.dispatch(tx.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(Z.i.USER_DISMISS);
        }, [n]),
        u = tF.VD[t],
        h = H.intl.formatToPlainString(H.t.ewkaVR, {
            timeMilestone: (0, i2.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: H.intl.string(H.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(F.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: H.intl.string(H.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function i4(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, it.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iV.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tx.dJq),
                l = (0, c.bG)([iW.A, ng.default, iB.Ay], () => {
                    if (null === e) return !1;
                    let t = iW.A.getGuild(e);
                    if (void 0 === t || !(0, iZ.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = ng.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iB.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tR.ww)(l && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tx.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                s = (0, c.bG)([i$], () => (null === l ? null : i$.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([iW.A], () => iW.A.getGuild(l)?.profile?.tag),
                r = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && s?.tag === a,
                d = null !== l && r && !o;
            return (0, tR.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? s === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(i0, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iQ, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i6, { groupName: Z.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nG.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: Z.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iH, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iw, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: e0.p,
                                            children: e.children,
                                        });
                                    case u.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(z, {
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
var i7 = n(615675),
    i8 = n(900797),
    i9 = n(847374),
    le = n(348858),
    lt = n(617354),
    ln = n(829773),
    li = n(42473),
    ll = n(495976),
    ls = n(238450);
function la(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
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
        } = (0, le.I)(h ? "undeafen" : "deafen"),
        x = n ? i7.T : m,
        { name: v } = (0, eb.x5)(im.oh.AUDIO_OUTPUT),
        C = (0, lt.A)(t, n, s),
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
                            children: (0, i.jsx)(ln.A, {
                                onInteraction: (0, Q.s)("AudioDeviceMenu", k.A.ACCOUNT),
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
                        m = u ? i8.t : i9.a;
                    return (0, i.jsxs)("div", {
                        ref: T,
                        className: a()(ll.Lh, { [ll.v8]: h, [ll.q6]: u }),
                        children: [
                            (0, i.jsx)(li.A, {
                                "aria-checked": h,
                                "aria-label": H.intl.string(H.t.wjcRFX),
                                className: ll.eT,
                                disabled: s,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? nd.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? ls.o : void 0,
                                innerClassName: a()({ [ls.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: f,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: C,
                            }),
                            (0, i.jsx)(li.A, {
                                className: a()(ll.UT, { [ll.q6]: u }),
                                disabled: s,
                                icon: (0, i.jsx)(m, {
                                    className: ll.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? nd.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? H.intl.formatToPlainString(H.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? H.intl.format(H.t["f+DDY/"], { outputDeviceName: v })
                                    : H.intl.string(H.t.aA4Vce),
                                "aria-label": c
                                    ? H.intl.formatToPlainString(H.t["f+DDY/"], { outputDeviceName: v })
                                    : H.intl.string(H.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lr = n(666654),
    lo = n(523875),
    ld = n(993719);
let lc = {};
class lu extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lc[e] ?? !1;
    }
}
let lh = new lu(iz.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lc[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lc[t] = !1;
    },
});
var lm = n(362823),
    lp = n(980923),
    lg = n(224585),
    lf = n(321429),
    lA = n(973324);
function lx(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
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
        { showPTTIconIndicator: T } = ih.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, c.bG)([ic.Ay], () => ic.Ay.getMode() === im.TB.PUSH_TO_TALK),
        I = (0, c.bG)([ic.Ay], () => ic.Ay.getSettings().modeOptions.shortcut),
        j = (0, c.bG)([lh], () => lh.getIsTutorialActive(lm.v.MUTE_TUTORIAL)),
        N = (0, c.bG)([iu.A], () => null != iu.A.getChannelId()),
        { name: y } = (0, eb.x5)(im.oh.AUDIO_INPUT),
        { enabledInputProfiles: S } = (0, ir.d)({ location: "MicrophoneButton" }),
        b = l.useRef(null),
        M = n || r || s,
        R = (0, lo.L)(M ? "unmute" : "mute"),
        { analyticsLocations: O } = (0, w.Ay)(k.A.AUDIO_INPUT_BUTTON),
        { Component: P, events: L, play: D } = R,
        U = s || r ? lr.O : P;
    l.useEffect(() => () => D(), [M, D]);
    let G = (0, lp.A)(n, s, r, o);
    t = f
        ? { tooltipType: "green_void_do_not_use", tooltipText: H.intl.string(H.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: H.intl.format(H.t.c1qUOQ, { keybind: tt.dI(I).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: G };
    let V = T && _ && N,
        B = M ? nd.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = l.useCallback(() => {
            m(), j && ld.N(lm.v.MUTE_TUTORIAL);
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
                            children: (0, i.jsx)(ln.A, {
                                onInteraction: (0, Q.s)("AudioDeviceMenu", k.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: S.length > 0,
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
                        { isShown: s } = n,
                        r = s ? i8.t : i9.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(ll.Lh, { [ll.v8]: M, [ll.q6]: s }),
                        children: [
                            (0, i.jsx)(li.A, {
                                "aria-checked": M,
                                "aria-label": H.intl.string(H.t.w4m945),
                                className: ll.eT,
                                disabled: o,
                                icon: (0, i.jsx)(U, { size: "custom", width: 20, height: 20, color: B, className: d }),
                                onClick: W,
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
                                children: V ? (0, i.jsx)("div", { className: a()(lf.U, { [lf.z]: E }) }) : null,
                            }),
                            (0, i.jsx)(li.A, {
                                "aria-label": x
                                    ? H.intl.formatToPlainString(H.t["18wnuD"], { inputDeviceName: y })
                                    : H.intl.string(H.t.fRzCbB),
                                className: a()(ll.UT, { [ll.q6]: s }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: ll.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: B,
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
                                    ? H.intl.formatToPlainString(H.t["18wnuD"], { inputDeviceName: y })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: x
                                    ? H.intl.format(H.t["18wnuD"], { inputDeviceName: y })
                                    : H.intl.string(H.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(F.A, {
                targetElementRef: b,
                shouldShow: j,
                graphic: { type: "image", src: lA.A },
                onRequestClose: () => {
                    ld.N(lm.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: H.intl.string(lg.default.VG4zAf),
                body: H.intl.string(lg.default["8VIRzR"]),
            }),
        ],
    });
}
var lv = n(935399),
    lC = n(505312),
    lE = n(848847),
    lT = n(88001),
    l_ = n(466919),
    lI = n(438705);
function lj(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = l.useCallback(() => {
            s(), (0, ex.openUserSettings)(eA.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(F.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lI },
        shouldShow: n,
        title: H.intl.format(l_.default.bx8sR9, { premiumGroupProductName: (0, lT.DP)() }),
        body: H.intl.format(l_.default.Pw4OFZ, { premiumGroupProductName: (0, lT.DP)() }),
        onRequestClose: s,
        actions: [{ text: H.intl.string(l_.default.DD26QR), onClick: a }],
    });
}
var lN = n(873298),
    ly = n(840387);
function lS(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, ly.Z)(),
        a = ns.KP.useSetting(),
        r = s && a !== lN.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            t(Z.i.TAKE_ACTION), (0, ex.openUserSettings)(eA.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, l.useCallback)(() => {
            t(Z.i.USER_DISMISS);
        }, [t]),
        c = r
            ? a === lN.KP.FRIENDS_ONLY
                ? H.intl.string(H.t["/hogEy"])
                : H.intl.string(H.t["6hEfm1"])
            : H.intl.string(H.t.bnNxW1);
    return (0, i.jsx)(F.A, {
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
        title: H.intl.string(H.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: H.intl.string(H.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function lb(e) {
    let t,
        n,
        {
            webBuildOverride: s,
            onClick: a,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: d,
            nameplate: c,
        } = e,
        h = l.useRef(null),
        [m, p] = l.useState(!1);
    (0, lv.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iy._.subscribe(tx.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iy._.unsubscribe(tx.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let g = l.useCallback(() => {
        p(!1), a();
    }, [a]);
    t = null != s ? H.intl.formatToPlainString(H.t.Gzh6ZP, { webBuildOverride: s.id }) : H.intl.string(H.t.cduTBL);
    let f = e6.Z,
        A = (0, lC.w)();
    return (
        (f = null != s ? lE.H : A.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(li.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: g,
                    onContextMenu: r,
                    "aria-label": H.intl.string(H.t.cduTBL),
                    icon: (0, i.jsx)(f, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...A.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lj, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, i.jsx)(nG.Ay, {
                    contentTypes: o,
                    groupName: Z.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(lS, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var lM = n(948198);
let lR = ib.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    lk = 2.5 * e9.A.Millis.SECOND,
    lw = 2 * e9.A.Millis.MINUTE,
    lO = 2 * e9.A.Millis.MINUTE,
    lP = 5 * e9.A.Millis.SECOND;
function lL(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: s = -1 / 0,
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
        T = (0, iN.F_)({ avatarDecoration: A, size: (0, et.Te)(p._3.SIZE_32) }),
        _ = (0, eo.A)(),
        {
            updateOpenPopoutRef: j,
            highlightBadge: N,
            setHighlightBadge: y,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = l.useState(),
                [s, a] = l.useState(!1);
            return (
                (0, I.A)(() => a(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        iy._.subscribe(tx.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iy._.unsubscribe(tx.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        S = (0, ei.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(E.A, {
              object: tx.ZSU.AVATAR,
              children: (0, i.jsx)(ia.A, {
                  user: o,
                  targetElementRef: C,
                  clickTrap: !0,
                  preload: () =>
                      (0, is.A)(o.id, o.getAvatarURL(void 0, ia.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(ie, {
                          currentUser: o,
                          highlightBadge: N,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lM.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: g.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), y(void 0);
                  },
                  children: (e) => {
                      j(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: C,
                          style: S,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(lM.Q9, { [lM.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(f.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": H.intl.string(H.t["5fWB8U"]),
                                  focusProps: { ringTarget: C },
                                  className: lM.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lR, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tx.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: lM.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lM.oM, children: h(_) }),
                          ],
                      });
                  },
              }),
          });
}
class lD extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(lO, null, !1);
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
            { speakingWhileMuted: l, occluded: s, speakingWhilePTTInactive: a } = this.props;
        s !== i && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, X.A)(e, t, tx.JJy.ACCOUNT_PANEL), (0, J.X)(k.A.ACCOUNT, J.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, $.A)(e, tx.JJy.ACCOUNT_PANEL), (0, J.X)(k.A.ACCOUNT, J.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            iu.A.isConnected() ? (0, ex.openUserSettings)(eA.X.VOICE_AND_VIDEO_PANEL) : (0, ex.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("36533"),
                    n.e("83905"),
                    n.e("40351"),
                    n.e("89304"),
                    n.e("44551"),
                    n.e("36736"),
                    n.e("39411"),
                    n.e("17909"),
                    n.e("41152"),
                    n.e("97106"),
                    n.e("78015"),
                    n.e("70758"),
                    n.e("25236"),
                    n.e("50392"),
                    n.e("66370"),
                    n.e("47899"),
                    n.e("75091"),
                    n.e("83200"),
                    n.e("25499"),
                    n.e("1248"),
                    n.e("24092"),
                    n.e("33004"),
                    n.e("3557"),
                    n.e("4240"),
                    n.e("98942"),
                    n.e("31076"),
                    n.e("66806"),
                    n.e("26572"),
                    n.e("39737"),
                    n.e("85391"),
                    n.e("56356"),
                    n.e("29062"),
                    n.e("5270"),
                    n.e("42293"),
                    n.e("44018"),
                    n.e("60574"),
                    n.e("82222"),
                    n.e("23102"),
                    n.e("2285"),
                    n.e("97726"),
                    n.e("42394"),
                    n.e("44459"),
                    n.e("98986"),
                    n.e("18379"),
                    n.e("21133"),
                    n.e("60061"),
                    n.e("44083"),
                    n.e("62329"),
                    n.e("18917"),
                    n.e("94450"),
                    n.e("86307"),
                    n.e("3574"),
                    n.e("711"),
                    n.e("73153"),
                    n.e("18151"),
                    n.e("10543"),
                    n.e("40981"),
                    n.e("75030"),
                    n.e("58235"),
                    n.e("51869"),
                    n.e("50693"),
                    n.e("6487"),
                    n.e("69794"),
                    n.e("20661"),
                    n.e("69190"),
                    n.e("18315"),
                    n.e("17776"),
                    n.e("78969"),
                    n.e("77770"),
                    n.e("61275"),
                    n.e("49557"),
                    n.e("30072"),
                    n.e("18629"),
                    n.e("48227"),
                    n.e("37175"),
                    n.e("13920"),
                    n.e("99424"),
                    n.e("670"),
                    n.e("99496"),
                    n.e("44565"),
                    n.e("88563"),
                    n.e("24212"),
                    n.e("20459"),
                    n.e("1301"),
                    n.e("55983"),
                    n.e("47519"),
                    n.e("80197"),
                    n.e("48132"),
                    n.e("61686"),
                    n.e("91778"),
                    n.e("94757"),
                    n.e("97312"),
                    n.e("38469"),
                    n.e("9009"),
                    n.e("80126"),
                    n.e("91072"),
                    n.e("43422"),
                    n.e("49181"),
                    n.e("9"),
                    n.e("28863"),
                    n.e("35182"),
                    n.e("76913"),
                    n.e("50766"),
                    n.e("33925"),
                    n.e("72723"),
                    n.e("69977"),
                    n.e("94149"),
                    n.e("13108"),
                    n.e("66756"),
                    n.e("25167"),
                    n.e("3650"),
                    n.e("21532"),
                    n.e("25996"),
                    n.e("54948"),
                    n.e("85251"),
                    n.e("28634"),
                    n.e("39644"),
                    n.e("73432"),
                    n.e("39086"),
                    n.e("17104"),
                    n.e("18021"),
                    n.e("28212"),
                    n.e("18698"),
                    n.e("35353"),
                    n.e("80352"),
                    n.e("97551"),
                    n.e("10743"),
                    n.e("42745"),
                    n.e("70148"),
                    n.e("22878"),
                    n.e("74318"),
                    n.e("10887"),
                    n.e("99439"),
                    n.e("74362"),
                    n.e("13162"),
                    n.e("78849"),
                    n.e("3567"),
                    n.e("32886"),
                    n.e("92111"),
                    n.e("64648"),
                    n.e("95013"),
                    n.e("76858"),
                    n.e("6819"),
                    n.e("55"),
                    n.e("58921"),
                    n.e("19728"),
                    n.e("94373"),
                    n.e("35238"),
                    n.e("58818"),
                    n.e("66763"),
                    n.e("11689"),
                    n.e("14520"),
                    n.e("4142"),
                    n.e("19059"),
                    n.e("92576"),
                    n.e("4349"),
                    n.e("73763"),
                    n.e("79751"),
                    n.e("12345"),
                    n.e("23241"),
                    n.e("9172"),
                    n.e("35285"),
                    n.e("65420"),
                    n.e("3056"),
                    n.e("84710"),
                    n.e("22570"),
                    n.e("99998"),
                    n.e("54540"),
                    n.e("38427"),
                    n.e("58797"),
                    n.e("2959"),
                    n.e("70539"),
                    n.e("23904"),
                    n.e("82826"),
                    n.e("64477"),
                    n.e("68254"),
                    n.e("51410"),
                    n.e("6229"),
                    n.e("7460"),
                    n.e("67902"),
                    n.e("55045"),
                    n.e("17791"),
                    n.e("91968"),
                    n.e("59719"),
                    n.e("71454"),
                    n.e("93552"),
                    n.e("21107"),
                    n.e("52179"),
                    n.e("10855"),
                    n.e("80759"),
                    n.e("33587"),
                    n.e("88391"),
                    n.e("988"),
                    n.e("99116"),
                    n.e("65671"),
                    n.e("76739"),
                    n.e("54269"),
                    n.e("16755"),
                    n.e("15990"),
                    n.e("44510"),
                    n.e("46899"),
                    n.e("33091"),
                    n.e("18016"),
                    n.e("45309"),
                    n.e("9445"),
                    n.e("29267"),
                    n.e("26899"),
                    n.e("47451"),
                    n.e("60445"),
                    n.e("46933"),
                    n.e("25268"),
                    n.e("79238"),
                    n.e("64488"),
                    n.e("14406"),
                    n.e("98574"),
                    n.e("94629"),
                    n.e("99726"),
                    n.e("57788"),
                    n.e("13884"),
                    n.e("1444"),
                    n.e("59908"),
                    n.e("21792"),
                    n.e("57504"),
                    n.e("64636"),
                    n.e("56486"),
                    n.e("84126"),
                    n.e("67732"),
                    n.e("76880"),
                    n.e("15597"),
                    n.e("57417"),
                    n.e("25965"),
                    n.e("99417"),
                    n.e("89651"),
                    n.e("1883"),
                    n.e("43357"),
                    n.e("92793"),
                    n.e("19365"),
                    n.e("69821"),
                    n.e("38096"),
                    n.e("37393"),
                    n.e("42903"),
                    n.e("56433"),
                    n.e("65123"),
                    n.e("31668"),
                    n.e("28687"),
                    n.e("88629"),
                    n.e("85781"),
                    n.e("42371"),
                    n.e("13125"),
                    n.e("75201"),
                    n.e("50741"),
                    n.e("45181"),
                    n.e("67413"),
                    n.e("8066"),
                    n.e("15950"),
                    n.e("55907"),
                    n.e("65724"),
                    n.e("35876"),
                    n.e("96116"),
                    n.e("27392"),
                    n.e("64404"),
                    n.e("26509"),
                    n.e("90580"),
                    n.e("17623"),
                    n.e("57727"),
                    n.e("53408"),
                    n.e("16337"),
                    n.e("30182"),
                    n.e("81269"),
                    n.e("71540"),
                    n.e("94614"),
                    n.e("56275"),
                    n.e("93781"),
                    n.e("85413"),
                    n.e("41542"),
                    n.e("68066"),
                    n.e("66048"),
                    n.e("72425"),
                    n.e("97487"),
                    n.e("80373"),
                    n.e("32744"),
                    n.e("9131"),
                    n.e("76625"),
                    n.e("24551"),
                    n.e("86345"),
                    n.e("54189"),
                    n.e("23296"),
                    n.e("74870"),
                    n.e("52757"),
                    n.e("85081"),
                    n.e("49362"),
                    n.e("91922"),
                    n.e("57533"),
                    n.e("81015"),
                    n.e("6389"),
                    n.e("24343"),
                    n.e("68087"),
                    n.e("30477"),
                    n.e("52123"),
                    n.e("29959"),
                    n.e("14350"),
                    n.e("19613"),
                    n.e("51176"),
                    n.e("63102"),
                    n.e("63117"),
                    n.e("21273"),
                    n.e("24073"),
                    n.e("8553"),
                    n.e("40804"),
                    n.e("8596"),
                    n.e("74861"),
                    n.e("37895"),
                    n.e("49857"),
                    n.e("42205"),
                    n.e("55675"),
                    n.e("27962"),
                    n.e("68201"),
                    n.e("27786"),
                    n.e("3376"),
                    n.e("56490"),
                    n.e("60241"),
                    n.e("26132"),
                    n.e("64827"),
                    n.e("63232"),
                    n.e("7167"),
                    n.e("10471"),
                    n.e("84569"),
                    n.e("61060"),
                    n.e("54484"),
                    n.e("60235"),
                    n.e("77333"),
                    n.e("6338"),
                    n.e("47834"),
                    n.e("18573"),
                    n.e("78157"),
                    n.e("44057"),
                    n.e("53782"),
                    n.e("88774"),
                    n.e("31988"),
                    n.e("44571"),
                    n.e("34303"),
                    n.e("40291"),
                    n.e("2368"),
                    n.e("33115"),
                    n.e("97270"),
                    n.e("73122"),
                    n.e("8304"),
                    n.e("93159"),
                    n.e("55936"),
                    n.e("89088"),
                    n.e("69294"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("45959"),
                    n.e("58529"),
                    n.e("58038"),
                    n.e("71202"),
                    n.e("62531"),
                    n.e("44230"),
                    n.e("6174"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("81647"),
                    n.e("34552"),
                    n.e("11310"),
                    n.e("91763"),
                    n.e("76602"),
                    n.e("7170"),
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
                    n.e("71210"),
                    n.e("92583"),
                    n.e("43437"),
                    n.e("21957"),
                    n.e("66495"),
                    n.e("68403"),
                    n.e("8555"),
                    n.e("88342"),
                    n.e("30233"),
                    n.e("86127"),
                    n.e("46070"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("21200"),
                    n.e("72789"),
                    n.e("54622"),
                    n.e("28203"),
                    n.e("25949"),
                    n.e("44502"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("89421"),
                    n.e("79049"),
                    n.e("98965"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("90365"),
                    n.e("66707"),
                    n.e("52548"),
                    n.e("17989"),
                    n.e("35027"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("37977"),
                    n.e("49653"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("3589"),
                    n.e("24689"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("4848"),
                    n.e("65437"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("35313"),
                    n.e("45413"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("90757"),
                    n.e("86672"),
                    n.e("94427"),
                    n.e("32756"),
                    n.e("64850"),
                    n.e("29963"),
                    n.e("70104"),
                    n.e("2564"),
                    n.e("71477"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("14285"),
                    n.e("48330"),
                    n.e("95752"),
                    n.e("35321"),
                    n.e("3332"),
                    n.e("38513"),
                    n.e("63645"),
                    n.e("8362"),
                    n.e("41678"),
                    n.e("23532"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("2698"),
                    n.e("52557"),
                    n.e("37021"),
                    n.e("18465"),
                    n.e("63123"),
                    n.e("71430"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("85794"),
                    n.e("67837"),
                    n.e("834"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("24038"),
                    n.e("32209"),
                    n.e("55654"),
                    n.e("9371"),
                    n.e("50097"),
                    n.e("2362"),
                    n.e("80445"),
                    n.e("50033"),
                    n.e("39171"),
                    n.e("87478"),
                    n.e("36564"),
                    n.e("92513"),
                    n.e("74630"),
                    n.e("48948"),
                    n.e("63244"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("68214"),
                    n.e("44780"),
                    n.e("95340"),
                    n.e("91450"),
                    n.e("93438"),
                    n.e("36227"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("61156"),
                    n.e("5557"),
                    n.e("91671"),
                    n.e("62718"),
                    n.e("8018"),
                    n.e("68763"),
                    n.e("16767"),
                    n.e("58273"),
                    n.e("92295"),
                    n.e("6841"),
                    n.e("20930"),
                    n.e("59957"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("29666"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("20379"),
                    n.e("77487"),
                    n.e("8536"),
                    n.e("57458"),
                    n.e("8829"),
                    n.e("19193"),
                    n.e("1243"),
                    n.e("59466"),
                    n.e("75133"),
                    n.e("15920"),
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
                    n.e("54030"),
                    n.e("203"),
                    n.e("39103"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("78601"),
                    n.e("80407"),
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
                    n.e("30167"),
                    n.e("49013"),
                    n.e("76814"),
                    n.e("51892"),
                    n.e("19457"),
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
                    n.e("93004"),
                    n.e("22644"),
                    n.e("29569"),
                    n.e("51761"),
                    n.e("96480"),
                    n.e("95992"),
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
                    n.e("66598"),
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
                    n.e("62318"),
                    n.e("44912"),
                    n.e("13052"),
                    n.e("64926"),
                    n.e("50541"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("46416"),
                    n.e("15622"),
                    n.e("61750"),
                    n.e("20803"),
                    n.e("95782"),
                    n.e("61137"),
                    n.e("27687"),
                    n.e("31997"),
                    n.e("96329"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("71492"),
                    n.e("24564"),
                    n.e("66601"),
                    n.e("34428"),
                    n.e("54876"),
                    n.e("39721"),
                    n.e("19631"),
                    n.e("32736"),
                    n.e("82384"),
                    n.e("76892"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("83986"),
                    n.e("32482"),
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
                    n.e("49409"),
                    n.e("81754"),
                    n.e("61322"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("69443"),
                    n.e("39518"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: C.Z_, onInteraction: (0, Q.s)("UserSettingsMenu", k.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, Q.s)("AudioDeviceMenu", k.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, ir.d)({ location: "Account" });
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
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lw;
        i
            ? r ||
              !e ||
              t ||
              n ||
              l ||
              !o ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(lk, () =>
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
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
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
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(lk, () =>
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
                status: s,
                userTag: a,
                voiceChannel: r,
            } = this.props;
        if (null == l) return null;
        if ((0, j.A)({ activities: t, status: s, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(R.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: ne.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(N.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lM.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tx.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: ne.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(ea.A, { activity: o, emojiClassName: lM.Zg, className: lM.WO }),
                  ],
              })
            : null != s && s !== tx.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: ne.Ay.humanizeStatus(s) }),
                })
              : a;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: lM.eW,
                          children: (0, i.jsx)(iR.A, {
                              className: a()({ [lM.e8]: null != e }),
                              children: (0, i.jsx)(ec.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? ed.G.ANIMATED : ed.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lM.XP,
                          children: (0, i.jsx)(iM.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { badgeDirectoryNuxPopoverVariant: t, currentUser: n, dismissibleContents: l } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(i4, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  children: (0, i.jsx)(lL, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: s } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(lM.kL, { [lM.UG]: null != n, [lM.bc]: !l, [lM.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(es.A, { nameplate: t, hovered: r, placement: el.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(lU, {
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
                      (0, i.jsx)(eS, {}),
                  ],
              });
    }
}
function lU(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: s,
            serverDeaf: a,
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
        N = (0, ei.K)(C);
    return (0, i.jsxs)("div", {
        className: lM.Uo,
        style: N,
        children: [
            (0, i.jsx)(lx, {
                accountContainerRef: E,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: g,
                iconForeground: null != C ? lM.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: _,
                dismissTooltips: I,
                speaking: j,
            }),
            (0, i.jsx)(la, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: m,
                onContextMenu: f,
                awaitingRemote: l,
                iconForeground: null != C ? lM.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: I,
            }),
            (0, i.jsx)(lb, {
                webBuildOverride: c,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: v.settings,
                iconForeground: null != C ? lM.t4 : void 0,
                nameplate: C,
            }),
        ],
    });
}
function lG(e) {
    let t = (0, c.bG)([iu.A], () => null != iu.A.getChannelId()),
        n = (0, eb.Py)(e),
        i = l.useRef(new h.Ep()),
        [s, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(lP, () => {
                a(!1);
            }));
    }, [t, n]);
    let r = l.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, _.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: r }
    );
}
function lF() {
    let e = (0, c.bG)([ng.default], () => ng.default.getCurrentUser()),
        t = (0, c.bG)([nM.default], () => nM.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nP.A], () => {
            let e = nP.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tx.$pd.STREAMING;
                    }),
                status: nP.A.getStatus(),
            };
        }),
        r = (0, c.bG)([iE.A], () => iE.A.getAnyStreamForUser(t)),
        d = (0, T.A)({ userId: t }),
        m = (0, c.bG)([ix.A], () => ix.A.getVoiceVolume(t)),
        p = ne.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([iu.A, iT.A], () => {
            let e = iu.A.getChannelId();
            return null != e ? iT.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: A, suppress: x } = (0, id.A)(g),
        { selfDeaf: C, deaf: E } = (0, io.A)(g),
        I = (0, c.bG)([K.A], () => ((0, q.kK)() ? K.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([ic.Ay], () => ic.Ay.getSpeakingWhileMuted()),
        N = (0, c.bG)([Y.A], () => Y.A.isFullscreenInContext()),
        y = (0, c.bG)([iI.A], () => iI.A.hasLayers()),
        S = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || y || iS.P.isDisallowPopupsSet() || N,
        b = (0, c.bG)([eu.default], () => null != eu.default.getAwaitingRemoteSessionInfo()),
        M = (0, c.bG)([ij.A], () => ij.A.getGuildId()),
        R = e?.avatarDecoration,
        D = (0, ee.A)(R),
        G = ne.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, w.Ay)(k.A.ACCOUNT),
        H = (0, en.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: V } = (0, it.c9)(),
        B = (0, c.bG)([ii.A, ng.default, i_.A], () => {
            let e,
                t = ii.A.getSyncingWith(),
                n = ii.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(i_.A.getParty(e) ?? []))
                        .map((e) => ng.default.getUser(e))
                        .filter(nk.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        z = (0, il.lX)("AccountCoachmark"),
        $ = (0, er.ux)("AccountCoachmark"),
        X = (0, O.VV)({ location: "AccountCoachmark" }),
        J = (function (e) {
            let { currentUserId: t, enabled: n } = e;
            l.useEffect(() => {
                null != t && n && !L.Ay.hasCatalogFor(t) && (0, P.RS)(t);
            }, [t, n]);
            let i = (0, c.bG)([L.Ay], () => null != t && L.Ay.hasCatalogFor(t), [t]),
                s = (0, c.bG)(
                    [L.Ay],
                    () => (null != t ? L.Ay.getBadges(t).filter((e) => W.sC.has(e.badge_id) && e.owned).length : 0),
                    [t],
                ),
                a = (0, c.yK)(
                    [L.Ay],
                    () =>
                        null != t
                            ? (function (e) {
                                  let t = new Map(e.map((e) => [e.badge_id, e])),
                                      n = [];
                                  for (let e of U) {
                                      let i = t.get(e);
                                      if (i?.owned !== !0 || null == i.current_tier) continue;
                                      let l = i.tiers.findIndex((e) => e.key === i.current_tier);
                                      if (-1 === l) continue;
                                      let s = i.tiers[l],
                                          a = s?.complex_icon_static_url ?? s?.simple_icon_url;
                                      null != a && n.push({ iconUrl: a, tierIndex: l });
                                  }
                                  return n
                                      .sort((e, t) => t.tierIndex - e.tierIndex)
                                      .slice(0, 3)
                                      .map((e) => e.iconUrl);
                              })(L.Ay.getBadges(t))
                            : [],
                    [t],
                );
            return n && null != t && i
                ? s > 0
                    ? { variant: "progress", newBadgeCount: s, badgeIconUrls: a }
                    : { variant: "no-progress" }
                : null;
        })({ currentUserId: e?.id, enabled: X });
    !S &&
        ($ && Z.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != J && Z.avatar.push(u.M.BADGE_DIRECTORY_NUX_POPOVER),
        z && Z.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: et } = lG(im.oh.AUDIO_INPUT),
        { shouldShowTooltip: ei, dismissTooltip: el } = lG(im.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: es, dismissTooltip: ea } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, c.bG)([ic.Ay], () => ic.Ay.getMode() === im.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [iu.A],
                    () => null != iu.A.getChannelId() && (iu.A.getDuration() ?? Number.MAX_VALUE) < ip,
                ),
                [s, a] = l.useState(!1),
                { showPTTJoinTooltip: r } = ih.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = l.useRef(new h.Ep()),
                d = l.useRef(new h.Ep());
            l.useEffect(() => {
                if (i && n && !e) {
                    if ((ih.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        d.current.start(ig, () => {
                            t(!1);
                        }),
                        o.current.start(ip, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, r, e]);
            let u = l.useCallback(() => {
                a(!1), o.current.stop();
            }, []);
            return (
                (0, _.l0)(() => {
                    o.current.stop(), d.current.stop();
                }),
                { shouldShowTooltip: s, dismissTooltip: u }
            );
        })(),
        eo = (function () {
            let { showPTTSpeakingIndicator: e } = ih.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = l.useState(!1),
                i = (0, c.bG)([ic.Ay], () => ic.Ay.getMode() === im.TB.PUSH_TO_TALK),
                s = (0, c.bG)([iu.A], () => iu.A.getRTCConnectionId()),
                a = (0, c.bG)([ic.Ay], () => {
                    let e = ic.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < iC;
                }),
                r = l.useRef(new h.Ep());
            return (
                l.useEffect(() => {
                    n(!1);
                }, [s]),
                l.useEffect(() => {
                    let t = 0,
                        l = r.current;
                    function o(e, i) {
                        let s = (i & im.ME.VOICE) === im.ME.VOICE,
                            a = ix.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              l.start(iv, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && ic.Ay.getMediaEngine().on(iA.bg.VoiceActivity, o),
                        () => {
                            ic.Ay.getMediaEngine().removeListener(iA.bg.VoiceActivity, o), l.stop();
                        }
                    );
                }, [e, i, a, s]),
                t
            );
        })(),
        ed = l.useMemo(() => (Q ? "input" : ei ? "output" : void 0), [Q, ei]),
        ec = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        et();
                        break;
                    case "output":
                        el();
                }
            },
            [et, el],
        );
    return (0, i.jsx)(w.f5, {
        value: F,
        children: (0, i.jsx)(lD, {
            currentUser: e,
            username: G,
            activities: n,
            applicationStream: r,
            voiceChannel: g,
            dismissibleContents: Z,
            badgeDirectoryNuxPopoverVariant: J,
            userTag: p,
            occluded: S,
            selfDeaf: C,
            selfMute: A,
            serverDeaf: E,
            serverMute: f,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: j,
            speakingWhilePTTInactive: eo,
            status: a,
            streaming: s,
            suppress: x,
            webBuildOverride: I,
            awaitingRemote: b,
            nameplate: H,
            selectedGuildId: M,
            avatarDecoration: D,
            isQuestBarEmpty: V,
            isListenAlongVisible: B,
            deviceChangedTooltipType: ed,
            onDismissDeviceChangedTooltip: () => ec(ed),
            shouldShowPTTJoinTooltip: es,
            dismissPTTJoinTooltip: ea,
        }),
    });
}
