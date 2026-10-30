(n.d(t, { g: () => iG, A: () => iB }), n(321073));
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(435558),
    o = n.n(s),
    u = n(17928),
    d = n(554146),
    c = n(451988),
    m = n(97808),
    h = n(778712),
    p = n(265872),
    f = n(939249),
    g = n(140735),
    A = n(312138);
if (221552 == n.j) var v = n(192308);
var x = n(442433),
    E = n(820284),
    C = n(717558),
    _ = n(964486),
    T = n(220839),
    y = n(397244),
    j = n(394871),
    N = n(941143),
    I = n(866323),
    S = n(120842);
function b(e) {
    let { text: t } = e,
        n = (0, I.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, l.jsx)("div", {
        className: S.k,
        children: n((e, t) => (0, l.jsx)(N.animated.div, { className: S.H, style: e, children: t })),
    });
}
var R = n(29160),
    M = n(793574),
    O = n(688810),
    w = n(643056),
    P = n(158390),
    L = n(927813),
    k = n(682618),
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
    Q = n(351952),
    $ = n(88686),
    X = n(214881),
    J = n(302223),
    ee = n(609425),
    et = n(922301),
    en = n(660184),
    el = n(643501),
    ei = n(826673),
    ea = n(617617),
    er = n(417792),
    es = n(355097),
    eo = n(771527),
    eu = n(552122),
    ed = n(74848),
    ec = n(607399),
    em = n(305866),
    eh = n(707554),
    ep = n(364522),
    ef = n(22231),
    eg = n(62010),
    eA = n(935154),
    ev = n(780338);
if (221552 != n.j) var v = n(192308);
var ex = n(224640),
    eE = n(980707),
    eC = n(877784),
    e_ = n(26137),
    eT = n(473935),
    ey = n(765671),
    ej = n(470739),
    eN = n(142617),
    eI = n(366056),
    eS = n(320448),
    eb = n(834730),
    eR = n(993401),
    eM = n(105292),
    eO = n(211450);
