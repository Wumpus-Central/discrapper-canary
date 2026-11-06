(n.d(t, { g: () => rt, A: () => rl }), n(321073));
var i = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(435558),
    o = n.n(s),
    u = n(350835),
    c = n(855986),
    d = n(554146),
    m = n(451988),
    f = n(97808),
    p = n(778712),
    h = n(265872),
    g = n(939249),
    A = n(140735),
    C = n(312138);
if (221552 == n.j) var E = n(192308);
var x = n(442433),
    v = n(820284),
    _ = n(717558),
    y = n(964486),
    b = n(220839),
    T = n(397244),
    S = n(342312),
    I = n(160808),
    N = n(120692),
    j = n(866323),
    R = n(120842);
function M(e) {
    let { text: t } = e,
        n = (0, j.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
        });
    return (0, i.jsx)("div", {
        className: R.k,
        children: n((e, t) => (0, i.jsx)(N.animated.div, { className: R.H, style: e, children: t })),
    });
}
var O = n(29160),
    P = n(793574),
    k = n(688810),
    L = n(643056),
    D = n(158390),
    w = n(927813),
    U = n(682618),
    G = n(864197),
    F = n(982240),
    B = n(988341),
    H = n(521502),
    V = n(380610),
    W = n(628983),
    K = n(18235),
    z = n(183184),
    Y = n(384059),
    q = n(480890),
    Q = n(601255),
    $ = n(562819),
    X = n(449582),
    Z = n(351952),
    J = n(88686),
    ee = n(214881),
    et = n(945810),
    en = n(417869),
    ei = n(153488),
    el = n(652215);
let er = new Set([el.fg2.PLAYSTATION, el.fg2.PLAYSTATION_STAGING, el.fg2.XBOX]),
    ea = (0, et.mj)({
        name: "2026-11-console-connection-coachmark",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    });
var es = n(302223),
    eo = n(609425),
    eu = n(922301),
    ec = n(16371),
    ed = n(643501),
    em = n(826673),
    ef = n(617617),
    ep = n(798091),
    eh = n(355097),
    eg = n(382633),
    eA = n(552122),
    eC = n(74848),
    eE = n(607399),
    ex = n(305866),
    ev = n(707554),
    e_ = n(95362),
    ey = n(22231),
    eb = n(805251),
    eT = n(935154),
    eS = n(780338);
if (221552 != n.j) var E = n(192308);
var eI = n(224640),
    eN = n(165862),
    ej = n(877784),
    eR = n(26137),
    eM = n(473935),
    eO = n(765671),
    eP = n(470739),
    ek = n(142617),
    eL = n(289873),
    eD = n(366056),
    ew = n(477782),
    eU = n(320448),
    eG = n(834730),
    eF = n(993401),
    eB = n(792996),
    eH = n(211450);
