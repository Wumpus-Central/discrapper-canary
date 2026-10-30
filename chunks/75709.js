(n.d(t, { g: () => iK, A: () => iQ }), n(321073));
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
    f = n(778712),
    p = n(265872),
    g = n(939249),
    A = n(140735),
    v = n(312138);
if (221552 == n.j) var x = n(192308);
var E = n(442433),
    C = n(820284),
    _ = n(717558),
    T = n(964486),
    y = n(220839),
    N = n(397244),
    j = n(394871),
    S = n(941143),
    I = n(866323),
    b = n(120842);
function R(e) {
    let { text: t } = e,
        n = (0, I.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, l.jsx)("div", {
        className: b.k,
        children: n((e, t) => (0, l.jsx)(S.animated.div, { className: b.H, style: e, children: t })),
    });
}
var M = n(29160),
    O = n(793574),
    w = n(688810),
    L = n(643056),
    P = n(158390),
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
    ef = n(707554),
    ep = n(364522),
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
    eN = n(765671),
    ej = n(470739),
    eS = n(142617),
    eI = n(366056),
    eb = n(477782),
    eR = n(320448),
    eM = n(834730),
    eO = n(993401),
    ew = n(105292),
    eL = n(211450);
function eP(e) {
    return (0, l.jsx)("div", {
        className: eL.wE,
        children: (0, l.jsx)(eC.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function ek(e) {
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
        f = (0, eO.rE)({ action: t, onClick: n }),
        [A, v] = i.useState(!1),
        E = i.useRef(null),
        C = d ?? E,
        _ = null != u,
        T = _ && h,
        y = i.useCallback(() => {
            v(!0);
        }, []),
        N = i.useCallback(() => {
            (0, x.hasAnyModalOpen)() || v(!1);
        }, []);
    function j() {
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", { className: eL.iA, children: (0, l.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: eL.$H,
                    children: [
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(eM.E, {
                                    color: "currentColor",
                                    variant: "text-sm/medium",
                                    className: eL.W1,
                                    children: r,
                                }),
                                (0, l.jsx)(eM.E, { color: "currentColor", variant: "text-xs/medium", children: s }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function S(e) {
        let t;
        return (
            (t = T
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(g.D, { className: eL.ef, onClick: f, children: j() }),
                          (0, l.jsx)(g.D, {
                              className: eL.ap,
                              "aria-label": ew.intl.string(ew.t.PdRCRg),
                              ...e,
                              onClick: y,
                              children: (0, l.jsx)(eR._, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, l.jsxs)(g.D, {
                        className: eL.ef,
                        ...e,
                        onClick: y,
                        children: [
                            j(),
                            (0, l.jsx)("div", {
                                className: eL.ap,
                                children: (0, l.jsx)(eR._, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, l.jsx)(g.D, { className: eL.ef, onClick: f, children: j() })),
            (0, l.jsx)("div", { ref: C, className: eL.jG, children: t })
        );
    }
    return _
        ? (0, l.jsx)("li", {
              className: eL.j$,
              onMouseEnter: y,
              onMouseLeave: N,
              children: (0, l.jsx)(p.Y, {
                  targetElementRef: c ?? C,
                  align: m,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: N,
                  children: S,
              }),
          })
        : (0, l.jsx)("li", { className: eL.j$, children: S() });
}
function eD(e) {
    let { children: t, "aria-label": n } = e;
    return (0, l.jsx)("ul", { "aria-label": n, children: t });
}
var eU = n(796104),
    eF = n(658580),
    eG = n(148295),
    eV = n(858899);
function eH(e, t) {
    (0, eV.P0)({ text: e, variant: "success" === t ? "success" : "critical" });
}
var eB = n(124577);
function eW(e, t, n, l) {
    return {
        id: e,
        label: t,
        description: n,
        action: async () => {
            (await (0, eU.nX)(l))
                ? (0, eF.D)("qa_menu", l !== eG.S.NO_PERSONAL_DATA)
                : eH(ew.intl.formatToPlainString(eB.default["6pDB++"], { label: ew.intl.string(t) }), "failure");
        },
    };
}
let ez = [
    eW("open", eB.default.yLZjcu),
    {
        id: "reset",
        label: eB.default["2DL3aX"],
        action: async () => {
            (await (0, eU.sm)())
                ? eH(ew.intl.string(eB.default.D5x6qE), "success")
                : eH(ew.intl.string(eB.default.EkMBfH), "failure");
        },
    },
    eW("open-fake-data", eB.default.kPBZ5M, eB.default.cf0nfD, eG.S.DEFAULT),
    eW("open-global-stats", eB.default.UwiUbM, eB.default["+5dICr"], eG.S.NO_PERSONAL_DATA),
    eW("open-zero-stats", eB.default.BYW9oX, eB.default.NffC17, eG.S.ZERO_DATA),
];
var eZ = n(128400),
    eK = n(641214);
function eq(e) {
    let { onClose: t } = e,
        n = (0, eS.TX)("CheckpointUserStatusMenuItem");
    return (0, l.jsx)(ek, {
        icon: eI.M,
        label: ew.intl.string(eZ.default["8hclXY"]),
        sublabel: (0, l.jsx)("span", { className: eK.$, children: ew.intl.string(eZ.default.BFc4lY) }),
        onClick: function () {
            (t(), (0, eU.nX)(), (0, eF.D)("user_profile_account_popout"));
        },
        renderSubmenu: n
            ? (e) => {
                  let { closePopout: n } = e;
                  return (0, l.jsx)(eP, {
                      navId: "checkpoint-qa-submenu",
                      "aria-label": ew.intl.string(eB.default["9dS734"]),
                      className: eK.g,
                      onClose: n,
                      children: ez.map((e) =>
                          (0, l.jsx)(
                              eb.Dr,
                              {
                                  id: e.id,
                                  label: ew.intl.string(e.label),
                                  subtext: null != e.description ? ew.intl.string(e.description) : void 0,
                                  action: () => {
                                      (t(), e.action());
                                  },
                              },
                              e.id,
                          ),
                      ),
                  });
              }
            : void 0,
    });
}
var eY = n(176781),
    eQ = n(812993),
    e$ = n(780964),
    eX = n(766075),
    eJ = n(734066),
    e0 = n(915725),
    e1 = n(409067),
    e2 = n(271597),
    e3 = n(297264),
    e5 = n(475358),
    e6 = n(866665),
    e7 = n(408278),
    e8 = n(625903),
    e9 = n(404778),
    e4 = n(689175),
    te = n(821609),
    tt = n(532624),
    tn = n(879631),
    tl = n(350535),
    ti = n(341923),
    ta = n(572164),
    tr = n(953932),
    ts = n(280483),
    to = n(890856),
    tu = n(713517),
    td = n(609174),
    tc = n(619744);
function tm(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, td.Y_)(),
        r = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, e2.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, l.jsx)(te.$, {
        onClick: r,
        icon: eg.PencilIcon,
        variant: n,
        size: "sm",
        text: ew.intl.string(ew.t.bt75uw),
        fullWidth: !0,
    });
}
var th = n(82716),
    tf = n(449397),
    tp = n(930317),
    tg = n(285072),
    tA = n(575172);
let tv = i.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: s } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, tu.A)(o),
        d = i.useCallback(() => {
            (a?.(), (0, e2.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, l.jsx)(td.Cl, {
        clip: t,
        children: (0, l.jsx)(to.s, {
            ref: o,
            "aria-label": ew.intl.string(ew.t.bt75uw),
            onClick: d,
            className: r()(tA.Z1, s),
            children: (0, l.jsxs)(tp.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, l.jsx)("div", {
                            className: tA.Ad,
                            children: (0, l.jsx)(eA.E, { type: "new", variant: "primary" }),
                        }),
                    (0, l.jsxs)(tg.h, {
                        isVisible: u,
                        className: tA.Lw,
                        children: [
                            (0, l.jsxs)("div", {
                                className: tA.mY,
                                children: [(0, l.jsx)(th.z, {}), (0, l.jsx)(tc.k, {})],
                            }),
                            (0, l.jsxs)("div", {
                                className: tA.E_,
                                children: [
                                    (0, l.jsx)(tm, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, l.jsx)(tf.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tx = n(696016),
    tE = n(652215),
    tC = n(753070),
    t_ = n(507216),
    tT = n(48127);
function ty(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: r } = e;
    (0, ts.A)();
    let s = (0, d.yK)([e0.Ay], () => Object.values(e0.Ay.getClips())),
        o = (0, d.bG)([e0.Ay], () => e0.Ay.getSettings()),
        u = (0, d.bG)([e0.Ay], () => e0.Ay.getNewClipIds()),
        c = (0, ti.HN)(),
        m = (0, d.bG)([e0.Ay], () => e0.Ay.getEnableAutoclipping()),
        h = (0, d.bG)([tt.Ay], () => tt.Ay.getKeybindForAction(tE.hCu.SAVE_CLIP)),
        f = i.useCallback(
            (e) => {
                r?.(e);
            },
            [r],
        ),
        p = !o.showPovClipsInGallery,
        g = i.useMemo(() => {
            let e = s.filter((e) => e.type === tx.nQ.CLIP && "" !== e.thumbnail && (!p || !(0, e1.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, p]),
        A = i.useMemo(() => g.slice(0, 16), [g]),
        v = g.length > 16,
        x = null != h ? tl.dI(h.shortcut, !0) : null,
        E = [
            (0, tn.$)(o.clipsLength / k.A.Millis.SECOND),
            (0, tC.zr)(o.clipsQuality.resolution),
            ew.intl.formatToPlainString(ew.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        c && E.push(ew.intl.string(t_.default.XWkJoi)),
        (0, l.jsxs)("div", {
            ref: f,
            className: tT.SW,
            role: "dialog",
            "aria-label": ew.intl.string(ew.t.z2jK6X),
            children: [
                (0, l.jsxs)("div", {
                    className: tT.wx,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tT.$,
                            children: [
                                (0, l.jsx)(e3.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: ew.intl.string(ew.t.z2jK6X),
                                }),
                                null != x && (0, l.jsx)(e5.e, { className: tT.P, shortcut: x }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: tT.$s,
                            children: [
                                (0, l.jsx)(e6.m, {
                                    text: ew.intl.string(ew.t["3D5yo/"]),
                                    children: (0, l.jsx)(e7.K, {
                                        onClick: () => n(),
                                        icon: e8.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ew.intl.string(ew.t["3D5yo/"]),
                                    }),
                                }),
                                (0, l.jsx)(e6.m, {
                                    text: ew.intl.string(t_.default["55C2MH"]),
                                    children: (0, l.jsx)(e7.K, {
                                        onClick: () => t(),
                                        icon: eY.x,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ew.intl.string(t_.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tT.ov,
                    children: [
                        E.map((e, t) =>
                            (0, l.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, l.jsx)("span", { className: tT.LO, children: "\u2022" }),
                                        (0, l.jsx)(eM.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tT.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        c &&
                            (0, l.jsx)(eM.E, {
                                variant: "text-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tT.wS,
                                children: m ? ew.intl.string(t_.default.lTwKmt) : ew.intl.string(t_.default.GNDqtf),
                            }),
                    ],
                }),
                (0, l.jsx)(e9.c, {}),
                A.length > 0
                    ? (0, l.jsxs)(e4.Ch, {
                          className: tT.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, l.jsx)(tv, { clip: e, isNew: u.includes(e.id), onClose: a }, e.id)),
                              v &&
                                  (0, l.jsx)("div", {
                                      className: tT.qr,
                                      children: (0, l.jsx)(te.$, {
                                          onClick: () => t(),
                                          text: ew.intl.string(t_.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, l.jsx)(tN, { keybindString: x }),
            ],
        })
    );
}
function tN(e) {
    let { keybindString: t } = e,
        n = (0, ta.E)();
    return (0, l.jsxs)("div", {
        className: tT.p$,
        children: [
            (0, l.jsx)(eM.E, {
                variant: "text-md/medium",
                color: "text-default",
                className: tT.qO,
                children: ew.intl.string(t_.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, l.jsx)(eM.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: tT.CZ,
                      children: ew.intl.format(t_.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, l.jsx)(
                                  eM.E,
                                  {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, l.jsx)(e5.e, { shortcut: t }),
                      }),
                  })
                : (0, l.jsx)(tr.A, {}),
        ],
    });
}
function tj(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, eJ.sw)(),
        r = !(0, d.bG)([e0.Ay], () => e0.Ay.getSettings().showPovClipsInGallery),
        s = (0, d.bG)(
            [e0.Ay],
            () => {
                let e = e0.Ay.getNewClipIds();
                return r
                    ? e.filter((e) => {
                          let t = e0.Ay.getClipById(e);
                          return null != t && !(0, e1.kD)(t);
                      }).length
                    : e.length;
            },
            [r],
        ),
        o = i.useCallback(
            (e) => {
                (t(), (0, e2.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = i.useCallback(() => {
            (t(), (0, eX.openUserSettings)(e$.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, l.jsx)(ek, {
              action: "PRESS_CLIPS",
              icon: eY.x,
              label: ew.intl.string(ew.t.z2jK6X),
              trailing: s > 0 ? (0, l.jsx)(eQ.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, l.jsx)(ty, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tS = n(480335),
    tI = n(577390),
    tb = n(372320),
    tR = n(31956),
    tM = n(744808),
    tO = n(645507),
    tw = n(131607),
    tL = n(970931),
    tP = n(315710),
    tk = n(789645),
    tD = n(775602),
    tU = n(832248),
    tF = n(462887),
    tG = n(736653),
    tV = n(439174),
    tH = n(24482),
    tB = n(19886),
    tW = n(202541);
function tz() {
    let e = (0, tB.Xb)(),
        t = (0, tH.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tW.sp.length - 1; t >= 0; t--) {
        let l = tW.VD[tW.sp[t]],
            i = new Date(e);
        if ((i.setMonth(i.getMonth() + l.tenureReqNumMonths), i.setHours(i.getHours() + 30), n > i.getTime()))
            if (n - i.getTime() < 6048e5) return l.id;
            else break;
    }
    return null;
}
let tZ = {
        [tW.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tW.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tW.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tW.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tW.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tW.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tW.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tW.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    tK = {
        [tW.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tW.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tW.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tW.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tW.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tW.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tW.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tW.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var tq = n(570484);
let tY = i.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
function tQ() {
    let e = (0, d.bG)([tD.Ay], () => tD.Ay.useReducedMotion),
        t = (0, tU.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = tz(),
                t = (0, tF.M)((0, tG.Ay)());
            if (null == e) return null;
            let n = tZ[e],
                l = tK[e],
                i = {
                    currentBadge: (0, tV.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? l?.dark : l?.light,
                },
                a = tW.sp.indexOf(e);
            if (a > 0) {
                let e = tW.sp[a - 1],
                    n = tZ[e];
                ((i.prevBadge = (0, tV.e0)(e)), (i.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return i;
        })(),
        [a, r] = i.useState(null);
    return (null != n && null == a && r(n), e || !t || null == a) ? null : (0, l.jsx)(t$, { levelUpData: a });
}
function t$(e) {
    let { levelUpData: t } = e,
        n = i.useRef(null),
        a = i.useCallback(() => {
            tU.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, l.jsx)(tP.Ok, {
        containerRef: n,
        children: (0, l.jsxs)("div", {
            className: tq.i,
            children: [
                (0, l.jsx)("div", {
                    className: tq.b,
                    children: (0, l.jsx)(e6.m, {
                        text: ew.intl.string(ew.t.cpT0Cq),
                        children: (0, l.jsx)(e7.K, {
                            icon: tk.P,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": ew.intl.string(ew.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsx)(tY, { levelUpData: t }) }),
            ],
        }),
    });
}
var tX = n(397562),
    tJ = n(206835),
    t0 = n(183555),
    t1 = n(465318),
    t2 = n(999291),
    t3 = n(402860),
    t5 = n(718019),
    t6 = n(977059),
    t7 = n(915614),
    t8 = n(925622),
    t9 = n(559506),
    t4 = n(646986),
    ne = n(657538),
    nt = n(946356),
    nn = n(465829),
    nl = n(624479),
    ni = n(206845),
    na = n(957565),
    nr = n(427262),
    ns = n(62119);
function no(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: i } = (0, t0.NJ)();
    return na.p5
        ? (0, l.jsx)(ni.A, {
              text: ew.intl.string(ew.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: nr.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => i({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, l.jsx)(g.D, {
                      ...e,
                      className: r()(ns.c, { [ns.R]: n }),
                      "aria-label": ew.intl.string(ew.t.y5MwJy),
                      children: (0, l.jsx)(nl.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nu = n(394816),
    nd = n(442228),
    nc = n(253932),
    nm = n(362862),
    nh = n(621466),
    nf = n(318254),
    np = n(863610),
    ng = n(421773),
    nA = n(318346),
    nv = n(923138),
    nx = n(309954),
    nE = n(673125),
    nC = n(646731),
    n_ = n(769001);
function nT(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: a, onCloseAccountPopout: s } = e;
    (0, nv.I)({ enabled: !0 });
    let { balance: o } = (0, nx.W)(),
        u = (0, d.bG)([nE.Ay], () =>
            nE.Ay.userOpenedWalletViaProfileDCF ? nE.Y0.NEW_ACHIEVEMENT : nE.Ay.clientUnreadNotificationType,
        );
    i.useEffect(
        () => () => {
            nE.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: c, onMouseEnter: m, onMouseLeave: h, setIsHovered: f, cancelTimers: A } = (0, ng.A)(0, 500),
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
                let t = (0, nh.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${eL.j$}`);
                null != n && n !== E.current && (A(), f(!1));
            }
        }, [c, A, f]));
    let y = i.useRef(!1);
    i.useEffect(() => {
        c || (y.current = !1);
    }, [c]);
    let N = i.useCallback(() => {
            (y.current ||
                ((y.current = !0),
                (0, nA.Y)({
                    pageType: O.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: O.A.ORB_WALLET,
                    ctaObject: O.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        j = (0, eO.rE)({ action: "PRESS_ORBS", onClick: N });
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
    let S = i.useMemo(
            () =>
                null != o
                    ? ew.intl.format(ew.t["8xDISf"], { balance: String(o) })
                    : (0, l.jsx)(np.n, { dotRadius: 3.5, themed: !0, className: n_.K }),
            [o],
        ),
        I = i.useMemo(
            () =>
                u === nE.Y0.NEW_ACHIEVEMENT
                    ? (0, l.jsx)(eA.E, { type: "new", variant: "primary" })
                    : u === nE.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, l.jsx)(eA.E, { type: { text: ew.intl.string(ew.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        b = i.useCallback(() => {
            (A(), f(!1), s());
        }, [A, f, s]),
        R = i.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nh.vq)(t, Node) && null != E.current && E.current.contains(t) && A();
            },
            [A],
        );
    return (0, l.jsx)("li", {
        ref: E,
        className: eL.j$,
        onMouseEnter: N,
        onMouseLeave: v,
        children: (0, l.jsx)(p.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    ref: T,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, l.jsx)(nC.vG, { onCloseWallet: b, returnRef: C, isProfilePopout: !0 }),
                }),
            shouldShow: c,
            onRequestClose: v,
            children: (e) =>
                (0, l.jsx)("div", {
                    className: eL.jG,
                    children: (0, l.jsxs)(g.D, {
                        innerRef: C,
                        className: eL.ef,
                        ...e,
                        onClick: j,
                        children: [
                            (0, l.jsx)("div", {
                                className: eL.iA,
                                children: (0, l.jsx)(nf.C, { color: "currentColor", size: "xs" }),
                            }),
                            (0, l.jsx)("div", {
                                className: eL.$H,
                                children: (0, l.jsx)("div", {
                                    children: (0, l.jsx)(eM.E, {
                                        color: "currentColor",
                                        variant: "text-sm/medium",
                                        className: eL.W1,
                                        children: S,
                                    }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: r()(eL.ap, n_._),
                                children: [I, (0, l.jsx)(eR._, { size: "xs", color: "currentColor" })],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var ny = n(290863),
    nN = n(351906),
    nj = n(403362),
    nS = n(562153),
    nI = n(661531),
    nb = n(628284),
    nR = n(695366),
    nM = n(363195),
    nO = n(889227),
    nw = n(287809),
    nL = n(174459),
    nP = n(429707),
    nk = n(274303),
    nD = n(994125),
    nU = n(347853),
    nF = n(573879),
    nG = n(559117),
    nV = n(43105),
    nH = n(661439),
    nB = n(385113),
    nW = n(352003),
    nz = n(429913),
    nZ = n(334074),
    nK = n(633075),
    nq = n(667049),
    nY = n(280450),
    nQ = n(90165),
    n$ = n(49999),
    nX = n(518477);
function nJ(e) {
    let { targetElementRef: t, onClose: a } = e,
        [r, s] = i.useState(!1),
        o = (0, d.bG)([nY.default], () => nY.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, d.yK)([nB.A], () => nB.A.getFeaturedApplicationIds());
            ((0, nW.A)(e),
                i.useEffect(() => {
                    (0, nH.X)();
                }, []));
            let t = (0, d.bG)([nY.default], () => nY.default.getId()),
                n = (0, nq.A)(t),
                l = i.useMemo(() => n.filter((e) => e instanceof nK.R), [n]),
                a = (0, nz.A)(e),
                r = i.useMemo(() => a.filter(nj.Vq), [a]),
                s = (0, d.cf)([nQ.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = r.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = nQ.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: u, markAsDismissed: m } = (0, nZ.hj)({
                    applications: o,
                    dismissibleContent: c.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: nZ.SH,
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
        : (0, l.jsx)(nV.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: ew.intl.string(ew.t.HMWL9c),
              body: ew.intl.string(ew.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      n$.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: ew.intl.string(ew.t.VSLDly),
                      loading: r,
                      onClick: function () {
                          (s(!0),
                              (0, t3.openUserProfileModal)({ userId: o, tabSection: nX.RP.WIDGETS })
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
                                              n$.i.TAKE_ACTION,
                                          ),
                                          a());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var n0 = n(461213),
    n1 = n(818348),
    n2 = n(709516);
function n3() {
    let e = (0, d.bG)([n0.A], () => n0.A.getStatus()),
        t = (0, nr.MU)(e) ?? "",
        n = e === n1.cl.INVISIBLE || e === n1.cl.OFFLINE;
    return (0, l.jsxs)("div", {
        className: n2.k,
        children: [
            (0, l.jsxs)(A.A, { tag: "div", children: [ew.intl.string(ew.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, l.jsx)(e6.m, {
                    text: ew.intl.string(ew.t.L99HQm),
                    children: (0, l.jsx)(nR.E, {
                        size: "xs",
                        color: nI.A.colors.STATUS_WARNING,
                        "aria-label": ew.intl.string(ew.t.L99HQm),
                    }),
                }),
        ],
    });
}
var n5 = n(146901),
    n6 = n(827827);
let n7 = [
        { duration: 15 * k.A.Millis.MINUTE, label: () => ew.intl.string(ew.t["8ot6gv"]) },
        { duration: k.A.Millis.HOUR, label: () => ew.intl.string(ew.t.UMWBZr) },
        { duration: 8 * k.A.Millis.HOUR, label: () => ew.intl.string(ew.t.EpAXPC) },
        { duration: k.A.Millis.DAY, label: () => ew.intl.string(ew.t["755t4q"]) },
        { duration: 3 * k.A.Millis.DAY, label: () => ew.intl.string(ew.t["f3/1ch"]) },
        { duration: void 0, label: () => ew.intl.string(ew.t["46dqJY"]) },
    ],
    n8 = "forever";
function n9(e) {
    let { status: t, currentStatus: n, description: i } = e,
        a = t !== tE.clD.ONLINE,
        r = (0, l.jsx)(l.Fragment, {
            children: n7.map((e) => {
                let { duration: i, label: a } = e;
                return (0, l.jsx)(
                    eb.Dr,
                    {
                        id: `${t}-${i}`,
                        label: a(),
                        action: () => (0, n6.A)({ nextStatus: t, prevStatus: n, durationMillis: i }),
                        dontCloseOnAction: !0,
                    },
                    i ?? n8,
                );
            }),
        });
    return (0, l.jsx)(eb.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, nr.MU)(t),
        subtext: i,
        iconLeft: () => (0, l.jsx)(ev.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, n6.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? r : void 0,
    });
}
function n4(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: l } = (0, n5._)(e);
    return "today" === t
        ? ew.intl.formatToPlainString(ew.t.ZxxHIO, { timeString: l })
        : ew.intl.formatToPlainString(ew.t["9OFjSe"], { dateString: n, timeString: l });
}
var le = n(996988),
    lt = n(207634),
    ln = n(47453);
function ll(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        p = (0, t2.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, w.Ay)(O.A.USER_PROFILE_ACCOUNT_POPOUT),
        v = (0, t0.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, tX.A)(g, p, nX.R7.ACCOUNT_POPOUT);
    let { ref: E } = (0, eN.Ay)(),
        { isHoveringOrFocusing: C, isHovering: _ } = (0, tu.A)(E);
    (i.useEffect(() => {
        a?.(E.current);
    }, [E, a]),
        i.useEffect(
            () => (
                tU.A.setState({ isOpen: !0 }),
                () => tU.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let T = (0, d.bG)([ny.A], () => ny.A.getStatus(t.id)),
        y = n4(nc.CY.useSetting()),
        N = (0, d.bG)([nN.A], () => nN.A.hidePersonalInformation),
        j = (0, tL.kB)(),
        S = nc.Q_.useSetting(),
        I = (function (e) {
            let t = nc.CY.useSetting(),
                n = (0, tL.kB)(),
                i = nc.Jr.useSetting();
            function a(l) {
                let i = n4(t);
                if (e === l && null != i) return i;
                switch (l) {
                    case tE.clD.DND:
                        return n ? ew.intl.string(ew.t.day5A6) : ew.intl.string(ew.t["tq/fMK"]);
                    case tE.clD.INVISIBLE:
                        return ew.intl.string(ew.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let r = (0, l.jsx)(l.Fragment, {
                    children: n7.map((t) => {
                        let { duration: n, label: i } = t;
                        return (0, l.jsx)(
                            eb.Dr,
                            {
                                id: `${e}-${n}`,
                                label: i(),
                                action: () => {
                                    (0, tL.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? n8,
                        );
                    }),
                }),
                s = n9({ status: tE.clD.ONLINE, currentStatus: e }),
                o = n9({ status: tE.clD.IDLE, currentStatus: e, description: a(tE.clD.IDLE) }),
                u = n9({ status: tE.clD.DND, currentStatus: e, description: a(tE.clD.DND) }),
                d = n9({ status: tE.clD.INVISIBLE, currentStatus: e, description: a(tE.clD.INVISIBLE) });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    s,
                    (0, l.jsx)(eb.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    d,
                    n
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(eb.bX, {}, "menu-separator-statuses"),
                                  (0, l.jsx)(
                                      eb.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ew.intl.string(ew.t.gJRnwK),
                                          iconLeft: ex.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: ex.BellSlashIcon },
                                          badge: { text: ew.intl.string(ew.t.ApAu9f) },
                                          subtext:
                                              null != i && "0" !== i
                                                  ? ew.intl.format(ew.t.BWD8fs, {
                                                        endTime: new Date(Number(i)).toLocaleString(
                                                            ew.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : ew.intl.string(ew.t["Br1q+x"]),
                                          action: () => {
                                              (0, tL.ES)(!n);
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
            let t = (0, d.bG)([nw.default], () => nw.default.getCurrentUser()),
                n = (0, d.bG)([nN.A], () => nN.A.hidePersonalInformation),
                i = (0, d.bG)([nM.A], () => (0, tF.M)(nM.A.theme)),
                { multiAccountUsers: a } = (0, nD.K)(),
                r = a.map((a) => {
                    let r = new nO.A(a),
                        s = r.id === t?.id,
                        o = a.tokenStatus === nk.U.INVALID,
                        u = n ? null : `#${r.discriminator}`;
                    return (0, l.jsx)(
                        eb.Dr,
                        {
                            id: r.id,
                            focusedClassName: nG.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, l.jsxs)("div", {
                                    className: nG.ci,
                                    children: [
                                        (0, l.jsx)(h.eu, {
                                            src: r.getAvatarURL(void 0, 40),
                                            size: f._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: nG.DD,
                                            children: [
                                                (0, l.jsx)(eM.E, {
                                                    className: nG.gE,
                                                    variant: "text-sm/normal",
                                                    children: nr.Ay.getUserTag(r, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !r.hasUniqueUsername() &&
                                                    (0, l.jsx)(eM.E, {
                                                        className: nG.df,
                                                        variant: "text-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, l.jsx)(nb.y, {
                                                size: "sm",
                                                color: t
                                                    ? nI.A.unsafe_rawColors.WHITE.css
                                                    : nI.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nI.A.unsafe_rawColors.BRAND_500.css
                                                        : nI.A.unsafe_rawColors.WHITE.css,
                                                className: nG.s0,
                                            }),
                                        o &&
                                            (0, l.jsx)(nR.E, {
                                                color: nI.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && i) || (t && !i)
                                                        ? nI.A.unsafe_rawColors.BRAND_500.css
                                                        : nI.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nG.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nU.A)();
                                else {
                                    var n;
                                    (n = r.id) !== t?.id &&
                                        (nL.default.track(tE.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: tE.JJy.USER_PROFILE },
                                        }),
                                        nP.Mx(n, void 0, nF.WX.MULTI_ACCOUNT_MENU));
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
                            (0, l.jsx)(eb.bX, {}),
                            (0, l.jsx)(eb.Dr, {
                                id: "manage-accounts",
                                label: ew.intl.string(ew.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nU.A)());
                                },
                            }),
                        ],
                    }),
                ),
                r
            );
        })(n),
        R = (0, tJ.A)({ analyticsLocations: g }),
        M = (0, tH.TW)(t),
        P = (0, L.d)({ location: "UserProfileAccountPopout" }),
        k = i.useRef(null),
        D = i.useRef(null),
        U = i.useRef(null),
        F = (0, tb.A)(p?.profileFrame?.skuId),
        G = (0, tI.A)(p?.profileFrame?.skuId);
    (0, tR.A)({ skuId: p?.profileFrame?.skuId, openedAt: o, context: v, analyticsLocations: g });
    let V = i.useRef((0, tU.A)((e) => e.shouldRenderTenureLevelUp)),
        H = i.useMemo(() => (0, tO.A)(), []),
        [B, W] = i.useState(() => tU.A.getState().shouldRenderTenureLevelUp);
    function z(e) {
        (n?.(), (0, t3.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...v, ...e }));
    }
    i.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Z = p?.widgets != null && p.widgets.length > 0,
        K = i.useCallback(() => {
            n();
        }, [n]),
        q = i.useCallback(() => {
            (R(), K());
        }, [R, K]),
        Y = t1.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        Q = (0, nm.H)({ location: "UserProfileAccountPopout" }),
        $ = (0, eS.FX)("UserProfileAccountPopout"),
        X = (0, tU.A)((e) => e.shouldScrollToOrbsMenuItem),
        [J, ee] = (0, tw.kn)(
            [
                c.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
                Y ? c.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nj.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        et = i.useId();
    return (0, l.jsx)(w.f5, {
        value: g,
        children: (0, l.jsx)(t0.of, {
            value: v,
            openedAt: o,
            fetchStartedAt: p?.fetchStartedAt,
            fetchEndedAt: p?.fetchEndedAt,
            isLoaded: p?.isLoaded,
            children: (0, l.jsxs)(eh.l, {
                ref: E,
                "aria-labelledby": et,
                className: r()(eL.jC, u),
                "data-layer": "base",
                children: [
                    (0, l.jsx)(A.A, {
                        children: (0, l.jsx)(ef.H, { id: et, children: ew.intl.string(ew.t["5fWB8U"]) }),
                    }),
                    (0, l.jsxs)(ef.F, {
                        children: [
                            (0, l.jsxs)(nt.A, {
                                className: eL.BK,
                                user: t,
                                displayProfile: p,
                                themeType: le.d.POPOUT,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ln.wx,
                                        children: [
                                            (0, l.jsx)(t7.A, { user: t, displayProfile: p, themeType: le.d.POPOUT }),
                                            (0, l.jsx)(t5.A, {
                                                user: t,
                                                displayProfile: p,
                                                avatarSize: lt.T[le.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : z,
                                            }),
                                            (0, l.jsx)(nu.A, {
                                                ref: k,
                                                user: t,
                                                themeType: le.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ep.Ip, {
                                        ref: U,
                                        className: eL.rf,
                                        style: { pointerEvents: B ? "none" : void 0 },
                                        children: [
                                            (0, l.jsx)(t9.A, { userId: t.id }),
                                            (0, l.jsx)(nn.Ay, {
                                                className: eL.eF,
                                                user: t,
                                                displayName: nS.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : z,
                                                displayNameTrailing: (0, l.jsx)(no, { user: t, isVisible: C }),
                                                pronouns: p?.pronouns,
                                                trailing: (0, l.jsx)(t6.A, {
                                                    displayProfile: p,
                                                    themeType: le.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, l.jsx)(t8.A, { isPremiumUser: M, onInteraction: n }),
                                            (0, l.jsx)(nd.A, {
                                                userId: t.id,
                                                userBio: p?.bio,
                                                hidePersonalInformation: N,
                                                onClose: n,
                                            }),
                                            Z &&
                                                (0, l.jsx)(ne.A, {
                                                    user: t,
                                                    widgets: p?.widgets,
                                                    onOpenUserProfileModal: z,
                                                }),
                                            (0, l.jsx)(t4.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: z,
                                                onClose: n,
                                            }),
                                            (0, l.jsxs)("div", {
                                                className: eL.T_,
                                                children: [
                                                    $ &&
                                                        (0, l.jsx)(nt.A.Overlay, {
                                                            className: eL.g0,
                                                            children: (0, l.jsx)(eD, {
                                                                children: (0, l.jsx)(eq, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, l.jsx)(nt.A.Overlay, {
                                                        className: eL.g0,
                                                        children: (0, l.jsxs)(eD, {
                                                            children: [
                                                                (0, l.jsx)(ek, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ew.intl.string(ew.t.s5vZlQ),
                                                                    icon: eg.PencilIcon,
                                                                    trailing:
                                                                        null != J
                                                                            ? (0, l.jsx)("div", {
                                                                                  className: eL.IO,
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
                                                                            ee(n$.i.TAKE_ACTION),
                                                                            q());
                                                                    },
                                                                    ref: D,
                                                                }),
                                                                (0, l.jsx)(ek, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, l.jsx)(n3, {}),
                                                                    sublabel: null != y && y,
                                                                    icon: () =>
                                                                        (0, l.jsx)(ev.nW, { status: T, size: 12 }),
                                                                    trailing:
                                                                        (j || T === tE.clD.DND) &&
                                                                        (0, l.jsx)(ex.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: em.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, l.jsx)(eP, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eL.hQ,
                                                                                  "aria-label": ew.intl.string(
                                                                                      ew.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: I,
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
                                                                                                              ew.intl.string(
                                                                                                                  ew.t[
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
                                                                                                                  ew.intl.string(
                                                                                                                      ew
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
                                                                                                                  I,
                                                                                                          }),
                                                                                                      },
                                                                                                  );
                                                                                              }),
                                                                                          ),
                                                                                  ));
                                                                          }
                                                                        : void 0,
                                                                }),
                                                                P &&
                                                                    (0, l.jsx)(ek, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: e_.q,
                                                                        label: ew.intl.string(ew.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, ej.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, l.jsx)(tj, { onClose: n, popoutContainerRef: E }),
                                                                Q &&
                                                                    (0, l.jsx)(nT, {
                                                                        popoutContainerRef: E,
                                                                        scrollerRef: U,
                                                                        shouldScrollIntoView: X,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, l.jsx)(nt.A.Overlay, {
                                                        className: eL.g0,
                                                        children: (0, l.jsxs)(eD, {
                                                            children: [
                                                                (0, l.jsx)(ek, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eT.r,
                                                                    label: ew.intl.string(ew.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nU.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, l.jsx)(eP, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ew.intl.string(ew.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: b,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    na.p5 &&
                                                                    S &&
                                                                    (0, l.jsx)(ek, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: ey.L,
                                                                        label: ew.intl.string(ew.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, na.C)(t.id), n());
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
                                        !V.current &&
                                        (0, l.jsx)(tS.A, { skuId: p.profileEffect.skuId, isHovering: _ }),
                                    null != F && (0, l.jsx)(tM.A, { frame: F, fadeIn: G }),
                                ],
                            }),
                            (0, l.jsx)(nJ, { targetElementRef: D, onClose: n }),
                            (0, l.jsx)(tQ, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var li = n(201805),
    la = n(209932),
    lr = n(655116),
    ls = n(438140),
    lo = n(549831),
    lu = n(342296),
    ld = n(852712),
    lc = n(389960),
    lm = n(173660),
    lh = n(616356),
    lf = n(734057),
    lp = n(629016),
    lg = n(186111),
    lA = n(999926),
    lv = n(763827),
    lx = n(967198),
    lE = n(485296),
    lC = n(486020),
    l_ = n(625494),
    lT = n(536194),
    ly = n(19575),
    lN = n(994314),
    lj = n(485599),
    lS = n(116833);
function lI(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: ew.intl.string(ew.t.uwDBSq),
                  body: ew.intl.formatToPlainString(ew.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: ew.intl.string(ew.t["5GD53o"]), body: ew.intl.string(ew.t["2Rb7tE"]) };
    return (0, l.jsx)(nV.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: lS.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
            aspectRatio: "21/9",
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: ew.intl.string(ew.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function lb(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: i } = e;
    return (0, l.jsx)(lI, {
        ...t,
        onPrimaryAction: () => {
            (i(n$.i.TAKE_ACTION), (0, ej.openBadgeDirectoryModal)());
        },
        onRequestClose: () => i(n$.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var lR = n(206248);
function lM(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: i, position: a, shouldShow: r = !0, children: s } = e,
        o = (0, eJ.sw)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            s,
            r && o
                ? (0, l.jsx)(lR.H, {
                      targetElementRef: t,
                      title: ew.intl.string(t_.default.Qn21R6),
                      body: ew.intl.string(t_.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: ew.intl.string(ew.t.RzWDqY),
                          onClick: function () {
                              (n(n$.i.TAKE_ACTION), i());
                          },
                      },
                      onRequestClose: function () {
                          n(n$.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var lO = n(379848),
    lw = n(626584),
    lL = n(757036),
    lP = n(591179),
    lk = n(531685),
    lD = n(259065),
    lU = n(26168),
    lF = n(78294);
let lG = new lw.A("DisplayNameStylesFlywheelCoachmark");
function lV(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: r } = (0, w.Ay)(),
        s = (0, i.useRef)(null),
        o = (0, d.bG)([lk.A], () => lk.A.isFocused()),
        u = (0, lL.L)(tW.PremiumTypes.TIER_2),
        c = (0, lP.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, i.useCallback)(() => {
            t(n$.i.TAKE_ACTION);
            let e = nw.default.getCurrentUser();
            c && null != e
                ? (0, t3.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: r,
                      onModalOpen: () => {
                          (0, lD.L)({ analyticsLocations: r, stackingBehavior: "stack" });
                      },
                  })
                : (0, eX.openUserSettings)(e$.X.PROFILE_PANEL, { analyticsLocations: r }, () => {
                      (0, lD.L)({ analyticsLocations: r });
                  });
        }, [t, r, c]),
        h = (0, i.useCallback)(() => {
            t(n$.i.USER_DISMISS);
        }, [t]);
    (0, i.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(lG.error) : o || s.current?.pause();
    }, [o]);
    let f = u ? [ew.intl.string(lU.default.TyUdka)] : [ew.intl.string(lU.default.dluV0R)];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a,
            (0, l.jsx)(nV.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: h,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: lF.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: ew.intl.string(lU.default.cYwrp8),
                body: f,
                actions: [{ text: ew.intl.string(ew.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var lH = n(45780),
    lB = n(696451),
    lW = n(71393),
    lz = n(685073),
    lZ = n(73153);
let lK = { lastSeenInfos: {} },
    lq = lK;
class lY extends d.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        lq = e ?? lK;
    }
    getState() {
        return lq;
    }
    getGuildLastSeenInfo(e) {
        return lq.lastSeenInfos[e] ?? null;
    }
}
let lQ = new lY(lZ.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        lq.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        lq = lK;
    },
});
var l$ = n(514661);
let lX = new lw.A("GuildTagAvailableCoachmark");
function lJ(e) {
    let t = (0, d.bG)([lW.A], () => lW.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            lZ.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: i, onAdoptTag: a, onEditProfile: r } = (0, l$.A)(t?.id ?? null, () => n(n$.i.TAKE_ACTION));
    if (null == t || !(0, lz.q0)(t))
        return (lX.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: ew.intl.string(ew.t.jwEaiX), loading: i, onClick: a, variant: "primary" },
        { text: ew.intl.string(ew.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(nV.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lS.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ew.intl.formatToPlainString(ew.t["m/Tc3n"], { guildName: t.name }),
                body: ew.intl.string(ew.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n$.i.USER_DISMISS),
            }),
        ],
    });
}
function l0(e) {
    let t = (0, d.bG)([lW.A], () => lW.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: i, onAdoptTag: a, onEditProfile: r } = (0, l$.A)(t?.id ?? null, () => n(n$.i.TAKE_ACTION));
    if (null == t || !(0, lz.q0)(t))
        return (lX.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: ew.intl.string(ew.t.jwEaiX), loading: i, onClick: a, variant: "primary" },
        { text: ew.intl.string(ew.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e.children,
            (0, l.jsx)(nV.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: lS.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ew.intl.formatToPlainString(ew.t.VFqnyU, { guildName: t.name }),
                body: ew.intl.string(ew.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n$.i.USER_DISMISS),
            }),
        ],
    });
}
var l1 = n(843010),
    l2 = n(764231),
    l3 = n(425713);
function l5(e) {
    let { groupName: t, targetElementRef: n } = e,
        i = tz(),
        a = (0, d.bG)([tD.Ay], () => tD.Ay.useReducedMotion),
        r = (0, tU.A)((e) => e.isOpen),
        s = (0, l1.G)();
    return a || null == i || r || s
        ? null
        : (0, l.jsx)(lO.zJ, {
              contentType: c.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, l.jsx)(l6, {
                      recentlyLeveledTenureBadge: i,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === c.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function l6(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: r } = e,
        s = tW.sp.indexOf(t),
        o = (0, l3.I)(tW.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, i.useCallback)(() => {
            (n(n$.i.TAKE_ACTION),
                tU.A.setState({ shouldRenderTenureLevelUp: !0 }),
                l_._.dispatch(tE.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        d = (0, i.useCallback)(() => {
            n(n$.i.USER_DISMISS);
        }, [n]),
        c = tW.VD[t],
        m = ew.intl.formatToPlainString(ew.t.ewkaVR, {
            timeMilestone: (0, l2.T)(c.id, c.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        h = [{ text: ew.intl.string(ew.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, l.jsx)(nV.A, {
        targetElementRef: a,
        onRequestClose: d,
        shouldShow: r,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ew.intl.string(ew.t.VoDxsV),
        body: m,
        actions: h,
    });
}
var l7 = n(764014);
function l8(e) {
    let { targetElementRef: t } = e,
        n = (0, tU.A)((e) => e.isOpen),
        [i, a] = (0, tw.kn)(n ? [] : [c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: n$.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return i === c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, l.jsx)(nV.A, {
              targetElementRef: t,
              graphic: { type: "image", src: l7.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: ew.intl.string(ew.t["Q+dH5r"]),
              body: ew.intl.string(ew.t.YKJw4W),
              onRequestClose: () => a(n$.i.USER_DISMISS),
              actions: [
                  {
                      text: ew.intl.string(ew.t.dcOuei),
                      onClick: function () {
                          (a(n$.i.TAKE_ACTION),
                              tU.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nE.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              l_._.dispatch(tE.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function l9(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, li.c9)(),
        i = null != e.targetElementRef.current && t && n,
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = (0, lH.G$)(c.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? tE.dJq),
                i = (0, d.bG)(
                    [lW.A, nw.default, lB.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = lW.A.getGuild(e);
                        if (void 0 === t || !(0, lz.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nw.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let l = lB.Ay.getMember(e, n.id);
                        return null != l && !l.isPending;
                    },
                    [e],
                );
            return (0, tw.ww)(i && n && !l ? [c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? tE.eGj);
        })(e.guildId, { shouldShow: i }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                l = e?.primaryGuild,
                i = l?.identityGuildId ?? null,
                a = (0, d.bG)([lQ], () => (null === i ? null : lQ.getGuildLastSeenInfo(i))),
                r = (0, d.bG)([lW.A], () => lW.A.getGuild(i)?.profile?.tag),
                s = null != r && l?.identityGuildId === i && l?.tag === null,
                o = null != i && a?.tag === r,
                u = null !== i && s && !o;
            return (0, tw.Wl)(u && n ? c.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: i });
    return i
        ? a === c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, l.jsx)(l0, {
                  guildId: e.guildId,
                  onDismiss: r,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === c.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, l.jsx)(lJ, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(l5, { groupName: n$.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, l.jsx)(l8, { targetElementRef: e.targetElementRef }),
                        (0, l.jsx)(lO.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: n$.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: i } = t;
                                switch (n) {
                                    case c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, l.jsx)(lV, {
                                            markAsDismissed: i,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case c.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, l.jsx)(lM, {
                                            markAsDismissed: i,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: e2.p,
                                            children: e.children,
                                        });
                                    case c.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                e.children,
                                                (0, l.jsx)(lb, {
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
var l4 = n(348858),
    ie = n(615675),
    it = n(900797),
    il = n(847374),
    ii = n(617354),
    ia = n(829773),
    ir = n(42473),
    is = n(731854),
    io = n(516171),
    iu = n(577755);
function id(e) {
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
        } = (0, l4.I)(m ? "undeafen" : "deafen"),
        v = n ? ie.T : h,
        { name: x } = (0, ec.x5)(is.oh.AUDIO_OUTPUT),
        E = (0, ii.A)(t, n, a),
        { analyticsLocations: C } = (0, w.Ay)(O.A.AUDIO_OUTPUT_BUTTON),
        _ = i.useRef(null);
    return (
        i.useEffect(() => () => f(), [m, f]),
        (0, l.jsx)(w.f5, {
            value: C,
            children: (0, l.jsx)(p.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        c(),
                        (0, l.jsx)(w.f5, {
                            value: C,
                            children: (0, l.jsx)(ia.A, {
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
                animation: p.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: i } = e,
                        { isShown: c } = t,
                        h = c ? it.t : il.a;
                    return (0, l.jsxs)("div", {
                        ref: _,
                        className: r()(io.Lh, { [io.v8]: m, [io.q6]: c }),
                        children: [
                            (0, l.jsx)(ir.A, {
                                "aria-checked": m,
                                "aria-label": ew.intl.string(ew.t.wjcRFX),
                                className: io.eT,
                                disabled: a,
                                icon: (0, l.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nI.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? iu.o : void 0,
                                innerClassName: r()({ [iu.T]: n }),
                                onClick: s,
                                onContextMenu: i,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: E,
                            }),
                            (0, l.jsx)(ir.A, {
                                className: r()(io.UT, { [io.q6]: c }),
                                disabled: a,
                                icon: (0, l.jsx)(h, {
                                    className: io.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nI.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: d ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: d,
                                tooltipPositionKey: d
                                    ? ew.intl.formatToPlainString(ew.t["f+DDY/"], { outputDeviceName: x })
                                    : void 0,
                                tooltipShouldShow: !c,
                                tooltipText: d
                                    ? ew.intl.format(ew.t["f+DDY/"], { outputDeviceName: x })
                                    : ew.intl.string(ew.t.aA4Vce),
                                "aria-label": d
                                    ? ew.intl.formatToPlainString(ew.t["f+DDY/"], { outputDeviceName: x })
                                    : ew.intl.string(ew.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var ic = n(523875),
    im = n(666654),
    ih = n(993719);
let ip = {};
class ig extends d.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return ip[e] ?? !1;
    }
}
let iA = new ig(lZ.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        ip[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        ip[t] = !1;
    },
});
var iv = n(362823),
    ix = n(980923),
    iE = n(137911),
    iC = n(222176),
    i_ = n(973324);
function iT(e) {
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
            nameplate: f,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: v,
            shouldShowPTTJoinTooltip: x,
            dismissTooltips: E,
            speaking: C,
        } = e,
        _ = (0, d.bG)([lA.Ay], () => lA.Ay.getMode() === is.TB.PUSH_TO_TALK),
        T = (0, d.bG)([lA.Ay], () => lA.Ay.getSettings().modeOptions.shortcut),
        y = (0, d.bG)([iA], () => iA.getIsTutorialActive(iv.v.MUTE_TUTORIAL)),
        N = (0, d.bG)([lv.A], () => null != lv.A.getChannelId()),
        { name: j } = (0, ec.x5)(is.oh.AUDIO_INPUT),
        { enabledInputProfiles: S } = (0, ld.d)({ location: "MicrophoneButton" }),
        I = i.useRef(null),
        b = n || s || a,
        R = (0, ic.L)(b ? "unmute" : "mute"),
        { analyticsLocations: M } = (0, w.Ay)(O.A.AUDIO_INPUT_BUTTON),
        { Component: L, events: P, play: k } = R,
        D = a || s ? im.O : L;
    i.useEffect(() => () => k(), [b, k]);
    let U = (0, ix.A)(n, a, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: ew.intl.string(ew.t["29gnR4"]), tooltipForceOpen: !0 }
        : x || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ew.intl.format(ew.t.c1qUOQ, { keybind: tl.dI(T).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let F = _ && N,
        G = b ? nI.A.colors.ICON_VOICE_MUTED : "currentColor",
        V = i.useCallback(() => {
            (h(), y && ih.N(iv.v.MUTE_TUTORIAL));
        }, [h, y]);
    return (0, l.jsxs)(w.f5, {
        value: M,
        children: [
            (0, l.jsx)(p.Y, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        E(),
                        (0, l.jsx)(w.f5, {
                            value: M,
                            children: (0, l.jsx)(ia.A, {
                                onInteraction: (0, K.s)("AudioDeviceMenu", O.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: S.length > 0,
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
                        s = a ? it.t : il.a;
                    return (0, l.jsxs)("div", {
                        ref: I,
                        className: r()(io.Lh, { [io.v8]: b, [io.q6]: a }),
                        children: [
                            (0, l.jsx)(ir.A, {
                                "aria-checked": b,
                                "aria-label": ew.intl.string(ew.t.w4m945),
                                className: io.eT,
                                disabled: o,
                                icon: (0, l.jsx)(D, { size: "custom", width: 20, height: 20, color: G, className: u }),
                                onClick: V,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    (c(), P.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), P.onMouseLeave());
                                },
                                plated: null != f,
                                redGlow: b,
                                role: "switch",
                                ...t,
                                children: F ? (0, l.jsx)("div", { className: r()(iC.U, { [iC.z]: C }) }) : null,
                            }),
                            (0, l.jsx)(ir.A, {
                                "aria-label": v
                                    ? ew.intl.formatToPlainString(ew.t["18wnuD"], { inputDeviceName: j })
                                    : ew.intl.string(ew.t.fRzCbB),
                                className: r()(io.UT, { [io.q6]: a }),
                                disabled: o,
                                icon: (0, l.jsx)(s, {
                                    className: io.$$,
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
                                    ? ew.intl.formatToPlainString(ew.t["18wnuD"], { inputDeviceName: j })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: v
                                    ? ew.intl.format(ew.t["18wnuD"], { inputDeviceName: j })
                                    : ew.intl.string(ew.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, l.jsx)(nV.A, {
                targetElementRef: I,
                shouldShow: y,
                graphic: { type: "image", src: i_.A },
                onRequestClose: () => {
                    ih.N(iv.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ew.intl.string(iE.default.VG4zAf),
                body: ew.intl.string(iE.default["8VIRzR"]),
            }),
        ],
    });
}
var iy = n(935399),
    iN = n(505312),
    ij = n(848847),
    iS = n(975807),
    iI = n(425565),
    ib = n(48498);
function iR(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = i.useMemo(
            () => [
                {
                    text: ew.intl.string(ib.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, iS.A)(iI.C), t(n$.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        r = i.useCallback(() => {
            t(n$.i.USER_DISMISS);
        }, [t]);
    return (0, l.jsx)(nV.A, {
        targetElementRef: n,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/147b33df1db170b53e140d7ad45552731aa0b9b16b7a7358cb9916634167ee02.png",
            aspectRatio: "16/9",
        },
        title: ew.intl.string(ib.default.tmst3F),
        body: ew.intl.string(ib.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: a,
        onRequestClose: r,
    });
}
function iM(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: i } = (0, w.Ay)(O.A.HOLIDAY_COACHMARK);
    return (0, l.jsx)(nV.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: ew.intl.string(ew.t.Mjs8KR),
        body: ew.intl.string(ew.t.U0INks),
        actions: [
            {
                text: ew.intl.string(ew.t.NENZhS),
                onClick: () => {
                    ((0, eX.openUserSettings)(e$.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: i }),
                        t(n$.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(n$.i.USER_DISMISS),
    });
}
var iO = n(88001),
    iw = n(222065),
    iL = n(438705);
function iP(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        r = i.useCallback(() => {
            (a(), (0, eX.openUserSettings)(e$.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, l.jsx)(nV.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: iL },
        shouldShow: n,
        title: ew.intl.format(iw.default.bx8sR9, { premiumGroupProductName: (0, iO.DP)() }),
        body: ew.intl.format(iw.default.Pw4OFZ, { premiumGroupProductName: (0, iO.DP)() }),
        onRequestClose: a,
        actions: [{ text: ew.intl.string(iw.default.DD26QR), onClick: r }],
    });
}
var ik = n(873298),
    iD = n(840387);
function iU(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, iD.Z)(),
        r = nc.KP.useSetting(),
        s = a && r !== ik.KP.FRIENDS_AND_ALL_GUILDS,
        o = i.useCallback(() => {
            (t(n$.i.TAKE_ACTION), (0, eX.openUserSettings)(e$.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = i.useCallback(() => {
            t(n$.i.USER_DISMISS);
        }, [t]),
        d = s
            ? r === ik.KP.FRIENDS_ONLY
                ? ew.intl.string(ew.t["/hogEy"])
                : ew.intl.string(ew.t["6hEfm1"])
            : ew.intl.string(ew.t.bnNxW1);
    return (0, l.jsx)(nV.A, {
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
        title: ew.intl.string(ew.t.Ve4nS1),
        body: d,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ew.intl.string(ew.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var iF = n(415443);
function iG(e) {
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
        [h, f] = i.useState(!1);
    (0, iy.Ay)(() => {
        function e() {
            return f(!0);
        }
        return (
            l_._.subscribe(tE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                l_._.unsubscribe(tE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let p = i.useCallback(() => {
            (f(!1), r());
        }, [r]),
        g = eu.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, iF.A)("1793380847489", !0);
        t =
            null != e
                ? ew.intl.formatToPlainString(ew.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : ew.intl.formatToPlainString(ew.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = ew.intl.string(ew.t.cduTBL);
    let A = e8.SettingsIcon,
        v = (0, iN.w)();
    return (
        (A = null != a ? ij.H : v.Component),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ir.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: p,
                    onContextMenu: s,
                    "aria-label": ew.intl.string(ew.t.cduTBL),
                    icon: (0, l.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...v.events,
                    plated: null != d,
                }),
                (0, l.jsx)(iP, { targetElementRef: m, shouldShow: h, onDismiss: () => f(!1) }),
                (0, l.jsx)(lO.Ay, {
                    contentTypes: o,
                    groupName: n$.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === c.M.TINY_BRONCO && null != ls.PL
                            ? (0, l.jsx)(i.Suspense, {
                                  fallback: null,
                                  children: (0, l.jsx)(ls.PL, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === c.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, l.jsx)(iU, { markAsDismissed: n, targetElementRef: m })
                              : t === c.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, l.jsx)(iR, { markAsDismissed: n, targetElementRef: m })
                                : null != g && t === g
                                  ? (0, l.jsx)(iM, { markAsDismissed: n, targetElementRef: m })
                                  : null;
                    },
                }),
            ],
        })
    );
}
var iV = n(358285);
let iH = ly.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
    iB = 2.5 * k.A.Millis.SECOND,
    iW = 2 * k.A.Millis.MINUTE,
    iz = 5 * k.A.Millis.SECOND;
function iZ(e) {
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
        T = (0, lC.F_)({ avatarDecoration: v, size: (0, Y.Te)(f._3.SIZE_32) }),
        N = (0, et.A)(),
        {
            updateOpenPopoutRef: j,
            highlightBadge: S,
            setHighlightBadge: I,
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
                        l_._.subscribe(tE.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            l_._.unsubscribe(tE.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
              object: tE.ZSU.AVATAR,
              children: (0, l.jsx)(lu.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, lo.A)(u.id, u.getAvatarURL(void 0, lu.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, l.jsx)(ll, {
                          currentUser: u,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: i,
                          className: iV.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: p.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (m(), I(void 0));
                  },
                  children: (e) => {
                      j(e);
                      let { onMouseEnter: t, onMouseDown: i, ...m } = e;
                      return (0, l.jsxs)("div", {
                          ref: _,
                          style: b,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              (e.onClick?.(t), c?.(t));
                          },
                          className: r()(iV.Q9, { [iV.ZQ]: null != A }),
                          children: [
                              (0, l.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                                  },
                                  "aria-label": ew.intl.string(ew.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: iV.$n,
                                  "data-jump-section": x,
                              }),
                              (0, l.jsx)(iH, {
                                  size: f._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: o ? tE.clD.STREAMING : d,
                                  voiceStatus: (0, f.n$)(n, a),
                                  voiceDb: s,
                                  className: iV.my,
                                  "aria-hidden": !0,
                              }),
                              (0, l.jsx)("div", { className: iV.oM, children: h(N) }),
                          ],
                      });
                  },
              }),
          });
}
class iK extends i.PureComponent {
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
        ((0, z.A)(e, t, tE.JJy.ACCOUNT_PANEL), (0, Z.X)(O.A.ACCOUNT, Z.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, W.A)(e, tE.JJy.ACCOUNT_PANEL), (0, Z.X)(O.A.ACCOUNT, Z.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            lv.A.isConnected() ? (0, eX.openUserSettings)(e$.X.VOICE_AND_VIDEO_PANEL) : (0, eX.openUserSettings)());
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
                    n.e("131859"),
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
                    n.e("617249"),
                    n.e("836863"),
                    n.e("819316"),
                    n.e("132737"),
                    n.e("362422"),
                    n.e("146070"),
                    n.e("344502"),
                    n.e("88599"),
                    n.e("179049"),
                    n.e("854622"),
                    n.e("95340"),
                    n.e("233197"),
                    n.e("807936"),
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
                    n.e("304843"),
                    n.e("993720"),
                    n.e("654658"),
                    n.e("902815"),
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
                    let { enabledInputProfiles: n } = (0, ld.d)({ location: "Account" });
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > iW;
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
                      this.speakingWhileMutedTooltipTimeout.start(iB, () =>
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
        if ((0, N.A)({ activities: t, status: a, applicationStream: n, voiceChannel: s }))
            return (0, l.jsxs)(M.A, {
                hoverText: r,
                forceHover: e,
                children: [
                    (0, l.jsx)(A.A, { children: nr.Ay.humanizeStatus(a) }),
                    (0, l.jsx)(j.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: iV.XD,
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
                      (0, l.jsx)(A.A, { children: nr.Ay.humanizeStatus(a) }),
                      (0, l.jsx)(ee.A, { activity: o, emojiClassName: iV.Zg, className: iV.WO }),
                  ],
              })
            : null != a && a !== tE.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, l.jsx)(M.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, l.jsx)(R, { text: nr.Ay.humanizeStatus(a) }),
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
                          className: iV.eW,
                          children: (0, l.jsx)(lj.A, {
                              className: r()({ [iV.e8]: null != e }),
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
                          className: iV.XP,
                          children: (0, l.jsx)(lN.A, { children: this.renderStatus() }),
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
            : (0, l.jsx)(l9, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: i.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, l.jsx)(iZ, {
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
                          className: r()(iV.kL, { [iV.UG]: null != n, [iV.bc]: !i, [iV.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, l.jsx)(J.A, { nameplate: t, hovered: s, placement: X.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, l.jsx)(iq, {
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
function iq(e) {
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
            dismissTooltips: y,
            speaking: N,
        } = e,
        j = (0, $.K)(C);
    function S() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, l.jsx)(iG, {
            webBuildOverride: d,
            onClick: A,
            onContextMenu: v,
            dismissibleContents: [...x.settings, ...e],
            iconForeground: null != C ? iV.t4 : void 0,
            nameplate: C,
        });
    }
    return (0, l.jsxs)("div", {
        className: iV.Uo,
        style: j,
        children: [
            (0, l.jsx)(iT, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: c,
                onMouseLeave: m,
                onClick: f,
                onContextMenu: p,
                iconForeground: null != C ? iV.t4 : void 0,
                nameplate: C,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === T,
                dismissTooltips: y,
                speaking: N,
            }),
            (0, l.jsx)(id, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != C ? iV.t4 : void 0,
                nameplate: C,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: y,
            }),
            null != ls.Lf
                ? (0, l.jsx)(i.Suspense, { fallback: S(), children: (0, l.jsx)(ls.Lf, { occluded: E, children: S }) })
                : S(),
        ],
    });
}
function iY(e) {
    let t = (0, d.bG)([lv.A], () => null != lv.A.getChannelId()),
        n = (0, ec.Py)(e),
        l = i.useRef(new m.Ep()),
        [a, r] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (r(!0),
            l.current.start(iz, () => {
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
function iQ() {
    let e,
        t,
        n,
        a,
        r = (0, d.bG)([nw.default], () => nw.default.getCurrentUser()),
        s = (0, d.bG)([nY.default], () => nY.default.getId()),
        {
            activities: m,
            streaming: h,
            status: f,
        } = (0, d.cf)([n0.A], () => {
            let e = n0.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: n0.A.getStatus(),
            };
        }),
        p = (0, d.bG)([lh.A], () => lh.A.getAnyStreamForUser(s)),
        g = (0, _.A)({ userId: s }),
        A = (0, d.bG)([la.A], () => la.A.isUserPlayingSounds(s)),
        v = (0, d.bG)([lE.A], () => lE.A.getVoiceVolume(s)),
        E = nr.Ay.useUserTag(r, { decoration: "never" }),
        C = (0, d.bG)([lv.A, lf.A], () => {
            let e = lv.A.getChannelId();
            return null != e ? lf.A.getChannel(e) : null;
        }),
        { mute: T, selfMute: y, suppress: N } = (0, lm.A)(C),
        { selfDeaf: j, deaf: S } = (0, lc.A)(C),
        I = (0, d.bG)([V.A], () => ((0, H.kK)() ? V.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        b = (0, d.bG)([lA.Ay], () => lA.Ay.getSpeakingWhileMuted()),
        R = (0, d.bG)([B.A], () => B.A.isFullscreenInContext()),
        M = (0, d.bG)([lg.A], () => lg.A.hasLayers()),
        W = (0, x.useModalsStore)(x.hasAnyModalOpenSelector) || M || lT.P.isDisallowPopupsSet() || R,
        z = (0, d.bG)([ei.default], () => null != ei.default.getAwaitingRemoteSessionInfo()),
        Z = (0, d.bG)([lx.A], () => lx.A.getGuildId()),
        K = r?.avatarDecoration,
        Y = (0, q.A)(K),
        $ = nr.Ay.useName(r) ?? "",
        { analyticsLocations: X } = (0, w.Ay)(O.A.ACCOUNT),
        J = (0, Q.r)({ user: r, guildId: void 0 }),
        { isQuestBarEmpty: ee } = (0, li.c9)(),
        et = (0, d.bG)([lr.A, nw.default, lp.A], () => {
            let e,
                t = lr.A.getSyncingWith(),
                n = lr.A.getActivity(),
                l = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (l = o()(Array.from(lp.A.getParty(e) ?? []))
                        .map((e) => nw.default.getUser(e))
                        .filter(nj.Vq)
                        .value()),
                l.length > 1
            );
        }),
        en = { avatar: [], settings: [] },
        el = (0, nm.H)({ location: "Account" }) && !W,
        ec = ed.A.useIsEligible(),
        em = eu.A.coachmarkDismissibleContent,
        eh = (0, L.d)({ location: "AccountCoachmark" }),
        ef =
            ((e = (0, d.bG)([er.A], () => er.A.hasLoaded(eo.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, ea.HX)(c.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (a = (0, es.y)({ location: "AccountCoachmark", countGiftCardWallet: !0, canFetchPaymentSources: n })),
            n && a),
        ep = (function (e) {
            let { currentUserId: t, enabled: n, fetchCatalog: l = !0 } = e,
                a = n ? t : null,
                r = (0, d.bG)([F.Ay], () => null != a && F.Ay.hasCatalogFor(a), [a]),
                s = (0, d.bG)([F.Ay], () => null != a && F.Ay.hasCatalogFetchErrorFor(a), [a]),
                [o] = i.useState(() => new P.A(5 * k.A.Millis.SECOND, 5 * k.A.Millis.MINUTE)),
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
                f = l && o.fails < 3;
            return { variantProps: h, isPending: null != a && !r && (!s || f) };
        })({ currentUserId: r?.id, enabled: eh }).variantProps;
    W ||
        (en.avatar.push(c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != ep && en.avatar.push(c.M.BADGE_DIRECTORY_NUX_POPOVER),
        ec && null != em && en.settings.push(em),
        ef && en.settings.push(c.M.GIFT_CARDS_MARKETING_COACHMARK),
        en.settings.push(c.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: eg, dismissTooltip: eA } = iY(is.oh.AUDIO_INPUT),
        { shouldShowTooltip: ev, dismissTooltip: ex } = iY(is.oh.AUDIO_OUTPUT),
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
        children: (0, l.jsx)(iK, {
            currentUser: r,
            username: $,
            activities: m,
            applicationStream: p,
            voiceChannel: C,
            dismissibleContents: en,
            badgeDirectoryNuxPopoverVariant: ep,
            isOrbchievementsEnabled: el,
            userTag: E,
            occluded: W,
            selfDeaf: j,
            selfMute: y,
            serverDeaf: S,
            serverMute: T,
            speaking: g,
            playingSoundboard: A,
            voiceDb: v,
            speakingWhileMuted: b,
            status: f,
            streaming: h,
            suppress: N,
            webBuildOverride: I,
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
