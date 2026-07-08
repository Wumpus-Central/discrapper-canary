"use strict";
n.d(t, { g: () => rR, A: () => rD }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
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
    U = n(521502),
    w = n(380610),
    G = n(313961),
    x = n(18235),
    k = n(183184),
    F = n(384059),
    V = n(480890),
    B = n(601255),
    H = n(562819),
    j = n(449582),
    W = n(351952),
    Y = n(88686),
    K = n(174755),
    $ = n(302223),
    z = n(248778),
    q = n(609425),
    Z = n(922301),
    X = n(660184),
    Q = n(643501),
    J = n(534514),
    ee = n(834730),
    et = n(789645),
    en = n(826673),
    ei = n(750506),
    er = n(780964),
    ea = n(766075),
    es = n(417146),
    el = n(552122),
    eo = n(717421),
    ed = n(775602),
    ec = n(993843);
let eu = { mass: 10, tension: 550, friction: 140 };
function e_(e) {
    let { className: t, pageMultiplier: n } = e,
        a = (0, c.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        [l, d] = r.useState({ x: 0, y: 0 }),
        u = r.useMemo(
            () =>
                o().throttle((e) => {
                    a || d({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, a],
        );
    r.useEffect(() => (window.addEventListener("mousemove", u), () => window.removeEventListener("mousemove", u)), [u]);
    let [_, E] = (0, eo.z)(() => ({ x: 0, y: 0, config: eu }));
    return (
        r.useEffect(() => {
            E({ x: l.x, y: l.y });
        }, [l.x, l.y, E]),
        (0, i.jsx)(L.animated.div, {
            style: { transform: (0, L.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: s()(ec.T, t),
        })
    );
}
var eE = n(49999),
    eA = n(375708),
    eh = n(275883);
function eI(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: r } = e,
        a = el.A.useIsEligible(),
        s = (0, en.JZ)(t),
        l = null != n,
        o = null != r ? { color: r } : void 0,
        { analyticsLocations: d } = (0, P.Ay)(M.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, en.Dr)(t, { dismissAction: e });
    }
    function u() {
        (0, ea.openUserSettings)(er.X.NOTIFICATIONS_PANEL, { analyticsLocations: d }), c(eE.i.TAKE_ACTION);
    }
    return a && !s
        ? (0, i.jsx)(ei.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eh.iE,
                  style: { backgroundColor: l ? n : void 0 },
                  children: [
                      !l &&
                          (0, i.jsxs)("div", {
                              className: eh.o5,
                              children: [
                                  (0, i.jsx)(e_, { className: eh.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eh.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eh.c8 }),
                      (0, i.jsxs)("div", {
                          className: eh.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "text-overlay-light",
                                          style: o,
                                          children: eA.intl.string(eA.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(ee.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: eA.intl.format(eA.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      I.D,
                                                      {
                                                          tag: "span",
                                                          className: eh.nf,
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
                                  className: eh.l2,
                                  onClick: () => c(eE.i.USER_DISMISS),
                                  children: (0, i.jsx)(et.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function ef() {
    return null == es.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(eI, {
              dismissibleContent: es.A.coachmarkDismissibleContent,
              backgroundColor: es.A.coachmarkBackgroundColor,
              specialTextColor: es.A.coachmarkSpecialTextColor,
          });
}
var ep = n(74848),
    eT = n(607399),
    em = n(707554),
    eg = n(224640),
    eS = n(305866),
    eN = n(364522),
    eC = n(22231),
    eR = n(812993),
    eO = n(133171),
    eL = n(780338),
    eD = n(980707),
    ey = n(26137),
    ev = n(473935),
    eb = n(765671),
    eM = n(783041),
    eP = n(176781),
    eU = n(320448),
    ew = n(993401),
    eG = n(447349);
function ex(e) {
    return (0, i.jsx)("div", {
        className: eG.wE,
        children: (0, i.jsx)(eD.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function ek(e) {
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
        A = (0, ew.rE)({ action: t, onClick: n }),
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
                (0, i.jsx)("div", { className: eG.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eG.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(ee.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eG.W1,
                                    children: s,
                                }),
                                (0, i.jsx)(ee.E, { color: "currentColor", variant: "text-xs/medium", children: l }),
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
                          (0, i.jsx)(I.D, { className: eG.ef, onClick: A, children: O() }),
                          (0, i.jsx)(I.D, {
                              className: eG.ap,
                              "aria-label": eA.intl.string(eA.t.PdRCRg),
                              ...e,
                              onClick: C,
                              children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : S
                  ? (0, i.jsxs)(I.D, {
                        className: eG.ef,
                        ...e,
                        onClick: C,
                        children: [
                            O(),
                            (0, i.jsx)("div", {
                                className: eG.ap,
                                children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(I.D, { className: eG.ef, onClick: A, children: O() })),
            (0, i.jsx)("div", { ref: g, className: eG.jG, children: t })
        );
    }
    return S
        ? (0, i.jsx)("li", {
              className: eG.j$,
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
        : (0, i.jsx)("li", { className: eG.j$, children: L() });
}
function eF(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eV = n(734066),
    eB = n(274372),
    eH = n(409067),
    ej = n(271597),
    eW = n(990078),
    eY = n(475358),
    eK = n(408278),
    e$ = n(625903),
    ez = n(404778),
    eq = n(689175),
    eZ = n(821609),
    eX = n(532624),
    eQ = n(927813),
    eJ = n(879631),
    e0 = n(350535),
    e1 = n(372684),
    e2 = n(974293),
    e3 = n(572164),
    e6 = n(953932),
    e4 = n(280483),
    e7 = n(890856),
    e5 = n(713517),
    e8 = n(609174),
    e9 = n(619744);
function te(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, e8.Y_)(),
        s = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, ej.p)({ initialEditingClipId: a.id });
            },
            [a, t],
        );
    return (0, i.jsx)(eZ.$, {
        onClick: s,
        icon: eC.R,
        variant: n,
        size: "sm",
        text: eA.intl.string(eA.t.bt75uw),
        fullWidth: !0,
    });
}
var tt = n(82716),
    tn = n(585579),
    ti = n(930317),
    tr = n(285072),
    ta = n(316305);
let ts = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: l } = e,
        o = r.useRef(null),
        { isHoveringOrFocusing: d } = (0, e5.A)(o),
        c = r.useCallback(() => {
            a?.(), (0, ej.p)({ initialEditingClipId: t.id });
        }, [t.id, a]);
    return (0, i.jsx)(e8.Cl, {
        clip: t,
        children: (0, i.jsx)(e7.s, {
            ref: o,
            "aria-label": eA.intl.string(eA.t.bt75uw),
            onClick: c,
            className: s()(ta.Z1, l),
            children: (0, i.jsxs)(ti.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eR.Lp, { className: ta.Ad, text: eA.intl.string(eA.t.y2b7CA) }),
                    (0, i.jsxs)(tr.h, {
                        isVisible: d,
                        className: ta.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ta.mY,
                                children: [(0, i.jsx)(tt.z, {}), (0, i.jsx)(e9.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: ta.E_,
                                children: [
                                    (0, i.jsx)(te, { onBeforeEdit: a, variant: "overlay-secondary" }),
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
var tl = n(652215),
    to = n(753070),
    td = n(16590),
    tc = n(550350);
function tu(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, e4.A)();
    let l = (0, c.yK)([eB.Ay], () => Object.values(eB.Ay.getClips())),
        o = (0, c.bG)([eB.Ay], () => eB.Ay.getSettings()),
        d = (0, c.bG)([eB.Ay], () => eB.Ay.getNewClipIds()),
        u = (0, e2.aJ)("ClipsPopout"),
        _ = (0, c.bG)([eB.Ay], () => eB.Ay.getEnableAutoclipping()),
        E = (0, c.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(tl.hCu.SAVE_CLIP)),
        A = r.useCallback(
            (e) => {
                s?.(e);
            },
            [s],
        ),
        h = !o.showPovClipsInGallery,
        I = r.useMemo(() => {
            let e = l.filter((e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, eH.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [l, h]),
        f = r.useMemo(() => I.slice(0, 16), [I]),
        p = I.length > 16,
        T = null != E ? e0.dI(E.shortcut, !0) : null,
        m = [
            (0, eJ.$)(o.clipsLength / eQ.A.Millis.SECOND),
            (0, to.zr)(o.clipsQuality.resolution),
            eA.intl.formatToPlainString(eA.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && m.push(eA.intl.string(td.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: A,
            className: tc.SW,
            role: "dialog",
            "aria-label": eA.intl.string(eA.t.z2jK6X),
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
                                    children: eA.intl.string(eA.t.z2jK6X),
                                }),
                                null != T && (0, i.jsx)(eY.e, { className: tc.P, shortcut: T }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tc.$s,
                            children: [
                                (0, i.jsx)(eW.m, {
                                    text: eA.intl.string(eA.t["3D5yo/"]),
                                    children: (0, i.jsx)(eK.K, {
                                        onClick: () => n(),
                                        icon: e$.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eA.intl.string(eA.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eW.m, {
                                    text: eA.intl.string(td.default["55C2MH"]),
                                    children: (0, i.jsx)(eK.K, {
                                        onClick: () => t(),
                                        icon: eP.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eA.intl.string(td.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tc.ov,
                    children: [
                        m.map((e, t) =>
                            (0, i.jsxs)(
                                r.Fragment,
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
                                color: _ ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tc.wS,
                                children: _ ? eA.intl.string(td.default.lTwKmt) : eA.intl.string(td.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(ez.c, {}),
                f.length > 0
                    ? (0, i.jsxs)(eq.Ch, {
                          className: tc.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              f.map((e) => (0, i.jsx)(ts, { clip: e, isNew: d.includes(e.id), onClose: a }, e.id)),
                              p &&
                                  (0, i.jsx)("div", {
                                      className: tc.qr,
                                      children: (0, i.jsx)(eZ.$, {
                                          onClick: () => t(),
                                          text: eA.intl.string(td.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(t_, { keybindString: T }),
            ],
        })
    );
}
function t_(e) {
    let { keybindString: t } = e,
        n = (0, e3.Et)();
    return (0, i.jsxs)("div", {
        className: tc.p$,
        children: [
            (0, i.jsx)(ee.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tc.qO,
                children: eA.intl.string(td.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(ee.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: eA.intl.format(td.default.y4zC7j, {
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
                          keybind: (0, i.jsx)(eY.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e6.A, {}),
        ],
    });
}
function tE(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eV.sw)(),
        s = !(0, c.bG)([eB.Ay], () => eB.Ay.getSettings().showPovClipsInGallery),
        l = (0, c.bG)([eB.Ay], () => {
            let e = eB.Ay.getNewClipIds();
            return s
                ? e.filter((e) => {
                      let t = eB.Ay.getClipById(e);
                      return null != t && !(0, eH.kD)(t);
                  }).length
                : e.length;
        }, [s]),
        o = r.useCallback(
            (e) => {
                t(), (0, ej.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        d = r.useCallback(() => {
            t(), (0, ea.openUserSettings)(er.X.CLIPS_PANEL);
        }, [t]);
    return a
        ? (0, i.jsx)(ek, {
              action: "PRESS_CLIPS",
              icon: eP.x,
              label: eA.intl.string(eA.t.z2jK6X),
              trailing: l > 0 ? (0, i.jsx)(eR.hV, { count: l }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tu, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tA = n(480335),
    th = n(577390),
    tI = n(474257),
    tf = n(31956),
    tp = n(744808),
    tT = n(645507),
    tm = n(131607),
    tg = n(970931),
    tS = n(315710),
    tN = n(832248),
    tC = n(462887),
    tR = n(736653),
    tO = n(439174),
    tL = n(428262),
    tD = n(878784),
    ty = n(202541);
function tv() {
    let e = (0, tD.Xb)(),
        t = (0, tL.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = ty.sp.length - 1; t >= 0; t--) {
        let i = ty.VD[ty.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tb = {
        [ty.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [ty.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [ty.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [ty.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [ty.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [ty.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [ty.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [ty.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tM = {
        [ty.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [ty.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [ty.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [ty.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [ty.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [ty.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [ty.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [ty.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tP = n(682165);
let tU = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tw() {
    let e = (0, c.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        t = (0, tN.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tv(),
                t = (0, tC.M)((0, tR.Ay)());
            if (null == e) return null;
            let n = tb[e],
                i = tM[e],
                r = {
                    currentBadge: (0, tO.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = ty.sp.indexOf(e);
            if (a > 0) {
                let e = ty.sp[a - 1],
                    n = tb[e];
                (r.prevBadge = (0, tO.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [a, s] = r.useState(null);
    return (null != n && null == a && s(n), e || !t || null == a) ? null : (0, i.jsx)(tG, { levelUpData: a });
}
function tG(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        a = r.useCallback(() => {
            tN.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tS.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tP.i,
            children: [
                (0, i.jsx)("div", {
                    className: tP.b,
                    children: (0, i.jsx)(eW.m, {
                        text: eA.intl.string(eA.t.cpT0Cq),
                        children: (0, i.jsx)(eK.K, {
                            icon: et.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": eA.intl.string(eA.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tU, { levelUpData: t }) }),
            ],
        }),
    });
}
var tx = n(206835),
    tk = n(183555),
    tF = n(999291),
    tV = n(975732),
    tB = n(718019),
    tH = n(413492),
    tj = n(915614),
    tW = n(744753),
    tY = n(559506),
    tK = n(646986),
    t$ = n(349419),
    tz = n(946356),
    tq = n(878555),
    tZ = n(624479),
    tX = n(206845),
    tQ = n(957565),
    tJ = n(427262),
    t0 = n(962352);
function t1(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, tk.NJ)();
    return tQ.p5
        ? (0, i.jsx)(tX.A, {
              text: eA.intl.string(eA.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tJ.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(I.D, {
                      ...e,
                      className: s()(t0.c, { [t0.R]: n }),
                      "aria-label": eA.intl.string(eA.t.y5MwJy),
                      children: (0, i.jsx)(tZ.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t2 = n(983495),
    t3 = n(442228),
    t6 = n(885386),
    t4 = n(290863),
    t7 = n(351906),
    t5 = n(562153),
    t8 = n(661531),
    t9 = n(477782),
    ne = n(628284),
    nt = n(695366),
    nn = n(363195),
    ni = n(889227),
    nr = n(287809),
    na = n(174459),
    ns = n(429707),
    nl = n(274303),
    no = n(994125),
    nd = n(347853),
    nc = n(573879),
    nu = n(335020),
    n_ = n(43105),
    nE = n(661439),
    nA = n(385113),
    nh = n(352003),
    nI = n(429913),
    nf = n(334074),
    np = n(633075),
    nT = n(667049),
    nm = n(280450),
    ng = n(90165),
    nS = n(403362),
    nN = n(518477);
function nC(e) {
    let { targetElementRef: t, onClose: a } = e,
        [s, l] = r.useState(!1),
        o = (0, c.bG)([nm.default], () => nm.default.getId()),
        { eligibleApplications: d, markAsDismissed: _ } = (function () {
            let e = (0, c.yK)([nA.A], () => nA.A.getFeaturedApplicationIds());
            (0, nh.A)(e),
                r.useEffect(() => {
                    (0, nE.X)();
                }, []);
            let t = (0, c.bG)([nm.default], () => nm.default.getId()),
                n = (0, nT.A)(t),
                i = r.useMemo(() => n.filter((e) => e instanceof np.R), [n]),
                a = (0, nI.A)(e),
                s = r.useMemo(() => a.filter(nS.Vq), [a]),
                l = (0, c.cf)([ng.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = s.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = ng.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: d, markAsDismissed: _ } = (0, nf.hj)({
                    applications: o,
                    dismissibleContent: u.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nf.SH,
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
                n.e("84896"),
                n.e("38759"),
                n.e("51943"),
                n.e("90072"),
                n.e("88016"),
                n.e("84133"),
                n.e("55953"),
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
                n.e("62931"),
                n.e("58529"),
                n.e("58038"),
                n.e("62531"),
                n.e("44974"),
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
                n.e("55654"),
                n.e("68574"),
                n.e("63645"),
                n.e("5636"),
                n.e("32085"),
                n.e("24038"),
                n.e("52229"),
                n.e("95340"),
                n.e("13351"),
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
        : (0, i.jsx)(n_.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/ea1ea066f1312b56d74e16232ca7da602ee5fc0206f0ea9ecc130e5094334683.svg",
              },
              title: eA.intl.string(eA.t.HMWL9c),
              body: eA.intl.string(eA.t["9hfy3A"]),
              onRequestClose: () =>
                  _(
                      d.map((e) => e.id),
                      eE.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eA.intl.string(eA.t.VSLDly),
                      loading: s,
                      onClick: function () {
                          l(!0),
                              (0, tV.openUserProfileModal)({ userId: o, tabSection: nN.RP.WIDGETS })
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
                                          _(
                                              d.map((e) => e.id),
                                              eE.i.TAKE_ACTION,
                                          ),
                                          a();
                                  })
                                  .finally(() => l(!1));
                      },
                  },
              ],
          });
}
var nR = n(461213),
    nO = n(818348),
    nL = n(466573);
function nD() {
    let e = (0, c.bG)([nR.A], () => nR.A.getStatus()),
        t = (0, tJ.MU)(e) ?? "",
        n = e === nO.cl.INVISIBLE || e === nO.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nL.k,
        children: [
            (0, i.jsxs)(f.A, { tag: "div", children: [eA.intl.string(eA.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eW.m, {
                    text: eA.intl.string(eA.t.L99HQm),
                    children: (0, i.jsx)(nt.E, {
                        size: "xs",
                        color: t8.A.colors.STATUS_WARNING,
                        "aria-label": eA.intl.string(eA.t.L99HQm),
                    }),
                }),
        ],
    });
}
var ny = n(379848),
    nv = n(321191);
let nb = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nM = n(501838),
    nP = n(760716),
    nU = n(915089),
    nw = n(13808);
function nG(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: a,
            children: l,
            height: o,
            className: d,
            contentClassName: c,
        } = e,
        u = (0, nU.GV)(),
        _ = r.useRef(null),
        E = (0, eo.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(L.animated.div, {
        className: s()(nw.kL, d),
        style: E,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": u,
            className: nw.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nw.U1,
                    children: [
                        (0, i.jsx)(I.D, {
                            innerRef: _,
                            "aria-label": eA.intl.string(eA.t.WAI6xu),
                            className: nw.b,
                            onClick: () => {
                                t(eE.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(et.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(J.D, { id: u, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != a && (0, i.jsx)(ee.E, { variant: "text-md/normal", color: "text-subtle", children: a }),
                (0, i.jsx)(eN.Ip, {
                    className: nw.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: s()(nw.gT, c), children: l }),
                }),
            ],
        }),
    });
}
var nx = n(973912),
    nk = n(871123),
    nF = n(44724),
    nV = n(501573);
function nB() {
    (0, nF.default)({ guildId: (0, nk.zf)() });
}
function nH(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: a } = (0, P.Ay)([M.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nG, {
              heading: eA.intl.string(eA.t["vy/61K"]),
              subheading: eA.intl.string(eA.t.tEee9t),
              markAsDismissed: r,
              className: nV.Zj,
              contentClassName: nV.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nx.A, {
                      userId: t,
                      analyticsLocations: a,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nV.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nV.UD,
                      children: (0, i.jsx)(eZ.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: eA.intl.string(eA.t.rg9FQp),
                          onClick: nB,
                      }),
                  }),
              ],
          });
}
function nj(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: a } = e,
        s = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nb.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nr.default], () => nr.default.getCurrentUser()),
                a = (0, c.bG)([nv.A], () => (null != i ? nv.A.getFirstWishlistId(i.id) : null)),
                s = (0, nP.i)((e) => e.recommendationApplicationIds),
                o = (0, nM.rY)(),
                d = (0, nM.qx)();
            return r.useMemo(
                () => (null != s || (null == a && n) ? (0, l.uniq)([...(s ?? []), ...d, ...o]).sort() : []),
                [n, a, d, o, s],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = r.useMemo(() => {
            let e = [];
            return s.length > 0 && e.push(u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [s]);
    return (0, i.jsx)(ny.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: s } = e;
            return null == a
                ? null
                : r === u.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nH, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: s })
                  : null;
        },
    });
}
var nW = n(146901),
    nY = n(827827);
let nK = [
        { duration: 15 * eQ.A.Millis.MINUTE, label: () => eA.intl.string(eA.t["8ot6gv"]) },
        { duration: eQ.A.Millis.HOUR, label: () => eA.intl.string(eA.t.UMWBZr) },
        { duration: 8 * eQ.A.Millis.HOUR, label: () => eA.intl.string(eA.t.EpAXPC) },
        { duration: eQ.A.Millis.DAY, label: () => eA.intl.string(eA.t["755t4q"]) },
        { duration: 3 * eQ.A.Millis.DAY, label: () => eA.intl.string(eA.t["f3/1ch"]) },
        { duration: void 0, label: () => eA.intl.string(eA.t["46dqJY"]) },
    ],
    n$ = "forever";
function nz(e) {
    let { status: t, currentStatus: n, description: r } = e,
        a = t !== tl.clD.ONLINE,
        s = (0, i.jsx)(i.Fragment, {
            children: nK.map((e) => {
                let { duration: r, label: a } = e;
                return (0, i.jsx)(
                    t9.Dr,
                    {
                        id: `${t}-${r}`,
                        label: a(),
                        action: () => (0, nY.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? n$,
                );
            }),
        });
    return (0, i.jsx)(t9.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, tJ.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(eO.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nY.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? s : void 0,
    });
}
function nq(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nW._)(e);
    return "today" === t
        ? eA.intl.formatToPlainString(eA.t.ZxxHIO, { timeString: i })
        : eA.intl.formatToPlainString(eA.t["9OFjSe"], { dateString: n, timeString: i });
}
var nZ = n(996988),
    nX = n(656884);
function nQ(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: l, openedAt: o, className: d } = e,
        _ = __OVERLAY__,
        h = (0, tF.Ay)(t.id, void 0),
        { analyticsLocations: I } = (0, P.Ay)(M.A.USER_PROFILE_ACCOUNT_POPOUT),
        p = (0, tk.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: m, height: g } = (0, eb.Ay)(),
        { isHoveringOrFocusing: S, isHovering: N } = (0, e5.A)(m);
    r.useEffect(() => {
        a?.(m.current);
    }, [m, a]),
        r.useEffect(
            () => (tN.A.setState({ isOpen: !0 }), () => tN.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let C = (0, c.bG)([t4.A], () => t4.A.getStatus(t.id)),
        R = nq(t6.CY.useSetting()),
        O = (0, c.bG)([t7.A], () => t7.A.hidePersonalInformation),
        L = (0, tg.kB)(),
        D = t6.Q_.useSetting(),
        y = (function (e) {
            let t = t6.CY.useSetting(),
                n = (0, tg.kB)(),
                r = t6.Jr.useSetting();
            function a(i) {
                let r = nq(t);
                if (e === i && null != r) return r;
                switch (i) {
                    case tl.clD.DND:
                        return n ? eA.intl.string(eA.t.day5A6) : eA.intl.string(eA.t["tq/fMK"]);
                    case tl.clD.INVISIBLE:
                        return eA.intl.string(eA.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, i.jsx)(i.Fragment, {
                    children: nK.map((t) => {
                        let { duration: n, label: r } = t;
                        return (0, i.jsx)(
                            t9.Dr,
                            {
                                id: `${e}-${n}`,
                                label: r(),
                                action: () => {
                                    (0, tg.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n$,
                        );
                    }),
                }),
                l = nz({ status: tl.clD.ONLINE, currentStatus: e }),
                o = nz({ status: tl.clD.IDLE, currentStatus: e, description: a(tl.clD.IDLE) }),
                d = nz({ status: tl.clD.DND, currentStatus: e, description: a(tl.clD.DND) }),
                c = nz({ status: tl.clD.INVISIBLE, currentStatus: e, description: a(tl.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    l,
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
                                          label: eA.intl.string(eA.t.gJRnwK),
                                          iconLeft: eL.a,
                                          leadingAccessory: { type: "icon", icon: eL.a },
                                          badge: { text: eA.intl.string(eA.t.ApAu9f) },
                                          subtext:
                                              null != r && "0" !== r
                                                  ? eA.intl.format(eA.t.BWD8fs, {
                                                        endTime: new Date(Number(r)).toLocaleString(
                                                            eA.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eA.intl.string(eA.t["Br1q+x"]),
                                          action: () => {
                                              (0, tg.ES)(!n);
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
            let t = (0, c.bG)([nr.default], () => nr.default.getCurrentUser()),
                n = (0, c.bG)([t7.A], () => t7.A.hidePersonalInformation),
                r = (0, c.bG)([nn.A], () => (0, tC.M)(nn.A.theme)),
                { multiAccountUsers: a } = (0, no.K)(),
                s = a.map((a) => {
                    let s = new ni.A(a),
                        l = s.id === t?.id,
                        o = a.tokenStatus === nl.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, i.jsx)(
                        t9.Dr,
                        {
                            id: s.id,
                            focusedClassName: nu.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nu.ci,
                                    children: [
                                        (0, i.jsx)(E.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: A._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nu.DD,
                                            children: [
                                                (0, i.jsx)(ee.E, {
                                                    className: nu.gE,
                                                    variant: "text-sm/normal",
                                                    children: tJ.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, i.jsx)(ee.E, {
                                                        className: nu.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        l &&
                                            (0, i.jsx)(ne.y, {
                                                size: "sm",
                                                color: t
                                                    ? t8.A.unsafe_rawColors.WHITE.css
                                                    : t8.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t8.A.unsafe_rawColors.BRAND_500.css
                                                        : t8.A.unsafe_rawColors.WHITE.css,
                                                className: nu.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nt.E, {
                                                color: t8.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
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
                                    (n = s.id) !== t?.id &&
                                        (na.default.track(tl.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tl.JJy.USER_PROFILE },
                                        }),
                                        ns.Mx(n, void 0, nc.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(t9.bX, {}),
                            (0, i.jsx)(t9.Dr, {
                                id: "manage-accounts",
                                label: eA.intl.string(eA.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nd.A)();
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        b = (0, tx.A)({ analyticsLocations: I }),
        U = (0, tL.TW)(t),
        w = r.useRef(null),
        G = r.useRef(null),
        x = (0, tI.A)(h?.profileFrame?.skuId, "UserProfileAccountPopout"),
        k = (0, th.A)(h?.profileFrame?.skuId);
    (0, tf.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: p, analyticsLocations: I });
    let F = r.useRef((0, tN.A)((e) => e.shouldRenderTenureLevelUp)),
        V = r.useMemo(() => (0, tT.A)(), []),
        [B, H] = r.useState(() => tN.A.getState().shouldRenderTenureLevelUp);
    function j(e) {
        n?.(), (0, tV.openUserProfileModal)({ customStatusPrompt: V, sourceAnalyticsLocations: I, ...p, ...e });
    }
    r.useEffect(() => {
        let e = setTimeout(() => {
            H(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let W = h?.widgets != null && h.widgets.length > 0,
        Y = r.useCallback(() => {
            n();
        }, [n]),
        K = r.useCallback(() => {
            b(), Y();
        }, [b, Y]),
        { enabled: $ } = eM.A.useConfig({ location: "UserProfileAccountPopout" }),
        q = (0, z.ux)("UserProfileAccountPopout"),
        [Z, X] = (0, tm.kn)(q ? [u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE] : []),
        Q = Z === u.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
        J = r.useId();
    return (0, i.jsx)(P.f5, {
        value: I,
        children: (0, i.jsx)(tk.of, {
            value: p,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(eS.l, {
                ref: m,
                "aria-labelledby": J,
                className: s()(eG.jC, d),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(f.A, {
                        children: (0, i.jsx)(em.H, { id: J, children: eA.intl.string(eA.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(em.F, {
                        children: [
                            (0, i.jsx)(nj, { displayProfile: h, handleOpenUserProfileModal: j, height: g }),
                            (0, i.jsxs)(tz.A, {
                                className: eG.BK,
                                user: t,
                                displayProfile: h,
                                themeType: nZ.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nX.wx,
                                        children: [
                                            (0, i.jsx)(tj.A, { user: t, displayProfile: h, themeType: nZ.d.POPOUT }),
                                            (0, i.jsx)(tB.A, {
                                                user: t,
                                                displayProfile: h,
                                                themeType: nZ.d.POPOUT,
                                                onOpenProfile: _ ? void 0 : j,
                                            }),
                                            (0, i.jsx)(t2.A, {
                                                ref: w,
                                                user: t,
                                                themeType: nZ.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: V,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eN.Ip, {
                                        className: eG.rf,
                                        style: { pointerEvents: B ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tY.A, { userId: t.id }),
                                            (0, i.jsx)(tq.Ay, {
                                                className: eG.eF,
                                                user: t,
                                                displayName: t5.Ay.getName(void 0, null, t),
                                                onClickName: _ ? void 0 : j,
                                                displayNameTrailing: (0, i.jsx)(t1, { user: t, isVisible: S }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(tH.A, {
                                                    displayProfile: h,
                                                    themeType: nZ.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != l ? (e) => e === l : void 0,
                                                    shouldGlowTenureBadge: F.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tW.A, { isPremiumUser: U, onInteraction: n }),
                                            (0, i.jsx)(t3.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: O,
                                                onClose: n,
                                            }),
                                            W &&
                                                (0, i.jsx)(t$.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: j,
                                                }),
                                            (0, i.jsx)(tK.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: j,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eG.T_,
                                                children: [
                                                    (0, i.jsx)(tz.A.Overlay, {
                                                        className: eG.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(ek, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eA.intl.string(eA.t.s5vZlQ),
                                                                    icon: eC.R,
                                                                    trailing:
                                                                        Q &&
                                                                        (0, i.jsx)(eR.Lp, {
                                                                            text: eA.intl.string(eA.t.y2b7CA),
                                                                            "aria-hidden": !0,
                                                                        }),
                                                                    onClick: () => {
                                                                        Q && X(eE.i.TAKE_ACTION), K();
                                                                    },
                                                                    ref: G,
                                                                }),
                                                                (0, i.jsx)(ek, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nD, {}),
                                                                    sublabel: null != R && R,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eO.nW, { status: C, size: 12 }),
                                                                    trailing:
                                                                        (L || C === tl.clD.DND) &&
                                                                        (0, i.jsx)(eL.a, { size: "xxs" }),
                                                                    renderSubmenu: eT.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(ex, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eG.hQ,
                                                                                  "aria-label": eA.intl.string(
                                                                                      eA.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: y,
                                                                              });
                                                                          },
                                                                    onClick: eT.Fr
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
                                                                                                      eg.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eA.intl.string(
                                                                                                                  eA.t[
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
                                                                                                                  eA.intl.string(
                                                                                                                      eA
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
                                                                (0, i.jsx)(tE, { onClose: n, popoutContainerRef: m }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tz.A.Overlay, {
                                                        className: eG.g0,
                                                        children: (0, i.jsxs)(eF, {
                                                            children: [
                                                                (0, i.jsx)(ek, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: ey.r,
                                                                    label: eA.intl.string(eA.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nd.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(ex, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eA.intl.string(eA.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: v,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tQ.p5 &&
                                                                    D &&
                                                                    (0, i.jsx)(ek, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: ev.L,
                                                                        label: eA.intl.string(eA.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tQ.C)(t.id), n();
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
                                        !F.current &&
                                        (0, i.jsx)(tA.A, { skuId: h.profileEffect.skuId, isHovering: N }),
                                    null != x && (0, i.jsx)(tp.A, { frame: x, fadeIn: k }),
                                ],
                            }),
                            $ && (0, i.jsx)(nC, { targetElementRef: G, onClose: n }),
                            (0, i.jsx)(tw, {}),
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
    n6 = n(852712),
    n4 = n(167579),
    n7 = n(173660),
    n5 = n(451409),
    n8 = n(763827),
    n9 = n(499156),
    ie = n(731854);
let it = 2.5 * eQ.A.Millis.SECOND,
    ii = +eQ.A.Millis.HOUR;
var ir = n(459838),
    ia = n(485296);
let is = 3 * eQ.A.Millis.SECOND,
    il = +eQ.A.Millis.DAY;
var io = n(616356),
    id = n(734057),
    ic = n(629016),
    iu = n(186111),
    i_ = n(967198),
    iE = n(486020),
    iA = n(625494),
    ih = n(536194),
    iI = n(19575),
    ip = n(994314),
    iT = n(485599),
    im = n(338854);
function ig(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: r, position: a, shouldShow: s = !0, children: l } = e,
        o = (0, eV.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l,
            s && o
                ? (0, i.jsx)(im.H, {
                      targetElementRef: t,
                      title: eA.intl.string(td.default.Qn21R6),
                      body: eA.intl.string(td.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: eA.intl.string(eA.t.RzWDqY),
                          onClick: function () {
                              n(eE.i.TAKE_ACTION), r();
                          },
                      },
                      onRequestClose: function () {
                          n(eE.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iS = n(626584),
    iN = n(757036),
    iC = n(531685),
    iR = n(259065),
    iO = n(864386);
let iL = new iS.A("DisplayNameStylesFlywheelCoachmark");
function iD(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: s } = (0, P.Ay)(),
        l = (0, r.useRef)(null),
        o = (0, c.bG)([iC.A], () => iC.A.isFocused()),
        d = (0, iN.L)(ty.PremiumTypes.TIER_2),
        u = (0, r.useCallback)(() => {
            t(eE.i.TAKE_ACTION),
                (0, ea.openUserSettings)(er.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
                    (0, iR.L)({ analyticsLocations: s });
                });
        }, [t, s]),
        _ = (0, r.useCallback)(() => {
            t(eE.i.USER_DISMISS);
        }, [t]);
    (0, r.useEffect)(() => {
        o && l.current?.paused ? l.current?.play().catch(iL.error) : o || l.current?.pause();
    }, [o]);
    let E = d ? [eA.intl.string(iO.default.TyUdka)] : [eA.intl.string(iO.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(n_.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: _,
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
                title: eA.intl.string(iO.default.cYwrp8),
                body: E,
                actions: [{ text: eA.intl.string(eA.t["4P5I8V"]), variant: "primary", onClick: u }],
            }),
        ],
    });
}
var iy = n(45780),
    iv = n(696451),
    ib = n(71393),
    iM = n(685073),
    iP = n(228366);
let iU = { lastSeenInfos: {} },
    iw = iU;
class iG extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iw = e ?? iU;
    }
    getState() {
        return iw;
    }
    getGuildLastSeenInfo(e) {
        return iw.lastSeenInfos[e] ?? null;
    }
}
let ix = new iG(iP.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iw.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iw = iU;
    },
});
var ik = n(116833),
    iF = n(514661);
let iV = new iS.A("GuildTagAvailableCoachmark");
function iB(e) {
    let t = (0, c.bG)([ib.A], () => ib.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iP.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: a, onEditProfile: s } = (0, iF.A)(t?.id ?? null, () => n(eE.i.TAKE_ACTION));
    if (null == t || !(0, iM.q0)(t))
        return iV.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let l = [
        { text: eA.intl.string(eA.t.jwEaiX), loading: r, onClick: a, variant: "primary" },
        { text: eA.intl.string(eA.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(n_.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: ik.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eA.intl.formatToPlainString(eA.t["m/Tc3n"], { guildName: t.name }),
                body: eA.intl.string(eA.t.DrAXIr),
                actions: l,
                size: "md",
                onRequestClose: () => n(eE.i.USER_DISMISS),
            }),
        ],
    });
}
function iH(e) {
    let t = (0, c.bG)([ib.A], () => ib.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: a, onEditProfile: s } = (0, iF.A)(t?.id ?? null, () => n(eE.i.TAKE_ACTION));
    if (null == t || !(0, iM.q0)(t))
        return iV.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let l = [
        { text: eA.intl.string(eA.t.jwEaiX), loading: r, onClick: a, variant: "primary" },
        { text: eA.intl.string(eA.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(n_.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: ik.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eA.intl.formatToPlainString(eA.t.VFqnyU, { guildName: t.name }),
                body: eA.intl.string(eA.t.DrAXIr),
                actions: l,
                size: "md",
                onRequestClose: () => n(eE.i.USER_DISMISS),
            }),
        ],
    });
}
var ij = n(843010),
    iW = n(764231),
    iY = n(425713);
function iK(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tv(),
        a = (0, c.bG)([ed.Ay], () => ed.Ay.useReducedMotion),
        s = (0, tN.A)((e) => e.isOpen),
        l = (0, ij.G)();
    return a || null == r || s || l
        ? null
        : (0, i.jsx)(ny.zJ, {
              contentType: u.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(i$, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === u.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i$(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: s } = e,
        l = ty.sp.indexOf(t),
        o = (0, iY.I)(ty.sp[l > 0 ? l - 1 : l]).ambient,
        d = (0, r.useCallback)(() => {
            n(eE.i.TAKE_ACTION),
                tN.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iA._.dispatch(tl.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(eE.i.USER_DISMISS);
        }, [n]),
        u = ty.VD[t],
        _ = eA.intl.formatToPlainString(eA.t.ewkaVR, {
            timeMilestone: (0, iW.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        E = [{ text: eA.intl.string(eA.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(n_.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: s,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eA.intl.string(eA.t.VoDxsV),
        body: _,
        actions: E,
    });
}
function iz(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nJ.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [a, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iy.G$)(u.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tl.dJq),
                r = (0, c.bG)([ib.A, nr.default, iv.Ay], () => {
                    if (null === e) return !1;
                    let t = ib.A.getGuild(e);
                    if (void 0 === t || !(0, iM.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nr.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iv.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tm.ww)(r && n && !i ? [u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tl.eGj);
        })(e.guildId, { shouldShow: r }),
        [l, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                a = (0, c.bG)([ix], () => (null === r ? null : ix.getGuildLastSeenInfo(r))),
                s = (0, c.bG)([ib.A], () => ib.A.getGuild(r)?.profile?.tag),
                l = null != s && i?.identityGuildId === r && i?.tag === null,
                o = null != r && a?.tag === s,
                d = null !== r && l && !o;
            return (0, tm.Wl)(d && n ? u.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? a === u.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iH, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : l === u.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iB, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iK, { groupName: eE.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(ny.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: eE.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iD, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case u.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(ig, {
                                            markAsDismissed: r,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: ej.p,
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
var iq = n(615675),
    iZ = n(900797),
    iX = n(847374),
    iQ = n(348858),
    iJ = n(617354),
    i0 = n(829773),
    i1 = n(42473),
    i2 = n(490704),
    i3 = n(967194);
function i6(e) {
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
        } = (0, iQ.I)(_ ? "undeafen" : "deafen"),
        p = n ? iq.T : E,
        { name: T } = (0, ep.x5)(ie.oh.AUDIO_OUTPUT),
        m = (0, iJ.A)(t, n, a),
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
                            children: (0, i.jsx)(i0.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", M.A.ACCOUNT),
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
                        E = u ? iZ.t : iX.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: s()(i2.Lh, { [i2.v8]: _, [i2.q6]: u }),
                        children: [
                            (0, i.jsx)(i1.A, {
                                "aria-checked": _,
                                "aria-label": eA.intl.string(eA.t.wjcRFX),
                                className: i2.eT,
                                disabled: a,
                                icon: (0, i.jsx)(p, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: _ ? i3.o : void 0,
                                innerClassName: s()({ [i3.T]: n }),
                                onClick: l,
                                onContextMenu: r,
                                onMouseEnter: I,
                                onMouseLeave: f,
                                plated: null != d,
                                redGlow: _,
                                role: "switch",
                                tooltipText: m,
                            }),
                            (0, i.jsx)(i1.A, {
                                className: s()(i2.UT, { [i2.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(E, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: r,
                                onContextMenu: r,
                                plated: null != d,
                                redGlow: _,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eA.intl.formatToPlainString(eA.t["f+DDY/"], { outputDeviceName: T })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? eA.intl.format(eA.t["f+DDY/"], { outputDeviceName: T })
                                    : eA.intl.string(eA.t.aA4Vce),
                                "aria-label": c
                                    ? eA.intl.formatToPlainString(eA.t["f+DDY/"], { outputDeviceName: T })
                                    : eA.intl.string(eA.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i4 = n(666654),
    i7 = n(523875),
    i5 = n(993719);
let i8 = {};
class i9 extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i8[e] ?? !1;
    }
}
let re = new i9(iP.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i8[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i8[t] = !1;
    },
});
var rt = n(362823),
    rn = n(980923),
    ri = n(224585),
    rr = n(949341),
    ra = n(973324);
function rs(e) {
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
        { showPTTIconIndicator: S } = n9.A.useConfig({ location: "MicrophoneButton" }),
        N = (0, c.bG)([n5.Ay], () => n5.Ay.getMode() === ie.TB.PUSH_TO_TALK),
        C = (0, c.bG)([n5.Ay], () => n5.Ay.getSettings().modeOptions.shortcut),
        R = (0, c.bG)([re], () => re.getIsTutorialActive(rt.v.MUTE_TUTORIAL)),
        O = (0, c.bG)([n8.A], () => null != n8.A.getChannelId()),
        { name: L } = (0, ep.x5)(ie.oh.AUDIO_INPUT),
        { enabledInputProfiles: D } = (0, n6.d)({ location: "MicrophoneButton" }),
        y = r.useRef(null),
        v = n || l || a,
        b = (0, i7.L)(v ? "unmute" : "mute"),
        { analyticsLocations: U } = (0, P.Ay)(M.A.AUDIO_INPUT_BUTTON),
        { Component: w, events: G, play: x } = b,
        k = a || l ? i4.O : w;
    r.useEffect(() => () => x(), [v, x]);
    let F = (0, rn.A)(n, a, l, o);
    t = I
        ? { tooltipType: "green_void_do_not_use", tooltipText: eA.intl.string(eA.t["29gnR4"]), tooltipForceOpen: !0 }
        : T || f
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eA.intl.format(eA.t.c1qUOQ, { keybind: e0.dI(C).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let B = S && N && O,
        H = v ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
        j = r.useCallback(() => {
            E(), R && i5.N(rt.v.MUTE_TUTORIAL);
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
                            children: (0, i.jsx)(i0.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", M.A.ACCOUNT),
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
                        l = a ? iZ.t : iX.a;
                    return (0, i.jsxs)("div", {
                        ref: y,
                        className: s()(i2.Lh, { [i2.v8]: v, [i2.q6]: a }),
                        children: [
                            (0, i.jsx)(i1.A, {
                                "aria-checked": v,
                                "aria-label": eA.intl.string(eA.t.w4m945),
                                className: i2.eT,
                                disabled: o,
                                icon: (0, i.jsx)(k, { size: "custom", width: 20, height: 20, color: H, className: d }),
                                onClick: j,
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
                                children: B ? (0, i.jsx)("div", { className: s()(rr.U, { [rr.z]: g }) }) : null,
                            }),
                            (0, i.jsx)(i1.A, {
                                "aria-label": p
                                    ? eA.intl.formatToPlainString(eA.t["18wnuD"], { inputDeviceName: L })
                                    : eA.intl.string(eA.t.fRzCbB),
                                className: s()(i2.UT, { [i2.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(l, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: H,
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
                                    ? eA.intl.formatToPlainString(eA.t["18wnuD"], { inputDeviceName: L })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: p
                                    ? eA.intl.format(eA.t["18wnuD"], { inputDeviceName: L })
                                    : eA.intl.string(eA.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(n_.A, {
                targetElementRef: y,
                shouldShow: R,
                graphic: { type: "image", src: ra.A },
                onRequestClose: () => {
                    i5.N(rt.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eA.intl.string(ri.default.VG4zAf),
                body: eA.intl.string(ri.default["8VIRzR"]),
            }),
        ],
    });
}
var rl = n(935399),
    ro = n(505312),
    rd = n(848847),
    rc = n(88001),
    ru = n(466919),
    r_ = n(438705);
function rE(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        s = r.useCallback(() => {
            a(), (0, ea.openUserSettings)(er.X.SUBSCRIPTIONS_PANEL);
        }, [a]);
    return (0, i.jsx)(n_.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: r_ },
        shouldShow: n,
        title: eA.intl.format(ru.default.bx8sR9, { premiumGroupProductName: (0, rc.DP)() }),
        body: eA.intl.format(ru.default.Pw4OFZ, { premiumGroupProductName: (0, rc.DP)() }),
        onRequestClose: a,
        actions: [{ text: eA.intl.string(ru.default.DD26QR), onClick: s }],
    });
}
var rA = n(873298),
    rh = n(840387);
function rI(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, rh.Z)(),
        s = t6.KP.useSetting(),
        l = a && s !== rA.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, r.useCallback)(() => {
            t(eE.i.TAKE_ACTION), (0, ea.openUserSettings)(er.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        d = (0, r.useCallback)(() => {
            t(eE.i.USER_DISMISS);
        }, [t]),
        c = l
            ? s === rA.KP.FRIENDS_ONLY
                ? eA.intl.string(eA.t["/hogEy"])
                : eA.intl.string(eA.t["6hEfm1"])
            : eA.intl.string(eA.t.bnNxW1);
    return (0, i.jsx)(n_.A, {
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
        title: eA.intl.string(eA.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eA.intl.string(eA.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function rf(e) {
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
    (0, rl.Ay)(() => {
        function e() {
            return A(!0);
        }
        return (
            iA._.subscribe(tl.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iA._.unsubscribe(tl.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = r.useCallback(() => {
        A(!1), s();
    }, [s]);
    t = null != a ? eA.intl.formatToPlainString(eA.t.Gzh6ZP, { webBuildOverride: a.id }) : eA.intl.string(eA.t.cduTBL);
    let I = e$.Z,
        f = (0, ro.w)();
    return (
        (I = null != a ? rd.H : f.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i1.A, {
                    ref: _,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: l,
                    "aria-label": eA.intl.string(eA.t.cduTBL),
                    icon: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...f.events,
                    plated: null != c,
                }),
                (0, i.jsx)(rE, { targetElementRef: _, shouldShow: E, onDismiss: () => A(!1) }),
                (0, i.jsx)(ny.Ay, {
                    contentTypes: o,
                    groupName: eE.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === u.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rI, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rp = n(489902);
let rT = iI.Ay.getEnableHardwareAcceleration() ? E.Js : E.eu,
    rm = 2.5 * eQ.A.Millis.SECOND,
    rg = 2 * eQ.A.Millis.MINUTE,
    rS = 2 * eQ.A.Millis.MINUTE,
    rN = 5 * eQ.A.Millis.SECOND;
function rC(e) {
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
        S = (0, iE.F_)({ avatarDecoration: f, size: (0, H.Te)(A._3.SIZE_32) }),
        N = (0, q.A)(),
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
                        iA._.subscribe(tl.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iA._.unsubscribe(tl.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        D = (0, W.K)(E);
    return null == o
        ? null
        : (0, i.jsx)(g.A, {
              object: tl.ZSU.AVATAR,
              children: (0, i.jsx)(n3.A, {
                  user: o,
                  targetElementRef: m,
                  clickTrap: !0,
                  preload: () =>
                      (0, n2.A)(o.id, o.getAvatarURL(void 0, n3.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(nQ, {
                          currentUser: o,
                          highlightBadge: O,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rp.dI,
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
                          className: s()(rp.Q9, { [rp.ZQ]: null != E }),
                          children: [
                              (0, i.jsx)(I.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": eA.intl.string(eA.t["5fWB8U"]),
                                  focusProps: { ringTarget: m },
                                  className: rp.$n,
                                  "data-jump-section": p,
                              }),
                              (0, i.jsx)(rT, {
                                  size: A._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: l ? tl.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: rp.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rp.oM, children: _(N) }),
                          ],
                      });
                  },
              }),
          });
}
class rR extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(rS, null, !1);
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
        (0, k.A)(e, t, tl.JJy.ACCOUNT_PANEL), (0, F.X)(M.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, x.A)(e, tl.JJy.ACCOUNT_PANEL), (0, F.X)(M.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n8.A.isConnected() ? (0, ea.openUserSettings)(er.X.VOICE_AND_VIDEO_PANEL) : (0, ea.openUserSettings)();
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
                    n.e("10027"),
                    n.e("95059"),
                    n.e("37634"),
                    n.e("812"),
                    n.e("89209"),
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
                    n.e("84896"),
                    n.e("38759"),
                    n.e("51943"),
                    n.e("90072"),
                    n.e("88016"),
                    n.e("84133"),
                    n.e("55953"),
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
                    n.e("29367"),
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
                    n.e("62931"),
                    n.e("58529"),
                    n.e("58038"),
                    n.e("62531"),
                    n.e("44974"),
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
                    n.e("55654"),
                    n.e("39171"),
                    n.e("74630"),
                    n.e("68574"),
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
                    n.e("13351"),
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
                    (0, i.jsx)(e, { ...t, onClose: m.Z_, onInteraction: (0, V.s)("UserSettingsMenu", M.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, V.s)("AudioDeviceMenu", M.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n6.d)({ location: "Account" });
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rg;
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
                      this.speakingWhileMutedTooltipTimeout.start(rm, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(rm, () =>
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
                    (0, i.jsx)(f.A, { children: tJ.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(O.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: l,
                        textClassName: rp.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tl.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(b.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(f.A, { children: tJ.Ay.humanizeStatus(a) }),
                      (0, i.jsx)($.A, { activity: o, emojiClassName: rp.Zg, className: rp.WO }),
                  ],
              })
            : null != a && a !== tl.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(b.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, i.jsx)(v, { text: tJ.Ay.humanizeStatus(a) }),
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
                          className: rp.eW,
                          children: (0, i.jsx)(iT.A, {
                              className: s()({ [rp.e8]: null != e }),
                              children: (0, i.jsx)(X.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? Z.G.ANIMATED : Z.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: rp.XP,
                          children: (0, i.jsx)(ip.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iz, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(rC, {
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
                                  className: s()(rp.kL, { [rp.UG]: null != n, [rp.bc]: !r, [rp.G5]: a }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(K.A, { nameplate: t, hovered: l, placement: Y.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rO, {
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
                      (0, i.jsx)(ef, {}),
                  ],
              });
    }
}
function rO(e) {
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
        O = (0, W.K)(m);
    return (0, i.jsxs)("div", {
        className: rp.Uo,
        style: O,
        children: [
            (0, i.jsx)(rs, {
                accountContainerRef: g,
                selfMute: n,
                serverMute: a,
                suppress: l,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: _,
                onClick: A,
                onContextMenu: h,
                iconForeground: null != m ? rp.t4 : void 0,
                nameplate: m,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: N,
                dismissTooltips: C,
                speaking: R,
            }),
            (0, i.jsx)(i6, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: E,
                onContextMenu: I,
                awaitingRemote: r,
                iconForeground: null != m ? rp.t4 : void 0,
                nameplate: m,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: C,
            }),
            (0, i.jsx)(rf, {
                webBuildOverride: c,
                onClick: f,
                onContextMenu: p,
                dismissibleContents: T.settings,
                iconForeground: null != m ? rp.t4 : void 0,
                nameplate: m,
            }),
        ],
    });
}
function rL(e) {
    let t = (0, c.bG)([n8.A], () => null != n8.A.getChannelId()),
        n = (0, ep.Py)(e),
        i = r.useRef(new _.Ep()),
        [a, s] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (s(!0),
            i.current.start(rN, () => {
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
function rD() {
    let e = (0, c.bG)([nr.default], () => nr.default.getCurrentUser()),
        t = (0, c.bG)([nm.default], () => nm.default.getId()),
        {
            activities: n,
            streaming: a,
            status: s,
        } = (0, c.cf)([nR.A], () => {
            let e = nR.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tl.$pd.STREAMING;
                    }),
                status: nR.A.getStatus(),
            };
        }),
        l = (0, c.bG)([io.A], () => io.A.getAnyStreamForUser(t)),
        d = (0, S.A)({ userId: t }),
        E = (0, c.bG)([ia.A], () => ia.A.getVoiceVolume(t)),
        A = tJ.Ay.useUserTag(e, { decoration: "never" }),
        h = (0, c.bG)([n8.A, id.A], () => {
            let e = n8.A.getChannelId();
            return null != e ? id.A.getChannel(e) : null;
        }),
        { mute: I, selfMute: f, suppress: p } = (0, n7.A)(h),
        { selfDeaf: m, deaf: g } = (0, n4.A)(h),
        C = (0, c.bG)([U.A], () => ((0, w.kK)() ? U.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        R = (0, c.bG)([n5.Ay], () => n5.Ay.getSpeakingWhileMuted()),
        O = (0, c.bG)([G.A], () => G.A.isFullscreenInContext()),
        L = (0, c.bG)([iu.A], () => iu.A.hasLayers()),
        D = (0, T.useModalsStore)(T.hasAnyModalOpenSelector) || L || ih.P.isDisallowPopupsSet() || O,
        y = (0, c.bG)([Q.default], () => null != Q.default.getAwaitingRemoteSessionInfo()),
        v = (0, c.bG)([i_.A], () => i_.A.getGuildId()),
        b = e?.avatarDecoration,
        x = (0, B.A)(b),
        k = tJ.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, P.Ay)(M.A.ACCOUNT),
        V = (0, j.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, nJ.c9)(),
        W = (0, c.bG)([n0.A, nr.default, ic.A], () => {
            let e,
                t = n0.A.getSyncingWith(),
                n = n0.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(ic.A.getParty(e) ?? []))
                        .map((e) => nr.default.getUser(e))
                        .filter(nS.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Y = { avatar: [], settings: [] },
        K = (0, n1.lX)("AccountCoachmark"),
        $ = (0, z.ux)("AccountCoachmark");
    !D &&
        ($ && Y.avatar.push(u.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        K && Y.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: q, dismissTooltip: Z } = rL(ie.oh.AUDIO_INPUT),
        { shouldShowTooltip: X, dismissTooltip: J } = rL(ie.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ee, dismissTooltip: et } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([n5.Ay], () => n5.Ay.getMode() === ie.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n8.A],
                    () => null != n8.A.getChannelId() && (n8.A.getDuration() ?? Number.MAX_VALUE) < it,
                ),
                [a, s] = r.useState(!1),
                { showPTTJoinTooltip: l } = n9.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = r.useRef(new _.Ep()),
                d = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((n9.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !l)) return;
                    s(!0),
                        t(!0),
                        d.current.start(ii, () => {
                            t(!1);
                        }),
                        o.current.start(it, () => {
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
        en = (function () {
            let { showPTTSpeakingIndicator: e } = n9.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([n5.Ay], () => n5.Ay.getMode() === ie.TB.PUSH_TO_TALK),
                a = (0, c.bG)([n8.A], () => n8.A.getRTCConnectionId()),
                s = (0, c.bG)([n5.Ay], () => {
                    let e = n5.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < il;
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
                        let a = (i & ie.ME.VOICE) === ie.ME.VOICE,
                            s = ia.A.isCurrentUserPTTActive();
                        a && !s
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(is, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        s && e && i && null != a && n5.Ay.getMediaEngine().on(ir.bg.VoiceActivity, o),
                        () => {
                            n5.Ay.getMediaEngine().removeListener(ir.bg.VoiceActivity, o), r.stop();
                        }
                    );
                }, [e, i, s, a]),
                t
            );
        })(),
        ei = r.useMemo(() => (q ? "input" : X ? "output" : void 0), [q, X]),
        er = r.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        Z();
                        break;
                    case "output":
                        J();
                }
            },
            [Z, J],
        );
    return (0, i.jsx)(P.f5, {
        value: F,
        children: (0, i.jsx)(rR, {
            currentUser: e,
            username: k,
            activities: n,
            applicationStream: l,
            voiceChannel: h,
            dismissibleContents: Y,
            userTag: A,
            occluded: D,
            selfDeaf: m,
            selfMute: f,
            serverDeaf: g,
            serverMute: I,
            speaking: d,
            voiceDb: E,
            speakingWhileMuted: R,
            speakingWhilePTTInactive: en,
            status: s,
            streaming: a,
            suppress: p,
            webBuildOverride: C,
            awaitingRemote: y,
            nameplate: V,
            selectedGuildId: v,
            avatarDecoration: x,
            isQuestBarEmpty: H,
            isListenAlongVisible: W,
            deviceChangedTooltipType: ei,
            onDismissDeviceChangedTooltip: () => er(ei),
            shouldShowPTTJoinTooltip: ee,
            dismissPTTJoinTooltip: et,
        }),
    });
}
