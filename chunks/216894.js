n.d(t, { g: () => i9, A: () => i6 }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    c = n(158390),
    u = n(17928),
    d = n(554146),
    p = n(451988),
    h = n(97808),
    m = n(778712),
    _ = n(922016),
    f = n(939249),
    g = n(140735),
    A = n(312138);
if (21552 == n.j) var x = n(192308);
var E = n(442433),
    C = n(820284),
    T = n(717558),
    S = n(964486),
    b = n(220839),
    v = n(397244),
    j = n(729551),
    I = n(487514),
    y = n(866323),
    R = n(449450);
function N(e) {
    let { text: t } = e,
        n = (0, y.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: R.k,
        children: n((e, t) => (0, i.jsx)(I.animated.div, { className: R.H, style: e, children: t })),
    });
}
var M = n(29160),
    U = n(793574),
    O = n(688810),
    k = n(521502),
    P = n(380610),
    w = n(313961),
    L = n(18235),
    D = n(183184),
    F = n(384059),
    B = n(480890),
    G = n(601255),
    V = n(562819),
    W = n(449582),
    Q = n(351952),
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
    ec = n(993843);
let eu = { mass: 10, tension: 550, friction: 140 };
function ed(e) {
    let { className: t, pageMultiplier: n } = e,
        l = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
        [r, c] = s.useState({ x: 0, y: 0 }),
        d = s.useMemo(
            () =>
                o().throttle((e) => {
                    l || c({ x: (window.innerWidth - e.pageX * n) / 90, y: (window.innerHeight - e.pageY * n) / 90 });
                }, 20),
            [n, l],
        );
    s.useEffect(() => (window.addEventListener("mousemove", d), () => window.removeEventListener("mousemove", d)), [d]);
    let [p, h] = (0, er.z)(() => ({ x: 0, y: 0, config: eu }));
    return (
        s.useEffect(() => {
            h({ x: r.x, y: r.y });
        }, [r.x, r.y, h]),
        (0, i.jsx)(I.animated.div, {
            style: { transform: (0, I.to)([p.x, p.y], (e, t) => `translate3d(${e}px, ${t}px, 0)`) },
            className: a()(ec.T, t),
        })
    );
}
var ep = n(49999),
    eh = n(985018),
    em = n(275883);