function ew(e) {
    return (0, l.jsx)("div", {
        className: eO.wE,
        children: (0, l.jsx)(eE.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eP(e) {
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
        g = (0, eR.rE)({ action: t, onClick: n }),
        [A, x] = i.useState(!1),
        E = i.useRef(null),
        C = d ?? E,
        _ = null != u,
        T = _ && h,
        y = i.useCallback(() => {
            x(!0);
        }, []),
        j = i.useCallback(() => {
            (0, v.hasAnyModalOpen)() || x(!1);
        }, []);
    function N() {
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", { className: eO.iA, children: (0, l.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: eO.$H,
                    children: [
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(eb.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eO.W1,
                                    children: r,
                                }),
                                (0, l.jsx)(eb.E, { color: "currentColor", variant: "text-xs/medium", children: s }),
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
                          (0, l.jsx)(f.D, { className: eO.ef, onClick: g, children: N() }),
                          (0, l.jsx)(f.D, {
                              className: eO.ap,
                              "aria-label": eM.intl.string(eM.t.PdRCRg),
                              ...e,
                              onClick: y,
                              children: (0, l.jsx)(eS._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, l.jsxs)(f.D, {
                        className: eO.ef,
                        ...e,
                        onClick: y,
                        children: [
                            N(),
                            (0, l.jsx)("div", {
                                className: eO.ap,
                                children: (0, l.jsx)(eS._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, l.jsx)(f.D, { className: eO.ef, onClick: g, children: N() })),
            (0, l.jsx)("div", { ref: C, className: eO.jG, children: t })
        );
    }
    return _
        ? (0, l.jsx)("li", {
              className: eO.j$,
              onMouseEnter: y,
              onMouseLeave: j,
              children: (0, l.jsx)(p.Y, {
                  targetElementRef: c ?? C,
                  align: m,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: j,
                  children: I,
              }),
          })
        : (0, l.jsx)("li", { className: eO.j$, children: I() });
}
function eL(e) {
    let { children: t, "aria-label": n } = e;
    return (0, l.jsx)("ul", { "aria-label": n, children: t });
}
var ek = n(849874),
    eD = n(658580),
    eU = n(128400),
    eF = n(641214);
function eG(e) {
    let { onClose: t } = e;
    return (0, l.jsx)(eP, {
        icon: eI.M,
        label: eM.intl.string(eU.default["8hclXY"]),
        sublabel: (0, l.jsx)("span", { className: eF.$, children: eM.intl.string(eU.default.BFc4lY) }),
        onClick: function () {
            (t(), (0, ek.nX)(), (0, eD.D)("user_profile_account_popout"));
        },
    });
}
var eV = n(176781),
    eH = n(812993),
    eB = n(780964),
    eW = n(766075),
    ez = n(734066),
    eZ = n(915725),
    eK = n(409067),
    eq = n(271597),
    eY = n(297264),
    eQ = n(475358),
    e$ = n(866665),
    eX = n(408278),
    eJ = n(625903),
    e0 = n(404778),
    e1 = n(689175),
    e2 = n(821609),
    e3 = n(532624),
    e5 = n(879631),
    e6 = n(350535),
    e7 = n(974293),
    e8 = n(572164),
    e9 = n(953932),
    e4 = n(280483),
    te = n(890856),
    tt = n(713517),
    tn = n(609174),
    tl = n(619744);
function ti(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, tn.Y_)(),
        r = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, eq.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, l.jsx)(e2.$, {
        onClick: r,
        icon: ef.PencilIcon,
        variant: n,
        size: "sm",
        text: eM.intl.string(eM.t.bt75uw),
        fullWidth: !0,
    });
}
var ta = n(82716),
    tr = n(449397),
    ts = n(930317),
    to = n(285072),
    tu = n(575172);
let td = i.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: s } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, tt.A)(o),
        d = i.useCallback(() => {
            (a?.(), (0, eq.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, l.jsx)(tn.Cl, {
        clip: t,
        children: (0, l.jsx)(te.s, {
            ref: o,
            "aria-label": eM.intl.string(eM.t.bt75uw),
            onClick: d,
            className: r()(tu.Z1, s),
            children: (0, l.jsxs)(ts.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, l.jsx)("div", {
                            className: tu.Ad,
                            children: (0, l.jsx)(eg.E, { type: "new", variant: "primary" }),
                        }),
                    (0, l.jsxs)(to.h, {
                        isVisible: u,
                        className: tu.Lw,
                        children: [
                            (0, l.jsxs)("div", {
                                className: tu.mY,
                                children: [(0, l.jsx)(ta.z, {}), (0, l.jsx)(tl.k, {})],
                            }),
                            (0, l.jsxs)("div", {
                                className: tu.E_,
                                children: [
                                    (0, l.jsx)(ti, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, l.jsx)(tr.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tc = n(696016),
    tm = n(652215),
    th = n(753070),
    tp = n(507216),
    tf = n(48127);
function tg(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: r } = e;
    (0, e4.A)();
    let s = (0, u.yK)([eZ.Ay], () => Object.values(eZ.Ay.getClips())),
        o = (0, u.bG)([eZ.Ay], () => eZ.Ay.getSettings()),
        d = (0, u.bG)([eZ.Ay], () => eZ.Ay.getNewClipIds()),
        c = (0, e7.aJ)("ClipsPopout"),
        m = (0, u.bG)([eZ.Ay], () => eZ.Ay.getEnableAutoclipping()),
        h = (0, u.bG)([e3.Ay], () => e3.Ay.getKeybindForAction(tm.hCu.SAVE_CLIP)),
        p = i.useCallback(
            (e) => {
                r?.(e);
            },
            [r],
        ),
        f = !o.showPovClipsInGallery,
        g = i.useMemo(() => {
            let e = s.filter((e) => e.type === tc.nQ.CLIP && "" !== e.thumbnail && (!f || !(0, eK.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, f]),
        A = i.useMemo(() => g.slice(0, 16), [g]),
        v = g.length > 16,
        x = null != h ? e6.dI(h.shortcut, !0) : null,
        E = [
            (0, e5.$)(o.clipsLength / L.A.Millis.SECOND),
            (0, th.zr)(o.clipsQuality.resolution),
            eM.intl.formatToPlainString(eM.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        c && E.push(eM.intl.string(tp.default.XWkJoi)),
        (0, l.jsxs)("div", {
            ref: p,
            className: tf.SW,
            role: "dialog",
            "aria-label": eM.intl.string(eM.t.z2jK6X),
            children: [
                (0, l.jsxs)("div", {
                    className: tf.wx,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tf.$,
                            children: [
                                (0, l.jsx)(eY.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: eM.intl.string(eM.t.z2jK6X),
                                }),
                                null != x && (0, l.jsx)(eQ.e, { className: tf.P, shortcut: x }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: tf.$s,
                            children: [
                                (0, l.jsx)(e$.m, {
                                    text: eM.intl.string(eM.t["3D5yo/"]),
                                    children: (0, l.jsx)(eX.K, {
                                        onClick: () => n(),
                                        icon: eJ.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eM.intl.string(eM.t["3D5yo/"]),
                                    }),
                                }),
                                (0, l.jsx)(e$.m, {
                                    text: eM.intl.string(tp.default["55C2MH"]),
                                    children: (0, l.jsx)(eX.K, {
                                        onClick: () => t(),
                                        icon: eV.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eM.intl.string(tp.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tf.ov,
                    children: [
                        E.map((e, t) =>
                            (0, l.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, l.jsx)("span", { className: tf.LO, children: "\u2022" }),
                                        (0, l.jsx)(eb.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tf.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        c &&
                            (0, l.jsx)(eb.E, {
                                variant: "text-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tf.wS,
                                children: m ? eM.intl.string(tp.default.lTwKmt) : eM.intl.string(tp.default.GNDqtf),
                            }),
                    ],
                }),
                (0, l.jsx)(e0.c, {}),
                A.length > 0
                    ? (0, l.jsxs)(e1.Ch, {
                          className: tf.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, l.jsx)(td, { clip: e, isNew: d.includes(e.id), onClose: a }, e.id)),
                              v &&
                                  (0, l.jsx)("div", {
                                      className: tf.qr,
                                      children: (0, l.jsx)(e2.$, {
                                          onClick: () => t(),
                                          text: eM.intl.string(tp.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, l.jsx)(tA, { keybindString: x }),
            ],
        })
    );
}
function tA(e) {
    let { keybindString: t } = e,
        n = (0, e8.E)();
    return (0, l.jsxs)("div", {
        className: tf.p$,
        children: [
            (0, l.jsx)(eb.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tf.qO,
                children: eM.intl.string(tp.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, l.jsx)(eb.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tf.CZ,
                      children: eM.intl.format(tp.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, l.jsx)(
                                  eb.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, l.jsx)(eQ.e, { shortcut: t }),
                      }),
                  })
                : (0, l.jsx)(e9.A, {}),
        ],
    });
}
function tv(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, ez.sw)(),
        r = !(0, u.bG)([eZ.Ay], () => eZ.Ay.getSettings().showPovClipsInGallery),
        s = (0, u.bG)(
            [eZ.Ay],
            () => {
                let e = eZ.Ay.getNewClipIds();
                return r
                    ? e.filter((e) => {
                          let t = eZ.Ay.getClipById(e);
                          return null != t && !(0, eK.kD)(t);
                      }).length
                    : e.length;
            },
            [r],
        ),
        o = i.useCallback(
            (e) => {
                (t(), (0, eq.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        d = i.useCallback(() => {
            (t(), (0, eW.openUserSettings)(eB.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, l.jsx)(eP, {
              action: "PRESS_CLIPS",
              icon: eV.x,
              label: eM.intl.string(eM.t.z2jK6X),
              trailing: s > 0 ? (0, l.jsx)(eH.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, l.jsx)(tg, { ...e, onOpenGallery: o, onOpenSettings: d, onClose: t }),
          })
        : null;
}
var tx = n(480335),
    tE = n(577390),
    tC = n(372320),
    t_ = n(31956),
    tT = n(744808),
    ty = n(645507),
    tj = n(131607),
    tN = n(970931),
    tI = n(315710),
    tS = n(789645),
    tb = n(775602),
    tR = n(832248),
    tM = n(462887),
    tO = n(736653),
    tw = n(439174),
    tP = n(24482),
    tL = n(19886),
    tk = n(202541);
function tD() {
    let e = (0, tL.Xb)(),
        t = (0, tP.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tk.sp.length - 1; t >= 0; t--) {
        let l = tk.VD[tk.sp[t]],
            i = new Date(e);
        if ((i.setMonth(i.getMonth() + l.tenureReqNumMonths), i.setHours(i.getHours() + 30), n > i.getTime()))
            if (n - i.getTime() < 6048e5) return l.id;
            else break;
    }
    return null;
}
let tU = {
        [tk.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tk.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tk.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tk.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tk.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tk.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tk.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tk.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tF = {
        [tk.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tk.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tk.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tk.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tk.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tk.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tk.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tk.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tG = n(570484);
let tV = i.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tH() {
    let e = (0, u.bG)([tb.Ay], () => tb.Ay.useReducedMotion),
        t = (0, tR.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tD(),
                t = (0, tM.M)((0, tO.Ay)());
            if (null == e) return null;
            let n = tU[e],
                l = tF[e],
                i = {
                    currentBadge: (0, tw.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? l?.dark : l?.light,
                },
                a = tk.sp.indexOf(e);
            if (a > 0) {
                let e = tk.sp[a - 1],
                    n = tU[e];
                ((i.prevBadge = (0, tw.e0)(e)), (i.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return i;
        })(),
        [a, r] = i.useState(null);
    return (null != n && null == a && r(n), e || !t || null == a) ? null : (0, l.jsx)(tB, { levelUpData: a });
}
function tB(e) {
    let { levelUpData: t } = e,
        n = i.useRef(null),
        a = i.useCallback(() => {
            tR.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, l.jsx)(tI.Ok, {
        containerRef: n,
        children: (0, l.jsxs)("div", {
            className: tG.i,
            children: [
                (0, l.jsx)("div", {
                    className: tG.b,
                    children: (0, l.jsx)(e$.m, {
                        text: eM.intl.string(eM.t.cpT0Cq),
                        children: (0, l.jsx)(eX.K, {
                            icon: tS.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": eM.intl.string(eM.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsx)(tV, { levelUpData: t }) }),
            ],
        }),
    });
}
var tW = n(397562),
    tz = n(206835),
    tZ = n(183555),
    tK = n(465318),
    tq = n(999291),
    tY = n(402860),
    tQ = n(718019),
    t$ = n(977059),
    tX = n(915614),
    tJ = n(925622),
    t0 = n(559506),
    t1 = n(646986),
    t2 = n(657538),
    t3 = n(946356),
    t5 = n(465829),
    t6 = n(624479),
    t7 = n(206845),
    t8 = n(957565),
    t9 = n(427262),
    t4 = n(62119);
function ne(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: i } = (0, tZ.NJ)();
    return t8.p5
        ? (0, l.jsx)(t7.A, {
              text: eM.intl.string(eM.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t9.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => i({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, l.jsx)(f.D, {
                      ...e,
                      className: r()(t4.c, { [t4.R]: n }),
                      "aria-label": eM.intl.string(eM.t.y5MwJy),
                      children: (0, l.jsx)(t6.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nt = n(394816),
    nn = n(442228),
    nl = n(253932),
    ni = n(362862),
    na = n(621466),
    nr = n(318254),
    ns = n(863610),
    no = n(421773),
    nu = n(318346),
    nd = n(923138),
    nc = n(309954),
    nm = n(673125),
    nh = n(646731),
    np = n(769001);
function nf(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: a, onCloseAccountPopout: s } = e;
    (0, nd.I)({ enabled: !0 });
    let { balance: o } = (0, nc.W)(),
        d = (0, u.bG)([nm.Ay], () =>
            nm.Ay.userOpenedWalletViaProfileDCF ? nm.Y0.NEW_ACHIEVEMENT : nm.Ay.clientUnreadNotificationType,
        );
    i.useEffect(
        () => () => {
            nm.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: c, onMouseEnter: m, onMouseLeave: h, setIsHovered: g, cancelTimers: A } = (0, no.A)(0, 500),
        x = i.useCallback(() => {
            (0, v.hasAnyModalOpen)() || h();
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
                if ((0, v.hasAnyModalOpen)()) return;
                let t = (0, na.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${eO.j$}`);
                null != n && n !== E.current && (A(), g(!1));
            }
        }, [c, A, g]));
    let y = i.useRef(!1);
    i.useEffect(() => {
        c || (y.current = !1);
    }, [c]);
    let j = i.useCallback(() => {
            (y.current ||
                ((y.current = !0),
                (0, nu.Y)({
                    pageType: M.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: M.A.ORB_WALLET,
                    ctaObject: M.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        N = (0, eR.rE)({ action: "PRESS_ORBS", onClick: j });
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
                    ? eM.intl.format(eM.t["8xDISf"], { balance: String(o) })
                    : (0, l.jsx)(ns.n, { dotRadius: 3.5, themed: !0, className: np.K }),
            [o],
        ),
        S = i.useMemo(
            () =>
                d === nm.Y0.NEW_ACHIEVEMENT
                    ? (0, l.jsx)(eg.E, { type: "new", variant: "primary" })
                    : d === nm.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, l.jsx)(eg.E, { type: { text: eM.intl.string(eM.t.O13yhz) }, variant: "primary" })
                      : null,
            [d],
        ),
        b = i.useCallback(() => {
            (A(), g(!1), s());
        }, [A, g, s]),
        R = i.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, na.vq)(t, Node) && null != E.current && E.current.contains(t) && A();
            },
            [A],
        );
    return (0, l.jsx)("li", {
        ref: E,
        className: eO.j$,
        onMouseEnter: j,
        onMouseLeave: x,
        children: (0, l.jsx)(p.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    ref: T,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, l.jsx)(nh.vG, { onCloseWallet: b, returnRef: C, isProfilePopout: !0 }),
                }),
            shouldShow: c,
            onRequestClose: x,
            children: (e) =>
                (0, l.jsx)("div", {
                    className: eO.jG,
                    children: (0, l.jsxs)(f.D, {
                        innerRef: C,
                        className: eO.ef,
                        ...e,
                        onClick: N,
                        children: [
                            (0, l.jsx)("div", {
                                className: eO.iA,
                                children: (0, l.jsx)(nr.C, { color: "currentColor", size: "xs" }),
                            }),
                            (0, l.jsx)("div", {
                                className: eO.$H,
                                children: (0, l.jsx)("div", {
                                    children: (0, l.jsx)(eb.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eO.W1,
                                        children: I,
                                    }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: r()(eO.ap, np._),
                                children: [S, (0, l.jsx)(eS._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var ng = n(290863),
    nA = n(351906),
    nv = n(403362),
    nx = n(562153),
    nE = n(661531),
    nC = n(477782),
    n_ = n(628284),
    nT = n(695366),
    ny = n(363195),
    nj = n(889227),
    nN = n(287809),
    nI = n(174459),
    nS = n(429707),
    nb = n(274303),
    nR = n(994125),
    nM = n(347853),
    nO = n(573879),
    nw = n(559117),
    nP = n(43105),
    nL = n(661439),
    nk = n(385113),
    nD = n(352003),
    nU = n(429913),
    nF = n(334074),
    nG = n(633075),
    nV = n(667049),
    nH = n(280450),
    nB = n(90165),
    nW = n(49999),
    nz = n(518477);
function nZ(e) {
    let { targetElementRef: t, onClose: a } = e,
        [r, s] = i.useState(!1),
        o = (0, u.bG)([nH.default], () => nH.default.getId()),
        { eligibleApplications: c, markAsDismissed: m } = (function () {
            let e = (0, u.yK)([nk.A], () => nk.A.getFeaturedApplicationIds());
            ((0, nD.A)(e),
                i.useEffect(() => {
                    (0, nL.X)();
                }, []));
            let t = (0, u.bG)([nH.default], () => nH.default.getId()),
                n = (0, nV.A)(t),
                l = i.useMemo(() => n.filter((e) => e instanceof nG.R), [n]),
                a = (0, nU.A)(e),
                r = i.useMemo(() => a.filter(nv.Vq), [a]),
                s = (0, u.cf)([nB.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = r.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nB.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: c, markAsDismissed: m } = (0, nF.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nF.SH,
                });
            return {
                eligibleApplications: i.useMemo(() => o.filter((e) => c.includes(e.id)), [o, c]),
                markAsDismissed: m,
            };
        })();
    return ((0, i.useEffect)(() => {
        0 !== c.length &&
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
    }, [c.length]),
    0 === c.length)
        ? null
        : (0, l.jsx)(nP.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: eM.intl.string(eM.t.HMWL9c),
              body: eM.intl.string(eM.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      c.map((e) => e.id),
                      nW.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eM.intl.string(eM.t.VSLDly),
                      loading: r,
                      onClick: function () {
                          (s(!0),
                              (0, tY.openUserProfileModal)({ userId: o, tabSection: nz.RP.WIDGETS })
                                  .then(() => {
                                      let e = c.map((e) => e.id);
                                      ((0, v.openModalLazy)(
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
                                              c.map((e) => e.id),
                                              nW.i.TAKE_ACTION,
                                          ),
                                          a());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var nK = n(461213),
    nq = n(818348),
    nY = n(709516);
function nQ() {
    let e = (0, u.bG)([nK.A], () => nK.A.getStatus()),
        t = (0, t9.MU)(e) ?? "",
        n = e === nq.cl.INVISIBLE || e === nq.cl.OFFLINE;
    return (0, l.jsxs)("div", {
        className: nY.k,
        children: [
            (0, l.jsxs)(g.A, { tag: "div", children: [eM.intl.string(eM.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, l.jsx)(e$.m, {
                    text: eM.intl.string(eM.t.L99HQm),
                    children: (0, l.jsx)(nT.E, {
                        size: "xs",
                        color: nE.A.colors.STATUS_WARNING,
                        "aria-label": eM.intl.string(eM.t.L99HQm),
                    }),
                }),
        ],
    });
}
var n$ = n(146901),
    nX = n(827827);
let nJ = [
        { duration: 15 * L.A.Millis.MINUTE, label: () => eM.intl.string(eM.t["8ot6gv"]) },
        { duration: L.A.Millis.HOUR, label: () => eM.intl.string(eM.t.UMWBZr) },
        { duration: 8 * L.A.Millis.HOUR, label: () => eM.intl.string(eM.t.EpAXPC) },
        { duration: L.A.Millis.DAY, label: () => eM.intl.string(eM.t["755t4q"]) },
        { duration: 3 * L.A.Millis.DAY, label: () => eM.intl.string(eM.t["f3/1ch"]) },
        { duration: void 0, label: () => eM.intl.string(eM.t["46dqJY"]) },
    ],
    n0 = "forever";
function n1(e) {
    let { status: t, currentStatus: n, description: i } = e,
        a = t !== tm.clD.ONLINE,
        r = (0, l.jsx)(l.Fragment, {
            children: nJ.map((e) => {
                let { duration: i, label: a } = e;
                return (0, l.jsx)(
                    nC.Dr,
                    {
                        id: `${t}-${i}`,
                        label: a(),
                        action: () => (0, nX.A)({ nextStatus: t, prevStatus: n, durationMillis: i }),
                        dontCloseOnAction: !0,
                    },
                    i ?? n0,
                );
            }),
        });
    return (0, l.jsx)(nC.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, t9.MU)(t),
        subtext: i,
        iconLeft: () => (0, l.jsx)(eA.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nX.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? r : void 0,
    });
}
function n2(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: l } = (0, n$._)(e);
    return "today" === t
        ? eM.intl.formatToPlainString(eM.t.ZxxHIO, { timeString: l })
        : eM.intl.formatToPlainString(eM.t["9OFjSe"], { dateString: n, timeString: l });
}
var n3 = n(996988),
    n5 = n(207634),
    n6 = n(47453);
function n7(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: s, openedAt: o, className: c } = e,
        p = __OVERLAY__,
        f = (0, tq.Ay)(t.id, void 0),
        { analyticsLocations: A } = (0, O.Ay)(M.A.USER_PROFILE_ACCOUNT_POPOUT),
        x = (0, tZ.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, tW.A)(A, f, nz.R7.ACCOUNT_POPOUT);
    let { ref: E } = (0, ey.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, tt.A)(E);
    (i.useEffect(() => {
        a?.(E.current);
    }, [E, a]),
        i.useEffect(
            () => (
                tR.A.setState({ isOpen: !0 }),
                () => tR.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let T = (0, u.bG)([ng.A], () => ng.A.getStatus(t.id)),
        y = n2(nl.CY.useSetting()),
        j = (0, u.bG)([nA.A], () => nA.A.hidePersonalInformation),
        N = (0, tN.kB)(),
        I = nl.Q_.useSetting(),
        S = (function (e) {
            let t = nl.CY.useSetting(),
                n = (0, tN.kB)(),
                i = nl.Jr.useSetting();
            function a(l) {
                let i = n2(t);
                if (e === l && null != i) return i;
                switch (l) {
                    case tm.clD.DND:
                        return n ? eM.intl.string(eM.t.day5A6) : eM.intl.string(eM.t["tq/fMK"]);
                    case tm.clD.INVISIBLE:
                        return eM.intl.string(eM.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let r = (0, l.jsx)(l.Fragment, {
                    children: nJ.map((t) => {
                        let { duration: n, label: i } = t;
                        return (0, l.jsx)(
                            nC.Dr,
                            {
                                id: `${e}-${n}`,
                                label: i(),
                                action: () => {
                                    (0, tN.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n0,
                        );
                    }),
                }),
                s = n1({ status: tm.clD.ONLINE, currentStatus: e }),
                o = n1({ status: tm.clD.IDLE, currentStatus: e, description: a(tm.clD.IDLE) }),
                u = n1({ status: tm.clD.DND, currentStatus: e, description: a(tm.clD.DND) }),
                d = n1({ status: tm.clD.INVISIBLE, currentStatus: e, description: a(tm.clD.INVISIBLE) });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    s,
                    (0, l.jsx)(nC.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    d,
                    n
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(nC.bX, {}, "menu-separator-statuses"),
                                  (0, l.jsx)(
                                      nC.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eM.intl.string(eM.t.gJRnwK),
                                          iconLeft: ev.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: ev.BellSlashIcon },
                                          badge: { text: eM.intl.string(eM.t.ApAu9f) },
                                          subtext:
                                              null != i && "0" !== i
                                                  ? eM.intl.format(eM.t.BWD8fs, {
                                                        endTime: new Date(Number(i)).toLocaleString(
                                                            eM.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eM.intl.string(eM.t["Br1q+x"]),
                                          action: () => {
                                              (0, tN.ES)(!n);
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
            let t = (0, u.bG)([nN.default], () => nN.default.getCurrentUser()),
                n = (0, u.bG)([nA.A], () => nA.A.hidePersonalInformation),
                i = (0, u.bG)([ny.A], () => (0, tM.M)(ny.A.theme)),
                { multiAccountUsers: a } = (0, nR.K)(),
                r = a.map((a) => {
                    let r = new nj.A(a),
                        s = r.id === t?.id,
                        o = a.tokenStatus === nb.U.INVALID,
                        u = n ? null : `#${r.discriminator}`;
                    return (0, l.jsx)(
                        nC.Dr,
                        {
                            id: r.id,
                            focusedClassName: nw.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, l.jsxs)("div", {
                                    className: nw.ci,
                                    children: [
                                        (0, l.jsx)(m.eu, {
                                            src: r.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: nw.DD,
                                            children: [
                                                (0, l.jsx)(eb.E, {
                                                    className: nw.gE,
                                                    variant: "text-sm/normal",
                                                    children: t9.Ay.getUserTag(r, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !r.hasUniqueUsername() &&
                                                    (0, l.jsx)(eb.E, {
                                                        className: nw.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, l.jsx)(n_.y, {
                                                size: "sm",
                                                color: t
                                                    ? nE.A.unsafe_rawColors.WHITE.css
                                                    : nE.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nE.A.unsafe_rawColors.BRAND_500.css
                                                        : nE.A.unsafe_rawColors.WHITE.css,
                                                className: nw.s0,
                                            }),
                                        o &&
                                            (0, l.jsx)(nT.E, {
                                                color: nE.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nE.A.unsafe_rawColors.BRAND_500.css
                                                        : nE.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nw.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nM.A)();
                                else {
                                    var n;
                                    (n = r.id) !== t?.id &&
                                        (nI.default.track(tm.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tm.JJy.USER_PROFILE },
                                        }),
                                        nS.Mx(n, void 0, nO.WX.MULTI_ACCOUNT_MENU));
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
                            (0, l.jsx)(nC.bX, {}),
                            (0, l.jsx)(nC.Dr, {
                                id: "manage-accounts",
                                label: eM.intl.string(eM.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nM.A)());
                                },
                            }),
                        ],
                    }),
                ),
                r
            );
        })(n),
        R = (0, tz.A)({ analyticsLocations: A }),
        P = (0, tP.TW)(t),
        L = (0, w.d)({ location: "UserProfileAccountPopout" }),
        k = i.useRef(null),
        D = i.useRef(null),
        U = i.useRef(null),
        F = (0, tC.A)(f?.profileFrame?.skuId),
        G = (0, tE.A)(f?.profileFrame?.skuId);
    (0, t_.A)({ skuId: f?.profileFrame?.skuId, openedAt: o, context: x, analyticsLocations: A });
    let V = i.useRef((0, tR.A)((e) => e.shouldRenderTenureLevelUp)),
        H = i.useMemo(() => (0, ty.A)(), []),
        [B, W] = i.useState(() => tR.A.getState().shouldRenderTenureLevelUp);
    function z(e) {
        (n?.(), (0, tY.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: A, ...x, ...e }));
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
        Y = tK.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        Q = (0, ni.H)({ location: "UserProfileAccountPopout" }),
        $ = (0, eN.FX)("UserProfileAccountPopout"),
        X = (0, tR.A)((e) => e.shouldScrollToOrbsMenuItem),
        [J, ee] = (0, tj.kn)(
            [
                d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
                Y ? d.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nv.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        et = i.useId();
    return (0, l.jsx)(O.f5, {
        value: A,
        children: (0, l.jsx)(tZ.of, {
            value: x,
            openedAt: o,
            fetchStartedAt: f?.fetchStartedAt,
            fetchEndedAt: f?.fetchEndedAt,
            isLoaded: f?.isLoaded,
            children: (0, l.jsxs)(em.l, {
                ref: E,
                "aria-labelledby": et,
                className: r()(eO.jC, c),
                "data-layer": "base",
                children: [
                    (0, l.jsx)(g.A, {
                        children: (0, l.jsx)(eh.H, { id: et, children: eM.intl.string(eM.t["5fWB8U"]) }),
                    }),
                    (0, l.jsxs)(eh.F, {
                        children: [
                            (0, l.jsxs)(t3.A, {
                                className: eO.BK,
                                user: t,
                                displayProfile: f,
                                themeType: n3.d.POPOUT,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: n6.wx,
                                        children: [
                                            (0, l.jsx)(tX.A, { user: t, displayProfile: f, themeType: n3.d.POPOUT }),
                                            (0, l.jsx)(tQ.A, {
                                                user: t,
                                                displayProfile: f,
                                                avatarSize: n5.T[n3.d.POPOUT].avatarSize,
                                                onOpenProfile: p ? void 0 : z,
                                            }),
                                            (0, l.jsx)(nt.A, {
                                                ref: k,
                                                user: t,
                                                themeType: n3.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ep.Ip, {
                                        ref: U,
                                        className: eO.rf,
                                        style: { pointerEvents: B ? "none" : void 0 },
                                        children: [
                                            (0, l.jsx)(t0.A, { userId: t.id }),
                                            (0, l.jsx)(t5.Ay, {
                                                className: eO.eF,
                                                user: t,
                                                displayName: nx.Ay.getName(void 0, null, t),
                                                onClickName: p ? void 0 : z,
                                                displayNameTrailing: (0, l.jsx)(ne, { user: t, isVisible: C }),
                                                pronouns: f?.pronouns,
                                                trailing: (0, l.jsx)(t$.A, {
                                                    displayProfile: f,
                                                    themeType: n3.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, l.jsx)(tJ.A, { isPremiumUser: P, onInteraction: n }),
                                            (0, l.jsx)(nn.A, {
                                                userId: t.id,
                                                userBio: f?.bio,
                                                hidePersonalInformation: j,
                                                onClose: n,
                                            }),
                                            Z &&
                                                (0, l.jsx)(t2.A, {
                                                    user: t,
                                                    widgets: f?.widgets,
                                                    onOpenUserProfileModal: z,
                                                }),
                                            (0, l.jsx)(t1.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: z,
                                                onClose: n,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: eO.T_,
                                                children: [
                                                    $ &&
                                                        (0, l.jsx)(t3.A.Overlay, {
                                                            className: eO.g0,
                                                            children: (0, l.jsx)(eL, {
                                                                children: (0, l.jsx)(eG, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, l.jsx)(t3.A.Overlay, {
                                                        className: eO.g0,
                                                        children: (0, l.jsxs)(eL, {
                                                            children: [
                                                                (0, l.jsx)(eP, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eM.intl.string(eM.t.s5vZlQ),
                                                                    icon: ef.PencilIcon,
                                                                    trailing:
                                                                        null != J
                                                                            ? (0, l.jsx)("div", {
                                                                                  className: eO.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, l.jsx)(eg.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (J ===
                                                                            d.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            ee(nW.i.TAKE_ACTION),
                                                                            q());
                                                                    },
                                                                    ref: D,
                                                                }),
                                                                (0, l.jsx)(eP, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, l.jsx)(nQ, {}),
                                                                    sublabel: null != y && y,
                                                                    icon: () =>
                                                                        (0, l.jsx)(eA.nW, { status: T, size: 12 }),
                                                                    trailing:
                                                                        (N || T === tm.clD.DND) &&
                                                                        (0, l.jsx)(ev.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: ec.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, l.jsx)(ew, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eO.hQ,
                                                                                  "aria-label": eM.intl.string(
                                                                                      eM.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: S,
                                                                              });
                                                                          },
                                                                    onClick: ec.Fr
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
                                                                                                  return (0, l.jsx)(
                                                                                                      ex.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eM.intl.string(
                                                                                                                  eM.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          l.jsx)(eE.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eM.intl.string(
                                                                                                                      eM
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
                                                                    (0, l.jsx)(eP, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: eC.q,
                                                                        label: eM.intl.string(eM.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, ej.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, l.jsx)(tv, { onClose: n, popoutContainerRef: E }),
                                                                Q &&
                                                                    (0, l.jsx)(nf, {
                                                                        popoutContainerRef: E,
                                                                        scrollerRef: U,
                                                                        shouldScrollIntoView: X,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, l.jsx)(t3.A.Overlay, {
                                                        className: eO.g0,
                                                        children: (0, l.jsxs)(eL, {
                                                            children: [
                                                                (0, l.jsx)(eP, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: e_.r,
                                                                    label: eM.intl.string(eM.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nM.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, l.jsx)(ew, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eM.intl.string(eM.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: b,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t8.p5 &&
                                                                    I &&
                                                                    (0, l.jsx)(eP, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eT.L,
                                                                        label: eM.intl.string(eM.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, t8.C)(t.id), n());
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
                                        (0, l.jsx)(tx.A, { skuId: f.profileEffect.skuId, isHovering: _ }),
                                    null != F && (0, l.jsx)(tT.A, { frame: F, fadeIn: G }),
                                ],
                            }),
                            (0, l.jsx)(nZ, { targetElementRef: D, onClose: n }),
                            (0, l.jsx)(tH, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n8 = n(201805),
    n9 = n(209932),
    n4 = n(655116),
    le = n(438140),
    lt = n(549831),
    ln = n(342296),
    ll = n(852712),
    li = n(389960),
    la = n(173660),
    lr = n(616356),
    ls = n(734057),
    lo = n(629016),
    lu = n(186111),
    ld = n(999926),
    lc = n(763827),
    lm = n(967198),
    lh = n(485296),
    lp = n(486020),
    lf = n(625494),
    lg = n(536194),
    lA = n(19575),
    lv = n(994314),
    lx = n(485599),
    lE = n(116833);
function lC(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eM.intl.string(eM.t.uwDBSq),
                  body: eM.intl.formatToPlainString(eM.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eM.intl.string(eM.t["5GD53o"]), body: eM.intl.string(eM.t["2Rb7tE"]) };
    return (0, l.jsx)(nP.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: lE.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eM.intl.string(eM.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function l_(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: i } = e;
    return (0, l.jsx)(lC, {
        ...t,
        onPrimaryAction: () => {
            (i(nW.i.TAKE_ACTION), (0, ej.openBadgeDirectoryModal)());
        },
        onRequestClose: () => i(nW.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var lT = n(206248);
function ly(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: i, position: a, shouldShow: r = !0, children: s } = e,
        o = (0, ez.sw)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            s,
            r && o
                ? (0, l.jsx)(lT.H, {
                      targetElementRef: t,
                      title: eM.intl.string(tp.default.Qn21R6),
                      body: eM.intl.string(tp.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: eM.intl.string(eM.t.RzWDqY),
                          onClick: function () {
                              (n(nW.i.TAKE_ACTION), i());
                          },
                      },
                      onRequestClose: function () {
                          n(nW.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var lj = n(379848),
    lN = n(626584),
    lI = n(757036),
    lS = n(591179),
    lb = n(531685),
    lR = n(259065),
    lM = n(26168),
    lO = n(78294);
let lw = new lN.A("DisplayNameStylesFlywheelCoachmark");
function lP(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: r } = (0, O.Ay)(),
        s = (0, i.useRef)(null),
        o = (0, u.bG)([lb.A], () => lb.A.isFocused()),
        d = (0, lI.L)(tk.PremiumTypes.TIER_2),
        c = (0, lS.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, i.useCallback)(() => {
            t(nW.i.TAKE_ACTION);
            let e = nN.default.getCurrentUser();
            c && null != e
                ? (0, tY.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: r,
                      onModalOpen: () => {
                          (0, lR.L)({ analyticsLocations: r, stackingBehavior: "stack" });
                      },
                  })
                : (0, eW.openUserSettings)(eB.X.PROFILE_PANEL, { analyticsLocations: r }, () => {
                      (0, lR.L)({ analyticsLocations: r });
                  });
        }, [t, r, c]),
        h = (0, i.useCallback)(() => {
            t(nW.i.USER_DISMISS);
        }, [t]);
    (0, i.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(lw.error) : o || s.current?.pause();
    }, [o]);
    let p = d ? [eM.intl.string(lM.default.TyUdka)] : [eM.intl.string(lM.default.dluV0R)];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a,
            (0, l.jsx)(nP.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: lO.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eM.intl.string(lM.default.cYwrp8),
                body: p,
                actions: [{ text: eM.intl.string(eM.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var lL = n(45780),
    lk = n(696451),
    lD = n(71393),
    lU = n(685073),
    lF = n(73153);
let lG = { lastSeenInfos: {} },
    lV = lG;
class lH extends u.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        lV = e ?? lG;
    }
    getState() {
        return lV;
    }
    getGuildLastSeenInfo(e) {
        return lV.lastSeenInfos[e] ?? null;
    }
}
let lB = new lH(lF.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        lV.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        lV = lG;
    },
});
var lW = n(514661);
let lz = new lN.A("GuildTagAvailableCoachmark");
function lZ(e) {
    let t = (0, u.bG)([lD.A], () => lD.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            lF.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: i, onAdoptTag: a, onEditProfile: r } = (0, lW.A)(t?.id ?? null, () => n(nW.i.TAKE_ACTION));
    if (null == t || !(0, lU.q0)(t))
        return (lz.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eM.intl.string(eM.t.jwEaiX), loading: i, onClick: a, variant: "primary" },
        { text: eM.intl.string(eM.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(nP.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lE.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eM.intl.formatToPlainString(eM.t["m/Tc3n"], { guildName: t.name }),
                body: eM.intl.string(eM.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nW.i.USER_DISMISS),
            }),
        ],
    });
}
function lK(e) {
    let t = (0, u.bG)([lD.A], () => lD.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: i, onAdoptTag: a, onEditProfile: r } = (0, lW.A)(t?.id ?? null, () => n(nW.i.TAKE_ACTION));
    if (null == t || !(0, lU.q0)(t))
        return (lz.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eM.intl.string(eM.t.jwEaiX), loading: i, onClick: a, variant: "primary" },
        { text: eM.intl.string(eM.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(nP.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lE.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eM.intl.formatToPlainString(eM.t.VFqnyU, { guildName: t.name }),
                body: eM.intl.string(eM.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(nW.i.USER_DISMISS),
            }),
        ],
    });
}
var lq = n(843010),
    lY = n(764231),
    lQ = n(425713);
function l$(e) {
    let { groupName: t, targetElementRef: n } = e,
        i = tD(),
        a = (0, u.bG)([tb.Ay], () => tb.Ay.useReducedMotion),
        r = (0, tR.A)((e) => e.isOpen),
        s = (0, lq.G)();
    return a || null == i || r || s
        ? null
        : (0, l.jsx)(lj.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, l.jsx)(lX, {
                      recentlyLeveledTenureBadge: i,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function lX(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: r } = e,
        s = tk.sp.indexOf(t),
        o = (0, lQ.I)(tk.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, i.useCallback)(() => {
            (n(nW.i.TAKE_ACTION),
                tR.A.setState({ shouldRenderTenureLevelUp: !0 }),
                lf._.dispatch(tm.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        d = (0, i.useCallback)(() => {
            n(nW.i.USER_DISMISS);
        }, [n]),
        c = tk.VD[t],
        m = eM.intl.formatToPlainString(eM.t.ewkaVR, {
            timeMilestone: (0, lY.T)(c.id, c.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: eM.intl.string(eM.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, l.jsx)(nP.A, {
        targetElementRef: a,
        onRequestClose: d,
        shouldShow: r,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eM.intl.string(eM.t.VoDxsV),
        body: m,
        actions: h,
    });
}
var lJ = n(764014);
function l0(e) {
    let { targetElementRef: t } = e,
        n = (0, tR.A)((e) => e.isOpen),
        [i, a] = (0, tj.kn)(n ? [] : [d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: nW.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return i === d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, l.jsx)(nP.A, {
              targetElementRef: t,
              graphic: { type: "image", src: lJ.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eM.intl.string(eM.t["Q+dH5r"]),
              body: eM.intl.string(eM.t.YKJw4W),
              onRequestClose: () => a(nW.i.USER_DISMISS),
              actions: [
                  {
                      text: eM.intl.string(eM.t.dcOuei),
                      onClick: function () {
                          (a(nW.i.TAKE_ACTION),
                              tR.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nm.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              lf._.dispatch(tm.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function l1(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n8.c9)(),
        i = null != e.targetElementRef.current && t && n,
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = (0, lL.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tm.dJq),
                i = (0, u.bG)(
                    [lD.A, nN.default, lk.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = lD.A.getGuild(e);
                        if (void 0 === t || !(0, lU.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nN.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let l = lk.Ay.getMember(e, n.id);
                        return null != l && !l.isPending;
                    },
                    [e],
                );
            return (0, tj.ww)(i && n && !l ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tm.eGj);
        })(e.guildId, { shouldShow: i }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = e?.primaryGuild,
                i = l?.identityGuildId ?? null,
                a = (0, u.bG)([lB], () => (null === i ? null : lB.getGuildLastSeenInfo(i))),
                r = (0, u.bG)([lD.A], () => lD.A.getGuild(i)?.profile?.tag),
                s = null != r && l?.identityGuildId === i && l?.tag === null,
                o = null != i && a?.tag === r,
                c = null !== i && s && !o;
            return (0, tj.Wl)(c && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: i });
    return i
        ? a === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, l.jsx)(lK, {
                  guildId: e.guildId,
                  onDismiss: r,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, l.jsx)(lZ, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(l$, { groupName: nW.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, l.jsx)(l0, { targetElementRef: e.targetElementRef }),
                        (0, l.jsx)(lj.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: nW.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: i } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, l.jsx)(lP, {
                                            markAsDismissed: i,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, l.jsx)(ly, {
                                            markAsDismissed: i,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eq.p,
                                            children: e.children,
                                        });
                                    case d.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                e.children,
                                                (0, l.jsx)(l_, {
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
var l2 = n(348858),
    l3 = n(615675),
    l5 = n(900797),
    l6 = n(847374),
    l7 = n(617354),
    l8 = n(829773),
    l9 = n(42473),
    l4 = n(731854),
    ie = n(516171),
    it = n(577755);
function il(e) {
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
            play: f,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, l2.I)(m ? "undeafen" : "deafen"),
        v = n ? l3.T : h,
        { name: x } = (0, ed.x5)(l4.oh.AUDIO_OUTPUT),
        E = (0, l7.A)(t, n, a),
        { analyticsLocations: C } = (0, O.Ay)(M.A.AUDIO_OUTPUT_BUTTON),
        _ = i.useRef(null);
    return (
        i.useEffect(() => () => f(), [m, f]),
        (0, l.jsx)(O.f5, {
            value: C,
            children: (0, l.jsx)(p.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        c(),
                        (0, l.jsx)(O.f5, {
                            value: C,
                            children: (0, l.jsx)(l8.A, {
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
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: i } = e,
                        { isShown: c } = t,
                        h = c ? l5.t : l6.a;
                    return (0, l.jsxs)("div", {
                        ref: _,
                        className: r()(ie.Lh, { [ie.v8]: m, [ie.q6]: c }),
                        children: [
                            (0, l.jsx)(l9.A, {
                                "aria-checked": m,
                                "aria-label": eM.intl.string(eM.t.wjcRFX),
                                className: ie.eT,
                                disabled: a,
                                icon: (0, l.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nE.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? it.o : void 0,
                                innerClassName: r()({ [it.T]: n }),
                                onClick: s,
                                onContextMenu: i,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, l.jsx)(l9.A, {
                                className: r()(ie.UT, { [ie.q6]: c }),
                                disabled: a,
                                icon: (0, l.jsx)(h, {
                                    className: ie.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nE.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: d ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: d,
                                tooltipPositionKey: d
                                    ? eM.intl.formatToPlainString(eM.t["f+DDY/"], { outputDeviceName: x })
                                    : void 0,
                                tooltipShouldShow: !c,
                                tooltipText: d
                                    ? eM.intl.format(eM.t["f+DDY/"], { outputDeviceName: x })
                                    : eM.intl.string(eM.t.aA4Vce),
                                "aria-label": d
                                    ? eM.intl.formatToPlainString(eM.t["f+DDY/"], { outputDeviceName: x })
                                    : eM.intl.string(eM.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var ii = n(523875),
    ia = n(666654),
    ir = n(993719);
let is = {};
class io extends u.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return is[e] ?? !1;
    }
}
let iu = new io(lF.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        is[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        is[t] = !1;
    },
});
var id = n(362823),
    ic = n(980923),
    im = n(137911),
    ih = n(222176),
    ip = n(973324);
function ig(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: s,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: c,
            onMouseLeave: m,
            onClick: h,
            nameplate: f,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: v,
            shouldShowPTTJoinTooltip: x,
            dismissTooltips: E,
            speaking: C,
        } = e,
        _ = (0, u.bG)([ld.Ay], () => ld.Ay.getMode() === l4.TB.PUSH_TO_TALK),
        T = (0, u.bG)([ld.Ay], () => ld.Ay.getSettings().modeOptions.shortcut),
        y = (0, u.bG)([iu], () => iu.getIsTutorialActive(id.v.MUTE_TUTORIAL)),
        j = (0, u.bG)([lc.A], () => null != lc.A.getChannelId()),
        { name: N } = (0, ed.x5)(l4.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, ll.d)({ location: "MicrophoneButton" }),
        S = i.useRef(null),
        b = n || s || a,
        R = (0, ii.L)(b ? "unmute" : "mute"),
        { analyticsLocations: w } = (0, O.Ay)(M.A.AUDIO_INPUT_BUTTON),
        { Component: P, events: L, play: k } = R,
        D = a || s ? ia.O : P;
    i.useEffect(() => () => k(), [b, k]);
    let U = (0, ic.A)(n, a, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eM.intl.string(eM.t["29gnR4"]), tooltipForceOpen: !0 }
        : x || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eM.intl.format(eM.t.c1qUOQ, { keybind: e6.dI(T).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let F = _ && j,
        G = b ? nE.A.colors.ICON_VOICE_MUTED : "currentColor",
        V = i.useCallback(() => {
            (h(), y && ir.N(id.v.MUTE_TUTORIAL));
        }, [h, y]);
    return (0, l.jsxs)(O.f5, {
        value: w,
        children: [
            (0, l.jsx)(p.Y, {
                targetElementRef: S,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, l.jsx)(O.f5, {
                            value: w,
                            children: (0, l.jsx)(l8.A, {
                                onInteraction: (0, Z.s)("AudioDeviceMenu", M.A.ACCOUNT),
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
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: i } = e,
                        { isShown: a } = n,
                        s = a ? l5.t : l6.a;
                    return (0, l.jsxs)("div", {
                        ref: S,
                        className: r()(ie.Lh, { [ie.v8]: b, [ie.q6]: a }),
                        children: [
                            (0, l.jsx)(l9.A, {
                                "aria-checked": b,
                                "aria-label": eM.intl.string(eM.t.w4m945),
                                className: ie.eT,
                                disabled: o,
                                icon: (0, l.jsx)(D, { size: "custom", width: 20, height: 20, color: G, className: d }),
                                onClick: V,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    (c(), L.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), L.onMouseLeave());
                                },
                                plated: null != f,
                                redGlow: b,
                                role: "switch",
                                ...t,
                                children: F ? (0, l.jsx)("div", { className: r()(ih.U, { [ih.z]: C }) }) : null,
                            }),
                            (0, l.jsx)(l9.A, {
                                "aria-label": v
                                    ? eM.intl.formatToPlainString(eM.t["18wnuD"], { inputDeviceName: N })
                                    : eM.intl.string(eM.t.fRzCbB),
                                className: r()(ie.UT, { [ie.q6]: a }),
                                disabled: o,
                                icon: (0, l.jsx)(s, {
                                    className: ie.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: G,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: c,
                                onMouseLeave: m,
                                plated: null != f,
                                redGlow: b,
                                tooltipType: v ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: v,
                                tooltipPositionKey: v
                                    ? eM.intl.formatToPlainString(eM.t["18wnuD"], { inputDeviceName: N })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: v
                                    ? eM.intl.format(eM.t["18wnuD"], { inputDeviceName: N })
                                    : eM.intl.string(eM.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, l.jsx)(nP.A, {
                targetElementRef: S,
                shouldShow: y,
                graphic: { type: "image", src: ip.A },
                onRequestClose: () => {
                    ir.N(id.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eM.intl.string(im.default.VG4zAf),
                body: eM.intl.string(im.default["8VIRzR"]),
            }),
        ],
    });
}
var iA = n(935399),
    iv = n(505312),
    ix = n(848847),
    iE = n(975807),
    iC = n(425565),
    i_ = n(48498);
function iT(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = i.useMemo(
            () => [
                {
                    text: eM.intl.string(i_.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, iE.A)(iC.C), t(nW.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        r = i.useCallback(() => {
            t(nW.i.USER_DISMISS);
        }, [t]);
    return (0, l.jsx)(nP.A, {
        targetElementRef: n,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/147b33df1db170b53e140d7ad45552731aa0b9b16b7a7358cb9916634167ee02.png",
            aspectRatio: "16/9",
        },
        title: eM.intl.string(i_.default.tmst3F),
        body: eM.intl.string(i_.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: a,
        onRequestClose: r,
    });
}
function iy(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: i } = (0, O.Ay)(M.A.HOLIDAY_COACHMARK);
    return (0, l.jsx)(nP.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: eM.intl.string(eM.t.Mjs8KR),
        body: eM.intl.string(eM.t.U0INks),
        actions: [
            {
                text: eM.intl.string(eM.t.NENZhS),
                onClick: () => {
                    ((0, eW.openUserSettings)(eB.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: i }),
                        t(nW.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(nW.i.USER_DISMISS),
    });
}
var ij = n(88001),
    iN = n(222065),
    iI = n(438705);
function iS(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        r = i.useCallback(() => {
            (a(), (0, eW.openUserSettings)(eB.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, l.jsx)(nP.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: iI },
        shouldShow: n,
        title: eM.intl.format(iN.default.bx8sR9, { premiumGroupProductName: (0, ij.DP)() }),
        body: eM.intl.format(iN.default.Pw4OFZ, { premiumGroupProductName: (0, ij.DP)() }),
        onRequestClose: a,
        actions: [{ text: eM.intl.string(iN.default.DD26QR), onClick: r }],
    });
}
var ib = n(873298),
    iR = n(840387);
function iM(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, iR.Z)(),
        r = nl.KP.useSetting(),
        s = a && r !== ib.KP.FRIENDS_AND_ALL_GUILDS,
        o = i.useCallback(() => {
            (t(nW.i.TAKE_ACTION), (0, eW.openUserSettings)(eB.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = i.useCallback(() => {
            t(nW.i.USER_DISMISS);
        }, [t]),
        d = s
            ? r === ib.KP.FRIENDS_ONLY
                ? eM.intl.string(eM.t["/hogEy"])
                : eM.intl.string(eM.t["6hEfm1"])
            : eM.intl.string(eM.t.bnNxW1);
    return (0, l.jsx)(nP.A, {
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
        title: eM.intl.string(eM.t.Ve4nS1),
        body: d,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eM.intl.string(eM.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var iO = n(415443);
function iw(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: r,
            onContextMenu: s,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: c,
        } = e,
        m = i.useRef(null),
        [h, p] = i.useState(!1);
    (0, iA.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            lf._.subscribe(tm.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                lf._.unsubscribe(tm.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let f = i.useCallback(() => {
            (p(!1), r());
        }, [r]),
        g = eo.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, iO.A)("1793322947891", !0);
        t =
            null != e
                ? eM.intl.formatToPlainString(eM.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : eM.intl.formatToPlainString(eM.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = eM.intl.string(eM.t.cduTBL);
    let A = eJ.SettingsIcon,
        v = (0, iv.w)();
    return (
        (A = null != a ? ix.H : v.Component),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(l9.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: f,
                    onContextMenu: s,
                    "aria-label": eM.intl.string(eM.t.cduTBL),
                    icon: (0, l.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...v.events,
                    plated: null != c,
                }),
                (0, l.jsx)(iS, { targetElementRef: m, shouldShow: h, onDismiss: () => p(!1) }),
                (0, l.jsx)(lj.Ay, {
                    contentTypes: o,
                    groupName: nW.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.TINY_BRONCO && null != le.PL
                            ? (0, l.jsx)(i.Suspense, {
                                  fallback: null,
                                  children: (0, l.jsx)(le.PL, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === d.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, l.jsx)(iM, { markAsDismissed: n, targetElementRef: m })
                              : t === d.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, l.jsx)(iT, { markAsDismissed: n, targetElementRef: m })
                                : null != g && t === g
                                  ? (0, l.jsx)(iy, { markAsDismissed: n, targetElementRef: m })
                                  : null;
                    },
                }),
            ],
        })
    );
}
var iP = n(358285);
let iL = lA.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    ik = 2.5 * L.A.Millis.SECOND,
    iD = 2 * L.A.Millis.MINUTE,
    iU = 5 * L.A.Millis.SECOND;
function iF(e) {
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
            renderNameTag: g,
            nameplate: A,
            avatarDecoration: v,
            "data-jump-section": x,
        } = e,
        C = i.useRef(null),
        _ = t ?? C,
        y = (0, lp.F_)({ avatarDecoration: v, size: (0, q.Te)(h._3.SIZE_32) }),
        j = (0, ee.A)(),
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
                (0, T.A)(() => r(!0), 750),
                i.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && l(n), e.current?.());
                    }
                    return (
                        lf._.subscribe(tm.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            lf._.unsubscribe(tm.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: l }
            );
        })(),
        b = (0, Q.K)(A);
    return null == u
        ? null
        : (0, l.jsx)(E.A, {
              object: tm.ZSU.AVATAR,
              children: (0, l.jsx)(ln.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, lt.A)(u.id, u.getAvatarURL(void 0, ln.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, l.jsx)(n7, {
                          currentUser: u,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: i,
                          className: iP.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: p.Y.Animation.FADE,
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
                          className: r()(iP.Q9, { [iP.ZQ]: null != A }),
                          children: [
                              (0, l.jsx)(f.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": eM.intl.string(eM.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: iP.$n,
                                  "data-jump-section": x,
                              }),
                              (0, l.jsx)(iL, {
                                  size: h._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: y,
                                  status: o ? tm.clD.STREAMING : d,
                                  voiceStatus: (0, h.n$)(n, a),
                                  voiceDb: s,
                                  className: iP.my,
                                  "aria-hidden": !0,
                              }),
                              (0, l.jsx)("div", { className: iP.oM, children: g(j) }),
                          ],
                      });
                  },
              }),
          });
}
class iG extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new c.Ep();
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
        ((0, W.A)(e, t, tm.JJy.ACCOUNT_PANEL), (0, z.X)(M.A.ACCOUNT, z.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, B.A)(e, tm.JJy.ACCOUNT_PANEL), (0, z.X)(M.A.ACCOUNT, z.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            lc.A.isConnected() ? (0, eW.openUserSettings)(eB.X.VOICE_AND_VIDEO_PANEL) : (0, eW.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, x.L3)(e, async () => {
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
                    (0, l.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, Z.s)("UserSettingsMenu", M.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, Z.s)("AudioDeviceMenu", M.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, ll.d)({ location: "Account" });
                    return (0, l.jsx)(O.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
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
                    (0, l.jsx)(O.f5, {
                        value: t,
                        children: (0, l.jsx)(e, {
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
                speakingWhileMuted: l,
                occluded: i,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            s =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > iD;
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
                      this.speakingWhileMutedTooltipTimeout.start(ik, () =>
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
        if ((0, y.A)({ activities: t, status: a, applicationStream: n, voiceChannel: s }))
            return (0, l.jsxs)(R.A, {
                hoverText: r,
                forceHover: e,
                children: [
                    (0, l.jsx)(g.A, { children: t9.Ay.humanizeStatus(a) }),
                    (0, l.jsx)(j.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: iP.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tm.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, l.jsxs)(R.A, {
                  hoverText: r,
                  forceHover: e,
                  children: [
                      (0, l.jsx)(g.A, { children: t9.Ay.humanizeStatus(a) }),
                      (0, l.jsx)(J.A, { activity: o, emojiClassName: iP.Zg, className: iP.WO }),
                  ],
              })
            : null != a && a !== tm.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, l.jsx)(R.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, l.jsx)(b, { text: t9.Ay.humanizeStatus(a) }),
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
                          className: iP.eW,
                          children: (0, l.jsx)(lx.A, {
                              className: r()({ [iP.e8]: null != e }),
                              children: (0, l.jsx)(en.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? et.G.ANIMATED : et.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, l.jsx)("div", {
                          className: iP.XP,
                          children: (0, l.jsx)(lv.A, { children: this.renderStatus() }),
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
            : (0, l.jsx)(l1, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: i.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, l.jsx)(iF, {
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
            : (0, l.jsx)(A.sk, {
                  children: (e) =>
                      (0, l.jsxs)("div", {
                          ref: this.containerRef,
                          className: r()(iP.kL, { [iP.UG]: null != n, [iP.bc]: !i, [iP.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, l.jsx)(X.A, { nameplate: t, hovered: s, placement: $.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, l.jsx)(iV, {
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
function iV(e) {
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
        N = (0, Q.K)(C);
    function I() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, l.jsx)(iw, {
            webBuildOverride: d,
            onClick: A,
            onContextMenu: v,
            dismissibleContents: [...x.settings, ...e],
            iconForeground: null != C ? iP.t4 : void 0,
            nameplate: C,
        });
    }
    return (0, l.jsxs)("div", {
        className: iP.Uo,
        style: N,
        children: [
            (0, l.jsx)(ig, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: c,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: f,
                iconForeground: null != C ? iP.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === T,
                dismissTooltips: y,
                speaking: j,
            }),
            (0, l.jsx)(il, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != C ? iP.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: y,
            }),
            null != le.Lf
                ? (0, l.jsx)(i.Suspense, { fallback: I(), children: (0, l.jsx)(le.Lf, { occluded: E, children: I }) })
                : I(),
        ],
    });
}
function iH(e) {
    let t = (0, u.bG)([lc.A], () => null != lc.A.getChannelId()),
        n = (0, ed.Py)(e),
        l = i.useRef(new c.Ep()),
        [a, r] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (r(!0),
            l.current.start(iU, () => {
                r(!1);
            }));
    }, [t, n]);
    let s = i.useCallback(() => {
        (r(!1), l.current.stop());
    }, []);
    return (
        (0, _.l0)(() => {
            l.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: s }
    );
}
function iB() {
    let e,
        t,
        n,
        a,
        r = (0, u.bG)([nN.default], () => nN.default.getCurrentUser()),
        s = (0, u.bG)([nH.default], () => nH.default.getId()),
        {
            activities: c,
            streaming: m,
            status: h,
        } = (0, u.cf)([nK.A], () => {
            let e = nK.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tm.$pd.STREAMING;
                    }),
                status: nK.A.getStatus(),
            };
        }),
        p = (0, u.bG)([lr.A], () => lr.A.getAnyStreamForUser(s)),
        f = (0, C.A)({ userId: s }),
        g = (0, u.bG)([n9.A], () => n9.A.isUserPlayingSounds(s)),
        A = (0, u.bG)([lh.A], () => lh.A.getVoiceVolume(s)),
        x = t9.Ay.useUserTag(r, { decoration: "never" }),
        E = (0, u.bG)([lc.A, ls.A], () => {
            let e = lc.A.getChannelId();
            return null != e ? ls.A.getChannel(e) : null;
        }),
        { mute: _, selfMute: T, suppress: y } = (0, la.A)(E),
        { selfDeaf: j, deaf: N } = (0, li.A)(E),
        I = (0, u.bG)([G.A], () => ((0, V.kK)() ? G.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        S = (0, u.bG)([ld.Ay], () => ld.Ay.getSpeakingWhileMuted()),
        b = (0, u.bG)([H.A], () => H.A.isFullscreenInContext()),
        R = (0, u.bG)([lu.A], () => lu.A.hasLayers()),
        B = (0, v.useModalsStore)(v.hasAnyModalOpenSelector) || R || lg.P.isDisallowPopupsSet() || b,
        W = (0, u.bG)([el.default], () => null != el.default.getAwaitingRemoteSessionInfo()),
        z = (0, u.bG)([lm.A], () => lm.A.getGuildId()),
        Z = r?.avatarDecoration,
        q = (0, K.A)(Z),
        Q = t9.Ay.useName(r) ?? "",
        { analyticsLocations: $ } = (0, O.Ay)(M.A.ACCOUNT),
        X = (0, Y.r)({ user: r, guildId: void 0 }),
        { isQuestBarEmpty: J } = (0, n8.c9)(),
        ee = (0, u.bG)([n4.A, nN.default, lo.A], () => {
            let e,
                t = n4.A.getSyncingWith(),
                n = n4.A.getActivity(),
                l = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (l = o()(Array.from(lo.A.getParty(e) ?? []))
                        .map((e) => nN.default.getUser(e))
                        .filter(nv.Vq)
                        .value()),
                l.length > 1
            );
        }),
        et = { avatar: [], settings: [] },
        en = (0, ni.H)({ location: "Account" }) && !B,
        ed = eu.A.useIsEligible(),
        ec = eo.A.coachmarkDismissibleContent,
        em = (0, w.d)({ location: "AccountCoachmark" }),
        eh =
            ((e = (0, u.bG)([ea.A], () => ea.A.hasLoaded(es.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, ei.HX)(d.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (a = (0, er.y)({ location: "AccountCoachmark", countGiftCardWallet: !0, canFetchPaymentSources: n })),
            n && a),
        ep = (function (e) {
            let { currentUserId: t, enabled: n, fetchCatalog: l = !0 } = e,
                a = n ? t : null,
                r = (0, u.bG)([U.Ay], () => null != a && U.Ay.hasCatalogFor(a), [a]),
                s = (0, u.bG)([U.Ay], () => null != a && U.Ay.hasCatalogFetchErrorFor(a), [a]),
                [o] = i.useState(() => new P.A(5 * L.A.Millis.SECOND, 5 * L.A.Millis.MINUTE)),
                d = i.useRef(null);
            i.useEffect(() => {
                if (null != a && l) {
                    if (r) return void o.succeed();
                    if (s) {
                        if (o.fails >= 3) return;
                        return (o.fail(() => (0, k.RS)(a, { isRetry: !0 })), () => o.cancel());
                    }
                    d.current !== a && ((d.current = a), (0, k.RS)(a));
                }
            }, [a, l, r, s, o]);
            let c = (0, u.bG)(
                    [U.Ay],
                    () => (null != a ? U.Ay.getBadges(a).filter((e) => F.sC.has(e.badge_id) && e.owned).length : 0),
                    [a],
                ),
                m = (0, u.yK)([U.Ay], () => (null != a ? (0, D.z)(U.Ay.getBadges(a)) : []), [a]),
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
        })({ currentUserId: r?.id, enabled: em }).variantProps;
    B ||
        (et.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != ep && et.avatar.push(d.M.BADGE_DIRECTORY_NUX_POPOVER),
        ed && null != ec && et.settings.push(ec),
        eh && et.settings.push(d.M.GIFT_CARDS_MARKETING_COACHMARK),
        et.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: ef, dismissTooltip: eg } = iH(l4.oh.AUDIO_INPUT),
        { shouldShowTooltip: eA, dismissTooltip: ev } = iH(l4.oh.AUDIO_OUTPUT),
        ex = i.useMemo(() => (ef ? "input" : eA ? "output" : void 0), [ef, eA]),
        eE = i.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        eg();
                        break;
                    case "output":
                        ev();
                }
            },
            [eg, ev],
        );
    return (0, l.jsx)(O.f5, {
        value: $,
        children: (0, l.jsx)(iG, {
            currentUser: r,
            username: Q,
            activities: c,
            applicationStream: p,
            voiceChannel: E,
            dismissibleContents: et,
            badgeDirectoryNuxPopoverVariant: ep,
            isOrbchievementsEnabled: en,
            userTag: x,
            occluded: B,
            selfDeaf: j,
            selfMute: T,
            serverDeaf: N,
            serverMute: _,
            speaking: f,
            playingSoundboard: g,
            voiceDb: A,
            speakingWhileMuted: S,
            status: h,
            streaming: m,
            suppress: y,
            webBuildOverride: I,
            awaitingRemote: W,
            nameplate: X,
            selectedGuildId: z,
            avatarDecoration: q,
            isQuestBarEmpty: J,
            isListenAlongVisible: ee,
            deviceChangedTooltipType: ex,
            onDismissDeviceChangedTooltip: () => eE(ex),
        }),
    });
}
