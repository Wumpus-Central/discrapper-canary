"use strict";
n.d(t, { g: () => rm, A: () => rI }), n(321073);
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
    f = n(97808),
    h = n(778712),
    p = n(922016),
    E = n(939249),
    m = n(140735),
    g = n(312138),
    A = n(192308),
    I = n(442433),
    T = n(820284),
    S = n(717558),
    N = n(964486),
    y = n(220839),
    C = n(397244),
    v = n(394871),
    O = n(785651),
    R = n(866323),
    b = n(449450);
function D(e) {
    let { text: t } = e,
        n = (0, R.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(O.animated.div, { className: b.H, style: e, children: t })),
    });
}
var L = n(29160),
    w = n(793574),
    M = n(688810),
    P = n(521502),
    x = n(380610),
    U = n(313961),
    k = n(18235),
    G = n(183184),
    F = n(384059),
    V = n(480890),
    B = n(601255),
    H = n(562819),
    j = n(449582),
    Y = n(351952),
    W = n(88686),
    K = n(174755),
    z = n(302223),
    $ = n(609425),
    q = n(922301),
    Z = n(368919),
    X = n(643501),
    Q = n(534514),
    J = n(834730),
    ee = n(789645),
    et = n(826673),
    en = n(750506),
    ei = n(780964),
    er = n(858897),
    es = n(417146),
    ea = n(552122),
    eo = n(717421),
    el = n(775602),
    eu = n(993843);
