n.d(t, { g: () => lA, A: () => lE }), n(321073);
var s = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(735438),
    o = n.n(r),
    c = n(158390),
    u = n(17928),
    d = n(554146),
    h = n(451988),
    m = n(97808),
    p = n(778712),
    f = n(922016),
    g = n(939249),
    A = n(140735),
    x = n(312138);
if (21552 == n.j) var C = n(192308);
var E = n(442433),
    v = n(820284),
    T = n(717558),
    j = n(964486),
    _ = n(220839),
    N = n(397244),
    S = n(394871),
    R = n(873174),
    I = n(866323),
    y = n(449450);
function b(e) {
    let { text: t } = e,
        n = (0, I.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, s.jsx)("div", {
        className: y.k,
        children: n((e, t) => (0, s.jsx)(R.animated.div, { className: y.H, style: e, children: t })),
    });
}
var M = n(29160),
    w = n(793574),
    O = n(688810),
    U = n(521502),
    D = n(380610),
    P = n(313961),
    k = n(18235),
    L = n(183184),
    F = n(384059),
    G = n(480890),
    V = n(734066),
    B = n(710315),
    H = n(601255),
    Q = n(562819),
    W = n(449582),
    z = n(351952),
    q = n(88686),
    Z = n(174755),
    K = n(302223),
    $ = n(609425),
    Y = n(922301),
    X = n(368919),
    J = n(643501),
    ee = n(534514),
    et = n(834730),
    en = n(789645),
    es = n(826673),
    el = n(750506),
    ei = n(780964),
    ea = n(766075),
    er = n(417146),
    eo = n(552122),
    ec = n(717421),
    eu = n(775602),
    ed = n(993843);
