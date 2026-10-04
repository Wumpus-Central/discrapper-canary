(n.d(t, { g: () => lb, A: () => ly }), n(321073));
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
var x = n(442433),
    E = n(820284),
    C = n(717558),
    _ = n(964486),
    T = n(220839),
    I = n(397244),
    b = n(394871),
    S = n(202091),
    j = n(866323),
    y = n(120842);
function N(e) {
    let { text: t } = e,
        n = (0, j.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: y.k,
        children: n((e, t) => (0, i.jsx)(S.animated.div, { className: y.H, style: e, children: t })),
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
    Z = n(480890),
    K = n(601255),
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
    ea = n(771527),
    er = n(552122),
    es = n(74848),
    eo = n(607399),
    ed = n(305866),
    ec = n(707554),
    eu = n(364522),
    em = n(22231),
    eh = n(812993),
    ef = n(935154),
    ep = n(780338);
if (221552 != n.j) var v = n(192308);
var eg = n(224640),
    eA = n(980707),
    ev = n(877784),
    ex = n(26137),
    eE = n(473935),
    eC = n(765671),
    e_ = n(643056),
    eT = n(470739),
    eI = n(176781),
    eb = n(320448),
    eS = n(834730),
    ej = n(993401),
    ey = n(375708),
    eN = n(211450);
function eR(e) {
    return (0, i.jsx)("div", {
        className: eN.wE,
        children: (0, i.jsx)(eA.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eM(e) {
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
        g = (0, ej.rE)({ action: t, onClick: n }),
        [A, x] = l.useState(!1),
        E = l.useRef(null),
        C = c ?? E,
        _ = null != d,
        T = _ && h,
        I = l.useCallback(() => {
            x(!0);
        }, []),
        b = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || x(!1);
        }, []);
    function S() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eN.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eN.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eS.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eN.W1,
                                    children: r,
                                }),
                                (0, i.jsx)(eS.E, { color: "currentColor", variant: "text-xs/medium", children: s }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function j(e) {
        let t;
        return (
            (t = T
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.D, { className: eN.ef, onClick: g, children: S() }),
                          (0, i.jsx)(p.D, {
                              className: eN.ap,
                              "aria-label": ey.intl.string(ey.t.PdRCRg),
                              ...e,
                              onClick: I,
                              children: (0, i.jsx)(eb._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(p.D, {
                        className: eN.ef,
                        ...e,
                        onClick: I,
                        children: [
                            S(),
                            (0, i.jsx)("div", {
                                className: eN.ap,
                                children: (0, i.jsx)(eb._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(p.D, { className: eN.ef, onClick: g, children: S() })),
            (0, i.jsx)("div", { ref: C, className: eN.jG, children: t })
        );
    }
    return _
        ? (0, i.jsx)("li", {
              className: eN.j$,
              onMouseEnter: I,
              onMouseLeave: b,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: u ?? C,
                  align: m,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: b,
                  children: j,
              }),
          })
        : (0, i.jsx)("li", { className: eN.j$, children: j() });
}
function eO(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var ew = n(780964),
    ek = n(766075),
    eL = n(734066),
    eP = n(915725),
    eD = n(409067),
    eU = n(271597),
    eF = n(297264),
    eG = n(475358),
    eV = n(866665),
    eH = n(408278),
    eB = n(625903),
    eW = n(404778),
    ez = n(689175),
    eZ = n(821609),
    eK = n(532624),
    eq = n(879631),
    eY = n(350535),
    e$ = n(974293),
    eX = n(572164),
    eQ = n(953932),
    eJ = n(280483),
    e0 = n(890856),
    e1 = n(713517),
    e2 = n(609174),
    e3 = n(619744);
function e5(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, e2.Y_)(),
        r = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, eU.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, i.jsx)(eZ.$, {
        onClick: r,
        icon: em.PencilIcon,
        variant: n,
        size: "sm",
        text: ey.intl.string(ey.t.bt75uw),
        fullWidth: !0,
    });
}
var e7 = n(82716),
    e8 = n(449397),
    e6 = n(930317),
    e4 = n(285072),
    e9 = n(575172);
let te = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: s } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: d } = (0, e1.A)(o),
        c = l.useCallback(() => {
            (a?.(), (0, eU.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, i.jsx)(e2.Cl, {
        clip: t,
        children: (0, i.jsx)(e0.s, {
            ref: o,
            "aria-label": ey.intl.string(ey.t.bt75uw),
            onClick: c,
            className: r()(e9.Z1, s),
            children: (0, i.jsxs)(e6.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eh.Lp, { className: e9.Ad, text: ey.intl.string(ey.t.y2b7CA) }),
                    (0, i.jsxs)(e4.h, {
                        isVisible: d,
                        className: e9.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: e9.mY,
                                children: [(0, i.jsx)(e7.z, {}), (0, i.jsx)(e3.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: e9.E_,
                                children: [
                                    (0, i.jsx)(e5, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, i.jsx)(e8.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tt = n(696016),
    tn = n(652215),
    ti = n(753070),
    tl = n(268378),
    ta = n(48127);
function tr(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: r } = e;
    (0, eJ.A)();
    let s = (0, d.yK)([eP.Ay], () => Object.values(eP.Ay.getClips())),
        o = (0, d.bG)([eP.Ay], () => eP.Ay.getSettings()),
        c = (0, d.bG)([eP.Ay], () => eP.Ay.getNewClipIds()),
        u = (0, e$.aJ)("ClipsPopout"),
        m = (0, d.bG)([eP.Ay], () => eP.Ay.getEnableAutoclipping()),
        h = (0, d.bG)([eK.Ay], () => eK.Ay.getKeybindForAction(tn.hCu.SAVE_CLIP)),
        f = l.useCallback(
            (e) => {
                r?.(e);
            },
            [r],
        ),
        p = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = s.filter((e) => e.type === tt.nQ.CLIP && "" !== e.thumbnail && (!p || !(0, eD.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, p]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        v = g.length > 16,
        x = null != h ? eY.dI(h.shortcut, !0) : null,
        E = [
            (0, eq.$)(o.clipsLength / L.A.Millis.SECOND),
            (0, ti.zr)(o.clipsQuality.resolution),
            ey.intl.formatToPlainString(ey.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && E.push(ey.intl.string(tl.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: f,
            className: ta.SW,
            role: "dialog",
            "aria-label": ey.intl.string(ey.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: ta.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ta.$,
                            children: [
                                (0, i.jsx)(eF.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: ey.intl.string(ey.t.z2jK6X),
                                }),
                                null != x && (0, i.jsx)(eG.e, { className: ta.P, shortcut: x }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ta.$s,
                            children: [
                                (0, i.jsx)(eV.m, {
                                    text: ey.intl.string(ey.t["3D5yo/"]),
                                    children: (0, i.jsx)(eH.K, {
                                        onClick: () => n(),
                                        icon: eB.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ey.intl.string(ey.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eV.m, {
                                    text: ey.intl.string(tl.default["55C2MH"]),
                                    children: (0, i.jsx)(eH.K, {
                                        onClick: () => t(),
                                        icon: eI.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ey.intl.string(tl.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ta.ov,
                    children: [
                        E.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: ta.LO, children: "\u2022" }),
                                        (0, i.jsx)(eS.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: ta.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        u &&
                            (0, i.jsx)(eS.E, {
                                variant: "text-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: ta.wS,
                                children: m ? ey.intl.string(tl.default.lTwKmt) : ey.intl.string(tl.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(eW.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(ez.Ch, {
                          className: ta.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(te, { clip: e, isNew: c.includes(e.id), onClose: a }, e.id)),
                              v &&
                                  (0, i.jsx)("div", {
                                      className: ta.qr,
                                      children: (0, i.jsx)(eZ.$, {
                                          onClick: () => t(),
                                          text: ey.intl.string(tl.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(ts, { keybindString: x }),
            ],
        })
    );
}
function ts(e) {
    let { keybindString: t } = e,
        n = (0, eX.E)();
    return (0, i.jsxs)("div", {
        className: ta.p$,
        children: [
            (0, i.jsx)(eS.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: ta.qO,
                children: ey.intl.string(tl.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eS.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: ta.CZ,
                      children: ey.intl.format(tl.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eS.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(eG.e, { shortcut: t }),
                      }),
                  })
                : (0, i.jsx)(eQ.A, {}),
        ],
    });
}
function to(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eL.sw)(),
        r = !(0, d.bG)([eP.Ay], () => eP.Ay.getSettings().showPovClipsInGallery),
        s = (0, d.bG)(
            [eP.Ay],
            () => {
                let e = eP.Ay.getNewClipIds();
                return r
                    ? e.filter((e) => {
                          let t = eP.Ay.getClipById(e);
                          return null != t && !(0, eD.kD)(t);
                      }).length
                    : e.length;
            },
            [r],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, eU.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        c = l.useCallback(() => {
            (t(), (0, ek.openUserSettings)(ew.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, i.jsx)(eM, {
              action: "PRESS_CLIPS",
              icon: eI.x,
              label: ey.intl.string(ey.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(eh.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tr, { ...e, onOpenGallery: o, onOpenSettings: c, onClose: t }),
          })
        : null;
}
var td = n(480335),
    tc = n(577390),
    tu = n(372320),
    tm = n(31956),
    th = n(744808),
    tf = n(645507),
    tp = n(131607),
    tg = n(970931),
    tA = n(315710),
    tv = n(789645),
    tx = n(775602),
    tE = n(832248),
    tC = n(462887),
    t_ = n(736653),
    tT = n(439174),
    tI = n(158045),
    tb = n(19886),
    tS = n(202541);
function tj() {
    let e = (0, tb.Xb)(),
        t = (0, tI.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tS.sp.length - 1; t >= 0; t--) {
        let i = tS.VD[tS.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
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
    tN = {
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
var tR = n(570484);
let tM = l.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tO() {
    let e = (0, d.bG)([tx.Ay], () => tx.Ay.useReducedMotion),
        t = (0, tE.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tj(),
                t = (0, tC.M)((0, t_.Ay)());
            if (null == e) return null;
            let n = ty[e],
                i = tN[e],
                l = {
                    currentBadge: (0, tT.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tS.sp.indexOf(e);
            if (a > 0) {
                let e = tS.sp[a - 1],
                    n = ty[e];
                ((l.prevBadge = (0, tT.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [a, r] = l.useState(null);
    return (null != n && null == a && r(n), e || !t || null == a) ? null : (0, i.jsx)(tw, { levelUpData: a });
}
function tw(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        a = l.useCallback(() => {
            tE.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tA.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tR.i,
            children: [
                (0, i.jsx)("div", {
                    className: tR.b,
                    children: (0, i.jsx)(eV.m, {
                        text: ey.intl.string(ey.t.cpT0Cq),
                        children: (0, i.jsx)(eH.K, {
                            icon: tv.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": ey.intl.string(ey.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tM, { levelUpData: t }) }),
            ],
        }),
    });
}
var tk = n(397562),
    tL = n(206835),
    tP = n(183555),
    tD = n(465318),
    tU = n(999291),
    tF = n(402860),
    tG = n(718019),
    tV = n(365607),
    tH = n(915614),
    tB = n(744753),
    tW = n(559506),
    tz = n(646986),
    tZ = n(657538),
    tK = n(946356),
    tq = n(465829),
    tY = n(624479),
    t$ = n(206845),
    tX = n(957565),
    tQ = n(427262),
    tJ = n(62119);
function t0(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tP.NJ)();
    return tX.p5
        ? (0, i.jsx)(t$.A, {
              text: ey.intl.string(ey.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tQ.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(p.D, {
                      ...e,
                      className: r()(tJ.c, { [tJ.R]: n }),
                      "aria-label": ey.intl.string(ey.t.y5MwJy),
                      children: (0, i.jsx)(tY.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t1 = n(394816),
    t2 = n(442228),
    t3 = n(885386),
    t5 = n(362862),
    t7 = n(621466),
    t8 = n(318254),
    t6 = n(863610),
    t4 = n(508770),
    t9 = n(421773),
    ne = n(318346),
    nt = n(923138),
    nn = n(309954),
    ni = n(673125),
    nl = n(646731),
    na = n(769001);
function nr(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: a, onCloseAccountPopout: s } = e;
    (0, nt.I)({ enabled: !0 });
    let { balance: o } = (0, nn.W)(),
        c = (0, d.bG)([ni.Ay], () =>
            ni.Ay.userOpenedWalletViaProfileDCF ? ni.Y0.NEW_ACHIEVEMENT : ni.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            ni.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: u, onMouseEnter: m, onMouseLeave: h, setIsHovered: g, cancelTimers: A } = (0, t9.A)(0, 500),
        x = l.useCallback(() => {
            (0, v.hasAnyModalOpen)() || h();
        }, [h]),
        E = l.useRef(null),
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
                let t = (0, t7.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${eN.j$}`);
                null != n && n !== E.current && (A(), g(!1));
            }
        }, [u, A, g]));
    let I = l.useRef(!1);
    l.useEffect(() => {
        u || (I.current = !1);
    }, [u]);
    let b = l.useCallback(() => {
            (I.current ||
                ((I.current = !0),
                (0, ne.Y)({
                    pageType: M.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: M.A.ORB_WALLET,
                    ctaObject: M.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        S = (0, ej.rE)({ action: "PRESS_ORBS", onClick: b });
    l.useEffect(() => {
        let e = n?.current,
            t = E.current;
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
    let j = l.useMemo(
            () =>
                null != o
                    ? ey.intl.format(ey.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(t6.n, { dotRadius: 3.5, themed: !0, className: na.K }),
            [o],
        ),
        y = l.useMemo(
            () =>
                c === ni.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(t4.E, { type: "new", variant: "brand" })
                    : c === ni.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(t4.E, { type: { text: ey.intl.string(ey.t.O13yhz) }, variant: "brand" })
                      : null,
            [c],
        ),
        N = l.useCallback(() => {
            (A(), g(!1), s());
        }, [A, g, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, t7.vq)(t, Node) && null != E.current && E.current.contains(t) && A();
            },
            [A],
        );
    return (0, i.jsx)("li", {
        ref: E,
        className: eN.j$,
        onMouseEnter: b,
        onMouseLeave: x,
        children: (0, i.jsx)(f.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, i.jsx)("div", {
                    ref: T,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, i.jsx)(nl.vG, { onCloseWallet: N, returnRef: C, isProfilePopout: !0 }),
                }),
            shouldShow: u,
            onRequestClose: x,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: eN.jG,
                    children: (0, i.jsxs)(p.D, {
                        innerRef: C,
                        className: eN.ef,
                        ...e,
                        onClick: S,
                        children: [
                            (0, i.jsx)("div", {
                                className: eN.iA,
                                children: (0, i.jsx)(t8.C, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: eN.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eS.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eN.W1,
                                        children: j,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: r()(eN.ap, na._),
                                children: [y, (0, i.jsx)(eb._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var ns = n(290863),
    no = n(351906),
    nd = n(403362),
    nc = n(562153),
    nu = n(661531),
    nm = n(477782),
    nh = n(628284),
    nf = n(695366),
    np = n(363195),
    ng = n(889227),
    nA = n(287809),
    nv = n(174459),
    nx = n(429707),
    nE = n(274303),
    nC = n(994125),
    n_ = n(347853),
    nT = n(573879),
    nI = n(559117),
    nb = n(43105),
    nS = n(661439),
    nj = n(385113),
    ny = n(352003),
    nN = n(429913),
    nR = n(334074),
    nM = n(633075),
    nO = n(667049),
    nw = n(280450),
    nk = n(90165),
    nL = n(49999),
    nP = n(518477);
function nD(e) {
    let { targetElementRef: t, onClose: a } = e,
        [r, s] = l.useState(!1),
        o = (0, d.bG)([nw.default], () => nw.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, d.yK)([nj.A], () => nj.A.getFeaturedApplicationIds());
            ((0, ny.A)(e),
                l.useEffect(() => {
                    (0, nS.X)();
                }, []));
            let t = (0, d.bG)([nw.default], () => nw.default.getId()),
                n = (0, nO.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nM.R), [n]),
                a = (0, nN.A)(e),
                r = l.useMemo(() => a.filter(nd.Vq), [a]),
                s = (0, d.cf)([nk.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = r.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nk.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: u, markAsDismissed: m } = (0, nR.hj)({
                    applications: o,
                    dismissibleContent: c.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nR.SH,
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
                n.e("389187"),
                n.e("816027"),
                n.e("562772"),
                n.e("970604"),
                n.e("102280"),
                n.e("677624"),
                n.e("165291"),
                n.e("796668"),
                n.e("953327"),
                n.e("733814"),
                n.e("106980"),
                n.e("367536"),
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
                n.e("765073"),
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
                n.e("412117"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("661630"),
                n.e("470126"),
                n.e("227853"),
                n.e("286615"),
                n.e("70866"),
                n.e("311541"),
                n.e("472847"),
                n.e("870088"),
                n.e("674736"),
                n.e("925420"),
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
                n.e("125298"),
                n.e("295570"),
                n.e("728824"),
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
                n.e("612162"),
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
                n.e("984062"),
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
                n.e("73327"),
                n.e("595990"),
                n.e("377368"),
                n.e("571247"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("127962"),
                n.e("76428"),
                n.e("77473"),
                n.e("863232"),
                n.e("25279"),
                n.e("364827"),
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
                n.e("834552"),
                n.e("56366"),
                n.e("639161"),
                n.e("477175"),
                n.e("960235"),
                n.e("402368"),
                n.e("190779"),
                n.e("910486"),
                n.e("221856"),
                n.e("678157"),
                n.e("103053"),
                n.e("325675"),
                n.e("996481"),
                n.e("331988"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("708757"),
                n.e("373122"),
                n.e("217951"),
                n.e("793716"),
                n.e("293159"),
                n.e("186212"),
                n.e("755936"),
                n.e("147662"),
                n.e("209338"),
                n.e("749894"),
                n.e("927875"),
                n.e("833703"),
                n.e("544571"),
                n.e("55252"),
                n.e("692990"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("532039"),
                n.e("719466"),
                n.e("99799"),
                n.e("576909"),
                n.e("27355"),
                n.e("406174"),
                n.e("715555"),
                n.e("585968"),
                n.e("776273"),
                n.e("407170"),
                n.e("572963"),
                n.e("307575"),
                n.e("554241"),
                n.e("724303"),
                n.e("521930"),
                n.e("53102"),
                n.e("875842"),
                n.e("229787"),
                n.e("88599"),
                n.e("95340"),
                n.e("354044"),
                n.e("437065"),
                n.e("709640"),
                n.e("756055"),
                n.e("952548"),
                n.e("636373"),
                n.e("726033"),
                n.e("655708"),
                n.e("553984"),
                n.e("884601"),
                n.e("782969"),
                n.e("14035"),
                n.e("981004"),
                n.e("428967"),
                n.e("568156"),
                n.e("859546"),
                n.e("608032"),
                n.e("477970"),
                n.e("523276"),
                n.e("386317"),
                n.e("812042"),
                n.e("102328"),
                n.e("729963"),
                n.e("830938"),
                n.e("895785"),
                n.e("665455"),
                n.e("73536"),
                n.e("538513"),
                n.e("147864"),
                n.e("370112"),
                n.e("241176"),
                n.e("50097"),
                n.e("263791"),
                n.e("93461"),
                n.e("203930"),
                n.e("903663"),
                n.e("36877"),
                n.e("489523"),
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
                n.e("847584"),
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
        : (0, i.jsx)(nb.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/06b7b29c0f2eac5ce71823e813f9989b2a53aba0998090a4fa1d0ab6241127a9.svg",
              },
              title: ey.intl.string(ey.t.HMWL9c),
              body: ey.intl.string(ey.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      nL.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: ey.intl.string(ey.t.VSLDly),
                      loading: r,
                      onClick: function () {
                          (s(!0),
                              (0, tF.openUserProfileModal)({ userId: o, tabSection: nP.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      ((0, v.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("984062"),
                                                  n.e("193457"),
                                                  n.e("892937"),
                                                  n.e("73327"),
                                                  n.e("487697"),
                                                  n.e("723934"),
                                                  n.e("720161"),
                                                  n.e("182816"),
                                                  n.e("56438"),
                                              ]).then(n.bind(n, 709013));
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
                                              nL.i.TAKE_ACTION,
                                          ),
                                          a());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var nU = n(461213),
    nF = n(818348),
    nG = n(709516);
function nV() {
    let e = (0, d.bG)([nU.A], () => nU.A.getStatus()),
        t = (0, tQ.MU)(e) ?? "",
        n = e === nF.cl.INVISIBLE || e === nF.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nG.k,
        children: [
            (0, i.jsxs)(g.A, { tag: "div", children: [ey.intl.string(ey.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eV.m, {
                    text: ey.intl.string(ey.t.L99HQm),
                    children: (0, i.jsx)(nf.E, {
                        size: "xs",
                        color: nu.A.colors.STATUS_WARNING,
                        "aria-label": ey.intl.string(ey.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nH = n(146901),
    nB = n(827827);
let nW = [
        { duration: 15 * L.A.Millis.MINUTE, label: () => ey.intl.string(ey.t["8ot6gv"]) },
        { duration: L.A.Millis.HOUR, label: () => ey.intl.string(ey.t.UMWBZr) },
        { duration: 8 * L.A.Millis.HOUR, label: () => ey.intl.string(ey.t.EpAXPC) },
        { duration: L.A.Millis.DAY, label: () => ey.intl.string(ey.t["755t4q"]) },
        { duration: 3 * L.A.Millis.DAY, label: () => ey.intl.string(ey.t["f3/1ch"]) },
        { duration: void 0, label: () => ey.intl.string(ey.t["46dqJY"]) },
    ],
    nz = "forever";
function nZ(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== tn.clD.ONLINE,
        r = (0, i.jsx)(i.Fragment, {
            children: nW.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    nm.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, nB.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? nz,
                );
            }),
        });
    return (0, i.jsx)(nm.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, tQ.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(ef.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nB.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? r : void 0,
    });
}
function nK(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nH._)(e);
    return "today" === t
        ? ey.intl.formatToPlainString(ey.t.ZxxHIO, { timeString: i })
        : ey.intl.formatToPlainString(ey.t["9OFjSe"], { dateString: n, timeString: i });
}
var nq = n(996988),
    nY = n(207634),
    n$ = n(47453);
function nX(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: s, openedAt: o, className: u } = e,
        f = __OVERLAY__,
        p = (0, tU.Ay)(t.id, void 0),
        { analyticsLocations: A } = (0, O.Ay)(M.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tP.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, tk.A)(A, p, nP.R7.ACCOUNT_POPOUT);
    let { ref: E } = (0, eC.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, e1.A)(E);
    (l.useEffect(() => {
        a?.(E.current);
    }, [E, a]),
        l.useEffect(
            () => (
                tE.A.setState({ isOpen: !0 }),
                () => tE.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let T = (0, d.bG)([ns.A], () => ns.A.getStatus(t.id)),
        I = nK(t3.CY.useSetting()),
        b = (0, d.bG)([no.A], () => no.A.hidePersonalInformation),
        S = (0, tg.kB)(),
        j = t3.Q_.useSetting(),
        y = (function (e) {
            let t = t3.CY.useSetting(),
                n = (0, tg.kB)(),
                l = t3.Jr.useSetting();
            function a(i) {
                let l = nK(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tn.clD.DND:
                        return n ? ey.intl.string(ey.t.day5A6) : ey.intl.string(ey.t["tq/fMK"]);
                    case tn.clD.INVISIBLE:
                        return ey.intl.string(ey.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let r = (0, i.jsx)(i.Fragment, {
                    children: nW.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            nm.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tg.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? nz,
                        );
                    }),
                }),
                s = nZ({ status: tn.clD.ONLINE, currentStatus: e }),
                o = nZ({ status: tn.clD.IDLE, currentStatus: e, description: a(tn.clD.IDLE) }),
                d = nZ({ status: tn.clD.DND, currentStatus: e, description: a(tn.clD.DND) }),
                c = nZ({ status: tn.clD.INVISIBLE, currentStatus: e, description: a(tn.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(nm.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(nm.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      nm.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ey.intl.string(ey.t.gJRnwK),
                                          iconLeft: ep.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: ep.BellSlashIcon },
                                          badge: { text: ey.intl.string(ey.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? ey.intl.format(ey.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            ey.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : ey.intl.string(ey.t["Br1q+x"]),
                                          action: () => {
                                              (0, tg.ES)(!n);
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
            let t = (0, d.bG)([nA.default], () => nA.default.getCurrentUser()),
                n = (0, d.bG)([no.A], () => no.A.hidePersonalInformation),
                l = (0, d.bG)([np.A], () => (0, tC.M)(np.A.theme)),
                { multiAccountUsers: a } = (0, nC.K)(),
                r = a.map((a) => {
                    let r = new ng.A(a),
                        s = r.id === t?.id,
                        o = a.tokenStatus === nE.U.INVALID,
                        d = n ? null : `#${r.discriminator}`;
                    return (0, i.jsx)(
                        nm.Dr,
                        {
                            id: r.id,
                            focusedClassName: nI.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nI.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: r.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nI.DD,
                                            children: [
                                                (0, i.jsx)(eS.E, {
                                                    className: nI.gE,
                                                    variant: "text-sm/normal",
                                                    children: tQ.Ay.getUserTag(r, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !r.hasUniqueUsername() &&
                                                    (0, i.jsx)(eS.E, {
                                                        className: nI.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(nh.y, {
                                                size: "sm",
                                                color: t
                                                    ? nu.A.unsafe_rawColors.WHITE.css
                                                    : nu.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nu.A.unsafe_rawColors.BRAND_500.css
                                                        : nu.A.unsafe_rawColors.WHITE.css,
                                                className: nI.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nf.E, {
                                                color: nu.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nu.A.unsafe_rawColors.BRAND_500.css
                                                        : nu.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nI.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, n_.A)();
                                else {
                                    var n;
                                    (n = r.id) !== t?.id &&
                                        (nv.default.track(tn.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tn.JJy.USER_PROFILE },
                                        }),
                                        nx.Mx(n, void 0, nT.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(nm.bX, {}),
                            (0, i.jsx)(nm.Dr, {
                                id: "manage-accounts",
                                label: ey.intl.string(ey.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, n_.A)());
                                },
                            }),
                        ],
                    }),
                ),
                r
            );
        })(n),
        R = (0, tL.A)({ analyticsLocations: A }),
        k = (0, tI.TW)(t),
        L = (0, w.J)({ location: "UserProfileAccountPopout" }),
        P = (0, e_.d)({ location: "UserProfileAccountPopout" }),
        D = l.useRef(null),
        U = l.useRef(null),
        F = l.useRef(null),
        G = (0, tu.A)(p?.profileFrame?.skuId),
        V = (0, tc.A)(p?.profileFrame?.skuId);
    (0, tm.A)({ skuId: p?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: A });
    let H = l.useRef((0, tE.A)((e) => e.shouldRenderTenureLevelUp)),
        B = l.useMemo(() => (0, tf.A)(), []),
        [W, z] = l.useState(() => tE.A.getState().shouldRenderTenureLevelUp);
    function Z(e) {
        (n?.(), (0, tF.openUserProfileModal)({ customStatusPrompt: B, sourceAnalyticsLocations: A, ...x, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            z(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let K = p?.widgets != null && p.widgets.length > 0,
        q = l.useCallback(() => {
            n();
        }, [n]),
        Y = l.useCallback(() => {
            (R(), q());
        }, [R, q]),
        $ = (0, ee.ux)("UserProfileAccountPopout"),
        X = tD.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        Q = (0, t5.H)({ location: "UserProfileAccountPopout" }),
        J = (0, tE.A)((e) => e.shouldScrollToOrbsMenuItem),
        [et, en] = (0, tp.kn)(
            [
                $ ? c.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
                X ? c.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nd.Vq),
            void 0,
            !0,
        ),
        ei = l.useId();
    return (0, i.jsx)(O.f5, {
        value: A,
        children: (0, i.jsx)(tP.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: p?.fetchStartedAt,
            fetchEndedAt: p?.fetchEndedAt,
            isLoaded: p?.isLoaded,
            children: (0, i.jsxs)(ed.l, {
                ref: E,
                "aria-labelledby": ei,
                className: r()(eN.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(g.A, {
                        children: (0, i.jsx)(ec.H, { id: ei, children: ey.intl.string(ey.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(ec.F, {
                        children: [
                            (0, i.jsxs)(tK.A, {
                                className: eN.BK,
                                user: t,
                                displayProfile: p,
                                themeType: nq.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: n$.wx,
                                        children: [
                                            (0, i.jsx)(tH.A, { user: t, displayProfile: p, themeType: nq.d.POPOUT }),
                                            (0, i.jsx)(tG.A, {
                                                user: t,
                                                displayProfile: p,
                                                avatarSize: nY.T[nq.d.POPOUT].avatarSize,
                                                onOpenProfile: f ? void 0 : Z,
                                            }),
                                            (0, i.jsx)(t1.A, {
                                                ref: D,
                                                user: t,
                                                themeType: nq.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: B,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eu.Ip, {
                                        ref: F,
                                        className: eN.rf,
                                        style: { pointerEvents: W ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tW.A, { userId: t.id }),
                                            (0, i.jsx)(tq.Ay, {
                                                className: eN.eF,
                                                user: t,
                                                displayName: nc.Ay.getName(void 0, null, t),
                                                onClickName: f ? void 0 : Z,
                                                displayNameTrailing: (0, i.jsx)(t0, { user: t, isVisible: C }),
                                                pronouns: p?.pronouns,
                                                trailing: (0, i.jsx)(tV.A, {
                                                    displayProfile: p,
                                                    themeType: nq.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: H.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tB.A, { isPremiumUser: k, onInteraction: n }),
                                            (0, i.jsx)(t2.A, {
                                                userId: t.id,
                                                userBio: p?.bio,
                                                hidePersonalInformation: b,
                                                onClose: n,
                                            }),
                                            K &&
                                                (0, i.jsx)(tZ.A, {
                                                    user: t,
                                                    widgets: p?.widgets,
                                                    onOpenUserProfileModal: Z,
                                                }),
                                            (0, i.jsx)(tz.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: Z,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eN.T_,
                                                children: [
                                                    (0, i.jsx)(tK.A.Overlay, {
                                                        className: eN.g0,
                                                        children: (0, i.jsxs)(eO, {
                                                            children: [
                                                                (0, i.jsx)(eM, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ey.intl.string(ey.t.s5vZlQ),
                                                                    icon: em.PencilIcon,
                                                                    trailing:
                                                                        null != et
                                                                            ? (0, i.jsx)(eh.Lp, {
                                                                                  text: ey.intl.string(ey.t.y2b7CA),
                                                                                  "aria-hidden": !0,
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (et ===
                                                                            c.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            en(nL.i.TAKE_ACTION),
                                                                            Y());
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, i.jsx)(eM, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nV, {}),
                                                                    sublabel: null != I && I,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ef.nW, { status: T, size: 12 }),
                                                                    trailing:
                                                                        (S || T === tn.clD.DND) &&
                                                                        (0, i.jsx)(ep.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: eo.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eR, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eN.hQ,
                                                                                  "aria-label": ey.intl.string(
                                                                                      ey.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: y,
                                                                              });
                                                                          },
                                                                    onClick: eo.Fr
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
                                                                                                      eg.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              ey.intl.string(
                                                                                                                  ey.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eA.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  ey.intl.string(
                                                                                                                      ey
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
                                                                                                                  y,
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
                                                                    (0, i.jsx)(eM, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: ev.q,
                                                                        label: ey.intl.string(ey.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, eT.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(to, { onClose: n, popoutContainerRef: E }),
                                                                Q &&
                                                                    (0, i.jsx)(nr, {
                                                                        popoutContainerRef: E,
                                                                        scrollerRef: F,
                                                                        shouldScrollIntoView: J,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tK.A.Overlay, {
                                                        className: eN.g0,
                                                        children: (0, i.jsxs)(eO, {
                                                            children: [
                                                                (0, i.jsx)(eM, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: ex.r,
                                                                    label: ey.intl.string(ey.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, n_.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eR, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ey.intl.string(ey.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: N,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    tX.p5 &&
                                                                    j &&
                                                                    (0, i.jsx)(eM, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eE.L,
                                                                        label: ey.intl.string(ey.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, tX.C)(t.id), n());
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
                                        (0, i.jsx)(td.A, { skuId: p.profileEffect.skuId, isHovering: _ }),
                                    null != G && (0, i.jsx)(th.A, { frame: G, fadeIn: V }),
                                ],
                            }),
                            (0, i.jsx)(nD, { targetElementRef: U, onClose: n }),
                            (0, i.jsx)(tO, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var nQ = n(518293),
    nJ = n(655116),
    n0 = n(438140),
    n1 = n(454719),
    n2 = n(342296),
    n3 = n(852712),
    n5 = n(389960),
    n7 = n(173660),
    n8 = n(616356),
    n6 = n(734057),
    n4 = n(629016),
    n9 = n(186111),
    ie = n(25578),
    it = n(763827),
    ii = n(967198),
    il = n(485296),
    ia = n(486020),
    ir = n(625494),
    is = n(536194),
    io = n(19575),
    id = n(994314),
    ic = n(485599),
    iu = n(116833);
function im(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: ey.intl.string(ey.t.uwDBSq),
                  body: ey.intl.formatToPlainString(ey.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: ey.intl.string(ey.t["5GD53o"]), body: ey.intl.string(ey.t["2Rb7tE"]) };
    return (0, i.jsx)(nb.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: iu.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: ey.intl.string(ey.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function ih(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(im, {
        ...t,
        onPrimaryAction: () => {
            (l(nL.i.TAKE_ACTION), (0, eT.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(nL.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var ip = n(206248);
function ig(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: r = !0, children: s } = e,
        o = (0, eL.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            r && o
                ? (0, i.jsx)(ip.H, {
                      targetElementRef: t,
                      title: ey.intl.string(tl.default.Qn21R6),
                      body: ey.intl.string(tl.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: ey.intl.string(ey.t.RzWDqY),
                          onClick: function () {
                              (n(nL.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(nL.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iA = n(379848),
    iv = n(626584),
    ix = n(757036),
    iE = n(591179),
    iC = n(531685),
    i_ = n(259065),
    iT = n(701974);
let iI = new iv.A("DisplayNameStylesFlywheelCoachmark");
function ib(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: r } = (0, O.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, d.bG)([iC.A], () => iC.A.isFocused()),
        c = (0, ix.L)(tS.PremiumTypes.TIER_2),
        u = (0, iE.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, l.useCallback)(() => {
            t(nL.i.TAKE_ACTION);
            let e = nA.default.getCurrentUser();
            u && null != e
                ? (0, tF.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: r,
                      onModalOpen: () => {
                          (0, i_.L)({ analyticsLocations: r, stackingBehavior: "stack" });
                      },
                  })
                : (0, ek.openUserSettings)(ew.X.PROFILE_PANEL, { analyticsLocations: r }, () => {
                      (0, i_.L)({ analyticsLocations: r });
                  });
        }, [t, r, u]),
        h = (0, l.useCallback)(() => {
            t(nL.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(iI.error) : o || s.current?.pause();
    }, [o]);
    let f = c ? [ey.intl.string(iT.default.TyUdka)] : [ey.intl.string(iT.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(nb.A, {
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
                title: ey.intl.string(iT.default.cYwrp8),
                body: f,
                actions: [{ text: ey.intl.string(ey.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var iS = n(45780),
    ij = n(696451),
    iy = n(71393),
    iN = n(685073),
    iR = n(73153);
let iM = { lastSeenInfos: {} },
    iO = iM;
class iw extends d.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iO = e ?? iM;
    }
    getState() {
        return iO;
    }
    getGuildLastSeenInfo(e) {
        return iO.lastSeenInfos[e] ?? null;
    }
}
let ik = new iw(iR.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iO.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iO = iM;
    },
});
var iL = n(514661);
let iP = new iv.A("GuildTagAvailableCoachmark");
function iD(e) {
    let t = (0, d.bG)([iy.A], () => iy.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            iR.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: r } = (0, iL.A)(t?.id ?? null, () => n(nL.i.TAKE_ACTION));
    if (null == t || !(0, iN.q0)(t))
        return (iP.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: ey.intl.string(ey.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: ey.intl.string(ey.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nb.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iu.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ey.intl.formatToPlainString(ey.t["m/Tc3n"], { guildName: t.name }),
                body: ey.intl.string(ey.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nL.i.USER_DISMISS),
            }),
        ],
    });
}
function iU(e) {
    let t = (0, d.bG)([iy.A], () => iy.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: r } = (0, iL.A)(t?.id ?? null, () => n(nL.i.TAKE_ACTION));
    if (null == t || !(0, iN.q0)(t))
        return (iP.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: ey.intl.string(ey.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: ey.intl.string(ey.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nb.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iu.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ey.intl.formatToPlainString(ey.t.VFqnyU, { guildName: t.name }),
                body: ey.intl.string(ey.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nL.i.USER_DISMISS),
            }),
        ],
    });
}
var iF = n(843010),
    iG = n(764231),
    iV = n(425713);
function iH(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tj(),
        a = (0, d.bG)([tx.Ay], () => tx.Ay.useReducedMotion),
        r = (0, tE.A)((e) => e.isOpen),
        s = (0, iF.G)();
    return a || null == l || r || s
        ? null
        : (0, i.jsx)(iA.zJ, {
              contentType: c.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(iB, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === c.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iB(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: r } = e,
        s = tS.sp.indexOf(t),
        o = (0, iV.I)(tS.sp[s > 0 ? s - 1 : s]).ambient,
        d = (0, l.useCallback)(() => {
            (n(nL.i.TAKE_ACTION),
                tE.A.setState({ shouldRenderTenureLevelUp: !0 }),
                ir._.dispatch(tn.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(nL.i.USER_DISMISS);
        }, [n]),
        u = tS.VD[t],
        m = ey.intl.formatToPlainString(ey.t.ewkaVR, {
            timeMilestone: (0, iG.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: ey.intl.string(ey.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(nb.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: r,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ey.intl.string(ey.t.VoDxsV),
        body: m,
        actions: h,
    });
}
var iW = n(764014);
function iz(e) {
    let { targetElementRef: t } = e,
        n = (0, tE.A)((e) => e.isOpen),
        [l, a] = (0, tp.kn)(n ? [] : [c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], nL.m.ACCOUNT_NAME_ZONE, !0);
    return l === c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(nb.A, {
              targetElementRef: t,
              graphic: { type: "image", src: iW.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: ey.intl.string(ey.t["Q+dH5r"]),
              body: ey.intl.string(ey.t.YKJw4W),
              onRequestClose: () => a(nL.i.USER_DISMISS),
              actions: [
                  {
                      text: ey.intl.string(ey.t.dcOuei),
                      onClick: function () {
                          (a(nL.i.TAKE_ACTION),
                              tE.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              ni.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              ir._.dispatch(tn.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function iZ(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nQ.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iS.G$)(c.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tn.dJq),
                l = (0, d.bG)(
                    [iy.A, nA.default, ij.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = iy.A.getGuild(e);
                        if (void 0 === t || !(0, iN.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nA.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = ij.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tp.ww)(l && n && !i ? [c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tn.eGj);
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, d.bG)([ik], () => (null === l ? null : ik.getGuildLastSeenInfo(l))),
                r = (0, d.bG)([iy.A], () => iy.A.getGuild(l)?.profile?.tag),
                s = null != r && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === r,
                u = null !== l && s && !o;
            return (0, tp.Wl)(u && n ? c.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iU, {
                  guildId: e.guildId,
                  onDismiss: r,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === c.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iD, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iH, { groupName: nL.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(iz, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(iA.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: nL.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(ib, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case c.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(ig, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eU.p,
                                            children: e.children,
                                        });
                                    case c.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(ih, {
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
var iK = n(348858),
    iq = n(615675),
    iY = n(900797),
    i$ = n(847374),
    iX = n(617354),
    iQ = n(829773),
    iJ = n(42473),
    i0 = n(731854),
    i1 = n(516171),
    i2 = n(577755);
function i3(e) {
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
        } = (0, iK.I)(m ? "undeafen" : "deafen"),
        v = n ? iq.T : h,
        { name: x } = (0, es.x5)(i0.oh.AUDIO_OUTPUT),
        E = (0, iX.A)(t, n, a),
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
                            children: (0, i.jsx)(iQ.A, {
                                onInteraction: (0, Z.s)("AudioDeviceMenu", M.A.ACCOUNT),
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
                        h = u ? iY.t : i$.a;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: r()(i1.Lh, { [i1.v8]: m, [i1.q6]: u }),
                        children: [
                            (0, i.jsx)(iJ.A, {
                                "aria-checked": m,
                                "aria-label": ey.intl.string(ey.t.wjcRFX),
                                className: i1.eT,
                                disabled: a,
                                icon: (0, i.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nu.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? i2.o : void 0,
                                innerClassName: r()({ [i2.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: m,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(iJ.A, {
                                className: r()(i1.UT, { [i1.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(h, {
                                    className: i1.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nu.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ey.intl.formatToPlainString(ey.t["f+DDY/"], { outputDeviceName: x })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? ey.intl.format(ey.t["f+DDY/"], { outputDeviceName: x })
                                    : ey.intl.string(ey.t.aA4Vce),
                                "aria-label": c
                                    ? ey.intl.formatToPlainString(ey.t["f+DDY/"], { outputDeviceName: x })
                                    : ey.intl.string(ey.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i5 = n(523875),
    i7 = n(666654),
    i8 = n(993719);
let i6 = {};
class i4 extends d.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i6[e] ?? !1;
    }
}
let i9 = new i4(iR.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i6[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i6[t] = !1;
    },
});
var le = n(362823),
    lt = n(980923),
    ln = n(573549),
    li = n(222176),
    ll = n(973324);
function la(e) {
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
            shouldShowPTTJoinTooltip: x,
            dismissTooltips: E,
            speaking: C,
        } = e,
        _ = (0, d.bG)([ie.Ay], () => ie.Ay.getMode() === i0.TB.PUSH_TO_TALK),
        T = (0, d.bG)([ie.Ay], () => ie.Ay.getSettings().modeOptions.shortcut),
        I = (0, d.bG)([i9], () => i9.getIsTutorialActive(le.v.MUTE_TUTORIAL)),
        b = (0, d.bG)([it.A], () => null != it.A.getChannelId()),
        { name: S } = (0, es.x5)(i0.oh.AUDIO_INPUT),
        { enabledInputProfiles: j } = (0, n3.d)({ location: "MicrophoneButton" }),
        y = l.useRef(null),
        N = n || s || a,
        R = (0, i5.L)(N ? "unmute" : "mute"),
        { analyticsLocations: w } = (0, O.Ay)(M.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: L, play: P } = R,
        D = a || s ? i7.O : k;
    l.useEffect(() => () => P(), [N, P]);
    let U = (0, lt.A)(n, a, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: ey.intl.string(ey.t["29gnR4"]), tooltipForceOpen: !0 }
        : x || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ey.intl.format(ey.t.c1qUOQ, { keybind: eY.dI(T).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let F = _ && b,
        G = N ? nu.A.colors.ICON_VOICE_MUTED : "currentColor",
        V = l.useCallback(() => {
            (h(), I && i8.N(le.v.MUTE_TUTORIAL));
        }, [h, I]);
    return (0, i.jsxs)(O.f5, {
        value: w,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: y,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(O.f5, {
                            value: w,
                            children: (0, i.jsx)(iQ.A, {
                                onInteraction: (0, Z.s)("AudioDeviceMenu", M.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: j.length > 0,
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
                        s = a ? iY.t : i$.a;
                    return (0, i.jsxs)("div", {
                        ref: y,
                        className: r()(i1.Lh, { [i1.v8]: N, [i1.q6]: a }),
                        children: [
                            (0, i.jsx)(iJ.A, {
                                "aria-checked": N,
                                "aria-label": ey.intl.string(ey.t.w4m945),
                                className: i1.eT,
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
                                children: F ? (0, i.jsx)("div", { className: r()(li.U, { [li.z]: C }) }) : null,
                            }),
                            (0, i.jsx)(iJ.A, {
                                "aria-label": v
                                    ? ey.intl.formatToPlainString(ey.t["18wnuD"], { inputDeviceName: S })
                                    : ey.intl.string(ey.t.fRzCbB),
                                className: r()(i1.UT, { [i1.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: i1.$$,
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
                                    ? ey.intl.formatToPlainString(ey.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: v
                                    ? ey.intl.format(ey.t["18wnuD"], { inputDeviceName: S })
                                    : ey.intl.string(ey.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nb.A, {
                targetElementRef: y,
                shouldShow: I,
                graphic: { type: "image", src: ll.A },
                onRequestClose: () => {
                    i8.N(le.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ey.intl.string(ln.default.VG4zAf),
                body: ey.intl.string(ln.default["8VIRzR"]),
            }),
        ],
    });
}
var lr = n(935399),
    ls = n(505312),
    lo = n(848847);
function ld(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, O.Ay)(M.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(nb.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: ey.intl.string(ey.t.Mjs8KR),
        body: ey.intl.string(ey.t.U0INks),
        actions: [
            {
                text: ey.intl.string(ey.t.NENZhS),
                onClick: () => {
                    ((0, ek.openUserSettings)(ew.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(nL.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(nL.i.USER_DISMISS),
    });
}
var lc = n(88001),
    lu = n(148155),
    lm = n(438705);
function lh(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        r = l.useCallback(() => {
            (a(), (0, ek.openUserSettings)(ew.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, i.jsx)(nb.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lm },
        shouldShow: n,
        title: ey.intl.format(lu.default.bx8sR9, { premiumGroupProductName: (0, lc.DP)() }),
        body: ey.intl.format(lu.default.Pw4OFZ, { premiumGroupProductName: (0, lc.DP)() }),
        onRequestClose: a,
        actions: [{ text: ey.intl.string(lu.default.DD26QR), onClick: r }],
    });
}
var lf = n(873298),
    lp = n(840387);
function lg(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, lp.Z)(),
        r = t3.KP.useSetting(),
        s = a && r !== lf.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(nL.i.TAKE_ACTION), (0, ek.openUserSettings)(ew.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        d = l.useCallback(() => {
            t(nL.i.USER_DISMISS);
        }, [t]),
        c = s
            ? r === lf.KP.FRIENDS_ONLY
                ? ey.intl.string(ey.t["/hogEy"])
                : ey.intl.string(ey.t["6hEfm1"])
            : ey.intl.string(ey.t.bnNxW1);
    return (0, i.jsx)(nb.A, {
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
        title: ey.intl.string(ey.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ey.intl.string(ey.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var lA = n(415443);
function lv(e) {
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
    (0, lr.Ay)(() => {
        function e() {
            return f(!0);
        }
        return (
            ir._.subscribe(tn.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                ir._.unsubscribe(tn.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = l.useCallback(() => {
            (f(!1), r());
        }, [r]),
        g = ea.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, lA.A)("1791071887343", !0);
        t =
            null != e
                ? ey.intl.formatToPlainString(ey.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : ey.intl.formatToPlainString(ey.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = ey.intl.string(ey.t.cduTBL);
    let A = eB.SettingsIcon,
        v = (0, ls.w)();
    return (
        (A = null != a ? lo.H : v.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(iJ.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: s,
                    "aria-label": ey.intl.string(ey.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...v.events,
                    plated: null != u,
                }),
                (0, i.jsx)(lh, { targetElementRef: m, shouldShow: h, onDismiss: () => f(!1) }),
                (0, i.jsx)(iA.Ay, {
                    contentTypes: o,
                    groupName: nL.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === c.M.TINY_BRONCO && null != n0.PL
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(n0.PL, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === c.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(lg, { markAsDismissed: n, targetElementRef: m })
                              : null != g && t === g
                                ? (0, i.jsx)(ld, { markAsDismissed: n, targetElementRef: m })
                                : null;
                    },
                }),
            ],
        })
    );
}
var lx = n(358285);
let lE = io.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    lC = 2.5 * L.A.Millis.SECOND,
    l_ = 2 * L.A.Millis.MINUTE,
    lT = 5 * L.A.Millis.SECOND;
function lI(e) {
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
        x = l.useRef(null),
        C = t ?? x,
        _ = (0, ia.F_)({ avatarDecoration: A, size: (0, q.Te)(h._3.SIZE_32) }),
        I = (0, et.A)(),
        {
            updateOpenPopoutRef: b,
            highlightBadge: S,
            setHighlightBadge: j,
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
                        ir._.subscribe(tn.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ir._.unsubscribe(tn.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        y = (0, $.K)(g);
    return null == o
        ? null
        : (0, i.jsx)(E.A, {
              object: tn.ZSU.AVATAR,
              children: (0, i.jsx)(n2.A, {
                  user: o,
                  targetElementRef: C,
                  clickTrap: !0,
                  preload: () =>
                      (0, n1.A)(o.id, o.getAvatarURL(void 0, n2.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(nX, {
                          currentUser: o,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lx.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: f.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (u(), j(void 0));
                  },
                  children: (e) => {
                      b(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: C,
                          style: y,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              (e.onClick?.(t), c?.(t));
                          },
                          className: r()(lx.Q9, { [lx.ZQ]: null != g }),
                          children: [
                              (0, i.jsx)(p.D, {
                                  ...u,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": ey.intl.string(ey.t["5fWB8U"]),
                                  focusProps: { ringTarget: C },
                                  className: lx.$n,
                                  "data-jump-section": v,
                              }),
                              (0, i.jsx)(lE, {
                                  size: h._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: _,
                                  status: s ? tn.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: lx.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lx.oM, children: m(I) }),
                          ],
                      });
                  },
              }),
          });
}
class lb extends l.PureComponent {
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
        ((0, W.A)(e, t, tn.JJy.ACCOUNT_PANEL), (0, z.X)(M.A.ACCOUNT, z.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, B.A)(e, tn.JJy.ACCOUNT_PANEL), (0, z.X)(M.A.ACCOUNT, z.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            it.A.isConnected() ? (0, ek.openUserSettings)(ew.X.VOICE_AND_VIDEO_PANEL) : (0, ek.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("618416"),
                    n.e("902654"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("412117"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("410526"),
                    n.e("202985"),
                    n.e("603619"),
                    n.e("661630"),
                    n.e("470126"),
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
                    n.e("674736"),
                    n.e("925420"),
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
                    n.e("125298"),
                    n.e("295570"),
                    n.e("728824"),
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
                    n.e("612162"),
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
                    n.e("696490"),
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
                    n.e("102075"),
                    n.e("828178"),
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
                    n.e("571247"),
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
                    n.e("765073"),
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
                    n.e("76283"),
                    n.e("722915"),
                    n.e("292699"),
                    n.e("198877"),
                    n.e("531521"),
                    n.e("926669"),
                    n.e("873943"),
                    n.e("152263"),
                    n.e("28636"),
                    n.e("597981"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("301850"),
                    n.e("926787"),
                    n.e("870423"),
                    n.e("94233"),
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
                    n.e("771149"),
                    n.e("925807"),
                    n.e("959922"),
                    n.e("311992"),
                    n.e("876880"),
                    n.e("888213"),
                    n.e("150183"),
                    n.e("394692"),
                    n.e("272788"),
                    n.e("704570"),
                    n.e("595944"),
                    n.e("45374"),
                    n.e("10058"),
                    n.e("802273"),
                    n.e("30482"),
                    n.e("641794"),
                    n.e("323814"),
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
                    n.e("499485"),
                    n.e("127962"),
                    n.e("503376"),
                    n.e("494822"),
                    n.e("926132"),
                    n.e("76428"),
                    n.e("77473"),
                    n.e("863232"),
                    n.e("25279"),
                    n.e("364827"),
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
                    n.e("834552"),
                    n.e("56366"),
                    n.e("639161"),
                    n.e("477175"),
                    n.e("960235"),
                    n.e("402368"),
                    n.e("190779"),
                    n.e("910486"),
                    n.e("221856"),
                    n.e("678157"),
                    n.e("103053"),
                    n.e("325675"),
                    n.e("996481"),
                    n.e("331988"),
                    n.e("40291"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("708757"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("793716"),
                    n.e("293159"),
                    n.e("186212"),
                    n.e("755936"),
                    n.e("147662"),
                    n.e("209338"),
                    n.e("749894"),
                    n.e("927875"),
                    n.e("833703"),
                    n.e("544571"),
                    n.e("55252"),
                    n.e("692990"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("532039"),
                    n.e("719466"),
                    n.e("99799"),
                    n.e("576909"),
                    n.e("27355"),
                    n.e("406174"),
                    n.e("715555"),
                    n.e("585968"),
                    n.e("393336"),
                    n.e("481647"),
                    n.e("776602"),
                    n.e("776273"),
                    n.e("140402"),
                    n.e("391763"),
                    n.e("407170"),
                    n.e("21921"),
                    n.e("811310"),
                    n.e("572963"),
                    n.e("307575"),
                    n.e("897073"),
                    n.e("942724"),
                    n.e("676418"),
                    n.e("913823"),
                    n.e("393766"),
                    n.e("401518"),
                    n.e("571210"),
                    n.e("187110"),
                    n.e("854461"),
                    n.e("139970"),
                    n.e("554241"),
                    n.e("940258"),
                    n.e("166495"),
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
                    n.e("9205"),
                    n.e("25949"),
                    n.e("88342"),
                    n.e("146070"),
                    n.e("836863"),
                    n.e("854622"),
                    n.e("807936"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("88599"),
                    n.e("311802"),
                    n.e("931319"),
                    n.e("179049"),
                    n.e("698965"),
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
                    n.e("147626"),
                    n.e("756055"),
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
                    n.e("235313"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("212055"),
                    n.e("486672"),
                    n.e("14035"),
                    n.e("75029"),
                    n.e("632756"),
                    n.e("564850"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("902564"),
                    n.e("981004"),
                    n.e("428967"),
                    n.e("92935"),
                    n.e("67878"),
                    n.e("568156"),
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
                    n.e("722460"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("41332"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("282783"),
                    n.e("432209"),
                    n.e("893349"),
                    n.e("368062"),
                    n.e("859991"),
                    n.e("523276"),
                    n.e("386317"),
                    n.e("709371"),
                    n.e("924691"),
                    n.e("603998"),
                    n.e("987478"),
                    n.e("812042"),
                    n.e("550033"),
                    n.e("436564"),
                    n.e("96680"),
                    n.e("102328"),
                    n.e("729963"),
                    n.e("868214"),
                    n.e("939171"),
                    n.e("830938"),
                    n.e("895785"),
                    n.e("665455"),
                    n.e("661814"),
                    n.e("73536"),
                    n.e("538513"),
                    n.e("147864"),
                    n.e("370112"),
                    n.e("241176"),
                    n.e("612287"),
                    n.e("588070"),
                    n.e("692513"),
                    n.e("793438"),
                    n.e("50097"),
                    n.e("691671"),
                    n.e("263791"),
                    n.e("305557"),
                    n.e("36227"),
                    n.e("535507"),
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
                    n.e("414591"),
                    n.e("652111"),
                    n.e("93461"),
                    n.e("838056"),
                    n.e("203930"),
                    n.e("935948"),
                    n.e("708536"),
                    n.e("120379"),
                    n.e("903663"),
                    n.e("411353"),
                    n.e("824547"),
                    n.e("896804"),
                    n.e("36877"),
                    n.e("295998"),
                    n.e("508829"),
                    n.e("275133"),
                    n.e("819193"),
                    n.e("437961"),
                    n.e("480945"),
                    n.e("201243"),
                    n.e("951811"),
                    n.e("228850"),
                    n.e("215920"),
                    n.e("496268"),
                    n.e("527687"),
                    n.e("904774"),
                    n.e("78601"),
                    n.e("574678"),
                    n.e("806295"),
                    n.e("342234"),
                    n.e("81189"),
                    n.e("66580"),
                    n.e("200203"),
                    n.e("139103"),
                    n.e("489523"),
                    n.e("249629"),
                    n.e("726294"),
                    n.e("780407"),
                    n.e("127659"),
                    n.e("267255"),
                    n.e("276814"),
                    n.e("132737"),
                    n.e("781949"),
                    n.e("283300"),
                    n.e("98972"),
                    n.e("967279"),
                    n.e("431649"),
                    n.e("604172"),
                    n.e("734546"),
                    n.e("568881"),
                    n.e("341701"),
                    n.e("562999"),
                    n.e("283230"),
                    n.e("840985"),
                    n.e("248836"),
                    n.e("225612"),
                    n.e("468083"),
                    n.e("548730"),
                    n.e("871467"),
                    n.e("350949"),
                    n.e("270591"),
                    n.e("825947"),
                    n.e("286030"),
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
                    n.e("506627"),
                    n.e("443256"),
                    n.e("360536"),
                    n.e("340346"),
                    n.e("864926"),
                    n.e("812411"),
                    n.e("775951"),
                    n.e("228011"),
                    n.e("373566"),
                    n.e("815057"),
                    n.e("702846"),
                    n.e("991531"),
                    n.e("462318"),
                    n.e("348072"),
                    n.e("523638"),
                    n.e("125295"),
                    n.e("450541"),
                    n.e("647999"),
                    n.e("337886"),
                    n.e("46416"),
                    n.e("653992"),
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
                    n.e("876892"),
                    n.e("971508"),
                    n.e("816799"),
                    n.e("888205"),
                    n.e("912118"),
                    n.e("852694"),
                    n.e("315090"),
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
                    n.e("214451"),
                    n.e("407755"),
                    n.e("993720"),
                    n.e("654658"),
                    n.e("207306"),
                    n.e("233049"),
                    n.e("569443"),
                    n.e("439518"),
                    n.e("543456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, Z.s)("UserSettingsMenu", M.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, Z.s)("AudioDeviceMenu", M.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n3.d)({ location: "Account" });
                    return (0, i.jsx)(O.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: x.Z_,
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
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(O.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: x.Z_,
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > l_;
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
                      this.speakingWhileMutedTooltipTimeout.start(lC, () =>
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
                    (0, i.jsx)(g.A, { children: tQ.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(b.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: lx.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tn.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: r,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(g.A, { children: tQ.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(J.A, { activity: o, emojiClassName: lx.Zg, className: lx.WO }),
                  ],
              })
            : null != a && a !== tn.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, i.jsx)(N, { text: tQ.Ay.humanizeStatus(a) }),
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
                          className: lx.eW,
                          children: (0, i.jsx)(ic.A, {
                              className: r()({ [lx.e8]: null != e }),
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
                          className: lx.XP,
                          children: (0, i.jsx)(id.A, { children: this.renderStatus() }),
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
            : (0, i.jsx)(iZ, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, i.jsx)(lI, {
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
                          className: r()(lx.kL, { [lx.UG]: null != n, [lx.bc]: !l, [lx.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(Q.A, { nameplate: t, hovered: s, placement: X.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(lS, {
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
function lS(e) {
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
            dismissibleContents: x,
            occluded: E,
            nameplate: C,
            accountContainerRef: _,
            deviceChangedTooltipType: T,
            dismissTooltips: I,
            speaking: b,
        } = e,
        S = (0, $.K)(C);
    function j() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(lv, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: v,
            dismissibleContents: [...x.settings, ...e],
            iconForeground: null != C ? lx.t4 : void 0,
            nameplate: C,
        });
    }
    return (0, i.jsxs)("div", {
        className: lx.Uo,
        style: S,
        children: [
            (0, i.jsx)(la, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: f,
                onContextMenu: p,
                iconForeground: null != C ? lx.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: d,
                shouldShowInputDeviceChangedTooltip: !d && "input" === T,
                dismissTooltips: I,
                speaking: b,
            }),
            (0, i.jsx)(i3, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != C ? lx.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: I,
            }),
            null != n0.Lf
                ? (0, i.jsx)(l.Suspense, { fallback: j(), children: (0, i.jsx)(n0.Lf, { occluded: E, children: j }) })
                : j(),
        ],
    });
}
function lj(e) {
    let t = (0, d.bG)([it.A], () => null != it.A.getChannelId()),
        n = (0, es.Py)(e),
        i = l.useRef(new u.Ep()),
        [a, r] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (r(!0),
            i.current.start(lT, () => {
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
function ly() {
    let e = (0, d.bG)([nA.default], () => nA.default.getCurrentUser()),
        t = (0, d.bG)([nw.default], () => nw.default.getId()),
        {
            activities: n,
            streaming: a,
            status: r,
        } = (0, d.cf)([nU.A], () => {
            let e = nU.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tn.$pd.STREAMING;
                    }),
                status: nU.A.getStatus(),
            };
        }),
        s = (0, d.bG)([n8.A], () => n8.A.getAnyStreamForUser(t)),
        u = (0, C.A)({ userId: t }),
        m = (0, d.bG)([il.A], () => il.A.getVoiceVolume(t)),
        h = tQ.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, d.bG)([it.A, n6.A], () => {
            let e = it.A.getChannelId();
            return null != e ? n6.A.getChannel(e) : null;
        }),
        { mute: p, selfMute: g, suppress: A } = (0, n7.A)(f),
        { selfDeaf: x, deaf: E } = (0, n5.A)(f),
        _ = (0, d.bG)([G.A], () => ((0, V.kK)() ? G.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        T = (0, d.bG)([ie.Ay], () => ie.Ay.getSpeakingWhileMuted()),
        I = (0, d.bG)([H.A], () => H.A.isFullscreenInContext()),
        b = (0, d.bG)([n9.A], () => n9.A.hasLayers()),
        S = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || b || is.P.isDisallowPopupsSet() || I,
        j = (0, d.bG)([el.default], () => null != el.default.getAwaitingRemoteSessionInfo()),
        y = (0, d.bG)([ii.A], () => ii.A.getGuildId()),
        N = e?.avatarDecoration,
        R = (0, K.A)(N),
        B = tQ.Ay.useName(e) ?? "",
        { analyticsLocations: W } = (0, O.Ay)(M.A.ACCOUNT),
        z = (0, Y.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: Z } = (0, nQ.c9)(),
        q = (0, d.bG)([nJ.A, nA.default, n4.A], () => {
            let e,
                t = nJ.A.getSyncingWith(),
                n = nJ.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(n4.A.getParty(e) ?? []))
                        .map((e) => nA.default.getUser(e))
                        .filter(nd.Vq)
                        .value()),
                i.length > 1
            );
        }),
        $ = { avatar: [], settings: [] },
        X = (0, t5.H)({ location: "Account" }) && !S,
        Q = er.A.useIsEligible(),
        J = ea.A.coachmarkDismissibleContent,
        et = (0, ee.ux)("AccountCoachmark"),
        en = (0, w.J)({ location: "AccountCoachmark" }),
        ei = (function (e) {
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
    S ||
        (et && $.avatar.push(c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != ei && $.avatar.push(c.M.BADGE_DIRECTORY_NUX_POPOVER),
        Q && null != J && $.settings.push(J),
        $.settings.push(c.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: es, dismissTooltip: eo } = lj(i0.oh.AUDIO_INPUT),
        { shouldShowTooltip: ed, dismissTooltip: ec } = lj(i0.oh.AUDIO_OUTPUT),
        eu = l.useMemo(() => (es ? "input" : ed ? "output" : void 0), [es, ed]),
        em = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        eo();
                        break;
                    case "output":
                        ec();
                }
            },
            [eo, ec],
        );
    return (0, i.jsx)(O.f5, {
        value: W,
        children: (0, i.jsx)(lb, {
            currentUser: e,
            username: B,
            activities: n,
            applicationStream: s,
            voiceChannel: f,
            dismissibleContents: $,
            badgeDirectoryNuxPopoverVariant: ei,
            isOrbchievementsEnabled: X,
            userTag: h,
            occluded: S,
            selfDeaf: x,
            selfMute: g,
            serverDeaf: E,
            serverMute: p,
            speaking: u,
            voiceDb: m,
            speakingWhileMuted: T,
            status: r,
            streaming: a,
            suppress: A,
            webBuildOverride: _,
            awaitingRemote: j,
            nameplate: z,
            selectedGuildId: y,
            avatarDecoration: R,
            isQuestBarEmpty: Z,
            isListenAlongVisible: q,
            deviceChangedTooltipType: eu,
            onDismissDeviceChangedTooltip: () => em(eu),
        }),
    });
}
