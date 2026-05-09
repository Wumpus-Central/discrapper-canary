"use strict";
n.d(t, { g: () => rT, A: () => ry }), n(321073);
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
    ea = n(858897),
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
    ej = n(271597);
function eY(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, width: a = 288, height: o = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/50e998b62375c0e2dddaef0d77991f7501319b7152c9bd6b0c722e0c4fc4aef3.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
var eW = n(990078),
    eK = n(315710),
    ez = n(475358),
    e$ = n(408278),
    eq = n(625903),
    eZ = n(404778),
    eX = n(689175),
    eQ = n(821609),
    eJ = n(532624),
    e0 = n(927813),
    e1 = n(975571),
    e2 = n(879631),
    e3 = n(350535),
    e6 = n(372684),
    e4 = n(572164),
    e5 = n(607814),
    e7 = n(280483),
    e8 = n(890856),
    e9 = n(713517),
    te = n(609174),
    tt = n(353605),
    tn = n(434320),
    ti = n(82716),
    tr = n(585579),
    ts = n(226870),
    ta = n(285072),
    to = n(316305);
let tl = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: s, className: o } = e,
        l = r.useRef(null),
        { isHoveringOrFocusing: u } = (0, e9.A)(l),
        c = r.useCallback(() => {
            s?.(), (0, ej.p)({ initialEditingClipId: t.id });
        }, [t.id, s]);
    return (0, i.jsx)(te.Cl, {
        clip: t,
        children: (0, i.jsx)(e8.s, {
            ref: l,
            "aria-label": ep.intl.string(ep.t.bt75uw),
            onClick: c,
            className: a()(to.Z1, o),
            children: (0, i.jsxs)(ts.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(ex.Lp, { className: to.Ad, text: ep.intl.string(ep.t.y2b7CA) }),
                    (0, i.jsxs)(ta.h, {
                        isVisible: u,
                        className: to.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: to.mY,
                                children: [(0, i.jsx)(ti.z, {}), (0, i.jsx)(tt.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: to.E_,
                                children: [(0, i.jsx)(tn.f, { onBeforeEdit: s }), (0, i.jsx)(tr.E, {})],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tu = n(652215),
    tc = n(753070),
    td = n(16590),
    t_ = n(550350);
function tf(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: s, setPopoutRef: a } = e;
    (0, e7.A)();
    let o = (0, c.yK)([eH.A], () => eH.A.getClips()),
        l = (0, c.bG)([eH.A], () => eH.A.getPendingClips()),
        u = (0, c.bG)([eH.A], () => eH.A.getSettings()),
        d = (0, c.bG)([eH.A], () => eH.A.getNewClipIds()),
        _ = (0, c.bG)([eJ.Ay], () => eJ.Ay.getKeybindForAction(tu.hCu.SAVE_CLIP)),
        f = r.useRef(null),
        h = r.useMemo(() => {
            let e = [...l, ...o].filter((e) => e.type === e6.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [o, l]),
        p = r.useMemo(() => h.slice(0, 16), [h]),
        E = h.length > 16,
        m = null != _ ? e3.dI(_.shortcut, !0) : null;
    (0, eK.t)(f);
    let g = (0, e2.$)(u.clipsLength / e0.A.Millis.SECOND),
        A = (0, tc.zr)(u.clipsQuality.resolution),
        I = ep.intl.formatToPlainString(ep.t.Qb44XH, { fps: u.clipsQuality.frameRate });
    return (0, i.jsxs)("div", {
        ref: (e) => {
            (f.current = e), a?.(e);
        },
        className: t_.SW,
        role: "dialog",
        "aria-label": ep.intl.string(ep.t.z2jK6X),
        children: [
            (0, i.jsxs)("div", {
                className: t_.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: t_.$,
                        children: [
                            (0, i.jsx)(ee.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ep.intl.string(ep.t.z2jK6X),
                            }),
                            null != m && (0, i.jsx)(ez.e, { className: t_.P, shortcut: m }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t_.$s,
                        children: [
                            (0, i.jsx)(eW.m, {
                                text: ep.intl.string(ep.t["3D5yo/"]),
                                children: (0, i.jsx)(e$.K, {
                                    onClick: () => n(),
                                    icon: eq.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(ep.t["3D5yo/"]),
                                }),
                            }),
                            (0, i.jsx)(eW.m, {
                                text: ep.intl.string(td.default["55C2MH"]),
                                children: (0, i.jsx)(e$.K, {
                                    onClick: () => t(),
                                    icon: eP.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(td.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(et.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: t_.P6,
                children: [g, A, I].join(" \u2022 "),
            }),
            (0, i.jsx)(eZ.c, {}),
            p.length > 0
                ? (0, i.jsxs)(eX.Ch, {
                      className: t_.Vg,
                      fade: !0,
                      disableFocusRingScope: !0,
                      children: [
                          p.map((e) => (0, i.jsx)(tl, { clip: e, isNew: d.includes(e.id), onClose: s }, e.id)),
                          E &&
                              (0, i.jsx)("div", {
                                  className: t_.qr,
                                  children: (0, i.jsx)(eQ.$, {
                                      onClick: () => t(),
                                      text: ep.intl.string(td.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)(th, { keybindString: m }),
        ],
    });
}
function th(e) {
    let { keybindString: t } = e,
        n = (0, e4.Et)(),
        s = r.useCallback(() => {
            window.open(e1.A.getArticleURL(tu.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        a = r.useCallback(() => {
            e5.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, i.jsxs)("div", {
        className: t_.p$,
        children: [
            (0, i.jsx)("div", {
                className: t_.hd,
                children: (0, i.jsx)(eY, { alt: "", ariaHidden: !0, width: 200, height: 112.5 }),
            }),
            (0, i.jsx)(et.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: t_.qO,
                children: ep.intl.string(td.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(et.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: t_.CZ,
                      children: ep.intl.format(td.default.y4zC7j, {
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
                          keybind: (0, i.jsx)(ez.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsxs)("div", {
                      className: t_.pi,
                      children: [
                          (0, i.jsx)(eQ.$, {
                              onClick: s,
                              text: ep.intl.string(ep.t.hvVgAZ),
                              variant: "secondary",
                              size: "sm",
                          }),
                          (0, i.jsx)(eQ.$, {
                              onClick: a,
                              text: ep.intl.string(ep.t.h8rgrK),
                              variant: "primary",
                              size: "sm",
                          }),
                      ],
                  }),
        ],
    });
}
function tp(e) {
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
              renderSubmenu: (e) => (0, i.jsx)(tf, { ...e, onOpenGallery: l, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tE = n(480335),
    tm = n(31956),
    tg = n(361628),
    tA = n(744808),
    tI = n(282389),
    tT = n(645507),
    tS = n(970931),
    tN = n(462887),
    ty = n(736653),
    tC = n(439174),
    tv = n(927578),
    tO = n(878784),
    tR = n(788868);
function tb() {
    let e = (0, tO.Xb)(),
        t = (0, tv.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tR.sp.length - 1; t >= 0; t--) {
        let i = tR.VD[tR.sp[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tD = {
        [tR.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tR.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tR.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tR.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tR.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tR.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tR.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tR.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tL = {
        [tR.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tR.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tR.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tR.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tR.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tR.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tR.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tR.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tw = n(682165);
let tM = r.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tP() {
    let e = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        t = (0, eI.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tb(),
                t = (0, tN.M)((0, ty.Ay)());
            if (null == e) return null;
            let n = tD[e],
                i = tL[e],
                r = {
                    currentBadge: (0, tC.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                s = tR.sp.indexOf(e);
            if (s > 0) {
                let e = tR.sp[s - 1],
                    n = tD[e];
                (r.prevBadge = (0, tC.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return r;
        })(),
        [s, a] = r.useState(null);
    return (null != n && null == s && a(n), e || !t || null == s) ? null : (0, i.jsx)(tx, { levelUpData: s });
}
function tx(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        s = r.useCallback(() => {
            eI.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(eK.O, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tw.i,
            children: [
                (0, i.jsx)("div", {
                    className: tw.b,
                    children: (0, i.jsx)(eW.m, {
                        text: ep.intl.string(ep.t.cpT0Cq),
                        children: (0, i.jsx)(e$.K, {
                            icon: en.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: s,
                            "aria-label": ep.intl.string(ep.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tM, { levelUpData: t }) }),
            ],
        }),
    });
}
var tU = n(206835),
    tk = n(183555),
    tG = n(999291),
    tF = n(975732),
    tV = n(718019),
    tB = n(694720),
    tH = n(915614),
    tj = n(744753),
    tY = n(559506),
    tW = n(646986),
    tK = n(349419),
    tz = n(946356),
    t$ = n(878555),
    tq = n(624479),
    tZ = n(206845),
    tX = n(957565),
    tQ = n(427262),
    tJ = n(962352);
function t0(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: r } = (0, tk.NJ)();
    return tX.p5
        ? (0, i.jsx)(tZ.A, {
              text: ep.intl.string(ep.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tQ.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => r({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(E.D, {
                      ...e,
                      className: a()(tJ.c, { [tJ.R]: n }),
                      "aria-label": ep.intl.string(ep.t.y5MwJy),
                      children: (0, i.jsx)(tq.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t1 = n(983495),
    t2 = n(442228),
    t3 = n(885386),
    t6 = n(290863),
    t4 = n(351906),
    t5 = n(562153),
    t7 = n(661531),
    t8 = n(477782),
    t9 = n(628284),
    ne = n(695366),
    nt = n(363195),
    nn = n(889227),
    ni = n(287809),
    nr = n(174459),
    ns = n(429707),
    na = n(274303),
    no = n(994125),
    nl = n(347853),
    nu = n(335020),
    nc = n(43105),
    nd = n(704824),
    n_ = n(46225),
    nf = n(429913),
    nh = n(379848),
    np = n(633075),
    nE = n(735321),
    nm = n(667049),
    ng = n(606758),
    nA = n(495544),
    nI = n(403362),
    nT = n(518477);
function nS(e) {
    let { targetElementRef: t, onClose: n } = e,
        [s, a] = r.useState(!1),
        { trackUserProfileEditAction: o } = (0, tk.NJ)(),
        l = (0, c.bG)([nA.default], () => nA.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([nA.default], () => nA.default.getId()),
                i = (0, nm.A)(n),
                s = r.useMemo(() => i.filter((e) => e instanceof np.R), [i]),
                a =
                    ((e = (0, eM.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    r.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                o = r.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                l = ((t = (0, nf.A)(o)), r.useMemo(() => t.filter(nI.Vq), [t])),
                { tokens: u, fetched: d } = (0, nd.j)(o),
                _ = (0, n_.U9)(l);
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
        : (0, i.jsx)(nh.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: r, markAsDismissed: c } = e,
                      _ = u.find((e) => e.dismissibleContent === r);
                  if (null == _) return null;
                  let f = "linked" === _.type,
                      h = () =>
                          (0, tF.openUserProfileModal)({ userId: l, tabSection: nT.RP.WIDGETS }).then(() => {
                              c(eh.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(nc.A, {
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
                                                        (e = new np.R({ applicationId: _.application.id })),
                                                        void ((0, nE.Y5)(e),
                                                        o({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, ng.XA)(nT.jM.WIDGET_ADDED))
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
var nN = n(461213),
    ny = n(818348),
    nC = n(466573);
function nv() {
    let e = (0, c.bG)([nN.A], () => nN.A.getStatus()),
        t = (0, tQ.MU)(e) ?? "",
        n = e === ny.cl.INVISIBLE || e === ny.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nC.k,
        children: [
            (0, i.jsxs)(m.A, { tag: "div", children: [ep.intl.string(ep.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eW.m, {
                    text: ep.intl.string(ep.t.L99HQm),
                    children: (0, i.jsx)(ne.E, {
                        size: "xs",
                        color: t7.A.colors.STATUS_WARNING,
                        "aria-label": ep.intl.string(ep.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nO = n(841595);
let nR = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nb = n(501838),
    nD = n(760716),
    nL = n(915089),
    nw = n(13808);
function nM(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: s,
            children: o,
            height: l,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nL.GV)(),
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
        className: a()(nw.kL, u),
        style: f,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nw.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nw.U1,
                    children: [
                        (0, i.jsx)(E.D, {
                            innerRef: _,
                            "aria-label": ep.intl.string(ep.t.WAI6xu),
                            className: nw.b,
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
                    className: nw.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nw.gT, c), children: o }),
                }),
            ],
        }),
    });
}
var nP = n(973912),
    nx = n(871123),
    nU = n(44724),
    nk = n(501573);
function nG() {
    (0, nU.default)({ guildId: (0, nx.zf)() });
}
function nF(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: r } = e,
        { analyticsLocations: s } = (0, M.Ay)([w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nM, {
              heading: ep.intl.string(ep.t["vy/61K"]),
              subheading: ep.intl.string(ep.t.tEee9t),
              markAsDismissed: r,
              className: nk.Zj,
              contentClassName: nk.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nP.A, {
                      userId: t,
                      analyticsLocations: s,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nk.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nk.UD,
                      children: (0, i.jsx)(eQ.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ep.intl.string(ep.t.rg9FQp),
                          onClick: nG,
                      }),
                  }),
              ],
          });
}
function nV(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: s } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nR.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
                s = (0, c.bG)([nO.A], () => (null != i ? nO.A.getFirstWishlistId(i.id) : null)),
                a = (0, nD.i)((e) => e.recommendationApplicationIds),
                l = (0, nb.rY)(),
                u = (0, nb.qx)();
            return r.useMemo(
                () => (null != a || (null == s && n) ? (0, o.uniq)([...(a ?? []), ...u, ...l]).sort() : []),
                [n, s, u, l, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        l = r.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nh.Ay, {
        contentTypes: l,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: a } = e;
            return null == s
                ? null
                : r === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nF, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nB = n(146901),
    nH = n(827827);
let nj = [
        { duration: 15 * e0.A.Millis.MINUTE, label: () => ep.intl.string(ep.t["8ot6gv"]) },
        { duration: e0.A.Millis.HOUR, label: () => ep.intl.string(ep.t.UMWBZr) },
        { duration: 8 * e0.A.Millis.HOUR, label: () => ep.intl.string(ep.t.EpAXPC) },
        { duration: e0.A.Millis.DAY, label: () => ep.intl.string(ep.t["755t4q"]) },
        { duration: 3 * e0.A.Millis.DAY, label: () => ep.intl.string(ep.t["f3/1ch"]) },
        { duration: void 0, label: () => ep.intl.string(ep.t["46dqJY"]) },
    ],
    nY = "forever";
function nW(e) {
    let { status: t, currentStatus: n, description: r } = e,
        s = t !== tu.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nj.map((e) => {
                let { duration: r, label: s } = e;
                return (0, i.jsx)(
                    t8.Dr,
                    {
                        id: `${t}-${r}`,
                        label: s(),
                        action: () => (0, nH.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
                        dontCloseOnAction: !0,
                    },
                    r ?? nY,
                );
            }),
        });
    return (0, i.jsx)(t8.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: s,
        label: (0, tQ.MU)(t),
        subtext: r,
        iconLeft: () => (0, i.jsx)(eO.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nH.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: s ? a : void 0,
    });
}
function nK(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nB._)(e);
    return "today" === t
        ? ep.intl.formatToPlainString(ep.t.ZxxHIO, { timeString: i })
        : ep.intl.formatToPlainString(ep.t["9OFjSe"], { dateString: n, timeString: i });
}
var nz = n(996988),
    n$ = n(656884);
function nq(e) {
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
        C = (0, tG.Ay)(E.id, void 0),
        { analyticsLocations: v } = (0, M.Ay)(w.A.USER_PROFILE_ACCOUNT_POPOUT),
        O = (0, tk.pb)({ layout: "ACCOUNT_POPOUT", userId: E.id, guildId: void 0 }),
        { ref: R, height: b } = (0, ew.Ay)(),
        { isHoveringOrFocusing: D, isHovering: L } = (0, e9.A)(R);
    r.useEffect(() => {
        I?.(R.current);
    }, [R, I]),
        r.useEffect(
            () => (eI.A.setState({ isOpen: !0 }), () => eI.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1 })),
            [],
        );
    let P = (0, c.bG)([t6.A], () => t6.A.getStatus(E.id)),
        x = nK(t3.CY.useSetting()),
        U = (0, c.bG)([t4.A], () => t4.A.hidePersonalInformation),
        k = (0, tS.kB)(),
        G = t3.Q_.useSetting(),
        F =
            ((t = t3.CY.useSetting()),
            (n = (0, tS.kB)()),
            (s = t3.Jr.useSetting()),
            (o = (e) => {
                let i = nK(t);
                if (P === e && null != i) return i;
                switch (e) {
                    case tu.clD.DND:
                        return n ? ep.intl.string(ep.t.day5A6) : ep.intl.string(ep.t["tq/fMK"]);
                    case tu.clD.INVISIBLE:
                        return ep.intl.string(ep.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (l = (0, i.jsx)(i.Fragment, {
                children: nj.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        t8.Dr,
                        {
                            id: `${P}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tS.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nY,
                    );
                }),
            })),
            (u = nW({ status: tu.clD.ONLINE, currentStatus: P })),
            (d = nW({ status: tu.clD.IDLE, currentStatus: P, description: o(tu.clD.IDLE) })),
            (_ = nW({ status: tu.clD.DND, currentStatus: P, description: o(tu.clD.DND) })),
            (p = nW({ status: tu.clD.INVISIBLE, currentStatus: P, description: o(tu.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(t8.bX, {}, "menu-separator-statuses"),
                    d,
                    _,
                    p,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(t8.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      t8.Dr,
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
                                              (0, tS.ES)(!n);
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
            let t = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
                n = (0, c.bG)([t4.A], () => t4.A.hidePersonalInformation),
                r = (0, c.bG)([nt.A], () => (0, tN.M)(nt.A.theme)),
                { multiAccountUsers: s } = (0, no.K)(),
                a = s.map((s) => {
                    let a = new nn.A(s),
                        o = a.id === t?.id,
                        l = s.tokenStatus === na.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        t8.Dr,
                        {
                            id: a.id,
                            focusedClassName: nu.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nu.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": s.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nu.DD,
                                            children: [
                                                (0, i.jsx)(et.E, {
                                                    className: nu.gE,
                                                    variant: "text-sm/normal",
                                                    children: tQ.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(et.E, {
                                                        className: nu.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        o &&
                                            (0, i.jsx)(t9.y, {
                                                size: "sm",
                                                color: t
                                                    ? t7.A.unsafe_rawColors.WHITE.css
                                                    : t7.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t7.A.unsafe_rawColors.BRAND_500.css
                                                        : t7.A.unsafe_rawColors.WHITE.css,
                                                className: nu.s0,
                                            }),
                                        l &&
                                            (0, i.jsx)(ne.E, {
                                                color: t7.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && r) || (t && !r)
                                                        ? t7.A.unsafe_rawColors.BRAND_500.css
                                                        : t7.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nu.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), l)) (0, nl.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nr.default.track(tu.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tu.JJy.USER_PROFILE },
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
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(t8.bX, {}),
                            (0, i.jsx)(t8.Dr, {
                                id: "manage-accounts",
                                label: ep.intl.string(ep.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, nl.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(g),
        B = (0, tU.A)({ analyticsLocations: v }),
        H = (0, tv.TW)(E),
        j = r.useRef(null),
        Y = r.useRef(null),
        W = (0, tg.A)(C?.profileFrame?.skuId, "UserProfileAccountPopout"),
        K = (0, tI.A)(C?.profileFrame?.skuId);
    (0, tm.A)({ skuId: C?.profileFrame?.skuId, openedAt: S, context: O, analyticsLocations: v });
    let z = r.useRef((0, eI.A)((e) => e.shouldRenderTenureLevelUp)),
        $ = r.useMemo(() => (0, tT.A)(), []),
        [q, Z] = r.useState(() => eI.A.getState().shouldRenderTenureLevelUp);
    r.useEffect(() => {
        let e = setTimeout(() => {
            Z(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let X = (e) => {
            g?.(), (0, tF.openUserProfileModal)({ customStatusPrompt: $, sourceAnalyticsLocations: v, ...O, ...e });
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
        children: (0, i.jsx)(tk.of, {
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
                            (0, i.jsx)(nV, { displayProfile: C, handleOpenUserProfileModal: X, height: b }),
                            (0, i.jsxs)(tz.A, {
                                className: a()(eG.BK, K),
                                user: E,
                                displayProfile: C,
                                themeType: nz.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n$.wx,
                                        children: [
                                            (0, i.jsx)(tH.A, { user: E, displayProfile: C, themeType: nz.d.POPOUT }),
                                            (0, i.jsx)(tV.A, {
                                                user: E,
                                                displayProfile: C,
                                                themeType: nz.d.POPOUT,
                                                onOpenProfile: y ? void 0 : X,
                                            }),
                                            (0, i.jsx)(t1.A, {
                                                ref: j,
                                                user: E,
                                                themeType: nz.d.POPOUT,
                                                onCloseProfile: g,
                                                prompt: $,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eC.Ip, {
                                        className: eG.rf,
                                        style: { pointerEvents: q ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tY.A, { userId: E.id }),
                                            (0, i.jsx)(t$.Ay, {
                                                className: eG.eF,
                                                user: E,
                                                displayName: t5.Ay.getName(void 0, null, E),
                                                onClickName: y ? void 0 : X,
                                                displayNameTrailing: (0, i.jsx)(t0, { user: E, isVisible: D }),
                                                pronouns: C?.pronouns,
                                                trailing: (0, i.jsx)(tB.A, {
                                                    displayProfile: C,
                                                    themeType: nz.d.POPOUT,
                                                    onClose: g,
                                                    shouldOpenBadgeTooltip: null != T ? (e) => e === T : void 0,
                                                    shouldGlowTenureBadge: z.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tj.A, { isPremiumUser: H, onInteraction: g }),
                                            (0, i.jsx)(t2.A, {
                                                user: E,
                                                bio: C?.bio,
                                                hidePersonalInformation: U,
                                                onClose: g,
                                            }),
                                            Q &&
                                                (0, i.jsx)(tK.A, {
                                                    user: E,
                                                    widgets: C?.widgets,
                                                    onOpenUserProfileModal: X,
                                                }),
                                            (0, i.jsx)(tW.A, {
                                                user: E,
                                                currentUser: E,
                                                onOpenUserProfileModal: X,
                                                onClose: g,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eG.T_,
                                                children: [
                                                    (0, i.jsx)(tz.A.Overlay, {
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
                                                                    label: (0, i.jsx)(nv, {}),
                                                                    sublabel: null != x && x,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eO.nW, { status: P, size: 12 }),
                                                                    trailing:
                                                                        (k || P === tu.clD.DND) &&
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
                                                                (0, i.jsx)(tp, { onClose: g, popoutContainerRef: R }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tz.A.Overlay, {
                                                        className: eG.g0,
                                                        children: (0, i.jsxs)(eB, {
                                                            children: [
                                                                (0, i.jsx)(eV, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eD.r,
                                                                    label: ep.intl.string(ep.t.oMNyYN),
                                                                    onClick: () => {
                                                                        g(), (0, nl.A)();
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
                                                                    tX.p5 &&
                                                                    G &&
                                                                    (0, i.jsx)(eV, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eL.L,
                                                                        label: ep.intl.string(ep.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tX.C)(E.id), g();
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
                                        (0, i.jsx)(tE.A, { skuId: C.profileEffect.skuId, isHovering: L }),
                                    null != W && (0, i.jsx)(tA.A, { frame: W }),
                                ],
                            }),
                            en && ei ? (0, i.jsx)(nS, { targetElementRef: Y, onClose: g }) : null,
                            (0, i.jsx)(tP, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nZ = n(371912),
    nX = n(655116),
    nQ = n(21973),
    nJ = n(454719),
    n0 = n(342296),
    n1 = n(533488),
    n2 = n(167579),
    n3 = n(173660),
    n6 = n(235058),
    n4 = n(763827),
    n5 = n(499156),
    n7 = n(731854);
let n8 = 2.5 * e0.A.Millis.SECOND,
    n9 = +e0.A.Millis.HOUR;
var ie = n(459838),
    it = n(485296);
let ii = 3 * e0.A.Millis.SECOND,
    ir = +e0.A.Millis.DAY;
var is = n(616356),
    ia = n(734057),
    io = n(629016),
    il = n(186111),
    iu = n(967198),
    ic = n(486020),
    id = n(625494),
    i_ = n(536194),
    ih = n(19575),
    ip = n(994314),
    iE = n(485599),
    im = n(537668),
    ig = n(626584),
    iA = n(531685),
    iI = n(259065),
    iT = n(864386);
let iS = new ig.A("DisplayNameStylesCoachmark");
function iN(e) {
    let { markAsDismissed: t, targetElementRef: n, children: s } = e,
        { analyticsLocations: a } = (0, M.Ay)(),
        o = (0, r.useRef)(null),
        l = (0, c.bG)([iA.A], () => iA.A.isFocused()),
        u = (0, r.useCallback)(() => {
            t(eh.i.TAKE_ACTION),
                (0, ea.openUserSettings)(es.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, iI.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, r.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            l && o.current?.paused ? o.current?.play().catch(iS.error) : l || o.current?.pause();
        }, [l]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                s,
                (0, i.jsx)(nc.A, {
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
                    title: ep.intl.string(iT.default["1AE464"]),
                    body: [ep.intl.string(iT.default.cNc1g9), ep.intl.string(ep.t["4JNXHG"])],
                    actions: [{ text: ep.intl.string(ep.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var iy = n(131607),
    iC = n(45780),
    iv = n(696451),
    iO = n(71393),
    iR = n(685073),
    ib = n(228366);
let iD = { lastSeenInfos: {} },
    iL = iD;
class iw extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iL = e ?? iD;
    }
    getState() {
        return iL;
    }
    getGuildLastSeenInfo(e) {
        return iL.lastSeenInfos[e] ?? null;
    }
}
let iM = new iw(ib.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iL.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iL = iD;
    },
});
var iP = n(116833),
    ix = n(514661);
let iU = new ig.A("GuildTagAvailableCoachmark");
function ik(e) {
    let t = (0, c.bG)([iO.A], () => iO.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            ib.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, ix.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iR.q0)(t))
        return iU.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nc.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iP.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
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
function iG(e) {
    let t = (0, c.bG)([iO.A], () => iO.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: r, onAdoptTag: s, onEditProfile: a } = (0, ix.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
    if (null == t || !(0, iR.q0)(t))
        return iU.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let o = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: r, onClick: s, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nc.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iP.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
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
var iF = n(904481),
    iV = n(764231),
    iB = n(425713);
function iH(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = tb(),
        s = (0, c.bG)([ec.A], () => ec.A.useReducedMotion),
        a = (0, eI.A)((e) => e.isOpen),
        o = (0, iF.G)();
    return s || null == r || a || o
        ? null
        : (0, i.jsx)(nh.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(ij, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function ij(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: s, shouldShow: a } = e,
        o = tR.sp.indexOf(t),
        l = (0, iB.I)(tR.sp[o > 0 ? o - 1 : o]).ambient,
        u = (0, r.useCallback)(() => {
            n(eh.i.TAKE_ACTION),
                eI.A.setState({ shouldRenderTenureLevelUp: !0 }),
                id._.dispatch(tu.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, r.useCallback)(() => {
            n(eh.i.USER_DISMISS);
        }, [n]),
        d = tR.VD[t],
        _ = ep.intl.formatToPlainString(ep.t.ewkaVR, {
            timeMilestone: (0, iV.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: ep.intl.string(ep.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nc.A, {
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
function iY(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nZ.c9)(),
        r = null != e.targetElementRef.current && t && n,
        [s, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iC.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tu.dJq),
                r = (0, c.bG)([iO.A, ni.default, iv.Ay], () => {
                    if (null === e) return !1;
                    let t = iO.A.getGuild(e);
                    if (void 0 === t || !(0, iR.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = ni.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = iv.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, iy.ww)(r && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tu.eGj);
        })(e.guildId, { shouldShow: r }),
        [o, l] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                r = i?.identityGuildId ?? null,
                s = (0, c.bG)([iM], () => (null === r ? null : iM.getGuildLastSeenInfo(r))),
                a = (0, c.bG)([iO.A], () => iO.A.getGuild(r)?.profile?.tag),
                o = null != a && i?.identityGuildId === r && i?.tag === null,
                l = null != r && s?.tag === a,
                u = null !== r && o && !l;
            return (0, iy.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: r });
    return r
        ? s === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iG, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : o === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(ik, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: l,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iH, { groupName: eh.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nh.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: eh.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: r } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_COACHMARK:
                                        return (0, i.jsx)(iN, {
                                            markAsDismissed: r,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(im.A, {
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
var iW = n(615675),
    iK = n(900797),
    iz = n(847374),
    i$ = n(348858),
    iq = n(617354),
    iZ = n(206018),
    iX = n(42473),
    iQ = n(490704),
    iJ = n(967194);
function i0(e) {
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
        } = (0, i$.I)(_ ? "undeafen" : "deafen"),
        g = n ? iW.T : f,
        { name: A } = (0, eA.x5)(n7.oh.AUDIO_OUTPUT),
        I = (0, iq.A)(t, n, s),
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
                            children: (0, i.jsx)(iZ.A, {
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
                        f = d ? iK.t : iz.a;
                    return (0, i.jsxs)("div", {
                        ref: S,
                        className: a()(iQ.Lh, { [iQ.v8]: _, [iQ.q6]: d }),
                        children: [
                            (0, i.jsx)(iX.A, {
                                "aria-checked": _,
                                "aria-label": ep.intl.string(ep.t.wjcRFX),
                                className: iQ.eT,
                                disabled: s,
                                icon: (0, i.jsx)(g, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: _ ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: l,
                                }),
                                iconForeground: _ ? iJ.o : void 0,
                                innerClassName: a()({ [iJ.T]: n }),
                                onClick: o,
                                onContextMenu: r,
                                onMouseEnter: E,
                                onMouseLeave: m,
                                plated: null != u,
                                redGlow: _,
                                role: "switch",
                                tooltipText: I,
                            }),
                            (0, i.jsx)(iX.A, {
                                className: a()(iQ.UT, { [iQ.q6]: d }),
                                disabled: s,
                                icon: (0, i.jsx)(f, {
                                    className: iQ.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: _ ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
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
var i1 = n(666654),
    i2 = n(523875),
    i3 = n(993719);
let i6 = {};
class i4 extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i6[e] ?? !1;
    }
}
let i5 = new i4(ib.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i6[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i6[t] = !1;
    },
});
var i7 = n(362823),
    i8 = n(980923),
    i9 = n(224585),
    re = n(949341),
    rt = n(973324);
function rn(e) {
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
        { showPTTIconIndicator: S } = n5.A.useConfig({ location: "MicrophoneButton" }),
        N = (0, c.bG)([n6.Ay], () => n6.Ay.getMode() === n7.TB.PUSH_TO_TALK),
        y = (0, c.bG)([n6.Ay], () => n6.Ay.getSettings().modeOptions.shortcut),
        C = (0, c.bG)([i5], () => i5.getIsTutorialActive(i7.v.MUTE_TUTORIAL)),
        v = (0, c.bG)([n4.A], () => null != n4.A.getChannelId()),
        { name: O } = (0, eA.x5)(n7.oh.AUDIO_INPUT),
        { enabledInputProfiles: R } = (0, n1.d)({ location: "MicrophoneButton" }),
        b = r.useRef(null),
        D = n || o || s,
        L = (0, i2.L)(D ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, M.Ay)(w.A.AUDIO_INPUT_BUTTON),
        { Component: x, events: U, play: k } = L,
        G = s || o ? i1.O : x;
    r.useEffect(() => () => k(), [D, k]);
    let F = (0, i8.A)(n, s, o, l);
    t = E
        ? { tooltipType: "green_void_do_not_use", tooltipText: ep.intl.string(ep.t["29gnR4"]), tooltipForceOpen: !0 }
        : A || m
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ep.intl.format(ep.t.c1qUOQ, { keybind: e3.dI(y).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let B = S && N && v,
        H = D ? t7.A.colors.ICON_VOICE_MUTED : "currentColor",
        j = r.useCallback(() => {
            f(), C && i3.N(i7.v.MUTE_TUTORIAL);
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
                            children: (0, i.jsx)(iZ.A, {
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
                        o = s ? iK.t : iz.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(iQ.Lh, { [iQ.v8]: D, [iQ.q6]: s }),
                        children: [
                            (0, i.jsx)(iX.A, {
                                "aria-checked": D,
                                "aria-label": ep.intl.string(ep.t.w4m945),
                                className: iQ.eT,
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
                                children: B ? (0, i.jsx)("div", { className: a()(re.U, { [re.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(iX.A, {
                                "aria-label": g
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: O })
                                    : ep.intl.string(ep.t.fRzCbB),
                                className: a()(iQ.UT, { [iQ.q6]: s }),
                                disabled: l,
                                icon: (0, i.jsx)(o, {
                                    className: iQ.$$,
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
            (0, i.jsx)(nc.A, {
                targetElementRef: b,
                shouldShow: C,
                graphic: { type: "image", src: rt.A },
                onRequestClose: () => {
                    i3.N(i7.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ep.intl.string(i9.default.VG4zAf),
                body: ep.intl.string(i9.default["8VIRzR"]),
            }),
        ],
    });
}
var ri = n(935399),
    rr = n(505312),
    rs = n(848847),
    ra = n(88001),
    ro = n(466919),
    rl = n(438705);
let ru = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: s } = e,
        a = r.useCallback(() => {
            s(), (0, ea.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL);
        }, [s]);
    return (0, i.jsx)(nc.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: rl },
        shouldShow: n,
        title: ep.intl.format(ro.default.bx8sR9, { premiumGroupProductName: (0, ra.DP)() }),
        body: ep.intl.format(ro.default.Pw4OFZ, { premiumGroupProductName: (0, ra.DP)() }),
        onRequestClose: s,
        actions: [{ text: ep.intl.string(ro.default.DD26QR), onClick: a }],
    });
};
var rc = n(873298),
    rd = n(840387);
function r_(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        s = (0, rd.Z)(),
        a = t3.KP.useSetting(),
        o = s && a !== rc.KP.FRIENDS_AND_ALL_GUILDS,
        l = (0, r.useCallback)(() => {
            t(eh.i.TAKE_ACTION), (0, ea.openUserSettings)(es.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, r.useCallback)(() => {
            t(eh.i.USER_DISMISS);
        }, [t]),
        c = o
            ? a === rc.KP.FRIENDS_ONLY
                ? ep.intl.string(ep.t["/hogEy"])
                : ep.intl.string(ep.t["6hEfm1"])
            : ep.intl.string(ep.t.bnNxW1);
    return (0, i.jsx)(nc.A, {
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
function rf(e) {
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
    (0, ri.Ay)(() => {
        let e = () => h(!0);
        return (
            id._.subscribe(tu.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                id._.unsubscribe(tu.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = r.useCallback(() => {
        h(!1), a();
    }, [a]);
    t = null != s ? ep.intl.formatToPlainString(ep.t.Gzh6ZP, { webBuildOverride: s.id }) : ep.intl.string(ep.t.cduTBL);
    let E = eq.Z,
        m = (0, rr.w)();
    return (
        (E = null != s ? rs.H : m.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(iX.A, {
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
                (0, i.jsx)(ru, { targetElementRef: _, shouldShow: f, onDismiss: () => h(!1) }),
                (0, i.jsx)(nh.Ay, {
                    contentTypes: l,
                    groupName: eh.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(r_, { markAsDismissed: n, targetElementRef: _ })
                            : null;
                    },
                }),
            ],
        })
    );
}
var rh = n(489902);
let rp = ih.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    rE = 2.5 * e0.A.Millis.SECOND,
    rm = 2 * e0.A.Millis.MINUTE,
    rg = 2 * e0.A.Millis.MINUTE,
    rA = 5 * e0.A.Millis.SECOND;
function rI(e) {
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
        S = (0, ic.F_)({ avatarDecoration: m, size: (0, Y.Te)(h._3.SIZE_32) }),
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
                        id._.subscribe(tu.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            id._.unsubscribe(tu.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
              object: tu.ZSU.AVATAR,
              children: (0, i.jsx)(n0.A, {
                  user: l,
                  targetElementRef: I,
                  clickTrap: !0,
                  preload: () =>
                      (0, nJ.A)(l.id, l.getAvatarURL(void 0, n0.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(nq, {
                          currentUser: l,
                          highlightBadge: v,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: r,
                          className: rh.dI,
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
                          className: a()(rh.Q9, { [rh.ZQ]: null != f }),
                          children: [
                              (0, i.jsx)(E.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ep.intl.string(ep.t["5fWB8U"]),
                                  focusProps: { ringTarget: I },
                                  className: rh.$n,
                                  "data-jump-section": g,
                              }),
                              (0, i.jsx)(rp, {
                                  size: h._3.SIZE_32,
                                  src: l.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: S,
                                  status: o ? tu.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: rh.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: rh.oM, children: _(N) }),
                          ],
                      });
                  },
              }),
          });
}
class rT extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new _.Ep();
    speakingWhilePTTTooltipTimeout = new _.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(rg, null, !1);
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
        (0, G.A)(e, t, tu.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, tu.JJy.ACCOUNT_PANEL), (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n4.A.isConnected() ? (0, ea.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL) : (0, ea.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("758"),
                    n.e("78401"),
                    n.e("17094"),
                    n.e("5677"),
                    n.e("78008"),
                    n.e("25610"),
                    n.e("6720"),
                    n.e("6772"),
                    n.e("51404"),
                    n.e("18934"),
                    n.e("7017"),
                    n.e("48525"),
                    n.e("25907"),
                    n.e("99961"),
                    n.e("31688"),
                    n.e("60060"),
                    n.e("4592"),
                    n.e("26105"),
                    n.e("46461"),
                    n.e("15612"),
                    n.e("6026"),
                    n.e("54747"),
                    n.e("45650"),
                    n.e("27681"),
                    n.e("80559"),
                    n.e("333"),
                    n.e("79705"),
                    n.e("30708"),
                    n.e("83928"),
                    n.e("92702"),
                    n.e("1271"),
                    n.e("78220"),
                    n.e("33957"),
                    n.e("55719"),
                    n.e("57006"),
                    n.e("74587"),
                    n.e("27107"),
                    n.e("42743"),
                    n.e("74748"),
                    n.e("61448"),
                    n.e("6619"),
                    n.e("47620"),
                    n.e("90324"),
                    n.e("38847"),
                    n.e("88826"),
                    n.e("28510"),
                    n.e("27811"),
                    n.e("4981"),
                    n.e("24685"),
                    n.e("95780"),
                    n.e("40759"),
                    n.e("74540"),
                    n.e("92793"),
                    n.e("67921"),
                    n.e("27282"),
                    n.e("66898"),
                    n.e("24057"),
                    n.e("93327"),
                    n.e("93998"),
                    n.e("15086"),
                    n.e("44590"),
                    n.e("76822"),
                    n.e("90217"),
                    n.e("62883"),
                    n.e("5384"),
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
                    n.e("30938"),
                    n.e("96643"),
                    n.e("94493"),
                    n.e("92789"),
                    n.e("47834"),
                    n.e("74016"),
                    n.e("19551"),
                    n.e("84569"),
                    n.e("6338"),
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
                    n.e("15599"),
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
                    n.e("9233"),
                    n.e("76418"),
                    n.e("91007"),
                    n.e("42724"),
                    n.e("43437"),
                    n.e("82263"),
                    n.e("40258"),
                    n.e("66495"),
                    n.e("88342"),
                    n.e("86127"),
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
                    n.e("86814"),
                    n.e("71273"),
                    n.e("36863"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("9640"),
                    n.e("25949"),
                    n.e("98765"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("52548"),
                    n.e("3589"),
                    n.e("75842"),
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
                    n.e("234"),
                    n.e("36564"),
                    n.e("50033"),
                    n.e("87478"),
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
                    n.e("10943"),
                    n.e("15920"),
                    n.e("37977"),
                    n.e("42234"),
                    n.e("58164"),
                    n.e("21930"),
                    n.e("3930"),
                    n.e("44057"),
                    n.e("3663"),
                    n.e("11617"),
                    n.e("26294"),
                    n.e("74678"),
                    n.e("37490"),
                    n.e("81189"),
                    n.e("92077"),
                    n.e("66580"),
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
                    n.e("39053"),
                    n.e("73611"),
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
                    n.e("81610"),
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
                    n.e("53171"),
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
                    let { enabledInputProfiles: n } = (0, n1.d)({ location: "Account" });
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rm;
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
                      this.speakingWhileMutedTooltipTimeout.start(rE, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(rE, () =>
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
                    (0, i.jsx)(m.A, { children: tQ.Ay.humanizeStatus(s) }),
                    (0, i.jsx)(v.A, {
                        user: r,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: o,
                        textClassName: rh.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let l = t?.find((e) => {
            let { type: t } = e;
            return t === tu.$pd.CUSTOM_STATUS;
        });
        return null != l
            ? (0, i.jsxs)(L.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(m.A, { children: tQ.Ay.humanizeStatus(s) }),
                      (0, i.jsx)(q.A, { activity: l, emojiClassName: rh.Zg, className: rh.WO }),
                  ],
              })
            : null != s && s !== tu.clD.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(L.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(D, { text: tQ.Ay.humanizeStatus(s) }),
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
                          className: rh.eW,
                          children: (0, i.jsx)(iE.A, {
                              className: a()({ [rh.e8]: null != e }),
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
                          className: rh.XP,
                          children: (0, i.jsx)(ip.A, { children: this.renderStatus() }),
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
                  children: (0, i.jsx)(rI, {
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
                                  className: a()(rh.kL, { [rh.UG]: null != n, [rh.bc]: !r, [rh.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)($.A, { nameplate: t, hovered: o, placement: z.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(rS, {
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
function rS(e) {
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
        className: rh.Uo,
        style: v,
        children: [
            (0, i.jsx)(rn, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: _,
                onClick: h,
                onContextMenu: p,
                iconForeground: null != I ? rh.t4 : void 0,
                nameplate: I,
                shouldShowSpeakingWhileMutedTooltip: l,
                shouldShowInputDeviceChangedTooltip: !l && "input" === S,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: N,
                dismissTooltips: y,
                speaking: C,
            }),
            (0, i.jsx)(i0, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: f,
                onContextMenu: E,
                awaitingRemote: r,
                iconForeground: null != I ? rh.t4 : void 0,
                nameplate: I,
                shouldShowOutputDeviceChangedTooltip: "output" === S,
                dismissTooltips: y,
            }),
            (0, i.jsx)(rf, {
                webBuildOverride: c,
                onClick: m,
                onContextMenu: g,
                dismissibleContents: A.settings,
                iconForeground: null != I ? rh.t4 : void 0,
                nameplate: I,
            }),
        ],
    });
}
function rN(e) {
    let t = (0, c.bG)([n4.A], () => null != n4.A.getChannelId()),
        n = (0, eA.Py)(e),
        i = r.useRef(new _.Ep()),
        [s, a] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(rA, () => {
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
function ry() {
    let e = (0, c.bG)([ni.default], () => ni.default.getCurrentUser()),
        t = (0, c.bG)([nA.default], () => nA.default.getId()),
        {
            activities: n,
            streaming: s,
            status: a,
        } = (0, c.cf)([nN.A], () => {
            let e = nN.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tu.$pd.STREAMING;
                    }),
                status: nN.A.getStatus(),
            };
        }),
        o = (0, c.bG)([is.A], () => is.A.getAnyStreamForUser(t)),
        u = (0, S.A)({ userId: t }),
        f = (0, c.bG)([it.A], () => it.A.getVoiceVolume(t)),
        h = tQ.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([n4.A, ia.A], () => {
            let e = n4.A.getChannelId();
            return null != e ? ia.A.getChannel(e) : null;
        }),
        { mute: E, selfMute: m, suppress: g } = (0, n3.A)(p),
        { selfDeaf: I, deaf: T } = (0, n2.A)(p),
        y = (0, c.bG)([P.A], () => ((0, x.kK)() ? P.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        C = (0, c.bG)([n6.Ay], () => n6.Ay.getSpeakingWhileMuted()),
        v = (0, c.bG)([U.A], () => U.A.isFullscreenInContext()),
        O = (0, c.bG)([il.A], () => il.A.hasLayers()),
        R = (0, A.useModalsStore)(A.hasAnyModalOpenSelector) || O || i_.P.isDisallowPopupsSet() || v,
        b = (0, B.sw)(),
        { userStatusMenu: D } = H.$.useConfig({ location: "Account" }),
        L = (0, eI.A)((e) => e.isOpen),
        k = (0, c.bG)([J.default], () => null != J.default.getAwaitingRemoteSessionInfo()),
        G = (0, c.bG)([iu.A], () => iu.A.getGuildId()),
        F = e?.avatarDecoration,
        V = (0, j.A)(F),
        Y = tQ.Ay.useName(e) ?? "",
        { analyticsLocations: K } = (0, M.Ay)(w.A.ACCOUNT),
        z = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: $ } = (0, nZ.c9)(),
        q = (0, c.bG)([nX.A, ni.default, io.A], () => {
            let e,
                t = nX.A.getSyncingWith(),
                n = nX.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = l()(Array.from(io.A.getParty(e) ?? []))
                        .map((e) => ni.default.getUser(e))
                        .filter(nI.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        X = (0, nQ.lX)("AccountCoachmark");
    !R &&
        (Z.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        b && D && !L && Z.avatar.push(d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK),
        X && Z.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: ee } = rN(n7.oh.AUDIO_INPUT),
        { shouldShowTooltip: et, dismissTooltip: en } = rN(n7.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: ei, dismissTooltip: er } = (function () {
            let [e, t] = r.useState(!1),
                n = (0, c.bG)([n6.Ay], () => n6.Ay.getMode() === n7.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n4.A],
                    () => null != n4.A.getChannelId() && (n4.A.getDuration() ?? Number.MAX_VALUE) < n8,
                ),
                [s, a] = r.useState(!1),
                { showPTTJoinTooltip: o } = n5.A.useConfig({ location: "usePTTJoinTooltip" }),
                l = r.useRef(new _.Ep()),
                u = r.useRef(new _.Ep());
            r.useEffect(() => {
                if (i && n && !e) {
                    if ((n5.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !o)) return;
                    a(!0),
                        t(!0),
                        u.current.start(n9, () => {
                            t(!1);
                        }),
                        l.current.start(n8, () => {
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
            let { showPTTSpeakingIndicator: e } = n5.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = r.useState(!1),
                i = (0, c.bG)([n6.Ay], () => n6.Ay.getMode() === n7.TB.PUSH_TO_TALK),
                s = (0, c.bG)([n4.A], () => n4.A.getRTCConnectionId()),
                a = (0, c.bG)([n6.Ay], () => {
                    let e = n6.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < ir;
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
                        let s = (i & n7.ME.VOICE) === n7.ME.VOICE,
                            a = it.A.isCurrentUserPTTActive();
                        s && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              r.start(ii, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != s && n6.Ay.getMediaEngine().on(ie.bg.VoiceActivity, l),
                        () => {
                            n6.Ay.getMediaEngine().removeListener(ie.bg.VoiceActivity, l), r.stop();
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
        children: (0, i.jsx)(rT, {
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
