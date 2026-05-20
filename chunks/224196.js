"use strict";
n.d(t, { g: () => rA, A: () => rS }), n(321073);
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
    O = n(873174),
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
    B = n(734066),
    H = n(710315),
    j = n(601255),
    Y = n(562819),
    W = n(449582),
    K = n(351952),
    z = n(88686),
    $ = n(174755),
    q = n(302223),
    Z = n(609425),
    X = n(922301),
    Q = n(368919),
    J = n(643501),
    ee = n(534514),
    et = n(834730),
    en = n(789645),
    ei = n(826673),
    er = n(750506),
    es = n(780964),
    ea = n(766075),
    eo = n(417146),
    el = n(552122),
    eu = n(717421),
    ec = n(775602),
    ed = n(993843);
let e_ = { mass: 10, tension: 550, friction: 140 };
function ef(e) {
    let { className: t, pageMultiplier: n } = e,
        s = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        [o, u] = r.useState({ x: 0, y: 0 }),
        d = r.useMemo(
            () =>
                l().throttle((e) => {
                    s || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, s],
        );
    r.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [_, f] = (0, eu.z)(() => ({ x: 0, y: 0, config: e_ }));
    return (
        r.useEffect(() => {
            f({ x: o.x, y: o.y });
        }, [o.x, o.y, f]),
        (0, i.jsx)(O.animated.div, {
            style: { transform: (0, O.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ed.T, t),
        })
    );
}
var eh = n(49999),
    ep = n(375708),
    eE = n(275883);
function em(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: r } = e,
        s = el.A.useIsEligible(),
        a = (0, ei.JZ)(t),
        o = null != n,
        l = null != r ? { color: r } : void 0,
        { analyticsLocations: u } = (0, M.Ay)(w.A.HOLIDAY_COACHMARK),
        c = (e) => {
            (0, ei.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, ea.openUserSettings)(es.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(eh.i.TAKE_ACTION);
        };
    return s && !a
        ? (0, i.jsx)(er.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eE.iE,
                  style: { backgroundColor: o ? n : void 0 },
                  children: [
                      !o &&
                          (0, i.jsxs)("div", {
                              className: eE.o5,
                              children: [
                                  (0, i.jsx)(ef, { className: eE.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: eE.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: eE.c8 }),
                      (0, i.jsxs)("div", {
                          className: eE.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(ee.D, {
                                          variant: "heading-md/bold",
                                          color: null != l ? void 0 : "always-white",
                                          style: l,
                                          children: ep.intl.string(ep.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(et.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: ep.intl.format(ep.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      E.D,
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
                              (0, i.jsx)(E.D, {
                                  className: eE.l2,
                                  onClick: () => c(eh.i.USER_DISMISS),
                                  children: (0, i.jsx)(en.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eg() {
    return null == eo.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(em, {
              dismissibleContent: eo.A.coachmarkDismissibleContent,
              backgroundColor: eo.A.coachmarkBackgroundColor,
              specialTextColor: eo.A.coachmarkSpecialTextColor,
          });
}
var eA = n(74848),
    eI = n(832248),
    eT = n(607399),
    eS = n(707554),
    eN = n(224640),
    ey = n(305866),
    eC = n(364522),
    ev = n(22231),
    eO = n(133171),
    eR = n(780338),
    eb = n(980707),
    eD = n(26137),
    eL = n(473935),
    ew = n(765671),
    eM = n(457965),
    eP = n(176781),
    ex = n(777666),
    eU = n(320448),
    ek = n(993401),
    eG = n(447349);
function eF(e) {
    return (0, i.jsx)("div", {
        className: eG.wE,
        children: (0, i.jsx)(eb.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eV(e) {
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
        f = null != n,
        h = (0, ek.rE)({ action: t, onClick: n }),
        [m, g] = r.useState(!1),
        I = r.useRef(null),
        T = c ?? I,
        S = null != u,
        N = S && f,
        y = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        C = r.useCallback(() => {
            g(!0);
        }, []),
        v = r.useCallback(() => {
            (0, A.hasAnyModalOpen)() || g(!1);
        }, []),
        O = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: eG.iA,
                        children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: eG.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(et.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eG.W1,
                                        children: a,
                                    }),
                                    (0, i.jsx)(et.E, { color: "currentColor", variant: "text-xs/medium", children: o }),
                                ],
                            }),
                            l,
                        ],
                    }),
                ],
            }),
        R = (e) => {
            let t;
            return (
                (t = N
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(E.D, {
                                  className: eG.ef,
                                  onClick: h,
                                  focusProps: { offset: { ...y.offset, right: 0 } },
                                  children: O(),
                              }),
                              (0, i.jsx)(E.D, {
                                  className: eG.ap,
                                  "aria-label": ep.intl.string(ep.t.PdRCRg),
                                  ...e,
                                  onClick: C,
                                  focusProps: y,
                                  children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : S
                      ? (0, i.jsxs)(E.D, {
                            className: eG.ef,
                            ...e,
                            onClick: C,
                            focusProps: y,
                            children: [
                                O(),
                                (0, i.jsx)("div", {
                                    className: eG.ap,
                                    children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(E.D, { className: eG.ef, onClick: h, focusProps: y, children: O() })),
                (0, i.jsx)("div", { ref: T, className: eG.jG, children: t })
            );
        };
    return S
        ? (0, i.jsx)("li", {
              className: eG.j$,
              onMouseEnter: C,
              onMouseLeave: v,
              children: (0, i.jsx)(p.Y, {
                  targetElementRef: d ?? T,
                  align: _,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: m,
                  onRequestClose: v,
                  children: R,
              }),
          })
        : (0, i.jsx)("li", { className: eG.j$, children: R() });
}
function eB(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eH = n(274372),
    ej = n(271597),
    eY = n(990078),
    eW = n(315710),
    eK = n(475358),
    ez = n(408278),
    e$ = n(625903),
    eq = n(404778),
    eZ = n(689175),
    eX = n(821609),
    eQ = n(532624),
    eJ = n(927813),
    e0 = n(879631),
    e1 = n(350535),
    e2 = n(372684),
    e3 = n(572164),
    e6 = n(953932),
    e4 = n(280483),
    e5 = n(890856),
    e7 = n(713517),
    e8 = n(609174),
    e9 = n(353605),
    te = n(434320),
    tt = n(82716),
    tn = n(585579),
    ti = n(226870),
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
            "aria-label": ep.intl.string(ep.t.bt75uw),
            onClick: c,
            className: a()(ts.Z1, o),
            children: (0, i.jsxs)(ti.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(ex.Lp, { className: ts.Ad, text: ep.intl.string(ep.t.y2b7CA) }),
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
                                children: [(0, i.jsx)(te.f, { onBeforeEdit: s }), (0, i.jsx)(tn.E, {})],
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
    let o = (0, c.yK)([eH.A], () => eH.A.getClips()),
        l = (0, c.bG)([eH.A], () => eH.A.getPendingClips()),
        u = (0, c.bG)([eH.A], () => eH.A.getSettings()),
        d = (0, c.bG)([eH.A], () => eH.A.getNewClipIds()),
        _ = (0, c.bG)([eQ.Ay], () => eQ.Ay.getKeybindForAction(to.hCu.SAVE_CLIP)),
        f = r.useRef(null),
        h = r.useMemo(() => {
            let e = [...l, ...o].filter((e) => e.type === e2.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [o, l]),
        p = r.useMemo(() => h.slice(0, 16), [h]),
        E = h.length > 16,
        m = null != _ ? e1.dI(_.shortcut, !0) : null;
    (0, eW.t)(f);
    let g = (0, e0.$)(u.clipsLength / eJ.A.Millis.SECOND),
        A = (0, tl.zr)(u.clipsQuality.resolution),
        I = ep.intl.formatToPlainString(ep.t.Qb44XH, { fps: u.clipsQuality.frameRate });
    return (0, i.jsxs)("div", {
        ref: (e) => {
            (f.current = e), a?.(e);
        },
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
                            (0, i.jsx)(ee.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ep.intl.string(ep.t.z2jK6X),
                            }),
                            null != m && (0, i.jsx)(eK.e, { className: tc.P, shortcut: m }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tc.$s,
                        children: [
                            (0, i.jsx)(eY.m, {
                                text: ep.intl.string(ep.t["3D5yo/"]),
                                children: (0, i.jsx)(ez.K, {
                                    onClick: () => n(),
                                    icon: e$.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(ep.t["3D5yo/"]),
                                }),
                            }),
                            (0, i.jsx)(eY.m, {
                                text: ep.intl.string(tu.default["55C2MH"]),
                                children: (0, i.jsx)(ez.K, {
                                    onClick: () => t(),
                                    icon: eP.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(tu.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: tc.P6,
                children: [g, A, I].join(" \u2022 "),
            }),
            (0, i.jsx)(eq.c, {}),
            p.length > 0
                ? (0, i.jsxs)(eZ.Ch, {
                      className: tc.Vg,
                      fade: !0,
                      disableFocusRingScope: !0,
                      children: [
                          p.map((e) => (0, i.jsx)(ta, { clip: e, isNew: d.includes(e.id), onClose: s }, e.id)),
                          E &&
                              (0, i.jsx)("div", {
                                  className: tc.qr,
                                  children: (0, i.jsx)(eX.$, {
                                      onClick: () => t(),
                                      text: ep.intl.string(tu.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)(t_, { keybindString: m }),
        ],
    });
}
function t_(e) {
    let { keybindString: t } = e,
        n = (0, e3.Et)();
    return (0, i.jsxs)("div", {
        className: tc.p$,
        children: [
            (0, i.jsx)(et.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tc.qO,
                children: ep.intl.string(tu.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(et.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: ep.intl.format(tu.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  et.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(eK.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e6.A, {}),
        ],
    });
}
function tf(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        s = (0, B.sw)(),
        { userStatusMenu: a } = H.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        o = (0, c.bG)([eH.A], () => eH.A.getNewClipIds().length),
        l = r.useCallback(
            (e) => {
                t(), (0, ej.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        u = r.useCallback(() => {
            t(), (0, ea.openUserSettings)(es.X.CLIPS_PANEL);
        }, [t]);
    return s && a
        ? (0, i.jsx)(eV, {
              action: "PRESS_CLIPS",
              icon: eP.x,
              label: ep.intl.string(ep.t.z2jK6X),
              trailing: o > 0 ? (0, i.jsx)(ex.hV, { count: o }) : null,
              onClick: () => l(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(td, { ...e, onOpenGallery: l, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var th = n(480335),
    tp = n(31956),
    tE = n(361628),
    tm = n(744808),
    tg = n(282389),
    tA = n(645507),
    tI = n(970931),
    tT = n(462887),
    tS = n(736653),
    tN = n(439174),
    ty = n(428262),
    tC = n(878784),
    tv = n(788868);
function tO() {
    let e = (0, tC.Xb)(),
        t = (0, ty.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tv.sp.length - 1; t >= 0; t--) {
        let i = tv.VD[tv.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tR = {
        [tv.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tv.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tv.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tv.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tv.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tv.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tv.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tv.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tb = {
        [tv.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tv.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tv.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tv.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tv.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tv.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tv.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tv.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tD = n(682165);
let tL = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tw() {
    let e = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        t = (0, eI.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tO(),
                t = (0, tT.M)((0, tS.Ay)());
            if (null == e) return null;
            let n = tR[e],
                i = tb[e],
                r = {
                    currentBadge: (0, tN.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tv.sp.indexOf(e);
            if (s > 0) {
                let e = tv.sp[s - 1],
                    n = tR[e];
                (r.prevBadge = (0, tN.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [s, a] = r.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tM, { levelUpData: s });
}
function tM(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        s = r.useCallback(() => {
            eI.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(eW.O, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tD.i,
            children: [
                (0, i.jsx)("div", {
                    className: tD.b,
                    children: (0, i.jsx)(eY.m, {
                        text: ep.intl.string(ep.t.cpT0Cq),
                        children: (0, i.jsx)(ez.K, {
                            icon: en.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": ep.intl.string(ep.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tL, { levelUpData: t }) }),
            ],
        }),
    });
}
var tP = n(206835),
    tx = n(183555),
    tU = n(999291),
    tk = n(975732),
    tG = n(718019),
    tF = n(694720),
    tV = n(915614),
    tB = n(744753),
    tH = n(559506),
    tj = n(646986),
    tY = n(349419),
    tW = n(946356),
    tK = n(878555),
    tz = n(624479),
    t$ = n(206845),
    tq = n(957565),
    tZ = n(427262),
    tX = n(962352);
function tQ(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, tx.NJ)();
    return tq.p5
        ? (0, i.jsx)(t$.A, {
              text: ep.intl.string(ep.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tZ.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(E.D, {
                      ...e,
                      className: a()(tX.c, { [tX.R]: n }),
                      "aria-label": ep.intl.string(ep.t.y5MwJy),
                      children: (0, i.jsx)(tz.T, { size: "xs", color: "currentColor" }),
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
    t4 = n(661531),
    t5 = n(477782),
    t7 = n(628284),
    t8 = n(695366),
    t9 = n(363195),
    ne = n(889227),
    nt = n(287809),
    nn = n(174459),
    ni = n(429707),
    nr = n(274303),
    ns = n(994125),
    na = n(347853),
    no = n(335020),
    nl = n(43105),
    nu = n(704824),
    nc = n(46225),
    nd = n(429913),
    n_ = n(379848),
    nf = n(633075),
    nh = n(735321),
    np = n(667049),
    nE = n(606758),
    nm = n(495544),
    ng = n(403362),
    nA = n(518477);
function nI(e) {
    let { targetElementRef: t, onClose: n } = e,
        [s, a] = r.useState(!1),
        { trackUserProfileEditAction: o } = (0, tx.NJ)(),
        l = (0, c.bG)([nm.default], () => nm.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([nm.default], () => nm.default.getId()),
                i = (0, np.A)(n),
                s = r.useMemo(() => i.filter((e) => e instanceof nf.R), [i]),
                a =
                    ((e = (0, eM.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    r.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                o = r.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                l = ((t = (0, nd.A)(o)), r.useMemo(() => t.filter(ng.Vq), [t])),
                { tokens: u, fetched: d } = (0, nu.j)(o),
                _ = (0, nc.U9)(l);
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
        : (0, i.jsx)(n_.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: r, markAsDismissed: c } = e,
                      _ = u.find((e) => e.dismissibleContent === r);
                  if (null == _) return null;
                  let f = "linked" === _.type,
                      h = () =>
                          (0, tk.openUserProfileModal)({ userId: l, tabSection: nA.RP.WIDGETS }).then(() => {
                              c(eh.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(nl.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != _.config.editProfileUpsellImage
                              ? { type: "image", src: _.config.editProfileUpsellImage }
                              : void 0,
                      title: ep.intl.format(ep.t.TXDztH, { applicationName: _.application.name }),
                      body: f ? ep.intl.string(ep.t["63Kso0"]) : ep.intl.string(ep.t.HwXoeC),
                      onRequestClose: () => c(eh.i.USER_DISMISS),
                      actions: [
                          f
                              ? {
                                    text: ep.intl.string(ep.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            h()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new nf.R({ applicationId: _.application.id })),
                                                        void ((0, nh.Y5)(e),
                                                        o({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, nE.XA)(nA.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => a(!1));
                                    },
                                    loading: s,
                                }
                              : {
                                    text: ep.intl.string(ep.t["DSJi3+"]),
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
var nT = n(461213),
    nS = n(818348),
    nN = n(466573);
function ny() {
    let e = (0, c.bG)([nT.A], () => nT.A.getStatus()),
        t = (0, tZ.MU)(e) ?? "",
        n = e === nS.cl.INVISIBLE || e === nS.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nN.k,
        children: [
            (0, i.jsxs)(m.A, { tag: "div", children: [ep.intl.string(ep.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eY.m, {
                    text: ep.intl.string(ep.t.L99HQm),
                    children: (0, i.jsx)(t8.E, {
                        size: "xs",
                        color: t4.A.colors.STATUS_WARNING,
                        "aria-label": ep.intl.string(ep.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nC = n(841595);
let nv = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nO = n(501838),
    nR = n(760716),
    nb = n(915089),
    nD = n(13808);
function nL(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: o,
            height: l,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nb.GV)(),
        _ = r.useRef(null),
        f = (0, eu.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: l },
            to: { transform: "translate3d(0, 0, 0)", height: l },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(O.animated.div, {
        className: a()(nD.kL, u),
        style: f,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nD.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nD.U1,
                    children: [
                        (0, i.jsx)(E.D, {
                            innerRef: _,
                            "aria-label": ep.intl.string(ep.t.WAI6xu),
                            className: nD.b,
                            onClick: () => {
                                t(eh.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(en.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(ee.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(et.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(eC.Ip, {
                    className: nD.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nD.gT, c), children: o }),
                }),
            ],
        }),
    });
}
var nw = n(973912),
    nM = n(871123),
    nP = n(44724),
    nx = n(501573);
function nU() {
    (0, nP.default)({ guildId: (0, nM.zf)() });
}
function nk(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: s } = (0, M.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nL, {
              heading: ep.intl.string(ep.t["vy/61K"]),
              subheading: ep.intl.string(ep.t.tEee9t),
              markAsDismissed: r,
              className: nx.Zj,
              contentClassName: nx.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nw.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nx.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nx.UD,
                      children: (0, i.jsx)(eX.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ep.intl.string(ep.t.rg9FQp),
                          onClick: nU,
                      }),
                  }),
              ],
          });
}
function nG(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nv.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nt.default], () => nt.default.getCurrentUser()),
                s = (0, c.bG)([nC.A], () => (null != i ? nC.A.getFirstWishlistId(i.id) : null)),
                a = (0, nR.i)((e) => e.recommendationApplicationIds),
                l = (0, nO.rY)(),
                u = (0, nO.qx)();
            return r.useMemo(
                () => (null != a || (null == s && n) ? (0, o.uniq)([...(a ?? []), ...u, ...l]).sort() : []),
                [n, s, u, l, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        l = r.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(n_.Ay, {
        contentTypes: l,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: a } = e;
            return null == s
                ? null
                : r === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nk, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nF = n(146901),
    nV = n(827827);
let nB = [
        { duration: 15 * eJ.A.Millis.MINUTE, label: () => ep.intl.string(ep.t["8ot6gv"]) },
        { duration: eJ.A.Millis.HOUR, label: () => ep.intl.string(ep.t.UMWBZr) },
        { duration: 8 * eJ.A.Millis.HOUR, label: () => ep.intl.string(ep.t.EpAXPC) },
        { duration: eJ.A.Millis.DAY, label: () => ep.intl.string(ep.t["755t4q"]) },
        { duration: 3 * eJ.A.Millis.DAY, label: () => ep.intl.string(ep.t["f3/1ch"]) },
        { duration: void 0, label: () => ep.intl.string(ep.t["46dqJY"]) },
    ],
    nH = "forever";
function nj(e) {
    let { status: t, currentStatus: n, description: r } = e,
        s = t !== to.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nB.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    t5.Dr,
                    {
                        id: `${t}-${r}`,
                        label: s(),
                        action: () => (0, nV.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? nH,
                );
            }),
        });
    return (0, i.jsx)(t5.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, tZ.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(eO.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nV.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nY(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nF._)(e);
    return "today" === t
        ? ep.intl.formatToPlainString(ep.t.ZxxHIO, { timeString: i })
        : ep.intl.formatToPlainString(ep.t["9OFjSe"], { dateString: n, timeString: i });
}
var nW = n(996988),
    nK = n(656884);
function nz(e) {
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
        C = (0, tU.Ay)(E.id, void 0),
        { analyticsLocations: v } = (0, M.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        O = (0, tx.pb)({ layout: "ACCOUNT_POPOUT", userId: E.id, guildId: void 0 }),
        { ref: R, height: b } = (0, ew.Ay)(),
        { isHoveringOrFocusing: D, isHovering: L } = (0, e7.A)(R);
    r.useEffect(() => {
        I?.(R.current);
    }, [R, I]),
        r.useEffect(
            () => (eI.A.setState({ isOpen: !0 }), () => eI.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let P = (0, c.bG)([t2.A], () => t2.A.getStatus(E.id)),
        x = nY(t1.CY.useSetting()),
        U = (0, c.bG)([t3.A], () => t3.A.hidePersonalInformation),
        k = (0, tI.kB)(),
        G = t1.Q_.useSetting(),
        F =
            ((t = t1.CY.useSetting()),
            (n = (0, tI.kB)()),
            (s = t1.Jr.useSetting()),
            (o = (e) => {
                let i = nY(t);
                if (P === e && null != i) return i;
                switch (e) {
                    case to.clD.DND:
                        return n ? ep.intl.string(ep.t.day5A6) : ep.intl.string(ep.t["tq/fMK"]);
                    case to.clD.INVISIBLE:
                        return ep.intl.string(ep.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (l = (0, i.jsx)(i.Fragment, {
                children: nB.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        t5.Dr,
                        {
                            id: `${P}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tI.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nH,
                    );
                }),
            })),
            (u = nj({ status: to.clD.ONLINE, currentStatus: P })),
            (d = nj({ status: to.clD.IDLE, currentStatus: P, description: o(to.clD.IDLE) })),
            (_ = nj({ status: to.clD.DND, currentStatus: P, description: o(to.clD.DND) })),
            (p = nj({ status: to.clD.INVISIBLE, currentStatus: P, description: o(to.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(t5.bX, {}, "menu-separator-statuses"),
                    d,
                    _,
                    p,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(t5.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      t5.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ep.intl.string(ep.t.gJRnwK),
                                          iconLeft: eR.a,
                                          leadingAccessory: { type: "icon", icon: eR.a },
                                          badge: { text: ep.intl.string(ep.t.ApAu9f) },
                                          subtext:
                                              null != s && "0" !== s
                                                  ? ep.intl.format(ep.t.BWD8fs, {
                                                        endTime: new Date(Number(s)).toLocaleString(
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
                                              (0, tI.ES)(!n);
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
            let t = (0, c.bG)([nt.default], () => nt.default.getCurrentUser()),
                n = (0, c.bG)([t3.A], () => t3.A.hidePersonalInformation),
                r = (0, c.bG)([t9.A], () => (0, tT.M)(t9.A.theme)),
                { multiAccountUsers: s } = (0, ns.K)(),
                a = s.map((s) => {
                    let a = new ne.A(s),
                        o = a.id === t?.id,
                        l = s.tokenStatus === nr.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        t5.Dr,
                        {
                            id: a.id,
                            focusedClassName: no.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: no.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: no.DD,
                                            children: [
                                                (0, i.jsx)(et.E, {
                                                    className: no.gE,
                                                    variant: "text-sm/normal",
                                                    children: tZ.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(et.E, {
                                                        className: no.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        o &&
                                            (0, i.jsx)(t7.y, {
                                                size: "sm",
                                                color: t
                                                    ? t4.A.unsafe_rawColors.WHITE.css
                                                    : t4.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t4.A.unsafe_rawColors.BRAND_500.css
                                                        : t4.A.unsafe_rawColors.WHITE.css,
                                                className: no.s0,
                                            }),
                                        l &&
                                            (0, i.jsx)(t8.E, {
                                                color: t4.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t4.A.unsafe_rawColors.BRAND_500.css
                                                        : t4.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: no.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), l)) (0, na.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nn.default.track(to.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: to.JJy.USER_PROFILE },
                                        }),
                                        ni.Mx(n));
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
                            (0, i.jsx)(t5.bX, {}),
                            (0, i.jsx)(t5.Dr, {
                                id: "manage-accounts",
                                label: ep.intl.string(ep.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, na.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(g),
        B = (0, tP.A)({ analyticsLocations: v }),
        H = (0, ty.TW)(E),
        j = r.useRef(null),
        Y = r.useRef(null),
        W = (0, tE.A)(C?.profileFrame?.skuId, "UserProfileAccountPopout"),
        K = (0, tg.A)(C?.profileFrame?.skuId);
    (0, tp.A)({ skuId: C?.profileFrame?.skuId, openedAt: S, context: O, analyticsLocations: v });
    let z = r.useRef((0, eI.A)((e) => e.shouldRenderTenureLevelUp)),
        $ = r.useMemo(() => (0, tA.A)(), []),
        [q, Z] = r.useState(() => eI.A.getState().shouldRenderTenureLevelUp);
    r.useEffect(() => {
        let e = setTimeout(() => {
            Z(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let X = (e) => {
            g?.(), (0, tk.openUserProfileModal)({ customStatusPrompt: $, sourceAnalyticsLocations: v, ...O, ...e });
        },
        Q = C?.widgets != null && C.widgets.length > 0,
        J = r.useCallback(() => {
            g();
        }, [g]),
        ee = r.useCallback(() => {
            B(), J();
        }, [B, J]),
        en = (0, eM.QR)({ location: "UserProfileAccountPopout" }),
        ei = (0, eM.zd)({ location: "UserProfileAccountPopout" }),
        er = r.useId();
    return (0, i.jsx)(M.f5, {
        value: v,
        children: (0, i.jsx)(tx.of, {
            value: O,
            openedAt: S,
            fetchStartedAt: C?.fetchStartedAt,
            fetchEndedAt: C?.fetchEndedAt,
            isLoaded: C?.isLoaded,
            children: (0, i.jsxs)(ey.l, {
                ref: R,
                "aria-labelledby": er,
                className: a()(eG.jC, N),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(m.A, {
                        children: (0, i.jsx)(eS.H, { id: er, children: ep.intl.string(ep.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eS.F, {
                        children: [
                            (0, i.jsx)(nG, { displayProfile: C, handleOpenUserProfileModal: X, height: b }),
                            (0, i.jsxs)(tW.A, {
                                className: a()(eG.BK, K),
                                user: E,
                                displayProfile: C,
                                themeType: nW.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nK.wx,
                                        children: [
                                            (0, i.jsx)(tV.A, { user: E, displayProfile: C, themeType: nW.d.POPOUT }),
                                            (0, i.jsx)(tG.A, {
                                                user: E,
                                                displayProfile: C,
                                                themeType: nW.d.POPOUT,
                                                onOpenProfile: y ? void 0 : X,
                                            }),
                                            (0, i.jsx)(tJ.A, {
                                                ref: j,
                                                user: E,
                                                themeType: nW.d.POPOUT,
                                                onCloseProfile: g,
                                                prompt: $,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eC.Ip, {
                                        className: eG.rf,
                                        style: { pointerEvents: q ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tH.A, { userId: E.id }),
                                            (0, i.jsx)(tK.Ay, {
                                                className: eG.eF,
                                                user: E,
                                                displayName: t6.Ay.getName(void 0, null, E),
                                                onClickName: y ? void 0 : X,
                                                displayNameTrailing: (0, i.jsx)(tQ, { user: E, isVisible: D }),
                                                pronouns: C?.pronouns,
                                                trailing: (0, i.jsx)(tF.A, {
                                                    displayProfile: C,
                                                    themeType: nW.d.POPOUT,
                                                    onClose: g,
                                                    shouldOpenBadgeTooltip: null != T ? (e) => e === T : void 0,
                                                    shouldGlowTenureBadge: z.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tB.A, { isPremiumUser: H, onInteraction: g }),
                                            (0, i.jsx)(t0.A, {
                                                user: E,
                                                bio: C?.bio,
                                                hidePersonalInformation: U,
                                                onClose: g,
                                            }),
                                            Q &&
                                                (0, i.jsx)(tY.A, {
                                                    user: E,
                                                    widgets: C?.widgets,
                                                    onOpenUserProfileModal: X,
                                                }),
                                            (0, i.jsx)(tj.A, {
                                                user: E,
                                                currentUser: E,
                                                onOpenUserProfileModal: X,
                                                onClose: g,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eG.T_,
                                                children: [
                                                    (0, i.jsx)(tW.A.Overlay, {
                                                        className: eG.g0,
                                                        children: (0, i.jsxs)(eB, {
                                                            children: [
                                                                (0, i.jsx)(eV, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ep.intl.string(ep.t.s5vZlQ),
                                                                    icon: ev.R,
                                                                    onClick: ee,
                                                                    ref: Y,
                                                                }),
                                                                (0, i.jsx)(eV, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(ny, {}),
                                                                    sublabel: null != x && x,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eO.nW, { status: P, size: 12 }),
                                                                    trailing:
                                                                        (k || P === to.clD.DND) &&
                                                                        (0, i.jsx)(eR.a, { size: "xxs" }),
                                                                    renderSubmenu: eT.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eF, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eG.hQ,
                                                                                  "aria-label": ep.intl.string(
                                                                                      ep.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: eT.Fr
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
                                                                                                      eN.d,
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
                                                                                                          i.jsx)(eb.W, {
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
                                                                (0, i.jsx)(tf, { onClose: g, popoutContainerRef: R }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tW.A.Overlay, {
                                                        className: eG.g0,
                                                        children: (0, i.jsxs)(eB, {
                                                            children: [
                                                                (0, i.jsx)(eV, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eD.r,
                                                                    label: ep.intl.string(ep.t.oMNyYN),
                                                                    onClick: () => {
                                                                        g(), (0, na.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eF, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ep.intl.string(ep.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: V,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tq.p5 &&
                                                                    G &&
                                                                    (0, i.jsx)(eV, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eL.L,
                                                                        label: ep.intl.string(ep.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tq.C)(E.id), g();
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
                                        (0, i.jsx)(th.A, { skuId: C.profileEffect.skuId, isHovering: L }),
                                    null != W && (0, i.jsx)(tm.A, { frame: W }),
                                ],
                            }),
                            en && ei ? (0, i.jsx)(nI, { targetElementRef: Y, onClose: g }) : null,
                            (0, i.jsx)(tw, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n$ = n(371912),
    nq = n(655116),
    nZ = n(21973),
    nX = n(454719),
    nQ = n(342296),
    nJ = n(852712),
    n0 = n(167579),
    n1 = n(173660),
    n2 = n(761853),
    n3 = n(763827),
    n6 = n(499156),
    n4 = n(731854);
let n5 = 2.5 * eJ.A.Millis.SECOND,
    n7 = +eJ.A.Millis.HOUR;
var n8 = n(459838),
    n9 = n(485296);
let ie = 3 * eJ.A.Millis.SECOND,
    it = +eJ.A.Millis.DAY;
var ii = n(616356),
    ir = n(734057),
    is = n(629016),
    ia = n(186111),
    io = n(967198),
    il = n(486020),
    iu = n(625494),
    ic = n(536194),
    id = n(19575),
    i_ = n(994314),
    ih = n(485599),
    ip = n(537668),
    iE = n(626584),
    im = n(531685),
    ig = n(259065),
    iA = n(864386);
let iI = new iE.A("DisplayNameStylesCoachmark");
function iT(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, M.Ay)(),
        o = (0, r.useRef)(null),
        l = (0, c.bG)([im.A], () => im.A.isFocused()),
        u = (0, r.useCallback)(() => {
            t(eh.i.TAKE_ACTION),
                (0, ea.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, ig.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, r.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            l && o.current?.paused ? o.current?.play().catch(iI.error) : l || o.current?.pause();
        }, [l]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                s,
                (0, i.jsx)(nl.A, {
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
                    title: ep.intl.string(iA.default["1AE464"]),
                    body: [ep.intl.string(iA.default.cNc1g9), ep.intl.string(ep.t["4JNXHG"])],
                    actions: [{ text: ep.intl.string(ep.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var iS = n(131607),
    iN = n(45780),
    iy = n(696451),
    iC = n(71393),
    iv = n(685073),
    iO = n(228366);
let iR = { lastSeenInfos: {} },
    ib = iR;
class iD extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        ib = e ?? iR;
    }
    getState() {
        return ib;
    }
    getGuildLastSeenInfo(e) {
        return ib.lastSeenInfos[e] ?? null;
    }
}
let iL = new iD(iO.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        ib.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        ib = iR;
    },
});
var iw = n(116833),
    iM = n(514661);
let iP = new iE.A("GuildTagAvailableCoachmark");
function ix(e) {
    let t = (0, c.bG)([iC.A], () => iC.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iO.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iM.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iv.q0)(t))
        return iP.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nl.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iw.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t["m/Tc3n"], { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
function iU(e) {
    let t = (0, c.bG)([iC.A], () => iC.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, iM.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iv.q0)(t))
        return iP.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nl.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iw.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t.VFqnyU, { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
        ],
    });
}
var ik = n(843010),
    iG = n(764231),
    iF = n(425713);
function iV(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tO(),
        s = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        a = (0, eI.A)((e) => e.isOpen),
        o = (0, ik.G)();
    return s || null == r || a || o
        ? null
        : (0, i.jsx)(n_.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(iB, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iB(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        o = tv.sp.indexOf(t),
        l = (0, iF.I)(tv.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, r.useCallback)(() => {
            n(eh.i.TAKE_ACTION),
                eI.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iu._.dispatch(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(eh.i.USER_DISMISS);
        }, [n]),
        d = tv.VD[t],
        _ = ep.intl.formatToPlainString(ep.t.ewkaVR, {
            timeMilestone: (0, iG.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: ep.intl.string(ep.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nl.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != l ? { type: "image", src: l, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ep.intl.string(ep.t.VoDxsV),
        body: _,
        actions: f,
    });
}
function iH(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n$.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iN.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? to.dJq),
                r = (0, c.bG)([iC.A, nt.default, iy.Ay], () => {
                    if (null === e) return !1;
                    let t = iC.A.getGuild(e);
                    if (void 0 === t || !(0, iv.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nt.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iy.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, iS.ww)(r && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? to.eGj);
        })(e.guildId, { shouldShow: r }),
        [o, l] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                s = (0, c.bG)([iL], () => (null === r ? null : iL.getGuildLastSeenInfo(r))),
                a = (0, c.bG)([iC.A], () => iC.A.getGuild(r)?.profile?.tag),
                o = null != a && i?.identityGuildId === r && i?.tag === null,
                l = null != r && s?.tag === a,
                u = null !== r && o && !l;
            return (0, iS.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? s === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iU, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : o === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(ix, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: l,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iV, { groupName: eh.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(n_.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: eh.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, i.jsx)(iT, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(ip.A, {
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
var ij = n(615675),
    iY = n(900797),
    iW = n(847374),
    iK = n(348858),
    iz = n(617354),
    i$ = n(206018),
    iq = n(42473),
    iZ = n(490704),
    iX = n(967194);
function iQ(e) {
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
        } = (0, iK.I)(_ ? "undeafen" : "deafen"),
        g = n ? ij.T : f,
        { name: A } = (0, eA.x5)(n4.oh.AUDIO_OUTPUT),
        I = (0, iz.A)(t, n, s),
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
                            children: (0, i.jsx)(i$.A, {
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
                        f = d ? iY.t : iW.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: a()(iZ.Lh, { [iZ.v8]: _, [iZ.q6]: d }),
                        children: [
                            (0, i.jsx)(iq.A, {
                                "aria-checked": _,
                                "aria-label": ep.intl.string(ep.t.wjcRFX),
                                className: iZ.eT,
                                disabled: s,
                                icon: (0, i.jsx)(g, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? t4.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: l,
                                }),
                                iconForeground: _ ? iX.o : void 0,
                                innerClassName: a()({ [iX.T]: n }),
                                onClick: o,
                                onContextMenu: r,
                                onMouseEnter: E,
                                onMouseLeave: m,
                                plated: null != u,
                                redGlow: _,
                                role: "switch",
                                tooltipText: I,
                            }),
                            (0, i.jsx)(iq.A, {
                                className: a()(iZ.UT, { [iZ.q6]: d }),
                                disabled: s,
                                icon: (0, i.jsx)(f, {
                                    className: iZ.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? t4.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: r,
                                onContextMenu: r,
                                plated: null != u,
                                redGlow: _,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: A })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? ep.intl.format(ep.t["f+DDY/"], { outputDeviceName: A })
                                    : ep.intl.string(ep.t.aA4Vce),
                                "aria-label": c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: A })
                                    : ep.intl.string(ep.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var iJ = n(666654),
    i0 = n(523875),
    i1 = n(993719);
let i2 = {};
class i3 extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i2[e] ?? !1;
    }
}
let i6 = new i3(iO.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i2[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i2[t] = !1;
    },
});
var i4 = n(362823),
    i5 = n(980923),
    i7 = n(224585),
    i8 = n(949341),
    i9 = n(973324);
function re(e) {
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
        { showPTTIconIndicator: S } = n6.A.useConfig({ location: "MicrophoneButton" }),
        N = (0, c.bG)([n2.Ay], () => n2.Ay.getMode() === n4.TB.PUSH_TO_TALK),
        y = (0, c.bG)([n2.Ay], () => n2.Ay.getSettings().modeOptions.shortcut),
        C = (0, c.bG)([i6], () => i6.getIsTutorialActive(i4.v.MUTE_TUTORIAL)),
        v = (0, c.bG)([n3.A], () => null != n3.A.getChannelId()),
        { name: O } = (0, eA.x5)(n4.oh.AUDIO_INPUT),
        { enabledInputProfiles: R } = (0, nJ.d)({ location: "MicrophoneButton" }),
        b = r.useRef(null),
        D = n || o || s,
        L = (0, i0.L)(D ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, M.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: x, events: U, play: k } = L,
        G = s || o ? iJ.O : x;
    r.useEffect(() => () => k(), [D, k]);
    let F = (0, i5.A)(n, s, o, l);
    t = E
        ? { tooltipType: "green_void_do_not_use", tooltipText: ep.intl.string(ep.t["29gnR4"]), tooltipForceOpen: !0 }
        : A || m
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ep.intl.format(ep.t.c1qUOQ, { keybind: e1.dI(y).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let B = S && N && v,
        H = D ? t4.A.colors.ICON_VOICE_MUTED : "currentColor",
        j = r.useCallback(() => {
            f(), C && i1.N(i4.v.MUTE_TUTORIAL);
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
                            children: (0, i.jsx)(i$.A, {
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
                        o = s ? iY.t : iW.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(iZ.Lh, { [iZ.v8]: D, [iZ.q6]: s }),
                        children: [
                            (0, i.jsx)(iq.A, {
                                "aria-checked": D,
                                "aria-label": ep.intl.string(ep.t.w4m945),
                                className: iZ.eT,
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
                                children: B ? (0, i.jsx)("div", { className: a()(i8.U, { [i8.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(iq.A, {
                                "aria-label": g
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: O })
                                    : ep.intl.string(ep.t.fRzCbB),
                                className: a()(iZ.UT, { [iZ.q6]: s }),
                                disabled: l,
                                icon: (0, i.jsx)(o, {
                                    className: iZ.$$,
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
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: O })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: g
                                    ? ep.intl.format(ep.t["18wnuD"], { inputDeviceName: O })
                                    : ep.intl.string(ep.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nl.A, {
                targetElementRef: b,
                shouldShow: C,
                graphic: { type: "image", src: i9.A },
                onRequestClose: () => {
                    i1.N(i4.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ep.intl.string(i7.default.VG4zAf),
                body: ep.intl.string(i7.default["8VIRzR"]),
            }),
        ],
    });
}
var rt = n(935399),
    rn = n(505312),
    ri = n(848847),
    rr = n(88001),
    rs = n(466919),
    ra = n(438705);
let ro = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = r.useCallback(() => {
            s(), (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(nl.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: ra },
        shouldShow: n,
        title: ep.intl.format(rs.default.bx8sR9, { premiumGroupProductName: (0, rr.DP)() }),
        body: ep.intl.format(rs.default.Pw4OFZ, { premiumGroupProductName: (0, rr.DP)() }),
        onRequestClose: s,
        actions: [{ text: ep.intl.string(rs.default.DD26QR), onClick: a }],
    });
};
var rl = n(873298),
    ru = n(840387);
function rc(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, ru.Z)(),
        a = t1.KP.useSetting(),
        o = s && a !== rl.KP.FRIENDS_AND_ALL_GUILDS,
        l = (0, r.useCallback)(() => {
            t(eh.i.TAKE_ACTION), (0, ea.openUserSettings)(es.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, r.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]),
        c = o
            ? a === rl.KP.FRIENDS_ONLY
                ? ep.intl.string(ep.t["/hogEy"])
                : ep.intl.string(ep.t["6hEfm1"])
            : ep.intl.string(ep.t.bnNxW1);
    return (0, i.jsx)(nl.A, {
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
        title: ep.intl.string(ep.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ep.intl.string(ep.t.eOoTMX), variant: "primary", onClick: l }],
    });
}
function rd(e) {
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
    (0, rt.Ay)(() => {
        let e = () => h(!0);
        return (
            iu._.subscribe(to.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iu._.unsubscribe(to.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = r.useCallback(() => {
        h(!1), a();
    }, [a]);
    t = null != s ? ep.intl.formatToPlainString(ep.t.Gzh6ZP, { webBuildOverride: s.id }) : ep.intl.string(ep.t.cduTBL);
    let E = e$.Z,
        m = (0, rn.w)();
    return (
        (E = null != s ? ri.H : m.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(iq.A, {
                    ref: _,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: o,
                    "aria-label": ep.intl.string(ep.t.cduTBL),
                    icon: (0, i.jsx)(E, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...m.events,
                    plated: null != c,
                }),
                (0, i.jsx)(ro, { targetElementRef: _, shouldShow: f, onDismiss: () => h(!1) }),
                (0, i.jsx)(n_.Ay, {
                    contentTypes: l,
                    groupName: eh.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rc, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var r_ = n(489902);
let rf = id.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    rh = 2.5 * eJ.A.Millis.SECOND,
    rp = 2 * eJ.A.Millis.MINUTE,
    rE = 2 * eJ.A.Millis.MINUTE,
    rm = 5 * eJ.A.Millis.SECOND;
function rg(e) {
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
        S = (0, il.F_)({ avatarDecoration: m, size: (0, Y.Te)(h._3.SIZE_32) }),
        N = (0, Z.A)(),
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
                        iu._.subscribe(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iu._.unsubscribe(to.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        R = (0, K.K)(f);
    return null == l
        ? null
        : (0, i.jsx)(T.A, {
              object: to.ZSU.AVATAR,
              children: (0, i.jsx)(nQ.A, {
                  user: l,
                  targetElementRef: I,
                  clickTrap: !0,
                  preload: () =>
                      (0, nX.A)(l.id, l.getAvatarURL(void 0, nQ.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(nz, {
                          currentUser: l,
                          highlightBadge: v,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: r_.dI,
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
                          className: a()(r_.Q9, { [r_.ZQ]: null != f }),
                          children: [
                              (0, i.jsx)(E.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ep.intl.string(ep.t["5fWB8U"]),
                                  focusProps: { ringTarget: I },
                                  className: r_.$n,
                                  "data-jump-section": g,
                              }),
                              (0, i.jsx)(rf, {
                                  size: h._3.SIZE_32,
                                  src: l.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: o ? to.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: r_.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: r_.oM, children: _(N) }),
                          ],
                      });
                  },
              }),
          });
}
class rA extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(rE, null, !1);
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
        (0, G.A)(e, t, to.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, to.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n3.A.isConnected() ? (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL) : (0, ea.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("8516"),
                    n.e("3633"),
                    n.e("67485"),
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
                    n.e("95700"),
                    n.e("27660"),
                    n.e("85484"),
                    n.e("98848"),
                    n.e("5067"),
                    n.e("6432"),
                    n.e("36407"),
                    n.e("18320"),
                    n.e("69134"),
                    n.e("79705"),
                    n.e("54081"),
                    n.e("83928"),
                    n.e("92702"),
                    n.e("1271"),
                    n.e("15249"),
                    n.e("73589"),
                    n.e("33957"),
                    n.e("59204"),
                    n.e("48628"),
                    n.e("57006"),
                    n.e("64422"),
                    n.e("56386"),
                    n.e("63897"),
                    n.e("8802"),
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
                    n.e("40759"),
                    n.e("65317"),
                    n.e("66969"),
                    n.e("4512"),
                    n.e("12709"),
                    n.e("17980"),
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
                    n.e("96811"),
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
                    n.e("62465"),
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
                    n.e("34409"),
                    n.e("43114"),
                    n.e("79593"),
                    n.e("39053"),
                    n.e("73611"),
                    n.e("41706"),
                    n.e("62175"),
                    n.e("84586"),
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
                    n.e("44182"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: I.Z_, onInteraction: (0, V.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, nJ.d)({ location: "Account" });
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
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rp;
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
                      this.speakingWhileMutedTooltipTimeout.start(rh, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(rh, () =>
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
                    (0, i.jsx)(m.A, { children: tZ.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(v.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: o,
                        textClassName: r_.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let l = t?.find((e) => {
            let { type: t } = e;
            return t === to.$pd.CUSTOM_STATUS;
        });
        return null != l
            ? (0, i.jsxs)(L.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(m.A, { children: tZ.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(q.A, { activity: l, emojiClassName: r_.Zg, className: r_.WO }),
                  ],
              })
            : null != s && s !== to.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(L.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(D, { text: tZ.Ay.humanizeStatus(s) }),
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
                          className: r_.eW,
                          children: (0, i.jsx)(ih.A, {
                              className: a()({ [r_.e8]: null != e }),
                              children: (0, i.jsx)(Q.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? X.G.ANIMATED : X.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: r_.XP,
                          children: (0, i.jsx)(i_.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iH, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(rg, {
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
                                  className: a()(r_.kL, { [r_.UG]: null != n, [r_.bc]: !r, [r_.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)($.A, { nameplate: t, hovered: o, placement: z.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rI, {
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
                      (0, i.jsx)(eg, {}),
                  ],
              });
    }
}
function rI(e) {
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
        v = (0, K.K)(I);
    return (0, i.jsxs)("div", {
        className: r_.Uo,
        style: v,
        children: [
            (0, i.jsx)(re, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: _,
                onClick: h,
                onContextMenu: p,
                iconForeground: null != I ? r_.t4 : void 0,
                nameplate: I,
                shouldShowSpeakingWhileMutedTooltip: l,
                shouldShowInputDeviceChangedTooltip: !l && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: N,
                dismissTooltips: y,
                speaking: C,
            }),
            (0, i.jsx)(iQ, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: f,
                onContextMenu: E,
                awaitingRemote: r,
                iconForeground: null != I ? r_.t4 : void 0,
                nameplate: I,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: y,
            }),
            (0, i.jsx)(rd, {
                webBuildOverride: c,
                onClick: m,
                onContextMenu: g,
                dismissibleContents: A.settings,
                iconForeground: null != I ? r_.t4 : void 0,
                nameplate: I,
            }),
        ],
    });
}
function rT(e) {
    let t = (0, c.bG)([n3.A], () => null != n3.A.getChannelId()),
        n = (0, eA.Py)(e),
        i = r.useRef(new _.Ep()),
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(rm, () => {
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
function rS() {
    let e = (0, c.bG)([nt.default], () => nt.default.getCurrentUser()),
        t = (0, c.bG)([nm.default], () => nm.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nT.A], () => {
            let e = nT.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === to.$pd.STREAMING;
                    }),
                status: nT.A.getStatus(),
            };
        }),
        o = (0, c.bG)([ii.A], () => ii.A.getAnyStreamForUser(t)),
        u = (0, S.A)({ userId: t }),
        f = (0, c.bG)([n9.A], () => n9.A.getVoiceVolume(t)),
        h = tZ.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([n3.A, ir.A], () => {
            let e = n3.A.getChannelId();
            return null != e ? ir.A.getChannel(e) : null;
        }),
        { mute: E, selfMute: m, suppress: g } = (0, n1.A)(p),
        { selfDeaf: I, deaf: T } = (0, n0.A)(p),
        y = (0, c.bG)([P.A], () => ((0, x.kK)() ? P.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        C = (0, c.bG)([n2.Ay], () => n2.Ay.getSpeakingWhileMuted()),
        v = (0, c.bG)([U.A], () => U.A.isFullscreenInContext()),
        O = (0, c.bG)([ia.A], () => ia.A.hasLayers()),
        R = (0, A.useModalsStore)(A.hasAnyModalOpenSelector) || O || ic.P.isDisallowPopupsSet() || v,
        b = (0, B.sw)(),
        { userStatusMenu: D } = H.$.useConfig({ location: "Account" }),
        L = (0, eI.A)((e) => e.isOpen),
        k = (0, c.bG)([J.default], () => null != J.default.getAwaitingRemoteSessionInfo()),
        G = (0, c.bG)([io.A], () => io.A.getGuildId()),
        F = e?.avatarDecoration,
        V = (0, j.A)(F),
        Y = tZ.Ay.useName(e) ?? "",
        { analyticsLocations: K } = (0, M.Ay)(w.A.ACCOUNT),
        z = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: $ } = (0, n$.c9)(),
        q = (0, c.bG)([nq.A, nt.default, is.A], () => {
            let e,
                t = nq.A.getSyncingWith(),
                n = nq.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = l()(Array.from(is.A.getParty(e) ?? []))
                        .map((e) => nt.default.getUser(e))
                        .filter(ng.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        X = (0, nZ.lX)("AccountCoachmark");
    !R &&
        (Z.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        b && D && !L && Z.avatar.push(d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK),
        X && Z.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: ee } = rT(n4.oh.AUDIO_INPUT),
        { shouldShowTooltip: et, dismissTooltip: en } = rT(n4.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ei, dismissTooltip: er } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([n2.Ay], () => n2.Ay.getMode() === n4.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n3.A],
                    () => null != n3.A.getChannelId() && (n3.A.getDuration() ?? Number.MAX_VALUE) < n5,
                ),
                [s, a] = r.useState(!1),
                { showPTTJoinTooltip: o } = n6.A.useConfig({ location: "usePTTJoinTooltip" }),
                l = r.useRef(new _.Ep()),
                u = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((n6.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !o)) return;
                    a(!0),
                        t(!0),
                        u.current.start(n7, () => {
                            t(!1);
                        }),
                        l.current.start(n5, () => {
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
        es = (function () {
            let { showPTTSpeakingIndicator: e } = n6.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([n2.Ay], () => n2.Ay.getMode() === n4.TB.PUSH_TO_TALK),
                s = (0, c.bG)([n3.A], () => n3.A.getRTCConnectionId()),
                a = (0, c.bG)([n2.Ay], () => {
                    let e = n2.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < it;
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
                        let s = (i & n4.ME.VOICE) === n4.ME.VOICE,
                            a = n9.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(ie, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && n2.Ay.getMediaEngine().on(n8.bg.VoiceActivity, l),
                        () => {
                            n2.Ay.getMediaEngine().removeListener(n8.bg.VoiceActivity, l), r.stop();
                        }
                    );
                }, [e, i, a, s]),
                t
            );
        })(),
        ea = r.useMemo(() => (Q ? "input" : et ? "output" : void 0), [Q, et]),
        eo = r.useCallback(
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
    return (0, i.jsx)(M.f5, {
        value: K,
        children: (0, i.jsx)(rA, {
            currentUser: e,
            username: Y,
            activities: n,
            applicationStream: o,
            voiceChannel: p,
            dismissibleContents: Z,
            userTag: h,
            occluded: R,
            selfDeaf: I,
            selfMute: m,
            serverDeaf: T,
            serverMute: E,
            speaking: u,
            voiceDb: f,
            speakingWhileMuted: C,
            speakingWhilePTTInactive: es,
            status: a,
            streaming: s,
            suppress: g,
            webBuildOverride: y,
            awaitingRemote: k,
            nameplate: z,
            selectedGuildId: G,
            avatarDecoration: V,
            isQuestBarEmpty: $,
            isListenAlongVisible: q,
            deviceChangedTooltipType: ea,
            onDismissDeviceChangedTooltip: () => eo(ea),
            shouldShowPTTJoinTooltip: ei,
            dismissPTTJoinTooltip: er,
        }),
    });
}
