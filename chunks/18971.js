(n.d(t, { g: () => iV, A: () => iW }), n(321073));
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(435558),
    o = n.n(s),
    u = n(350835),
    d = n(17928),
    c = n(554146),
    m = n(451988),
    h = n(97808),
    p = n(778712),
    f = n(265872),
    g = n(939249),
    A = n(140735),
    v = n(312138);
if (221552 == n.j) var x = n(192308);
var E = n(442433),
    C = n(820284),
    _ = n(717558),
    T = n(964486),
    y = n(220839),
    j = n(397244),
    N = n(394871),
    I = n(941143),
    S = n(866323),
    b = n(120842);
function R(e) {
    let { text: t } = e,
        n = (0, S.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, l.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, l.jsx)(I.animated.div, { className: b.H, style: e, children: t })),
    });
}
var M = n(29160),
    O = n(793574),
    w = n(688810),
    P = n(643056),
    L = n(158390),
    k = n(927813),
    D = n(682618),
    U = n(864197),
    F = n(982240),
    G = n(988341),
    V = n(521502),
    H = n(380610),
    B = n(198052),
    W = n(18235),
    z = n(183184),
    Z = n(384059),
    K = n(480890),
    q = n(601255),
    Y = n(562819),
    Q = n(449582),
    $ = n(351952),
    X = n(88686),
    J = n(214881),
    ee = n(302223),
    et = n(609425),
    en = n(922301),
    el = n(660184),
    ei = n(643501),
    ea = n(826673),
    er = n(617617),
    es = n(417792),
    eo = n(355097),
    eu = n(771527),
    ed = n(552122),
    ec = n(74848),
    em = n(607399),
    eh = n(305866),
    ep = n(707554),
    ef = n(364522),
    eg = n(22231),
    eA = n(62010),
    ev = n(935154),
    ex = n(780338);
if (221552 != n.j) var x = n(192308);
var eE = n(224640),
    eC = n(980707),
    e_ = n(877784),
    eT = n(26137),
    ey = n(473935),
    ej = n(765671),
    eN = n(470739),
    eI = n(142617),
    eS = n(366056),
    eb = n(320448),
    eR = n(834730),
    eM = n(993401),
    eO = n(105292),
    ew = n(211450);
