(n.d(t, { g: () => lB, A: () => lK }), n(321073));
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(435558),
    o = n.n(s),
    d = n(17928),
    c = n(554146),
    u = n(451988),
    m = n(97808),
    h = n(778712),
    f = n(922016),
    p = n(939249),
    g = n(140735),
    A = n(312138);
if (221552 == n.j) var v = n(192308);
var E = n(442433),
    x = n(820284),
    C = n(717558),
    _ = n(964486),
    T = n(220839),
    I = n(397244),
    S = n(394871),
    b = n(202091),
    y = n(866323),
    j = n(120842);
function N(e) {
    let { text: t } = e,
        n = (0, y.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: j.k,
        children: n((e, t) => (0, i.jsx)(b.animated.div, { className: j.H, style: e, children: t })),
    });
}
var R = n(29160),
    M = n(793574),
    O = n(688810),
    w = n(992526),
    k = n(158390),
    L = n(927813),
    P = n(682618),
    D = n(864197),
    U = n(982240),
    F = n(988341),
    G = n(521502),
    V = n(380610),
    H = n(198052),
    B = n(18235),
    W = n(183184),
    z = n(384059),
    K = n(480890),
    Z = n(601255),
    q = n(562819),
    Y = n(449582),
    $ = n(351952),
    X = n(88686),
    Q = n(214881),
    J = n(302223),
    ee = n(248778),
    et = n(609425),
    en = n(922301),
    ei = n(660184),
    el = n(643501),
    ea = n(277984),
    er = n(826673),
    es = n(617617),
    eo = n(280450),
    ed = n(615405),
    ec = n(295405),
    eu = n(935208);
