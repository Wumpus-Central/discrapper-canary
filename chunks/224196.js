n.d(t, { g: () => sg, A: () => sC }), n(321073);
var l = n(627968),
    s = n(64700),
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
    N = n(220839),
    _ = n(397244),
    S = n(394871),
    R = n(785651),
    y = n(866323),
    I = n(449450);
function b(e) {
    let { text: t } = e,
        n = (0, y.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, l.jsx)("div", {
        className: I.k,
        children: n((e, t) => (0, l.jsx)(R.animated.div, { className: I.H, style: e, children: t })),
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
    B = n(601255),
    V = n(562819),
    H = n(449582),
    Q = n(351952),
    W = n(88686),
    z = n(174755),
    q = n(302223),
    Z = n(609425),
    K = n(922301),
    $ = n(368919),
    Y = n(643501),
    X = n(534514),
    J = n(834730),
    ee = n(789645),
    et = n(826673),
    en = n(750506),
    el = n(780964),
    es = n(858897),
    ei = n(417146),
    ea = n(552122),
    er = n(717421),
    eo = n(775602),
    ec = n(993843);
let eu = { mass: 10, tension: 550, friction: 140 };
function ed(e) {
    let { className: t, pageMultiplier: n } = e,
        i = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
        [r, c] = s.useState({ x: 0, y: 0 }),
        d = s.useMemo(
            () =>
                o().throttle((e) => {
                    i || c({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, i],
        );
    s.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [h, m] = (0, er.z)(() => ({ x: 0, y: 0, config: eu }));
    return (
        s.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, l.jsx)(R.animated.div, {
            style: { transform: (0, R.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ec.T, t),
        })
    );
}
var eh = n(49999),
    em = n(375708),
    ep = n(275883);
function ef(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: s } = e,
        i = ea.A.useIsEligible(),
        a = (0, et.JZ)(t),
        r = null != n,
        o = null != s ? { color: s } : void 0,
        { analyticsLocations: c } = (0, O.Ay)(w.A.HOLIDAY_COACHMARK),
        u = (e) => {
            (0, et.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, es.openUserSettings)(el.X.NOTIFICATIONS_PANEL, { analyticsLocations: c }), u(eh.i.TAKE_ACTION);
        };
    return i && !a
        ? (0, l.jsx)(en.Ay, {
              children: (0, l.jsxs)("div", {
                  className: ep.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, l.jsxs)("div", {
                              className: ep.o5,
                              children: [
                                  (0, l.jsx)(ed, { className: ep.iL, pageMultiplier: 5 }),
                                  (0, l.jsx)("div", { className: ep.Np }),
                              ],
                          }),
                      (0, l.jsx)("div", { className: ep.c8 }),
                      (0, l.jsxs)("div", {
                          className: ep.Qs,
                          children: [
                              (0, l.jsxs)("div", {
                                  children: [
                                      (0, l.jsx)(X.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "always-white",
                                          style: o,
                                          children: em.intl.string(em.t["6CxPoB"]),
                                      }),
                                      (0, l.jsx)(J.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: em.intl.format(em.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, l.jsx)(
                                                      g.D,
                                                      {
                                                          tag: "span",
                                                          className: ep.nf,
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
                              (0, l.jsx)(g.D, {
                                  className: ep.l2,
                                  onClick: () => u(eh.i.USER_DISMISS),
                                  children: (0, l.jsx)(ee.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eg() {
    return null == ei.A.coachmarkDismissibleContent
        ? null
        : (0, l.jsx)(ef, {
              dismissibleContent: ei.A.coachmarkDismissibleContent,
              backgroundColor: ei.A.coachmarkBackgroundColor,
              specialTextColor: ei.A.coachmarkSpecialTextColor,
          });
}
var eA = n(74848),
    ex = n(607399),
    eC = n(707554),
    eE = n(224640),
    ev = n(305866),
    eT = n(364522),
    ej = n(22231),
    eN = n(133171),
    e_ = n(780338);
if (21552 != n.j) var C = n(192308);
var eS = n(980707),
    eR = n(26137),
    ey = n(473935),
    eI = n(765671),
    eb = n(457965),
    eM = n(176781),
    ew = n(777666),
    eO = n(320448),
    eU = n(993401),
    eD = n(447349);
function eP(e) {
    return (0, l.jsx)("div", {
        className: eD.wE,
        children: (0, l.jsx)(eS.W, {
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
        p = (0, eU.rE)({ action: t, onClick: n }),
        [A, x] = s.useState(!1),
        E = s.useRef(null),
        v = u ?? E,
        T = null != c,
        j = T && m,
        N = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        _ = s.useCallback(() => {
            x(!0);
        }, []),
        S = s.useCallback(() => {
            (0, C.hasAnyModalOpen)() || x(!1);
        }, []),
        R = () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", {
                        className: eD.iA,
                        children: (0, l.jsx)(i, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsxs)("div", {
                        className: eD.$H,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(J.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eD.W1,
                                        children: a,
                                    }),
                                    (0, l.jsx)(J.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                                ],
                            }),
                            o,
                        ],
                    }),
                ],
            }),
        y = (e) => {
            let t;
            return (
                (t = j
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(g.D, {
                                  className: eD.ef,
                                  onClick: p,
                                  focusProps: { offset: { ...N.offset, right: 0 } },
                                  children: R(),
                              }),
                              (0, l.jsx)(g.D, {
                                  className: eD.ap,
                                  "aria-label": em.intl.string(em.t.PdRCRg),
                                  ...e,
                                  onClick: _,
                                  focusProps: N,
                                  children: (0, l.jsx)(eO._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : T
                      ? (0, l.jsxs)(g.D, {
                            className: eD.ef,
                            ...e,
                            onClick: _,
                            focusProps: N,
                            children: [
                                R(),
                                (0, l.jsx)("div", {
                                    className: eD.ap,
                                    children: (0, l.jsx)(eO._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, l.jsx)(g.D, { className: eD.ef, onClick: p, focusProps: N, children: R() })),
                (0, l.jsx)("div", { ref: v, className: eD.jG, children: t })
            );
        };
    return T
        ? (0, l.jsx)("li", {
              className: eD.j$,
              onMouseEnter: _,
              onMouseLeave: S,
              children: (0, l.jsx)(f.Y, {
                  targetElementRef: d ?? v,
                  align: h,
                  spacing: 0,
                  renderPopout: c,
                  shouldShow: A,
                  onRequestClose: S,
                  children: y,
              }),
          })
        : (0, l.jsx)("li", { className: eD.j$, children: y() });
}
function eL(e) {
    let { children: t, "aria-label": n } = e;
    return (0, l.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(734066),
    eG = n(274372),
    eB = n(710315),
    eV = n(271597),
    eH = n(990078),
    eQ = n(315710),
    eW = n(475358),
    ez = n(408278),
    eq = n(625903),
    eZ = n(404778),
    eK = n(689175),
    e$ = n(821609),
    eY = n(532624),
    eX = n(927813),
    eJ = n(975571),
    e0 = n(879631),
    e1 = n(350535),
    e2 = n(372684),
    e3 = n(572164),
    e6 = n(948138),
    e5 = n(890856),
    e8 = n(713517),
    e4 = n(609174),
    e7 = n(353605),
    e9 = n(434320),
    te = n(82716),
    tt = n(585579),
    tn = n(226870),
    tl = n(285072),
    ts = n(316305);
let ti = s.memo(function (e) {
    let { clip: t, isNew: n, onClose: i, className: r } = e,
        o = s.useRef(null),
        { isHoveringOrFocusing: c } = (0, e8.A)(o),
        u = s.useCallback(() => {
            i?.(), (0, eV.p)({ initialEditingClipId: t.id });
        }, [t.id, i]);
    return (0, l.jsx)(e4.Cl, {
        clip: t,
        children: (0, l.jsx)(e5.s, {
            ref: o,
            "aria-label": em.intl.string(em.t.bt75uw),
            onClick: u,
            className: a()(ts.Z1, r),
            children: (0, l.jsxs)(tn.d, {
                isPlaying: !1,
                preload: "metadata",
                children: [
                    n && (0, l.jsx)(ew.Lp, { className: ts.Ad, text: em.intl.string(em.t.y2b7CA) }),
                    (0, l.jsxs)(tl.h, {
                        isVisible: c,
                        className: ts.Lw,
                        children: [
                            (0, l.jsxs)("div", {
                                className: ts.mY,
                                children: [(0, l.jsx)(te.z, {}), (0, l.jsx)(e7.k, {})],
                            }),
                            (0, l.jsxs)("div", {
                                className: ts.E_,
                                children: [(0, l.jsx)(e9.f, { onBeforeEdit: i }), (0, l.jsx)(tt.E, {})],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var ta = n(652215),
    tr = n(753070),
    to = n(16590),
    tc = n(550350);
function tu(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: i, setPopoutRef: a } = e,
        r = (0, u.yK)([eG.A], () => eG.A.getClips()),
        o = (0, u.bG)([eG.A], () => eG.A.getPendingClips()),
        c = (0, u.bG)([eG.A], () => eG.A.getSettings()),
        d = (0, u.bG)([eG.A], () => eG.A.getNewClipIds()),
        h = (0, u.bG)([eY.Ay], () => eY.Ay.getKeybindForAction(ta.hCu.SAVE_CLIP)),
        m = s.useRef(null),
        p = s.useMemo(() => {
            let e = [...o, ...r].filter((e) => e.type === e2.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, o]),
        f = s.useMemo(() => p.slice(0, 16), [p]),
        g = p.length > 16,
        A = null != h ? e1.dI(h.shortcut, !0) : null;
    (0, eQ.t)(m);
    let x = (0, e0.$)(c.clipsLength / eX.A.Millis.SECOND),
        C = (0, tr.zr)(c.clipsQuality.resolution),
        E = em.intl.formatToPlainString(em.t.Qb44XH, { fps: c.clipsQuality.frameRate });
    return (0, l.jsxs)("div", {
        ref: (e) => {
            (m.current = e), a?.(e);
        },
        className: tc.SW,
        role: "dialog",
        "aria-label": em.intl.string(em.t.z2jK6X),
        children: [
            (0, l.jsxs)("div", {
                className: tc.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: tc.$,
                        children: [
                            (0, l.jsx)(X.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: em.intl.string(em.t.z2jK6X),
                            }),
                            null != A && (0, l.jsx)(eW.e, { className: tc.P, shortcut: A }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: tc.$s,
                        children: [
                            (0, l.jsx)(eH.m, {
                                text: em.intl.string(em.t["3D5yo/"]),
                                children: (0, l.jsx)(ez.K, {
                                    onClick: () => n(),
                                    icon: eq.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": em.intl.string(em.t["3D5yo/"]),
                                }),
                            }),
                            (0, l.jsx)(eH.m, {
                                text: em.intl.string(to.default["55C2MH"]),
                                children: (0, l.jsx)(ez.K, {
                                    onClick: () => t(),
                                    icon: eM.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": em.intl.string(to.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(J.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: tc.P6,
                children: [x, C, E].join(" • "),
            }),
            (0, l.jsx)(eZ.c, {}),
            f.length > 0
                ? (0, l.jsxs)(eK.Ch, {
                      className: tc.Vg,
                      fade: !0,
                      disableFocusRingScope: !0,
                      children: [
                          f.map((e) => (0, l.jsx)(ti, { clip: e, isNew: d.includes(e.id), onClose: i }, e.id)),
                          g &&
                              (0, l.jsx)("div", {
                                  className: tc.qr,
                                  children: (0, l.jsx)(e$.$, {
                                      onClick: () => t(),
                                      text: em.intl.string(to.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, l.jsx)(td, { keybindString: A }),
        ],
    });
}
function td(e) {
    let { keybindString: t } = e,
        n = (0, e3.Et)(),
        i = s.useCallback(() => {
            window.open(eJ.A.getArticleURL(ta.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        a = s.useCallback(() => {
            e6.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, l.jsxs)("div", {
        className: tc.p$,
        children: [
            (0, l.jsx)(eM.x, { size: "lg", color: "currentColor", className: tc.Dw }),
            (0, l.jsx)(J.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tc.qO,
                children: em.intl.string(to.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, l.jsx)(J.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: em.intl.format(to.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, l.jsx)(
                                  J.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, l.jsx)(eW.e, { shortcut: t }),
                      }),
                  })
                : (0, l.jsxs)("div", {
                      className: tc.pi,
                      children: [
                          (0, l.jsx)(e$.$, {
                              onClick: i,
                              text: em.intl.string(em.t.hvVgAZ),
                              variant: "secondary",
                              size: "sm",
                          }),
                          (0, l.jsx)(e$.$, {
                              onClick: a,
                              text: em.intl.string(em.t.h8rgrK),
                              variant: "primary",
                              size: "sm",
                          }),
                      ],
                  }),
        ],
    });
}
function th(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        i = (0, eF.sw)(),
        { userStatusMenu: a } = eB.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        r = (0, u.bG)([eG.A], () => eG.A.getNewClipIds().length),
        o = s.useCallback(
            (e) => {
                t(), (0, eV.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        c = s.useCallback(() => {
            t(), (0, es.openUserSettings)(el.X.CLIPS_PANEL);
        }, [t]);
    return i && a
        ? (0, l.jsx)(ek, {
              action: "PRESS_CLIPS",
              icon: eM.x,
              label: em.intl.string(em.t.z2jK6X),
              trailing: r > 0 ? (0, l.jsx)(ew.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, l.jsx)(tu, { ...e, onOpenGallery: o, onOpenSettings: c, onClose: t }),
          })
        : null;
}
var tm = n(480335),
    tp = n(31956),
    tf = n(361628),
    tg = n(744808),
    tA = n(282389),
    tx = n(645507),
    tC = n(970931),
    tE = n(832248),
    tv = n(462887),
    tT = n(736653),
    tj = n(439174),
    tN = n(927578),
    t_ = n(878784),
    tS = n(788868);
function tR() {
    let e = (0, t_.Xb)(),
        t = (0, tN.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tS.sp.length - 1; t >= 0; t--) {
        let l = tS.VD[tS.sp[t]],
            s = new Date(e);
        if ((s.setMonth(e.getMonth() + l.tenureReqNumMonths), s.setHours(s.getHours() + 30), n > s.getTime()))
            if (n - s.getTime() < 6048e5) return l.id;
            else break;
    }
    return null;
}
let ty = {
        [tS.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tS.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tS.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tS.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tS.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tS.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tS.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tS.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tI = {
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
let tM = s.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tw() {
    let e = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
        t = (0, tE.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tR(),
                t = (0, tv.M)((0, tT.Ay)());
            if (null == e) return null;
            let n = ty[e],
                l = tI[e],
                s = {
                    currentBadge: (0, tj.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? l?.dark : l?.light,
                },
                i = tS.sp.indexOf(e);
            if (i > 0) {
                let e = tS.sp[i - 1],
                    n = ty[e];
                (s.prevBadge = (0, tj.e0)(e)), (s.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return s;
        })();
    return e || !t || null == n ? null : (0, l.jsx)(tO, { levelUpData: n });
}
function tO(e) {
    let { levelUpData: t } = e,
        n = s.useRef(null),
        i = s.useCallback(() => {
            tE.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        s.useEffect(() => i, [i]),
        (0, l.jsx)(eQ.O, {
            containerRef: n,
            children: (0, l.jsxs)("div", {
                className: tb.i,
                children: [
                    (0, l.jsx)("div", {
                        className: tb.b,
                        children: (0, l.jsx)(eH.m, {
                            text: em.intl.string(em.t.cpT0Cq),
                            children: (0, l.jsx)(ez.K, {
                                icon: ee.P,
                                variant: "secondary",
                                size: "sm",
                                onClick: i,
                                "aria-label": em.intl.string(em.t.cpT0Cq),
                            }),
                        }),
                    }),
                    (0, l.jsx)(s.Suspense, { fallback: null, children: (0, l.jsx)(tM, { levelUpData: t }) }),
                ],
            }),
        })
    );
}
var tU = n(206835),
    tD = n(183555),
    tP = n(999291),
    tk = n(975732),
    tL = n(718019),
    tF = n(694720),
    tG = n(915614),
    tB = n(744753),
    tV = n(559506),
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
        { trackUserProfileAction: s } = (0, tD.NJ)();
    return tK.p5
        ? (0, l.jsx)(tZ.A, {
              text: em.intl.string(em.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t$.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, l.jsx)(g.D, {
                      ...e,
                      className: a()(tY.c, { [tY.R]: n }),
                      "aria-label": em.intl.string(em.t.y5MwJy),
                      children: (0, l.jsx)(tq.T, { size: "xs", color: "currentColor" }),
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
    t8 = n(477782),
    t4 = n(628284),
    t7 = n(695366),
    t9 = n(363195),
    ne = n(889227),
    nt = n(287809),
    nn = n(174459),
    nl = n(429707),
    ns = n(274303),
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
        [i, a] = s.useState(!1),
        { trackUserProfileEditAction: r } = (0, tD.NJ)(),
        o = (0, u.bG)([nA.default], () => nA.default.getId()),
        c = (function () {
            let e,
                t,
                n = (0, u.bG)([nA.default], () => nA.default.getId()),
                l = (0, nf.A)(n),
                i = s.useMemo(() => l.filter((e) => e instanceof nm.R), [l]),
                a =
                    ((e = (0, eb.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    s.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                r = s.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                o = ((t = (0, nd.A)(r)), s.useMemo(() => t.filter(nx.Vq), [t])),
                { tokens: c, fetched: d } = (0, nc.j)(r),
                h = (0, nu.U9)(o);
            return s.useMemo(() => {
                if (null == a || null == c || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let l = c.find((e) => e.application.id === n.applicationId),
                        s = i.find((e) => e.applicationId === n.applicationId),
                        a = o.find((e) => e.id === n.applicationId),
                        r = h.find((e) => e.context.application.id === n.applicationId);
                    if (null == a) return null;
                    null != l && null == s
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == l &&
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
        : (0, l.jsx)(nh.Ay, {
              contentTypes: c.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: u } = e,
                      h = c.find((e) => e.dismissibleContent === s);
                  if (null == h) return null;
                  let m = "linked" === h.type,
                      p = () =>
                          (0, tk.openUserProfileModal)({ userId: o, tabSection: nC.RP.WIDGETS }).then(() => {
                              u(eh.i.TAKE_ACTION), n();
                          });
                  return (0, l.jsx)(no.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != h.config.editProfileUpsellImage
                              ? { type: "image", src: h.config.editProfileUpsellImage }
                              : void 0,
                      title: em.intl.format(em.t.TXDztH, { applicationName: h.application.name }),
                      body: m ? em.intl.string(em.t["63Kso0"]) : em.intl.string(em.t.HwXoeC),
                      onRequestClose: () => u(eh.i.USER_DISMISS),
                      actions: [
                          m
                              ? {
                                    text: em.intl.string(em.t.VSLDly),
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
                                    text: em.intl.string(em.t["DSJi3+"]),
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
function nN() {
    let e = (0, u.bG)([nv.A], () => nv.A.getStatus()),
        t = (0, t$.MU)(e) ?? "",
        n = e === nT.cl.INVISIBLE || e === nT.cl.OFFLINE;
    return (0, l.jsxs)("div", {
        className: nj.k,
        children: [
            (0, l.jsxs)(A.A, { tag: "div", children: [em.intl.string(em.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, l.jsx)(eH.m, {
                    text: em.intl.string(em.t.L99HQm),
                    children: (0, l.jsx)(t7.E, {
                        size: "xs",
                        color: t5.A.colors.STATUS_WARNING,
                        "aria-label": em.intl.string(em.t.L99HQm),
                    }),
                }),
        ],
    });
}
var n_ = n(841595);
let nS = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nR = n(501838),
    ny = n(760716),
    nI = n(915089),
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
        d = (0, nI.GV)(),
        h = s.useRef(null),
        m = (0, er.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, l.jsx)(R.animated.div, {
        className: a()(nb.kL, c),
        style: m,
        children: (0, l.jsxs)("aside", {
            "aria-labelledby": d,
            className: nb.Qs,
            children: [
                (0, l.jsxs)("div", {
                    className: nb.U1,
                    children: [
                        (0, l.jsx)(g.D, {
                            innerRef: h,
                            "aria-label": em.intl.string(em.t.WAI6xu),
                            className: nb.b,
                            onClick: () => {
                                t(eh.i.USER_DISMISS);
                            },
                            children: (0, l.jsx)(ee.P, { color: "currentColor" }),
                        }),
                        (0, l.jsx)(X.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != i && (0, l.jsx)(J.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
                (0, l.jsx)(eT.Ip, {
                    className: nb.XG,
                    fade: !0,
                    children: (0, l.jsx)("div", { className: a()(nb.gT, u), children: r }),
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
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: s } = e,
        { analyticsLocations: i } = (0, O.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, l.jsxs)(nM, {
              heading: em.intl.string(em.t["vy/61K"]),
              subheading: em.intl.string(em.t.tEee9t),
              markAsDismissed: s,
              className: nD.Zj,
              contentClassName: nD.hQ,
              height: 560,
              children: [
                  (0, l.jsx)(nw.A, {
                      userId: t,
                      analyticsLocations: i,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nD.KN,
                  }),
                  (0, l.jsx)("div", {
                      className: nD.UD,
                      children: (0, l.jsx)(e$.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: em.intl.string(em.t.rg9FQp),
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
                l = (0, u.bG)([nt.default], () => nt.default.getCurrentUser()),
                i = (0, u.bG)([n_.A], () => (null != l ? n_.A.getFirstWishlistId(l.id) : null)),
                a = (0, ny.i)((e) => e.recommendationApplicationIds),
                o = (0, nR.rY)(),
                c = (0, nR.qx)();
            return s.useMemo(
                () => (null != a || (null == i && n) ? (0, r.uniq)([...(a ?? []), ...c, ...o]).sort() : []),
                [n, i, c, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = s.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, l.jsx)(nh.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e;
            return null == i
                ? null
                : s === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, l.jsx)(nk, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nF = n(146901),
    nG = n(827827);
let nB = [
        { duration: 15 * eX.A.Millis.MINUTE, label: () => em.intl.string(em.t["8ot6gv"]) },
        { duration: eX.A.Millis.HOUR, label: () => em.intl.string(em.t.UMWBZr) },
        { duration: 8 * eX.A.Millis.HOUR, label: () => em.intl.string(em.t.EpAXPC) },
        { duration: eX.A.Millis.DAY, label: () => em.intl.string(em.t["755t4q"]) },
        { duration: 3 * eX.A.Millis.DAY, label: () => em.intl.string(em.t["f3/1ch"]) },
        { duration: void 0, label: () => em.intl.string(em.t["46dqJY"]) },
    ],
    nV = "forever";
function nH(e) {
    let { status: t, currentStatus: n, description: s } = e,
        i = t !== ta.clD.ONLINE,
        a = (0, l.jsx)(l.Fragment, {
            children: nB.map((e) => {
                let { duration: s, label: i } = e;
                return (0, l.jsx)(
                    t8.Dr,
                    {
                        id: `${t}-${s}`,
                        label: i(),
                        action: () => (0, nG.A)({ nextStatus: t, prevStatus: n, durationMillis: s }),
                        dontCloseOnAction: !0,
                    },
                    s ?? nV,
                );
            }),
        });
    return (0, l.jsx)(t8.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: i,
        label: (0, t$.MU)(t),
        subtext: s,
        iconLeft: () => (0, l.jsx)(eN.nW, { status: t, size: 10 }),
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
    let { kind: t, dateString: n, timeString: l } = (0, nF._)(e);
    return "today" === t
        ? em.intl.formatToPlainString(em.t.ZxxHIO, { timeString: l })
        : em.intl.formatToPlainString(em.t["9OFjSe"], { dateString: n, timeString: l });
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
        N = __OVERLAY__,
        _ = (0, tP.Ay)(g.id, void 0),
        { analyticsLocations: S } = (0, O.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        R = (0, tD.pb)({ layout: "ACCOUNT_POPOUT", userId: g.id, guildId: void 0 }),
        { ref: y, height: I } = (0, eI.Ay)(),
        { isHoveringOrFocusing: b, isHovering: M } = (0, e8.A)(y);
    s.useEffect(() => {
        E?.(y.current);
    }, [y, E]),
        s.useEffect(
            () => (tE.A.setState({ isOpen: !0 }), () => tE.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let U = (0, u.bG)([t2.A], () => t2.A.getStatus(g.id)),
        D = nQ(t1.CY.useSetting()),
        P = (0, u.bG)([t3.A], () => t3.A.hidePersonalInformation),
        k = (0, tC.kB)(),
        L = t1.Q_.useSetting(),
        F =
            ((t = t1.CY.useSetting()),
            (n = (0, tC.kB)()),
            (i = t1.Jr.useSetting()),
            (r = (e) => {
                let l = nQ(t);
                if (U === e && null != l) return l;
                switch (e) {
                    case ta.clD.DND:
                        return n ? em.intl.string(em.t.day5A6) : em.intl.string(em.t["tq/fMK"]);
                    case ta.clD.INVISIBLE:
                        return em.intl.string(em.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (o = (0, l.jsx)(l.Fragment, {
                children: nB.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, l.jsx)(
                        t8.Dr,
                        {
                            id: `${U}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tC.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nV,
                    );
                }),
            })),
            (c = nH({ status: ta.clD.ONLINE, currentStatus: U })),
            (d = nH({ status: ta.clD.IDLE, currentStatus: U, description: r(ta.clD.IDLE) })),
            (h = nH({ status: ta.clD.DND, currentStatus: U, description: r(ta.clD.DND) })),
            (f = nH({ status: ta.clD.INVISIBLE, currentStatus: U, description: r(ta.clD.INVISIBLE) })),
            (0, l.jsxs)(l.Fragment, {
                children: [
                    c,
                    (0, l.jsx)(t8.bX, {}, "menu-separator-statuses"),
                    d,
                    h,
                    f,
                    n
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(t8.bX, {}, "menu-separator-statuses"),
                                  (0, l.jsx)(
                                      t8.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: em.intl.string(em.t.gJRnwK),
                                          iconLeft: e_.a,
                                          leadingAccessory: { type: "icon", icon: e_.a },
                                          badge: { text: em.intl.string(em.t.ApAu9f) },
                                          subtext:
                                              null != i && "0" !== i
                                                  ? em.intl.format(em.t.BWD8fs, {
                                                        endTime: new Date(Number(i)).toLocaleString(
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
                                              (0, tC.ES)(!n);
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
                s = (0, u.bG)([t9.A], () => (0, tv.M)(t9.A.theme)),
                { multiAccountUsers: i } = (0, ni.K)(),
                a = i.map((i) => {
                    let a = new ne.A(i),
                        r = a.id === t?.id,
                        o = i.tokenStatus === ns.U.INVALID,
                        c = n ? null : `#${a.discriminator}`;
                    return (0, l.jsx)(
                        t8.Dr,
                        {
                            id: a.id,
                            focusedClassName: nr.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, l.jsxs)("div", {
                                    className: nr.ci,
                                    children: [
                                        (0, l.jsx)(m.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": i.username,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: nr.DD,
                                            children: [
                                                (0, l.jsx)(J.E, {
                                                    className: nr.gE,
                                                    variant: "text-sm/normal",
                                                    children: t$.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, l.jsx)(J.E, {
                                                        className: nr.df,
                                                        variant: "text-sm/normal",
                                                        children: c,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, l.jsx)(t4.y, {
                                                size: "sm",
                                                color: t
                                                    ? t5.A.unsafe_rawColors.WHITE.css
                                                    : t5.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? t5.A.unsafe_rawColors.BRAND_500.css
                                                        : t5.A.unsafe_rawColors.WHITE.css,
                                                className: nr.s0,
                                            }),
                                        o &&
                                            (0, l.jsx)(t7.E, {
                                                color: t5.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
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
                                        (nn.default.track(ta.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: ta.JJy.USER_PROFILE },
                                        }),
                                        nl.Mx(n));
                                }
                            },
                        },
                        a.id,
                    );
                });
            return (
                a.push(
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(t8.bX, {}),
                            (0, l.jsx)(t8.Dr, {
                                id: "manage-accounts",
                                label: em.intl.string(em.t.WbFpq4),
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
        B = (0, tU.A)({ analyticsLocations: S }),
        V = (0, tN.TW)(g),
        H = s.useRef(null),
        Q = s.useRef(null),
        W = (0, tf.A)(_?.profileFrame?.skuId, "UserProfileAccountPopout"),
        z = (0, tA.A)(_?.profileFrame?.skuId);
    (0, tp.A)({ skuId: _?.profileFrame?.skuId, openedAt: T, context: R, analyticsLocations: S });
    let q = s.useRef((0, tE.A)((e) => e.shouldRenderTenureLevelUp)),
        Z = s.useMemo(() => (0, tx.A)(), []),
        [K, $] = s.useState(() => tE.A.getState().shouldRenderTenureLevelUp);
    s.useEffect(() => {
        let e = setTimeout(() => {
            $(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Y = (e) => {
            x?.(), (0, tk.openUserProfileModal)({ customStatusPrompt: Z, sourceAnalyticsLocations: S, ...R, ...e });
        },
        X = _?.widgets != null && _.widgets.length > 0,
        ee = s.useCallback(() => {
            x();
        }, [x]),
        et = s.useCallback(() => {
            B(), ee();
        }, [B, ee]),
        en = (0, eb.QR)({ location: "UserProfileAccountPopout" }),
        el = (0, eb.zd)({ location: "UserProfileAccountPopout" }),
        es = s.useId();
    return (0, l.jsx)(O.f5, {
        value: S,
        children: (0, l.jsx)(tD.of, {
            value: R,
            openedAt: T,
            fetchStartedAt: _?.fetchStartedAt,
            fetchEndedAt: _?.fetchEndedAt,
            isLoaded: _?.isLoaded,
            children: (0, l.jsxs)(ev.l, {
                ref: y,
                "aria-labelledby": es,
                className: a()(eD.jC, j),
                "data-layer": "base",
                children: [
                    (0, l.jsx)(A.A, {
                        children: (0, l.jsx)(eC.H, { id: es, children: em.intl.string(em.t["5fWB8U"]) }),
                    }),
                    (0, l.jsxs)(eC.F, {
                        children: [
                            (0, l.jsx)(nL, { displayProfile: _, handleOpenUserProfileModal: Y, height: I }),
                            (0, l.jsxs)(tW.A, {
                                className: a()(eD.BK, z),
                                user: g,
                                displayProfile: _,
                                themeType: nW.d.POPOUT,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: nz.wx,
                                        children: [
                                            (0, l.jsx)(tG.A, { user: g, displayProfile: _, themeType: nW.d.POPOUT }),
                                            (0, l.jsx)(tL.A, {
                                                user: g,
                                                displayProfile: _,
                                                themeType: nW.d.POPOUT,
                                                onOpenProfile: N ? void 0 : Y,
                                            }),
                                            (0, l.jsx)(tJ.A, {
                                                ref: H,
                                                user: g,
                                                themeType: nW.d.POPOUT,
                                                onCloseProfile: x,
                                                prompt: Z,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(eT.Ip, {
                                        className: eD.rf,
                                        style: { pointerEvents: K ? "none" : void 0 },
                                        children: [
                                            (0, l.jsx)(tV.A, { userId: g.id }),
                                            (0, l.jsx)(tz.Ay, {
                                                className: eD.eF,
                                                user: g,
                                                displayName: t6.Ay.getName(void 0, null, g),
                                                onClickName: N ? void 0 : Y,
                                                displayNameTrailing: (0, l.jsx)(tX, { user: g, isVisible: b }),
                                                pronouns: _?.pronouns,
                                                trailing: (0, l.jsx)(tF.A, {
                                                    displayProfile: _,
                                                    themeType: nW.d.POPOUT,
                                                    onClose: x,
                                                    shouldOpenBadgeTooltip: null != v ? (e) => e === v : void 0,
                                                    shouldGlowTenureBadge: q.current,
                                                }),
                                            }),
                                            (0, l.jsx)(tB.A, { isPremiumUser: V, onInteraction: x }),
                                            (0, l.jsx)(t0.A, {
                                                user: g,
                                                bio: _?.bio,
                                                hidePersonalInformation: P,
                                                onClose: x,
                                            }),
                                            X &&
                                                (0, l.jsx)(tQ.A, {
                                                    user: g,
                                                    widgets: _?.widgets,
                                                    onOpenUserProfileModal: Y,
                                                }),
                                            (0, l.jsx)(tH.A, {
                                                user: g,
                                                currentUser: g,
                                                onOpenUserProfileModal: Y,
                                                onClose: x,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: eD.T_,
                                                children: [
                                                    (0, l.jsx)(tW.A.Overlay, {
                                                        className: eD.g0,
                                                        children: (0, l.jsxs)(eL, {
                                                            children: [
                                                                (0, l.jsx)(ek, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: em.intl.string(em.t.s5vZlQ),
                                                                    icon: ej.R,
                                                                    onClick: et,
                                                                    ref: Q,
                                                                }),
                                                                (0, l.jsx)(ek, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, l.jsx)(nN, {}),
                                                                    sublabel: null != D && D,
                                                                    icon: () =>
                                                                        (0, l.jsx)(eN.nW, { status: U, size: 12 }),
                                                                    trailing:
                                                                        (k || U === ta.clD.DND) &&
                                                                        (0, l.jsx)(e_.a, { size: "xxs" }),
                                                                    renderSubmenu: ex.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, l.jsx)(eP, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eD.hQ,
                                                                                  "aria-label": em.intl.string(
                                                                                      em.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: ex.Fr
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
                                                                                                  return (0, l.jsx)(
                                                                                                      eE.d,
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
                                                                                                          l.jsx)(eS.W, {
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
                                                                (0, l.jsx)(th, { onClose: x, popoutContainerRef: y }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, l.jsx)(tW.A.Overlay, {
                                                        className: eD.g0,
                                                        children: (0, l.jsxs)(eL, {
                                                            children: [
                                                                (0, l.jsx)(ek, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eR.r,
                                                                    label: em.intl.string(em.t.oMNyYN),
                                                                    onClick: () => {
                                                                        x(), (0, na.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, l.jsx)(eP, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": em.intl.string(em.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: G,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tK.p5 &&
                                                                    L &&
                                                                    (0, l.jsx)(ek, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: ey.L,
                                                                        label: em.intl.string(em.t["/AXYnE"]),
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
                                    _?.profileEffect != null &&
                                        !q.current &&
                                        (0, l.jsx)(tm.A, { skuId: _.profileEffect.skuId, isHovering: M }),
                                    null != W && (0, l.jsx)(tg.A, { frame: W }),
                                ],
                            }),
                            en && el ? (0, l.jsx)(nE, { targetElementRef: Q, onClose: x }) : null,
                            (0, l.jsx)(tw, {}),
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
    nJ = n(533488),
    n0 = n(167579),
    n1 = n(173660),
    n2 = n(51760),
    n3 = n(763827),
    n6 = n(499156),
    n5 = n(731854);
let n8 = 2.5 * eX.A.Millis.SECOND,
    n4 = +eX.A.Millis.HOUR;
var n7 = n(459838),
    n9 = n(485296);
let le = 3 * eX.A.Millis.SECOND,
    lt = +eX.A.Millis.DAY;
var ln = n(616356),
    ll = n(734057),
    ls = n(629016),
    li = n(186111),
    la = n(967198),
    lr = n(486020),
    lo = n(625494),
    lc = n(536194),
    lu = n(19575),
    ld = n(994314),
    lh = n(485599),
    lm = n(626584),
    lp = n(531685),
    lf = n(259065),
    lg = n(864386);
let lA = new lm.A("DisplayNameStylesCoachmark");
function lx(e) {
    let { markAsDismissed: t, targetElementRef: n, children: i } = e,
        { analyticsLocations: a } = (0, O.Ay)(),
        r = (0, s.useRef)(null),
        o = (0, u.bG)([lp.A], () => lp.A.isFocused()),
        c = (0, s.useCallback)(() => {
            t(eh.i.TAKE_ACTION),
                (0, es.openUserSettings)(el.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, lf.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, s.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]);
    return (
        (0, s.useEffect)(() => {
            o && r.current?.paused ? r.current?.play().catch(lA.error) : o || r.current?.pause();
        }, [o]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                i,
                (0, l.jsx)(no.A, {
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
                    title: em.intl.string(lg.default["1AE464"]),
                    body: [em.intl.string(lg.default.cNc1g9), em.intl.string(em.t["4JNXHG"])],
                    actions: [{ text: em.intl.string(em.t.uw9zI7), variant: "primary", onClick: c }],
                }),
            ],
        })
    );
}
var lC = n(131607),
    lE = n(45780),
    lv = n(696451),
    lT = n(71393),
    lj = n(685073),
    lN = n(228366);
let l_ = { lastSeenInfos: {} },
    lS = l_;
class lR extends u.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        lS = e ?? l_;
    }
    getState() {
        return lS;
    }
    getGuildLastSeenInfo(e) {
        return lS.lastSeenInfos[e] ?? null;
    }
}
let ly = new lR(lN.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        lS.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        lS = l_;
    },
});
var lI = n(116833),
    lb = n(514661);
let lM = new lm.A("GuildTagAvailableCoachmark");
function lw(e) {
    let t = (0, u.bG)([lT.A], () => lT.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            lN.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: s, onAdoptTag: i, onEditProfile: a } = (0, lb.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, lj.q0)(t))
        return lM.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: em.intl.string(em.t.jwEaiX), loading: s, onClick: i, variant: "primary" },
        { text: em.intl.string(em.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(no.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lI.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: em.intl.formatToPlainString(em.t["m/Tc3n"], { guildName: t.name }),
                body: em.intl.string(em.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
function lO(e) {
    let t = (0, u.bG)([lT.A], () => lT.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: s, onAdoptTag: i, onEditProfile: a } = (0, lb.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, lj.q0)(t))
        return lM.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: em.intl.string(em.t.jwEaiX), loading: s, onClick: i, variant: "primary" },
        { text: em.intl.string(em.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(no.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lI.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: em.intl.formatToPlainString(em.t.VFqnyU, { guildName: t.name }),
                body: em.intl.string(em.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
var lU = n(904481),
    lD = n(764231),
    lP = n(425713);
function lk(e) {
    let { groupName: t, targetElementRef: n } = e,
        s = tR(),
        i = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
        a = (0, tE.A)((e) => e.isOpen),
        r = (0, lU.G)();
    return i || null == s || a || r
        ? null
        : (0, l.jsx)(nh.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: i } = e;
                  return (0, l.jsx)(lL, {
                      recentlyLeveledTenureBadge: s,
                      markAsDismissed: i,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function lL(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: i, shouldShow: a } = e,
        r = tS.sp.indexOf(t),
        o = (0, lP.I)(tS.sp[r > 0 ? r - 1 : r]).ambient,
        c = (0, s.useCallback)(() => {
            n(eh.i.TAKE_ACTION),
                tE.A.setState({ shouldRenderTenureLevelUp: !0 }),
                lo._.dispatch(ta.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        u = (0, s.useCallback)(() => {
            n(eh.i.USER_DISMISS);
        }, [n]),
        d = tS.VD[t],
        h = em.intl.formatToPlainString(em.t.ewkaVR, {
            timeMilestone: (0, lD.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: em.intl.string(em.t.RzWDqY), variant: "primary", onClick: c }];
    return (0, l.jsx)(no.A, {
        targetElementRef: i,
        onRequestClose: u,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: em.intl.string(em.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function lF(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nZ.c9)(),
        s = null != e.targetElementRef.current && t && n,
        [i, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = (0, lE.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ta.dJq),
                s = (0, u.bG)([lT.A, nt.default, lv.Ay], () => {
                    if (null === e) return !1;
                    let t = lT.A.getGuild(e);
                    if (void 0 === t || !(0, lj.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nt.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let l = lv.Ay.getMember(e, n.id);
                    return null != l && !l.isPending;
                }, [e]);
            return (0, lC.ww)(s && n && !l ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? ta.eGj);
        })(e.guildId, { shouldShow: s }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = e?.primaryGuild,
                s = l?.identityGuildId ?? null,
                i = (0, u.bG)([ly], () => (null === s ? null : ly.getGuildLastSeenInfo(s))),
                a = (0, u.bG)([lT.A], () => lT.A.getGuild(s)?.profile?.tag),
                r = null != a && l?.identityGuildId === s && l?.tag === null,
                o = null != s && i?.tag === a,
                c = null !== s && r && !o;
            return (0, lC.Wl)(c && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: s });
    return s
        ? i === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, l.jsx)(lO, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, l.jsx)(lw, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(lk, { groupName: eh.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, l.jsx)(nh.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: eh.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: s } = t;
                                return n === d.M.DISPLAY_NAME_STYLES_COACHMARK
                                    ? (0, l.jsx)(lx, {
                                          markAsDismissed: s,
                                          targetElementRef: e.targetElementRef,
                                          children: e.children,
                                      })
                                    : e.children;
                            },
                        }),
                    ],
                })
        : e.children;
}
var lG = n(615675),
    lB = n(900797),
    lV = n(847374),
    lH = n(348858),
    lQ = n(617354),
    lW = n(206018),
    lz = n(42473),
    lq = n(490704),
    lZ = n(967194);
function lK(e) {
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
        } = (0, lH.I)(h ? "undeafen" : "deafen"),
        x = n ? lG.T : m,
        { name: C } = (0, eA.x5)(n5.oh.AUDIO_OUTPUT),
        E = (0, lQ.A)(t, n, i),
        { analyticsLocations: v } = (0, O.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        T = s.useRef(null);
    return (
        s.useEffect(() => () => p(), [h, p]),
        (0, l.jsx)(O.f5, {
            value: v,
            children: (0, l.jsx)(f.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, l.jsx)(O.f5, {
                            value: v,
                            children: (0, l.jsx)(lW.A, {
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
                    let { onClick: s } = e,
                        { isShown: d } = t,
                        m = d ? lB.t : lV.a;
                    return (0, l.jsxs)("div", {
                        ref: T,
                        className: a()(lq.Lh, { [lq.v8]: h, [lq.q6]: d }),
                        children: [
                            (0, l.jsx)(lz.A, {
                                "aria-checked": h,
                                "aria-label": em.intl.string(em.t.wjcRFX),
                                className: lq.eT,
                                disabled: i,
                                icon: (0, l.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? lZ.o : void 0,
                                innerClassName: a()({ [lZ.T]: n }),
                                onClick: r,
                                onContextMenu: s,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != c,
                                redGlow: h,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, l.jsx)(lz.A, {
                                className: a()(lq.UT, { [lq.q6]: d }),
                                disabled: i,
                                icon: (0, l.jsx)(m, {
                                    className: lq.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != c,
                                redGlow: h,
                                tooltipType: u ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: u,
                                tooltipPositionKey: u
                                    ? em.intl.formatToPlainString(em.t["f+DDY/"], { outputDeviceName: C })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: u
                                    ? em.intl.format(em.t["f+DDY/"], { outputDeviceName: C })
                                    : em.intl.string(em.t.aA4Vce),
                                "aria-label": u
                                    ? em.intl.formatToPlainString(em.t["f+DDY/"], { outputDeviceName: C })
                                    : em.intl.string(em.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var l$ = n(666654),
    lY = n(523875),
    lX = n(993719);
let lJ = {};
class l0 extends u.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lJ[e] ?? !1;
    }
}
let l1 = new l0(lN.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lJ[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lJ[t] = !1;
    },
});
var l2 = n(362823),
    l3 = n(980923),
    l6 = n(224585),
    l5 = n(949341),
    l8 = n(973324);
function l4(e) {
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
        N = (0, u.bG)([n2.Ay], () => n2.Ay.getSettings().modeOptions.shortcut),
        _ = (0, u.bG)([l1], () => l1.getIsTutorialActive(l2.v.MUTE_TUTORIAL)),
        S = (0, u.bG)([n3.A], () => null != n3.A.getChannelId()),
        { name: R } = (0, eA.x5)(n5.oh.AUDIO_INPUT),
        { enabledInputProfiles: y } = (0, nJ.d)({ location: "MicrophoneButton" }),
        I = s.useRef(null),
        b = n || r || i,
        M = (0, lY.L)(b ? "unmute" : "mute"),
        { analyticsLocations: U } = (0, O.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: D, events: P, play: k } = M,
        L = i || r ? l$.O : D;
    s.useEffect(() => () => k(), [b, k]);
    let F = (0, l3.A)(n, i, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: em.intl.string(em.t["29gnR4"]), tooltipForceOpen: !0 }
        : C || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: em.intl.format(em.t.c1qUOQ, { keybind: e1.dI(N).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let B = T && j && S,
        V = b ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
        H = s.useCallback(() => {
            m(), _ && lX.N(l2.v.MUTE_TUTORIAL);
        }, [m, _]);
    return (0, l.jsxs)(O.f5, {
        value: U,
        children: [
            (0, l.jsx)(f.Y, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, l.jsx)(O.f5, {
                            value: U,
                            children: (0, l.jsx)(lW.A, {
                                onInteraction: (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                    let { onClick: s } = e,
                        { isShown: i } = n,
                        r = i ? lB.t : lV.a;
                    return (0, l.jsxs)("div", {
                        ref: I,
                        className: a()(lq.Lh, { [lq.v8]: b, [lq.q6]: i }),
                        children: [
                            (0, l.jsx)(lz.A, {
                                "aria-checked": b,
                                "aria-label": em.intl.string(em.t.w4m945),
                                className: lq.eT,
                                disabled: o,
                                icon: (0, l.jsx)(L, { size: "custom", width: 20, height: 20, color: V, className: c }),
                                onClick: H,
                                onContextMenu: s,
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
                                children: B ? (0, l.jsx)("div", { className: a()(l5.U, { [l5.z]: v }) }) : null,
                            }),
                            (0, l.jsx)(lz.A, {
                                "aria-label": x
                                    ? em.intl.formatToPlainString(em.t["18wnuD"], { inputDeviceName: R })
                                    : em.intl.string(em.t.fRzCbB),
                                className: a()(lq.UT, { [lq.q6]: i }),
                                disabled: o,
                                icon: (0, l.jsx)(r, {
                                    className: lq.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: V,
                                }),
                                onClick: s,
                                onContextMenu: s,
                                onMouseEnter: d,
                                onMouseLeave: h,
                                plated: null != p,
                                redGlow: b,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? em.intl.formatToPlainString(em.t["18wnuD"], { inputDeviceName: R })
                                    : void 0,
                                tooltipShouldShow: !i,
                                tooltipText: x
                                    ? em.intl.format(em.t["18wnuD"], { inputDeviceName: R })
                                    : em.intl.string(em.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, l.jsx)(no.A, {
                targetElementRef: I,
                shouldShow: _,
                graphic: { type: "image", src: l8.A },
                onRequestClose: () => {
                    lX.N(l2.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: em.intl.string(l6.default.VG4zAf),
                body: em.intl.string(l6.default["8VIRzR"]),
            }),
        ],
    });
}
var l7 = n(935399),
    l9 = n(505312),
    se = n(848847),
    st = n(88001),
    sn = n(466919),
    sl = n(438705);
let ss = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        a = s.useCallback(() => {
            i(), (0, es.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL);
        }, [i]);
    return (0, l.jsx)(no.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: sl },
        shouldShow: n,
        title: em.intl.format(sn.default.bx8sR9, { premiumGroupProductName: (0, st.DP)() }),
        body: em.intl.format(sn.default.Pw4OFZ, { premiumGroupProductName: (0, st.DP)() }),
        onRequestClose: i,
        actions: [{ text: em.intl.string(sn.default.DD26QR), onClick: a }],
    });
};
var si = n(873298),
    sa = n(840387);
function sr(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, sa.Z)(),
        a = t1.KP.useSetting(),
        r = i && a !== si.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, s.useCallback)(() => {
            t(eh.i.TAKE_ACTION), (0, es.openUserSettings)(el.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        c = (0, s.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]),
        u = r
            ? a === si.KP.FRIENDS_ONLY
                ? em.intl.string(em.t["/hogEy"])
                : em.intl.string(em.t["6hEfm1"])
            : em.intl.string(em.t.bnNxW1);
    return (0, l.jsx)(no.A, {
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
        title: em.intl.string(em.t.Ve4nS1),
        body: u,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: em.intl.string(em.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function so(e) {
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
        h = s.useRef(null),
        [m, p] = s.useState(!1);
    (0, l7.Ay)(() => {
        let e = () => p(!0);
        return (
            lo._.subscribe(ta.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                lo._.unsubscribe(ta.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = s.useCallback(() => {
        p(!1), a();
    }, [a]);
    t = null != i ? em.intl.formatToPlainString(em.t.Gzh6ZP, { webBuildOverride: i.id }) : em.intl.string(em.t.cduTBL);
    let g = eq.Z,
        A = (0, l9.w)();
    return (
        (g = null != i ? se.H : A.Component),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(lz.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": em.intl.string(em.t.cduTBL),
                    icon: (0, l.jsx)(g, { size: "refresh_sm", color: "currentColor", className: c }),
                    ...A.events,
                    plated: null != u,
                }),
                (0, l.jsx)(ss, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, l.jsx)(nh.Ay, {
                    contentTypes: o,
                    groupName: eh.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, l.jsx)(sr, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var sc = n(489902);
let su = lu.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    sd = 2.5 * eX.A.Millis.SECOND,
    sh = 2 * eX.A.Millis.MINUTE,
    sm = 2 * eX.A.Millis.MINUTE,
    sp = 5 * eX.A.Millis.SECOND;
function sf(e) {
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
        C = s.useRef(null),
        E = t ?? C,
        T = (0, lr.F_)({ avatarDecoration: A, size: (0, V.Te)(p._3.SIZE_32) }),
        j = (0, Z.A)(),
        {
            updateOpenPopoutRef: _,
            highlightBadge: S,
            setHighlightBadge: R,
        } = (function () {
            let e = s.useRef(null),
                t = s.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, l] = s.useState(),
                [i, a] = s.useState(!1);
            return (
                (0, N.A)(() => a(!0), 750),
                s.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && l(n), e.current?.();
                    };
                    return (
                        lo._.subscribe(ta.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            lo._.unsubscribe(ta.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: i ? n : void 0, setHighlightBadge: l }
            );
        })(),
        y = (0, Q.K)(m);
    return null == o
        ? null
        : (0, l.jsx)(v.A, {
              object: ta.ZSU.AVATAR,
              children: (0, l.jsx)(nX.A, {
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
                      let { closePopout: n, setPopoutRef: s } = e;
                      return (0, l.jsx)(nq, {
                          currentUser: o,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: s,
                          className: sc.dI,
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
                      _(e);
                      let { onMouseEnter: t, onMouseDown: s, ...d } = e;
                      return (0, l.jsxs)("div", {
                          ref: E,
                          style: y,
                          onMouseEnter: t,
                          onMouseDown: s,
                          onClick: (t) => {
                              e.onClick?.(t), u?.(t);
                          },
                          className: a()(sc.Q9, { [sc.ZQ]: null != m }),
                          children: [
                              (0, l.jsx)(g.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), u?.(t);
                                  },
                                  "aria-label": em.intl.string(em.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: sc.$n,
                                  "data-jump-section": x,
                              }),
                              (0, l.jsx)(su, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? ta.clD.STREAMING : c,
                                  isSpeaking: n,
                                  voiceDb: i,
                                  className: sc.my,
                                  "aria-hidden": !0,
                              }),
                              (0, l.jsx)("div", { className: sc.oM, children: h(j) }),
                          ],
                      });
                  },
              }),
          });
}
class sg extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new c.A(sm, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = s.createRef();
    avatarWithPopoutRef = s.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: l } = e,
            { speakingWhileMuted: s, occluded: i, speakingWhilePTTInactive: a } = this.props;
        i !== l && this.handleOccludedChanged(),
            s !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, L.A)(e, t, ta.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, ta.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n3.A.isConnected() ? (0, es.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL) : (0, es.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("31483"),
                    n.e("9396"),
                    n.e("6305"),
                    n.e("62631"),
                    n.e("52204"),
                    n.e("90261"),
                    n.e("25610"),
                    n.e("17956"),
                    n.e("51404"),
                    n.e("84069"),
                    n.e("83721"),
                    n.e("93918"),
                    n.e("99961"),
                    n.e("31688"),
                    n.e("69273"),
                    n.e("19051"),
                    n.e("77083"),
                    n.e("63009"),
                    n.e("16933"),
                    n.e("7293"),
                    n.e("45650"),
                    n.e("76007"),
                    n.e("93880"),
                    n.e("29946"),
                    n.e("22995"),
                    n.e("79705"),
                    n.e("32245"),
                    n.e("76032"),
                    n.e("78220"),
                    n.e("5877"),
                    n.e("33957"),
                    n.e("12648"),
                    n.e("15251"),
                    n.e("4469"),
                    n.e("42743"),
                    n.e("74748"),
                    n.e("61448"),
                    n.e("25189"),
                    n.e("6619"),
                    n.e("85594"),
                    n.e("65666"),
                    n.e("2925"),
                    n.e("79093"),
                    n.e("28510"),
                    n.e("19032"),
                    n.e("3840"),
                    n.e("34087"),
                    n.e("4981"),
                    n.e("24685"),
                    n.e("71018"),
                    n.e("74540"),
                    n.e("92793"),
                    n.e("32292"),
                    n.e("23309"),
                    n.e("54316"),
                    n.e("69679"),
                    n.e("93327"),
                    n.e("93998"),
                    n.e("15086"),
                    n.e("44590"),
                    n.e("90217"),
                    n.e("61529"),
                    n.e("70613"),
                    n.e("8996"),
                    n.e("76160"),
                    n.e("23924"),
                    n.e("71470"),
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
                    n.e("96643"),
                    n.e("94493"),
                    n.e("92789"),
                    n.e("47834"),
                    n.e("30938"),
                    n.e("19551"),
                    n.e("84569"),
                    n.e("74016"),
                    n.e("50689"),
                    n.e("7743"),
                    n.e("45959"),
                    n.e("60658"),
                    n.e("18573"),
                    n.e("55936"),
                    n.e("31988"),
                    n.e("39667"),
                    n.e("5812"),
                    n.e("26073"),
                    n.e("34303"),
                    n.e("28866"),
                    n.e("1368"),
                    n.e("8304"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("37506"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("81987"),
                    n.e("50417"),
                    n.e("91737"),
                    n.e("34552"),
                    n.e("93103"),
                    n.e("91763"),
                    n.e("76602"),
                    n.e("28229"),
                    n.e("21921"),
                    n.e("68403"),
                    n.e("7170"),
                    n.e("76418"),
                    n.e("91007"),
                    n.e("43437"),
                    n.e("82263"),
                    n.e("40258"),
                    n.e("66495"),
                    n.e("88342"),
                    n.e("86127"),
                    n.e("42724"),
                    n.e("39970"),
                    n.e("6174"),
                    n.e("91146"),
                    n.e("8555"),
                    n.e("46070"),
                    n.e("42451"),
                    n.e("98965"),
                    n.e("72789"),
                    n.e("6949"),
                    n.e("17249"),
                    n.e("88599"),
                    n.e("35027"),
                    n.e("53917"),
                    n.e("62422"),
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
                    n.e("86814"),
                    n.e("75842"),
                    n.e("20590"),
                    n.e("25949"),
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
                    n.e("64850"),
                    n.e("32756"),
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
                    n.e("72401"),
                    n.e("2698"),
                    n.e("62875"),
                    n.e("4744"),
                    n.e("79332"),
                    n.e("5500"),
                    n.e("501"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("86243"),
                    n.e("32209"),
                    n.e("39171"),
                    n.e("37021"),
                    n.e("66376"),
                    n.e("36564"),
                    n.e("50033"),
                    n.e("71268"),
                    n.e("63645"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("44780"),
                    n.e("5636"),
                    n.e("36487"),
                    n.e("834"),
                    n.e("5557"),
                    n.e("59957"),
                    n.e("83952"),
                    n.e("95340"),
                    n.e("62718"),
                    n.e("97659"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("61156"),
                    n.e("91671"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("68763"),
                    n.e("16767"),
                    n.e("48786"),
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
                    n.e("59466"),
                    n.e("8829"),
                    n.e("19193"),
                    n.e("36877"),
                    n.e("97073"),
                    n.e("75133"),
                    n.e("1243"),
                    n.e("96804"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("10943"),
                    n.e("15920"),
                    n.e("37977"),
                    n.e("42234"),
                    n.e("66783"),
                    n.e("58164"),
                    n.e("21930"),
                    n.e("3930"),
                    n.e("44057"),
                    n.e("3663"),
                    n.e("11617"),
                    n.e("74678"),
                    n.e("37490"),
                    n.e("81189"),
                    n.e("92077"),
                    n.e("66580"),
                    n.e("80093"),
                    n.e("12965"),
                    n.e("203"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("26294"),
                    n.e("78601"),
                    n.e("89523"),
                    n.e("80407"),
                    n.e("42726"),
                    n.e("34546"),
                    n.e("29260"),
                    n.e("41701"),
                    n.e("40204"),
                    n.e("77467"),
                    n.e("47057"),
                    n.e("60989"),
                    n.e("79435"),
                    n.e("12682"),
                    n.e("68083"),
                    n.e("3710"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("49013"),
                    n.e("51892"),
                    n.e("20965"),
                    n.e("41838"),
                    n.e("45830"),
                    n.e("39894"),
                    n.e("46045"),
                    n.e("755"),
                    n.e("33448"),
                    n.e("73122"),
                    n.e("42324"),
                    n.e("94607"),
                    n.e("8979"),
                    n.e("77602"),
                    n.e("95602"),
                    n.e("5896"),
                    n.e("31335"),
                    n.e("29569"),
                    n.e("96480"),
                    n.e("82178"),
                    n.e("4736"),
                    n.e("43114"),
                    n.e("79593"),
                    n.e("33771"),
                    n.e("14875"),
                    n.e("86300"),
                    n.e("41706"),
                    n.e("62175"),
                    n.e("84586"),
                    n.e("94888"),
                    n.e("66523"),
                    n.e("89541"),
                    n.e("46039"),
                    n.e("89545"),
                    n.e("81202"),
                    n.e("46149"),
                    n.e("63497"),
                    n.e("27462"),
                    n.e("22455"),
                    n.e("60816"),
                    n.e("68031"),
                    n.e("97162"),
                    n.e("44727"),
                    n.e("10147"),
                    n.e("6627"),
                    n.e("90274"),
                    n.e("86546"),
                    n.e("84704"),
                    n.e("99053"),
                    n.e("46327"),
                    n.e("28011"),
                    n.e("15057"),
                    n.e("75284"),
                    n.e("62318"),
                    n.e("3590"),
                    n.e("64926"),
                    n.e("50541"),
                    n.e("53983"),
                    n.e("37886"),
                    n.e("23324"),
                    n.e("25013"),
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
                    n.e("17823"),
                    n.e("24564"),
                    n.e("34428"),
                    n.e("35476"),
                    n.e("39721"),
                    n.e("8508"),
                    n.e("14334"),
                    n.e("76892"),
                    n.e("98660"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("33204"),
                    n.e("71811"),
                    n.e("39967"),
                    n.e("38249"),
                    n.e("88918"),
                    n.e("85216"),
                    n.e("26359"),
                    n.e("83102"),
                    n.e("65306"),
                    n.e("2552"),
                    n.e("89588"),
                    n.e("33314"),
                    n.e("24084"),
                    n.e("44790"),
                    n.e("44264"),
                    n.e("14753"),
                    n.e("14451"),
                    n.e("7755"),
                    n.e("83259"),
                    n.e("50590"),
                    n.e("54658"),
                    n.e("31828"),
                    n.e("71790"),
                    n.e("81754"),
                    n.e("76871"),
                    n.e("33049"),
                    n.e("36474"),
                    n.e("28638"),
                    n.e("71586"),
                ]).then(n.bind(n, 410681));
                return (t) =>
                    (0, l.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, G.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("90274"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, nJ.d)({ location: "Account" });
                    return (0, l.jsx)(O.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
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
                let { default: e } = await Promise.all([n.e("90274"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, l.jsx)(O.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
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
                speakingWhileMuted: l,
                occluded: s,
                shouldShowPTTJoinTooltip: i,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > sh;
        l
            ? r ||
              !e ||
              t ||
              n ||
              s ||
              !o ||
              null != a ||
              i ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(sd, () =>
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
                speakingWhilePTTInactive: l,
                occluded: s,
                shouldShowPTTJoinTooltip: i,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        l
            ? r ||
              e ||
              t ||
              n ||
              s ||
              !o ||
              null != a ||
              i ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(sd, () =>
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
                currentUser: s,
                status: i,
                userTag: a,
                voiceChannel: r,
            } = this.props;
        if (null == s) return null;
        if ((0, _.A)({ activities: t, status: i, applicationStream: n, voiceChannel: r }))
            return (0, l.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, l.jsx)(A.A, { children: t$.Ay.humanizeStatus(i) }),
                    (0, l.jsx)(S.A, {
                        user: s,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: sc.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === ta.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, l.jsxs)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, l.jsx)(A.A, { children: t$.Ay.humanizeStatus(i) }),
                      (0, l.jsx)(q.A, { activity: o, emojiClassName: sc.Zg, className: sc.WO }),
                  ],
              })
            : null != i && i !== ta.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, l.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, l.jsx)(b, { text: t$.Ay.humanizeStatus(i) }),
                })
              : a;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", {
                          className: sc.eW,
                          children: (0, l.jsx)(lh.A, {
                              className: a()({ [sc.e8]: null != e }),
                              children: (0, l.jsx)($.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? K.G.ANIMATED : K.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, l.jsx)("div", {
                          className: sc.XP,
                          children: (0, l.jsx)(ld.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, l.jsx)(lF, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, l.jsx)(sf, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: s, isListenAlongVisible: i } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(x.sk, {
                          children: (e) =>
                              (0, l.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(sc.kL, { [sc.UG]: null != n, [sc.bc]: !s, [sc.G5]: i }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, l.jsx)(z.A, { nameplate: t, hovered: r, placement: W.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, l.jsx)(sA, {
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
                      (0, l.jsx)(eg, {}),
                  ],
              });
    }
}
function sA(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: s,
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
            dismissTooltips: N,
            speaking: _,
        } = e,
        S = (0, Q.K)(E);
    return (0, l.jsxs)("div", {
        className: sc.Uo,
        style: S,
        children: [
            (0, l.jsx)(l4, {
                accountContainerRef: v,
                selfMute: n,
                serverMute: i,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: d,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: f,
                iconForeground: null != E ? sc.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: c,
                shouldShowPTTJoinTooltip: j,
                dismissTooltips: N,
                speaking: _,
            }),
            (0, l.jsx)(lK, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: m,
                onContextMenu: g,
                awaitingRemote: s,
                iconForeground: null != E ? sc.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: N,
            }),
            (0, l.jsx)(so, {
                webBuildOverride: u,
                onClick: A,
                onContextMenu: x,
                dismissibleContents: C.settings,
                iconForeground: null != E ? sc.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function sx(e) {
    let t = (0, u.bG)([n3.A], () => null != n3.A.getChannelId()),
        n = (0, eA.Py)(e),
        l = s.useRef(new h.Ep()),
        [i, a] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (a(!0),
            l.current.start(sp, () => {
                a(!1);
            }));
    }, [t, n]);
    let r = s.useCallback(() => {
        a(!1), l.current.stop();
    }, []);
    return (
        (0, j.l0)(() => {
            l.current.stop();
        }),
        { shouldShowTooltip: i, dismissTooltip: r }
    );
}
function sC() {
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
                        return t === ta.$pd.STREAMING;
                    }),
                status: nv.A.getStatus(),
            };
        }),
        r = (0, u.bG)([ln.A], () => ln.A.getAnyStreamForUser(t)),
        c = (0, T.A)({ userId: t }),
        m = (0, u.bG)([n9.A], () => n9.A.getVoiceVolume(t)),
        p = t$.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, u.bG)([n3.A, ll.A], () => {
            let e = n3.A.getChannelId();
            return null != e ? ll.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: A, suppress: x } = (0, n1.A)(f),
        { selfDeaf: E, deaf: v } = (0, n0.A)(f),
        N = (0, u.bG)([U.A], () => ((0, D.kK)() ? U.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        _ = (0, u.bG)([n2.Ay], () => n2.Ay.getSpeakingWhileMuted()),
        S = (0, u.bG)([P.A], () => P.A.isFullscreenInContext()),
        R = (0, u.bG)([li.A], () => li.A.hasLayers()),
        y = (0, C.useModalsStore)(C.hasAnyModalOpenSelector) || R || lc.P.isDisallowPopupsSet() || S,
        I = (0, u.bG)([Y.default], () => null != Y.default.getAwaitingRemoteSessionInfo()),
        b = (0, u.bG)([la.A], () => la.A.getGuildId()),
        M = e?.avatarDecoration,
        k = (0, B.A)(M),
        L = t$.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, O.Ay)(w.A.ACCOUNT),
        G = (0, H.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: V } = (0, nZ.c9)(),
        Q = (0, u.bG)([nK.A, nt.default, ls.A], () => {
            let e,
                t = nK.A.getSyncingWith(),
                n = nK.A.getActivity(),
                l = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (l = o()(Array.from(ls.A.getParty(e) ?? []))
                        .map((e) => nt.default.getUser(e))
                        .filter(nx.Vq)
                        .value()),
                l.length > 1
            );
        }),
        W = { avatar: [], settings: [] },
        z = (0, n$.lX)("AccountCoachmark");
    !y && (W.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK), z && W.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: q, dismissTooltip: Z } = sx(n5.oh.AUDIO_INPUT),
        { shouldShowTooltip: K, dismissTooltip: $ } = sx(n5.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: X, dismissTooltip: J } = (function () {
            let [e, t] = s.useState(!1),
                n = (0, u.bG)([n2.Ay], () => n2.Ay.getMode() === n5.TB.PUSH_TO_TALK),
                l = (0, u.bG)(
                    [n3.A],
                    () => null != n3.A.getChannelId() && (n3.A.getDuration() ?? Number.MAX_VALUE) < n8,
                ),
                [i, a] = s.useState(!1),
                { showPTTJoinTooltip: r } = n6.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = s.useRef(new h.Ep()),
                c = s.useRef(new h.Ep());
            s.useEffect(() => {
                if (l && n && !e) {
                    if ((n6.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        c.current.start(n4, () => {
                            t(!1);
                        }),
                        o.current.start(n8, () => {
                            a(!1);
                        });
                }
                l || a(!1);
            }, [l, n, r, e]);
            let d = s.useCallback(() => {
                a(!1), o.current.stop();
            }, []);
            return (
                (0, j.l0)(() => {
                    o.current.stop(), c.current.stop();
                }),
                { shouldShowTooltip: i, dismissTooltip: d }
            );
        })(),
        ee = (function () {
            let { showPTTSpeakingIndicator: e } = n6.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = s.useState(!1),
                l = (0, u.bG)([n2.Ay], () => n2.Ay.getMode() === n5.TB.PUSH_TO_TALK),
                i = (0, u.bG)([n3.A], () => n3.A.getRTCConnectionId()),
                a = (0, u.bG)([n2.Ay], () => {
                    let e = n2.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < lt;
                }),
                r = s.useRef(new h.Ep());
            return (
                s.useEffect(() => {
                    n(!1);
                }, [i]),
                s.useEffect(() => {
                    let t = 0,
                        s = r.current;
                    function o(e, l) {
                        let i = (l & n5.ME.VOICE) === n5.ME.VOICE,
                            a = n9.A.isCurrentUserPTTActive();
                        i && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              s.start(le, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && l && null != i && n2.Ay.getMediaEngine().on(n7.bg.VoiceActivity, o),
                        () => {
                            n2.Ay.getMediaEngine().removeListener(n7.bg.VoiceActivity, o), s.stop();
                        }
                    );
                }, [e, l, a, i]),
                t
            );
        })(),
        et = s.useMemo(() => (q ? "input" : K ? "output" : void 0), [q, K]),
        en = s.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        Z();
                        break;
                    case "output":
                        $();
                }
            },
            [Z, $],
        );
    return (0, l.jsx)(O.f5, {
        value: F,
        children: (0, l.jsx)(sg, {
            currentUser: e,
            username: L,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: W,
            userTag: p,
            occluded: y,
            selfDeaf: E,
            selfMute: A,
            serverDeaf: v,
            serverMute: g,
            speaking: c,
            voiceDb: m,
            speakingWhileMuted: _,
            speakingWhilePTTInactive: ee,
            status: a,
            streaming: i,
            suppress: x,
            webBuildOverride: N,
            awaitingRemote: I,
            nameplate: G,
            selectedGuildId: b,
            avatarDecoration: k,
            isQuestBarEmpty: V,
            isListenAlongVisible: Q,
            deviceChangedTooltipType: et,
            onDismissDeviceChangedTooltip: () => en(et),
            shouldShowPTTJoinTooltip: X,
            dismissPTTJoinTooltip: J,
        }),
    });
}
