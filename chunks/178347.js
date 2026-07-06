n.d(t, { g: () => lI, A: () => ly }), n(321073);
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
    p = n(97808),
    m = n(778712),
    f = n(922016),
    g = n(939249),
    A = n(140735),
    x = n(312138);
if (21552 == n.j) var v = n(192308);
var E = n(442433),
    T = n(820284),
    C = n(717558),
    _ = n(964486),
    N = n(220839),
    I = n(397244),
    j = n(394871),
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
    w = n(793574),
    O = n(688810),
    D = n(521502),
    k = n(380610),
    P = n(313961),
    U = n(18235),
    L = n(183184),
    G = n(384059),
    F = n(480890),
    V = n(601255),
    H = n(562819),
    W = n(449582),
    B = n(351952),
    z = n(88686),
    Z = n(174755),
    K = n(302223),
    q = n(248778),
    Y = n(609425),
    J = n(922301),
    X = n(660184),
    $ = n(643501),
    Q = n(534514),
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
    let [h, p] = (0, eo.z)(() => ({ x: 0, y: 0, config: eu }));
    return (
        l.useEffect(() => {
            p({ x: r.x, y: r.y });
        }, [r.x, r.y, p]),
        (0, i.jsx)(S.animated.div, {
            style: { transform: (0, S.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ec.T, t),
        })
    );
}
var ep = n(49999),
    em = n(375708),
    ef = n(275883);
