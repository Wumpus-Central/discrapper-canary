n.d(t, { g: () => i8, A: () => i4 }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    u = n(158390),
    c = n(17928),
    d = n(554146),
    p = n(451988),
    m = n(97808),
    h = n(778712),
    f = n(922016),
    g = n(939249),
    x = n(140735),
    A = n(312138);
if (21552 == n.j) var C = n(192308);
var E = n(442433),
    T = n(820284),
    _ = n(717558),
    S = n(964486),
    j = n(220839),
    v = n(397244),
    N = n(729551),
    y = n(123924),
    R = n(866323),
    I = n(449450);
function b(e) {
    let { text: t } = e,
        n = (0, R.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: I.k,
        children: n((e, t) => (0, i.jsx)(y.animated.div, { className: I.H, style: e, children: t })),
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
    let [p, m] = (0, er.z)(() => ({ x: 0, y: 0, config: ec }));
    return (
        s.useEffect(() => {
            m({ x: r.x, y: r.y });
        }, [r.x, r.y, m]),
        (0, i.jsx)(y.animated.div, {
            style: { transform: (0, y.to)([p.x, p.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(eu.T, t),
        })
    );
}
var ep = n(49999),
    em = n(985018),
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
            (0, es.openUserSettings)(ei.X.NOTIFICATIONS_PANEL, { analyticsLocations: u }), c(ep.i.TAKE_ACTION);
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
                                          children: em.intl.string(em.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(J.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: em.intl.format(em.t.IVzJ8G, {
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
                                  onClick: () => c(ep.i.USER_DISMISS),
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
    e_ = n(364522),
    eS = n(22231),
    ej = n(133171),
    ev = n(780338);
if (21552 != n.j) var C = n(192308);
var eN = n(550079),
    ey = n(26137),
    eR = n(473935),
    eI = n(765671),
    eb = n(395332),
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
        p = (0, eP.rE)({ action: t, onClick: n }),
        [m, h] = s.useState(!1),
        x = s.useRef(null),
        A = c ?? x,
        C = null != u,
        E = C && d,
        T = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        _ = s.useCallback(() => {
            h(!0);
        }, []),
        S = s.useCallback(() => {
            h(!1);
        }, []),
        j = () =>
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
        v = (e) => {
            let t;
            return (
                (t = E
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.D, {
                                  className: ek.ef,
                                  onClick: p,
                                  focusProps: { offset: { ...T.offset, right: 0 } },
                                  children: j(),
                              }),
                              (0, i.jsx)(g.D, {
                                  className: ek.ap,
                                  "aria-label": em.intl.string(em.t.PdRCRg),
                                  ...e,
                                  onClick: _,
                                  focusProps: T,
                                  children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : C
                      ? (0, i.jsxs)(g.D, {
                            className: ek.ef,
                            ...e,
                            onClick: _,
                            focusProps: T,
                            children: [
                                j(),
                                (0, i.jsx)("div", {
                                    className: ek.ap,
                                    children: (0, i.jsx)(eU._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(g.D, { className: ek.ef, onClick: p, focusProps: T, children: j() })),
                (0, i.jsx)("div", { ref: A, className: ek.jG, children: t })
            );
        };
    return C
        ? (0, i.jsx)("li", {
              className: ek.j$,
              onMouseEnter: _,
              onMouseLeave: S,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: A,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: m,
                  onRequestClose: S,
                  children: v,
              }),
          })
        : (0, i.jsx)("li", { className: ek.j$, children: v() });
}
function eL(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(734066),
    eB = n(274372),
    eG = n(710315),
    eV = n(696016);
function eQ(e) {
    let { onClose: t } = e,
        s = (0, eF.sw)(),
        { userStatusMenu: l } = eG.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        a = (0, c.bG)([eB.A], () => eB.A.getNewClipIds().length);
    return s && l
        ? (0, i.jsx)(ew, {
              action: "PRESS_CLIPS",
              icon: eM.x,
              label: em.intl.string(em.t.z2jK6X),
              trailing: a > 0 ? (0, i.jsx)(eO.hV, { count: a }) : null,
              onClick: () => {
                  t(),
                      (0, C.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("3215"),
                                  n.e("22471"),
                                  n.e("72823"),
                                  n.e("60049"),
                                  n.e("13922"),
                                  n.e("20287"),
                                  n.e("75842"),
                                  n.e("22266"),
                                  n.e("60249"),
                                  n.e("84783"),
                                  n.e("83952"),
                                  n.e("81202"),
                                  n.e("88990"),
                                  n.e("39894"),
                                  n.e("30920"),
                                  n.e("1962"),
                                  n.e("74049"),
                                  n.e("65722"),
                                  n.e("74068"),
                              ]).then(n.bind(n, 867487));
                              return (t) => (0, i.jsx)(e, { ...t });
                          },
                          { modalKey: eV.nm },
                      );
              },
          })
        : null;
}
var eW = n(480335),
    eH = n(31956),
    eq = n(361628),
    ez = n(744808),
    eK = n(282389),
    e$ = n(713517),
    eY = n(645507),
    eX = n(970931),
    eZ = n(990078),
    eJ = n(315710),
    e0 = n(408278),
    e1 = n(832248),
    e2 = n(462887),
    e3 = n(736653),
    e8 = n(439174),
    e5 = n(927578),
    e6 = n(112848),
    e4 = n(788868);
function e7() {
    let e = (0, e6.Xb)(),
        t = (0, e5.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = e4.sp.length - 1; t >= 0; t--) {
        let i = e4.VD[e4.sp[t]],
            s = new Date(e);
        if ((s.setMonth(e.getMonth() + i.tenureReqNumMonths), s.setHours(s.getHours() + 30), n > s.getTime()))
            if (n - s.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let e9 = {
        [e4.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [e4.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [e4.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [e4.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [e4.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [e4.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [e4.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [e4.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    te = {
        [e4.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [e4.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [e4.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [e4.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [e4.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [e4.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [e4.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [e4.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tt = n(682165);
let tn = s.lazy(() => Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)));
function ti() {
    let e = (0, c.bG)([eo.A], () => eo.A.useReducedMotion),
        t = (0, e1.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = e7(),
                t = (0, e2.M)((0, e3.Ay)());
            if (null == e) return null;
            let n = e9[e],
                i = te[e],
                s = {
                    currentBadge: (0, e8.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                l = e4.sp.indexOf(e);
            if (l > 0) {
                let e = e4.sp[l - 1],
                    n = e9[e];
                (s.prevBadge = (0, e8.e0)(e)), (s.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return s;
        })();
    return e || !t || null == n ? null : (0, i.jsx)(ts, { levelUpData: n });
}
function ts(e) {
    let { levelUpData: t } = e,
        n = s.useRef(null),
        l = s.useCallback(() => {
            e1.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        s.useEffect(() => l, [l]),
        (0, i.jsx)(eJ.O, {
            containerRef: n,
            children: (0, i.jsxs)("div", {
                className: tt.i,
                children: [
                    (0, i.jsx)("div", {
                        className: tt.b,
                        children: (0, i.jsx)(eZ.m, {
                            text: em.intl.string(em.t.cpT0Cq),
                            children: (0, i.jsx)(e0.K, {
                                icon: ee.P,
                                variant: "secondary",
                                size: "sm",
                                onClick: l,
                                "aria-label": em.intl.string(em.t.cpT0Cq),
                            }),
                        }),
                    }),
                    (0, i.jsx)(s.Suspense, { fallback: null, children: (0, i.jsx)(tn, { levelUpData: t }) }),
                ],
            }),
        })
    );
}
var tl = n(206835),
    ta = n(183555),
    tr = n(999291),
    to = n(975732),
    tu = n(718019),
    tc = n(694720),
    td = n(915614),
    tp = n(744753),
    tm = n(559506),
    th = n(646986),
    tf = n(349419),
    tg = n(946356),
    tx = n(878555),
    tA = n(624479),
    tC = n(206845),
    tE = n(957565),
    tT = n(427262),
    t_ = n(962352);
function tS(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: s } = (0, ta.NJ)();
    return tE.p5
        ? (0, i.jsx)(tC.A, {
              text: em.intl.string(em.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tT.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(t_.c, { [t_.R]: n }),
                      "aria-label": em.intl.string(em.t.y5MwJy),
                      children: (0, i.jsx)(tA.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var tj = n(983495),
    tv = n(442228),
    tN = n(253932),
    ty = n(290863),
    tR = n(351906),
    tI = n(562153),
    tb = n(661531),
    tM = n(477782),
    tO = n(628284),
    tU = n(695366),
    tP = n(363195),
    tk = n(889227),
    tD = n(287809),
    tw = n(954571),
    tL = n(429707),
    tF = n(274303),
    tB = n(994125),
    tG = n(347853),
    tV = n(652215),
    tQ = n(335020),
    tW = n(43105),
    tH = n(704824),
    tq = n(46225),
    tz = n(429913),
    tK = n(379848),
    t$ = n(633075),
    tY = n(735321),
    tX = n(667049),
    tZ = n(606758),
    tJ = n(495544),
    t0 = n(403362),
    t1 = n(518477);
function t2(e) {
    let { targetElementRef: t, onClose: n } = e,
        [l, a] = s.useState(!1),
        { trackUserProfileEditAction: r } = (0, ta.NJ)(),
        o = (0, c.bG)([tJ.default], () => tJ.default.getId()),
        u = (function () {
            let e,
                t,
                n = (0, c.bG)([tJ.default], () => tJ.default.getId()),
                i = (0, tX.A)(n),
                l = s.useMemo(() => i.filter((e) => e instanceof t$.R), [i]),
                a =
                    ((e = (0, eb.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    s.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                r = s.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                o = ((t = (0, tz.A)(r)), s.useMemo(() => t.filter(t0.Vq), [t])),
                { tokens: u, fetched: d } = (0, tH.j)(r),
                p = (0, tq.U9)(o);
            return s.useMemo(() => {
                if (null == a || null == u || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let i = u.find((e) => e.application.id === n.applicationId),
                        s = l.find((e) => e.applicationId === n.applicationId),
                        a = o.find((e) => e.id === n.applicationId),
                        r = p.find((e) => e.context.application.id === n.applicationId);
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
            }, [a, u, d, l, o, p]);
        })(),
        { analyticsLocations: d } = (0, U.Ay)();
    return null == u || 0 === u.length
        ? null
        : (0, i.jsx)(tK.Ay, {
              contentTypes: u.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: c } = e,
                      p = u.find((e) => e.dismissibleContent === s);
                  if (null == p) return null;
                  let m = "linked" === p.type,
                      h = () =>
                          (0, to.openUserProfileModal)({ userId: o, tabSection: t1.RP.WIDGETS }).then(() => {
                              c(ep.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(tW.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != p.config.editProfileUpsellImage
                              ? { type: "image", src: p.config.editProfileUpsellImage }
                              : void 0,
                      title: em.intl.format(em.t.TXDztH, { applicationName: p.application.name }),
                      body: m ? em.intl.string(em.t["63Kso0"]) : em.intl.string(em.t.HwXoeC),
                      onRequestClose: () => c(ep.i.USER_DISMISS),
                      actions: [
                          m
                              ? {
                                    text: em.intl.string(em.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            h()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new t$.R({ applicationId: p.application.id })),
                                                        void ((0, tY.Y5)(e),
                                                        r({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, tZ.XA)(t1.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => a(!1));
                                    },
                                    loading: l,
                                }
                              : {
                                    text: em.intl.string(em.t["DSJi3+"]),
                                    onClick: () => {
                                        p.authFlow.initiate({
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
var t3 = n(461213),
    t8 = n(818348),
    t5 = n(466573);
function t6() {
    let e = (0, c.bG)([t3.A], () => t3.A.getStatus()),
        t = (0, tT.MU)(e) ?? "",
        n = e === t8.cl.INVISIBLE || e === t8.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: t5.k,
        children: [
            (0, i.jsxs)(x.A, { tag: "div", children: [em.intl.string(em.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eZ.m, {
                    text: em.intl.string(em.t.L99HQm),
                    children: (0, i.jsx)(tU.E, {
                        size: "xs",
                        color: tb.A.colors.STATUS_WARNING,
                        "aria-label": em.intl.string(em.t.L99HQm),
                    }),
                }),
        ],
    });
}
var t4 = n(841595);
let t7 = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var t9 = n(501838),
    ne = n(760716),
    nt = n(821609),
    nn = n(915089),
    ni = n(13808);
function ns(e) {
    let {
            markAsDismissed: t,
            heading: n,
            subheading: l,
            children: r,
            height: o,
            className: u,
            contentClassName: c,
        } = e,
        d = (0, nn.GV)(),
        p = s.useRef(null),
        m = (0, er.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != p.current && p.current.focus();
            },
        });
    return (0, i.jsx)(y.animated.div, {
        className: a()(ni.kL, u),
        style: m,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: ni.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: ni.U1,
                    children: [
                        (0, i.jsx)(g.D, {
                            innerRef: p,
                            "aria-label": em.intl.string(em.t.WAI6xu),
                            className: ni.b,
                            onClick: () => {
                                t(ep.i.USER_DISMISS);
                            },
                            children: (0, i.jsx)(ee.P, { color: "currentColor" }),
                        }),
                        (0, i.jsx)(Z.D, { id: d, variant: "heading-lg/semibold", children: n }),
                    ],
                }),
                null != l && (0, i.jsx)(J.E, { variant: "text-md/normal", color: "text-subtle", children: l }),
                (0, i.jsx)(e_.Ip, {
                    className: ni.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(ni.gT, c), children: r }),
                }),
            ],
        }),
    });
}
var nl = n(973912),
    na = n(871123),
    nr = n(44724),
    no = n(501573);
function nu() {
    (0, nr.default)({ guildId: (0, na.zf)() });
}
function nc(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: s } = e,
        { analyticsLocations: l } = (0, U.Ay)([O.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(ns, {
              heading: em.intl.string(em.t["vy/61K"]),
              subheading: em.intl.string(em.t.tEee9t),
              markAsDismissed: s,
              className: no.Zj,
              contentClassName: no.hQ,
              height: 560,
              children: [
                  (0, i.jsx)(nl.A, {
                      userId: t,
                      analyticsLocations: l,
                      handleOpenUserProfileModal: n,
                      numWishlistItemsToRecommend: 9,
                      className: no.KN,
                  }),
                  (0, i.jsx)("div", {
                      className: no.UD,
                      children: (0, i.jsx)(nt.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text: em.intl.string(em.t.rg9FQp),
                          onClick: nu,
                      }),
                  }),
              ],
          });
}
function nd(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: l } = e,
        a = (function (e) {
            let { location: t } = e,
                n = (function (e) {
                    let { location: t } = e;
                    return t7.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, c.bG)([tD.default], () => tD.default.getCurrentUser()),
                l = (0, c.bG)([t4.A], () => (null != i ? t4.A.getFirstWishlistId(i.id) : null)),
                a = (0, ne.i)((e) => e.recommendationApplicationIds),
                o = (0, t9.rY)(),
                u = (0, t9.qx)();
            return s.useMemo(
                () => (null != a || (null == l && n) ? (0, r.uniq)([...(a ?? []), ...u, ...o]).sort() : []),
                [n, l, u, o, a],
            );
        })({ location: "AccountProfilePopoutUpsell" }),
        o = s.useMemo(() => {
            let e = [];
            return a.length > 0 && e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [a]);
    return (0, i.jsx)(tK.Ay, {
        contentTypes: o,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e;
            return null == l
                ? null
                : s === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(nc, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var np = n(927813),
    nm = n(146901),
    nh = n(827827);
let nf = [
        { duration: 15 * np.A.Millis.MINUTE, label: () => em.intl.string(em.t["8ot6gv"]) },
        { duration: np.A.Millis.HOUR, label: () => em.intl.string(em.t.UMWBZr) },
        { duration: 8 * np.A.Millis.HOUR, label: () => em.intl.string(em.t.EpAXPC) },
        { duration: np.A.Millis.DAY, label: () => em.intl.string(em.t["755t4q"]) },
        { duration: 3 * np.A.Millis.DAY, label: () => em.intl.string(em.t["f3/1ch"]) },
        { duration: void 0, label: () => em.intl.string(em.t["46dqJY"]) },
    ],
    ng = "forever";
function nx(e) {
    let { status: t, currentStatus: n, description: s } = e,
        l = t !== tV.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: nf.map((e) => {
                let { duration: s, label: l } = e;
                return (0, i.jsx)(
                    tM.Dr,
                    {
                        id: `${t}-${s}`,
                        label: l(),
                        action: () => (0, nh.A)({ nextStatus: t, prevStatus: n, durationMillis: s }),
                        dontCloseOnAction: !0,
                    },
                    s ?? ng,
                );
            }),
        });
    return (0, i.jsx)(tM.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: l,
        label: (0, tT.MU)(t),
        subtext: s,
        iconLeft: () => (0, i.jsx)(ej.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nh.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: l ? a : void 0,
    });
}
function nA(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nm._)(e);
    return "today" === t
        ? em.intl.formatToPlainString(em.t.ZxxHIO, { timeString: i })
        : em.intl.formatToPlainString(em.t["9OFjSe"], { dateString: n, timeString: i });
}
var nC = n(996988),
    nE = n(656884);
function nT(e) {
    let t,
        n,
        l,
        r,
        o,
        u,
        d,
        p,
        f,
        { currentUser: g, onClose: A, setPopoutRef: E, highlightBadge: T, openedAt: _, className: S } = e,
        j = __OVERLAY__,
        v = (0, tr.Ay)(g.id, void 0),
        { analyticsLocations: N } = (0, U.Ay)(O.A.USER_PROFILE_ACCOUNT_POPOUT),
        y = (0, ta.pb)({ layout: "ACCOUNT_POPOUT", userId: g.id, guildId: void 0 }),
        { ref: R, height: I } = (0, eI.Ay)(),
        { isHoveringOrFocusing: b, isHovering: M } = (0, e$.A)(R);
    s.useEffect(() => {
        E?.(R.current);
    }, [R, E]),
        s.useEffect(() => (e1.A.setState({ isOpen: !0 }), () => e1.A.setState({ isOpen: !1 })), []);
    let P = (0, c.bG)([ty.A], () => ty.A.getStatus(g.id)),
        k = nA(tN.CY.useSetting()),
        D = (0, c.bG)([tR.A], () => tR.A.hidePersonalInformation),
        w = (0, eX.kB)(),
        L = tN.Q_.useSetting(),
        F =
            ((t = tN.CY.useSetting()),
            (n = (0, eX.kB)()),
            (l = tN.Jr.useSetting()),
            (r = (e) => {
                let i = nA(t);
                if (P === e && null != i) return i;
                switch (e) {
                    case tV.clD.DND:
                        return n ? em.intl.string(em.t.day5A6) : em.intl.string(em.t["tq/fMK"]);
                    case tV.clD.INVISIBLE:
                        return em.intl.string(em.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (o = (0, i.jsx)(i.Fragment, {
                children: nf.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        tM.Dr,
                        {
                            id: `${P}-${t}`,
                            label: n(),
                            action: () => {
                                (0, eX.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? ng,
                    );
                }),
            })),
            (u = nx({ status: tV.clD.ONLINE, currentStatus: P })),
            (d = nx({ status: tV.clD.IDLE, currentStatus: P, description: r(tV.clD.IDLE) })),
            (p = nx({ status: tV.clD.DND, currentStatus: P, description: r(tV.clD.DND) })),
            (f = nx({ status: tV.clD.INVISIBLE, currentStatus: P, description: r(tV.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    u,
                    (0, i.jsx)(tM.bX, {}, "menu-separator-statuses"),
                    d,
                    p,
                    f,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(tM.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      tM.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: em.intl.string(em.t.gJRnwK),
                                          iconLeft: ev.a,
                                          leadingAccessory: { type: "icon", icon: ev.a },
                                          badge: { text: em.intl.string(em.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? em.intl.format(em.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
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
                                              (0, eX.ES)(!n);
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
            let t = (0, c.bG)([tD.default], () => tD.default.getCurrentUser()),
                n = (0, c.bG)([tR.A], () => tR.A.hidePersonalInformation),
                s = (0, c.bG)([tP.A], () => (0, e2.M)(tP.A.theme)),
                { multiAccountUsers: l } = (0, tB.K)(),
                a = l.map((l) => {
                    let a = new tk.A(l),
                        r = a.id === t?.id,
                        o = l.tokenStatus === tF.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        tM.Dr,
                        {
                            id: a.id,
                            focusedClassName: tQ.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: tQ.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": l.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: tQ.DD,
                                            children: [
                                                (0, i.jsx)(J.E, {
                                                    className: tQ.gE,
                                                    variant: "text-sm/normal",
                                                    children: tT.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(J.E, {
                                                        className: tQ.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(tO.y, {
                                                size: "sm",
                                                color: t
                                                    ? tb.A.unsafe_rawColors.WHITE.css
                                                    : tb.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? tb.A.unsafe_rawColors.BRAND_500.css
                                                        : tb.A.unsafe_rawColors.WHITE.css,
                                                className: tQ.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(tU.E, {
                                                color: tb.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? tb.A.unsafe_rawColors.BRAND_500.css
                                                        : tb.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: tQ.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, tG.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (tw.default.track(tV.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tV.JJy.USER_PROFILE },
                                        }),
                                        tL.Mx(n));
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
                            (0, i.jsx)(tM.bX, {}),
                            (0, i.jsx)(tM.Dr, {
                                id: "manage-accounts",
                                label: em.intl.string(em.t.WbFpq4),
                                action: () => {
                                    e?.(), (0, tG.A)();
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(A),
        G = (0, tl.A)({ analyticsLocations: N }),
        V = (0, e5.TW)(g),
        Q = s.useRef(null),
        W = s.useRef(null),
        H = (0, eq.A)(v?.profileFrame?.skuId, "UserProfileAccountPopout"),
        q = (0, eK.A)(v?.profileFrame?.skuId);
    (0, eH.A)({ skuId: v?.profileFrame?.skuId, openedAt: _, context: y, analyticsLocations: N });
    let z = s.useRef((0, e1.A)((e) => e.shouldRenderTenureLevelUp)),
        K = s.useMemo(() => (0, eY.A)(), []),
        [$, Y] = s.useState(!0);
    s.useEffect(() => {
        setTimeout(() => {
            Y(!1);
        }, 500);
    }, []);
    let X = (e) => {
            A?.(), (0, to.openUserProfileModal)({ customStatusPrompt: K, sourceAnalyticsLocations: N, ...y, ...e });
        },
        Z = v?.widgets != null && v.widgets.length > 0,
        ee = s.useCallback(() => {
            A();
        }, [A]),
        et = s.useCallback(() => {
            G(), ee();
        }, [G, ee]),
        en = (0, eb.QR)({ location: "UserProfileAccountPopout" }),
        ei = (0, eb.zd)({ location: "UserProfileAccountPopout" }),
        es = s.useId();
    return (0, i.jsx)(U.f5, {
        value: N,
        children: (0, i.jsx)(ta.of, {
            value: y,
            openedAt: _,
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
                        children: (0, i.jsx)(eC.H, { id: es, children: em.intl.string(em.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eC.F, {
                        children: [
                            (0, i.jsx)(nd, { displayProfile: v, handleOpenUserProfileModal: X, height: I }),
                            (0, i.jsxs)(tg.A, {
                                className: ek.BK,
                                user: g,
                                displayProfile: v,
                                themeType: nC.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nE.wx,
                                        children: [
                                            (0, i.jsx)(td.A, { user: g, displayProfile: v, themeType: nC.d.POPOUT }),
                                            (0, i.jsx)(tu.A, {
                                                user: g,
                                                displayProfile: v,
                                                themeType: nC.d.POPOUT,
                                                onOpenProfile: j ? void 0 : X,
                                            }),
                                            (0, i.jsx)(tj.A, {
                                                ref: Q,
                                                user: g,
                                                themeType: nC.d.POPOUT,
                                                onCloseProfile: A,
                                                prompt: K,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(e_.Ip, {
                                        className: ek.rf,
                                        style: { pointerEvents: $ ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tm.A, { userId: g.id }),
                                            (0, i.jsx)(tx.Ay, {
                                                className: ek.eF,
                                                user: g,
                                                displayName: tI.Ay.getName(void 0, null, g),
                                                onClickName: j ? void 0 : X,
                                                displayNameTrailing: (0, i.jsx)(tS, { user: g, isVisible: b }),
                                                pronouns: v?.pronouns,
                                                trailing: (0, i.jsx)(tc.A, {
                                                    displayProfile: v,
                                                    themeType: nC.d.POPOUT,
                                                    onClose: A,
                                                    shouldOpenBadgeTooltip: null != T ? (e) => e === T : void 0,
                                                    shouldGlowTenureBadge: z.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tp.A, { isPremiumUser: V, onInteraction: A }),
                                            (0, i.jsx)(tv.A, {
                                                user: g,
                                                bio: v?.bio,
                                                hidePersonalInformation: D,
                                                onClose: A,
                                            }),
                                            Z &&
                                                (0, i.jsx)(tf.A, {
                                                    user: g,
                                                    widgets: v?.widgets,
                                                    onOpenUserProfileModal: X,
                                                }),
                                            (0, i.jsx)(th.A, {
                                                user: g,
                                                currentUser: g,
                                                onOpenUserProfileModal: X,
                                                onClose: A,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ek.T_,
                                                children: [
                                                    (0, i.jsx)(tg.A.Overlay, {
                                                        className: ek.g0,
                                                        children: (0, i.jsxs)(eL, {
                                                            children: [
                                                                (0, i.jsx)(ew, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: em.intl.string(em.t.s5vZlQ),
                                                                    icon: eS.R,
                                                                    onClick: et,
                                                                    ref: W,
                                                                }),
                                                                (0, i.jsx)(ew, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(t6, {}),
                                                                    sublabel: null != k && k,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ej.nW, { status: P, size: 12 }),
                                                                    trailing:
                                                                        (w || P === tV.clD.DND) &&
                                                                        (0, i.jsx)(ev.a, { size: "xxs" }),
                                                                    renderSubmenu: eA.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eD, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ek.hQ,
                                                                                  "aria-label": em.intl.string(
                                                                                      em.t.E13trI,
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
                                                                                                              em.intl.string(
                                                                                                                  em.t[
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
                                                                (0, i.jsx)(eQ, { onClose: A }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tg.A.Overlay, {
                                                        className: ek.g0,
                                                        children: (0, i.jsxs)(eL, {
                                                            children: [
                                                                (0, i.jsx)(ew, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: ey.r,
                                                                    label: em.intl.string(em.t.oMNyYN),
                                                                    onClick: () => {
                                                                        A(), (0, tG.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eD, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": em.intl.string(em.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: B,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tE.p5 &&
                                                                    L &&
                                                                    (0, i.jsx)(ew, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eR.L,
                                                                        label: em.intl.string(em.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tE.C)(g.id), A();
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
                                        (0, i.jsx)(eW.A, { skuId: v.profileEffect.skuId, isHovering: M }),
                                    null != H && (0, i.jsx)(ez.A, { frame: H, layout: "ACCOUNT_POPOUT" }),
                                ],
                            }),
                            en && ei ? (0, i.jsx)(t2, { targetElementRef: W, onClose: A }) : null,
                            (0, i.jsx)(ti, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n_ = n(201805),
    nS = n(655116),
    nj = n(21973),
    nv = n(454719),
    nN = n(342296),
    ny = n(533488),
    nR = n(167579),
    nI = n(173660),
    nb = n(969341),
    nM = n(763827),
    nO = n(499156),
    nU = n(731854);
let nP = 2.5 * np.A.Millis.SECOND,
    nk = +np.A.Millis.HOUR;
var nD = n(205693),
    nw = n(485296);
let nL = 3 * np.A.Millis.SECOND,
    nF = +np.A.Millis.DAY;
var nB = n(616356),
    nG = n(734057),
    nV = n(629016),
    nQ = n(186111),
    nW = n(967198),
    nH = n(486020),
    nq = n(625494),
    nz = n(536194),
    nK = n(19575),
    n$ = n(994314),
    nY = n(485599),
    nX = n(626584),
    nZ = n(531685),
    nJ = n(259065),
    n0 = n(864386);
let n1 = new nX.A("DisplayNameStylesCoachmark");
function n2(e) {
    let { markAsDismissed: t, targetElementRef: n, children: l } = e,
        { analyticsLocations: a } = (0, U.Ay)(),
        r = (0, s.useRef)(null),
        o = (0, c.bG)([nZ.A], () => nZ.A.isFocused()),
        u = (0, s.useCallback)(() => {
            t(ep.i.TAKE_ACTION),
                (0, es.openUserSettings)(ei.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                    (0, nJ.L)({ analyticsLocations: a });
                });
        }, [t, a]),
        d = (0, s.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]);
    return (
        (0, s.useEffect)(() => {
            o && r.current?.paused ? r.current?.play().catch(n1.error) : o || r.current?.pause();
        }, [o]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                l,
                (0, i.jsx)(tW.A, {
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
                    title: em.intl.string(n0.default["1AE464"]),
                    body: [em.intl.string(n0.default.cNc1g9), em.intl.string(em.t["4JNXHG"])],
                    actions: [{ text: em.intl.string(em.t.uw9zI7), variant: "primary", onClick: u }],
                }),
            ],
        })
    );
}
var n3 = n(932001),
    n8 = n(45780),
    n5 = n(696451),
    n6 = n(71393),
    n4 = n(685073),
    n7 = n(228366);
let n9 = { lastSeenInfos: {} },
    ie = n9;
class it extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        ie = e ?? n9;
    }
    getState() {
        return ie;
    }
    getGuildLastSeenInfo(e) {
        return ie.lastSeenInfos[e] ?? null;
    }
}
let ii = new it(n7.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        ie.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        ie = n9;
    },
});
var is = n(116833),
    il = n(514661);
let ia = new nX.A("GuildTagAvailableCoachmark");
function ir(e) {
    let t = (0, c.bG)([n6.A], () => n6.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            n7.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: s, onAdoptTag: l, onEditProfile: a } = (0, il.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, n4.q0)(t))
        return ia.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: em.intl.string(em.t.jwEaiX), loading: s, onClick: l, variant: "primary" },
        { text: em.intl.string(em.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(tW.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: is.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: em.intl.formatToPlainString(em.t["m/Tc3n"], { guildName: t.name }),
                body: em.intl.string(em.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(ep.i.USER_DISMISS),
            }),
        ],
    });
}
function io(e) {
    let t = (0, c.bG)([n6.A], () => n6.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: s, onAdoptTag: l, onEditProfile: a } = (0, il.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, n4.q0)(t))
        return ia.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: em.intl.string(em.t.jwEaiX), loading: s, onClick: l, variant: "primary" },
        { text: em.intl.string(em.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(tW.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: is.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: em.intl.formatToPlainString(em.t.VFqnyU, { guildName: t.name }),
                body: em.intl.string(em.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(ep.i.USER_DISMISS),
            }),
        ],
    });
}
var iu = n(904481),
    ic = n(764231),
    id = n(425713);
function ip(e) {
    let { groupName: t, targetElementRef: n } = e,
        s = e7(),
        l = (0, c.bG)([eo.A], () => eo.A.useReducedMotion),
        a = (0, e1.A)((e) => e.isOpen),
        r = (0, iu.G)();
    return l || null == s || a || r
        ? null
        : (0, i.jsx)(tK.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e;
                  return (0, i.jsx)(im, {
                      recentlyLeveledTenureBadge: s,
                      markAsDismissed: l,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function im(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: l, shouldShow: a } = e,
        r = e4.sp.indexOf(t),
        o = (0, id.I)(e4.sp[r > 0 ? r - 1 : r]).ambient,
        u = (0, s.useCallback)(() => {
            n(ep.i.TAKE_ACTION),
                e1.A.setState({ shouldRenderTenureLevelUp: !0 }),
                nq._.dispatch(tV.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        c = (0, s.useCallback)(() => {
            n(ep.i.USER_DISMISS);
        }, [n]),
        d = e4.VD[t],
        p = em.intl.formatToPlainString(em.t.ewkaVR, {
            timeMilestone: (0, ic.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        m = [{ text: em.intl.string(em.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(tW.A, {
        targetElementRef: l,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: em.intl.string(em.t.VoDxsV),
        body: p,
        actions: m,
    });
}
function ih(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n_.c9)(),
        s = null != e.targetElementRef.current && t && n,
        [l, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, n8.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tV.dJq),
                s = (0, c.bG)([n6.A, tD.default, n5.Ay], () => {
                    if (null === e) return !1;
                    let t = n6.A.getGuild(e);
                    if (void 0 === t || !(0, n4.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = tD.default.getCurrentUser();
                    if (
                        void 0 === n ||
                        (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                    )
                        return !1;
                    let i = n5.Ay.getMember(e, n.id);
                    return null != i && !i.isPending;
                }, [e]);
            return (0, n3.ww)(s && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tV.eGj);
        })(e.guildId, { shouldShow: s }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                s = i?.identityGuildId ?? null,
                l = (0, c.bG)([ii], () => (null === s ? null : ii.getGuildLastSeenInfo(s))),
                a = (0, c.bG)([n6.A], () => n6.A.getGuild(s)?.profile?.tag),
                r = null != a && i?.identityGuildId === s && i?.tag === null,
                o = null != s && l?.tag === a,
                u = null !== s && r && !o;
            return (0, n3.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: s });
    return s
        ? l === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(io, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(ir, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ip, { groupName: ep.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(tK.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: ep.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: s } = t;
                                return n === d.M.DISPLAY_NAME_STYLES_COACHMARK
                                    ? (0, i.jsx)(n2, {
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
var ig = n(615675),
    ix = n(900797),
    iA = n(847374),
    iC = n(348858),
    iE = n(617354),
    iT = n(206018),
    i_ = n(42473),
    iS = n(490704),
    ij = n(967194);
function iv(e) {
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
        p = t || n,
        {
            Component: m,
            play: h,
            events: { onMouseEnter: g, onMouseLeave: x },
        } = (0, iC.I)(p ? "undeafen" : "deafen"),
        A = n ? ig.T : m,
        { name: C } = (0, ex.x5)(nU.oh.AUDIO_OUTPUT),
        E = (0, iE.A)(t, n, l),
        { analyticsLocations: T } = (0, U.Ay)(O.A.AUDIO_OUTPUT_BUTTON),
        _ = s.useRef(null);
    return (
        s.useEffect(() => () => h(), [p, h]),
        (0, i.jsx)(U.f5, {
            value: T,
            children: (0, i.jsx)(f.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(U.f5, {
                            value: T,
                            children: (0, i.jsx)(iT.A, {
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
                        m = d ? ix.t : iA.a;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: a()(iS.Lh, { [iS.v8]: p, [iS.q6]: d }),
                        children: [
                            (0, i.jsx)(i_.A, {
                                "aria-checked": p,
                                "aria-label": em.intl.string(em.t.wjcRFX),
                                className: iS.eT,
                                disabled: l,
                                icon: (0, i.jsx)(A, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: p ? tb.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: p ? ij.o : void 0,
                                innerClassName: a()({ [ij.T]: n }),
                                onClick: r,
                                onContextMenu: s,
                                onMouseEnter: g,
                                onMouseLeave: x,
                                plated: null != u,
                                redGlow: p,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(i_.A, {
                                className: a()(iS.UT, { [iS.q6]: d }),
                                disabled: l,
                                icon: (0, i.jsx)(m, {
                                    className: iS.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: p ? tb.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != u,
                                redGlow: p,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? em.intl.formatToPlainString(em.t["f+DDY/"], { outputDeviceName: C })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? em.intl.format(em.t["f+DDY/"], { outputDeviceName: C })
                                    : em.intl.string(em.t.aA4Vce),
                                "aria-label": c
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
var iN = n(666654),
    iy = n(523875),
    iR = n(993719);
let iI = {};
class ib extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return iI[e] ?? !1;
    }
}
let iM = new ib(n7.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        iI[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        iI[t] = !1;
    },
});
var iO = n(362823),
    iU = n(980923),
    iP = n(350535),
    ik = n(224585),
    iD = n(949341),
    iw = n(973324);
function iL(e) {
    let t,
        {
            selfMute: n,
            serverMute: l,
            suppress: r,
            awaitingRemote: o,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: p,
            onClick: m,
            nameplate: h,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: x,
            shouldShowInputDeviceChangedTooltip: A,
            shouldShowPTTJoinTooltip: C,
            dismissTooltips: E,
            speaking: T,
        } = e,
        { showPTTIconIndicator: _ } = nO.A.useConfig({ location: "MicrophoneButton" }),
        S = (0, c.bG)([nb.Ay], () => nb.Ay.getMode() === nU.TB.PUSH_TO_TALK),
        j = (0, c.bG)([nb.Ay], () => nb.Ay.getSettings().modeOptions.shortcut),
        v = (0, c.bG)([iM], () => iM.getIsTutorialActive(iO.v.MUTE_TUTORIAL)),
        N = (0, c.bG)([nM.A], () => null != nM.A.getChannelId()),
        { name: y } = (0, ex.x5)(nU.oh.AUDIO_INPUT),
        { enabledInputProfiles: R } = (0, ny.d)({ location: "MicrophoneButton" }),
        I = s.useRef(null),
        b = n || r || l,
        M = (0, iy.L)(b ? "unmute" : "mute"),
        { analyticsLocations: P } = (0, U.Ay)(O.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: D, play: w } = M,
        L = l || r ? iN.O : k;
    s.useEffect(() => () => w(), [b, w]);
    let F = (0, iU.A)(n, l, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: em.intl.string(em.t["29gnR4"]), tooltipForceOpen: !0 }
        : C || x
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: em.intl.format(em.t.c1qUOQ, { keybind: iP.dI(j).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let G = _ && S && N,
        V = b ? tb.A.colors.ICON_VOICE_MUTED : "currentColor",
        Q = s.useCallback(() => {
            m(), v && iR.N(iO.v.MUTE_TUTORIAL);
        }, [m, v]);
    return (0, i.jsxs)(U.f5, {
        value: P,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(U.f5, {
                            value: P,
                            children: (0, i.jsx)(iT.A, {
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
                        r = l ? ix.t : iA.a;
                    return (0, i.jsxs)("div", {
                        ref: I,
                        className: a()(iS.Lh, { [iS.v8]: b, [iS.q6]: l }),
                        children: [
                            (0, i.jsx)(i_.A, {
                                "aria-checked": b,
                                "aria-label": em.intl.string(em.t.w4m945),
                                className: iS.eT,
                                disabled: o,
                                icon: (0, i.jsx)(L, { size: "custom", width: 20, height: 20, color: V, className: u }),
                                onClick: Q,
                                onContextMenu: s,
                                onMouseEnter: () => {
                                    d(), D.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    p(), D.onMouseLeave();
                                },
                                plated: null != h,
                                redGlow: b,
                                role: "switch",
                                ...t,
                                children: G ? (0, i.jsx)("div", { className: a()(iD.U, { [iD.z]: T }) }) : null,
                            }),
                            (0, i.jsx)(i_.A, {
                                "aria-label": A
                                    ? em.intl.formatToPlainString(em.t["18wnuD"], { inputDeviceName: y })
                                    : em.intl.string(em.t.fRzCbB),
                                className: a()(iS.UT, { [iS.q6]: l }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: iS.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: V,
                                }),
                                onClick: s,
                                onContextMenu: s,
                                onMouseEnter: d,
                                onMouseLeave: p,
                                plated: null != h,
                                redGlow: b,
                                tooltipType: A ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: A,
                                tooltipPositionKey: A
                                    ? em.intl.formatToPlainString(em.t["18wnuD"], { inputDeviceName: y })
                                    : void 0,
                                tooltipShouldShow: !l,
                                tooltipText: A
                                    ? em.intl.format(em.t["18wnuD"], { inputDeviceName: y })
                                    : em.intl.string(em.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(tW.A, {
                targetElementRef: I,
                shouldShow: v,
                graphic: { type: "image", src: iw.A },
                onRequestClose: () => {
                    iR.N(iO.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: em.intl.string(ik.default.VG4zAf),
                body: em.intl.string(ik.default["8VIRzR"]),
            }),
        ],
    });
}
var iF = n(935399),
    iB = n(505312),
    iG = n(625903),
    iV = n(848847),
    iQ = n(88001),
    iW = n(466919),
    iH = n(438705);
let iq = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: l } = e,
        a = s.useCallback(() => {
            l(), (0, es.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
        }, [l]);
    return (0, i.jsx)(tW.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: iH },
        shouldShow: n,
        title: em.intl.format(iW.default.bx8sR9, { premiumGroupProductName: (0, iQ.DP)() }),
        body: em.intl.format(iW.default.Pw4OFZ, { premiumGroupProductName: (0, iQ.DP)() }),
        onRequestClose: l,
        actions: [{ text: em.intl.string(iW.default.DD26QR), onClick: a }],
    });
};
var iz = n(873298),
    iK = n(840387);
function i$(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        l = (0, iK.Z)(),
        a = tN.KP.useSetting(),
        r = l && a !== iz.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, s.useCallback)(() => {
            t(ep.i.TAKE_ACTION), (0, es.openUserSettings)(ei.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        u = (0, s.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]),
        c = r
            ? a === iz.KP.FRIENDS_ONLY
                ? em.intl.string(em.t["/hogEy"])
                : em.intl.string(em.t["6hEfm1"])
            : em.intl.string(em.t.bnNxW1);
    return (0, i.jsx)(tW.A, {
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
        title: em.intl.string(em.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: em.intl.string(em.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
function iY(e) {
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
        p = s.useRef(null),
        [m, h] = s.useState(!1);
    (0, iF.Ay)(() => {
        let e = () => h(!0);
        return (
            nq._.subscribe(tV.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                nq._.unsubscribe(tV.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = s.useCallback(() => {
        h(!1), a();
    }, [a]);
    t = null != l ? em.intl.formatToPlainString(em.t.Gzh6ZP, { webBuildOverride: l.id }) : em.intl.string(em.t.cduTBL);
    let g = iG.Z,
        x = (0, iB.w)();
    return (
        (g = null != l ? iV.H : x.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i_.A, {
                    ref: p,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: r,
                    "aria-label": em.intl.string(em.t.cduTBL),
                    icon: (0, i.jsx)(g, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...x.events,
                    plated: null != c,
                }),
                (0, i.jsx)(iq, { targetElementRef: p, shouldShow: m, onDismiss: () => h(!1) }),
                (0, i.jsx)(tK.Ay, {
                    contentTypes: o,
                    groupName: ep.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.PRIVATE_PROFILE_COACHMARK
                            ? (0, i.jsx)(i$, { markAsDismissed: n, targetElementRef: p })
                            : null;
                    },
                }),
            ],
        })
    );
}
var iX = n(489902);
let iZ = nK.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    iJ = 2.5 * np.A.Millis.SECOND,
    i0 = 2 * np.A.Millis.MINUTE,
    i1 = 2 * np.A.Millis.MINUTE,
    i2 = 5 * np.A.Millis.SECOND;
function i3(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: l = -1 / 0,
            streaming: r,
            currentUser: o,
            status: u,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: p,
            nameplate: m,
            avatarDecoration: x,
            "data-jump-section": A,
        } = e,
        C = s.useRef(null),
        E = t ?? C,
        _ = (0, nH.F_)({ avatarDecoration: x, size: (0, V.Te)(h._3.SIZE_32) }),
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
                (0, j.A)(() => a(!0), 750),
                s.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    };
                    return (
                        nq._.subscribe(tV.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            nq._.unsubscribe(tV.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: l ? n : void 0, setHighlightBadge: i }
            );
        })(),
        R = (0, W.K)(m);
    return null == o
        ? null
        : (0, i.jsx)(T.A, {
              object: tV.ZSU.AVATAR,
              children: (0, i.jsx)(nN.A, {
                  user: o,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, nv.A)(o.id, o.getAvatarURL(void 0, nN.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: s } = e;
                      return (0, i.jsx)(nT, {
                          currentUser: o,
                          highlightBadge: N,
                          openedAt: t,
                          onClose: () => {
                              n?.();
                          },
                          setPopoutRef: s,
                          className: iX.dI,
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
                          className: a()(iX.Q9, { [iX.ZQ]: null != m }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": em.intl.string(em.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: iX.$n,
                                  "data-jump-section": A,
                              }),
                              (0, i.jsx)(iZ, {
                                  size: h._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: _,
                                  status: r ? tV.clD.STREAMING : u,
                                  isSpeaking: n,
                                  voiceDb: l,
                                  className: iX.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: iX.oM, children: p(S) }),
                          ],
                      });
                  },
              }),
          });
}
class i8 extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new p.Ep();
    speakingWhilePTTTooltipTimeout = new p.Ep();
    speakingWhilePTTInactiveBackoff = new u.A(i1, null, !1);
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
        (0, L.A)(e, t, tV.JJy.ACCOUNT_PANEL), (0, F.X)(O.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, w.A)(e, tV.JJy.ACCOUNT_PANEL), (0, F.X)(O.A.ACCOUNT, F.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            nM.A.isConnected() ? (0, es.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL) : (0, es.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("63397"),
                    n.e("78401"),
                    n.e("72823"),
                    n.e("45235"),
                    n.e("40841"),
                    n.e("52204"),
                    n.e("63635"),
                    n.e("51404"),
                    n.e("60049"),
                    n.e("92652"),
                    n.e("98042"),
                    n.e("13709"),
                    n.e("57948"),
                    n.e("69273"),
                    n.e("25738"),
                    n.e("63941"),
                    n.e("63009"),
                    n.e("84580"),
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
                    n.e("22810"),
                    n.e("33957"),
                    n.e("59204"),
                    n.e("75058"),
                    n.e("23574"),
                    n.e("24414"),
                    n.e("38559"),
                    n.e("80287"),
                    n.e("20524"),
                    n.e("6619"),
                    n.e("5007"),
                    n.e("79093"),
                    n.e("28510"),
                    n.e("90673"),
                    n.e("36613"),
                    n.e("3840"),
                    n.e("81579"),
                    n.e("4981"),
                    n.e("35392"),
                    n.e("97137"),
                    n.e("23740"),
                    n.e("24211"),
                    n.e("15453"),
                    n.e("92510"),
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
                    n.e("55411"),
                    n.e("93103"),
                    n.e("58337"),
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
                    n.e("75842"),
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
                    n.e("22266"),
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
                    n.e("48295"),
                    n.e("60249"),
                    n.e("39171"),
                    n.e("37021"),
                    n.e("21049"),
                    n.e("36564"),
                    n.e("80436"),
                    n.e("71268"),
                    n.e("95370"),
                    n.e("97784"),
                    n.e("50033"),
                    n.e("10014"),
                    n.e("84783"),
                    n.e("33416"),
                    n.e("83952"),
                    n.e("10567"),
                    n.e("37752"),
                    n.e("3217"),
                    n.e("47678"),
                    n.e("63645"),
                    n.e("5557"),
                    n.e("52229"),
                    n.e("44780"),
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
                    n.e("81202"),
                    n.e("38056"),
                    n.e("26001"),
                    n.e("36926"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("8018"),
                    n.e("6841"),
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
                    n.e("39894"),
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
                    let { enabledInputProfiles: n } = (0, ny.d)({ location: "Account" });
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > i0;
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
                      this.speakingWhileMutedTooltipTimeout.start(iJ, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(iJ, () =>
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
                    (0, i.jsx)(x.A, { children: tT.Ay.humanizeStatus(l) }),
                    (0, i.jsx)(N.A, {
                        user: s,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: iX.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tV.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(x.A, { children: tT.Ay.humanizeStatus(l) }),
                      (0, i.jsx)(z.A, { activity: o, emojiClassName: iX.Zg, className: iX.WO }),
                  ],
              })
            : null != l && l !== tV.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, i.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(b, { text: tT.Ay.humanizeStatus(l) }),
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
                          className: iX.eW,
                          children: (0, i.jsx)(nY.A, {
                              className: a()({ [iX.e8]: null != e }),
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
                          className: iX.XP,
                          children: (0, i.jsx)(n$.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(ih, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(i3, {
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
                                  className: a()(iX.kL, { [iX.UG]: null != n, [iX.bc]: !s, [iX.G5]: l }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(q.A, { nameplate: t, hovered: r, placement: H.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(i5, {
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
function i5(e) {
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
            handleMouseLeaveMute: p,
            handleToggleSelfDeaf: m,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: x,
            handleOpenSettingsContextMenu: A,
            dismissibleContents: C,
            nameplate: E,
            accountContainerRef: T,
            deviceChangedTooltipType: _,
            shouldShowPTTJoinTooltip: S = !1,
            dismissTooltips: j,
            speaking: v,
        } = e,
        N = (0, W.K)(E);
    return (0, i.jsxs)("div", {
        className: iX.Uo,
        style: N,
        children: [
            (0, i.jsx)(iL, {
                accountContainerRef: T,
                selfMute: n,
                serverMute: l,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: d,
                onMouseLeave: p,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != E ? iX.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === _,
                shouldShowSpeakingWhilePTTTooltip: u,
                shouldShowPTTJoinTooltip: S,
                dismissTooltips: j,
                speaking: v,
            }),
            (0, i.jsx)(iv, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: m,
                onContextMenu: g,
                awaitingRemote: s,
                iconForeground: null != E ? iX.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === _,
                dismissTooltips: j,
            }),
            (0, i.jsx)(iY, {
                webBuildOverride: c,
                onClick: x,
                onContextMenu: A,
                dismissibleContents: C.settings,
                iconForeground: null != E ? iX.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function i6(e) {
    let t = (0, c.bG)([nM.A], () => null != nM.A.getChannelId()),
        n = (0, ex.Py)(e),
        i = s.useRef(new p.Ep()),
        [l, a] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(i2, () => {
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
function i4() {
    let e = (0, c.bG)([tD.default], () => tD.default.getCurrentUser()),
        t = (0, c.bG)([tJ.default], () => tJ.default.getId()),
        {
            activities: n,
            streaming: l,
            status: a,
        } = (0, c.cf)([t3.A], () => {
            let e = t3.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tV.$pd.STREAMING;
                    }),
                status: t3.A.getStatus(),
            };
        }),
        r = (0, c.bG)([nB.A], () => nB.A.getAnyStreamForUser(t)),
        u = (0, _.A)({ userId: t }),
        m = (0, c.bG)([nw.A], () => nw.A.getVoiceVolume(t)),
        h = tT.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, c.bG)([nM.A, nG.A], () => {
            let e = nM.A.getChannelId();
            return null != e ? nG.A.getChannel(e) : null;
        }),
        { mute: g, selfMute: x, suppress: A } = (0, nI.A)(f),
        { selfDeaf: E, deaf: T } = (0, nR.A)(f),
        j = (0, c.bG)([P.A], () => ((0, k.kK)() ? P.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        v = (0, c.bG)([nb.Ay], () => nb.Ay.getSpeakingWhileMuted()),
        N = (0, c.bG)([D.A], () => D.A.isFullscreenInContext()),
        y = (0, c.bG)([nQ.A], () => nQ.A.hasLayers()),
        R = (0, C.useModalsStore)(C.hasAnyModalOpenSelector) || y || nz.P.isDisallowPopupsSet() || N,
        I = (0, c.bG)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        b = (0, c.bG)([nW.A], () => nW.A.getGuildId()),
        M = e?.avatarDecoration,
        w = (0, G.A)(M),
        L = tT.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, U.Ay)(O.A.ACCOUNT),
        B = (0, Q.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: V } = (0, n_.c9)(),
        W = (0, c.bG)([nS.A, tD.default, nV.A], () => {
            let e,
                t = nS.A.getSyncingWith(),
                n = nS.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(nV.A.getParty(e) ?? []))
                        .map((e) => tD.default.getUser(e))
                        .filter(t0.Vq)
                        .value()),
                i.length > 1
            );
        }),
        H = { avatar: [], settings: [] },
        q = (0, nj.lX)("AccountCoachmark");
    !R && (H.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK), q && H.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: z, dismissTooltip: K } = i6(nU.oh.AUDIO_INPUT),
        { shouldShowTooltip: $, dismissTooltip: Y } = i6(nU.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: Z, dismissTooltip: J } = (function () {
            let [e, t] = s.useState(!1),
                n = (0, c.bG)([nb.Ay], () => nb.Ay.getMode() === nU.TB.PUSH_TO_TALK),
                i = (0, c.bG)(
                    [nM.A],
                    () => null != nM.A.getChannelId() && (nM.A.getDuration() ?? Number.MAX_VALUE) < nP,
                ),
                [l, a] = s.useState(!1),
                { showPTTJoinTooltip: r } = nO.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = s.useRef(new p.Ep()),
                u = s.useRef(new p.Ep());
            s.useEffect(() => {
                if (i && n && !e) {
                    if ((nO.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        u.current.start(nk, () => {
                            t(!1);
                        }),
                        o.current.start(nP, () => {
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
            let { showPTTSpeakingIndicator: e } = nO.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = s.useState(!1),
                i = (0, c.bG)([nb.Ay], () => nb.Ay.getMode() === nU.TB.PUSH_TO_TALK),
                l = (0, c.bG)([nM.A], () => nM.A.getRTCConnectionId()),
                a = (0, c.bG)([nb.Ay], () => {
                    let e = nb.Ay.getModeOptions().updatedAt;
                    return null != e && Date.now() - e < nF;
                }),
                r = s.useRef(new p.Ep());
            return (
                s.useEffect(() => {
                    n(!1);
                }, [l]),
                s.useEffect(() => {
                    let t = 0,
                        s = r.current;
                    function o(e, i) {
                        let l = (i & nU.ME.VOICE) === nU.ME.VOICE,
                            a = nw.A.isCurrentUserPTTActive();
                        l && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              s.start(nL, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != l && nb.Ay.getMediaEngine().on(nD.bg.VoiceActivity, o),
                        () => {
                            nb.Ay.getMediaEngine().removeListener(nD.bg.VoiceActivity, o), s.stop();
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
        children: (0, i.jsx)(i8, {
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
            voiceDb: m,
            speakingWhileMuted: v,
            speakingWhilePTTInactive: ee,
            status: a,
            streaming: l,
            suppress: A,
            webBuildOverride: j,
            awaitingRemote: I,
            nameplate: B,
            selectedGuildId: b,
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
