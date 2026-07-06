"use strict";
n.d(t, { g: () => ry, A: () => rv }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(158390),
    c = n(17928),
    d = n(554146),
    _ = n(451988),
    h = n(97808),
    f = n(778712),
    E = n(922016),
    p = n(939249),
    m = n(140735),
    g = n(312138),
    A = n(192308),
    I = n(442433),
    T = n(820284),
    S = n(717558),
    N = n(964486),
    C = n(220839),
    y = n(397244),
    O = n(394871),
    R = n(580929),
    v = n(866323),
    b = n(449450);
function L(e) {
    let { text: t } = e,
        n = (0, v.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(R.animated.div, { className: b.H, style: e, children: t })),
    });
}
var D = n(29160),
    w = n(793574),
    P = n(688810),
    M = n(521502),
    x = n(380610),
    U = n(313961),
    k = n(18235),
    G = n(183184),
    V = n(384059),
    F = n(480890),
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
    es = n(766075),
    ea = n(417146),
    eo = n(552122),
    el = n(717421),
    eu = n(775602),
    ec = n(993843);
let ed = { mass: 10, tension: 550, friction: 140 };
function e_(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, c.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        [o, u] = r.useState({ x: 0, y: 0 }),
        d = r.useMemo(
            () =>
                l().throttle((e) => {
                    s || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, s],
        );
    r.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [_, h] = (0, el.z)(() => ({ x: 0, y: 0, config: ed }));
    return (
        r.useEffect(() => {
            h({ x: o.x, y: o.y });
        }, [o.x, o.y, h]),
        (0, i.jsx)(R.animated.div, {
            style: { transform: (0, R.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ec.T, t),
        })
    );
}
var eh = n(49999),
    ef = n(375708),
    eE = n(275883);
function ep(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: r } = e,
        s = eo.A.useIsEligible(),
        a = (0, en.JZ)(t),
        o = null != n,
        l = null != r ? { color: r } : void 0,
        { analyticsLocations: u } = (0, P.Ay)(w.A.HOLIDAY_COACHMARK);
    function c(e) {
        (0, en.Dr)(t, { dismissAction: e });
    }
    function d() {
        (0, es.openUserSettings)(er.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(eh.i.TAKE_ACTION);
    }
    return s && !a
        ? (0, i.jsx)(ei.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eE.iE,
                  style: { backgroundColor: o ? n : void 0 },
                  children: [
                      !o &&
                          (0, i.jsxs)("div", {
                              className: eE.o5,
                              children: [
                                  (0, i.jsx)(e_, { className: eE.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eE.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eE.c8 }),
                      (0, i.jsxs)("div", {
                          className: eE.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          variant: "heading-md/bold",
                                          color: null != l ? void 0 : "text-overlay-light",
                                          style: l,
                                          children: ef.intl.string(ef.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(ee.E, {
                                          variant: "text-xs/normal",
                                          color: "text-overlay-light",
                                          children: ef.intl.format(ef.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      p.D,
                                                      {
                                                          tag: "span",
                                                          className: eE.nf,
                                                          style: l,
                                                          onClick: d,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(p.D, {
                                  className: eE.l2,
                                  onClick: () => c(eh.i.USER_DISMISS),
                                  children: (0, i.jsx)(et.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function em() {
    return null == ea.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ep, {
              dismissibleContent: ea.A.coachmarkDismissibleContent,
              backgroundColor: ea.A.coachmarkBackgroundColor,
              specialTextColor: ea.A.coachmarkSpecialTextColor,
          });
}
var eg = n(74848),
    eA = n(607399),
    eI = n(707554),
    eT = n(224640),
    eS = n(305866),
    eN = n(364522),
    eC = n(22231),
    ey = n(812993),
    eO = n(133171),
    eR = n(780338),
    ev = n(980707),
    eb = n(26137),
    eL = n(473935),
    eD = n(765671),
    ew = n(783041),
    eP = n(176781),
    eM = n(320448),
    ex = n(993401),
    eU = n(447349);
function ek(e) {
    return (0, i.jsx)("div", {
        className: eU.wE,
        children: (0, i.jsx)(ev.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eG(e) {
    let {
            action: t,
            onClick: n,
            icon: s,
            label: a,
            sublabel: o,
            trailing: l,
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: _,
        } = e,
        h = null != n,
        f = (0, ex.rE)({ action: t, onClick: n }),
        [m, g] = r.useState(!1),
        I = r.useRef(null),
        T = c ?? I,
        S = null != u,
        N = S && h,
        C = r.useCallback(() => {
            g(!0);
        }, []),
        y = r.useCallback(() => {
            (0, A.hasAnyModalOpen)() || g(!1);
        }, []);
    function O() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eU.iA, children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eU.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(ee.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eU.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(ee.E, { color: "currentColor", variant: "text-xs/medium", children: o }),
                            ],
                        }),
                        l,
                    ],
                }),
            ],
        });
    }
    function R(e) {
        let t;
        return (
            (t = N
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.D, { className: eU.ef, onClick: f, children: O() }),
                          (0, i.jsx)(p.D, {
                              className: eU.ap,
                              "aria-label": ef.intl.string(ef.t.PdRCRg),
                              ...e,
                              onClick: C,
                              children: (0, i.jsx)(eM._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : S
                  ? (0, i.jsxs)(p.D, {
                        className: eU.ef,
                        ...e,
                        onClick: C,
                        children: [
                            O(),
                            (0, i.jsx)("div", {
                                className: eU.ap,
                                children: (0, i.jsx)(eM._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(p.D, { className: eU.ef, onClick: f, children: O() })),
            (0, i.jsx)("div", { ref: T, className: eU.jG, children: t })
        );
    }
    return S
        ? (0, i.jsx)("li", {
              className: eU.j$,
              onMouseEnter: C,
              onMouseLeave: y,
              children: (0, i.jsx)(E.Y, {
                  targetElementRef: d ?? T,
                  align: _,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: m,
                  onRequestClose: y,
                  children: R,
              }),
          })
        : (0, i.jsx)("li", { className: eU.j$, children: R() });
}
function eV(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(734066),
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
    e5 = n(890856),
    e7 = n(713517),
    e8 = n(609174),
    e9 = n(619744);
function te(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        s = (0, e8.Y_)(),
        a = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, ej.p)({ initialEditingClipId: s.id });
            },
            [s, t],
        );
    return (0, i.jsx)(eZ.$, {
        onClick: a,
        icon: eC.R,
        variant: n,
        size: "sm",
        text: ef.intl.string(ef.t.bt75uw),
        fullWidth: !0,
    });
}
var tt = n(82716),
    tn = n(585579),
    ti = n(930317),
    tr = n(285072),
    ts = n(316305);
let ta = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: o } = e,
        l = r.useRef(null),
        { isHoveringOrFocusing: u } = (0, e7.A)(l),
        c = r.useCallback(() => {
            s?.(), (0, ej.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(e8.Cl, {
        clip: t,
        children: (0, i.jsx)(e5.s, {
            ref: l,
            "aria-label": ef.intl.string(ef.t.bt75uw),
            onClick: c,
            className: a()(ts.Z1, o),
            children: (0, i.jsxs)(ti.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(ey.Lp, { className: ts.Ad, text: ef.intl.string(ef.t.y2b7CA) }),
                    (0, i.jsxs)(tr.h, {
                        isVisible: u,
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
var to = n(652215),
    tl = n(753070),
    tu = n(16590),
    tc = n(550350);
function td(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e;
    (0, e4.A)();
    let o = (0, c.yK)([eB.Ay], () => Object.values(eB.Ay.getClips())),
        l = (0, c.bG)([eB.Ay], () => eB.Ay.getSettings()),
        u = (0, c.bG)([eB.Ay], () => eB.Ay.getNewClipIds()),
        d = (0, e2.aJ)("ClipsPopout"),
        _ = (0, c.bG)([eB.Ay], () => eB.Ay.getEnableAutoclipping()),
        h = (0, c.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(to.hCu.SAVE_CLIP)),
        f = r.useCallback(
            (e) => {
                a?.(e);
            },
            [a],
        ),
        E = !l.showPovClipsInGallery,
        p = r.useMemo(() => {
            let e = o.filter((e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail && (!E || !(0, eH.kD)(e)));
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [o, E]),
        m = r.useMemo(() => p.slice(0, 16), [p]),
        g = p.length > 16,
        A = null != h ? e0.dI(h.shortcut, !0) : null,
        I = [
            (0, eJ.$)(l.clipsLength / eQ.A.Millis.SECOND),
            (0, tl.zr)(l.clipsQuality.resolution),
            ef.intl.formatToPlainString(ef.t.Qb44XH, { fps: l.clipsQuality.frameRate }),
        ];
    return (
        d && I.push(ef.intl.string(tu.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: f,
            className: tc.SW,
            role: "dialog",
            "aria-label": ef.intl.string(ef.t.z2jK6X),
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
                                    children: ef.intl.string(ef.t.z2jK6X),
                                }),
                                null != A && (0, i.jsx)(eY.e, { className: tc.P, shortcut: A }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tc.$s,
                            children: [
                                (0, i.jsx)(eW.m, {
                                    text: ef.intl.string(ef.t["3D5yo/"]),
                                    children: (0, i.jsx)(eK.K, {
                                        onClick: () => n(),
                                        icon: e$.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ef.intl.string(ef.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eW.m, {
                                    text: ef.intl.string(tu.default["55C2MH"]),
                                    children: (0, i.jsx)(eK.K, {
                                        onClick: () => t(),
                                        icon: eP.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ef.intl.string(tu.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tc.ov,
                    children: [
                        I.map((e, t) =>
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
                        d &&
                            (0, i.jsx)(ee.E, {
                                variant: "text-xs/semibold",
                                color: _ ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tc.wS,
                                children: _ ? ef.intl.string(tu.default.lTwKmt) : ef.intl.string(tu.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(ez.c, {}),
                m.length > 0
                    ? (0, i.jsxs)(eq.Ch, {
                          className: tc.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              m.map((e) => (0, i.jsx)(ta, { clip: e, isNew: u.includes(e.id), onClose: s }, e.id)),
                              g &&
                                  (0, i.jsx)("div", {
                                      className: tc.qr,
                                      children: (0, i.jsx)(eZ.$, {
                                          onClick: () => t(),
                                          text: ef.intl.string(tu.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(t_, { keybindString: A }),
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
                children: ef.intl.string(tu.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(ee.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: ef.intl.format(tu.default.y4zC7j, {
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
function th(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        s = (0, eF.sw)(),
        a = !(0, c.bG)([eB.Ay], () => eB.Ay.getSettings().showPovClipsInGallery),
        o = (0, c.bG)([eB.Ay], () => {
            let e = eB.Ay.getNewClipIds();
            return a
                ? e.filter((e) => {
                      let t = eB.Ay.getClipById(e);
                      return null != t && !(0, eH.kD)(t);
                  }).length
                : e.length;
        }, [a]),
        l = r.useCallback(
            (e) => {
                t(), (0, ej.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        u = r.useCallback(() => {
            t(), (0, es.openUserSettings)(er.X.CLIPS_PANEL);
        }, [t]);
    return s
        ? (0, i.jsx)(eG, {
              action: "PRESS_CLIPS",
              icon: eP.x,
              label: ef.intl.string(ef.t.z2jK6X),
              trailing: o > 0 ? (0, i.jsx)(ey.hV, { count: o }) : null,
              onClick: () => l(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(td, { ...e, onOpenGallery: l, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tf = n(480335),
    tE = n(577390),
    tp = n(474257),
    tm = n(31956),
    tg = n(744808),
    tA = n(645507),
    tI = n(131607),
    tT = n(970931),
    tS = n(315710),
    tN = n(832248),
    tC = n(462887),
    ty = n(736653),
    tO = n(439174),
    tR = n(428262),
    tv = n(878784),
    tb = n(202541);
function tL() {
    let e = (0, tv.Xb)(),
        t = (0, tR.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tb.sp.length - 1; t >= 0; t--) {
        let i = tb.VD[tb.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tD = {
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
var tP = n(682165);
let tM = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tx() {
    let e = (0, c.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        t = (0, tN.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tL(),
                t = (0, tC.M)((0, ty.Ay)());
            if (null == e) return null;
            let n = tD[e],
                i = tw[e],
                r = {
                    currentBadge: (0, tO.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tb.sp.indexOf(e);
            if (s > 0) {
                let e = tb.sp[s - 1],
                    n = tD[e];
                (r.prevBadge = (0, tO.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [s, a] = r.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tU, { levelUpData: s });
}
function tU(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        s = r.useCallback(() => {
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
                        text: ef.intl.string(ef.t.cpT0Cq),
                        children: (0, i.jsx)(eK.K, {
                            icon: et.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": ef.intl.string(ef.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tM, { levelUpData: t }) }),
            ],
        }),
    });
}
var tk = n(206835),
    tG = n(183555),
    tV = n(999291),
    tF = n(975732),
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
        { trackUserProfileAction: r } = (0, tG.NJ)();
    return tQ.p5
        ? (0, i.jsx)(tX.A, {
              text: ef.intl.string(ef.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tJ.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(p.D, {
                      ...e,
                      className: a()(t0.c, { [t0.R]: n }),
                      "aria-label": ef.intl.string(ef.t.y5MwJy),
                      children: (0, i.jsx)(tZ.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t2 = n(983495),
    t3 = n(442228),
    t6 = n(885386),
    t4 = n(290863),
    t5 = n(351906),
    t7 = n(562153),
    t8 = n(661531),
    t9 = n(477782),
    ne = n(628284),
    nt = n(695366),
    nn = n(363195),
    ni = n(889227),
    nr = n(287809),
    ns = n(174459),
    na = n(429707),
    no = n(274303),
    nl = n(994125),
    nu = n(347853),
    nc = n(573879),
    nd = n(335020),
    n_ = n(43105),
    nh = n(661439),
    nf = n(385113),
    nE = n(352003),
    np = n(429913),
    nm = n(334074),
    ng = n(633075),
    nA = n(667049),
    nI = n(280450),
    nT = n(90165),
    nS = n(403362),
    nN = n(518477);
function nC(e) {
    let { targetElementRef: t, onClose: s } = e,
        [a, o] = r.useState(!1),
        l = (0, c.bG)([nI.default], () => nI.default.getId()),
        { eligibleApplications: u, markAsDismissed: _ } = (function () {
            let e = (0, c.yK)([nf.A], () => nf.A.getFeaturedApplicationIds());
            (0, nE.A)(e),
                r.useEffect(() => {
                    (0, nh.X)();
                }, []);
            let t = (0, c.bG)([nI.default], () => nI.default.getId()),
                n = (0, nA.A)(t),
                i = r.useMemo(() => n.filter((e) => e instanceof ng.R), [n]),
                s = (0, np.A)(e),
                a = r.useMemo(() => s.filter(nS.Vq), [s]),
                o = (0, c.cf)([nT.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nT.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                l = r.useMemo(() => {
                    let e = Date.now();
                    return a.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = o[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [a, i, o]),
                { eligibleToShow: u, markAsDismissed: _ } = (0, nm.hj)({
                    applications: l,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nm.SH,
                });
            return {
                eligibleApplications: r.useMemo(() => l.filter((e) => u.includes(e.id)), [l, u]),
                markAsDismissed: _,
            };
        })();
    return ((0, r.useEffect)(() => {
        0 !== u.length &&
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
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, i.jsx)(n_.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/ea1ea066f1312b56d74e16232ca7da602ee5fc0206f0ea9ecc130e5094334683.svg",
              },
              title: ef.intl.string(ef.t.HMWL9c),
              body: ef.intl.string(ef.t["9hfy3A"]),
              onRequestClose: () =>
                  _(
                      u.map((e) => e.id),
                      eh.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: ef.intl.string(ef.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          o(!0),
                              (0, tF.openUserProfileModal)({ userId: l, tabSection: nN.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      (0, A.openModalLazy)(
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
                                              u.map((e) => e.id),
                                              eh.i.TAKE_ACTION,
                                          ),
                                          s();
                                  })
                                  .finally(() => o(!1));
                      },
                  },
              ],
          });
}
var ny = n(461213),
    nO = n(818348),
    nR = n(466573);
function nv() {
    let e = (0, c.bG)([ny.A], () => ny.A.getStatus()),
        t = (0, tJ.MU)(e) ?? "",
        n = e === nO.cl.INVISIBLE || e === nO.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nR.k,
        children: [
            (0, i.jsxs)(m.A, { tag: "div", children: [ef.intl.string(ef.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eW.m, {
                    text: ef.intl.string(ef.t.L99HQm),
                    children: (0, i.jsx)(nt.E, {
                        size: "xs",
                        color: t8.A.colors.STATUS_WARNING,
                        "aria-label": ef.intl.string(ef.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nb = n(379848),
    nL = n(321191);
let nD = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nw = n(501838),
    nP = n(760716),
    nM = n(915089),
    nx = n(13808);
function nU(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: o,
            height: l,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nM.GV)(),
        _ = r.useRef(null),
        h = (0, el.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: l },
            to: { transform: "translate3d(0, 0, 0)", height: l },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(R.animated.div, {
        className: a()(nx.kL, u),
        style: h,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nx.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nx.U1,
                    children: [
                        (0, i.jsx)(p.D, {
                            innerRef: _,
                            "aria-label": ef.intl.string(ef.t.WAI6xu),
                            className: nx.b,
                            onClick: () => {
                                t(eh.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(et.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(J.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(ee.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(eN.Ip, {
                    className: nx.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nx.gT, c), children: o }),
                }),
            ],
        }),
    });
}
var nk = n(973912),
    nG = n(871123),
    nV = n(44724),
    nF = n(501573);
function nB() {
    (0, nV.default)({ guildId: (0, nG.zf)() });
}
function nH(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: s } = (0, P.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nU, {
              heading: ef.intl.string(ef.t["vy/61K"]),
              subheading: ef.intl.string(ef.t.tEee9t),
              markAsDismissed: r,
              className: nF.Zj,
              contentClassName: nF.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nk.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nF.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nF.UD,
                      children: (0, i.jsx)(eZ.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ef.intl.string(ef.t.rg9FQp),
                          onClick: nB,
                      }),
                  }),
              ],
          });
}
function nj(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nD.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nr.default], () => nr.default.getCurrentUser()),
                s = (0, c.bG)([nL.A], () => (null != i ? nL.A.getFirstWishlistId(i.id) : null)),
                a = (0, nP.i)((e) => e.recommendationApplicationIds),
                l = (0, nw.rY)(),
                u = (0, nw.qx)();
            return r.useMemo(
                () => (null != a || (null == s && n) ? (0, o.uniq)([...(a ?? []), ...u, ...l]).sort() : []),
                [n, s, u, l, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        l = r.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nb.Ay, {
        contentTypes: l,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: a } = e;
            return null == s
                ? null
                : r === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nH, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nW = n(146901),
    nY = n(827827);
let nK = [
        { duration: 15 * eQ.A.Millis.MINUTE, label: () => ef.intl.string(ef.t["8ot6gv"]) },
        { duration: eQ.A.Millis.HOUR, label: () => ef.intl.string(ef.t.UMWBZr) },
        { duration: 8 * eQ.A.Millis.HOUR, label: () => ef.intl.string(ef.t.EpAXPC) },
        { duration: eQ.A.Millis.DAY, label: () => ef.intl.string(ef.t["755t4q"]) },
        { duration: 3 * eQ.A.Millis.DAY, label: () => ef.intl.string(ef.t["f3/1ch"]) },
        { duration: void 0, label: () => ef.intl.string(ef.t["46dqJY"]) },
    ],
    n$ = "forever";
function nz(e) {
    let { status: t, currentStatus: n, description: r } = e,
        s = t !== to.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nK.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    t9.Dr,
                    {
                        id: `${t}-${r}`,
                        label: s(),
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
        hasSubmenu: s,
        label: (0, tJ.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(eO.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nY.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nq(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nW._)(e);
    return "today" === t
        ? ef.intl.formatToPlainString(ef.t.ZxxHIO, { timeString: i })
        : ef.intl.formatToPlainString(ef.t["9OFjSe"], { dateString: n, timeString: i });
}
var nZ = n(996988),
    nX = n(656884);
function nQ(e) {
    let { currentUser: t, onClose: n, setPopoutRef: s, highlightBadge: o, openedAt: l, className: u } = e,
        _ = __OVERLAY__,
        E = (0, tV.Ay)(t.id, void 0),
        { analyticsLocations: p } = (0, P.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        g = (0, tG.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 }),
        { ref: I, height: T } = (0, eD.Ay)(),
        { isHoveringOrFocusing: S, isHovering: N } = (0, e7.A)(I);
    r.useEffect(() => {
        s?.(I.current);
    }, [I, s]),
        r.useEffect(
            () => (tN.A.setState({ isOpen: !0 }), () => tN.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let C = (0, c.bG)([t4.A], () => t4.A.getStatus(t.id)),
        y = nq(t6.CY.useSetting()),
        O = (0, c.bG)([t5.A], () => t5.A.hidePersonalInformation),
        R = (0, tT.kB)(),
        v = t6.Q_.useSetting(),
        b = (function (e) {
            let t = t6.CY.useSetting(),
                n = (0, tT.kB)(),
                r = t6.Jr.useSetting();
            function s(i) {
                let r = nq(t);
                if (e === i && null != r) return r;
                switch (i) {
                    case to.clD.DND:
                        return n ? ef.intl.string(ef.t.day5A6) : ef.intl.string(ef.t["tq/fMK"]);
                    case to.clD.INVISIBLE:
                        return ef.intl.string(ef.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: nK.map((t) => {
                        let { duration: n, label: r } = t;
                        return (0, i.jsx)(
                            t9.Dr,
                            {
                                id: `${e}-${n}`,
                                label: r(),
                                action: () => {
                                    (0, tT.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n$,
                        );
                    }),
                }),
                o = nz({ status: to.clD.ONLINE, currentStatus: e }),
                l = nz({ status: to.clD.IDLE, currentStatus: e, description: s(to.clD.IDLE) }),
                u = nz({ status: to.clD.DND, currentStatus: e, description: s(to.clD.DND) }),
                c = nz({ status: to.clD.INVISIBLE, currentStatus: e, description: s(to.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    o,
                    (0, i.jsx)(t9.bX, {}, "menu-separator-statuses"),
                    l,
                    u,
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
                                          label: ef.intl.string(ef.t.gJRnwK),
                                          iconLeft: eR.a,
                                          leadingAccessory: { type: "icon", icon: eR.a },
                                          badge: { text: ef.intl.string(ef.t.ApAu9f) },
                                          subtext:
                                              null != r && "0" !== r
                                                  ? ef.intl.format(ef.t.BWD8fs, {
                                                        endTime: new Date(Number(r)).toLocaleString(
                                                            ef.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : ef.intl.string(ef.t["Br1q+x"]),
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
        })(C),
        L = (function (e) {
            let t = (0, c.bG)([nr.default], () => nr.default.getCurrentUser()),
                n = (0, c.bG)([t5.A], () => t5.A.hidePersonalInformation),
                r = (0, c.bG)([nn.A], () => (0, tC.M)(nn.A.theme)),
                { multiAccountUsers: s } = (0, nl.K)(),
                a = s.map((s) => {
                    let a = new ni.A(s),
                        o = a.id === t?.id,
                        l = s.tokenStatus === no.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        t9.Dr,
                        {
                            id: a.id,
                            focusedClassName: nd.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nd.ci,
                                    children: [
                                        (0, i.jsx)(h.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: f._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nd.DD,
                                            children: [
                                                (0, i.jsx)(ee.E, {
                                                    className: nd.gE,
                                                    variant: "text-sm/normal",
                                                    children: tJ.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(ee.E, {
                                                        className: nd.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        o &&
                                            (0, i.jsx)(ne.y, {
                                                size: "sm",
                                                color: t
                                                    ? t8.A.unsafe_rawColors.WHITE.css
                                                    : t8.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t8.A.unsafe_rawColors.BRAND_500.css
                                                        : t8.A.unsafe_rawColors.WHITE.css,
                                                className: nd.s0,
                                            }),
                                        l &&
                                            (0, i.jsx)(nt.E, {
                                                color: t8.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t8.A.unsafe_rawColors.BRAND_500.css
                                                        : t8.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nd.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), l)) (0, nu.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (ns.default.track(to.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: to.JJy.USER_PROFILE },
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
                                label: ef.intl.string(ef.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nu.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        D = (0, tk.A)({ analyticsLocations: p }),
        M = (0, tR.TW)(t),
        x = r.useRef(null),
        U = r.useRef(null),
        k = (0, tp.A)(E?.profileFrame?.skuId, "UserProfileAccountPopout"),
        G = (0, tE.A)(E?.profileFrame?.skuId);
    (0, tm.A)({ skuId: E?.profileFrame?.skuId, openedAt: l, context: g, analyticsLocations: p });
    let V = r.useRef((0, tN.A)((e) => e.shouldRenderTenureLevelUp)),
        F = r.useMemo(() => (0, tA.A)(), []),
        [B, H] = r.useState(() => tN.A.getState().shouldRenderTenureLevelUp);
    function j(e) {
        n?.(), (0, tF.openUserProfileModal)({ customStatusPrompt: F, sourceAnalyticsLocations: p, ...g, ...e });
    }
    r.useEffect(() => {
        let e = setTimeout(() => {
            H(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let W = E?.widgets != null && E.widgets.length > 0,
        Y = r.useCallback(() => {
            n();
        }, [n]),
        K = r.useCallback(() => {
            D(), Y();
        }, [D, Y]),
        { enabled: $ } = ew.A.useConfig({ location: "UserProfileAccountPopout" }),
        q = (0, z.ux)("UserProfileAccountPopout"),
        [Z, X] = (0, tI.kn)(q ? [d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE] : []),
        Q = Z === d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
        J = r.useId();
    return (0, i.jsx)(P.f5, {
        value: p,
        children: (0, i.jsx)(tG.of, {
            value: g,
            openedAt: l,
            fetchStartedAt: E?.fetchStartedAt,
            fetchEndedAt: E?.fetchEndedAt,
            isLoaded: E?.isLoaded,
            children: (0, i.jsxs)(eS.l, {
                ref: I,
                "aria-labelledby": J,
                className: a()(eU.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(m.A, {
                        children: (0, i.jsx)(eI.H, { id: J, children: ef.intl.string(ef.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eI.F, {
                        children: [
                            (0, i.jsx)(nj, { displayProfile: E, handleOpenUserProfileModal: j, height: T }),
                            (0, i.jsxs)(tz.A, {
                                className: eU.BK,
                                user: t,
                                displayProfile: E,
                                themeType: nZ.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nX.wx,
                                        children: [
                                            (0, i.jsx)(tj.A, { user: t, displayProfile: E, themeType: nZ.d.POPOUT }),
                                            (0, i.jsx)(tB.A, {
                                                user: t,
                                                displayProfile: E,
                                                themeType: nZ.d.POPOUT,
                                                onOpenProfile: _ ? void 0 : j,
                                            }),
                                            (0, i.jsx)(t2.A, {
                                                ref: x,
                                                user: t,
                                                themeType: nZ.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: F,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eN.Ip, {
                                        className: eU.rf,
                                        style: { pointerEvents: B ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tY.A, { userId: t.id }),
                                            (0, i.jsx)(tq.Ay, {
                                                className: eU.eF,
                                                user: t,
                                                displayName: t7.Ay.getName(void 0, null, t),
                                                onClickName: _ ? void 0 : j,
                                                displayNameTrailing: (0, i.jsx)(t1, { user: t, isVisible: S }),
                                                pronouns: E?.pronouns,
                                                trailing: (0, i.jsx)(tH.A, {
                                                    displayProfile: E,
                                                    themeType: nZ.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != o ? (e) => e === o : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tW.A, { isPremiumUser: M, onInteraction: n }),
                                            (0, i.jsx)(t3.A, {
                                                userId: t.id,
                                                userBio: E?.bio,
                                                hidePersonalInformation: O,
                                                onClose: n,
                                            }),
                                            W &&
                                                (0, i.jsx)(t$.A, {
                                                    user: t,
                                                    widgets: E?.widgets,
                                                    onOpenUserProfileModal: j,
                                                }),
                                            (0, i.jsx)(tK.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: j,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eU.T_,
                                                children: [
                                                    (0, i.jsx)(tz.A.Overlay, {
                                                        className: eU.g0,
                                                        children: (0, i.jsxs)(eV, {
                                                            children: [
                                                                (0, i.jsx)(eG, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ef.intl.string(ef.t.s5vZlQ),
                                                                    icon: eC.R,
                                                                    trailing:
                                                                        Q &&
                                                                        (0, i.jsx)(ey.Lp, {
                                                                            text: ef.intl.string(ef.t.y2b7CA),
                                                                            "aria-hidden": !0,
                                                                        }),
                                                                    onClick: () => {
                                                                        Q && X(eh.i.TAKE_ACTION), K();
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, i.jsx)(eG, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nv, {}),
                                                                    sublabel: null != y && y,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eO.nW, { status: C, size: 12 }),
                                                                    trailing:
                                                                        (R || C === to.clD.DND) &&
                                                                        (0, i.jsx)(eR.a, { size: "xxs" }),
                                                                    renderSubmenu: eA.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(ek, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eU.hQ,
                                                                                  "aria-label": ef.intl.string(
                                                                                      ef.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: b,
                                                                              });
                                                                          },
                                                                    onClick: eA.Fr
                                                                        ? () => {
                                                                              n(),
                                                                                  (0, A.openModalLazy)(
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
                                                                                                              ef.intl.string(
                                                                                                                  ef.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(ev.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  ef.intl.string(
                                                                                                                      ef
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
                                                                (0, i.jsx)(th, { onClose: n, popoutContainerRef: I }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tz.A.Overlay, {
                                                        className: eU.g0,
                                                        children: (0, i.jsxs)(eV, {
                                                            children: [
                                                                (0, i.jsx)(eG, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eb.r,
                                                                    label: ef.intl.string(ef.t.oMNyYN),
                                                                    onClick: () => {
                                                                        n(), (0, nu.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(ek, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ef.intl.string(ef.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: L,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tQ.p5 &&
                                                                    v &&
                                                                    (0, i.jsx)(eG, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eL.L,
                                                                        label: ef.intl.string(ef.t["/AXYnE"]),
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
                                    E?.profileEffect != null &&
                                        !V.current &&
                                        (0, i.jsx)(tf.A, { skuId: E.profileEffect.skuId, isHovering: N }),
                                    null != k && (0, i.jsx)(tg.A, { frame: k, fadeIn: G }),
                                ],
                            }),
                            $ && (0, i.jsx)(nC, { targetElementRef: U, onClose: n }),
                            (0, i.jsx)(tx, {}),
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
    n5 = n(173660),
    n7 = n(451409),
    n8 = n(763827),
    n9 = n(499156),
    ie = n(731854);
let it = 2.5 * eQ.A.Millis.SECOND,
    ii = +eQ.A.Millis.HOUR;
var ir = n(459838),
    is = n(485296);
let ia = 3 * eQ.A.Millis.SECOND,
    io = +eQ.A.Millis.DAY;
var il = n(616356),
    iu = n(734057),
    ic = n(629016),
    id = n(186111),
    i_ = n(967198),
    ih = n(486020),
    iE = n(625494),
    ip = n(536194),
    im = n(19575),
    ig = n(994314),
    iA = n(485599),
    iI = n(338854);
function iT(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: r, position: s, shouldShow: a = !0, children: o } = e,
        l = (0, eF.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o,
            a && l
                ? (0, i.jsx)(iI.H, {
                      targetElementRef: t,
                      title: ef.intl.string(tu.default.Qn21R6),
                      body: ef.intl.string(tu.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: s,
                      caretConfig: { align: "center" },
                      action: {
                          text: ef.intl.string(ef.t.RzWDqY),
                          onClick: function () {
                              n(eh.i.TAKE_ACTION), r();
                          },
                      },
                      onRequestClose: function () {
                          n(eh.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iS = n(626584),
    iN = n(757036),
    iC = n(531685),
    iy = n(259065),
    iO = n(864386);
let iR = new iS.A("DisplayNameStylesFlywheelCoachmark");
function iv(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, P.Ay)(),
        o = (0, r.useRef)(null),
        l = (0, c.bG)([iC.A], () => iC.A.isFocused()),
        u = (0, iN.L)(tb.PremiumTypes.TIER_2),
        d = (0, r.useCallback)(() => {
            t(eh.i.TAKE_ACTION),
                (0, es.openUserSettings)(er.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iy.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        _ = (0, r.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]);
    (0, r.useEffect)(() => {
        l && o.current?.paused ? o.current?.play().catch(iR.error) : l || o.current?.pause();
    }, [l]);
    let h = u ? [ef.intl.string(iO.default.TyUdka)] : [ef.intl.string(iO.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
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
                    ref: o,
                    src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                badge: { type: "beta", variant: "expressive" },
                title: ef.intl.string(iO.default.cYwrp8),
                body: h,
                actions: [{ text: ef.intl.string(ef.t["4P5I8V"]), variant: "primary", onClick: d }],
            }),
        ],
    });
}
var ib = n(45780),
    iL = n(696451),
    iD = n(71393),
    iw = n(685073),
    iP = n(228366);
let iM = { lastSeenInfos: {} },
    ix = iM;
class iU extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        ix = e ?? iM;
    }
    getState() {
        return ix;
    }
    getGuildLastSeenInfo(e) {
        return ix.lastSeenInfos[e] ?? null;
    }
}
let ik = new iU(iP.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        ix.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        ix = iM;
    },
});
var iG = n(116833),
    iV = n(514661);
let iF = new iS.A("GuildTagAvailableCoachmark");
function iB(e) {
    let t = (0, c.bG)([iD.A], () => iD.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iP.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iV.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iw.q0)(t))
        return iF.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ef.intl.string(ef.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ef.intl.string(ef.t.s5vZlQ), onClick: a, variant: "secondary" },
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
                    component: iG.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ef.intl.formatToPlainString(ef.t["m/Tc3n"], { guildName: t.name }),
                body: ef.intl.string(ef.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
function iH(e) {
    let t = (0, c.bG)([iD.A], () => iD.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iV.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iw.q0)(t))
        return iF.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ef.intl.string(ef.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ef.intl.string(ef.t.s5vZlQ), onClick: a, variant: "secondary" },
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
                    component: iG.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ef.intl.formatToPlainString(ef.t.VFqnyU, { guildName: t.name }),
                body: ef.intl.string(ef.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
var ij = n(843010),
    iW = n(764231),
    iY = n(425713);
function iK(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tL(),
        s = (0, c.bG)([eu.Ay], () => eu.Ay.useReducedMotion),
        a = (0, tN.A)((e) => e.isOpen),
        o = (0, ij.G)();
    return s || null == r || a || o
        ? null
        : (0, i.jsx)(nb.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(i$, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i$(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        o = tb.sp.indexOf(t),
        l = (0, iY.I)(tb.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, r.useCallback)(() => {
            n(eh.i.TAKE_ACTION),
                tN.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iE._.dispatch(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(eh.i.USER_DISMISS);
        }, [n]),
        d = tb.VD[t],
        _ = ef.intl.formatToPlainString(ef.t.ewkaVR, {
            timeMilestone: (0, iW.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: ef.intl.string(ef.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(n_.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != l ? { type: "image", src: l, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ef.intl.string(ef.t.VoDxsV),
        body: _,
        actions: h,
    });
}
function iz(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nJ.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, ib.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? to.dJq),
                r = (0, c.bG)([iD.A, nr.default, iL.Ay], () => {
                    if (null === e) return !1;
                    let t = iD.A.getGuild(e);
                    if (void 0 === t || !(0, iw.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nr.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iL.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, tI.ww)(r && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? to.eGj);
        })(e.guildId, { shouldShow: r }),
        [o, l] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                s = (0, c.bG)([ik], () => (null === r ? null : ik.getGuildLastSeenInfo(r))),
                a = (0, c.bG)([iD.A], () => iD.A.getGuild(r)?.profile?.tag),
                o = null != a && i?.identityGuildId === r && i?.tag === null,
                l = null != r && s?.tag === a,
                u = null !== r && o && !l;
            return (0, tI.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? s === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iH, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : o === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iB, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: l,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iK, { groupName: eh.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nb.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: eh.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iv, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iT, {
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
            awaitingRemote: s,
            onClick: o,
            iconForeground: l,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: d,
        } = e,
        _ = t || n,
        {
            Component: h,
            play: f,
            events: { onMouseEnter: p, onMouseLeave: m },
        } = (0, iQ.I)(_ ? "undeafen" : "deafen"),
        g = n ? iq.T : h,
        { name: A } = (0, eg.x5)(ie.oh.AUDIO_OUTPUT),
        I = (0, iJ.A)(t, n, s),
        { analyticsLocations: T } = (0, P.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        S = r.useRef(null);
    return (
        r.useEffect(() => () => f(), [_, f]),
        (0, i.jsx)(P.f5, {
            value: T,
            children: (0, i.jsx)(E.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(P.f5, {
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
                animation: E.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: r } = e,
                        { isShown: d } = t,
                        h = d ? iZ.t : iX.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: a()(i2.Lh, { [i2.v8]: _, [i2.q6]: d }),
                        children: [
                            (0, i.jsx)(i1.A, {
                                "aria-checked": _,
                                "aria-label": ef.intl.string(ef.t.wjcRFX),
                                className: i2.eT,
                                disabled: s,
                                icon: (0, i.jsx)(g, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: l,
                                }),
                                iconForeground: _ ? i3.o : void 0,
                                innerClassName: a()({ [i3.T]: n }),
                                onClick: o,
                                onContextMenu: r,
                                onMouseEnter: p,
                                onMouseLeave: m,
                                plated: null != u,
                                redGlow: _,
                                role: "switch",
                                tooltipText: I,
                            }),
                            (0, i.jsx)(i1.A, {
                                className: a()(i2.UT, { [i2.q6]: d }),
                                disabled: s,
                                icon: (0, i.jsx)(h, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: r,
                                onContextMenu: r,
                                plated: null != u,
                                redGlow: _,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ef.intl.formatToPlainString(ef.t["f+DDY/"], { outputDeviceName: A })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? ef.intl.format(ef.t["f+DDY/"], { outputDeviceName: A })
                                    : ef.intl.string(ef.t.aA4Vce),
                                "aria-label": c
                                    ? ef.intl.formatToPlainString(ef.t["f+DDY/"], { outputDeviceName: A })
                                    : ef.intl.string(ef.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i4 = n(666654),
    i5 = n(523875),
    i7 = n(993719);
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
    rs = n(973324);
function ra(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
            suppress: o,
            awaitingRemote: l,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: _,
            onClick: h,
            nameplate: f,
            shouldShowSpeakingWhileMutedTooltip: p,
            shouldShowSpeakingWhilePTTTooltip: m,
            shouldShowInputDeviceChangedTooltip: g,
            shouldShowPTTJoinTooltip: A,
            dismissTooltips: I,
            speaking: T,
        } = e,
        { showPTTIconIndicator: S } = n9.A.useConfig({ location: "MicrophoneButton" }),
        N = (0, c.bG)([n7.Ay], () => n7.Ay.getMode() === ie.TB.PUSH_TO_TALK),
        C = (0, c.bG)([n7.Ay], () => n7.Ay.getSettings().modeOptions.shortcut),
        y = (0, c.bG)([re], () => re.getIsTutorialActive(rt.v.MUTE_TUTORIAL)),
        O = (0, c.bG)([n8.A], () => null != n8.A.getChannelId()),
        { name: R } = (0, eg.x5)(ie.oh.AUDIO_INPUT),
        { enabledInputProfiles: v } = (0, n6.d)({ location: "MicrophoneButton" }),
        b = r.useRef(null),
        L = n || o || s,
        D = (0, i5.L)(L ? "unmute" : "mute"),
        { analyticsLocations: M } = (0, P.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: x, events: U, play: k } = D,
        G = s || o ? i4.O : x;
    r.useEffect(() => () => k(), [L, k]);
    let V = (0, rn.A)(n, s, o, l);
    t = p
        ? { tooltipType: "green_void_do_not_use", tooltipText: ef.intl.string(ef.t["29gnR4"]), tooltipForceOpen: !0 }
        : A || m
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ef.intl.format(ef.t.c1qUOQ, { keybind: e0.dI(C).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: V };
    let B = S && N && O,
        H = L ? t8.A.colors.ICON_VOICE_MUTED : "currentColor",
        j = r.useCallback(() => {
            h(), y && i7.N(rt.v.MUTE_TUTORIAL);
        }, [h, y]);
    return (0, i.jsxs)(P.f5, {
        value: M,
        children: [
            (0, i.jsx)(E.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        I(),
                        (0, i.jsx)(P.f5, {
                            value: M,
                            children: (0, i.jsx)(i0.A, {
                                onInteraction: (0, F.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: v.length > 0,
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
                animation: E.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: r } = e,
                        { isShown: s } = n,
                        o = s ? iZ.t : iX.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(i2.Lh, { [i2.v8]: L, [i2.q6]: s }),
                        children: [
                            (0, i.jsx)(i1.A, {
                                "aria-checked": L,
                                "aria-label": ef.intl.string(ef.t.w4m945),
                                className: i2.eT,
                                disabled: l,
                                icon: (0, i.jsx)(G, { size: "custom", width: 20, height: 20, color: H, className: u }),
                                onClick: j,
                                onContextMenu: r,
                                onMouseEnter: () => {
                                    d(), U.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    _(), U.onMouseLeave();
                                },
                                plated: null != f,
                                redGlow: L,
                                role: "switch",
                                ...t,
                                children: B ? (0, i.jsx)("div", { className: a()(rr.U, { [rr.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(i1.A, {
                                "aria-label": g
                                    ? ef.intl.formatToPlainString(ef.t["18wnuD"], { inputDeviceName: R })
                                    : ef.intl.string(ef.t.fRzCbB),
                                className: a()(i2.UT, { [i2.q6]: s }),
                                disabled: l,
                                icon: (0, i.jsx)(o, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: H,
                                }),
                                onClick: r,
                                onContextMenu: r,
                                onMouseEnter: d,
                                onMouseLeave: _,
                                plated: null != f,
                                redGlow: L,
                                tooltipType: g ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: g,
                                tooltipPositionKey: g
                                    ? ef.intl.formatToPlainString(ef.t["18wnuD"], { inputDeviceName: R })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: g
                                    ? ef.intl.format(ef.t["18wnuD"], { inputDeviceName: R })
                                    : ef.intl.string(ef.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(n_.A, {
                targetElementRef: b,
                shouldShow: y,
                graphic: { type: "image", src: rs.A },
                onRequestClose: () => {
                    i7.N(rt.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ef.intl.string(ri.default.VG4zAf),
                body: ef.intl.string(ri.default["8VIRzR"]),
            }),
        ],
    });
}
var ro = n(935399),
    rl = n(505312),
    ru = n(848847),
    rc = n(88001),
    rd = n(466919),
    r_ = n(438705);
function rh(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = r.useCallback(() => {
            s(), (0, es.openUserSettings)(er.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(n_.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: r_ },
        shouldShow: n,
        title: ef.intl.format(rd.default.bx8sR9, { premiumGroupProductName: (0, rc.DP)() }),
        body: ef.intl.format(rd.default.Pw4OFZ, { premiumGroupProductName: (0, rc.DP)() }),
        onRequestClose: s,
        actions: [{ text: ef.intl.string(rd.default.DD26QR), onClick: a }],
    });
}
var rf = n(873298),
    rE = n(840387);
function rp(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, rE.Z)(),
        a = t6.KP.useSetting(),
        o = s && a !== rf.KP.FRIENDS_AND_ALL_GUILDS,
        l = (0, r.useCallback)(() => {
            t(eh.i.TAKE_ACTION), (0, es.openUserSettings)(er.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, r.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]),
        c = o
            ? a === rf.KP.FRIENDS_ONLY
                ? ef.intl.string(ef.t["/hogEy"])
                : ef.intl.string(ef.t["6hEfm1"])
            : ef.intl.string(ef.t.bnNxW1);
    return (0, i.jsx)(n_.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: u,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/0710b4aac8339f9213d3c43a8976071c26abe2b3236ccd8817180ce465f33673.svg",
        },
        title: ef.intl.string(ef.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ef.intl.string(ef.t.eOoTMX), variant: "primary", onClick: l }],
    });
}
function rm(e) {
    let t,
        n,
        {
            webBuildOverride: s,
            onClick: a,
            onContextMenu: o,
            dismissibleContents: l,
            iconForeground: u,
            nameplate: c,
        } = e,
        _ = r.useRef(null),
        [h, f] = r.useState(!1);
    (0, ro.Ay)(() => {
        function e() {
            return f(!0);
        }
        return (
            iE._.subscribe(to.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iE._.unsubscribe(to.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let E = r.useCallback(() => {
        f(!1), a();
    }, [a]);
    t = null != s ? ef.intl.formatToPlainString(ef.t.Gzh6ZP, { webBuildOverride: s.id }) : ef.intl.string(ef.t.cduTBL);
    let p = e$.Z,
        m = (0, rl.w)();
    return (
        (p = null != s ? ru.H : m.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i1.A, {
                    ref: _,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: E,
                    onContextMenu: o,
                    "aria-label": ef.intl.string(ef.t.cduTBL),
                    icon: (0, i.jsx)(p, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...m.events,
                    plated: null != c,
                }),
                (0, i.jsx)(rh, { targetElementRef: _, shouldShow: h, onDismiss: () => f(!1) }),
                (0, i.jsx)(nb.Ay, {
                    contentTypes: l,
                    groupName: eh.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rp, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rg = n(489902);
let rA = im.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
    rI = 2.5 * eQ.A.Millis.SECOND,
    rT = 2 * eQ.A.Millis.MINUTE,
    rS = 2 * eQ.A.Millis.MINUTE,
    rN = 5 * eQ.A.Millis.SECOND;
function rC(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: l,
            status: u,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: _,
            nameplate: h,
            avatarDecoration: m,
            "data-jump-section": g,
        } = e,
        A = r.useRef(null),
        I = t ?? A,
        S = (0, ih.F_)({ avatarDecoration: m, size: (0, H.Te)(f._3.SIZE_32) }),
        N = (0, q.A)(),
        {
            updateOpenPopoutRef: y,
            highlightBadge: O,
            setHighlightBadge: R,
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = r.useState(),
                [s, a] = r.useState(!1);
            return (
                (0, C.A)(() => a(!0), 750),
                r.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    }
                    return (
                        iE._.subscribe(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iE._.unsubscribe(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        v = (0, W.K)(h);
    return null == l
        ? null
        : (0, i.jsx)(T.A, {
              object: to.ZSU.AVATAR,
              children: (0, i.jsx)(n3.A, {
                  user: l,
                  targetElementRef: I,
                  clickTrap: !0,
                  preload: () =>
                      (0, n2.A)(l.id, l.getAvatarURL(void 0, n3.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(nQ, {
                          currentUser: l,
                          highlightBadge: O,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rg.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: E.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      d(), R(void 0);
                  },
                  children: (e) => {
                      y(e);
                      let { onMouseEnter: t, onMouseDown: r, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: I,
                          style: v,
                          onMouseEnter: t,
                          onMouseDown: r,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(rg.Q9, { [rg.ZQ]: null != h }),
                          children: [
                              (0, i.jsx)(p.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ef.intl.string(ef.t["5fWB8U"]),
                                  focusProps: { ringTarget: I },
                                  className: rg.$n,
                                  "data-jump-section": g,
                              }),
                              (0, i.jsx)(rA, {
                                  size: f._3.SIZE_32,
                                  src: l.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: o ? to.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: rg.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rg.oM, children: _(N) }),
                          ],
                      });
                  },
              }),
          });
}
class ry extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(rS, null, !1);
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
            { speakingWhileMuted: r, occluded: s, speakingWhilePTTInactive: a } = this.props;
        s !== i && this.handleOccludedChanged(),
            r !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, G.A)(e, t, to.JJy.ACCOUNT_PANEL), (0, V.X)(w.A.ACCOUNT, V.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, to.JJy.ACCOUNT_PANEL), (0, V.X)(w.A.ACCOUNT, V.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n8.A.isConnected() ? (0, es.openUserSettings)(er.X.VOICE_AND_VIDEO_PANEL) : (0, es.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, I.L3)(e, async () => {
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
                    (0, i.jsx)(e, { ...t, onClose: I.Z_, onInteraction: (0, F.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, F.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n6.d)({ location: "Account" });
                    return (0, i.jsx)(P.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: I.Z_,
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
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(P.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: I.Z_,
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
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: o } = this.state,
            l =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rT;
        i
            ? o ||
              !e ||
              t ||
              n ||
              r ||
              !l ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(rI, () =>
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
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: o } = this.state,
            l =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? o ||
              e ||
              t ||
              n ||
              r ||
              !l ||
              null != a ||
              s ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(rI, () =>
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
                status: s,
                userTag: a,
                voiceChannel: o,
            } = this.props;
        if (null == r) return null;
        if ((0, y.A)({ activities: t, status: s, applicationStream: n, voiceChannel: o }))
            return (0, i.jsxs)(D.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(m.A, { children: tJ.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(O.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: o,
                        textClassName: rg.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let l = t?.find((e) => {
            let { type: t } = e;
            return t === to.$pd.CUSTOM_STATUS;
        });
        return null != l
            ? (0, i.jsxs)(D.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(m.A, { children: tJ.Ay.humanizeStatus(s) }),
                      (0, i.jsx)($.A, { activity: l, emojiClassName: rg.Zg, className: rg.WO }),
                  ],
              })
            : null != s && s !== to.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(D.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(L, { text: tJ.Ay.humanizeStatus(s) }),
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
                          className: rg.eW,
                          children: (0, i.jsx)(iA.A, {
                              className: a()({ [rg.e8]: null != e }),
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
                          className: rg.XP,
                          children: (0, i.jsx)(ig.A, { children: this.renderStatus() }),
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: s } = this.props,
            o = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(rg.kL, { [rg.UG]: null != n, [rg.bc]: !r, [rg.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(K.A, { nameplate: t, hovered: o, placement: Y.u.ACCOUNT }),
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
                      (0, i.jsx)(em, {}),
                  ],
              });
    }
}
function rO(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: s,
            serverDeaf: a,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: l,
            shouldShowSpeakingWhilePTTTooltip: u,
            webBuildOverride: c,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: _,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: f,
            handleInputAudioContextMenu: E,
            handleOutputAudioContextMenu: p,
            handleOpenAccountSettings: m,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: A,
            nameplate: I,
            accountContainerRef: T,
            deviceChangedTooltipType: S,
            shouldShowPTTJoinTooltip: N = !1,
            dismissTooltips: C,
            speaking: y,
        } = e,
        O = (0, W.K)(I);
    return (0, i.jsxs)("div", {
        className: rg.Uo,
        style: O,
        children: [
            (0, i.jsx)(ra, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: _,
                onClick: f,
                onContextMenu: E,
                iconForeground: null != I ? rg.t4 : void 0,
                nameplate: I,
                shouldShowSpeakingWhileMutedTooltip: l,
                shouldShowInputDeviceChangedTooltip: !l && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: N,
                dismissTooltips: C,
                speaking: y,
            }),
            (0, i.jsx)(i6, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: h,
                onContextMenu: p,
                awaitingRemote: r,
                iconForeground: null != I ? rg.t4 : void 0,
                nameplate: I,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: C,
            }),
            (0, i.jsx)(rm, {
                webBuildOverride: c,
                onClick: m,
                onContextMenu: g,
                dismissibleContents: A.settings,
                iconForeground: null != I ? rg.t4 : void 0,
                nameplate: I,
            }),
        ],
    });
}
function rR(e) {
    let t = (0, c.bG)([n8.A], () => null != n8.A.getChannelId()),
        n = (0, eg.Py)(e),
        i = r.useRef(new _.Ep()),
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(rN, () => {
                a(!1);
            }));
    }, [t, n]);
    let o = r.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, N.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: o }
    );
}
function rv() {
    let e = (0, c.bG)([nr.default], () => nr.default.getCurrentUser()),
        t = (0, c.bG)([nI.default], () => nI.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([ny.A], () => {
            let e = ny.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === to.$pd.STREAMING;
                    }),
                status: ny.A.getStatus(),
            };
        }),
        o = (0, c.bG)([il.A], () => il.A.getAnyStreamForUser(t)),
        u = (0, S.A)({ userId: t }),
        h = (0, c.bG)([is.A], () => is.A.getVoiceVolume(t)),
        f = tJ.Ay.useUserTag(e, { decoration: "never" }),
        E = (0, c.bG)([n8.A, iu.A], () => {
            let e = n8.A.getChannelId();
            return null != e ? iu.A.getChannel(e) : null;
        }),
        { mute: p, selfMute: m, suppress: g } = (0, n5.A)(E),
        { selfDeaf: I, deaf: T } = (0, n4.A)(E),
        C = (0, c.bG)([M.A], () => ((0, x.kK)() ? M.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        y = (0, c.bG)([n7.Ay], () => n7.Ay.getSpeakingWhileMuted()),
        O = (0, c.bG)([U.A], () => U.A.isFullscreenInContext()),
        R = (0, c.bG)([id.A], () => id.A.hasLayers()),
        v = (0, A.useModalsStore)(A.hasAnyModalOpenSelector) || R || ip.P.isDisallowPopupsSet() || O,
        b = (0, c.bG)([Q.default], () => null != Q.default.getAwaitingRemoteSessionInfo()),
        L = (0, c.bG)([i_.A], () => i_.A.getGuildId()),
        D = e?.avatarDecoration,
        k = (0, B.A)(D),
        G = tJ.Ay.useName(e) ?? "",
        { analyticsLocations: V } = (0, P.Ay)(w.A.ACCOUNT),
        F = (0, j.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, nJ.c9)(),
        W = (0, c.bG)([n0.A, nr.default, ic.A], () => {
            let e,
                t = n0.A.getSyncingWith(),
                n = n0.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = l()(Array.from(ic.A.getParty(e) ?? []))
                        .map((e) => nr.default.getUser(e))
                        .filter(nS.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Y = { avatar: [], settings: [] },
        K = (0, n1.lX)("AccountCoachmark"),
        $ = (0, z.ux)("AccountCoachmark");
    !v &&
        ($ && Y.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        K && Y.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: q, dismissTooltip: Z } = rR(ie.oh.AUDIO_INPUT),
        { shouldShowTooltip: X, dismissTooltip: J } = rR(ie.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ee, dismissTooltip: et } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([n7.Ay], () => n7.Ay.getMode() === ie.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n8.A],
                    () => null != n8.A.getChannelId() && (n8.A.getDuration() ?? Number.MAX_VALUE) < it,
                ),
                [s, a] = r.useState(!1),
                { showPTTJoinTooltip: o } = n9.A.useConfig({ location: "usePTTJoinTooltip" }),
                l = r.useRef(new _.Ep()),
                u = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((n9.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !o)) return;
                    a(!0),
                        t(!0),
                        u.current.start(ii, () => {
                            t(!1);
                        }),
                        l.current.start(it, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, o, e]);
            let d = r.useCallback(() => {
                a(!1), l.current.stop();
            }, []);
            return (
                (0, N.l0)(() => {
                    l.current.stop(), u.current.stop();
                }),
                { shouldShowTooltip: s, dismissTooltip: d }
            );
        })(),
        en = (function () {
            let { showPTTSpeakingIndicator: e } = n9.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([n7.Ay], () => n7.Ay.getMode() === ie.TB.PUSH_TO_TALK),
                s = (0, c.bG)([n8.A], () => n8.A.getRTCConnectionId()),
                a = (0, c.bG)([n7.Ay], () => {
                    let e = n7.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < io;
                }),
                o = r.useRef(new _.Ep());
            return (
                r.useEffect(() => {
                    n(!1);
                }, [s]),
                r.useEffect(() => {
                    let t = 0,
                        r = o.current;
                    function l(e, i) {
                        let s = (i & ie.ME.VOICE) === ie.ME.VOICE,
                            a = is.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(ia, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && n7.Ay.getMediaEngine().on(ir.bg.VoiceActivity, l),
                        () => {
                            n7.Ay.getMediaEngine().removeListener(ir.bg.VoiceActivity, l), r.stop();
                        }
                    );
                }, [e, i, a, s]),
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
        value: V,
        children: (0, i.jsx)(ry, {
            currentUser: e,
            username: G,
            activities: n,
            applicationStream: o,
            voiceChannel: E,
            dismissibleContents: Y,
            userTag: f,
            occluded: v,
            selfDeaf: I,
            selfMute: m,
            serverDeaf: T,
            serverMute: p,
            speaking: u,
            voiceDb: h,
            speakingWhileMuted: y,
            speakingWhilePTTInactive: en,
            status: a,
            streaming: s,
            suppress: g,
            webBuildOverride: C,
            awaitingRemote: b,
            nameplate: F,
            selectedGuildId: L,
            avatarDecoration: k,
            isQuestBarEmpty: H,
            isListenAlongVisible: W,
            deviceChangedTooltipType: ei,
            onDismissDeviceChangedTooltip: () => er(ei),
            shouldShowPTTJoinTooltip: ee,
            dismissPTTJoinTooltip: et,
        }),
    });
}