function eg(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: l } = e,
        s = er.A.useIsEligible(),
        a = (0, en.JZ)(t),
        r = null != n,
        o = null != l ? { color: l } : void 0,
        { analyticsLocations: d } = (0, O.Ay)(w.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, en.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, es.openUserSettings)(el.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(ep.i.TAKE_ACTION);
    }
    return s && !a
        ? (0, i.jsx)(ei.Ay, {
              children: (0, i.jsxs)("div", {
                  className: ef.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, i.jsxs)("div", {
                              className: ef.o5,
                              children: [
                                  (0, i.jsx)(eh, { className: ef.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: ef.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: ef.c8 }),
                      (0, i.jsxs)("div", {
                          className: ef.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(Q.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: em.intl.string(em.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(ee.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: em.intl.format(em.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      g.D,
                                                      {
                                                          tag: "span",
                                                          className: ef.nf,
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
                              (0, i.jsx)(g.D, {
                                  className: ef.l2,
                                  onClick: () => c(ep.i.USER_DISMISS),
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
        : (0, i.jsx)(eg, {
              dismissibleContent: ea.A.coachmarkDismissibleContent,
              backgroundColor: ea.A.coachmarkBackgroundColor,
              specialTextColor: ea.A.coachmarkSpecialTextColor,
          });
}
var ex = n(74848),
    ev = n(607399),
    eE = n(707554),
    eT = n(224640),
    eC = n(305866),
    e_ = n(364522),
    eN = n(22231),
    eI = n(812993),
    ej = n(133171),
    eS = n(780338);
if (21552 != n.j) var v = n(192308);
var ey = n(980707),
    eb = n(26137),
    eM = n(473935),
    eR = n(765671),
    ew = n(783041),
    eO = n(176781),
    eD = n(320448),
    ek = n(993401),
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
function eL(e) {
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
        p = null != n,
        m = (0, ek.rE)({ action: t, onClick: n }),
        [A, x] = l.useState(!1),
        E = l.useRef(null),
        T = c ?? E,
        C = null != d,
        _ = C && p,
        N = l.useCallback(() => {
            x(!0);
        }, []),
        I = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || x(!1);
        }, []);
    function j() {
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
    function S(e) {
        let t;
        return (
            (t = _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.D, { className: eP.ef, onClick: m, children: j() }),
                          (0, i.jsx)(g.D, {
                              className: eP.ap,
                              "aria-label": em.intl.string(em.t.PdRCRg),
                              ...e,
                              onClick: N,
                              children: (0, i.jsx)(eD._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : C
                  ? (0, i.jsxs)(g.D, {
                        className: eP.ef,
                        ...e,
                        onClick: N,
                        children: [
                            j(),
                            (0, i.jsx)("div", {
                                className: eP.ap,
                                children: (0, i.jsx)(eD._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(g.D, { className: eP.ef, onClick: m, children: j() })),
            (0, i.jsx)("div", { ref: T, className: eP.jG, children: t })
        );
    }
    return C
        ? (0, i.jsx)("li", {
              className: eP.j$,
              onMouseEnter: N,
              onMouseLeave: I,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: u ?? T,
                  align: h,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: I,
                  children: S,
              }),
          })
        : (0, i.jsx)("li", { className: eP.j$, children: S() });
}
function eG(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(734066),
    eV = n(274372),
    eH = n(409067),
    eW = n(271597),
    eB = n(990078),
    ez = n(475358),
    eZ = n(408278),
    eK = n(625903),
    eq = n(404778),
    eY = n(689175),
    eJ = n(821609),
    eX = n(532624),
    e$ = n(927813),
    eQ = n(879631),
    e0 = n(350535),
    e1 = n(372684),
    e2 = n(974293),
    e3 = n(572164),
    e5 = n(953932),
    e4 = n(280483),
    e6 = n(890856),
    e8 = n(713517),
    e7 = n(609174),
    e9 = n(619744);
function te(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        s = (0, e7.Y_)(),
        a = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, eW.p)({ initialEditingClipId: s.id });
            },
            [s, t],
        );
    return (0, i.jsx)(eJ.$, {
        onClick: a,
        icon: eN.R,
        variant: n,
        size: "sm",
        text: em.intl.string(em.t.bt75uw),
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
        { isHoveringOrFocusing: d } = (0, e8.A)(o),
        c = l.useCallback(() => {
            s?.(), (0, eW.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(e7.Cl, {
        clip: t,
        children: (0, i.jsx)(e6.s, {
            ref: o,
            "aria-label": em.intl.string(em.t.bt75uw),
            onClick: c,
            className: a()(ts.Z1, r),
            children: (0, i.jsxs)(ti.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eI.Lp, { className: ts.Ad, text: em.intl.string(em.t.y2b7CA) }),
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
    (0, e4.A)();
    let r = (0, c.yK)([eV.Ay], () => Object.values(eV.Ay.getClips())),
        o = (0, c.bG)([eV.Ay], () => eV.Ay.getSettings()),
        d = (0, c.bG)([eV.Ay], () => eV.Ay.getNewClipIds()),
        u = (0, e2.aJ)("ClipsPopout"),
        h = (0, c.bG)([eV.Ay], () => eV.Ay.getEnableAutoclipping()),
        p = (0, c.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(tr.hCu.SAVE_CLIP)),
        m = l.useCallback(
            (e) => {
                a?.(e);
            },
            [a],
        ),
        f = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = r.filter((e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail && (!f || !(0, eH.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, f]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        x = g.length > 16,
        v = null != p ? e0.dI(p.shortcut, !0) : null,
        E = [
            (0, eQ.$)(o.clipsLength / e$.A.Millis.SECOND),
            (0, to.zr)(o.clipsQuality.resolution),
            em.intl.formatToPlainString(em.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && E.push(em.intl.string(td.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: m,
            className: tc.SW,
            role: "dialog",
            "aria-label": em.intl.string(em.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tc.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tc.$,
                            children: [
                                (0, i.jsx)(Q.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: em.intl.string(em.t.z2jK6X),
                                }),
                                null != v && (0, i.jsx)(ez.e, { className: tc.P, shortcut: v }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tc.$s,
                            children: [
                                (0, i.jsx)(eB.m, {
                                    text: em.intl.string(em.t["3D5yo/"]),
                                    children: (0, i.jsx)(eZ.K, {
                                        onClick: () => n(),
                                        icon: eK.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": em.intl.string(em.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eB.m, {
                                    text: em.intl.string(td.default["55C2MH"]),
                                    children: (0, i.jsx)(eZ.K, {
                                        onClick: () => t(),
                                        icon: eO.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": em.intl.string(td.default["55C2MH"]),
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
                                children: h ? em.intl.string(td.default.lTwKmt) : em.intl.string(td.default.GNDqtf),
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
                                      children: (0, i.jsx)(eJ.$, {
                                          onClick: () => t(),
                                          text: em.intl.string(td.default["55C2MH"]),
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
                children: em.intl.string(td.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(ee.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: em.intl.format(td.default.y4zC7j, {
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
                          keybind: (0, i.jsx)(ez.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e5.A, {}),
        ],
    });
}
function tp(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        s = (0, eF.sw)(),
        a = !(0, c.bG)([eV.Ay], () => eV.Ay.getSettings().showPovClipsInGallery),
        r = (0, c.bG)([eV.Ay], () => {
            let e = eV.Ay.getNewClipIds();
            return a
                ? e.filter((e) => {
                      let t = eV.Ay.getClipById(e);
                      return null != t && !(0, eH.kD)(t);
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
        ? (0, i.jsx)(eL, {
              action: "PRESS_CLIPS",
              icon: eO.x,
              label: em.intl.string(em.t.z2jK6X),
              trailing: r > 0 ? (0, i.jsx)(eI.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tu, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tm = n(480335),
    tf = n(577390),
    tg = n(474257),
    tA = n(31956),
    tx = n(744808),
    tv = n(645507),
    tE = n(131607),
    tT = n(970931),
    tC = n(315710),
    t_ = n(832248),
    tN = n(462887),
    tI = n(736653),
    tj = n(439174),
    tS = n(428262),
    ty = n(878784),
    tb = n(202541);
function tM() {
    let e = (0, ty.Xb)(),
        t = (0, tS.nK)();
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
    tw = {
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
var tO = n(682165);
let tD = l.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tk() {
    let e = (0, c.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        t = (0, t_.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tM(),
                t = (0, tN.M)((0, tI.Ay)());
            if (null == e) return null;
            let n = tR[e],
                i = tw[e],
                l = {
                    currentBadge: (0, tj.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tb.sp.indexOf(e);
            if (s > 0) {
                let e = tb.sp[s - 1],
                    n = tR[e];
                (l.prevBadge = (0, tj.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light);
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
    return (0, i.jsx)(tC.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tO.i,
            children: [
                (0, i.jsx)("div", {
                    className: tO.b,
                    children: (0, i.jsx)(eB.m, {
                        text: em.intl.string(em.t.cpT0Cq),
                        children: (0, i.jsx)(eZ.K, {
                            icon: et.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": em.intl.string(em.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tD, { levelUpData: t }) }),
            ],
        }),
    });
}
var tU = n(206835),
    tL = n(183555),
    tG = n(999291),
    tF = n(975732),
    tV = n(718019),
    tH = n(413492),
    tW = n(915614),
    tB = n(744753),
    tz = n(559506),
    tZ = n(646986),
    tK = n(349419),
    tq = n(946356),
    tY = n(878555),
    tJ = n(624479),
    tX = n(206845),
    t$ = n(957565),
    tQ = n(427262),
    t0 = n(962352);
function t1(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tL.NJ)();
    return t$.p5
        ? (0, i.jsx)(tX.A, {
              text: em.intl.string(em.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tQ.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(t0.c, { [t0.R]: n }),
                      "aria-label": em.intl.string(em.t.y5MwJy),
                      children: (0, i.jsx)(tJ.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t2 = n(983495),
    t3 = n(442228),
    t5 = n(885386),
    t4 = n(290863),
    t6 = n(351906),
    t8 = n(562153),
    t7 = n(661531),
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
    np = n(661439),
    nm = n(385113),
    nf = n(352003),
    ng = n(429913),
    nA = n(334074),
    nx = n(633075),
    nv = n(667049),
    nE = n(280450),
    nT = n(90165),
    nC = n(403362),
    n_ = n(518477);
function nN(e) {
    let { targetElementRef: t, onClose: s } = e,
        [a, r] = l.useState(!1),
        o = (0, c.bG)([nE.default], () => nE.default.getId()),
        { eligibleApplications: d, markAsDismissed: h } = (function () {
            let e = (0, c.yK)([nm.A], () => nm.A.getFeaturedApplicationIds());
            (0, nf.A)(e),
                l.useEffect(() => {
                    (0, np.X)();
                }, []);
            let t = (0, c.bG)([nE.default], () => nE.default.getId()),
                n = (0, nv.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nx.R), [n]),
                s = (0, ng.A)(e),
                a = l.useMemo(() => s.filter(nC.Vq), [s]),
                r = (0, c.cf)([nT.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nT.A.getLastPlayedDateTime(e));
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
                n.e("85319"),
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
                n.e("71406"),
                n.e("56985"),
                n.e("81619"),
                n.e("67039"),
                n.e("16881"),
                n.e("17268"),
                n.e("88634"),
                n.e("86122"),
                n.e("14831"),
                n.e("25821"),
                n.e("90645"),
                n.e("44400"),
                n.e("25781"),
                n.e("86832"),
                n.e("95512"),
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
                n.e("21918"),
                n.e("11262"),
                n.e("54483"),
                n.e("62461"),
                n.e("25677"),
                n.e("73679"),
                n.e("73178"),
                n.e("333"),
                n.e("97638"),
                n.e("22995"),
                n.e("84896"),
                n.e("38759"),
                n.e("51943"),
                n.e("90072"),
                n.e("88016"),
                n.e("84133"),
                n.e("13627"),
                n.e("57940"),
                n.e("58171"),
                n.e("48404"),
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
                n.e("11301"),
                n.e("96643"),
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
                n.e("42842"),
                n.e("33115"),
                n.e("6338"),
                n.e("18573"),
                n.e("55936"),
                n.e("85404"),
                n.e("44057"),
                n.e("17879"),
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
                n.e("88131"),
                n.e("42834"),
                n.e("43430"),
                n.e("94723"),
                n.e("28866"),
                n.e("62931"),
                n.e("58529"),
                n.e("58038"),
                n.e("62531"),
                n.e("34801"),
                n.e("6174"),
                n.e("93103"),
                n.e("34552"),
                n.e("9233"),
                n.e("36877"),
                n.e("72963"),
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
                n.e("53133"),
                n.e("83870"),
                n.e("63645"),
                n.e("5636"),
                n.e("32085"),
                n.e("24038"),
                n.e("52229"),
                n.e("95340"),
                n.e("63556"),
                n.e("69747"),
                n.e("54241"),
                n.e("21930"),
                n.e("3930"),
                n.e("3663"),
                n.e("89523"),
                n.e("29260"),
                n.e("82486"),
                n.e("4098"),
                n.e("755"),
                n.e("41786"),
                n.e("96574"),
                n.e("46430"),
                n.e("4374"),
                n.e("86546"),
                n.e("82969"),
                n.e("55895"),
                n.e("48407"),
                n.e("37065"),
                n.e("43256"),
                n.e("41384"),
                n.e("43372"),
                n.e("19119"),
                n.e("73566"),
                n.e("45419"),
                n.e("87791"),
                n.e("78377"),
                n.e("53683"),
                n.e("84601"),
                n.e("9598"),
                n.e("92992"),
                n.e("86470"),
                n.e("53308"),
                n.e("54876"),
                n.e("90590"),
                n.e("14501"),
                n.e("27880"),
                n.e("8032"),
                n.e("77970"),
                n.e("75514"),
                n.e("71367"),
                n.e("75072"),
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
              title: em.intl.string(em.t.HMWL9c),
              body: em.intl.string(em.t["9hfy3A"]),
              onRequestClose: () =>
                  h(
                      d.map((e) => e.id),
                      ep.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: em.intl.string(em.t.VSLDly),
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
                                              ep.i.TAKE_ACTION,
                                          ),
                                          s();
                                  })
                                  .finally(() => r(!1));
                      },
                  },
              ],
          });
}
var nI = n(461213),
    nj = n(818348),
    nS = n(466573);
function ny() {
    let e = (0, c.bG)([nI.A], () => nI.A.getStatus()),
        t = (0, tQ.MU)(e) ?? "",
        n = e === nj.cl.INVISIBLE || e === nj.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nS.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [em.intl.string(em.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eB.m, {
                    text: em.intl.string(em.t.L99HQm),
                    children: (0, i.jsx)(nt.E, {
                        size: "xs",
                        color: t7.A.colors.STATUS_WARNING,
                        "aria-label": em.intl.string(em.t.L99HQm),
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
var nw = n(501838),
    nO = n(760716),
    nD = n(915089),
    nk = n(13808);
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
        u = (0, nD.GV)(),
        h = l.useRef(null),
        p = (0, eo.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, i.jsx)(S.animated.div, {
        className: a()(nk.kL, d),
        style: p,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nk.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nk.U1,
                    children: [
                        (0, i.jsx)(g.D, {
                            innerRef: h,
                            "aria-label": em.intl.string(em.t.WAI6xu),
                            className: nk.b,
                            onClick: () => {
                                t(ep.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(et.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(Q.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(ee.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(e_.Ip, {
                    className: nk.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nk.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nU = n(973912),
    nL = n(871123),
    nG = n(44724),
    nF = n(501573);
function nV() {
    (0, nG.default)({ guildId: (0, nL.zf)() });
}
function nH(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e,
        { analyticsLocations: s } = (0, O.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nP, {
              heading: em.intl.string(em.t["vy/61K"]),
              subheading: em.intl.string(em.t.tEee9t),
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
                      children: (0, i.jsx)(eJ.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: em.intl.string(em.t.rg9FQp),
                          onClick: nV,
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
                a = (0, nO.i)((e) => e.recommendationApplicationIds),
                o = (0, nw.rY)(),
                d = (0, nw.qx)();
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
                  ? (0, i.jsx)(nH, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nB = n(146901),
    nz = n(827827);
let nZ = [
        { duration: 15 * e$.A.Millis.MINUTE, label: () => em.intl.string(em.t["8ot6gv"]) },
        { duration: e$.A.Millis.HOUR, label: () => em.intl.string(em.t.UMWBZr) },
        { duration: 8 * e$.A.Millis.HOUR, label: () => em.intl.string(em.t.EpAXPC) },
        { duration: e$.A.Millis.DAY, label: () => em.intl.string(em.t["755t4q"]) },
        { duration: 3 * e$.A.Millis.DAY, label: () => em.intl.string(em.t["f3/1ch"]) },
        { duration: void 0, label: () => em.intl.string(em.t["46dqJY"]) },
    ],
    nK = "forever";
function nq(e) {
    let { status: t, currentStatus: n, description: l } = e,
        s = t !== tr.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nZ.map((e) => {
                let { duration: l, label: s } = e;
                return (0, i.jsx)(
                    t9.Dr,
                    {
                        id: `${t}-${l}`,
                        label: s(),
                        action: () => (0, nz.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
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
        label: (0, tQ.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(ej.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nz.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nY(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nB._)(e);
    return "today" === t
        ? em.intl.formatToPlainString(em.t.ZxxHIO, { timeString: i })
        : em.intl.formatToPlainString(em.t["9OFjSe"], { dateString: n, timeString: i });
}
var nJ = n(996988),
    nX = n(656884);
function n$(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s, highlightBadge: r, openedAt: o, className: d } = e,
        h = __OVERLAY__,
        f = (0, tG.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, O.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tL.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: E, height: T } = (0, eR.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, e8.A)(E);
    l.useEffect(() => {
        s?.(E.current);
    }, [E, s]),
        l.useEffect(
            () => (t_.A.setState({ isOpen: !0 }), () => t_.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let N = (0, c.bG)([t4.A], () => t4.A.getStatus(t.id)),
        I = nY(t5.CY.useSetting()),
        j = (0, c.bG)([t6.A], () => t6.A.hidePersonalInformation),
        S = (0, tT.kB)(),
        y = t5.Q_.useSetting(),
        b = (function (e) {
            let t = t5.CY.useSetting(),
                n = (0, tT.kB)(),
                l = t5.Jr.useSetting();
            function s(i) {
                let l = nY(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tr.clD.DND:
                        return n ? em.intl.string(em.t.day5A6) : em.intl.string(em.t["tq/fMK"]);
                    case tr.clD.INVISIBLE:
                        return em.intl.string(em.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: nZ.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            t9.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tT.ES)(!0, n);
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
                                          label: em.intl.string(em.t.gJRnwK),
                                          iconLeft: eS.a,
                                          leadingAccessory: { type: "icon", icon: eS.a },
                                          badge: { text: em.intl.string(em.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? em.intl.format(em.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            em.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : em.intl.string(em.t["Br1q+x"]),
                                          action: () => {
                                              (0, tT.ES)(!n);
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
        })(N),
        M = (function (e) {
            let t = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
                n = (0, c.bG)([t6.A], () => t6.A.hidePersonalInformation),
                l = (0, c.bG)([nn.A], () => (0, tN.M)(nn.A.theme)),
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
                                        (0, i.jsx)(p.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: m._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nu.DD,
                                            children: [
                                                (0, i.jsx)(ee.E, {
                                                    className: nu.gE,
                                                    variant: "text-sm/normal",
                                                    children: tQ.Ay.getUserTag(a, {
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
                                                    ? t7.A.unsafe_rawColors.WHITE.css
                                                    : t7.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? t7.A.unsafe_rawColors.BRAND_500.css
                                                        : t7.A.unsafe_rawColors.WHITE.css,
                                                className: nu.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nt.E, {
                                                color: t7.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? t7.A.unsafe_rawColors.BRAND_500.css
                                                        : t7.A.unsafe_rawColors.WHITE.css,
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
                                label: em.intl.string(em.t.WbFpq4),
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
        R = (0, tU.A)({ analyticsLocations: g }),
        D = (0, tS.TW)(t),
        k = l.useRef(null),
        P = l.useRef(null),
        U = (0, tg.A)(f?.profileFrame?.skuId, "UserProfileAccountPopout"),
        L = (0, tf.A)(f?.profileFrame?.skuId);
    (0, tA.A)({ skuId: f?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: g });
    let G = l.useRef((0, t_.A)((e) => e.shouldRenderTenureLevelUp)),
        F = l.useMemo(() => (0, tv.A)(), []),
        [V, H] = l.useState(() => t_.A.getState().shouldRenderTenureLevelUp);
    function W(e) {
        n?.(), (0, tF.openUserProfileModal)({ customStatusPrompt: F, sourceAnalyticsLocations: g, ...x, ...e });
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            H(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let B = f?.widgets != null && f.widgets.length > 0,
        z = l.useCallback(() => {
            n();
        }, [n]),
        Z = l.useCallback(() => {
            R(), z();
        }, [R, z]),
        { enabled: K } = ew.A.useConfig({ location: "UserProfileAccountPopout" }),
        Y = (0, q.ux)("UserProfileAccountPopout"),
        [J, X] = (0, tE.kn)(Y ? [u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE] : []),
        $ = J === u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
        Q = l.useId();
    return (0, i.jsx)(O.f5, {
        value: g,
        children: (0, i.jsx)(tL.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: f?.fetchStartedAt,
            fetchEndedAt: f?.fetchEndedAt,
            isLoaded: f?.isLoaded,
            children: (0, i.jsxs)(eC.l, {
                ref: E,
                "aria-labelledby": Q,
                className: a()(eP.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eE.H, { id: Q, children: em.intl.string(em.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eE.F, {
                        children: [
                            (0, i.jsx)(nW, { displayProfile: f, handleOpenUserProfileModal: W, height: T }),
                            (0, i.jsxs)(tq.A, {
                                className: eP.BK,
                                user: t,
                                displayProfile: f,
                                themeType: nJ.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nX.wx,
                                        children: [
                                            (0, i.jsx)(tW.A, { user: t, displayProfile: f, themeType: nJ.d.POPOUT }),
                                            (0, i.jsx)(tV.A, {
                                                user: t,
                                                displayProfile: f,
                                                themeType: nJ.d.POPOUT,
                                                onOpenProfile: h ? void 0 : W,
                                            }),
                                            (0, i.jsx)(t2.A, {
                                                ref: k,
                                                user: t,
                                                themeType: nJ.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: F,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(e_.Ip, {
                                        className: eP.rf,
                                        style: { pointerEvents: V ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tz.A, { userId: t.id }),
                                            (0, i.jsx)(tY.Ay, {
                                                className: eP.eF,
                                                user: t,
                                                displayName: t8.Ay.getName(void 0, null, t),
                                                onClickName: h ? void 0 : W,
                                                displayNameTrailing: (0, i.jsx)(t1, { user: t, isVisible: C }),
                                                pronouns: f?.pronouns,
                                                trailing: (0, i.jsx)(tH.A, {
                                                    displayProfile: f,
                                                    themeType: nJ.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: G.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tB.A, { isPremiumUser: D, onInteraction: n }),
                                            (0, i.jsx)(t3.A, {
                                                userId: t.id,
                                                userBio: f?.bio,
                                                hidePersonalInformation: j,
                                                onClose: n,
                                            }),
                                            B &&
                                                (0, i.jsx)(tK.A, {
                                                    user: t,
                                                    widgets: f?.widgets,
                                                    onOpenUserProfileModal: W,
                                                }),
                                            (0, i.jsx)(tZ.A, {
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
                                                                (0, i.jsx)(eL, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: em.intl.string(em.t.s5vZlQ),
                                                                    icon: eN.R,
                                                                    trailing:
                                                                        $ &&
                                                                        (0, i.jsx)(eI.Lp, {
                                                                            text: em.intl.string(em.t.y2b7CA),
                                                                            "aria-hidden": !0,
                                                                        }),
                                                                    onClick: () => {
                                                                        $ && X(ep.i.TAKE_ACTION), Z();
                                                                    },
                                                                    ref: P,
                                                                }),
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(ny, {}),
                                                                    sublabel: null != I && I,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ej.nW, { status: N, size: 12 }),
                                                                    trailing:
                                                                        (S || N === tr.clD.DND) &&
                                                                        (0, i.jsx)(eS.a, { size: "xxs" }),
                                                                    renderSubmenu: ev.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eU, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eP.hQ,
                                                                                  "aria-label": em.intl.string(
                                                                                      em.t.E13trI,
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
                                                                                                      eT.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              em.intl.string(
                                                                                                                  em.t[
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
                                                                                                                  em.intl.string(
                                                                                                                      em
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
                                                                (0, i.jsx)(tp, { onClose: n, popoutContainerRef: E }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tq.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eG, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eb.r,
                                                                    label: em.intl.string(em.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nd.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eU, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": em.intl.string(em.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: M,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t$.p5 &&
                                                                    y &&
                                                                    (0, i.jsx)(eL, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eM.L,
                                                                        label: em.intl.string(em.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t$.C)(t.id), n();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    f?.profileEffect != null &&
                                        !G.current &&
                                        (0, i.jsx)(tm.A, { skuId: f.profileEffect.skuId, isHovering: _ }),
                                    null != U && (0, i.jsx)(tx.A, { frame: U, fadeIn: L }),
                                ],
                            }),
                            K && (0, i.jsx)(nN, { targetElementRef: P, onClose: n }),
                            (0, i.jsx)(tk, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nQ = n(371912),
    n0 = n(655116),
    n1 = n(106531),
    n2 = n(148411),
    n3 = n(342296),
    n5 = n(852712),
    n4 = n(167579),
    n6 = n(173660),
    n8 = n(451409),
    n7 = n(763827),
    n9 = n(499156),
    ie = n(731854);
let it = 2.5 * e$.A.Millis.SECOND,
    ii = +e$.A.Millis.HOUR;
var il = n(459838),
    is = n(485296);
let ia = 3 * e$.A.Millis.SECOND,
    ir = +e$.A.Millis.DAY;
var io = n(616356),
    id = n(734057),
    ic = n(629016),
    iu = n(186111),
    ih = n(967198),
    ip = n(486020),
    im = n(625494),
    ig = n(536194),
    iA = n(19575),
    ix = n(994314),
    iv = n(485599),
    iE = n(338854);
function iT(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: s, shouldShow: a = !0, children: r } = e,
        o = (0, eF.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            a && o
                ? (0, i.jsx)(iE.H, {
                      targetElementRef: t,
                      title: em.intl.string(td.default.Qn21R6),
                      body: em.intl.string(td.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: s,
                      caretConfig: { align: "center" },
                      action: {
                          text: em.intl.string(em.t.RzWDqY),
                          onClick: function () {
                              n(ep.i.TAKE_ACTION), l();
                          },
                      },
                      onRequestClose: function () {
                          n(ep.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iC = n(626584),
    i_ = n(757036),
    iN = n(531685),
    iI = n(259065),
    ij = n(864386);
let iS = new iC.A("DisplayNameStylesFlywheelCoachmark");
function iy(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, O.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, c.bG)([iN.A], () => iN.A.isFocused()),
        d = (0, i_.L)(tb.PremiumTypes.TIER_2),
        u = (0, l.useCallback)(() => {
            t(ep.i.TAKE_ACTION),
                (0, es.openUserSettings)(el.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iI.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        h = (0, l.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iS.error) : o || r.current?.pause();
    }, [o]);
    let p = d ? [em.intl.string(ij.default.TyUdka)] : [em.intl.string(ij.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            (0, i.jsx)(nh.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
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
                title: em.intl.string(ij.default.cYwrp8),
                body: p,
                actions: [{ text: em.intl.string(em.t["4P5I8V"]), variant: "primary", onClick: u }],
            }),
        ],
    });
}
var ib = n(45780),
    iM = n(696451),
    iR = n(71393),
    iw = n(685073),
    iO = n(228366);
let iD = { lastSeenInfos: {} },
    ik = iD;
class iP extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        ik = e ?? iD;
    }
    getState() {
        return ik;
    }
    getGuildLastSeenInfo(e) {
        return ik.lastSeenInfos[e] ?? null;
    }
}
let iU = new iP(iO.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        ik.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        ik = iD;
    },
});
var iL = n(116833),
    iG = n(514661);
let iF = new iC.A("GuildTagAvailableCoachmark");
function iV(e) {
    let t = (0, c.bG)([iR.A], () => iR.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iO.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: l, onAdoptTag: s, onEditProfile: a } = (0, iG.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, iw.q0)(t))
        return iF.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: em.intl.string(em.t.jwEaiX), loading: l, onClick: s, variant: "primary" },
        { text: em.intl.string(em.t.s5vZlQ), onClick: a, variant: "secondary" },
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
                    component: iL.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: em.intl.formatToPlainString(em.t["m/Tc3n"], { guildName: t.name }),
                body: em.intl.string(em.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(ep.i.USER_DISMISS),
            }),
        ],
    });
}
function iH(e) {
    let t = (0, c.bG)([iR.A], () => iR.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: s, onEditProfile: a } = (0, iG.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, iw.q0)(t))
        return iF.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: em.intl.string(em.t.jwEaiX), loading: l, onClick: s, variant: "primary" },
        { text: em.intl.string(em.t.s5vZlQ), onClick: a, variant: "secondary" },
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
                    component: iL.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: em.intl.formatToPlainString(em.t.VFqnyU, { guildName: t.name }),
                body: em.intl.string(em.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(ep.i.USER_DISMISS),
            }),
        ],
    });
}
var iW = n(843010),
    iB = n(764231),
    iz = n(425713);
function iZ(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tM(),
        s = (0, c.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        a = (0, t_.A)((e) => e.isOpen),
        r = (0, iW.G)();
    return s || null == l || a || r
        ? null
        : (0, i.jsx)(nb.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(iK, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iK(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        r = tb.sp.indexOf(t),
        o = (0, iz.I)(tb.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, l.useCallback)(() => {
            n(ep.i.TAKE_ACTION),
                t_.A.setState({ shouldRenderTenureLevelUp: !0 }),
                im._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(ep.i.USER_DISMISS);
        }, [n]),
        u = tb.VD[t],
        h = em.intl.formatToPlainString(em.t.ewkaVR, {
            timeMilestone: (0, iB.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        p = [{ text: em.intl.string(em.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(nh.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: em.intl.string(em.t.VoDxsV),
        body: h,
        actions: p,
    });
}
function iq(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nQ.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, ib.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tr.dJq),
                l = (0, c.bG)([iR.A, nl.default, iM.Ay], () => {
                    if (null === e) return !1;
                    let t = iR.A.getGuild(e);
                    if (void 0 === t || !(0, iw.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nl.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iM.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tE.ww)(l && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tr.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                s = (0, c.bG)([iU], () => (null === l ? null : iU.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([iR.A], () => iR.A.getGuild(l)?.profile?.tag),
                r = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && s?.tag === a,
                d = null !== l && r && !o;
            return (0, tE.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? s === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iH, {
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
                        (0, i.jsx)(iZ, { groupName: ep.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nb.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: ep.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iy, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iT, {
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
var iY = n(615675),
    iJ = n(900797),
    iX = n(847374),
    i$ = n(348858),
    iQ = n(617354),
    i0 = n(829773),
    i1 = n(42473),
    i2 = n(490704),
    i3 = n(967194);
function i5(e) {
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
            Component: p,
            play: m,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, i$.I)(h ? "undeafen" : "deafen"),
        x = n ? iY.T : p,
        { name: v } = (0, ex.x5)(ie.oh.AUDIO_OUTPUT),
        E = (0, iQ.A)(t, n, s),
        { analyticsLocations: T } = (0, O.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        C = l.useRef(null);
    return (
        l.useEffect(() => () => m(), [h, m]),
        (0, i.jsx)(O.f5, {
            value: T,
            children: (0, i.jsx)(f.Y, {
                targetElementRef: C,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(O.f5, {
                            value: T,
                            children: (0, i.jsx)(i0.A, {
                                onInteraction: (0, F.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                animation: f.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: u } = t,
                        p = u ? iJ.t : iX.a;
                    return (0, i.jsxs)("div", {
                        ref: C,
                        className: a()(i2.Lh, { [i2.v8]: h, [i2.q6]: u }),
                        children: [
                            (0, i.jsx)(i1.A, {
                                "aria-checked": h,
                                "aria-label": em.intl.string(em.t.wjcRFX),
                                className: i2.eT,
                                disabled: s,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? i3.o : void 0,
                                innerClassName: a()({ [i3.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(i1.A, {
                                className: a()(i2.UT, { [i2.q6]: u }),
                                disabled: s,
                                icon: (0, i.jsx)(p, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? em.intl.formatToPlainString(em.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? em.intl.format(em.t["f+DDY/"], { outputDeviceName: v })
                                    : em.intl.string(em.t.aA4Vce),
                                "aria-label": c
                                    ? em.intl.formatToPlainString(em.t["f+DDY/"], { outputDeviceName: v })
                                    : em.intl.string(em.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i4 = n(666654),
    i6 = n(523875),
    i8 = n(993719);
let i7 = {};
class i9 extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i7[e] ?? !1;
    }
}
let le = new i9(iO.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i7[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i7[t] = !1;
    },
});
var lt = n(362823),
    ln = n(980923),
    li = n(224585),
    ll = n(949341),
    ls = n(973324);
function la(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
            suppress: r,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: h,
            onClick: p,
            nameplate: m,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: E,
            speaking: T,
        } = e,
        { showPTTIconIndicator: C } = n9.A.useConfig({ location: "MicrophoneButton" }),
        _ = (0, c.bG)([n8.Ay], () => n8.Ay.getMode() === ie.TB.PUSH_TO_TALK),
        N = (0, c.bG)([n8.Ay], () => n8.Ay.getSettings().modeOptions.shortcut),
        I = (0, c.bG)([le], () => le.getIsTutorialActive(lt.v.MUTE_TUTORIAL)),
        j = (0, c.bG)([n7.A], () => null != n7.A.getChannelId()),
        { name: S } = (0, ex.x5)(ie.oh.AUDIO_INPUT),
        { enabledInputProfiles: y } = (0, n5.d)({ location: "MicrophoneButton" }),
        b = l.useRef(null),
        M = n || r || s,
        R = (0, i6.L)(M ? "unmute" : "mute"),
        { analyticsLocations: D } = (0, O.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: P, play: U } = R,
        L = s || r ? i4.O : k;
    l.useEffect(() => () => U(), [M, U]);
    let G = (0, ln.A)(n, s, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: em.intl.string(em.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: em.intl.format(em.t.c1qUOQ, { keybind: e0.dI(N).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: G };
    let V = C && _ && j,
        H = M ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = l.useCallback(() => {
            p(), I && i8.N(lt.v.MUTE_TUTORIAL);
        }, [p, I]);
    return (0, i.jsxs)(O.f5, {
        value: D,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(O.f5, {
                            value: D,
                            children: (0, i.jsx)(i0.A, {
                                onInteraction: (0, F.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                animation: f.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: l } = e,
                        { isShown: s } = n,
                        r = s ? iJ.t : iX.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(i2.Lh, { [i2.v8]: M, [i2.q6]: s }),
                        children: [
                            (0, i.jsx)(i1.A, {
                                "aria-checked": M,
                                "aria-label": em.intl.string(em.t.w4m945),
                                className: i2.eT,
                                disabled: o,
                                icon: (0, i.jsx)(L, { size: "custom", width: 20, height: 20, color: H, className: d }),
                                onClick: W,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    u(), P.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    h(), P.onMouseLeave();
                                },
                                plated: null != m,
                                redGlow: M,
                                role: "switch",
                                ...t,
                                children: V ? (0, i.jsx)("div", { className: a()(ll.U, { [ll.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(i1.A, {
                                "aria-label": x
                                    ? em.intl.formatToPlainString(em.t["18wnuD"], { inputDeviceName: S })
                                    : em.intl.string(em.t.fRzCbB),
                                className: a()(i2.UT, { [i2.q6]: s }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: H,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: u,
                                onMouseLeave: h,
                                plated: null != m,
                                redGlow: M,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? em.intl.formatToPlainString(em.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: x
                                    ? em.intl.format(em.t["18wnuD"], { inputDeviceName: S })
                                    : em.intl.string(em.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nh.A, {
                targetElementRef: b,
                shouldShow: I,
                graphic: { type: "image", src: ls.A },
                onRequestClose: () => {
                    i8.N(lt.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: em.intl.string(li.default.VG4zAf),
                body: em.intl.string(li.default["8VIRzR"]),
            }),
        ],
    });
}
var lr = n(935399),
    lo = n(505312),
    ld = n(848847),
    lc = n(88001),
    lu = n(466919),
    lh = n(438705);
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
        graphic: { type: "image", src: lh },
        shouldShow: n,
        title: em.intl.format(lu.default.bx8sR9, { premiumGroupProductName: (0, lc.DP)() }),
        body: em.intl.format(lu.default.Pw4OFZ, { premiumGroupProductName: (0, lc.DP)() }),
        onRequestClose: s,
        actions: [{ text: em.intl.string(lu.default.DD26QR), onClick: a }],
    });
}
var lm = n(873298),
    lf = n(840387);
function lg(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, lf.Z)(),
        a = t5.KP.useSetting(),
        r = s && a !== lm.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            t(ep.i.TAKE_ACTION), (0, es.openUserSettings)(el.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, l.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]),
        c = r
            ? a === lm.KP.FRIENDS_ONLY
                ? em.intl.string(em.t["/hogEy"])
                : em.intl.string(em.t["6hEfm1"])
            : em.intl.string(em.t.bnNxW1);
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
        title: em.intl.string(em.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: em.intl.string(em.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function lA(e) {
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
        [p, m] = l.useState(!1);
    (0, lr.Ay)(() => {
        function e() {
            return m(!0);
        }
        return (
            im._.subscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                im._.unsubscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = l.useCallback(() => {
        m(!1), a();
    }, [a]);
    t = null != s ? em.intl.formatToPlainString(em.t.Gzh6ZP, { webBuildOverride: s.id }) : em.intl.string(em.t.cduTBL);
    let g = eK.Z,
        A = (0, lo.w)();
    return (
        (g = null != s ? ld.H : A.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i1.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": em.intl.string(em.t.cduTBL),
                    icon: (0, i.jsx)(g, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...A.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lp, { targetElementRef: h, shouldShow: p, onDismiss: () => m(!1) }),
                (0, i.jsx)(nb.Ay, {
                    contentTypes: o,
                    groupName: ep.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(lg, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var lx = n(489902);
let lv = iA.Ay.getEnableHardwareAcceleration() ? p.Js : p.eu,
    lE = 2.5 * e$.A.Millis.SECOND,
    lT = 2 * e$.A.Millis.MINUTE,
    lC = 2 * e$.A.Millis.MINUTE,
    l_ = 5 * e$.A.Millis.SECOND;
function lN(e) {
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
            nameplate: p,
            avatarDecoration: A,
            "data-jump-section": x,
        } = e,
        v = l.useRef(null),
        E = t ?? v,
        C = (0, ip.F_)({ avatarDecoration: A, size: (0, H.Te)(m._3.SIZE_32) }),
        _ = (0, Y.A)(),
        {
            updateOpenPopoutRef: I,
            highlightBadge: j,
            setHighlightBadge: S,
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
                (0, N.A)(() => a(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        im._.subscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            im._.unsubscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        y = (0, B.K)(p);
    return null == o
        ? null
        : (0, i.jsx)(T.A, {
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
                      return (0, i.jsx)(n$, {
                          currentUser: o,
                          highlightBadge: j,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lx.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: f.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), S(void 0);
                  },
                  children: (e) => {
                      I(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: E,
                          style: y,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(lx.Q9, { [lx.ZQ]: null != p }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": em.intl.string(em.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: lx.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lv, {
                                  size: m._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: C,
                                  status: r ? tr.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: lx.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lx.oM, children: h(_) }),
                          ],
                      });
                  },
              }),
          });
}
class lI extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(lC, null, !1);
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
        (0, L.A)(e, t, tr.JJy.ACCOUNT_PANEL), (0, G.X)(w.A.ACCOUNT, G.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, U.A)(e, tr.JJy.ACCOUNT_PANEL), (0, G.X)(w.A.ACCOUNT, G.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n7.A.isConnected() ? (0, es.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL) : (0, es.openUserSettings)();
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
                    n.e("74791"),
                    n.e("93315"),
                    n.e("8813"),
                    n.e("78008"),
                    n.e("25610"),
                    n.e("42548"),
                    n.e("44190"),
                    n.e("41916"),
                    n.e("74387"),
                    n.e("16227"),
                    n.e("26543"),
                    n.e("95059"),
                    n.e("37634"),
                    n.e("812"),
                    n.e("89209"),
                    n.e("86832"),
                    n.e("95512"),
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
                    n.e("21918"),
                    n.e("11262"),
                    n.e("54483"),
                    n.e("62461"),
                    n.e("25677"),
                    n.e("73679"),
                    n.e("73178"),
                    n.e("333"),
                    n.e("97638"),
                    n.e("22995"),
                    n.e("84896"),
                    n.e("38759"),
                    n.e("51943"),
                    n.e("90072"),
                    n.e("88016"),
                    n.e("84133"),
                    n.e("13627"),
                    n.e("57940"),
                    n.e("58171"),
                    n.e("48404"),
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
                    n.e("71505"),
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
                    n.e("18078"),
                    n.e("42535"),
                    n.e("44819"),
                    n.e("72376"),
                    n.e("32802"),
                    n.e("32317"),
                    n.e("84209"),
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
                    n.e("70676"),
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
                    n.e("63252"),
                    n.e("45350"),
                    n.e("4428"),
                    n.e("57123"),
                    n.e("25150"),
                    n.e("87193"),
                    n.e("10573"),
                    n.e("95932"),
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
                    n.e("51173"),
                    n.e("79555"),
                    n.e("16113"),
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
                    n.e("38939"),
                    n.e("3376"),
                    n.e("13554"),
                    n.e("26132"),
                    n.e("10471"),
                    n.e("64827"),
                    n.e("63232"),
                    n.e("68261"),
                    n.e("7167"),
                    n.e("11301"),
                    n.e("96643"),
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
                    n.e("42842"),
                    n.e("33115"),
                    n.e("6338"),
                    n.e("18573"),
                    n.e("55936"),
                    n.e("85404"),
                    n.e("44057"),
                    n.e("17879"),
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
                    n.e("88131"),
                    n.e("42834"),
                    n.e("43430"),
                    n.e("94723"),
                    n.e("28866"),
                    n.e("62931"),
                    n.e("58529"),
                    n.e("58038"),
                    n.e("62531"),
                    n.e("34801"),
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
                    n.e("36877"),
                    n.e("72963"),
                    n.e("52511"),
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
                    n.e("86127"),
                    n.e("28095"),
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
                    n.e("54638"),
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
                    n.e("47958"),
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
                    n.e("81314"),
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
                    n.e("13658"),
                    n.e("23532"),
                    n.e("52557"),
                    n.e("87478"),
                    n.e("50033"),
                    n.e("53133"),
                    n.e("39171"),
                    n.e("74630"),
                    n.e("83870"),
                    n.e("36564"),
                    n.e("92513"),
                    n.e("48948"),
                    n.e("63645"),
                    n.e("63244"),
                    n.e("68214"),
                    n.e("44780"),
                    n.e("5636"),
                    n.e("32085"),
                    n.e("91450"),
                    n.e("24038"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("93438"),
                    n.e("36227"),
                    n.e("95340"),
                    n.e("63556"),
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
                    n.e("26001"),
                    n.e("29666"),
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
                    n.e("3930"),
                    n.e("96804"),
                    n.e("3663"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("62875"),
                    n.e("37490"),
                    n.e("42234"),
                    n.e("89523"),
                    n.e("26294"),
                    n.e("74678"),
                    n.e("29260"),
                    n.e("32737"),
                    n.e("81189"),
                    n.e("66580"),
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
                    n.e("79435"),
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
                    n.e("45419"),
                    n.e("91531"),
                    n.e("75284"),
                    n.e("2846"),
                    n.e("13052"),
                    n.e("64926"),
                    n.e("72922"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("59276"),
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
                    n.e("70577"),
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
                    n.e("49413"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("56862"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, F.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, F.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n5.d)({ location: "Account" });
                    return (0, i.jsx)(O.f5, {
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
                    (0, i.jsx)(O.f5, {
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lT;
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
                      this.speakingWhileMutedTooltipTimeout.start(lE, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(lE, () =>
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
        if ((0, I.A)({ activities: t, status: s, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(R.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: tQ.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(j.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lx.XD,
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
                      (0, i.jsx)(A.A, { children: tQ.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(K.A, { activity: o, emojiClassName: lx.Zg, className: lx.WO }),
                  ],
              })
            : null != s && s !== tr.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: tQ.Ay.humanizeStatus(s) }),
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
                          className: lx.eW,
                          children: (0, i.jsx)(iv.A, {
                              className: a()({ [lx.e8]: null != e }),
                              children: (0, i.jsx)(X.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? J.G.ANIMATED : J.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lx.XP,
                          children: (0, i.jsx)(ix.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iq, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(lN, {
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
                                  className: a()(lx.kL, { [lx.UG]: null != n, [lx.bc]: !l, [lx.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(Z.A, { nameplate: t, hovered: r, placement: z.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(lj, {
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
function lj(e) {
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
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: m,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: x,
            dismissibleContents: v,
            nameplate: E,
            accountContainerRef: T,
            deviceChangedTooltipType: C,
            shouldShowPTTJoinTooltip: _ = !1,
            dismissTooltips: N,
            speaking: I,
        } = e,
        j = (0, B.K)(E);
    return (0, i.jsxs)("div", {
        className: lx.Uo,
        style: j,
        children: [
            (0, i.jsx)(la, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: h,
                onClick: m,
                onContextMenu: f,
                iconForeground: null != E ? lx.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === C,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: _,
                dismissTooltips: N,
                speaking: I,
            }),
            (0, i.jsx)(i5, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: g,
                awaitingRemote: l,
                iconForeground: null != E ? lx.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === C,
                dismissTooltips: N,
            }),
            (0, i.jsx)(lA, {
                webBuildOverride: c,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: v.settings,
                iconForeground: null != E ? lx.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function lS(e) {
    let t = (0, c.bG)([n7.A], () => null != n7.A.getChannelId()),
        n = (0, ex.Py)(e),
        i = l.useRef(new h.Ep()),
        [s, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(l_, () => {
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
function ly() {
    let e = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
        t = (0, c.bG)([nE.default], () => nE.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nI.A], () => {
            let e = nI.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tr.$pd.STREAMING;
                    }),
                status: nI.A.getStatus(),
            };
        }),
        r = (0, c.bG)([io.A], () => io.A.getAnyStreamForUser(t)),
        d = (0, C.A)({ userId: t }),
        p = (0, c.bG)([is.A], () => is.A.getVoiceVolume(t)),
        m = tQ.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, c.bG)([n7.A, id.A], () => {
            let e = n7.A.getChannelId();
            return null != e ? id.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: A, suppress: x } = (0, n6.A)(f),
        { selfDeaf: E, deaf: T } = (0, n4.A)(f),
        N = (0, c.bG)([D.A], () => ((0, k.kK)() ? D.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        I = (0, c.bG)([n8.Ay], () => n8.Ay.getSpeakingWhileMuted()),
        j = (0, c.bG)([P.A], () => P.A.isFullscreenInContext()),
        S = (0, c.bG)([iu.A], () => iu.A.hasLayers()),
        y = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || S || ig.P.isDisallowPopupsSet() || j,
        b = (0, c.bG)([$.default], () => null != $.default.getAwaitingRemoteSessionInfo()),
        M = (0, c.bG)([ih.A], () => ih.A.getGuildId()),
        R = e?.avatarDecoration,
        U = (0, V.A)(R),
        L = tQ.Ay.useName(e) ?? "",
        { analyticsLocations: G } = (0, O.Ay)(w.A.ACCOUNT),
        F = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, nQ.c9)(),
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
                        .filter(nC.Vq)
                        .value()),
                i.length > 1
            );
        }),
        z = { avatar: [], settings: [] },
        Z = (0, n1.lX)("AccountCoachmark"),
        K = (0, q.ux)("AccountCoachmark");
    !y &&
        (K && z.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        Z && z.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Y, dismissTooltip: J } = lS(ie.oh.AUDIO_INPUT),
        { shouldShowTooltip: X, dismissTooltip: Q } = lS(ie.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ee, dismissTooltip: et } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, c.bG)([n8.Ay], () => n8.Ay.getMode() === ie.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n7.A],
                    () => null != n7.A.getChannelId() && (n7.A.getDuration() ?? Number.MAX_VALUE) < it,
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
                i = (0, c.bG)([n8.Ay], () => n8.Ay.getMode() === ie.TB.PUSH_TO_TALK),
                s = (0, c.bG)([n7.A], () => n7.A.getRTCConnectionId()),
                a = (0, c.bG)([n8.Ay], () => {
                    let e = n8.Ay.getModeOptions().updatedAt;
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
                        a && e && i && null != s && n8.Ay.getMediaEngine().on(il.bg.VoiceActivity, o),
                        () => {
                            n8.Ay.getMediaEngine().removeListener(il.bg.VoiceActivity, o), l.stop();
                        }
                    );
                }, [e, i, a, s]),
                t
            );
        })(),
        ei = l.useMemo(() => (Y ? "input" : X ? "output" : void 0), [Y, X]),
        el = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        J();
                        break;
                    case "output":
                        Q();
                }
            },
            [J, Q],
        );
    return (0, i.jsx)(O.f5, {
        value: G,
        children: (0, i.jsx)(lI, {
            currentUser: e,
            username: L,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: z,
            userTag: m,
            occluded: y,
            selfDeaf: E,
            selfMute: A,
            serverDeaf: T,
            serverMute: g,
            speaking: d,
            voiceDb: p,
            speakingWhileMuted: I,
            speakingWhilePTTInactive: en,
            status: a,
            streaming: s,
            suppress: x,
            webBuildOverride: N,
            awaitingRemote: b,
            nameplate: F,
            selectedGuildId: M,
            avatarDecoration: U,
            isQuestBarEmpty: H,
            isListenAlongVisible: B,
            deviceChangedTooltipType: ei,
            onDismissDeviceChangedTooltip: () => el(ei),
            shouldShowPTTJoinTooltip: ee,
            dismissPTTJoinTooltip: et,
        }),
    });
}
