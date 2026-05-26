n.d(t, { g: () => sN, A: () => sy }), n(321073);
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(735438),
    o = n.n(r),
    u = n(158390),
    c = n(17928),
    d = n(554146),
    h = n(451988),
    m = n(97808),
    p = n(778712),
    f = n(922016),
    g = n(939249),
    x = n(140735),
    A = n(312138);
if (21552 == n.j) var C = n(192308);
var v = n(442433),
    E = n(820284),
    T = n(717558),
    j = n(964486),
    _ = n(220839),
    N = n(397244),
    S = n(394871),
    R = n(873174),
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
    U = n(688810),
    O = n(521502),
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
    Y = n(609425),
    $ = n(922301),
    X = n(368919),
    J = n(643501),
    ee = n(534514),
    et = n(834730),
    en = n(789645),
    el = n(826673),
    es = n(750506),
    ei = n(780964),
    ea = n(766075),
    er = n(417146),
    eo = n(552122),
    eu = n(717421),
    ec = n(775602),
    ed = n(993843);
let eh = { mass: 10, tension: 550, friction: 140 };
function em(e) {
    let { className: t, pageMultiplier: n } = e,
        i = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        [r, u] = s.useState({ x: 0, y: 0 }),
        d = s.useMemo(
            () =>
                o().throttle((e) => {
                    i || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, i],
        );
    s.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [h, m] = (0, eu.z)(() => ({ x: 0, y: 0, config: eh }));
    return (
        s.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, l.jsx)(R.animated.div, {
            style: { transform: (0, R.to)([h.x, h.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ed.T, t),
        })
    );
}
var ep = n(49999),
    ef = n(375708),
    eg = n(275883);
function ex(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: s } = e,
        i = eo.A.useIsEligible(),
        a = (0, el.JZ)(t),
        r = null != n,
        o = null != s ? { color: s } : void 0,
        { analyticsLocations: u } = (0, U.Ay)(w.A.HOLIDAY_COACHMARK),
        c = (e) => {
            (0, el.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, ea.openUserSettings)(ei.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(ep.i.TAKE_ACTION);
        };
    return i && !a
        ? (0, l.jsx)(es.Ay, {
              children: (0, l.jsxs)("div", {
                  className: eg.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, l.jsxs)("div", {
                              className: eg.o5,
                              children: [
                                  (0, l.jsx)(em, { className: eg.iL, pageMultiplier: 5 }),
                                  (0, l.jsx)("div", { className: eg.Np }),
                              ],
                          }),
                      (0, l.jsx)("div", { className: eg.c8 }),
                      (0, l.jsxs)("div", {
                          className: eg.Qs,
                          children: [
                              (0, l.jsxs)("div", {
                                  children: [
                                      (0, l.jsx)(ee.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "always-white",
                                          style: o,
                                          children: ef.intl.string(ef.t["6CxPoB"]),
                                      }),
                                      (0, l.jsx)(et.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: ef.intl.format(ef.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, l.jsx)(
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
                              (0, l.jsx)(g.D, {
                                  className: eg.l2,
                                  onClick: () => c(ep.i.USER_DISMISS),
                                  children: (0, l.jsx)(en.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eA() {
    return null == er.A.coachmarkDismissibleContent
        ? null
        : (0, l.jsx)(ex, {
              dismissibleContent: er.A.coachmarkDismissibleContent,
              backgroundColor: er.A.coachmarkBackgroundColor,
              specialTextColor: er.A.coachmarkSpecialTextColor,
          });
}
var eC = n(74848),
    ev = n(832248),
    eE = n(607399),
    eT = n(707554),
    ej = n(224640),
    e_ = n(305866),
    eN = n(364522),
    eS = n(22231),
    eR = n(133171),
    ey = n(780338);
if (21552 != n.j) var C = n(192308);
var eI = n(980707),
    eb = n(26137),
    eM = n(473935),
    ew = n(765671),
    eU = n(457965),
    eO = n(176781),
    eD = n(777666),
    eP = n(320448),
    ek = n(993401),
    eL = n(447349);
function eF(e) {
    return (0, l.jsx)("div", {
        className: eL.wE,
        children: (0, l.jsx)(eI.W, {
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
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: h,
        } = e,
        m = null != n,
        p = (0, ek.rE)({ action: t, onClick: n }),
        [x, A] = s.useState(!1),
        v = s.useRef(null),
        E = c ?? v,
        T = null != u,
        j = T && m,
        _ = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        N = s.useCallback(() => {
            A(!0);
        }, []),
        S = s.useCallback(() => {
            (0, C.hasAnyModalOpen)() || A(!1);
        }, []),
        R = () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", {
                        className: eL.iA,
                        children: (0, l.jsx)(i, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsxs)("div", {
                        className: eL.$H,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(et.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eL.W1,
                                        children: a,
                                    }),
                                    (0, l.jsx)(et.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
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
                                  className: eL.ef,
                                  onClick: p,
                                  focusProps: { offset: { ..._.offset, right: 0 } },
                                  children: R(),
                              }),
                              (0, l.jsx)(g.D, {
                                  className: eL.ap,
                                  "aria-label": ef.intl.string(ef.t.PdRCRg),
                                  ...e,
                                  onClick: N,
                                  focusProps: _,
                                  children: (0, l.jsx)(eP._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : T
                      ? (0, l.jsxs)(g.D, {
                            className: eL.ef,
                            ...e,
                            onClick: N,
                            focusProps: _,
                            children: [
                                R(),
                                (0, l.jsx)("div", {
                                    className: eL.ap,
                                    children: (0, l.jsx)(eP._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, l.jsx)(g.D, { className: eL.ef, onClick: p, focusProps: _, children: R() })),
                (0, l.jsx)("div", { ref: E, className: eL.jG, children: t })
            );
        };
    return T
        ? (0, l.jsx)("li", {
              className: eL.j$,
              onMouseEnter: N,
              onMouseLeave: S,
              children: (0, l.jsx)(f.Y, {
                  targetElementRef: d ?? E,
                  align: h,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: x,
                  onRequestClose: S,
                  children: y,
              }),
          })
        : (0, l.jsx)("li", { className: eL.j$, children: y() });
}
function eV(e) {
    let { children: t, "aria-label": n } = e;
    return (0, l.jsx)("ul", { "aria-label": n, children: t });
}
var eB = n(274372),
    eH = n(271597),
    eQ = n(990078),
    eW = n(315710),
    ez = n(475358),
    eq = n(408278),
    eZ = n(625903),
    eK = n(404778),
    eY = n(689175),
    e$ = n(821609),
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
    e9 = n(241326),
    te = n(140423);
let tt = (e) => {
        let { onBeforeDelete: t, onAfterDelete: n, variant: i = "overlay-secondary" } = e,
            a = (0, e7.Y_)(),
            r = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, te.R)({ clips: [a], onAfterDelete: n, onBeforeDelete: t });
                },
                [a, n, t],
            );
        return (0, l.jsx)(eQ.m, {
            text: ef.intl.string(ef.t.oyYWHE),
            position: "top",
            children: (0, l.jsx)(eq.K, {
                onClick: r,
                icon: e9.u,
                "aria-label": ef.intl.string(ef.t.oyYWHE),
                variant: i,
                size: "sm",
            }),
        });
    },
    tn = (e) => {
        let { onBeforeEdit: t, variant: n = "primary" } = e,
            i = (0, e7.Y_)(),
            a = s.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), t?.(), (0, eH.p)({ initialEditingClipId: i.id });
                },
                [i, t],
            );
        return (0, l.jsx)(e$.$, {
            onClick: a,
            icon: eS.R,
            variant: n,
            size: "sm",
            text: ef.intl.string(ef.t.bt75uw),
            fullWidth: !0,
        });
    };
var tl = n(27232),
    ts = n(505930),
    ti = n(607814),
    ta = n(16590);
let tr = () => {
    let e = (0, e7.Y_)(),
        t = s.useCallback(
            (t) => {
                t.stopPropagation(), t.preventDefault(), (0, ti.XK)(e);
            },
            [e],
        );
    return (0, l.jsx)(
        eQ.m,
        {
            text: ef.intl.string(e.isFavorite ? ta.default.IZsalP : ta.default.ihBfyA),
            position: "top",
            children: (0, l.jsx)(eq.K, {
                onClick: t,
                icon: e.isFavorite ? tl.G : ts.y,
                "aria-label": ef.intl.string(ef.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
};
var to = n(405433),
    tu = n(602902);
let tc = (e) => {
    let { variant: t = "primary" } = e,
        n = (0, e7.Y_)(),
        { analyticsLocations: i } = (0, U.Ay)(),
        a = s.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, tu.K)([n], { analyticsLocations: i });
            },
            [n, i],
        );
    return (0, l.jsx)(e$.$, {
        onClick: a,
        icon: to.l,
        variant: t,
        size: "sm",
        text: ef.intl.string(ef.t.RDE0Sc),
        fullWidth: !0,
    });
};
var td = n(226870),
    th = n(780479);
let tm = (e) => {
    let { children: t, className: n, isVisible: s = !0 } = e;
    return (0, l.jsx)("div", { className: a()(th.n, { [th.z]: s }, n), children: t });
};
var tp = n(316305);
let tf = s.memo(function (e) {
    let { clip: t, isNew: n, onClose: i, className: r } = e,
        o = s.useRef(null),
        { isHoveringOrFocusing: u } = (0, e8.A)(o),
        c = s.useCallback(() => {
            i?.(), (0, eH.p)({ initialEditingClipId: t.id });
        }, [t.id, i]);
    return (0, l.jsx)(e7.Cl, {
        clip: t,
        children: (0, l.jsx)(e4.s, {
            ref: o,
            "aria-label": ef.intl.string(ef.t.bt75uw),
            onClick: c,
            className: a()(tp.Z1, r),
            children: (0, l.jsxs)(td.d, {
                isStatic: !0,
                children: [
                    n && (0, l.jsx)(eD.Lp, { className: tp.Ad, text: ef.intl.string(ef.t.y2b7CA) }),
                    (0, l.jsxs)(tm, {
                        isVisible: u,
                        className: tp.Lw,
                        children: [
                            (0, l.jsxs)("div", {
                                className: tp.mY,
                                children: [(0, l.jsx)(tr, {}), (0, l.jsx)(tt, {})],
                            }),
                            (0, l.jsxs)("div", {
                                className: tp.E_,
                                children: [(0, l.jsx)(tn, { onBeforeEdit: i }), (0, l.jsx)(tc, {})],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tg = n(652215),
    tx = n(753070),
    tA = n(550350);
function tC(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: i, setPopoutRef: a } = e;
    (0, e5.A)();
    let r = (0, c.yK)([eB.A], () => eB.A.getClips()),
        o = (0, c.bG)([eB.A], () => eB.A.getPendingClips()),
        u = (0, c.bG)([eB.A], () => eB.A.getSettings()),
        d = (0, c.bG)([eB.A], () => eB.A.getNewClipIds()),
        h = (0, c.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(tg.hCu.SAVE_CLIP)),
        m = s.useRef(null),
        p = s.useMemo(() => {
            let e = [...o, ...r].filter((e) => e.type === e2.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, o]),
        f = s.useMemo(() => p.slice(0, 16), [p]),
        g = p.length > 16,
        x = null != h ? e1.dI(h.shortcut, !0) : null;
    (0, eW.t)(m);
    let A = (0, e0.$)(u.clipsLength / eJ.A.Millis.SECOND),
        C = (0, tx.zr)(u.clipsQuality.resolution),
        v = ef.intl.formatToPlainString(ef.t.Qb44XH, { fps: u.clipsQuality.frameRate });
    return (0, l.jsxs)("div", {
        ref: (e) => {
            (m.current = e), a?.(e);
        },
        className: tA.SW,
        role: "dialog",
        "aria-label": ef.intl.string(ef.t.z2jK6X),
        children: [
            (0, l.jsxs)("div", {
                className: tA.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: tA.$,
                        children: [
                            (0, l.jsx)(ee.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ef.intl.string(ef.t.z2jK6X),
                            }),
                            null != x && (0, l.jsx)(ez.e, { className: tA.P, shortcut: x }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: tA.$s,
                        children: [
                            (0, l.jsx)(eQ.m, {
                                text: ef.intl.string(ef.t["3D5yo/"]),
                                children: (0, l.jsx)(eq.K, {
                                    onClick: () => n(),
                                    icon: eZ.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ef.intl.string(ef.t["3D5yo/"]),
                                }),
                            }),
                            (0, l.jsx)(eQ.m, {
                                text: ef.intl.string(ta.default["55C2MH"]),
                                children: (0, l.jsx)(eq.K, {
                                    onClick: () => t(),
                                    icon: eO.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ef.intl.string(ta.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: tA.P6,
                children: [A, C, v].join(" \u2022 "),
            }),
            (0, l.jsx)(eK.c, {}),
            f.length > 0
                ? (0, l.jsxs)(eY.Ch, {
                      className: tA.Vg,
                      fade: !0,
                      disableFocusRingScope: !0,
                      children: [
                          f.map((e) => (0, l.jsx)(tf, { clip: e, isNew: d.includes(e.id), onClose: i }, e.id)),
                          g &&
                              (0, l.jsx)("div", {
                                  className: tA.qr,
                                  children: (0, l.jsx)(e$.$, {
                                      onClick: () => t(),
                                      text: ef.intl.string(ta.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, l.jsx)(tv, { keybindString: x }),
        ],
    });
}
function tv(e) {
    let { keybindString: t } = e,
        n = (0, e3.Et)();
    return (0, l.jsxs)("div", {
        className: tA.p$,
        children: [
            (0, l.jsx)(et.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tA.qO,
                children: ef.intl.string(ta.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, l.jsx)(et.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tA.CZ,
                      children: ef.intl.format(ta.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, l.jsx)(
                                  et.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, l.jsx)(ez.e, { shortcut: t }),
                      }),
                  })
                : (0, l.jsx)(e6.A, {}),
        ],
    });
}
function tE(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        i = (0, V.sw)(),
        { userStatusMenu: a } = B.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        r = (0, c.bG)([eB.A], () => eB.A.getNewClipIds().length),
        o = s.useCallback(
            (e) => {
                t(), (0, eH.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        u = s.useCallback(() => {
            t(), (0, ea.openUserSettings)(ei.X.CLIPS_PANEL);
        }, [t]);
    return i && a
        ? (0, l.jsx)(eG, {
              action: "PRESS_CLIPS",
              icon: eO.x,
              label: ef.intl.string(ef.t.z2jK6X),
              trailing: r > 0 ? (0, l.jsx)(eD.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, l.jsx)(tC, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tT = n(480335),
    tj = n(31956),
    t_ = n(361628),
    tN = n(744808),
    tS = n(282389),
    tR = n(645507),
    ty = n(970931),
    tI = n(462887),
    tb = n(736653),
    tM = n(439174),
    tw = n(428262),
    tU = n(878784),
    tO = n(788868);
function tD() {
    let e = (0, tU.Xb)(),
        t = (0, tw.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tO.sp.length - 1; t >= 0; t--) {
        let l = tO.VD[tO.sp[t]],
            s = new Date(e);
        if ((s.setMonth(e.getMonth() + l.tenureReqNumMonths), s.setHours(s.getHours() + 30), n > s.getTime()))
            if (n - s.getTime() < 6048e5) return l.id;
            else break;
    }
    return null;
}
let tP = {
        [tO.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tO.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tO.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tO.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tO.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tO.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tO.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tO.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tk = {
        [tO.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tO.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tO.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tO.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tO.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tO.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tO.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tO.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tL = n(682165);
let tF = s.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tG() {
    let e = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        t = (0, ev.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tD(),
                t = (0, tI.M)((0, tb.Ay)());
            if (null == e) return null;
            let n = tP[e],
                l = tk[e],
                s = {
                    currentBadge: (0, tM.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? l?.dark : l?.light,
                },
                i = tO.sp.indexOf(e);
            if (i > 0) {
                let e = tO.sp[i - 1],
                    n = tP[e];
                (s.prevBadge = (0, tM.e0)(e)), (s.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return s;
        })(),
        [i, a] = s.useState(null);
    return (null != n && null == i && a(n), e || !t || null == i) ? null : (0, l.jsx)(tV, { levelUpData: i });
}
function tV(e) {
    let { levelUpData: t } = e,
        n = s.useRef(null),
        i = s.useCallback(() => {
            ev.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, l.jsx)(eW.O, {
        containerRef: n,
        children: (0, l.jsxs)("div", {
            className: tL.i,
            children: [
                (0, l.jsx)("div", {
                    className: tL.b,
                    children: (0, l.jsx)(eQ.m, {
                        text: ef.intl.string(ef.t.cpT0Cq),
                        children: (0, l.jsx)(eq.K, {
                            icon: en.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: i,
                            "aria-label": ef.intl.string(ef.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, l.jsx)(s.Suspense, { fallback: null, children: (0, l.jsx)(tF, { levelUpData: t }) }),
            ],
        }),
    });
}
var tB = n(206835),
    tH = n(183555),
    tQ = n(999291),
    tW = n(975732),
    tz = n(718019),
    tq = n(694720),
    tZ = n(915614),
    tK = n(744753),
    tY = n(559506),
    t$ = n(646986),
    tX = n(349419),
    tJ = n(946356),
    t0 = n(878555),
    t1 = n(624479),
    t2 = n(206845),
    t3 = n(957565),
    t6 = n(427262),
    t5 = n(962352);
function t4(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: s } = (0, tH.NJ)();
    return t3.p5
        ? (0, l.jsx)(t2.A, {
              text: ef.intl.string(ef.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t6.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, l.jsx)(g.D, {
                      ...e,
                      className: a()(t5.c, { [t5.R]: n }),
                      "aria-label": ef.intl.string(ef.t.y5MwJy),
                      children: (0, l.jsx)(t1.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t8 = n(983495),
    t7 = n(442228),
    t9 = n(885386),
    ne = n(290863),
    nt = n(351906),
    nn = n(562153),
    nl = n(661531),
    ns = n(477782),
    ni = n(628284),
    na = n(695366),
    nr = n(363195),
    no = n(889227),
    nu = n(287809),
    nc = n(174459),
    nd = n(429707),
    nh = n(274303),
    nm = n(994125),
    np = n(347853),
    nf = n(335020),
    ng = n(43105),
    nx = n(704824),
    nA = n(46225),
    nC = n(429913),
    nv = n(379848),
    nE = n(633075),
    nT = n(735321),
    nj = n(667049),
    n_ = n(606758),
    nN = n(495544),
    nS = n(403362),
    nR = n(518477);
function ny(e) {
    let { targetElementRef: t, onClose: n } = e,
        [i, a] = s.useState(!1),
        { trackUserProfileEditAction: r } = (0, tH.NJ)(),
        o = (0, c.bG)([nN.default], () => nN.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([nN.default], () => nN.default.getId()),
                l = (0, nj.A)(n),
                i = s.useMemo(() => l.filter((e) => e instanceof nE.R), [l]),
                a =
                    ((e = (0, eU.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    s.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                r = s.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                o = ((t = (0, nC.A)(r)), s.useMemo(() => t.filter(nS.Vq), [t])),
                { tokens: u, fetched: d } = (0, nx.j)(r),
                h = (0, nA.U9)(o);
            return s.useMemo(() => {
                if (null == a || null == u || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let l = u.find((e) => e.application.id === n.applicationId),
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
            }, [a, u, d, i, o, h]);
        })(),
        { analyticsLocations: d } = (0, U.Ay)();
    return null == u || 0 === u.length
        ? null
        : (0, l.jsx)(nv.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: c } = e,
                      h = u.find((e) => e.dismissibleContent === s);
                  if (null == h) return null;
                  let m = "linked" === h.type,
                      p = () =>
                          (0, tW.openUserProfileModal)({ userId: o, tabSection: nR.RP.WIDGETS }).then(() => {
                              c(ep.i.TAKE_ACTION), n();
                          });
                  return (0, l.jsx)(ng.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != h.config.editProfileUpsellImage
                              ? { type: "image", src: h.config.editProfileUpsellImage }
                              : void 0,
                      title: ef.intl.format(ef.t.TXDztH, { applicationName: h.application.name }),
                      body: m ? ef.intl.string(ef.t["63Kso0"]) : ef.intl.string(ef.t.HwXoeC),
                      onRequestClose: () => c(ep.i.USER_DISMISS),
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
                                                        (e = new nE.R({ applicationId: h.application.id })),
                                                        void ((0, nT.Y5)(e),
                                                        r({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, n_.XA)(nR.jM.WIDGET_ADDED))
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
var nI = n(461213),
    nb = n(818348),
    nM = n(466573);
function nw() {
    let e = (0, c.bG)([nI.A], () => nI.A.getStatus()),
        t = (0, t6.MU)(e) ?? "",
        n = e === nb.cl.INVISIBLE || e === nb.cl.OFFLINE;
    return (0, l.jsxs)("div", {
        className: nM.k,
        children: [
            (0, l.jsxs)(x.A, { tag: "div", children: [ef.intl.string(ef.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, l.jsx)(eQ.m, {
                    text: ef.intl.string(ef.t.L99HQm),
                    children: (0, l.jsx)(na.E, {
                        size: "xs",
                        color: nl.A.colors.STATUS_WARNING,
                        "aria-label": ef.intl.string(ef.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nU = n(841595);
let nO = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nD = n(501838),
    nP = n(760716),
    nk = n(915089),
    nL = n(13808);
function nF(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: i,
            children: r,
            height: o,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nk.GV)(),
        h = s.useRef(null),
        m = (0, eu.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != h.current && h.current.focus();
            },
        });
    return (0, l.jsx)(R.animated.div, {
        className: a()(nL.kL, u),
        style: m,
        children: (0, l.jsxs)("aside", {
            "aria-labelledby": d,
            className: nL.Qs,
            children: [
                (0, l.jsxs)("div", {
                    className: nL.U1,
                    children: [
                        (0, l.jsx)(g.D, {
                            innerRef: h,
                            "aria-label": ef.intl.string(ef.t.WAI6xu),
                            className: nL.b,
                            onClick: () => {
                                t(ep.i.USER_DISMISS);
                            },
                            children: (0, l.jsx)(en.P, { color: "currentColor" }),
                        }),
                        (0, l.jsx)(ee.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != i && (0, l.jsx)(et.E, { variant: "text-md/normal", color: "text-subtle", children: i }),
                (0, l.jsx)(eN.Ip, {
                    className: nL.XG,
                    fade: !0,
                    children: (0, l.jsx)("div", { className: a()(nL.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nG = n(973912),
    nV = n(871123),
    nB = n(44724),
    nH = n(501573);
function nQ() {
    (0, nB.default)({ guildId: (0, nV.zf)() });
}
function nW(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: s } = e,
        { analyticsLocations: i } = (0, U.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, l.jsxs)(nF, {
              heading: ef.intl.string(ef.t["vy/61K"]),
              subheading: ef.intl.string(ef.t.tEee9t),
              markAsDismissed: s,
              className: nH.Zj,
              contentClassName: nH.hQ,
              height: 560,
              children: [
                  (0, l.jsx)(nG.A, {
                      userId: t,
                      analyticsLocations: i,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nH.KN,
                  }),
                  (0, l.jsx)("div", {
                      className: nH.UD,
                      children: (0, l.jsx)(e$.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ef.intl.string(ef.t.rg9FQp),
                          onClick: nQ,
                      }),
                  }),
              ],
          });
}
function nz(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: i } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nO.useConfig({ location: t }).enabled;
                })({ location: t }),
                l = (0, c.bG)([nu.default], () => nu.default.getCurrentUser()),
                i = (0, c.bG)([nU.A], () => (null != l ? nU.A.getFirstWishlistId(l.id) : null)),
                a = (0, nP.i)((e) => e.recommendationApplicationIds),
                o = (0, nD.rY)(),
                u = (0, nD.qx)();
            return s.useMemo(
                () => (null != a || (null == i && n) ? (0, r.uniq)([...(a ?? []), ...u, ...o]).sort() : []),
                [n, i, u, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = s.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, l.jsx)(nv.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e;
            return null == i
                ? null
                : s === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, l.jsx)(nW, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nq = n(146901),
    nZ = n(827827);
let nK = [
        { duration: 15 * eJ.A.Millis.MINUTE, label: () => ef.intl.string(ef.t["8ot6gv"]) },
        { duration: eJ.A.Millis.HOUR, label: () => ef.intl.string(ef.t.UMWBZr) },
        { duration: 8 * eJ.A.Millis.HOUR, label: () => ef.intl.string(ef.t.EpAXPC) },
        { duration: eJ.A.Millis.DAY, label: () => ef.intl.string(ef.t["755t4q"]) },
        { duration: 3 * eJ.A.Millis.DAY, label: () => ef.intl.string(ef.t["f3/1ch"]) },
        { duration: void 0, label: () => ef.intl.string(ef.t["46dqJY"]) },
    ],
    nY = "forever";
function n$(e) {
    let { status: t, currentStatus: n, description: s } = e,
        i = t !== tg.clD.ONLINE,
        a = (0, l.jsx)(l.Fragment, {
            children: nK.map((e) => {
                let { duration: s, label: i } = e;
                return (0, l.jsx)(
                    ns.Dr,
                    {
                        id: `${t}-${s}`,
                        label: i(),
                        action: () => (0, nZ.A)({ nextStatus: t, prevStatus: n, durationMillis: s }),
                        dontCloseOnAction: !0,
                    },
                    s ?? nY,
                );
            }),
        });
    return (0, l.jsx)(ns.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: i,
        label: (0, t6.MU)(t),
        subtext: s,
        iconLeft: () => (0, l.jsx)(eR.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nZ.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: i ? a : void 0,
    });
}
function nX(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: l } = (0, nq._)(e);
    return "today" === t
        ? ef.intl.formatToPlainString(ef.t.ZxxHIO, { timeString: l })
        : ef.intl.formatToPlainString(ef.t["9OFjSe"], { dateString: n, timeString: l });
}
var nJ = n(996988),
    n0 = n(656884);
function n1(e) {
    let t,
        n,
        i,
        r,
        o,
        u,
        d,
        h,
        f,
        { currentUser: g, onClose: A, setPopoutRef: v, highlightBadge: E, openedAt: T, className: j } = e,
        _ = __OVERLAY__,
        N = (0, tQ.Ay)(g.id, void 0),
        { analyticsLocations: S } = (0, U.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        R = (0, tH.pb)({ layout: "ACCOUNT_POPOUT", userId: g.id, guildId: void 0 }),
        { ref: y, height: I } = (0, ew.Ay)(),
        { isHoveringOrFocusing: b, isHovering: M } = (0, e8.A)(y);
    s.useEffect(() => {
        v?.(y.current);
    }, [y, v]),
        s.useEffect(
            () => (ev.A.setState({ isOpen: !0 }), () => ev.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let O = (0, c.bG)([ne.A], () => ne.A.getStatus(g.id)),
        D = nX(t9.CY.useSetting()),
        P = (0, c.bG)([nt.A], () => nt.A.hidePersonalInformation),
        k = (0, ty.kB)(),
        L = t9.Q_.useSetting(),
        F =
            ((t = t9.CY.useSetting()),
            (n = (0, ty.kB)()),
            (i = t9.Jr.useSetting()),
            (r = (e) => {
                let l = nX(t);
                if (O === e && null != l) return l;
                switch (e) {
                    case tg.clD.DND:
                        return n ? ef.intl.string(ef.t.day5A6) : ef.intl.string(ef.t["tq/fMK"]);
                    case tg.clD.INVISIBLE:
                        return ef.intl.string(ef.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (o = (0, l.jsx)(l.Fragment, {
                children: nK.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, l.jsx)(
                        ns.Dr,
                        {
                            id: `${O}-${t}`,
                            label: n(),
                            action: () => {
                                (0, ty.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nY,
                    );
                }),
            })),
            (u = n$({ status: tg.clD.ONLINE, currentStatus: O })),
            (d = n$({ status: tg.clD.IDLE, currentStatus: O, description: r(tg.clD.IDLE) })),
            (h = n$({ status: tg.clD.DND, currentStatus: O, description: r(tg.clD.DND) })),
            (f = n$({ status: tg.clD.INVISIBLE, currentStatus: O, description: r(tg.clD.INVISIBLE) })),
            (0, l.jsxs)(l.Fragment, {
                children: [
                    u,
                    (0, l.jsx)(ns.bX, {}, "menu-separator-statuses"),
                    d,
                    h,
                    f,
                    n
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(ns.bX, {}, "menu-separator-statuses"),
                                  (0, l.jsx)(
                                      ns.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ef.intl.string(ef.t.gJRnwK),
                                          iconLeft: ey.a,
                                          leadingAccessory: { type: "icon", icon: ey.a },
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
                                              (0, ty.ES)(!n);
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
            let t = (0, c.bG)([nu.default], () => nu.default.getCurrentUser()),
                n = (0, c.bG)([nt.A], () => nt.A.hidePersonalInformation),
                s = (0, c.bG)([nr.A], () => (0, tI.M)(nr.A.theme)),
                { multiAccountUsers: i } = (0, nm.K)(),
                a = i.map((i) => {
                    let a = new no.A(i),
                        r = a.id === t?.id,
                        o = i.tokenStatus === nh.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, l.jsx)(
                        ns.Dr,
                        {
                            id: a.id,
                            focusedClassName: nf.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, l.jsxs)("div", {
                                    className: nf.ci,
                                    children: [
                                        (0, l.jsx)(m.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": i.username,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: nf.DD,
                                            children: [
                                                (0, l.jsx)(et.E, {
                                                    className: nf.gE,
                                                    variant: "text-sm/normal",
                                                    children: t6.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, l.jsx)(et.E, {
                                                        className: nf.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, l.jsx)(ni.y, {
                                                size: "sm",
                                                color: t
                                                    ? nl.A.unsafe_rawColors.WHITE.css
                                                    : nl.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? nl.A.unsafe_rawColors.BRAND_500.css
                                                        : nl.A.unsafe_rawColors.WHITE.css,
                                                className: nf.s0,
                                            }),
                                        o &&
                                            (0, l.jsx)(na.E, {
                                                color: nl.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? nl.A.unsafe_rawColors.BRAND_500.css
                                                        : nl.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nf.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, np.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nc.default.track(tg.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tg.JJy.USER_PROFILE },
                                        }),
                                        nd.Mx(n));
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
                            (0, l.jsx)(ns.bX, {}),
                            (0, l.jsx)(ns.Dr, {
                                id: "manage-accounts",
                                label: ef.intl.string(ef.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, np.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(A),
        V = (0, tB.A)({ analyticsLocations: S }),
        B = (0, tw.TW)(g),
        H = s.useRef(null),
        Q = s.useRef(null),
        W = (0, t_.A)(N?.profileFrame?.skuId, "UserProfileAccountPopout"),
        z = (0, tS.A)(N?.profileFrame?.skuId);
    (0, tj.A)({ skuId: N?.profileFrame?.skuId, openedAt: T, context: R, analyticsLocations: S });
    let q = s.useRef((0, ev.A)((e) => e.shouldRenderTenureLevelUp)),
        Z = s.useMemo(() => (0, tR.A)(), []),
        [K, Y] = s.useState(() => ev.A.getState().shouldRenderTenureLevelUp);
    s.useEffect(() => {
        let e = setTimeout(() => {
            Y(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let $ = (e) => {
            A?.(), (0, tW.openUserProfileModal)({ customStatusPrompt: Z, sourceAnalyticsLocations: S, ...R, ...e });
        },
        X = N?.widgets != null && N.widgets.length > 0,
        J = s.useCallback(() => {
            A();
        }, [A]),
        ee = s.useCallback(() => {
            V(), J();
        }, [V, J]),
        en = (0, eU.QR)({ location: "UserProfileAccountPopout" }),
        el = (0, eU.zd)({ location: "UserProfileAccountPopout" }),
        es = s.useId();
    return (0, l.jsx)(U.f5, {
        value: S,
        children: (0, l.jsx)(tH.of, {
            value: R,
            openedAt: T,
            fetchStartedAt: N?.fetchStartedAt,
            fetchEndedAt: N?.fetchEndedAt,
            isLoaded: N?.isLoaded,
            children: (0, l.jsxs)(e_.l, {
                ref: y,
                "aria-labelledby": es,
                className: a()(eL.jC, j),
                "data-layer": "base",
                children: [
                    (0, l.jsx)(x.A, {
                        children: (0, l.jsx)(eT.H, { id: es, children: ef.intl.string(ef.t["5fWB8U"]) }),
                    }),
                    (0, l.jsxs)(eT.F, {
                        children: [
                            (0, l.jsx)(nz, { displayProfile: N, handleOpenUserProfileModal: $, height: I }),
                            (0, l.jsxs)(tJ.A, {
                                className: a()(eL.BK, z),
                                user: g,
                                displayProfile: N,
                                themeType: nJ.d.POPOUT,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: n0.wx,
                                        children: [
                                            (0, l.jsx)(tZ.A, { user: g, displayProfile: N, themeType: nJ.d.POPOUT }),
                                            (0, l.jsx)(tz.A, {
                                                user: g,
                                                displayProfile: N,
                                                themeType: nJ.d.POPOUT,
                                                onOpenProfile: _ ? void 0 : $,
                                            }),
                                            (0, l.jsx)(t8.A, {
                                                ref: H,
                                                user: g,
                                                themeType: nJ.d.POPOUT,
                                                onCloseProfile: A,
                                                prompt: Z,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(eN.Ip, {
                                        className: eL.rf,
                                        style: { pointerEvents: K ? "none" : void 0 },
                                        children: [
                                            (0, l.jsx)(tY.A, { userId: g.id }),
                                            (0, l.jsx)(t0.Ay, {
                                                className: eL.eF,
                                                user: g,
                                                displayName: nn.Ay.getName(void 0, null, g),
                                                onClickName: _ ? void 0 : $,
                                                displayNameTrailing: (0, l.jsx)(t4, { user: g, isVisible: b }),
                                                pronouns: N?.pronouns,
                                                trailing: (0, l.jsx)(tq.A, {
                                                    displayProfile: N,
                                                    themeType: nJ.d.POPOUT,
                                                    onClose: A,
                                                    shouldOpenBadgeTooltip: null != E ? (e) => e === E : void 0,
                                                    shouldGlowTenureBadge: q.current,
                                                }),
                                            }),
                                            (0, l.jsx)(tK.A, { isPremiumUser: B, onInteraction: A }),
                                            (0, l.jsx)(t7.A, {
                                                user: g,
                                                bio: N?.bio,
                                                hidePersonalInformation: P,
                                                onClose: A,
                                            }),
                                            X &&
                                                (0, l.jsx)(tX.A, {
                                                    user: g,
                                                    widgets: N?.widgets,
                                                    onOpenUserProfileModal: $,
                                                }),
                                            (0, l.jsx)(t$.A, {
                                                user: g,
                                                currentUser: g,
                                                onOpenUserProfileModal: $,
                                                onClose: A,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: eL.T_,
                                                children: [
                                                    (0, l.jsx)(tJ.A.Overlay, {
                                                        className: eL.g0,
                                                        children: (0, l.jsxs)(eV, {
                                                            children: [
                                                                (0, l.jsx)(eG, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ef.intl.string(ef.t.s5vZlQ),
                                                                    icon: eS.R,
                                                                    onClick: ee,
                                                                    ref: Q,
                                                                }),
                                                                (0, l.jsx)(eG, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, l.jsx)(nw, {}),
                                                                    sublabel: null != D && D,
                                                                    icon: () =>
                                                                        (0, l.jsx)(eR.nW, { status: O, size: 12 }),
                                                                    trailing:
                                                                        (k || O === tg.clD.DND) &&
                                                                        (0, l.jsx)(ey.a, { size: "xxs" }),
                                                                    renderSubmenu: eE.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, l.jsx)(eF, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eL.hQ,
                                                                                  "aria-label": ef.intl.string(
                                                                                      ef.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: eE.Fr
                                                                        ? () => {
                                                                              A(),
                                                                                  (0, C.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, l.jsx)(
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
                                                                                                          l.jsx)(eI.W, {
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
                                                                (0, l.jsx)(tE, { onClose: A, popoutContainerRef: y }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, l.jsx)(tJ.A.Overlay, {
                                                        className: eL.g0,
                                                        children: (0, l.jsxs)(eV, {
                                                            children: [
                                                                (0, l.jsx)(eG, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eb.r,
                                                                    label: ef.intl.string(ef.t.oMNyYN),
                                                                    onClick: () => {
                                                                        A(), (0, np.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, l.jsx)(eF, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ef.intl.string(ef.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: G,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t3.p5 &&
                                                                    L &&
                                                                    (0, l.jsx)(eG, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eM.L,
                                                                        label: ef.intl.string(ef.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t3.C)(g.id), A();
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
                                        (0, l.jsx)(tT.A, { skuId: N.profileEffect.skuId, isHovering: M }),
                                    null != W && (0, l.jsx)(tN.A, { frame: W }),
                                ],
                            }),
                            en && el ? (0, l.jsx)(ny, { targetElementRef: Q, onClose: A }) : null,
                            (0, l.jsx)(tG, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n2 = n(371912),
    n3 = n(655116),
    n6 = n(21973),
    n5 = n(454719),
    n4 = n(342296),
    n8 = n(852712),
    n7 = n(167579),
    n9 = n(173660),
    le = n(761853),
    lt = n(763827),
    ln = n(499156),
    ll = n(731854);
let ls = 2.5 * eJ.A.Millis.SECOND,
    li = +eJ.A.Millis.HOUR;
var la = n(459838),
    lr = n(485296);
let lo = 3 * eJ.A.Millis.SECOND,
    lu = +eJ.A.Millis.DAY;
var lc = n(616356),
    ld = n(734057),
    lh = n(629016),
    lm = n(186111),
    lp = n(967198),
    lf = n(486020),
    lg = n(625494),
    lx = n(536194),
    lA = n(19575),
    lC = n(994314),
    lv = n(485599),
    lE = n(537668),
    lT = n(626584),
    lj = n(531685),
    l_ = n(259065),
    lN = n(864386);
let lS = new lT.A("DisplayNameStylesCoachmark");
function lR(e) {
    let { markAsDismissed: t, targetElementRef: n, children: i } = e,
        { analyticsLocations: a } = (0, U.Ay)(),
        r = (0, s.useRef)(null),
        o = (0, c.bG)([lj.A], () => lj.A.isFocused()),
        u = (0, s.useCallback)(() => {
            t(ep.i.TAKE_ACTION),
                (0, ea.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, l_.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, s.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]);
    return (
        (0, s.useEffect)(() => {
            o && r.current?.paused ? r.current?.play().catch(lS.error) : o || r.current?.pause();
        }, [o]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                i,
                (0, l.jsx)(ng.A, {
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
                    title: ef.intl.string(lN.default["1AE464"]),
                    body: [ef.intl.string(lN.default.cNc1g9), ef.intl.string(ef.t["4JNXHG"])],
                    actions: [{ text: ef.intl.string(ef.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var ly = n(131607),
    lI = n(45780),
    lb = n(696451),
    lM = n(71393),
    lw = n(685073),
    lU = n(228366);
let lO = { lastSeenInfos: {} },
    lD = lO;
class lP extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        lD = e ?? lO;
    }
    getState() {
        return lD;
    }
    getGuildLastSeenInfo(e) {
        return lD.lastSeenInfos[e] ?? null;
    }
}
let lk = new lP(lU.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        lD.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        lD = lO;
    },
});
var lL = n(116833),
    lF = n(514661);
let lG = new lT.A("GuildTagAvailableCoachmark");
function lV(e) {
    let t = (0, c.bG)([lM.A], () => lM.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            lU.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: s, onAdoptTag: i, onEditProfile: a } = (0, lF.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, lw.q0)(t))
        return lG.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ef.intl.string(ef.t.jwEaiX), loading: s, onClick: i, variant: "primary" },
        { text: ef.intl.string(ef.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(ng.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lL.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
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
function lB(e) {
    let t = (0, c.bG)([lM.A], () => lM.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: s, onAdoptTag: i, onEditProfile: a } = (0, lF.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, lw.q0)(t))
        return lG.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ef.intl.string(ef.t.jwEaiX), loading: s, onClick: i, variant: "primary" },
        { text: ef.intl.string(ef.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(ng.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lL.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
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
var lH = n(843010),
    lQ = n(764231),
    lW = n(425713);
function lz(e) {
    let { groupName: t, targetElementRef: n } = e,
        s = tD(),
        i = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        a = (0, ev.A)((e) => e.isOpen),
        r = (0, lH.G)();
    return i || null == s || a || r
        ? null
        : (0, l.jsx)(nv.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: i } = e;
                  return (0, l.jsx)(lq, {
                      recentlyLeveledTenureBadge: s,
                      markAsDismissed: i,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function lq(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: i, shouldShow: a } = e,
        r = tO.sp.indexOf(t),
        o = (0, lW.I)(tO.sp[r > 0 ? r - 1 : r]).ambient,
        u = (0, s.useCallback)(() => {
            n(ep.i.TAKE_ACTION),
                ev.A.setState({ shouldRenderTenureLevelUp: !0 }),
                lg._.dispatch(tg.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, s.useCallback)(() => {
            n(ep.i.USER_DISMISS);
        }, [n]),
        d = tO.VD[t],
        h = ef.intl.formatToPlainString(ef.t.ewkaVR, {
            timeMilestone: (0, lQ.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: ef.intl.string(ef.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, l.jsx)(ng.A, {
        targetElementRef: i,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ef.intl.string(ef.t.VoDxsV),
        body: h,
        actions: m,
    });
}
function lZ(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n2.c9)(),
        s = null != e.targetElementRef.current && t && n,
        [i, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = (0, lI.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tg.dJq),
                s = (0, c.bG)([lM.A, nu.default, lb.Ay], () => {
                    if (null === e) return !1;
                    let t = lM.A.getGuild(e);
                    if (void 0 === t || !(0, lw.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nu.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let l = lb.Ay.getMember(e, n.id);
                    return null != l && !l.isPending;
                }, [e]);
            return (0, ly.ww)(s && n && !l ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tg.eGj);
        })(e.guildId, { shouldShow: s }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = e?.primaryGuild,
                s = l?.identityGuildId ?? null,
                i = (0, c.bG)([lk], () => (null === s ? null : lk.getGuildLastSeenInfo(s))),
                a = (0, c.bG)([lM.A], () => lM.A.getGuild(s)?.profile?.tag),
                r = null != a && l?.identityGuildId === s && l?.tag === null,
                o = null != s && i?.tag === a,
                u = null !== s && r && !o;
            return (0, ly.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: s });
    return s
        ? i === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, l.jsx)(lB, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, l.jsx)(lV, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(lz, { groupName: ep.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, l.jsx)(nv.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: ep.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: s } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, l.jsx)(lR, {
                                            markAsDismissed: s,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, l.jsx)(lE.A, {
                                            markAsDismissed: s,
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
var lK = n(615675),
    lY = n(900797),
    l$ = n(847374),
    lX = n(348858),
    lJ = n(617354),
    l0 = n(206018),
    l1 = n(42473),
    l2 = n(490704),
    l3 = n(967194);
function l6(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: i,
            onClick: r,
            iconForeground: o,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: d,
        } = e,
        h = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: x },
        } = (0, lX.I)(h ? "undeafen" : "deafen"),
        A = n ? lK.T : m,
        { name: C } = (0, eC.x5)(ll.oh.AUDIO_OUTPUT),
        v = (0, lJ.A)(t, n, i),
        { analyticsLocations: E } = (0, U.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        T = s.useRef(null);
    return (
        s.useEffect(() => () => p(), [h, p]),
        (0, l.jsx)(U.f5, {
            value: E,
            children: (0, l.jsx)(f.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, l.jsx)(U.f5, {
                            value: E,
                            children: (0, l.jsx)(l0.A, {
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
                        m = d ? lY.t : l$.a;
                    return (0, l.jsxs)("div", {
                        ref: T,
                        className: a()(l2.Lh, { [l2.v8]: h, [l2.q6]: d }),
                        children: [
                            (0, l.jsx)(l1.A, {
                                "aria-checked": h,
                                "aria-label": ef.intl.string(ef.t.wjcRFX),
                                className: l2.eT,
                                disabled: i,
                                icon: (0, l.jsx)(A, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? nl.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? l3.o : void 0,
                                innerClassName: a()({ [l3.T]: n }),
                                onClick: r,
                                onContextMenu: s,
                                onMouseEnter: g,
                                onMouseLeave: x,
                                plated: null != u,
                                redGlow: h,
                                role: "switch",
                                tooltipText: v,
                            }),
                            (0, l.jsx)(l1.A, {
                                className: a()(l2.UT, { [l2.q6]: d }),
                                disabled: i,
                                icon: (0, l.jsx)(m, {
                                    className: l2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? nl.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != u,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ef.intl.formatToPlainString(ef.t["f+DDY/"], { outputDeviceName: C })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? ef.intl.format(ef.t["f+DDY/"], { outputDeviceName: C })
                                    : ef.intl.string(ef.t.aA4Vce),
                                "aria-label": c
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
var l5 = n(666654),
    l4 = n(523875),
    l8 = n(993719);
let l7 = {};
class l9 extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return l7[e] ?? !1;
    }
}
let se = new l9(lU.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        l7[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        l7[t] = !1;
    },
});
var st = n(362823),
    sn = n(980923),
    sl = n(224585),
    ss = n(949341),
    si = n(973324);
function sa(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
            suppress: r,
            awaitingRemote: o,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: h,
            onClick: m,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: x,
            shouldShowInputDeviceChangedTooltip: A,
            shouldShowPTTJoinTooltip: C,
            dismissTooltips: v,
            speaking: E,
        } = e,
        { showPTTIconIndicator: T } = ln.A.useConfig({ location: "MicrophoneButton" }),
        j = (0, c.bG)([le.Ay], () => le.Ay.getMode() === ll.TB.PUSH_TO_TALK),
        _ = (0, c.bG)([le.Ay], () => le.Ay.getSettings().modeOptions.shortcut),
        N = (0, c.bG)([se], () => se.getIsTutorialActive(st.v.MUTE_TUTORIAL)),
        S = (0, c.bG)([lt.A], () => null != lt.A.getChannelId()),
        { name: R } = (0, eC.x5)(ll.oh.AUDIO_INPUT),
        { enabledInputProfiles: y } = (0, n8.d)({ location: "MicrophoneButton" }),
        I = s.useRef(null),
        b = n || r || i,
        M = (0, l4.L)(b ? "unmute" : "mute"),
        { analyticsLocations: O } = (0, U.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: D, events: P, play: k } = M,
        L = i || r ? l5.O : D;
    s.useEffect(() => () => k(), [b, k]);
    let F = (0, sn.A)(n, i, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: ef.intl.string(ef.t["29gnR4"]), tooltipForceOpen: !0 }
        : C || x
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ef.intl.format(ef.t.c1qUOQ, { keybind: e1.dI(_).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let V = T && j && S,
        B = b ? nl.A.colors.ICON_VOICE_MUTED : "currentColor",
        H = s.useCallback(() => {
            m(), N && l8.N(st.v.MUTE_TUTORIAL);
        }, [m, N]);
    return (0, l.jsxs)(U.f5, {
        value: O,
        children: [
            (0, l.jsx)(f.Y, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        v(),
                        (0, l.jsx)(U.f5, {
                            value: O,
                            children: (0, l.jsx)(l0.A, {
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
                        r = i ? lY.t : l$.a;
                    return (0, l.jsxs)("div", {
                        ref: I,
                        className: a()(l2.Lh, { [l2.v8]: b, [l2.q6]: i }),
                        children: [
                            (0, l.jsx)(l1.A, {
                                "aria-checked": b,
                                "aria-label": ef.intl.string(ef.t.w4m945),
                                className: l2.eT,
                                disabled: o,
                                icon: (0, l.jsx)(L, { size: "custom", width: 20, height: 20, color: B, className: u }),
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
                                children: V ? (0, l.jsx)("div", { className: a()(ss.U, { [ss.z]: E }) }) : null,
                            }),
                            (0, l.jsx)(l1.A, {
                                "aria-label": A
                                    ? ef.intl.formatToPlainString(ef.t["18wnuD"], { inputDeviceName: R })
                                    : ef.intl.string(ef.t.fRzCbB),
                                className: a()(l2.UT, { [l2.q6]: i }),
                                disabled: o,
                                icon: (0, l.jsx)(r, {
                                    className: l2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: B,
                                }),
                                onClick: s,
                                onContextMenu: s,
                                onMouseEnter: d,
                                onMouseLeave: h,
                                plated: null != p,
                                redGlow: b,
                                tooltipType: A ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: A,
                                tooltipPositionKey: A
                                    ? ef.intl.formatToPlainString(ef.t["18wnuD"], { inputDeviceName: R })
                                    : void 0,
                                tooltipShouldShow: !i,
                                tooltipText: A
                                    ? ef.intl.format(ef.t["18wnuD"], { inputDeviceName: R })
                                    : ef.intl.string(ef.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, l.jsx)(ng.A, {
                targetElementRef: I,
                shouldShow: N,
                graphic: { type: "image", src: si.A },
                onRequestClose: () => {
                    l8.N(st.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ef.intl.string(sl.default.VG4zAf),
                body: ef.intl.string(sl.default["8VIRzR"]),
            }),
        ],
    });
}
var sr = n(935399),
    so = n(505312),
    su = n(848847),
    sc = n(88001),
    sd = n(466919),
    sh = n(438705);
let sm = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        a = s.useCallback(() => {
            i(), (0, ea.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
        }, [i]);
    return (0, l.jsx)(ng.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: sh },
        shouldShow: n,
        title: ef.intl.format(sd.default.bx8sR9, { premiumGroupProductName: (0, sc.DP)() }),
        body: ef.intl.format(sd.default.Pw4OFZ, { premiumGroupProductName: (0, sc.DP)() }),
        onRequestClose: i,
        actions: [{ text: ef.intl.string(sd.default.DD26QR), onClick: a }],
    });
};
var sp = n(873298),
    sf = n(840387);
function sg(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, sf.Z)(),
        a = t9.KP.useSetting(),
        r = i && a !== sp.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, s.useCallback)(() => {
            t(ep.i.TAKE_ACTION), (0, ea.openUserSettings)(ei.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, s.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]),
        c = r
            ? a === sp.KP.FRIENDS_ONLY
                ? ef.intl.string(ef.t["/hogEy"])
                : ef.intl.string(ef.t["6hEfm1"])
            : ef.intl.string(ef.t.bnNxW1);
    return (0, l.jsx)(ng.A, {
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
        actions: [{ text: ef.intl.string(ef.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function sx(e) {
    let t,
        n,
        {
            webBuildOverride: i,
            onClick: a,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: c,
        } = e,
        h = s.useRef(null),
        [m, p] = s.useState(!1);
    (0, sr.Ay)(() => {
        let e = () => p(!0);
        return (
            lg._.subscribe(tg.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                lg._.unsubscribe(tg.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = s.useCallback(() => {
        p(!1), a();
    }, [a]);
    t = null != i ? ef.intl.formatToPlainString(ef.t.Gzh6ZP, { webBuildOverride: i.id }) : ef.intl.string(ef.t.cduTBL);
    let g = eZ.Z,
        x = (0, so.w)();
    return (
        (g = null != i ? su.H : x.Component),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(l1.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": ef.intl.string(ef.t.cduTBL),
                    icon: (0, l.jsx)(g, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...x.events,
                    plated: null != c,
                }),
                (0, l.jsx)(sm, { targetElementRef: h, shouldShow: m, onDismiss: () => p(!1) }),
                (0, l.jsx)(nv.Ay, {
                    contentTypes: o,
                    groupName: ep.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, l.jsx)(sg, { markAsDismissed: n, targetElementRef: h })
                            : null;
                    },
                }),
            ],
        })
    );
}
var sA = n(489902);
let sC = lA.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    sv = 2.5 * eJ.A.Millis.SECOND,
    sE = 2 * eJ.A.Millis.MINUTE,
    sT = 2 * eJ.A.Millis.MINUTE,
    sj = 5 * eJ.A.Millis.SECOND;
function s_(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: i = -1 / 0,
            streaming: r,
            currentUser: o,
            status: u,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: h,
            nameplate: m,
            avatarDecoration: x,
            "data-jump-section": A,
        } = e,
        C = s.useRef(null),
        v = t ?? C,
        T = (0, lf.F_)({ avatarDecoration: x, size: (0, Q.Te)(p._3.SIZE_32) }),
        j = (0, Y.A)(),
        {
            updateOpenPopoutRef: N,
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
                (0, _.A)(() => a(!0), 750),
                s.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && l(n), e.current?.();
                    };
                    return (
                        lg._.subscribe(tg.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            lg._.unsubscribe(tg.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: i ? n : void 0, setHighlightBadge: l }
            );
        })(),
        y = (0, z.K)(m);
    return null == o
        ? null
        : (0, l.jsx)(E.A, {
              object: tg.ZSU.AVATAR,
              children: (0, l.jsx)(n4.A, {
                  user: o,
                  targetElementRef: v,
                  clickTrap: !0,
                  preload: () =>
                      (0, n5.A)(o.id, o.getAvatarURL(void 0, n4.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: s } = e;
                      return (0, l.jsx)(n1, {
                          currentUser: o,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: s,
                          className: sA.dI,
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
                      let { onMouseEnter: t, onMouseDown: s, ...d } = e;
                      return (0, l.jsxs)("div", {
                          ref: v,
                          style: y,
                          onMouseEnter: t,
                          onMouseDown: s,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(sA.Q9, { [sA.ZQ]: null != m }),
                          children: [
                              (0, l.jsx)(g.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ef.intl.string(ef.t["5fWB8U"]),
                                  focusProps: { ringTarget: v },
                                  className: sA.$n,
                                  "data-jump-section": A,
                              }),
                              (0, l.jsx)(sC, {
                                  size: p._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tg.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: i,
                                  className: sA.my,
                                  "aria-hidden": !0,
                              }),
                              (0, l.jsx)("div", { className: sA.oM, children: h(j) }),
                          ],
                      });
                  },
              }),
          });
}
class sN extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new h.Ep();
    speakingWhilePTTTooltipTimeout = new h.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(sT, null, !1);
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
        (0, L.A)(e, t, tg.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, tg.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            lt.A.isConnected() ? (0, ea.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL) : (0, ea.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, v.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("92646"),
                    n.e("70337"),
                    n.e("70750"),
                    n.e("25610"),
                    n.e("77891"),
                    n.e("32264"),
                    n.e("34053"),
                    n.e("26705"),
                    n.e("64479"),
                    n.e("40523"),
                    n.e("99961"),
                    n.e("31688"),
                    n.e("29761"),
                    n.e("26105"),
                    n.e("46461"),
                    n.e("9225"),
                    n.e("35316"),
                    n.e("30272"),
                    n.e("45650"),
                    n.e("61097"),
                    n.e("34186"),
                    n.e("57016"),
                    n.e("28743"),
                    n.e("66609"),
                    n.e("79705"),
                    n.e("94169"),
                    n.e("83928"),
                    n.e("92702"),
                    n.e("53727"),
                    n.e("99406"),
                    n.e("76032"),
                    n.e("78220"),
                    n.e("72273"),
                    n.e("33957"),
                    n.e("5104"),
                    n.e("69590"),
                    n.e("57006"),
                    n.e("72283"),
                    n.e("42743"),
                    n.e("74748"),
                    n.e("64234"),
                    n.e("61448"),
                    n.e("5389"),
                    n.e("6619"),
                    n.e("49937"),
                    n.e("42641"),
                    n.e("88826"),
                    n.e("28510"),
                    n.e("73127"),
                    n.e("60943"),
                    n.e("3840"),
                    n.e("40482"),
                    n.e("50128"),
                    n.e("36029"),
                    n.e("65317"),
                    n.e("66969"),
                    n.e("23309"),
                    n.e("3175"),
                    n.e("69152"),
                    n.e("15086"),
                    n.e("92922"),
                    n.e("57205"),
                    n.e("40455"),
                    n.e("10441"),
                    n.e("16492"),
                    n.e("32828"),
                    n.e("28217"),
                    n.e("30006"),
                    n.e("23924"),
                    n.e("42205"),
                    n.e("71091"),
                    n.e("19402"),
                    n.e("11704"),
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
                    n.e("45679"),
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
                    n.e("50117"),
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
                    n.e("90664"),
                    n.e("32756"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("52617"),
                    n.e("2564"),
                    n.e("6353"),
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
                    n.e("67837"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("86243"),
                    n.e("32209"),
                    n.e("39171"),
                    n.e("37021"),
                    n.e("17608"),
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
                    n.e("95340"),
                    n.e("62718"),
                    n.e("26728"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("61156"),
                    n.e("36624"),
                    n.e("59957"),
                    n.e("91671"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("68763"),
                    n.e("29354"),
                    n.e("16767"),
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
                    n.e("11617"),
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
                    n.e("33448"),
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
                    n.e("80519"),
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
                    n.e("3710"),
                    n.e("73122"),
                    n.e("42324"),
                    n.e("94607"),
                    n.e("33771"),
                    n.e("8979"),
                    n.e("77602"),
                    n.e("82921"),
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
                    n.e("26938"),
                    n.e("39053"),
                    n.e("41706"),
                    n.e("62175"),
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
                    n.e("89588"),
                    n.e("24084"),
                    n.e("44790"),
                    n.e("87641"),
                    n.e("44264"),
                    n.e("74913"),
                    n.e("54876"),
                    n.e("14451"),
                    n.e("7755"),
                    n.e("93720"),
                    n.e("54658"),
                    n.e("31828"),
                    n.e("71790"),
                    n.e("81754"),
                    n.e("98027"),
                    n.e("33049"),
                    n.e("21403"),
                    n.e("43456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, l.jsx)(e, { ...t, onClose: v.Z_, onInteraction: (0, G.s)("UserSettingsMenu", w.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, v.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n8.d)({ location: "Account" });
                    return (0, l.jsx)(U.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
                            onClose: v.Z_,
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
            (0, v.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("60536"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, l.jsx)(U.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
                            onClose: v.Z_,
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > sE;
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
                      this.speakingWhileMutedTooltipTimeout.start(sv, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(sv, () =>
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
        if ((0, N.A)({ activities: t, status: i, applicationStream: n, voiceChannel: r }))
            return (0, l.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, l.jsx)(x.A, { children: t6.Ay.humanizeStatus(i) }),
                    (0, l.jsx)(S.A, {
                        user: s,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: sA.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tg.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, l.jsxs)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, l.jsx)(x.A, { children: t6.Ay.humanizeStatus(i) }),
                      (0, l.jsx)(K.A, { activity: o, emojiClassName: sA.Zg, className: sA.WO }),
                  ],
              })
            : null != i && i !== tg.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, l.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, l.jsx)(b, { text: t6.Ay.humanizeStatus(i) }),
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
                          className: sA.eW,
                          children: (0, l.jsx)(lv.A, {
                              className: a()({ [sA.e8]: null != e }),
                              children: (0, l.jsx)(X.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? $.G.ANIMATED : $.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, l.jsx)("div", {
                          className: sA.XP,
                          children: (0, l.jsx)(lC.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, l.jsx)(lZ, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, l.jsx)(s_, {
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
                      (0, l.jsx)(A.sk, {
                          children: (e) =>
                              (0, l.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(sA.kL, { [sA.UG]: null != n, [sA.bc]: !s, [sA.G5]: i }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, l.jsx)(Z.A, { nameplate: t, hovered: r, placement: q.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, l.jsx)(sS, {
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
                      (0, l.jsx)(eA, {}),
                  ],
              });
    }
}
function sS(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: s,
            serverMute: i,
            serverDeaf: a,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: u,
            webBuildOverride: c,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: h,
            handleToggleSelfDeaf: m,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: x,
            handleOpenSettingsContextMenu: A,
            dismissibleContents: C,
            nameplate: v,
            accountContainerRef: E,
            deviceChangedTooltipType: T,
            shouldShowPTTJoinTooltip: j = !1,
            dismissTooltips: _,
            speaking: N,
        } = e,
        S = (0, z.K)(v);
    return (0, l.jsxs)("div", {
        className: sA.Uo,
        style: S,
        children: [
            (0, l.jsx)(sa, {
                accountContainerRef: E,
                selfMute: n,
                serverMute: i,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: d,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: f,
                iconForeground: null != v ? sA.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: j,
                dismissTooltips: _,
                speaking: N,
            }),
            (0, l.jsx)(l6, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: m,
                onContextMenu: g,
                awaitingRemote: s,
                iconForeground: null != v ? sA.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: _,
            }),
            (0, l.jsx)(sx, {
                webBuildOverride: c,
                onClick: x,
                onContextMenu: A,
                dismissibleContents: C.settings,
                iconForeground: null != v ? sA.t4 : void 0,
                nameplate: v,
            }),
        ],
    });
}
function sR(e) {
    let t = (0, c.bG)([lt.A], () => null != lt.A.getChannelId()),
        n = (0, eC.Py)(e),
        l = s.useRef(new h.Ep()),
        [i, a] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (a(!0),
            l.current.start(sj, () => {
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
function sy() {
    let e = (0, c.bG)([nu.default], () => nu.default.getCurrentUser()),
        t = (0, c.bG)([nN.default], () => nN.default.getId()),
        {
            activities: n,
            streaming: i,
            status: a,
        } = (0, c.cf)([nI.A], () => {
            let e = nI.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tg.$pd.STREAMING;
                    }),
                status: nI.A.getStatus(),
            };
        }),
        r = (0, c.bG)([lc.A], () => lc.A.getAnyStreamForUser(t)),
        u = (0, T.A)({ userId: t }),
        m = (0, c.bG)([lr.A], () => lr.A.getVoiceVolume(t)),
        p = t6.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, c.bG)([lt.A, ld.A], () => {
            let e = lt.A.getChannelId();
            return null != e ? ld.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: x, suppress: A } = (0, n9.A)(f),
        { selfDeaf: v, deaf: E } = (0, n7.A)(f),
        _ = (0, c.bG)([O.A], () => ((0, D.kK)() ? O.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        N = (0, c.bG)([le.Ay], () => le.Ay.getSpeakingWhileMuted()),
        S = (0, c.bG)([P.A], () => P.A.isFullscreenInContext()),
        R = (0, c.bG)([lm.A], () => lm.A.hasLayers()),
        y = (0, C.useModalsStore)(C.hasAnyModalOpenSelector) || R || lx.P.isDisallowPopupsSet() || S,
        I = (0, V.sw)(),
        { userStatusMenu: b } = B.$.useConfig({ location: "Account" }),
        M = (0, ev.A)((e) => e.isOpen),
        k = (0, c.bG)([J.default], () => null != J.default.getAwaitingRemoteSessionInfo()),
        L = (0, c.bG)([lp.A], () => lp.A.getGuildId()),
        F = e?.avatarDecoration,
        G = (0, H.A)(F),
        Q = t6.Ay.useName(e) ?? "",
        { analyticsLocations: z } = (0, U.Ay)(w.A.ACCOUNT),
        q = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: Z } = (0, n2.c9)(),
        K = (0, c.bG)([n3.A, nu.default, lh.A], () => {
            let e,
                t = n3.A.getSyncingWith(),
                n = n3.A.getActivity(),
                l = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (l = o()(Array.from(lh.A.getParty(e) ?? []))
                        .map((e) => nu.default.getUser(e))
                        .filter(nS.Vq)
                        .value()),
                l.length > 1
            );
        }),
        Y = { avatar: [], settings: [] },
        $ = (0, n6.lX)("AccountCoachmark");
    !y &&
        (Y.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        I && b && !M && Y.avatar.push(d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK),
        $ && Y.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: X, dismissTooltip: ee } = sR(ll.oh.AUDIO_INPUT),
        { shouldShowTooltip: et, dismissTooltip: en } = sR(ll.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: el, dismissTooltip: es } = (function () {
            let [e, t] = s.useState(!1),
                n = (0, c.bG)([le.Ay], () => le.Ay.getMode() === ll.TB.PUSH_TO_TALK),
                l = (0, c.bG)(
                    [lt.A],
                    () => null != lt.A.getChannelId() && (lt.A.getDuration() ?? Number.MAX_VALUE) < ls,
                ),
                [i, a] = s.useState(!1),
                { showPTTJoinTooltip: r } = ln.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = s.useRef(new h.Ep()),
                u = s.useRef(new h.Ep());
            s.useEffect(() => {
                if (l && n && !e) {
                    if ((ln.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        u.current.start(li, () => {
                            t(!1);
                        }),
                        o.current.start(ls, () => {
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
                    o.current.stop(), u.current.stop();
                }),
                { shouldShowTooltip: i, dismissTooltip: d }
            );
        })(),
        ei = (function () {
            let { showPTTSpeakingIndicator: e } = ln.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = s.useState(!1),
                l = (0, c.bG)([le.Ay], () => le.Ay.getMode() === ll.TB.PUSH_TO_TALK),
                i = (0, c.bG)([lt.A], () => lt.A.getRTCConnectionId()),
                a = (0, c.bG)([le.Ay], () => {
                    let e = le.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < lu;
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
                        let i = (l & ll.ME.VOICE) === ll.ME.VOICE,
                            a = lr.A.isCurrentUserPTTActive();
                        i && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              s.start(lo, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && l && null != i && le.Ay.getMediaEngine().on(la.bg.VoiceActivity, o),
                        () => {
                            le.Ay.getMediaEngine().removeListener(la.bg.VoiceActivity, o), s.stop();
                        }
                    );
                }, [e, l, a, i]),
                t
            );
        })(),
        ea = s.useMemo(() => (X ? "input" : et ? "output" : void 0), [X, et]),
        er = s.useCallback(
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
    return (0, l.jsx)(U.f5, {
        value: z,
        children: (0, l.jsx)(sN, {
            currentUser: e,
            username: Q,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: Y,
            userTag: p,
            occluded: y,
            selfDeaf: v,
            selfMute: x,
            serverDeaf: E,
            serverMute: g,
            speaking: u,
            voiceDb: m,
            speakingWhileMuted: N,
            speakingWhilePTTInactive: ei,
            status: a,
            streaming: i,
            suppress: A,
            webBuildOverride: _,
            awaitingRemote: k,
            nameplate: q,
            selectedGuildId: L,
            avatarDecoration: G,
            isQuestBarEmpty: Z,
            isListenAlongVisible: K,
            deviceChangedTooltipType: ea,
            onDismissDeviceChangedTooltip: () => er(ea),
            shouldShowPTTJoinTooltip: el,
            dismissPTTJoinTooltip: es,
        }),
    });
}
