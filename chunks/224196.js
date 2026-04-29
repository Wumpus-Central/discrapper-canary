n.d(t, { g: () => sx, A: () => sE }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    u = n(158390),
    c = n(17928),
    d = n(554146),
    m = n(451988),
    p = n(97808),
    h = n(778712),
    f = n(922016),
    g = n(939249),
    x = n(140735),
    A = n(312138);
if (21552 == n.j) var C = n(192308);
var E = n(442433),
    T = n(820284),
    j = n(717558),
    S = n(964486),
    _ = n(220839),
    v = n(397244),
    N = n(729551),
    y = n(925747),
    R = n(866323),
    b = n(449450);
function I(e) {
    let { text: t } = e,
        n = (0, R.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, i.jsx)(y.animated.div, { className: b.H, style: e, children: t })),
    });
}
var M = n(29160),
    O = n(793574),
    U = n(688810),
    P = n(521502),
    k = n(380610),
    D = n(313961),
    w = n(18235),
    L = n(183184),
    F = n(384059),
    B = n(480890),
    G = n(601255),
    V = n(562819),
    Q = n(449582),
    W = n(351952),
    H = n(88686),
    q = n(174755),
    z = n(302223),
    K = n(609425),
    $ = n(922301),
    Y = n(368919),
    X = n(643501),
    Z = n(534514),
    J = n(834730),
    ee = n(789645),
    et = n(826673),
    en = n(750506),
    ei = n(780964),
    es = n(858897),
    el = n(417146),
    ea = n(552122),
    er = n(717421),
    eo = n(775602),
    eu = n(993843);