function eP(e) {
    return (0, l.jsx)("div", {
        className: ew.wE,
        children: (0, l.jsx)(eC.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eL(e) {
    let {
            action: t,
            onClick: n,
            icon: a,
            label: r,
            sublabel: s,
            trailing: o,
            renderSubmenu: u,
            ref: d,
            submenuTargetElementRef: c,
            submenuAlign: m,
        } = e,
        h = null != n,
        p = (0, eM.rE)({ action: t, onClick: n }),
        [A, v] = i.useState(!1),
        E = i.useRef(null),
        C = d ?? E,
        _ = null != u,
        T = _ && h,
        y = i.useCallback(() => {
            v(!0);
        }, []),
        j = i.useCallback(() => {
            (0, x.hasAnyModalOpen)() || v(!1);
        }, []);
    function N() {
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", { className: ew.iA, children: (0, l.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: ew.$H,
                    children: [
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(eR.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: ew.W1,
                                    children: r,
                                }),
                                (0, l.jsx)(eR.E, { color: "currentColor", variant: "text-xs/medium", children: s }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function I(e) {
        let t;
        return (
            (t = T
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(g.D, { className: ew.ef, onClick: p, children: N() }),
                          (0, l.jsx)(g.D, {
                              className: ew.ap,
                              "aria-label": eO.intl.string(eO.t.PdRCRg),
                              ...e,
                              onClick: y,
                              children: (0, l.jsx)(eb._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, l.jsxs)(g.D, {
                        className: ew.ef,
                        ...e,
                        onClick: y,
                        children: [
                            N(),
                            (0, l.jsx)("div", {
                                className: ew.ap,
                                children: (0, l.jsx)(eb._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, l.jsx)(g.D, { className: ew.ef, onClick: p, children: N() })),
            (0, l.jsx)("div", { ref: C, className: ew.jG, children: t })
        );
    }
    return _
        ? (0, l.jsx)("li", {
              className: ew.j$,
              onMouseEnter: y,
              onMouseLeave: j,
              children: (0, l.jsx)(f.Y, {
                  targetElementRef: c ?? C,
                  align: m,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: j,
                  children: I,
              }),
          })
        : (0, l.jsx)("li", { className: ew.j$, children: I() });
}
function ek(e) {
    let { children: t, "aria-label": n } = e;
    return (0, l.jsx)("ul", { "aria-label": n, children: t });
}
var eD = n(849874),
    eU = n(658580),
    eF = n(128400),
    eG = n(641214);
function eV(e) {
    let { onClose: t } = e;
    return (0, l.jsx)(eL, {
        icon: eS.M,
        label: eO.intl.string(eF.default["8hclXY"]),
        sublabel: (0, l.jsx)("span", { className: eG.$, children: eO.intl.string(eF.default.BFc4lY) }),
        onClick: function () {
            (t(), (0, eD.nX)(), (0, eU.D)("user_profile_account_popout"));
        },
    });
}
var eH = n(176781),
    eB = n(812993),
    eW = n(780964),
    ez = n(766075),
    eZ = n(734066),
    eK = n(915725),
    eq = n(409067),
    eY = n(271597),
    eQ = n(297264),
    e$ = n(475358),
    eX = n(866665),
    eJ = n(408278),
    e0 = n(625903),
    e1 = n(404778),
    e2 = n(689175),
    e3 = n(821609),
    e5 = n(532624),
    e6 = n(879631),
    e7 = n(350535),
    e8 = n(974293),
    e9 = n(572164),
    e4 = n(953932),
    te = n(280483),
    tt = n(890856),
    tn = n(713517),
    tl = n(609174),
    ti = n(619744);
function ta(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, tl.Y_)(),
        r = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, eY.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, l.jsx)(e3.$, {
        onClick: r,
        icon: eg.PencilIcon,
        variant: n,
        size: "sm",
        text: eO.intl.string(eO.t.bt75uw),
        fullWidth: !0,
    });
}
var tr = n(82716),
    ts = n(449397),
    to = n(930317),
    tu = n(285072),
    td = n(575172);
let tc = i.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: s } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, tn.A)(o),
        d = i.useCallback(() => {
            (a?.(), (0, eY.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, l.jsx)(tl.Cl, {
        clip: t,
        children: (0, l.jsx)(tt.s, {
            ref: o,
            "aria-label": eO.intl.string(eO.t.bt75uw),
            onClick: d,
            className: r()(td.Z1, s),
            children: (0, l.jsxs)(to.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, l.jsx)("div", {
                            className: td.Ad,
                            children: (0, l.jsx)(eA.E, { type: "new", variant: "primary" }),
                        }),
                    (0, l.jsxs)(tu.h, {
                        isVisible: u,
                        className: td.Lw,
                        children: [
                            (0, l.jsxs)("div", {
                                className: td.mY,
                                children: [(0, l.jsx)(tr.z, {}), (0, l.jsx)(ti.k, {})],
                            }),
                            (0, l.jsxs)("div", {
                                className: td.E_,
                                children: [
                                    (0, l.jsx)(ta, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, l.jsx)(ts.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tm = n(696016),
    th = n(652215),
    tp = n(753070),
    tf = n(507216),
    tg = n(48127);
function tA(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: r } = e;
    (0, te.A)();
    let s = (0, d.yK)([eK.Ay], () => Object.values(eK.Ay.getClips())),
        o = (0, d.bG)([eK.Ay], () => eK.Ay.getSettings()),
        u = (0, d.bG)([eK.Ay], () => eK.Ay.getNewClipIds()),
        c = (0, e8.aJ)("ClipsPopout"),
        m = (0, d.bG)([eK.Ay], () => eK.Ay.getEnableAutoclipping()),
        h = (0, d.bG)([e5.Ay], () => e5.Ay.getKeybindForAction(th.hCu.SAVE_CLIP)),
        p = i.useCallback(
            (e) => {
                r?.(e);
            },
            [r],
        ),
        f = !o.showPovClipsInGallery,
        g = i.useMemo(() => {
            let e = s.filter((e) => e.type === tm.nQ.CLIP && "" !== e.thumbnail && (!f || !(0, eq.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, f]),
        A = i.useMemo(() => g.slice(0, 16), [g]),
        v = g.length > 16,
        x = null != h ? e7.dI(h.shortcut, !0) : null,
        E = [
            (0, e6.$)(o.clipsLength / k.A.Millis.SECOND),
            (0, tp.zr)(o.clipsQuality.resolution),
            eO.intl.formatToPlainString(eO.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        c && E.push(eO.intl.string(tf.default.XWkJoi)),
        (0, l.jsxs)("div", {
            ref: p,
            className: tg.SW,
            role: "dialog",
            "aria-label": eO.intl.string(eO.t.z2jK6X),
            children: [
                (0, l.jsxs)("div", {
                    className: tg.wx,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tg.$,
                            children: [
                                (0, l.jsx)(eQ.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: eO.intl.string(eO.t.z2jK6X),
                                }),
                                null != x && (0, l.jsx)(e$.e, { className: tg.P, shortcut: x }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: tg.$s,
                            children: [
                                (0, l.jsx)(eX.m, {
                                    text: eO.intl.string(eO.t["3D5yo/"]),
                                    children: (0, l.jsx)(eJ.K, {
                                        onClick: () => n(),
                                        icon: e0.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eO.intl.string(eO.t["3D5yo/"]),
                                    }),
                                }),
                                (0, l.jsx)(eX.m, {
                                    text: eO.intl.string(tf.default["55C2MH"]),
                                    children: (0, l.jsx)(eJ.K, {
                                        onClick: () => t(),
                                        icon: eH.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eO.intl.string(tf.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tg.ov,
                    children: [
                        E.map((e, t) =>
                            (0, l.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, l.jsx)("span", { className: tg.LO, children: "\u2022" }),
                                        (0, l.jsx)(eR.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tg.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        c &&
                            (0, l.jsx)(eR.E, {
                                variant: "text-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tg.wS,
                                children: m ? eO.intl.string(tf.default.lTwKmt) : eO.intl.string(tf.default.GNDqtf),
                            }),
                    ],
                }),
                (0, l.jsx)(e1.c, {}),
                A.length > 0
                    ? (0, l.jsxs)(e2.Ch, {
                          className: tg.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, l.jsx)(tc, { clip: e, isNew: u.includes(e.id), onClose: a }, e.id)),
                              v &&
                                  (0, l.jsx)("div", {
                                      className: tg.qr,
                                      children: (0, l.jsx)(e3.$, {
                                          onClick: () => t(),
                                          text: eO.intl.string(tf.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, l.jsx)(tv, { keybindString: x }),
            ],
        })
    );
}
function tv(e) {
    let { keybindString: t } = e,
        n = (0, e9.E)();
    return (0, l.jsxs)("div", {
        className: tg.p$,
        children: [
            (0, l.jsx)(eR.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tg.qO,
                children: eO.intl.string(tf.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, l.jsx)(eR.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tg.CZ,
                      children: eO.intl.format(tf.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, l.jsx)(
                                  eR.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, l.jsx)(e$.e, { shortcut: t }),
                      }),
                  })
                : (0, l.jsx)(e4.A, {}),
        ],
    });
}
function tx(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eZ.sw)(),
        r = !(0, d.bG)([eK.Ay], () => eK.Ay.getSettings().showPovClipsInGallery),
        s = (0, d.bG)(
            [eK.Ay],
            () => {
                let e = eK.Ay.getNewClipIds();
                return r
                    ? e.filter((e) => {
                          let t = eK.Ay.getClipById(e);
                          return null != t && !(0, eq.kD)(t);
                      }).length
                    : e.length;
            },
            [r],
        ),
        o = i.useCallback(
            (e) => {
                (t(), (0, eY.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = i.useCallback(() => {
            (t(), (0, ez.openUserSettings)(eW.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, l.jsx)(eL, {
              action: "PRESS_CLIPS",
              icon: eH.x,
              label: eO.intl.string(eO.t.z2jK6X),
              trailing: s > 0 ? (0, l.jsx)(eB.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, l.jsx)(tA, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tE = n(480335),
    tC = n(577390),
    t_ = n(372320),
    tT = n(31956),
    ty = n(744808),
    tj = n(645507),
    tN = n(131607),
    tI = n(970931),
    tS = n(315710),
    tb = n(789645),
    tR = n(775602),
    tM = n(832248),
    tO = n(462887),
    tw = n(736653),
    tP = n(439174),
    tL = n(24482),
    tk = n(19886),
    tD = n(202541);
function tU() {
    let e = (0, tk.Xb)(),
        t = (0, tL.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tD.sp.length - 1; t >= 0; t--) {
        let l = tD.VD[tD.sp[t]],
            i = new Date(e);
        if ((i.setMonth(i.getMonth() + l.tenureReqNumMonths), i.setHours(i.getHours() + 30), n > i.getTime()))
            if (n - i.getTime() < 6048e5) return l.id;
            else break;
    }
    return null;
}
let tF = {
        [tD.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tD.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tD.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tD.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tD.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tD.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tD.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tD.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tG = {
        [tD.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tD.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tD.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tD.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tD.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tD.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tD.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tD.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tV = n(570484);
let tH = i.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tB() {
    let e = (0, d.bG)([tR.Ay], () => tR.Ay.useReducedMotion),
        t = (0, tM.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tU(),
                t = (0, tO.M)((0, tw.Ay)());
            if (null == e) return null;
            let n = tF[e],
                l = tG[e],
                i = {
                    currentBadge: (0, tP.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? l?.dark : l?.light,
                },
                a = tD.sp.indexOf(e);
            if (a > 0) {
                let e = tD.sp[a - 1],
                    n = tF[e];
                ((i.prevBadge = (0, tP.e0)(e)), (i.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return i;
        })(),
        [a, r] = i.useState(null);
    return (null != n && null == a && r(n), e || !t || null == a) ? null : (0, l.jsx)(tW, { levelUpData: a });
}
function tW(e) {
    let { levelUpData: t } = e,
        n = i.useRef(null),
        a = i.useCallback(() => {
            tM.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, l.jsx)(tS.Ok, {
        containerRef: n,
        children: (0, l.jsxs)("div", {
            className: tV.i,
            children: [
                (0, l.jsx)("div", {
                    className: tV.b,
                    children: (0, l.jsx)(eX.m, {
                        text: eO.intl.string(eO.t.cpT0Cq),
                        children: (0, l.jsx)(eJ.K, {
                            icon: tb.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": eO.intl.string(eO.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsx)(tH, { levelUpData: t }) }),
            ],
        }),
    });
}
var tz = n(397562),
    tZ = n(206835),
    tK = n(183555),
    tq = n(465318),
    tY = n(999291),
    tQ = n(402860),
    t$ = n(718019),
    tX = n(977059),
    tJ = n(915614),
    t0 = n(925622),
    t1 = n(559506),
    t2 = n(646986),
    t3 = n(657538),
    t5 = n(946356),
    t6 = n(465829),
    t7 = n(624479),
    t8 = n(206845),
    t9 = n(957565),
    t4 = n(427262),
    ne = n(62119);
function nt(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: i } = (0, tK.NJ)();
    return t9.p5
        ? (0, l.jsx)(t8.A, {
              text: eO.intl.string(eO.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t4.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => i({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, l.jsx)(g.D, {
                      ...e,
                      className: r()(ne.c, { [ne.R]: n }),
                      "aria-label": eO.intl.string(eO.t.y5MwJy),
                      children: (0, l.jsx)(t7.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nn = n(394816),
    nl = n(442228),
    ni = n(253932),
    na = n(362862),
    nr = n(621466),
    ns = n(318254),
    no = n(863610),
    nu = n(421773),
    nd = n(318346),
    nc = n(923138),
    nm = n(309954),
    nh = n(673125),
    np = n(646731),
    nf = n(769001);
function ng(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: a, onCloseAccountPopout: s } = e;
    (0, nc.I)({ enabled: !0 });
    let { balance: o } = (0, nm.W)(),
        u = (0, d.bG)([nh.Ay], () =>
            nh.Ay.userOpenedWalletViaProfileDCF ? nh.Y0.NEW_ACHIEVEMENT : nh.Ay.clientUnreadNotificationType,
        );
    i.useEffect(
        () => () => {
            nh.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: c, onMouseEnter: m, onMouseLeave: h, setIsHovered: p, cancelTimers: A } = (0, nu.A)(0, 500),
        v = i.useCallback(() => {
            (0, x.hasAnyModalOpen)() || h();
        }, [h]),
        E = i.useRef(null),
        C = i.useRef(null),
        _ = i.useRef(null),
        T = i.useCallback(
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
    (i.useEffect(() => () => _.current?.disconnect(), []),
        i.useEffect(() => {
            if (c)
                return (document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e));
            function e(e) {
                if ((0, x.hasAnyModalOpen)()) return;
                let t = (0, nr.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${ew.j$}`);
                null != n && n !== E.current && (A(), p(!1));
            }
        }, [c, A, p]));
    let y = i.useRef(!1);
    i.useEffect(() => {
        c || (y.current = !1);
    }, [c]);
    let j = i.useCallback(() => {
            (y.current ||
                ((y.current = !0),
                (0, nd.Y)({
                    pageType: O.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: O.A.ORB_WALLET,
                    ctaObject: O.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        N = (0, eM.rE)({ action: "PRESS_ORBS", onClick: j });
    i.useEffect(() => {
        let e = n?.current,
            t = E.current;
        if (!a || null == e || null == t) return;
        function l() {
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect(),
                l = t.getBoundingClientRect(),
                i = l.bottom + 24 - n.bottom,
                a = n.top - (l.top - 24);
            i > 0 ? (e.scrollTop += i) : a > 0 && (e.scrollTop -= a);
        }
        let i = requestAnimationFrame(l),
            r = new ResizeObserver(l);
        for (let t of (r.observe(e), Array.from(e.children))) r.observe(t);
        function s() {
            (r.disconnect(), clearTimeout(o));
        }
        let o = setTimeout(s, 3e3);
        return (
            e.addEventListener("wheel", s, { once: !0 }),
            e.addEventListener("pointerdown", s, { once: !0 }),
            () => {
                (cancelAnimationFrame(i),
                    s(),
                    e.removeEventListener("wheel", s),
                    e.removeEventListener("pointerdown", s));
            }
        );
    }, [a, n]);
    let I = i.useMemo(
            () =>
                null != o
                    ? eO.intl.format(eO.t["8xDISf"], { balance: String(o) })
                    : (0, l.jsx)(no.n, { dotRadius: 3.5, themed: !0, className: nf.K }),
            [o],
        ),
        S = i.useMemo(
            () =>
                u === nh.Y0.NEW_ACHIEVEMENT
                    ? (0, l.jsx)(eA.E, { type: "new", variant: "primary" })
                    : u === nh.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, l.jsx)(eA.E, { type: { text: eO.intl.string(eO.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        b = i.useCallback(() => {
            (A(), p(!1), s());
        }, [A, p, s]),
        R = i.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nr.vq)(t, Node) && null != E.current && E.current.contains(t) && A();
            },
            [A],
        );
    return (0, l.jsx)("li", {
        ref: E,
        className: ew.j$,
        onMouseEnter: j,
        onMouseLeave: v,
        children: (0, l.jsx)(f.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    ref: T,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, l.jsx)(np.vG, { onCloseWallet: b, returnRef: C, isProfilePopout: !0 }),
                }),
            shouldShow: c,
            onRequestClose: v,
            children: (e) =>
                (0, l.jsx)("div", {
                    className: ew.jG,
                    children: (0, l.jsxs)(g.D, {
                        innerRef: C,
                        className: ew.ef,
                        ...e,
                        onClick: N,
                        children: [
                            (0, l.jsx)("div", {
                                className: ew.iA,
                                children: (0, l.jsx)(ns.C, { color: "currentColor", size: "xs" }),
                            }),
                            (0, l.jsx)("div", {
                                className: ew.$H,
                                children: (0, l.jsx)("div", {
                                    children: (0, l.jsx)(eR.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: ew.W1,
                                        children: I,
                                    }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: r()(ew.ap, nf._),
                                children: [S, (0, l.jsx)(eb._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nA = n(290863),
    nv = n(351906),
    nx = n(403362),
    nE = n(562153),
    nC = n(661531),
    n_ = n(477782),
    nT = n(628284),
    ny = n(695366),
    nj = n(363195),
    nN = n(889227),
    nI = n(287809),
    nS = n(174459),
    nb = n(429707),
    nR = n(274303),
    nM = n(994125),
    nO = n(347853),
    nw = n(573879),
    nP = n(559117),
    nL = n(43105),
    nk = n(661439),
    nD = n(385113),
    nU = n(352003),
    nF = n(429913),
    nG = n(334074),
    nV = n(633075),
    nH = n(667049),
    nB = n(280450),
    nW = n(90165),
    nz = n(49999),
    nZ = n(518477);
function nK(e) {
    let { targetElementRef: t, onClose: a } = e,
        [r, s] = i.useState(!1),
        o = (0, d.bG)([nB.default], () => nB.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, d.yK)([nD.A], () => nD.A.getFeaturedApplicationIds());
            ((0, nU.A)(e),
                i.useEffect(() => {
                    (0, nk.X)();
                }, []));
            let t = (0, d.bG)([nB.default], () => nB.default.getId()),
                n = (0, nH.A)(t),
                l = i.useMemo(() => n.filter((e) => e instanceof nV.R), [n]),
                a = (0, nF.A)(e),
                r = i.useMemo(() => a.filter(nx.Vq), [a]),
                s = (0, d.cf)([nW.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = r.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nW.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = i.useMemo(() => {
                    let e = Date.now();
                    return r.filter((t) => {
                        if (l.some((e) => e.applicationId === t.id)) return !1;
                        let n = s[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [r, l, s]),
                { eligibleToShow: u, markAsDismissed: m } = (0, nG.hj)({
                    applications: o,
                    dismissibleContent: c.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nG.SH,
                });
            return {
                eligibleApplications: i.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]),
                markAsDismissed: m,
            };
        })();
    return ((0, i.useEffect)(() => {
        0 !== u.length &&
            Promise.all([
                n.e("459257"),
                n.e("535308"),
                n.e("393514"),
                n.e("816027"),
                n.e("562772"),
                n.e("970604"),
                n.e("399275"),
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
                n.e("339715"),
                n.e("149697"),
                n.e("128804"),
                n.e("60882"),
                n.e("71151"),
                n.e("985301"),
                n.e("981059"),
                n.e("790484"),
                n.e("211004"),
                n.e("269714"),
                n.e("62849"),
                n.e("489020"),
                n.e("670058"),
                n.e("527798"),
                n.e("892877"),
                n.e("544878"),
                n.e("249918"),
                n.e("507140"),
                n.e("862543"),
                n.e("759086"),
                n.e("422037"),
                n.e("412117"),
                n.e("263406"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("175927"),
                n.e("470126"),
                n.e("227853"),
                n.e("286615"),
                n.e("735042"),
                n.e("311541"),
                n.e("795854"),
                n.e("870088"),
                n.e("300641"),
                n.e("571163"),
                n.e("586662"),
                n.e("831377"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("279774"),
                n.e("763945"),
                n.e("261204"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("590088"),
                n.e("807003"),
                n.e("46083"),
                n.e("152133"),
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
                n.e("206189"),
                n.e("804439"),
                n.e("84978"),
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
                n.e("440727"),
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
                n.e("975366"),
                n.e("412408"),
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
                n.e("493118"),
                n.e("166171"),
                n.e("595990"),
                n.e("218781"),
                n.e("910167"),
                n.e("70379"),
                n.e("417333"),
                n.e("127962"),
                n.e("76428"),
                n.e("834552"),
                n.e("993103"),
                n.e("863232"),
                n.e("708757"),
                n.e("517888"),
                n.e("959880"),
                n.e("174016"),
                n.e("907167"),
                n.e("910471"),
                n.e("11301"),
                n.e("710284"),
                n.e("861060"),
                n.e("364827"),
                n.e("77333"),
                n.e("217229"),
                n.e("477175"),
                n.e("960235"),
                n.e("585968"),
                n.e("402040"),
                n.e("198329"),
                n.e("678157"),
                n.e("942374"),
                n.e("147134"),
                n.e("331988"),
                n.e("10866"),
                n.e("236850"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("190779"),
                n.e("373122"),
                n.e("715881"),
                n.e("221856"),
                n.e("186212"),
                n.e("755936"),
                n.e("147662"),
                n.e("46322"),
                n.e("899843"),
                n.e("904448"),
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
                n.e("234503"),
                n.e("413846"),
                n.e("576909"),
                n.e("27355"),
                n.e("953665"),
                n.e("406174"),
                n.e("776273"),
                n.e("305692"),
                n.e("28102"),
                n.e("393766"),
                n.e("497516"),
                n.e("229787"),
                n.e("572963"),
                n.e("307575"),
                n.e("521930"),
                n.e("554241"),
                n.e("724303"),
                n.e("53102"),
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
                n.e("504370"),
                n.e("428967"),
                n.e("953858"),
                n.e("859546"),
                n.e("432805"),
                n.e("608032"),
                n.e("477970"),
                n.e("386317"),
                n.e("136204"),
                n.e("252229"),
                n.e("523276"),
                n.e("77473"),
                n.e("812042"),
                n.e("25279"),
                n.e("729963"),
                n.e("830938"),
                n.e("538513"),
                n.e("763400"),
                n.e("919726"),
                n.e("122990"),
                n.e("276177"),
                n.e("830228"),
                n.e("50097"),
                n.e("484189"),
                n.e("93461"),
                n.e("203930"),
                n.e("903663"),
                n.e("36877"),
                n.e("908081"),
                n.e("693992"),
                n.e("824126"),
                n.e("829260"),
                n.e("248836"),
                n.e("489523"),
                n.e("504098"),
                n.e("920593"),
                n.e("604172"),
                n.e("568881"),
                n.e("582486"),
                n.e("350949"),
                n.e("134504"),
                n.e("741786"),
                n.e("553683"),
                n.e("280098"),
                n.e("181162"),
                n.e("704374"),
                n.e("186546"),
                n.e("128178"),
                n.e("908608"),
                n.e("571294"),
                n.e("598421"),
                n.e("443256"),
                n.e("373566"),
                n.e("114633"),
                n.e("520842"),
                n.e("720161"),
                n.e("247339"),
                n.e("171398"),
                n.e("659624"),
                n.e("825951"),
                n.e("736637"),
                n.e("653308"),
                n.e("414501"),
                n.e("819119"),
                n.e("264955"),
                n.e("64500"),
                n.e("486825"),
                n.e("671367"),
                n.e("564395"),
                n.e("69658"),
                n.e("375072"),
                n.e("569443"),
                n.e("49282"),
                n.e("235683"),
                n.e("702091"),
            ]).then(n.bind(n, 577593));
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, l.jsx)(nL.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: eO.intl.string(eO.t.HMWL9c),
              body: eO.intl.string(eO.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      nz.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eO.intl.string(eO.t.VSLDly),
                      loading: r,
                      onClick: function () {
                          (s(!0),
                              (0, tQ.openUserProfileModal)({ userId: o, tabSection: nZ.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      ((0, x.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("975366"),
                                                  n.e("412408"),
                                                  n.e("193457"),
                                                  n.e("892937"),
                                                  n.e("166171"),
                                                  n.e("487697"),
                                                  n.e("305692"),
                                                  n.e("136204"),
                                                  n.e("504098"),
                                                  n.e("181162"),
                                                  n.e("128178"),
                                                  n.e("720161"),
                                                  n.e("264955"),
                                                  n.e("131479"),
                                              ]).then(n.bind(n, 677130));
                                              return (n) =>
                                                  (0, l.jsx)(t, {
                                                      ...n,
                                                      trackUserProfileEditAction: () => {},
                                                      highlightedApplicationIds: e,
                                                  });
                                          },
                                          { stackingBehavior: "stack" },
                                      ),
                                          m(
                                              u.map((e) => e.id),
                                              nz.i.TAKE_ACTION,
                                          ),
                                          a());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var nq = n(461213),
    nY = n(818348),
    nQ = n(709516);
function n$() {
    let e = (0, d.bG)([nq.A], () => nq.A.getStatus()),
        t = (0, t4.MU)(e) ?? "",
        n = e === nY.cl.INVISIBLE || e === nY.cl.OFFLINE;
    return (0, l.jsxs)("div", {
        className: nQ.k,
        children: [
            (0, l.jsxs)(A.A, { tag: "div", children: [eO.intl.string(eO.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, l.jsx)(eX.m, {
                    text: eO.intl.string(eO.t.L99HQm),
                    children: (0, l.jsx)(ny.E, {
                        size: "xs",
                        color: nC.A.colors.STATUS_WARNING,
                        "aria-label": eO.intl.string(eO.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nX = n(146901),
    nJ = n(827827);
let n0 = [
        { duration: 15 * k.A.Millis.MINUTE, label: () => eO.intl.string(eO.t["8ot6gv"]) },
        { duration: k.A.Millis.HOUR, label: () => eO.intl.string(eO.t.UMWBZr) },
        { duration: 8 * k.A.Millis.HOUR, label: () => eO.intl.string(eO.t.EpAXPC) },
        { duration: k.A.Millis.DAY, label: () => eO.intl.string(eO.t["755t4q"]) },
        { duration: 3 * k.A.Millis.DAY, label: () => eO.intl.string(eO.t["f3/1ch"]) },
        { duration: void 0, label: () => eO.intl.string(eO.t["46dqJY"]) },
    ],
    n1 = "forever";
function n2(e) {
    let { status: t, currentStatus: n, description: i } = e,
        a = t !== th.clD.ONLINE,
        r = (0, l.jsx)(l.Fragment, {
            children: n0.map((e) => {
                let { duration: i, label: a } = e;
                return (0, l.jsx)(
                    n_.Dr,
                    {
                        id: `${t}-${i}`,
                        label: a(),
                        action: () => (0, nJ.A)({ nextStatus: t, prevStatus: n, durationMillis: i }),
                        dontCloseOnAction: !0,
                    },
                    i ?? n1,
                );
            }),
        });
    return (0, l.jsx)(n_.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, t4.MU)(t),
        subtext: i,
        iconLeft: () => (0, l.jsx)(ev.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nJ.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? r : void 0,
    });
}
function n3(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: l } = (0, nX._)(e);
    return "today" === t
        ? eO.intl.formatToPlainString(eO.t.ZxxHIO, { timeString: l })
        : eO.intl.formatToPlainString(eO.t["9OFjSe"], { dateString: n, timeString: l });
}
var n5 = n(996988),
    n6 = n(207634),
    n7 = n(47453);
function n8(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        f = (0, tY.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, w.Ay)(O.A.USER_PROFILE_ACCOUNT_POPOUT),
        v = (0, tK.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, tz.A)(g, f, nZ.R7.ACCOUNT_POPOUT);
    let { ref: E } = (0, ej.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, tn.A)(E);
    (i.useEffect(() => {
        a?.(E.current);
    }, [E, a]),
        i.useEffect(
            () => (
                tM.A.setState({ isOpen: !0 }),
                () => tM.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let T = (0, d.bG)([nA.A], () => nA.A.getStatus(t.id)),
        y = n3(ni.CY.useSetting()),
        j = (0, d.bG)([nv.A], () => nv.A.hidePersonalInformation),
        N = (0, tI.kB)(),
        I = ni.Q_.useSetting(),
        S = (function (e) {
            let t = ni.CY.useSetting(),
                n = (0, tI.kB)(),
                i = ni.Jr.useSetting();
            function a(l) {
                let i = n3(t);
                if (e === l && null != i) return i;
                switch (l) {
                    case th.clD.DND:
                        return n ? eO.intl.string(eO.t.day5A6) : eO.intl.string(eO.t["tq/fMK"]);
                    case th.clD.INVISIBLE:
                        return eO.intl.string(eO.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let r = (0, l.jsx)(l.Fragment, {
                    children: n0.map((t) => {
                        let { duration: n, label: i } = t;
                        return (0, l.jsx)(
                            n_.Dr,
                            {
                                id: `${e}-${n}`,
                                label: i(),
                                action: () => {
                                    (0, tI.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n1,
                        );
                    }),
                }),
                s = n2({ status: th.clD.ONLINE, currentStatus: e }),
                o = n2({ status: th.clD.IDLE, currentStatus: e, description: a(th.clD.IDLE) }),
                u = n2({ status: th.clD.DND, currentStatus: e, description: a(th.clD.DND) }),
                d = n2({ status: th.clD.INVISIBLE, currentStatus: e, description: a(th.clD.INVISIBLE) });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    s,
                    (0, l.jsx)(n_.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    d,
                    n
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(n_.bX, {}, "menu-separator-statuses"),
                                  (0, l.jsx)(
                                      n_.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eO.intl.string(eO.t.gJRnwK),
                                          iconLeft: ex.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: ex.BellSlashIcon },
                                          badge: { text: eO.intl.string(eO.t.ApAu9f) },
                                          subtext:
                                              null != i && "0" !== i
                                                  ? eO.intl.format(eO.t.BWD8fs, {
                                                        endTime: new Date(Number(i)).toLocaleString(
                                                            eO.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eO.intl.string(eO.t["Br1q+x"]),
                                          action: () => {
                                              (0, tI.ES)(!n);
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
        b = (function (e) {
            let t = (0, d.bG)([nI.default], () => nI.default.getCurrentUser()),
                n = (0, d.bG)([nv.A], () => nv.A.hidePersonalInformation),
                i = (0, d.bG)([nj.A], () => (0, tO.M)(nj.A.theme)),
                { multiAccountUsers: a } = (0, nM.K)(),
                r = a.map((a) => {
                    let r = new nN.A(a),
                        s = r.id === t?.id,
                        o = a.tokenStatus === nR.U.INVALID,
                        u = n ? null : `#${r.discriminator}`;
                    return (0, l.jsx)(
                        n_.Dr,
                        {
                            id: r.id,
                            focusedClassName: nP.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, l.jsxs)("div", {
                                    className: nP.ci,
                                    children: [
                                        (0, l.jsx)(h.eu, {
                                            src: r.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: nP.DD,
                                            children: [
                                                (0, l.jsx)(eR.E, {
                                                    className: nP.gE,
                                                    variant: "text-sm/normal",
                                                    children: t4.Ay.getUserTag(r, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !r.hasUniqueUsername() &&
                                                    (0, l.jsx)(eR.E, {
                                                        className: nP.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, l.jsx)(nT.y, {
                                                size: "sm",
                                                color: t
                                                    ? nC.A.unsafe_rawColors.WHITE.css
                                                    : nC.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nC.A.unsafe_rawColors.BRAND_500.css
                                                        : nC.A.unsafe_rawColors.WHITE.css,
                                                className: nP.s0,
                                            }),
                                        o &&
                                            (0, l.jsx)(ny.E, {
                                                color: nC.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nC.A.unsafe_rawColors.BRAND_500.css
                                                        : nC.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nP.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nO.A)();
                                else {
                                    var n;
                                    (n = r.id) !== t?.id &&
                                        (nS.default.track(th.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: th.JJy.USER_PROFILE },
                                        }),
                                        nb.Mx(n, void 0, nw.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        r.id,
                    );
                });
            return (
                r.push(
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(n_.bX, {}),
                            (0, l.jsx)(n_.Dr, {
                                id: "manage-accounts",
                                label: eO.intl.string(eO.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nO.A)());
                                },
                            }),
                        ],
                    }),
                ),
                r
            );
        })(n),
        R = (0, tZ.A)({ analyticsLocations: g }),
        M = (0, tL.TW)(t),
        L = (0, P.d)({ location: "UserProfileAccountPopout" }),
        k = i.useRef(null),
        D = i.useRef(null),
        U = i.useRef(null),
        F = (0, t_.A)(f?.profileFrame?.skuId),
        G = (0, tC.A)(f?.profileFrame?.skuId);
    (0, tT.A)({ skuId: f?.profileFrame?.skuId, openedAt: o, context: v, analyticsLocations: g });
    let V = i.useRef((0, tM.A)((e) => e.shouldRenderTenureLevelUp)),
        H = i.useMemo(() => (0, tj.A)(), []),
        [B, W] = i.useState(() => tM.A.getState().shouldRenderTenureLevelUp);
    function z(e) {
        (n?.(), (0, tQ.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...v, ...e }));
    }
    i.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Z = f?.widgets != null && f.widgets.length > 0,
        K = i.useCallback(() => {
            n();
        }, [n]),
        q = i.useCallback(() => {
            (R(), K());
        }, [R, K]),
        Y = tq.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        Q = (0, na.H)({ location: "UserProfileAccountPopout" }),
        $ = (0, eI.FX)("UserProfileAccountPopout"),
        X = (0, tM.A)((e) => e.shouldScrollToOrbsMenuItem),
        [J, ee] = (0, tN.kn)(
            [
                c.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
                Y ? c.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nx.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        et = i.useId();
    return (0, l.jsx)(w.f5, {
        value: g,
        children: (0, l.jsx)(tK.of, {
            value: v,
            openedAt: o,
            fetchStartedAt: f?.fetchStartedAt,
            fetchEndedAt: f?.fetchEndedAt,
            isLoaded: f?.isLoaded,
            children: (0, l.jsxs)(eh.l, {
                ref: E,
                "aria-labelledby": et,
                className: r()(ew.jC, u),
                "data-layer": "base",
                children: [
                    (0, l.jsx)(A.A, {
                        children: (0, l.jsx)(ep.H, { id: et, children: eO.intl.string(eO.t["5fWB8U"]) }),
                    }),
                    (0, l.jsxs)(ep.F, {
                        children: [
                            (0, l.jsxs)(t5.A, {
                                className: ew.BK,
                                user: t,
                                displayProfile: f,
                                themeType: n5.d.POPOUT,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: n7.wx,
                                        children: [
                                            (0, l.jsx)(tJ.A, { user: t, displayProfile: f, themeType: n5.d.POPOUT }),
                                            (0, l.jsx)(t$.A, {
                                                user: t,
                                                displayProfile: f,
                                                avatarSize: n6.T[n5.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : z,
                                            }),
                                            (0, l.jsx)(nn.A, {
                                                ref: k,
                                                user: t,
                                                themeType: n5.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ef.Ip, {
                                        ref: U,
                                        className: ew.rf,
                                        style: { pointerEvents: B ? "none" : void 0 },
                                        children: [
                                            (0, l.jsx)(t1.A, { userId: t.id }),
                                            (0, l.jsx)(t6.Ay, {
                                                className: ew.eF,
                                                user: t,
                                                displayName: nE.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : z,
                                                displayNameTrailing: (0, l.jsx)(nt, { user: t, isVisible: C }),
                                                pronouns: f?.pronouns,
                                                trailing: (0, l.jsx)(tX.A, {
                                                    displayProfile: f,
                                                    themeType: n5.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, l.jsx)(t0.A, { isPremiumUser: M, onInteraction: n }),
                                            (0, l.jsx)(nl.A, {
                                                userId: t.id,
                                                userBio: f?.bio,
                                                hidePersonalInformation: j,
                                                onClose: n,
                                            }),
                                            Z &&
                                                (0, l.jsx)(t3.A, {
                                                    user: t,
                                                    widgets: f?.widgets,
                                                    onOpenUserProfileModal: z,
                                                }),
                                            (0, l.jsx)(t2.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: z,
                                                onClose: n,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: ew.T_,
                                                children: [
                                                    $ &&
                                                        (0, l.jsx)(t5.A.Overlay, {
                                                            className: ew.g0,
                                                            children: (0, l.jsx)(ek, {
                                                                children: (0, l.jsx)(eV, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, l.jsx)(t5.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, l.jsxs)(ek, {
                                                            children: [
                                                                (0, l.jsx)(eL, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eO.intl.string(eO.t.s5vZlQ),
                                                                    icon: eg.PencilIcon,
                                                                    trailing:
                                                                        null != J
                                                                            ? (0, l.jsx)("div", {
                                                                                  className: ew.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, l.jsx)(eA.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (J ===
                                                                            c.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            ee(nz.i.TAKE_ACTION),
                                                                            q());
                                                                    },
                                                                    ref: D,
                                                                }),
                                                                (0, l.jsx)(eL, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, l.jsx)(n$, {}),
                                                                    sublabel: null != y && y,
                                                                    icon: () =>
                                                                        (0, l.jsx)(ev.nW, { status: T, size: 12 }),
                                                                    trailing:
                                                                        (N || T === th.clD.DND) &&
                                                                        (0, l.jsx)(ex.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: em.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, l.jsx)(eP, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ew.hQ,
                                                                                  "aria-label": eO.intl.string(
                                                                                      eO.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: S,
                                                                              });
                                                                          },
                                                                    onClick: em.Fr
                                                                        ? () => {
                                                                              (n(),
                                                                                  (0, x.openModalLazy)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, l.jsx)(
                                                                                                      eE.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eO.intl.string(
                                                                                                                  eO.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          l.jsx)(eC.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eO.intl.string(
                                                                                                                      eO
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
                                                                                                                  S,
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
                                                                    (0, l.jsx)(eL, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: e_.q,
                                                                        label: eO.intl.string(eO.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, eN.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, l.jsx)(tx, { onClose: n, popoutContainerRef: E }),
                                                                Q &&
                                                                    (0, l.jsx)(ng, {
                                                                        popoutContainerRef: E,
                                                                        scrollerRef: U,
                                                                        shouldScrollIntoView: X,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, l.jsx)(t5.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, l.jsxs)(ek, {
                                                            children: [
                                                                (0, l.jsx)(eL, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eT.r,
                                                                    label: eO.intl.string(eO.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nO.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, l.jsx)(eP, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eO.intl.string(eO.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: b,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t9.p5 &&
                                                                    I &&
                                                                    (0, l.jsx)(eL, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: ey.L,
                                                                        label: eO.intl.string(eO.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, t9.C)(t.id), n());
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    f?.profileEffect != null &&
                                        !V.current &&
                                        (0, l.jsx)(tE.A, { skuId: f.profileEffect.skuId, isHovering: _ }),
                                    null != F && (0, l.jsx)(ty.A, { frame: F, fadeIn: G }),
                                ],
                            }),
                            (0, l.jsx)(nK, { targetElementRef: D, onClose: n }),
                            (0, l.jsx)(tB, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n9 = n(201805),
    n4 = n(209932),
    le = n(655116),
    lt = n(438140),
    ln = n(549831),
    ll = n(342296),
    li = n(852712),
    la = n(389960),
    lr = n(173660),
    ls = n(616356),
    lo = n(734057),
    lu = n(629016),
    ld = n(186111),
    lc = n(999926),
    lm = n(763827),
    lh = n(967198),
    lp = n(485296),
    lf = n(486020),
    lg = n(625494),
    lA = n(536194),
    lv = n(19575),
    lx = n(994314),
    lE = n(485599),
    lC = n(116833);
function l_(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eO.intl.string(eO.t.uwDBSq),
                  body: eO.intl.formatToPlainString(eO.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eO.intl.string(eO.t["5GD53o"]), body: eO.intl.string(eO.t["2Rb7tE"]) };
    return (0, l.jsx)(nL.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: lC.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eO.intl.string(eO.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function lT(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: i } = e;
    return (0, l.jsx)(l_, {
        ...t,
        onPrimaryAction: () => {
            (i(nz.i.TAKE_ACTION), (0, eN.openBadgeDirectoryModal)());
        },
        onRequestClose: () => i(nz.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var ly = n(206248);
function lj(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: i, position: a, shouldShow: r = !0, children: s } = e,
        o = (0, eZ.sw)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            s,
            r && o
                ? (0, l.jsx)(ly.H, {
                      targetElementRef: t,
                      title: eO.intl.string(tf.default.Qn21R6),
                      body: eO.intl.string(tf.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: eO.intl.string(eO.t.RzWDqY),
                          onClick: function () {
                              (n(nz.i.TAKE_ACTION), i());
                          },
                      },
                      onRequestClose: function () {
                          n(nz.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var lN = n(379848),
    lI = n(626584),
    lS = n(757036),
    lb = n(591179),
    lR = n(531685),
    lM = n(259065),
    lO = n(26168),
    lw = n(78294);
let lP = new lI.A("DisplayNameStylesFlywheelCoachmark");
function lL(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: r } = (0, w.Ay)(),
        s = (0, i.useRef)(null),
        o = (0, d.bG)([lR.A], () => lR.A.isFocused()),
        u = (0, lS.L)(tD.PremiumTypes.TIER_2),
        c = (0, lb.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, i.useCallback)(() => {
            t(nz.i.TAKE_ACTION);
            let e = nI.default.getCurrentUser();
            c && null != e
                ? (0, tQ.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: r,
                      onModalOpen: () => {
                          (0, lM.L)({ analyticsLocations: r, stackingBehavior: "stack" });
                      },
                  })
                : (0, ez.openUserSettings)(eW.X.PROFILE_PANEL, { analyticsLocations: r }, () => {
                      (0, lM.L)({ analyticsLocations: r });
                  });
        }, [t, r, c]),
        h = (0, i.useCallback)(() => {
            t(nz.i.USER_DISMISS);
        }, [t]);
    (0, i.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(lP.error) : o || s.current?.pause();
    }, [o]);
    let p = u ? [eO.intl.string(lO.default.TyUdka)] : [eO.intl.string(lO.default.dluV0R)];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a,
            (0, l.jsx)(nL.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: lw.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eO.intl.string(lO.default.cYwrp8),
                body: p,
                actions: [{ text: eO.intl.string(eO.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var lk = n(45780),
    lD = n(696451),
    lU = n(71393),
    lF = n(685073),
    lG = n(73153);
let lV = { lastSeenInfos: {} },
    lH = lV;
class lB extends d.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        lH = e ?? lV;
    }
    getState() {
        return lH;
    }
    getGuildLastSeenInfo(e) {
        return lH.lastSeenInfos[e] ?? null;
    }
}
let lW = new lB(lG.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        lH.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        lH = lV;
    },
});
var lz = n(514661);
let lZ = new lI.A("GuildTagAvailableCoachmark");
function lK(e) {
    let t = (0, d.bG)([lU.A], () => lU.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            lG.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: i, onAdoptTag: a, onEditProfile: r } = (0, lz.A)(t?.id ?? null, () => n(nz.i.TAKE_ACTION));
    if (null == t || !(0, lF.q0)(t))
        return (lZ.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eO.intl.string(eO.t.jwEaiX), loading: i, onClick: a, variant: "primary" },
        { text: eO.intl.string(eO.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(nL.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lC.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eO.intl.formatToPlainString(eO.t["m/Tc3n"], { guildName: t.name }),
                body: eO.intl.string(eO.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nz.i.USER_DISMISS),
            }),
        ],
    });
}
function lq(e) {
    let t = (0, d.bG)([lU.A], () => lU.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: i, onAdoptTag: a, onEditProfile: r } = (0, lz.A)(t?.id ?? null, () => n(nz.i.TAKE_ACTION));
    if (null == t || !(0, lF.q0)(t))
        return (lZ.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eO.intl.string(eO.t.jwEaiX), loading: i, onClick: a, variant: "primary" },
        { text: eO.intl.string(eO.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(nL.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lC.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eO.intl.formatToPlainString(eO.t.VFqnyU, { guildName: t.name }),
                body: eO.intl.string(eO.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nz.i.USER_DISMISS),
            }),
        ],
    });
}
var lY = n(843010),
    lQ = n(764231),
    l$ = n(425713);
function lX(e) {
    let { groupName: t, targetElementRef: n } = e,
        i = tU(),
        a = (0, d.bG)([tR.Ay], () => tR.Ay.useReducedMotion),
        r = (0, tM.A)((e) => e.isOpen),
        s = (0, lY.G)();
    return a || null == i || r || s
        ? null
        : (0, l.jsx)(lN.zJ, {
              contentType: c.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, l.jsx)(lJ, {
                      recentlyLeveledTenureBadge: i,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === c.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function lJ(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: r } = e,
        s = tD.sp.indexOf(t),
        o = (0, l$.I)(tD.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, i.useCallback)(() => {
            (n(nz.i.TAKE_ACTION),
                tM.A.setState({ shouldRenderTenureLevelUp: !0 }),
                lg._.dispatch(th.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        d = (0, i.useCallback)(() => {
            n(nz.i.USER_DISMISS);
        }, [n]),
        c = tD.VD[t],
        m = eO.intl.formatToPlainString(eO.t.ewkaVR, {
            timeMilestone: (0, lQ.T)(c.id, c.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: eO.intl.string(eO.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, l.jsx)(nL.A, {
        targetElementRef: a,
        onRequestClose: d,
        shouldShow: r,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eO.intl.string(eO.t.VoDxsV),
        body: m,
        actions: h,
    });
}
var l0 = n(764014);
function l1(e) {
    let { targetElementRef: t } = e,
        n = (0, tM.A)((e) => e.isOpen),
        [i, a] = (0, tN.kn)(n ? [] : [c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: nz.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return i === c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, l.jsx)(nL.A, {
              targetElementRef: t,
              graphic: { type: "image", src: l0.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eO.intl.string(eO.t["Q+dH5r"]),
              body: eO.intl.string(eO.t.YKJw4W),
              onRequestClose: () => a(nz.i.USER_DISMISS),
              actions: [
                  {
                      text: eO.intl.string(eO.t.dcOuei),
                      onClick: function () {
                          (a(nz.i.TAKE_ACTION),
                              tM.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nh.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              lg._.dispatch(th.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function l2(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n9.c9)(),
        i = null != e.targetElementRef.current && t && n,
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = (0, lk.G$)(c.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? th.dJq),
                i = (0, d.bG)(
                    [lU.A, nI.default, lD.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = lU.A.getGuild(e);
                        if (void 0 === t || !(0, lF.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nI.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let l = lD.Ay.getMember(e, n.id);
                        return null != l && !l.isPending;
                    },
                    [e],
                );
            return (0, tN.ww)(i && n && !l ? [c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? th.eGj);
        })(e.guildId, { shouldShow: i }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = e?.primaryGuild,
                i = l?.identityGuildId ?? null,
                a = (0, d.bG)([lW], () => (null === i ? null : lW.getGuildLastSeenInfo(i))),
                r = (0, d.bG)([lU.A], () => lU.A.getGuild(i)?.profile?.tag),
                s = null != r && l?.identityGuildId === i && l?.tag === null,
                o = null != i && a?.tag === r,
                u = null !== i && s && !o;
            return (0, tN.Wl)(u && n ? c.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: i });
    return i
        ? a === c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, l.jsx)(lq, {
                  guildId: e.guildId,
                  onDismiss: r,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === c.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, l.jsx)(lK, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(lX, { groupName: nz.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, l.jsx)(l1, { targetElementRef: e.targetElementRef }),
                        (0, l.jsx)(lN.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: nz.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: i } = t;
                                switch (n) {
                                    case c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, l.jsx)(lL, {
                                            markAsDismissed: i,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case c.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, l.jsx)(lj, {
                                            markAsDismissed: i,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eY.p,
                                            children: e.children,
                                        });
                                    case c.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                e.children,
                                                (0, l.jsx)(lT, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: i,
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
var l3 = n(348858),
    l5 = n(615675),
    l6 = n(900797),
    l7 = n(847374),
    l8 = n(617354),
    l9 = n(829773),
    l4 = n(42473),
    ie = n(731854),
    it = n(516171),
    il = n(577755);
function ii(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: s,
            iconForeground: o,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: d,
            dismissTooltips: c,
        } = e,
        m = t || n,
        {
            Component: h,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, l3.I)(m ? "undeafen" : "deafen"),
        v = n ? l5.T : h,
        { name: x } = (0, ec.x5)(ie.oh.AUDIO_OUTPUT),
        E = (0, l8.A)(t, n, a),
        { analyticsLocations: C } = (0, w.Ay)(O.A.AUDIO_OUTPUT_BUTTON),
        _ = i.useRef(null);
    return (
        i.useEffect(() => () => p(), [m, p]),
        (0, l.jsx)(w.f5, {
            value: C,
            children: (0, l.jsx)(f.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        c(),
                        (0, l.jsx)(w.f5, {
                            value: C,
                            children: (0, l.jsx)(l9.A, {
                                onInteraction: (0, K.s)("AudioDeviceMenu", O.A.ACCOUNT),
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
                    let { onClick: i } = e,
                        { isShown: c } = t,
                        h = c ? l6.t : l7.a;
                    return (0, l.jsxs)("div", {
                        ref: _,
                        className: r()(it.Lh, { [it.v8]: m, [it.q6]: c }),
                        children: [
                            (0, l.jsx)(l4.A, {
                                "aria-checked": m,
                                "aria-label": eO.intl.string(eO.t.wjcRFX),
                                className: it.eT,
                                disabled: a,
                                icon: (0, l.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nC.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? il.o : void 0,
                                innerClassName: r()({ [il.T]: n }),
                                onClick: s,
                                onContextMenu: i,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, l.jsx)(l4.A, {
                                className: r()(it.UT, { [it.q6]: c }),
                                disabled: a,
                                icon: (0, l.jsx)(h, {
                                    className: it.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nC.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: d ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: d,
                                tooltipPositionKey: d
                                    ? eO.intl.formatToPlainString(eO.t["f+DDY/"], { outputDeviceName: x })
                                    : void 0,
                                tooltipShouldShow: !c,
                                tooltipText: d
                                    ? eO.intl.format(eO.t["f+DDY/"], { outputDeviceName: x })
                                    : eO.intl.string(eO.t.aA4Vce),
                                "aria-label": d
                                    ? eO.intl.formatToPlainString(eO.t["f+DDY/"], { outputDeviceName: x })
                                    : eO.intl.string(eO.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var ia = n(523875),
    ir = n(666654),
    is = n(993719);
let io = {};
class iu extends d.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return io[e] ?? !1;
    }
}
let id = new iu(lG.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        io[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        io[t] = !1;
    },
});
var ic = n(362823),
    im = n(980923),
    ih = n(137911),
    ip = n(222176),
    ig = n(973324);
function iA(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: s,
            awaitingRemote: o,
            iconForeground: u,
            onMouseEnter: c,
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
        _ = (0, d.bG)([lc.Ay], () => lc.Ay.getMode() === ie.TB.PUSH_TO_TALK),
        T = (0, d.bG)([lc.Ay], () => lc.Ay.getSettings().modeOptions.shortcut),
        y = (0, d.bG)([id], () => id.getIsTutorialActive(ic.v.MUTE_TUTORIAL)),
        j = (0, d.bG)([lm.A], () => null != lm.A.getChannelId()),
        { name: N } = (0, ec.x5)(ie.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, li.d)({ location: "MicrophoneButton" }),
        S = i.useRef(null),
        b = n || s || a,
        R = (0, ia.L)(b ? "unmute" : "mute"),
        { analyticsLocations: M } = (0, w.Ay)(O.A.AUDIO_INPUT_BUTTON),
        { Component: P, events: L, play: k } = R,
        D = a || s ? ir.O : P;
    i.useEffect(() => () => k(), [b, k]);
    let U = (0, im.A)(n, a, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eO.intl.string(eO.t["29gnR4"]), tooltipForceOpen: !0 }
        : x || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eO.intl.format(eO.t.c1qUOQ, { keybind: e7.dI(T).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let F = _ && j,
        G = b ? nC.A.colors.ICON_VOICE_MUTED : "currentColor",
        V = i.useCallback(() => {
            (h(), y && is.N(ic.v.MUTE_TUTORIAL));
        }, [h, y]);
    return (0, l.jsxs)(w.f5, {
        value: M,
        children: [
            (0, l.jsx)(f.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, l.jsx)(w.f5, {
                            value: M,
                            children: (0, l.jsx)(l9.A, {
                                onInteraction: (0, K.s)("AudioDeviceMenu", O.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: I.length > 0,
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
                    let { onClick: i } = e,
                        { isShown: a } = n,
                        s = a ? l6.t : l7.a;
                    return (0, l.jsxs)("div", {
                        ref: S,
                        className: r()(it.Lh, { [it.v8]: b, [it.q6]: a }),
                        children: [
                            (0, l.jsx)(l4.A, {
                                "aria-checked": b,
                                "aria-label": eO.intl.string(eO.t.w4m945),
                                className: it.eT,
                                disabled: o,
                                icon: (0, l.jsx)(D, { size: "custom", width: 20, height: 20, color: G, className: u }),
                                onClick: V,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    (c(), L.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), L.onMouseLeave());
                                },
                                plated: null != p,
                                redGlow: b,
                                role: "switch",
                                ...t,
                                children: F ? (0, l.jsx)("div", { className: r()(ip.U, { [ip.z]: C }) }) : null,
                            }),
                            (0, l.jsx)(l4.A, {
                                "aria-label": v
                                    ? eO.intl.formatToPlainString(eO.t["18wnuD"], { inputDeviceName: N })
                                    : eO.intl.string(eO.t.fRzCbB),
                                className: r()(it.UT, { [it.q6]: a }),
                                disabled: o,
                                icon: (0, l.jsx)(s, {
                                    className: it.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: G,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: c,
                                onMouseLeave: m,
                                plated: null != p,
                                redGlow: b,
                                tooltipType: v ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: v,
                                tooltipPositionKey: v
                                    ? eO.intl.formatToPlainString(eO.t["18wnuD"], { inputDeviceName: N })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: v
                                    ? eO.intl.format(eO.t["18wnuD"], { inputDeviceName: N })
                                    : eO.intl.string(eO.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, l.jsx)(nL.A, {
                targetElementRef: S,
                shouldShow: y,
                graphic: { type: "image", src: ig.A },
                onRequestClose: () => {
                    is.N(ic.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eO.intl.string(ih.default.VG4zAf),
                body: eO.intl.string(ih.default["8VIRzR"]),
            }),
        ],
    });
}
var iv = n(935399),
    ix = n(505312),
    iE = n(848847),
    iC = n(975807),
    i_ = n(425565),
    iT = n(48498);
function iy(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = i.useMemo(
            () => [
                {
                    text: eO.intl.string(iT.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, iC.A)(i_.C), t(nz.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        r = i.useCallback(() => {
            t(nz.i.USER_DISMISS);
        }, [t]);
    return (0, l.jsx)(nL.A, {
        targetElementRef: n,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/147b33df1db170b53e140d7ad45552731aa0b9b16b7a7358cb9916634167ee02.png",
            aspectRatio: "16/9",
        },
        title: eO.intl.string(iT.default.tmst3F),
        body: eO.intl.string(iT.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: a,
        onRequestClose: r,
    });
}
function ij(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: i } = (0, w.Ay)(O.A.HOLIDAY_COACHMARK);
    return (0, l.jsx)(nL.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: eO.intl.string(eO.t.Mjs8KR),
        body: eO.intl.string(eO.t.U0INks),
        actions: [
            {
                text: eO.intl.string(eO.t.NENZhS),
                onClick: () => {
                    ((0, ez.openUserSettings)(eW.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: i }),
                        t(nz.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(nz.i.USER_DISMISS),
    });
}
var iN = n(88001),
    iI = n(222065),
    iS = n(438705);
function ib(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        r = i.useCallback(() => {
            (a(), (0, ez.openUserSettings)(eW.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, l.jsx)(nL.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: iS },
        shouldShow: n,
        title: eO.intl.format(iI.default.bx8sR9, { premiumGroupProductName: (0, iN.DP)() }),
        body: eO.intl.format(iI.default.Pw4OFZ, { premiumGroupProductName: (0, iN.DP)() }),
        onRequestClose: a,
        actions: [{ text: eO.intl.string(iI.default.DD26QR), onClick: r }],
    });
}
var iR = n(873298),
    iM = n(840387);
function iO(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, iM.Z)(),
        r = ni.KP.useSetting(),
        s = a && r !== iR.KP.FRIENDS_AND_ALL_GUILDS,
        o = i.useCallback(() => {
            (t(nz.i.TAKE_ACTION), (0, ez.openUserSettings)(eW.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = i.useCallback(() => {
            t(nz.i.USER_DISMISS);
        }, [t]),
        d = s
            ? r === iR.KP.FRIENDS_ONLY
                ? eO.intl.string(eO.t["/hogEy"])
                : eO.intl.string(eO.t["6hEfm1"])
            : eO.intl.string(eO.t.bnNxW1);
    return (0, l.jsx)(nL.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: u,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/6127c744cb2822ba2b138271130d9493e2579c126af2ee58921b6f988c6a46d6.svg",
        },
        title: eO.intl.string(eO.t.Ve4nS1),
        body: d,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eO.intl.string(eO.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var iw = n(415443);
function iP(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: r,
            onContextMenu: s,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: d,
        } = e,
        m = i.useRef(null),
        [h, p] = i.useState(!1);
    (0, iv.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            lg._.subscribe(th.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                lg._.unsubscribe(th.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = i.useCallback(() => {
            (p(!1), r());
        }, [r]),
        g = eu.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, iw.A)("1793335166113", !0);
        t =
            null != e
                ? eO.intl.formatToPlainString(eO.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : eO.intl.formatToPlainString(eO.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = eO.intl.string(eO.t.cduTBL);
    let A = e0.SettingsIcon,
        v = (0, ix.w)();
    return (
        (A = null != a ? iE.H : v.Component),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(l4.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: s,
                    "aria-label": eO.intl.string(eO.t.cduTBL),
                    icon: (0, l.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...v.events,
                    plated: null != d,
                }),
                (0, l.jsx)(ib, { targetElementRef: m, shouldShow: h, onDismiss: () => p(!1) }),
                (0, l.jsx)(lN.Ay, {
                    contentTypes: o,
                    groupName: nz.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === c.M.TINY_BRONCO && null != lt.PL
                            ? (0, l.jsx)(i.Suspense, {
                                  fallback: null,
                                  children: (0, l.jsx)(lt.PL, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === c.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, l.jsx)(iO, { markAsDismissed: n, targetElementRef: m })
                              : t === c.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, l.jsx)(iy, { markAsDismissed: n, targetElementRef: m })
                                : null != g && t === g
                                  ? (0, l.jsx)(ij, { markAsDismissed: n, targetElementRef: m })
                                  : null;
                    },
                }),
            ],
        })
    );
}
var iL = n(358285);
let ik = lv.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
    iD = 2.5 * k.A.Millis.SECOND,
    iU = 2 * k.A.Millis.MINUTE,
    iF = 5 * k.A.Millis.SECOND;
function iG(e) {
    let {
            ref: t,
            speaking: n,
            playingSoundboard: a,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: u,
            status: d,
            handleClick: c,
            handleMouseLeave: m,
            renderNameTag: h,
            nameplate: A,
            avatarDecoration: v,
            "data-jump-section": x,
        } = e,
        E = i.useRef(null),
        _ = t ?? E,
        T = (0, lf.F_)({ avatarDecoration: v, size: (0, Y.Te)(p._3.SIZE_32) }),
        j = (0, et.A)(),
        {
            updateOpenPopoutRef: N,
            highlightBadge: I,
            setHighlightBadge: S,
        } = (function () {
            let e = i.useRef(null),
                t = i.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, l] = i.useState(),
                [a, r] = i.useState(!1);
            return (
                (0, y.A)(() => r(!0), 750),
                i.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && l(n), e.current?.());
                    }
                    return (
                        lg._.subscribe(th.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            lg._.unsubscribe(th.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: l }
            );
        })(),
        b = (0, $.K)(A);
    return null == u
        ? null
        : (0, l.jsx)(C.A, {
              object: th.ZSU.AVATAR,
              children: (0, l.jsx)(ll.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, ln.A)(u.id, u.getAvatarURL(void 0, ll.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, l.jsx)(n8, {
                          currentUser: u,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: i,
                          className: iL.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: f.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (m(), S(void 0));
                  },
                  children: (e) => {
                      N(e);
                      let { onMouseEnter: t, onMouseDown: i, ...m } = e;
                      return (0, l.jsxs)("div", {
                          ref: _,
                          style: b,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              (e.onClick?.(t), c?.(t));
                          },
                          className: r()(iL.Q9, { [iL.ZQ]: null != A }),
                          children: [
                              (0, l.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": eO.intl.string(eO.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: iL.$n,
                                  "data-jump-section": x,
                              }),
                              (0, l.jsx)(ik, {
                                  size: p._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: o ? th.clD.STREAMING : d,
                                  voiceStatus: (0, p.n$)(n, a),
                                  voiceDb: s,
                                  className: iL.my,
                                  "aria-hidden": !0,
                              }),
                              (0, l.jsx)("div", { className: iL.oM, children: h(j) }),
                          ],
                      });
                  },
              }),
          });
}
class iV extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    lastSpeakingWhileMutedNotificationTime = void 0;
    state = { hovered: !1, shouldShowNametagTooltip: !1, shouldShowSpeakingWhileMutedTooltip: !1, hoveringOnMute: !1 };
    containerRef = i.createRef();
    avatarWithPopoutRef = i.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: l, occluded: i } = this.props;
        (i !== n && this.handleOccludedChanged(), l !== t && this.handleSpeakingWhileMutedChanged());
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        ((0, z.A)(e, t, th.JJy.ACCOUNT_PANEL), (0, Z.X)(O.A.ACCOUNT, Z.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, W.A)(e, th.JJy.ACCOUNT_PANEL), (0, Z.X)(O.A.ACCOUNT, Z.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            lm.A.isConnected() ? (0, ez.openUserSettings)(eW.X.VOICE_AND_VIDEO_PANEL) : (0, ez.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("839460"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("412117"),
                    n.e("263406"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("410526"),
                    n.e("202985"),
                    n.e("603619"),
                    n.e("175927"),
                    n.e("470126"),
                    n.e("149697"),
                    n.e("128804"),
                    n.e("60882"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("735042"),
                    n.e("311541"),
                    n.e("795854"),
                    n.e("870088"),
                    n.e("300641"),
                    n.e("571163"),
                    n.e("586662"),
                    n.e("831377"),
                    n.e("709976"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("279774"),
                    n.e("763945"),
                    n.e("261204"),
                    n.e("686731"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("590088"),
                    n.e("807003"),
                    n.e("46083"),
                    n.e("152133"),
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
                    n.e("206189"),
                    n.e("804439"),
                    n.e("84978"),
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
                    n.e("440727"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("547510"),
                    n.e("966366"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("411938"),
                    n.e("653383"),
                    n.e("122026"),
                    n.e("31159"),
                    n.e("952068"),
                    n.e("768289"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("328276"),
                    n.e("592000"),
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
                    n.e("670870"),
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
                    n.e("274461"),
                    n.e("830560"),
                    n.e("526575"),
                    n.e("267387"),
                    n.e("816348"),
                    n.e("165291"),
                    n.e("109383"),
                    n.e("818291"),
                    n.e("243794"),
                    n.e("519435"),
                    n.e("10985"),
                    n.e("171206"),
                    n.e("975366"),
                    n.e("828178"),
                    n.e("45036"),
                    n.e("974119"),
                    n.e("434683"),
                    n.e("920955"),
                    n.e("505928"),
                    n.e("752657"),
                    n.e("747973"),
                    n.e("314001"),
                    n.e("885251"),
                    n.e("857871"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("487834"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("770925"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("102247"),
                    n.e("689521"),
                    n.e("237403"),
                    n.e("10886"),
                    n.e("84993"),
                    n.e("343298"),
                    n.e("592268"),
                    n.e("374962"),
                    n.e("553627"),
                    n.e("59599"),
                    n.e("46238"),
                    n.e("736919"),
                    n.e("440636"),
                    n.e("568960"),
                    n.e("459257"),
                    n.e("790484"),
                    n.e("339715"),
                    n.e("985301"),
                    n.e("981059"),
                    n.e("631323"),
                    n.e("464452"),
                    n.e("250836"),
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
                    n.e("998670"),
                    n.e("15649"),
                    n.e("38956"),
                    n.e("302458"),
                    n.e("556436"),
                    n.e("256172"),
                    n.e("102137"),
                    n.e("375971"),
                    n.e("655282"),
                    n.e("792818"),
                    n.e("861161"),
                    n.e("579958"),
                    n.e("27612"),
                    n.e("453280"),
                    n.e("657266"),
                    n.e("622074"),
                    n.e("587308"),
                    n.e("903758"),
                    n.e("768071"),
                    n.e("96922"),
                    n.e("292699"),
                    n.e("373738"),
                    n.e("531521"),
                    n.e("786830"),
                    n.e("446860"),
                    n.e("28636"),
                    n.e("24312"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("301850"),
                    n.e("926787"),
                    n.e("870423"),
                    n.e("727139"),
                    n.e("993562"),
                    n.e("464838"),
                    n.e("274698"),
                    n.e("40074"),
                    n.e("733814"),
                    n.e("726399"),
                    n.e("377476"),
                    n.e("403032"),
                    n.e("746309"),
                    n.e("883221"),
                    n.e("97585"),
                    n.e("205406"),
                    n.e("727797"),
                    n.e("368991"),
                    n.e("688508"),
                    n.e("422037"),
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
                    n.e("43853"),
                    n.e("102170"),
                    n.e("401071"),
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
                    n.e("135144"),
                    n.e("365166"),
                    n.e("716860"),
                    n.e("888213"),
                    n.e("150183"),
                    n.e("394692"),
                    n.e("272788"),
                    n.e("704570"),
                    n.e("333316"),
                    n.e("45374"),
                    n.e("10058"),
                    n.e("859516"),
                    n.e("30482"),
                    n.e("641794"),
                    n.e("493118"),
                    n.e("49571"),
                    n.e("434352"),
                    n.e("599135"),
                    n.e("942186"),
                    n.e("242967"),
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
                    n.e("817298"),
                    n.e("955410"),
                    n.e("868052"),
                    n.e("106980"),
                    n.e("974969"),
                    n.e("310933"),
                    n.e("257073"),
                    n.e("179028"),
                    n.e("29489"),
                    n.e("269714"),
                    n.e("445380"),
                    n.e("212037"),
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
                    n.e("915213"),
                    n.e("530166"),
                    n.e("594045"),
                    n.e("910167"),
                    n.e("70379"),
                    n.e("417333"),
                    n.e("249681"),
                    n.e("70484"),
                    n.e("127962"),
                    n.e("503376"),
                    n.e("494822"),
                    n.e("926132"),
                    n.e("76428"),
                    n.e("834552"),
                    n.e("993103"),
                    n.e("863232"),
                    n.e("708757"),
                    n.e("517888"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("907167"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("710284"),
                    n.e("861060"),
                    n.e("364827"),
                    n.e("77333"),
                    n.e("217229"),
                    n.e("477175"),
                    n.e("960235"),
                    n.e("585968"),
                    n.e("402040"),
                    n.e("198329"),
                    n.e("678157"),
                    n.e("942374"),
                    n.e("147134"),
                    n.e("331988"),
                    n.e("10866"),
                    n.e("236850"),
                    n.e("40291"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("190779"),
                    n.e("373122"),
                    n.e("715881"),
                    n.e("221856"),
                    n.e("186212"),
                    n.e("755936"),
                    n.e("147662"),
                    n.e("46322"),
                    n.e("899843"),
                    n.e("904448"),
                    n.e("833703"),
                    n.e("544571"),
                    n.e("55252"),
                    n.e("692990"),
                    n.e("362931"),
                    n.e("393336"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("532039"),
                    n.e("719466"),
                    n.e("234503"),
                    n.e("413846"),
                    n.e("576909"),
                    n.e("27355"),
                    n.e("953665"),
                    n.e("406174"),
                    n.e("481647"),
                    n.e("776273"),
                    n.e("776602"),
                    n.e("391763"),
                    n.e("305692"),
                    n.e("704434"),
                    n.e("140402"),
                    n.e("28102"),
                    n.e("393766"),
                    n.e("21921"),
                    n.e("497516"),
                    n.e("811310"),
                    n.e("844780"),
                    n.e("571210"),
                    n.e("676418"),
                    n.e("572963"),
                    n.e("70833"),
                    n.e("897073"),
                    n.e("770291"),
                    n.e("166495"),
                    n.e("307575"),
                    n.e("88342"),
                    n.e("323624"),
                    n.e("187110"),
                    n.e("854461"),
                    n.e("942724"),
                    n.e("139970"),
                    n.e("940258"),
                    n.e("858164"),
                    n.e("521930"),
                    n.e("308555"),
                    n.e("292583"),
                    n.e("153251"),
                    n.e("427032"),
                    n.e("173764"),
                    n.e("554241"),
                    n.e("311802"),
                    n.e("724303"),
                    n.e("698965"),
                    n.e("25949"),
                    n.e("53102"),
                    n.e("586127"),
                    n.e("836863"),
                    n.e("819316"),
                    n.e("132737"),
                    n.e("146070"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("88599"),
                    n.e("179049"),
                    n.e("854622"),
                    n.e("95340"),
                    n.e("362422"),
                    n.e("807936"),
                    n.e("590365"),
                    n.e("989088"),
                    n.e("37977"),
                    n.e("136149"),
                    n.e("333097"),
                    n.e("470068"),
                    n.e("354044"),
                    n.e("817989"),
                    n.e("437065"),
                    n.e("720590"),
                    n.e("709640"),
                    n.e("233197"),
                    n.e("235313"),
                    n.e("147626"),
                    n.e("613867"),
                    n.e("952548"),
                    n.e("917298"),
                    n.e("203589"),
                    n.e("636373"),
                    n.e("294857"),
                    n.e("726033"),
                    n.e("480830"),
                    n.e("64504"),
                    n.e("179745"),
                    n.e("655708"),
                    n.e("676156"),
                    n.e("553984"),
                    n.e("335395"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("154469"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("212055"),
                    n.e("14035"),
                    n.e("632756"),
                    n.e("564850"),
                    n.e("504370"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("902564"),
                    n.e("428967"),
                    n.e("903839"),
                    n.e("525013"),
                    n.e("953858"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("731503"),
                    n.e("803332"),
                    n.e("859546"),
                    n.e("432805"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("741678"),
                    n.e("608032"),
                    n.e("852617"),
                    n.e("477970"),
                    n.e("102698"),
                    n.e("204744"),
                    n.e("737021"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("211185"),
                    n.e("41332"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("985794"),
                    n.e("732194"),
                    n.e("767837"),
                    n.e("436564"),
                    n.e("473384"),
                    n.e("432209"),
                    n.e("893349"),
                    n.e("368062"),
                    n.e("859991"),
                    n.e("603998"),
                    n.e("386317"),
                    n.e("709371"),
                    n.e("599719"),
                    n.e("136204"),
                    n.e("252229"),
                    n.e("868214"),
                    n.e("523276"),
                    n.e("77473"),
                    n.e("939171"),
                    n.e("987478"),
                    n.e("550033"),
                    n.e("661814"),
                    n.e("96680"),
                    n.e("916758"),
                    n.e("812042"),
                    n.e("25279"),
                    n.e("729963"),
                    n.e("830938"),
                    n.e("691671"),
                    n.e("612287"),
                    n.e("588070"),
                    n.e("538513"),
                    n.e("763400"),
                    n.e("793438"),
                    n.e("919726"),
                    n.e("122990"),
                    n.e("276177"),
                    n.e("692513"),
                    n.e("305557"),
                    n.e("830228"),
                    n.e("36227"),
                    n.e("50097"),
                    n.e("104202"),
                    n.e("850488"),
                    n.e("484189"),
                    n.e("229666"),
                    n.e("848625"),
                    n.e("92295"),
                    n.e("589916"),
                    n.e("460773"),
                    n.e("883952"),
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
                    n.e("896804"),
                    n.e("708536"),
                    n.e("120379"),
                    n.e("903663"),
                    n.e("411353"),
                    n.e("508829"),
                    n.e("59509"),
                    n.e("741111"),
                    n.e("275133"),
                    n.e("295998"),
                    n.e("819193"),
                    n.e("437961"),
                    n.e("480945"),
                    n.e("201243"),
                    n.e("215920"),
                    n.e("951811"),
                    n.e("36877"),
                    n.e("228850"),
                    n.e("78247"),
                    n.e("908081"),
                    n.e("693992"),
                    n.e("356675"),
                    n.e("527687"),
                    n.e("904774"),
                    n.e("824126"),
                    n.e("78601"),
                    n.e("829260"),
                    n.e("860433"),
                    n.e("342234"),
                    n.e("81189"),
                    n.e("66580"),
                    n.e("248836"),
                    n.e("200203"),
                    n.e("489523"),
                    n.e("249629"),
                    n.e("726294"),
                    n.e("780407"),
                    n.e("574678"),
                    n.e("127659"),
                    n.e("956701"),
                    n.e("781949"),
                    n.e("9205"),
                    n.e("504098"),
                    n.e("492383"),
                    n.e("920593"),
                    n.e("496268"),
                    n.e("98972"),
                    n.e("431649"),
                    n.e("604172"),
                    n.e("276814"),
                    n.e("568881"),
                    n.e("341701"),
                    n.e("248748"),
                    n.e("283230"),
                    n.e("42834"),
                    n.e("225612"),
                    n.e("468083"),
                    n.e("548730"),
                    n.e("871467"),
                    n.e("350949"),
                    n.e("5357"),
                    n.e("623927"),
                    n.e("51892"),
                    n.e("763096"),
                    n.e("841838"),
                    n.e("472789"),
                    n.e("137937"),
                    n.e("538397"),
                    n.e("760989"),
                    n.e("827335"),
                    n.e("369501"),
                    n.e("303710"),
                    n.e("949013"),
                    n.e("860003"),
                    n.e("396325"),
                    n.e("808979"),
                    n.e("749736"),
                    n.e("79216"),
                    n.e("603757"),
                    n.e("645830"),
                    n.e("512162"),
                    n.e("733771"),
                    n.e("866008"),
                    n.e("531158"),
                    n.e("946039"),
                    n.e("995602"),
                    n.e("199139"),
                    n.e("897975"),
                    n.e("636516"),
                    n.e("896480"),
                    n.e("614256"),
                    n.e("966598"),
                    n.e("146149"),
                    n.e("360536"),
                    n.e("986300"),
                    n.e("479006"),
                    n.e("138733"),
                    n.e("228011"),
                    n.e("759174"),
                    n.e("815852"),
                    n.e("576415"),
                    n.e("983947"),
                    n.e("944727"),
                    n.e("705871"),
                    n.e("527462"),
                    n.e("501888"),
                    n.e("186546"),
                    n.e("960816"),
                    n.e("168031"),
                    n.e("271203"),
                    n.e("175284"),
                    n.e("932011"),
                    n.e("384820"),
                    n.e("154168"),
                    n.e("506627"),
                    n.e("443256"),
                    n.e("340346"),
                    n.e("812411"),
                    n.e("888205"),
                    n.e("775951"),
                    n.e("373566"),
                    n.e("858531"),
                    n.e("815057"),
                    n.e("702846"),
                    n.e("991531"),
                    n.e("462318"),
                    n.e("523638"),
                    n.e("819305"),
                    n.e("864926"),
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
                    n.e("798384"),
                    n.e("787462"),
                    n.e("986629"),
                    n.e("943534"),
                    n.e("124564"),
                    n.e("666601"),
                    n.e("940727"),
                    n.e("974928"),
                    n.e("313052"),
                    n.e("639721"),
                    n.e("419631"),
                    n.e("82384"),
                    n.e("903820"),
                    n.e("876892"),
                    n.e("971508"),
                    n.e("816799"),
                    n.e("852694"),
                    n.e("800715"),
                    n.e("352351"),
                    n.e("688669"),
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
                    n.e("87641"),
                    n.e("874913"),
                    n.e("435476"),
                    n.e("279757"),
                    n.e("656485"),
                    n.e("141426"),
                    n.e("214451"),
                    n.e("993720"),
                    n.e("654658"),
                    n.e("550006"),
                    n.e("233049"),
                    n.e("569443"),
                    n.e("439518"),
                    n.e("543456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, l.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, K.s)("UserSettingsMenu", O.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, K.s)("AudioDeviceMenu", O.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, li.d)({ location: "Account" });
                    return (0, l.jsx)(w.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
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
                    (0, l.jsx)(w.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
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
                speakingWhileMuted: l,
                occluded: i,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            s =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > iU;
        l
            ? r ||
              !e ||
              t ||
              n ||
              i ||
              !s ||
              null != a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(iD, () =>
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
                currentUser: i,
                status: a,
                userTag: r,
                voiceChannel: s,
            } = this.props;
        if (null == i) return null;
        if ((0, j.A)({ activities: t, status: a, applicationStream: n, voiceChannel: s }))
            return (0, l.jsxs)(M.A, {
                hoverText: r,
                forceHover: e,
                children: [
                    (0, l.jsx)(A.A, { children: t4.Ay.humanizeStatus(a) }),
                    (0, l.jsx)(N.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: iL.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === u.$.CUSTOM_STATUS;
        });
        return null != o
            ? (0, l.jsxs)(M.A, {
                  hoverText: r,
                  forceHover: e,
                  children: [
                      (0, l.jsx)(A.A, { children: t4.Ay.humanizeStatus(a) }),
                      (0, l.jsx)(ee.A, { activity: o, emojiClassName: iL.Zg, className: iL.WO }),
                  ],
              })
            : null != a && a !== th.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, l.jsx)(M.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, l.jsx)(R, { text: t4.Ay.humanizeStatus(a) }),
                })
              : r;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", {
                          className: iL.eW,
                          children: (0, l.jsx)(lE.A, {
                              className: r()({ [iL.e8]: null != e }),
                              children: (0, l.jsx)(el.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? en.G.ANIMATED : en.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, l.jsx)("div", {
                          className: iL.XP,
                          children: (0, l.jsx)(lx.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let {
            badgeDirectoryNuxPopoverVariant: t,
            currentUser: n,
            dismissibleContents: i,
            isOrbchievementsEnabled: a,
        } = this.props;
        return null == n
            ? null
            : (0, l.jsx)(l2, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: i.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, l.jsx)(iG, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: i, isListenAlongVisible: a } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, l.jsx)(v.sk, {
                  children: (e) =>
                      (0, l.jsxs)("div", {
                          ref: this.containerRef,
                          className: r()(iL.kL, { [iL.UG]: null != n, [iL.bc]: !i, [iL.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, l.jsx)(J.A, { nameplate: t, hovered: s, placement: X.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, l.jsx)(iH, {
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
function iH(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: a,
            serverMute: r,
            serverDeaf: s,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: u,
            webBuildOverride: d,
            handleMouseEnterMute: c,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: v,
            dismissibleContents: x,
            occluded: E,
            nameplate: C,
            accountContainerRef: _,
            deviceChangedTooltipType: T,
            dismissTooltips: y,
            speaking: j,
        } = e,
        N = (0, $.K)(C);
    function I() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, l.jsx)(iP, {
            webBuildOverride: d,
            onClick: A,
            onContextMenu: v,
            dismissibleContents: [...x.settings, ...e],
            iconForeground: null != C ? iL.t4 : void 0,
            nameplate: C,
        });
    }
    return (0, l.jsxs)("div", {
        className: iL.Uo,
        style: N,
        children: [
            (0, l.jsx)(iA, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: c,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: f,
                iconForeground: null != C ? iL.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === T,
                dismissTooltips: y,
                speaking: j,
            }),
            (0, l.jsx)(ii, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != C ? iL.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: y,
            }),
            null != lt.Lf
                ? (0, l.jsx)(i.Suspense, { fallback: I(), children: (0, l.jsx)(lt.Lf, { occluded: E, children: I }) })
                : I(),
        ],
    });
}
function iB(e) {
    let t = (0, d.bG)([lm.A], () => null != lm.A.getChannelId()),
        n = (0, ec.Py)(e),
        l = i.useRef(new m.Ep()),
        [a, r] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (r(!0),
            l.current.start(iF, () => {
                r(!1);
            }));
    }, [t, n]);
    let s = i.useCallback(() => {
        (r(!1), l.current.stop());
    }, []);
    return (
        (0, T.l0)(() => {
            l.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: s }
    );
}
function iW() {
    let e,
        t,
        n,
        a,
        r = (0, d.bG)([nI.default], () => nI.default.getCurrentUser()),
        s = (0, d.bG)([nB.default], () => nB.default.getId()),
        {
            activities: m,
            streaming: h,
            status: p,
        } = (0, d.cf)([nq.A], () => {
            let e = nq.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: nq.A.getStatus(),
            };
        }),
        f = (0, d.bG)([ls.A], () => ls.A.getAnyStreamForUser(s)),
        g = (0, _.A)({ userId: s }),
        A = (0, d.bG)([n4.A], () => n4.A.isUserPlayingSounds(s)),
        v = (0, d.bG)([lp.A], () => lp.A.getVoiceVolume(s)),
        E = t4.Ay.useUserTag(r, { decoration: "never" }),
        C = (0, d.bG)([lm.A, lo.A], () => {
            let e = lm.A.getChannelId();
            return null != e ? lo.A.getChannel(e) : null;
        }),
        { mute: T, selfMute: y, suppress: j } = (0, lr.A)(C),
        { selfDeaf: N, deaf: I } = (0, la.A)(C),
        S = (0, d.bG)([V.A], () => ((0, H.kK)() ? V.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        b = (0, d.bG)([lc.Ay], () => lc.Ay.getSpeakingWhileMuted()),
        R = (0, d.bG)([B.A], () => B.A.isFullscreenInContext()),
        M = (0, d.bG)([ld.A], () => ld.A.hasLayers()),
        W = (0, x.useModalsStore)(x.hasAnyModalOpenSelector) || M || lA.P.isDisallowPopupsSet() || R,
        z = (0, d.bG)([ei.default], () => null != ei.default.getAwaitingRemoteSessionInfo()),
        Z = (0, d.bG)([lh.A], () => lh.A.getGuildId()),
        K = r?.avatarDecoration,
        Y = (0, q.A)(K),
        $ = t4.Ay.useName(r) ?? "",
        { analyticsLocations: X } = (0, w.Ay)(O.A.ACCOUNT),
        J = (0, Q.r)({ user: r, guildId: void 0 }),
        { isQuestBarEmpty: ee } = (0, n9.c9)(),
        et = (0, d.bG)([le.A, nI.default, lu.A], () => {
            let e,
                t = le.A.getSyncingWith(),
                n = le.A.getActivity(),
                l = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (l = o()(Array.from(lu.A.getParty(e) ?? []))
                        .map((e) => nI.default.getUser(e))
                        .filter(nx.Vq)
                        .value()),
                l.length > 1
            );
        }),
        en = { avatar: [], settings: [] },
        el = (0, na.H)({ location: "Account" }) && !W,
        ec = ed.A.useIsEligible(),
        em = eu.A.coachmarkDismissibleContent,
        eh = (0, P.d)({ location: "AccountCoachmark" }),
        ep =
            ((e = (0, d.bG)([er.A], () => er.A.hasLoaded(eo.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, ea.HX)(c.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (a = (0, es.y)({ location: "AccountCoachmark", countGiftCardWallet: !0, canFetchPaymentSources: n })),
            n && a),
        ef = (function (e) {
            let { currentUserId: t, enabled: n, fetchCatalog: l = !0 } = e,
                a = n ? t : null,
                r = (0, d.bG)([F.Ay], () => null != a && F.Ay.hasCatalogFor(a), [a]),
                s = (0, d.bG)([F.Ay], () => null != a && F.Ay.hasCatalogFetchErrorFor(a), [a]),
                [o] = i.useState(() => new L.A(5 * k.A.Millis.SECOND, 5 * k.A.Millis.MINUTE)),
                u = i.useRef(null);
            i.useEffect(() => {
                if (null != a && l) {
                    if (r) return void o.succeed();
                    if (s) {
                        if (o.fails >= 3) return;
                        return (o.fail(() => (0, D.RS)(a, { isRetry: !0 })), () => o.cancel());
                    }
                    u.current !== a && ((u.current = a), (0, D.RS)(a));
                }
            }, [a, l, r, s, o]);
            let c = (0, d.bG)(
                    [F.Ay],
                    () => (null != a ? F.Ay.getBadges(a).filter((e) => G.sC.has(e.badge_id) && e.owned).length : 0),
                    [a],
                ),
                m = (0, d.yK)([F.Ay], () => (null != a ? (0, U.z)(F.Ay.getBadges(a)) : []), [a]),
                h = i.useMemo(
                    () =>
                        null != a && r
                            ? c > 0
                                ? { variant: "progress", newBadgeCount: c, badgeIconUrls: m }
                                : { variant: "no-progress" }
                            : null,
                    [a, r, c, m],
                ),
                p = l && o.fails < 3;
            return { variantProps: h, isPending: null != a && !r && (!s || p) };
        })({ currentUserId: r?.id, enabled: eh }).variantProps;
    W ||
        (en.avatar.push(c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != ef && en.avatar.push(c.M.BADGE_DIRECTORY_NUX_POPOVER),
        ec && null != em && en.settings.push(em),
        ep && en.settings.push(c.M.GIFT_CARDS_MARKETING_COACHMARK),
        en.settings.push(c.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: eg, dismissTooltip: eA } = iB(ie.oh.AUDIO_INPUT),
        { shouldShowTooltip: ev, dismissTooltip: ex } = iB(ie.oh.AUDIO_OUTPUT),
        eE = i.useMemo(() => (eg ? "input" : ev ? "output" : void 0), [eg, ev]),
        eC = i.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        eA();
                        break;
                    case "output":
                        ex();
                }
            },
            [eA, ex],
        );
    return (0, l.jsx)(w.f5, {
        value: X,
        children: (0, l.jsx)(iV, {
            currentUser: r,
            username: $,
            activities: m,
            applicationStream: f,
            voiceChannel: C,
            dismissibleContents: en,
            badgeDirectoryNuxPopoverVariant: ef,
            isOrbchievementsEnabled: el,
            userTag: E,
            occluded: W,
            selfDeaf: N,
            selfMute: y,
            serverDeaf: I,
            serverMute: T,
            speaking: g,
            playingSoundboard: A,
            voiceDb: v,
            speakingWhileMuted: b,
            status: p,
            streaming: h,
            suppress: j,
            webBuildOverride: S,
            awaitingRemote: z,
            nameplate: J,
            selectedGuildId: Z,
            avatarDecoration: Y,
            isQuestBarEmpty: ee,
            isListenAlongVisible: et,
            deviceChangedTooltipType: eE,
            onDismissDeviceChangedTooltip: () => eC(eE),
        }),
    });
}
