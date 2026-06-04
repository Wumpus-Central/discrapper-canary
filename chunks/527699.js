"use strict";
n.d(t, { g: () => rM, A: () => rk }), n(321073);
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
    p = n(922016),
    E = n(939249),
    m = n(140735),
    g = n(312138),
    A = n(192308),
    I = n(442433),
    T = n(820284),
    S = n(717558),
    y = n(964486),
    N = n(220839),
    v = n(397244),
    C = n(394871),
    R = n(922139),
    O = n(866323),
    b = n(449450);
function D(e) {
    let { text: t } = e,
        n = (0, O.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(R.animated.div, { className: b.H, style: e, children: t })),
    });
}
var L = n(29160),
    w = n(793574),
    M = n(688810),
    P = n(521502),
    x = n(380610),
    k = n(313961),
    U = n(18235),
    G = n(183184),
    F = n(384059),
    V = n(480890),
    B = n(734066),
    H = n(710315),
    j = n(601255),
    Y = n(562819),
    W = n(449582),
    K = n(351952),
    $ = n(88686),
    z = n(174755),
    q = n(302223),
    X = n(609425),
    Z = n(922301),
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
function eh(e) {
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
    let [_, h] = (0, eu.z)(() => ({ x: 0, y: 0, config: e_ }));
    return (
        r.useEffect(() => {
            h({ x: o.x, y: o.y });
        }, [o.x, o.y, h]),
        (0, i.jsx)(R.animated.div, {
            style: { transform: (0, R.to)([_.x, _.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ed.T, t),
        })
    );
}
var ef = n(49999),
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
            (0, ea.openUserSettings)(es.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(ef.i.TAKE_ACTION);
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
                                  (0, i.jsx)(eh, { className: eE.iL, pageMultiplier: 5 }),
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
                                  onClick: () => c(ef.i.USER_DISMISS),
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
    ey = n(224640),
    eN = n(305866),
    ev = n(364522),
    eC = n(22231),
    eR = n(133171),
    eO = n(780338),
    eb = n(980707),
    eD = n(26137),
    eL = n(473935),
    ew = n(765671),
    eM = n(783041),
    eP = n(457965),
    ex = n(176781),
    ek = n(777666),
    eU = n(320448),
    eG = n(993401),
    eF = n(447349);
function eV(e) {
    return (0, i.jsx)("div", {
        className: eF.wE,
        children: (0, i.jsx)(eb.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eB(e) {
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
        f = (0, eG.rE)({ action: t, onClick: n }),
        [m, g] = r.useState(!1),
        I = r.useRef(null),
        T = c ?? I,
        S = null != u,
        y = S && h,
        N = r.useCallback(() => {
            g(!0);
        }, []),
        v = r.useCallback(() => {
            (0, A.hasAnyModalOpen)() || g(!1);
        }, []),
        C = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: eF.iA,
                        children: (0, i.jsx)(s, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: eF.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(et.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eF.W1,
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
                (t = y
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(E.D, { className: eF.ef, onClick: f, children: C() }),
                              (0, i.jsx)(E.D, {
                                  className: eF.ap,
                                  "aria-label": ep.intl.string(ep.t.PdRCRg),
                                  ...e,
                                  onClick: N,
                                  children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : S
                      ? (0, i.jsxs)(E.D, {
                            className: eF.ef,
                            ...e,
                            onClick: N,
                            children: [
                                C(),
                                (0, i.jsx)("div", {
                                    className: eF.ap,
                                    children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(E.D, { className: eF.ef, onClick: f, children: C() })),
                (0, i.jsx)("div", { ref: T, className: eF.jG, children: t })
            );
        };
    return S
        ? (0, i.jsx)("li", {
              className: eF.j$,
              onMouseEnter: N,
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
        : (0, i.jsx)("li", { className: eF.j$, children: R() });
}
function eH(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var ej = n(274372),
    eY = n(271597),
    eW = n(990078),
    eK = n(315710),
    e$ = n(475358),
    ez = n(408278),
    eq = n(625903),
    eX = n(404778),
    eZ = n(689175),
    eQ = n(821609),
    eJ = n(532624),
    e0 = n(927813),
    e1 = n(879631),
    e2 = n(350535),
    e3 = n(372684),
    e6 = n(572164),
    e4 = n(953932),
    e5 = n(280483),
    e7 = n(890856),
    e8 = n(713517),
    e9 = n(609174),
    te = n(241326);
let tt = (e) => {
        let { onBeforeDelete: t, onAfterDelete: s, variant: a = "overlay-secondary" } = e,
            o = (0, e9.Y_)(),
            l = r.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        ((e) => {
                            let { clips: t, onBeforeDelete: r, onAfterDelete: s } = e;
                            (0, A.openModalLazy)(
                                async () => {
                                    let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                                    return (n) =>
                                        (0, i.jsx)(e, {
                                            clips: t,
                                            ...n,
                                            onBeforeDelete: r,
                                            onAfterDelete: async () => {
                                                await n.onClose(), s?.();
                                            },
                                        });
                                },
                                { stackingBehavior: "stack" },
                            );
                        })({ clips: [o], onAfterDelete: s, onBeforeDelete: t });
                },
                [o, s, t],
            );
        return (0, i.jsx)(eW.m, {
            text: ep.intl.string(ep.t.oyYWHE),
            position: "top",
            children: (0, i.jsx)(ez.K, {
                onClick: l,
                icon: te.u,
                "aria-label": ep.intl.string(ep.t.oyYWHE),
                variant: a,
                size: "sm",
            }),
        });
    },
    tn = (e) => {
        let { onBeforeEdit: t, variant: n = "primary" } = e,
            s = (0, e9.Y_)(),
            a = r.useCallback(
                (e) => {
                    e.stopPropagation(), e.preventDefault(), t?.(), (0, eY.p)({ initialEditingClipId: s.id });
                },
                [s, t],
            );
        return (0, i.jsx)(eQ.$, {
            onClick: a,
            icon: eC.R,
            variant: n,
            size: "sm",
            text: ep.intl.string(ep.t.bt75uw),
            fullWidth: !0,
        });
    };
var ti = n(27232),
    tr = n(505930),
    ts = n(877575),
    ta = n(16590);
let to = () => {
    let e = (0, e9.Y_)(),
        t = r.useCallback(
            (t) => {
                t.stopPropagation(), t.preventDefault(), (0, ts.XK)(e);
            },
            [e],
        );
    return (0, i.jsx)(
        eW.m,
        {
            text: ep.intl.string(e.isFavorite ? ta.default.IZsalP : ta.default.ihBfyA),
            position: "top",
            children: (0, i.jsx)(ez.K, {
                onClick: t,
                icon: e.isFavorite ? ti.G : tr.y,
                "aria-label": ep.intl.string(ep.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
};
var tl = n(405433),
    tu = n(602902);
let tc = (e) => {
    let { variant: t = "primary" } = e,
        n = (0, e9.Y_)(),
        { analyticsLocations: s } = (0, M.Ay)(),
        a = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, tu.K)([n], { analyticsLocations: s });
            },
            [n, s],
        );
    return (0, i.jsx)(eQ.$, {
        onClick: a,
        icon: tl.l,
        variant: t,
        size: "sm",
        text: ep.intl.string(ep.t.RDE0Sc),
        fullWidth: !0,
    });
};
var td = n(226870),
    t_ = n(285072),
    th = n(316305);
let tf = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: o } = e,
        l = r.useRef(null),
        { isHoveringOrFocusing: u } = (0, e8.A)(l),
        c = r.useCallback(() => {
            s?.(), (0, eY.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(e9.Cl, {
        clip: t,
        children: (0, i.jsx)(e7.s, {
            ref: l,
            "aria-label": ep.intl.string(ep.t.bt75uw),
            onClick: c,
            className: a()(th.Z1, o),
            children: (0, i.jsxs)(td.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(ek.Lp, { className: th.Ad, text: ep.intl.string(ep.t.y2b7CA) }),
                    (0, i.jsxs)(t_.h, {
                        isVisible: u,
                        className: th.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: th.mY,
                                children: [(0, i.jsx)(to, {}), (0, i.jsx)(tt, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: th.E_,
                                children: [(0, i.jsx)(tn, { onBeforeEdit: s }), (0, i.jsx)(tc, {})],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tp = n(652215),
    tE = n(753070),
    tm = n(550350);
function tg(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e;
    (0, e5.A)();
    let o = (0, c.yK)([ej.Ay], () => ej.Ay.getClips()),
        l = (0, c.bG)([ej.Ay], () => ej.Ay.getPendingClips()),
        u = (0, c.bG)([ej.Ay], () => ej.Ay.getSettings()),
        d = (0, c.bG)([ej.Ay], () => ej.Ay.getNewClipIds()),
        _ = (0, c.bG)([eJ.Ay], () => eJ.Ay.getKeybindForAction(tp.hCu.SAVE_CLIP)),
        h = r.useRef(null),
        f = r.useMemo(() => {
            let e = [...l, ...o].filter((e) => e.type === e3.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [o, l]),
        p = r.useMemo(() => f.slice(0, 16), [f]),
        E = f.length > 16,
        m = null != _ ? e2.dI(_.shortcut, !0) : null;
    (0, eK.t)(h);
    let g = (0, e1.$)(u.clipsLength / e0.A.Millis.SECOND),
        A = (0, tE.zr)(u.clipsQuality.resolution),
        I = ep.intl.formatToPlainString(ep.t.Qb44XH, { fps: u.clipsQuality.frameRate });
    return (0, i.jsxs)("div", {
        ref: (e) => {
            (h.current = e), a?.(e);
        },
        className: tm.SW,
        role: "dialog",
        "aria-label": ep.intl.string(ep.t.z2jK6X),
        children: [
            (0, i.jsxs)("div", {
                className: tm.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: tm.$,
                        children: [
                            (0, i.jsx)(ee.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ep.intl.string(ep.t.z2jK6X),
                            }),
                            null != m && (0, i.jsx)(e$.e, { className: tm.P, shortcut: m }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tm.$s,
                        children: [
                            (0, i.jsx)(eW.m, {
                                text: ep.intl.string(ep.t["3D5yo/"]),
                                children: (0, i.jsx)(ez.K, {
                                    onClick: () => n(),
                                    icon: eq.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(ep.t["3D5yo/"]),
                                }),
                            }),
                            (0, i.jsx)(eW.m, {
                                text: ep.intl.string(ta.default["55C2MH"]),
                                children: (0, i.jsx)(ez.K, {
                                    onClick: () => t(),
                                    icon: ex.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(ta.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: tm.P6,
                children: [g, A, I].join(" \u2022 "),
            }),
            (0, i.jsx)(eX.c, {}),
            p.length > 0
                ? (0, i.jsxs)(eZ.Ch, {
                      className: tm.Vg,
                      fade: !0,
                      disableFocusRingScope: !0,
                      children: [
                          p.map((e) => (0, i.jsx)(tf, { clip: e, isNew: d.includes(e.id), onClose: s }, e.id)),
                          E &&
                              (0, i.jsx)("div", {
                                  className: tm.qr,
                                  children: (0, i.jsx)(eQ.$, {
                                      onClick: () => t(),
                                      text: ep.intl.string(ta.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)(tA, { keybindString: m }),
        ],
    });
}
function tA(e) {
    let { keybindString: t } = e,
        n = (0, e6.Et)();
    return (0, i.jsxs)("div", {
        className: tm.p$,
        children: [
            (0, i.jsx)(et.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tm.qO,
                children: ep.intl.string(ta.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(et.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tm.CZ,
                      children: ep.intl.format(ta.default.y4zC7j, {
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
                          keybind: (0, i.jsx)(e$.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(e4.A, {}),
        ],
    });
}
function tI(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        s = (0, B.sw)(),
        { userStatusMenu: a } = H.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        o = (0, c.bG)([ej.Ay], () => ej.Ay.getNewClipIds().length),
        l = r.useCallback(
            (e) => {
                t(), (0, eY.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        u = r.useCallback(() => {
            t(), (0, ea.openUserSettings)(es.X.CLIPS_PANEL);
        }, [t]);
    return s && a
        ? (0, i.jsx)(eB, {
              action: "PRESS_CLIPS",
              icon: ex.x,
              label: ep.intl.string(ep.t.z2jK6X),
              trailing: o > 0 ? (0, i.jsx)(ek.hV, { count: o }) : null,
              onClick: () => l(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tg, { ...e, onOpenGallery: l, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tT = n(480335),
    tS = n(31956),
    ty = n(361628),
    tN = n(744808),
    tv = n(875741),
    tC = n(645507),
    tR = n(970931),
    tO = n(462887),
    tb = n(736653),
    tD = n(439174),
    tL = n(428262),
    tw = n(878784),
    tM = n(788868);
function tP() {
    let e = (0, tw.Xb)(),
        t = (0, tL.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tM.sp.length - 1; t >= 0; t--) {
        let i = tM.VD[tM.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tx = {
        [tM.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tM.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tM.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tM.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tM.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tM.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tM.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tM.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tk = {
        [tM.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tM.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tM.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tM.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tM.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tM.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tM.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tM.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tU = n(682165);
let tG = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tF() {
    let e = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        t = (0, eI.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tP(),
                t = (0, tO.M)((0, tb.Ay)());
            if (null == e) return null;
            let n = tx[e],
                i = tk[e],
                r = {
                    currentBadge: (0, tD.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tM.sp.indexOf(e);
            if (s > 0) {
                let e = tM.sp[s - 1],
                    n = tx[e];
                (r.prevBadge = (0, tD.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [s, a] = r.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tV, { levelUpData: s });
}
function tV(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        s = r.useCallback(() => {
            eI.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(eK.O, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tU.i,
            children: [
                (0, i.jsx)("div", {
                    className: tU.b,
                    children: (0, i.jsx)(eW.m, {
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
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tG, { levelUpData: t }) }),
            ],
        }),
    });
}
var tB = n(206835),
    tH = n(183555),
    tj = n(999291),
    tY = n(975732),
    tW = n(718019),
    tK = n(328296),
    t$ = n(915614),
    tz = n(744753),
    tq = n(559506),
    tX = n(646986),
    tZ = n(349419),
    tQ = n(946356),
    tJ = n(878555),
    t0 = n(624479),
    t1 = n(206845),
    t2 = n(957565),
    t3 = n(427262),
    t6 = n(962352);
function t4(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, tH.NJ)();
    return t2.p5
        ? (0, i.jsx)(t1.A, {
              text: ep.intl.string(ep.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t3.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(E.D, {
                      ...e,
                      className: a()(t6.c, { [t6.R]: n }),
                      "aria-label": ep.intl.string(ep.t.y5MwJy),
                      children: (0, i.jsx)(t0.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t5 = n(983495),
    t7 = n(442228),
    t8 = n(885386),
    t9 = n(290863),
    ne = n(351906),
    nt = n(562153),
    nn = n(661531),
    ni = n(477782),
    nr = n(628284),
    ns = n(695366),
    na = n(363195),
    no = n(889227),
    nl = n(287809),
    nu = n(174459),
    nc = n(429707),
    nd = n(274303),
    n_ = n(994125),
    nh = n(347853),
    nf = n(573879),
    np = n(335020),
    nE = n(43105),
    nm = n(704824),
    ng = n(46225),
    nA = n(429913),
    nI = n(379848),
    nT = n(633075),
    nS = n(735321),
    ny = n(667049),
    nN = n(606758),
    nv = n(495544),
    nC = n(403362),
    nR = n(518477);
function nO(e) {
    let { targetElementRef: t, onClose: n } = e,
        [s, a] = r.useState(!1),
        { trackUserProfileEditAction: o } = (0, tH.NJ)(),
        l = (0, c.bG)([nv.default], () => nv.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([nv.default], () => nv.default.getId()),
                i = (0, ny.A)(n),
                s = r.useMemo(() => i.filter((e) => e instanceof nT.R), [i]),
                a =
                    ((e = (0, eP.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    r.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                o = r.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                l = ((t = (0, nA.A)(o)), r.useMemo(() => t.filter(nC.Vq), [t])),
                { tokens: u, fetched: d } = (0, nm.j)(o),
                _ = (0, ng.U9)(l);
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
        : (0, i.jsx)(nI.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: r, markAsDismissed: c } = e,
                      _ = u.find((e) => e.dismissibleContent === r);
                  if (null == _) return null;
                  let h = "linked" === _.type,
                      f = () =>
                          (0, tY.openUserProfileModal)({ userId: l, tabSection: nR.RP.WIDGETS }).then(() => {
                              c(ef.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(nE.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != _.config.editProfileUpsellImage
                              ? { type: "image", src: _.config.editProfileUpsellImage }
                              : void 0,
                      title: ep.intl.format(ep.t.TXDztH, { applicationName: _.application.name }),
                      body: h ? ep.intl.string(ep.t["63Kso0"]) : ep.intl.string(ep.t.HwXoeC),
                      onRequestClose: () => c(ef.i.USER_DISMISS),
                      actions: [
                          h
                              ? {
                                    text: ep.intl.string(ep.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            f()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new nT.R({ applicationId: _.application.id })),
                                                        void ((0, nS.Y5)(e),
                                                        o({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, nN.XA)(nR.jM.WIDGET_ADDED))
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
                                                a(!0), f().finally(() => a(!1));
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
var nb = n(661439),
    nD = n(385113),
    nL = n(188951),
    nw = n(334074),
    nM = n(90165);
function nP(e) {
    let { targetElementRef: t, onClose: s } = e,
        [a, o] = r.useState(!1),
        l = (0, c.bG)([nv.default], () => nv.default.getId()),
        { eligibleApplications: u, markAsDismissed: _ } = (function () {
            let e = (0, c.yK)([nD.A], () => nD.A.getFeaturedApplicationIds());
            (0, nL.A)(e),
                r.useEffect(() => {
                    (0, nb.X)();
                }, []);
            let t = (0, c.bG)([nv.default], () => nv.default.getId()),
                n = (0, ny.A)(t),
                i = r.useMemo(() => n.filter((e) => e instanceof nT.R), [n]),
                s = (0, nA.A)(e),
                a = r.useMemo(() => s.filter(nC.Vq), [s]),
                o = (0, c.cf)([nM.A], () => {
                    let t = {};
                    for (let n of e) t[n] = nM.A.getLastPlayedDateTime(n);
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
                { eligibleToShow: u, markAsDismissed: _ } = (0, nw.hj)({
                    applications: l,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nw.SH,
                });
            return {
                eligibleApplications: r.useMemo(() => l.filter((e) => u.includes(e.id)), [l, u]),
                markAsDismissed: _,
            };
        })();
    return 0 === u.length
        ? null
        : (0, i.jsx)(nE.A, {
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
                  _(
                      u.map((e) => e.id),
                      ef.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: ep.intl.string(ep.t.VSLDly),
                      loading: a,
                      onClick: () => {
                          o(!0),
                              (0, tY.openUserProfileModal)({ userId: l, tabSection: nR.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      (0, A.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("71540"),
                                                  n.e("8978"),
                                                  n.e("78377"),
                                                  n.e("25594"),
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
                                              ef.i.TAKE_ACTION,
                                          ),
                                          s();
                                  })
                                  .finally(() => o(!1));
                      },
                  },
              ],
          });
}
var nx = n(461213),
    nk = n(818348),
    nU = n(466573);
function nG() {
    let e = (0, c.bG)([nx.A], () => nx.A.getStatus()),
        t = (0, t3.MU)(e) ?? "",
        n = e === nk.cl.INVISIBLE || e === nk.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nU.k,
        children: [
            (0, i.jsxs)(m.A, { tag: "div", children: [ep.intl.string(ep.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eW.m, {
                    text: ep.intl.string(ep.t.L99HQm),
                    children: (0, i.jsx)(ns.E, {
                        size: "xs",
                        color: nn.A.colors.STATUS_WARNING,
                        "aria-label": ep.intl.string(ep.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nF = n(841595);
let nV = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nB = n(501838),
    nH = n(760716),
    nj = n(915089),
    nY = n(13808);
function nW(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: o,
            height: l,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nj.GV)(),
        _ = r.useRef(null),
        h = (0, eu.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: l },
            to: { transform: "translate3d(0, 0, 0)", height: l },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != _.current && _.current.focus();
            },
        });
    return (0, i.jsx)(R.animated.div, {
        className: a()(nY.kL, u),
        style: h,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nY.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nY.U1,
                    children: [
                        (0, i.jsx)(E.D, {
                            innerRef: _,
                            "aria-label": ep.intl.string(ep.t.WAI6xu),
                            className: nY.b,
                            onClick: () => {
                                t(ef.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(en.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(ee.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != s && (0, i.jsx)(et.E, { variant: "text-md/normal", color: "text-subtle", children: s }),
                (0, i.jsx)(ev.Ip, {
                    className: nY.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nY.gT, c), children: o }),
                }),
            ],
        }),
    });
}
var nK = n(973912),
    n$ = n(871123),
    nz = n(44724),
    nq = n(501573);
function nX() {
    (0, nz.default)({ guildId: (0, n$.zf)() });
}
function nZ(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: s } = (0, M.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nW, {
              heading: ep.intl.string(ep.t["vy/61K"]),
              subheading: ep.intl.string(ep.t.tEee9t),
              markAsDismissed: r,
              className: nq.Zj,
              contentClassName: nq.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nK.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nq.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nq.UD,
                      children: (0, i.jsx)(eQ.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ep.intl.string(ep.t.rg9FQp),
                          onClick: nX,
                      }),
                  }),
              ],
          });
}
function nQ(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nV.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
                s = (0, c.bG)([nF.A], () => (null != i ? nF.A.getFirstWishlistId(i.id) : null)),
                a = (0, nH.i)((e) => e.recommendationApplicationIds),
                l = (0, nB.rY)(),
                u = (0, nB.qx)();
            return r.useMemo(
                () => (null != a || (null == s && n) ? (0, o.uniq)([...(a ?? []), ...u, ...l]).sort() : []),
                [n, s, u, l, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        l = r.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nI.Ay, {
        contentTypes: l,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: a } = e;
            return null == s
                ? null
                : r === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nZ, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nJ = n(146901),
    n0 = n(827827);
let n1 = [
        { duration: 15 * e0.A.Millis.MINUTE, label: () => ep.intl.string(ep.t["8ot6gv"]) },
        { duration: e0.A.Millis.HOUR, label: () => ep.intl.string(ep.t.UMWBZr) },
        { duration: 8 * e0.A.Millis.HOUR, label: () => ep.intl.string(ep.t.EpAXPC) },
        { duration: e0.A.Millis.DAY, label: () => ep.intl.string(ep.t["755t4q"]) },
        { duration: 3 * e0.A.Millis.DAY, label: () => ep.intl.string(ep.t["f3/1ch"]) },
        { duration: void 0, label: () => ep.intl.string(ep.t["46dqJY"]) },
    ],
    n2 = "forever";
function n3(e) {
    let { status: t, currentStatus: n, description: r } = e,
        s = t !== tp.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: n1.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    ni.Dr,
                    {
                        id: `${t}-${r}`,
                        label: s(),
                        action: () => (0, n0.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? n2,
                );
            }),
        });
    return (0, i.jsx)(ni.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, t3.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(eR.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n0.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function n6(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nJ._)(e);
    return "today" === t
        ? ep.intl.formatToPlainString(ep.t.ZxxHIO, { timeString: i })
        : ep.intl.formatToPlainString(ep.t["9OFjSe"], { dateString: n, timeString: i });
}
var n4 = n(996988),
    n5 = n(656884);
function n7(e) {
    let t,
        n,
        s,
        o,
        l,
        u,
        d,
        _,
        p,
        { currentUser: E, onClose: g, setPopoutRef: I, highlightBadge: T, openedAt: S, className: y } = e,
        N = __OVERLAY__,
        v = (0, tj.Ay)(E.id, void 0),
        { analyticsLocations: C } = (0, M.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        R = (0, tH.pb)({ layout: "ACCOUNT_POPOUT", userId: E.id, guildId: void 0 }),
        { ref: O, height: b } = (0, ew.Ay)(),
        { isHoveringOrFocusing: D, isHovering: L } = (0, e8.A)(O);
    r.useEffect(() => {
        I?.(O.current);
    }, [O, I]),
        r.useEffect(
            () => (eI.A.setState({ isOpen: !0 }), () => eI.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let P = (0, c.bG)([t9.A], () => t9.A.getStatus(E.id)),
        x = n6(t8.CY.useSetting()),
        k = (0, c.bG)([ne.A], () => ne.A.hidePersonalInformation),
        U = (0, tR.kB)(),
        G = t8.Q_.useSetting(),
        F =
            ((t = t8.CY.useSetting()),
            (n = (0, tR.kB)()),
            (s = t8.Jr.useSetting()),
            (o = (e) => {
                let i = n6(t);
                if (P === e && null != i) return i;
                switch (e) {
                    case tp.clD.DND:
                        return n ? ep.intl.string(ep.t.day5A6) : ep.intl.string(ep.t["tq/fMK"]);
                    case tp.clD.INVISIBLE:
                        return ep.intl.string(ep.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (l = (0, i.jsx)(i.Fragment, {
                children: n1.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        ni.Dr,
                        {
                            id: `${P}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tR.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? n2,
                    );
                }),
            })),
            (u = n3({ status: tp.clD.ONLINE, currentStatus: P })),
            (d = n3({ status: tp.clD.IDLE, currentStatus: P, description: o(tp.clD.IDLE) })),
            (_ = n3({ status: tp.clD.DND, currentStatus: P, description: o(tp.clD.DND) })),
            (p = n3({ status: tp.clD.INVISIBLE, currentStatus: P, description: o(tp.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(ni.bX, {}, "menu-separator-statuses"),
                    d,
                    _,
                    p,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(ni.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      ni.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ep.intl.string(ep.t.gJRnwK),
                                          iconLeft: eO.a,
                                          leadingAccessory: { type: "icon", icon: eO.a },
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
                                              (0, tR.ES)(!n);
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
            let t = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
                n = (0, c.bG)([ne.A], () => ne.A.hidePersonalInformation),
                r = (0, c.bG)([na.A], () => (0, tO.M)(na.A.theme)),
                { multiAccountUsers: s } = (0, n_.K)(),
                a = s.map((s) => {
                    let a = new no.A(s),
                        o = a.id === t?.id,
                        l = s.tokenStatus === nd.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        ni.Dr,
                        {
                            id: a.id,
                            focusedClassName: np.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: np.ci,
                                    children: [
                                        (0, i.jsx)(h.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: f._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: np.DD,
                                            children: [
                                                (0, i.jsx)(et.E, {
                                                    className: np.gE,
                                                    variant: "text-sm/normal",
                                                    children: t3.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(et.E, {
                                                        className: np.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        o &&
                                            (0, i.jsx)(nr.y, {
                                                size: "sm",
                                                color: t
                                                    ? nn.A.unsafe_rawColors.WHITE.css
                                                    : nn.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? nn.A.unsafe_rawColors.BRAND_500.css
                                                        : nn.A.unsafe_rawColors.WHITE.css,
                                                className: np.s0,
                                            }),
                                        l &&
                                            (0, i.jsx)(ns.E, {
                                                color: nn.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? nn.A.unsafe_rawColors.BRAND_500.css
                                                        : nn.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: np.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), l)) (0, nh.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nu.default.track(tp.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tp.JJy.USER_PROFILE },
                                        }),
                                        nc.Mx(n, void 0, nf.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(ni.bX, {}),
                            (0, i.jsx)(ni.Dr, {
                                id: "manage-accounts",
                                label: ep.intl.string(ep.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nh.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(g),
        B = (0, tB.A)({ analyticsLocations: C }),
        H = (0, tL.TW)(E),
        j = r.useRef(null),
        Y = r.useRef(null),
        W = (0, ty.A)(v?.profileFrame?.skuId, "UserProfileAccountPopout"),
        { profileFrameStyle: K, profileFrameClassName: $ } = (0, tv.A)(v?.profileFrame?.skuId);
    (0, tS.A)({ skuId: v?.profileFrame?.skuId, openedAt: S, context: R, analyticsLocations: C });
    let z = r.useRef((0, eI.A)((e) => e.shouldRenderTenureLevelUp)),
        q = r.useMemo(() => (0, tC.A)(), []),
        [X, Z] = r.useState(() => eI.A.getState().shouldRenderTenureLevelUp);
    r.useEffect(() => {
        let e = setTimeout(() => {
            Z(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Q = (e) => {
            g?.(), (0, tY.openUserProfileModal)({ customStatusPrompt: q, sourceAnalyticsLocations: C, ...R, ...e });
        },
        J = v?.widgets != null && v.widgets.length > 0,
        ee = r.useCallback(() => {
            g();
        }, [g]),
        en = r.useCallback(() => {
            B(), ee();
        }, [B, ee]),
        ei = (0, eP.QR)({ location: "UserProfileAccountPopout" }),
        { enabled: er } = eM.A.useConfig({ location: "UserProfileAccountPopout" }),
        es = (0, eP.zd)({ location: "UserProfileAccountPopout" }),
        ea = r.useId();
    return (0, i.jsx)(M.f5, {
        value: C,
        children: (0, i.jsx)(tH.of, {
            value: R,
            openedAt: S,
            fetchStartedAt: v?.fetchStartedAt,
            fetchEndedAt: v?.fetchEndedAt,
            isLoaded: v?.isLoaded,
            children: (0, i.jsxs)(eN.l, {
                ref: O,
                "aria-labelledby": ea,
                className: a()(eF.jC, y),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(m.A, {
                        children: (0, i.jsx)(eS.H, { id: ea, children: ep.intl.string(ep.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eS.F, {
                        children: [
                            (0, i.jsx)(nQ, { displayProfile: v, handleOpenUserProfileModal: Q, height: b }),
                            (0, i.jsxs)(tQ.A, {
                                className: a()(eF.BK, $),
                                style: K,
                                user: E,
                                displayProfile: v,
                                themeType: n4.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n5.wx,
                                        children: [
                                            (0, i.jsx)(t$.A, { user: E, displayProfile: v, themeType: n4.d.POPOUT }),
                                            (0, i.jsx)(tW.A, {
                                                user: E,
                                                displayProfile: v,
                                                themeType: n4.d.POPOUT,
                                                onOpenProfile: N ? void 0 : Q,
                                            }),
                                            (0, i.jsx)(t5.A, {
                                                ref: j,
                                                user: E,
                                                themeType: n4.d.POPOUT,
                                                onCloseProfile: g,
                                                prompt: q,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(ev.Ip, {
                                        className: eF.rf,
                                        style: { pointerEvents: X ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tq.A, { userId: E.id }),
                                            (0, i.jsx)(tJ.Ay, {
                                                className: eF.eF,
                                                user: E,
                                                displayName: nt.Ay.getName(void 0, null, E),
                                                onClickName: N ? void 0 : Q,
                                                displayNameTrailing: (0, i.jsx)(t4, { user: E, isVisible: D }),
                                                pronouns: v?.pronouns,
                                                trailing: (0, i.jsx)(tK.A, {
                                                    displayProfile: v,
                                                    themeType: n4.d.POPOUT,
                                                    onClose: g,
                                                    shouldOpenBadgeTooltip: null != T ? (e) => e === T : void 0,
                                                    shouldGlowTenureBadge: z.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tz.A, { isPremiumUser: H, onInteraction: g }),
                                            (0, i.jsx)(t7.A, {
                                                user: E,
                                                bio: v?.bio,
                                                hidePersonalInformation: k,
                                                onClose: g,
                                            }),
                                            J &&
                                                (0, i.jsx)(tZ.A, {
                                                    user: E,
                                                    widgets: v?.widgets,
                                                    onOpenUserProfileModal: Q,
                                                }),
                                            (0, i.jsx)(tX.A, {
                                                user: E,
                                                currentUser: E,
                                                onOpenUserProfileModal: Q,
                                                onClose: g,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eF.T_,
                                                children: [
                                                    (0, i.jsx)(tQ.A.Overlay, {
                                                        className: eF.g0,
                                                        children: (0, i.jsxs)(eH, {
                                                            children: [
                                                                (0, i.jsx)(eB, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ep.intl.string(ep.t.s5vZlQ),
                                                                    icon: eC.R,
                                                                    onClick: en,
                                                                    ref: Y,
                                                                }),
                                                                (0, i.jsx)(eB, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nG, {}),
                                                                    sublabel: null != x && x,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eR.nW, { status: P, size: 12 }),
                                                                    trailing:
                                                                        (U || P === tp.clD.DND) &&
                                                                        (0, i.jsx)(eO.a, { size: "xxs" }),
                                                                    renderSubmenu: eT.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eV, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eF.hQ,
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
                                                                                                      ey.d,
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
                                                                (0, i.jsx)(tI, { onClose: g, popoutContainerRef: O }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tQ.A.Overlay, {
                                                        className: eF.g0,
                                                        children: (0, i.jsxs)(eH, {
                                                            children: [
                                                                (0, i.jsx)(eB, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eD.r,
                                                                    label: ep.intl.string(ep.t.oMNyYN),
                                                                    onClick: () => {
                                                                        g(), (0, nh.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eV, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ep.intl.string(ep.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: V,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t2.p5 &&
                                                                    G &&
                                                                    (0, i.jsx)(eB, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eL.L,
                                                                        label: ep.intl.string(ep.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, t2.C)(E.id), g();
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    v?.profileEffect != null &&
                                        !z.current &&
                                        (0, i.jsx)(tT.A, { skuId: v.profileEffect.skuId, isHovering: L }),
                                    null != W && (0, i.jsx)(tN.A, { frame: W }),
                                ],
                            }),
                            er
                                ? (0, i.jsx)(nP, { targetElementRef: Y, onClose: g })
                                : ei && es
                                  ? (0, i.jsx)(nO, { targetElementRef: Y, onClose: g })
                                  : null,
                            (0, i.jsx)(tF, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n8 = n(371912),
    n9 = n(655116),
    ie = n(21973),
    it = n(454719),
    ii = n(342296),
    ir = n(852712),
    is = n(167579),
    ia = n(173660),
    io = n(555975),
    il = n(763827),
    iu = n(499156),
    ic = n(731854);
let id = 2.5 * e0.A.Millis.SECOND,
    i_ = +e0.A.Millis.HOUR;
var ih = n(459838),
    ip = n(485296);
let iE = 3 * e0.A.Millis.SECOND,
    im = +e0.A.Millis.DAY;
var ig = n(616356),
    iA = n(734057),
    iI = n(629016),
    iT = n(186111),
    iS = n(967198),
    iy = n(486020),
    iN = n(625494),
    iv = n(536194),
    iC = n(19575),
    iR = n(994314),
    iO = n(485599),
    ib = n(537668),
    iD = n(626584),
    iL = n(531685),
    iw = n(259065),
    iM = n(864386);
let iP = new iD.A("DisplayNameStylesCoachmark");
function ix(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, M.Ay)(),
        o = (0, r.useRef)(null),
        l = (0, c.bG)([iL.A], () => iL.A.isFocused()),
        u = (0, r.useCallback)(() => {
            t(ef.i.TAKE_ACTION),
                (0, ea.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iw.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, r.useCallback)(() => {
            t(ef.i.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            l && o.current?.paused ? o.current?.play().catch(iP.error) : l || o.current?.pause();
        }, [l]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                s,
                (0, i.jsx)(nE.A, {
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
                    title: ep.intl.string(iM.default["1AE464"]),
                    body: [ep.intl.string(iM.default.cNc1g9), ep.intl.string(ep.t["4JNXHG"])],
                    actions: [{ text: ep.intl.string(ep.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var ik = n(131607),
    iU = n(45780),
    iG = n(696451),
    iF = n(71393),
    iV = n(685073),
    iB = n(228366);
let iH = { lastSeenInfos: {} },
    ij = iH;
class iY extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        ij = e ?? iH;
    }
    getState() {
        return ij;
    }
    getGuildLastSeenInfo(e) {
        return ij.lastSeenInfos[e] ?? null;
    }
}
let iW = new iY(iB.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        ij.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        ij = iH;
    },
});
var iK = n(116833),
    i$ = n(514661);
let iz = new iD.A("GuildTagAvailableCoachmark");
function iq(e) {
    let t = (0, c.bG)([iF.A], () => iF.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iB.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, i$.A)(t?.id ?? null, () => n(ef.i.TAKE_ACTION));
    if (null == t || !(0, iV.q0)(t))
        return iz.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nE.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iK.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t["m/Tc3n"], { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(ef.i.USER_DISMISS),
            }),
        ],
    });
}
function iX(e) {
    let t = (0, c.bG)([iF.A], () => iF.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, i$.A)(t?.id ?? null, () => n(ef.i.TAKE_ACTION));
    if (null == t || !(0, iV.q0)(t))
        return iz.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nE.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iK.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t.VFqnyU, { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: o,
                size: "md",
                onRequestClose: () => n(ef.i.USER_DISMISS),
            }),
        ],
    });
}
var iZ = n(843010),
    iQ = n(764231),
    iJ = n(425713);
function i0(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tP(),
        s = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        a = (0, eI.A)((e) => e.isOpen),
        o = (0, iZ.G)();
    return s || null == r || a || o
        ? null
        : (0, i.jsx)(nI.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(i1, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i1(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        o = tM.sp.indexOf(t),
        l = (0, iJ.I)(tM.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, r.useCallback)(() => {
            n(ef.i.TAKE_ACTION),
                eI.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iN._.dispatch(tp.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(ef.i.USER_DISMISS);
        }, [n]),
        d = tM.VD[t],
        _ = ep.intl.formatToPlainString(ep.t.ewkaVR, {
            timeMilestone: (0, iQ.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: ep.intl.string(ep.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nE.A, {
        targetElementRef: s,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != l ? { type: "image", src: l, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ep.intl.string(ep.t.VoDxsV),
        body: _,
        actions: h,
    });
}
function i2(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n8.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iU.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tp.dJq),
                r = (0, c.bG)([iF.A, nl.default, iG.Ay], () => {
                    if (null === e) return !1;
                    let t = iF.A.getGuild(e);
                    if (void 0 === t || !(0, iV.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = nl.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iG.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, ik.ww)(r && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tp.eGj);
        })(e.guildId, { shouldShow: r }),
        [o, l] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                s = (0, c.bG)([iW], () => (null === r ? null : iW.getGuildLastSeenInfo(r))),
                a = (0, c.bG)([iF.A], () => iF.A.getGuild(r)?.profile?.tag),
                o = null != a && i?.identityGuildId === r && i?.tag === null,
                l = null != r && s?.tag === a,
                u = null !== r && o && !l;
            return (0, ik.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? s === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iX, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : o === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iq, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: l,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i0, { groupName: ef.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nI.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: ef.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, i.jsx)(ix, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(ib.A, {
                                            markAsDismissed: r,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eY.p,
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
var i3 = n(615675),
    i6 = n(900797),
    i4 = n(847374),
    i5 = n(348858),
    i7 = n(617354),
    i8 = n(206018),
    i9 = n(42473),
    re = n(490704),
    rt = n(967194);
function rn(e) {
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
            events: { onMouseEnter: E, onMouseLeave: m },
        } = (0, i5.I)(_ ? "undeafen" : "deafen"),
        g = n ? i3.T : h,
        { name: A } = (0, eA.x5)(ic.oh.AUDIO_OUTPUT),
        I = (0, i7.A)(t, n, s),
        { analyticsLocations: T } = (0, M.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
        S = r.useRef(null);
    return (
        r.useEffect(() => () => f(), [_, f]),
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
                            children: (0, i.jsx)(i8.A, {
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
                        h = d ? i6.t : i4.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: a()(re.Lh, { [re.v8]: _, [re.q6]: d }),
                        children: [
                            (0, i.jsx)(i9.A, {
                                "aria-checked": _,
                                "aria-label": ep.intl.string(ep.t.wjcRFX),
                                className: re.eT,
                                disabled: s,
                                icon: (0, i.jsx)(g, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? nn.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: l,
                                }),
                                iconForeground: _ ? rt.o : void 0,
                                innerClassName: a()({ [rt.T]: n }),
                                onClick: o,
                                onContextMenu: r,
                                onMouseEnter: E,
                                onMouseLeave: m,
                                plated: null != u,
                                redGlow: _,
                                role: "switch",
                                tooltipText: I,
                            }),
                            (0, i.jsx)(i9.A, {
                                className: a()(re.UT, { [re.q6]: d }),
                                disabled: s,
                                icon: (0, i.jsx)(h, {
                                    className: re.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? nn.A.colors.ICON_VOICE_MUTED : "currentColor",
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
var ri = n(666654),
    rr = n(523875),
    rs = n(993719);
let ra = {};
class ro extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return ra[e] ?? !1;
    }
}
let rl = new ro(iB.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        ra[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        ra[t] = !1;
    },
});
var ru = n(362823),
    rc = n(980923),
    rd = n(224585),
    r_ = n(949341),
    rh = n(973324);
function rf(e) {
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
            shouldShowSpeakingWhileMutedTooltip: E,
            shouldShowSpeakingWhilePTTTooltip: m,
            shouldShowInputDeviceChangedTooltip: g,
            shouldShowPTTJoinTooltip: A,
            dismissTooltips: I,
            speaking: T,
        } = e,
        { showPTTIconIndicator: S } = iu.A.useConfig({ location: "MicrophoneButton" }),
        y = (0, c.bG)([io.Ay], () => io.Ay.getMode() === ic.TB.PUSH_TO_TALK),
        N = (0, c.bG)([io.Ay], () => io.Ay.getSettings().modeOptions.shortcut),
        v = (0, c.bG)([rl], () => rl.getIsTutorialActive(ru.v.MUTE_TUTORIAL)),
        C = (0, c.bG)([il.A], () => null != il.A.getChannelId()),
        { name: R } = (0, eA.x5)(ic.oh.AUDIO_INPUT),
        { enabledInputProfiles: O } = (0, ir.d)({ location: "MicrophoneButton" }),
        b = r.useRef(null),
        D = n || o || s,
        L = (0, rr.L)(D ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, M.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: x, events: k, play: U } = L,
        G = s || o ? ri.O : x;
    r.useEffect(() => () => U(), [D, U]);
    let F = (0, rc.A)(n, s, o, l);
    t = E
        ? { tooltipType: "green_void_do_not_use", tooltipText: ep.intl.string(ep.t["29gnR4"]), tooltipForceOpen: !0 }
        : A || m
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ep.intl.format(ep.t.c1qUOQ, { keybind: e2.dI(N).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let B = S && y && C,
        H = D ? nn.A.colors.ICON_VOICE_MUTED : "currentColor",
        j = r.useCallback(() => {
            h(), v && rs.N(ru.v.MUTE_TUTORIAL);
        }, [h, v]);
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
                            children: (0, i.jsx)(i8.A, {
                                onInteraction: (0, V.s)("AudioDeviceMenu", w.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: O.length > 0,
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
                        o = s ? i6.t : i4.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(re.Lh, { [re.v8]: D, [re.q6]: s }),
                        children: [
                            (0, i.jsx)(i9.A, {
                                "aria-checked": D,
                                "aria-label": ep.intl.string(ep.t.w4m945),
                                className: re.eT,
                                disabled: l,
                                icon: (0, i.jsx)(G, { size: "custom", width: 20, height: 20, color: H, className: u }),
                                onClick: j,
                                onContextMenu: r,
                                onMouseEnter: () => {
                                    d(), k.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    _(), k.onMouseLeave();
                                },
                                plated: null != f,
                                redGlow: D,
                                role: "switch",
                                ...t,
                                children: B ? (0, i.jsx)("div", { className: a()(r_.U, { [r_.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(i9.A, {
                                "aria-label": g
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: R })
                                    : ep.intl.string(ep.t.fRzCbB),
                                className: a()(re.UT, { [re.q6]: s }),
                                disabled: l,
                                icon: (0, i.jsx)(o, {
                                    className: re.$$,
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
                                redGlow: D,
                                tooltipType: g ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: g,
                                tooltipPositionKey: g
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: R })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: g
                                    ? ep.intl.format(ep.t["18wnuD"], { inputDeviceName: R })
                                    : ep.intl.string(ep.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nE.A, {
                targetElementRef: b,
                shouldShow: v,
                graphic: { type: "image", src: rh.A },
                onRequestClose: () => {
                    rs.N(ru.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ep.intl.string(rd.default.VG4zAf),
                body: ep.intl.string(rd.default["8VIRzR"]),
            }),
        ],
    });
}
var rp = n(935399),
    rE = n(505312),
    rm = n(848847),
    rg = n(88001),
    rA = n(466919),
    rI = n(438705);
let rT = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = r.useCallback(() => {
            s(), (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(nE.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: rI },
        shouldShow: n,
        title: ep.intl.format(rA.default.bx8sR9, { premiumGroupProductName: (0, rg.DP)() }),
        body: ep.intl.format(rA.default.Pw4OFZ, { premiumGroupProductName: (0, rg.DP)() }),
        onRequestClose: s,
        actions: [{ text: ep.intl.string(rA.default.DD26QR), onClick: a }],
    });
};
var rS = n(873298),
    ry = n(840387);
function rN(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, ry.Z)(),
        a = t8.KP.useSetting(),
        o = s && a !== rS.KP.FRIENDS_AND_ALL_GUILDS,
        l = (0, r.useCallback)(() => {
            t(ef.i.TAKE_ACTION), (0, ea.openUserSettings)(es.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, r.useCallback)(() => {
            t(ef.i.USER_DISMISS);
        }, [t]),
        c = o
            ? a === rS.KP.FRIENDS_ONLY
                ? ep.intl.string(ep.t["/hogEy"])
                : ep.intl.string(ep.t["6hEfm1"])
            : ep.intl.string(ep.t.bnNxW1);
    return (0, i.jsx)(nE.A, {
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
function rv(e) {
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
    (0, rp.Ay)(() => {
        let e = () => f(!0);
        return (
            iN._.subscribe(tp.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iN._.unsubscribe(tp.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = r.useCallback(() => {
        f(!1), a();
    }, [a]);
    t = null != s ? ep.intl.formatToPlainString(ep.t.Gzh6ZP, { webBuildOverride: s.id }) : ep.intl.string(ep.t.cduTBL);
    let E = eq.Z,
        m = (0, rE.w)();
    return (
        (E = null != s ? rm.H : m.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i9.A, {
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
                (0, i.jsx)(rT, { targetElementRef: _, shouldShow: h, onDismiss: () => f(!1) }),
                (0, i.jsx)(nI.Ay, {
                    contentTypes: l,
                    groupName: ef.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(rN, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rC = n(489902);
let rR = iC.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
    rO = 2.5 * e0.A.Millis.SECOND,
    rb = 2 * e0.A.Millis.MINUTE,
    rD = 2 * e0.A.Millis.MINUTE,
    rL = 5 * e0.A.Millis.SECOND;
function rw(e) {
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
        S = (0, iy.F_)({ avatarDecoration: m, size: (0, Y.Te)(f._3.SIZE_32) }),
        y = (0, X.A)(),
        {
            updateOpenPopoutRef: v,
            highlightBadge: C,
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
                (0, N.A)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    };
                    return (
                        iN._.subscribe(tp.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iN._.unsubscribe(tp.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: i }
            );
        })(),
        O = (0, K.K)(h);
    return null == l
        ? null
        : (0, i.jsx)(T.A, {
              object: tp.ZSU.AVATAR,
              children: (0, i.jsx)(ii.A, {
                  user: l,
                  targetElementRef: I,
                  clickTrap: !0,
                  preload: () =>
                      (0, it.A)(l.id, l.getAvatarURL(void 0, ii.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(n7, {
                          currentUser: l,
                          highlightBadge: C,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rC.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: p.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      d(), R(void 0);
                  },
                  children: (e) => {
                      v(e);
                      let { onMouseEnter: t, onMouseDown: r, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: I,
                          style: O,
                          onMouseEnter: t,
                          onMouseDown: r,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(rC.Q9, { [rC.ZQ]: null != h }),
                          children: [
                              (0, i.jsx)(E.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ep.intl.string(ep.t["5fWB8U"]),
                                  focusProps: { ringTarget: I },
                                  className: rC.$n,
                                  "data-jump-section": g,
                              }),
                              (0, i.jsx)(rR, {
                                  size: f._3.SIZE_32,
                                  src: l.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: o ? tp.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: rC.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rC.oM, children: _(y) }),
                          ],
                      });
                  },
              }),
          });
}
class rM extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(rD, null, !1);
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
        (0, G.A)(e, t, tp.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, U.A)(e, tp.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            il.A.isConnected() ? (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL) : (0, ea.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("14893"),
                    n.e("39713"),
                    n.e("3633"),
                    n.e("22575"),
                    n.e("63635"),
                    n.e("13114"),
                    n.e("20315"),
                    n.e("9546"),
                    n.e("19185"),
                    n.e("99961"),
                    n.e("85363"),
                    n.e("23449"),
                    n.e("95170"),
                    n.e("83241"),
                    n.e("65020"),
                    n.e("46461"),
                    n.e("16404"),
                    n.e("64509"),
                    n.e("6026"),
                    n.e("43334"),
                    n.e("45650"),
                    n.e("66641"),
                    n.e("24059"),
                    n.e("18088"),
                    n.e("37144"),
                    n.e("44143"),
                    n.e("46286"),
                    n.e("80926"),
                    n.e("48100"),
                    n.e("2871"),
                    n.e("83928"),
                    n.e("92702"),
                    n.e("53727"),
                    n.e("6153"),
                    n.e("76032"),
                    n.e("18712"),
                    n.e("78920"),
                    n.e("62144"),
                    n.e("87103"),
                    n.e("58097"),
                    n.e("85529"),
                    n.e("48616"),
                    n.e("35477"),
                    n.e("52519"),
                    n.e("76825"),
                    n.e("25031"),
                    n.e("57006"),
                    n.e("78496"),
                    n.e("45143"),
                    n.e("89156"),
                    n.e("13993"),
                    n.e("38559"),
                    n.e("80287"),
                    n.e("28885"),
                    n.e("6619"),
                    n.e("49937"),
                    n.e("12641"),
                    n.e("79093"),
                    n.e("28510"),
                    n.e("3445"),
                    n.e("4981"),
                    n.e("31827"),
                    n.e("18102"),
                    n.e("83185"),
                    n.e("41973"),
                    n.e("55525"),
                    n.e("15086"),
                    n.e("94695"),
                    n.e("99794"),
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
                    n.e("63232"),
                    n.e("11301"),
                    n.e("61737"),
                    n.e("60235"),
                    n.e("64827"),
                    n.e("7167"),
                    n.e("96643"),
                    n.e("99278"),
                    n.e("92789"),
                    n.e("2368"),
                    n.e("47834"),
                    n.e("19551"),
                    n.e("84569"),
                    n.e("62156"),
                    n.e("6338"),
                    n.e("5636"),
                    n.e("85404"),
                    n.e("96811"),
                    n.e("9578"),
                    n.e("2316"),
                    n.e("7743"),
                    n.e("45959"),
                    n.e("60658"),
                    n.e("8304"),
                    n.e("18573"),
                    n.e("55936"),
                    n.e("31988"),
                    n.e("39667"),
                    n.e("5812"),
                    n.e("34303"),
                    n.e("28866"),
                    n.e("2419"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("56959"),
                    n.e("25246"),
                    n.e("36458"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("50417"),
                    n.e("64607"),
                    n.e("34552"),
                    n.e("93103"),
                    n.e("76602"),
                    n.e("91763"),
                    n.e("28229"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("76418"),
                    n.e("68403"),
                    n.e("72963"),
                    n.e("42724"),
                    n.e("43437"),
                    n.e("39970"),
                    n.e("40258"),
                    n.e("66495"),
                    n.e("71210"),
                    n.e("86127"),
                    n.e("82263"),
                    n.e("6174"),
                    n.e("91146"),
                    n.e("8555"),
                    n.e("88342"),
                    n.e("46070"),
                    n.e("37977"),
                    n.e("72789"),
                    n.e("6949"),
                    n.e("86814"),
                    n.e("17249"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("42451"),
                    n.e("36863"),
                    n.e("35027"),
                    n.e("53917"),
                    n.e("79049"),
                    n.e("98965"),
                    n.e("62422"),
                    n.e("50117"),
                    n.e("90365"),
                    n.e("89088"),
                    n.e("71273"),
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
                    n.e("65437"),
                    n.e("74810"),
                    n.e("28083"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("53984"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("43780"),
                    n.e("35313"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("45413"),
                    n.e("86672"),
                    n.e("90664"),
                    n.e("32756"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("96325"),
                    n.e("2564"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("48330"),
                    n.e("14285"),
                    n.e("95752"),
                    n.e("8362"),
                    n.e("41678"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("2698"),
                    n.e("5500"),
                    n.e("501"),
                    n.e("67837"),
                    n.e("35321"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("86243"),
                    n.e("32209"),
                    n.e("62862"),
                    n.e("37021"),
                    n.e("62359"),
                    n.e("39171"),
                    n.e("87478"),
                    n.e("36564"),
                    n.e("50033"),
                    n.e("23532"),
                    n.e("83952"),
                    n.e("52229"),
                    n.e("3998"),
                    n.e("44780"),
                    n.e("52557"),
                    n.e("5557"),
                    n.e("95340"),
                    n.e("62718"),
                    n.e("1227"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("61156"),
                    n.e("91671"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("49635"),
                    n.e("68763"),
                    n.e("16767"),
                    n.e("59957"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("6841"),
                    n.e("20930"),
                    n.e("29354"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("20379"),
                    n.e("36877"),
                    n.e("57458"),
                    n.e("59466"),
                    n.e("8829"),
                    n.e("19193"),
                    n.e("1243"),
                    n.e("69747"),
                    n.e("75133"),
                    n.e("15920"),
                    n.e("77487"),
                    n.e("58164"),
                    n.e("96804"),
                    n.e("44057"),
                    n.e("28850"),
                    n.e("95998"),
                    n.e("27659"),
                    n.e("37490"),
                    n.e("42234"),
                    n.e("3930"),
                    n.e("3663"),
                    n.e("39103"),
                    n.e("26294"),
                    n.e("74678"),
                    n.e("81189"),
                    n.e("21930"),
                    n.e("92077"),
                    n.e("66580"),
                    n.e("77467"),
                    n.e("80093"),
                    n.e("98972"),
                    n.e("12682"),
                    n.e("203"),
                    n.e("4774"),
                    n.e("49629"),
                    n.e("78601"),
                    n.e("89523"),
                    n.e("80407"),
                    n.e("42726"),
                    n.e("34546"),
                    n.e("10943"),
                    n.e("29260"),
                    n.e("41701"),
                    n.e("17823"),
                    n.e("39894"),
                    n.e("21455"),
                    n.e("60989"),
                    n.e("79435"),
                    n.e("68083"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("60003"),
                    n.e("49013"),
                    n.e("30167"),
                    n.e("51892"),
                    n.e("94607"),
                    n.e("41838"),
                    n.e("46045"),
                    n.e("755"),
                    n.e("33448"),
                    n.e("3710"),
                    n.e("73122"),
                    n.e("42324"),
                    n.e("45830"),
                    n.e("8979"),
                    n.e("33771"),
                    n.e("77602"),
                    n.e("82178"),
                    n.e("46039"),
                    n.e("95602"),
                    n.e("5896"),
                    n.e("34409"),
                    n.e("43114"),
                    n.e("69537"),
                    n.e("87782"),
                    n.e("29569"),
                    n.e("10637"),
                    n.e("96480"),
                    n.e("79593"),
                    n.e("73611"),
                    n.e("41706"),
                    n.e("62175"),
                    n.e("40003"),
                    n.e("94888"),
                    n.e("89541"),
                    n.e("46430"),
                    n.e("44727"),
                    n.e("46149"),
                    n.e("5871"),
                    n.e("27462"),
                    n.e("22455"),
                    n.e("60816"),
                    n.e("68031"),
                    n.e("97162"),
                    n.e("10147"),
                    n.e("6627"),
                    n.e("60536"),
                    n.e("86546"),
                    n.e("7408"),
                    n.e("46327"),
                    n.e("28011"),
                    n.e("15057"),
                    n.e("91531"),
                    n.e("75284"),
                    n.e("43256"),
                    n.e("64926"),
                    n.e("50541"),
                    n.e("47999"),
                    n.e("37886"),
                    n.e("59587"),
                    n.e("61750"),
                    n.e("20803"),
                    n.e("95782"),
                    n.e("61137"),
                    n.e("96817"),
                    n.e("73566"),
                    n.e("27687"),
                    n.e("55839"),
                    n.e("45419"),
                    n.e("18710"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("71492"),
                    n.e("24564"),
                    n.e("34428"),
                    n.e("39721"),
                    n.e("19631"),
                    n.e("82384"),
                    n.e("76892"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("43148"),
                    n.e("71811"),
                    n.e("91685"),
                    n.e("38249"),
                    n.e("40976"),
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
                    n.e("35476"),
                    n.e("54876"),
                    n.e("14451"),
                    n.e("7755"),
                    n.e("93720"),
                    n.e("54658"),
                    n.e("31828"),
                    n.e("71790"),
                    n.e("81754"),
                    n.e("37193"),
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
                    let { enabledInputProfiles: n } = (0, ir.d)({ location: "Account" });
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rb;
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
                      this.speakingWhileMutedTooltipTimeout.start(rO, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(rO, () =>
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
        if ((0, v.A)({ activities: t, status: s, applicationStream: n, voiceChannel: o }))
            return (0, i.jsxs)(L.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(m.A, { children: t3.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(C.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: o,
                        textClassName: rC.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let l = t?.find((e) => {
            let { type: t } = e;
            return t === tp.$pd.CUSTOM_STATUS;
        });
        return null != l
            ? (0, i.jsxs)(L.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(m.A, { children: t3.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(q.A, { activity: l, emojiClassName: rC.Zg, className: rC.WO }),
                  ],
              })
            : null != s && s !== tp.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(L.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(D, { text: t3.Ay.humanizeStatus(s) }),
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
                          className: rC.eW,
                          children: (0, i.jsx)(iO.A, {
                              className: a()({ [rC.e8]: null != e }),
                              children: (0, i.jsx)(Q.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? Z.G.ANIMATED : Z.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: rC.XP,
                          children: (0, i.jsx)(iR.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(i2, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(rw, {
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
                                  className: a()(rC.kL, { [rC.UG]: null != n, [rC.bc]: !r, [rC.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(z.A, { nameplate: t, hovered: o, placement: $.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rP, {
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
function rP(e) {
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
            handleInputAudioContextMenu: p,
            handleOutputAudioContextMenu: E,
            handleOpenAccountSettings: m,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: A,
            nameplate: I,
            accountContainerRef: T,
            deviceChangedTooltipType: S,
            shouldShowPTTJoinTooltip: y = !1,
            dismissTooltips: N,
            speaking: v,
        } = e,
        C = (0, K.K)(I);
    return (0, i.jsxs)("div", {
        className: rC.Uo,
        style: C,
        children: [
            (0, i.jsx)(rf, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: _,
                onClick: f,
                onContextMenu: p,
                iconForeground: null != I ? rC.t4 : void 0,
                nameplate: I,
                shouldShowSpeakingWhileMutedTooltip: l,
                shouldShowInputDeviceChangedTooltip: !l && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: y,
                dismissTooltips: N,
                speaking: v,
            }),
            (0, i.jsx)(rn, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: h,
                onContextMenu: E,
                awaitingRemote: r,
                iconForeground: null != I ? rC.t4 : void 0,
                nameplate: I,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: N,
            }),
            (0, i.jsx)(rv, {
                webBuildOverride: c,
                onClick: m,
                onContextMenu: g,
                dismissibleContents: A.settings,
                iconForeground: null != I ? rC.t4 : void 0,
                nameplate: I,
            }),
        ],
    });
}
function rx(e) {
    let t = (0, c.bG)([il.A], () => null != il.A.getChannelId()),
        n = (0, eA.Py)(e),
        i = r.useRef(new _.Ep()),
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(rL, () => {
                a(!1);
            }));
    }, [t, n]);
    let o = r.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, y.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: o }
    );
}
function rk() {
    let e = (0, c.bG)([nl.default], () => nl.default.getCurrentUser()),
        t = (0, c.bG)([nv.default], () => nv.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nx.A], () => {
            let e = nx.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tp.$pd.STREAMING;
                    }),
                status: nx.A.getStatus(),
            };
        }),
        o = (0, c.bG)([ig.A], () => ig.A.getAnyStreamForUser(t)),
        u = (0, S.A)({ userId: t }),
        h = (0, c.bG)([ip.A], () => ip.A.getVoiceVolume(t)),
        f = t3.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([il.A, iA.A], () => {
            let e = il.A.getChannelId();
            return null != e ? iA.A.getChannel(e) : null;
        }),
        { mute: E, selfMute: m, suppress: g } = (0, ia.A)(p),
        { selfDeaf: I, deaf: T } = (0, is.A)(p),
        N = (0, c.bG)([P.A], () => ((0, x.kK)() ? P.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        v = (0, c.bG)([io.Ay], () => io.Ay.getSpeakingWhileMuted()),
        C = (0, c.bG)([k.A], () => k.A.isFullscreenInContext()),
        R = (0, c.bG)([iT.A], () => iT.A.hasLayers()),
        O = (0, A.useModalsStore)(A.hasAnyModalOpenSelector) || R || iv.P.isDisallowPopupsSet() || C,
        b = (0, B.sw)(),
        { userStatusMenu: D } = H.$.useConfig({ location: "Account" }),
        L = (0, eI.A)((e) => e.isOpen),
        U = (0, c.bG)([J.default], () => null != J.default.getAwaitingRemoteSessionInfo()),
        G = (0, c.bG)([iS.A], () => iS.A.getGuildId()),
        F = e?.avatarDecoration,
        V = (0, j.A)(F),
        Y = t3.Ay.useName(e) ?? "",
        { analyticsLocations: K } = (0, M.Ay)(w.A.ACCOUNT),
        $ = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: z } = (0, n8.c9)(),
        q = (0, c.bG)([n9.A, nl.default, iI.A], () => {
            let e,
                t = n9.A.getSyncingWith(),
                n = n9.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = l()(Array.from(iI.A.getParty(e) ?? []))
                        .map((e) => nl.default.getUser(e))
                        .filter(nC.Vq)
                        .value()),
                i.length > 1
            );
        }),
        X = { avatar: [], settings: [] },
        Z = (0, ie.lX)("AccountCoachmark");
    !O &&
        (X.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        b && D && !L && X.avatar.push(d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK),
        Z && X.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: ee } = rx(ic.oh.AUDIO_INPUT),
        { shouldShowTooltip: et, dismissTooltip: en } = rx(ic.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ei, dismissTooltip: er } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([io.Ay], () => io.Ay.getMode() === ic.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [il.A],
                    () => null != il.A.getChannelId() && (il.A.getDuration() ?? Number.MAX_VALUE) < id,
                ),
                [s, a] = r.useState(!1),
                { showPTTJoinTooltip: o } = iu.A.useConfig({ location: "usePTTJoinTooltip" }),
                l = r.useRef(new _.Ep()),
                u = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((iu.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !o)) return;
                    a(!0),
                        t(!0),
                        u.current.start(i_, () => {
                            t(!1);
                        }),
                        l.current.start(id, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, o, e]);
            let d = r.useCallback(() => {
                a(!1), l.current.stop();
            }, []);
            return (
                (0, y.l0)(() => {
                    l.current.stop(), u.current.stop();
                }),
                { shouldShowTooltip: s, dismissTooltip: d }
            );
        })(),
        es = (function () {
            let { showPTTSpeakingIndicator: e } = iu.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([io.Ay], () => io.Ay.getMode() === ic.TB.PUSH_TO_TALK),
                s = (0, c.bG)([il.A], () => il.A.getRTCConnectionId()),
                a = (0, c.bG)([io.Ay], () => {
                    let e = io.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < im;
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
                        let s = (i & ic.ME.VOICE) === ic.ME.VOICE,
                            a = ip.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(iE, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && io.Ay.getMediaEngine().on(ih.bg.VoiceActivity, l),
                        () => {
                            io.Ay.getMediaEngine().removeListener(ih.bg.VoiceActivity, l), r.stop();
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
        children: (0, i.jsx)(rM, {
            currentUser: e,
            username: Y,
            activities: n,
            applicationStream: o,
            voiceChannel: p,
            dismissibleContents: X,
            userTag: f,
            occluded: O,
            selfDeaf: I,
            selfMute: m,
            serverDeaf: T,
            serverMute: E,
            speaking: u,
            voiceDb: h,
            speakingWhileMuted: v,
            speakingWhilePTTInactive: es,
            status: a,
            streaming: s,
            suppress: g,
            webBuildOverride: N,
            awaitingRemote: U,
            nameplate: $,
            selectedGuildId: G,
            avatarDecoration: V,
            isQuestBarEmpty: z,
            isListenAlongVisible: q,
            deviceChangedTooltipType: ea,
            onDismissDeviceChangedTooltip: () => eo(ea),
            shouldShowPTTJoinTooltip: ei,
            dismissPTTJoinTooltip: er,
        }),
    });
}