let ec = { mass: 10, tension: 550, friction: 140 };
function ed(e) {
    let { className: t, pageMultiplier: n } = e,
        l = (0, c.bG)([eo.A], () => eo.A.useReducedMotion),
        [r, u] = s.useState({ x: 0, y: 0 }),
        d = s.useMemo(
            () =>
                o().throttle((e) => {
                    l || u({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, l],
        );
    s.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [m, p] = (0, er.z)(() => ({ x: 0, y: 0, config: ec }));
    return (
        s.useEffect(() => {
            p({ x: r.x, y: r.y });
        }, [r.x, r.y, p]),
        (0, i.jsx)(y.animated.div, {
            style: { transform: (0, y.to)([m.x, m.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(eu.T, t),
        })
    );
}
var em = n(49999),
    ep = n(985018),
    eh = n(275883);
function ef(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: s } = e,
        l = ea.A.useIsEligible(),
        a = (0, et.JZ)(t),
        r = null != n,
        o = null != s ? { color: s } : void 0,
        { analyticsLocations: u } = (0, U.Ay)(O.A.HOLIDAY_COACHMARK),
        c = (e) => {
            (0, et.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, es.openUserSettings)(ei.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(em.i.TAKE_ACTION);
        };
    return l && !a
        ? (0, i.jsx)(en.Ay, {
              children: (0, i.jsxs)("div", {
                  className: eh.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
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
                                      (0, i.jsx)(Z.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "always-white",
                                          style: o,
                                          children: ep.intl.string(ep.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(J.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: ep.intl.format(ep.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      g.D,
                                                      {
                                                          tag: "span",
                                                          className: eh.nf,
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
                              (0, i.jsx)(g.D, {
                                  className: eh.l2,
                                  onClick: () => c(em.i.USER_DISMISS),
                                  children: (0, i.jsx)(ee.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function eg() {
    return null == el.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(ef, {
              dismissibleContent: el.A.coachmarkDismissibleContent,
              backgroundColor: el.A.coachmarkBackgroundColor,
              specialTextColor: el.A.coachmarkSpecialTextColor,
          });
}
var ex = n(74848),
    eA = n(607399),
    eC = n(707554),
    eE = n(224640),
    eT = n(305866),
    ej = n(364522),
    eS = n(22231),
    e_ = n(133171),
    ev = n(780338);
if (21552 != n.j) var C = n(192308);
var eN = n(550079),
    ey = n(26137),
    eR = n(473935),
    eb = n(765671),
    eI = n(395332),
    eM = n(176781),
    eO = n(777666),
    eU = n(320448),
    eP = n(993401),
    ek = n(447349);
function eD(e) {
    return (0, i.jsx)("div", {
        className: ek.wE,
        children: (0, i.jsx)(eN.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function ew(e) {
    let { action: t, onClick: n, icon: l, label: a, sublabel: r, trailing: o, renderSubmenu: u, ref: c } = e,
        d = null != n,
        m = (0, eP.rE)({ action: t, onClick: n }),
        [p, h] = s.useState(!1),
        x = s.useRef(null),
        A = c ?? x,
        E = null != u,
        T = E && d,
        j = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        S = s.useCallback(() => {
            h(!0);
        }, []),
        _ = s.useCallback(() => {
            (0, C.hasAnyModalOpen)() || h(!1);
        }, []),
        v = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: ek.iA,
                        children: (0, i.jsx)(l, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ek.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(J.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: ek.W1,
                                        children: a,
                                    }),
                                    (0, i.jsx)(J.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                                ],
                            }),
                            o,
                        ],
                    }),
                ],
            }),
        N = (e) => {
            let t;
            return (
                (t = T
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.D, {
                                  className: ek.ef,
                                  onClick: m,
                                  focusProps: { offset: { ...j.offset, right: 0 } },
                                  children: v(),
                              }),
                              (0, i.jsx)(g.D, {
                                  className: ek.ap,
                                  "aria-label": ep.intl.string(ep.t.PdRCRg),
                                  ...e,
                                  onClick: S,
                                  focusProps: j,
                                  children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : E
                      ? (0, i.jsxs)(g.D, {
                            className: ek.ef,
                            ...e,
                            onClick: S,
                            focusProps: j,
                            children: [
                                v(),
                                (0, i.jsx)("div", {
                                    className: ek.ap,
                                    children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(g.D, { className: ek.ef, onClick: m, focusProps: j, children: v() })),
                (0, i.jsx)("div", { ref: A, className: ek.jG, children: t })
            );
        };
    return E
        ? (0, i.jsx)("li", {
              className: ek.j$,
              onMouseEnter: S,
              onMouseLeave: _,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: A,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: p,
                  onRequestClose: _,
                  children: N,
              }),
          })
        : (0, i.jsx)("li", { className: ek.j$, children: N() });
}
function eL(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(734066),
    eB = n(274372),
    eG = n(710315),
    eV = n(271597),
    eQ = n(990078),
    eW = n(315710),
    eH = n(475358),
    eq = n(408278),
    ez = n(625903),
    eK = n(404778),
    e$ = n(821609),
    eY = n(532624),
    eX = n(927813),
    eZ = n(975571),
    eJ = n(879631),
    e0 = n(350535),
    e1 = n(372684),
    e2 = n(572164),
    e3 = n(399925),
    e5 = n(890856),
    e8 = n(609174),
    e6 = n(353605),
    e7 = n(434320),
    e4 = n(82716),
    e9 = n(585579),
    te = n(226870),
    tt = n(285072),
    tn = n(316305);
let ti = s.memo(function (e) {
    let { clip: t, isNew: n, onClose: l, className: r } = e,
        [o, u] = s.useState(!1),
        c = s.useCallback(() => u(!0), []),
        d = s.useCallback(() => u(!1), []),
        m = s.useCallback(() => {
            l?.(), (0, eV.p)({ initialEditingClipId: t.id });
        }, [t.id, l]);
    return (0, i.jsx)(e8.Cl, {
        clip: t,
        children: (0, i.jsx)(e5.s, {
            "aria-label": ep.intl.string(ep.t.bt75uw),
            onClick: m,
            onMouseEnter: c,
            onMouseLeave: d,
            onFocus: c,
            onBlur: d,
            className: a()(tn.Z1, r),
            children: (0, i.jsxs)(te.d, {
                isPlaying: !1,
                preload: "metadata",
                children: [
                    n && (0, i.jsx)(eO.Lp, { className: tn.Ad, text: ep.intl.string(ep.t.y2b7CA) }),
                    (0, i.jsxs)(tt.h, {
                        isVisible: o,
                        className: tn.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tn.mY,
                                children: [(0, i.jsx)(e4.z, {}), (0, i.jsx)(e6.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tn.E_,
                                children: [
                                    (0, i.jsx)(e7.f, { variant: "primary", onBeforeEdit: l }),
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
var ts = n(652215),
    tl = n(753070),
    ta = n(16590),
    tr = n(550350);
function to(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: l, setPopoutRef: a } = e,
        r = (0, c.yK)([eB.A], () => eB.A.getClips()),
        o = (0, c.bG)([eB.A], () => eB.A.getPendingClips()),
        u = (0, c.bG)([eB.A], () => eB.A.getSettings()),
        d = (0, c.bG)([eB.A], () => eB.A.getNewClipIds()),
        m = (0, c.bG)([eY.Ay], () => eY.Ay.getKeybindForAction(ts.hCu.SAVE_CLIP)),
        p = s.useRef(null),
        h = s.useMemo(() => {
            let e = [...o, ...r].filter((e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail);
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
        }, [r, o]),
        f = s.useMemo(() => h.slice(0, 16), [h]),
        g = h.length > 16,
        x = null != m ? e0.dI(m.shortcut, !0) : null;
    (0, eW.t)(p);
    let A = (0, eJ.$)(u.clipsLength / eX.A.Millis.SECOND),
        C = (0, tl.zr)(u.clipsQuality.resolution),
        E = ep.intl.formatToPlainString(ep.t.Qb44XH, { fps: u.clipsQuality.frameRate });
    return (0, i.jsxs)("div", {
        ref: (e) => {
            (p.current = e), a?.(e);
        },
        className: tr.SW,
        role: "dialog",
        "aria-label": ep.intl.string(ep.t.z2jK6X),
        children: [
            (0, i.jsxs)("div", {
                className: tr.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: tr.$,
                        children: [
                            (0, i.jsx)(Z.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ep.intl.string(ep.t.z2jK6X),
                            }),
                            null != x && (0, i.jsx)(eH.e, { className: tr.P, shortcut: x }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tr.$s,
                        children: [
                            (0, i.jsx)(eQ.m, {
                                text: ep.intl.string(ep.t["3D5yo/"]),
                                children: (0, i.jsx)(eq.K, {
                                    onClick: () => n(),
                                    icon: ez.Z,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(ep.t["3D5yo/"]),
                                }),
                            }),
                            (0, i.jsx)(eQ.m, {
                                text: ep.intl.string(ta.default["55C2MH"]),
                                children: (0, i.jsx)(eq.K, {
                                    onClick: () => t(),
                                    icon: eM.x,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": ep.intl.string(ta.default["55C2MH"]),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(J.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: tr.P6,
                children: [A, C, E].join(" • "),
            }),
            (0, i.jsx)(eK.c, {}),
            f.length > 0
                ? (0, i.jsxs)(ej.Ip, {
                      className: tr.Vg,
                      fade: !0,
                      children: [
                          f.map((e) => (0, i.jsx)(ti, { clip: e, isNew: d.includes(e.id), onClose: l }, e.id)),
                          g &&
                              (0, i.jsx)("div", {
                                  className: tr.qr,
                                  children: (0, i.jsx)(e$.$, {
                                      onClick: () => t(),
                                      text: ep.intl.string(ta.default["55C2MH"]),
                                      variant: "secondary",
                                      size: "sm",
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)(tu, { keybindString: x }),
        ],
    });
}
function tu(e) {
    let { keybindString: t } = e,
        n = (0, e2.Et)(),
        l = s.useCallback(() => {
            window.open(eZ.A.getArticleURL(ts.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        a = s.useCallback(() => {
            e3.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, i.jsxs)("div", {
        className: tr.p$,
        children: [
            (0, i.jsx)(eM.x, { size: "lg", color: "currentColor", className: tr.Dw }),
            (0, i.jsx)(J.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tr.qO,
                children: ep.intl.string(ta.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(J.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tr.CZ,
                      children: ep.intl.format(ta.default.y4zC7j, {
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
                          keybind: (0, i.jsx)(eH.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsxs)("div", {
                      className: tr.pi,
                      children: [
                          (0, i.jsx)(e$.$, {
                              onClick: l,
                              text: ep.intl.string(ep.t.hvVgAZ),
                              variant: "secondary",
                              size: "sm",
                          }),
                          (0, i.jsx)(e$.$, {
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
function tc(e) {
    let { onClose: t } = e,
        n = (0, eF.sw)(),
        { userStatusMenu: l } = eG.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        a = (0, c.bG)([eB.A], () => eB.A.getNewClipIds().length),
        r = s.useCallback(
            (e) => {
                t(), (0, eV.p)({ initialEditingClipId: e });
            },
            [t],
        ),
        o = s.useCallback(() => {
            t(), (0, es.openUserSettings)(ei.X.CLIPS_PANEL);
        }, [t]);
    return n && l
        ? (0, i.jsx)(ew, {
              action: "PRESS_CLIPS",
              icon: eM.x,
              label: ep.intl.string(ep.t.z2jK6X),
              trailing: a > 0 ? (0, i.jsx)(eO.hV, { count: a }) : null,
              onClick: () => r(),
              renderSubmenu: (e) => (0, i.jsx)(to, { ...e, onOpenGallery: r, onOpenSettings: o, onClose: t }),
          })
        : null;
}
var td = n(480335),
    tm = n(31956),
    tp = n(361628),
    th = n(744808),
    tf = n(282389),
    tg = n(713517),
    tx = n(645507),
    tA = n(970931),
    tC = n(832248),
    tE = n(462887),
    tT = n(736653),
    tj = n(439174),
    tS = n(927578),
    t_ = n(112848),
    tv = n(788868);
function tN() {
    let e = (0, t_.Xb)(),
        t = (0, tS.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tv.sp.length - 1; t >= 0; t--) {
        let i = tv.VD[tv.sp[t]],
            s = new Date(e);
        if ((s.setMonth(e.getMonth() + i.tenureReqNumMonths), s.setHours(s.getHours() + 30), n > s.getTime()))
            if (n - s.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let ty = {
        [tv.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tv.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tv.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tv.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tv.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tv.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tv.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tv.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tR = {
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
var tb = n(682165);
let tI = s.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function tM() {
    let e = (0, c.bG)([eo.A], () => eo.A.useReducedMotion),
        t = (0, tC.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tN(),
                t = (0, tE.M)((0, tT.Ay)());
            if (null == e) return null;
            let n = ty[e],
                i = tR[e],
                s = {
                    currentBadge: (0, tj.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                l = tv.sp.indexOf(e);
            if (l > 0) {
                let e = tv.sp[l - 1],
                    n = ty[e];
                (s.prevBadge = (0, tj.e0)(e)), (s.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return s;
        })();
    return e || !t || null == n ? null : (0, i.jsx)(tO, { levelUpData: n });
}
function tO(e) {
    let { levelUpData: t } = e,
        n = s.useRef(null),
        l = s.useCallback(() => {
            tC.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        s.useEffect(() => l, [l]),
        (0, i.jsx)(eW.O, {
            containerRef: n,
            children: (0, i.jsxs)("div", {
                className: tb.i,
                children: [
                    (0, i.jsx)("div", {
                        className: tb.b,
                        children: (0, i.jsx)(eQ.m, {
                            text: ep.intl.string(ep.t.cpT0Cq),
                            children: (0, i.jsx)(eq.K, {
                                icon: ee.P,
                                variant: "secondary",
                                size: "sm",
                                onClick: l,
                                "aria-label": ep.intl.string(ep.t.cpT0Cq),
                            }),
                        }),
                    }),
                    (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(tI, { levelUpData: t }) }),
                ],
            }),
        })
    );
}
var tU = n(206835),
    tP = n(183555),
    tk = n(999291),
    tD = n(975732),
    tw = n(718019),
    tL = n(694720),
    tF = n(915614),
    tB = n(744753),
    tG = n(559506),
    tV = n(646986),
    tQ = n(349419),
    tW = n(946356),
    tH = n(878555),
    tq = n(624479),
    tz = n(206845),
    tK = n(957565),
    t$ = n(427262),
    tY = n(962352);
function tX(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: s } = (0, tP.NJ)();
    return tK.p5
        ? (0, i.jsx)(tz.A, {
              text: ep.intl.string(ep.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t$.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(tY.c, { [tY.R]: n }),
                      "aria-label": ep.intl.string(ep.t.y5MwJy),
                      children: (0, i.jsx)(tq.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var tZ = n(983495),
    tJ = n(442228),
    t0 = n(253932),
    t1 = n(290863),
    t2 = n(351906),
    t3 = n(562153),
    t5 = n(661531),
    t8 = n(477782),
    t6 = n(628284),
    t7 = n(695366),
    t4 = n(363195),
    t9 = n(889227),
    ne = n(287809),
    nt = n(954571),
    nn = n(429707),
    ni = n(274303),
    ns = n(994125),
    nl = n(347853),
    na = n(335020),
    nr = n(43105),
    no = n(704824),
    nu = n(46225),
    nc = n(429913),
    nd = n(379848),
    nm = n(633075),
    np = n(735321),
    nh = n(667049),
    nf = n(606758),
    ng = n(495544),
    nx = n(403362),
    nA = n(518477);
function nC(e) {
    let { targetElementRef: t, onClose: n } = e,
        [l, a] = s.useState(!1),
        { trackUserProfileEditAction: r } = (0, tP.NJ)(),
        o = (0, c.bG)([ng.default], () => ng.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([ng.default], () => ng.default.getId()),
                i = (0, nh.A)(n),
                l = s.useMemo(() => i.filter((e) => e instanceof nm.R), [i]),
                a =
                    ((e = (0, eI.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    s.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                r = s.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                o = ((t = (0, nc.A)(r)), s.useMemo(() => t.filter(nx.Vq), [t])),
                { tokens: u, fetched: d } = (0, no.j)(r),
                m = (0, nu.U9)(o);
            return s.useMemo(() => {
                if (null == a || null == u || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let i = u.find((e) => e.application.id === n.applicationId),
                        s = l.find((e) => e.applicationId === n.applicationId),
                        a = o.find((e) => e.id === n.applicationId),
                        r = m.find((e) => e.context.application.id === n.applicationId);
                    if (null == a) return null;
                    null != i && null == s
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: a,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == i &&
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
            }, [a, u, d, l, o, m]);
        })(),
        { analyticsLocations: d } = (0, U.Ay)();
    return null == u || 0 === u.length
        ? null
        : (0, i.jsx)(nd.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: c } = e,
                      m = u.find((e) => e.dismissibleContent === s);
                  if (null == m) return null;
                  let p = "linked" === m.type,
                      h = () =>
                          (0, tD.openUserProfileModal)({ userId: o, tabSection: nA.RP.WIDGETS }).then(() => {
                              c(em.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(nr.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != m.config.editProfileUpsellImage
                              ? { type: "image", src: m.config.editProfileUpsellImage }
                              : void 0,
                      title: ep.intl.format(ep.t.TXDztH, { applicationName: m.application.name }),
                      body: p ? ep.intl.string(ep.t["63Kso0"]) : ep.intl.string(ep.t.HwXoeC),
                      onRequestClose: () => c(em.i.USER_DISMISS),
                      actions: [
                          p
                              ? {
                                    text: ep.intl.string(ep.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            h()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new nm.R({ applicationId: m.application.id })),
                                                        void ((0, np.Y5)(e),
                                                        r({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, nf.XA)(nA.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => a(!1));
                                    },
                                    loading: l,
                                }
                              : {
                                    text: ep.intl.string(ep.t["DSJi3+"]),
                                    onClick: () => {
                                        m.authFlow.initiate({
                                            onConfirm: () => {
                                                a(!0), h().finally(() => a(!1));
                                            },
                                            analyticsLocations: d,
                                        });
                                    },
                                    loading: l,
                                },
                      ],
                  });
              },
          });
}
var nE = n(461213),
    nT = n(818348),
    nj = n(466573);
function nS() {
    let e = (0, c.bG)([nE.A], () => nE.A.getStatus()),
        t = (0, t$.MU)(e) ?? "",
        n = e === nT.cl.INVISIBLE || e === nT.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nj.k,
        children: [
            (0, i.jsxs)(x.A, { tag: "div", children: [ep.intl.string(ep.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eQ.m, {
                    text: ep.intl.string(ep.t.L99HQm),
                    children: (0, i.jsx)(t7.E, {
                        size: "xs",
                        color: t5.A.colors.STATUS_WARNING,
                        "aria-label": ep.intl.string(ep.t.L99HQm),
                    }),
                }),
        ],
    });
}
var n_ = n(841595);
let nv = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var nN = n(501838),
    ny = n(760716),
    nR = n(915089),
    nb = n(13808);
function nI(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: l,
            children: r,
            height: o,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nR.GV)(),
        m = s.useRef(null),
        p = (0, er.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != m.current && m.current.focus();
            },
        });
    return (0, i.jsx)(y.animated.div, {
        className: a()(nb.kL, u),
        style: p,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: nb.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: nb.U1,
                    children: [
                        (0, i.jsx)(g.D, {
                            innerRef: m,
                            "aria-label": ep.intl.string(ep.t.WAI6xu),
                            className: nb.b,
                            onClick: () => {
                                t(em.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(ee.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(Z.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != l && (0, i.jsx)(J.E, { variant: "text-md/normal", color: "text-subtle", children: l }),
                (0, i.jsx)(ej.Ip, {
                    className: nb.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(nb.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nM = n(973912),
    nO = n(871123),
    nU = n(44724),
    nP = n(501573);
function nk() {
    (0, nU.default)({ guildId: (0, nO.zf)() });
}
function nD(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: s } = e,
        { analyticsLocations: l } = (0, U.Ay)([O.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(nI, {
              heading: ep.intl.string(ep.t["vy/61K"]),
              subheading: ep.intl.string(ep.t.tEee9t),
              markAsDismissed: s,
              className: nP.Zj,
              contentClassName: nP.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nM.A, {
                      userId: t,
                      analyticsLocations: l,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: nP.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: nP.UD,
                      children: (0, i.jsx)(e$.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: ep.intl.string(ep.t.rg9FQp),
                          onClick: nk,
                      }),
                  }),
              ],
          });
}
function nw(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: l } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return nv.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([ne.default], () => ne.default.getCurrentUser()),
                l = (0, c.bG)([n_.A], () => (null != i ? n_.A.getFirstWishlistId(i.id) : null)),
                a = (0, ny.i)((e) => e.recommendationApplicationIds),
                o = (0, nN.rY)(),
                u = (0, nN.qx)();
            return s.useMemo(
                () => (null != a || (null == l && n) ? (0, r.uniq)([...(a ?? []), ...u, ...o]).sort() : []),
                [n, l, u, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = s.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(nd.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e;
            return null == l
                ? null
                : s === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nD, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var nL = n(146901),
    nF = n(827827);
let nB = [
        { duration: 15 * eX.A.Millis.MINUTE, label: () => ep.intl.string(ep.t["8ot6gv"]) },
        { duration: eX.A.Millis.HOUR, label: () => ep.intl.string(ep.t.UMWBZr) },
        { duration: 8 * eX.A.Millis.HOUR, label: () => ep.intl.string(ep.t.EpAXPC) },
        { duration: eX.A.Millis.DAY, label: () => ep.intl.string(ep.t["755t4q"]) },
        { duration: 3 * eX.A.Millis.DAY, label: () => ep.intl.string(ep.t["f3/1ch"]) },
        { duration: void 0, label: () => ep.intl.string(ep.t["46dqJY"]) },
    ],
    nG = "forever";
function nV(e) {
    let { status: t, currentStatus: n, description: s } = e,
        l = t !== ts.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nB.map((e) => {
                let { duration: s, label: l } = e;
                return (0, i.jsx)(
                    t8.Dr,
                    {
                        id: `${t}-${s}`,
                        label: l(),
                        action: () => (0, nF.A)({ nextStatus: t, prevStatus: n, durationMillis: s }),
                        dontCloseOnAction: !0,
                    },
                    s ?? nG,
                );
            }),
        });
    return (0, i.jsx)(t8.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: l,
        label: (0, t$.MU)(t),
        subtext: s,
        iconLeft: () => (0, i.jsx)(e_.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nF.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: l ? a : void 0,
    });
}
function nQ(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nL._)(e);
    return "today" === t
        ? ep.intl.formatToPlainString(ep.t.ZxxHIO, { timeString: i })
        : ep.intl.formatToPlainString(ep.t["9OFjSe"], { dateString: n, timeString: i });
}
var nW = n(996988),
    nH = n(656884);
function nq(e) {
    let t,
        n,
        l,
        r,
        o,
        u,
        d,
        m,
        f,
        { currentUser: g, onClose: A, setPopoutRef: E, highlightBadge: T, openedAt: j, className: S } = e,
        _ = __OVERLAY__,
        v = (0, tk.Ay)(g.id, void 0),
        { analyticsLocations: N } = (0, U.Ay)(O.A.USER_PROFILE_ACCOUNT_POPOUT),
        y = (0, tP.pb)({ layout: "ACCOUNT_POPOUT", userId: g.id, guildId: void 0 }),
        { ref: R, height: b } = (0, eb.Ay)(),
        { isHoveringOrFocusing: I, isHovering: M } = (0, tg.A)(R);
    s.useEffect(() => {
        E?.(R.current);
    }, [R, E]),
        s.useEffect(() => (tC.A.setState({ isOpen: !0 }), () => tC.A.setState({ isOpen: !1 })), []);
    let P = (0, c.bG)([t1.A], () => t1.A.getStatus(g.id)),
        k = nQ(t0.CY.useSetting()),
        D = (0, c.bG)([t2.A], () => t2.A.hidePersonalInformation),
        w = (0, tA.kB)(),
        L = t0.Q_.useSetting(),
        F =
            ((t = t0.CY.useSetting()),
            (n = (0, tA.kB)()),
            (l = t0.Jr.useSetting()),
            (r = (e) => {
                let i = nQ(t);
                if (P === e && null != i) return i;
                switch (e) {
                    case ts.clD.DND:
                        return n ? ep.intl.string(ep.t.day5A6) : ep.intl.string(ep.t["tq/fMK"]);
                    case ts.clD.INVISIBLE:
                        return ep.intl.string(ep.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (o = (0, i.jsx)(i.Fragment, {
                children: nB.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        t8.Dr,
                        {
                            id: `${P}-${t}`,
                            label: n(),
                            action: () => {
                                (0, tA.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nG,
                    );
                }),
            })),
            (u = nV({ status: ts.clD.ONLINE, currentStatus: P })),
            (d = nV({ status: ts.clD.IDLE, currentStatus: P, description: r(ts.clD.IDLE) })),
            (m = nV({ status: ts.clD.DND, currentStatus: P, description: r(ts.clD.DND) })),
            (f = nV({ status: ts.clD.INVISIBLE, currentStatus: P, description: r(ts.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(t8.bX, {}, "menu-separator-statuses"),
                    d,
                    m,
                    f,
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
                                          iconLeft: ev.a,
                                          leadingAccessory: { type: "icon", icon: ev.a },
                                          badge: { text: ep.intl.string(ep.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? ep.intl.format(ep.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
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
                                              (0, tA.ES)(!n);
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
        B = (function (e) {
            let t = (0, c.bG)([ne.default], () => ne.default.getCurrentUser()),
                n = (0, c.bG)([t2.A], () => t2.A.hidePersonalInformation),
                s = (0, c.bG)([t4.A], () => (0, tE.M)(t4.A.theme)),
                { multiAccountUsers: l } = (0, ns.K)(),
                a = l.map((l) => {
                    let a = new t9.A(l),
                        r = a.id === t?.id,
                        o = l.tokenStatus === ni.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        t8.Dr,
                        {
                            id: a.id,
                            focusedClassName: na.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: na.ci,
                                    children: [
                                        (0, i.jsx)(p.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": l.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: na.DD,
                                            children: [
                                                (0, i.jsx)(J.E, {
                                                    className: na.gE,
                                                    variant: "text-sm/normal",
                                                    children: t$.Ay.getUserTag(a, {
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
                                        r &&
                                            (0, i.jsx)(t6.y, {
                                                size: "sm",
                                                color: t
                                                    ? t5.A.unsafe_rawColors.WHITE.css
                                                    : t5.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? t5.A.unsafe_rawColors.BRAND_500.css
                                                        : t5.A.unsafe_rawColors.WHITE.css,
                                                className: na.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(t7.E, {
                                                color: t5.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? t5.A.unsafe_rawColors.BRAND_500.css
                                                        : t5.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: na.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nl.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nt.default.track(ts.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: ts.JJy.USER_PROFILE },
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
        })(A),
        G = (0, tU.A)({ analyticsLocations: N }),
        V = (0, tS.TW)(g),
        Q = s.useRef(null),
        W = s.useRef(null),
        H = (0, tp.A)(v?.profileFrame?.skuId, "UserProfileAccountPopout"),
        q = (0, tf.A)(v?.profileFrame?.skuId);
    (0, tm.A)({ skuId: v?.profileFrame?.skuId, openedAt: j, context: y, analyticsLocations: N });
    let z = s.useRef((0, tC.A)((e) => e.shouldRenderTenureLevelUp)),
        K = s.useMemo(() => (0, tx.A)(), []),
        [$, Y] = s.useState(!0);
    s.useEffect(() => {
        setTimeout(() => {
            Y(!1);
        }, 500);
    }, []);
    let X = (e) => {
            A?.(), (0, tD.openUserProfileModal)({ customStatusPrompt: K, sourceAnalyticsLocations: N, ...y, ...e });
        },
        Z = v?.widgets != null && v.widgets.length > 0,
        ee = s.useCallback(() => {
            A();
        }, [A]),
        et = s.useCallback(() => {
            G(), ee();
        }, [G, ee]),
        en = (0, eI.QR)({ location: "UserProfileAccountPopout" }),
        ei = (0, eI.zd)({ location: "UserProfileAccountPopout" }),
        es = s.useId();
    return (0, i.jsx)(U.f5, {
        value: N,
        children: (0, i.jsx)(tP.of, {
            value: y,
            openedAt: j,
            fetchStartedAt: v?.fetchStartedAt,
            fetchEndedAt: v?.fetchEndedAt,
            isLoaded: v?.isLoaded,
            children: (0, i.jsxs)(eT.l, {
                ref: R,
                "aria-labelledby": es,
                className: a()(ek.jC, q, S),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(x.A, {
                        children: (0, i.jsx)(eC.H, { id: es, children: ep.intl.string(ep.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eC.F, {
                        children: [
                            (0, i.jsx)(nw, { displayProfile: v, handleOpenUserProfileModal: X, height: b }),
                            (0, i.jsxs)(tW.A, {
                                className: ek.BK,
                                user: g,
                                displayProfile: v,
                                themeType: nW.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nH.wx,
                                        children: [
                                            (0, i.jsx)(tF.A, { user: g, displayProfile: v, themeType: nW.d.POPOUT }),
                                            (0, i.jsx)(tw.A, {
                                                user: g,
                                                displayProfile: v,
                                                themeType: nW.d.POPOUT,
                                                onOpenProfile: _ ? void 0 : X,
                                            }),
                                            (0, i.jsx)(tZ.A, {
                                                ref: Q,
                                                user: g,
                                                themeType: nW.d.POPOUT,
                                                onCloseProfile: A,
                                                prompt: K,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(ej.Ip, {
                                        className: ek.rf,
                                        style: { pointerEvents: $ ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tG.A, { userId: g.id }),
                                            (0, i.jsx)(tH.Ay, {
                                                className: ek.eF,
                                                user: g,
                                                displayName: t3.Ay.getName(void 0, null, g),
                                                onClickName: _ ? void 0 : X,
                                                displayNameTrailing: (0, i.jsx)(tX, { user: g, isVisible: I }),
                                                pronouns: v?.pronouns,
                                                trailing: (0, i.jsx)(tL.A, {
                                                    displayProfile: v,
                                                    themeType: nW.d.POPOUT,
                                                    onClose: A,
                                                    shouldOpenBadgeTooltip: null != T ? (e) => e === T : void 0,
                                                    shouldGlowTenureBadge: z.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tB.A, { isPremiumUser: V, onInteraction: A }),
                                            (0, i.jsx)(tJ.A, {
                                                user: g,
                                                bio: v?.bio,
                                                hidePersonalInformation: D,
                                                onClose: A,
                                            }),
                                            Z &&
                                                (0, i.jsx)(tQ.A, {
                                                    user: g,
                                                    widgets: v?.widgets,
                                                    onOpenUserProfileModal: X,
                                                }),
                                            (0, i.jsx)(tV.A, {
                                                user: g,
                                                currentUser: g,
                                                onOpenUserProfileModal: X,
                                                onClose: A,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ek.T_,
                                                children: [
                                                    (0, i.jsx)(tW.A.Overlay, {
                                                        className: ek.g0,
                                                        children: (0, i.jsxs)(eL, {
                                                            children: [
                                                                (0, i.jsx)(ew, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ep.intl.string(ep.t.s5vZlQ),
                                                                    icon: eS.R,
                                                                    onClick: et,
                                                                    ref: W,
                                                                }),
                                                                (0, i.jsx)(ew, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nS, {}),
                                                                    sublabel: null != k && k,
                                                                    icon: () =>
                                                                        (0, i.jsx)(e_.nW, { status: P, size: 12 }),
                                                                    trailing:
                                                                        (w || P === ts.clD.DND) &&
                                                                        (0, i.jsx)(ev.a, { size: "xxs" }),
                                                                    renderSubmenu: eA.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eD, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ek.hQ,
                                                                                  "aria-label": ep.intl.string(
                                                                                      ep.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: eA.Fr
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
                                                                                                  return (0, i.jsx)(
                                                                                                      eE.d,
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
                                                                                                          i.jsx)(eN.W, {
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
                                                                (0, i.jsx)(tc, { onClose: A }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tW.A.Overlay, {
                                                        className: ek.g0,
                                                        children: (0, i.jsxs)(eL, {
                                                            children: [
                                                                (0, i.jsx)(ew, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: ey.r,
                                                                    label: ep.intl.string(ep.t.oMNyYN),
                                                                    onClick: () => {
                                                                        A(), (0, nl.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eD, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ep.intl.string(ep.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: B,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tK.p5 &&
                                                                    L &&
                                                                    (0, i.jsx)(ew, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eR.L,
                                                                        label: ep.intl.string(ep.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tK.C)(g.id), A();
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
                                        (0, i.jsx)(td.A, { skuId: v.profileEffect.skuId, isHovering: M }),
                                    null != H && (0, i.jsx)(th.A, { frame: H, layout: "ACCOUNT_POPOUT" }),
                                ],
                            }),
                            en && ei ? (0, i.jsx)(nC, { targetElementRef: W, onClose: A }) : null,
                            (0, i.jsx)(tM, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nz = n(201805),
    nK = n(655116),
    n$ = n(21973),
    nY = n(454719),
    nX = n(342296),
    nZ = n(533488),
    nJ = n(167579),
    n0 = n(173660),
    n1 = n(51760),
    n2 = n(763827),
    n3 = n(499156),
    n5 = n(731854);
let n8 = 2.5 * eX.A.Millis.SECOND,
    n6 = +eX.A.Millis.HOUR;
var n7 = n(205693),
    n4 = n(485296);
let n9 = 3 * eX.A.Millis.SECOND,
    ie = +eX.A.Millis.DAY;
var it = n(616356),
    ii = n(734057),
    is = n(629016),
    il = n(186111),
    ia = n(967198),
    ir = n(486020),
    io = n(625494),
    iu = n(536194),
    ic = n(19575),
    id = n(994314),
    im = n(485599),
    ip = n(626584),
    ih = n(531685),
    ig = n(259065),
    ix = n(864386);
let iA = new ip.A("DisplayNameStylesCoachmark");
function iC(e) {
    let { markAsDismissed: t, targetElementRef: n, children: l } = e,
        { analyticsLocations: a } = (0, U.Ay)(),
        r = (0, s.useRef)(null),
        o = (0, c.bG)([ih.A], () => ih.A.isFocused()),
        u = (0, s.useCallback)(() => {
            t(em.i.TAKE_ACTION),
                (0, es.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, ig.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, s.useCallback)(() => {
            t(em.i.USER_DISMISS);
        }, [t]);
    return (
        (0, s.useEffect)(() => {
            o && r.current?.paused ? r.current?.play().catch(iA.error) : o || r.current?.pause();
        }, [o]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                l,
                (0, i.jsx)(nr.A, {
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
                    title: ep.intl.string(ix.default["1AE464"]),
                    body: [ep.intl.string(ix.default.cNc1g9), ep.intl.string(ep.t["4JNXHG"])],
                    actions: [{ text: ep.intl.string(ep.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var iE = n(932001),
    iT = n(45780),
    ij = n(696451),
    iS = n(71393),
    i_ = n(685073),
    iv = n(228366);
let iN = { lastSeenInfos: {} },
    iy = iN;
class iR extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iy = e ?? iN;
    }
    getState() {
        return iy;
    }
    getGuildLastSeenInfo(e) {
        return iy.lastSeenInfos[e] ?? null;
    }
}
let ib = new iR(iv.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iy.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iy = iN;
    },
});
var iI = n(116833),
    iM = n(514661);
let iO = new ip.A("GuildTagAvailableCoachmark");
function iU(e) {
    let t = (0, c.bG)([iS.A], () => iS.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            iv.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: s, onAdoptTag: l, onEditProfile: a } = (0, iM.A)(t?.id ?? null, () => n(em.i.TAKE_ACTION));
    if (null == t || !(0, i_.q0)(t))
        return iO.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: s, onClick: l, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nr.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iI.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t["m/Tc3n"], { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(em.i.USER_DISMISS),
            }),
        ],
    });
}
function iP(e) {
    let t = (0, c.bG)([iS.A], () => iS.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: s, onAdoptTag: l, onEditProfile: a } = (0, iM.A)(t?.id ?? null, () => n(em.i.TAKE_ACTION));
    if (null == t || !(0, i_.q0)(t))
        return iO.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: ep.intl.string(ep.t.jwEaiX), loading: s, onClick: l, variant: "primary" },
        { text: ep.intl.string(ep.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nr.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iI.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ep.intl.formatToPlainString(ep.t.VFqnyU, { guildName: t.name }),
                body: ep.intl.string(ep.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(em.i.USER_DISMISS),
            }),
        ],
    });
}
var ik = n(904481),
    iD = n(764231),
    iw = n(425713);
function iL(e) {
    let { groupName: t, targetElementRef: n } = e,
        s = tN(),
        l = (0, c.bG)([eo.A], () => eo.A.useReducedMotion),
        a = (0, tC.A)((e) => e.isOpen),
        r = (0, ik.G)();
    return l || null == s || a || r
        ? null
        : (0, i.jsx)(nd.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e;
                  return (0, i.jsx)(iF, {
                      recentlyLeveledTenureBadge: s,
                      markAsDismissed: l,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iF(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: l, shouldShow: a } = e,
        r = tv.sp.indexOf(t),
        o = (0, iw.I)(tv.sp[r > 0 ? r - 1 : r]).ambient,
        u = (0, s.useCallback)(() => {
            n(em.i.TAKE_ACTION),
                tC.A.setState({ shouldRenderTenureLevelUp: !0 }),
                io._.dispatch(ts.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, s.useCallback)(() => {
            n(em.i.USER_DISMISS);
        }, [n]),
        d = tv.VD[t],
        m = ep.intl.formatToPlainString(ep.t.ewkaVR, {
            timeMilestone: (0, iD.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        p = [{ text: ep.intl.string(ep.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nr.A, {
        targetElementRef: l,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ep.intl.string(ep.t.VoDxsV),
        body: m,
        actions: p,
    });
}
function iB(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nz.c9)(),
        s = null != e.targetElementRef.current && t && n,
        [l, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iT.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ts.dJq),
                s = (0, c.bG)([iS.A, ne.default, ij.Ay], () => {
                    if (null === e) return !1;
                    let t = iS.A.getGuild(e);
                    if (void 0 === t || !(0, i_.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = ne.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = ij.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, iE.ww)(s && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? ts.eGj);
        })(e.guildId, { shouldShow: s }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                s = i?.identityGuildId ?? null,
                l = (0, c.bG)([ib], () => (null === s ? null : ib.getGuildLastSeenInfo(s))),
                a = (0, c.bG)([iS.A], () => iS.A.getGuild(s)?.profile?.tag),
                r = null != a && i?.identityGuildId === s && i?.tag === null,
                o = null != s && l?.tag === a,
                u = null !== s && r && !o;
            return (0, iE.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: s });
    return s
        ? l === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iP, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iU, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iL, { groupName: em.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(nd.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: em.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: s } = t;
                                return n === d.M.DISPLAY_NAME_STYLES_COACHMARK
                                    ? (0, i.jsx)(iC, {
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
var iG = n(615675),
    iV = n(900797),
    iQ = n(847374),
    iW = n(348858),
    iH = n(617354),
    iq = n(206018),
    iz = n(42473),
    iK = n(490704),
    i$ = n(967194);
function iY(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: l,
            onClick: r,
            iconForeground: o,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: d,
        } = e,
        m = t || n,
        {
            Component: p,
            play: h,
            events: { onMouseEnter: g, onMouseLeave: x },
        } = (0, iW.I)(m ? "undeafen" : "deafen"),
        A = n ? iG.T : p,
        { name: C } = (0, ex.x5)(n5.oh.AUDIO_OUTPUT),
        E = (0, iH.A)(t, n, l),
        { analyticsLocations: T } = (0, U.Ay)(O.A.AUDIO_OUTPUT_BUTTON),
        j = s.useRef(null);
    return (
        s.useEffect(() => () => h(), [m, h]),
        (0, i.jsx)(U.f5, {
            value: T,
            children: (0, i.jsx)(f.Y, {
                targetElementRef: j,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(U.f5, {
                            value: T,
                            children: (0, i.jsx)(iq.A, {
                                onInteraction: (0, B.s)("AudioDeviceMenu", O.A.ACCOUNT),
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
                        p = d ? iV.t : iQ.a;
                    return (0, i.jsxs)("div", {
                        ref: j,
                        className: a()(iK.Lh, { [iK.v8]: m, [iK.q6]: d }),
                        children: [
                            (0, i.jsx)(iz.A, {
                                "aria-checked": m,
                                "aria-label": ep.intl.string(ep.t.wjcRFX),
                                className: iK.eT,
                                disabled: l,
                                icon: (0, i.jsx)(A, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? i$.o : void 0,
                                innerClassName: a()({ [i$.T]: n }),
                                onClick: r,
                                onContextMenu: s,
                                onMouseEnter: g,
                                onMouseLeave: x,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(iz.A, {
                                className: a()(iK.UT, { [iK.q6]: d }),
                                disabled: l,
                                icon: (0, i.jsx)(p, {
                                    className: iK.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: C })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? ep.intl.format(ep.t["f+DDY/"], { outputDeviceName: C })
                                    : ep.intl.string(ep.t.aA4Vce),
                                "aria-label": c
                                    ? ep.intl.formatToPlainString(ep.t["f+DDY/"], { outputDeviceName: C })
                                    : ep.intl.string(ep.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var iX = n(666654),
    iZ = n(523875),
    iJ = n(993719);
let i0 = {};
class i1 extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i0[e] ?? !1;
    }
}
let i2 = new i1(iv.h, {
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
    i5 = n(980923),
    i8 = n(224585),
    i6 = n(949341),
    i7 = n(973324);
function i4(e) {
    let t,
        {
            selfMute: n,
            serverMute: l,
            suppress: r,
            awaitingRemote: o,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: m,
            onClick: p,
            nameplate: h,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: x,
            shouldShowInputDeviceChangedTooltip: A,
            shouldShowPTTJoinTooltip: C,
            dismissTooltips: E,
            speaking: T,
        } = e,
        { showPTTIconIndicator: j } = n3.A.useConfig({ location: "MicrophoneButton" }),
        S = (0, c.bG)([n1.Ay], () => n1.Ay.getMode() === n5.TB.PUSH_TO_TALK),
        _ = (0, c.bG)([n1.Ay], () => n1.Ay.getSettings().modeOptions.shortcut),
        v = (0, c.bG)([i2], () => i2.getIsTutorialActive(i3.v.MUTE_TUTORIAL)),
        N = (0, c.bG)([n2.A], () => null != n2.A.getChannelId()),
        { name: y } = (0, ex.x5)(n5.oh.AUDIO_INPUT),
        { enabledInputProfiles: R } = (0, nZ.d)({ location: "MicrophoneButton" }),
        b = s.useRef(null),
        I = n || r || l,
        M = (0, iZ.L)(I ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, U.Ay)(O.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: D, play: w } = M,
        L = l || r ? iX.O : k;
    s.useEffect(() => () => w(), [I, w]);
    let F = (0, i5.A)(n, l, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: ep.intl.string(ep.t["29gnR4"]), tooltipForceOpen: !0 }
        : C || x
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ep.intl.format(ep.t.c1qUOQ, { keybind: e0.dI(_).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let G = j && S && N,
        V = I ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
        Q = s.useCallback(() => {
            p(), v && iJ.N(i3.v.MUTE_TUTORIAL);
        }, [p, v]);
    return (0, i.jsxs)(U.f5, {
        value: P,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: b,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(U.f5, {
                            value: P,
                            children: (0, i.jsx)(iq.A, {
                                onInteraction: (0, B.s)("AudioDeviceMenu", O.A.ACCOUNT),
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
                animation: f.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: s } = e,
                        { isShown: l } = n,
                        r = l ? iV.t : iQ.a;
                    return (0, i.jsxs)("div", {
                        ref: b,
                        className: a()(iK.Lh, { [iK.v8]: I, [iK.q6]: l }),
                        children: [
                            (0, i.jsx)(iz.A, {
                                "aria-checked": I,
                                "aria-label": ep.intl.string(ep.t.w4m945),
                                className: iK.eT,
                                disabled: o,
                                icon: (0, i.jsx)(L, { size: "custom", width: 20, height: 20, color: V, className: u }),
                                onClick: Q,
                                onContextMenu: s,
                                onMouseEnter: () => {
                                    d(), D.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    m(), D.onMouseLeave();
                                },
                                plated: null != h,
                                redGlow: I,
                                role: "switch",
                                ...t,
                                children: G ? (0, i.jsx)("div", { className: a()(i6.U, { [i6.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(iz.A, {
                                "aria-label": A
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: y })
                                    : ep.intl.string(ep.t.fRzCbB),
                                className: a()(iK.UT, { [iK.q6]: l }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: iK.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: V,
                                }),
                                onClick: s,
                                onContextMenu: s,
                                onMouseEnter: d,
                                onMouseLeave: m,
                                plated: null != h,
                                redGlow: I,
                                tooltipType: A ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: A,
                                tooltipPositionKey: A
                                    ? ep.intl.formatToPlainString(ep.t["18wnuD"], { inputDeviceName: y })
                                    : void 0,
                                tooltipShouldShow: !l,
                                tooltipText: A
                                    ? ep.intl.format(ep.t["18wnuD"], { inputDeviceName: y })
                                    : ep.intl.string(ep.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nr.A, {
                targetElementRef: b,
                shouldShow: v,
                graphic: { type: "image", src: i7.A },
                onRequestClose: () => {
                    iJ.N(i3.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ep.intl.string(i8.default.VG4zAf),
                body: ep.intl.string(i8.default["8VIRzR"]),
            }),
        ],
    });
}
var i9 = n(935399),
    se = n(505312),
    st = n(848847),
    sn = n(88001),
    si = n(466919),
    ss = n(438705);
let sl = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: l } = e,
        a = s.useCallback(() => {
            l(), (0, es.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
        }, [l]);
    return (0, i.jsx)(nr.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: ss },
        shouldShow: n,
        title: ep.intl.format(si.default.bx8sR9, { premiumGroupProductName: (0, sn.DP)() }),
        body: ep.intl.format(si.default.Pw4OFZ, { premiumGroupProductName: (0, sn.DP)() }),
        onRequestClose: l,
        actions: [{ text: ep.intl.string(si.default.DD26QR), onClick: a }],
    });
};
var sa = n(873298),
    sr = n(840387);
function so(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        l = (0, sr.Z)(),
        a = t0.KP.useSetting(),
        r = l && a !== sa.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, s.useCallback)(() => {
            t(em.i.TAKE_ACTION), (0, es.openUserSettings)(ei.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, s.useCallback)(() => {
            t(em.i.USER_DISMISS);
        }, [t]),
        c = r
            ? a === sa.KP.FRIENDS_ONLY
                ? ep.intl.string(ep.t["/hogEy"])
                : ep.intl.string(ep.t["6hEfm1"])
            : ep.intl.string(ep.t.bnNxW1);
    return (0, i.jsx)(nr.A, {
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
        actions: [{ text: ep.intl.string(ep.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function su(e) {
    let t,
        n,
        {
            webBuildOverride: l,
            onClick: a,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: c,
        } = e,
        m = s.useRef(null),
        [p, h] = s.useState(!1);
    (0, i9.Ay)(() => {
        let e = () => h(!0);
        return (
            io._.subscribe(ts.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                io._.unsubscribe(ts.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = s.useCallback(() => {
        h(!1), a();
    }, [a]);
    t = null != l ? ep.intl.formatToPlainString(ep.t.Gzh6ZP, { webBuildOverride: l.id }) : ep.intl.string(ep.t.cduTBL);
    let g = ez.Z,
        x = (0, se.w)();
    return (
        (g = null != l ? st.H : x.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(iz.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": ep.intl.string(ep.t.cduTBL),
                    icon: (0, i.jsx)(g, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...x.events,
                    plated: null != c,
                }),
                (0, i.jsx)(sl, { targetElementRef: m, shouldShow: p, onDismiss: () => h(!1) }),
                (0, i.jsx)(nd.Ay, {
                    contentTypes: o,
                    groupName: em.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(so, { markAsDismissed: n, targetElementRef: m })
                            : null;
                    },
                }),
            ],
        })
    );
}
var sc = n(489902);
let sd = ic.Ay.getEnableHardwareAcceleration() ? p.Js : p.eu,
    sm = 2.5 * eX.A.Millis.SECOND,
    sp = 2 * eX.A.Millis.MINUTE,
    sh = 2 * eX.A.Millis.MINUTE,
    sf = 5 * eX.A.Millis.SECOND;
function sg(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: l = -1 / 0,
            streaming: r,
            currentUser: o,
            status: u,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: m,
            nameplate: p,
            avatarDecoration: x,
            "data-jump-section": A,
        } = e,
        C = s.useRef(null),
        E = t ?? C,
        j = (0, ir.F_)({ avatarDecoration: x, size: (0, V.Te)(h._3.SIZE_32) }),
        S = (0, K.A)(),
        {
            updateOpenPopoutRef: v,
            highlightBadge: N,
            setHighlightBadge: y,
        } = (function () {
            let e = s.useRef(null),
                t = s.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = s.useState(),
                [l, a] = s.useState(!1);
            return (
                (0, _.A)(() => a(!0), 750),
                s.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    };
                    return (
                        io._.subscribe(ts.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            io._.unsubscribe(ts.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: l ? n : void 0, setHighlightBadge: i }
            );
        })(),
        R = (0, W.K)(p);
    return null == o
        ? null
        : (0, i.jsx)(T.A, {
              object: ts.ZSU.AVATAR,
              children: (0, i.jsx)(nX.A, {
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
                      return (0, i.jsx)(nq, {
                          currentUser: o,
                          highlightBadge: N,
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
                      d(), y(void 0);
                  },
                  children: (e) => {
                      v(e);
                      let { onMouseEnter: t, onMouseDown: s, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: E,
                          style: R,
                          onMouseEnter: t,
                          onMouseDown: s,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(sc.Q9, { [sc.ZQ]: null != p }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ep.intl.string(ep.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: sc.$n,
                                  "data-jump-section": A,
                              }),
                              (0, i.jsx)(sd, {
                                  size: h._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: j,
                                  status: r ? ts.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: l,
                                  className: sc.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: sc.oM, children: m(S) }),
                          ],
                      });
                  },
              }),
          });
}
class sx extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    speakingWhilePTTTooltipTimeout = new m.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(sh, null, !1);
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
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: s, occluded: l, speakingWhilePTTInactive: a } = this.props;
        l !== i && this.handleOccludedChanged(),
            s !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, L.A)(e, t, ts.JJy.ACCOUNT_PANEL), (0, F.X)(O.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, w.A)(e, ts.JJy.ACCOUNT_PANEL), (0, F.X)(O.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            n2.A.isConnected() ? (0, es.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL) : (0, es.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("8528"),
                    n.e("78401"),
                    n.e("39779"),
                    n.e("40841"),
                    n.e("52204"),
                    n.e("63635"),
                    n.e("51404"),
                    n.e("19241"),
                    n.e("56685"),
                    n.e("98042"),
                    n.e("13709"),
                    n.e("85057"),
                    n.e("69273"),
                    n.e("81349"),
                    n.e("63941"),
                    n.e("63009"),
                    n.e("47181"),
                    n.e("27962"),
                    n.e("45650"),
                    n.e("97189"),
                    n.e("24059"),
                    n.e("51402"),
                    n.e("27660"),
                    n.e("85484"),
                    n.e("89516"),
                    n.e("73679"),
                    n.e("84615"),
                    n.e("27755"),
                    n.e("79705"),
                    n.e("55658"),
                    n.e("76032"),
                    n.e("78220"),
                    n.e("43763"),
                    n.e("74112"),
                    n.e("33957"),
                    n.e("59204"),
                    n.e("75058"),
                    n.e("23574"),
                    n.e("20797"),
                    n.e("38559"),
                    n.e("80287"),
                    n.e("20524"),
                    n.e("6619"),
                    n.e("5007"),
                    n.e("88826"),
                    n.e("28510"),
                    n.e("90673"),
                    n.e("36613"),
                    n.e("4592"),
                    n.e("27518"),
                    n.e("4981"),
                    n.e("35392"),
                    n.e("97137"),
                    n.e("44609"),
                    n.e("96600"),
                    n.e("15453"),
                    n.e("99286"),
                    n.e("90053"),
                    n.e("92793"),
                    n.e("33092"),
                    n.e("54316"),
                    n.e("66498"),
                    n.e("20158"),
                    n.e("93327"),
                    n.e("75681"),
                    n.e("25650"),
                    n.e("8161"),
                    n.e("9176"),
                    n.e("87208"),
                    n.e("4015"),
                    n.e("5384"),
                    n.e("8996"),
                    n.e("76160"),
                    n.e("23924"),
                    n.e("15510"),
                    n.e("48226"),
                    n.e("19402"),
                    n.e("13111"),
                    n.e("68201"),
                    n.e("38939"),
                    n.e("3376"),
                    n.e("13554"),
                    n.e("26132"),
                    n.e("20287"),
                    n.e("28367"),
                    n.e("35429"),
                    n.e("10471"),
                    n.e("63232"),
                    n.e("64827"),
                    n.e("30938"),
                    n.e("23808"),
                    n.e("11301"),
                    n.e("60235"),
                    n.e("61737"),
                    n.e("79428"),
                    n.e("29963"),
                    n.e("47834"),
                    n.e("98329"),
                    n.e("20317"),
                    n.e("84569"),
                    n.e("2368"),
                    n.e("27084"),
                    n.e("24313"),
                    n.e("48405"),
                    n.e("63185"),
                    n.e("19551"),
                    n.e("84150"),
                    n.e("45959"),
                    n.e("18573"),
                    n.e("55057"),
                    n.e("37794"),
                    n.e("26073"),
                    n.e("7743"),
                    n.e("34303"),
                    n.e("48172"),
                    n.e("28866"),
                    n.e("54961"),
                    n.e("8304"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("55936"),
                    n.e("11566"),
                    n.e("21106"),
                    n.e("31988"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("81987"),
                    n.e("58007"),
                    n.e("5812"),
                    n.e("17363"),
                    n.e("34552"),
                    n.e("58337"),
                    n.e("55411"),
                    n.e("93103"),
                    n.e("26437"),
                    n.e("91763"),
                    n.e("13708"),
                    n.e("76602"),
                    n.e("28229"),
                    n.e("71470"),
                    n.e("91007"),
                    n.e("68403"),
                    n.e("76418"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("88342"),
                    n.e("69747"),
                    n.e("40258"),
                    n.e("20683"),
                    n.e("66495"),
                    n.e("91146"),
                    n.e("42724"),
                    n.e("43437"),
                    n.e("39970"),
                    n.e("82263"),
                    n.e("42451"),
                    n.e("30221"),
                    n.e("8371"),
                    n.e("8555"),
                    n.e("86127"),
                    n.e("6174"),
                    n.e("39851"),
                    n.e("58216"),
                    n.e("98965"),
                    n.e("72789"),
                    n.e("6949"),
                    n.e("29871"),
                    n.e("17249"),
                    n.e("41250"),
                    n.e("35027"),
                    n.e("84971"),
                    n.e("53917"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("15423"),
                    n.e("26295"),
                    n.e("88599"),
                    n.e("36863"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("98765"),
                    n.e("23354"),
                    n.e("89088"),
                    n.e("82644"),
                    n.e("37187"),
                    n.e("71273"),
                    n.e("27779"),
                    n.e("12743"),
                    n.e("10957"),
                    n.e("55973"),
                    n.e("20590"),
                    n.e("45172"),
                    n.e("35313"),
                    n.e("65437"),
                    n.e("34983"),
                    n.e("63235"),
                    n.e("74810"),
                    n.e("28083"),
                    n.e("80830"),
                    n.e("86672"),
                    n.e("3589"),
                    n.e("86814"),
                    n.e("52548"),
                    n.e("35771"),
                    n.e("75842"),
                    n.e("53984"),
                    n.e("59414"),
                    n.e("80854"),
                    n.e("79780"),
                    n.e("35395"),
                    n.e("43780"),
                    n.e("14041"),
                    n.e("46844"),
                    n.e("45413"),
                    n.e("22822"),
                    n.e("75627"),
                    n.e("90664"),
                    n.e("79745"),
                    n.e("34150"),
                    n.e("64850"),
                    n.e("72401"),
                    n.e("22855"),
                    n.e("70104"),
                    n.e("68904"),
                    n.e("68802"),
                    n.e("52617"),
                    n.e("22266"),
                    n.e("8563"),
                    n.e("2564"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("14285"),
                    n.e("95752"),
                    n.e("78100"),
                    n.e("8362"),
                    n.e("80149"),
                    n.e("2698"),
                    n.e("62875"),
                    n.e("4744"),
                    n.e("34654"),
                    n.e("501"),
                    n.e("46769"),
                    n.e("33297"),
                    n.e("35321"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("7833"),
                    n.e("86243"),
                    n.e("32209"),
                    n.e("39171"),
                    n.e("37021"),
                    n.e("21049"),
                    n.e("36564"),
                    n.e("80436"),
                    n.e("60249"),
                    n.e("71268"),
                    n.e("95370"),
                    n.e("97784"),
                    n.e("50033"),
                    n.e("10014"),
                    n.e("33416"),
                    n.e("84783"),
                    n.e("10567"),
                    n.e("37752"),
                    n.e("3217"),
                    n.e("47678"),
                    n.e("63645"),
                    n.e("5557"),
                    n.e("52229"),
                    n.e("44780"),
                    n.e("83952"),
                    n.e("5636"),
                    n.e("95340"),
                    n.e("62718"),
                    n.e("38472"),
                    n.e("834"),
                    n.e("93907"),
                    n.e("3998"),
                    n.e("59957"),
                    n.e("84317"),
                    n.e("89916"),
                    n.e("67176"),
                    n.e("68763"),
                    n.e("15188"),
                    n.e("61156"),
                    n.e("18489"),
                    n.e("166"),
                    n.e("91671"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("60773"),
                    n.e("92295"),
                    n.e("20930"),
                    n.e("16767"),
                    n.e("50535"),
                    n.e("44801"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("36926"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("8018"),
                    n.e("6841"),
                    n.e("81202"),
                    n.e("79211"),
                    n.e("63071"),
                    n.e("26574"),
                    n.e("57458"),
                    n.e("8829"),
                    n.e("86697"),
                    n.e("20379"),
                    n.e("76413"),
                    n.e("3303"),
                    n.e("1243"),
                    n.e("19193"),
                    n.e("80945"),
                    n.e("38090"),
                    n.e("18265"),
                    n.e("96804"),
                    n.e("44057"),
                    n.e("36877"),
                    n.e("95998"),
                    n.e("97073"),
                    n.e("27659"),
                    n.e("36419"),
                    n.e("80262"),
                    n.e("10943"),
                    n.e("15920"),
                    n.e("42234"),
                    n.e("66783"),
                    n.e("3930"),
                    n.e("3663"),
                    n.e("28850"),
                    n.e("11617"),
                    n.e("74678"),
                    n.e("20045"),
                    n.e("52212"),
                    n.e("37977"),
                    n.e("81189"),
                    n.e("58164"),
                    n.e("21930"),
                    n.e("92077"),
                    n.e("66580"),
                    n.e("80093"),
                    n.e("10520"),
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
                    n.e("77663"),
                    n.e("41701"),
                    n.e("37490"),
                    n.e("40204"),
                    n.e("77467"),
                    n.e("97354"),
                    n.e("47057"),
                    n.e("60989"),
                    n.e("12682"),
                    n.e("86902"),
                    n.e("68083"),
                    n.e("2855"),
                    n.e("34936"),
                    n.e("19815"),
                    n.e("3710"),
                    n.e("48730"),
                    n.e("71467"),
                    n.e("49013"),
                    n.e("29260"),
                    n.e("51892"),
                    n.e("20965"),
                    n.e("41838"),
                    n.e("45830"),
                    n.e("39894"),
                    n.e("46045"),
                    n.e("40393"),
                    n.e("3707"),
                    n.e("33448"),
                    n.e("3304"),
                    n.e("5896"),
                    n.e("60003"),
                    n.e("73122"),
                    n.e("87732"),
                    n.e("42324"),
                    n.e("8979"),
                    n.e("755"),
                    n.e("77602"),
                    n.e("33869"),
                    n.e("46450"),
                    n.e("95602"),
                    n.e("14020"),
                    n.e("94607"),
                    n.e("43549"),
                    n.e("31335"),
                    n.e("29569"),
                    n.e("96480"),
                    n.e("4736"),
                    n.e("89638"),
                    n.e("61597"),
                    n.e("14875"),
                    n.e("86300"),
                    n.e("62175"),
                    n.e("88913"),
                    n.e("82178"),
                    n.e("89541"),
                    n.e("79216"),
                    n.e("89545"),
                    n.e("27838"),
                    n.e("43114"),
                    n.e("46149"),
                    n.e("63497"),
                    n.e("79593"),
                    n.e("33771"),
                    n.e("41706"),
                    n.e("94888"),
                    n.e("10637"),
                    n.e("66523"),
                    n.e("46039"),
                    n.e("54630"),
                    n.e("93917"),
                    n.e("44727"),
                    n.e("27462"),
                    n.e("22455"),
                    n.e("60816"),
                    n.e("68031"),
                    n.e("97162"),
                    n.e("15057"),
                    n.e("86492"),
                    n.e("10147"),
                    n.e("10622"),
                    n.e("6627"),
                    n.e("90274"),
                    n.e("86546"),
                    n.e("6699"),
                    n.e("96817"),
                    n.e("84704"),
                    n.e("99053"),
                    n.e("46327"),
                    n.e("28011"),
                    n.e("75284"),
                    n.e("21331"),
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
                    n.e("26359"),
                    n.e("73566"),
                    n.e("27687"),
                    n.e("45419"),
                    n.e("18710"),
                    n.e("86629"),
                    n.e("98384"),
                    n.e("17823"),
                    n.e("6391"),
                    n.e("9861"),
                    n.e("24564"),
                    n.e("44264"),
                    n.e("14753"),
                    n.e("34428"),
                    n.e("35476"),
                    n.e("39721"),
                    n.e("8508"),
                    n.e("14334"),
                    n.e("76892"),
                    n.e("22420"),
                    n.e("98660"),
                    n.e("16799"),
                    n.e("52694"),
                    n.e("86381"),
                    n.e("59373"),
                    n.e("33204"),
                    n.e("66002"),
                    n.e("71811"),
                    n.e("39967"),
                    n.e("38249"),
                    n.e("40976"),
                    n.e("85216"),
                    n.e("56513"),
                    n.e("83102"),
                    n.e("65306"),
                    n.e("2552"),
                    n.e("89588"),
                    n.e("24084"),
                    n.e("33314"),
                    n.e("44790"),
                    n.e("14451"),
                    n.e("7755"),
                    n.e("83259"),
                    n.e("50590"),
                    n.e("28612"),
                    n.e("54658"),
                    n.e("31828"),
                    n.e("71790"),
                    n.e("99802"),
                    n.e("33049"),
                    n.e("36474"),
                    n.e("28638"),
                    n.e("71586"),
                ]).then(n.bind(n, 410681));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, B.s)("UserSettingsMenu", O.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, B.s)("AudioDeviceMenu", O.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("90274"), n.e("78827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, nZ.d)({ location: "Account" });
                    return (0, i.jsx)(U.f5, {
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
                let { default: e } = await Promise.all([n.e("90274"), n.e("78827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(U.f5, {
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
                occluded: s,
                shouldShowPTTJoinTooltip: l,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > sp;
        i
            ? r ||
              !e ||
              t ||
              n ||
              s ||
              !o ||
              null != a ||
              l ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(sm, () =>
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
                occluded: s,
                shouldShowPTTJoinTooltip: l,
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
              s ||
              !o ||
              null != a ||
              l ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(sm, () =>
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
                status: l,
                userTag: a,
                voiceChannel: r,
            } = this.props;
        if (null == s) return null;
        if ((0, v.A)({ activities: t, status: l, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(x.A, { children: t$.Ay.humanizeStatus(l) }),
                    (0, i.jsx)(N.A, {
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
            return t === ts.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(x.A, { children: t$.Ay.humanizeStatus(l) }),
                      (0, i.jsx)(z.A, { activity: o, emojiClassName: sc.Zg, className: sc.WO }),
                  ],
              })
            : null != l && l !== ts.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, i.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(I, { text: t$.Ay.humanizeStatus(l) }),
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
                          className: sc.eW,
                          children: (0, i.jsx)(im.A, {
                              className: a()({ [sc.e8]: null != e }),
                              children: (0, i.jsx)(Y.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? $.G.ANIMATED : $.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: sc.XP,
                          children: (0, i.jsx)(id.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(iB, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(sg, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: s, isListenAlongVisible: l } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(A.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(sc.kL, { [sc.UG]: null != n, [sc.bc]: !s, [sc.G5]: l }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(q.A, { nameplate: t, hovered: r, placement: H.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(sA, {
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
function sA(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: s,
            serverMute: l,
            serverDeaf: a,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: u,
            webBuildOverride: c,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: x,
            handleOpenSettingsContextMenu: A,
            dismissibleContents: C,
            nameplate: E,
            accountContainerRef: T,
            deviceChangedTooltipType: j,
            shouldShowPTTJoinTooltip: S = !1,
            dismissTooltips: _,
            speaking: v,
        } = e,
        N = (0, W.K)(E);
    return (0, i.jsxs)("div", {
        className: sc.Uo,
        style: N,
        children: [
            (0, i.jsx)(i4, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: l,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: d,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != E ? sc.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === j,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: S,
                dismissTooltips: _,
                speaking: v,
            }),
            (0, i.jsx)(iY, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: g,
                awaitingRemote: s,
                iconForeground: null != E ? sc.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === j,
                dismissTooltips: _,
            }),
            (0, i.jsx)(su, {
                webBuildOverride: c,
                onClick: x,
                onContextMenu: A,
                dismissibleContents: C.settings,
                iconForeground: null != E ? sc.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function sC(e) {
    let t = (0, c.bG)([n2.A], () => null != n2.A.getChannelId()),
        n = (0, ex.Py)(e),
        i = s.useRef(new m.Ep()),
        [l, a] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(sf, () => {
                a(!1);
            }));
    }, [t, n]);
    let r = s.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, S.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: l, dismissTooltip: r }
    );
}
function sE() {
    let e = (0, c.bG)([ne.default], () => ne.default.getCurrentUser()),
        t = (0, c.bG)([ng.default], () => ng.default.getId()),
        {
            activities: n,
            streaming: l,
            status: a,
        } = (0, c.cf)([nE.A], () => {
            let e = nE.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === ts.$pd.STREAMING;
                    }),
                status: nE.A.getStatus(),
            };
        }),
        r = (0, c.bG)([it.A], () => it.A.getAnyStreamForUser(t)),
        u = (0, j.A)({ userId: t }),
        p = (0, c.bG)([n4.A], () => n4.A.getVoiceVolume(t)),
        h = t$.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, c.bG)([n2.A, ii.A], () => {
            let e = n2.A.getChannelId();
            return null != e ? ii.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: x, suppress: A } = (0, n0.A)(f),
        { selfDeaf: E, deaf: T } = (0, nJ.A)(f),
        _ = (0, c.bG)([P.A], () => ((0, k.kK)() ? P.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        v = (0, c.bG)([n1.Ay], () => n1.Ay.getSpeakingWhileMuted()),
        N = (0, c.bG)([D.A], () => D.A.isFullscreenInContext()),
        y = (0, c.bG)([il.A], () => il.A.hasLayers()),
        R = (0, C.useModalsStore)(C.hasAnyModalOpenSelector) || y || iu.P.isDisallowPopupsSet() || N,
        b = (0, c.bG)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        I = (0, c.bG)([ia.A], () => ia.A.getGuildId()),
        M = e?.avatarDecoration,
        w = (0, G.A)(M),
        L = t$.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, U.Ay)(O.A.ACCOUNT),
        B = (0, Q.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: V } = (0, nz.c9)(),
        W = (0, c.bG)([nK.A, ne.default, is.A], () => {
            let e,
                t = nK.A.getSyncingWith(),
                n = nK.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(is.A.getParty(e) ?? []))
                        .map((e) => ne.default.getUser(e))
                        .filter(nx.Vq)
                        .value()),
                i.length > 1
            );
        }),
        H = { avatar: [], settings: [] },
        q = (0, n$.lX)("AccountCoachmark");
    !R && (H.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK), q && H.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: z, dismissTooltip: K } = sC(n5.oh.AUDIO_INPUT),
        { shouldShowTooltip: $, dismissTooltip: Y } = sC(n5.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: Z, dismissTooltip: J } = (function () {
            let [e, t] = s.useState(!1),
                n = (0, c.bG)([n1.Ay], () => n1.Ay.getMode() === n5.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [n2.A],
                    () => null != n2.A.getChannelId() && (n2.A.getDuration() ?? Number.MAX_VALUE) < n8,
                ),
                [l, a] = s.useState(!1),
                { showPTTJoinTooltip: r } = n3.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = s.useRef(new m.Ep()),
                u = s.useRef(new m.Ep());
            s.useEffect(() => {
                if (i && n && !e) {
                    if ((n3.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        u.current.start(n6, () => {
                            t(!1);
                        }),
                        o.current.start(n8, () => {
                            a(!1);
                        });
                }
                i || a(!1);
            }, [i, n, r, e]);
            let d = s.useCallback(() => {
                a(!1), o.current.stop();
            }, []);
            return (
                (0, S.l0)(() => {
                    o.current.stop(), u.current.stop();
                }),
                { shouldShowTooltip: l, dismissTooltip: d }
            );
        })(),
        ee = (function () {
            let { showPTTSpeakingIndicator: e } = n3.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = s.useState(!1),
                i = (0, c.bG)([n1.Ay], () => n1.Ay.getMode() === n5.TB.PUSH_TO_TALK),
                l = (0, c.bG)([n2.A], () => n2.A.getRTCConnectionId()),
                a = (0, c.bG)([n1.Ay], () => {
                    let e = n1.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < ie;
                }),
                r = s.useRef(new m.Ep());
            return (
                s.useEffect(() => {
                    n(!1);
                }, [l]),
                s.useEffect(() => {
                    let t = 0,
                        s = r.current;
                    function o(e, i) {
                        let l = (i & n5.ME.VOICE) === n5.ME.VOICE,
                            a = n4.A.isCurrentUserPTTActive();
                        l && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              s.start(n9, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != l && n1.Ay.getMediaEngine().on(n7.bg.VoiceActivity, o),
                        () => {
                            n1.Ay.getMediaEngine().removeListener(n7.bg.VoiceActivity, o), s.stop();
                        }
                    );
                }, [e, i, a, l]),
                t
            );
        })(),
        et = s.useMemo(() => (z ? "input" : $ ? "output" : void 0), [z, $]),
        en = s.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        K();
                        break;
                    case "output":
                        Y();
                }
            },
            [K, Y],
        );
    return (0, i.jsx)(U.f5, {
        value: F,
        children: (0, i.jsx)(sx, {
            currentUser: e,
            username: L,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: H,
            userTag: h,
            occluded: R,
            selfDeaf: E,
            selfMute: x,
            serverDeaf: T,
            serverMute: g,
            speaking: u,
            voiceDb: p,
            speakingWhileMuted: v,
            speakingWhilePTTInactive: ee,
            status: a,
            streaming: l,
            suppress: A,
            webBuildOverride: _,
            awaitingRemote: b,
            nameplate: B,
            selectedGuildId: I,
            avatarDecoration: w,
            isQuestBarEmpty: V,
            isListenAlongVisible: W,
            deviceChangedTooltipType: et,
            onDismissDeviceChangedTooltip: () => en(et),
            shouldShowPTTJoinTooltip: Z,
            dismissPTTJoinTooltip: J,
        }),
    });
}