let ec = { mass: 10, tension: 550, friction: 140 };
function ed(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, c.bG)([el.A], () => el.A.useReducedMotion),
        [o, u] = r.useState({ x: 0, y: 0 }),
        d = r.useMemo(
            () =>
                l().throttle((e) => {
                    s || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, s],
        );
    r.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [_, f] = (0, eo.z)(() => ({ x: 0, y: 0, config: ec }));
    return (
        r.useEffect(() => {
            f({ x: o.x, y: o.y });
        }, [o.x, o.y, f]),
        (0, i.jsx)(O.animated.div, {
            style: { transform: (0, O.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(eu.T, t),
        })
    );
}
var e_ = n(49999),
    ef = n(375708),
    eh = n(275883);
function ep(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: r } = e,
        s = ea.A.useIsEligible(),
        a = (0, et.JZ)(t),
        o = null != n,
        l = null != r ? { color: r } : void 0,
        { analyticsLocations: u } = (0, M.Ay)(w.A.HOLIDAY_COACHMARK),
        c = (e) => {
            (0, et.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, er.openUserSettings)(ei.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(e_.i.TAKE_ACTION);
        };
    return s && !a
        ? (0, i.jsx)(en.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eh.iE,
                  style: { backgroundColor: o ? n : void 0 },
                  children: [
                      !o &&
                          (0, i.jsxs)("div", {
                              className: eh.o5,
                              children: [
                                  (0, i.jsx)(ed, { className: eh.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eh.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eh.c8 }),
                      (0, i.jsxs)("div", {
                          className: eh.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(Q.D, {
                                          variant: "heading-md/bold",
                                          color: null != l ? void 0 : "always-white",
                                          style: l,
                                          children: ef.intl.string(ef.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(J.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: ef.intl.format(ef.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      E.D,
                                                      {
                                                          tag: "span",
                                                          className: eh.nf,
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
                              (0, i.jsx)(E.D, {
                                  className: eh.l2,
                                  onClick: () => c(e_.i.USER_DISMISS),
                                  children: (0, i.jsx)(ee.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eE() {
    return null == es.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ep, {
              dismissibleContent: es.A.coachmarkDismissibleContent,
              backgroundColor: es.A.coachmarkBackgroundColor,
              specialTextColor: es.A.coachmarkSpecialTextColor,
          });
}
var em = n(74848),
    eg = n(607399),
    eA = n(707554),
    eI = n(224640),
    eT = n(305866),
    eS = n(364522),
    eN = n(22231),
    ey = n(133171),
    eC = n(780338),
    ev = n(980707),
    eO = n(26137),
    eR = n(473935),
    eb = n(765671),
    eD = n(457965),
    eL = n(176781),
    ew = n(777666),
    eM = n(320448),
    eP = n(993401),
    ex = n(447349);
function eU(e) {
    return (0, i.jsx)("div", {
        className: ex.wE,
        children: (0, i.jsx)(ev.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function ek(e) {
    let { action: t, onClick: n, icon: s, label: a, sublabel: o, trailing: l, renderSubmenu: u, ref: c } = e,
        d = null != n,
        _ = (0, eP.rE)({ action: t, onClick: n }),
        [f, h] = r.useState(!1),
        m = r.useRef(null),
        g = c ?? m,
        I = null != u,
        T = I && d,
        S = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        N = r.useCallback(() => {
            h(!0);
        }, []),
        y = r.useCallback(() => {
            (0, A.hasAnyModalOpen)() || h(!1);
        }, []),
        C = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: ex.iA,
                        children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ex.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(J.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: ex.W1,
                                        children: a,
                                    }),
                                    (0, i.jsx)(J.E, { color: "currentColor", variant: "text-xs/medium", children: o }),
                                ],
                            }),
                            l,
                        ],
                    }),
                ],
            }),
        v = (e) => {
            let t;
            return (
                (t = T
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(E.D, {
                                  className: ex.ef,
                                  onClick: _,
                                  focusProps: { offset: { ...S.offset, right: 0 } },
                                  children: C(),
                              }),
                              (0, i.jsx)(E.D, {
                                  className: ex.ap,
                                  "aria-label": ef.intl.string(ef.t.PdRCRg),
                                  ...e,
                                  onClick: N,
                                  focusProps: S,
                                  children: (0, i.jsx)(eM._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : I
                      ? (0, i.jsxs)(E.D, {
                            className: ex.ef,
                            ...e,
                            onClick: N,
                            focusProps: S,
                            children: [
                                C(),
                                (0, i.jsx)("div", {
                                    className: ex.ap,
                                    children: (0, i.jsx)(eM._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(E.D, { className: ex.ef, onClick: _, focusProps: S, children: C() })),
                (0, i.jsx)("div", { ref: g, className: ex.jG, children: t })
            );
        };
    return I
        ? (0, i.jsx)("li", {
              className: ex.j$,
              onMouseEnter: N,
              onMouseLeave: y,
              children: (0, i.jsx)(p.Y, {
                  targetElementRef: g,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: f,
                  onRequestClose: y,
                  children: v,
              }),
          })
        : (0, i.jsx)("li", { className: ex.j$, children: v() });
}
function eG(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(734066),
    eV = n(274372),
    eB = n(710315),
    eH = n(271597),
    ej = n(990078),
    eY = n(315710),
    eW = n(475358),
    eK = n(408278),
    ez = n(625903),
    e$ = n(404778),
    eq = n(821609),
    eZ = n(532624),
    eX = n(927813),
    eQ = n(975571),
    eJ = n(879631),
    e0 = n(350535),
    e1 = n(372684),
    e2 = n(572164),
    e3 = n(948138),
    e6 = n(890856),
    e4 = n(609174),
    e5 = n(353605),
    e7 = n(434320),
    e8 = n(82716),
    e9 = n(585579),
    te = n(226870),
    tt = n(285072),
    tn = n(316305);
let ti = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: o } = e,
        [l, u] = r.useState(!1),
        c = r.useCallback(() => u(!0), []),
        d = r.useCallback(() => u(!1), []),
        _ = r.useCallback(() => {
            s?.(), (0, eH.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(e4.Cl, {
        clip: t,
        children: (0, i.jsx)(e6.s, {
            "aria-label": ef.intl.string(ef.t.bt75uw),
            onClick: _,
            onMouseEnter: c,
            onMouseLeave: d,
            onFocus: c,
            onBlur: d,
            className: a()(tn.Z1, o),
            children: (0, i.jsxs)(te.d, {
                isPlaying: !1,
                preload: "metadata",
                children: [
                    n && (0, i.jsx)(ew.Lp, { className: tn.Ad, text: ef.intl.string(ef.t.y2b7CA) }),
                    (0, i.jsxs)(tt.h, {
                        isVisible: l,
                        className: tn.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tn.mY,
                                children: [(0, i.jsx)(e8.z, {}), (0, i.jsx)(e5.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tn.E_,
                                children: [
                                    (0, i.jsx)(e7.f, { variant: "primary", onBeforeEdit: s }),
                                    (0, i.jsx)("div", { className: tn.OI, children: (0, i.jsx)(e9.E, {}) }),
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
    ts = n(753070),
    ta = n(16590),
    to = n(550350);
function tl(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e,
        o = (0, c.yK)([eV.A], () => eV.A.getClips()),
        l = (0, c.bG)([eV.A], () => eV.A.getPendingClips()),
        u = (0, c.bG)([eV.A], () => eV.A.getSettings()),
        d = (0, c.bG)([eV.A], () => eV.A.getNewClipIds()),
        _ = (0, c.bG)([eZ.Ay], () => eZ.Ay.getKeybindForAction(tr.hCu.SAVE_CLIP)),
        f = r.useRef(null),
        h = r.useMemo(() => {
            let e = [...l, ...o].filter((e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [o, l]),
        p = r.useMemo(() => h.slice(0, 16), [h]),
        E = h.length > 16,
        m = null != _ ? e0.dI(_.shortcut, !0) : null;
    (0, eY.t)(f);
    let g = (0, eJ.$)(u.clipsLength / eX.A.Millis.SECOND),
        A = (0, ts.zr)(u.clipsQuality.resolution),
        I = ef.intl.formatToPlainString(ef.t.Qb44XH, { fps: u.clipsQuality.frameRate });
    return (0, i.jsxs)("div", {
        ref: (e) => {
            (f.current = e), a?.(e);
        },
        className: to.SW,
        role: "dialog",
        "aria-label": ef.intl.string(ef.t.z2jK6X),
        children: [
            (0, i.jsxs)("div", {
                className: to.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: to.$,
                        children: [
                            (0, i.jsx)(Q.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ef.intl.string(ef.t.z2jK6X),
                            }),
                            null != m && (0, i.jsx)(eW.e, { className: to.P, shortcut: m }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: to.$s,
                        children: [
                            (0, i.jsx)(ej.m, {
                                text: ef.intl.string(ef.t["3D5yo/"]),
                                children: (0, i.jsx)(eK.K, {
                                    onClick: () => n(),
                                    icon: ez.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ef.intl.string(ef.t["3D5yo/"]),
                                }),
                            }),
                            (0, i.jsx)(ej.m, {
                                text: ef.intl.string(ta.default["55C2MH"]),
                                children: (0, i.jsx)(eK.K, {
                                    onClick: () => t(),
                                    icon: eL.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ef.intl.string(ta.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(J.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: to.P6,
                children: [g, A, I].join(" • "),
            }),
            (0, i.jsx)(e$.c, {}),
            p.length > 0
                ? (0, i.jsxs)(eS.Ip, {
                      className: to.Vg,
                      fade: !0,
                      children: [
                          p.map((e) => (0, i.jsx)(ti, { clip: e, isNew: d.includes(e.id), onClose: s }, e.id)),
                          E &&
                              (0, i.jsx)("div", {
                                  className: to.qr,
                                  children: (0, i.jsx)(eq.$, {
                                      onClick: () => t(),
                                      text: ef.intl.string(ta.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)(tu, { keybindString: m }),
        ],
    });
}
function tu(e) {
    let { keybindString: t } = e,
        n = (0, e2.Et)(),
        s = r.useCallback(() => {
            window.open(eQ.A.getArticleURL(tr.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        a = r.useCallback(() => {
            e3.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, i.jsxs)("div", {
        className: to.p$,
        children: [
            (0, i.jsx)(eL.x, { size: "lg", color: "currentColor", className: to.Dw }),
            (0, i.jsx)(J.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: to.qO,
                children: ef.intl.string(ta.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(J.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: to.CZ,
                      children: ef.intl.format(ta.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  J.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(eW.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsxs)("div", {
                      className: to.pi,
                      children: [
                          (0, i.jsx)(eq.$, {
                              onClick: s,
                              text: ef.intl.string(ef.t.hvVgAZ),
                              variant: "secondary",
                              size: "sm",
                          }),
                          (0, i.jsx)(eq.$, {
                              onClick: a,
                              text: ef.intl.string(ef.t.h8rgrK),
                              variant: "primary",
                              size: "sm",
                          }),
                      ],
                  }),
        ],
    });
}
function tc(e) {
    let { onClose: t } = e,
        n = (0, eF.sw)(),
        { userStatusMenu: s } = eB.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        a = (0, c.bG)([eV.A], () => eV.A.getNewClipIds().length),
        o = r.useCallback(
            (e) => {
                t(), (0, eH.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        l = r.useCallback(() => {
            t(), (0, er.openUserSettings)(ei.X.CLIPS_PANEL);
        }, [t]);
    return n && s
        ? (0, i.jsx)(ek, {
              action: "PRESS_CLIPS",
              icon: eL.x,
              label: ef.intl.string(ef.t.z2jK6X),
              trailing: a > 0 ? (0, i.jsx)(ew.hV, { count: a }) : null,
              onClick: () => o(),
              renderSubmenu: (e) => (0, i.jsx)(tl, { ...e, onOpenGallery: o, onOpenSettings: l, onClose: t }),
          })
        : null;
}
var td = n(480335),
    t_ = n(31956),
    tf = n(361628),
    th = n(744808),
    tp = n(282389),
    tE = n(713517),
    tm = n(645507),
    tg = n(970931),
    tA = n(832248),
    tI = n(462887),
    tT = n(736653),
    tS = n(439174),
    tN = n(927578),
    ty = n(878784),
    tC = n(788868);
function tv() {
    let e = (0, ty.Xb)(),
        t = (0, tN.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tC.sp.length - 1; t >= 0; t--) {
        let i = tC.VD[tC.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tO = {
        [tC.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tC.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tC.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tC.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tC.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tC.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tC.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tC.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tR = {
        [tC.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tC.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tC.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tC.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tC.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tC.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tC.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tC.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tb = n(682165);
let tD = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tL() {
    let e = (0, c.bG)([el.A], () => el.A.useReducedMotion),
        t = (0, tA.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tv(),
                t = (0, tI.M)((0, tT.Ay)());
            if (null == e) return null;
            let n = tO[e],
                i = tR[e],
                r = {
                    currentBadge: (0, tS.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tC.sp.indexOf(e);
            if (s > 0) {
                let e = tC.sp[s - 1],
                    n = tO[e];
                (r.prevBadge = (0, tS.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })();
    return e || !t || null == n ? null : (0, i.jsx)(tw, { levelUpData: n });
}
function tw(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        s = r.useCallback(() => {
            tA.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        r.useEffect(() => s, [s]),
        (0, i.jsx)(eY.O, {
            containerRef: n,
            children: (0, i.jsxs)("div", {
                className: tb.i,
                children: [
                    (0, i.jsx)("div", {
                        className: tb.b,
                        children: (0, i.jsx)(ej.m, {
                            text: ef.intl.string(ef.t.cpT0Cq),
                            children: (0, i.jsx)(eK.K, {
                                icon: ee.P,
                                variant: "secondary",
                                size: "sm",
                                onClick: s,
                                "aria-label": ef.intl.string(ef.t.cpT0Cq),
                            }),
                        }),
                    }),
                    (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tD, { levelUpData: t }) }),
                ],
            }),
        })
    );
}
var tM = n(206835),
    tP = n(183555),
    tx = n(999291),
    tU = n(975732),
    tk = n(718019),
    tG = n(694720),
    tF = n(915614),
    tV = n(744753),
    tB = n(559506),
    tH = n(646986),
    tj = n(349419),
    tY = n(946356),
    tW = n(878555),
    tK = n(624479),
    tz = n(206845),
    t$ = n(957565),
    tq = n(427262),
    tZ = n(962352);
function tX(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, tP.NJ)();
    return t$.p5
        ? (0, i.jsx)(tz.A, {
              text: ef.intl.string(ef.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tq.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(E.D, {
                      ...e,
                      className: a()(tZ.c, { [tZ.R]: n }),
                      "aria-label": ef.intl.string(ef.t.y5MwJy),
                      children: (0, i.jsx)(tK.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var tQ = n(983495),
    tJ = n(442228),
    t0 = n(885386),
    t1 = n(290863),
    t2 = n(351906),
    t3 = n(562153),
    t6 = n(661531),
    t4 = n(477782),
    t5 = n(628284),
    t7 = n(695366),
    t8 = n(363195),
    t9 = n(889227),
    ne = n(287809),
    nt = n(174459),
    nn = n(429707),
    ni = n(274303),
    nr = n(994125),
    ns = n(347853),
    na = n(335020),
    no = n(43105),
    nl = n(704824),
    nu = n(46225),
    nc = n(429913),
    nd = n(379848),
    n_ = n(633075),
    nf = n(735321),
    nh = n(667049),
    np = n(606758),
    nE = n(495544),
    nm = n(403362),
    ng = n(518477);
function nA(e) {
    let { targetElementRef: t, onClose: n } = e,
        [s, a] = r.useState(!1),
        { trackUserProfileEditAction: o } = (0, tP.NJ)(),
        l = (0, c.bG)([nE.default], () => nE.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([nE.default], () => nE.default.getId()),
                i = (0, nh.A)(n),
                s = r.useMemo(() => i.filter((e) => e instanceof n_.R), [i]),
                a =
                    ((e = (0, eD.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    r.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                o = r.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                l = ((t = (0, nc.A)(o)), r.useMemo(() => t.filter(nm.Vq), [t])),
                { tokens: u, fetched: d } = (0, nl.j)(o),
                _ = (0, nu.U9)(l);
            return r.useMemo(() => {
                if (null == a || null == u || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let i = u.find((e) => e.application.id === n.applicationId),
                        r = s.find((e) => e.applicationId === n.applicationId),
                        a = l.find((e) => e.id === n.applicationId),
                        o = _.find((e) => e.context.application.id === n.applicationId);
                    if (null == a) return null;
                    null != i && null == r
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == i &&
                          o?.preferredFlow != null &&
                          t.push({
                              type: "unlinked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileUnlinkedDc,
                              authFlow: o.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [a, u, d, s, l, _]);
        })(),
        { analyticsLocations: d } = (0, M.Ay)();
    return null == u || 0 === u.length
        ? null
        : (0, i.jsx)(nd.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: r, markAsDismissed: c } = e,
                      _ = u.find((e) => e.dismissibleContent === r);
                  if (null == _) return null;
                  let f = "linked" === _.type,
                      h = () =>
                          (0, tU.openUserProfileModal)({ userId: l, tabSection: ng.RP.WIDGETS }).then(() => {
                              c(e_.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(no.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != _.config.editProfileUpsellImage
                              ? { type: "image", src: _.config.editProfileUpsellImage }
                              : void 0,
                      title: ef.intl.format(ef.t.TXDztH, { applicationName: _.application.name }),
                      body: f ? ef.intl.string(ef.t["63Kso0"]) : ef.intl.string(ef.t.HwXoeC),
                      onRequestClose: () => c(e_.i.USER_DISMISS),
                      actions: [
                          f
                              ? {
                                    text: ef.intl.string(ef.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            h()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new n_.R({ applicationId: _.application.id })),
                                                        void ((0, nf.Y5)(e),
                                                        o({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, np.XA)(ng.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => a(!1));
                                    },
                                    loading: s,
                                }
                              : {
                                    text: ef.intl.string(ef.t["DSJi3+"]),
                                    onClick: () => {
                                        _.authFlow.initiate({
                                            onConfirm: () => {
                                                a(!0), h().finally(() => a(!1));
                                            },
                                            analyticsLocations: d,
                                        });
                                    },
                                    loading: s,
                                },
                      ],
                  });
              },
          });
}
var nI = n(461213),
    nT = n(818348),
    nS = n(466573);
function nN() {
    let e = (0, c.bG)([nI.A], () => nI.A.getStatus()),
        t = (0, tq.MU)(e) ?? "",
        n = e === nT.cl.INVISIBLE || e === nT.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nS.k,
        children: [
            (0, i.jsxs)(m.A, { tag: "div", children: [ef.intl.string(ef.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(ej.m, {
                    text: ef.intl.string(ef.t.L99HQm),
                    children: (0, i.jsx)(t7.E, {
                        size: "xs",
                        color: t6.A.colors.STATUS_WARNING,
                        "aria-label": ef.intl.string(ef.t.L99HQm),
                    }),
                }),
        ],
    });
}
var ny = n(841595);
let nC = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nv = n(501838),
    nO = n(760716),
    nR = n(915089),
    nb = n(13808);
function nD(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: o,
            height: l,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nR.GV)(),
        _ = r.useRef(null),
        f = (0, eo.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: l },
            to: { transform: "translate3d(0, 0, 0)", height: l },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(O.animated.div, {
        className: a()(nb.kL, u),
        style: f,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nb.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nb.U1,
                    children: [
                        (0, i.jsx)(E.D, {
                            innerRef: _,
                            "aria-label": ef.intl.string(ef.t.WAI6xu),
                            className: nb.b,
                            onClick: () => {
                                t(e_.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(ee.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(Q.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(J.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(eS.Ip, {
                    className: nb.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nb.gT, c), children: o }),
                }),
            ],
        }),
    });
}
var nL = n(973912),
    nw = n(871123),
    nM = n(44724),
    nP = n(501573);
function nx() {
    (0, nM.default)({ guildId: (0, nw.zf)() });
}
function nU(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: s } = (0, M.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nD, {
              heading: ef.intl.string(ef.t["vy/61K"]),
              subheading: ef.intl.string(ef.t.tEee9t),
              markAsDismissed: r,
              className: nP.Zj,
              contentClassName: nP.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nL.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nP.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nP.UD,
                      children: (0, i.jsx)(eq.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ef.intl.string(ef.t.rg9FQp),
                          onClick: nx,
                      }),
                  }),
              ],
          });
}
function nk(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nC.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([ne.default], () => ne.default.getCurrentUser()),
                s = (0, c.bG)([ny.A], () => (null != i ? ny.A.getFirstWishlistId(i.id) : null)),
                a = (0, nO.i)((e) => e.recommendationApplicationIds),
                l = (0, nv.rY)(),
                u = (0, nv.qx)();
            return r.useMemo(
                () => (null != a || (null == s && n) ? (0, o.uniq)([...(a ?? []), ...u, ...l]).sort() : []),
                [n, s, u, l, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        l = r.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nd.Ay, {
        contentTypes: l,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: a } = e;
            return null == s
                ? null
                : r === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nU, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nG = n(146901),
    nF = n(827827);
let nV = [
        { duration: 15 * eX.A.Millis.MINUTE, label: () => ef.intl.string(ef.t["8ot6gv"]) },
        { duration: eX.A.Millis.HOUR, label: () => ef.intl.string(ef.t.UMWBZr) },
        { duration: 8 * eX.A.Millis.HOUR, label: () => ef.intl.string(ef.t.EpAXPC) },
        { duration: eX.A.Millis.DAY, label: () => ef.intl.string(ef.t["755t4q"]) },
        { duration: 3 * eX.A.Millis.DAY, label: () => ef.intl.string(ef.t["f3/1ch"]) },
        { duration: void 0, label: () => ef.intl.string(ef.t["46dqJY"]) },
    ],
    nB = "forever";
function nH(e) {
    let { status: t, currentStatus: n, description: r } = e,
        s = t !== tr.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nV.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    t4.Dr,
                    {
                        id: `${t}-${r}`,
                        label: s(),
                        action: () => (0, nF.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? nB,
                );
            }),
        });
    return (0, i.jsx)(t4.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, tq.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(ey.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nF.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nj(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nG._)(e);
    return "today" === t
        ? ef.intl.formatToPlainString(ef.t.ZxxHIO, { timeString: i })
        : ef.intl.formatToPlainString(ef.t["9OFjSe"], { dateString: n, timeString: i });
}
var nY = n(996988),
    nW = n(656884);
function nK(e) {
    let t,
        n,
        s,
        o,
        l,
        u,
        d,
        _,
        p,
        { currentUser: E, onClose: g, setPopoutRef: I, highlightBadge: T, openedAt: S, className: N } = e,
        y = __OVERLAY__,
        C = (0, tx.Ay)(E.id, void 0),
        { analyticsLocations: v } = (0, M.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        O = (0, tP.pb)({ layout: "ACCOUNT_POPOUT", userId: E.id, guildId: void 0 }),
        { ref: R, height: b } = (0, eb.Ay)(),
        { isHoveringOrFocusing: D, isHovering: L } = (0, tE.A)(R);
    r.useEffect(() => {
        I?.(R.current);
    }, [R, I]),
        r.useEffect(() => (tA.A.setState({ isOpen: !0 }), () => tA.A.setState({ isOpen: !1 })), []);
    let P = (0, c.bG)([t1.A], () => t1.A.getStatus(E.id)),
        x = nj(t0.CY.useSetting()),
        U = (0, c.bG)([t2.A], () => t2.A.hidePersonalInformation),
        k = (0, tg.kB)(),
        G = t0.Q_.useSetting(),
        F =
            ((t = t0.CY.useSetting()),
            (n = (0, tg.kB)()),
            (s = t0.Jr.useSetting()),
            (o = (e) => {
                let i = nj(t);
                if (P === e && null != i) return i;
                switch (e) {
                    case tr.clD.DND:
                        return n ? ef.intl.string(ef.t.day5A6) : ef.intl.string(ef.t["tq/fMK"]);
                    case tr.clD.INVISIBLE:
                        return ef.intl.string(ef.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (l = (0, i.jsx)(i.Fragment, {
                children: nV.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        t4.Dr,
                        {
                            id: `${P}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tg.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nB,
                    );
                }),
            })),
            (u = nH({ status: tr.clD.ONLINE, currentStatus: P })),
            (d = nH({ status: tr.clD.IDLE, currentStatus: P, description: o(tr.clD.IDLE) })),
            (_ = nH({ status: tr.clD.DND, currentStatus: P, description: o(tr.clD.DND) })),
            (p = nH({ status: tr.clD.INVISIBLE, currentStatus: P, description: o(tr.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(t4.bX, {}, "menu-separator-statuses"),
                    d,
                    _,
                    p,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(t4.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      t4.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ef.intl.string(ef.t.gJRnwK),
                                          iconLeft: eC.a,
                                          leadingAccessory: { type: "icon", icon: eC.a },
                                          badge: { text: ef.intl.string(ef.t.ApAu9f) },
                                          subtext:
                                              null != s && "0" !== s
                                                  ? ef.intl.format(ef.t.BWD8fs, {
                                                        endTime: new Date(Number(s)).toLocaleString(
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
                                              (0, tg.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: l,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            })),
        V = (function (e) {
            let t = (0, c.bG)([ne.default], () => ne.default.getCurrentUser()),
                n = (0, c.bG)([t2.A], () => t2.A.hidePersonalInformation),
                r = (0, c.bG)([t8.A], () => (0, tI.M)(t8.A.theme)),
                { multiAccountUsers: s } = (0, nr.K)(),
                a = s.map((s) => {
                    let a = new t9.A(s),
                        o = a.id === t?.id,
                        l = s.tokenStatus === ni.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        t4.Dr,
                        {
                            id: a.id,
                            focusedClassName: na.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: na.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: na.DD,
                                            children: [
                                                (0, i.jsx)(J.E, {
                                                    className: na.gE,
                                                    variant: "text-sm/normal",
                                                    children: tq.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(J.E, {
                                                        className: na.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        o &&
                                            (0, i.jsx)(t5.y, {
                                                size: "sm",
                                                color: t
                                                    ? t6.A.unsafe_rawColors.WHITE.css
                                                    : t6.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t6.A.unsafe_rawColors.BRAND_500.css
                                                        : t6.A.unsafe_rawColors.WHITE.css,
                                                className: na.s0,
                                            }),
                                        l &&
                                            (0, i.jsx)(t7.E, {
                                                color: t6.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t6.A.unsafe_rawColors.BRAND_500.css
                                                        : t6.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: na.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), l)) (0, ns.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nt.default.track(tr.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tr.JJy.USER_PROFILE },
                                        }),
                                        nn.Mx(n));
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
                            (0, i.jsx)(t4.bX, {}),
                            (0, i.jsx)(t4.Dr, {
                                id: "manage-accounts",
                                label: ef.intl.string(ef.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, ns.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(g),
        B = (0, tM.A)({ analyticsLocations: v }),
        H = (0, tN.TW)(E),
        j = r.useRef(null),
        Y = r.useRef(null),
        W = (0, tf.A)(C?.profileFrame?.skuId, "UserProfileAccountPopout"),
        K = (0, tp.A)(C?.profileFrame?.skuId);
    (0, t_.A)({ skuId: C?.profileFrame?.skuId, openedAt: S, context: O, analyticsLocations: v });
    let z = r.useRef((0, tA.A)((e) => e.shouldRenderTenureLevelUp)),
        $ = r.useMemo(() => (0, tm.A)(), []),
        [q, Z] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            Z(!1);
        }, 500);
    }, []);
    let X = (e) => {
            g?.(), (0, tU.openUserProfileModal)({ customStatusPrompt: $, sourceAnalyticsLocations: v, ...O, ...e });
        },
        Q = C?.widgets != null && C.widgets.length > 0,
        ee = r.useCallback(() => {
            g();
        }, [g]),
        et = r.useCallback(() => {
            B(), ee();
        }, [B, ee]),
        en = (0, eD.QR)({ location: "UserProfileAccountPopout" }),
        ei = (0, eD.zd)({ location: "UserProfileAccountPopout" }),
        er = r.useId();
    return (0, i.jsx)(M.f5, {
        value: v,
        children: (0, i.jsx)(tP.of, {
            value: O,
            openedAt: S,
            fetchStartedAt: C?.fetchStartedAt,
            fetchEndedAt: C?.fetchEndedAt,
            isLoaded: C?.isLoaded,
            children: (0, i.jsxs)(eT.l, {
                ref: R,
                "aria-labelledby": er,
                className: a()(ex.jC, K, N),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(m.A, {
                        children: (0, i.jsx)(eA.H, { id: er, children: ef.intl.string(ef.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eA.F, {
                        children: [
                            (0, i.jsx)(nk, { displayProfile: C, handleOpenUserProfileModal: X, height: b }),
                            (0, i.jsxs)(tY.A, {
                                className: ex.BK,
                                user: E,
                                displayProfile: C,
                                themeType: nY.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nW.wx,
                                        children: [
                                            (0, i.jsx)(tF.A, { user: E, displayProfile: C, themeType: nY.d.POPOUT }),
                                            (0, i.jsx)(tk.A, {
                                                user: E,
                                                displayProfile: C,
                                                themeType: nY.d.POPOUT,
                                                onOpenProfile: y ? void 0 : X,
                                            }),
                                            (0, i.jsx)(tQ.A, {
                                                ref: j,
                                                user: E,
                                                themeType: nY.d.POPOUT,
                                                onCloseProfile: g,
                                                prompt: $,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eS.Ip, {
                                        className: ex.rf,
                                        style: { pointerEvents: q ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tB.A, { userId: E.id }),
                                            (0, i.jsx)(tW.Ay, {
                                                className: ex.eF,
                                                user: E,
                                                displayName: t3.Ay.getName(void 0, null, E),
                                                onClickName: y ? void 0 : X,
                                                displayNameTrailing: (0, i.jsx)(tX, { user: E, isVisible: D }),
                                                pronouns: C?.pronouns,
                                                trailing: (0, i.jsx)(tG.A, {
                                                    displayProfile: C,
                                                    themeType: nY.d.POPOUT,
                                                    onClose: g,
                                                    shouldOpenBadgeTooltip: null != T ? (e) => e === T : void 0,
                                                    shouldGlowTenureBadge: z.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tV.A, { isPremiumUser: H, onInteraction: g }),
                                            (0, i.jsx)(tJ.A, {
                                                user: E,
                                                bio: C?.bio,
                                                hidePersonalInformation: U,
                                                onClose: g,
                                            }),
                                            Q &&
                                                (0, i.jsx)(tj.A, {
                                                    user: E,
                                                    widgets: C?.widgets,
                                                    onOpenUserProfileModal: X,
                                                }),
                                            (0, i.jsx)(tH.A, {
                                                user: E,
                                                currentUser: E,
                                                onOpenUserProfileModal: X,
                                                onClose: g,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ex.T_,
                                                children: [
                                                    (0, i.jsx)(tY.A.Overlay, {
                                                        className: ex.g0,
                                                        children: (0, i.jsxs)(eG, {
                                                            children: [
                                                                (0, i.jsx)(ek, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ef.intl.string(ef.t.s5vZlQ),
                                                                    icon: eN.R,
                                                                    onClick: et,
                                                                    ref: Y,
                                                                }),
                                                                (0, i.jsx)(ek, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nN, {}),
                                                                    sublabel: null != x && x,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ey.nW, { status: P, size: 12 }),
                                                                    trailing:
                                                                        (k || P === tr.clD.DND) &&
                                                                        (0, i.jsx)(eC.a, { size: "xxs" }),
                                                                    renderSubmenu: eg.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eU, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ex.hQ,
                                                                                  "aria-label": ef.intl.string(
                                                                                      ef.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: eg.Fr
                                                                        ? () => {
                                                                              g(),
                                                                                  (0, A.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eI.d,
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
                                                                (0, i.jsx)(tc, { onClose: g }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tY.A.Overlay, {
                                                        className: ex.g0,
                                                        children: (0, i.jsxs)(eG, {
                                                            children: [
                                                                (0, i.jsx)(ek, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eO.r,
                                                                    label: ef.intl.string(ef.t.oMNyYN),
                                                                    onClick: () => {
                                                                        g(), (0, ns.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eU, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ef.intl.string(ef.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: V,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t$.p5 &&
                                                                    G &&
                                                                    (0, i.jsx)(ek, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eR.L,
                                                                        label: ef.intl.string(ef.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t$.C)(E.id), g();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    C?.profileEffect != null &&
                                        !z.current &&
                                        (0, i.jsx)(td.A, { skuId: C.profileEffect.skuId, isHovering: L }),
                                    null != W && (0, i.jsx)(th.A, { frame: W }),
                                ],
                            }),
                            en && ei ? (0, i.jsx)(nA, { targetElementRef: Y, onClose: g }) : null,
                            (0, i.jsx)(tL, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nz = n(371912),
    n$ = n(655116),
    nq = n(21973),
    nZ = n(454719),
    nX = n(342296),
    nQ = n(533488),
    nJ = n(167579),
    n0 = n(173660),
    n1 = n(51760),
    n2 = n(763827),
    n3 = n(499156),
    n6 = n(731854);
let n4 = 2.5 * eX.A.Millis.SECOND,
    n5 = +eX.A.Millis.HOUR;
var n7 = n(459838),
    n8 = n(485296);
let n9 = 3 * eX.A.Millis.SECOND,
    ie = +eX.A.Millis.DAY;
var it = n(616356),
    ii = n(734057),
    ir = n(629016),
    is = n(186111),
    ia = n(967198),
    io = n(486020),
    il = n(625494),
    iu = n(536194),
    ic = n(19575),
    id = n(994314),
    i_ = n(485599),
    ih = n(626584),
    ip = n(531685),
    iE = n(259065),
    im = n(864386);
let ig = new ih.A("DisplayNameStylesCoachmark");
function iA(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, M.Ay)(),
        o = (0, r.useRef)(null),
        l = (0, c.bG)([ip.A], () => ip.A.isFocused()),
        u = (0, r.useCallback)(() => {
            t(e_.i.TAKE_ACTION),
                (0, er.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iE.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, r.useCallback)(() => {
            t(e_.i.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            l && o.current?.paused ? o.current?.play().catch(ig.error) : l || o.current?.pause();
        }, [l]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                s,
                (0, i.jsx)(no.A, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: d,
                    align: "right",
                    position: "top",
                    caretConfig: { align: "center" },
                    gradientColor: "nitro-pink",
                    graphic: {
                        type: "video",
                        ref: o,
                        src: "https://cdn.discordapp.com/assets/content/5d90dc1e412ad3aa0b39088fba382025e32b718d7bf5d797512be9701b5f53b4.webm",
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    title: ef.intl.string(im.default["1AE464"]),
                    body: [ef.intl.string(im.default.cNc1g9), ef.intl.string(ef.t["4JNXHG"])],
                    actions: [{ text: ef.intl.string(ef.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var iI = n(131607),
    iT = n(45780),
    iS = n(696451),
    iN = n(71393),
    iy = n(685073),
    iC = n(228366);
let iv = { lastSeenInfos: {} },
    iO = iv;
class iR extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iO = e ?? iv;
    }
    getState() {
        return iO;
    }
    getGuildLastSeenInfo(e) {
        return iO.lastSeenInfos[e] ?? null;
    }
}
let ib = new iR(iC.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iO.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iO = iv;
    },
});
var iD = n(116833),
    iL = n(514661);
let iw = new ih.A("GuildTagAvailableCoachmark");
function iM(e) {
    let t = (0, c.bG)([iN.A], () => iN.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iC.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iL.A)(t?.id ?? null, () => n(e_.i.TAKE_ACTION));
    if (null == t || !(0, iy.q0)(t))
        return iw.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ef.intl.string(ef.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ef.intl.string(ef.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(no.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iD.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ef.intl.formatToPlainString(ef.t["m/Tc3n"], { guildName: t.name }),
                body: ef.intl.string(ef.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(e_.i.USER_DISMISS),
            }),
        ],
    });
}
function iP(e) {
    let t = (0, c.bG)([iN.A], () => iN.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iL.A)(t?.id ?? null, () => n(e_.i.TAKE_ACTION));
    if (null == t || !(0, iy.q0)(t))
        return iw.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ef.intl.string(ef.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ef.intl.string(ef.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(no.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iD.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ef.intl.formatToPlainString(ef.t.VFqnyU, { guildName: t.name }),
                body: ef.intl.string(ef.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(e_.i.USER_DISMISS),
            }),
        ],
    });
}
var ix = n(904481),
    iU = n(764231),
    ik = n(425713);
function iG(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tv(),
        s = (0, c.bG)([el.A], () => el.A.useReducedMotion),
        a = (0, tA.A)((e) => e.isOpen),
        o = (0, ix.G)();
    return s || null == r || a || o
        ? null
        : (0, i.jsx)(nd.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(iF, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iF(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        o = tC.sp.indexOf(t),
        l = (0, ik.I)(tC.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, r.useCallback)(() => {
            n(e_.i.TAKE_ACTION),
                tA.A.setState({ shouldRenderTenureLevelUp: !0 }),
                il._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(e_.i.USER_DISMISS);
        }, [n]),
        d = tC.VD[t],
        _ = ef.intl.formatToPlainString(ef.t.ewkaVR, {
            timeMilestone: (0, iU.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: ef.intl.string(ef.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(no.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != l ? { type: "image", src: l, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ef.intl.string(ef.t.VoDxsV),
        body: _,
        actions: f,
    });
}
function iV(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nz.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iT.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tr.dJq),
                r = (0, c.bG)([iN.A, ne.default, iS.Ay], () => {
                    if (null === e) return !1;
                    let t = iN.A.getGuild(e);
                    if (void 0 === t || !(0, iy.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = ne.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iS.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, iI.ww)(r && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tr.eGj);
        })(e.guildId, { shouldShow: r }),
        [o, l] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                s = (0, c.bG)([ib], () => (null === r ? null : ib.getGuildLastSeenInfo(r))),
                a = (0, c.bG)([iN.A], () => iN.A.getGuild(r)?.profile?.tag),
                o = null != a && i?.identityGuildId === r && i?.tag === null,
                l = null != r && s?.tag === a,
                u = null !== r && o && !l;
            return (0, iI.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? s === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iP, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : o === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iM, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: l,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iG, { groupName: e_.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nd.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: e_.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                return n === d.M.DISPLAY_NAME_STYLES_COACHMARK
                                    ? (0, i.jsx)(iA, {
                                          markAsDismissed: r,
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
var iB = n(615675),
    iH = n(900797),
    ij = n(847374),
    iY = n(348858),
    iW = n(617354),
    iK = n(206018),
    iz = n(42473),
    i$ = n(490704),
    iq = n(967194);
function iZ(e) {
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
            Component: f,
            play: h,
            events: { onMouseEnter: E, onMouseLeave: m },
        } = (0, iY.I)(_ ? "undeafen" : "deafen"),
        g = n ? iB.T : f,
        { name: A } = (0, em.x5)(n6.oh.AUDIO_OUTPUT),
        I = (0, iW.A)(t, n, s),
        { analyticsLocations: T } = (0, M.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        S = r.useRef(null);
    return (
        r.useEffect(() => () => h(), [_, h]),
        (0, i.jsx)(M.f5, {
            value: T,
            children: (0, i.jsx)(p.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(M.f5, {
                            value: T,
                            children: (0, i.jsx)(iK.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT),
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
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: r } = e,
                        { isShown: d } = t,
                        f = d ? iH.t : ij.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: a()(i$.Lh, { [i$.v8]: _, [i$.q6]: d }),
                        children: [
                            (0, i.jsx)(iz.A, {
                                "aria-checked": _,
                                "aria-label": ef.intl.string(ef.t.wjcRFX),
                                className: i$.eT,
                                disabled: s,
                                icon: (0, i.jsx)(g, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? t6.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: l,
                                }),
                                iconForeground: _ ? iq.o : void 0,
                                innerClassName: a()({ [iq.T]: n }),
                                onClick: o,
                                onContextMenu: r,
                                onMouseEnter: E,
                                onMouseLeave: m,
                                plated: null != u,
                                redGlow: _,
                                role: "switch",
                                tooltipText: I,
                            }),
                            (0, i.jsx)(iz.A, {
                                className: a()(i$.UT, { [i$.q6]: d }),
                                disabled: s,
                                icon: (0, i.jsx)(f, {
                                    className: i$.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? t6.A.colors.ICON_VOICE_MUTED : "currentColor",
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
var iX = n(666654),
    iQ = n(523875),
    iJ = n(993719);
let i0 = {};
class i1 extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i0[e] ?? !1;
    }
}
let i2 = new i1(iC.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i0[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i0[t] = !1;
    },
});
var i3 = n(362823),
    i6 = n(980923),
    i4 = n(224585),
    i5 = n(949341),
    i7 = n(973324);
function i8(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
            suppress: o,
            awaitingRemote: l,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: _,
            onClick: f,
            nameplate: h,
            shouldShowSpeakingWhileMutedTooltip: E,
            shouldShowSpeakingWhilePTTTooltip: m,
            shouldShowInputDeviceChangedTooltip: g,
            shouldShowPTTJoinTooltip: A,
            dismissTooltips: I,
            speaking: T,
        } = e,
        { showPTTIconIndicator: S } = n3.A.useConfig({ location: "MicrophoneButton" }),
        N = (0, c.bG)([n1.Ay], () => n1.Ay.getMode() === n6.TB.PUSH_TO_TALK),
        y = (0, c.bG)([n1.Ay], () => n1.Ay.getSettings().modeOptions.shortcut),
        C = (0, c.bG)([i2], () => i2.getIsTutorialActive(i3.v.MUTE_TUTORIAL)),
        v = (0, c.bG)([n2.A], () => null != n2.A.getChannelId()),
        { name: O } = (0, em.x5)(n6.oh.AUDIO_INPUT),
        { enabledInputProfiles: R } = (0, nQ.d)({ location: "MicrophoneButton" }),
        b = r.useRef(null),
        D = n || o || s,
        L = (0, iQ.L)(D ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, M.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: x, events: U, play: k } = L,
        G = s || o ? iX.O : x;
    r.useEffect(() => () => k(), [D, k]);
    let F = (0, i6.A)(n, s, o, l);
    t = E
        ? { tooltipType: "green_void_do_not_use", tooltipText: ef.intl.string(ef.t["29gnR4"]), tooltipForceOpen: !0 }
        : A || m
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ef.intl.format(ef.t.c1qUOQ, { keybind: e0.dI(y).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let B = S && N && v,
        H = D ? t6.A.colors.ICON_VOICE_MUTED : "currentColor",
        j = r.useCallback(() => {
            f(), C && iJ.N(i3.v.MUTE_TUTORIAL);
        }, [f, C]);
    return (0, i.jsxs)(M.f5, {
        value: P,
        children: [
            (0, i.jsx)(p.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        I(),
                        (0, i.jsx)(M.f5, {
                            value: P,
                            children: (0, i.jsx)(iK.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: R.length > 0,
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
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: r } = e,
                        { isShown: s } = n,
                        o = s ? iH.t : ij.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(i$.Lh, { [i$.v8]: D, [i$.q6]: s }),
                        children: [
                            (0, i.jsx)(iz.A, {
                                "aria-checked": D,
                                "aria-label": ef.intl.string(ef.t.w4m945),
                                className: i$.eT,
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
                                plated: null != h,
                                redGlow: D,
                                role: "switch",
                                ...t,
                                children: B ? (0, i.jsx)("div", { className: a()(i5.U, { [i5.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(iz.A, {
                                "aria-label": g
                                    ? ef.intl.formatToPlainString(ef.t["18wnuD"], { inputDeviceName: O })
                                    : ef.intl.string(ef.t.fRzCbB),
                                className: a()(i$.UT, { [i$.q6]: s }),
                                disabled: l,
                                icon: (0, i.jsx)(o, {
                                    className: i$.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: H,
                                }),
                                onClick: r,
                                onContextMenu: r,
                                onMouseEnter: d,
                                onMouseLeave: _,
                                plated: null != h,
                                redGlow: D,
                                tooltipType: g ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: g,
                                tooltipPositionKey: g
                                    ? ef.intl.formatToPlainString(ef.t["18wnuD"], { inputDeviceName: O })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: g
                                    ? ef.intl.format(ef.t["18wnuD"], { inputDeviceName: O })
                                    : ef.intl.string(ef.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(no.A, {
                targetElementRef: b,
                shouldShow: C,
                graphic: { type: "image", src: i7.A },
                onRequestClose: () => {
                    iJ.N(i3.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ef.intl.string(i4.default.VG4zAf),
                body: ef.intl.string(i4.default["8VIRzR"]),
            }),
        ],
    });
}
var i9 = n(935399),
    re = n(505312),
    rt = n(848847),
    rn = n(88001),
    ri = n(466919),
    rr = n(438705);
let rs = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = r.useCallback(() => {
            s(), (0, er.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(no.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: rr },
        shouldShow: n,
        title: ef.intl.format(ri.default.bx8sR9, { premiumGroupProductName: (0, rn.DP)() }),
        body: ef.intl.format(ri.default.Pw4OFZ, { premiumGroupProductName: (0, rn.DP)() }),
        onRequestClose: s,
        actions: [{ text: ef.intl.string(ri.default.DD26QR), onClick: a }],
    });
};
var ra = n(873298),
    ro = n(840387);
function rl(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, ro.Z)(),
        a = t0.KP.useSetting(),
        o = s && a !== ra.KP.FRIENDS_AND_ALL_GUILDS,
        l = (0, r.useCallback)(() => {
            t(e_.i.TAKE_ACTION), (0, er.openUserSettings)(ei.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, r.useCallback)(() => {
            t(e_.i.USER_DISMISS);
        }, [t]),
        c = o
            ? a === ra.KP.FRIENDS_ONLY
                ? ef.intl.string(ef.t["/hogEy"])
                : ef.intl.string(ef.t["6hEfm1"])
            : ef.intl.string(ef.t.bnNxW1);
    return (0, i.jsx)(no.A, {
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
function ru(e) {
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
        [f, h] = r.useState(!1);
    (0, i9.Ay)(() => {
        let e = () => h(!0);
        return (
            il._.subscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                il._.unsubscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = r.useCallback(() => {
        h(!1), a();
    }, [a]);
    t = null != s ? ef.intl.formatToPlainString(ef.t.Gzh6ZP, { webBuildOverride: s.id }) : ef.intl.string(ef.t.cduTBL);
    let E = ez.Z,
        m = (0, re.w)();
    return (
        (E = null != s ? rt.H : m.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(iz.A, {
                    ref: _,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: o,
                    "aria-label": ef.intl.string(ef.t.cduTBL),
                    icon: (0, i.jsx)(E, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...m.events,
                    plated: null != c,
                }),
                (0, i.jsx)(rs, { targetElementRef: _, shouldShow: f, onDismiss: () => h(!1) }),
                (0, i.jsx)(nd.Ay, {
                    contentTypes: l,
                    groupName: e_.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rl, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rc = n(489902);
let rd = ic.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    r_ = 2.5 * eX.A.Millis.SECOND,
    rf = 2 * eX.A.Millis.MINUTE,
    rh = 2 * eX.A.Millis.MINUTE,
    rp = 5 * eX.A.Millis.SECOND;
function rE(e) {
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
            nameplate: f,
            avatarDecoration: m,
            "data-jump-section": g,
        } = e,
        A = r.useRef(null),
        I = t ?? A,
        S = (0, io.F_)({ avatarDecoration: m, size: (0, H.Te)(h._3.SIZE_32) }),
        N = (0, $.A)(),
        {
            updateOpenPopoutRef: C,
            highlightBadge: v,
            setHighlightBadge: O,
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
                (0, y.A)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    };
                    return (
                        il._.subscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            il._.unsubscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        R = (0, Y.K)(f);
    return null == l
        ? null
        : (0, i.jsx)(T.A, {
              object: tr.ZSU.AVATAR,
              children: (0, i.jsx)(nX.A, {
                  user: l,
                  targetElementRef: I,
                  clickTrap: !0,
                  preload: () =>
                      (0, nZ.A)(l.id, l.getAvatarURL(void 0, nX.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(nK, {
                          currentUser: l,
                          highlightBadge: v,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rc.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: p.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      d(), O(void 0);
                  },
                  children: (e) => {
                      C(e);
                      let { onMouseEnter: t, onMouseDown: r, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: I,
                          style: R,
                          onMouseEnter: t,
                          onMouseDown: r,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(rc.Q9, { [rc.ZQ]: null != f }),
                          children: [
                              (0, i.jsx)(E.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ef.intl.string(ef.t["5fWB8U"]),
                                  focusProps: { ringTarget: I },
                                  className: rc.$n,
                                  "data-jump-section": g,
                              }),
                              (0, i.jsx)(rd, {
                                  size: h._3.SIZE_32,
                                  src: l.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: o ? tr.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: rc.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rc.oM, children: _(N) }),
                          ],
                      });
                  },
              }),
          });
}
class rm extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(rh, null, !1);
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
        (0, G.A)(e, t, tr.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, tr.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n2.A.isConnected() ? (0, er.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL) : (0, er.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("65086"),
                    n.e("9396"),
                    n.e("6305"),
                    n.e("62631"),
                    n.e("52204"),
                    n.e("90261"),
                    n.e("63635"),
                    n.e("51404"),
                    n.e("89324"),
                    n.e("1195"),
                    n.e("25310"),
                    n.e("99961"),
                    n.e("31688"),
                    n.e("69273"),
                    n.e("24953"),
                    n.e("77083"),
                    n.e("63009"),
                    n.e("16933"),
                    n.e("88205"),
                    n.e("45650"),
                    n.e("22894"),
                    n.e("93880"),
                    n.e("29946"),
                    n.e("22995"),
                    n.e("79705"),
                    n.e("82209"),
                    n.e("5877"),
                    n.e("33957"),
                    n.e("65451"),
                    n.e("54253"),
                    n.e("4469"),
                    n.e("38559"),
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
                    n.e("67921"),
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
                    n.e("20287"),
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
                    n.e("58007"),
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
                    n.e("782"),
                    n.e("33049"),
                    n.e("36474"),
                    n.e("28638"),
                    n.e("71586"),
                ]).then(n.bind(n, 410681));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: I.Z_, onInteraction: (0, V.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("90274"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, nQ.d)({ location: "Account" });
                    return (0, i.jsx)(M.f5, {
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
                let { default: e } = await Promise.all([n.e("90274"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(M.f5, {
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rf;
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
                      this.speakingWhileMutedTooltipTimeout.start(r_, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(r_, () =>
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
        if ((0, C.A)({ activities: t, status: s, applicationStream: n, voiceChannel: o }))
            return (0, i.jsxs)(L.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(m.A, { children: tq.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(v.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: o,
                        textClassName: rc.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let l = t?.find((e) => {
            let { type: t } = e;
            return t === tr.$pd.CUSTOM_STATUS;
        });
        return null != l
            ? (0, i.jsxs)(L.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(m.A, { children: tq.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(z.A, { activity: l, emojiClassName: rc.Zg, className: rc.WO }),
                  ],
              })
            : null != s && s !== tr.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(L.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(D, { text: tq.Ay.humanizeStatus(s) }),
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
                          className: rc.eW,
                          children: (0, i.jsx)(i_.A, {
                              className: a()({ [rc.e8]: null != e }),
                              children: (0, i.jsx)(Z.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? q.G.ANIMATED : q.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: rc.XP,
                          children: (0, i.jsx)(id.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iV, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(rE, {
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
                                  className: a()(rc.kL, { [rc.UG]: null != n, [rc.bc]: !r, [rc.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(K.A, { nameplate: t, hovered: o, placement: W.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rg, {
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
                      (0, i.jsx)(eE, {}),
                  ],
              });
    }
}
function rg(e) {
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
            handleToggleSelfDeaf: f,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: p,
            handleOutputAudioContextMenu: E,
            handleOpenAccountSettings: m,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: A,
            nameplate: I,
            accountContainerRef: T,
            deviceChangedTooltipType: S,
            shouldShowPTTJoinTooltip: N = !1,
            dismissTooltips: y,
            speaking: C,
        } = e,
        v = (0, Y.K)(I);
    return (0, i.jsxs)("div", {
        className: rc.Uo,
        style: v,
        children: [
            (0, i.jsx)(i8, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: _,
                onClick: h,
                onContextMenu: p,
                iconForeground: null != I ? rc.t4 : void 0,
                nameplate: I,
                shouldShowSpeakingWhileMutedTooltip: l,
                shouldShowInputDeviceChangedTooltip: !l && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: N,
                dismissTooltips: y,
                speaking: C,
            }),
            (0, i.jsx)(iZ, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: f,
                onContextMenu: E,
                awaitingRemote: r,
                iconForeground: null != I ? rc.t4 : void 0,
                nameplate: I,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: y,
            }),
            (0, i.jsx)(ru, {
                webBuildOverride: c,
                onClick: m,
                onContextMenu: g,
                dismissibleContents: A.settings,
                iconForeground: null != I ? rc.t4 : void 0,
                nameplate: I,
            }),
        ],
    });
}
function rA(e) {
    let t = (0, c.bG)([n2.A], () => null != n2.A.getChannelId()),
        n = (0, em.Py)(e),
        i = r.useRef(new _.Ep()),
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(rp, () => {
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
function rI() {
    let e = (0, c.bG)([ne.default], () => ne.default.getCurrentUser()),
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
        o = (0, c.bG)([it.A], () => it.A.getAnyStreamForUser(t)),
        u = (0, S.A)({ userId: t }),
        f = (0, c.bG)([n8.A], () => n8.A.getVoiceVolume(t)),
        h = tq.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([n2.A, ii.A], () => {
            let e = n2.A.getChannelId();
            return null != e ? ii.A.getChannel(e) : null;
        }),
        { mute: E, selfMute: m, suppress: g } = (0, n0.A)(p),
        { selfDeaf: I, deaf: T } = (0, nJ.A)(p),
        y = (0, c.bG)([P.A], () => ((0, x.kK)() ? P.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        C = (0, c.bG)([n1.Ay], () => n1.Ay.getSpeakingWhileMuted()),
        v = (0, c.bG)([U.A], () => U.A.isFullscreenInContext()),
        O = (0, c.bG)([is.A], () => is.A.hasLayers()),
        R = (0, A.useModalsStore)(A.hasAnyModalOpenSelector) || O || iu.P.isDisallowPopupsSet() || v,
        b = (0, c.bG)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        D = (0, c.bG)([ia.A], () => ia.A.getGuildId()),
        L = e?.avatarDecoration,
        k = (0, B.A)(L),
        G = tq.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, M.Ay)(w.A.ACCOUNT),
        V = (0, j.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: H } = (0, nz.c9)(),
        Y = (0, c.bG)([n$.A, ne.default, ir.A], () => {
            let e,
                t = n$.A.getSyncingWith(),
                n = n$.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = l()(Array.from(ir.A.getParty(e) ?? []))
                        .map((e) => ne.default.getUser(e))
                        .filter(nm.Vq)
                        .value()),
                i.length > 1
            );
        }),
        W = { avatar: [], settings: [] },
        K = (0, nq.lX)("AccountCoachmark");
    !R && (W.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK), K && W.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: z, dismissTooltip: $ } = rA(n6.oh.AUDIO_INPUT),
        { shouldShowTooltip: q, dismissTooltip: Z } = rA(n6.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: Q, dismissTooltip: J } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([n1.Ay], () => n1.Ay.getMode() === n6.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n2.A],
                    () => null != n2.A.getChannelId() && (n2.A.getDuration() ?? Number.MAX_VALUE) < n4,
                ),
                [s, a] = r.useState(!1),
                { showPTTJoinTooltip: o } = n3.A.useConfig({ location: "usePTTJoinTooltip" }),
                l = r.useRef(new _.Ep()),
                u = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((n3.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !o)) return;
                    a(!0),
                        t(!0),
                        u.current.start(n5, () => {
                            t(!1);
                        }),
                        l.current.start(n4, () => {
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
        ee = (function () {
            let { showPTTSpeakingIndicator: e } = n3.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([n1.Ay], () => n1.Ay.getMode() === n6.TB.PUSH_TO_TALK),
                s = (0, c.bG)([n2.A], () => n2.A.getRTCConnectionId()),
                a = (0, c.bG)([n1.Ay], () => {
                    let e = n1.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < ie;
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
                        let s = (i & n6.ME.VOICE) === n6.ME.VOICE,
                            a = n8.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(n9, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && n1.Ay.getMediaEngine().on(n7.bg.VoiceActivity, l),
                        () => {
                            n1.Ay.getMediaEngine().removeListener(n7.bg.VoiceActivity, l), r.stop();
                        }
                    );
                }, [e, i, a, s]),
                t
            );
        })(),
        et = r.useMemo(() => (z ? "input" : q ? "output" : void 0), [z, q]),
        en = r.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        $();
                        break;
                    case "output":
                        Z();
                }
            },
            [$, Z],
        );
    return (0, i.jsx)(M.f5, {
        value: F,
        children: (0, i.jsx)(rm, {
            currentUser: e,
            username: G,
            activities: n,
            applicationStream: o,
            voiceChannel: p,
            dismissibleContents: W,
            userTag: h,
            occluded: R,
            selfDeaf: I,
            selfMute: m,
            serverDeaf: T,
            serverMute: E,
            speaking: u,
            voiceDb: f,
            speakingWhileMuted: C,
            speakingWhilePTTInactive: ee,
            status: a,
            streaming: s,
            suppress: g,
            webBuildOverride: y,
            awaitingRemote: b,
            nameplate: V,
            selectedGuildId: D,
            avatarDecoration: k,
            isQuestBarEmpty: H,
            isListenAlongVisible: Y,
            deviceChangedTooltipType: et,
            onDismissDeviceChangedTooltip: () => en(et),
            shouldShowPTTJoinTooltip: Q,
            dismissPTTJoinTooltip: J,
        }),
    });
}