let eh = { mass: 10, tension: 550, friction: 140 };
function em(e) {
    let { className: t, pageMultiplier: n } = e,
        i = (0, u.bG)([eu.A], () => eu.A.useReducedMotion),
        [r, c] = l.useState({ x: 0, y: 0 }),
        d = l.useMemo(
            () =>
                o().throttle((e) => {
                    i || c({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, i],
        );
    l.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [h, m] = (0, ec.z)(() => ({ x: 0, y: 0, config: eh }));
    return (
        l.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, s.jsx)(R.animated.div, {
            style: { transform: (0, R.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ed.T, t),
        })
    );
}
var ep = n(49999),
    ef = n(375708),
    eg = n(275883);
function eA(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: l } = e,
        i = eo.A.useIsEligible(),
        a = (0, es.JZ)(t),
        r = null != n,
        o = null != l ? { color: l } : void 0,
        { analyticsLocations: c } = (0, O.Ay)(w.A.HOLIDAY_COACHMARK),
        u = (e) => {
            (0, es.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, ea.openUserSettings)(ei.X.NOTIFICATIONS_PANEL, { analyticsLocations: c }), u(ep.i.TAKE_ACTION);
        };
    return i && !a
        ? (0, s.jsx)(el.Ay, {
              children: (0, s.jsxs)("div", {
                  className: eg.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, s.jsxs)("div", {
                              className: eg.o5,
                              children: [
                                  (0, s.jsx)(em, { className: eg.iL, pageMultiplier: 5 }),
                                  (0, s.jsx)("div", { className: eg.Np }),
                              ],
                          }),
                      (0, s.jsx)("div", { className: eg.c8 }),
                      (0, s.jsxs)("div", {
                          className: eg.Qs,
                          children: [
                              (0, s.jsxs)("div", {
                                  children: [
                                      (0, s.jsx)(ee.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "always-white",
                                          style: o,
                                          children: ef.intl.string(ef.t["6CxPoB"]),
                                      }),
                                      (0, s.jsx)(et.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: ef.intl.format(ef.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, s.jsx)(
                                                      g.D,
                                                      {
                                                          tag: "span",
                                                          className: eg.nf,
                                                          style: o,
                                                          onClick: d,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, s.jsx)(g.D, {
                                  className: eg.l2,
                                  onClick: () => u(ep.i.USER_DISMISS),
                                  children: (0, s.jsx)(en.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function ex() {
    return null == er.A.coachmarkDismissibleContent
        ? null
        : (0, s.jsx)(eA, {
              dismissibleContent: er.A.coachmarkDismissibleContent,
              backgroundColor: er.A.coachmarkBackgroundColor,
              specialTextColor: er.A.coachmarkSpecialTextColor,
          });
}
var eC = n(74848),
    eE = n(832248),
    ev = n(607399),
    eT = n(707554),
    ej = n(224640),
    e_ = n(305866),
    eN = n(364522),
    eS = n(22231),
    eR = n(133171),
    eI = n(780338);
if (21552 != n.j) var C = n(192308);
var ey = n(980707),
    eb = n(26137),
    eM = n(473935),
    ew = n(765671),
    eO = n(457965),
    eU = n(176781),
    eD = n(777666),
    eP = n(320448),
    ek = n(993401),
    eL = n(447349);
function eF(e) {
    return (0, s.jsx)("div", {
        className: eL.wE,
        children: (0, s.jsx)(ey.W, {
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
            icon: i,
            label: a,
            sublabel: r,
            trailing: o,
            renderSubmenu: c,
            ref: u,
            submenuTargetElementRef: d,
            submenuAlign: h,
        } = e,
        m = null != n,
        p = (0, ek.rE)({ action: t, onClick: n }),
        [A, x] = l.useState(!1),
        E = l.useRef(null),
        v = u ?? E,
        T = null != c,
        j = T && m,
        _ = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        N = l.useCallback(() => {
            x(!0);
        }, []),
        S = l.useCallback(() => {
            (0, C.hasAnyModalOpen)() || x(!1);
        }, []),
        R = () =>
            (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)("div", {
                        className: eL.iA,
                        children: (0, s.jsx)(i, { size: "xs", color: "currentColor" }),
                    }),
                    (0, s.jsxs)("div", {
                        className: eL.$H,
                        children: [
                            (0, s.jsxs)("div", {
                                children: [
                                    (0, s.jsx)(et.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eL.W1,
                                        children: a,
                                    }),
                                    (0, s.jsx)(et.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                                ],
                            }),
                            o,
                        ],
                    }),
                ],
            }),
        I = (e) => {
            let t;
            return (
                (t = j
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(g.D, {
                                  className: eL.ef,
                                  onClick: p,
                                  focusProps: { offset: { ..._.offset, right: 0 } },
                                  children: R(),
                              }),
                              (0, s.jsx)(g.D, {
                                  className: eL.ap,
                                  "aria-label": ef.intl.string(ef.t.PdRCRg),
                                  ...e,
                                  onClick: N,
                                  focusProps: _,
                                  children: (0, s.jsx)(eP._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : T
                      ? (0, s.jsxs)(g.D, {
                            className: eL.ef,
                            ...e,
                            onClick: N,
                            focusProps: _,
                            children: [
                                R(),
                                (0, s.jsx)("div", {
                                    className: eL.ap,
                                    children: (0, s.jsx)(eP._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, s.jsx)(g.D, { className: eL.ef, onClick: p, focusProps: _, children: R() })),
                (0, s.jsx)("div", { ref: v, className: eL.jG, children: t })
            );
        };
    return T
        ? (0, s.jsx)("li", {
              className: eL.j$,
              onMouseEnter: N,
              onMouseLeave: S,
              children: (0, s.jsx)(f.Y, {
                  targetElementRef: d ?? v,
                  align: h,
                  spacing: 0,
                  renderPopout: c,
                  shouldShow: A,
                  onRequestClose: S,
                  children: I,
              }),
          })
        : (0, s.jsx)("li", { className: eL.j$, children: I() });
}
function eV(e) {
    let { children: t, "aria-label": n } = e;
    return (0, s.jsx)("ul", { "aria-label": n, children: t });
}
var eB = n(274372),
    eH = n(271597),
    eQ = n(990078),
    eW = n(315710),
    ez = n(475358),
    eq = n(408278),
    eZ = n(625903),
    eK = n(404778),
    e$ = n(689175),
    eY = n(821609),
    eX = n(532624),
    eJ = n(927813),
    e0 = n(879631),
    e1 = n(350535),
    e2 = n(372684),
    e3 = n(572164),
    e6 = n(953932),
    e5 = n(280483),
    e4 = n(890856),
    e8 = n(713517),
    e7 = n(609174),
    e9 = n(353605),
    te = n(434320),
    tt = n(82716),
    tn = n(585579),
    ts = n(226870),
    tl = n(285072),
    ti = n(316305);
let ta = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: i, className: r } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: c } = (0, e8.A)(o),
        u = l.useCallback(() => {
            i?.(), (0, eH.p)({ initialEditingClipId: t.id });
        }, [t.id, i]);
    return (0, s.jsx)(e7.Cl, {
        clip: t,
        children: (0, s.jsx)(e4.s, {
            ref: o,
            "aria-label": ef.intl.string(ef.t.bt75uw),
            onClick: u,
            className: a()(ti.Z1, r),
            children: (0, s.jsxs)(ts.d, {
                isStatic: !0,
                children: [
                    n && (0, s.jsx)(eD.Lp, { className: ti.Ad, text: ef.intl.string(ef.t.y2b7CA) }),
                    (0, s.jsxs)(tl.h, {
                        isVisible: c,
                        className: ti.Lw,
                        children: [
                            (0, s.jsxs)("div", {
                                className: ti.mY,
                                children: [(0, s.jsx)(tt.z, {}), (0, s.jsx)(e9.k, {})],
                            }),
                            (0, s.jsxs)("div", {
                                className: ti.E_,
                                children: [(0, s.jsx)(te.f, { onBeforeEdit: i }), (0, s.jsx)(tn.E, {})],
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
    tc = n(16590),
    tu = n(550350);
function td(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: i, setPopoutRef: a } = e;
    (0, e5.A)();
    let r = (0, u.yK)([eB.A], () => eB.A.getClips()),
        o = (0, u.bG)([eB.A], () => eB.A.getPendingClips()),
        c = (0, u.bG)([eB.A], () => eB.A.getSettings()),
        d = (0, u.bG)([eB.A], () => eB.A.getNewClipIds()),
        h = (0, u.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(tr.hCu.SAVE_CLIP)),
        m = l.useRef(null),
        p = l.useMemo(() => {
            let e = [...o, ...r].filter((e) => e.type === e2.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, o]),
        f = l.useMemo(() => p.slice(0, 16), [p]),
        g = p.length > 16,
        A = null != h ? e1.dI(h.shortcut, !0) : null;
    (0, eW.t)(m);
    let x = (0, e0.$)(c.clipsLength / eJ.A.Millis.SECOND),
        C = (0, to.zr)(c.clipsQuality.resolution),
        E = ef.intl.formatToPlainString(ef.t.Qb44XH, { fps: c.clipsQuality.frameRate });
    return (0, s.jsxs)("div", {
        ref: (e) => {
            (m.current = e), a?.(e);
        },
        className: tu.SW,
        role: "dialog",
        "aria-label": ef.intl.string(ef.t.z2jK6X),
        children: [
            (0, s.jsxs)("div", {
                className: tu.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: tu.$,
                        children: [
                            (0, s.jsx)(ee.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ef.intl.string(ef.t.z2jK6X),
                            }),
                            null != A && (0, s.jsx)(ez.e, { className: tu.P, shortcut: A }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: tu.$s,
                        children: [
                            (0, s.jsx)(eQ.m, {
                                text: ef.intl.string(ef.t["3D5yo/"]),
                                children: (0, s.jsx)(eq.K, {
                                    onClick: () => n(),
                                    icon: eZ.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ef.intl.string(ef.t["3D5yo/"]),
                                }),
                            }),
                            (0, s.jsx)(eQ.m, {
                                text: ef.intl.string(tc.default["55C2MH"]),
                                children: (0, s.jsx)(eq.K, {
                                    onClick: () => t(),
                                    icon: eU.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ef.intl.string(tc.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: tu.P6,
                children: [x, C, E].join(" \u2022 "),
            }),
            (0, s.jsx)(eK.c, {}),
            f.length > 0
                ? (0, s.jsxs)(e$.Ch, {
                      className: tu.Vg,
                      fade: !0,
                      disableFocusRingScope: !0,
                      children: [
                          f.map((e) => (0, s.jsx)(ta, { clip: e, isNew: d.includes(e.id), onClose: i }, e.id)),
                          g &&
                              (0, s.jsx)("div", {
                                  className: tu.qr,
                                  children: (0, s.jsx)(eY.$, {
                                      onClick: () => t(),
                                      text: ef.intl.string(tc.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, s.jsx)(th, { keybindString: A }),
        ],
    });
}
function th(e) {
    let { keybindString: t } = e,
        n = (0, e3.Et)();
    return (0, s.jsxs)("div", {
        className: tu.p$,
        children: [
            (0, s.jsx)(et.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tu.qO,
                children: ef.intl.string(tc.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, s.jsx)(et.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tu.CZ,
                      children: ef.intl.format(tc.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, s.jsx)(
                                  et.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, s.jsx)(ez.e, { shortcut: t }),
                      }),
                  })
                : (0, s.jsx)(e6.A, {}),
        ],
    });
}
function tm(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        i = (0, V.sw)(),
        { userStatusMenu: a } = B.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        r = (0, u.bG)([eB.A], () => eB.A.getNewClipIds().length),
        o = l.useCallback(
            (e) => {
                t(), (0, eH.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        c = l.useCallback(() => {
            t(), (0, ea.openUserSettings)(ei.X.CLIPS_PANEL);
        }, [t]);
    return i && a
        ? (0, s.jsx)(eG, {
              action: "PRESS_CLIPS",
              icon: eU.x,
              label: ef.intl.string(ef.t.z2jK6X),
              trailing: r > 0 ? (0, s.jsx)(eD.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, s.jsx)(td, { ...e, onOpenGallery: o, onOpenSettings: c, onClose: t }),
          })
        : null;
}
var tp = n(480335),
    tf = n(31956),
    tg = n(361628),
    tA = n(744808),
    tx = n(282389),
    tC = n(645507),
    tE = n(970931),
    tv = n(462887),
    tT = n(736653),
    tj = n(439174),
    t_ = n(428262),
    tN = n(878784),
    tS = n(788868);
function tR() {
    let e = (0, tN.Xb)(),
        t = (0, t_.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tS.sp.length - 1; t >= 0; t--) {
        let s = tS.VD[tS.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + s.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return s.id;
            else break;
    }
    return null;
}
let tI = {
        [tS.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tS.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tS.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tS.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tS.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tS.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tS.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tS.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    ty = {
        [tS.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tS.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tS.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tS.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tS.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tS.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tS.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tS.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tb = n(682165);
let tM = l.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tw() {
    let e = (0, u.bG)([eu.A], () => eu.A.useReducedMotion),
        t = (0, eE.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tR(),
                t = (0, tv.M)((0, tT.Ay)());
            if (null == e) return null;
            let n = tI[e],
                s = ty[e],
                l = {
                    currentBadge: (0, tj.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? s?.dark : s?.light,
                },
                i = tS.sp.indexOf(e);
            if (i > 0) {
                let e = tS.sp[i - 1],
                    n = tI[e];
                (l.prevBadge = (0, tj.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return l;
        })(),
        [i, a] = l.useState(null);
    return (null != n && null == i && a(n), e || !t || null == i) ? null : (0, s.jsx)(tO, { levelUpData: i });
}
function tO(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        i = l.useCallback(() => {
            eE.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, s.jsx)(eW.O, {
        containerRef: n,
        children: (0, s.jsxs)("div", {
            className: tb.i,
            children: [
                (0, s.jsx)("div", {
                    className: tb.b,
                    children: (0, s.jsx)(eQ.m, {
                        text: ef.intl.string(ef.t.cpT0Cq),
                        children: (0, s.jsx)(eq.K, {
                            icon: en.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: i,
                            "aria-label": ef.intl.string(ef.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, s.jsx)(l.Suspense, { fallback: null, children: (0, s.jsx)(tM, { levelUpData: t }) }),
            ],
        }),
    });
}
var tU = n(206835),
    tD = n(183555),
    tP = n(999291),
    tk = n(975732),
    tL = n(718019),
    tF = n(694720),
    tG = n(915614),
    tV = n(744753),
    tB = n(559506),
    tH = n(646986),
    tQ = n(349419),
    tW = n(946356),
    tz = n(878555),
    tq = n(624479),
    tZ = n(206845),
    tK = n(957565),
    t$ = n(427262),
    tY = n(962352);
function tX(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tD.NJ)();
    return tK.p5
        ? (0, s.jsx)(tZ.A, {
              text: ef.intl.string(ef.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t$.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, s.jsx)(g.D, {
                      ...e,
                      className: a()(tY.c, { [tY.R]: n }),
                      "aria-label": ef.intl.string(ef.t.y5MwJy),
                      children: (0, s.jsx)(tq.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var tJ = n(983495),
    t0 = n(442228),
    t1 = n(885386),
    t2 = n(290863),
    t3 = n(351906),
    t6 = n(562153),
    t5 = n(661531),
    t4 = n(477782),
    t8 = n(628284),
    t7 = n(695366),
    t9 = n(363195),
    ne = n(889227),
    nt = n(287809),
    nn = n(174459),
    ns = n(429707),
    nl = n(274303),
    ni = n(994125),
    na = n(347853),
    nr = n(335020),
    no = n(43105),
    nc = n(704824),
    nu = n(46225),
    nd = n(429913),
    nh = n(379848),
    nm = n(633075),
    np = n(735321),
    nf = n(667049),
    ng = n(606758),
    nA = n(495544),
    nx = n(403362),
    nC = n(518477);
function nE(e) {
    let { targetElementRef: t, onClose: n } = e,
        [i, a] = l.useState(!1),
        { trackUserProfileEditAction: r } = (0, tD.NJ)(),
        o = (0, u.bG)([nA.default], () => nA.default.getId()),
        c = (function () {
            let e,
                t,
                n = (0, u.bG)([nA.default], () => nA.default.getId()),
                s = (0, nf.A)(n),
                i = l.useMemo(() => s.filter((e) => e instanceof nm.R), [s]),
                a =
                    ((e = (0, eO.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    l.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                r = l.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                o = ((t = (0, nd.A)(r)), l.useMemo(() => t.filter(nx.Vq), [t])),
                { tokens: c, fetched: d } = (0, nc.j)(r),
                h = (0, nu.U9)(o);
            return l.useMemo(() => {
                if (null == a || null == c || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let s = c.find((e) => e.application.id === n.applicationId),
                        l = i.find((e) => e.applicationId === n.applicationId),
                        a = o.find((e) => e.id === n.applicationId),
                        r = h.find((e) => e.context.application.id === n.applicationId);
                    if (null == a) return null;
                    null != s && null == l
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == s &&
                          r?.preferredFlow != null &&
                          t.push({
                              type: "unlinked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileUnlinkedDc,
                              authFlow: r.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [a, c, d, i, o, h]);
        })(),
        { analyticsLocations: d } = (0, O.Ay)();
    return null == c || 0 === c.length
        ? null
        : (0, s.jsx)(nh.Ay, {
              contentTypes: c.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: u } = e,
                      h = c.find((e) => e.dismissibleContent === l);
                  if (null == h) return null;
                  let m = "linked" === h.type,
                      p = () =>
                          (0, tk.openUserProfileModal)({ userId: o, tabSection: nC.RP.WIDGETS }).then(() => {
                              u(ep.i.TAKE_ACTION), n();
                          });
                  return (0, s.jsx)(no.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != h.config.editProfileUpsellImage
                              ? { type: "image", src: h.config.editProfileUpsellImage }
                              : void 0,
                      title: ef.intl.format(ef.t.TXDztH, { applicationName: h.application.name }),
                      body: m ? ef.intl.string(ef.t["63Kso0"]) : ef.intl.string(ef.t.HwXoeC),
                      onRequestClose: () => u(ep.i.USER_DISMISS),
                      actions: [
                          m
                              ? {
                                    text: ef.intl.string(ef.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            p()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new nm.R({ applicationId: h.application.id })),
                                                        void ((0, np.Y5)(e),
                                                        r({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, ng.XA)(nC.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => a(!1));
                                    },
                                    loading: i,
                                }
                              : {
                                    text: ef.intl.string(ef.t["DSJi3+"]),
                                    onClick: () => {
                                        h.authFlow.initiate({
                                            onConfirm: () => {
                                                a(!0), p().finally(() => a(!1));
                                            },
                                            analyticsLocations: d,
                                        });
                                    },
                                    loading: i,
                                },
                      ],
                  });
              },
          });
}
var nv = n(461213),
    nT = n(818348),
    nj = n(466573);
function n_() {
    let e = (0, u.bG)([nv.A], () => nv.A.getStatus()),
        t = (0, t$.MU)(e) ?? "",
        n = e === nT.cl.INVISIBLE || e === nT.cl.OFFLINE;
    return (0, s.jsxs)("div", {
        className: nj.k,
        children: [
            (0, s.jsxs)(A.A, { tag: "div", children: [ef.intl.string(ef.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, s.jsx)(eQ.m, {
                    text: ef.intl.string(ef.t.L99HQm),
                    children: (0, s.jsx)(t7.E, {
                        size: "xs",
                        color: t5.A.colors.STATUS_WARNING,
                        "aria-label": ef.intl.string(ef.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nN = n(841595);
let nS = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nR = n(501838),
    nI = n(760716),
    ny = n(915089),
    nb = n(13808);
function nM(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: i,
            children: r,
            height: o,
            className: c,
            contentClassName: u,
        } = e,
        d = (0, ny.GV)(),
        h = l.useRef(null),
        m = (0, ec.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, s.jsx)(R.animated.div, {
        className: a()(nb.kL, c),
        style: m,
        children: (0, s.jsxs)("aside", {
            "aria-labelledby": d,
            className: nb.Qs,
            children: [
                (0, s.jsxs)("div", {
                    className: nb.U1,
                    children: [
                        (0, s.jsx)(g.D, {
                            innerRef: h,
                            "aria-label": ef.intl.string(ef.t.WAI6xu),
                            className: nb.b,
                            onClick: () => {
                                t(ep.i.USER_DISMISS);
                            },
                            children: (0, s.jsx)(en.P, { color: "currentColor" }),
                        }),
                        (0, s.jsx)(ee.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != i && (0, s.jsx)(et.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
                (0, s.jsx)(eN.Ip, {
                    className: nb.XG,
                    fade: !0,
                    children: (0, s.jsx)("div", { className: a()(nb.gT, u), children: r }),
                }),
            ],
        }),
    });
}
var nw = n(973912),
    nO = n(871123),
    nU = n(44724),
    nD = n(501573);
function nP() {
    (0, nU.default)({ guildId: (0, nO.zf)() });
}
function nk(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: l } = e,
        { analyticsLocations: i } = (0, O.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, s.jsxs)(nM, {
              heading: ef.intl.string(ef.t["vy/61K"]),
              subheading: ef.intl.string(ef.t.tEee9t),
              markAsDismissed: l,
              className: nD.Zj,
              contentClassName: nD.hQ,
              height: 560,
              children: [
                  (0, s.jsx)(nw.A, {
                      userId: t,
                      analyticsLocations: i,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nD.KN,
                  }),
                  (0, s.jsx)("div", {
                      className: nD.UD,
                      children: (0, s.jsx)(eY.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ef.intl.string(ef.t.rg9FQp),
                          onClick: nP,
                      }),
                  }),
              ],
          });
}
function nL(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: i } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nS.useConfig({ location: t }).enabled;
                })({ location: t }),
                s = (0, u.bG)([nt.default], () => nt.default.getCurrentUser()),
                i = (0, u.bG)([nN.A], () => (null != s ? nN.A.getFirstWishlistId(s.id) : null)),
                a = (0, nI.i)((e) => e.recommendationApplicationIds),
                o = (0, nR.rY)(),
                c = (0, nR.qx)();
            return l.useMemo(
                () => (null != a || (null == i && n) ? (0, r.uniq)([...(a ?? []), ...c, ...o]).sort() : []),
                [n, i, c, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = l.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, s.jsx)(nh.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: a } = e;
            return null == i
                ? null
                : l === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, s.jsx)(nk, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nF = n(146901),
    nG = n(827827);
let nV = [
        { duration: 15 * eJ.A.Millis.MINUTE, label: () => ef.intl.string(ef.t["8ot6gv"]) },
        { duration: eJ.A.Millis.HOUR, label: () => ef.intl.string(ef.t.UMWBZr) },
        { duration: 8 * eJ.A.Millis.HOUR, label: () => ef.intl.string(ef.t.EpAXPC) },
        { duration: eJ.A.Millis.DAY, label: () => ef.intl.string(ef.t["755t4q"]) },
        { duration: 3 * eJ.A.Millis.DAY, label: () => ef.intl.string(ef.t["f3/1ch"]) },
        { duration: void 0, label: () => ef.intl.string(ef.t["46dqJY"]) },
    ],
    nB = "forever";
function nH(e) {
    let { status: t, currentStatus: n, description: l } = e,
        i = t !== tr.clD.ONLINE,
        a = (0, s.jsx)(s.Fragment, {
            children: nV.map((e) => {
                let { duration: l, label: i } = e;
                return (0, s.jsx)(
                    t4.Dr,
                    {
                        id: `${t}-${l}`,
                        label: i(),
                        action: () => (0, nG.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? nB,
                );
            }),
        });
    return (0, s.jsx)(t4.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: i,
        label: (0, t$.MU)(t),
        subtext: l,
        iconLeft: () => (0, s.jsx)(eR.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nG.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: i ? a : void 0,
    });
}
function nQ(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: s } = (0, nF._)(e);
    return "today" === t
        ? ef.intl.formatToPlainString(ef.t.ZxxHIO, { timeString: s })
        : ef.intl.formatToPlainString(ef.t["9OFjSe"], { dateString: n, timeString: s });
}
var nW = n(996988),
    nz = n(656884);
function nq(e) {
    let t,
        n,
        i,
        r,
        o,
        c,
        d,
        h,
        f,
        { currentUser: g, onClose: x, setPopoutRef: E, highlightBadge: v, openedAt: T, className: j } = e,
        _ = __OVERLAY__,
        N = (0, tP.Ay)(g.id, void 0),
        { analyticsLocations: S } = (0, O.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        R = (0, tD.pb)({ layout: "ACCOUNT_POPOUT", userId: g.id, guildId: void 0 }),
        { ref: I, height: y } = (0, ew.Ay)(),
        { isHoveringOrFocusing: b, isHovering: M } = (0, e8.A)(I);
    l.useEffect(() => {
        E?.(I.current);
    }, [I, E]),
        l.useEffect(
            () => (eE.A.setState({ isOpen: !0 }), () => eE.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let U = (0, u.bG)([t2.A], () => t2.A.getStatus(g.id)),
        D = nQ(t1.CY.useSetting()),
        P = (0, u.bG)([t3.A], () => t3.A.hidePersonalInformation),
        k = (0, tE.kB)(),
        L = t1.Q_.useSetting(),
        F =
            ((t = t1.CY.useSetting()),
            (n = (0, tE.kB)()),
            (i = t1.Jr.useSetting()),
            (r = (e) => {
                let s = nQ(t);
                if (U === e && null != s) return s;
                switch (e) {
                    case tr.clD.DND:
                        return n ? ef.intl.string(ef.t.day5A6) : ef.intl.string(ef.t["tq/fMK"]);
                    case tr.clD.INVISIBLE:
                        return ef.intl.string(ef.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (o = (0, s.jsx)(s.Fragment, {
                children: nV.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, s.jsx)(
                        t4.Dr,
                        {
                            id: `${U}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tE.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nB,
                    );
                }),
            })),
            (c = nH({ status: tr.clD.ONLINE, currentStatus: U })),
            (d = nH({ status: tr.clD.IDLE, currentStatus: U, description: r(tr.clD.IDLE) })),
            (h = nH({ status: tr.clD.DND, currentStatus: U, description: r(tr.clD.DND) })),
            (f = nH({ status: tr.clD.INVISIBLE, currentStatus: U, description: r(tr.clD.INVISIBLE) })),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    c,
                    (0, s.jsx)(t4.bX, {}, "menu-separator-statuses"),
                    d,
                    h,
                    f,
                    n
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(t4.bX, {}, "menu-separator-statuses"),
                                  (0, s.jsx)(
                                      t4.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ef.intl.string(ef.t.gJRnwK),
                                          iconLeft: eI.a,
                                          leadingAccessory: { type: "icon", icon: eI.a },
                                          badge: { text: ef.intl.string(ef.t.ApAu9f) },
                                          subtext:
                                              null != i && "0" !== i
                                                  ? ef.intl.format(ef.t.BWD8fs, {
                                                        endTime: new Date(Number(i)).toLocaleString(
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
                                              (0, tE.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: o,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            })),
        G = (function (e) {
            let t = (0, u.bG)([nt.default], () => nt.default.getCurrentUser()),
                n = (0, u.bG)([t3.A], () => t3.A.hidePersonalInformation),
                l = (0, u.bG)([t9.A], () => (0, tv.M)(t9.A.theme)),
                { multiAccountUsers: i } = (0, ni.K)(),
                a = i.map((i) => {
                    let a = new ne.A(i),
                        r = a.id === t?.id,
                        o = i.tokenStatus === nl.U.INVALID,
                        c = n ? null : `#${a.discriminator}`;
                    return (0, s.jsx)(
                        t4.Dr,
                        {
                            id: a.id,
                            focusedClassName: nr.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, s.jsxs)("div", {
                                    className: nr.ci,
                                    children: [
                                        (0, s.jsx)(m.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": i.username,
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: nr.DD,
                                            children: [
                                                (0, s.jsx)(et.E, {
                                                    className: nr.gE,
                                                    variant: "text-sm/normal",
                                                    children: t$.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, s.jsx)(et.E, {
                                                        className: nr.df,
                                                        variant: "text-sm/normal",
                                                        children: c,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, s.jsx)(t8.y, {
                                                size: "sm",
                                                color: t
                                                    ? t5.A.unsafe_rawColors.WHITE.css
                                                    : t5.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? t5.A.unsafe_rawColors.BRAND_500.css
                                                        : t5.A.unsafe_rawColors.WHITE.css,
                                                className: nr.s0,
                                            }),
                                        o &&
                                            (0, s.jsx)(t7.E, {
                                                color: t5.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? t5.A.unsafe_rawColors.BRAND_500.css
                                                        : t5.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nr.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, na.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nn.default.track(tr.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tr.JJy.USER_PROFILE },
                                        }),
                                        ns.Mx(n));
                                }
                            },
                        },
                        a.id,
                    );
                });
            return (
                a.push(
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(t4.bX, {}),
                            (0, s.jsx)(t4.Dr, {
                                id: "manage-accounts",
                                label: ef.intl.string(ef.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, na.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(x),
        V = (0, tU.A)({ analyticsLocations: S }),
        B = (0, t_.TW)(g),
        H = l.useRef(null),
        Q = l.useRef(null),
        W = (0, tg.A)(N?.profileFrame?.skuId, "UserProfileAccountPopout"),
        z = (0, tx.A)(N?.profileFrame?.skuId);
    (0, tf.A)({ skuId: N?.profileFrame?.skuId, openedAt: T, context: R, analyticsLocations: S });
    let q = l.useRef((0, eE.A)((e) => e.shouldRenderTenureLevelUp)),
        Z = l.useMemo(() => (0, tC.A)(), []),
        [K, $] = l.useState(() => eE.A.getState().shouldRenderTenureLevelUp);
    l.useEffect(() => {
        let e = setTimeout(() => {
            $(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Y = (e) => {
            x?.(), (0, tk.openUserProfileModal)({ customStatusPrompt: Z, sourceAnalyticsLocations: S, ...R, ...e });
        },
        X = N?.widgets != null && N.widgets.length > 0,
        J = l.useCallback(() => {
            x();
        }, [x]),
        ee = l.useCallback(() => {
            V(), J();
        }, [V, J]),
        en = (0, eO.QR)({ location: "UserProfileAccountPopout" }),
        es = (0, eO.zd)({ location: "UserProfileAccountPopout" }),
        el = l.useId();
    return (0, s.jsx)(O.f5, {
        value: S,
        children: (0, s.jsx)(tD.of, {
            value: R,
            openedAt: T,
            fetchStartedAt: N?.fetchStartedAt,
            fetchEndedAt: N?.fetchEndedAt,
            isLoaded: N?.isLoaded,
            children: (0, s.jsxs)(e_.l, {
                ref: I,
                "aria-labelledby": el,
                className: a()(eL.jC, j),
                "data-layer": "base",
                children: [
                    (0, s.jsx)(A.A, {
                        children: (0, s.jsx)(eT.H, { id: el, children: ef.intl.string(ef.t["5fWB8U"]) }),
                    }),
                    (0, s.jsxs)(eT.F, {
                        children: [
                            (0, s.jsx)(nL, { displayProfile: N, handleOpenUserProfileModal: Y, height: y }),
                            (0, s.jsxs)(tW.A, {
                                className: a()(eL.BK, z),
                                user: g,
                                displayProfile: N,
                                themeType: nW.d.POPOUT,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: nz.wx,
                                        children: [
                                            (0, s.jsx)(tG.A, { user: g, displayProfile: N, themeType: nW.d.POPOUT }),
                                            (0, s.jsx)(tL.A, {
                                                user: g,
                                                displayProfile: N,
                                                themeType: nW.d.POPOUT,
                                                onOpenProfile: _ ? void 0 : Y,
                                            }),
                                            (0, s.jsx)(tJ.A, {
                                                ref: H,
                                                user: g,
                                                themeType: nW.d.POPOUT,
                                                onCloseProfile: x,
                                                prompt: Z,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)(eN.Ip, {
                                        className: eL.rf,
                                        style: { pointerEvents: K ? "none" : void 0 },
                                        children: [
                                            (0, s.jsx)(tB.A, { userId: g.id }),
                                            (0, s.jsx)(tz.Ay, {
                                                className: eL.eF,
                                                user: g,
                                                displayName: t6.Ay.getName(void 0, null, g),
                                                onClickName: _ ? void 0 : Y,
                                                displayNameTrailing: (0, s.jsx)(tX, { user: g, isVisible: b }),
                                                pronouns: N?.pronouns,
                                                trailing: (0, s.jsx)(tF.A, {
                                                    displayProfile: N,
                                                    themeType: nW.d.POPOUT,
                                                    onClose: x,
                                                    shouldOpenBadgeTooltip: null != v ? (e) => e === v : void 0,
                                                    shouldGlowTenureBadge: q.current,
                                                }),
                                            }),
                                            (0, s.jsx)(tV.A, { isPremiumUser: B, onInteraction: x }),
                                            (0, s.jsx)(t0.A, {
                                                user: g,
                                                bio: N?.bio,
                                                hidePersonalInformation: P,
                                                onClose: x,
                                            }),
                                            X &&
                                                (0, s.jsx)(tQ.A, {
                                                    user: g,
                                                    widgets: N?.widgets,
                                                    onOpenUserProfileModal: Y,
                                                }),
                                            (0, s.jsx)(tH.A, {
                                                user: g,
                                                currentUser: g,
                                                onOpenUserProfileModal: Y,
                                                onClose: x,
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: eL.T_,
                                                children: [
                                                    (0, s.jsx)(tW.A.Overlay, {
                                                        className: eL.g0,
                                                        children: (0, s.jsxs)(eV, {
                                                            children: [
                                                                (0, s.jsx)(eG, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ef.intl.string(ef.t.s5vZlQ),
                                                                    icon: eS.R,
                                                                    onClick: ee,
                                                                    ref: Q,
                                                                }),
                                                                (0, s.jsx)(eG, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, s.jsx)(n_, {}),
                                                                    sublabel: null != D && D,
                                                                    icon: () =>
                                                                        (0, s.jsx)(eR.nW, { status: U, size: 12 }),
                                                                    trailing:
                                                                        (k || U === tr.clD.DND) &&
                                                                        (0, s.jsx)(eI.a, { size: "xxs" }),
                                                                    renderSubmenu: ev.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, s.jsx)(eF, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eL.hQ,
                                                                                  "aria-label": ef.intl.string(
                                                                                      ef.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: ev.Fr
                                                                        ? () => {
                                                                              x(),
                                                                                  (0, C.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, s.jsx)(
                                                                                                      ej.d,
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
                                                                                                          s.jsx)(ey.W, {
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
                                                                                                                  F,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  );
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                (0, s.jsx)(tm, { onClose: x, popoutContainerRef: I }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, s.jsx)(tW.A.Overlay, {
                                                        className: eL.g0,
                                                        children: (0, s.jsxs)(eV, {
                                                            children: [
                                                                (0, s.jsx)(eG, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eb.r,
                                                                    label: ef.intl.string(ef.t.oMNyYN),
                                                                    onClick: () => {
                                                                        x(), (0, na.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, s.jsx)(eF, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ef.intl.string(ef.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: G,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tK.p5 &&
                                                                    L &&
                                                                    (0, s.jsx)(eG, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eM.L,
                                                                        label: ef.intl.string(ef.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tK.C)(g.id), x();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    N?.profileEffect != null &&
                                        !q.current &&
                                        (0, s.jsx)(tp.A, { skuId: N.profileEffect.skuId, isHovering: M }),
                                    null != W && (0, s.jsx)(tA.A, { frame: W }),
                                ],
                            }),
                            en && es ? (0, s.jsx)(nE, { targetElementRef: Q, onClose: x }) : null,
                            (0, s.jsx)(tw, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nZ = n(371912),
    nK = n(655116),
    n$ = n(21973),
    nY = n(454719),
    nX = n(342296),
    nJ = n(852712),
    n0 = n(167579),
    n1 = n(173660),
    n2 = n(761853),
    n3 = n(763827),
    n6 = n(499156),
    n5 = n(731854);
let n4 = 2.5 * eJ.A.Millis.SECOND,
    n8 = +eJ.A.Millis.HOUR;
var n7 = n(459838),
    n9 = n(485296);
let se = 3 * eJ.A.Millis.SECOND,
    st = +eJ.A.Millis.DAY;
var sn = n(616356),
    ss = n(734057),
    sl = n(629016),
    si = n(186111),
    sa = n(967198),
    sr = n(486020),
    so = n(625494),
    sc = n(536194),
    su = n(19575),
    sd = n(994314),
    sh = n(485599),
    sm = n(537668),
    sp = n(626584),
    sf = n(531685),
    sg = n(259065),
    sA = n(864386);
let sx = new sp.A("DisplayNameStylesCoachmark");
function sC(e) {
    let { markAsDismissed: t, targetElementRef: n, children: i } = e,
        { analyticsLocations: a } = (0, O.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, u.bG)([sf.A], () => sf.A.isFocused()),
        c = (0, l.useCallback)(() => {
            t(ep.i.TAKE_ACTION),
                (0, ea.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, sg.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, l.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]);
    return (
        (0, l.useEffect)(() => {
            o && r.current?.paused ? r.current?.play().catch(sx.error) : o || r.current?.pause();
        }, [o]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                i,
                (0, s.jsx)(no.A, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: d,
                    align: "right",
                    position: "top",
                    caretConfig: { align: "center" },
                    gradientColor: "nitro-pink",
                    graphic: {
                        type: "video",
                        ref: r,
                        src: "https://cdn.discordapp.com/assets/content/5d90dc1e412ad3aa0b39088fba382025e32b718d7bf5d797512be9701b5f53b4.webm",
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    title: ef.intl.string(sA.default["1AE464"]),
                    body: [ef.intl.string(sA.default.cNc1g9), ef.intl.string(ef.t["4JNXHG"])],
                    actions: [{ text: ef.intl.string(ef.t.uw9zI7), variant: "primary", onClick: c }],
                }),
            ],
        })
    );
}
var sE = n(131607),
    sv = n(45780),
    sT = n(696451),
    sj = n(71393),
    s_ = n(685073),
    sN = n(228366);
let sS = { lastSeenInfos: {} },
    sR = sS;
class sI extends u.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        sR = e ?? sS;
    }
    getState() {
        return sR;
    }
    getGuildLastSeenInfo(e) {
        return sR.lastSeenInfos[e] ?? null;
    }
}
let sy = new sI(sN.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        sR.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        sR = sS;
    },
});
var sb = n(116833),
    sM = n(514661);
let sw = new sp.A("GuildTagAvailableCoachmark");
function sO(e) {
    let t = (0, u.bG)([sj.A], () => sj.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            sN.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: l, onAdoptTag: i, onEditProfile: a } = (0, sM.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, s_.q0)(t))
        return sw.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ef.intl.string(ef.t.jwEaiX), loading: l, onClick: i, variant: "primary" },
        { text: ef.intl.string(ef.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            e.children,
            (0, s.jsx)(no.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: sb.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ef.intl.formatToPlainString(ef.t["m/Tc3n"], { guildName: t.name }),
                body: ef.intl.string(ef.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(ep.i.USER_DISMISS),
            }),
        ],
    });
}
function sU(e) {
    let t = (0, u.bG)([sj.A], () => sj.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: i, onEditProfile: a } = (0, sM.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, s_.q0)(t))
        return sw.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ef.intl.string(ef.t.jwEaiX), loading: l, onClick: i, variant: "primary" },
        { text: ef.intl.string(ef.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            e.children,
            (0, s.jsx)(no.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: sb.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ef.intl.formatToPlainString(ef.t.VFqnyU, { guildName: t.name }),
                body: ef.intl.string(ef.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(ep.i.USER_DISMISS),
            }),
        ],
    });
}
var sD = n(843010),
    sP = n(764231),
    sk = n(425713);
function sL(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tR(),
        i = (0, u.bG)([eu.A], () => eu.A.useReducedMotion),
        a = (0, eE.A)((e) => e.isOpen),
        r = (0, sD.G)();
    return i || null == l || a || r
        ? null
        : (0, s.jsx)(nh.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: i } = e;
                  return (0, s.jsx)(sF, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: i,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function sF(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: i, shouldShow: a } = e,
        r = tS.sp.indexOf(t),
        o = (0, sk.I)(tS.sp[r > 0 ? r - 1 : r]).ambient,
        c = (0, l.useCallback)(() => {
            n(ep.i.TAKE_ACTION),
                eE.A.setState({ shouldRenderTenureLevelUp: !0 }),
                so._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        u = (0, l.useCallback)(() => {
            n(ep.i.USER_DISMISS);
        }, [n]),
        d = tS.VD[t],
        h = ef.intl.formatToPlainString(ef.t.ewkaVR, {
            timeMilestone: (0, sP.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: ef.intl.string(ef.t.RzWDqY), variant: "primary", onClick: c }];
    return (0, s.jsx)(no.A, {
        targetElementRef: i,
        onRequestClose: u,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ef.intl.string(ef.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function sG(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nZ.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [i, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                s = (0, sv.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tr.dJq),
                l = (0, u.bG)([sj.A, nt.default, sT.Ay], () => {
                    if (null === e) return !1;
                    let t = sj.A.getGuild(e);
                    if (void 0 === t || !(0, s_.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nt.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let s = sT.Ay.getMember(e, n.id);
                    return null != s && !s.isPending;
                }, [e]);
            return (0, sE.ww)(l && n && !s ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tr.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                s = e?.primaryGuild,
                l = s?.identityGuildId ?? null,
                i = (0, u.bG)([sy], () => (null === l ? null : sy.getGuildLastSeenInfo(l))),
                a = (0, u.bG)([sj.A], () => sj.A.getGuild(l)?.profile?.tag),
                r = null != a && s?.identityGuildId === l && s?.tag === null,
                o = null != l && i?.tag === a,
                c = null !== l && r && !o;
            return (0, sE.Wl)(c && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? i === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, s.jsx)(sU, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, s.jsx)(sO, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(sL, { groupName: ep.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, s.jsx)(nh.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: ep.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, s.jsx)(sC, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, s.jsx)(sm.A, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eH.p,
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
var sV = n(615675),
    sB = n(900797),
    sH = n(847374),
    sQ = n(348858),
    sW = n(617354),
    sz = n(206018),
    sq = n(42473),
    sZ = n(490704),
    sK = n(967194);
function s$(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: i,
            onClick: r,
            iconForeground: o,
            nameplate: c,
            shouldShowOutputDeviceChangedTooltip: u,
            dismissTooltips: d,
        } = e,
        h = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, sQ.I)(h ? "undeafen" : "deafen"),
        x = n ? sV.T : m,
        { name: C } = (0, eC.x5)(n5.oh.AUDIO_OUTPUT),
        E = (0, sW.A)(t, n, i),
        { analyticsLocations: v } = (0, O.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        T = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [h, p]),
        (0, s.jsx)(O.f5, {
            value: v,
            children: (0, s.jsx)(f.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, s.jsx)(O.f5, {
                            value: v,
                            children: (0, s.jsx)(sz.A, {
                                onInteraction: (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                        { isShown: d } = t,
                        m = d ? sB.t : sH.a;
                    return (0, s.jsxs)("div", {
                        ref: T,
                        className: a()(sZ.Lh, { [sZ.v8]: h, [sZ.q6]: d }),
                        children: [
                            (0, s.jsx)(sq.A, {
                                "aria-checked": h,
                                "aria-label": ef.intl.string(ef.t.wjcRFX),
                                className: sZ.eT,
                                disabled: i,
                                icon: (0, s.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? sK.o : void 0,
                                innerClassName: a()({ [sK.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != c,
                                redGlow: h,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, s.jsx)(sq.A, {
                                className: a()(sZ.UT, { [sZ.q6]: d }),
                                disabled: i,
                                icon: (0, s.jsx)(m, {
                                    className: sZ.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != c,
                                redGlow: h,
                                tooltipType: u ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: u,
                                tooltipPositionKey: u
                                    ? ef.intl.formatToPlainString(ef.t["f+DDY/"], { outputDeviceName: C })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: u
                                    ? ef.intl.format(ef.t["f+DDY/"], { outputDeviceName: C })
                                    : ef.intl.string(ef.t.aA4Vce),
                                "aria-label": u
                                    ? ef.intl.formatToPlainString(ef.t["f+DDY/"], { outputDeviceName: C })
                                    : ef.intl.string(ef.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var sY = n(666654),
    sX = n(523875),
    sJ = n(993719);
let s0 = {};
class s1 extends u.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return s0[e] ?? !1;
    }
}
let s2 = new s1(sN.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        s0[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        s0[t] = !1;
    },
});
var s3 = n(362823),
    s6 = n(980923),
    s5 = n(224585),
    s4 = n(949341),
    s8 = n(973324);
function s7(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
            suppress: r,
            awaitingRemote: o,
            iconForeground: c,
            onMouseEnter: d,
            onMouseLeave: h,
            onClick: m,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: C,
            dismissTooltips: E,
            speaking: v,
        } = e,
        { showPTTIconIndicator: T } = n6.A.useConfig({ location: "MicrophoneButton" }),
        j = (0, u.bG)([n2.Ay], () => n2.Ay.getMode() === n5.TB.PUSH_TO_TALK),
        _ = (0, u.bG)([n2.Ay], () => n2.Ay.getSettings().modeOptions.shortcut),
        N = (0, u.bG)([s2], () => s2.getIsTutorialActive(s3.v.MUTE_TUTORIAL)),
        S = (0, u.bG)([n3.A], () => null != n3.A.getChannelId()),
        { name: R } = (0, eC.x5)(n5.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, nJ.d)({ location: "MicrophoneButton" }),
        y = l.useRef(null),
        b = n || r || i,
        M = (0, sX.L)(b ? "unmute" : "mute"),
        { analyticsLocations: U } = (0, O.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: D, events: P, play: k } = M,
        L = i || r ? sY.O : D;
    l.useEffect(() => () => k(), [b, k]);
    let F = (0, s6.A)(n, i, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: ef.intl.string(ef.t["29gnR4"]), tooltipForceOpen: !0 }
        : C || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ef.intl.format(ef.t.c1qUOQ, { keybind: e1.dI(_).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let V = T && j && S,
        B = b ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
        H = l.useCallback(() => {
            m(), N && sJ.N(s3.v.MUTE_TUTORIAL);
        }, [m, N]);
    return (0, s.jsxs)(O.f5, {
        value: U,
        children: [
            (0, s.jsx)(f.Y, {
                targetElementRef: y,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, s.jsx)(O.f5, {
                            value: U,
                            children: (0, s.jsx)(sz.A, {
                                onInteraction: (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: I.length > 0,
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
                        { isShown: i } = n,
                        r = i ? sB.t : sH.a;
                    return (0, s.jsxs)("div", {
                        ref: y,
                        className: a()(sZ.Lh, { [sZ.v8]: b, [sZ.q6]: i }),
                        children: [
                            (0, s.jsx)(sq.A, {
                                "aria-checked": b,
                                "aria-label": ef.intl.string(ef.t.w4m945),
                                className: sZ.eT,
                                disabled: o,
                                icon: (0, s.jsx)(L, { size: "custom", width: 20, height: 20, color: B, className: c }),
                                onClick: H,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    d(), P.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    h(), P.onMouseLeave();
                                },
                                plated: null != p,
                                redGlow: b,
                                role: "switch",
                                ...t,
                                children: V ? (0, s.jsx)("div", { className: a()(s4.U, { [s4.z]: v }) }) : null,
                            }),
                            (0, s.jsx)(sq.A, {
                                "aria-label": x
                                    ? ef.intl.formatToPlainString(ef.t["18wnuD"], { inputDeviceName: R })
                                    : ef.intl.string(ef.t.fRzCbB),
                                className: a()(sZ.UT, { [sZ.q6]: i }),
                                disabled: o,
                                icon: (0, s.jsx)(r, {
                                    className: sZ.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: B,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: d,
                                onMouseLeave: h,
                                plated: null != p,
                                redGlow: b,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? ef.intl.formatToPlainString(ef.t["18wnuD"], { inputDeviceName: R })
                                    : void 0,
                                tooltipShouldShow: !i,
                                tooltipText: x
                                    ? ef.intl.format(ef.t["18wnuD"], { inputDeviceName: R })
                                    : ef.intl.string(ef.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, s.jsx)(no.A, {
                targetElementRef: y,
                shouldShow: N,
                graphic: { type: "image", src: s8.A },
                onRequestClose: () => {
                    sJ.N(s3.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ef.intl.string(s5.default.VG4zAf),
                body: ef.intl.string(s5.default["8VIRzR"]),
            }),
        ],
    });
}
var s9 = n(935399),
    le = n(505312),
    lt = n(848847),
    ln = n(88001),
    ls = n(466919),
    ll = n(438705);
let li = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        a = l.useCallback(() => {
            i(), (0, ea.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
        }, [i]);
    return (0, s.jsx)(no.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: ll },
        shouldShow: n,
        title: ef.intl.format(ls.default.bx8sR9, { premiumGroupProductName: (0, ln.DP)() }),
        body: ef.intl.format(ls.default.Pw4OFZ, { premiumGroupProductName: (0, ln.DP)() }),
        onRequestClose: i,
        actions: [{ text: ef.intl.string(ls.default.DD26QR), onClick: a }],
    });
};
var la = n(873298),
    lr = n(840387);
function lo(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, lr.Z)(),
        a = t1.KP.useSetting(),
        r = i && a !== la.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            t(ep.i.TAKE_ACTION), (0, ea.openUserSettings)(ei.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        c = (0, l.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]),
        u = r
            ? a === la.KP.FRIENDS_ONLY
                ? ef.intl.string(ef.t["/hogEy"])
                : ef.intl.string(ef.t["6hEfm1"])
            : ef.intl.string(ef.t.bnNxW1);
    return (0, s.jsx)(no.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: c,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/0710b4aac8339f9213d3c43a8976071c26abe2b3236ccd8817180ce465f33673.svg",
        },
        title: ef.intl.string(ef.t.Ve4nS1),
        body: u,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ef.intl.string(ef.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function lc(e) {
    let t,
        n,
        {
            webBuildOverride: i,
            onClick: a,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: c,
            nameplate: u,
        } = e,
        h = l.useRef(null),
        [m, p] = l.useState(!1);
    (0, s9.Ay)(() => {
        let e = () => p(!0);
        return (
            so._.subscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                so._.unsubscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = l.useCallback(() => {
        p(!1), a();
    }, [a]);
    t = null != i ? ef.intl.formatToPlainString(ef.t.Gzh6ZP, { webBuildOverride: i.id }) : ef.intl.string(ef.t.cduTBL);
    let g = eZ.Z,
        A = (0, le.w)();
    return (
        (g = null != i ? lt.H : A.Component),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(sq.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": ef.intl.string(ef.t.cduTBL),
                    icon: (0, s.jsx)(g, { size: "refresh_sm", color: "currentColor", className: c }),
                    ...A.events,
                    plated: null != u,
                }),
                (0, s.jsx)(li, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, s.jsx)(nh.Ay, {
                    contentTypes: o,
                    groupName: ep.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, s.jsx)(lo, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var lu = n(489902);
let ld = su.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    lh = 2.5 * eJ.A.Millis.SECOND,
    lm = 2 * eJ.A.Millis.MINUTE,
    lp = 2 * eJ.A.Millis.MINUTE,
    lf = 5 * eJ.A.Millis.SECOND;
function lg(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: i = -1 / 0,
            streaming: r,
            currentUser: o,
            status: c,
            handleClick: u,
            handleMouseLeave: d,
            renderNameTag: h,
            nameplate: m,
            avatarDecoration: A,
            "data-jump-section": x,
        } = e,
        C = l.useRef(null),
        E = t ?? C,
        T = (0, sr.F_)({ avatarDecoration: A, size: (0, Q.Te)(p._3.SIZE_32) }),
        j = (0, $.A)(),
        {
            updateOpenPopoutRef: N,
            highlightBadge: S,
            setHighlightBadge: R,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, s] = l.useState(),
                [i, a] = l.useState(!1);
            return (
                (0, _.A)(() => a(!0), 750),
                l.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && s(n), e.current?.();
                    };
                    return (
                        so._.subscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            so._.unsubscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: i ? n : void 0, setHighlightBadge: s }
            );
        })(),
        I = (0, z.K)(m);
    return null == o
        ? null
        : (0, s.jsx)(v.A, {
              object: tr.ZSU.AVATAR,
              children: (0, s.jsx)(nX.A, {
                  user: o,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, nY.A)(o.id, o.getAvatarURL(void 0, nX.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, s.jsx)(nq, {
                          currentUser: o,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lu.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: f.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      d(), R(void 0);
                  },
                  children: (e) => {
                      N(e);
                      let { onMouseEnter: t, onMouseDown: l, ...d } = e;
                      return (0, s.jsxs)("div", {
                          ref: E,
                          style: I,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              e.onClick?.(t), u?.(t);
                          },
                          className: a()(lu.Q9, { [lu.ZQ]: null != m }),
                          children: [
                              (0, s.jsx)(g.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), u?.(t);
                                  },
                                  "aria-label": ef.intl.string(ef.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: lu.$n,
                                  "data-jump-section": x,
                              }),
                              (0, s.jsx)(ld, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tr.clD.STREAMING : c,
                                  isSpeaking: n,
                                  voiceDb: i,
                                  className: lu.my,
                                  "aria-hidden": !0,
                              }),
                              (0, s.jsx)("div", { className: lu.oM, children: h(j) }),
                          ],
                      });
                  },
              }),
          });
}
class lA extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new c.A(lp, null, !1);
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
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: s } = e,
            { speakingWhileMuted: l, occluded: i, speakingWhilePTTInactive: a } = this.props;
        i !== s && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, L.A)(e, t, tr.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, tr.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n3.A.isConnected() ? (0, ea.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL) : (0, ea.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("8516"),
                    n.e("3633"),
                    n.e("59121"),
                    n.e("54518"),
                    n.e("19397"),
                    n.e("13114"),
                    n.e("23531"),
                    n.e("94898"),
                    n.e("41816"),
                    n.e("5959"),
                    n.e("46461"),
                    n.e("76090"),
                    n.e("12289"),
                    n.e("81857"),
                    n.e("45650"),
                    n.e("88692"),
                    n.e("27660"),
                    n.e("85484"),
                    n.e("98848"),
                    n.e("5067"),
                    n.e("6432"),
                    n.e("36407"),
                    n.e("95653"),
                    n.e("69134"),
                    n.e("79705"),
                    n.e("54081"),
                    n.e("83928"),
                    n.e("92702"),
                    n.e("53727"),
                    n.e("99406"),
                    n.e("76032"),
                    n.e("14344"),
                    n.e("73589"),
                    n.e("33957"),
                    n.e("59204"),
                    n.e("48628"),
                    n.e("57006"),
                    n.e("64422"),
                    n.e("56386"),
                    n.e("63897"),
                    n.e("93814"),
                    n.e("4352"),
                    n.e("25812"),
                    n.e("6619"),
                    n.e("5007"),
                    n.e("90427"),
                    n.e("79093"),
                    n.e("35177"),
                    n.e("3840"),
                    n.e("37781"),
                    n.e("9987"),
                    n.e("20367"),
                    n.e("65317"),
                    n.e("66969"),
                    n.e("4512"),
                    n.e("12709"),
                    n.e("81275"),
                    n.e("15086"),
                    n.e("17166"),
                    n.e("92922"),
                    n.e("44710"),
                    n.e("57205"),
                    n.e("18698"),
                    n.e("18042"),
                    n.e("10441"),
                    n.e("52197"),
                    n.e("94695"),
                    n.e("27147"),
                    n.e("13804"),
                    n.e("94457"),
                    n.e("97652"),
                    n.e("30006"),
                    n.e("23924"),
                    n.e("42205"),
                    n.e("71091"),
                    n.e("19402"),
                    n.e("13111"),
                    n.e("68201"),
                    n.e("38939"),
                    n.e("3376"),
                    n.e("13554"),
                    n.e("26132"),
                    n.e("28367"),
                    n.e("10471"),
                    n.e("35429"),
                    n.e("63232"),
                    n.e("11301"),
                    n.e("60235"),
                    n.e("64827"),
                    n.e("30938"),
                    n.e("96643"),
                    n.e("94493"),
                    n.e("92789"),
                    n.e("47834"),
                    n.e("74016"),
                    n.e("19551"),
                    n.e("84569"),
                    n.e("6338"),
                    n.e("3178"),
                    n.e("7743"),
                    n.e("45959"),
                    n.e("60658"),
                    n.e("8304"),
                    n.e("18573"),
                    n.e("55936"),
                    n.e("31988"),
                    n.e("39667"),
                    n.e("5812"),
                    n.e("26073"),
                    n.e("34303"),
                    n.e("28866"),
                    n.e("1368"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("31716"),
                    n.e("8751"),
                    n.e("62931"),
                    n.e("81987"),
                    n.e("50417"),
                    n.e("81210"),
                    n.e("34552"),
                    n.e("93103"),
                    n.e("91763"),
                    n.e("76602"),
                    n.e("9233"),
                    n.e("28229"),
                    n.e("21921"),
                    n.e("68403"),
                    n.e("76418"),
                    n.e("71210"),
                    n.e("42724"),
                    n.e("43437"),
                    n.e("40258"),
                    n.e("66495"),
                    n.e("88342"),
                    n.e("86127"),
                    n.e("39970"),
                    n.e("82263"),
                    n.e("6174"),
                    n.e("91146"),
                    n.e("8555"),
                    n.e("46070"),
                    n.e("42451"),
                    n.e("98965"),
                    n.e("72789"),
                    n.e("6949"),
                    n.e("86814"),
                    n.e("17249"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("35027"),
                    n.e("53917"),
                    n.e("62422"),
                    n.e("25949"),
                    n.e("90365"),
                    n.e("89088"),
                    n.e("71273"),
                    n.e("36863"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("9640"),
                    n.e("98765"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("52548"),
                    n.e("3589"),
                    n.e("20590"),
                    n.e("35313"),
                    n.e("65437"),
                    n.e("74810"),
                    n.e("28083"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("53984"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("43780"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("45413"),
                    n.e("86672"),
                    n.e("90664"),
                    n.e("32756"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("52617"),
                    n.e("2564"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("48330"),
                    n.e("14285"),
                    n.e("95752"),
                    n.e("35321"),
                    n.e("8362"),
                    n.e("41678"),
                    n.e("72401"),
                    n.e("62875"),
                    n.e("4744"),
                    n.e("2698"),
                    n.e("5500"),
                    n.e("501"),
                    n.e("95665"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("86243"),
                    n.e("32209"),
                    n.e("39171"),
                    n.e("37021"),
                    n.e("78300"),
                    n.e("36564"),
                    n.e("50033"),
                    n.e("87478"),
                    n.e("63645"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("83952"),
                    n.e("44780"),
                    n.e("5636"),
                    n.e("87196"),
                    n.e("834"),
                    n.e("5557"),
                    n.e("59957"),
                    n.e("95340"),
                    n.e("62718"),
                    n.e("26728"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("61156"),
                    n.e("91671"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("68763"),
                    n.e("16767"),
                    n.e("4193"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("6841"),
                    n.e("20930"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("20379"),
                    n.e("57458"),
                    n.e("36877"),
                    n.e("59466"),
                    n.e("8829"),
                    n.e("19193"),
                    n.e("69747"),
                    n.e("97073"),
                    n.e("75133"),
                    n.e("1243"),
                    n.e("96804"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("15920"),
                    n.e("37977"),
                    n.e("42234"),
                    n.e("58164"),
                    n.e("3930"),
                    n.e("44057"),
                    n.e("3663"),
                    n.e("11617"),
                    n.e("26294"),
                    n.e("74678"),
                    n.e("10943"),
                    n.e("37490"),
                    n.e("81189"),
                    n.e("92077"),
                    n.e("66580"),
                    n.e("77467"),
                    n.e("80093"),
                    n.e("98972"),
                    n.e("203"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("78601"),
                    n.e("89523"),
                    n.e("80407"),
                    n.e("42726"),
                    n.e("34546"),
                    n.e("29260"),
                    n.e("41701"),
                    n.e("17823"),
                    n.e("21930"),
                    n.e("39894"),
                    n.e("21455"),
                    n.e("60989"),
                    n.e("79435"),
                    n.e("12682"),
                    n.e("68083"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("49013"),
                    n.e("30167"),
                    n.e("51892"),
                    n.e("41838"),
                    n.e("45830"),
                    n.e("46045"),
                    n.e("755"),
                    n.e("33448"),
                    n.e("3710"),
                    n.e("73122"),
                    n.e("42324"),
                    n.e("94607"),
                    n.e("33771"),
                    n.e("8979"),
                    n.e("77602"),
                    n.e("46039"),
                    n.e("95602"),
                    n.e("5896"),
                    n.e("31335"),
                    n.e("29569"),
                    n.e("96480"),
                    n.e("82178"),
                    n.e("4736"),
                    n.e("47359"),
                    n.e("34409"),
                    n.e("43114"),
                    n.e("79593"),
                    n.e("39053"),
                    n.e("73611"),
                    n.e("41706"),
                    n.e("62175"),
                    n.e("10637"),
                    n.e("94888"),
                    n.e("89541"),
                    n.e("89545"),
                    n.e("46430"),
                    n.e("81202"),
                    n.e("46149"),
                    n.e("5871"),
                    n.e("27462"),
                    n.e("22455"),
                    n.e("60816"),
                    n.e("68031"),
                    n.e("97162"),
                    n.e("44727"),
                    n.e("10147"),
                    n.e("6627"),
                    n.e("60536"),
                    n.e("86546"),
                    n.e("84704"),
                    n.e("66380"),
                    n.e("46327"),
                    n.e("28011"),
                    n.e("15057"),
                    n.e("75284"),
                    n.e("62318"),
                    n.e("3590"),
                    n.e("64926"),
                    n.e("50541"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("20301"),
                    n.e("61750"),
                    n.e("20803"),
                    n.e("95782"),
                    n.e("40114"),
                    n.e("61137"),
                    n.e("96817"),
                    n.e("73566"),
                    n.e("27687"),
                    n.e("45419"),
                    n.e("18710"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("11883"),
                    n.e("24564"),
                    n.e("34428"),
                    n.e("35476"),
                    n.e("39721"),
                    n.e("19631"),
                    n.e("82384"),
                    n.e("76892"),
                    n.e("98660"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("43403"),
                    n.e("71811"),
                    n.e("39967"),
                    n.e("38249"),
                    n.e("88918"),
                    n.e("85216"),
                    n.e("26359"),
                    n.e("83774"),
                    n.e("83102"),
                    n.e("80890"),
                    n.e("2552"),
                    n.e("33314"),
                    n.e("89588"),
                    n.e("24084"),
                    n.e("44790"),
                    n.e("44264"),
                    n.e("74913"),
                    n.e("14451"),
                    n.e("44891"),
                    n.e("7755"),
                    n.e("93720"),
                    n.e("54658"),
                    n.e("31828"),
                    n.e("71790"),
                    n.e("81754"),
                    n.e("71608"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, s.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, G.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, nJ.d)({ location: "Account" });
                    return (0, s.jsx)(O.f5, {
                        value: t,
                        children: (0, s.jsx)(e, {
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
                    (0, s.jsx)(O.f5, {
                        value: t,
                        children: (0, s.jsx)(e, {
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
                speakingWhileMuted: s,
                occluded: l,
                shouldShowPTTJoinTooltip: i,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lm;
        s
            ? r ||
              !e ||
              t ||
              n ||
              l ||
              !o ||
              null != a ||
              i ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(lh, () =>
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
                speakingWhilePTTInactive: s,
                occluded: l,
                shouldShowPTTJoinTooltip: i,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        s
            ? r ||
              e ||
              t ||
              n ||
              l ||
              !o ||
              null != a ||
              i ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(lh, () =>
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
                status: i,
                userTag: a,
                voiceChannel: r,
            } = this.props;
        if (null == l) return null;
        if ((0, N.A)({ activities: t, status: i, applicationStream: n, voiceChannel: r }))
            return (0, s.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, s.jsx)(A.A, { children: t$.Ay.humanizeStatus(i) }),
                    (0, s.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lu.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tr.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, s.jsxs)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, s.jsx)(A.A, { children: t$.Ay.humanizeStatus(i) }),
                      (0, s.jsx)(K.A, { activity: o, emojiClassName: lu.Zg, className: lu.WO }),
                  ],
              })
            : null != i && i !== tr.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, s.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, s.jsx)(b, { text: t$.Ay.humanizeStatus(i) }),
                })
              : a;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: lu.eW,
                          children: (0, s.jsx)(sh.A, {
                              className: a()({ [lu.e8]: null != e }),
                              children: (0, s.jsx)(X.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? Y.G.ANIMATED : Y.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, s.jsx)("div", {
                          className: lu.XP,
                          children: (0, s.jsx)(sd.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, s.jsx)(sG, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, s.jsx)(lg, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: i } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(x.sk, {
                          children: (e) =>
                              (0, s.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(lu.kL, { [lu.UG]: null != n, [lu.bc]: !l, [lu.G5]: i }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, s.jsx)(Z.A, { nameplate: t, hovered: r, placement: q.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, s.jsx)(lx, {
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
                      (0, s.jsx)(ex, {}),
                  ],
              });
    }
}
function lx(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: i,
            serverDeaf: a,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: c,
            webBuildOverride: u,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: h,
            handleToggleSelfDeaf: m,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: x,
            dismissibleContents: C,
            nameplate: E,
            accountContainerRef: v,
            deviceChangedTooltipType: T,
            shouldShowPTTJoinTooltip: j = !1,
            dismissTooltips: _,
            speaking: N,
        } = e,
        S = (0, z.K)(E);
    return (0, s.jsxs)("div", {
        className: lu.Uo,
        style: S,
        children: [
            (0, s.jsx)(s7, {
                accountContainerRef: v,
                selfMute: n,
                serverMute: i,
                suppress: r,
                awaitingRemote: l,
                onMouseEnter: d,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: f,
                iconForeground: null != E ? lu.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: c,
                shouldShowPTTJoinTooltip: j,
                dismissTooltips: _,
                speaking: N,
            }),
            (0, s.jsx)(s$, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: m,
                onContextMenu: g,
                awaitingRemote: l,
                iconForeground: null != E ? lu.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: _,
            }),
            (0, s.jsx)(lc, {
                webBuildOverride: u,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: C.settings,
                iconForeground: null != E ? lu.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function lC(e) {
    let t = (0, u.bG)([n3.A], () => null != n3.A.getChannelId()),
        n = (0, eC.Py)(e),
        s = l.useRef(new h.Ep()),
        [i, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            s.current.start(lf, () => {
                a(!1);
            }));
    }, [t, n]);
    let r = l.useCallback(() => {
        a(!1), s.current.stop();
    }, []);
    return (
        (0, j.l0)(() => {
            s.current.stop();
        }),
        { shouldShowTooltip: i, dismissTooltip: r }
    );
}
function lE() {
    let e = (0, u.bG)([nt.default], () => nt.default.getCurrentUser()),
        t = (0, u.bG)([nA.default], () => nA.default.getId()),
        {
            activities: n,
            streaming: i,
            status: a,
        } = (0, u.cf)([nv.A], () => {
            let e = nv.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tr.$pd.STREAMING;
                    }),
                status: nv.A.getStatus(),
            };
        }),
        r = (0, u.bG)([sn.A], () => sn.A.getAnyStreamForUser(t)),
        c = (0, T.A)({ userId: t }),
        m = (0, u.bG)([n9.A], () => n9.A.getVoiceVolume(t)),
        p = t$.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, u.bG)([n3.A, ss.A], () => {
            let e = n3.A.getChannelId();
            return null != e ? ss.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: A, suppress: x } = (0, n1.A)(f),
        { selfDeaf: E, deaf: v } = (0, n0.A)(f),
        _ = (0, u.bG)([U.A], () => ((0, D.kK)() ? U.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        N = (0, u.bG)([n2.Ay], () => n2.Ay.getSpeakingWhileMuted()),
        S = (0, u.bG)([P.A], () => P.A.isFullscreenInContext()),
        R = (0, u.bG)([si.A], () => si.A.hasLayers()),
        I = (0, C.useModalsStore)(C.hasAnyModalOpenSelector) || R || sc.P.isDisallowPopupsSet() || S,
        y = (0, V.sw)(),
        { userStatusMenu: b } = B.$.useConfig({ location: "Account" }),
        M = (0, eE.A)((e) => e.isOpen),
        k = (0, u.bG)([J.default], () => null != J.default.getAwaitingRemoteSessionInfo()),
        L = (0, u.bG)([sa.A], () => sa.A.getGuildId()),
        F = e?.avatarDecoration,
        G = (0, H.A)(F),
        Q = t$.Ay.useName(e) ?? "",
        { analyticsLocations: z } = (0, O.Ay)(w.A.ACCOUNT),
        q = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: Z } = (0, nZ.c9)(),
        K = (0, u.bG)([nK.A, nt.default, sl.A], () => {
            let e,
                t = nK.A.getSyncingWith(),
                n = nK.A.getActivity(),
                s = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (s = o()(Array.from(sl.A.getParty(e) ?? []))
                        .map((e) => nt.default.getUser(e))
                        .filter(nx.Vq)
                        .value()),
                s.length > 1
            );
        }),
        $ = { avatar: [], settings: [] },
        Y = (0, n$.lX)("AccountCoachmark");
    !I &&
        ($.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        y && b && !M && $.avatar.push(d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK),
        Y && $.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: X, dismissTooltip: ee } = lC(n5.oh.AUDIO_INPUT),
        { shouldShowTooltip: et, dismissTooltip: en } = lC(n5.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: es, dismissTooltip: el } = (function () {
            let [e, t] = l.useState(!1),
                n = (0, u.bG)([n2.Ay], () => n2.Ay.getMode() === n5.TB.PUSH_TO_TALK),
                s = (0, u.bG)(
                    [n3.A],
                    () => null != n3.A.getChannelId() && (n3.A.getDuration() ?? Number.MAX_VALUE) < n4,
                ),
                [i, a] = l.useState(!1),
                { showPTTJoinTooltip: r } = n6.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = l.useRef(new h.Ep()),
                c = l.useRef(new h.Ep());
            l.useEffect(() => {
                if (s && n && !e) {
                    if ((n6.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        c.current.start(n8, () => {
                            t(!1);
                        }),
                        o.current.start(n4, () => {
                            a(!1);
                        });
                }
                s || a(!1);
            }, [s, n, r, e]);
            let d = l.useCallback(() => {
                a(!1), o.current.stop();
            }, []);
            return (
                (0, j.l0)(() => {
                    o.current.stop(), c.current.stop();
                }),
                { shouldShowTooltip: i, dismissTooltip: d }
            );
        })(),
        ei = (function () {
            let { showPTTSpeakingIndicator: e } = n6.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = l.useState(!1),
                s = (0, u.bG)([n2.Ay], () => n2.Ay.getMode() === n5.TB.PUSH_TO_TALK),
                i = (0, u.bG)([n3.A], () => n3.A.getRTCConnectionId()),
                a = (0, u.bG)([n2.Ay], () => {
                    let e = n2.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < st;
                }),
                r = l.useRef(new h.Ep());
            return (
                l.useEffect(() => {
                    n(!1);
                }, [i]),
                l.useEffect(() => {
                    let t = 0,
                        l = r.current;
                    function o(e, s) {
                        let i = (s & n5.ME.VOICE) === n5.ME.VOICE,
                            a = n9.A.isCurrentUserPTTActive();
                        i && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              l.start(se, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && s && null != i && n2.Ay.getMediaEngine().on(n7.bg.VoiceActivity, o),
                        () => {
                            n2.Ay.getMediaEngine().removeListener(n7.bg.VoiceActivity, o), l.stop();
                        }
                    );
                }, [e, s, a, i]),
                t
            );
        })(),
        ea = l.useMemo(() => (X ? "input" : et ? "output" : void 0), [X, et]),
        er = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        ee();
                        break;
                    case "output":
                        en();
                }
            },
            [ee, en],
        );
    return (0, s.jsx)(O.f5, {
        value: z,
        children: (0, s.jsx)(lA, {
            currentUser: e,
            username: Q,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: $,
            userTag: p,
            occluded: I,
            selfDeaf: E,
            selfMute: A,
            serverDeaf: v,
            serverMute: g,
            speaking: c,
            voiceDb: m,
            speakingWhileMuted: N,
            speakingWhilePTTInactive: ei,
            status: a,
            streaming: i,
            suppress: x,
            webBuildOverride: _,
            awaitingRemote: k,
            nameplate: q,
            selectedGuildId: L,
            avatarDecoration: G,
            isQuestBarEmpty: Z,
            isListenAlongVisible: K,
            deviceChangedTooltipType: ea,
            onDismissDeviceChangedTooltip: () => er(ea),
            shouldShowPTTJoinTooltip: es,
            dismissPTTJoinTooltip: el,
        }),
    });
}
