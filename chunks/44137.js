(n.d(t, { g: () => lj, A: () => ly }), n(321073));
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(435558),
    o = n.n(r),
    d = n(17928),
    c = n(554146),
    u = n(451988),
    m = n(97808),
    h = n(778712),
    f = n(922016),
    p = n(939249),
    g = n(140735),
    A = n(312138);
if (221552 == n.j) var x = n(192308);
var v = n(442433),
    E = n(820284),
    C = n(717558),
    _ = n(964486),
    I = n(220839),
    b = n(397244),
    S = n(394871),
    j = n(202091),
    T = n(866323),
    N = n(120842);
function y(e) {
    let { text: t } = e,
        n = (0, T.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: N.k,
        children: n((e, t) => (0, i.jsx)(j.animated.div, { className: N.H, style: e, children: t })),
    });
}
var R = n(29160),
    M = n(793574),
    O = n(688810),
    w = n(992526),
    k = n(682618),
    L = n(982240),
    P = n(988341),
    D = n(70283);
let U = [D.$.STREAMING, D.$.GAME_VARIETY, D.$.GAME_TIME, D.$.ACCOUNT_AGE];
var F = n(116833),
    G = n(43105),
    V = n(375708);
function H(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: V.intl.string(V.t.uwDBSq),
                  body: V.intl.formatToPlainString(V.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: V.intl.string(V.t["5GD53o"]), body: V.intl.string(V.t["2Rb7tE"]) };
    return (0, i.jsx)(G.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: F.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: V.intl.string(V.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
var B = n(470739),
    z = n(49999);
function Z(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(H, {
        ...t,
        onPrimaryAction: () => {
            (l(z.i.TAKE_ACTION), (0, B._)());
        },
        onRequestClose: () => l(z.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var W = n(521502),
    K = n(380610),
    q = n(198052),
    Y = n(18235),
    $ = n(183184),
    X = n(384059),
    J = n(480890),
    Q = n(601255),
    ee = n(562819),
    et = n(449582),
    en = n(351952),
    ei = n(88686),
    el = n(214881),
    ea = n(302223),
    es = n(248778),
    er = n(609425),
    eo = n(922301),
    ed = n(660184),
    ec = n(643501),
    eu = n(771527),
    em = n(552122),
    eh = n(74848),
    ef = n(607399),
    ep = n(707554),
    eg = n(224640),
    eA = n(305866),
    ex = n(364522),
    ev = n(22231),
    eE = n(812993),
    eC = n(935154),
    e_ = n(780338);
if (221552 != n.j) var x = n(192308);
var eI = n(980707),
    eb = n(877784),
    eS = n(26137),
    ej = n(473935),
    eT = n(765671),
    eN = n(643056),
    ey = n(176781),
    eR = n(320448),
    eM = n(834730),
    eO = n(993401),
    ew = n(211450);
function ek(e) {
    return (0, i.jsx)("div", {
        className: ew.wE,
        children: (0, i.jsx)(eI.W, {
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
            label: s,
            sublabel: r,
            trailing: o,
            renderSubmenu: d,
            ref: c,
            submenuTargetElementRef: u,
            submenuAlign: m,
        } = e,
        h = null != n,
        g = (0, eO.rE)({ action: t, onClick: n }),
        [A, v] = l.useState(!1),
        E = l.useRef(null),
        C = c ?? E,
        _ = null != d,
        I = _ && h,
        b = l.useCallback(() => {
            v(!0);
        }, []),
        S = l.useCallback(() => {
            (0, x.hasAnyModalOpen)() || v(!1);
        }, []);
    function j() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: ew.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: ew.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eM.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: ew.W1,
                                    children: s,
                                }),
                                (0, i.jsx)(eM.E, { color: "currentColor", variant: "text-xs/medium", children: r }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function T(e) {
        let t;
        return (
            (t = I
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.D, { className: ew.ef, onClick: g, children: j() }),
                          (0, i.jsx)(p.D, {
                              className: ew.ap,
                              "aria-label": V.intl.string(V.t.PdRCRg),
                              ...e,
                              onClick: b,
                              children: (0, i.jsx)(eR._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(p.D, {
                        className: ew.ef,
                        ...e,
                        onClick: b,
                        children: [
                            j(),
                            (0, i.jsx)("div", {
                                className: ew.ap,
                                children: (0, i.jsx)(eR._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(p.D, { className: ew.ef, onClick: g, children: j() })),
            (0, i.jsx)("div", { ref: C, className: ew.jG, children: t })
        );
    }
    return _
        ? (0, i.jsx)("li", {
              className: ew.j$,
              onMouseEnter: b,
              onMouseLeave: S,
              children: (0, i.jsx)(f.Y, {
                  targetElementRef: u ?? C,
                  align: m,
                  spacing: 0,
                  renderPopout: d,
                  shouldShow: A,
                  onRequestClose: S,
                  children: T,
              }),
          })
        : (0, i.jsx)("li", { className: ew.j$, children: T() });
}
function eP(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eD = n(780964),
    eU = n(766075),
    eF = n(734066),
    eG = n(915725),
    eV = n(409067),
    eH = n(271597),
    eB = n(297264),
    ez = n(475358),
    eZ = n(866665),
    eW = n(408278),
    eK = n(625903),
    eq = n(404778),
    eY = n(689175),
    e$ = n(821609),
    eX = n(532624),
    eJ = n(927813),
    eQ = n(879631),
    e0 = n(350535),
    e1 = n(974293),
    e2 = n(572164),
    e3 = n(953932),
    e5 = n(280483),
    e7 = n(890856),
    e8 = n(713517),
    e6 = n(609174),
    e4 = n(619744);
function e9(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, e6.Y_)(),
        s = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, eH.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, i.jsx)(e$.$, {
        onClick: s,
        icon: ev.PencilIcon,
        variant: n,
        size: "sm",
        text: V.intl.string(V.t.bt75uw),
        fullWidth: !0,
    });
}
var te = n(82716),
    tt = n(585579),
    tn = n(930317),
    ti = n(285072),
    tl = n(575172);
let ta = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: r } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: d } = (0, e8.A)(o),
        c = l.useCallback(() => {
            (a?.(), (0, eH.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, i.jsx)(e6.Cl, {
        clip: t,
        children: (0, i.jsx)(e7.s, {
            ref: o,
            "aria-label": V.intl.string(V.t.bt75uw),
            onClick: c,
            className: s()(tl.Z1, r),
            children: (0, i.jsxs)(tn.d, {
                isStatic: !0,
                children: [
                    n && (0, i.jsx)(eE.Lp, { className: tl.Ad, text: V.intl.string(V.t.y2b7CA) }),
                    (0, i.jsxs)(ti.h, {
                        isVisible: d,
                        className: tl.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tl.mY,
                                children: [(0, i.jsx)(te.z, {}), (0, i.jsx)(e4.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tl.E_,
                                children: [
                                    (0, i.jsx)(e9, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tt.E, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var ts = n(696016),
    tr = n(652215),
    to = n(753070),
    td = n(268378),
    tc = n(48127);
function tu(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, e5.A)();
    let r = (0, d.yK)([eG.Ay], () => Object.values(eG.Ay.getClips())),
        o = (0, d.bG)([eG.Ay], () => eG.Ay.getSettings()),
        c = (0, d.bG)([eG.Ay], () => eG.Ay.getNewClipIds()),
        u = (0, e1.aJ)("ClipsPopout"),
        m = (0, d.bG)([eG.Ay], () => eG.Ay.getEnableAutoclipping()),
        h = (0, d.bG)([eX.Ay], () => eX.Ay.getKeybindForAction(tr.hCu.SAVE_CLIP)),
        f = l.useCallback(
            (e) => {
                s?.(e);
            },
            [s],
        ),
        p = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = r.filter((e) => e.type === ts.nQ.CLIP && "" !== e.thumbnail && (!p || !(0, eV.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [r, p]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        x = g.length > 16,
        v = null != h ? e0.dI(h.shortcut, !0) : null,
        E = [
            (0, eQ.$)(o.clipsLength / eJ.A.Millis.SECOND),
            (0, to.zr)(o.clipsQuality.resolution),
            V.intl.formatToPlainString(V.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        u && E.push(V.intl.string(td.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: f,
            className: tc.SW,
            role: "dialog",
            "aria-label": V.intl.string(V.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tc.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tc.$,
                            children: [
                                (0, i.jsx)(eB.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: V.intl.string(V.t.z2jK6X),
                                }),
                                null != v && (0, i.jsx)(ez.e, { className: tc.P, shortcut: v }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tc.$s,
                            children: [
                                (0, i.jsx)(eZ.m, {
                                    text: V.intl.string(V.t["3D5yo/"]),
                                    children: (0, i.jsx)(eW.K, {
                                        onClick: () => n(),
                                        icon: eK.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": V.intl.string(V.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(eZ.m, {
                                    text: V.intl.string(td.default["55C2MH"]),
                                    children: (0, i.jsx)(eW.K, {
                                        onClick: () => t(),
                                        icon: ey.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": V.intl.string(td.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tc.ov,
                    children: [
                        E.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tc.LO, children: "\u2022" }),
                                        (0, i.jsx)(eM.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tc.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        u &&
                            (0, i.jsx)(eM.E, {
                                variant: "text-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tc.wS,
                                children: m ? V.intl.string(td.default.lTwKmt) : V.intl.string(td.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(eq.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(eY.Ch, {
                          className: tc.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(ta, { clip: e, isNew: c.includes(e.id), onClose: a }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tc.qr,
                                      children: (0, i.jsx)(e$.$, {
                                          onClick: () => t(),
                                          text: V.intl.string(td.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tm, { keybindString: v }),
            ],
        })
    );
}
function tm(e) {
    let { keybindString: t } = e,
        n = (0, e2.E)();
    return (0, i.jsxs)("div", {
        className: tc.p$,
        children: [
            (0, i.jsx)(eM.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tc.qO,
                children: V.intl.string(td.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eM.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tc.CZ,
                      children: V.intl.format(td.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eM.E,
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
                : (0, i.jsx)(e3.A, {}),
        ],
    });
}
function th(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eF.sw)(),
        s = !(0, d.bG)([eG.Ay], () => eG.Ay.getSettings().showPovClipsInGallery),
        r = (0, d.bG)(
            [eG.Ay],
            () => {
                let e = eG.Ay.getNewClipIds();
                return s
                    ? e.filter((e) => {
                          let t = eG.Ay.getClipById(e);
                          return null != t && !(0, eV.kD)(t);
                      }).length
                    : e.length;
            },
            [s],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, eH.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        c = l.useCallback(() => {
            (t(), (0, eU.openUserSettings)(eD.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, i.jsx)(eL, {
              action: "PRESS_CLIPS",
              icon: ey.x,
              label: V.intl.string(V.t.z2jK6X),
              trailing: r > 0 ? (0, i.jsx)(eE.hV, { count: r }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tu, { ...e, onOpenGallery: o, onOpenSettings: c, onClose: t }),
          })
        : null;
}
var tf = n(480335),
    tp = n(577390),
    tg = n(372320),
    tA = n(31956),
    tx = n(744808),
    tv = n(645507),
    tE = n(131607),
    tC = n(970931),
    t_ = n(315710),
    tI = n(789645),
    tb = n(775602),
    tS = n(832248),
    tj = n(462887),
    tT = n(736653),
    tN = n(439174),
    ty = n(158045),
    tR = n(19886),
    tM = n(202541);
function tO() {
    let e = (0, tR.Xb)(),
        t = (0, ty.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tM.sp.length - 1; t >= 0; t--) {
        let i = tM.VD[tM.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let tw = {
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
var tL = n(570484);
let tP = l.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tD() {
    let e = (0, d.bG)([tb.Ay], () => tb.Ay.useReducedMotion),
        t = (0, tS.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tO(),
                t = (0, tj.M)((0, tT.Ay)());
            if (null == e) return null;
            let n = tw[e],
                i = tk[e],
                l = {
                    currentBadge: (0, tN.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = tM.sp.indexOf(e);
            if (a > 0) {
                let e = tM.sp[a - 1],
                    n = tw[e];
                ((l.prevBadge = (0, tN.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [a, s] = l.useState(null);
    return (null != n && null == a && s(n), e || !t || null == a) ? null : (0, i.jsx)(tU, { levelUpData: a });
}
function tU(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        a = l.useCallback(() => {
            tS.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(t_.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: tL.i,
            children: [
                (0, i.jsx)("div", {
                    className: tL.b,
                    children: (0, i.jsx)(eZ.m, {
                        text: V.intl.string(V.t.cpT0Cq),
                        children: (0, i.jsx)(eW.K, {
                            icon: tI.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": V.intl.string(V.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(tP, { levelUpData: t }) }),
            ],
        }),
    });
}
var tF = n(397562),
    tG = n(206835),
    tV = n(183555),
    tH = n(465318),
    tB = n(999291),
    tz = n(402860),
    tZ = n(718019),
    tW = n(365607),
    tK = n(915614),
    tq = n(744753),
    tY = n(559506),
    t$ = n(646986),
    tX = n(657538),
    tJ = n(946356),
    tQ = n(465829),
    t0 = n(624479),
    t1 = n(206845),
    t2 = n(957565),
    t3 = n(427262),
    t5 = n(62119);
function t7(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, tV.NJ)();
    return t2.p5
        ? (0, i.jsx)(t1.A, {
              text: V.intl.string(V.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: t3.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(p.D, {
                      ...e,
                      className: s()(t5.c, { [t5.R]: n }),
                      "aria-label": V.intl.string(V.t.y5MwJy),
                      children: (0, i.jsx)(t0.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var t8 = n(983495),
    t6 = n(442228),
    t4 = n(885386),
    t9 = n(362862),
    ne = n(621466),
    nt = n(318254),
    nn = n(863610),
    ni = n(508770),
    nl = n(421773),
    na = n(318346),
    ns = n(923138),
    nr = n(309954),
    no = n(673125),
    nd = n(276130),
    nc = n(769001);
function nu(e) {
    let { popoutContainerRef: t, forceOpen: n, onCloseAccountPopout: a } = e;
    (0, ns.I)({ enabled: !0 });
    let { balance: r } = (0, nr.W)(),
        o = (0, d.bG)([no.Ay], () => no.Ay.clientUnreadNotificationType),
        { isHovered: c, onMouseEnter: u, onMouseLeave: m, setIsHovered: h, cancelTimers: g } = (0, nl.A)(0, 500),
        A = l.useCallback(() => {
            (0, x.hasAnyModalOpen)() || m();
        }, [m]),
        v = l.useRef(null),
        E = l.useRef(null),
        C = l.useCallback(
            (e) => {
                (E.current?.disconnect(),
                    (E.current = null),
                    null != e &&
                        ((E.current = new ResizeObserver(() => {
                            g();
                        })),
                        E.current.observe(e)));
            },
            [g],
        );
    (l.useEffect(() => () => E.current?.disconnect(), []),
        l.useEffect(() => {
            if (c)
                return (document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e));
            function e(e) {
                if ((0, x.hasAnyModalOpen)()) return;
                let t = (0, ne.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${ew.j$}`);
                null != n && n !== v.current && (g(), h(!1));
            }
        }, [c, g, h]));
    let _ = l.useRef(!1);
    l.useEffect(() => {
        c || (_.current = !1);
    }, [c]);
    let I = l.useCallback(() => {
            (_.current ||
                ((_.current = !0),
                (0, na.Y)({
                    pageType: M.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: M.A.ORB_WALLET,
                    ctaObject: M.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                u());
        }, [u]),
        b = (0, eO.rE)({ action: "PRESS_ORBS", onClick: I });
    l.useEffect(() => {
        n && u();
    }, [n, u]);
    let S = l.useMemo(
            () =>
                null != r
                    ? V.intl.format(V.t["8xDISf"], { balance: String(r) })
                    : (0, i.jsx)(nn.n, { dotRadius: 3.5, themed: !0, className: nc.K }),
            [r],
        ),
        j = l.useMemo(
            () =>
                o === no.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(ni.E, { type: "new", variant: "brand" })
                    : o === no.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(ni.E, { type: { text: V.intl.string(V.t.O13yhz) }, variant: "brand" })
                      : null,
            [o],
        ),
        T = l.useCallback(() => {
            (h(!1), a());
        }, [h, a]);
    return (0, i.jsx)("li", {
        ref: v,
        className: ew.j$,
        onMouseEnter: I,
        onMouseLeave: A,
        children: (0, i.jsx)(f.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, i.jsx)("div", {
                    ref: C,
                    onMouseEnter: u,
                    onMouseLeave: A,
                    children: (0, i.jsx)(nd.vG, { onCloseWallet: T, isProfilePopout: !0 }),
                }),
            shouldShow: c,
            onRequestClose: A,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: ew.jG,
                    children: (0, i.jsxs)(p.D, {
                        className: ew.ef,
                        ...e,
                        onClick: b,
                        children: [
                            (0, i.jsx)("div", {
                                className: ew.iA,
                                children: (0, i.jsx)(nt.C, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: ew.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eM.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: ew.W1,
                                        children: S,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(ew.ap, nc._),
                                children: [j, (0, i.jsx)(eR._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nm = n(290863),
    nh = n(351906),
    nf = n(403362),
    np = n(562153),
    ng = n(661531),
    nA = n(477782),
    nx = n(628284),
    nv = n(695366),
    nE = n(363195),
    nC = n(889227),
    n_ = n(287809),
    nI = n(174459),
    nb = n(429707),
    nS = n(274303),
    nj = n(994125),
    nT = n(347853),
    nN = n(573879),
    ny = n(559117),
    nR = n(661439),
    nM = n(385113),
    nO = n(352003),
    nw = n(429913),
    nk = n(334074),
    nL = n(633075),
    nP = n(667049),
    nD = n(280450),
    nU = n(90165),
    nF = n(518477);
function nG(e) {
    let { targetElementRef: t, onClose: a } = e,
        [s, r] = l.useState(!1),
        o = (0, d.bG)([nD.default], () => nD.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, d.yK)([nM.A], () => nM.A.getFeaturedApplicationIds());
            ((0, nO.A)(e),
                l.useEffect(() => {
                    (0, nR.X)();
                }, []));
            let t = (0, d.bG)([nD.default], () => nD.default.getId()),
                n = (0, nP.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof nL.R), [n]),
                a = (0, nw.A)(e),
                s = l.useMemo(() => a.filter(nf.Vq), [a]),
                r = (0, d.cf)([nU.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = s.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nU.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return s.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = r[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [s, i, r]),
                { eligibleToShow: u, markAsDismissed: m } = (0, nk.hj)({
                    applications: o,
                    dismissibleContent: c.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nk.SH,
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
                n.e("433400"),
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
                n.e("890516"),
                n.e("479234"),
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
                n.e("829172"),
                n.e("322497"),
                n.e("249918"),
                n.e("507140"),
                n.e("32776"),
                n.e("290608"),
                n.e("759086"),
                n.e("520641"),
                n.e("148758"),
                n.e("36026"),
                n.e("294387"),
                n.e("119766"),
                n.e("589154"),
                n.e("679157"),
                n.e("1955"),
                n.e("341161"),
                n.e("401696"),
                n.e("202985"),
                n.e("455021"),
                n.e("812196"),
                n.e("661630"),
                n.e("470126"),
                n.e("227853"),
                n.e("286615"),
                n.e("70866"),
                n.e("311541"),
                n.e("472847"),
                n.e("986735"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("405763"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("279774"),
                n.e("307158"),
                n.e("410470"),
                n.e("295570"),
                n.e("765208"),
                n.e("711562"),
                n.e("906470"),
                n.e("661157"),
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
                n.e("548938"),
                n.e("258407"),
                n.e("894292"),
                n.e("153302"),
                n.e("836576"),
                n.e("661779"),
                n.e("923981"),
                n.e("750370"),
                n.e("686809"),
                n.e("636909"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
                n.e("387970"),
                n.e("847445"),
                n.e("919659"),
                n.e("698136"),
                n.e("718368"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("38012"),
                n.e("377109"),
                n.e("74886"),
                n.e("713273"),
                n.e("376053"),
                n.e("491760"),
                n.e("972006"),
                n.e("974051"),
                n.e("323589"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("127962"),
                n.e("76428"),
                n.e("77473"),
                n.e("863232"),
                n.e("364827"),
                n.e("25279"),
                n.e("907167"),
                n.e("517888"),
                n.e("784569"),
                n.e("811133"),
                n.e("861060"),
                n.e("959880"),
                n.e("174016"),
                n.e("910471"),
                n.e("11301"),
                n.e("952372"),
                n.e("262156"),
                n.e("960235"),
                n.e("425412"),
                n.e("77333"),
                n.e("910486"),
                n.e("56366"),
                n.e("147662"),
                n.e("265607"),
                n.e("331988"),
                n.e("544571"),
                n.e("40291"),
                n.e("402368"),
                n.e("733115"),
                n.e("397270"),
                n.e("834552"),
                n.e("190779"),
                n.e("373122"),
                n.e("217951"),
                n.e("221856"),
                n.e("293159"),
                n.e("755936"),
                n.e("172503"),
                n.e("760586"),
                n.e("833703"),
                n.e("256274"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("793716"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("171202"),
                n.e("346802"),
                n.e("576909"),
                n.e("406174"),
                n.e("715555"),
                n.e("708757"),
                n.e("993103"),
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
                n.e("88599"),
                n.e("95340"),
                n.e("171273"),
                n.e("437065"),
                n.e("709640"),
                n.e("952548"),
                n.e("229787"),
                n.e("979483"),
                n.e("553984"),
                n.e("943780"),
                n.e("884601"),
                n.e("782969"),
                n.e("817905"),
                n.e("375767"),
                n.e("981004"),
                n.e("428967"),
                n.e("342922"),
                n.e("859546"),
                n.e("608032"),
                n.e("477970"),
                n.e("523276"),
                n.e("386317"),
                n.e("729963"),
                n.e("812042"),
                n.e("102328"),
                n.e("830938"),
                n.e("563983"),
                n.e("821924"),
                n.e("147864"),
                n.e("50097"),
                n.e("728748"),
                n.e("252229"),
                n.e("93461"),
                n.e("36877"),
                n.e("203930"),
                n.e("903663"),
                n.e("604172"),
                n.e("489523"),
                n.e("829260"),
                n.e("327198"),
                n.e("504098"),
                n.e("983168"),
                n.e("582486"),
                n.e("134504"),
                n.e("280098"),
                n.e("908608"),
                n.e("741786"),
                n.e("704374"),
                n.e("553683"),
                n.e("723934"),
                n.e("571294"),
                n.e("967293"),
                n.e("186546"),
                n.e("247339"),
                n.e("347430"),
                n.e("342090"),
                n.e("736637"),
                n.e("443256"),
                n.e("182816"),
                n.e("819119"),
                n.e("373566"),
                n.e("722093"),
                n.e("646038"),
                n.e("286470"),
                n.e("653308"),
                n.e("754876"),
                n.e("414501"),
                n.e("64500"),
                n.e("486825"),
                n.e("23398"),
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
        : (0, i.jsx)(G.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/06b7b29c0f2eac5ce71823e813f9989b2a53aba0998090a4fa1d0ab6241127a9.svg",
              },
              title: V.intl.string(V.t.HMWL9c),
              body: V.intl.string(V.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      z.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: V.intl.string(V.t.VSLDly),
                      loading: s,
                      onClick: function () {
                          (r(!0),
                              (0, tz.openUserProfileModal)({ userId: o, tabSection: nF.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      ((0, x.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("376053"),
                                                  n.e("491760"),
                                                  n.e("487697"),
                                                  n.e("504098"),
                                                  n.e("723934"),
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
                                              z.i.TAKE_ACTION,
                                          ),
                                          a());
                                  })
                                  .finally(() => r(!1)));
                      },
                  },
              ],
          });
}
var nV = n(461213),
    nH = n(818348),
    nB = n(709516);
function nz() {
    let e = (0, d.bG)([nV.A], () => nV.A.getStatus()),
        t = (0, t3.MU)(e) ?? "",
        n = e === nH.cl.INVISIBLE || e === nH.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: nB.k,
        children: [
            (0, i.jsxs)(g.A, { tag: "div", children: [V.intl.string(V.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(eZ.m, {
                    text: V.intl.string(V.t.L99HQm),
                    children: (0, i.jsx)(nv.E, {
                        size: "xs",
                        color: ng.A.colors.STATUS_WARNING,
                        "aria-label": V.intl.string(V.t.L99HQm),
                    }),
                }),
        ],
    });
}
var nZ = n(146901),
    nW = n(827827);
let nK = [
        { duration: 15 * eJ.A.Millis.MINUTE, label: () => V.intl.string(V.t["8ot6gv"]) },
        { duration: eJ.A.Millis.HOUR, label: () => V.intl.string(V.t.UMWBZr) },
        { duration: 8 * eJ.A.Millis.HOUR, label: () => V.intl.string(V.t.EpAXPC) },
        { duration: eJ.A.Millis.DAY, label: () => V.intl.string(V.t["755t4q"]) },
        { duration: 3 * eJ.A.Millis.DAY, label: () => V.intl.string(V.t["f3/1ch"]) },
        { duration: void 0, label: () => V.intl.string(V.t["46dqJY"]) },
    ],
    nq = "forever";
function nY(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== tr.clD.ONLINE,
        s = (0, i.jsx)(i.Fragment, {
            children: nK.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    nA.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, nW.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? nq,
                );
            }),
        });
    return (0, i.jsx)(nA.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, t3.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eC.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, nW.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? s : void 0,
    });
}
function n$(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nZ._)(e);
    return "today" === t
        ? V.intl.formatToPlainString(V.t.ZxxHIO, { timeString: i })
        : V.intl.formatToPlainString(V.t["9OFjSe"], { dateString: n, timeString: i });
}
var nX = n(996988),
    nJ = n(207634),
    nQ = n(47453);
function n0(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: r, openedAt: o, className: u } = e,
        f = __OVERLAY__,
        p = (0, tB.Ay)(t.id, void 0),
        { analyticsLocations: A } = (0, O.Ay)(M.A.USER_PROFILE_ACCOUNT_POPOUT),
        v = (0, tV.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, tF.A)(A, p, nF.R7.ACCOUNT_POPOUT);
    let { ref: E } = (0, eT.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, e8.A)(E);
    (l.useEffect(() => {
        a?.(E.current);
    }, [E, a]),
        l.useEffect(
            () => (
                tS.A.setState({ isOpen: !0 }),
                () => tS.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldOpenOrbsWallet: !1 })
            ),
            [],
        ));
    let I = (0, d.bG)([nm.A], () => nm.A.getStatus(t.id)),
        b = n$(t4.CY.useSetting()),
        S = (0, d.bG)([nh.A], () => nh.A.hidePersonalInformation),
        j = (0, tC.kB)(),
        T = t4.Q_.useSetting(),
        N = (function (e) {
            let t = t4.CY.useSetting(),
                n = (0, tC.kB)(),
                l = t4.Jr.useSetting();
            function a(i) {
                let l = n$(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case tr.clD.DND:
                        return n ? V.intl.string(V.t.day5A6) : V.intl.string(V.t["tq/fMK"]);
                    case tr.clD.INVISIBLE:
                        return V.intl.string(V.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let s = (0, i.jsx)(i.Fragment, {
                    children: nK.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            nA.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tC.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? nq,
                        );
                    }),
                }),
                r = nY({ status: tr.clD.ONLINE, currentStatus: e }),
                o = nY({ status: tr.clD.IDLE, currentStatus: e, description: a(tr.clD.IDLE) }),
                d = nY({ status: tr.clD.DND, currentStatus: e, description: a(tr.clD.DND) }),
                c = nY({ status: tr.clD.INVISIBLE, currentStatus: e, description: a(tr.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    r,
                    (0, i.jsx)(nA.bX, {}, "menu-separator-statuses"),
                    o,
                    d,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(nA.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      nA.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: V.intl.string(V.t.gJRnwK),
                                          iconLeft: e_.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: e_.BellSlashIcon },
                                          badge: { text: V.intl.string(V.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? V.intl.format(V.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            V.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : V.intl.string(V.t["Br1q+x"]),
                                          action: () => {
                                              (0, tC.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: s,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            });
        })(I),
        y = (function (e) {
            let t = (0, d.bG)([n_.default], () => n_.default.getCurrentUser()),
                n = (0, d.bG)([nh.A], () => nh.A.hidePersonalInformation),
                l = (0, d.bG)([nE.A], () => (0, tj.M)(nE.A.theme)),
                { multiAccountUsers: a } = (0, nj.K)(),
                s = a.map((a) => {
                    let s = new nC.A(a),
                        r = s.id === t?.id,
                        o = a.tokenStatus === nS.U.INVALID,
                        d = n ? null : `#${s.discriminator}`;
                    return (0, i.jsx)(
                        nA.Dr,
                        {
                            id: s.id,
                            focusedClassName: ny.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: ny.ci,
                                    children: [
                                        (0, i.jsx)(m.eu, {
                                            src: s.getAvatarURL(void 0, 40),
                                            size: h._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: ny.DD,
                                            children: [
                                                (0, i.jsx)(eM.E, {
                                                    className: ny.gE,
                                                    variant: "text-sm/normal",
                                                    children: t3.Ay.getUserTag(s, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !s.hasUniqueUsername() &&
                                                    (0, i.jsx)(eM.E, {
                                                        className: ny.df,
                                                        variant: "text-sm/normal",
                                                        children: d,
                                                    }),
                                            ],
                                        }),
                                        r &&
                                            (0, i.jsx)(nx.y, {
                                                size: "sm",
                                                color: t
                                                    ? ng.A.unsafe_rawColors.WHITE.css
                                                    : ng.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? ng.A.unsafe_rawColors.BRAND_500.css
                                                        : ng.A.unsafe_rawColors.WHITE.css,
                                                className: ny.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nv.E, {
                                                color: ng.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? ng.A.unsafe_rawColors.BRAND_500.css
                                                        : ng.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: ny.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nT.A)();
                                else {
                                    var n;
                                    (n = s.id) !== t?.id &&
                                        (nI.default.track(tr.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tr.JJy.USER_PROFILE },
                                        }),
                                        nb.Mx(n, void 0, nN.WX.MULTI_ACCOUNT_MENU));
                                }
                            },
                        },
                        s.id,
                    );
                });
            return (
                s.push(
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(nA.bX, {}),
                            (0, i.jsx)(nA.Dr, {
                                id: "manage-accounts",
                                label: V.intl.string(V.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nT.A)());
                                },
                            }),
                        ],
                    }),
                ),
                s
            );
        })(n),
        R = (0, tG.A)({ analyticsLocations: A }),
        k = (0, ty.TW)(t),
        L = (0, w.J)({ location: "UserProfileAccountPopout" }),
        P = (0, eN.d)({ location: "UserProfileAccountPopout" }),
        D = l.useRef(null),
        U = l.useRef(null),
        F = (0, tg.A)(p?.profileFrame?.skuId),
        G = (0, tp.A)(p?.profileFrame?.skuId);
    (0, tA.A)({ skuId: p?.profileFrame?.skuId, openedAt: o, context: v, analyticsLocations: A });
    let H = l.useRef((0, tS.A)((e) => e.shouldRenderTenureLevelUp)),
        Z = l.useMemo(() => (0, tv.A)(), []),
        [W, K] = l.useState(() => tS.A.getState().shouldRenderTenureLevelUp);
    function q(e) {
        (n?.(), (0, tz.openUserProfileModal)({ customStatusPrompt: Z, sourceAnalyticsLocations: A, ...v, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            K(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Y = p?.widgets != null && p.widgets.length > 0,
        $ = l.useCallback(() => {
            n();
        }, [n]),
        X = l.useCallback(() => {
            (R(), $());
        }, [R, $]),
        J = (0, es.ux)("UserProfileAccountPopout"),
        Q = tH.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        ee = (0, t9.H)({ location: "UserProfileAccountPopout" }),
        et = (0, tS.A)((e) => e.shouldOpenOrbsWallet),
        [en, ei] = (0, tE.kn)(
            [
                J ? c.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
                Q ? c.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nf.Vq),
            void 0,
            !0,
        ),
        el = l.useId();
    return (0, i.jsx)(O.f5, {
        value: A,
        children: (0, i.jsx)(tV.of, {
            value: v,
            openedAt: o,
            fetchStartedAt: p?.fetchStartedAt,
            fetchEndedAt: p?.fetchEndedAt,
            isLoaded: p?.isLoaded,
            children: (0, i.jsxs)(eA.l, {
                ref: E,
                "aria-labelledby": el,
                className: s()(ew.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(g.A, { children: (0, i.jsx)(ep.H, { id: el, children: V.intl.string(V.t["5fWB8U"]) }) }),
                    (0, i.jsxs)(ep.F, {
                        children: [
                            (0, i.jsxs)(tJ.A, {
                                className: ew.BK,
                                user: t,
                                displayProfile: p,
                                themeType: nX.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nQ.wx,
                                        children: [
                                            (0, i.jsx)(tK.A, { user: t, displayProfile: p, themeType: nX.d.POPOUT }),
                                            (0, i.jsx)(tZ.A, {
                                                user: t,
                                                displayProfile: p,
                                                avatarSize: nJ.T[nX.d.POPOUT].avatarSize,
                                                onOpenProfile: f ? void 0 : q,
                                            }),
                                            (0, i.jsx)(t8.A, {
                                                ref: D,
                                                user: t,
                                                themeType: nX.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: Z,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(ex.Ip, {
                                        className: ew.rf,
                                        style: { pointerEvents: W ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(tY.A, { userId: t.id }),
                                            (0, i.jsx)(tQ.Ay, {
                                                className: ew.eF,
                                                user: t,
                                                displayName: np.Ay.getName(void 0, null, t),
                                                onClickName: f ? void 0 : q,
                                                displayNameTrailing: (0, i.jsx)(t7, { user: t, isVisible: C }),
                                                pronouns: p?.pronouns,
                                                trailing: (0, i.jsx)(tW.A, {
                                                    displayProfile: p,
                                                    themeType: nX.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != r ? (e) => e === r : void 0,
                                                    shouldGlowTenureBadge: H.current,
                                                }),
                                            }),
                                            (0, i.jsx)(tq.A, { isPremiumUser: k, onInteraction: n }),
                                            (0, i.jsx)(t6.A, {
                                                userId: t.id,
                                                userBio: p?.bio,
                                                hidePersonalInformation: S,
                                                onClose: n,
                                            }),
                                            Y &&
                                                (0, i.jsx)(tX.A, {
                                                    user: t,
                                                    widgets: p?.widgets,
                                                    onOpenUserProfileModal: q,
                                                }),
                                            (0, i.jsx)(t$.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: q,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: ew.T_,
                                                children: [
                                                    (0, i.jsx)(tJ.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, i.jsxs)(eP, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: V.intl.string(V.t.s5vZlQ),
                                                                    icon: ev.PencilIcon,
                                                                    trailing:
                                                                        null != en
                                                                            ? (0, i.jsx)(eE.Lp, {
                                                                                  text: V.intl.string(V.t.y2b7CA),
                                                                                  "aria-hidden": !0,
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (en ===
                                                                            c.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            ei(z.i.TAKE_ACTION),
                                                                            X());
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(nz, {}),
                                                                    sublabel: null != b && b,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eC.nW, { status: I, size: 12 }),
                                                                    trailing:
                                                                        (j || I === tr.clD.DND) &&
                                                                        (0, i.jsx)(e_.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: ef.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(ek, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: ew.hQ,
                                                                                  "aria-label": V.intl.string(
                                                                                      V.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: N,
                                                                              });
                                                                          },
                                                                    onClick: ef.Fr
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
                                                                                                  return (0, i.jsx)(
                                                                                                      eg.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              V.intl.string(
                                                                                                                  V.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eI.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  V.intl.string(
                                                                                                                      V
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
                                                                                                                  N,
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
                                                                    (0, i.jsx)(eL, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: eb.q,
                                                                        label: V.intl.string(V.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, B._)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(th, { onClose: n, popoutContainerRef: E }),
                                                                ee &&
                                                                    (0, i.jsx)(nu, {
                                                                        popoutContainerRef: E,
                                                                        forceOpen: et,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(tJ.A.Overlay, {
                                                        className: ew.g0,
                                                        children: (0, i.jsxs)(eP, {
                                                            children: [
                                                                (0, i.jsx)(eL, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eS.r,
                                                                    label: V.intl.string(V.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nT.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(ek, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": V.intl.string(V.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: y,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    t2.p5 &&
                                                                    T &&
                                                                    (0, i.jsx)(eL, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: ej.L,
                                                                        label: V.intl.string(V.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, t2.C)(t.id), n());
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
                                        (0, i.jsx)(tf.A, { skuId: p.profileEffect.skuId, isHovering: _ }),
                                    null != F && (0, i.jsx)(tx.A, { frame: F, fadeIn: G }),
                                ],
                            }),
                            (0, i.jsx)(nG, { targetElementRef: U, onClose: n }),
                            (0, i.jsx)(tD, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var n1 = n(201805),
    n2 = n(655116),
    n3 = n(438140),
    n5 = n(106531),
    n7 = n(454719),
    n8 = n(342296),
    n6 = n(852712),
    n4 = n(389960),
    n9 = n(173660),
    ie = n(616356),
    it = n(734057),
    ii = n(629016),
    il = n(186111),
    ia = n(25578),
    is = n(763827),
    ir = n(967198),
    io = n(485296),
    id = n(486020),
    ic = n(625494),
    iu = n(536194),
    im = n(19575),
    ih = n(994314),
    ip = n(485599),
    ig = n(206248);
function iA(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: s = !0, children: r } = e,
        o = (0, eF.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            s && o
                ? (0, i.jsx)(ig.H, {
                      targetElementRef: t,
                      title: V.intl.string(td.default.Qn21R6),
                      body: V.intl.string(td.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: V.intl.string(V.t.RzWDqY),
                          onClick: function () {
                              (n(z.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(z.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var ix = n(379848),
    iv = n(626584),
    iE = n(757036),
    iC = n(591179),
    i_ = n(531685),
    iI = n(259065),
    ib = n(701974);
let iS = new iv.A("DisplayNameStylesFlywheelCoachmark");
function ij(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: s } = (0, O.Ay)(),
        r = (0, l.useRef)(null),
        o = (0, d.bG)([i_.A], () => i_.A.isFocused()),
        c = (0, iE.L)(tM.PremiumTypes.TIER_2),
        u = (0, iC.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, l.useCallback)(() => {
            t(z.i.TAKE_ACTION);
            let e = n_.default.getCurrentUser();
            u && null != e
                ? (0, tz.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: s,
                      onModalOpen: () => {
                          (0, iI.L)({ analyticsLocations: s, stackingBehavior: "stack" });
                      },
                  })
                : (0, eU.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
                      (0, iI.L)({ analyticsLocations: s });
                  });
        }, [t, s, u]),
        h = (0, l.useCallback)(() => {
            t(z.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && r.current?.paused ? r.current?.play().catch(iS.error) : o || r.current?.pause();
    }, [o]);
    let f = c ? [V.intl.string(ib.default.TyUdka)] : [V.intl.string(ib.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(G.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                    type: "video",
                    ref: r,
                    src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
                    aspectRatio: "21/9",
                    loop: !0,
                },
                size: "lg",
                title: V.intl.string(ib.default.cYwrp8),
                body: f,
                actions: [{ text: V.intl.string(V.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var iT = n(45780),
    iN = n(696451),
    iy = n(71393),
    iR = n(685073),
    iM = n(228366);
let iO = { lastSeenInfos: {} },
    iw = iO;
class ik extends d.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        iw = e ?? iO;
    }
    getState() {
        return iw;
    }
    getGuildLastSeenInfo(e) {
        return iw.lastSeenInfos[e] ?? null;
    }
}
let iL = new ik(iM.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        iw.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        iw = iO;
    },
});
var iP = n(514661);
let iD = new iv.A("GuildTagAvailableCoachmark");
function iU(e) {
    let t = (0, d.bG)([iy.A], () => iy.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            iM.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, iP.A)(t?.id ?? null, () => n(z.i.TAKE_ACTION));
    if (null == t || !(0, iR.q0)(t))
        return (iD.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let r = [
        { text: V.intl.string(V.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: V.intl.string(V.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(G.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: F.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: V.intl.formatToPlainString(V.t["m/Tc3n"], { guildName: t.name }),
                body: V.intl.string(V.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(z.i.USER_DISMISS),
            }),
        ],
    });
}
function iF(e) {
    let t = (0, d.bG)([iy.A], () => iy.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: s } = (0, iP.A)(t?.id ?? null, () => n(z.i.TAKE_ACTION));
    if (null == t || !(0, iR.q0)(t))
        return (iD.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let r = [
        { text: V.intl.string(V.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: V.intl.string(V.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(G.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: F.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: V.intl.formatToPlainString(V.t.VFqnyU, { guildName: t.name }),
                body: V.intl.string(V.t.DrAXIr),
                actions: r,
                size: "md",
                onRequestClose: () => n(z.i.USER_DISMISS),
            }),
        ],
    });
}
var iG = n(843010),
    iV = n(764231),
    iH = n(425713);
function iB(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = tO(),
        a = (0, d.bG)([tb.Ay], () => tb.Ay.useReducedMotion),
        s = (0, tS.A)((e) => e.isOpen),
        r = (0, iG.G)();
    return a || null == l || s || r
        ? null
        : (0, i.jsx)(ix.zJ, {
              contentType: c.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(iz, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === c.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function iz(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: s } = e,
        r = tM.sp.indexOf(t),
        o = (0, iH.I)(tM.sp[r > 0 ? r - 1 : r]).ambient,
        d = (0, l.useCallback)(() => {
            (n(z.i.TAKE_ACTION),
                tS.A.setState({ shouldRenderTenureLevelUp: !0 }),
                ic._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(z.i.USER_DISMISS);
        }, [n]),
        u = tM.VD[t],
        m = V.intl.formatToPlainString(V.t.ewkaVR, {
            timeMilestone: (0, iV.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: V.intl.string(V.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(G.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: s,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: V.intl.string(V.t.VoDxsV),
        body: m,
        actions: h,
    });
}
var iZ = n(764014);
function iW(e) {
    let { targetElementRef: t } = e,
        n = (0, tS.A)((e) => e.isOpen),
        [l, a] = (0, tE.kn)(n ? [] : [c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], z.m.ACCOUNT_NAME_ZONE, !0);
    return l === c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(G.A, {
              targetElementRef: t,
              graphic: { type: "image", src: iZ.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: V.intl.string(V.t["Q+dH5r"]),
              body: V.intl.string(V.t.YKJw4W),
              onRequestClose: () => a(z.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.dcOuei),
                      onClick: function () {
                          (a(z.i.TAKE_ACTION),
                              tS.A.setState({ shouldOpenOrbsWallet: !0 }),
                              ic._.dispatch(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function iK(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n1.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, s] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iT.G$)(c.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tr.dJq),
                l = (0, d.bG)(
                    [iy.A, n_.default, iN.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = iy.A.getGuild(e);
                        if (void 0 === t || !(0, iR.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = n_.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = iN.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tE.ww)(l && n && !i ? [c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tr.eGj);
        })(e.guildId, { shouldShow: l }),
        [r, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, d.bG)([iL], () => (null === l ? null : iL.getGuildLastSeenInfo(l))),
                s = (0, d.bG)([iy.A], () => iy.A.getGuild(l)?.profile?.tag),
                r = null != s && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === s,
                u = null !== l && r && !o;
            return (0, tE.Wl)(u && n ? c.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(iF, {
                  guildId: e.guildId,
                  onDismiss: s,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : r === c.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(iU, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iB, { groupName: z.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(iW, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(ix.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: z.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(ij, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case c.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iA, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: eH.p,
                                            children: e.children,
                                        });
                                    case c.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(Z, {
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
var iq = n(615675),
    iY = n(900797),
    i$ = n(847374),
    iX = n(348858),
    iJ = n(617354),
    iQ = n(829773),
    i0 = n(42473),
    i1 = n(731854),
    i2 = n(516171),
    i3 = n(577755);
function i5(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: r,
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
        } = (0, iX.I)(m ? "undeafen" : "deafen"),
        x = n ? iq.T : h,
        { name: v } = (0, eh.x5)(i1.oh.AUDIO_OUTPUT),
        E = (0, iJ.A)(t, n, a),
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
                                onInteraction: (0, J.s)("AudioDeviceMenu", M.A.ACCOUNT),
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
                        className: s()(i2.Lh, { [i2.v8]: m, [i2.q6]: u }),
                        children: [
                            (0, i.jsx)(i0.A, {
                                "aria-checked": m,
                                "aria-label": V.intl.string(V.t.wjcRFX),
                                className: i2.eT,
                                disabled: a,
                                icon: (0, i.jsx)(x, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? ng.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? i3.o : void 0,
                                innerClassName: s()({ [i3.T]: n }),
                                onClick: r,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != d,
                                redGlow: m,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, i.jsx)(i0.A, {
                                className: s()(i2.UT, { [i2.q6]: u }),
                                disabled: a,
                                icon: (0, i.jsx)(h, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? ng.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != d,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? V.intl.formatToPlainString(V.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? V.intl.format(V.t["f+DDY/"], { outputDeviceName: v })
                                    : V.intl.string(V.t.aA4Vce),
                                "aria-label": c
                                    ? V.intl.formatToPlainString(V.t["f+DDY/"], { outputDeviceName: v })
                                    : V.intl.string(V.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var i7 = n(666654),
    i8 = n(523875),
    i6 = n(993719);
let i4 = {};
class i9 extends d.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return i4[e] ?? !1;
    }
}
let le = new i9(iM.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        i4[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        i4[t] = !1;
    },
});
var lt = n(362823),
    ln = n(980923),
    li = n(573549),
    ll = n(222176),
    la = n(973324);
function ls(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: r,
            awaitingRemote: o,
            iconForeground: c,
            onMouseEnter: u,
            onMouseLeave: m,
            onClick: h,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: E,
            speaking: C,
        } = e,
        _ = (0, d.bG)([ia.Ay], () => ia.Ay.getMode() === i1.TB.PUSH_TO_TALK),
        I = (0, d.bG)([ia.Ay], () => ia.Ay.getSettings().modeOptions.shortcut),
        b = (0, d.bG)([le], () => le.getIsTutorialActive(lt.v.MUTE_TUTORIAL)),
        S = (0, d.bG)([is.A], () => null != is.A.getChannelId()),
        { name: j } = (0, eh.x5)(i1.oh.AUDIO_INPUT),
        { enabledInputProfiles: T } = (0, n6.d)({ location: "MicrophoneButton" }),
        N = l.useRef(null),
        y = n || r || a,
        R = (0, i8.L)(y ? "unmute" : "mute"),
        { analyticsLocations: w } = (0, O.Ay)(M.A.AUDIO_INPUT_BUTTON),
        { Component: k, events: L, play: P } = R,
        D = a || r ? i7.O : k;
    l.useEffect(() => () => P(), [y, P]);
    let U = (0, ln.A)(n, a, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: V.intl.string(V.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: V.intl.format(V.t.c1qUOQ, { keybind: e0.dI(I).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let F = _ && S,
        H = y ? ng.A.colors.ICON_VOICE_MUTED : "currentColor",
        B = l.useCallback(() => {
            (h(), b && i6.N(lt.v.MUTE_TUTORIAL));
        }, [h, b]);
    return (0, i.jsxs)(O.f5, {
        value: w,
        children: [
            (0, i.jsx)(f.Y, {
                targetElementRef: N,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, i.jsx)(O.f5, {
                            value: w,
                            children: (0, i.jsx)(iQ.A, {
                                onInteraction: (0, J.s)("AudioDeviceMenu", M.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: T.length > 0,
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
                        r = a ? iY.t : i$.a;
                    return (0, i.jsxs)("div", {
                        ref: N,
                        className: s()(i2.Lh, { [i2.v8]: y, [i2.q6]: a }),
                        children: [
                            (0, i.jsx)(i0.A, {
                                "aria-checked": y,
                                "aria-label": V.intl.string(V.t.w4m945),
                                className: i2.eT,
                                disabled: o,
                                icon: (0, i.jsx)(D, { size: "custom", width: 20, height: 20, color: H, className: c }),
                                onClick: B,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    (u(), L.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), L.onMouseLeave());
                                },
                                plated: null != p,
                                redGlow: y,
                                role: "switch",
                                ...t,
                                children: F ? (0, i.jsx)("div", { className: s()(ll.U, { [ll.z]: C }) }) : null,
                            }),
                            (0, i.jsx)(i0.A, {
                                "aria-label": x
                                    ? V.intl.formatToPlainString(V.t["18wnuD"], { inputDeviceName: j })
                                    : V.intl.string(V.t.fRzCbB),
                                className: s()(i2.UT, { [i2.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(r, {
                                    className: i2.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: H,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: u,
                                onMouseLeave: m,
                                plated: null != p,
                                redGlow: y,
                                tooltipType: x ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: x,
                                tooltipPositionKey: x
                                    ? V.intl.formatToPlainString(V.t["18wnuD"], { inputDeviceName: j })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: x
                                    ? V.intl.format(V.t["18wnuD"], { inputDeviceName: j })
                                    : V.intl.string(V.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(G.A, {
                targetElementRef: N,
                shouldShow: b,
                graphic: { type: "image", src: la.A },
                onRequestClose: () => {
                    i6.N(lt.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: V.intl.string(li.default.VG4zAf),
                body: V.intl.string(li.default["8VIRzR"]),
            }),
        ],
    });
}
var lr = n(935399),
    lo = n(505312),
    ld = n(848847);
function lc(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, O.Ay)(M.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(G.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: V.intl.string(V.t.Mjs8KR),
        body: V.intl.string(V.t.U0INks),
        actions: [
            {
                text: V.intl.string(V.t.NENZhS),
                onClick: () => {
                    ((0, eU.openUserSettings)(eD.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(z.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(z.i.USER_DISMISS),
    });
}
var lu = n(88001),
    lm = n(148155),
    lh = n(438705);
function lf(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        s = l.useCallback(() => {
            (a(), (0, eU.openUserSettings)(eD.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, i.jsx)(G.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lh },
        shouldShow: n,
        title: V.intl.format(lm.default.bx8sR9, { premiumGroupProductName: (0, lu.DP)() }),
        body: V.intl.format(lm.default.Pw4OFZ, { premiumGroupProductName: (0, lu.DP)() }),
        onRequestClose: a,
        actions: [{ text: V.intl.string(lm.default.DD26QR), onClick: s }],
    });
}
var lp = n(873298),
    lg = n(840387);
function lA(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, lg.Z)(),
        s = t4.KP.useSetting(),
        r = a && s !== lp.KP.FRIENDS_AND_ALL_GUILDS,
        o = (0, l.useCallback)(() => {
            (t(z.i.TAKE_ACTION), (0, eU.openUserSettings)(eD.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        d = (0, l.useCallback)(() => {
            t(z.i.USER_DISMISS);
        }, [t]),
        c = r
            ? s === lp.KP.FRIENDS_ONLY
                ? V.intl.string(V.t["/hogEy"])
                : V.intl.string(V.t["6hEfm1"])
            : V.intl.string(V.t.bnNxW1);
    return (0, i.jsx)(G.A, {
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
        title: V.intl.string(V.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: V.intl.string(V.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var lx = n(415443);
function lv(e) {
    let t,
        n,
        {
            webBuildOverride: a,
            onClick: s,
            onContextMenu: r,
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
            ic._.subscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                ic._.unsubscribe(tr.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = l.useCallback(() => {
            (f(!1), s());
        }, [s]),
        g = eu.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, lx.A)("1790264774756", !0);
        t =
            null != e
                ? V.intl.formatToPlainString(V.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : V.intl.formatToPlainString(V.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = V.intl.string(V.t.cduTBL);
    let A = eK.SettingsIcon,
        x = (0, lo.w)();
    return (
        (A = null != a ? ld.H : x.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(i0.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: r,
                    "aria-label": V.intl.string(V.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...x.events,
                    plated: null != u,
                }),
                (0, i.jsx)(lf, { targetElementRef: m, shouldShow: h, onDismiss: () => f(!1) }),
                (0, i.jsx)(ix.Ay, {
                    contentTypes: o,
                    groupName: z.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === c.M.TINY_BRONCO && null != n3.PL
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(n3.PL, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === c.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(lA, { markAsDismissed: n, targetElementRef: m })
                              : null != g && t === g
                                ? (0, i.jsx)(lc, { markAsDismissed: n, targetElementRef: m })
                                : null;
                    },
                }),
            ],
        })
    );
}
var lE = n(358285);
let lC = im.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    l_ = 2.5 * eJ.A.Millis.SECOND,
    lI = 2 * eJ.A.Millis.MINUTE,
    lb = 5 * eJ.A.Millis.SECOND;
function lS(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: a = -1 / 0,
            streaming: r,
            currentUser: o,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: m,
            nameplate: g,
            avatarDecoration: A,
            "data-jump-section": x,
        } = e,
        v = l.useRef(null),
        C = t ?? v,
        _ = (0, id.F_)({ avatarDecoration: A, size: (0, ee.Te)(h._3.SIZE_32) }),
        b = (0, er.A)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: j,
            setHighlightBadge: T,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, i] = l.useState(),
                [a, s] = l.useState(!1);
            return (
                (0, I.A)(() => s(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        ic._.subscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ic._.unsubscribe(tr.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        N = (0, en.K)(g);
    return null == o
        ? null
        : (0, i.jsx)(E.A, {
              object: tr.ZSU.AVATAR,
              children: (0, i.jsx)(n8.A, {
                  user: o,
                  targetElementRef: C,
                  clickTrap: !0,
                  preload: () =>
                      (0, n7.A)(o.id, o.getAvatarURL(void 0, n8.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(n0, {
                          currentUser: o,
                          highlightBadge: j,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: lE.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: f.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (u(), T(void 0));
                  },
                  children: (e) => {
                      S(e);
                      let { onMouseEnter: t, onMouseDown: l, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: C,
                          style: N,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              (e.onClick?.(t), c?.(t));
                          },
                          className: s()(lE.Q9, { [lE.ZQ]: null != g }),
                          children: [
                              (0, i.jsx)(p.D, {
                                  ...u,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": V.intl.string(V.t["5fWB8U"]),
                                  focusProps: { ringTarget: C },
                                  className: lE.$n,
                                  "data-jump-section": x,
                              }),
                              (0, i.jsx)(lC, {
                                  size: h._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: _,
                                  status: r ? tr.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: a,
                                  className: lE.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: lE.oM, children: m(b) }),
                          ],
                      });
                  },
              }),
          });
}
class lj extends l.PureComponent {
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
        ((0, $.A)(e, t, tr.JJy.ACCOUNT_PANEL), (0, X.X)(M.A.ACCOUNT, X.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, Y.A)(e, tr.JJy.ACCOUNT_PANEL), (0, X.X)(M.A.ACCOUNT, X.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            is.A.isConnected() ? (0, eU.openUserSettings)(eD.X.VOICE_AND_VIDEO_PANEL) : (0, eU.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, v.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("618416"),
                    n.e("366313"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("679157"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("401696"),
                    n.e("202985"),
                    n.e("455021"),
                    n.e("812196"),
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
                    n.e("986735"),
                    n.e("586662"),
                    n.e("758053"),
                    n.e("247471"),
                    n.e("889002"),
                    n.e("709976"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("405763"),
                    n.e("686731"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("279774"),
                    n.e("307158"),
                    n.e("410470"),
                    n.e("295570"),
                    n.e("765208"),
                    n.e("711562"),
                    n.e("906470"),
                    n.e("661157"),
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
                    n.e("548938"),
                    n.e("258407"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("836576"),
                    n.e("661779"),
                    n.e("923981"),
                    n.e("750370"),
                    n.e("686809"),
                    n.e("636909"),
                    n.e("466592"),
                    n.e("73946"),
                    n.e("282050"),
                    n.e("436101"),
                    n.e("976888"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("919659"),
                    n.e("698136"),
                    n.e("718368"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("38012"),
                    n.e("411938"),
                    n.e("653383"),
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
                    n.e("74336"),
                    n.e("978898"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("194704"),
                    n.e("684290"),
                    n.e("403643"),
                    n.e("166741"),
                    n.e("270076"),
                    n.e("703728"),
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
                    n.e("323589"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("358574"),
                    n.e("689521"),
                    n.e("398791"),
                    n.e("10886"),
                    n.e("196689"),
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
                    n.e("381673"),
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
                    n.e("903758"),
                    n.e("76283"),
                    n.e("792513"),
                    n.e("292699"),
                    n.e("377016"),
                    n.e("226867"),
                    n.e("754366"),
                    n.e("657682"),
                    n.e("600336"),
                    n.e("535413"),
                    n.e("172413"),
                    n.e("145006"),
                    n.e("799951"),
                    n.e("302458"),
                    n.e("556436"),
                    n.e("280574"),
                    n.e("806600"),
                    n.e("375971"),
                    n.e("655282"),
                    n.e("792818"),
                    n.e("861161"),
                    n.e("579958"),
                    n.e("27612"),
                    n.e("987313"),
                    n.e("657266"),
                    n.e("622074"),
                    n.e("556315"),
                    n.e("198877"),
                    n.e("531521"),
                    n.e("132839"),
                    n.e("873943"),
                    n.e("152263"),
                    n.e("28636"),
                    n.e("207322"),
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
                    n.e("384236"),
                    n.e("64640"),
                    n.e("368991"),
                    n.e("223213"),
                    n.e("520641"),
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
                    n.e("669381"),
                    n.e("715958"),
                    n.e("560042"),
                    n.e("824992"),
                    n.e("827649"),
                    n.e("860350"),
                    n.e("769590"),
                    n.e("866539"),
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
                    n.e("56886"),
                    n.e("48055"),
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
                    n.e("364827"),
                    n.e("25279"),
                    n.e("907167"),
                    n.e("517888"),
                    n.e("784569"),
                    n.e("811133"),
                    n.e("861060"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("952372"),
                    n.e("262156"),
                    n.e("960235"),
                    n.e("425412"),
                    n.e("77333"),
                    n.e("910486"),
                    n.e("56366"),
                    n.e("147662"),
                    n.e("265607"),
                    n.e("331988"),
                    n.e("544571"),
                    n.e("40291"),
                    n.e("402368"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("834552"),
                    n.e("190779"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("221856"),
                    n.e("293159"),
                    n.e("755936"),
                    n.e("172503"),
                    n.e("760586"),
                    n.e("833703"),
                    n.e("256274"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("793716"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("171202"),
                    n.e("346802"),
                    n.e("576909"),
                    n.e("406174"),
                    n.e("715555"),
                    n.e("708757"),
                    n.e("993103"),
                    n.e("585968"),
                    n.e("481647"),
                    n.e("393336"),
                    n.e("776273"),
                    n.e("776602"),
                    n.e("140402"),
                    n.e("407170"),
                    n.e("811310"),
                    n.e("21921"),
                    n.e("572963"),
                    n.e("307575"),
                    n.e("391763"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("521930"),
                    n.e("942724"),
                    n.e("913823"),
                    n.e("393766"),
                    n.e("53102"),
                    n.e("187110"),
                    n.e("139970"),
                    n.e("676418"),
                    n.e("875842"),
                    n.e("675706"),
                    n.e("940258"),
                    n.e("401518"),
                    n.e("198329"),
                    n.e("571210"),
                    n.e("858164"),
                    n.e("292583"),
                    n.e("302969"),
                    n.e("586127"),
                    n.e("427032"),
                    n.e("122722"),
                    n.e("173764"),
                    n.e("166495"),
                    n.e("9205"),
                    n.e("25949"),
                    n.e("308555"),
                    n.e("146070"),
                    n.e("88599"),
                    n.e("836863"),
                    n.e("854622"),
                    n.e("95340"),
                    n.e("807936"),
                    n.e("88342"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("171273"),
                    n.e("437065"),
                    n.e("179049"),
                    n.e("709640"),
                    n.e("362422"),
                    n.e("590365"),
                    n.e("989088"),
                    n.e("952548"),
                    n.e("470068"),
                    n.e("817989"),
                    n.e("311802"),
                    n.e("931319"),
                    n.e("37977"),
                    n.e("698965"),
                    n.e("720590"),
                    n.e("691671"),
                    n.e("23055"),
                    n.e("147626"),
                    n.e("613867"),
                    n.e("979483"),
                    n.e("164776"),
                    n.e("553984"),
                    n.e("943780"),
                    n.e("203589"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("817905"),
                    n.e("294857"),
                    n.e("480830"),
                    n.e("179745"),
                    n.e("96680"),
                    n.e("375767"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("981004"),
                    n.e("428967"),
                    n.e("154469"),
                    n.e("342922"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("859546"),
                    n.e("486672"),
                    n.e("75029"),
                    n.e("632756"),
                    n.e("564850"),
                    n.e("608032"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("477970"),
                    n.e("868214"),
                    n.e("902564"),
                    n.e("179303"),
                    n.e("67878"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("235313"),
                    n.e("248330"),
                    n.e("91450"),
                    n.e("795752"),
                    n.e("588070"),
                    n.e("803332"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("741678"),
                    n.e("772401"),
                    n.e("523276"),
                    n.e("852617"),
                    n.e("102698"),
                    n.e("204744"),
                    n.e("386317"),
                    n.e("737021"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("760083"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("453147"),
                    n.e("282783"),
                    n.e("432209"),
                    n.e("305557"),
                    n.e("859991"),
                    n.e("729963"),
                    n.e("368062"),
                    n.e("793438"),
                    n.e("36227"),
                    n.e("709371"),
                    n.e("310235"),
                    n.e("812042"),
                    n.e("102328"),
                    n.e("844780"),
                    n.e("830938"),
                    n.e("987478"),
                    n.e("563983"),
                    n.e("821924"),
                    n.e("147864"),
                    n.e("50097"),
                    n.e("728748"),
                    n.e("436564"),
                    n.e("603998"),
                    n.e("939171"),
                    n.e("692513"),
                    n.e("550033"),
                    n.e("252229"),
                    n.e("229666"),
                    n.e("589916"),
                    n.e("460773"),
                    n.e("458273"),
                    n.e("93461"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("278045"),
                    n.e("883952"),
                    n.e("159957"),
                    n.e("26001"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("838056"),
                    n.e("708536"),
                    n.e("120379"),
                    n.e("411353"),
                    n.e("36877"),
                    n.e("824547"),
                    n.e("203930"),
                    n.e("896804"),
                    n.e("903663"),
                    n.e("295998"),
                    n.e("508829"),
                    n.e("275133"),
                    n.e("819193"),
                    n.e("480945"),
                    n.e("201243"),
                    n.e("935948"),
                    n.e("897073"),
                    n.e("228850"),
                    n.e("464704"),
                    n.e("78601"),
                    n.e("215920"),
                    n.e("342234"),
                    n.e("81189"),
                    n.e("496268"),
                    n.e("604172"),
                    n.e("200203"),
                    n.e("904774"),
                    n.e("489523"),
                    n.e("249629"),
                    n.e("726294"),
                    n.e("780407"),
                    n.e("574678"),
                    n.e("267255"),
                    n.e("829260"),
                    n.e("806295"),
                    n.e("781949"),
                    n.e("321455"),
                    n.e("98972"),
                    n.e("967279"),
                    n.e("437961"),
                    n.e("127659"),
                    n.e("734546"),
                    n.e("327198"),
                    n.e("132737"),
                    n.e("341701"),
                    n.e("66580"),
                    n.e("504098"),
                    n.e("983168"),
                    n.e("840985"),
                    n.e("431649"),
                    n.e("468083"),
                    n.e("548730"),
                    n.e("871467"),
                    n.e("825947"),
                    n.e("51892"),
                    n.e("841838"),
                    n.e("44317"),
                    n.e("283230"),
                    n.e("225612"),
                    n.e("139103"),
                    n.e("472789"),
                    n.e("137937"),
                    n.e("760989"),
                    n.e("827335"),
                    n.e("303710"),
                    n.e("993616"),
                    n.e("949013"),
                    n.e("276814"),
                    n.e("146149"),
                    n.e("860003"),
                    n.e("396325"),
                    n.e("33448"),
                    n.e("482178"),
                    n.e("79216"),
                    n.e("645830"),
                    n.e("808979"),
                    n.e("512162"),
                    n.e("733771"),
                    n.e("866008"),
                    n.e("925501"),
                    n.e("946039"),
                    n.e("995602"),
                    n.e("816589"),
                    n.e("544901"),
                    n.e("929569"),
                    n.e("896480"),
                    n.e("986300"),
                    n.e("479006"),
                    n.e("138733"),
                    n.e("983947"),
                    n.e("944727"),
                    n.e("705871"),
                    n.e("527462"),
                    n.e("501888"),
                    n.e("186546"),
                    n.e("322455"),
                    n.e("960816"),
                    n.e("168031"),
                    n.e("347430"),
                    n.e("271203"),
                    n.e("175284"),
                    n.e("384820"),
                    n.e("966598"),
                    n.e("506627"),
                    n.e("443256"),
                    n.e("360536"),
                    n.e("864926"),
                    n.e("228011"),
                    n.e("373566"),
                    n.e("407408"),
                    n.e("815057"),
                    n.e("702846"),
                    n.e("991531"),
                    n.e("462318"),
                    n.e("470556"),
                    n.e("450541"),
                    n.e("647999"),
                    n.e("337886"),
                    n.e("46416"),
                    n.e("61750"),
                    n.e("195782"),
                    n.e("262720"),
                    n.e("483518"),
                    n.e("846327"),
                    n.e("531997"),
                    n.e("787462"),
                    n.e("798384"),
                    n.e("986629"),
                    n.e("354902"),
                    n.e("113582"),
                    n.e("124564"),
                    n.e("666601"),
                    n.e("754876"),
                    n.e("313052"),
                    n.e("639721"),
                    n.e("419631"),
                    n.e("82384"),
                    n.e("876892"),
                    n.e("971508"),
                    n.e("816799"),
                    n.e("888205"),
                    n.e("852694"),
                    n.e("408608"),
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
                    n.e("877496"),
                    n.e("233049"),
                    n.e("443184"),
                    n.e("821403"),
                    n.e("569443"),
                    n.e("439518"),
                    n.e("543456"),
                    n.e("44491"),
                ]).then(n.bind(n, 907206));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: v.Z_, onInteraction: (0, J.s)("UserSettingsMenu", M.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, J.s)("AudioDeviceMenu", M.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, v.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, n6.d)({ location: "Account" });
                    return (0, i.jsx)(O.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: v.Z_,
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
            (0, v.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(O.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: v.Z_,
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
            { hoveringOnMute: s } = this.state,
            r =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > lI;
        i
            ? s ||
              !e ||
              t ||
              n ||
              l ||
              !r ||
              null != a ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(l_, () =>
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
                userTag: s,
                voiceChannel: r,
            } = this.props;
        if (null == l) return null;
        if ((0, b.A)({ activities: t, status: a, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(R.A, {
                hoverText: s,
                forceHover: e,
                children: [
                    (0, i.jsx)(g.A, { children: t3.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: lE.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === tr.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(g.A, { children: t3.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(ea.A, { activity: o, emojiClassName: lE.Zg, className: lE.WO }),
                  ],
              })
            : null != a && a !== tr.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, i.jsx)(y, { text: t3.Ay.humanizeStatus(a) }),
                })
              : s;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: lE.eW,
                          children: (0, i.jsx)(ip.A, {
                              className: s()({ [lE.e8]: null != e }),
                              children: (0, i.jsx)(ed.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? eo.G.ANIMATED : eo.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: lE.XP,
                          children: (0, i.jsx)(ih.A, { children: this.renderStatus() }),
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
            : (0, i.jsx)(iK, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, i.jsx)(lS, {
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
            r = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(A.sk, {
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          ref: this.containerRef,
                          className: s()(lE.kL, { [lE.UG]: null != n, [lE.bc]: !l, [lE.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(el.A, { nameplate: t, hovered: r, placement: ei.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(lT, {
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
function lT(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: a,
            serverMute: s,
            serverDeaf: r,
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
            handleOpenSettingsContextMenu: x,
            dismissibleContents: v,
            occluded: E,
            nameplate: C,
            accountContainerRef: _,
            deviceChangedTooltipType: I,
            dismissTooltips: b,
            speaking: S,
        } = e,
        j = (0, en.K)(C);
    function T() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(lv, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: x,
            dismissibleContents: [...v.settings, ...e],
            iconForeground: null != C ? lE.t4 : void 0,
            nameplate: C,
        });
    }
    return (0, i.jsxs)("div", {
        className: lE.Uo,
        style: j,
        children: [
            (0, i.jsx)(ls, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: f,
                onContextMenu: p,
                iconForeground: null != C ? lE.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: d,
                shouldShowInputDeviceChangedTooltip: !d && "input" === I,
                dismissTooltips: b,
                speaking: S,
            }),
            (0, i.jsx)(i5, {
                selfDeaf: t,
                serverDeaf: r,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != C ? lE.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === I,
                dismissTooltips: b,
            }),
            null != n3.Lf
                ? (0, i.jsx)(l.Suspense, { fallback: T(), children: (0, i.jsx)(n3.Lf, { occluded: E, children: T }) })
                : T(),
        ],
    });
}
function lN(e) {
    let t = (0, d.bG)([is.A], () => null != is.A.getChannelId()),
        n = (0, eh.Py)(e),
        i = l.useRef(new u.Ep()),
        [a, s] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (s(!0),
            i.current.start(lb, () => {
                s(!1);
            }));
    }, [t, n]);
    let r = l.useCallback(() => {
        (s(!1), i.current.stop());
    }, []);
    return (
        (0, _.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: r }
    );
}
function ly() {
    let e = (0, d.bG)([n_.default], () => n_.default.getCurrentUser()),
        t = (0, d.bG)([nD.default], () => nD.default.getId()),
        {
            activities: n,
            streaming: a,
            status: s,
        } = (0, d.cf)([nV.A], () => {
            let e = nV.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tr.$pd.STREAMING;
                    }),
                status: nV.A.getStatus(),
            };
        }),
        r = (0, d.bG)([ie.A], () => ie.A.getAnyStreamForUser(t)),
        u = (0, C.A)({ userId: t }),
        m = (0, d.bG)([io.A], () => io.A.getVoiceVolume(t)),
        h = t3.Ay.useUserTag(e, { decoration: "never" }),
        f = (0, d.bG)([is.A, it.A], () => {
            let e = is.A.getChannelId();
            return null != e ? it.A.getChannel(e) : null;
        }),
        { mute: p, selfMute: g, suppress: A } = (0, n9.A)(f),
        { selfDeaf: v, deaf: E } = (0, n4.A)(f),
        _ = (0, d.bG)([W.A], () => ((0, K.kK)() ? W.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        I = (0, d.bG)([ia.Ay], () => ia.Ay.getSpeakingWhileMuted()),
        b = (0, d.bG)([q.A], () => q.A.isFullscreenInContext()),
        S = (0, d.bG)([il.A], () => il.A.hasLayers()),
        j = (0, x.useModalsStore)(x.hasAnyModalOpenSelector) || S || iu.P.isDisallowPopupsSet() || b,
        T = (0, d.bG)([ec.default], () => null != ec.default.getAwaitingRemoteSessionInfo()),
        N = (0, d.bG)([ir.A], () => ir.A.getGuildId()),
        y = e?.avatarDecoration,
        R = (0, Q.A)(y),
        D = t3.Ay.useName(e) ?? "",
        { analyticsLocations: F } = (0, O.Ay)(M.A.ACCOUNT),
        G = (0, et.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: V } = (0, n1.c9)(),
        H = (0, d.bG)([n2.A, n_.default, ii.A], () => {
            let e,
                t = n2.A.getSyncingWith(),
                n = n2.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(ii.A.getParty(e) ?? []))
                        .map((e) => n_.default.getUser(e))
                        .filter(nf.Vq)
                        .value()),
                i.length > 1
            );
        }),
        B = { avatar: [], settings: [] },
        z = (0, t9.H)({ location: "Account" }) && !j,
        Z = (0, n5.lX)("AccountCoachmark"),
        Y = em.A.useIsEligible(),
        $ = eu.A.coachmarkDismissibleContent,
        X = (0, es.ux)("AccountCoachmark"),
        J = (0, w.J)({ location: "AccountCoachmark" }),
        ee = (function (e) {
            let { currentUserId: t, enabled: n } = e;
            l.useEffect(() => {
                null != t && n && !L.Ay.hasCatalogFor(t) && (0, k.RS)(t);
            }, [t, n]);
            let i = (0, d.bG)([L.Ay], () => null != t && L.Ay.hasCatalogFor(t), [t]),
                a = (0, d.bG)(
                    [L.Ay],
                    () => (null != t ? L.Ay.getBadges(t).filter((e) => P.sC.has(e.badge_id) && e.owned).length : 0),
                    [t],
                ),
                s = (0, d.yK)(
                    [L.Ay],
                    () =>
                        null != t
                            ? (function (e) {
                                  let t = new Map(e.map((e) => [e.badge_id, e])),
                                      n = [];
                                  for (let e of U) {
                                      let i = t.get(e);
                                      if (i?.owned !== !0 || null == i.current_tier) continue;
                                      let l = i.tiers.findIndex((e) => e.key === i.current_tier);
                                      if (-1 === l) continue;
                                      let a = i.tiers[l],
                                          s = a?.complex_icon_static_url ?? a?.simple_icon_url;
                                      null != s && n.push({ iconUrl: s, tierIndex: l });
                                  }
                                  return n
                                      .sort((e, t) => t.tierIndex - e.tierIndex)
                                      .slice(0, 3)
                                      .map((e) => e.iconUrl);
                              })(L.Ay.getBadges(t))
                            : [],
                    [t],
                );
            return n && null != t && i
                ? a > 0
                    ? { variant: "progress", newBadgeCount: a, badgeIconUrls: s }
                    : { variant: "no-progress" }
                : null;
        })({ currentUserId: e?.id, enabled: J });
    !j &&
        (X && B.avatar.push(c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != ee && B.avatar.push(c.M.BADGE_DIRECTORY_NUX_POPOVER),
        Y && null != $ && B.settings.push($),
        Z && B.settings.push(c.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: en, dismissTooltip: ei } = lN(i1.oh.AUDIO_INPUT),
        { shouldShowTooltip: el, dismissTooltip: ea } = lN(i1.oh.AUDIO_OUTPUT),
        er = l.useMemo(() => (en ? "input" : el ? "output" : void 0), [en, el]),
        eo = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        ei();
                        break;
                    case "output":
                        ea();
                }
            },
            [ei, ea],
        );
    return (0, i.jsx)(O.f5, {
        value: F,
        children: (0, i.jsx)(lj, {
            currentUser: e,
            username: D,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: B,
            badgeDirectoryNuxPopoverVariant: ee,
            isOrbchievementsEnabled: z,
            userTag: h,
            occluded: j,
            selfDeaf: v,
            selfMute: g,
            serverDeaf: E,
            serverMute: p,
            speaking: u,
            voiceDb: m,
            speakingWhileMuted: I,
            status: s,
            streaming: a,
            suppress: A,
            webBuildOverride: _,
            awaitingRemote: T,
            nameplate: G,
            selectedGuildId: N,
            avatarDecoration: R,
            isQuestBarEmpty: V,
            isListenAlongVisible: H,
            deviceChangedTooltipType: er,
            onDismissDeviceChangedTooltip: () => eo(er),
        }),
    });
}