function e_(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: s } = e,
        l = ea.A.useIsEligible(),
        a = (0, et.JZ)(t),
        r = null != n,
        o = null != s ? { color: s } : void 0,
        { analyticsLocations: c } = (0, O.Ay)(U.A.HOLIDAY_COACHMARK),
        u = (e) => {
            (0, et.Dr)(t, { dismissAction: e });
        },
        d = () => {
            (0, es.openUserSettings)(ei.X.NOTIFICATIONS_PANEL, { analyticsLocations: c }), u(ep.i.TAKE_ACTION);
        };
    return l && !a
        ? (0, i.jsx)(en.Ay, {
              children: (0, i.jsxs)("div", {
                  className: em.iE,
                  style: { backgroundColor: r ? n : void 0 },
                  children: [
                      !r &&
                          (0, i.jsxs)("div", {
                              className: em.o5,
                              children: [
                                  (0, i.jsx)(ed, { className: em.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: em.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: em.c8 }),
                      (0, i.jsxs)("div", {
                          className: em.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(Z.D, {
                                          variant: "heading-md/bold",
                                          color: null != o ? void 0 : "always-white",
                                          style: o,
                                          children: eh.intl.string(eh.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(J.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: eh.intl.format(eh.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      f.D,
                                                      {
                                                          tag: "span",
                                                          className: em.nf,
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
                              (0, i.jsx)(f.D, {
                                  className: em.l2,
                                  onClick: () => u(ep.i.USER_DISMISS),
                                  children: (0, i.jsx)(ee.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function ef() {
    return null == el.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(e_, {
              dismissibleContent: el.A.coachmarkDismissibleContent,
              backgroundColor: el.A.coachmarkBackgroundColor,
              specialTextColor: el.A.coachmarkSpecialTextColor,
          });
}
var eg = n(74848),
    eA = n(607399),
    ex = n(707554),
    eE = n(224640),
    eC = n(305866),
    eT = n(364522),
    eS = n(22231),
    eb = n(133171),
    ev = n(780338);
if (21552 != n.j) var x = n(192308);
var ej = n(550079),
    eI = n(26137),
    ey = n(473935),
    eR = n(765671),
    eN = n(457965),
    eM = n(176781),
    eU = n(777666),
    eO = n(320448),
    ek = n(993401),
    eP = n(447349);
function ew(e) {
    return (0, i.jsx)("div", {
        className: eP.wE,
        children: (0, i.jsx)(ej.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eL(e) {
    let { action: t, onClick: n, icon: l, label: a, sublabel: r, trailing: o, renderSubmenu: c, ref: u } = e,
        d = null != n,
        p = (0, ek.rE)({ action: t, onClick: n }),
        [h, m] = s.useState(!1),
        g = s.useRef(null),
        A = u ?? g,
        x = null != c,
        E = x && d,
        C = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
        T = s.useCallback(() => {
            m(!0);
        }, []),
        S = s.useCallback(() => {
            m(!1);
        }, []),
        b = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: eP.iA,
                        children: (0, i.jsx)(l, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: eP.$H,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(J.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eP.W1,
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
                              (0, i.jsx)(f.D, {
                                  className: eP.ef,
                                  onClick: p,
                                  focusProps: { offset: { ...C.offset, right: 0 } },
                                  children: b(),
                              }),
                              (0, i.jsx)(f.D, {
                                  className: eP.ap,
                                  "aria-label": eh.intl.string(eh.t.PdRCRg),
                                  ...e,
                                  onClick: T,
                                  focusProps: C,
                                  children: (0, i.jsx)(eO._, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      })
                    : x
                      ? (0, i.jsxs)(f.D, {
                            className: eP.ef,
                            ...e,
                            onClick: T,
                            focusProps: C,
                            children: [
                                b(),
                                (0, i.jsx)("div", {
                                    className: eP.ap,
                                    children: (0, i.jsx)(eO._, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        })
                      : (0, i.jsx)(f.D, { className: eP.ef, onClick: p, focusProps: C, children: b() })),
                (0, i.jsx)("div", { ref: A, className: eP.jG, children: t })
            );
        };
    return x
        ? (0, i.jsx)("li", {
              className: eP.j$,
              onMouseEnter: T,
              onMouseLeave: S,
              children: (0, i.jsx)(_.Y, {
                  targetElementRef: A,
                  spacing: 0,
                  renderPopout: c,
                  shouldShow: h,
                  onRequestClose: S,
                  children: v,
              }),
          })
        : (0, i.jsx)("li", { className: eP.j$, children: v() });
}
function eD(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eF = n(734066),
    eB = n(274372),
    eG = n(710315),
    eV = n(696016);
function eW(e) {
    let { onClose: t } = e,
        s = (0, eF.sw)(),
        { userStatusMenu: l } = eG.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        a = (0, u.bG)([eB.A], () => eB.A.getNewClipIds().length);
    return s && l
        ? (0, i.jsx)(eL, {
              action: "PRESS_CLIPS",
              icon: eM.x,
              label: eh.intl.string(eh.t.z2jK6X),
              trailing: a > 0 ? (0, i.jsx)(eU.hV, { count: a }) : null,
              onClick: () => {
                  t(),
                      (0, x.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([n.e("74068"), n.e("41120")]).then(
                                  n.bind(n, 867487),
                              );
                              return (t) => (0, i.jsx)(e, { ...t });
                          },
                          { modalKey: eV.nm },
                      );
              },
          })
        : null;
}
var eQ = n(480335),
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
    e9 = n(439174),
    e5 = n(927578),
    e4 = n(112848),
    e6 = n(788868);
function e8() {
    let e = (0, e4.Xb)(),
        t = (0, e5.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = e6.sp.length - 1; t >= 0; t--) {
        let i = e6.VD[e6.sp[t]],
            s = new Date(e);
        if ((s.setMonth(e.getMonth() + i.tenureReqNumMonths), s.setHours(s.getHours() + 30), n > s.getTime()))
            if (n - s.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let e7 = {
        [e6.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [e6.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [e6.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [e6.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [e6.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [e6.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [e6.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [e6.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    te = {
        [e6.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [e6.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [e6.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [e6.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [e6.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [e6.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [e6.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [e6.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tt = n(682165);
let tn = s.lazy(() => n.e("24832").then(n.bind(n, 748579)));
function ti() {
    let e = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
        t = (0, e1.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = e8(),
                t = (0, e2.M)((0, e3.Ay)());
            if (null == e) return null;
            let n = e7[e],
                i = te[e],
                s = {
                    currentBadge: (0, e9.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                l = e6.sp.indexOf(e);
            if (l > 0) {
                let e = e6.sp[l - 1],
                    n = e7[e];
                (s.prevBadge = (0, e9.e0)(e)), (s.prevBadgeTextGradient = t ? n?.dark : n?.light);
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
                            text: eh.intl.string(eh.t.cpT0Cq),
                            children: (0, i.jsx)(e0.K, {
                                icon: ee.P,
                                variant: "secondary",
                                size: "sm",
                                onClick: l,
                                "aria-label": eh.intl.string(eh.t.cpT0Cq),
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
    tc = n(718019),
    tu = n(694720),
    td = n(915614),
    tp = n(744753),
    th = n(559506),
    tm = n(646986),
    t_ = n(349419),
    tf = n(946356),
    tg = n(878555),
    tA = n(624479),
    tx = n(206845),
    tE = n(957565),
    tC = n(427262),
    tT = n(962352);
function tS(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: s } = (0, ta.NJ)();
    return tE.p5
        ? (0, i.jsx)(tx.A, {
              text: eh.intl.string(eh.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tC.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(f.D, {
                      ...e,
                      className: a()(tT.c, { [tT.R]: n }),
                      "aria-label": eh.intl.string(eh.t.y5MwJy),
                      children: (0, i.jsx)(tA.T, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var tb = n(983495),
    tv = n(442228),
    tj = n(253932),
    tI = n(290863),
    ty = n(351906),
    tR = n(562153),
    tN = n(661531),
    tM = n(477782),
    tU = n(628284),
    tO = n(695366),
    tk = n(363195),
    tP = n(889227),
    tw = n(287809),
    tL = n(954571),
    tD = n(429707),
    tF = n(274303),
    tB = n(994125),
    tG = n(347853),
    tV = n(652215),
    tW = n(335020),
    tQ = n(43105),
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
        o = (0, u.bG)([tJ.default], () => tJ.default.getId()),
        c = (function () {
            let e,
                t,
                n = (0, u.bG)([tJ.default], () => tJ.default.getId()),
                i = (0, tX.A)(n),
                l = s.useMemo(() => i.filter((e) => e instanceof t$.R), [i]),
                a =
                    ((e = (0, eN.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    s.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                r = s.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
                o = ((t = (0, tz.A)(r)), s.useMemo(() => t.filter(t0.Vq), [t])),
                { tokens: c, fetched: d } = (0, tH.j)(r),
                p = (0, tq.U9)(o);
            return s.useMemo(() => {
                if (null == a || null == c || !d) return null;
                let e = [],
                    t = [];
                for (let n of a) {
                    let i = c.find((e) => e.application.id === n.applicationId),
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
            }, [a, c, d, l, o, p]);
        })(),
        { analyticsLocations: d } = (0, O.Ay)();
    return null == c || 0 === c.length
        ? null
        : (0, i.jsx)(tK.Ay, {
              contentTypes: c.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: u } = e,
                      p = c.find((e) => e.dismissibleContent === s);
                  if (null == p) return null;
                  let h = "linked" === p.type,
                      m = () =>
                          (0, to.openUserProfileModal)({ userId: o, tabSection: t1.RP.WIDGETS }).then(() => {
                              u(ep.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(tQ.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != p.config.editProfileUpsellImage
                              ? { type: "image", src: p.config.editProfileUpsellImage }
                              : void 0,
                      title: eh.intl.format(eh.t.TXDztH, { applicationName: p.application.name }),
                      body: h ? eh.intl.string(eh.t["63Kso0"]) : eh.intl.string(eh.t.HwXoeC),
                      onRequestClose: () => u(ep.i.USER_DISMISS),
                      actions: [
                          h
                              ? {
                                    text: eh.intl.string(eh.t.VSLDly),
                                    onClick: () => {
                                        a(!0),
                                            m()
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
                                    text: eh.intl.string(eh.t["DSJi3+"]),
                                    onClick: () => {
                                        p.authFlow.initiate({
                                            onConfirm: () => {
                                                a(!0), m().finally(() => a(!1));
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
    t9 = n(818348),
    t5 = n(466573);
function t4() {
    let e = (0, u.bG)([t3.A], () => t3.A.getStatus()),
        t = (0, tC.MU)(e) ?? "",
        n = e === t9.cl.INVISIBLE || e === t9.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: t5.k,
        children: [
            (0, i.jsxs)(g.A, { tag: "div", children: [eh.intl.string(eh.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eZ.m, {
                    text: eh.intl.string(eh.t.L99HQm),
                    children: (0, i.jsx)(tO.E, {
                        size: "xs",
                        color: tN.A.colors.STATUS_WARNING,
                        "aria-label": eh.intl.string(eh.t.L99HQm),
                    }),
                }),
        ],
    });
}
var t6 = n(841595);
let t8 = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var t7 = n(501838),
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
            className: c,
            contentClassName: u,
        } = e,
        d = (0, nn.GV)(),
        p = s.useRef(null),
        h = (0, er.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
                null != p.current && p.current.focus();
            },
        });
    return (0, i.jsx)(I.animated.div, {
        className: a()(ni.kL, c),
        style: h,
        children: (0, i.jsxs)("aside", {
            "aria-labelledby": d,
            className: ni.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: ni.U1,
                    children: [
                        (0, i.jsx)(f.D, {
                            innerRef: p,
                            "aria-label": eh.intl.string(eh.t.WAI6xu),
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
                (0, i.jsx)(eT.Ip, {
                    className: ni.XG,
                    fade: !0,
                    children: (0, i.jsx)("div", { className: a()(ni.gT, u), children: r }),
                }),
            ],
        }),
    });
}
var nl = n(973912),
    na = n(871123),
    nr = n(44724),
    no = n(501573);
function nc() {
    (0, nr.default)({ guildId: (0, na.zf)() });
}
function nu(e) {
    let { profileUserId: t, handleOpenUserProfileModal: n, markAsDismissed: s } = e,
        { analyticsLocations: l } = (0, O.Ay)([U.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t
        ? null
        : (0, i.jsxs)(ns, {
              heading: eh.intl.string(eh.t["vy/61K"]),
              subheading: eh.intl.string(eh.t.tEee9t),
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
                          text: eh.intl.string(eh.t.rg9FQp),
                          onClick: nc,
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
                    return t8.useConfig({ location: t }).enabled;
                })({ location: t }),
                i = (0, u.bG)([tw.default], () => tw.default.getCurrentUser()),
                l = (0, u.bG)([t6.A], () => (null != i ? t6.A.getFirstWishlistId(i.id) : null)),
                a = (0, ne.i)((e) => e.recommendationApplicationIds),
                o = (0, t7.rY)(),
                c = (0, t7.qx)();
            return s.useMemo(
                () => (null != a || (null == l && n) ? (0, r.uniq)([...(a ?? []), ...c, ...o]).sort() : []),
                [n, l, c, o, a],
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
                  ? (0, i.jsx)(nu, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
var np = n(927813),
    nh = n(146901),
    nm = n(827827);
let n_ = [
        { duration: 15 * np.A.Millis.MINUTE, label: () => eh.intl.string(eh.t["8ot6gv"]) },
        { duration: np.A.Millis.HOUR, label: () => eh.intl.string(eh.t.UMWBZr) },
        { duration: 8 * np.A.Millis.HOUR, label: () => eh.intl.string(eh.t.EpAXPC) },
        { duration: np.A.Millis.DAY, label: () => eh.intl.string(eh.t["755t4q"]) },
        { duration: 3 * np.A.Millis.DAY, label: () => eh.intl.string(eh.t["f3/1ch"]) },
        { duration: void 0, label: () => eh.intl.string(eh.t["46dqJY"]) },
    ],
    nf = "forever";
function ng(e) {
    let { status: t, currentStatus: n, description: s } = e,
        l = t !== tV.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: n_.map((e) => {
                let { duration: s, label: l } = e;
                return (0, i.jsx)(
                    tM.Dr,
                    {
                        id: `${t}-${s}`,
                        label: l(),
                        action: () => (0, nm.A)({ nextStatus: t, prevStatus: n, durationMillis: s }),
                        dontCloseOnAction: !0,
                    },
                    s ?? nf,
                );
            }),
        });
    return (0, i.jsx)(tM.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: l,
        label: (0, tC.MU)(t),
        subtext: s,
        iconLeft: () => (0, i.jsx)(eb.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nm.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: l ? a : void 0,
    });
}
function nA(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nh._)(e);
    return "today" === t
        ? eh.intl.formatToPlainString(eh.t.ZxxHIO, { timeString: i })
        : eh.intl.formatToPlainString(eh.t["9OFjSe"], { dateString: n, timeString: i });
}
var nx = n(996988),
    nE = n(656884);
function nC(e) {
    let t,
        n,
        l,
        r,
        o,
        c,
        d,
        p,
        _,
        { currentUser: f, onClose: A, setPopoutRef: E, highlightBadge: C, openedAt: T, className: S } = e,
        b = __OVERLAY__,
        v = (0, tr.Ay)(f.id, void 0),
        { analyticsLocations: j } = (0, O.Ay)(U.A.USER_PROFILE_ACCOUNT_POPOUT),
        I = (0, ta.pb)({ layout: "ACCOUNT_POPOUT", userId: f.id, guildId: void 0 }),
        { ref: y, height: R } = (0, eR.Ay)(),
        { isHoveringOrFocusing: N, isHovering: M } = (0, e$.A)(y);
    s.useEffect(() => {
        E?.(y.current);
    }, [y, E]),
        s.useEffect(() => (e1.A.setState({ isOpen: !0 }), () => e1.A.setState({ isOpen: !1 })), []);
    let k = (0, u.bG)([tI.A], () => tI.A.getStatus(f.id)),
        P = nA(tj.CY.useSetting()),
        w = (0, u.bG)([ty.A], () => ty.A.hidePersonalInformation),
        L = (0, eX.kB)(),
        D = tj.Q_.useSetting(),
        F =
            ((t = tj.CY.useSetting()),
            (n = (0, eX.kB)()),
            (l = tj.Jr.useSetting()),
            (r = (e) => {
                let i = nA(t);
                if (k === e && null != i) return i;
                switch (e) {
                    case tV.clD.DND:
                        return n ? eh.intl.string(eh.t.day5A6) : eh.intl.string(eh.t["tq/fMK"]);
                    case tV.clD.INVISIBLE:
                        return eh.intl.string(eh.t.zPc6Mc);
                    default:
                        return;
                }
            }),
            (o = (0, i.jsx)(i.Fragment, {
                children: n_.map((e) => {
                    let { duration: t, label: n } = e;
                    return (0, i.jsx)(
                        tM.Dr,
                        {
                            id: `${k}-${t}`,
                            label: n(),
                            action: () => {
                                (0, eX.ES)(!0, t);
                            },
                            dontCloseOnAction: !0,
                        },
                        t ?? nf,
                    );
                }),
            })),
            (c = ng({ status: tV.clD.ONLINE, currentStatus: k })),
            (d = ng({ status: tV.clD.IDLE, currentStatus: k, description: r(tV.clD.IDLE) })),
            (p = ng({ status: tV.clD.DND, currentStatus: k, description: r(tV.clD.DND) })),
            (_ = ng({ status: tV.clD.INVISIBLE, currentStatus: k, description: r(tV.clD.INVISIBLE) })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    c,
                    (0, i.jsx)(tM.bX, {}, "menu-separator-statuses"),
                    d,
                    p,
                    _,
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
                                          label: eh.intl.string(eh.t.gJRnwK),
                                          iconLeft: ev.a,
                                          leadingAccessory: { type: "icon", icon: ev.a },
                                          badge: { text: eh.intl.string(eh.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? eh.intl.format(eh.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            eh.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eh.intl.string(eh.t["Br1q+x"]),
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
            let t = (0, u.bG)([tw.default], () => tw.default.getCurrentUser()),
                n = (0, u.bG)([ty.A], () => ty.A.hidePersonalInformation),
                s = (0, u.bG)([tk.A], () => (0, e2.M)(tk.A.theme)),
                { multiAccountUsers: l } = (0, tB.K)(),
                a = l.map((l) => {
                    let a = new tP.A(l),
                        r = a.id === t?.id,
                        o = l.tokenStatus === tF.U.INVALID,
                        c = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        tM.Dr,
                        {
                            id: a.id,
                            focusedClassName: tW.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: tW.ci,
                                    children: [
                                        (0, i.jsx)(h.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: m._3.SIZE_24,
                                            "aria-label": l.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: tW.DD,
                                            children: [
                                                (0, i.jsx)(J.E, {
                                                    className: tW.gE,
                                                    variant: "text-sm/normal",
                                                    children: tC.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(J.E, {
                                                        className: tW.df,
                                                        variant: "text-sm/normal",
                                                        children: c,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(tU.y, {
                                                size: "sm",
                                                color: t
                                                    ? tN.A.unsafe_rawColors.WHITE.css
                                                    : tN.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? tN.A.unsafe_rawColors.BRAND_500.css
                                                        : tN.A.unsafe_rawColors.WHITE.css,
                                                className: tW.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(tO.E, {
                                                color: tN.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && s) || (t && !s)
                                                        ? tN.A.unsafe_rawColors.BRAND_500.css
                                                        : tN.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: tW.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, tG.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (tL.default.track(tV.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tV.JJy.USER_PROFILE },
                                        }),
                                        tD.Mx(n));
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
                                label: eh.intl.string(eh.t.WbFpq4),
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
        G = (0, tl.A)({ analyticsLocations: j }),
        V = (0, e5.TW)(f),
        W = s.useRef(null),
        Q = s.useRef(null),
        H = (0, eq.A)(v?.profileFrame?.skuId, "UserProfileAccountPopout"),
        q = (0, eK.A)(v?.profileFrame?.skuId);
    (0, eH.A)({ skuId: v?.profileFrame?.skuId, openedAt: T, context: I, analyticsLocations: j });
    let z = s.useRef((0, e1.A)((e) => e.shouldRenderTenureLevelUp)),
        K = s.useMemo(() => (0, eY.A)(), []),
        [$, Y] = s.useState(!0);
    s.useEffect(() => {
        setTimeout(() => {
            Y(!1);
        }, 500);
    }, []);
    let X = (e) => {
            A?.(), (0, to.openUserProfileModal)({ customStatusPrompt: K, sourceAnalyticsLocations: j, ...I, ...e });
        },
        Z = v?.widgets != null && v.widgets.length > 0,
        ee = s.useCallback(() => {
            A();
        }, [A]),
        et = s.useCallback(() => {
            G(), ee();
        }, [G, ee]),
        en = (0, eN.QR)({ location: "UserProfileAccountPopout" }),
        ei = (0, eN.zd)({ location: "UserProfileAccountPopout" }),
        es = s.useId();
    return (0, i.jsx)(O.f5, {
        value: j,
        children: (0, i.jsx)(ta.of, {
            value: I,
            openedAt: T,
            fetchStartedAt: v?.fetchStartedAt,
            fetchEndedAt: v?.fetchEndedAt,
            isLoaded: v?.isLoaded,
            children: (0, i.jsxs)(eC.l, {
                ref: y,
                "aria-labelledby": es,
                className: a()(eP.jC, q, S),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(g.A, {
                        children: (0, i.jsx)(ex.H, { id: es, children: eh.intl.string(eh.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(ex.F, {
                        children: [
                            (0, i.jsx)(nd, { displayProfile: v, handleOpenUserProfileModal: X, height: R }),
                            (0, i.jsxs)(tf.A, {
                                className: eP.BK,
                                user: f,
                                displayProfile: v,
                                themeType: nx.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nE.wx,
                                        children: [
                                            (0, i.jsx)(td.A, { user: f, displayProfile: v, themeType: nx.d.POPOUT }),
                                            (0, i.jsx)(tc.A, {
                                                user: f,
                                                displayProfile: v,
                                                themeType: nx.d.POPOUT,
                                                onOpenProfile: b ? void 0 : X,
                                            }),
                                            (0, i.jsx)(tb.A, {
                                                ref: W,
                                                user: f,
                                                themeType: nx.d.POPOUT,
                                                onCloseProfile: A,
                                                prompt: K,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eT.Ip, {
                                        className: eP.rf,
                                        style: { pointerEvents: $ ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(th.A, { userId: f.id }),
                                            (0, i.jsx)(tg.Ay, {
                                                className: eP.eF,
                                                user: f,
                                                displayName: tR.Ay.getName(void 0, null, f),
                                                onClickName: b ? void 0 : X,
                                                displayNameTrailing: (0, i.jsx)(tS, { user: f, isVisible: N }),
                                                pronouns: v?.pronouns,
                                                trailing: (0, i.jsx)(tu.A, {
                                                    displayProfile: v,
                                                    themeType: nx.d.POPOUT,
                                                    onClose: A,
                                                    shouldOpenBadgeTooltip: null != C ? (e) => e === C : void 0,
                                                    shouldGlowTenureBadge: z.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tp.A, { isPremiumUser: V, onInteraction: A }),
                                            (0, i.jsx)(tv.A, {
                                                user: f,
                                                bio: v?.bio,
                                                hidePersonalInformation: w,
                                                onClose: A,
                                            }),
                                            Z &&
                                                (0, i.jsx)(t_.A, {
                                                    user: f,
                                                    widgets: v?.widgets,
                                                    onOpenUserProfileModal: X,
                                                }),
                                            (0, i.jsx)(tm.A, {
                                                user: f,
                                                currentUser: f,
                                                onOpenUserProfileModal: X,
                                                onClose: A,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eP.T_,
                                                children: [
                                                    (0, i.jsx)(tf.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eD, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eh.intl.string(eh.t.s5vZlQ),
                                                                    icon: eS.R,
                                                                    onClick: et,
                                                                    ref: Q,
                                                                }),
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(t4, {}),
                                                                    sublabel: null != P && P,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eb.nW, { status: k, size: 12 }),
                                                                    trailing:
                                                                        (L || k === tV.clD.DND) &&
                                                                        (0, i.jsx)(ev.a, { size: "xxs" }),
                                                                    renderSubmenu: eA.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(ew, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eP.hQ,
                                                                                  "aria-label": eh.intl.string(
                                                                                      eh.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: F,
                                                                              });
                                                                          },
                                                                    onClick: eA.Fr
                                                                        ? () => {
                                                                              A(),
                                                                                  (0, x.openModalLazy)(
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
                                                                                                              eh.intl.string(
                                                                                                                  eh.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(ej.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eh.intl.string(
                                                                                                                      eh
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
                                                                (0, i.jsx)(eW, { onClose: A }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tf.A.Overlay, {
                                                        className: eP.g0,
                                                        children: (0, i.jsxs)(eD, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eI.r,
                                                                    label: eh.intl.string(eh.t.oMNyYN),
                                                                    onClick: () => {
                                                                        A(), (0, tG.A)();
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(ew, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eh.intl.string(eh.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: B,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tE.p5 &&
                                                                    D &&
                                                                    (0, i.jsx)(eL, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: ey.L,
                                                                        label: eh.intl.string(eh.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            (0, tE.C)(f.id), A();
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
                                        (0, i.jsx)(eQ.A, { skuId: v.profileEffect.skuId, isHovering: M }),
                                    null != H && (0, i.jsx)(ez.A, { frame: H, layout: "ACCOUNT_POPOUT" }),
                                ],
                            }),
                            en && ei ? (0, i.jsx)(t2, { targetElementRef: Q, onClose: A }) : null,
                            (0, i.jsx)(ti, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nT = n(201805),
    nS = n(655116),
    nb = n(21973),
    nv = n(454719),
    nj = n(342296),
    nI = n(533488),
    ny = n(167579),
    nR = n(173660),
    nN = n(969341),
    nM = n(763827),
    nU = n(499156),
    nO = n(731854);
let nk = 2.5 * np.A.Millis.SECOND,
    nP = +np.A.Millis.HOUR;
var nw = n(205693),
    nL = n(485296);
let nD = 3 * np.A.Millis.SECOND,
    nF = +np.A.Millis.DAY;
var nB = n(616356),
    nG = n(734057),
    nV = n(629016),
    nW = n(186111),
    nQ = n(967198),
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
        { analyticsLocations: a } = (0, O.Ay)(),
        r = (0, s.useRef)(null),
        o = (0, u.bG)([nZ.A], () => nZ.A.isFocused()),
        c = (0, s.useCallback)(() => {
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
                (0, i.jsx)(tQ.A, {
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
                    title: eh.intl.string(n0.default["1AE464"]),
                    body: [eh.intl.string(n0.default.cNc1g9), eh.intl.string(eh.t["4JNXHG"])],
                    actions: [{ text: eh.intl.string(eh.t.uw9zI7), variant: "primary", onClick: c }],
                }),
            ],
        })
    );
}
var n3 = n(932001),
    n9 = n(45780),
    n5 = n(696451),
    n4 = n(71393),
    n6 = n(685073),
    n8 = n(228366);
let n7 = { lastSeenInfos: {} },
    ie = n7;
class it extends u.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        ie = e ?? n7;
    }
    getState() {
        return ie;
    }
    getGuildLastSeenInfo(e) {
        return ie.lastSeenInfos[e] ?? null;
    }
}
let ii = new it(n8.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        ie.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        ie = n7;
    },
});
var is = n(116833),
    il = n(514661);
let ia = new nX.A("GuildTagAvailableCoachmark");
function ir(e) {
    let t = (0, u.bG)([n4.A], () => n4.A.getGuild(e.guildId));
    function n(n) {
        t?.profile?.tag != null &&
            n8.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
    }
    let { isAdopting: s, onAdoptTag: l, onEditProfile: a } = (0, il.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, n6.q0)(t))
        return ia.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: eh.intl.string(eh.t.jwEaiX), loading: s, onClick: l, variant: "primary" },
        { text: eh.intl.string(eh.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(tQ.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: is.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eh.intl.formatToPlainString(eh.t["m/Tc3n"], { guildName: t.name }),
                body: eh.intl.string(eh.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(ep.i.USER_DISMISS),
            }),
        ],
    });
}
function io(e) {
    let t = (0, u.bG)([n4.A], () => n4.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: s, onAdoptTag: l, onEditProfile: a } = (0, il.A)(t?.id ?? null, () => n(ep.i.TAKE_ACTION));
    if (null == t || !(0, n6.q0)(t))
        return ia.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let r = [
        { text: eh.intl.string(eh.t.jwEaiX), loading: s, onClick: l, variant: "primary" },
        { text: eh.intl.string(eh.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(tQ.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: is.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eh.intl.formatToPlainString(eh.t.VFqnyU, { guildName: t.name }),
                body: eh.intl.string(eh.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(ep.i.USER_DISMISS),
            }),
        ],
    });
}
var ic = n(904481),
    iu = n(764231),
    id = n(425713);
function ip(e) {
    let { groupName: t, targetElementRef: n } = e,
        s = e8(),
        l = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
        a = (0, e1.A)((e) => e.isOpen),
        r = (0, ic.G)();
    return l || null == s || a || r
        ? null
        : (0, i.jsx)(tK.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e;
                  return (0, i.jsx)(ih, {
                      recentlyLeveledTenureBadge: s,
                      markAsDismissed: l,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function ih(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: l, shouldShow: a } = e,
        r = e6.sp.indexOf(t),
        o = (0, id.I)(e6.sp[r > 0 ? r - 1 : r]).ambient,
        c = (0, s.useCallback)(() => {
            n(ep.i.TAKE_ACTION),
                e1.A.setState({ shouldRenderTenureLevelUp: !0 }),
                nq._.dispatch(tV.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n]),
        u = (0, s.useCallback)(() => {
            n(ep.i.USER_DISMISS);
        }, [n]),
        d = e6.VD[t],
        p = eh.intl.formatToPlainString(eh.t.ewkaVR, {
            timeMilestone: (0, iu.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: eh.intl.string(eh.t.RzWDqY), variant: "primary", onClick: c }];
    return (0, i.jsx)(tQ.A, {
        targetElementRef: l,
        onRequestClose: u,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eh.intl.string(eh.t.VoDxsV),
        body: p,
        actions: h,
    });
}
function im(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nT.c9)(),
        s = null != e.targetElementRef.current && t && n,
        [l, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, n9.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tV.dJq),
                s = (0, u.bG)([n4.A, tw.default, n5.Ay], () => {
                    if (null === e) return !1;
                    let t = n4.A.getGuild(e);
                    if (void 0 === t || !(0, n6.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                    let n = tw.default.getCurrentUser();
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
                l = (0, u.bG)([ii], () => (null === s ? null : ii.getGuildLastSeenInfo(s))),
                a = (0, u.bG)([n4.A], () => n4.A.getGuild(s)?.profile?.tag),
                r = null != a && i?.identityGuildId === s && i?.tag === null,
                o = null != s && l?.tag === a,
                c = null !== s && r && !o;
            return (0, n3.Wl)(c && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
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
var i_ = n(615675),
    ig = n(900797),
    iA = n(847374),
    ix = n(348858),
    iE = n(617354),
    iC = n(206018),
    iT = n(42473),
    iS = n(490704),
    ib = n(967194);
function iv(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: l,
            onClick: r,
            iconForeground: o,
            nameplate: c,
            shouldShowOutputDeviceChangedTooltip: u,
            dismissTooltips: d,
        } = e,
        p = t || n,
        {
            Component: h,
            play: m,
            events: { onMouseEnter: f, onMouseLeave: g },
        } = (0, ix.I)(p ? "undeafen" : "deafen"),
        A = n ? i_.T : h,
        { name: x } = (0, eg.x5)(nO.oh.AUDIO_OUTPUT),
        E = (0, iE.A)(t, n, l),
        { analyticsLocations: C } = (0, O.Ay)(U.A.AUDIO_OUTPUT_BUTTON),
        T = s.useRef(null);
    return (
        s.useEffect(() => () => m(), [p, m]),
        (0, i.jsx)(O.f5, {
            value: C,
            children: (0, i.jsx)(_.Y, {
                targetElementRef: T,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(O.f5, {
                            value: C,
                            children: (0, i.jsx)(iC.A, {
                                onInteraction: (0, B.s)("AudioDeviceMenu", U.A.ACCOUNT),
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
                animation: _.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: s } = e,
                        { isShown: d } = t,
                        h = d ? ig.t : iA.a;
                    return (0, i.jsxs)("div", {
                        ref: T,
                        className: a()(iS.Lh, { [iS.v8]: p, [iS.q6]: d }),
                        children: [
                            (0, i.jsx)(iT.A, {
                                "aria-checked": p,
                                "aria-label": eh.intl.string(eh.t.wjcRFX),
                                className: iS.eT,
                                disabled: l,
                                icon: (0, i.jsx)(A, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: p ? tN.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: p ? ib.o : void 0,
                                innerClassName: a()({ [ib.T]: n }),
                                onClick: r,
                                onContextMenu: s,
                                onMouseEnter: f,
                                onMouseLeave: g,
                                plated: null != c,
                                redGlow: p,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(iT.A, {
                                className: a()(iS.UT, { [iS.q6]: d }),
                                disabled: l,
                                icon: (0, i.jsx)(h, {
                                    className: iS.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: p ? tN.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != c,
                                redGlow: p,
                                tooltipType: u ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: u,
                                tooltipPositionKey: u
                                    ? eh.intl.formatToPlainString(eh.t["f+DDY/"], { outputDeviceName: x })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: u
                                    ? eh.intl.format(eh.t["f+DDY/"], { outputDeviceName: x })
                                    : eh.intl.string(eh.t.aA4Vce),
                                "aria-label": u
                                    ? eh.intl.formatToPlainString(eh.t["f+DDY/"], { outputDeviceName: x })
                                    : eh.intl.string(eh.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var ij = n(666654),
    iI = n(523875),
    iy = n(993719);
let iR = {};
class iN extends u.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return iR[e] ?? !1;
    }
}
let iM = new iN(n8.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        iR[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        iR[t] = !1;
    },
});
var iU = n(362823),
    iO = n(980923),
    ik = n(350535),
    iP = n(224585),
    iw = n(949341),
    iL = n(973324);
function iD(e) {
    let t,
        {
            selfMute: n,
            serverMute: l,
            suppress: r,
            awaitingRemote: o,
            iconForeground: c,
            onMouseEnter: d,
            onMouseLeave: p,
            onClick: h,
            nameplate: m,
            shouldShowSpeakingWhileMutedTooltip: f,
            shouldShowSpeakingWhilePTTTooltip: g,
            shouldShowInputDeviceChangedTooltip: A,
            shouldShowPTTJoinTooltip: x,
            dismissTooltips: E,
            speaking: C,
        } = e,
        { showPTTIconIndicator: T } = nU.A.useConfig({ location: "MicrophoneButton" }),
        S = (0, u.bG)([nN.Ay], () => nN.Ay.getMode() === nO.TB.PUSH_TO_TALK),
        b = (0, u.bG)([nN.Ay], () => nN.Ay.getSettings().modeOptions.shortcut),
        v = (0, u.bG)([iM], () => iM.getIsTutorialActive(iU.v.MUTE_TUTORIAL)),
        j = (0, u.bG)([nM.A], () => null != nM.A.getChannelId()),
        { name: I } = (0, eg.x5)(nO.oh.AUDIO_INPUT),
        { enabledInputProfiles: y } = (0, nI.d)({ location: "MicrophoneButton" }),
        R = s.useRef(null),
        N = n || r || l,
        M = (0, iI.L)(N ? "unmute" : "mute"),
        { analyticsLocations: k } = (0, O.Ay)(U.A.AUDIO_INPUT_BUTTON),
        { Component: P, events: w, play: L } = M,
        D = l || r ? ij.O : P;
    s.useEffect(() => () => L(), [N, L]);
    let F = (0, iO.A)(n, l, r, o);
    t = f
        ? { tooltipType: "green_void_do_not_use", tooltipText: eh.intl.string(eh.t["29gnR4"]), tooltipForceOpen: !0 }
        : x || g
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eh.intl.format(eh.t.c1qUOQ, { keybind: ik.dI(b).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let G = T && S && j,
        V = N ? tN.A.colors.ICON_VOICE_MUTED : "currentColor",
        W = s.useCallback(() => {
            h(), v && iy.N(iU.v.MUTE_TUTORIAL);
        }, [h, v]);
    return (0, i.jsxs)(O.f5, {
        value: k,
        children: [
            (0, i.jsx)(_.Y, {
                targetElementRef: R,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(O.f5, {
                            value: k,
                            children: (0, i.jsx)(iC.A, {
                                onInteraction: (0, B.s)("AudioDeviceMenu", U.A.ACCOUNT),
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
                animation: _.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: s } = e,
                        { isShown: l } = n,
                        r = l ? ig.t : iA.a;
                    return (0, i.jsxs)("div", {
                        ref: R,
                        className: a()(iS.Lh, { [iS.v8]: N, [iS.q6]: l }),
                        children: [
                            (0, i.jsx)(iT.A, {
                                "aria-checked": N,
                                "aria-label": eh.intl.string(eh.t.w4m945),
                                className: iS.eT,
                                disabled: o,
                                icon: (0, i.jsx)(D, { size: "custom", width: 20, height: 20, color: V, className: c }),
                                onClick: W,
                                onContextMenu: s,
                                onMouseEnter: () => {
                                    d(), w.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    p(), w.onMouseLeave();
                                },
                                plated: null != m,
                                redGlow: N,
                                role: "switch",
                                ...t,
                                children: G ? (0, i.jsx)("div", { className: a()(iw.U, { [iw.z]: C }) }) : null,
                            }),
                            (0, i.jsx)(iT.A, {
                                "aria-label": A
                                    ? eh.intl.formatToPlainString(eh.t["18wnuD"], { inputDeviceName: I })
                                    : eh.intl.string(eh.t.fRzCbB),
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
                                plated: null != m,
                                redGlow: N,
                                tooltipType: A ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: A,
                                tooltipPositionKey: A
                                    ? eh.intl.formatToPlainString(eh.t["18wnuD"], { inputDeviceName: I })
                                    : void 0,
                                tooltipShouldShow: !l,
                                tooltipText: A
                                    ? eh.intl.format(eh.t["18wnuD"], { inputDeviceName: I })
                                    : eh.intl.string(eh.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(tQ.A, {
                targetElementRef: R,
                shouldShow: v,
                graphic: { type: "image", src: iL.A },
                onRequestClose: () => {
                    iy.N(iU.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eh.intl.string(iP.default.VG4zAf),
                body: eh.intl.string(iP.default["8VIRzR"]),
            }),
        ],
    });
}
var iF = n(935399),
    iB = n(505312),
    iG = n(625903),
    iV = n(848847),
    iW = n(88001),
    iQ = n(466919),
    iH = n(438705);
let iq = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: l } = e,
        a = s.useCallback(() => {
            l(), (0, es.openUserSettings)(ei.X.SUBSCRIPTIONS_PANEL);
        }, [l]);
    return (0, i.jsx)(tQ.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: iH },
        shouldShow: n,
        title: eh.intl.format(iQ.default.bx8sR9, { premiumGroupProductName: (0, iW.DP)() }),
        body: eh.intl.format(iQ.default.Pw4OFZ, { premiumGroupProductName: (0, iW.DP)() }),
        onRequestClose: l,
        actions: [{ text: eh.intl.string(iQ.default.DD26QR), onClick: a }],
    });
};
var iz = n(873298),
    iK = n(840387);
function i$(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        l = (0, iK.Z)(),
        a = tj.KP.useSetting(),
        r = l && a !== iz.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, s.useCallback)(() => {
            t(ep.i.TAKE_ACTION), (0, es.openUserSettings)(ei.X.PROFILE_PRIVACY_CATEGORY);
        }, [t]),
        c = (0, s.useCallback)(() => {
            t(ep.i.USER_DISMISS);
        }, [t]),
        u = r
            ? a === iz.KP.FRIENDS_ONLY
                ? eh.intl.string(eh.t["/hogEy"])
                : eh.intl.string(eh.t["6hEfm1"])
            : eh.intl.string(eh.t.bnNxW1);
    return (0, i.jsx)(tQ.A, {
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
        title: eh.intl.string(eh.t.Ve4nS1),
        body: u,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eh.intl.string(eh.t.eOoTMX), variant: "primary", onClick: o }],
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
            iconForeground: c,
            nameplate: u,
        } = e,
        p = s.useRef(null),
        [h, m] = s.useState(!1);
    (0, iF.Ay)(() => {
        let e = () => m(!0);
        return (
            nq._.subscribe(tV.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                nq._.unsubscribe(tV.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let _ = s.useCallback(() => {
        m(!1), a();
    }, [a]);
    t = null != l ? eh.intl.formatToPlainString(eh.t.Gzh6ZP, { webBuildOverride: l.id }) : eh.intl.string(eh.t.cduTBL);
    let f = iG.Z,
        g = (0, iB.w)();
    return (
        (f = null != l ? iV.H : g.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(iT.A, {
                    ref: p,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: _,
                    onContextMenu: r,
                    "aria-label": eh.intl.string(eh.t.cduTBL),
                    icon: (0, i.jsx)(f, { size: "refresh_sm", color: "currentColor", className: c }),
                    ...g.events,
                    plated: null != u,
                }),
                (0, i.jsx)(iq, { targetElementRef: p, shouldShow: h, onDismiss: () => m(!1) }),
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
let iZ = nK.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
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
            status: c,
            handleClick: u,
            handleMouseLeave: d,
            renderNameTag: p,
            nameplate: h,
            avatarDecoration: g,
            "data-jump-section": A,
        } = e,
        x = s.useRef(null),
        E = t ?? x,
        T = (0, nH.F_)({ avatarDecoration: g, size: (0, V.Te)(m._3.SIZE_32) }),
        S = (0, K.A)(),
        {
            updateOpenPopoutRef: v,
            highlightBadge: j,
            setHighlightBadge: I,
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
                (0, b.A)(() => a(!0), 750),
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
        y = (0, Q.K)(h);
    return null == o
        ? null
        : (0, i.jsx)(C.A, {
              object: tV.ZSU.AVATAR,
              children: (0, i.jsx)(nj.A, {
                  user: o,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, nv.A)(o.id, o.getAvatarURL(void 0, nj.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: s } = e;
                      return (0, i.jsx)(nC, {
                          currentUser: o,
                          highlightBadge: j,
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
                  animation: _.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      d(), I(void 0);
                  },
                  children: (e) => {
                      v(e);
                      let { onMouseEnter: t, onMouseDown: s, ...d } = e;
                      return (0, i.jsxs)("div", {
                          ref: E,
                          style: y,
                          onMouseEnter: t,
                          onMouseDown: s,
                          onClick: (t) => {
                              e.onClick?.(t), u?.(t);
                          },
                          className: a()(iX.Q9, { [iX.ZQ]: null != h }),
                          children: [
                              (0, i.jsx)(f.D, {
                                  ...d,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), u?.(t);
                                  },
                                  "aria-label": eh.intl.string(eh.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: iX.$n,
                                  "data-jump-section": A,
                              }),
                              (0, i.jsx)(iZ, {
                                  size: m._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? tV.clD.STREAMING : c,
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
class i9 extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new p.Ep();
    speakingWhilePTTTooltipTimeout = new p.Ep();
    speakingWhilePTTInactiveBackoff = new c.A(i1, null, !1);
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
        (0, D.A)(e, t, tV.JJy.ACCOUNT_PANEL), (0, F.X)(U.A.ACCOUNT, F.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, L.A)(e, tV.JJy.ACCOUNT_PANEL), (0, F.X)(U.A.ACCOUNT, F.O.DEAFEN, !t);
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
                    n.e("32292"),
                    n.e("38939"),
                    n.e("28367"),
                    n.e("45174"),
                    n.e("85519"),
                    n.e("11871"),
                    n.e("37266"),
                    n.e("55057"),
                    n.e("14976"),
                    n.e("63229"),
                    n.e("31988"),
                    n.e("55343"),
                    n.e("93103"),
                    n.e("88342"),
                    n.e("8555"),
                    n.e("40142"),
                    n.e("60161"),
                    n.e("98765"),
                    n.e("35313"),
                    n.e("65437"),
                    n.e("34983"),
                    n.e("92414"),
                    n.e("95208"),
                    n.e("72401"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("76390"),
                    n.e("93312"),
                    n.e("95752"),
                    n.e("67339"),
                    n.e("31538"),
                    n.e("73930"),
                    n.e("98954"),
                    n.e("227"),
                    n.e("10567"),
                    n.e("62718"),
                    n.e("12542"),
                    n.e("84317"),
                    n.e("68883"),
                    n.e("93858"),
                    n.e("29594"),
                    n.e("8018"),
                    n.e("7637"),
                    n.e("3025"),
                    n.e("42282"),
                    n.e("80093"),
                    n.e("44647"),
                    n.e("10730"),
                    n.e("25657"),
                    n.e("49320"),
                    n.e("60989"),
                    n.e("75349"),
                    n.e("73644"),
                    n.e("54490"),
                    n.e("40393"),
                    n.e("77602"),
                    n.e("33773"),
                    n.e("63078"),
                    n.e("88808"),
                    n.e("86546"),
                    n.e("14875"),
                    n.e("86300"),
                    n.e("44935"),
                    n.e("62175"),
                    n.e("26663"),
                    n.e("29491"),
                    n.e("41706"),
                    n.e("98352"),
                    n.e("7121"),
                    n.e("96817"),
                    n.e("84704"),
                    n.e("33098"),
                    n.e("37886"),
                    n.e("23324"),
                    n.e("25013"),
                    n.e("20803"),
                    n.e("95782"),
                    n.e("40114"),
                    n.e("83518"),
                    n.e("67646"),
                    n.e("51050"),
                    n.e("76477"),
                    n.e("23536"),
                    n.e("39967"),
                    n.e("38249"),
                    n.e("40976"),
                    n.e("85216"),
                    n.e("9842"),
                    n.e("24639"),
                    n.e("35801"),
                ]).then(n.bind(n, 410681));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, B.s)("UserSettingsMenu", U.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, B.s)("AudioDeviceMenu", U.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, nI.d)({ location: "Account" });
                    return (0, i.jsx)(O.f5, {
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
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(O.f5, {
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
                    (0, i.jsx)(g.A, { children: tC.Ay.humanizeStatus(l) }),
                    (0, i.jsx)(j.A, {
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
                      (0, i.jsx)(g.A, { children: tC.Ay.humanizeStatus(l) }),
                      (0, i.jsx)(z.A, { activity: o, emojiClassName: iX.Zg, className: iX.WO }),
                  ],
              })
            : null != l && l !== tV.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, i.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(N, { text: tC.Ay.humanizeStatus(l) }),
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
            : (0, i.jsx)(im, {
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
                      (0, i.jsx)(ef, {}),
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
            shouldShowSpeakingWhilePTTTooltip: c,
            webBuildOverride: u,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: p,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: m,
            handleInputAudioContextMenu: _,
            handleOutputAudioContextMenu: f,
            handleOpenAccountSettings: g,
            handleOpenSettingsContextMenu: A,
            dismissibleContents: x,
            nameplate: E,
            accountContainerRef: C,
            deviceChangedTooltipType: T,
            shouldShowPTTJoinTooltip: S = !1,
            dismissTooltips: b,
            speaking: v,
        } = e,
        j = (0, Q.K)(E);
    return (0, i.jsxs)("div", {
        className: iX.Uo,
        style: j,
        children: [
            (0, i.jsx)(iD, {
                accountContainerRef: C,
                selfMute: n,
                serverMute: l,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: d,
                onMouseLeave: p,
                onClick: m,
                onContextMenu: _,
                iconForeground: null != E ? iX.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: c,
                shouldShowPTTJoinTooltip: S,
                dismissTooltips: b,
                speaking: v,
            }),
            (0, i.jsx)(iv, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: h,
                onContextMenu: f,
                awaitingRemote: s,
                iconForeground: null != E ? iX.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: b,
            }),
            (0, i.jsx)(iY, {
                webBuildOverride: u,
                onClick: g,
                onContextMenu: A,
                dismissibleContents: x.settings,
                iconForeground: null != E ? iX.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function i4(e) {
    let t = (0, u.bG)([nM.A], () => null != nM.A.getChannelId()),
        n = (0, eg.Py)(e),
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
function i6() {
    let e = (0, u.bG)([tw.default], () => tw.default.getCurrentUser()),
        t = (0, u.bG)([tJ.default], () => tJ.default.getId()),
        {
            activities: n,
            streaming: l,
            status: a,
        } = (0, u.cf)([t3.A], () => {
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
        r = (0, u.bG)([nB.A], () => nB.A.getAnyStreamForUser(t)),
        c = (0, T.A)({ userId: t }),
        h = (0, u.bG)([nL.A], () => nL.A.getVoiceVolume(t)),
        m = tC.Ay.useUserTag(e, { decoration: "never" }),
        _ = (0, u.bG)([nM.A, nG.A], () => {
            let e = nM.A.getChannelId();
            return null != e ? nG.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: g, suppress: A } = (0, nR.A)(_),
        { selfDeaf: E, deaf: C } = (0, ny.A)(_),
        b = (0, u.bG)([k.A], () => ((0, P.kK)() ? k.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        v = (0, u.bG)([nN.Ay], () => nN.Ay.getSpeakingWhileMuted()),
        j = (0, u.bG)([w.A], () => w.A.isFullscreenInContext()),
        I = (0, u.bG)([nW.A], () => nW.A.hasLayers()),
        y = (0, x.useModalsStore)(x.hasAnyModalOpenSelector) || I || nz.P.isDisallowPopupsSet() || j,
        R = (0, u.bG)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        N = (0, u.bG)([nQ.A], () => nQ.A.getGuildId()),
        M = e?.avatarDecoration,
        L = (0, G.A)(M),
        D = tC.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, O.Ay)(U.A.ACCOUNT),
        B = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: V } = (0, nT.c9)(),
        Q = (0, u.bG)([nS.A, tw.default, nV.A], () => {
            let e,
                t = nS.A.getSyncingWith(),
                n = nS.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(nV.A.getParty(e) ?? []))
                        .map((e) => tw.default.getUser(e))
                        .filter(t0.Vq)
                        .value()),
                i.length > 1
            );
        }),
        H = { avatar: [], settings: [] },
        q = (0, nb.lX)("AccountCoachmark");
    !y && (H.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK), q && H.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: z, dismissTooltip: K } = i4(nO.oh.AUDIO_INPUT),
        { shouldShowTooltip: $, dismissTooltip: Y } = i4(nO.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: Z, dismissTooltip: J } = (function () {
            let [e, t] = s.useState(!1),
                n = (0, u.bG)([nN.Ay], () => nN.Ay.getMode() === nO.TB.PUSH_TO_TALK),
                i = (0, u.bG)(
                    [nM.A],
                    () => null != nM.A.getChannelId() && (nM.A.getDuration() ?? Number.MAX_VALUE) < nk,
                ),
                [l, a] = s.useState(!1),
                { showPTTJoinTooltip: r } = nU.A.useConfig({ location: "usePTTJoinTooltip" }),
                o = s.useRef(new p.Ep()),
                c = s.useRef(new p.Ep());
            s.useEffect(() => {
                if (i && n && !e) {
                    if ((nU.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !r)) return;
                    a(!0),
                        t(!0),
                        c.current.start(nP, () => {
                            t(!1);
                        }),
                        o.current.start(nk, () => {
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
                    o.current.stop(), c.current.stop();
                }),
                { shouldShowTooltip: l, dismissTooltip: d }
            );
        })(),
        ee = (function () {
            let { showPTTSpeakingIndicator: e } = nU.A.useConfig({ location: "useSpeakingWhilePTT" }),
                [t, n] = s.useState(!1),
                i = (0, u.bG)([nN.Ay], () => nN.Ay.getMode() === nO.TB.PUSH_TO_TALK),
                l = (0, u.bG)([nM.A], () => nM.A.getRTCConnectionId()),
                a = (0, u.bG)([nN.Ay], () => {
                    let e = nN.Ay.getModeOptions().updatedAt;
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
                        let l = (i & nO.ME.VOICE) === nO.ME.VOICE,
                            a = nL.A.isCurrentUserPTTActive();
                        l && !a
                            ? ++t >= 6 &&
                              (n(!0),
                              s.start(nD, () => {
                                  n(!1);
                              }))
                            : (t = 0);
                    }
                    return (
                        a && e && i && null != l && nN.Ay.getMediaEngine().on(nw.bg.VoiceActivity, o),
                        () => {
                            nN.Ay.getMediaEngine().removeListener(nw.bg.VoiceActivity, o), s.stop();
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
    return (0, i.jsx)(O.f5, {
        value: F,
        children: (0, i.jsx)(i9, {
            currentUser: e,
            username: D,
            activities: n,
            applicationStream: r,
            voiceChannel: _,
            dismissibleContents: H,
            userTag: m,
            occluded: y,
            selfDeaf: E,
            selfMute: g,
            serverDeaf: C,
            serverMute: f,
            speaking: c,
            voiceDb: h,
            speakingWhileMuted: v,
            speakingWhilePTTInactive: ee,
            status: a,
            streaming: l,
            suppress: A,
            webBuildOverride: b,
            awaitingRemote: R,
            nameplate: B,
            selectedGuildId: N,
            avatarDecoration: L,
            isQuestBarEmpty: V,
            isListenAlongVisible: Q,
            deviceChangedTooltipType: et,
            onDismissDeviceChangedTooltip: () => en(et),
            shouldShowPTTJoinTooltip: Z,
            dismissPTTJoinTooltip: J,
        }),
    });
}
