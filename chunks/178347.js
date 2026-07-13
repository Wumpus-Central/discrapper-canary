n.d(t, { g: () => lS, A: () => lb }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
var E = n(442433),
    C = n(820284),
    I = n(717558),
    _ = n(964486),
    T = n(220839),
    j = n(397244),
    S = n(394871),
    N = n(580929),
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
        children: n((e, t) => (0, i.jsx)(N.animated.div, { className: b.H, style: e, children: t })),
    });
}
var R = n(29160),
    k = n(793574),
    w = n(688810),
    O = n(521502),
    L = n(380610),
    P = n(313961),
    U = n(18235),
    D = n(183184),
    G = n(384059),
    F = n(480890),
    H = n(601255),
    V = n(562819),
    W = n(449582),
    B = n(351952),
    Z = n(88686),
    z = n(174755),
    K = n(302223),
    q = n(248778),
    Y = n(609425),
    $ = n(922301),
    Q = n(660184),
    X = n(643501),
    J = n(534514),
    ee = n(834730),
    et = n(789645),
    en = n(826673),
    ei = n(750506),
    el = n(780964),
    es = n(766075),
    ea = n(417146),
    er = n(552122),
    eo = n(717421),
    ed = n(775602),
    ec = n(993843);
let eu = { mass: 10, tension: 550, friction: 140 };
function eh(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, c.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        [r, d] = l.useState({ x: 0, y: 0 }),
        u = l.useMemo(
            () =>
                o().throttle((e) => {
                    s || d({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, s],
        );
    l.useEffect(() => (window.addEventListener("mousemove", u), () => window.removeEventListener("mousemove", u)), [u]);
    let [h, m] = (0, eo.z)(() => ({ x: 0, y: 0, config: eu }));
    return (
        l.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, i.jsx)(N.animated.div, {
            style: { transform: (0, N.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ec.T, t),
        })
    );
}
var em = n(49999),
    ep = n(375708),
    eg = n(275883);
function ef(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: l } = e,
        s = er.A.useIsEligible(),
        a = (0, en.JZ)(t),
        r = null != n,
        o = null != l ? { color: l } : void 0,
        { analyticsLocations: d } = (0, w.Ay)(k.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, en.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, es.openUserSettings)(el.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(em.i.TAKE_ACTION);
    }
    return s && !a
        ? (0, i.jsx)(ei.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eg.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, i.jsxs)("div", {
                              className: eg.o5,
                              children: [
                                  (0, i.jsx)(eh, { className: eg.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eg.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eg.c8 }),
                      (0, i.jsxs)("div", {
                          className: eg.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: ep.intl.string(ep.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(ee.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: ep.intl.format(ep.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      f.D,
                                                      {
                                                          tag: "span",
                                                          className: eg.nf,
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
                                  className: eg.l2,
                                  onClick: () => c(em.i.USER_DISMISS),
                                  children: (0, i.jsx)(et.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eA() {
    return null == ea.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ef, {
              dismissibleContent: ea.A.coachmarkDismissibleContent,
              backgroundColor: ea.A.coachmarkBackgroundColor,
              specialTextColor: ea.A.coachmarkSpecialTextColor,
          });
}
var ex = n(74848),
    ev = n(607399),
    eE = n(707554),
    eC = n(224640),
    eI = n(305866),
    e_ = n(364522),
    eT = n(22231),
    ej = n(812993),
    eS = n(133171),
    eN = n(780338);
if (21552 != n.j) var v = n(192308);
var ey = n(980707),
    eb = n(26137),
    eM = n(473935),
    eR = n(765671),
    ek = n(783041),
    ew = n(176781),
    eO = n(320448),
    eL = n(993401),
    eP = n(447349);
function eU(e) {
    return (0, i.jsx)("div", {
        className: eP.wE,
        children: (0, i.jsx)(ey.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eD(e) {
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
        p = (0, eL.rE)({ action: t, onClick: n }),
        [A, x] = l.useState(!1),
        E = l.useRef(null),
        C = c ?? E,
        I = null != d,
        _ = I && m,
        T = l.useCallback(() => {
            x(!0);
        }, []),
        j = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || x(!1);
        }, []);
    function S() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eP.iA, children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eP.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(ee.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eP.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(ee.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function N(e) {
        let t;
        return (
            (t = _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.D, { className: eP.ef, onClick: p, children: S() }),
                          (0, i.jsx)(f.D, {
                              className: eP.ap,
                              "aria-label": ep.intl.string(ep.t.PdRCRg),
                              ...e,
                              onClick: T,
                              children: (0, i.jsx)(eO._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : I
                  ? (0, i.jsxs)(f.D, {
                        className: eP.ef,
                        ...e,
                        onClick: T,
                        children: [
                            S(),
                            (0, i.jsx)("div", {
                                className: eP.ap,
                                children: (0, i.jsx)(eO._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(f.D, { className: eP.ef, onClick: p, children: S() })),
            (0, i.jsx)("div", { ref: C, className: eP.jG, children: t })
        );
    }
    return I
        ? (0, i.jsx)("li", {
              className: eP.j$,
              onMouseEnter: T,
              onMouseLeave: j,
              children: (0, i.jsx)(g.Y, {
                  targetElementRef: u ?? C,
                  align: h,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: j,
                  children: N,
              }),
          })
        : (0, i.jsx)("li", { className: eP.j$, children: N() });
}
function eG(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(734066),
    eH = n(274372),
    eV = n(409067),
    eW = n(271597),
    eB = n(990078),
    eZ = n(475358),
    ez = n(408278),
    eK = n(625903),
    eq = n(404778),
    eY = n(689175),
    e$ = n(821609),
    eQ = n(532624),
    eX = n(927813),
    eJ = n(879631),
    e0 = n(350535),
    e1 = n(372684),
    e2 = n(974293),
    e3 = n(572164),
    e5 = n(953932),
    e7 = n(280483),
    e6 = n(890856),
    e4 = n(713517),
    e8 = n(609174),
    e9 = n(619744);
function te(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        s = (0, e8.Y_)(),
        a = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eW.p)({ initialEditingClipId: s.id });
            },
            [s, t],
        );
    return (0, i.jsx)(e$.$, {
        onClick: a,
        icon: eT.R,
        variant: n,
        size: "sm",
        text: ep.intl.string(ep.t.bt75uw),
        fullWidth: !0,
    });
}
var tt = n(82716),
    tn = n(585579),
    ti = n(930317),
    tl = n(285072),
    ts = n(316305);
let ta = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: r } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: d } = (0, e4.A)(o),
        c = l.useCallback(() => {
            s?.(), (0, eW.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(e8.Cl, {
        clip: t,
        children: (0, i.jsx)(e6.s, {
            ref: o,
            "aria-label": ep.intl.string(ep.t.bt75uw),
            onClick: c,
            className: a()(ts.Z1, r),
            children: (0, i.jsxs)(ti.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(ej.Lp, { className: ts.Ad, text: ep.intl.string(ep.t.y2b7CA) }),
                    (0, i.jsxs)(tl.h, {
                        isVisible: d,
                        className: ts.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ts.mY,
                                children: [(0, i.jsx)(tt.z, {}), (0, i.jsx)(e9.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: ts.E_,
                                children: [
                                    (0, i.jsx)(te, { onBeforeEdit: s, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tn.E, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tr = n(652215),
    to = n(753070),
    td = n(16590),
    tc = n(550350);
function tu(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e;
    (0, e7.A)();
    let r = (0, c.yK)([eH.Ay], () => Object.values(eH.Ay.getClips())),
        o = (0, c.bG)([eH.Ay], () => eH.Ay.getSettings()),
        d = (0, c.bG)([eH.Ay], () => eH.Ay.getNewClipIds()),
        u = (0, e2.aJ)("ClipsPopout"),
        h = (0, c.bG)([eH.Ay], () => eH.Ay.getEnableAutoclipping()),
        m = (0, c.bG)([eQ.Ay], () => eQ.Ay.getKeybindForAction(tr.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                a?.(e);
            },
            [a],
        ),
        g = !o.showPovClipsInGallery,
        f = l.useMemo(() => {
            let e = r.filter((e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail && (!g || !(0, eV.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, g]),
        A = l.useMemo(() => f.slice(0, 16), [f]),
        x = f.length > 16,
        v = null != m ? e0.dI(m.shortcut, !0) : null,
        E = [
            (0, eJ.$)(o.clipsLength / eX.A.Millis.SECOND),
            (0, to.zr)(o.clipsQuality.resolution),
            ep.intl.formatToPlainString(ep.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && E.push(ep.intl.string(td.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tc.SW,
            role: "dialog",
            "aria-label": ep.intl.string(ep.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tc.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tc.$,
                            children: [
                                (0, i.jsx)(J.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: ep.intl.string(ep.t.z2jK6X),
                                }),
                                null != v && (0, i.jsx)(eZ.e, { className: tc.P, shortcut: v }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tc.$s,
                            children: [
                                (0, i.jsx)(eB.m, {
                                    text: ep.intl.string(ep.t["3D5yo/"]),
                                    children: (0, i.jsx)(ez.K, {
                                        onClick: () => n(),
                                        icon: eK.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ep.intl.string(ep.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eB.m, {
                                    text: ep.intl.string(td.default["55C2MH"]),
                                    children: (0, i.jsx)(ez.K, {
                                        onClick: () => t(),
                                        icon: ew.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ep.intl.string(td.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tc.ov,
                    children: [
                        E.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tc.LO, children: "\u2022" }),
                                        (0, i.jsx)(ee.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tc.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        u &&
                            (0, i.jsx)(ee.E, {
                                variant: "text-xs/semibold",
                                color: h ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tc.wS,
                                children: h ? ep.intl.string(td.default.lTwKmt) : ep.intl.string(td.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(eq.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(eY.Ch, {
                          className: tc.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(ta, { clip: e, isNew: d.includes(e.id), onClose: s }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tc.qr,
                                      children: (0, i.jsx)(e$.$, {
                                          onClick: () => t(),
                                          text: ep.intl.string(td.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(th, { keybindString: v }),
            ],
        })
    );
}
function th(e) {
    let { keybindString: t } = e,
        n = (0, e3.Et)();
    return (0, i.jsxs)("div", {
        className: tc.p$,
        children: [
            (0, i.jsx)(ee.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tc.qO,
                children: ep.intl.string(td.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(ee.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: ep.intl.format(td.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  ee.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(eZ.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e5.A, {}),
        ],
    });
}
function tm(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        s = (0, eF.sw)(),
        a = !(0, c.bG)([eH.Ay], () => eH.Ay.getSettings().showPovClipsInGallery),
        r = (0, c.bG)([eH.Ay], () => {
            let e = eH.Ay.getNewClipIds();
            return a
                ? e.filter((e) => {
                      let t = eH.Ay.getClipById(e);
                      return null != t && !(0, eV.kD)(t);
                  }).length
                : e.length;
        }, [a]),
        o = l.useCallback(
            (e) => {
                t(), (0, eW.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        d = l.useCallback(() => {
            t(), (0, es.openUserSettings)(el.X.CLIPS_PANEL);
        }, [t]);
    return s
        ? (0, i.jsx)(eD, {
              action: "PRESS_CLIPS",
              icon: ew.x,
              label: ep.intl.string(ep.t.z2jK6X),
              trailing: r > 0 ? (0, i.jsx)(ej.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tu, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tp = n(480335),
    tg = n(577390),
    tf = n(474257),
    tA = n(31956),
    tx = n(744808),
    tv = n(645507),
    tE = n(131607),
    tC = n(970931),
    tI = n(315710),
    t_ = n(832248),
    tT = n(462887),
    tj = n(736653),
    tS = n(439174),
    tN = n(428262),
    ty = n(878784),
    tb = n(202541);
function tM() {
    let e = (0, ty.Xb)(),
        t = (0, tN.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tb.sp.length - 1; t >= 0; t--) {
        let i = tb.VD[tb.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tR = {
        [tb.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tb.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tb.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tb.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tb.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tb.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tb.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tb.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tk = {
        [tb.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tb.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tb.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tb.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tb.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tb.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tb.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tb.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tw = n(682165);
let tO = l.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tL() {
    let e = (0, c.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        t = (0, t_.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tM(),
                t = (0, tT.M)((0, tj.Ay)());
            if (null == e) return null;
            let n = tR[e],
                i = tk[e],
                l = {
                    currentBadge: (0, tS.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tb.sp.indexOf(e);
            if (s > 0) {
                let e = tb.sp[s - 1],
                    n = tR[e];
                (l.prevBadge = (0, tS.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return l;
        })(),
        [s, a] = l.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tP, { levelUpData: s });
}
function tP(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        s = l.useCallback(() => {
            t_.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tI.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tw.i,
            children: [
                (0, i.jsx)("div", {
                    className: tw.b,
                    children: (0, i.jsx)(eB.m, {
                        text: ep.intl.string(ep.t.cpT0Cq),
                        children: (0, i.jsx)(ez.K, {
                            icon: et.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": ep.intl.string(ep.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tO, { levelUpData: t }) }),
            ],
        }),
    });
}
var tU = n(206835),
    tD = n(183555),
    tG = n(999291),
    tF = n(975732),
    tH = n(718019),
    tV = n(413492),
    tW = n(915614),
    tB = n(744753),
    tZ = n(559506),
    tz = n(646986),
    tK = n(349419),
    tq = n(946356),
    tY = n(878555),
    t$ = n(624479),
    tQ = n(206845),
    tX = n(957565),
    tJ = n(427262),
    t0 = n(962352);
function t1(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tD.NJ)();
    return tX.p5
        ? (0, i.jsx)(tQ.A, {
              text: ep.intl.string(ep.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tJ.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(f.D, {
                      ...e,
                      className: a()(t0.c, { [t0.R]: n }),
                      "aria-label": ep.intl.string(ep.t.y5MwJy),
                      children: (0, i.jsx)(t$.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t2 = n(983495),
    t3 = n(442228),
    t5 = n(885386),
    t7 = n(290863),
    t6 = n(351906),
    t4 = n(562153),
    t8 = n(661531),
    t9 = n(477782),
    ne = n(628284),
    nt = n(695366),
    nn = n(363195),
    ni = n(889227),
    nl = n(287809),
    ns = n(174459),
    na = n(429707),
    nr = n(274303),
    no = n(994125),
    nd = n(347853),
    nc = n(573879),
    nu = n(335020),
    nh = n(43105),
    nm = n(661439),
    np = n(385113),
    ng = n(352003),
    nf = n(429913),
    nA = n(334074),
    nx = n(633075),
    nv = n(667049),
    nE = n(280450),
    nC = n(90165),
    nI = n(403362),
    n_ = n(518477);
function nT(e) {
    let { targetElementRef: t, onClose: s } = e,
        [a, r] = l.useState(!1),
        o = (0, c.bG)([nE.default], () => nE.default.getId()),
        { eligibleApplications: d, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([np.A], () => np.A.getFeaturedApplicationIds());
            (0, ng.A)(e),
                l.useEffect(() => {
                    (0, nm.X)();
                }, []);
            let t = (0, c.bG)([nE.default], () => nE.default.getId()),
                n = (0, nv.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nx.R), [n]),
                s = (0, nf.A)(e),
                a = l.useMemo(() => s.filter(nI.Vq), [s]),
                r = (0, c.cf)([nC.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nC.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: d, markAsDismissed: h } = (0, nA.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nA.SH,
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
                n.e("59012"),
                n.e("91555"),
                n.e("47173"),
                n.e("60361"),
                n.e("49451"),
                n.e("48626"),
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
                n.e("22103"),
                n.e("6174"),
                n.e("93103"),
                n.e("34552"),
                n.e("9233"),
                n.e("72963"),
                n.e("21402"),
                n.e("8757"),
                n.e("7575"),
                n.e("24303"),
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
                n.e("76273"),
                n.e("23532"),
                n.e("52557"),
                n.e("55654"),
                n.e("83161"),
                n.e("38513"),
                n.e("63645"),
                n.e("63123"),
                n.e("24038"),
                n.e("42390"),
                n.e("52229"),
                n.e("95340"),
                n.e("27048"),
                n.e("69747"),
                n.e("54241"),
                n.e("21930"),
                n.e("3663"),
                n.e("89523"),
                n.e("29260"),
                n.e("82486"),
                n.e("4098"),
                n.e("755"),
                n.e("41786"),
                n.e("46430"),
                n.e("4374"),
                n.e("86546"),
                n.e("3930"),
                n.e("82969"),
                n.e("48407"),
                n.e("37065"),
                n.e("43256"),
                n.e("41384"),
                n.e("86507"),
                n.e("156"),
                n.e("73566"),
                n.e("45419"),
                n.e("87791"),
                n.e("78377"),
                n.e("53683"),
                n.e("84601"),
                n.e("19075"),
                n.e("92992"),
                n.e("86470"),
                n.e("53308"),
                n.e("54876"),
                n.e("90590"),
                n.e("14501"),
                n.e("40658"),
                n.e("27880"),
                n.e("8032"),
                n.e("77970"),
                n.e("75514"),
                n.e("71367"),
                n.e("75072"),
                n.e("2584"),
                n.e("49282"),
                n.e("35683"),
                n.e("2091"),
            ]).then(n.bind(n, 577593));
    }, [d.length]),
    0 === d.length)
        ? null
        : (0, i.jsx)(nh.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/ea1ea066f1312b56d74e16232ca7da602ee5fc0206f0ea9ecc130e5094334683.svg",
              },
              title: ep.intl.string(ep.t.HMWL9c),
              body: ep.intl.string(ep.t["9hfy3A"]),
              onRequestClose: () =>
                  h(
                      d.map((e) => e.id),
                      em.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: ep.intl.string(ep.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          r(!0),
                              (0, tF.openUserProfileModal)({ userId: o, tabSection: n_.RP.WIDGETS })
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
                                                  n.e("78377"),
                                                  n.e("92992"),
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
                                              em.i.TAKE_ACTION,
                                          ),
                                          s();
                                  })
                                  .finally(() => r(!1));
                      },
                  },
              ],
          });
}
var nj = n(461213),
    nS = n(818348),
    nN = n(466573);
function ny() {
    let e = (0, c.bG)([nj.A], () => nj.A.getStatus()),
        t = (0, tJ.MU)(e) ?? "",
        n = e === nS.cl.INVISIBLE || e === nS.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nN.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [ep.intl.string(ep.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eB.m, {
                    text: ep.intl.string(ep.t.L99HQm),
                    children: (0, i.jsx)(nt.E, {
                        size: "xs",
                        color: t8.A.colors.STATUS_WARNING,
                        "aria-label": ep.intl.string(ep.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nb = n(379848),
    nM = n(321191);
let nR = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nk = n(501838),
    nw = n(760716),
    nO = n(915089),
    nL = n(13808);
function nP(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: r,
            height: o,
            className: d,
            contentClassName: c,
        } = e,
        u = (0, nO.GV)(),
        h = l.useRef(null),
        m = (0, eo.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, i.jsx)(N.animated.div, {
        className: a()(nL.kL, d),
        style: m,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nL.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nL.U1,
                    children: [
                        (0, i.jsx)(f.D, {
                            innerRef: h,
                            "aria-label": ep.intl.string(ep.t.WAI6xu),
                            className: nL.b,
                            onClick: () => {
                                t(em.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(et.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(J.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(ee.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(e_.Ip, {
                    className: nL.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nL.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nU = n(973912),
    nD = n(871123),
    nG = n(44724),
    nF = n(501573);
function nH() {
    (0, nG.default)({ guildId: (0, nD.zf)() });
}
function nV(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e,
        { analyticsLocations: s } = (0, w.Ay)([k.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nP, {
              heading: ep.intl.string(ep.t["vy/61K"]),
              subheading: ep.intl.string(ep.t.tEee9t),
              markAsDismissed: l,
              className: nF.Zj,
              contentClassName: nF.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nU.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nF.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nF.UD,
                      children: (0, i.jsx)(e$.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ep.intl.string(ep.t.rg9FQp),
                          onClick: nH,
                      }),
                  }),
              ],
          });
}
function nW(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nR.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
                s = (0, c.bG)([nM.A], () => (null != i ? nM.A.getFirstWishlistId(i.id) : null)),
                a = (0, nw.i)((e) => e.recommendationApplicationIds),
                o = (0, nk.rY)(),
                d = (0, nk.qx)();
            return l.useMemo(
                () => (null != a || (null == s && n) ? (0, r.uniq)([...(a ?? []), ...d, ...o]).sort() : []),
                [n, s, d, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = l.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nb.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: a } = e;
            return null == s
                ? null
                : l === u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nV, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nB = n(146901),
    nZ = n(827827);
let nz = [
        { duration: 15 * eX.A.Millis.MINUTE, label: () => ep.intl.string(ep.t["8ot6gv"]) },
        { duration: eX.A.Millis.HOUR, label: () => ep.intl.string(ep.t.UMWBZr) },
        { duration: 8 * eX.A.Millis.HOUR, label: () => ep.intl.string(ep.t.EpAXPC) },
        { duration: eX.A.Millis.DAY, label: () => ep.intl.string(ep.t["755t4q"]) },
        { duration: 3 * eX.A.Millis.DAY, label: () => ep.intl.string(ep.t["f3/1ch"]) },
        { duration: void 0, label: () => ep.intl.string(ep.t["46dqJY"]) },
    ],
    nK = "forever";
function nq(e) {
    let { status: t, currentStatus: n, description: l } = e,
        s = t !== tr.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nz.map((e) => {
                let { duration: l, label: s } = e;
                return (0, i.jsx)(
                    t9.Dr,
                    {
                        id: `${t}-${l}`,
                        label: s(),
                        action: () => (0, nZ.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? nK,
                );
            }),
        });
    return (0, i.jsx)(t9.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, tJ.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eS.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nZ.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nY(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nB._)(e);
    return "today" === t
        ? ep.intl.formatToPlainString(ep.t.ZxxHIO, { timeString: i })
        : ep.intl.formatToPlainString(ep.t["9OFjSe"], { dateString: n, timeString: i });
}
var n$ = n(996988),
    nQ = n(656884);
function nX(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s, highlightBadge: r, openedAt: o, className: d } = e,
        h = __OVERLAY__,
        g = (0, tG.Ay)(t.id, void 0),
        { analyticsLocations: f } = (0, w.Ay)(k.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tD.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: E, height: C } = (0, eR.Ay)(),
        { isHoveringOrFocusing: I, isHovering: _ } = (0, e4.A)(E);
    l.useEffect(() => {
        s?.(E.current);
    }, [E, s]),
        l.useEffect(
            () => (t_.A.setState({ isOpen: !0 }), () => t_.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let T = (0, c.bG)([t7.A], () => t7.A.getStatus(t.id)),
        j = nY(t5.CY.useSetting()),
        S = (0, c.bG)([t6.A], () => t6.A.hidePersonalInformation),
        N = (0, tC.kB)(),
        y = t5.Q_.useSetting(),
        b = (function (e) {
            let t = t5.CY.useSetting(),
                n = (0, tC.kB)(),
                l = t5.Jr.useSetting();
            function s(i) {
                let l = nY(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tr.clD.DND:
                        return n ? ep.intl.string(ep.t.day5A6) : ep.intl.string(ep.t["tq/fMK"]);
                    case tr.clD.INVISIBLE:
                        return ep.intl.string(ep.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: nz.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            t9.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tC.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? nK,
                        );
                    }),
                }),
                r = nq({ status: tr.clD.ONLINE, currentStatus: e }),
                o = nq({ status: tr.clD.IDLE, currentStatus: e, description: s(tr.clD.IDLE) }),
                d = nq({ status: tr.clD.DND, currentStatus: e, description: s(tr.clD.DND) }),
                c = nq({ status: tr.clD.INVISIBLE, currentStatus: e, description: s(tr.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    r,
                    (0, i.jsx)(t9.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(t9.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      t9.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ep.intl.string(ep.t.gJRnwK),
                                          iconLeft: eN.a,
                                          leadingAccessory: { type: "icon", icon: eN.a },
                                          badge: { text: ep.intl.string(ep.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? ep.intl.format(ep.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            ep.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : ep.intl.string(ep.t["Br1q+x"]),
                                          action: () => {
                                              (0, tC.ES)(!n);
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
        })(T),
        M = (function (e) {
            let t = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
                n = (0, c.bG)([t6.A], () => t6.A.hidePersonalInformation),
                l = (0, c.bG)([nn.A], () => (0, tT.M)(nn.A.theme)),
                { multiAccountUsers: s } = (0, no.K)(),
                a = s.map((s) => {
                    let a = new ni.A(s),
                        r = a.id === t?.id,
                        o = s.tokenStatus === nr.U.INVALID,
                        d = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        t9.Dr,
                        {
                            id: a.id,
                            focusedClassName: nu.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nu.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nu.DD,
                                            children: [
                                                (0, i.jsx)(ee.E, {
                                                    className: nu.gE,
                                                    variant: "text-sm/normal",
                                                    children: tJ.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(ee.E, {
                                                        className: nu.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(ne.y, {
                                                size: "sm",
                                                color: t
                                                    ? t8.A.unsafe_rawColors.WHITE.css
                                                    : t8.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? t8.A.unsafe_rawColors.BRAND_500.css
                                                        : t8.A.unsafe_rawColors.WHITE.css,
                                                className: nu.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nt.E, {
                                                color: t8.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? t8.A.unsafe_rawColors.BRAND_500.css
                                                        : t8.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nu.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nd.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (ns.default.track(tr.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tr.JJy.USER_PROFILE },
                                        }),
                                        na.Mx(n, void 0, nc.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(t9.bX, {}),
                            (0, i.jsx)(t9.Dr, {
                                id: "manage-accounts",
                                label: ep.intl.string(ep.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nd.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        R = (0, tU.A)({ analyticsLocations: f }),
        O = (0, tN.TW)(t),
        L = l.useRef(null),
        P = l.useRef(null),
        U = (0, tf.A)(g?.profileFrame?.skuId, "UserProfileAccountPopout"),
        D = (0, tg.A)(g?.profileFrame?.skuId);
    (0, tA.A)({ skuId: g?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: f });
    let G = l.useRef((0, t_.A)((e) => e.shouldRenderTenureLevelUp)),
        F = l.useMemo(() => (0, tv.A)(), []),
        [H, V] = l.useState(() => t_.A.getState().shouldRenderTenureLevelUp);
    function W(e) {
        n?.(), (0, tF.openUserProfileModal)({ customStatusPrompt: F, sourceAnalyticsLocations: f, ...x, ...e });
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            V(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let B = g?.widgets != null && g.widgets.length > 0,
        Z = l.useCallback(() => {
            n();
        }, [n]),
        z = l.useCallback(() => {
            R(), Z();
        }, [R, Z]),
        { enabled: K } = ek.A.useConfig({ location: "UserProfileAccountPopout" }),
        Y = (0, q.ux)("UserProfileAccountPopout"),
        [$, Q] = (0, tE.kn)(Y ? [u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE] : []),
        X = $ === u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
        J = l.useId();
    return (0, i.jsx)(w.f5, {
        value: f,
        children: (0, i.jsx)(tD.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: g?.fetchStartedAt,
            fetchEndedAt: g?.fetchEndedAt,
            isLoaded: g?.isLoaded,
            children: (0, i.jsxs)(eI.l, {
                ref: E,
                "aria-labelledby": J,
                className: a()(eP.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eE.H, { id: J, children: ep.intl.string(ep.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eE.F, {
                        children: [
                            (0, i.jsx)(nW, { displayProfile: g, handleOpenUserProfileModal: W, height: C }),
                            (0, i.jsxs)(tq.A, {
                                className: eP.BK,
                                user: t,
                                displayProfile: g,
                                themeType: n$.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nQ.wx,
                                        children: [
                                            (0, i.jsx)(tW.A, { user: t, displayProfile: g, themeType: n$.d.POPOUT }),
                                            (0, i.jsx)(tH.A, {
                                                user: t,
                                                displayProfile: g,
                                                themeType: n$.d.POPOUT,
                                                onOpenProfile: h ? void 0 : W,
                                            }),
                                            (0, i.jsx)(t2.A, {
                                                ref: L,
                                                user: t,
                                                themeType: n$.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: F,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(e_.Ip, {
                                        className: eP.rf,
                                        style: { pointerEvents: H ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tZ.A, { userId: t.id }),
                                            (0, i.jsx)(tY.Ay, {
                                                className: eP.eF,
                                                user: t,
                                                displayName: t4.Ay.getName(void 0, null, t),
                                                onClickName: h ? void 0 : W,
                                                displayNameTrailing: (0, i.jsx)(t1, { user: t, isVisible: I }),
                                                pronouns: g?.pronouns,
                                                trailing: (0, i.jsx)(tV.A, {
                                                    displayProfile: g,
                                                    themeType: n$.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: G.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tB.A, { isPremiumUser: O, onInteraction: n }),
                                            (0, i.jsx)(t3.A, {
                                                userId: t.id,
                                                userBio: g?.bio,
                                                hidePersonalInformation: S,
                                                onClose: n,
                                            }),
                                            B &&
                                                (0, i.jsx)(tK.A, {
                                                    user: t,
                                                    widgets: g?.widgets,
                                                    onOpenUserProfileModal: W,
                                                }),
                                            (0, i.jsx)(tz.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: W,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eP.T_,
                                                children: [
                                                    (0, i.jsx)(tq.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eG, {
                                                            children: [
                                                                (0, i.jsx)(eD, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ep.intl.string(ep.t.s5vZlQ),
                                                                    icon: eT.R,
                                                                    trailing:
                                                                        X &&
                                                                        (0, i.jsx)(ej.Lp, {
                                                                            text: ep.intl.string(ep.t.y2b7CA),
                                                                            "aria-hidden": !0,
                                                                        }),
                                                                    onClick: () => {
                                                                        X && Q(em.i.TAKE_ACTION), z();
                                                                    },
                                                                    ref: P,
                                                                }),
                                                                (0, i.jsx)(eD, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(ny, {}),
                                                                    sublabel: null != j && j,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eS.nW, { status: T, size: 12 }),
                                                                    trailing:
                                                                        (N || T === tr.clD.DND) &&
                                                                        (0, i.jsx)(eN.a, { size: "xxs" }),
                                                                    renderSubmenu: ev.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eU, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eP.hQ,
                                                                                  "aria-label": ep.intl.string(
                                                                                      ep.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: b,
                                                                              });
                                                                          },
                                                                    onClick: ev.Fr
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
                                                                                                      eC.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              ep.intl.string(
                                                                                                                  ep.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(ey.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  ep.intl.string(
                                                                                                                      ep
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
                                                                (0, i.jsx)(tm, { onClose: n, popoutContainerRef: E }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tq.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eG, {
                                                            children: [
                                                                (0, i.jsx)(eD, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eb.r,
                                                                    label: ep.intl.string(ep.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nd.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eU, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ep.intl.string(ep.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: M,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tX.p5 &&
                                                                    y &&
                                                                    (0, i.jsx)(eD, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eM.L,
                                                                        label: ep.intl.string(ep.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tX.C)(t.id), n();
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
                                        (0, i.jsx)(tp.A, { skuId: g.profileEffect.skuId, isHovering: _ }),
                                    null != U && (0, i.jsx)(tx.A, { frame: U, fadeIn: D }),
                                ],
                            }),
                            K && (0, i.jsx)(nT, { targetElementRef: P, onClose: n }),
                            (0, i.jsx)(tL, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nJ = n(371912),
    n0 = n(655116),
    n1 = n(106531),
    n2 = n(148411),
    n3 = n(342296),
    n5 = n(852712),
    n7 = n(167579),
    n6 = n(173660),
    n4 = n(451409),
    n8 = n(763827),
    n9 = n(499156),
    ie = n(731854);
let it = 2.5 * eX.A.Millis.SECOND,
    ii = +eX.A.Millis.HOUR;
var il = n(459838),
    is = n(485296);
let ia = 3 * eX.A.Millis.SECOND,
    ir = +eX.A.Millis.DAY;
var io = n(616356),
    id = n(734057),
    ic = n(629016),
    iu = n(186111),
    ih = n(967198),
    im = n(486020),
    ip = n(625494),
    ig = n(536194),
    iA = n(19575),
    ix = n(994314),
    iv = n(485599),
    iE = n(338854);
function iC(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: s, shouldShow: a = !0, children: r } = e,
        o = (0, eF.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            a && o
                ? (0, i.jsx)(iE.H, {
                      targetElementRef: t,
                      title: ep.intl.string(td.default.Qn21R6),
                      body: ep.intl.string(td.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: s,
                      caretConfig: { align: "center" },
                      action: {
                          text: ep.intl.string(ep.t.RzWDqY),
                          onClick: function () {
                              n(em.i.TAKE_ACTION), l();
                          },
                      },
                      onRequestClose: function () {
                          n(em.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iI = n(626584),
    i_ = n(757036),
    iT = n(591179),
    ij = n(531685),
    iS = n(259065),
    iN = n(864386);
let iy = new iI.A("DisplayNameStylesFlywheelCoachmark");
function ib(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, w.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, c.bG)([ij.A], () => ij.A.isFocused()),
        d = (0, i_.L)(tb.PremiumTypes.TIER_2),
        u = (0, iT.X)("DisplayNameStylesFlywheelCoachmark"),
        h = (0, l.useCallback)(() => {
            t(em.i.TAKE_ACTION);
            let e = nl.default.getCurrentUser();
            u && null != e
                ? (0, tF.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: a,
                      onModalOpen: () => {
                          (0, iS.L)({ analyticsLocations: a, stackingBehavior: "stack" });
                      },
                  })
                : (0, es.openUserSettings)(el.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                      (0, iS.L)({ analyticsLocations: a });
                  });
        }, [t, a, u]),
        m = (0, l.useCallback)(() => {
            t(em.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iy.error) : o || r.current?.pause();
    }, [o]);
    let p = d ? [ep.intl.string(iN.default.TyUdka)] : [ep.intl.string(iN.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            (0, i.jsx)(nh.A, {
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
                title: ep.intl.string(iN.default.cYwrp8),
                body: p,
                actions: [{ text: ep.intl.string(ep.t["4P5I8V"]), variant: "primary", onClick: h }],
            }),
        ],
    });
}
var iM = n(45780),
    iR = n(696451),
    ik = n(71393),
    iw = n(685073),
    iO = n(228366);
let iL = { lastSeenInfos: {} },
    iP = iL;
class iU extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iP = e ?? iL;
    }
    getState() {
        return iP;
    }
    getGuildLastSeenInfo(e) {
        return iP.lastSeenInfos[e] ?? null;
    }
}
let iD = new iU(iO.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iP.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iP = iL;
    },
});
var iG = n(116833),
    iF = n(514661);
let iH = new iI.A("GuildTagAvailableCoachmark");
function iV(e) {
    let t = (0, c.bG)([ik.A], () => ik.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iO.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: l, onAdoptTag: s, onEditProfile: a } = (0, iF.A)(t?.id ?? null, () => n(em.i.TAKE_ACTION));
    if (null == t || !(0, iw.q0)(t))
        return iH.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: l, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nh.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iG.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t["m/Tc3n"], { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(em.i.USER_DISMISS),
            }),
        ],
    });
}
function iW(e) {
    let t = (0, c.bG)([ik.A], () => ik.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: s, onEditProfile: a } = (0, iF.A)(t?.id ?? null, () => n(em.i.TAKE_ACTION));
    if (null == t || !(0, iw.q0)(t))
        return iH.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: l, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nh.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iG.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t.VFqnyU, { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(em.i.USER_DISMISS),
            }),
        ],
    });
}
var iB = n(843010),
    iZ = n(764231),
    iz = n(425713);
function iK(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tM(),
        s = (0, c.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        a = (0, t_.A)((e) => e.isOpen),
        r = (0, iB.G)();
    return s || null == l || a || r
        ? null
        : (0, i.jsx)(nb.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(iq, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iq(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        r = tb.sp.indexOf(t),
        o = (0, iz.I)(tb.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, l.useCallback)(() => {
            n(em.i.TAKE_ACTION),
                t_.A.setState({ shouldRenderTenureLevelUp: !0 }),
                ip._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(em.i.USER_DISMISS);
        }, [n]),
        u = tb.VD[t],
        h = ep.intl.formatToPlainString(ep.t.ewkaVR, {
            timeMilestone: (0, iZ.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: ep.intl.string(ep.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(nh.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ep.intl.string(ep.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function iY(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nJ.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iM.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tr.dJq),
                l = (0, c.bG)([ik.A, nl.default, iR.Ay], () => {
                    if (null === e) return !1;
                    let t = ik.A.getGuild(e);
                    if (void 0 === t || !(0, iw.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nl.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iR.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tE.ww)(l && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tr.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                s = (0, c.bG)([iD], () => (null === l ? null : iD.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([ik.A], () => ik.A.getGuild(l)?.profile?.tag),
                r = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && s?.tag === a,
                d = null !== l && r && !o;
            return (0, tE.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? s === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iW, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iV, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iK, { groupName: em.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nb.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: em.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(ib, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iC, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eW.p,
                                            children: e.children,
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
var i$ = n(615675),
    iQ = n(900797),
    iX = n(847374),
    iJ = n(348858),
    i0 = n(617354),
    i1 = n(829773),
    i2 = n(42473),
    i3 = n(490704),
    i5 = n(967194);
function i7(e) {
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
        } = (0, iJ.I)(h ? "undeafen" : "deafen"),
        x = n ? i$.T : m,
        { name: v } = (0, ex.x5)(ie.oh.AUDIO_OUTPUT),
        E = (0, i0.A)(t, n, s),
        { analyticsLocations: C } = (0, w.Ay)(k.A.AUDIO_OUTPUT_BUTTON),
        I = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [h, p]),
        (0, i.jsx)(w.f5, {
            value: C,
            children: (0, i.jsx)(g.Y, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(w.f5, {
                            value: C,
                            children: (0, i.jsx)(i1.A, {
                                onInteraction: (0, F.s)("AudioDeviceMenu", k.A.ACCOUNT),
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
                        m = u ? iQ.t : iX.a;
                    return (0, i.jsxs)("div", {
                        ref: I,
                        className: a()(i3.Lh, { [i3.v8]: h, [i3.q6]: u }),
                        children: [
                            (0, i.jsx)(i2.A, {
                                "aria-checked": h,
                                "aria-label": ep.intl.string(ep.t.wjcRFX),
                                className: i3.eT,
                                disabled: s,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? i5.o : void 0,
                                innerClassName: a()({ [i5.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: f,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(i2.A, {
                                className: a()(i3.UT, { [i3.q6]: u }),
                                disabled: s,
                                icon: (0, i.jsx)(m, {
                                    className: i3.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? ep.intl.format(ep.t["f+DDY/"], { outputDeviceName: v })
                                    : ep.intl.string(ep.t.aA4Vce),
                                "aria-label": c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: v })
                                    : ep.intl.string(ep.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i6 = n(666654),
    i4 = n(523875),
    i8 = n(993719);
let i9 = {};
class le extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i9[e] ?? !1;
    }
}
let lt = new le(iO.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i9[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i9[t] = !1;
    },
});
var ln = n(362823),
    li = n(980923),
    ll = n(224585),
    ls = n(949341),
    la = n(973324);
function lr(e) {
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
            dismissTooltips: E,
            speaking: C,
        } = e,
        { showPTTIconIndicator: I } = n9.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, c.bG)([n4.Ay], () => n4.Ay.getMode() === ie.TB.PUSH_TO_TALK),
        T = (0, c.bG)([n4.Ay], () => n4.Ay.getSettings().modeOptions.shortcut),
        j = (0, c.bG)([lt], () => lt.getIsTutorialActive(ln.v.MUTE_TUTORIAL)),
        S = (0, c.bG)([n8.A], () => null != n8.A.getChannelId()),
        { name: N } = (0, ex.x5)(ie.oh.AUDIO_INPUT),
        { enabledInputProfiles: y } = (0, n5.d)({ location: "MicrophoneButton" }),
        b = l.useRef(null),
        M = n || r || s,
        R = (0, i4.L)(M ? "unmute" : "mute"),
        { analyticsLocations: O } = (0, w.Ay)(k.A.AUDIO_INPUT_BUTTON),
        { Component: L, events: P, play: U } = R,
        D = s || r ? i6.O : L;
    l.useEffect(() => () => U(), [M, U]);
    let G = (0, li.A)(n, s, r, o);
    t = f
        ? { tooltipType: "green_void_do_not_use", tooltipText: ep.intl.string(ep.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ep.intl.format(ep.t.c1qUOQ, { keybind: e0.dI(T).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: G };
    let H = I && _ && S,
        V = M ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = l.useCallback(() => {
            m(), j && i8.N(ln.v.MUTE_TUTORIAL);
        }, [m, j]);
    return (0, i.jsxs)(w.f5, {
        value: O,
        children: [
            (0, i.jsx)(g.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(w.f5, {
                            value: O,
                            children: (0, i.jsx)(i1.A, {
                                onInteraction: (0, F.s)("AudioDeviceMenu", k.A.ACCOUNT),
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
                        { isShown: s } = n,
                        r = s ? iQ.t : iX.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(i3.Lh, { [i3.v8]: M, [i3.q6]: s }),
                        children: [
                            (0, i.jsx)(i2.A, {
                                "aria-checked": M,
                                "aria-label": ep.intl.string(ep.t.w4m945),
                                className: i3.eT,
                                disabled: o,
                                icon: (0, i.jsx)(D, { size: "custom", width: 20, height: 20, color: V, className: d }),
                                onClick: W,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    u(), P.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    h(), P.onMouseLeave();
                                },
                                plated: null != p,
                                redGlow: M,
                                role: "switch",
                                ...t,
                                children: H ? (0, i.jsx)("div", { className: a()(ls.U, { [ls.z]: C }) }) : null,
                            }),
                            (0, i.jsx)(i2.A, {
                                "aria-label": x
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: N })
                                    : ep.intl.string(ep.t.fRzCbB),
                                className: a()(i3.UT, { [i3.q6]: s }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: i3.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: V,
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
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: N })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: x
                                    ? ep.intl.format(ep.t["18wnuD"], { inputDeviceName: N })
                                    : ep.intl.string(ep.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nh.A, {
                targetElementRef: b,
                shouldShow: j,
                graphic: { type: "image", src: la.A },
                onRequestClose: () => {
                    i8.N(ln.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ep.intl.string(ll.default.VG4zAf),
                body: ep.intl.string(ll.default["8VIRzR"]),
            }),
        ],
    });
}
var lo = n(935399),
    ld = n(505312),
    lc = n(848847),
    lu = n(88001),
    lh = n(466919),
    lm = n(438705);
function lp(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = l.useCallback(() => {
            s(), (0, es.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(nh.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lm },
        shouldShow: n,
        title: ep.intl.format(lh.default.bx8sR9, { premiumGroupProductName: (0, lu.DP)() }),
        body: ep.intl.format(lh.default.Pw4OFZ, { premiumGroupProductName: (0, lu.DP)() }),
        onRequestClose: s,
        actions: [{ text: ep.intl.string(lh.default.DD26QR), onClick: a }],
    });
}
var lg = n(873298),
    lf = n(840387);
function lA(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, lf.Z)(),
        a = t5.KP.useSetting(),
        r = s && a !== lg.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            t(em.i.TAKE_ACTION), (0, es.openUserSettings)(el.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, l.useCallback)(() => {
            t(em.i.USER_DISMISS);
        }, [t]),
        c = r
            ? a === lg.KP.FRIENDS_ONLY
                ? ep.intl.string(ep.t["/hogEy"])
                : ep.intl.string(ep.t["6hEfm1"])
            : ep.intl.string(ep.t.bnNxW1);
    return (0, i.jsx)(nh.A, {
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
        title: ep.intl.string(ep.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ep.intl.string(ep.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function lx(e) {
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
    (0, lo.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            ip._.subscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                ip._.unsubscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let g = l.useCallback(() => {
        p(!1), a();
    }, [a]);
    t = null != s ? ep.intl.formatToPlainString(ep.t.Gzh6ZP, { webBuildOverride: s.id }) : ep.intl.string(ep.t.cduTBL);
    let f = eK.Z,
        A = (0, ld.w)();
    return (
        (f = null != s ? lc.H : A.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i2.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: g,
                    onContextMenu: r,
                    "aria-label": ep.intl.string(ep.t.cduTBL),
                    icon: (0, i.jsx)(f, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...A.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lp, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, i.jsx)(nb.Ay, {
                    contentTypes: o,
                    groupName: em.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(lA, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var lv = n(489902);
let lE = iA.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    lC = 2.5 * eX.A.Millis.SECOND,
    lI = 2 * eX.A.Millis.MINUTE,
    l_ = 2 * eX.A.Millis.MINUTE,
    lT = 5 * eX.A.Millis.SECOND;
function lj(e) {
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
        E = t ?? v,
        I = (0, im.F_)({ avatarDecoration: A, size: (0, V.Te)(p._3.SIZE_32) }),
        _ = (0, Y.A)(),
        {
            updateOpenPopoutRef: j,
            highlightBadge: S,
            setHighlightBadge: N,
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
                (0, T.A)(() => a(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        ip._.subscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ip._.unsubscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        y = (0, B.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(C.A, {
              object: tr.ZSU.AVATAR,
              children: (0, i.jsx)(n3.A, {
                  user: o,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, n2.A)(o.id, o.getAvatarURL(void 0, n3.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(nX, {
                          currentUser: o,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lv.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: g.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), N(void 0);
                  },
                  children: (e) => {
                      j(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: E,
                          style: y,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(lv.Q9, { [lv.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(f.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ep.intl.string(ep.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: lv.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lE, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: I,
                                  status: r ? tr.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: lv.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lv.oM, children: h(_) }),
                          ],
                      });
                  },
              }),
          });
}
class lS extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(l_, null, !1);
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
        (0, D.A)(e, t, tr.JJy.ACCOUNT_PANEL), (0, G.X)(k.A.ACCOUNT, G.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, U.A)(e, tr.JJy.ACCOUNT_PANEL), (0, G.X)(k.A.ACCOUNT, G.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n8.A.isConnected() ? (0, es.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL) : (0, es.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
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
                    n.e("62279"),
                    n.e("67454"),
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
                    n.e("39680"),
                    n.e("21194"),
                    n.e("99272"),
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
                    n.e("37870"),
                    n.e("3515"),
                    n.e("77335"),
                    n.e("67943"),
                    n.e("40775"),
                    n.e("38847"),
                    n.e("41185"),
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
                    n.e("22103"),
                    n.e("6174"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("81647"),
                    n.e("11310"),
                    n.e("34552"),
                    n.e("76602"),
                    n.e("91763"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("72963"),
                    n.e("52511"),
                    n.e("21402"),
                    n.e("40402"),
                    n.e("7575"),
                    n.e("53930"),
                    n.e("42724"),
                    n.e("93766"),
                    n.e("13823"),
                    n.e("24303"),
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
                    n.e("72789"),
                    n.e("54622"),
                    n.e("28203"),
                    n.e("25949"),
                    n.e("88342"),
                    n.e("6949"),
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
                    n.e("42390"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("93438"),
                    n.e("36227"),
                    n.e("95340"),
                    n.e("27048"),
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
                    n.e("69747"),
                    n.e("57458"),
                    n.e("59466"),
                    n.e("8829"),
                    n.e("19193"),
                    n.e("1243"),
                    n.e("75133"),
                    n.e("54241"),
                    n.e("15920"),
                    n.e("77487"),
                    n.e("58164"),
                    n.e("21930"),
                    n.e("96804"),
                    n.e("3663"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
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
                    n.e("755"),
                    n.e("79435"),
                    n.e("60989"),
                    n.e("68083"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("49013"),
                    n.e("30167"),
                    n.e("76814"),
                    n.e("51892"),
                    n.e("94607"),
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
                    n.e("46430"),
                    n.e("73611"),
                    n.e("79006"),
                    n.e("38733"),
                    n.e("94888"),
                    n.e("89541"),
                    n.e("44727"),
                    n.e("46149"),
                    n.e("5871"),
                    n.e("27462"),
                    n.e("86546"),
                    n.e("22455"),
                    n.e("3930"),
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
                    n.e("45419"),
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
                    n.e("56862"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, F.s)("UserSettingsMenu", k.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, F.s)("AudioDeviceMenu", k.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n5.d)({ location: "Account" });
                    return (0, i.jsx)(w.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: E.Z_,
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
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(w.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: E.Z_,
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lI;
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
                      this.speakingWhileMutedTooltipTimeout.start(lC, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(lC, () =>
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
                    (0, i.jsx)(A.A, { children: tJ.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lv.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tr.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: tJ.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(K.A, { activity: o, emojiClassName: lv.Zg, className: lv.WO }),
                  ],
              })
            : null != s && s !== tr.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: tJ.Ay.humanizeStatus(s) }),
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
                          className: lv.eW,
                          children: (0, i.jsx)(iv.A, {
                              className: a()({ [lv.e8]: null != e }),
                              children: (0, i.jsx)(Q.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? $.G.ANIMATED : $.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lv.XP,
                          children: (0, i.jsx)(ix.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iY, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(lj, {
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
                                  className: a()(lv.kL, { [lv.UG]: null != n, [lv.bc]: !l, [lv.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(z.A, { nameplate: t, hovered: r, placement: Z.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(lN, {
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
                      (0, i.jsx)(eA, {}),
                  ],
              });
    }
}
function lN(e) {
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
            nameplate: E,
            accountContainerRef: C,
            deviceChangedTooltipType: I,
            shouldShowPTTJoinTooltip: _ = !1,
            dismissTooltips: T,
            speaking: j,
        } = e,
        S = (0, B.K)(E);
    return (0, i.jsxs)("div", {
        className: lv.Uo,
        style: S,
        children: [
            (0, i.jsx)(lr, {
                accountContainerRef: C,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: g,
                iconForeground: null != E ? lv.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === I,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: _,
                dismissTooltips: T,
                speaking: j,
            }),
            (0, i.jsx)(i7, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: m,
                onContextMenu: f,
                awaitingRemote: l,
                iconForeground: null != E ? lv.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === I,
                dismissTooltips: T,
            }),
            (0, i.jsx)(lx, {
                webBuildOverride: c,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: v.settings,
                iconForeground: null != E ? lv.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function ly(e) {
    let t = (0, c.bG)([n8.A], () => null != n8.A.getChannelId()),
        n = (0, ex.Py)(e),
        i = l.useRef(new h.Ep()),
        [s, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(lT, () => {
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
function lb() {
    let e = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
        t = (0, c.bG)([nE.default], () => nE.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nj.A], () => {
            let e = nj.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tr.$pd.STREAMING;
                    }),
                status: nj.A.getStatus(),
            };
        }),
        r = (0, c.bG)([io.A], () => io.A.getAnyStreamForUser(t)),
        d = (0, I.A)({ userId: t }),
        m = (0, c.bG)([is.A], () => is.A.getVoiceVolume(t)),
        p = tJ.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([n8.A, id.A], () => {
            let e = n8.A.getChannelId();
            return null != e ? id.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: A, suppress: x } = (0, n6.A)(g),
        { selfDeaf: E, deaf: C } = (0, n7.A)(g),
        T = (0, c.bG)([O.A], () => ((0, L.kK)() ? O.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([n4.Ay], () => n4.Ay.getSpeakingWhileMuted()),
        S = (0, c.bG)([P.A], () => P.A.isFullscreenInContext()),
        N = (0, c.bG)([iu.A], () => iu.A.hasLayers()),
        y = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || N || ig.P.isDisallowPopupsSet() || S,
        b = (0, c.bG)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        M = (0, c.bG)([ih.A], () => ih.A.getGuildId()),
        R = e?.avatarDecoration,
        U = (0, H.A)(R),
        D = tJ.Ay.useName(e) ?? "",
        { analyticsLocations: G } = (0, w.Ay)(k.A.ACCOUNT),
        F = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: V } = (0, nJ.c9)(),
        B = (0, c.bG)([n0.A, nl.default, ic.A], () => {
            let e,
                t = n0.A.getSyncingWith(),
                n = n0.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(ic.A.getParty(e) ?? []))
                        .map((e) => nl.default.getUser(e))
                        .filter(nI.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        z = (0, n1.lX)("AccountCoachmark"),
        K = (0, q.ux)("AccountCoachmark");
    !y &&
        (K && Z.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        z && Z.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Y, dismissTooltip: $ } = ly(ie.oh.AUDIO_INPUT),
        { shouldShowTooltip: Q, dismissTooltip: J } = ly(ie.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ee, dismissTooltip: et } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, c.bG)([n4.Ay], () => n4.Ay.getMode() === ie.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n8.A],
                    () => null != n8.A.getChannelId() && (n8.A.getDuration() ?? Number.MAX_VALUE) < it,
                ),
                [s, a] = l.useState(!1),
                { showPTTJoinTooltip: r } = n9.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = l.useRef(new h.Ep()),
                d = l.useRef(new h.Ep());
            l.useEffect(() => {
                if (i && n && !e) {
                    if ((n9.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        d.current.start(ii, () => {
                            t(!1);
                        }),
                        o.current.start(it, () => {
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
        en = (function () {
            let { showPTTSpeakingIndicator: e } = n9.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = l.useState(!1),
                i = (0, c.bG)([n4.Ay], () => n4.Ay.getMode() === ie.TB.PUSH_TO_TALK),
                s = (0, c.bG)([n8.A], () => n8.A.getRTCConnectionId()),
                a = (0, c.bG)([n4.Ay], () => {
                    let e = n4.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < ir;
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
                        let s = (i & ie.ME.VOICE) === ie.ME.VOICE,
                            a = is.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              l.start(ia, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && n4.Ay.getMediaEngine().on(il.bg.VoiceActivity, o),
                        () => {
                            n4.Ay.getMediaEngine().removeListener(il.bg.VoiceActivity, o), l.stop();
                        }
                    );
                }, [e, i, a, s]),
                t
            );
        })(),
        ei = l.useMemo(() => (Y ? "input" : Q ? "output" : void 0), [Y, Q]),
        el = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        $();
                        break;
                    case "output":
                        J();
                }
            },
            [$, J],
        );
    return (0, i.jsx)(w.f5, {
        value: G,
        children: (0, i.jsx)(lS, {
            currentUser: e,
            username: D,
            activities: n,
            applicationStream: r,
            voiceChannel: g,
            dismissibleContents: Z,
            userTag: p,
            occluded: y,
            selfDeaf: E,
            selfMute: A,
            serverDeaf: C,
            serverMute: f,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: j,
            speakingWhilePTTInactive: en,
            status: a,
            streaming: s,
            suppress: x,
            webBuildOverride: T,
            awaitingRemote: b,
            nameplate: F,
            selectedGuildId: M,
            avatarDecoration: U,
            isQuestBarEmpty: V,
            isListenAlongVisible: B,
            deviceChangedTooltipType: ei,
            onDismissDeviceChangedTooltip: () => el(ei),
            shouldShowPTTJoinTooltip: ee,
            dismissPTTJoinTooltip: et,
        }),
    });
}