let em = (0, n(945810).mj)({
    name: "2026-10-gift-cards-in-app-marketing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eh = n(997101);
let ef = `${window.GLOBAL_ENV.MARKETING_ENDPOINT}/gift-cards`,
    ep = new Set([eh.d.US]),
    eg = 3 * L.A.Millis.DAYS_30;
var eA = n(355097);
let ev = null,
    eE = null;
var ex = n(771527),
    eC = n(552122),
    e_ = n(74848),
    eT = n(607399),
    eI = n(305866),
    eS = n(707554),
    eb = n(364522),
    ey = n(22231),
    ej = n(508770),
    eN = n(935154),
    eR = n(780338);
if (221552 != n.j) var v = n(192308);
var eM = n(224640),
    eO = n(980707),
    ew = n(877784),
    ek = n(26137),
    eL = n(473935),
    eP = n(765671),
    eD = n(643056),
    eU = n(470739),
    eF = n(176781),
    eG = n(812993),
    eV = n(320448),
    eH = n(834730),
    eB = n(993401),
    eW = n(660183),
    ez = n(211450);
function eK(e) {
    return (0, i.jsx)("div", {
        className: ez.wE,
        children: (0, i.jsx)(eO.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eZ(e) {
    let {
            action: t,
            onClick: n,
            icon: a,
            label: r,
            sublabel: s,
            trailing: o,
            renderSubmenu: d,
            ref: c,
            submenuTargetElementRef: u,
            submenuAlign: m,
        } = e,
        h = null != n,
        g = (0, eB.rE)({ action: t, onClick: n }),
        [A, E] = l.useState(!1),
        x = l.useRef(null),
        C = c ?? x,
        _ = null != d,
        T = _ && h,
        I = l.useCallback(() => {
            E(!0);
        }, []),
        S = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || E(!1);
        }, []);
    function b() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: ez.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: ez.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eH.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: ez.W1,
                                    children: r,
                                }),
                                (0, i.jsx)(eH.E, { color: "currentColor", variant: "text-xs/medium", children: s }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function y(e) {
        let t;
        return (
            (t = T
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.D, { className: ez.ef, onClick: g, children: b() }),
                          (0, i.jsx)(p.D, {
                              className: ez.ap,
                              "aria-label": eW.intl.string(eW.t.PdRCRg),
                              ...e,
                              onClick: I,
                              children: (0, i.jsx)(eV._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(p.D, {
                        className: ez.ef,
                        ...e,
                        onClick: I,
                        children: [
                            b(),
                            (0, i.jsx)("div", {
                                className: ez.ap,
                                children: (0, i.jsx)(eV._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(p.D, { className: ez.ef, onClick: g, children: b() })),
            (0, i.jsx)("div", { ref: C, className: ez.jG, children: t })
        );
    }
    return _
        ? (0, i.jsx)("li", {
              className: ez.j$,
              onMouseEnter: I,
              onMouseLeave: S,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: u ?? C,
                  align: m,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: S,
                  children: y,
              }),
          })
        : (0, i.jsx)("li", { className: ez.j$, children: y() });
}
function eq(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eY = n(780964),
    e$ = n(766075),
    eX = n(734066),
    eQ = n(915725),
    eJ = n(409067),
    e0 = n(271597),
    e1 = n(297264),
    e2 = n(475358),
    e3 = n(866665),
    e5 = n(408278),
    e8 = n(625903),
    e7 = n(404778),
    e6 = n(689175),
    e4 = n(821609),
    e9 = n(532624),
    te = n(879631),
    tt = n(350535),
    tn = n(974293),
    ti = n(572164),
    tl = n(953932),
    ta = n(280483),
    tr = n(890856),
    ts = n(713517),
    to = n(609174),
    td = n(619744);
function tc(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, to.Y_)(),
        r = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, e0.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, i.jsx)(e4.$, {
        onClick: r,
        icon: ey.PencilIcon,
        variant: n,
        size: "sm",
        text: eW.intl.string(eW.t.bt75uw),
        fullWidth: !0,
    });
}
var tu = n(82716),
    tm = n(449397),
    th = n(930317),
    tf = n(285072),
    tp = n(575172);
let tg = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: s } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: d } = (0, ts.A)(o),
        c = l.useCallback(() => {
            (a?.(), (0, e0.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, i.jsx)(to.Cl, {
        clip: t,
        children: (0, i.jsx)(tr.s, {
            ref: o,
            "aria-label": eW.intl.string(eW.t.bt75uw),
            onClick: c,
            className: r()(tp.Z1, s),
            children: (0, i.jsxs)(th.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, i.jsx)("div", {
                            className: tp.Ad,
                            children: (0, i.jsx)(ej.E, { type: "new", variant: "brand" }),
                        }),
                    (0, i.jsxs)(tf.h, {
                        isVisible: d,
                        className: tp.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tp.mY,
                                children: [(0, i.jsx)(tu.z, {}), (0, i.jsx)(td.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tp.E_,
                                children: [
                                    (0, i.jsx)(tc, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tm.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tA = n(696016),
    tv = n(652215),
    tE = n(753070),
    tx = n(268378),
    tC = n(48127);
function t_(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: r } = e;
    (0, ta.A)();
    let s = (0, d.yK)([eQ.Ay], () => Object.values(eQ.Ay.getClips())),
        o = (0, d.bG)([eQ.Ay], () => eQ.Ay.getSettings()),
        c = (0, d.bG)([eQ.Ay], () => eQ.Ay.getNewClipIds()),
        u = (0, tn.aJ)("ClipsPopout"),
        m = (0, d.bG)([eQ.Ay], () => eQ.Ay.getEnableAutoclipping()),
        h = (0, d.bG)([e9.Ay], () => e9.Ay.getKeybindForAction(tv.hCu.SAVE_CLIP)),
        f = l.useCallback(
            (e) => {
                r?.(e);
            },
            [r],
        ),
        p = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = s.filter((e) => e.type === tA.nQ.CLIP && "" !== e.thumbnail && (!p || !(0, eJ.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, p]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        v = g.length > 16,
        E = null != h ? tt.dI(h.shortcut, !0) : null,
        x = [
            (0, te.$)(o.clipsLength / L.A.Millis.SECOND),
            (0, tE.zr)(o.clipsQuality.resolution),
            eW.intl.formatToPlainString(eW.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && x.push(eW.intl.string(tx.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: f,
            className: tC.SW,
            role: "dialog",
            "aria-label": eW.intl.string(eW.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tC.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tC.$,
                            children: [
                                (0, i.jsx)(e1.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: eW.intl.string(eW.t.z2jK6X),
                                }),
                                null != E && (0, i.jsx)(e2.e, { className: tC.P, shortcut: E }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tC.$s,
                            children: [
                                (0, i.jsx)(e3.m, {
                                    text: eW.intl.string(eW.t["3D5yo/"]),
                                    children: (0, i.jsx)(e5.K, {
                                        onClick: () => n(),
                                        icon: e8.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eW.intl.string(eW.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(e3.m, {
                                    text: eW.intl.string(tx.default["55C2MH"]),
                                    children: (0, i.jsx)(e5.K, {
                                        onClick: () => t(),
                                        icon: eF.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eW.intl.string(tx.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tC.ov,
                    children: [
                        x.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tC.LO, children: "\u2022" }),
                                        (0, i.jsx)(eH.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tC.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        u &&
                            (0, i.jsx)(eH.E, {
                                variant: "text-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tC.wS,
                                children: m ? eW.intl.string(tx.default.lTwKmt) : eW.intl.string(tx.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(e7.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(e6.Ch, {
                          className: tC.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tg, { clip: e, isNew: c.includes(e.id), onClose: a }, e.id)),
                              v &&
                                  (0, i.jsx)("div", {
                                      className: tC.qr,
                                      children: (0, i.jsx)(e4.$, {
                                          onClick: () => t(),
                                          text: eW.intl.string(tx.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tT, { keybindString: E }),
            ],
        })
    );
}
function tT(e) {
    let { keybindString: t } = e,
        n = (0, ti.E)();
    return (0, i.jsxs)("div", {
        className: tC.p$,
        children: [
            (0, i.jsx)(eH.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tC.qO,
                children: eW.intl.string(tx.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eH.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tC.CZ,
                      children: eW.intl.format(tx.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eH.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(e2.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(tl.A, {}),
        ],
    });
}
function tI(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eX.sw)(),
        r = !(0, d.bG)([eQ.Ay], () => eQ.Ay.getSettings().showPovClipsInGallery),
        s = (0, d.bG)(
            [eQ.Ay],
            () => {
                let e = eQ.Ay.getNewClipIds();
                return r
                    ? e.filter((e) => {
                          let t = eQ.Ay.getClipById(e);
                          return null != t && !(0, eJ.kD)(t);
                      }).length
                    : e.length;
            },
            [r],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, e0.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        c = l.useCallback(() => {
            (t(), (0, e$.openUserSettings)(eY.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, i.jsx)(eZ, {
              action: "PRESS_CLIPS",
              icon: eF.x,
              label: eW.intl.string(eW.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(eG.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(t_, { ...e, onOpenGallery: o, onOpenSettings: c, onClose: t }),
          })
        : null;
}
var tS = n(480335),
    tb = n(577390),
    ty = n(372320),
    tj = n(31956),
    tN = n(744808),
    tR = n(645507),
    tM = n(131607),
    tO = n(970931),
    tw = n(315710),
    tk = n(789645),
    tL = n(775602),
    tP = n(832248),
    tD = n(462887),
    tU = n(736653),
    tF = n(439174),
    tG = n(158045),
    tV = n(19886),
    tH = n(202541);
function tB() {
    let e = (0, tV.Xb)(),
        t = (0, tG.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tH.sp.length - 1; t >= 0; t--) {
        let i = tH.VD[tH.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tW = {
        [tH.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tH.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tH.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tH.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tH.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tH.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tH.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tH.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tz = {
        [tH.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tH.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tH.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tH.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tH.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tH.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tH.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tH.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tK = n(570484);
let tZ = l.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tq() {
    let e = (0, d.bG)([tL.Ay], () => tL.Ay.useReducedMotion),
        t = (0, tP.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tB(),
                t = (0, tD.M)((0, tU.Ay)());
            if (null == e) return null;
            let n = tW[e],
                i = tz[e],
                l = {
                    currentBadge: (0, tF.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tH.sp.indexOf(e);
            if (a > 0) {
                let e = tH.sp[a - 1],
                    n = tW[e];
                ((l.prevBadge = (0, tF.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [a, r] = l.useState(null);
    return (null != n && null == a && r(n), e || !t || null == a) ? null : (0, i.jsx)(tY, { levelUpData: a });
}
function tY(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        a = l.useCallback(() => {
            tP.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tw.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tK.i,
            children: [
                (0, i.jsx)("div", {
                    className: tK.b,
                    children: (0, i.jsx)(e3.m, {
                        text: eW.intl.string(eW.t.cpT0Cq),
                        children: (0, i.jsx)(e5.K, {
                            icon: tk.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": eW.intl.string(eW.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tZ, { levelUpData: t }) }),
            ],
        }),
    });
}
var t$ = n(397562),
    tX = n(206835),
    tQ = n(183555),
    tJ = n(465318),
    t0 = n(999291),
    t1 = n(402860),
    t2 = n(718019),
    t3 = n(365607),
    t5 = n(915614),
    t8 = n(744753),
    t7 = n(559506),
    t6 = n(646986),
    t4 = n(657538),
    t9 = n(946356),
    ne = n(465829),
    nt = n(624479),
    nn = n(206845),
    ni = n(957565),
    nl = n(427262),
    na = n(62119);
function nr(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tQ.NJ)();
    return ni.p5
        ? (0, i.jsx)(nn.A, {
              text: eW.intl.string(eW.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: nl.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(p.D, {
                      ...e,
                      className: r()(na.c, { [na.R]: n }),
                      "aria-label": eW.intl.string(eW.t.y5MwJy),
                      children: (0, i.jsx)(nt.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var ns = n(394816),
    no = n(442228),
    nd = n(885386),
    nc = n(362862),
    nu = n(621466),
    nm = n(318254),
    nh = n(863610),
    nf = n(421773),
    np = n(318346),
    ng = n(923138),
    nA = n(309954),
    nv = n(673125),
    nE = n(646731),
    nx = n(769001);
function nC(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: a, onCloseAccountPopout: s } = e;
    (0, ng.I)({ enabled: !0 });
    let { balance: o } = (0, nA.W)(),
        c = (0, d.bG)([nv.Ay], () =>
            nv.Ay.userOpenedWalletViaProfileDCF ? nv.Y0.NEW_ACHIEVEMENT : nv.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            nv.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: u, onMouseEnter: m, onMouseLeave: h, setIsHovered: g, cancelTimers: A } = (0, nf.A)(0, 500),
        E = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || h();
        }, [h]),
        x = l.useRef(null),
        C = l.useRef(null),
        _ = l.useRef(null),
        T = l.useCallback(
            (e) => {
                (_.current?.disconnect(),
                    (_.current = null),
                    null != e &&
                        ((_.current = new ResizeObserver(() => {
                            A();
                        })),
                        _.current.observe(e)));
            },
            [A],
        );
    (l.useEffect(() => () => _.current?.disconnect(), []),
        l.useEffect(() => {
            if (u)
                return (document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e));
            function e(e) {
                if ((0, v.hasAnyModalOpen)()) return;
                let t = (0, nu.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${ez.j$}`);
                null != n && n !== x.current && (A(), g(!1));
            }
        }, [u, A, g]));
    let I = l.useRef(!1);
    l.useEffect(() => {
        u || (I.current = !1);
    }, [u]);
    let S = l.useCallback(() => {
            (I.current ||
                ((I.current = !0),
                (0, np.Y)({
                    pageType: M.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: M.A.ORB_WALLET,
                    ctaObject: M.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        b = (0, eB.rE)({ action: "PRESS_ORBS", onClick: S });
    l.useEffect(() => {
        let e = n?.current,
            t = x.current;
        if (!a || null == e || null == t) return;
        function i() {
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect(),
                i = t.getBoundingClientRect(),
                l = i.bottom + 24 - n.bottom,
                a = n.top - (i.top - 24);
            l > 0 ? (e.scrollTop += l) : a > 0 && (e.scrollTop -= a);
        }
        let l = requestAnimationFrame(i),
            r = new ResizeObserver(i);
        for (let t of (r.observe(e), Array.from(e.children))) r.observe(t);
        function s() {
            (r.disconnect(), clearTimeout(o));
        }
        let o = setTimeout(s, 3e3);
        return (
            e.addEventListener("wheel", s, { once: !0 }),
            e.addEventListener("pointerdown", s, { once: !0 }),
            () => {
                (cancelAnimationFrame(l),
                    s(),
                    e.removeEventListener("wheel", s),
                    e.removeEventListener("pointerdown", s));
            }
        );
    }, [a, n]);
    let y = l.useMemo(
            () =>
                null != o
                    ? eW.intl.format(eW.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(nh.n, { dotRadius: 3.5, themed: !0, className: nx.K }),
            [o],
        ),
        j = l.useMemo(
            () =>
                c === nv.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(ej.E, { type: "new", variant: "brand" })
                    : c === nv.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(ej.E, { type: { text: eW.intl.string(eW.t.O13yhz) }, variant: "brand" })
                      : null,
            [c],
        ),
        N = l.useCallback(() => {
            (A(), g(!1), s());
        }, [A, g, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nu.vq)(t, Node) && null != x.current && x.current.contains(t) && A();
            },
            [A],
        );
    return (0, i.jsx)("li", {
        ref: x,
        className: ez.j$,
        onMouseEnter: S,
        onMouseLeave: E,
        children: (0, i.jsx)(f.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, i.jsx)("div", {
                    ref: T,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, i.jsx)(nE.vG, { onCloseWallet: N, returnRef: C, isProfilePopout: !0 }),
                }),
            shouldShow: u,
            onRequestClose: E,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: ez.jG,
                    children: (0, i.jsxs)(p.D, {
                        innerRef: C,
                        className: ez.ef,
                        ...e,
                        onClick: b,
                        children: [
                            (0, i.jsx)("div", {
                                className: ez.iA,
                                children: (0, i.jsx)(nm.C, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: ez.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eH.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: ez.W1,
                                        children: y,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: r()(ez.ap, nx._),
                                children: [j, (0, i.jsx)(eV._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var n_ = n(290863),
    nT = n(351906),
    nI = n(403362),
    nS = n(562153),
    nb = n(661531),
    ny = n(477782),
    nj = n(628284),
    nN = n(695366),
    nR = n(363195),
    nM = n(889227),
    nO = n(287809),
    nw = n(174459),
    nk = n(429707),
    nL = n(274303),
    nP = n(994125),
    nD = n(347853),
    nU = n(573879),
    nF = n(559117),
    nG = n(43105),
    nV = n(661439),
    nH = n(385113),
    nB = n(352003),
    nW = n(429913),
    nz = n(334074),
    nK = n(633075),
    nZ = n(667049),
    nq = n(90165),
    nY = n(49999),
    n$ = n(518477);
function nX(e) {
    let { targetElementRef: t, onClose: a } = e,
        [r, s] = l.useState(!1),
        o = (0, d.bG)([eo.default], () => eo.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, d.yK)([nH.A], () => nH.A.getFeaturedApplicationIds());
            ((0, nB.A)(e),
                l.useEffect(() => {
                    (0, nV.X)();
                }, []));
            let t = (0, d.bG)([eo.default], () => eo.default.getId()),
                n = (0, nZ.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nK.R), [n]),
                a = (0, nW.A)(e),
                r = l.useMemo(() => a.filter(nI.Vq), [a]),
                s = (0, d.cf)([nq.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = r.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nq.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return r.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = s[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [r, i, s]),
                { eligibleToShow: u, markAsDismissed: m } = (0, nz.hj)({
                    applications: o,
                    dismissibleContent: c.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nz.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]),
                markAsDismissed: m,
            };
        })();
    return ((0, l.useEffect)(() => {
        0 !== u.length &&
            Promise.all([
                n.e("459257"),
                n.e("535308"),
                n.e("393514"),
                n.e("816027"),
                n.e("562772"),
                n.e("970604"),
                n.e("504715"),
                n.e("677624"),
                n.e("165291"),
                n.e("796668"),
                n.e("953327"),
                n.e("733814"),
                n.e("106980"),
                n.e("839772"),
                n.e("814431"),
                n.e("763214"),
                n.e("291103"),
                n.e("59599"),
                n.e("488602"),
                n.e("426737"),
                n.e("607468"),
                n.e("440636"),
                n.e("568960"),
                n.e("315289"),
                n.e("372883"),
                n.e("396635"),
                n.e("807007"),
                n.e("162775"),
                n.e("128804"),
                n.e("60882"),
                n.e("71151"),
                n.e("985301"),
                n.e("790484"),
                n.e("211004"),
                n.e("269714"),
                n.e("62849"),
                n.e("489020"),
                n.e("670058"),
                n.e("527798"),
                n.e("892877"),
                n.e("322497"),
                n.e("249918"),
                n.e("507140"),
                n.e("862543"),
                n.e("759086"),
                n.e("504374"),
                n.e("584996"),
                n.e("101105"),
                n.e("263406"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("222969"),
                n.e("515363"),
                n.e("227853"),
                n.e("286615"),
                n.e("70866"),
                n.e("311541"),
                n.e("472847"),
                n.e("870088"),
                n.e("300641"),
                n.e("932020"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("763945"),
                n.e("261204"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("279774"),
                n.e("590088"),
                n.e("60104"),
                n.e("46083"),
                n.e("857297"),
                n.e("295570"),
                n.e("327439"),
                n.e("747802"),
                n.e("626353"),
                n.e("71169"),
                n.e("906470"),
                n.e("736663"),
                n.e("419121"),
                n.e("919789"),
                n.e("669130"),
                n.e("802890"),
                n.e("82937"),
                n.e("987221"),
                n.e("157064"),
                n.e("156957"),
                n.e("918786"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("358937"),
                n.e("448738"),
                n.e("680431"),
                n.e("338332"),
                n.e("894292"),
                n.e("153302"),
                n.e("88683"),
                n.e("363874"),
                n.e("923981"),
                n.e("750370"),
                n.e("972281"),
                n.e("307107"),
                n.e("896622"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
                n.e("387970"),
                n.e("847445"),
                n.e("547510"),
                n.e("966366"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("377109"),
                n.e("74886"),
                n.e("713273"),
                n.e("515293"),
                n.e("193457"),
                n.e("892937"),
                n.e("420446"),
                n.e("490449"),
                n.e("148758"),
                n.e("36026"),
                n.e("291043"),
                n.e("119766"),
                n.e("589154"),
                n.e("888499"),
                n.e("839182"),
                n.e("52727"),
                n.e("423117"),
                n.e("169727"),
                n.e("595990"),
                n.e("377368"),
                n.e("123727"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("127962"),
                n.e("76428"),
                n.e("834552"),
                n.e("863232"),
                n.e("993103"),
                n.e("364827"),
                n.e("708757"),
                n.e("517888"),
                n.e("811133"),
                n.e("959880"),
                n.e("174016"),
                n.e("907167"),
                n.e("910471"),
                n.e("11301"),
                n.e("952372"),
                n.e("784569"),
                n.e("861060"),
                n.e("77333"),
                n.e("56366"),
                n.e("639161"),
                n.e("477175"),
                n.e("960235"),
                n.e("402368"),
                n.e("190779"),
                n.e("910486"),
                n.e("221856"),
                n.e("678157"),
                n.e("147134"),
                n.e("883846"),
                n.e("996481"),
                n.e("331988"),
                n.e("585968"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("373122"),
                n.e("217951"),
                n.e("293159"),
                n.e("755936"),
                n.e("147662"),
                n.e("209338"),
                n.e("749894"),
                n.e("927875"),
                n.e("833703"),
                n.e("256274"),
                n.e("544571"),
                n.e("692990"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("532039"),
                n.e("719466"),
                n.e("776458"),
                n.e("576909"),
                n.e("27355"),
                n.e("406174"),
                n.e("715555"),
                n.e("776273"),
                n.e("407170"),
                n.e("572963"),
                n.e("307575"),
                n.e("229787"),
                n.e("554241"),
                n.e("724303"),
                n.e("521930"),
                n.e("53102"),
                n.e("875842"),
                n.e("88599"),
                n.e("95340"),
                n.e("354044"),
                n.e("437065"),
                n.e("709640"),
                n.e("952548"),
                n.e("636373"),
                n.e("726033"),
                n.e("655708"),
                n.e("553984"),
                n.e("884601"),
                n.e("782969"),
                n.e("14035"),
                n.e("428967"),
                n.e("475324"),
                n.e("859546"),
                n.e("608032"),
                n.e("477970"),
                n.e("386317"),
                n.e("252229"),
                n.e("77473"),
                n.e("523276"),
                n.e("25279"),
                n.e("729963"),
                n.e("812042"),
                n.e("538513"),
                n.e("102328"),
                n.e("147864"),
                n.e("830938"),
                n.e("895785"),
                n.e("122990"),
                n.e("113458"),
                n.e("534874"),
                n.e("50097"),
                n.e("265696"),
                n.e("500520"),
                n.e("201050"),
                n.e("93461"),
                n.e("203930"),
                n.e("903663"),
                n.e("36877"),
                n.e("908081"),
                n.e("829260"),
                n.e("489523"),
                n.e("327198"),
                n.e("504098"),
                n.e("245691"),
                n.e("604172"),
                n.e("568881"),
                n.e("582486"),
                n.e("350949"),
                n.e("134504"),
                n.e("908608"),
                n.e("741786"),
                n.e("553683"),
                n.e("280098"),
                n.e("704374"),
                n.e("186546"),
                n.e("723934"),
                n.e("571294"),
                n.e("598421"),
                n.e("845928"),
                n.e("443256"),
                n.e("646424"),
                n.e("114633"),
                n.e("373566"),
                n.e("720161"),
                n.e("247339"),
                n.e("897117"),
                n.e("659624"),
                n.e("384100"),
                n.e("736637"),
                n.e("653308"),
                n.e("414501"),
                n.e("819119"),
                n.e("182816"),
                n.e("64500"),
                n.e("486825"),
                n.e("552792"),
                n.e("69658"),
                n.e("671367"),
                n.e("375072"),
                n.e("569443"),
                n.e("49282"),
                n.e("235683"),
                n.e("702091"),
            ]).then(n.bind(n, 577593));
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, i.jsx)(nG.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/06b7b29c0f2eac5ce71823e813f9989b2a53aba0998090a4fa1d0ab6241127a9.svg",
              },
              title: eW.intl.string(eW.t.HMWL9c),
              body: eW.intl.string(eW.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      nY.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eW.intl.string(eW.t.VSLDly),
                      loading: r,
                      onClick: function () {
                          (s(!0),
                              (0, t1.openUserProfileModal)({ userId: o, tabSection: n$.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      ((0, v.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("515293"),
                                                  n.e("193457"),
                                                  n.e("892937"),
                                                  n.e("169727"),
                                                  n.e("487697"),
                                                  n.e("265696"),
                                                  n.e("504098"),
                                                  n.e("723934"),
                                                  n.e("720161"),
                                                  n.e("182816"),
                                                  n.e("911581"),
                                              ]).then(n.bind(n, 51820));
                                              return (n) =>
                                                  (0, i.jsx)(t, {
                                                      ...n,
                                                      trackUserProfileEditAction: () => {},
                                                      highlightedApplicationIds: e,
                                                  });
                                          },
                                          { stackingBehavior: "stack" },
                                      ),
                                          m(
                                              u.map((e) => e.id),
                                              nY.i.TAKE_ACTION,
                                          ),
                                          a());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var nQ = n(461213),
    nJ = n(818348),
    n0 = n(709516);
function n1() {
    let e = (0, d.bG)([nQ.A], () => nQ.A.getStatus()),
        t = (0, nl.MU)(e) ?? "",
        n = e === nJ.cl.INVISIBLE || e === nJ.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: n0.k,
        children: [
            (0, i.jsxs)(g.A, { tag: "div", children: [eW.intl.string(eW.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(e3.m, {
                    text: eW.intl.string(eW.t.L99HQm),
                    children: (0, i.jsx)(nN.E, {
                        size: "xs",
                        color: nb.A.colors.STATUS_WARNING,
                        "aria-label": eW.intl.string(eW.t.L99HQm),
                    }),
                }),
        ],
    });
}
var n2 = n(146901),
    n3 = n(827827);
let n5 = [
        { duration: 15 * L.A.Millis.MINUTE, label: () => eW.intl.string(eW.t["8ot6gv"]) },
        { duration: L.A.Millis.HOUR, label: () => eW.intl.string(eW.t.UMWBZr) },
        { duration: 8 * L.A.Millis.HOUR, label: () => eW.intl.string(eW.t.EpAXPC) },
        { duration: L.A.Millis.DAY, label: () => eW.intl.string(eW.t["755t4q"]) },
        { duration: 3 * L.A.Millis.DAY, label: () => eW.intl.string(eW.t["f3/1ch"]) },
        { duration: void 0, label: () => eW.intl.string(eW.t["46dqJY"]) },
    ],
    n8 = "forever";
function n7(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== tv.clD.ONLINE,
        r = (0, i.jsx)(i.Fragment, {
            children: n5.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    ny.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, n3.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? n8,
                );
            }),
        });
    return (0, i.jsx)(ny.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, nl.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eN.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n3.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? r : void 0,
    });
}
function n6(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, n2._)(e);
    return "today" === t
        ? eW.intl.formatToPlainString(eW.t.ZxxHIO, { timeString: i })
        : eW.intl.formatToPlainString(eW.t["9OFjSe"], { dateString: n, timeString: i });
}
var n4 = n(996988),
    n9 = n(207634),
    ie = n(47453);
function it(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: s, openedAt: o, className: u } = e,
        f = __OVERLAY__,
        p = (0, t0.Ay)(t.id, void 0),
        { analyticsLocations: A } = (0, O.Ay)(M.A.USER_PROFILE_ACCOUNT_POPOUT),
        E = (0, tQ.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, t$.A)(A, p, n$.R7.ACCOUNT_POPOUT);
    let { ref: x } = (0, eP.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, ts.A)(x);
    (l.useEffect(() => {
        a?.(x.current);
    }, [x, a]),
        l.useEffect(
            () => (
                tP.A.setState({ isOpen: !0 }),
                () => tP.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let T = (0, d.bG)([n_.A], () => n_.A.getStatus(t.id)),
        I = n6(nd.CY.useSetting()),
        S = (0, d.bG)([nT.A], () => nT.A.hidePersonalInformation),
        b = (0, tO.kB)(),
        y = nd.Q_.useSetting(),
        j = (function (e) {
            let t = nd.CY.useSetting(),
                n = (0, tO.kB)(),
                l = nd.Jr.useSetting();
            function a(i) {
                let l = n6(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tv.clD.DND:
                        return n ? eW.intl.string(eW.t.day5A6) : eW.intl.string(eW.t["tq/fMK"]);
                    case tv.clD.INVISIBLE:
                        return eW.intl.string(eW.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let r = (0, i.jsx)(i.Fragment, {
                    children: n5.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            ny.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tO.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n8,
                        );
                    }),
                }),
                s = n7({ status: tv.clD.ONLINE, currentStatus: e }),
                o = n7({ status: tv.clD.IDLE, currentStatus: e, description: a(tv.clD.IDLE) }),
                d = n7({ status: tv.clD.DND, currentStatus: e, description: a(tv.clD.DND) }),
                c = n7({ status: tv.clD.INVISIBLE, currentStatus: e, description: a(tv.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(ny.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(ny.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      ny.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eW.intl.string(eW.t.gJRnwK),
                                          iconLeft: eR.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: eR.BellSlashIcon },
                                          badge: { text: eW.intl.string(eW.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? eW.intl.format(eW.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            eW.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eW.intl.string(eW.t["Br1q+x"]),
                                          action: () => {
                                              (0, tO.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: r,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            });
        })(T),
        N = (function (e) {
            let t = (0, d.bG)([nO.default], () => nO.default.getCurrentUser()),
                n = (0, d.bG)([nT.A], () => nT.A.hidePersonalInformation),
                l = (0, d.bG)([nR.A], () => (0, tD.M)(nR.A.theme)),
                { multiAccountUsers: a } = (0, nP.K)(),
                r = a.map((a) => {
                    let r = new nM.A(a),
                        s = r.id === t?.id,
                        o = a.tokenStatus === nL.U.INVALID,
                        d = n ? null : `#${r.discriminator}`;
                    return (0, i.jsx)(
                        ny.Dr,
                        {
                            id: r.id,
                            focusedClassName: nF.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nF.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: r.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nF.DD,
                                            children: [
                                                (0, i.jsx)(eH.E, {
                                                    className: nF.gE,
                                                    variant: "text-sm/normal",
                                                    children: nl.Ay.getUserTag(r, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !r.hasUniqueUsername() &&
                                                    (0, i.jsx)(eH.E, {
                                                        className: nF.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(nj.y, {
                                                size: "sm",
                                                color: t
                                                    ? nb.A.unsafe_rawColors.WHITE.css
                                                    : nb.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nb.A.unsafe_rawColors.BRAND_500.css
                                                        : nb.A.unsafe_rawColors.WHITE.css,
                                                className: nF.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nN.E, {
                                                color: nb.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nb.A.unsafe_rawColors.BRAND_500.css
                                                        : nb.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nF.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nD.A)();
                                else {
                                    var n;
                                    (n = r.id) !== t?.id &&
                                        (nw.default.track(tv.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tv.JJy.USER_PROFILE },
                                        }),
                                        nk.Mx(n, void 0, nU.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        r.id,
                    );
                });
            return (
                r.push(
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(ny.bX, {}),
                            (0, i.jsx)(ny.Dr, {
                                id: "manage-accounts",
                                label: eW.intl.string(eW.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nD.A)());
                                },
                            }),
                        ],
                    }),
                ),
                r
            );
        })(n),
        R = (0, tX.A)({ analyticsLocations: A }),
        k = (0, tG.TW)(t),
        L = (0, w.J)({ location: "UserProfileAccountPopout" }),
        P = (0, eD.d)({ location: "UserProfileAccountPopout" }),
        D = l.useRef(null),
        U = l.useRef(null),
        F = l.useRef(null),
        G = (0, ty.A)(p?.profileFrame?.skuId),
        V = (0, tb.A)(p?.profileFrame?.skuId);
    (0, tj.A)({ skuId: p?.profileFrame?.skuId, openedAt: o, context: E, analyticsLocations: A });
    let H = l.useRef((0, tP.A)((e) => e.shouldRenderTenureLevelUp)),
        B = l.useMemo(() => (0, tR.A)(), []),
        [W, z] = l.useState(() => tP.A.getState().shouldRenderTenureLevelUp);
    function K(e) {
        (n?.(), (0, t1.openUserProfileModal)({ customStatusPrompt: B, sourceAnalyticsLocations: A, ...E, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            z(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Z = p?.widgets != null && p.widgets.length > 0,
        q = l.useCallback(() => {
            n();
        }, [n]),
        Y = l.useCallback(() => {
            (R(), q());
        }, [R, q]),
        $ = (0, ee.u)("UserProfileAccountPopout"),
        X = tJ.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        Q = (0, nc.H)({ location: "UserProfileAccountPopout" }),
        J = (0, tP.A)((e) => e.shouldScrollToOrbsMenuItem),
        [et, en] = (0, tM.kn)(
            [
                $ ? c.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
                X ? c.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nI.Vq),
            void 0,
            !0,
        ),
        ei = l.useId();
    return (0, i.jsx)(O.f5, {
        value: A,
        children: (0, i.jsx)(tQ.of, {
            value: E,
            openedAt: o,
            fetchStartedAt: p?.fetchStartedAt,
            fetchEndedAt: p?.fetchEndedAt,
            isLoaded: p?.isLoaded,
            children: (0, i.jsxs)(eI.l, {
                ref: x,
                "aria-labelledby": ei,
                className: r()(ez.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(g.A, {
                        children: (0, i.jsx)(eS.H, { id: ei, children: eW.intl.string(eW.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eS.F, {
                        children: [
                            (0, i.jsxs)(t9.A, {
                                className: ez.BK,
                                user: t,
                                displayProfile: p,
                                themeType: n4.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: ie.wx,
                                        children: [
                                            (0, i.jsx)(t5.A, { user: t, displayProfile: p, themeType: n4.d.POPOUT }),
                                            (0, i.jsx)(t2.A, {
                                                user: t,
                                                displayProfile: p,
                                                avatarSize: n9.T[n4.d.POPOUT].avatarSize,
                                                onOpenProfile: f ? void 0 : K,
                                            }),
                                            (0, i.jsx)(ns.A, {
                                                ref: D,
                                                user: t,
                                                themeType: n4.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: B,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eb.Ip, {
                                        ref: F,
                                        className: ez.rf,
                                        style: { pointerEvents: W ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(t7.A, { userId: t.id }),
                                            (0, i.jsx)(ne.Ay, {
                                                className: ez.eF,
                                                user: t,
                                                displayName: nS.Ay.getName(void 0, null, t),
                                                onClickName: f ? void 0 : K,
                                                displayNameTrailing: (0, i.jsx)(nr, { user: t, isVisible: C }),
                                                pronouns: p?.pronouns,
                                                trailing: (0, i.jsx)(t3.A, {
                                                    displayProfile: p,
                                                    themeType: n4.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: H.current,
                                                }),
                                            }),
                                            (0, i.jsx)(t8.A, { isPremiumUser: k, onInteraction: n }),
                                            (0, i.jsx)(no.A, {
                                                userId: t.id,
                                                userBio: p?.bio,
                                                hidePersonalInformation: S,
                                                onClose: n,
                                            }),
                                            Z &&
                                                (0, i.jsx)(t4.A, {
                                                    user: t,
                                                    widgets: p?.widgets,
                                                    onOpenUserProfileModal: K,
                                                }),
                                            (0, i.jsx)(t6.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: K,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ez.T_,
                                                children: [
                                                    (0, i.jsx)(t9.A.Overlay, {
                                                        className: ez.g0,
                                                        children: (0, i.jsxs)(eq, {
                                                            children: [
                                                                (0, i.jsx)(eZ, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eW.intl.string(eW.t.s5vZlQ),
                                                                    icon: ey.PencilIcon,
                                                                    trailing:
                                                                        null != et
                                                                            ? (0, i.jsx)("div", {
                                                                                  className: ez.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, i.jsx)(ej.E, {
                                                                                      type: "new",
                                                                                      variant: "brand",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (et ===
                                                                            c.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            en(nY.i.TAKE_ACTION),
                                                                            Y());
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, i.jsx)(eZ, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(n1, {}),
                                                                    sublabel: null != I && I,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eN.nW, { status: T, size: 12 }),
                                                                    trailing:
                                                                        (b || T === tv.clD.DND) &&
                                                                        (0, i.jsx)(eR.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: eT.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eK, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ez.hQ,
                                                                                  "aria-label": eW.intl.string(
                                                                                      eW.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: j,
                                                                              });
                                                                          },
                                                                    onClick: eT.Fr
                                                                        ? () => {
                                                                              (n(),
                                                                                  (0, v.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eM.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eW.intl.string(
                                                                                                                  eW.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eO.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eW.intl.string(
                                                                                                                      eW
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
                                                                                                                  j,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  ));
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                L &&
                                                                    P &&
                                                                    (0, i.jsx)(eZ, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: ew.q,
                                                                        label: eW.intl.string(eW.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, eU.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tI, { onClose: n, popoutContainerRef: x }),
                                                                Q &&
                                                                    (0, i.jsx)(nC, {
                                                                        popoutContainerRef: x,
                                                                        scrollerRef: F,
                                                                        shouldScrollIntoView: J,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(t9.A.Overlay, {
                                                        className: ez.g0,
                                                        children: (0, i.jsxs)(eq, {
                                                            children: [
                                                                (0, i.jsx)(eZ, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: ek.r,
                                                                    label: eW.intl.string(eW.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nD.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eK, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eW.intl.string(eW.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: N,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    ni.p5 &&
                                                                    y &&
                                                                    (0, i.jsx)(eZ, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eL.L,
                                                                        label: eW.intl.string(eW.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, ni.C)(t.id), n());
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    p?.profileEffect != null &&
                                        !H.current &&
                                        (0, i.jsx)(tS.A, { skuId: p.profileEffect.skuId, isHovering: _ }),
                                    null != G && (0, i.jsx)(tN.A, { frame: G, fadeIn: V }),
                                ],
                            }),
                            (0, i.jsx)(nX, { targetElementRef: U, onClose: n }),
                            (0, i.jsx)(tq, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ii = n(518293),
    il = n(655116),
    ia = n(438140),
    ir = n(454719),
    is = n(342296),
    io = n(852712),
    id = n(389960),
    ic = n(173660),
    iu = n(616356),
    im = n(734057),
    ih = n(629016),
    ip = n(186111),
    ig = n(192820),
    iA = n(763827),
    iv = n(967198),
    iE = n(485296),
    ix = n(486020),
    iC = n(625494),
    i_ = n(536194),
    iT = n(19575),
    iI = n(994314),
    iS = n(485599),
    ib = n(116833);
function iy(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eW.intl.string(eW.t.uwDBSq),
                  body: eW.intl.formatToPlainString(eW.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eW.intl.string(eW.t["5GD53o"]), body: eW.intl.string(eW.t["2Rb7tE"]) };
    return (0, i.jsx)(nG.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: ib.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eW.intl.string(eW.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function ij(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(iy, {
        ...t,
        onPrimaryAction: () => {
            (l(nY.i.TAKE_ACTION), (0, eU.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(nY.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var iN = n(206248);
function iR(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: r = !0, children: s } = e,
        o = (0, eX.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            r && o
                ? (0, i.jsx)(iN.H, {
                      targetElementRef: t,
                      title: eW.intl.string(tx.default.Qn21R6),
                      body: eW.intl.string(tx.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: eW.intl.string(eW.t.RzWDqY),
                          onClick: function () {
                              (n(nY.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(nY.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iM = n(379848),
    iO = n(626584),
    iw = n(757036),
    ik = n(591179),
    iL = n(531685),
    iP = n(259065),
    iD = n(701974);
let iU = new iO.A("DisplayNameStylesFlywheelCoachmark");
function iF(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: r } = (0, O.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, d.bG)([iL.A], () => iL.A.isFocused()),
        c = (0, iw.L)(tH.PremiumTypes.TIER_2),
        u = (0, ik.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, l.useCallback)(() => {
            t(nY.i.TAKE_ACTION);
            let e = nO.default.getCurrentUser();
            u && null != e
                ? (0, t1.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: r,
                      onModalOpen: () => {
                          (0, iP.L)({ analyticsLocations: r, stackingBehavior: "stack" });
                      },
                  })
                : (0, e$.openUserSettings)(eY.X.PROFILE_PANEL, { analyticsLocations: r }, () => {
                      (0, iP.L)({ analyticsLocations: r });
                  });
        }, [t, r, u]),
        h = (0, l.useCallback)(() => {
            t(nY.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(iU.error) : o || s.current?.pause();
    }, [o]);
    let f = c ? [eW.intl.string(iD.default.TyUdka)] : [eW.intl.string(iD.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(nG.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                    type: "video",
                    ref: s,
                    src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                title: eW.intl.string(iD.default.cYwrp8),
                body: f,
                actions: [{ text: eW.intl.string(eW.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var iG = n(45780),
    iV = n(696451),
    iH = n(71393),
    iB = n(685073),
    iW = n(73153);
let iz = { lastSeenInfos: {} },
    iK = iz;
class iZ extends d.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iK = e ?? iz;
    }
    getState() {
        return iK;
    }
    getGuildLastSeenInfo(e) {
        return iK.lastSeenInfos[e] ?? null;
    }
}
let iq = new iZ(iW.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iK.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iK = iz;
    },
});
var iY = n(514661);
let i$ = new iO.A("GuildTagAvailableCoachmark");
function iX(e) {
    let t = (0, d.bG)([iH.A], () => iH.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            iW.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: r } = (0, iY.A)(t?.id ?? null, () => n(nY.i.TAKE_ACTION));
    if (null == t || !(0, iB.q0)(t))
        return (i$.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eW.intl.string(eW.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: eW.intl.string(eW.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nG.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: ib.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eW.intl.formatToPlainString(eW.t["m/Tc3n"], { guildName: t.name }),
                body: eW.intl.string(eW.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nY.i.USER_DISMISS),
            }),
        ],
    });
}
function iQ(e) {
    let t = (0, d.bG)([iH.A], () => iH.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: r } = (0, iY.A)(t?.id ?? null, () => n(nY.i.TAKE_ACTION));
    if (null == t || !(0, iB.q0)(t))
        return (i$.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eW.intl.string(eW.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: eW.intl.string(eW.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nG.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: ib.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eW.intl.formatToPlainString(eW.t.VFqnyU, { guildName: t.name }),
                body: eW.intl.string(eW.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nY.i.USER_DISMISS),
            }),
        ],
    });
}
var iJ = n(843010),
    i0 = n(764231),
    i1 = n(425713);
function i2(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tB(),
        a = (0, d.bG)([tL.Ay], () => tL.Ay.useReducedMotion),
        r = (0, tP.A)((e) => e.isOpen),
        s = (0, iJ.G)();
    return a || null == l || r || s
        ? null
        : (0, i.jsx)(iM.zJ, {
              contentType: c.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(i3, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === c.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function i3(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: r } = e,
        s = tH.sp.indexOf(t),
        o = (0, i1.I)(tH.sp[s > 0 ? s - 1 : s]).ambient,
        d = (0, l.useCallback)(() => {
            (n(nY.i.TAKE_ACTION),
                tP.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iC._.dispatch(tv.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(nY.i.USER_DISMISS);
        }, [n]),
        u = tH.VD[t],
        m = eW.intl.formatToPlainString(eW.t.ewkaVR, {
            timeMilestone: (0, i0.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: eW.intl.string(eW.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(nG.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: r,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eW.intl.string(eW.t.VoDxsV),
        body: m,
        actions: h,
    });
}
var i5 = n(764014);
function i8(e) {
    let { targetElementRef: t } = e,
        n = (0, tP.A)((e) => e.isOpen),
        [l, a] = (0, tM.kn)(n ? [] : [c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], nY.m.ACCOUNT_NAME_ZONE, !0);
    return l === c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(nG.A, {
              targetElementRef: t,
              graphic: { type: "image", src: i5.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eW.intl.string(eW.t["Q+dH5r"]),
              body: eW.intl.string(eW.t.YKJw4W),
              onRequestClose: () => a(nY.i.USER_DISMISS),
              actions: [
                  {
                      text: eW.intl.string(eW.t.dcOuei),
                      onClick: function () {
                          (a(nY.i.TAKE_ACTION),
                              tP.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nv.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              iC._.dispatch(tv.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function i7(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, ii.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iG.G$)(c.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tv.dJq),
                l = (0, d.bG)(
                    [iH.A, nO.default, iV.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = iH.A.getGuild(e);
                        if (void 0 === t || !(0, iB.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nO.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = iV.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tM.ww)(l && n && !i ? [c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tv.eGj);
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, d.bG)([iq], () => (null === l ? null : iq.getGuildLastSeenInfo(l))),
                r = (0, d.bG)([iH.A], () => iH.A.getGuild(l)?.profile?.tag),
                s = null != r && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === r,
                u = null !== l && s && !o;
            return (0, tM.Wl)(u && n ? c.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iQ, {
                  guildId: e.guildId,
                  onDismiss: r,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === c.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iX, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i2, { groupName: nY.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(i8, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(iM.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: nY.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iF, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case c.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iR, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: e0.p,
                                            children: e.children,
                                        });
                                    case c.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(ij, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: l,
                                                    targetElementRef: e.targetElementRef,
                                                }),
                                            ],
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
var i6 = n(348858),
    i4 = n(615675),
    i9 = n(900797),
    le = n(847374),
    lt = n(617354),
    ln = n(829773),
    li = n(42473),
    ll = n(731854),
    la = n(516171),
    lr = n(577755);
function ls(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: s,
            iconForeground: o,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: u,
        } = e,
        m = t || n,
        {
            Component: h,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, i6.I)(m ? "undeafen" : "deafen"),
        v = n ? i4.T : h,
        { name: E } = (0, e_.x5)(ll.oh.AUDIO_OUTPUT),
        x = (0, lt.A)(t, n, a),
        { analyticsLocations: C } = (0, O.Ay)(M.A.AUDIO_OUTPUT_BUTTON),
        _ = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [m, p]),
        (0, i.jsx)(O.f5, {
            value: C,
            children: (0, i.jsx)(f.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, i.jsx)(O.f5, {
                            value: C,
                            children: (0, i.jsx)(ln.A, {
                                onInteraction: (0, K.s)("AudioDeviceMenu", M.A.ACCOUNT),
                                onClose: t,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                maybeRenderSpatialAudioCheckbox: !0,
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
                        { isShown: u } = t,
                        h = u ? i9.t : le.a;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: r()(la.Lh, { [la.v8]: m, [la.q6]: u }),
                        children: [
                            (0, i.jsx)(li.A, {
                                "aria-checked": m,
                                "aria-label": eW.intl.string(eW.t.wjcRFX),
                                className: la.eT,
                                disabled: a,
                                icon: (0, i.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nb.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? lr.o : void 0,
                                innerClassName: r()({ [lr.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: m,
                                role: "switch",
                                tooltipText: x,
                            }),
                            (0, i.jsx)(li.A, {
                                className: r()(la.UT, { [la.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(h, {
                                    className: la.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nb.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eW.intl.formatToPlainString(eW.t["f+DDY/"], { outputDeviceName: E })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? eW.intl.format(eW.t["f+DDY/"], { outputDeviceName: E })
                                    : eW.intl.string(eW.t.aA4Vce),
                                "aria-label": c
                                    ? eW.intl.formatToPlainString(eW.t["f+DDY/"], { outputDeviceName: E })
                                    : eW.intl.string(eW.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lo = n(523875),
    ld = n(666654),
    lc = n(993719);
let lu = {};
class lm extends d.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lu[e] ?? !1;
    }
}
let lh = new lm(iW.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lu[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lu[t] = !1;
    },
});
var lf = n(362823),
    lp = n(980923),
    lg = n(573549),
    lA = n(222176),
    lv = n(973324);
function lE(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: s,
            awaitingRemote: o,
            iconForeground: c,
            onMouseEnter: u,
            onMouseLeave: m,
            onClick: h,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: v,
            shouldShowPTTJoinTooltip: E,
            dismissTooltips: x,
            speaking: C,
        } = e,
        _ = (0, d.bG)([ig.Ay], () => ig.Ay.getMode() === ll.TB.PUSH_TO_TALK),
        T = (0, d.bG)([ig.Ay], () => ig.Ay.getSettings().modeOptions.shortcut),
        I = (0, d.bG)([lh], () => lh.getIsTutorialActive(lf.v.MUTE_TUTORIAL)),
        S = (0, d.bG)([iA.A], () => null != iA.A.getChannelId()),
        { name: b } = (0, e_.x5)(ll.oh.AUDIO_INPUT),
        { enabledInputProfiles: y } = (0, io.d)({ location: "MicrophoneButton" }),
        j = l.useRef(null),
        N = n || s || a,
        R = (0, lo.L)(N ? "unmute" : "mute"),
        { analyticsLocations: w } = (0, O.Ay)(M.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: L, play: P } = R,
        D = a || s ? ld.O : k;
    l.useEffect(() => () => P(), [N, P]);
    let U = (0, lp.A)(n, a, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eW.intl.string(eW.t["29gnR4"]), tooltipForceOpen: !0 }
        : E || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eW.intl.format(eW.t.c1qUOQ, { keybind: tt.dI(T).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let F = _ && S,
        G = N ? nb.A.colors.ICON_VOICE_MUTED : "currentColor",
        V = l.useCallback(() => {
            (h(), I && lc.N(lf.v.MUTE_TUTORIAL));
        }, [h, I]);
    return (0, i.jsxs)(O.f5, {
        value: w,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: j,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        x(),
                        (0, i.jsx)(O.f5, {
                            value: w,
                            children: (0, i.jsx)(ln.A, {
                                onInteraction: (0, K.s)("AudioDeviceMenu", M.A.ACCOUNT),
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
                    let { onClick: l } = e,
                        { isShown: a } = n,
                        s = a ? i9.t : le.a;
                    return (0, i.jsxs)("div", {
                        ref: j,
                        className: r()(la.Lh, { [la.v8]: N, [la.q6]: a }),
                        children: [
                            (0, i.jsx)(li.A, {
                                "aria-checked": N,
                                "aria-label": eW.intl.string(eW.t.w4m945),
                                className: la.eT,
                                disabled: o,
                                icon: (0, i.jsx)(D, { size: "custom", width: 20, height: 20, color: G, className: c }),
                                onClick: V,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    (u(), L.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), L.onMouseLeave());
                                },
                                plated: null != p,
                                redGlow: N,
                                role: "switch",
                                ...t,
                                children: F ? (0, i.jsx)("div", { className: r()(lA.U, { [lA.z]: C }) }) : null,
                            }),
                            (0, i.jsx)(li.A, {
                                "aria-label": v
                                    ? eW.intl.formatToPlainString(eW.t["18wnuD"], { inputDeviceName: b })
                                    : eW.intl.string(eW.t.fRzCbB),
                                className: r()(la.UT, { [la.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: la.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: G,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: u,
                                onMouseLeave: m,
                                plated: null != p,
                                redGlow: N,
                                tooltipType: v ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: v,
                                tooltipPositionKey: v
                                    ? eW.intl.formatToPlainString(eW.t["18wnuD"], { inputDeviceName: b })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: v
                                    ? eW.intl.format(eW.t["18wnuD"], { inputDeviceName: b })
                                    : eW.intl.string(eW.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nG.A, {
                targetElementRef: j,
                shouldShow: I,
                graphic: { type: "image", src: lv.A },
                onRequestClose: () => {
                    lc.N(lf.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eW.intl.string(lg.default.VG4zAf),
                body: eW.intl.string(lg.default["8VIRzR"]),
            }),
        ],
    });
}
var lx = n(935399),
    lC = n(505312),
    l_ = n(848847),
    lT = n(975807),
    lI = n(745188);
let lS = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="143" height="107"><rect x="1" y="1" width="141" height="105" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
function lb(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = l.useMemo(
            () => [
                {
                    text: eW.intl.string(lI.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, lT.A)(ef), t(nY.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        r = l.useCallback(() => {
            t(nY.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(nG.A, {
        targetElementRef: n,
        graphic: { type: "image", src: lS, aspectRatio: "6/4" },
        title: eW.intl.string(lI.default.tmst3F),
        body: eW.intl.string(lI.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: a,
        onRequestClose: r,
    });
}
function ly(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, O.Ay)(M.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(nG.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: eW.intl.string(eW.t.Mjs8KR),
        body: eW.intl.string(eW.t.U0INks),
        actions: [
            {
                text: eW.intl.string(eW.t.NENZhS),
                onClick: () => {
                    ((0, e$.openUserSettings)(eY.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(nY.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(nY.i.USER_DISMISS),
    });
}
var lj = n(88001),
    lN = n(148155),
    lR = n(438705);
function lM(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        r = l.useCallback(() => {
            (a(), (0, e$.openUserSettings)(eY.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, i.jsx)(nG.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lR },
        shouldShow: n,
        title: eW.intl.format(lN.default.bx8sR9, { premiumGroupProductName: (0, lj.DP)() }),
        body: eW.intl.format(lN.default.Pw4OFZ, { premiumGroupProductName: (0, lj.DP)() }),
        onRequestClose: a,
        actions: [{ text: eW.intl.string(lN.default.DD26QR), onClick: r }],
    });
}
var lO = n(873298),
    lw = n(840387);
function lk(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, lw.Z)(),
        r = nd.KP.useSetting(),
        s = a && r !== lO.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(nY.i.TAKE_ACTION), (0, e$.openUserSettings)(eY.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        d = l.useCallback(() => {
            t(nY.i.USER_DISMISS);
        }, [t]),
        c = s
            ? r === lO.KP.FRIENDS_ONLY
                ? eW.intl.string(eW.t["/hogEy"])
                : eW.intl.string(eW.t["6hEfm1"])
            : eW.intl.string(eW.t.bnNxW1);
    return (0, i.jsx)(nG.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: d,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/6127c744cb2822ba2b138271130d9493e2579c126af2ee58921b6f988c6a46d6.svg",
        },
        title: eW.intl.string(eW.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eW.intl.string(eW.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var lL = n(415443);
function lP(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: r,
            onContextMenu: s,
            dismissibleContents: o,
            iconForeground: d,
            nameplate: u,
        } = e,
        m = l.useRef(null),
        [h, f] = l.useState(!1);
    (0, lx.Ay)(() => {
        function e() {
            return f(!0);
        }
        return (
            iC._.subscribe(tv.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iC._.unsubscribe(tv.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = l.useCallback(() => {
            (f(!1), r());
        }, [r]),
        g = ex.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, lL.A)("1791404378928", !0);
        t =
            null != e
                ? eW.intl.formatToPlainString(eW.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : eW.intl.formatToPlainString(eW.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = eW.intl.string(eW.t.cduTBL);
    let A = e8.SettingsIcon,
        v = (0, lC.w)();
    return (
        (A = null != a ? l_.H : v.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(li.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: s,
                    "aria-label": eW.intl.string(eW.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...v.events,
                    plated: null != u,
                }),
                (0, i.jsx)(lM, { targetElementRef: m, shouldShow: h, onDismiss: () => f(!1) }),
                (0, i.jsx)(iM.Ay, {
                    contentTypes: o,
                    groupName: nY.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === c.M.TINY_BRONCO && null != ia.PL
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(ia.PL, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === c.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(lk, { markAsDismissed: n, targetElementRef: m })
                              : t === c.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, i.jsx)(lb, { markAsDismissed: n, targetElementRef: m })
                                : null != g && t === g
                                  ? (0, i.jsx)(ly, { markAsDismissed: n, targetElementRef: m })
                                  : null;
                    },
                }),
            ],
        })
    );
}
var lD = n(358285);
let lU = iT.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    lF = 2.5 * L.A.Millis.SECOND,
    lG = 2 * L.A.Millis.MINUTE,
    lV = 5 * L.A.Millis.SECOND;
function lH(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: a = -1 / 0,
            streaming: s,
            currentUser: o,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: m,
            nameplate: g,
            avatarDecoration: A,
            "data-jump-section": v,
        } = e,
        E = l.useRef(null),
        C = t ?? E,
        _ = (0, ix.F_)({ avatarDecoration: A, size: (0, q.Te)(h._3.SIZE_32) }),
        I = (0, et.A)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: b,
            setHighlightBadge: y,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, i] = l.useState(),
                [a, r] = l.useState(!1);
            return (
                (0, T.A)(() => r(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        iC._.subscribe(tv.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iC._.unsubscribe(tv.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        j = (0, $.K)(g);
    return null == o
        ? null
        : (0, i.jsx)(x.A, {
              object: tv.ZSU.AVATAR,
              children: (0, i.jsx)(is.A, {
                  user: o,
                  targetElementRef: C,
                  clickTrap: !0,
                  preload: () =>
                      (0, ir.A)(o.id, o.getAvatarURL(void 0, is.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(it, {
                          currentUser: o,
                          highlightBadge: b,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lD.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: f.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (u(), y(void 0));
                  },
                  children: (e) => {
                      S(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: C,
                          style: j,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              (e.onClick?.(t), c?.(t));
                          },
                          className: r()(lD.Q9, { [lD.ZQ]: null != g }),
                          children: [
                              (0, i.jsx)(p.D, {
                                  ...u,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": eW.intl.string(eW.t["5fWB8U"]),
                                  focusProps: { ringTarget: C },
                                  className: lD.$n,
                                  "data-jump-section": v,
                              }),
                              (0, i.jsx)(lU, {
                                  size: h._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: _,
                                  status: s ? tv.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: lD.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lD.oM, children: m(I) }),
                          ],
                      });
                  },
              }),
          });
}
class lB extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new u.Ep();
    lastSpeakingWhileMutedNotificationTime = void 0;
    state = { hovered: !1, shouldShowNametagTooltip: !1, shouldShowSpeakingWhileMutedTooltip: !1, hoveringOnMute: !1 };
    containerRef = l.createRef();
    avatarWithPopoutRef = l.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: l } = this.props;
        (l !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged());
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        ((0, W.A)(e, t, tv.JJy.ACCOUNT_PANEL), (0, z.X)(M.A.ACCOUNT, z.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, B.A)(e, tv.JJy.ACCOUNT_PANEL), (0, z.X)(M.A.ACCOUNT, z.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            iA.A.isConnected() ? (0, e$.openUserSettings)(eY.X.VOICE_AND_VIDEO_PANEL) : (0, e$.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("618416"),
                    n.e("902654"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("101105"),
                    n.e("263406"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("410526"),
                    n.e("202985"),
                    n.e("603619"),
                    n.e("222969"),
                    n.e("515363"),
                    n.e("162775"),
                    n.e("128804"),
                    n.e("60882"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("70866"),
                    n.e("311541"),
                    n.e("472847"),
                    n.e("870088"),
                    n.e("300641"),
                    n.e("932020"),
                    n.e("586662"),
                    n.e("758053"),
                    n.e("247471"),
                    n.e("889002"),
                    n.e("709976"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("763945"),
                    n.e("261204"),
                    n.e("686731"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("279774"),
                    n.e("590088"),
                    n.e("60104"),
                    n.e("46083"),
                    n.e("857297"),
                    n.e("295570"),
                    n.e("327439"),
                    n.e("747802"),
                    n.e("626353"),
                    n.e("71169"),
                    n.e("906470"),
                    n.e("736663"),
                    n.e("419121"),
                    n.e("489020"),
                    n.e("919789"),
                    n.e("669130"),
                    n.e("802890"),
                    n.e("82937"),
                    n.e("987221"),
                    n.e("157064"),
                    n.e("156957"),
                    n.e("918786"),
                    n.e("701335"),
                    n.e("257935"),
                    n.e("724086"),
                    n.e("358937"),
                    n.e("448738"),
                    n.e("680431"),
                    n.e("338332"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("88683"),
                    n.e("363874"),
                    n.e("923981"),
                    n.e("750370"),
                    n.e("972281"),
                    n.e("307107"),
                    n.e("896622"),
                    n.e("466592"),
                    n.e("73946"),
                    n.e("282050"),
                    n.e("436101"),
                    n.e("976888"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("547510"),
                    n.e("966366"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("411938"),
                    n.e("326559"),
                    n.e("217991"),
                    n.e("31159"),
                    n.e("952068"),
                    n.e("768289"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("737853"),
                    n.e("225307"),
                    n.e("332165"),
                    n.e("524434"),
                    n.e("854326"),
                    n.e("984"),
                    n.e("226229"),
                    n.e("981833"),
                    n.e("614929"),
                    n.e("570473"),
                    n.e("516497"),
                    n.e("24774"),
                    n.e("326794"),
                    n.e("489565"),
                    n.e("684231"),
                    n.e("570690"),
                    n.e("886631"),
                    n.e("435860"),
                    n.e("426782"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("194704"),
                    n.e("684290"),
                    n.e("403643"),
                    n.e("323223"),
                    n.e("830560"),
                    n.e("526575"),
                    n.e("588035"),
                    n.e("165291"),
                    n.e("109383"),
                    n.e("818291"),
                    n.e("243794"),
                    n.e("519435"),
                    n.e("10985"),
                    n.e("171206"),
                    n.e("788029"),
                    n.e("45036"),
                    n.e("480889"),
                    n.e("434683"),
                    n.e("920955"),
                    n.e("505928"),
                    n.e("752657"),
                    n.e("747973"),
                    n.e("314001"),
                    n.e("885251"),
                    n.e("914175"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("444038"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("123727"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("358574"),
                    n.e("689521"),
                    n.e("398791"),
                    n.e("10886"),
                    n.e("84993"),
                    n.e("343298"),
                    n.e("592268"),
                    n.e("852197"),
                    n.e("553627"),
                    n.e("59599"),
                    n.e("46238"),
                    n.e("736919"),
                    n.e("440636"),
                    n.e("568960"),
                    n.e("459257"),
                    n.e("790484"),
                    n.e("985301"),
                    n.e("631323"),
                    n.e("464452"),
                    n.e("74979"),
                    n.e("714144"),
                    n.e("816027"),
                    n.e("458855"),
                    n.e("305161"),
                    n.e("845486"),
                    n.e("401425"),
                    n.e("120561"),
                    n.e("880186"),
                    n.e("58353"),
                    n.e("17256"),
                    n.e("377016"),
                    n.e("226867"),
                    n.e("754366"),
                    n.e("657682"),
                    n.e("600336"),
                    n.e("535413"),
                    n.e("172413"),
                    n.e("145006"),
                    n.e("205894"),
                    n.e("38956"),
                    n.e("302458"),
                    n.e("556436"),
                    n.e("256172"),
                    n.e("945210"),
                    n.e("655282"),
                    n.e("792818"),
                    n.e("861161"),
                    n.e("579958"),
                    n.e("27612"),
                    n.e("987313"),
                    n.e("657266"),
                    n.e("622074"),
                    n.e("587308"),
                    n.e("903758"),
                    n.e("962811"),
                    n.e("855773"),
                    n.e("365461"),
                    n.e("96922"),
                    n.e("292699"),
                    n.e("198877"),
                    n.e("531521"),
                    n.e("786830"),
                    n.e("873943"),
                    n.e("152263"),
                    n.e("28636"),
                    n.e("597981"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("301850"),
                    n.e("926787"),
                    n.e("870423"),
                    n.e("727139"),
                    n.e("993562"),
                    n.e("464838"),
                    n.e("772699"),
                    n.e("40074"),
                    n.e("733814"),
                    n.e("202342"),
                    n.e("988435"),
                    n.e("377476"),
                    n.e("403032"),
                    n.e("746309"),
                    n.e("883221"),
                    n.e("330150"),
                    n.e("205406"),
                    n.e("64640"),
                    n.e("368991"),
                    n.e("223213"),
                    n.e("584996"),
                    n.e("377109"),
                    n.e("656997"),
                    n.e("828849"),
                    n.e("74886"),
                    n.e("713273"),
                    n.e("944121"),
                    n.e("245851"),
                    n.e("459397"),
                    n.e("652014"),
                    n.e("643363"),
                    n.e("980902"),
                    n.e("157771"),
                    n.e("721654"),
                    n.e("283543"),
                    n.e("715958"),
                    n.e("560042"),
                    n.e("824992"),
                    n.e("827649"),
                    n.e("860350"),
                    n.e("769590"),
                    n.e("580305"),
                    n.e("161411"),
                    n.e("966268"),
                    n.e("25839"),
                    n.e("683084"),
                    n.e("927808"),
                    n.e("273298"),
                    n.e("925807"),
                    n.e("959922"),
                    n.e("997926"),
                    n.e("180556"),
                    n.e("876880"),
                    n.e("731202"),
                    n.e("888213"),
                    n.e("150183"),
                    n.e("394692"),
                    n.e("272788"),
                    n.e("704570"),
                    n.e("595944"),
                    n.e("45374"),
                    n.e("10058"),
                    n.e("859516"),
                    n.e("30482"),
                    n.e("641794"),
                    n.e("259298"),
                    n.e("49571"),
                    n.e("388474"),
                    n.e("774188"),
                    n.e("280999"),
                    n.e("362079"),
                    n.e("557729"),
                    n.e("463143"),
                    n.e("363750"),
                    n.e("28420"),
                    n.e("477550"),
                    n.e("71930"),
                    n.e("97191"),
                    n.e("385504"),
                    n.e("310994"),
                    n.e("770720"),
                    n.e("195830"),
                    n.e("338218"),
                    n.e("846582"),
                    n.e("589752"),
                    n.e("53719"),
                    n.e("992535"),
                    n.e("737132"),
                    n.e("207998"),
                    n.e("442781"),
                    n.e("803511"),
                    n.e("955410"),
                    n.e("868052"),
                    n.e("106980"),
                    n.e("951589"),
                    n.e("257073"),
                    n.e("179028"),
                    n.e("29489"),
                    n.e("269714"),
                    n.e("445380"),
                    n.e("926018"),
                    n.e("120239"),
                    n.e("213217"),
                    n.e("680015"),
                    n.e("585005"),
                    n.e("684986"),
                    n.e("527302"),
                    n.e("423538"),
                    n.e("700572"),
                    n.e("14775"),
                    n.e("446761"),
                    n.e("718269"),
                    n.e("530166"),
                    n.e("594045"),
                    n.e("348567"),
                    n.e("452075"),
                    n.e("900277"),
                    n.e("774346"),
                    n.e("127962"),
                    n.e("503376"),
                    n.e("494822"),
                    n.e("926132"),
                    n.e("76428"),
                    n.e("834552"),
                    n.e("863232"),
                    n.e("993103"),
                    n.e("364827"),
                    n.e("708757"),
                    n.e("517888"),
                    n.e("811133"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("907167"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("952372"),
                    n.e("784569"),
                    n.e("861060"),
                    n.e("77333"),
                    n.e("56366"),
                    n.e("639161"),
                    n.e("477175"),
                    n.e("960235"),
                    n.e("402368"),
                    n.e("190779"),
                    n.e("910486"),
                    n.e("221856"),
                    n.e("678157"),
                    n.e("147134"),
                    n.e("883846"),
                    n.e("996481"),
                    n.e("331988"),
                    n.e("585968"),
                    n.e("40291"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("293159"),
                    n.e("755936"),
                    n.e("147662"),
                    n.e("209338"),
                    n.e("749894"),
                    n.e("927875"),
                    n.e("833703"),
                    n.e("256274"),
                    n.e("544571"),
                    n.e("692990"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("532039"),
                    n.e("719466"),
                    n.e("776458"),
                    n.e("576909"),
                    n.e("27355"),
                    n.e("406174"),
                    n.e("715555"),
                    n.e("393336"),
                    n.e("481647"),
                    n.e("776273"),
                    n.e("776602"),
                    n.e("140402"),
                    n.e("391763"),
                    n.e("21921"),
                    n.e("407170"),
                    n.e("811310"),
                    n.e("571210"),
                    n.e("676418"),
                    n.e("572963"),
                    n.e("307575"),
                    n.e("897073"),
                    n.e("942724"),
                    n.e("913823"),
                    n.e("393766"),
                    n.e("166495"),
                    n.e("401518"),
                    n.e("88342"),
                    n.e("187110"),
                    n.e("854461"),
                    n.e("139970"),
                    n.e("554241"),
                    n.e("940258"),
                    n.e("724303"),
                    n.e("198329"),
                    n.e("858164"),
                    n.e("521930"),
                    n.e("292583"),
                    n.e("308555"),
                    n.e("53102"),
                    n.e("110327"),
                    n.e("586127"),
                    n.e("427032"),
                    n.e("173764"),
                    n.e("875842"),
                    n.e("311802"),
                    n.e("698965"),
                    n.e("9205"),
                    n.e("25949"),
                    n.e("836863"),
                    n.e("931319"),
                    n.e("854622"),
                    n.e("807936"),
                    n.e("344502"),
                    n.e("146070"),
                    n.e("617249"),
                    n.e("88599"),
                    n.e("179049"),
                    n.e("95340"),
                    n.e("362422"),
                    n.e("590365"),
                    n.e("989088"),
                    n.e("37977"),
                    n.e("136149"),
                    n.e("470068"),
                    n.e("354044"),
                    n.e("817989"),
                    n.e("437065"),
                    n.e("720590"),
                    n.e("709640"),
                    n.e("23055"),
                    n.e("235313"),
                    n.e("147626"),
                    n.e("952548"),
                    n.e("613867"),
                    n.e("164776"),
                    n.e("203589"),
                    n.e("636373"),
                    n.e("294857"),
                    n.e("726033"),
                    n.e("480830"),
                    n.e("179745"),
                    n.e("655708"),
                    n.e("64504"),
                    n.e("553984"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("154469"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("212055"),
                    n.e("486672"),
                    n.e("14035"),
                    n.e("632756"),
                    n.e("564850"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("902564"),
                    n.e("428967"),
                    n.e("92935"),
                    n.e("67878"),
                    n.e("475324"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("731503"),
                    n.e("803332"),
                    n.e("859546"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("741678"),
                    n.e("608032"),
                    n.e("852617"),
                    n.e("477970"),
                    n.e("844780"),
                    n.e("102698"),
                    n.e("204744"),
                    n.e("737021"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("211185"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("41332"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("436564"),
                    n.e("282783"),
                    n.e("432209"),
                    n.e("893349"),
                    n.e("368062"),
                    n.e("859991"),
                    n.e("386317"),
                    n.e("709371"),
                    n.e("924691"),
                    n.e("252229"),
                    n.e("603998"),
                    n.e("77473"),
                    n.e("939171"),
                    n.e("987478"),
                    n.e("550033"),
                    n.e("96680"),
                    n.e("523276"),
                    n.e("868214"),
                    n.e("25279"),
                    n.e("661814"),
                    n.e("729963"),
                    n.e("812042"),
                    n.e("612287"),
                    n.e("588070"),
                    n.e("692513"),
                    n.e("538513"),
                    n.e("102328"),
                    n.e("147864"),
                    n.e("793438"),
                    n.e("830938"),
                    n.e("691671"),
                    n.e("895785"),
                    n.e("122990"),
                    n.e("113458"),
                    n.e("534874"),
                    n.e("305557"),
                    n.e("36227"),
                    n.e("50097"),
                    n.e("265696"),
                    n.e("535507"),
                    n.e("500520"),
                    n.e("201050"),
                    n.e("883952"),
                    n.e("229666"),
                    n.e("92295"),
                    n.e("589916"),
                    n.e("460773"),
                    n.e("159957"),
                    n.e("458273"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("278045"),
                    n.e("26001"),
                    n.e("838056"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("93461"),
                    n.e("203930"),
                    n.e("935948"),
                    n.e("708536"),
                    n.e("120379"),
                    n.e("903663"),
                    n.e("411353"),
                    n.e("508829"),
                    n.e("824547"),
                    n.e("896804"),
                    n.e("36877"),
                    n.e("963203"),
                    n.e("295998"),
                    n.e("275133"),
                    n.e("819193"),
                    n.e("437961"),
                    n.e("201243"),
                    n.e("215920"),
                    n.e("951811"),
                    n.e("228850"),
                    n.e("908081"),
                    n.e("496268"),
                    n.e("527687"),
                    n.e("139103"),
                    n.e("904774"),
                    n.e("78601"),
                    n.e("574678"),
                    n.e("829260"),
                    n.e("806295"),
                    n.e("342234"),
                    n.e("81189"),
                    n.e("66580"),
                    n.e("200203"),
                    n.e("489523"),
                    n.e("249629"),
                    n.e("726294"),
                    n.e("780407"),
                    n.e("127659"),
                    n.e("327198"),
                    n.e("267255"),
                    n.e("276814"),
                    n.e("132737"),
                    n.e("781949"),
                    n.e("356675"),
                    n.e("504098"),
                    n.e("283300"),
                    n.e("245691"),
                    n.e("98972"),
                    n.e("431649"),
                    n.e("604172"),
                    n.e("734546"),
                    n.e("568881"),
                    n.e("341701"),
                    n.e("562999"),
                    n.e("283230"),
                    n.e("42834"),
                    n.e("248836"),
                    n.e("225612"),
                    n.e("468083"),
                    n.e("548730"),
                    n.e("965576"),
                    n.e("871467"),
                    n.e("350949"),
                    n.e("270591"),
                    n.e("825947"),
                    n.e("51892"),
                    n.e("841838"),
                    n.e("472789"),
                    n.e("137937"),
                    n.e("115332"),
                    n.e("760989"),
                    n.e("827335"),
                    n.e("369501"),
                    n.e("303710"),
                    n.e("949013"),
                    n.e("860003"),
                    n.e("396325"),
                    n.e("808979"),
                    n.e("33448"),
                    n.e("645830"),
                    n.e("512162"),
                    n.e("733771"),
                    n.e("866008"),
                    n.e("531158"),
                    n.e("79216"),
                    n.e("946039"),
                    n.e("995602"),
                    n.e("816589"),
                    n.e("544901"),
                    n.e("929569"),
                    n.e("896480"),
                    n.e("146149"),
                    n.e("986300"),
                    n.e("479006"),
                    n.e("138733"),
                    n.e("759174"),
                    n.e("576415"),
                    n.e("983947"),
                    n.e("944727"),
                    n.e("705871"),
                    n.e("527462"),
                    n.e("501888"),
                    n.e("186546"),
                    n.e("322455"),
                    n.e("960816"),
                    n.e("168031"),
                    n.e("271203"),
                    n.e("175284"),
                    n.e("384820"),
                    n.e("966598"),
                    n.e("845928"),
                    n.e("506627"),
                    n.e("443256"),
                    n.e("360536"),
                    n.e("340346"),
                    n.e("864926"),
                    n.e("812411"),
                    n.e("888205"),
                    n.e("775951"),
                    n.e("858531"),
                    n.e("228011"),
                    n.e("373566"),
                    n.e("815057"),
                    n.e("702846"),
                    n.e("991531"),
                    n.e("462318"),
                    n.e("341638"),
                    n.e("523638"),
                    n.e("450541"),
                    n.e("647999"),
                    n.e("337886"),
                    n.e("311008"),
                    n.e("61750"),
                    n.e("220803"),
                    n.e("195782"),
                    n.e("659624"),
                    n.e("679019"),
                    n.e("262720"),
                    n.e("483518"),
                    n.e("846327"),
                    n.e("531997"),
                    n.e("809940"),
                    n.e("787462"),
                    n.e("798384"),
                    n.e("986629"),
                    n.e("42408"),
                    n.e("943534"),
                    n.e("124564"),
                    n.e("666601"),
                    n.e("739725"),
                    n.e("313052"),
                    n.e("639721"),
                    n.e("419631"),
                    n.e("82384"),
                    n.e("903820"),
                    n.e("876892"),
                    n.e("971508"),
                    n.e("816799"),
                    n.e("912118"),
                    n.e("852694"),
                    n.e("728549"),
                    n.e("632482"),
                    n.e("162883"),
                    n.e("540976"),
                    n.e("85216"),
                    n.e("883922"),
                    n.e("649351"),
                    n.e("483102"),
                    n.e("902552"),
                    n.e("580890"),
                    n.e("689588"),
                    n.e("524084"),
                    n.e("44264"),
                    n.e("821403"),
                    n.e("444790"),
                    n.e("310022"),
                    n.e("874913"),
                    n.e("435476"),
                    n.e("665807"),
                    n.e("258327"),
                    n.e("348072"),
                    n.e("214451"),
                    n.e("407755"),
                    n.e("993720"),
                    n.e("654658"),
                    n.e("888497"),
                    n.e("233049"),
                    n.e("569443"),
                    n.e("439518"),
                    n.e("543456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, K.s)("UserSettingsMenu", M.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, K.s)("AudioDeviceMenu", M.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, io.d)({ location: "Account" });
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
            }));
    };
    handleOutputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
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
            }));
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleMouseEnterMute = () => {
        (this.setState({ hoveringOnMute: !0, shouldShowSpeakingWhileMutedTooltip: !1 }),
            this.speakingWhileMutedTooltipTimeout.stop());
    };
    handleMouseLeaveMute = () => {
        this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
        (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
    };
    dismissTooltips = () => {
        (this.props.onDismissDeviceChangedTooltip?.(), this.dismissSpeakingWhileMutedTooltip());
    };
    handleOccludedChanged = () => {
        let { occluded: e } = this.props;
        e && this.setState({ shouldShowNametagTooltip: !1, shouldShowSpeakingWhileMutedTooltip: !1 });
    };
    handleSpeakingWhileMutedChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhileMuted: i,
                occluded: l,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            s =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lG;
        i
            ? r ||
              !e ||
              t ||
              n ||
              l ||
              !s ||
              null != a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(lF, () =>
                          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      ));
              })
            : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              this.speakingWhileMutedTooltipTimeout.stop());
    };
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: l,
                status: a,
                userTag: r,
                voiceChannel: s,
            } = this.props;
        if (null == l) return null;
        if ((0, I.A)({ activities: t, status: a, applicationStream: n, voiceChannel: s }))
            return (0, i.jsxs)(R.A, {
                hoverText: r,
                forceHover: e,
                children: [
                    (0, i.jsx)(g.A, { children: nl.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: lD.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tv.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: r,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(g.A, { children: nl.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(J.A, { activity: o, emojiClassName: lD.Zg, className: lD.WO }),
                  ],
              })
            : null != a && a !== tv.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, i.jsx)(N, { text: nl.Ay.humanizeStatus(a) }),
                })
              : r;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: lD.eW,
                          children: (0, i.jsx)(iS.A, {
                              className: r()({ [lD.e8]: null != e }),
                              children: (0, i.jsx)(ei.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? en.G.ANIMATED : en.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lD.XP,
                          children: (0, i.jsx)(iI.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let {
            badgeDirectoryNuxPopoverVariant: t,
            currentUser: n,
            dismissibleContents: l,
            isOrbchievementsEnabled: a,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(i7, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, i.jsx)(lH, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: a } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(A.sk, {
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          ref: this.containerRef,
                          className: r()(lD.kL, { [lD.UG]: null != n, [lD.bc]: !l, [lD.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(Q.A, { nameplate: t, hovered: s, placement: X.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(lW, {
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
              });
    }
}
function lW(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: a,
            serverMute: r,
            serverDeaf: s,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: d,
            webBuildOverride: c,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: f,
            handleInputAudioContextMenu: p,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: v,
            dismissibleContents: E,
            occluded: x,
            nameplate: C,
            accountContainerRef: _,
            deviceChangedTooltipType: T,
            dismissTooltips: I,
            speaking: S,
        } = e,
        b = (0, $.K)(C);
    function y() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(lP, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: v,
            dismissibleContents: [...E.settings, ...e],
            iconForeground: null != C ? lD.t4 : void 0,
            nameplate: C,
        });
    }
    return (0, i.jsxs)("div", {
        className: lD.Uo,
        style: b,
        children: [
            (0, i.jsx)(lE, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: f,
                onContextMenu: p,
                iconForeground: null != C ? lD.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: d,
                shouldShowInputDeviceChangedTooltip: !d && "input" === T,
                dismissTooltips: I,
                speaking: S,
            }),
            (0, i.jsx)(ls, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != C ? lD.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: I,
            }),
            null != ia.Lf
                ? (0, i.jsx)(l.Suspense, { fallback: y(), children: (0, i.jsx)(ia.Lf, { occluded: x, children: y }) })
                : y(),
        ],
    });
}
function lz(e) {
    let t = (0, d.bG)([iA.A], () => null != iA.A.getChannelId()),
        n = (0, e_.Py)(e),
        i = l.useRef(new u.Ep()),
        [a, r] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (r(!0),
            i.current.start(lV, () => {
                r(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        (r(!1), i.current.stop());
    }, []);
    return (
        (0, _.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: s }
    );
}
function lK() {
    let e = (0, d.bG)([nO.default], () => nO.default.getCurrentUser()),
        t = (0, d.bG)([eo.default], () => eo.default.getId()),
        {
            activities: n,
            streaming: a,
            status: r,
        } = (0, d.cf)([nQ.A], () => {
            let e = nQ.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tv.$pd.STREAMING;
                    }),
                status: nQ.A.getStatus(),
            };
        }),
        s = (0, d.bG)([iu.A], () => iu.A.getAnyStreamForUser(t)),
        u = (0, C.A)({ userId: t }),
        m = (0, d.bG)([iE.A], () => iE.A.getVoiceVolume(t)),
        h = nl.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, d.bG)([iA.A, im.A], () => {
            let e = iA.A.getChannelId();
            return null != e ? im.A.getChannel(e) : null;
        }),
        { mute: p, selfMute: g, suppress: A } = (0, ic.A)(f),
        { selfDeaf: E, deaf: x } = (0, id.A)(f),
        _ = (0, d.bG)([G.A], () => ((0, V.kK)() ? G.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        T = (0, d.bG)([ig.Ay], () => ig.Ay.getSpeakingWhileMuted()),
        I = (0, d.bG)([H.A], () => H.A.isFullscreenInContext()),
        S = (0, d.bG)([ip.A], () => ip.A.hasLayers()),
        b = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || S || i_.P.isDisallowPopupsSet() || I,
        y = (0, d.bG)([el.default], () => null != el.default.getAwaitingRemoteSessionInfo()),
        j = (0, d.bG)([iv.A], () => iv.A.getGuildId()),
        N = e?.avatarDecoration,
        R = (0, Z.A)(N),
        B = nl.Ay.useName(e) ?? "",
        { analyticsLocations: W } = (0, O.Ay)(M.A.ACCOUNT),
        z = (0, Y.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: K } = (0, ii.c9)(),
        q = (0, d.bG)([il.A, nO.default, ih.A], () => {
            let e,
                t = il.A.getSyncingWith(),
                n = il.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(ih.A.getParty(e) ?? []))
                        .map((e) => nO.default.getUser(e))
                        .filter(nI.Vq)
                        .value()),
                i.length > 1
            );
        }),
        $ = { avatar: [], settings: [] },
        X = (0, nc.H)({ location: "Account" }) && !b,
        Q = eC.A.useIsEligible(),
        J = ex.A.coachmarkDismissibleContent,
        et = (0, ee.u)("AccountCoachmark"),
        en = (0, w.J)({ location: "AccountCoachmark" }),
        ei = (function (e) {
            var t;
            let { enabled: n } = ((t = { location: e }), { enabled: em.useConfig(t).enabled }),
                i = (0, d.bG)([es.A], () => es.A.hasLoaded(eA.oD.PRELOADED_USER_SETTINGS)),
                a = (0, d.bG)([eo.default], () => eo.default.getId()),
                r = null != a && eu.default.age(a) >= eg,
                s = (0, er.HX)(c.M.GIFT_CARDS_MARKETING_COACHMARK),
                o = (0, d.bG)([ed.A], () => ed.A.ipCountryCode),
                { hasFetchedPaymentSources: u, hasPaymentSource: m } = (0, d.cf)([ec.A], () => ({
                    hasFetchedPaymentSources: ec.A.hasFetchedPaymentSources,
                    hasPaymentSource: ec.A.paymentSourceIds.length > 0,
                })),
                h = n && r && i && !s && null != o && ep.has(o);
            return (
                l.useEffect(() => {
                    !h ||
                        ev === a ||
                        ec.A.hasFetchedPaymentSources ||
                        ed.A.isPaymentSourceFetching ||
                        ((ev = a),
                        ea.$o().then((e) => {
                            null == e && (eE = a);
                        }));
                }, [h, a]),
                h && eE !== a && u && !m
            );
        })("AccountCoachmark"),
        eh = (function (e) {
            let { currentUserId: t, enabled: n, fetchCatalog: i = !0 } = e,
                a = n ? t : null,
                r = (0, d.bG)([U.Ay], () => null != a && U.Ay.hasCatalogFor(a), [a]),
                s = (0, d.bG)([U.Ay], () => null != a && U.Ay.hasCatalogFetchErrorFor(a), [a]),
                [o] = l.useState(() => new k.A(5 * L.A.Millis.SECOND, 5 * L.A.Millis.MINUTE)),
                c = l.useRef(null);
            l.useEffect(() => {
                if (null != a && i) {
                    if (r) return void o.succeed();
                    if (s) {
                        if (o.fails >= 3) return;
                        return (o.fail(() => (0, P.RS)(a, { isRetry: !0 })), () => o.cancel());
                    }
                    c.current !== a && ((c.current = a), (0, P.RS)(a));
                }
            }, [a, i, r, s, o]);
            let u = (0, d.bG)(
                    [U.Ay],
                    () => (null != a ? U.Ay.getBadges(a).filter((e) => F.sC.has(e.badge_id) && e.owned).length : 0),
                    [a],
                ),
                m = (0, d.yK)([U.Ay], () => (null != a ? (0, D.z)(U.Ay.getBadges(a)) : []), [a]),
                h = l.useMemo(
                    () =>
                        null != a && r
                            ? u > 0
                                ? { variant: "progress", newBadgeCount: u, badgeIconUrls: m }
                                : { variant: "no-progress" }
                            : null,
                    [a, r, u, m],
                ),
                f = i && o.fails < 3;
            return { variantProps: h, isPending: null != a && !r && (!s || f) };
        })({ currentUserId: e?.id, enabled: en }).variantProps;
    b ||
        (et && $.avatar.push(c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != eh && $.avatar.push(c.M.BADGE_DIRECTORY_NUX_POPOVER),
        Q && null != J && $.settings.push(J),
        ei && $.settings.push(c.M.GIFT_CARDS_MARKETING_COACHMARK),
        $.settings.push(c.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: ef, dismissTooltip: e_ } = lz(ll.oh.AUDIO_INPUT),
        { shouldShowTooltip: eT, dismissTooltip: eI } = lz(ll.oh.AUDIO_OUTPUT),
        eS = l.useMemo(() => (ef ? "input" : eT ? "output" : void 0), [ef, eT]),
        eb = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        e_();
                        break;
                    case "output":
                        eI();
                }
            },
            [e_, eI],
        );
    return (0, i.jsx)(O.f5, {
        value: W,
        children: (0, i.jsx)(lB, {
            currentUser: e,
            username: B,
            activities: n,
            applicationStream: s,
            voiceChannel: f,
            dismissibleContents: $,
            badgeDirectoryNuxPopoverVariant: eh,
            isOrbchievementsEnabled: X,
            userTag: h,
            occluded: b,
            selfDeaf: E,
            selfMute: g,
            serverDeaf: x,
            serverMute: p,
            speaking: u,
            voiceDb: m,
            speakingWhileMuted: T,
            status: r,
            streaming: a,
            suppress: A,
            webBuildOverride: _,
            awaitingRemote: y,
            nameplate: z,
            selectedGuildId: j,
            avatarDecoration: R,
            isQuestBarEmpty: K,
            isListenAlongVisible: q,
            deviceChangedTooltipType: eS,
            onDismissDeviceChangedTooltip: () => eb(eS),
        }),
    });
}