function eV(e) {
    return (0, i.jsx)("div", {
        className: eH.wE,
        children: (0, i.jsx)(eN.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eW(e) {
    let {
            action: t,
            onClick: n,
            icon: r,
            label: a,
            sublabel: s,
            trailing: o,
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: m,
        } = e,
        f = null != n,
        p = (0, eF.rE)({ action: t, onClick: n }),
        [A, C] = l.useState(!1),
        x = l.useRef(null),
        v = c ?? x,
        _ = null != u,
        y = _ && f,
        b = l.useCallback(() => {
            C(!0);
        }, []),
        T = l.useCallback(() => {
            (0, E.ue)() || C(!1);
        }, []);
    function S() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eH.iA, children: (0, i.jsx)(r, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eH.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eG.E, {
                                    color: "currentColor",
                                    variant: "body-sm/medium",
                                    className: eH.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(eG.E, { color: "currentColor", variant: "body-xs/medium", children: s }),
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
            (t = y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.D, { className: eH.ef, onClick: p, children: S() }),
                          (0, i.jsx)(g.D, {
                              className: eH.ap,
                              "aria-label": eB.intl.string(eB.t.PdRCRg),
                              ...e,
                              onClick: b,
                              children: (0, i.jsx)(eU.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(g.D, {
                        className: eH.ef,
                        ...e,
                        onClick: b,
                        children: [
                            S(),
                            (0, i.jsx)("div", {
                                className: eH.ap,
                                children: (0, i.jsx)(eU.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(g.D, { className: eH.ef, onClick: p, children: S() })),
            (0, i.jsx)("div", { ref: v, className: eH.jG, children: t })
        );
    }
    return _
        ? (0, i.jsx)("li", {
              className: eH.j$,
              onMouseEnter: b,
              onMouseLeave: T,
              children: (0, i.jsx)(h.Y, {
                  targetElementRef: d ?? v,
                  align: m,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: A,
                  onRequestClose: T,
                  children: I,
              }),
          })
        : (0, i.jsx)("li", { className: eH.j$, children: I() });
}
function eK(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var ez = n(719718),
    eY = n(925433),
    eq = n(796104),
    eQ = n(148295),
    e$ = n(858899);
function eX(e, t) {
    (0, e$.P0)({ text: e, variant: "success" === t ? "success" : "critical" });
}
var eZ = n(96494);
function eJ(e, t, n, i) {
    return { id: e, label: t, description: n, action: () => (0, eY.D)("qa_menu", i !== eQ.S.NO_PERSONAL_DATA, i) };
}
let e0 = [
    eJ("open", eZ.default.yLZjcu),
    {
        id: "reset",
        label: eZ.default["2DL3aX"],
        action: async () => {
            (await (0, eq.sm)())
                ? eX(eB.intl.string(eZ.default.D5x6qE), "success")
                : eX(eB.intl.string(eZ.default.EkMBfH), "failure");
        },
    },
    eJ("open-fake-data", eZ.default.kPBZ5M, eZ.default.cf0nfD, eQ.S.DEFAULT),
    eJ("open-global-stats", eZ.default.UwiUbM, eZ.default["+5dICr"], eQ.S.NO_PERSONAL_DATA),
    eJ("open-zero-stats", eZ.default.BYW9oX, eZ.default.NffC17, eQ.S.ZERO_DATA),
];
var e1 = n(852717),
    e2 = n(641214);
function e3() {
    return (0, i.jsx)(eL.y, { type: eL.t.SPINNING_CIRCLE_SIMPLE, className: e2.u1, itemClassName: e2.$N });
}
function e6(e) {
    let { onClose: t } = e,
        n = (0, ek.TX)("CheckpointUserStatusMenuItem"),
        l = (0, c.bG)([ez.A], () => ez.A.isFetching);
    return (0, i.jsx)(eW, {
        icon: l ? e3 : eD.ExperimentalCheckpointIcon,
        label: eB.intl.string(e1.default["8hclXY"]),
        sublabel: (0, i.jsx)("span", { className: e2.$B, children: eB.intl.string(e1.default.BFc4lY) }),
        onClick: async function () {
            (await (0, eY.D)("user_profile_account_popout"), t());
        },
        renderSubmenu: n
            ? (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(eV, {
                      navId: "checkpoint-qa-submenu",
                      "aria-label": eB.intl.string(eZ.default["9dS734"]),
                      className: e2.gn,
                      onClose: n,
                      children: e0.map((e) =>
                          (0, i.jsx)(
                              ew.Dr,
                              {
                                  id: e.id,
                                  label: eB.intl.string(e.label),
                                  subtext: null != e.description ? eB.intl.string(e.description) : void 0,
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
var e8 = n(176781),
    e5 = n(812993),
    e7 = n(780964),
    e9 = n(766075),
    e4 = n(734066),
    te = n(419490),
    tt = n(409067),
    tn = n(271597),
    ti = n(534514),
    tl = n(475358),
    tr = n(866665),
    ta = n(408278),
    ts = n(625903),
    to = n(404778),
    tu = n(516521),
    tc = n(821609),
    td = n(532624),
    tm = n(879631),
    tf = n(350535),
    tp = n(341923),
    th = n(572164),
    tg = n(953932),
    tA = n(280483),
    tC = n(890856),
    tE = n(713517),
    tx = n(609174),
    tv = n(151184);
function t_(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        r = (0, tx.Y_)(),
        a = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, tn.p)({ initialEditingClipId: r.id }));
            },
            [r, t],
        );
    return (0, i.jsx)(tc.$, {
        onClick: a,
        icon: ey.PencilIcon,
        variant: n,
        size: "sm",
        text: eB.intl.string(eB.t.bt75uw),
        fullWidth: !0,
    });
}
var ty = n(82716),
    tb = n(449397),
    tT = n(399053),
    tS = n(285072),
    tI = n(575172);
let tN = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: r, className: s } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: u } = (0, tE.A)(o),
        c = l.useCallback(() => {
            (r?.(), (0, tn.p)({ initialEditingClipId: t.id }));
        }, [t.id, r]);
    return (0, i.jsx)(tx.Cl, {
        clip: t,
        children: (0, i.jsx)(tC.s, {
            ref: o,
            "aria-label": eB.intl.string(eB.t.bt75uw),
            onClick: c,
            className: a()(tI.Z1, s),
            children: (0, i.jsxs)(tT.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, i.jsx)("div", {
                            className: tI.Ad,
                            children: (0, i.jsx)(eb.E, { type: "new", variant: "primary" }),
                        }),
                    (0, i.jsxs)(tS.h, {
                        isVisible: u,
                        className: tI.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tI.mY,
                                children: [(0, i.jsx)(ty.z, {}), (0, i.jsx)(tv.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tI.E_,
                                children: [
                                    (0, i.jsx)(t_, { onBeforeEdit: r, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tb.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tj = n(696016),
    tR = n(753070),
    tM = n(683825),
    tO = n(48127);
function tP(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: r, setPopoutRef: a } = e;
    (0, tA.A)();
    let s = (0, c.yK)([te.Ay], () => Object.values(te.Ay.getClips())),
        o = (0, c.bG)([te.Ay], () => te.Ay.getSettings()),
        u = (0, c.bG)([te.Ay], () => te.Ay.getNewClipIds()),
        d = (0, tp.H)(),
        m = (0, c.bG)([te.Ay], () => te.Ay.getEnableAutoclipping()),
        f = (0, c.bG)([td.Ay], () => td.Ay.getKeybindForAction(el.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                a?.(e);
            },
            [a],
        ),
        h = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = s.filter((e) => e.type === tj.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, tt.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, h]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        C = g.length > 16,
        E = null != f ? tf.dI(f.shortcut, !0) : null,
        x = [
            (0, tm.$)(o.clipsLength / w.A.Millis.SECOND),
            (0, tR.zr)(o.clipsQuality.resolution),
            eB.intl.formatToPlainString(eB.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        d && x.push(eB.intl.string(tM.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tO.SW,
            role: "dialog",
            "aria-label": eB.intl.string(eB.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tO.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tO.$,
                            children: [
                                (0, i.jsx)(ti.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: eB.intl.string(eB.t.z2jK6X),
                                }),
                                null != E && (0, i.jsx)(tl.e, { className: tO.P, shortcut: E }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tO.$s,
                            children: [
                                (0, i.jsx)(tr.m, {
                                    text: eB.intl.string(eB.t["3D5yo/"]),
                                    children: (0, i.jsx)(ta.K, {
                                        onClick: () => n(),
                                        icon: ts.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eB.intl.string(eB.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(tr.m, {
                                    text: eB.intl.string(tM.default["55C2MH"]),
                                    children: (0, i.jsx)(ta.K, {
                                        onClick: () => t(),
                                        icon: e8.ClipsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eB.intl.string(tM.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tO.ov,
                    children: [
                        x.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tO.LO, children: "\u2022" }),
                                        (0, i.jsx)(eG.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tO.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        d &&
                            (0, i.jsx)(eG.E, {
                                variant: "body-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tO.wS,
                                children: m ? eB.intl.string(tM.default.lTwKmt) : eB.intl.string(tM.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(to.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(tu.Ch, {
                          className: tO.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tN, { clip: e, isNew: u.includes(e.id), onClose: r }, e.id)),
                              C &&
                                  (0, i.jsx)("div", {
                                      className: tO.qr,
                                      children: (0, i.jsx)(tc.$, {
                                          onClick: () => t(),
                                          text: eB.intl.string(tM.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tk, { keybindString: E }),
            ],
        })
    );
}
function tk(e) {
    let { keybindString: t } = e,
        n = (0, th.E)();
    return (0, i.jsxs)("div", {
        className: tO.p$,
        children: [
            (0, i.jsx)(eG.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: tO.qO,
                children: eB.intl.string(tM.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eG.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: tO.CZ,
                      children: eB.intl.format(tM.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eG.E,
                                  {
                                      variant: "body-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(tl.e, { shortcut: t }, "keybind"),
                      }),
                  })
                : (0, i.jsx)(tg.A, {}),
        ],
    });
}
function tL(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        r = (0, e4.sw)(),
        a = !(0, c.bG)([te.Ay], () => te.Ay.getSettings().showPovClipsInGallery),
        s = (0, c.bG)(
            [te.Ay],
            () => {
                let e = te.Ay.getNewClipIds();
                return a
                    ? e.filter((e) => {
                          let t = te.Ay.getClipById(e);
                          return null != t && !(0, tt.kD)(t);
                      }).length
                    : e.length;
            },
            [a],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, tn.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = l.useCallback(() => {
            (t(), (0, e9.openUserSettings)(e7.X.CLIPS_PANEL));
        }, [t]);
    return r
        ? (0, i.jsx)(eW, {
              action: "PRESS_CLIPS",
              icon: e8.ClipsIcon,
              label: eB.intl.string(eB.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(e5.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tP, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tD = n(971217),
    tw = n(577390),
    tU = n(287727),
    tG = n(31956),
    tF = n(744808),
    tB = n(645507),
    tH = n(263775),
    tV = n(970931),
    tW = n(315710),
    tK = n(789645),
    tz = n(775602),
    tY = n(832248),
    tq = n(462887),
    tQ = n(736653),
    t$ = n(439174),
    tX = n(722178),
    tZ = n(105909),
    tJ = n(682901);
function t0() {
    let e = (0, tZ.Xb)(),
        t = (0, tX.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tJ.sp.length - 1; t >= 0; t--) {
        let i = tJ.VD[tJ.sp[t]],
            l = new Date(e);
        if ((l.setMonth(l.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let t1 = {
        [tJ.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [tJ.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [tJ.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [tJ.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [tJ.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [tJ.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [tJ.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [tJ.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    t2 = {
        [tJ.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [tJ.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [tJ.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [tJ.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [tJ.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [tJ.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [tJ.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [tJ.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var t3 = n(570484);
let t6 = l.lazy(() => Promise.all([n.e(969274), n.e(924832)]).then(n.bind(n, 748579)));
function t8() {
    let e = (0, c.bG)([tz.Ay], () => tz.Ay.useReducedMotion),
        t = (0, tY.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = t0(),
                t = (0, tq.M)((0, tQ.Ay)());
            if (null == e) return null;
            let n = t1[e],
                i = t2[e],
                l = {
                    currentBadge: (0, t$.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                r = tJ.sp.indexOf(e);
            if (r > 0) {
                let e = tJ.sp[r - 1],
                    n = t1[e];
                ((l.prevBadge = (0, t$.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [r, a] = l.useState(null);
    return (null != n && null == r && a(n), e || !t || null == r) ? null : (0, i.jsx)(t5, { levelUpData: r });
}
function t5(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        r = l.useCallback(() => {
            tY.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tW.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: t3.i,
            children: [
                (0, i.jsx)("div", {
                    className: t3.b,
                    children: (0, i.jsx)(tr.m, {
                        text: eB.intl.string(eB.t.cpT0Cq),
                        children: (0, i.jsx)(ta.K, {
                            icon: tK.XSmallIcon,
                            variant: "secondary",
                            size: "sm",
                            onClick: r,
                            "aria-label": eB.intl.string(eB.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(t6, { levelUpData: t }) }),
            ],
        }),
    });
}
var t7 = n(397562),
    t9 = n(206835),
    t4 = n(183555),
    ne = n(465318),
    nt = n(527212),
    nn = n(702476),
    ni = n(718019),
    nl = n(567556),
    nr = n(915614),
    na = n(560296),
    ns = n(559506),
    no = n(646986),
    nu = n(312294),
    nc = n(946356),
    nd = n(465829),
    nm = n(624479),
    nf = n(206845),
    np = n(957565),
    nh = n(427262),
    ng = n(62119);
function nA(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, t4.NJ)();
    return np.p5
        ? (0, i.jsx)(nf.A, {
              text: eB.intl.string(eB.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: nh.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(ng.c, { [ng.R]: n }),
                      "aria-label": eB.intl.string(eB.t.y5MwJy),
                      children: (0, i.jsx)(nm.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nC = n(680581),
    nE = n(442228),
    nx = n(253932),
    nv = n(362862),
    n_ = n(621466),
    ny = n(318254),
    nb = n(863610),
    nT = n(421773),
    nS = n(318346),
    nI = n(923138),
    nN = n(309954),
    nj = n(673125),
    nR = n(150849),
    nM = n(769001);
function nO(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: r, onCloseAccountPopout: s } = e;
    (0, nI.I)({ enabled: !0 });
    let { balance: o } = (0, nN.W)(),
        u = (0, c.bG)([nj.Ay], () =>
            nj.Ay.userOpenedWalletViaProfileDCF ? nj.Y0.NEW_ACHIEVEMENT : nj.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            nj.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: d, onMouseEnter: m, onMouseLeave: f, setIsHovered: p, cancelTimers: A } = (0, nT.A)(0, 500),
        C = l.useCallback(() => {
            (0, E.ue)() || f();
        }, [f]),
        x = l.useRef(null),
        v = l.useRef(null),
        _ = l.useRef(null),
        y = l.useCallback(
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
            if (d)
                return (document.addEventListener("mouseover", e), () => document.removeEventListener("mouseover", e));
            function e(e) {
                if ((0, E.ue)()) return;
                let t = (0, n_.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${eH.j$}`);
                null != n && n !== x.current && (A(), p(!1));
            }
        }, [d, A, p]));
    let b = l.useRef(!1);
    l.useEffect(() => {
        d || (b.current = !1);
    }, [d]);
    let T = l.useCallback(() => {
            (b.current ||
                ((b.current = !0),
                (0, nS.Y)({
                    pageType: P.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: P.A.ORB_WALLET,
                    ctaObject: P.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        S = (0, eF.rE)({ action: "PRESS_ORBS", onClick: T });
    l.useEffect(() => {
        let e = n?.current,
            t = x.current;
        if (!r || null == e || null == t) return;
        function i() {
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect(),
                i = t.getBoundingClientRect(),
                l = i.bottom + 24 - n.bottom,
                r = n.top - (i.top - 24);
            l > 0 ? (e.scrollTop += l) : r > 0 && (e.scrollTop -= r);
        }
        let l = requestAnimationFrame(i),
            a = new ResizeObserver(i);
        for (let t of (a.observe(e), Array.from(e.children))) a.observe(t);
        function s() {
            (a.disconnect(), clearTimeout(o));
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
    }, [r, n]);
    let I = l.useMemo(
            () =>
                null != o
                    ? eB.intl.format(eB.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(nb.n, { dotRadius: 3.5, themed: !0, className: nM.K }),
            [o],
        ),
        N = l.useMemo(
            () =>
                u === nj.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(eb.E, { type: "new", variant: "primary" })
                    : u === nj.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(eb.E, { type: { text: eB.intl.string(eB.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        j = l.useCallback(() => {
            (A(), p(!1), s());
        }, [A, p, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, n_.vq)(t, Node) && null != x.current && x.current.contains(t) && A();
            },
            [A],
        );
    return (0, i.jsx)("li", {
        ref: x,
        className: eH.j$,
        onMouseEnter: T,
        onMouseLeave: C,
        children: (0, i.jsx)(h.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, i.jsx)("div", {
                    ref: y,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, i.jsx)(nR.vG, { onCloseWallet: j, returnRef: v, isProfilePopout: !0 }),
                }),
            shouldShow: d,
            onRequestClose: C,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: eH.jG,
                    children: (0, i.jsxs)(g.D, {
                        innerRef: v,
                        className: eH.ef,
                        ...e,
                        onClick: S,
                        children: [
                            (0, i.jsx)("div", {
                                className: eH.iA,
                                children: (0, i.jsx)(ny.OrbsIcon, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: eH.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eG.E, {
                                        color: "currentColor",
                                        variant: "body-sm/medium",
                                        className: eH.W1,
                                        children: I,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(eH.ap, nM._),
                                children: [
                                    N,
                                    (0, i.jsx)(eU.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nP = n(290863),
    nk = n(351906),
    nL = n(403362),
    nD = n(562153),
    nw = n(646514),
    nU = n(628284),
    nG = n(695366),
    nF = n(413599),
    nB = n(619019),
    nH = n(287809),
    nV = n(129230),
    nW = n(429707),
    nK = n(274303),
    nz = n(994125),
    nY = n(347853),
    nq = n(573879),
    nQ = n(559117),
    n$ = n(43105),
    nX = n(661439),
    nZ = n(385113),
    nJ = n(352003),
    n0 = n(429913),
    n1 = n(334074),
    n2 = n(633075),
    n3 = n(667049),
    n6 = n(46653),
    n8 = n(90165),
    n5 = n(49999),
    n7 = n(518477);
function n9(e) {
    let { targetElementRef: t, onClose: r } = e,
        [a, s] = l.useState(!1),
        o = (0, c.bG)([n6.default], () => n6.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, c.yK)([nZ.A], () => nZ.A.getFeaturedApplicationIds());
            ((0, nJ.A)(e),
                l.useEffect(() => {
                    (0, nX.X)();
                }, []));
            let t = (0, c.bG)([n6.default], () => n6.default.getId()),
                n = (0, n3.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof n2.R), [n]),
                r = (0, n0.A)(e),
                a = l.useMemo(() => r.filter(nL.Vq), [r]),
                s = (0, c.cf)([n8.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = n8.A.getLastPlayedDateTime(e));
                    }
                    return t;
                }),
                o = l.useMemo(() => {
                    let e = Date.now();
                    return a.filter((t) => {
                        if (i.some((e) => e.applicationId === t.id)) return !1;
                        let n = s[t.id];
                        return null != n && e - n < 7776e6;
                    });
                }, [a, i, s]),
                { eligibleToShow: u, markAsDismissed: m } = (0, n1.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: n1.SH,
                });
            return {
                eligibleApplications: l.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]),
                markAsDismissed: m,
            };
        })();
    return ((0, l.useEffect)(() => {
        0 !== u.length &&
            Promise.all([
                n.e(459257),
                n.e(535308),
                n.e(393514),
                n.e(816027),
                n.e(562772),
                n.e(970604),
                n.e(399275),
                n.e(677624),
                n.e(165291),
                n.e(796668),
                n.e(953327),
                n.e(733814),
                n.e(106980),
                n.e(839772),
                n.e(814431),
                n.e(763214),
                n.e(291103),
                n.e(439120),
                n.e(488602),
                n.e(426737),
                n.e(607468),
                n.e(440636),
                n.e(568960),
                n.e(315289),
                n.e(372883),
                n.e(396635),
                n.e(339715),
                n.e(149697),
                n.e(128804),
                n.e(60882),
                n.e(71151),
                n.e(985301),
                n.e(981059),
                n.e(790484),
                n.e(211004),
                n.e(269714),
                n.e(62849),
                n.e(489020),
                n.e(670058),
                n.e(527798),
                n.e(892877),
                n.e(322497),
                n.e(249918),
                n.e(123981),
                n.e(862543),
                n.e(759086),
                n.e(422037),
                n.e(412117),
                n.e(263406),
                n.e(1955),
                n.e(341161),
                n.e(410526),
                n.e(202985),
                n.e(603619),
                n.e(175927),
                n.e(470126),
                n.e(227853),
                n.e(286615),
                n.e(735042),
                n.e(311541),
                n.e(274227),
                n.e(870088),
                n.e(300641),
                n.e(571163),
                n.e(586662),
                n.e(831377),
                n.e(709976),
                n.e(860596),
                n.e(279774),
                n.e(763945),
                n.e(261204),
                n.e(686731),
                n.e(807432),
                n.e(873532),
                n.e(590088),
                n.e(807003),
                n.e(46083),
                n.e(152133),
                n.e(747802),
                n.e(626353),
                n.e(71169),
                n.e(906470),
                n.e(736663),
                n.e(419121),
                n.e(919789),
                n.e(669130),
                n.e(802890),
                n.e(82937),
                n.e(987221),
                n.e(157064),
                n.e(156957),
                n.e(918786),
                n.e(701335),
                n.e(257935),
                n.e(724086),
                n.e(358937),
                n.e(448738),
                n.e(206189),
                n.e(804439),
                n.e(84978),
                n.e(894292),
                n.e(153302),
                n.e(88683),
                n.e(694414),
                n.e(923981),
                n.e(750370),
                n.e(972281),
                n.e(307107),
                n.e(896622),
                n.e(466592),
                n.e(73946),
                n.e(228271),
                n.e(387970),
                n.e(847445),
                n.e(547510),
                n.e(966366),
                n.e(983513),
                n.e(76928),
                n.e(699250),
                n.e(528311),
                n.e(377109),
                n.e(74886),
                n.e(713273),
                n.e(546547),
                n.e(102075),
                n.e(412408),
                n.e(193457),
                n.e(892937),
                n.e(420446),
                n.e(490449),
                n.e(148758),
                n.e(36026),
                n.e(709546),
                n.e(825661),
                n.e(119766),
                n.e(589154),
                n.e(888499),
                n.e(839182),
                n.e(52727),
                n.e(423117),
                n.e(465650),
                n.e(166171),
                n.e(595990),
                n.e(218781),
                n.e(324469),
                n.e(70379),
                n.e(417333),
                n.e(127962),
                n.e(834552),
                n.e(993103),
                n.e(863232),
                n.e(708757),
                n.e(295507),
                n.e(332447),
                n.e(959880),
                n.e(174016),
                n.e(22921),
                n.e(910471),
                n.e(11301),
                n.e(430858),
                n.e(861060),
                n.e(364827),
                n.e(77333),
                n.e(626565),
                n.e(257980),
                n.e(960235),
                n.e(585968),
                n.e(486137),
                n.e(80421),
                n.e(206027),
                n.e(393471),
                n.e(177641),
                n.e(198329),
                n.e(678157),
                n.e(942374),
                n.e(223219),
                n.e(130795),
                n.e(10866),
                n.e(313537),
                n.e(40291),
                n.e(733115),
                n.e(397270),
                n.e(406222),
                n.e(761597),
                n.e(373122),
                n.e(649408),
                n.e(221856),
                n.e(186212),
                n.e(755936),
                n.e(147662),
                n.e(316344),
                n.e(973973),
                n.e(274501),
                n.e(544571),
                n.e(692990),
                n.e(714496),
                n.e(305834),
                n.e(745959),
                n.e(858529),
                n.e(481987),
                n.e(595653),
                n.e(958038),
                n.e(532039),
                n.e(719466),
                n.e(787412),
                n.e(576909),
                n.e(830228),
                n.e(27355),
                n.e(953665),
                n.e(406174),
                n.e(713708),
                n.e(776273),
                n.e(492762),
                n.e(885533),
                n.e(282833),
                n.e(393766),
                n.e(572963),
                n.e(188689),
                n.e(229787),
                n.e(521930),
                n.e(554241),
                n.e(724303),
                n.e(53102),
                n.e(918024),
                n.e(88599),
                n.e(780262),
                n.e(354044),
                n.e(437065),
                n.e(709640),
                n.e(952548),
                n.e(893917),
                n.e(636373),
                n.e(230664),
                n.e(655708),
                n.e(889638),
                n.e(553984),
                n.e(142867),
                n.e(884601),
                n.e(782969),
                n.e(776766),
                n.e(504370),
                n.e(620656),
                n.e(495786),
                n.e(428967),
                n.e(782791),
                n.e(129080),
                n.e(238232),
                n.e(608032),
                n.e(477970),
                n.e(823300),
                n.e(136204),
                n.e(736926),
                n.e(252229),
                n.e(523276),
                n.e(77473),
                n.e(440142),
                n.e(812042),
                n.e(547801),
                n.e(729963),
                n.e(830938),
                n.e(538513),
                n.e(919726),
                n.e(325047),
                n.e(907424),
                n.e(50097),
                n.e(188545),
                n.e(144179),
                n.e(838090),
                n.e(536973),
                n.e(203930),
                n.e(903663),
                n.e(246969),
                n.e(566976),
                n.e(908081),
                n.e(914248),
                n.e(922606),
                n.e(646284),
                n.e(829260),
                n.e(965061),
                n.e(504098),
                n.e(746479),
                n.e(604172),
                n.e(568881),
                n.e(582486),
                n.e(350949),
                n.e(671367),
                n.e(134504),
                n.e(248985),
                n.e(553683),
                n.e(280098),
                n.e(181162),
                n.e(704374),
                n.e(186546),
                n.e(547298),
                n.e(571294),
                n.e(598421),
                n.e(443256),
                n.e(373566),
                n.e(114633),
                n.e(909063),
                n.e(720161),
                n.e(825650),
                n.e(247339),
                n.e(540077),
                n.e(607222),
                n.e(659624),
                n.e(736637),
                n.e(653308),
                n.e(272887),
                n.e(803410),
                n.e(949001),
                n.e(677407),
                n.e(550260),
                n.e(984884),
                n.e(69658),
                n.e(634786),
                n.e(569443),
                n.e(49282),
                n.e(235683),
                n.e(936572),
            ]).then(n.bind(n, 148540));
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, i.jsx)(n$.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: eB.intl.string(eB.t.HMWL9c),
              body: eB.intl.string(eB.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      n5.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eB.intl.string(eB.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          (s(!0),
                              (0, nn.openUserProfileModal)({ userId: o, tabSection: n7.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      ((0, E.mM)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e(546547),
                                                  n.e(102075),
                                                  n.e(412408),
                                                  n.e(193457),
                                                  n.e(892937),
                                                  n.e(166171),
                                                  n.e(487697),
                                                  n.e(492762),
                                                  n.e(136204),
                                                  n.e(504098),
                                                  n.e(181162),
                                                  n.e(547298),
                                                  n.e(720161),
                                                  n.e(949001),
                                                  n.e(360545),
                                              ]).then(n.bind(n, 414904));
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
                                              n5.i.TAKE_ACTION,
                                          ),
                                          r());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var n4 = n(894768),
    ie = n(818348),
    it = n(709516);
function ii() {
    let e = (0, c.bG)([n4.A], () => n4.A.getStatus()),
        t = (0, nh.MU)(e) ?? "",
        n = e === ie.cl.INVISIBLE || e === ie.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: it.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [eB.intl.string(eB.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(tr.m, {
                    text: eB.intl.string(eB.t.L99HQm),
                    children: (0, i.jsx)(nG.CircleErrorIcon, {
                        size: "xs",
                        color: nw.A.colors.STATUS_WARNING,
                        "aria-label": eB.intl.string(eB.t.L99HQm),
                    }),
                }),
        ],
    });
}
var il = n(146901),
    ir = n(827827);
let ia = [
        { duration: 15 * w.A.Millis.MINUTE, label: () => eB.intl.string(eB.t["8ot6gv"]) },
        { duration: w.A.Millis.HOUR, label: () => eB.intl.string(eB.t.UMWBZr) },
        { duration: 8 * w.A.Millis.HOUR, label: () => eB.intl.string(eB.t.EpAXPC) },
        { duration: w.A.Millis.DAY, label: () => eB.intl.string(eB.t["755t4q"]) },
        { duration: 3 * w.A.Millis.DAY, label: () => eB.intl.string(eB.t["f3/1ch"]) },
        { duration: void 0, label: () => eB.intl.string(eB.t["46dqJY"]) },
    ],
    is = "forever";
function io(e) {
    let { status: t, currentStatus: n, description: l } = e,
        r = t !== el.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: ia.map((e) => {
                let { duration: l, label: r } = e;
                return (0, i.jsx)(
                    ew.Dr,
                    {
                        id: `${t}-${l}`,
                        label: r(),
                        action: () => (0, ir.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? is,
                );
            }),
        });
    return (0, i.jsx)(ew.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: r,
        label: (0, nh.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eT.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, ir.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: r ? a : void 0,
    });
}
function iu(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, il._)(e);
    return "today" === t
        ? eB.intl.formatToPlainString(eB.t.ZxxHIO, { timeString: i })
        : eB.intl.formatToPlainString(eB.t["9OFjSe"], { dateString: n, timeString: i });
}
var ic = n(996988),
    id = n(207634),
    im = n(47453);
function ip(e) {
    let { currentUser: t, onClose: n, setPopoutRef: r, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        h = (0, nt.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, k.Ay)(P.A.USER_PROFILE_ACCOUNT_POPOUT),
        C = (0, t4.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, t7.A)(g, h, n7.R7.ACCOUNT_POPOUT);
    let { ref: x } = (0, eO.Ay)(),
        { isHoveringOrFocusing: v, isHovering: _ } = (0, tE.A)(x);
    (l.useEffect(() => {
        r?.(x.current);
    }, [x, r]),
        l.useEffect(
            () => (
                tY.A.setState({ isOpen: !0 }),
                () => tY.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let y = (0, c.bG)([nP.A], () => nP.A.getStatus(t.id)),
        b = iu(nx.CY.useSetting()),
        T = (0, c.bG)([nk.A], () => nk.A.hidePersonalInformation),
        S = (0, tV.kB)(),
        I = nx.Q_.useSetting(),
        N = (function (e) {
            let t = nx.CY.useSetting(),
                n = (0, tV.kB)(),
                l = nx.Jr.useSetting();
            function r(i) {
                let l = iu(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case el.clD.DND:
                        return n ? eB.intl.string(eB.t.day5A6) : eB.intl.string(eB.t["tq/fMK"]);
                    case el.clD.INVISIBLE:
                        return eB.intl.string(eB.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: ia.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            ew.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tV.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? is,
                        );
                    }),
                }),
                s = io({ status: el.clD.ONLINE, currentStatus: e }),
                o = io({ status: el.clD.IDLE, currentStatus: e, description: r(el.clD.IDLE) }),
                u = io({ status: el.clD.DND, currentStatus: e, description: r(el.clD.DND) }),
                c = io({ status: el.clD.INVISIBLE, currentStatus: e, description: r(el.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(ew.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(ew.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      ew.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eB.intl.string(eB.t.gJRnwK),
                                          iconLeft: eS.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: eS.BellSlashIcon },
                                          badge: { text: eB.intl.string(eB.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? eB.intl.format(eB.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            eB.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eB.intl.string(eB.t["Br1q+x"]),
                                          action: () => {
                                              (0, tV.ES)(!n);
                                          },
                                          dontCloseOnAction: !0,
                                          children: a,
                                      },
                                      "quiet-mode",
                                  ),
                              ],
                          })
                        : null,
                ],
            });
        })(y),
        j = (function (e) {
            let t = (0, c.bG)([nH.default], () => nH.default.getCurrentUser()),
                n = (0, c.bG)([nk.A], () => nk.A.hidePersonalInformation),
                l = (0, c.bG)([nF.A], () => (0, tq.M)(nF.A.theme)),
                { multiAccountUsers: r } = (0, nz.K)(),
                a = r.map((r) => {
                    let a = new nB.A(r),
                        s = a.id === t?.id,
                        o = r.tokenStatus === nK.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        ew.Dr,
                        {
                            id: a.id,
                            focusedClassName: nQ.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nQ.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": r.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nQ.DD,
                                            children: [
                                                (0, i.jsx)(eG.E, {
                                                    className: nQ.gE,
                                                    variant: "body-sm/normal",
                                                    children: nh.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(eG.E, {
                                                        className: nQ.df,
                                                        variant: "body-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(nU.CircleCheckIcon, {
                                                size: "sm",
                                                color: t
                                                    ? nw.A.unsafe_rawColors.WHITE.css
                                                    : nw.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nw.A.unsafe_rawColors.BRAND_500.css
                                                        : nw.A.unsafe_rawColors.WHITE.css,
                                                className: nQ.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nG.CircleErrorIcon, {
                                                color: nw.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? nw.A.unsafe_rawColors.BRAND_500.css
                                                        : nw.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nQ.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nY.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nV.default.track(el.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: el.JJy.USER_PROFILE },
                                        }),
                                        nW.Mx(n, void 0, nq.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(ew.bX, {}),
                            (0, i.jsx)(ew.Dr, {
                                id: "manage-accounts",
                                label: eB.intl.string(eB.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nY.A)());
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        R = (0, t9.A)({ analyticsLocations: g }),
        M = (0, tX.TW)(t),
        O = (0, L.d)({ location: "UserProfileAccountPopout" }),
        D = l.useRef(null),
        w = l.useRef(null),
        U = l.useRef(null),
        G = (0, tU.A)(h?.profileFrame?.skuId),
        F = (0, tw.A)(h?.profileFrame?.skuId);
    (0, tG.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: C, analyticsLocations: g });
    let B = l.useRef((0, tY.A)((e) => e.shouldRenderTenureLevelUp)),
        H = l.useMemo(() => (0, tB.A)(), []),
        [V, W] = l.useState(() => tY.A.getState().shouldRenderTenureLevelUp);
    function K(e) {
        (n?.(), (0, nn.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...C, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let z = h?.widgets != null && h.widgets.length > 0,
        Y = l.useCallback(() => {
            n();
        }, [n]),
        q = l.useCallback(() => {
            (R(), Y());
        }, [R, Y]),
        Q = ne.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        $ = (0, nv.Hy)({ location: "UserProfileAccountPopout" }),
        X = (0, ek.FX)("UserProfileAccountPopout"),
        Z = (0, tY.A)((e) => e.shouldScrollToOrbsMenuItem),
        [J, ee] = (0, tH.kn)(
            [
                d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
                Q ? d.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nL.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        et = l.useId();
    return (0, i.jsx)(k.f5, {
        value: g,
        children: (0, i.jsx)(t4.of, {
            value: C,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(ex.l, {
                ref: x,
                "aria-labelledby": et,
                className: a()(eH.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(ev.H, { id: et, children: eB.intl.string(eB.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(ev.F, {
                        children: [
                            (0, i.jsxs)(nc.A, {
                                className: eH.BK,
                                user: t,
                                displayProfile: h,
                                themeType: ic.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: im.wx,
                                        children: [
                                            (0, i.jsx)(nr.A, { user: t, displayProfile: h, themeType: ic.d.POPOUT }),
                                            (0, i.jsx)(ni.A, {
                                                user: t,
                                                displayProfile: h,
                                                avatarSize: id.T[ic.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : K,
                                            }),
                                            (0, i.jsx)(nC.A, {
                                                ref: D,
                                                user: t,
                                                themeType: ic.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(e_.Ip, {
                                        ref: U,
                                        className: eH.rf,
                                        style: { pointerEvents: V ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(ns.A, { userId: t.id }),
                                            (0, i.jsx)(nd.Ay, {
                                                className: eH.eF,
                                                user: t,
                                                displayName: nD.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : K,
                                                displayNameTrailing: (0, i.jsx)(nA, { user: t, isVisible: v }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(nl.A, {
                                                    displayProfile: h,
                                                    themeType: ic.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: B.current,
                                                }),
                                            }),
                                            (0, i.jsx)(na.A, { isPremiumUser: M, onInteraction: n }),
                                            (0, i.jsx)(nE.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: T,
                                                onClose: n,
                                            }),
                                            z &&
                                                (0, i.jsx)(nu.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: K,
                                                }),
                                            (0, i.jsx)(no.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: K,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eH.T_,
                                                children: [
                                                    X &&
                                                        (0, i.jsx)(nc.A.Overlay, {
                                                            className: eH.g0,
                                                            children: (0, i.jsx)(eK, {
                                                                children: (0, i.jsx)(e6, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, i.jsx)(nc.A.Overlay, {
                                                        className: eH.g0,
                                                        children: (0, i.jsxs)(eK, {
                                                            children: [
                                                                (0, i.jsx)(eW, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eB.intl.string(eB.t.s5vZlQ),
                                                                    icon: ey.PencilIcon,
                                                                    trailing:
                                                                        null != J
                                                                            ? (0, i.jsx)("div", {
                                                                                  className: eH.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, i.jsx)(eb.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (J ===
                                                                            d.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            ee(n5.i.TAKE_ACTION),
                                                                            q());
                                                                    },
                                                                    ref: w,
                                                                }),
                                                                (0, i.jsx)(eW, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(ii, {}),
                                                                    sublabel: null != b && b,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eT.nW, { status: y, size: 12 }),
                                                                    trailing:
                                                                        (S || y === el.clD.DND) &&
                                                                        (0, i.jsx)(eS.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: eE.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eV, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eH.hQ,
                                                                                  "aria-label": eB.intl.string(
                                                                                      eB.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: N,
                                                                              });
                                                                          },
                                                                    onClick: eE.Fr
                                                                        ? () => {
                                                                              (n(),
                                                                                  (0, E.mM)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eI.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eB.intl.string(
                                                                                                                  eB.t[
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
                                                                                                                  eB.intl.string(
                                                                                                                      eB
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
                                                                O &&
                                                                    (0, i.jsx)(eW, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: ej.RibbonIcon,
                                                                        label: eB.intl.string(eB.t.l6w3Vj),
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, eP.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tL, { onClose: n, popoutContainerRef: x }),
                                                                $ &&
                                                                    (0, i.jsx)(nO, {
                                                                        popoutContainerRef: x,
                                                                        scrollerRef: U,
                                                                        shouldScrollIntoView: Z,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(nc.A.Overlay, {
                                                        className: eH.g0,
                                                        children: (0, i.jsxs)(eK, {
                                                            children: [
                                                                (0, i.jsx)(eW, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eR.UserCircleIcon,
                                                                    label: eB.intl.string(eB.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nY.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eV, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eB.intl.string(eB.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: j,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    np.p5 &&
                                                                    I &&
                                                                    (0, i.jsx)(eW, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eM.IdIcon,
                                                                        label: eB.intl.string(eB.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, np.C)(t.id), n());
                                                                        },
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    h?.profileEffect != null &&
                                        !B.current &&
                                        (0, i.jsx)(tD.A, { skuId: h.profileEffect.skuId, isHovering: _ }),
                                    null != G && (0, i.jsx)(tF.A, { frame: G, fadeIn: F }),
                                ],
                            }),
                            (0, i.jsx)(n9, { targetElementRef: w, onClose: n }),
                            (0, i.jsx)(t8, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ih = n(201805),
    ig = n(209932),
    iA = n(655116),
    iC = n(365958),
    iE = n(342296),
    ix = n(852712),
    iv = n(389960),
    i_ = n(173660),
    iy = n(616356),
    ib = n(734057),
    iT = n(629016),
    iS = n(186111),
    iI = n(754712),
    iN = n(495867),
    ij = n(967198),
    iR = n(485296),
    iM = n(486020),
    iO = n(188567),
    iP = n(536194),
    ik = n(253400),
    iL = n(994314),
    iD = n(485599),
    iw = n(116833);
function iU(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eB.intl.string(eB.t.uwDBSq),
                  body: eB.intl.formatToPlainString(eB.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eB.intl.string(eB.t["5GD53o"]), body: eB.intl.string(eB.t["2Rb7tE"]) };
    return (0, i.jsx)(n$.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: iw.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eB.intl.string(eB.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function iG(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(iU, {
        ...t,
        onPrimaryAction: () => {
            (l(n5.i.TAKE_ACTION), (0, eP.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(n5.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var iF = n(206248);
function iB(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: r, shouldShow: a = !0, children: s } = e,
        o = (0, e4.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            a && o
                ? (0, i.jsx)(iF.H, {
                      targetElementRef: t,
                      title: eB.intl.string(tM.default.Qn21R6),
                      body: eB.intl.string(tM.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: r,
                      caretConfig: { align: "center" },
                      action: {
                          text: eB.intl.string(eB.t.RzWDqY),
                          onClick: function () {
                              (n(n5.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(n5.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iH = n(379848),
    iV = n(626584),
    iW = n(757036),
    iK = n(591179),
    iz = n(531685),
    iY = n(259065),
    iq = n(842671),
    iQ = n(78294);
let i$ = new iV.A("DisplayNameStylesFlywheelCoachmark");
function iX(e) {
    let { markAsDismissed: t, targetElementRef: n, children: r } = e,
        { analyticsLocations: a } = (0, k.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, c.bG)([iz.A], () => iz.A.isFocused()),
        u = (0, iW.L)(tJ.PremiumTypes.TIER_2),
        d = (0, iK.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, l.useCallback)(() => {
            t(n5.i.TAKE_ACTION);
            let e = nH.default.getCurrentUser();
            d && null != e
                ? (0, nn.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: a,
                      onModalOpen: () => {
                          (0, iY.L)({ analyticsLocations: a, stackingBehavior: "stack" });
                      },
                  })
                : (0, e9.openUserSettings)(e7.X.PROFILE_PANEL, { analyticsLocations: a }, () => {
                      (0, iY.L)({ analyticsLocations: a });
                  });
        }, [t, a, d]),
        f = (0, l.useCallback)(() => {
            t(n5.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(i$.error) : o || s.current?.pause();
    }, [o]);
    let p = u ? [eB.intl.string(iq.default.TyUdka)] : [eB.intl.string(iq.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            (0, i.jsx)(n$.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: f,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: iQ.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eB.intl.string(iq.default.cYwrp8),
                body: p,
                actions: [{ text: eB.intl.string(eB.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var iZ = n(45780),
    iJ = n(696451),
    i0 = n(71393),
    i1 = n(685073),
    i2 = n(73153);
let i3 = { lastSeenInfos: {} },
    i6 = i3;
class i8 extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        i6 = e ?? i3;
    }
    getState() {
        return i6;
    }
    getGuildLastSeenInfo(e) {
        return i6.lastSeenInfos[e] ?? null;
    }
}
let i5 = new i8(i2.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        i6.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        i6 = i3;
    },
});
var i7 = n(514661);
let i9 = new iV.A("GuildTagAvailableCoachmark");
function i4(e) {
    let t = (0, c.bG)([i0.A], () => i0.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            i2.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, i7.A)(t?.id ?? null, () => n(n5.i.TAKE_ACTION));
    if (null == t || !(0, i1.q0)(t))
        return (i9.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eB.intl.string(eB.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: eB.intl.string(eB.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(n$.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iw.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eB.intl.formatToPlainString(eB.t["m/Tc3n"], { guildName: t.name }),
                body: eB.intl.string(eB.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n5.i.USER_DISMISS),
            }),
        ],
    });
}
function le(e) {
    let t = (0, c.bG)([i0.A], () => i0.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, i7.A)(t?.id ?? null, () => n(n5.i.TAKE_ACTION));
    if (null == t || !(0, i1.q0)(t))
        return (i9.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eB.intl.string(eB.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: eB.intl.string(eB.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(n$.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iw.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eB.intl.formatToPlainString(eB.t.VFqnyU, { guildName: t.name }),
                body: eB.intl.string(eB.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n5.i.USER_DISMISS),
            }),
        ],
    });
}
var lt = n(843010),
    ln = n(764231),
    li = n(208223);
function ll(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = t0(),
        r = (0, c.bG)([tz.Ay], () => tz.Ay.useReducedMotion),
        a = (0, tY.A)((e) => e.isOpen),
        s = (0, lt.G)();
    return r || null == l || a || s
        ? null
        : (0, i.jsx)(iH.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  return (0, i.jsx)(lr, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: r,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function lr(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: r, shouldShow: a } = e,
        s = tJ.sp.indexOf(t),
        o = (0, li.I)(tJ.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, l.useCallback)(() => {
            (n(n5.i.TAKE_ACTION),
                tY.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iO._.dispatch(el.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(n5.i.USER_DISMISS);
        }, [n]),
        d = tJ.VD[t],
        m = eB.intl.formatToPlainString(eB.t.ewkaVR, {
            timeMilestone: (0, ln.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: eB.intl.string(eB.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(n$.A, {
        targetElementRef: r,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eB.intl.string(eB.t.VoDxsV),
        body: m,
        actions: f,
    });
}
var la = n(764014);
function ls(e) {
    let { targetElementRef: t } = e,
        n = (0, tY.A)((e) => e.isOpen),
        [l, r] = (0, tH.kn)(n ? [] : [d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: n5.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return l === d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(n$.A, {
              targetElementRef: t,
              graphic: { type: "image", src: la.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eB.intl.string(eB.t["Q+dH5r"]),
              body: eB.intl.string(eB.t.YKJw4W),
              onRequestClose: () => r(n5.i.USER_DISMISS),
              actions: [
                  {
                      text: eB.intl.string(eB.t.dcOuei),
                      onClick: function () {
                          (r(n5.i.TAKE_ACTION),
                              tY.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nj.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              iO._.dispatch(el.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function lo(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, ih.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [r, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, iZ.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ""),
                l = (0, c.bG)(
                    [i0.A, nH.default, iJ.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = i0.A.getGuild(e);
                        if (void 0 === t || !(0, i1.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = nH.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = iJ.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tH.ww)(l && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? "null");
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                r = (0, c.bG)([i5], () => (null === l ? null : i5.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([i0.A], () => i0.A.getGuild(l)?.profile?.tag),
                s = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && r?.tag === a,
                u = null !== l && s && !o;
            return (0, tH.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? r === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(le, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(i4, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ll, { groupName: n5.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(ls, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(iH.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: n5.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(iX, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iB, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: tn.p,
                                            children: e.children,
                                        });
                                    case d.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(iG, {
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
var lu = n(348858),
    lc = n(615675),
    ld = n(900797),
    lm = n(847374),
    lf = n(617354),
    lp = n(96020),
    lh = n(42473),
    lg = n(731854),
    lA = n(516171),
    lC = n(577755);
function lE(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: r,
            onClick: s,
            iconForeground: o,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: d,
        } = e,
        m = t || n,
        {
            Component: f,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: A },
        } = (0, lu.I)(m ? "undeafen" : "deafen"),
        C = n ? lc.HeadphonesDenyIcon : f,
        { name: E } = (0, eC.x5)(lg.oh.AUDIO_OUTPUT),
        x = (0, lf.A)(t, n, r),
        { analyticsLocations: v } = (0, k.Ay)(P.A.AUDIO_OUTPUT_BUTTON),
        _ = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [m, p]),
        (0, i.jsx)(k.f5, {
            value: v,
            children: (0, i.jsx)(h.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(k.f5, {
                            value: v,
                            children: (0, i.jsx)(lp.A, {
                                onInteraction: (0, q.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                animation: h.Y.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: d } = t,
                        f = d ? ld.ChevronSmallUpIcon : lm.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: a()(lA.Lh, { [lA.v8]: m, [lA.q6]: d }),
                        children: [
                            (0, i.jsx)(lh.A, {
                                "aria-checked": m,
                                "aria-label": eB.intl.string(eB.t.wjcRFX),
                                className: lA.eT,
                                disabled: r,
                                icon: (0, i.jsx)(C, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? nw.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? lC.o : void 0,
                                innerClassName: a()({ [lC.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: x,
                            }),
                            (0, i.jsx)(lh.A, {
                                className: a()(lA.UT, { [lA.q6]: d }),
                                disabled: r,
                                icon: (0, i.jsx)(f, {
                                    className: lA.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? nw.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eB.intl.formatToPlainString(eB.t["f+DDY/"], { outputDeviceName: E })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? eB.intl.format(eB.t["f+DDY/"], { outputDeviceName: E })
                                    : eB.intl.string(eB.t.aA4Vce),
                                "aria-label": c
                                    ? eB.intl.formatToPlainString(eB.t["f+DDY/"], { outputDeviceName: E })
                                    : eB.intl.string(eB.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lx = n(523875),
    lv = n(666654),
    l_ = n(993719);
let ly = {};
class lb extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return ly[e] ?? !1;
    }
}
let lT = new lb(i2.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        ly[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        ly[t] = !1;
    },
});
var lS = n(362823),
    lI = n(980923),
    lN = n(796262),
    lj = n(222176),
    lR = n(973324);
function lM(e) {
    let t,
        {
            selfMute: n,
            serverMute: r,
            suppress: s,
            awaitingRemote: o,
            iconForeground: u,
            onMouseEnter: d,
            onMouseLeave: m,
            onClick: f,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: C,
            shouldShowPTTJoinTooltip: E,
            dismissTooltips: x,
            speaking: v,
        } = e,
        _ = (0, c.bG)([iI.Ay], () => iI.Ay.getMode() === lg.TB.PUSH_TO_TALK),
        y = (0, c.bG)([iI.Ay], () => iI.Ay.getSettings().modeOptions.shortcut),
        b = (0, c.bG)([lT], () => lT.getIsTutorialActive(lS.v.MUTE_TUTORIAL)),
        T = (0, c.bG)([iN.A], () => null != iN.A.getChannelId()),
        { name: S } = (0, eC.x5)(lg.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, ix.d)({ location: "MicrophoneButton" }),
        N = l.useRef(null),
        j = n || s || r,
        R = (0, lx.L)(j ? "unmute" : "mute"),
        { analyticsLocations: M } = (0, k.Ay)(P.A.AUDIO_INPUT_BUTTON),
        { Component: O, events: L, play: D } = R,
        w = r || s ? lv.MicrophoneDenyIcon : O;
    l.useEffect(() => () => D(), [j, D]);
    let U = (0, lI.A)(n, r, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eB.intl.string(eB.t["29gnR4"]), tooltipForceOpen: !0 }
        : E || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eB.intl.format(eB.t.c1qUOQ, { keybind: tf.dI(y).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let G = _ && T,
        F = j ? nw.A.colors.ICON_VOICE_MUTED : "currentColor",
        B = l.useCallback(() => {
            (f(), b && l_.N(lS.v.MUTE_TUTORIAL));
        }, [f, b]);
    return (0, i.jsxs)(k.f5, {
        value: M,
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: N,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        x(),
                        (0, i.jsx)(k.f5, {
                            value: M,
                            children: (0, i.jsx)(lp.A, {
                                onInteraction: (0, q.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                animation: h.Y.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: l } = e,
                        { isShown: r } = n,
                        s = r ? ld.ChevronSmallUpIcon : lm.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: N,
                        className: a()(lA.Lh, { [lA.v8]: j, [lA.q6]: r }),
                        children: [
                            (0, i.jsx)(lh.A, {
                                "aria-checked": j,
                                "aria-label": eB.intl.string(eB.t.w4m945),
                                className: lA.eT,
                                disabled: o,
                                icon: (0, i.jsx)(w, { size: "custom", width: 20, height: 20, color: F, className: u }),
                                onClick: B,
                                onContextMenu: l,
                                onMouseEnter: () => {
                                    (d(), L.onMouseEnter());
                                },
                                onMouseLeave: () => {
                                    (m(), L.onMouseLeave());
                                },
                                plated: null != p,
                                redGlow: j,
                                role: "switch",
                                ...t,
                                children: G ? (0, i.jsx)("div", { className: a()(lj.U, { [lj.z]: v }) }) : null,
                            }),
                            (0, i.jsx)(lh.A, {
                                "aria-label": C
                                    ? eB.intl.formatToPlainString(eB.t["18wnuD"], { inputDeviceName: S })
                                    : eB.intl.string(eB.t.fRzCbB),
                                className: a()(lA.UT, { [lA.q6]: r }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: lA.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: F,
                                }),
                                onClick: l,
                                onContextMenu: l,
                                onMouseEnter: d,
                                onMouseLeave: m,
                                plated: null != p,
                                redGlow: j,
                                tooltipType: C ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: C,
                                tooltipPositionKey: C
                                    ? eB.intl.formatToPlainString(eB.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !r,
                                tooltipText: C
                                    ? eB.intl.format(eB.t["18wnuD"], { inputDeviceName: S })
                                    : eB.intl.string(eB.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(n$.A, {
                targetElementRef: N,
                shouldShow: b,
                graphic: { type: "image", src: lR.A },
                onRequestClose: () => {
                    l_.N(lS.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eB.intl.string(lN.default.VG4zAf),
                body: eB.intl.string(lN.default["8VIRzR"]),
            }),
        ],
    });
}
var lO = n(935399),
    lP = n(505312),
    lk = n(848847),
    lL = n(22363),
    lD = n(802516),
    lw = n(573648),
    lU = n(128232),
    lG = n(277657),
    lF = n(690364),
    lB = n(522978);
let lH = "console_connection_coachmark",
    lV = new iV.A("ConsoleConnectionCoachmark");
function lW(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = l.useMemo(() => {
            function e(e) {
                (!(async function (e) {
                    let t;
                    e === el.fg2.XBOX ? lF.x() : lU.x();
                    try {
                        t = await (0, lG.V)(e);
                    } catch (t) {
                        (lV.error("Error starting console sign-in; falling back to the link modal", t),
                            (0, lB.A)({ platformType: e, location: lH }));
                        return;
                    }
                    e === el.fg2.XBOX ? lF.t([lH], t) : lU.t([lH], e, t);
                })(e),
                    t(n5.i.TAKE_ACTION));
            }
            return [
                {
                    text: lw.A.get(el.fg2.PLAYSTATION).name,
                    icon: lL.PlaystationNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(el.fg2.PLAYSTATION),
                },
                {
                    text: lw.A.get(el.fg2.XBOX).name,
                    icon: lD.XboxNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(el.fg2.XBOX),
                },
            ];
        }, [t]),
        a = l.useCallback(() => {
            t(n5.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(n$.A, {
        targetElementRef: n,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5860f559ea2857185a554648b2a0b140e16bea35ed1dff11b697afd49ee2447.png",
            aspectRatio: "2/1",
        },
        title: eB.intl.string(eB.t.ZCib6v),
        body: eB.intl.string(eB.t.ikWQ2x),
        position: "top",
        caretConfig: { align: "end" },
        actions: r,
        onRequestClose: a,
    });
}
var lK = n(975807),
    lz = n(425565),
    lY = n(321671);
function lq(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = l.useMemo(
            () => [
                {
                    text: eB.intl.string(lY.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, lK.A)(lz.C), t(n5.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        a = l.useCallback(() => {
            t(n5.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(n$.A, {
        targetElementRef: n,
        size: "video",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/147b33df1db170b53e140d7ad45552731aa0b9b16b7a7358cb9916634167ee02.png",
            aspectRatio: "16/9",
        },
        title: eB.intl.string(lY.default.tmst3F),
        body: eB.intl.string(lY.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: r,
        onRequestClose: a,
    });
}
function lQ(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, k.Ay)(P.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(n$.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: eB.intl.string(eB.t.Mjs8KR),
        body: eB.intl.string(eB.t.U0INks),
        actions: [
            {
                text: eB.intl.string(eB.t.NENZhS),
                onClick: () => {
                    ((0, e9.openUserSettings)(e7.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(n5.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(n5.i.USER_DISMISS),
    });
}
var l$ = n(88001),
    lX = n(107198),
    lZ = n(438705);
function lJ(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: r } = e,
        a = l.useCallback(() => {
            (r(), (0, e9.openUserSettings)(e7.X.SUBSCRIPTIONS_PANEL));
        }, [r]);
    return (0, i.jsx)(n$.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: lZ },
        shouldShow: n,
        title: eB.intl.format(lX.default.bx8sR9, { premiumGroupProductName: (0, l$.DP)() }),
        body: eB.intl.format(lX.default.Pw4OFZ, { premiumGroupProductName: (0, l$.DP)() }),
        onRequestClose: r,
        actions: [{ text: eB.intl.string(lX.default.DD26QR), onClick: a }],
    });
}
var l0 = n(873298),
    l1 = n(840387);
function l2(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = (0, l1.Z)(),
        a = nx.KP.useSetting(),
        s = r && a !== l0.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(n5.i.TAKE_ACTION), (0, e9.openUserSettings)(e7.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = l.useCallback(() => {
            t(n5.i.USER_DISMISS);
        }, [t]),
        c = s
            ? a === l0.KP.FRIENDS_ONLY
                ? eB.intl.string(eB.t["/hogEy"])
                : eB.intl.string(eB.t["6hEfm1"])
            : eB.intl.string(eB.t.bnNxW1);
    return (0, i.jsx)(n$.A, {
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
        title: eB.intl.string(eB.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eB.intl.string(eB.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var l3 = n(415443);
function l6(e) {
    let t,
        n,
        {
            webBuildOverride: r,
            onClick: a,
            onContextMenu: s,
            dismissibleContents: o,
            iconForeground: u,
            nameplate: c,
        } = e,
        m = l.useRef(null),
        [f, p] = l.useState(!1);
    (0, lO.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iO._.subscribe(el.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iO._.unsubscribe(el.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = l.useCallback(() => {
            (p(!1), a());
        }, [a]),
        g = eg.A.coachmarkDismissibleContent;
    if (null != r) {
        let e = (0, l3.A)("1793999274848", !0);
        t =
            null != e
                ? eB.intl.formatToPlainString(eB.t.wve4kg, { webBuildOverride: r.id, builtAt: e })
                : eB.intl.formatToPlainString(eB.t.Gzh6ZP, { webBuildOverride: r.id });
    } else t = eB.intl.string(eB.t.cduTBL);
    let A = ts.SettingsIcon,
        C = (0, lP.w)();
    return (
        (A = null != r ? lk.SettingsInfoIcon : C.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(lh.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: s,
                    "aria-label": eB.intl.string(eB.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...C.events,
                    plated: null != c,
                }),
                (0, i.jsx)(lJ, { targetElementRef: m, shouldShow: f, onDismiss: () => p(!1) }),
                (0, i.jsx)(iH.Ay, {
                    contentTypes: o,
                    groupName: n5.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.TINY_BRONCO && null != I.hm
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(I.hm, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === d.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(l2, { markAsDismissed: n, targetElementRef: m })
                              : t === d.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, i.jsx)(lq, { markAsDismissed: n, targetElementRef: m })
                                : t === d.M.CONSOLE_CONNECTION_COACHMARK
                                  ? (0, i.jsx)(lW, { markAsDismissed: n, targetElementRef: m })
                                  : null != g && t === g
                                    ? (0, i.jsx)(lQ, { markAsDismissed: n, targetElementRef: m })
                                    : null;
                    },
                }),
            ],
        })
    );
}
var l8 = n(358285);
let l5 = ik.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    l7 = 2.5 * w.A.Millis.SECOND,
    l9 = 2 * w.A.Millis.MINUTE,
    l4 = 5 * w.A.Millis.SECOND;
function re(e) {
    let {
            ref: t,
            speaking: n,
            playingSoundboard: r,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: u,
            status: c,
            handleClick: d,
            handleMouseLeave: m,
            renderNameTag: f,
            nameplate: A,
            avatarDecoration: C,
            "data-jump-section": E,
        } = e,
        x = l.useRef(null),
        _ = t ?? x,
        y = (0, iM.F_)({ avatarDecoration: C, size: (0, $.Te)(p._3.SIZE_32) }),
        T = (0, eo.A)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: I,
            setHighlightBadge: N,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, i] = l.useState(),
                [r, a] = l.useState(!1);
            return (
                (0, b.A)(() => a(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        iO._.subscribe(el.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iO._.unsubscribe(el.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: r ? n : void 0, setHighlightBadge: i }
            );
        })(),
        j = (0, Z.K)(A);
    return null == u
        ? null
        : (0, i.jsx)(v.A, {
              object: el.ZSU.AVATAR,
              children: (0, i.jsx)(iE.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, iC.A)(u.id, u.getAvatarURL(void 0, iE.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(ip, {
                          currentUser: u,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: l8.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: h.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (m(), N(void 0));
                  },
                  children: (e) => {
                      S(e);
                      let { onMouseEnter: t, onMouseDown: l, ...m } = e;
                      return (0, i.jsxs)("div", {
                          ref: _,
                          style: j,
                          onMouseEnter: t,
                          onMouseDown: l,
                          onClick: (t) => {
                              (e.onClick?.(t), d?.(t));
                          },
                          className: a()(l8.Q9, { [l8.ZQ]: null != A }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), d?.(t));
                                  },
                                  "aria-label": eB.intl.string(eB.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: l8.$n,
                                  "data-jump-section": E,
                              }),
                              (0, i.jsx)(l5, {
                                  size: p._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: y,
                                  status: o ? el.clD.STREAMING : c,
                                  voiceStatus: (0, p.n$)(n, r),
                                  voiceDb: s,
                                  className: l8.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: l8.oM, children: f(T) }),
                          ],
                      });
                  },
              }),
          });
}
class rt extends l.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
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
        ((0, z.A)(e, t, el.JJy.ACCOUNT_PANEL), (0, Y.XJ)(P.A.ACCOUNT, Y.OP.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, K.A)(e, el.JJy.ACCOUNT_PANEL), (0, Y.XJ)(P.A.ACCOUNT, Y.OP.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            iN.A.isConnected() ? (0, e9.openUserSettings)(e7.X.VOICE_AND_VIDEO_PANEL) : (0, e9.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e(317446),
                    n.e(71866),
                    n.e(891473),
                    n.e(412117),
                    n.e(263406),
                    n.e(1955),
                    n.e(341161),
                    n.e(410526),
                    n.e(202985),
                    n.e(603619),
                    n.e(175927),
                    n.e(470126),
                    n.e(149697),
                    n.e(128804),
                    n.e(60882),
                    n.e(71151),
                    n.e(227853),
                    n.e(286615),
                    n.e(735042),
                    n.e(311541),
                    n.e(274227),
                    n.e(870088),
                    n.e(300641),
                    n.e(571163),
                    n.e(586662),
                    n.e(831377),
                    n.e(709976),
                    n.e(860596),
                    n.e(279774),
                    n.e(763945),
                    n.e(261204),
                    n.e(686731),
                    n.e(807432),
                    n.e(873532),
                    n.e(590088),
                    n.e(807003),
                    n.e(46083),
                    n.e(152133),
                    n.e(747802),
                    n.e(626353),
                    n.e(71169),
                    n.e(906470),
                    n.e(736663),
                    n.e(419121),
                    n.e(489020),
                    n.e(919789),
                    n.e(669130),
                    n.e(802890),
                    n.e(82937),
                    n.e(987221),
                    n.e(157064),
                    n.e(156957),
                    n.e(918786),
                    n.e(701335),
                    n.e(257935),
                    n.e(724086),
                    n.e(358937),
                    n.e(448738),
                    n.e(206189),
                    n.e(804439),
                    n.e(84978),
                    n.e(894292),
                    n.e(153302),
                    n.e(88683),
                    n.e(694414),
                    n.e(923981),
                    n.e(750370),
                    n.e(972281),
                    n.e(307107),
                    n.e(896622),
                    n.e(466592),
                    n.e(73946),
                    n.e(228271),
                    n.e(387970),
                    n.e(847445),
                    n.e(547510),
                    n.e(966366),
                    n.e(983513),
                    n.e(76928),
                    n.e(699250),
                    n.e(528311),
                    n.e(411938),
                    n.e(653383),
                    n.e(217991),
                    n.e(9796),
                    n.e(952068),
                    n.e(768289),
                    n.e(772565),
                    n.e(758531),
                    n.e(533781),
                    n.e(328276),
                    n.e(592e3),
                    n.e(524434),
                    n.e(882304),
                    n.e(984),
                    n.e(226229),
                    n.e(118994),
                    n.e(516497),
                    n.e(24774),
                    n.e(326794),
                    n.e(670870),
                    n.e(684231),
                    n.e(570690),
                    n.e(886631),
                    n.e(435860),
                    n.e(426782),
                    n.e(406322),
                    n.e(942571),
                    n.e(464759),
                    n.e(763343),
                    n.e(194704),
                    n.e(231541),
                    n.e(274461),
                    n.e(830560),
                    n.e(384054),
                    n.e(267387),
                    n.e(816348),
                    n.e(165291),
                    n.e(109383),
                    n.e(818291),
                    n.e(243794),
                    n.e(519435),
                    n.e(10985),
                    n.e(171206),
                    n.e(546547),
                    n.e(102075),
                    n.e(828178),
                    n.e(45036),
                    n.e(974119),
                    n.e(434683),
                    n.e(572388),
                    n.e(505928),
                    n.e(752657),
                    n.e(747973),
                    n.e(314001),
                    n.e(885251),
                    n.e(857871),
                    n.e(529366),
                    n.e(990185),
                    n.e(752924),
                    n.e(849162),
                    n.e(660201),
                    n.e(770925),
                    n.e(179301),
                    n.e(918347),
                    n.e(102247),
                    n.e(689521),
                    n.e(237403),
                    n.e(10886),
                    n.e(84993),
                    n.e(592268),
                    n.e(374962),
                    n.e(439120),
                    n.e(736919),
                    n.e(440636),
                    n.e(568960),
                    n.e(459257),
                    n.e(790484),
                    n.e(339715),
                    n.e(985301),
                    n.e(981059),
                    n.e(631323),
                    n.e(464452),
                    n.e(243852),
                    n.e(714144),
                    n.e(816027),
                    n.e(458855),
                    n.e(305161),
                    n.e(845486),
                    n.e(401425),
                    n.e(120561),
                    n.e(880186),
                    n.e(58353),
                    n.e(17256),
                    n.e(377016),
                    n.e(226867),
                    n.e(754366),
                    n.e(657682),
                    n.e(600336),
                    n.e(535413),
                    n.e(172413),
                    n.e(145006),
                    n.e(998670),
                    n.e(239502),
                    n.e(38956),
                    n.e(302458),
                    n.e(556436),
                    n.e(256172),
                    n.e(102137),
                    n.e(375971),
                    n.e(655282),
                    n.e(792818),
                    n.e(861161),
                    n.e(579958),
                    n.e(27612),
                    n.e(669340),
                    n.e(657266),
                    n.e(622074),
                    n.e(587308),
                    n.e(903758),
                    n.e(768071),
                    n.e(96922),
                    n.e(292699),
                    n.e(373738),
                    n.e(531521),
                    n.e(786830),
                    n.e(446860),
                    n.e(28636),
                    n.e(24312),
                    n.e(622936),
                    n.e(216947),
                    n.e(301850),
                    n.e(926787),
                    n.e(870423),
                    n.e(727139),
                    n.e(993562),
                    n.e(464838),
                    n.e(274698),
                    n.e(40074),
                    n.e(733814),
                    n.e(726399),
                    n.e(377476),
                    n.e(597622),
                    n.e(746309),
                    n.e(883221),
                    n.e(97585),
                    n.e(305721),
                    n.e(921528),
                    n.e(214566),
                    n.e(109917),
                    n.e(727797),
                    n.e(368991),
                    n.e(688508),
                    n.e(422037),
                    n.e(377109),
                    n.e(656997),
                    n.e(828849),
                    n.e(74886),
                    n.e(713273),
                    n.e(944121),
                    n.e(245851),
                    n.e(459397),
                    n.e(652014),
                    n.e(643363),
                    n.e(980902),
                    n.e(157771),
                    n.e(648197),
                    n.e(43853),
                    n.e(102170),
                    n.e(401071),
                    n.e(721654),
                    n.e(283543),
                    n.e(715958),
                    n.e(560042),
                    n.e(824992),
                    n.e(110299),
                    n.e(860350),
                    n.e(769590),
                    n.e(580305),
                    n.e(161411),
                    n.e(966268),
                    n.e(25839),
                    n.e(683084),
                    n.e(927808),
                    n.e(771149),
                    n.e(991119),
                    n.e(389321),
                    n.e(809321),
                    n.e(365166),
                    n.e(716860),
                    n.e(888213),
                    n.e(150183),
                    n.e(394692),
                    n.e(272788),
                    n.e(91003),
                    n.e(3445),
                    n.e(465071),
                    n.e(595944),
                    n.e(45374),
                    n.e(10058),
                    n.e(859516),
                    n.e(684901),
                    n.e(30482),
                    n.e(257182),
                    n.e(465650),
                    n.e(49571),
                    n.e(434352),
                    n.e(599135),
                    n.e(942186),
                    n.e(242967),
                    n.e(557729),
                    n.e(537014),
                    n.e(693615),
                    n.e(363750),
                    n.e(28420),
                    n.e(477550),
                    n.e(71930),
                    n.e(97191),
                    n.e(385504),
                    n.e(310994),
                    n.e(770720),
                    n.e(195830),
                    n.e(338218),
                    n.e(846582),
                    n.e(589752),
                    n.e(53719),
                    n.e(992535),
                    n.e(737132),
                    n.e(207998),
                    n.e(442781),
                    n.e(817298),
                    n.e(311913),
                    n.e(868052),
                    n.e(106980),
                    n.e(974969),
                    n.e(310933),
                    n.e(114386),
                    n.e(179028),
                    n.e(29489),
                    n.e(269714),
                    n.e(445380),
                    n.e(212037),
                    n.e(846201),
                    n.e(213217),
                    n.e(680015),
                    n.e(585005),
                    n.e(684986),
                    n.e(527302),
                    n.e(423538),
                    n.e(700572),
                    n.e(14775),
                    n.e(915213),
                    n.e(530166),
                    n.e(594045),
                    n.e(324469),
                    n.e(70379),
                    n.e(417333),
                    n.e(127962),
                    n.e(503376),
                    n.e(494822),
                    n.e(926132),
                    n.e(834552),
                    n.e(993103),
                    n.e(863232),
                    n.e(708757),
                    n.e(295507),
                    n.e(332447),
                    n.e(959880),
                    n.e(174016),
                    n.e(22921),
                    n.e(910471),
                    n.e(11301),
                    n.e(430858),
                    n.e(861060),
                    n.e(364827),
                    n.e(77333),
                    n.e(626565),
                    n.e(257980),
                    n.e(960235),
                    n.e(585968),
                    n.e(486137),
                    n.e(80421),
                    n.e(206027),
                    n.e(393471),
                    n.e(177641),
                    n.e(198329),
                    n.e(678157),
                    n.e(942374),
                    n.e(223219),
                    n.e(130795),
                    n.e(10866),
                    n.e(313537),
                    n.e(40291),
                    n.e(733115),
                    n.e(397270),
                    n.e(406222),
                    n.e(761597),
                    n.e(373122),
                    n.e(649408),
                    n.e(221856),
                    n.e(186212),
                    n.e(755936),
                    n.e(147662),
                    n.e(316344),
                    n.e(973973),
                    n.e(274501),
                    n.e(544571),
                    n.e(692990),
                    n.e(714496),
                    n.e(305834),
                    n.e(393336),
                    n.e(745959),
                    n.e(858529),
                    n.e(481987),
                    n.e(595653),
                    n.e(958038),
                    n.e(532039),
                    n.e(719466),
                    n.e(787412),
                    n.e(576909),
                    n.e(830228),
                    n.e(27355),
                    n.e(953665),
                    n.e(406174),
                    n.e(126437),
                    n.e(481647),
                    n.e(713708),
                    n.e(776273),
                    n.e(749248),
                    n.e(704434),
                    n.e(900361),
                    n.e(391763),
                    n.e(492762),
                    n.e(885533),
                    n.e(282833),
                    n.e(393766),
                    n.e(21921),
                    n.e(811310),
                    n.e(258398),
                    n.e(844780),
                    n.e(571210),
                    n.e(572963),
                    n.e(676418),
                    n.e(70833),
                    n.e(897073),
                    n.e(648365),
                    n.e(188689),
                    n.e(161275),
                    n.e(166495),
                    n.e(761253),
                    n.e(521930),
                    n.e(88342),
                    n.e(49782),
                    n.e(570849),
                    n.e(45072),
                    n.e(942724),
                    n.e(139970),
                    n.e(173764),
                    n.e(940258),
                    n.e(830221),
                    n.e(858164),
                    n.e(357688),
                    n.e(308555),
                    n.e(323624),
                    n.e(977547),
                    n.e(554241),
                    n.e(311802),
                    n.e(724303),
                    n.e(508371),
                    n.e(698965),
                    n.e(885434),
                    n.e(53102),
                    n.e(586127),
                    n.e(41250),
                    n.e(179049),
                    n.e(918024),
                    n.e(132737),
                    n.e(146070),
                    n.e(344502),
                    n.e(88599),
                    n.e(836863),
                    n.e(780262),
                    n.e(382563),
                    n.e(658216),
                    n.e(854622),
                    n.e(629482),
                    n.e(590365),
                    n.e(989088),
                    n.e(37977),
                    n.e(136149),
                    n.e(470068),
                    n.e(354044),
                    n.e(817989),
                    n.e(437065),
                    n.e(891585),
                    n.e(720590),
                    n.e(709640),
                    n.e(235313),
                    n.e(147626),
                    n.e(613867),
                    n.e(952548),
                    n.e(689393),
                    n.e(893917),
                    n.e(727779),
                    n.e(412743),
                    n.e(585503),
                    n.e(203589),
                    n.e(636373),
                    n.e(382465),
                    n.e(294857),
                    n.e(230664),
                    n.e(15481),
                    n.e(179745),
                    n.e(655708),
                    n.e(676156),
                    n.e(889638),
                    n.e(668802),
                    n.e(631358),
                    n.e(459414),
                    n.e(553984),
                    n.e(335395),
                    n.e(142867),
                    n.e(884601),
                    n.e(782969),
                    n.e(882777),
                    n.e(945413),
                    n.e(146844),
                    n.e(402026),
                    n.e(163235),
                    n.e(776766),
                    n.e(632756),
                    n.e(564850),
                    n.e(504370),
                    n.e(941040),
                    n.e(124791),
                    n.e(35771),
                    n.e(648344),
                    n.e(170104),
                    n.e(491793),
                    n.e(256769),
                    n.e(620656),
                    n.e(902564),
                    n.e(495786),
                    n.e(428967),
                    n.e(275716),
                    n.e(704727),
                    n.e(782791),
                    n.e(538345),
                    n.e(214285),
                    n.e(248330),
                    n.e(373004),
                    n.e(803332),
                    n.e(129080),
                    n.e(238232),
                    n.e(938149),
                    n.e(408362),
                    n.e(741678),
                    n.e(608032),
                    n.e(852617),
                    n.e(477970),
                    n.e(102698),
                    n.e(125964),
                    n.e(737021),
                    n.e(775951),
                    n.e(254506),
                    n.e(874342),
                    n.e(138830),
                    n.e(757901),
                    n.e(976516),
                    n.e(400501),
                    n.e(985794),
                    n.e(596286),
                    n.e(695358),
                    n.e(767837),
                    n.e(579245),
                    n.e(473384),
                    n.e(432209),
                    n.e(996868),
                    n.e(368062),
                    n.e(859991),
                    n.e(667092),
                    n.e(225575),
                    n.e(603998),
                    n.e(823300),
                    n.e(709371),
                    n.e(787139),
                    n.e(466718),
                    n.e(330724),
                    n.e(599719),
                    n.e(136204),
                    n.e(531741),
                    n.e(390213),
                    n.e(736926),
                    n.e(939171),
                    n.e(987478),
                    n.e(465157),
                    n.e(490010),
                    n.e(252229),
                    n.e(523276),
                    n.e(77473),
                    n.e(550033),
                    n.e(916758),
                    n.e(660249),
                    n.e(440142),
                    n.e(691671),
                    n.e(812042),
                    n.e(612287),
                    n.e(547801),
                    n.e(720064),
                    n.e(729963),
                    n.e(733416),
                    n.e(830938),
                    n.e(692513),
                    n.e(538513),
                    n.e(305557),
                    n.e(321640),
                    n.e(938579),
                    n.e(652212),
                    n.e(919726),
                    n.e(36227),
                    n.e(104202),
                    n.e(975933),
                    n.e(325047),
                    n.e(907424),
                    n.e(460773),
                    n.e(93907),
                    n.e(944801),
                    n.e(50097),
                    n.e(229666),
                    n.e(188545),
                    n.e(92295),
                    n.e(208018),
                    n.e(589916),
                    n.e(848625),
                    n.e(458273),
                    n.e(968763),
                    n.e(163069),
                    n.e(883952),
                    n.e(26001),
                    n.e(159957),
                    n.e(838056),
                    n.e(414591),
                    n.e(652111),
                    n.e(144179),
                    n.e(838090),
                    n.e(536973),
                    n.e(590814),
                    n.e(896804),
                    n.e(708536),
                    n.e(298107),
                    n.e(411353),
                    n.e(258709),
                    n.e(508829),
                    n.e(526778),
                    n.e(603303),
                    n.e(781202),
                    n.e(203930),
                    n.e(935948),
                    n.e(903663),
                    n.e(741111),
                    n.e(954289),
                    n.e(295998),
                    n.e(819193),
                    n.e(480945),
                    n.e(276297),
                    n.e(365011),
                    n.e(780611),
                    n.e(201243),
                    n.e(950535),
                    n.e(215920),
                    n.e(246969),
                    n.e(269786),
                    n.e(688138),
                    n.e(228850),
                    n.e(566976),
                    n.e(437961),
                    n.e(908081),
                    n.e(720045),
                    n.e(914248),
                    n.e(458886),
                    n.e(951811),
                    n.e(922606),
                    n.e(527687),
                    n.e(646284),
                    n.e(557830),
                    n.e(904774),
                    n.e(78601),
                    n.e(726294),
                    n.e(829260),
                    n.e(342234),
                    n.e(81189),
                    n.e(200203),
                    n.e(965061),
                    n.e(377804),
                    n.e(559754),
                    n.e(780407),
                    n.e(168768),
                    n.e(624643),
                    n.e(574678),
                    n.e(124647),
                    n.e(15428),
                    n.e(151081),
                    n.e(462010),
                    n.e(781949),
                    n.e(66580),
                    n.e(504098),
                    n.e(78465),
                    n.e(746479),
                    n.e(872893),
                    n.e(127659),
                    n.e(525499),
                    n.e(377663),
                    n.e(557940),
                    n.e(341701),
                    n.e(9205),
                    n.e(42834),
                    n.e(144989),
                    n.e(604172),
                    n.e(468083),
                    n.e(548730),
                    n.e(39689),
                    n.e(871467),
                    n.e(788976),
                    n.e(992478),
                    n.e(276814),
                    n.e(368684),
                    n.e(568881),
                    n.e(51892),
                    n.e(763096),
                    n.e(841838),
                    n.e(830351),
                    n.e(396854),
                    n.e(225612),
                    n.e(350949),
                    n.e(472789),
                    n.e(967874),
                    n.e(137937),
                    n.e(760989),
                    n.e(79216),
                    n.e(803191),
                    n.e(369501),
                    n.e(303710),
                    n.e(545006),
                    n.e(419360),
                    n.e(528384),
                    n.e(949013),
                    n.e(202669),
                    n.e(886913),
                    n.e(860003),
                    n.e(396325),
                    n.e(808979),
                    n.e(141049),
                    n.e(749736),
                    n.e(14020),
                    n.e(587732),
                    n.e(645830),
                    n.e(512162),
                    n.e(733771),
                    n.e(866008),
                    n.e(531158),
                    n.e(946039),
                    n.e(995602),
                    n.e(850298),
                    n.e(548738),
                    n.e(578090),
                    n.e(896480),
                    n.e(569468),
                    n.e(966598),
                    n.e(146149),
                    n.e(360536),
                    n.e(986300),
                    n.e(686774),
                    n.e(138733),
                    n.e(228011),
                    n.e(759174),
                    n.e(175284),
                    n.e(886492),
                    n.e(576415),
                    n.e(983947),
                    n.e(944727),
                    n.e(774542),
                    n.e(705871),
                    n.e(527462),
                    n.e(501888),
                    n.e(186546),
                    n.e(960816),
                    n.e(168031),
                    n.e(271203),
                    n.e(932011),
                    n.e(384820),
                    n.e(538733),
                    n.e(102657),
                    n.e(154168),
                    n.e(506627),
                    n.e(443256),
                    n.e(340346),
                    n.e(888205),
                    n.e(373566),
                    n.e(864075),
                    n.e(815057),
                    n.e(702846),
                    n.e(991531),
                    n.e(818066),
                    n.e(521331),
                    n.e(269442),
                    n.e(762975),
                    n.e(101851),
                    n.e(10622),
                    n.e(523638),
                    n.e(819305),
                    n.e(864926),
                    n.e(450541),
                    n.e(647999),
                    n.e(465574),
                    n.e(679700),
                    n.e(195316),
                    n.e(220803),
                    n.e(195782),
                    n.e(659624),
                    n.e(646191),
                    n.e(262720),
                    n.e(454085),
                    n.e(483518),
                    n.e(185928),
                    n.e(531997),
                    n.e(649351),
                    n.e(809940),
                    n.e(798384),
                    n.e(787462),
                    n.e(986629),
                    n.e(943534),
                    n.e(124564),
                    n.e(918339),
                    n.e(666601),
                    n.e(582153),
                    n.e(313052),
                    n.e(639721),
                    n.e(419631),
                    n.e(82384),
                    n.e(903820),
                    n.e(876892),
                    n.e(334624),
                    n.e(971508),
                    n.e(816799),
                    n.e(356675),
                    n.e(297114),
                    n.e(352351),
                    n.e(734090),
                    n.e(311525),
                    n.e(671710),
                    n.e(483102),
                    n.e(580890),
                    n.e(902552),
                    n.e(689588),
                    n.e(96200),
                    n.e(524084),
                    n.e(990080),
                    n.e(44264),
                    n.e(444790),
                    n.e(983058),
                    n.e(87641),
                    n.e(156132),
                    n.e(939081),
                    n.e(874913),
                    n.e(710569),
                    n.e(717602),
                    n.e(488292),
                    n.e(239734),
                    n.e(515818),
                    n.e(645671),
                    n.e(214451),
                    n.e(993720),
                    n.e(800916),
                    n.e(654658),
                    n.e(140200),
                    n.e(233049),
                    n.e(569443),
                    n.e(809548),
                    n.e(543456),
                    n.e(908501),
                ]).then(n.bind(n, 351988));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, q.s)("UserSettingsMenu", P.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, q.s)("AudioDeviceMenu", P.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, ix.d)({ location: "Account" });
                    return (0, i.jsx)(k.f5, {
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
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(k.f5, {
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
                deviceChangedTooltipType: r,
            } = this.props,
            { hoveringOnMute: a } = this.state,
            s =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > l9;
        i
            ? a ||
              !e ||
              t ||
              n ||
              l ||
              !s ||
              null != r ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(l7, () =>
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
                status: r,
                userTag: a,
                voiceChannel: s,
            } = this.props;
        if (null == l) return null;
        if ((0, T.A)({ activities: t, status: r, applicationStream: n, voiceChannel: s }))
            return (0, i.jsxs)(O.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: nh.Ay.humanizeStatus(r) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: l8.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === u.$.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(O.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: nh.Ay.humanizeStatus(r) }),
                      (0, i.jsx)(es.A, { activity: o, emojiClassName: l8.Zg, className: l8.WO }),
                  ],
              })
            : null != r && r !== el.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(O.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: nh.Ay.humanizeStatus(r) }),
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
                          className: l8.eW,
                          children: (0, i.jsx)(iD.A, {
                              className: a()({ [l8.e8]: null != e }),
                              children: (0, i.jsx)(ec.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? eu.G.ANIMATED : eu.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: l8.XP,
                          children: (0, i.jsx)(iL.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let {
            badgeDirectoryNuxPopoverVariant: t,
            currentUser: n,
            dismissibleContents: l,
            isOrbchievementsEnabled: r,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)(lo, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: r,
                  children: (0, i.jsx)(re, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: r } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(C.sk, {
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          ref: this.containerRef,
                          className: a()(l8.kL, { [l8.UG]: null != n, [l8.bc]: !l, [l8.G5]: r }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(ee.A, { nameplate: t, hovered: s, placement: J.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(rn, {
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
function rn(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: a,
            serverDeaf: s,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: u,
            webBuildOverride: c,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: f,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: h,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: C,
            dismissibleContents: E,
            occluded: x,
            nameplate: v,
            accountContainerRef: _,
            deviceChangedTooltipType: y,
            dismissTooltips: b,
            speaking: T,
        } = e,
        S = (0, Z.K)(v);
    function N() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(l6, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: C,
            dismissibleContents: [...E.settings, ...e],
            iconForeground: null != v ? l8.t4 : void 0,
            nameplate: v,
        });
    }
    return (0, i.jsxs)("div", {
        className: l8.Uo,
        style: S,
        children: [
            (0, i.jsx)(lM, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: a,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != v ? l8.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === y,
                dismissTooltips: b,
                speaking: T,
            }),
            (0, i.jsx)(lE, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: f,
                onContextMenu: g,
                awaitingRemote: r,
                iconForeground: null != v ? l8.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === y,
                dismissTooltips: b,
            }),
            null != I.hE
                ? (0, i.jsx)(l.Suspense, { fallback: N(), children: (0, i.jsx)(I.hE, { occluded: x, children: N }) })
                : N(),
        ],
    });
}
function ri(e) {
    let t = (0, c.bG)([iN.A], () => null != iN.A.getChannelId()),
        n = (0, eC.Py)(e),
        i = l.useRef(new m.Ep()),
        [r, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(l4, () => {
                a(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        (a(!1), i.current.stop());
    }, []);
    return (
        (0, y.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: r, dismissTooltip: s }
    );
}
function rl() {
    let e,
        t,
        n,
        r,
        a = (0, c.bG)([nH.default], () => nH.default.getCurrentUser()),
        s = (0, c.bG)([n6.default], () => n6.default.getId()),
        {
            activities: m,
            streaming: f,
            status: p,
        } = (0, c.cf)([n4.A], () => {
            let e = n4.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: n4.A.getStatus(),
            };
        }),
        h = (0, c.bG)([iy.A], () => iy.A.getAnyStreamForUser(s)),
        g = (0, _.A)({ userId: s }),
        A = (0, c.bG)([ig.A], () => ig.A.isUserPlayingSounds(s)),
        C = (0, c.bG)([iR.A], () => iR.A.getVoiceVolume(s)),
        x = nh.Ay.useUserTag(a, { decoration: "never" }),
        v = (0, c.bG)([iN.A, ib.A], () => {
            let e = iN.A.getChannelId();
            return null != e ? ib.A.getChannel(e) : null;
        }),
        { mute: y, selfMute: b, suppress: T } = (0, i_.A)(v),
        { selfDeaf: S, deaf: I } = (0, iv.A)(v),
        N = (0, c.bG)([H.A], () => ((0, V.kK)() ? H.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([iI.Ay], () => iI.Ay.getSpeakingWhileMuted()),
        R = (0, c.bG)([W.A], () => W.A.isFullscreenInContext()),
        M = (0, c.bG)([iS.A], () => iS.A.hasLayers()),
        O = (0, E.re)(E.DX) || M || iP.P.isDisallowPopupsSet() || R,
        K = (0, c.bG)([ed.default], () => null != ed.default.getAwaitingRemoteSessionInfo()),
        z = (0, c.bG)([ij.A], () => ij.A.getGuildId()),
        Y = a?.avatarDecoration,
        q = (0, Q.A)(Y),
        $ = nh.Ay.useName(a) ?? "",
        { analyticsLocations: Z } = (0, k.Ay)(P.A.ACCOUNT),
        J = (0, X.r)({ user: a, guildId: void 0 }),
        { isQuestBarEmpty: ee } = (0, ih.c9)(),
        et = (0, c.bG)([iA.A, nH.default, iT.A], () => {
            let e,
                t = iA.A.getSyncingWith(),
                n = iA.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iT.A.getParty(e) ?? []))
                        .map((e) => nH.default.getUser(e))
                        .filter(nL.Vq)
                        .value()),
                i.length > 1
            );
        }),
        es = { avatar: [], settings: [] },
        eo = (0, nv.Hy)({ location: "Account" }) && !O,
        eu = eA.A.useIsEligible(),
        ec = eg.A.coachmarkDismissibleContent,
        eC = (0, L.d)({ location: "AccountCoachmark" }),
        eE =
            ((e = (0, c.bG)([ef.A], () => ef.A.hasLoaded(eh.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, em.HX)(d.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (r = (0, ep.y)({ location: "AccountCoachmark", countGiftCardWallet: !0, canFetchPaymentSources: n })),
            n && r),
        ex = (function (e) {
            let { enabled: t } = ea.useConfig({ location: e }),
                n = (0, c.bG)(
                    [en.A],
                    () =>
                        !en.A.isFetching() &&
                        !en.A.getAccounts().some((e) => {
                            let { type: t } = e;
                            return er.has(t);
                        }),
                ),
                i = (0, c.bG)([ei.A], () => ei.A.hasConsented(el.YAq.PERSONALIZATION));
            return t && n && i;
        })("AccountCoachmark"),
        ev = (function (e) {
            let { currentUserId: t, enabled: n, fetchCatalog: i = !0 } = e,
                r = n ? t : null,
                a = (0, c.bG)([F.Ay], () => null != r && F.Ay.hasCatalogFor(r), [r]),
                s = (0, c.bG)([F.Ay], () => null != r && F.Ay.hasCatalogFetchErrorFor(r), [r]),
                [o] = l.useState(() => new D.A(5 * w.A.Millis.SECOND, 5 * w.A.Millis.MINUTE)),
                u = l.useRef(null);
            l.useEffect(() => {
                if (null != r && i) {
                    if (a) return void o.succeed();
                    if (s) {
                        if (o.fails >= 3) return;
                        return (o.fail(() => (0, U.RS)(r, { isRetry: !0 })), () => o.cancel());
                    }
                    u.current !== r && ((u.current = r), (0, U.RS)(r));
                }
            }, [r, i, a, s, o]);
            let d = (0, c.bG)(
                    [F.Ay],
                    () => (null != r ? F.Ay.getBadges(r).filter((e) => B.sC.has(e.badge_id) && e.owned).length : 0),
                    [r],
                ),
                m = (0, c.yK)([F.Ay], () => (null != r ? (0, G.z)(F.Ay.getBadges(r)) : []), [r]),
                f = l.useMemo(
                    () =>
                        null != r && a
                            ? d > 0
                                ? { variant: "progress", newBadgeCount: d, badgeIconUrls: m }
                                : { variant: "no-progress" }
                            : null,
                    [r, a, d, m],
                ),
                p = i && o.fails < 3;
            return { variantProps: f, isPending: null != r && !a && (!s || p) };
        })({ currentUserId: a?.id, enabled: eC }).variantProps;
    O ||
        (es.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != ev && es.avatar.push(d.M.BADGE_DIRECTORY_NUX_POPOVER),
        eu && null != ec && es.settings.push(ec),
        eE && es.settings.push(d.M.GIFT_CARDS_MARKETING_COACHMARK),
        ex && es.settings.push(d.M.CONSOLE_CONNECTION_COACHMARK),
        es.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: e_, dismissTooltip: ey } = ri(lg.oh.AUDIO_INPUT),
        { shouldShowTooltip: eb, dismissTooltip: eT } = ri(lg.oh.AUDIO_OUTPUT),
        eS = l.useMemo(() => (e_ ? "input" : eb ? "output" : void 0), [e_, eb]),
        eI = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        ey();
                        break;
                    case "output":
                        eT();
                }
            },
            [ey, eT],
        );
    return (0, i.jsx)(k.f5, {
        value: Z,
        children: (0, i.jsx)(rt, {
            currentUser: a,
            username: $,
            activities: m,
            applicationStream: h,
            voiceChannel: v,
            dismissibleContents: es,
            badgeDirectoryNuxPopoverVariant: ev,
            isOrbchievementsEnabled: eo,
            userTag: x,
            occluded: O,
            selfDeaf: S,
            selfMute: b,
            serverDeaf: I,
            serverMute: y,
            speaking: g,
            playingSoundboard: A,
            voiceDb: C,
            speakingWhileMuted: j,
            status: p,
            streaming: f,
            suppress: T,
            webBuildOverride: N,
            awaitingRemote: K,
            nameplate: J,
            selectedGuildId: z,
            avatarDecoration: q,
            isQuestBarEmpty: ee,
            isListenAlongVisible: et,
            deviceChangedTooltipType: eS,
            onDismissDeviceChangedTooltip: () => eI(eS),
        }),
    });
}
