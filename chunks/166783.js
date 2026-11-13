(n.d(t, { g: () => al, A: () => as }), n(321073));
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
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
    b = n(964486),
    y = n(220839),
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
    D = n(139523),
    w = n(521502),
    U = n(380610),
    G = n(628983),
    F = n(18235),
    B = n(183184),
    V = n(384059),
    H = n(480890),
    W = n(601255),
    K = n(562819),
    z = n(449582),
    Y = n(351952),
    q = n(88686),
    Q = n(214881),
    $ = n(945810),
    X = n(417869),
    Z = n(153488),
    J = n(652215);
let ee = new Set([J.fg2.PLAYSTATION, J.fg2.PLAYSTATION_STAGING, J.fg2.XBOX]),
    et = (0, $.mj)({
        name: "2026-11-console-connection-coachmark",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    });
var en = n(302223),
    ei = n(609425),
    el = n(922301),
    ea = n(16371),
    er = n(643501),
    es = n(826673),
    eo = n(617617),
    eu = n(798091),
    ec = n(355097),
    ed = n(213778),
    em = n(552122),
    ef = n(74848),
    ep = n(607399),
    eh = n(646514),
    eg = n(305866),
    eA = n(707554),
    eC = n(95362),
    eE = n(22231),
    ex = n(805251),
    ev = n(935154),
    e_ = n(780338);
if (221552 != n.j) var E = n(192308);
var eb = n(224640),
    ey = n(165862),
    eT = n(877784),
    eS = n(812993),
    eI = n(26137),
    eN = n(473935),
    ej = n(765671),
    eR = n(287809),
    eM = n(682618),
    eO = n(982240),
    eP = n(620143),
    ek = n(470739),
    eL = n(142617),
    eD = n(289873),
    ew = n(366056),
    eU = n(477782),
    eG = n(320448),
    eF = n(834730),
    eB = n(993401),
    eV = n(792996),
    eH = n(211450);
function eW(e) {
    return (0, i.jsx)("div", {
        className: eH.wE,
        children: (0, i.jsx)(ey.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eK(e) {
    let {
            action: t,
            onClick: n,
            icon: a,
            label: r,
            sublabel: s,
            trailing: o,
            renderSubmenu: u,
            ref: c,
            submenuTargetElementRef: d,
            submenuAlign: m,
        } = e,
        f = null != n,
        p = (0, eB.rE)({ action: t, onClick: n }),
        [A, C] = l.useState(!1),
        x = l.useRef(null),
        v = c ?? x,
        _ = null != u,
        b = _ && f,
        y = l.useCallback(() => {
            C(!0);
        }, []),
        T = l.useCallback(() => {
            (0, E.ue)() || C(!1);
        }, []);
    function S() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eH.iA, children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eH.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eF.E, {
                                    color: "currentColor",
                                    variant: "body-sm/medium",
                                    className: eH.W1,
                                    children: r,
                                }),
                                (0, i.jsx)(eF.E, { color: "currentColor", variant: "body-xs/medium", children: s }),
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
            (t = b
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.D, { className: eH.ef, onClick: p, children: S() }),
                          (0, i.jsx)(g.D, {
                              className: eH.ap,
                              "aria-label": eV.intl.string(eV.t.PdRCRg),
                              ...e,
                              onClick: y,
                              children: (0, i.jsx)(eG.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(g.D, {
                        className: eH.ef,
                        ...e,
                        onClick: y,
                        children: [
                            S(),
                            (0, i.jsx)("div", {
                                className: eH.ap,
                                children: (0, i.jsx)(eG.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
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
              onMouseEnter: y,
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
function ez(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eY = n(719718),
    eq = n(759162),
    eQ = n(796104),
    e$ = n(402102);
let eX = {
        FAKE_DATA: { stats: { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } }, character: null },
        GLOBAL_STATS: { stats: null, character: null, didPlayerShareDataWithDiscord: !1 },
        ZERO_STATS: {
            stats: {
                voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 },
                messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 },
                guilds: { guilds: [] },
                emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] },
                games: {
                    totalGamesPlayed: 0,
                    totalGamesPlayedPercentile: 0,
                    games: [],
                    totalDaysPlayed: 0,
                    totalDaysPlayedPercentile: 0,
                },
                sidekick: null,
                users: [],
                power: { powerLevel: 0, powerLevelPercentile: 0 },
            },
            character: null,
        },
        UNAVAILABLE: { availability: e$.u.UNAVAILABLE },
        NO_CHARACTER: { availability: e$.u.NO_CHARACTER },
        COMPACT_ASSETS: { compactAssets: !0 },
    },
    eZ = (0, n(196765).v)(() => ({ isNoCharacter: !1, isCompactAssets: !1 }));
var eJ = n(858899);
function e0(e, t) {
    (0, eJ.P0)({ text: e, variant: "success" === t ? "success" : "critical" });
}
var e1 = n(96494);
function e2(e, t, n) {
    return {
        id: e,
        label: t,
        action: () => {
            let e = (function () {
                let { isNoCharacter: e, isCompactAssets: t } = eZ.getState();
                return { ...(e ? eX.NO_CHARACTER : {}), ...(t ? eX.COMPACT_ASSETS : {}) };
            })();
            return (0, eq.D)("qa_menu", { ...e, ...n });
        },
    };
}
let e3 = [
    e2("open", e1.default.yLZjcu),
    {
        id: "reset",
        label: e1.default["2DL3aX"],
        action: async () => {
            (await (0, eQ.sm)())
                ? e0(eV.intl.string(eV.t.i4jeWR), "success")
                : e0(eV.intl.string(eV.t.fEptJP), "failure");
        },
    },
    e2("open-fake-data", e1.default.kPBZ5M, eX.FAKE_DATA),
    e2("open-global-stats", e1.default.UwiUbM, eX.GLOBAL_STATS),
    e2("open-zero-stats", e1.default.BYW9oX, eX.ZERO_STATS),
];
e2("open-unavailable", e1.default["58TARv"], eX.UNAVAILABLE);
let e6 = ["reset"];
var e8 = n(852717),
    e7 = n(641214);
function e5() {
    return (0, i.jsx)(eD.y, { type: eD.t.SPINNING_CIRCLE_SIMPLE, className: e7.u1, itemClassName: e7.$N });
}
function e9(e) {
    let { onClose: t } = e,
        n = (0, eL.hF)("CheckpointUserStatusMenuItem"),
        l = (function (e) {
            switch (e) {
                case "off":
                    return [];
                case "reset_only":
                    return e3.filter((e) => e6.includes(e.id));
                case "all":
                    return e3;
            }
        })(n),
        a = (0, c.bG)([eY.A], () => eY.A.isFetching);
    return (0, i.jsx)(eK, {
        icon: a ? e5 : ew.ExperimentalCheckpointIcon,
        label: eV.intl.string(e8.default["8hclXY"]),
        sublabel: (0, i.jsx)("span", { className: e7.$B, children: eV.intl.string(e8.default.BFc4lY) }),
        onClick: async function () {
            (await (0, eq.D)("user_profile_account_popout"), t());
        },
        renderSubmenu:
            "off" !== n
                ? (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(eW, {
                          navId: "checkpoint-qa-submenu",
                          "aria-label": eV.intl.string(e1.default["9dS734"]),
                          className: e7.gn,
                          onClose: n,
                          children: l.map((e) =>
                              (0, i.jsx)(
                                  eU.Dr,
                                  {
                                      id: e.id,
                                      label: eV.intl.string(e.label),
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
var e4 = n(176781),
    te = n(780964),
    tt = n(766075),
    tn = n(734066),
    ti = n(419490),
    tl = n(409067),
    ta = n(271597),
    tr = n(534514),
    ts = n(475358),
    to = n(866665),
    tu = n(408278),
    tc = n(625903),
    td = n(404778),
    tm = n(516521),
    tf = n(821609),
    tp = n(532624),
    th = n(927813),
    tg = n(879631),
    tA = n(350535),
    tC = n(341923),
    tE = n(572164),
    tx = n(953932),
    tv = n(280483),
    t_ = n(890856),
    tb = n(713517),
    ty = n(609174),
    tT = n(151184);
function tS(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        a = (0, ty.Y_)(),
        r = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, ta.p)({ initialEditingClipId: a.id }));
            },
            [a, t],
        );
    return (0, i.jsx)(tf.$, {
        onClick: r,
        icon: eE.PencilIcon,
        variant: n,
        size: "sm",
        text: eV.intl.string(eV.t.bt75uw),
        fullWidth: !0,
    });
}
var tI = n(82716),
    tN = n(449397),
    tj = n(399053),
    tR = n(285072),
    tM = n(575172);
let tO = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: s } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: u } = (0, tb.A)(o),
        c = l.useCallback(() => {
            (a?.(), (0, ta.p)({ initialEditingClipId: t.id }));
        }, [t.id, a]);
    return (0, i.jsx)(ty.Cl, {
        clip: t,
        children: (0, i.jsx)(t_.s, {
            ref: o,
            "aria-label": eV.intl.string(eV.t.bt75uw),
            onClick: c,
            className: r()(tM.Z1, s),
            children: (0, i.jsxs)(tj.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, i.jsx)("div", {
                            className: tM.Ad,
                            children: (0, i.jsx)(ex.E, { type: "new", variant: "primary" }),
                        }),
                    (0, i.jsxs)(tR.h, {
                        isVisible: u,
                        className: tM.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tM.mY,
                                children: [(0, i.jsx)(tI.z, {}), (0, i.jsx)(tT.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tM.E_,
                                children: [
                                    (0, i.jsx)(tS, { onBeforeEdit: a, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tN.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tP = n(696016),
    tk = n(753070),
    tL = n(683825),
    tD = n(48127);
function tw(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: r } = e;
    (0, tv.A)();
    let s = (0, c.yK)([ti.Ay], () => Object.values(ti.Ay.getClips())),
        o = (0, c.bG)([ti.Ay], () => ti.Ay.getSettings()),
        u = (0, c.bG)([ti.Ay], () => ti.Ay.getNewClipIds()),
        d = (0, tC.H)(),
        m = (0, c.bG)([ti.Ay], () => ti.Ay.getEnableAutoclipping()),
        f = (0, c.bG)([tp.Ay], () => tp.Ay.getKeybindForAction(J.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                r?.(e);
            },
            [r],
        ),
        h = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = s.filter((e) => e.type === tP.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, tl.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, h]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        C = g.length > 16,
        E = null != f ? tA.dI(f.shortcut, !0) : null,
        x = [
            (0, tg.$)(o.clipsLength / th.A.Millis.SECOND),
            (0, tk.zr)(o.clipsQuality.resolution),
            eV.intl.formatToPlainString(eV.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        d && x.push(eV.intl.string(tL.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tD.SW,
            role: "dialog",
            "aria-label": eV.intl.string(eV.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tD.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tD.$,
                            children: [
                                (0, i.jsx)(tr.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: eV.intl.string(eV.t.z2jK6X),
                                }),
                                null != E && (0, i.jsx)(ts.e, { className: tD.P, shortcut: E }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tD.$s,
                            children: [
                                (0, i.jsx)(to.m, {
                                    text: eV.intl.string(eV.t["3D5yo/"]),
                                    children: (0, i.jsx)(tu.K, {
                                        onClick: () => n(),
                                        icon: tc.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eV.intl.string(eV.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(to.m, {
                                    text: eV.intl.string(tL.default["55C2MH"]),
                                    children: (0, i.jsx)(tu.K, {
                                        onClick: () => t(),
                                        icon: e4.ClipsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eV.intl.string(tL.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tD.ov,
                    children: [
                        x.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tD.LO, children: "\u2022" }),
                                        (0, i.jsx)(eF.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tD.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        d &&
                            (0, i.jsx)(eF.E, {
                                variant: "body-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tD.wS,
                                children: m ? eV.intl.string(tL.default.lTwKmt) : eV.intl.string(tL.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(td.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(tm.Ch, {
                          className: tD.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tO, { clip: e, isNew: u.includes(e.id), onClose: a }, e.id)),
                              C &&
                                  (0, i.jsx)("div", {
                                      className: tD.qr,
                                      children: (0, i.jsx)(tf.$, {
                                          onClick: () => t(),
                                          text: eV.intl.string(tL.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tU, { keybindString: E }),
            ],
        })
    );
}
function tU(e) {
    let { keybindString: t } = e,
        n = (0, tE.E)();
    return (0, i.jsxs)("div", {
        className: tD.p$,
        children: [
            (0, i.jsx)(eF.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: tD.qO,
                children: eV.intl.string(tL.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eF.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: tD.CZ,
                      children: eV.intl.format(tL.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eF.E,
                                  {
                                      variant: "body-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(ts.e, { shortcut: t }, "keybind"),
                      }),
                  })
                : (0, i.jsx)(tx.A, {}),
        ],
    });
}
function tG(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        a = (0, tn.sw)(),
        r = !(0, c.bG)([ti.Ay], () => ti.Ay.getSettings().showPovClipsInGallery),
        s = (0, c.bG)(
            [ti.Ay],
            () => {
                let e = ti.Ay.getNewClipIds();
                return r
                    ? e.filter((e) => {
                          let t = ti.Ay.getClipById(e);
                          return null != t && !(0, tl.kD)(t);
                      }).length
                    : e.length;
            },
            [r],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, ta.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = l.useCallback(() => {
            (t(), (0, tt.openUserSettings)(te.X.CLIPS_PANEL));
        }, [t]);
    return a
        ? (0, i.jsx)(eK, {
              action: "PRESS_CLIPS",
              icon: e4.ClipsIcon,
              label: eV.intl.string(eV.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(eS.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tw, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tF = n(971217),
    tB = n(577390),
    tV = n(287727),
    tH = n(31956),
    tW = n(744808),
    tK = n(645507),
    tz = n(263775),
    tY = n(970931),
    tq = n(315710),
    tQ = n(789645),
    t$ = n(775602),
    tX = n(832248),
    tZ = n(462887),
    tJ = n(736653),
    t0 = n(439174),
    t1 = n(270060),
    t2 = n(105909),
    t3 = n(682901);
function t6() {
    let e = (0, t2.Xb)(),
        t = (0, t1.h)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = t3.sp.length - 1; t >= 0; t--) {
        let i = t3.VD[t3.sp[t]],
            l = new Date(e);
        if ((l.setMonth(l.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let t8 = {
        [t3.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [t3.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [t3.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [t3.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [t3.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [t3.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [t3.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [t3.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    t7 = {
        [t3.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [t3.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [t3.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [t3.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [t3.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [t3.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [t3.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [t3.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var t5 = n(570484);
let t9 = l.lazy(() => Promise.all([n.e(969274), n.e(924832)]).then(n.bind(n, 748579)));
function t4() {
    let e = (0, c.bG)([t$.Ay], () => t$.Ay.useReducedMotion),
        t = (0, tX.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = t6(),
                t = (0, tZ.M)((0, tJ.Ay)());
            if (null == e) return null;
            let n = t8[e],
                i = t7[e],
                l = {
                    currentBadge: (0, t0.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                a = t3.sp.indexOf(e);
            if (a > 0) {
                let e = t3.sp[a - 1],
                    n = t8[e];
                ((l.prevBadge = (0, t0.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [a, r] = l.useState(null);
    return (null != n && null == a && r(n), e || !t || null == a) ? null : (0, i.jsx)(ne, { levelUpData: a });
}
function ne(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        a = l.useCallback(() => {
            tX.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tq.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: t5.i,
            children: [
                (0, i.jsx)("div", {
                    className: t5.b,
                    children: (0, i.jsx)(to.m, {
                        text: eV.intl.string(eV.t.cpT0Cq),
                        children: (0, i.jsx)(tu.K, {
                            icon: tQ.XSmallIcon,
                            variant: "secondary",
                            size: "sm",
                            onClick: a,
                            "aria-label": eV.intl.string(eV.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(t9, { levelUpData: t }) }),
            ],
        }),
    });
}
var nt = n(397562),
    nn = n(206835),
    ni = n(183555),
    nl = n(465318),
    na = n(527212),
    nr = n(702476),
    ns = n(718019),
    no = n(241614),
    nu = n(915614),
    nc = n(689233),
    nd = n(559506),
    nm = n(646986),
    nf = n(312294),
    np = n(946356),
    nh = n(465829),
    ng = n(624479),
    nA = n(206845),
    nC = n(957565),
    nE = n(427262),
    nx = n(62119);
function nv(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, ni.NJ)();
    return nC.p5
        ? (0, i.jsx)(nA.A, {
              text: eV.intl.string(eV.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: nE.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: r()(nx.c, { [nx.R]: n }),
                      "aria-label": eV.intl.string(eV.t.y5MwJy),
                      children: (0, i.jsx)(ng.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var n_ = n(680581),
    nb = n(442228),
    ny = n(253932),
    nT = n(362862),
    nS = n(621466),
    nI = n(318254),
    nN = n(863610),
    nj = n(421773),
    nR = n(318346),
    nM = n(923138),
    nO = n(309954),
    nP = n(673125),
    nk = n(150849),
    nL = n(769001);
function nD(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: a, onCloseAccountPopout: s } = e;
    (0, nM.I)({ enabled: !0 });
    let { balance: o } = (0, nO.W)(),
        u = (0, c.bG)([nP.Ay], () =>
            nP.Ay.userOpenedWalletViaProfileDCF ? nP.Y0.NEW_ACHIEVEMENT : nP.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            nP.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: d, onMouseEnter: m, onMouseLeave: f, setIsHovered: p, cancelTimers: A } = (0, nj.A)(0, 500),
        C = l.useCallback(() => {
            (0, E.ue)() || f();
        }, [f]),
        x = l.useRef(null),
        v = l.useRef(null),
        _ = l.useRef(null),
        b = l.useCallback(
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
                let t = (0, nS.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${eH.j$}`);
                null != n && n !== x.current && (A(), p(!1));
            }
        }, [d, A, p]));
    let y = l.useRef(!1);
    l.useEffect(() => {
        d || (y.current = !1);
    }, [d]);
    let T = l.useCallback(() => {
            (y.current ||
                ((y.current = !0),
                (0, nR.Y)({
                    pageType: P.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: P.A.ORB_WALLET,
                    ctaObject: P.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        S = (0, eB.rE)({ action: "PRESS_ORBS", onClick: T });
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
    let I = l.useMemo(
            () =>
                null != o
                    ? eV.intl.format(eV.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(nN.n, { dotRadius: 3.5, themed: !0, className: nL.K }),
            [o],
        ),
        N = l.useMemo(
            () =>
                u === nP.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(ex.E, { type: "new", variant: "primary" })
                    : u === nP.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(ex.E, { type: { text: eV.intl.string(eV.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        j = l.useCallback(() => {
            (A(), p(!1), s());
        }, [A, p, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nS.vq)(t, Node) && null != x.current && x.current.contains(t) && A();
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
                    ref: b,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, i.jsx)(nk.vG, { onCloseWallet: j, returnRef: v, isProfilePopout: !0 }),
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
                                children: (0, i.jsx)(nI.OrbsIcon, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: eH.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eF.E, {
                                        color: "currentColor",
                                        variant: "body-sm/medium",
                                        className: eH.W1,
                                        children: I,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: r()(eH.ap, nL._),
                                children: [
                                    N,
                                    (0, i.jsx)(eG.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nw = n(290863),
    nU = n(351906),
    nG = n(403362),
    nF = n(562153),
    nB = n(448645),
    nV = n(628284),
    nH = n(695366),
    nW = n(413599),
    nK = n(619019),
    nz = n(129230),
    nY = n(429707),
    nq = n(274303),
    nQ = n(994125),
    n$ = n(347853),
    nX = n(573879),
    nZ = n(559117),
    nJ = n(43105),
    n0 = n(661439),
    n1 = n(385113),
    n2 = n(352003),
    n3 = n(429913),
    n6 = n(334074),
    n8 = n(633075),
    n7 = n(667049),
    n5 = n(46653),
    n9 = n(90165),
    n4 = n(49999),
    ie = n(518477);
function it(e) {
    let { targetElementRef: t, onClose: a } = e,
        [r, s] = l.useState(!1),
        o = (0, c.bG)([n5.default], () => n5.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, c.yK)([n1.A], () => n1.A.getFeaturedApplicationIds());
            ((0, n2.A)(e),
                l.useEffect(() => {
                    (0, n0.X)();
                }, []));
            let t = (0, c.bG)([n5.default], () => n5.default.getId()),
                n = (0, n7.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof n8.R), [n]),
                a = (0, n3.A)(e),
                r = l.useMemo(() => a.filter(nG.Vq), [a]),
                s = (0, c.cf)([n9.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = r.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = n9.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: u, markAsDismissed: m } = (0, n6.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: n6.SH,
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
                n.e(887141),
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
                n.e(924697),
                n.e(549009),
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
                n.e(918221),
                n.e(504374),
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
                n.e(795345),
                n.e(894292),
                n.e(153302),
                n.e(88683),
                n.e(239204),
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
                n.e(582695),
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
                n.e(883316),
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
                n.e(714496),
                n.e(692990),
                n.e(305834),
                n.e(745959),
                n.e(858529),
                n.e(481987),
                n.e(595653),
                n.e(958038),
                n.e(532039),
                n.e(719466),
                n.e(14234),
                n.e(576909),
                n.e(830228),
                n.e(27355),
                n.e(953665),
                n.e(406174),
                n.e(713708),
                n.e(776273),
                n.e(913823),
                n.e(885533),
                n.e(282833),
                n.e(393766),
                n.e(572963),
                n.e(188689),
                n.e(521930),
                n.e(229787),
                n.e(554241),
                n.e(724303),
                n.e(53102),
                n.e(88599),
                n.e(780262),
                n.e(918024),
                n.e(870663),
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
                n.e(96539),
                n.e(225575),
                n.e(495786),
                n.e(428967),
                n.e(378873),
                n.e(129080),
                n.e(238232),
                n.e(608032),
                n.e(477970),
                n.e(823300),
                n.e(252229),
                n.e(523276),
                n.e(77473),
                n.e(736926),
                n.e(144472),
                n.e(812042),
                n.e(547801),
                n.e(729963),
                n.e(440142),
                n.e(830938),
                n.e(538513),
                n.e(919726),
                n.e(325047),
                n.e(907424),
                n.e(226714),
                n.e(50097),
                n.e(322942),
                n.e(144179),
                n.e(838090),
                n.e(536973),
                n.e(203930),
                n.e(903663),
                n.e(246969),
                n.e(880672),
                n.e(999873),
                n.e(908081),
                n.e(914248),
                n.e(922606),
                n.e(646284),
                n.e(829260),
                n.e(965061),
                n.e(504098),
                n.e(746479),
                n.e(604172),
                n.e(350949),
                n.e(568881),
                n.e(582486),
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
                n.e(209767),
                n.e(659624),
                n.e(736637),
                n.e(653308),
                n.e(272887),
                n.e(47497),
                n.e(803410),
                n.e(237946),
                n.e(677407),
                n.e(550260),
                n.e(241288),
                n.e(69658),
                n.e(634786),
                n.e(469709),
                n.e(569443),
                n.e(49282),
                n.e(235683),
                n.e(936572),
            ]).then(n.bind(n, 148540));
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, i.jsx)(nJ.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: eV.intl.string(eV.t.HMWL9c),
              body: eV.intl.string(eV.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      n4.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eV.intl.string(eV.t.VSLDly),
                      loading: r,
                      onClick: function () {
                          (s(!0),
                              (0, nr.openUserProfileModal)({ userId: o, tabSection: ie.RP.WIDGETS })
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
                                                  n.e(913823),
                                                  n.e(880672),
                                                  n.e(504098),
                                                  n.e(181162),
                                                  n.e(547298),
                                                  n.e(720161),
                                                  n.e(47497),
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
                                              n4.i.TAKE_ACTION,
                                          ),
                                          a());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var ii = n(894768),
    il = n(818348),
    ia = n(709516);
function ir() {
    let e = (0, c.bG)([ii.A], () => ii.A.getStatus()),
        t = (0, nE.MU)(e) ?? "",
        n = e === il.cl.INVISIBLE || e === il.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: ia.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [eV.intl.string(eV.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(to.m, {
                    text: eV.intl.string(eV.t.L99HQm),
                    children: (0, i.jsx)(nH.CircleErrorIcon, {
                        size: "xs",
                        color: eh.A.colors.STATUS_WARNING,
                        "aria-label": eV.intl.string(eV.t.L99HQm),
                    }),
                }),
        ],
    });
}
var is = n(146901),
    io = n(827827);
let iu = [
        { duration: 15 * th.A.Millis.MINUTE, label: () => eV.intl.string(eV.t["8ot6gv"]) },
        { duration: th.A.Millis.HOUR, label: () => eV.intl.string(eV.t.UMWBZr) },
        { duration: 8 * th.A.Millis.HOUR, label: () => eV.intl.string(eV.t.EpAXPC) },
        { duration: th.A.Millis.DAY, label: () => eV.intl.string(eV.t["755t4q"]) },
        { duration: 3 * th.A.Millis.DAY, label: () => eV.intl.string(eV.t["f3/1ch"]) },
        { duration: void 0, label: () => eV.intl.string(eV.t["46dqJY"]) },
    ],
    ic = "forever";
function id(e) {
    let { status: t, currentStatus: n, description: l } = e,
        a = t !== J.clD.ONLINE,
        r = (0, i.jsx)(i.Fragment, {
            children: iu.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    eU.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, io.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? ic,
                );
            }),
        });
    return (0, i.jsx)(eU.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: a,
        label: (0, nE.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(ev.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, io.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: a ? r : void 0,
    });
}
function im(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, is._)(e);
    return "today" === t
        ? eV.intl.formatToPlainString(eV.t.ZxxHIO, { timeString: i })
        : eV.intl.formatToPlainString(eV.t["9OFjSe"], { dateString: n, timeString: i });
}
var ip = n(996988),
    ih = n(207634),
    ig = n(47453);
function iA(e) {
    let { currentUser: t, onClose: n, setPopoutRef: a, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        h = (0, na.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, k.Ay)(P.A.USER_PROFILE_ACCOUNT_POPOUT),
        C = (0, ni.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, nt.A)(g, h, ie.R7.ACCOUNT_POPOUT);
    let { ref: x } = (0, ej.Ay)(),
        { isHoveringOrFocusing: v, isHovering: _ } = (0, tb.A)(x);
    (l.useEffect(() => {
        a?.(x.current);
    }, [x, a]),
        l.useEffect(
            () => (
                tX.A.setState({ isOpen: !0 }),
                () => tX.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let b = (0, c.bG)([nw.A], () => nw.A.getStatus(t.id)),
        y = im(ny.CY.useSetting()),
        T = (0, c.bG)([nU.A], () => nU.A.hidePersonalInformation),
        S = (0, tY.kB)(),
        I = ny.Q_.useSetting(),
        N = (function (e) {
            let t = ny.CY.useSetting(),
                n = (0, tY.kB)(),
                l = ny.Jr.useSetting();
            function a(i) {
                let l = im(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case J.clD.DND:
                        return n ? eV.intl.string(eV.t.day5A6) : eV.intl.string(eV.t["tq/fMK"]);
                    case J.clD.INVISIBLE:
                        return eV.intl.string(eV.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let r = (0, i.jsx)(i.Fragment, {
                    children: iu.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            eU.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tY.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? ic,
                        );
                    }),
                }),
                s = id({ status: J.clD.ONLINE, currentStatus: e }),
                o = id({ status: J.clD.IDLE, currentStatus: e, description: a(J.clD.IDLE) }),
                u = id({ status: J.clD.DND, currentStatus: e, description: a(J.clD.DND) }),
                c = id({ status: J.clD.INVISIBLE, currentStatus: e, description: a(J.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(eU.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(eU.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      eU.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eV.intl.string(eV.t.gJRnwK),
                                          iconLeft: e_.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: e_.BellSlashIcon },
                                          badge: { text: eV.intl.string(eV.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? eV.intl.format(eV.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            eV.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eV.intl.string(eV.t["Br1q+x"]),
                                          action: () => {
                                              (0, tY.ES)(!n);
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
        })(b),
        j = (function (e) {
            let t = (0, c.bG)([eR.default], () => eR.default.getCurrentUser()),
                n = (0, c.bG)([nU.A], () => nU.A.hidePersonalInformation),
                l = (0, c.bG)([nW.A], () => (0, tZ.M)(nW.A.theme)),
                { multiAccountUsers: a } = (0, nQ.K)(),
                r = a.map((a) => {
                    let r = new nK.A(a),
                        s = r.id === t?.id,
                        o = a.tokenStatus === nq.U.INVALID,
                        u = n ? null : `#${r.discriminator}`;
                    return (0, i.jsx)(
                        eU.Dr,
                        {
                            id: r.id,
                            focusedClassName: nZ.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nZ.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: r.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": a.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nZ.DD,
                                            children: [
                                                (0, i.jsx)(eF.E, {
                                                    className: nZ.gE,
                                                    variant: "body-sm/normal",
                                                    children: nE.Ay.getUserTag(r, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !r.hasUniqueUsername() &&
                                                    (0, i.jsx)(eF.E, {
                                                        className: nZ.df,
                                                        variant: "body-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(nV.CircleCheckIcon, {
                                                size: "sm",
                                                color: t
                                                    ? eh.A.unsafe_rawColors.WHITE.css
                                                    : eh.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? eh.A.unsafe_rawColors.BRAND_500.css
                                                        : eh.A.unsafe_rawColors.WHITE.css,
                                                className: nZ.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nH.CircleErrorIcon, {
                                                color: eh.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? eh.A.unsafe_rawColors.BRAND_500.css
                                                        : eh.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nZ.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, n$.A)();
                                else {
                                    var n;
                                    (n = r.id) !== t?.id &&
                                        (nz.default.track(J.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: J.JJy.USER_PROFILE },
                                        }),
                                        nY.Mx(n, void 0, nX.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(eU.bX, {}),
                            (0, i.jsx)(eU.Dr, {
                                id: "manage-accounts",
                                label: eV.intl.string(eV.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, n$.A)());
                                },
                            }),
                        ],
                    }),
                ),
                r
            );
        })(n),
        R = (0, nn.A)({ analyticsLocations: g }),
        M = (0, nB.TW)(t),
        O = (0, L.d)({ location: "UserProfileAccountPopout" }),
        D = (function (e) {
            let { location: t, enabled: n } = e,
                i = (0, c.bG)([eR.default], () => eR.default.getCurrentUser()?.id);
            l.useEffect(() => {
                n && null != i && !eO.Ay.hasCatalogFor(i) && (0, eM.RS)(i);
            }, [i, n]);
            let a = (0, c.bG)([eO.Ay], () => (n ? eO.Ay.getUnreadBadgeCount() : 0), [n]);
            return (0, eP.e)({ location: t, hasUnread: a > 0 }) ? a : 0;
        })({ location: "UserProfileAccountPopout", enabled: O }),
        w = l.useRef(null),
        U = l.useRef(null),
        G = l.useRef(null),
        F = (0, tV.A)(h?.profileFrame?.skuId),
        B = (0, tB.A)(h?.profileFrame?.skuId);
    (0, tH.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: C, analyticsLocations: g });
    let V = l.useRef((0, tX.A)((e) => e.shouldRenderTenureLevelUp)),
        H = l.useMemo(() => (0, tK.A)(), []),
        [W, K] = l.useState(() => tX.A.getState().shouldRenderTenureLevelUp);
    function z(e) {
        (n?.(), (0, nr.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...C, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            K(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let Y = h?.widgets != null && h.widgets.length > 0,
        q = l.useCallback(() => {
            n();
        }, [n]),
        Q = l.useCallback(() => {
            (R(), q());
        }, [R, q]),
        $ = nl.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
        X = (0, nT.Hy)({ location: "UserProfileAccountPopout" }),
        Z = (0, eL.FX)("UserProfileAccountPopout"),
        ee = (0, tX.A)((e) => e.shouldScrollToOrbsMenuItem),
        [et, en] = (0, tz.kn)(
            [
                d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE,
                $ ? d.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
            ].filter(nG.Vq),
            { groupName: void 0, bypassAutoDismiss: !0 },
        ),
        ei = l.useId();
    return (0, i.jsx)(k.f5, {
        value: g,
        children: (0, i.jsx)(ni.of, {
            value: C,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(eg.l, {
                ref: x,
                "aria-labelledby": ei,
                className: r()(eH.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eA.H, { id: ei, children: eV.intl.string(eV.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eA.F, {
                        children: [
                            (0, i.jsxs)(np.A, {
                                className: eH.BK,
                                user: t,
                                displayProfile: h,
                                themeType: ip.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: ig.wx,
                                        children: [
                                            (0, i.jsx)(nu.A, { user: t, displayProfile: h, themeType: ip.d.POPOUT }),
                                            (0, i.jsx)(ns.A, {
                                                user: t,
                                                displayProfile: h,
                                                avatarSize: ih.T[ip.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : z,
                                            }),
                                            (0, i.jsx)(n_.A, {
                                                ref: w,
                                                user: t,
                                                themeType: ip.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eC.Ip, {
                                        ref: G,
                                        className: eH.rf,
                                        style: { pointerEvents: W ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(nd.A, { userId: t.id }),
                                            (0, i.jsx)(nh.Ay, {
                                                className: eH.eF,
                                                user: t,
                                                displayName: nF.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : z,
                                                displayNameTrailing: (0, i.jsx)(nv, { user: t, isVisible: v }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(no.A, {
                                                    displayProfile: h,
                                                    themeType: ip.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, i.jsx)(nc.A, { isPremiumUser: M, onInteraction: n }),
                                            (0, i.jsx)(nb.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: T,
                                                onClose: n,
                                            }),
                                            Y &&
                                                (0, i.jsx)(nf.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: z,
                                                }),
                                            (0, i.jsx)(nm.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: z,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eH.T_,
                                                children: [
                                                    Z &&
                                                        (0, i.jsx)(np.A.Overlay, {
                                                            className: eH.g0,
                                                            children: (0, i.jsx)(ez, {
                                                                children: (0, i.jsx)(e9, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, i.jsx)(np.A.Overlay, {
                                                        className: eH.g0,
                                                        children: (0, i.jsxs)(ez, {
                                                            children: [
                                                                (0, i.jsx)(eK, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eV.intl.string(eV.t.s5vZlQ),
                                                                    icon: eE.PencilIcon,
                                                                    trailing:
                                                                        null != et
                                                                            ? (0, i.jsx)("div", {
                                                                                  className: eH.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, i.jsx)(ex.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (et ===
                                                                            d.M
                                                                                .DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                                                            en(n4.i.TAKE_ACTION),
                                                                            Q());
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, i.jsx)(eK, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(ir, {}),
                                                                    sublabel: null != y && y,
                                                                    icon: () =>
                                                                        (0, i.jsx)(ev.nW, { status: b, size: 12 }),
                                                                    trailing:
                                                                        (S || b === J.clD.DND) &&
                                                                        (0, i.jsx)(e_.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: ep.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eW, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eH.hQ,
                                                                                  "aria-label": eV.intl.string(
                                                                                      eV.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: N,
                                                                              });
                                                                          },
                                                                    onClick: ep.Fr
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
                                                                                                      eb.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eV.intl.string(
                                                                                                                  eV.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(ey.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eV.intl.string(
                                                                                                                      eV
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
                                                                    (0, i.jsx)(eK, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: eT.RibbonIcon,
                                                                        label: eV.intl.string(eV.t.l6w3Vj),
                                                                        trailing:
                                                                            D > 0
                                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                                      children: [
                                                                                          (0, i.jsx)(eS.hV, {
                                                                                              count: D,
                                                                                              color: eh.A.colors
                                                                                                  .BADGE_PRIMARY_BACKGROUND
                                                                                                  .css,
                                                                                              "aria-hidden": !0,
                                                                                          }),
                                                                                          (0, i.jsx)(A.A, {
                                                                                              children:
                                                                                                  eV.intl.formatToPlainString(
                                                                                                      eV.t.v9Dvub,
                                                                                                      { count: D },
                                                                                                  ),
                                                                                          }),
                                                                                      ],
                                                                                  })
                                                                                : null,
                                                                        onClick: () => {
                                                                            (n(),
                                                                                (0, ek.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tG, { onClose: n, popoutContainerRef: x }),
                                                                X &&
                                                                    (0, i.jsx)(nD, {
                                                                        popoutContainerRef: x,
                                                                        scrollerRef: G,
                                                                        shouldScrollIntoView: ee,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(np.A.Overlay, {
                                                        className: eH.g0,
                                                        children: (0, i.jsxs)(ez, {
                                                            children: [
                                                                (0, i.jsx)(eK, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eI.UserCircleIcon,
                                                                    label: eV.intl.string(eV.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, n$.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eW, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eV.intl.string(eV.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: j,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    nC.p5 &&
                                                                    I &&
                                                                    (0, i.jsx)(eK, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eN.IdIcon,
                                                                        label: eV.intl.string(eV.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, nC.C)(t.id), n());
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
                                        !V.current &&
                                        (0, i.jsx)(tF.A, { skuId: h.profileEffect.skuId, isHovering: _ }),
                                    null != F && (0, i.jsx)(tW.A, { frame: F, fadeIn: B }),
                                ],
                            }),
                            (0, i.jsx)(it, { targetElementRef: U, onClose: n }),
                            (0, i.jsx)(t4, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var iC = n(201805),
    iE = n(209932),
    ix = n(655116),
    iv = n(365958),
    i_ = n(342296),
    ib = n(852712),
    iy = n(389960),
    iT = n(173660),
    iS = n(616356),
    iI = n(734057),
    iN = n(629016),
    ij = n(186111),
    iR = n(754712),
    iM = n(495867),
    iO = n(967198),
    iP = n(485296),
    ik = n(486020),
    iL = n(188567),
    iD = n(536194),
    iw = n(253400),
    iU = n(994314),
    iG = n(485599),
    iF = n(116833);
function iB(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eV.intl.string(eV.t.uwDBSq),
                  body: eV.intl.formatToPlainString(eV.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eV.intl.string(eV.t["5GD53o"]), body: eV.intl.string(eV.t["2Rb7tE"]) };
    return (0, i.jsx)(nJ.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: iF.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eV.intl.string(eV.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function iV(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(iB, {
        ...t,
        onPrimaryAction: () => {
            (l(n4.i.TAKE_ACTION), (0, ek.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(n4.i.USER_DISMISS),
        targetElementRef: n,
    });
}
var iH = n(206248);
function iW(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: a, shouldShow: r = !0, children: s } = e,
        o = (0, tn.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            r && o
                ? (0, i.jsx)(iH.H, {
                      targetElementRef: t,
                      title: eV.intl.string(tL.default.Qn21R6),
                      body: eV.intl.string(tL.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: a,
                      caretConfig: { align: "center" },
                      action: {
                          text: eV.intl.string(eV.t.RzWDqY),
                          onClick: function () {
                              (n(n4.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(n4.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iK = n(379848),
    iz = n(626584),
    iY = n(757036),
    iq = n(591179),
    iQ = n(531685),
    i$ = n(259065),
    iX = n(842671),
    iZ = n(78294);
let iJ = new iz.A("DisplayNameStylesFlywheelCoachmark");
function i0(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
        { analyticsLocations: r } = (0, k.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, c.bG)([iQ.A], () => iQ.A.isFocused()),
        u = (0, iY.L)(t3.PremiumTypes.TIER_2),
        d = (0, iq.X)("DisplayNameStylesFlywheelCoachmark"),
        m = (0, l.useCallback)(() => {
            t(n4.i.TAKE_ACTION);
            let e = eR.default.getCurrentUser();
            d && null != e
                ? (0, nr.openUserProfileModal)({
                      userId: e.id,
                      sourceAnalyticsLocations: r,
                      onModalOpen: () => {
                          (0, i$.L)({ analyticsLocations: r, stackingBehavior: "stack" });
                      },
                  })
                : (0, tt.openUserSettings)(te.X.PROFILE_PANEL, { analyticsLocations: r }, () => {
                      (0, i$.L)({ analyticsLocations: r });
                  });
        }, [t, r, d]),
        f = (0, l.useCallback)(() => {
            t(n4.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(iJ.error) : o || s.current?.pause();
    }, [o]);
    let p = u ? [eV.intl.string(iX.default.TyUdka)] : [eV.intl.string(iX.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a,
            (0, i.jsx)(nJ.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: f,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: iZ.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eV.intl.string(iX.default.cYwrp8),
                body: p,
                actions: [{ text: eV.intl.string(eV.t["4P5I8V"]), variant: "primary", onClick: m }],
            }),
        ],
    });
}
var i1 = n(45780),
    i2 = n(696451),
    i3 = n(71393),
    i6 = n(685073),
    i8 = n(73153);
let i7 = { lastSeenInfos: {} },
    i5 = i7;
class i9 extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        i5 = e ?? i7;
    }
    getState() {
        return i5;
    }
    getGuildLastSeenInfo(e) {
        return i5.lastSeenInfos[e] ?? null;
    }
}
let i4 = new i9(i8.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        i5.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        i5 = i7;
    },
});
var le = n(514661);
let lt = new iz.A("GuildTagAvailableCoachmark");
function ln(e) {
    let t = (0, c.bG)([i3.A], () => i3.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            i8.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: r } = (0, le.A)(t?.id ?? null, () => n(n4.i.TAKE_ACTION));
    if (null == t || !(0, i6.q0)(t))
        return (lt.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eV.intl.string(eV.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: eV.intl.string(eV.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nJ.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iF.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eV.intl.formatToPlainString(eV.t["m/Tc3n"], { guildName: t.name }),
                body: eV.intl.string(eV.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n4.i.USER_DISMISS),
            }),
        ],
    });
}
function li(e) {
    let t = (0, c.bG)([i3.A], () => i3.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: a, onEditProfile: r } = (0, le.A)(t?.id ?? null, () => n(n4.i.TAKE_ACTION));
    if (null == t || !(0, i6.q0)(t))
        return (lt.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eV.intl.string(eV.t.jwEaiX), loading: l, onClick: a, variant: "primary" },
        { text: eV.intl.string(eV.t.s5vZlQ), onClick: r, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(nJ.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iF.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eV.intl.formatToPlainString(eV.t.VFqnyU, { guildName: t.name }),
                body: eV.intl.string(eV.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(n4.i.USER_DISMISS),
            }),
        ],
    });
}
var ll = n(843010),
    la = n(764231),
    lr = n(208223);
function ls(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = t6(),
        a = (0, c.bG)([t$.Ay], () => t$.Ay.useReducedMotion),
        r = (0, tX.A)((e) => e.isOpen),
        s = (0, ll.G)();
    return a || null == l || r || s
        ? null
        : (0, i.jsx)(iK.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, i.jsx)(lo, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function lo(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: a, shouldShow: r } = e,
        s = t3.sp.indexOf(t),
        o = (0, lr.I)(t3.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, l.useCallback)(() => {
            (n(n4.i.TAKE_ACTION),
                tX.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iL._.dispatch(J.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(n4.i.USER_DISMISS);
        }, [n]),
        d = t3.VD[t],
        m = eV.intl.formatToPlainString(eV.t.ewkaVR, {
            timeMilestone: (0, la.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: eV.intl.string(eV.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(nJ.A, {
        targetElementRef: a,
        onRequestClose: c,
        shouldShow: r,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eV.intl.string(eV.t.VoDxsV),
        body: m,
        actions: f,
    });
}
var lu = n(764014);
function lc(e) {
    let { targetElementRef: t } = e,
        n = (0, tX.A)((e) => e.isOpen),
        [l, a] = (0, tz.kn)(n ? [] : [d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: n4.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return l === d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(nJ.A, {
              targetElementRef: t,
              graphic: { type: "image", src: lu.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eV.intl.string(eV.t["Q+dH5r"]),
              body: eV.intl.string(eV.t.YKJw4W),
              onRequestClose: () => a(n4.i.USER_DISMISS),
              actions: [
                  {
                      text: eV.intl.string(eV.t.dcOuei),
                      onClick: function () {
                          (a(n4.i.TAKE_ACTION),
                              tX.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nP.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              iL._.dispatch(J.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function ld(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, iC.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, i1.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ""),
                l = (0, c.bG)(
                    [i3.A, eR.default, i2.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = i3.A.getGuild(e);
                        if (void 0 === t || !(0, i6.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = eR.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = i2.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tz.ww)(l && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? "null");
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                a = (0, c.bG)([i4], () => (null === l ? null : i4.getGuildLastSeenInfo(l))),
                r = (0, c.bG)([i3.A], () => i3.A.getGuild(l)?.profile?.tag),
                s = null != r && i?.identityGuildId === l && i?.tag === null,
                o = null != l && a?.tag === r,
                u = null !== l && s && !o;
            return (0, tz.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? a === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(li, {
                  guildId: e.guildId,
                  onDismiss: r,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(ln, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ls, { groupName: n4.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(lc, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(iK.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: n4.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(i0, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iW, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: ta.p,
                                            children: e.children,
                                        });
                                    case d.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(iV, {
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
var lm = n(348858),
    lf = n(615675),
    lp = n(900797),
    lh = n(847374),
    lg = n(617354),
    lA = n(96020),
    lC = n(42473),
    lE = n(731854),
    lx = n(516171),
    lv = n(577755);
function l_(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
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
        } = (0, lm.I)(m ? "undeafen" : "deafen"),
        C = n ? lf.HeadphonesDenyIcon : f,
        { name: E } = (0, ef.x5)(lE.oh.AUDIO_OUTPUT),
        x = (0, lg.A)(t, n, a),
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
                            children: (0, i.jsx)(lA.A, {
                                onInteraction: (0, H.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                        f = d ? lp.ChevronSmallUpIcon : lh.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: r()(lx.Lh, { [lx.v8]: m, [lx.q6]: d }),
                        children: [
                            (0, i.jsx)(lC.A, {
                                "aria-checked": m,
                                "aria-label": eV.intl.string(eV.t.wjcRFX),
                                className: lx.eT,
                                disabled: a,
                                icon: (0, i.jsx)(C, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? eh.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? lv.o : void 0,
                                innerClassName: r()({ [lv.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: x,
                            }),
                            (0, i.jsx)(lC.A, {
                                className: r()(lx.UT, { [lx.q6]: d }),
                                disabled: a,
                                icon: (0, i.jsx)(f, {
                                    className: lx.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? eh.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eV.intl.formatToPlainString(eV.t["f+DDY/"], { outputDeviceName: E })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? eV.intl.format(eV.t["f+DDY/"], { outputDeviceName: E })
                                    : eV.intl.string(eV.t.aA4Vce),
                                "aria-label": c
                                    ? eV.intl.formatToPlainString(eV.t["f+DDY/"], { outputDeviceName: E })
                                    : eV.intl.string(eV.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lb = n(523875),
    ly = n(666654),
    lT = n(993719);
let lS = {};
class lI extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lS[e] ?? !1;
    }
}
let lN = new lI(i8.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lS[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lS[t] = !1;
    },
});
var lj = n(362823),
    lR = n(980923),
    lM = n(796262),
    lO = n(222176),
    lP = n(973324);
function lk(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
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
        _ = (0, c.bG)([iR.Ay], () => iR.Ay.getMode() === lE.TB.PUSH_TO_TALK),
        b = (0, c.bG)([iR.Ay], () => iR.Ay.getSettings().modeOptions.shortcut),
        y = (0, c.bG)([lN], () => lN.getIsTutorialActive(lj.v.MUTE_TUTORIAL)),
        T = (0, c.bG)([iM.A], () => null != iM.A.getChannelId()),
        { name: S } = (0, ef.x5)(lE.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, ib.d)({ location: "MicrophoneButton" }),
        N = l.useRef(null),
        j = n || s || a,
        R = (0, lb.L)(j ? "unmute" : "mute"),
        { analyticsLocations: M } = (0, k.Ay)(P.A.AUDIO_INPUT_BUTTON),
        { Component: O, events: L, play: D } = R,
        w = a || s ? ly.MicrophoneDenyIcon : O;
    l.useEffect(() => () => D(), [j, D]);
    let U = (0, lR.A)(n, a, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eV.intl.string(eV.t["29gnR4"]), tooltipForceOpen: !0 }
        : E || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eV.intl.format(eV.t.c1qUOQ, { keybind: tA.dI(b).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let G = _ && T,
        F = j ? eh.A.colors.ICON_VOICE_MUTED : "currentColor",
        B = l.useCallback(() => {
            (f(), y && lT.N(lj.v.MUTE_TUTORIAL));
        }, [f, y]);
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
                            children: (0, i.jsx)(lA.A, {
                                onInteraction: (0, H.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                        { isShown: a } = n,
                        s = a ? lp.ChevronSmallUpIcon : lh.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: N,
                        className: r()(lx.Lh, { [lx.v8]: j, [lx.q6]: a }),
                        children: [
                            (0, i.jsx)(lC.A, {
                                "aria-checked": j,
                                "aria-label": eV.intl.string(eV.t.w4m945),
                                className: lx.eT,
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
                                children: G ? (0, i.jsx)("div", { className: r()(lO.U, { [lO.z]: v }) }) : null,
                            }),
                            (0, i.jsx)(lC.A, {
                                "aria-label": C
                                    ? eV.intl.formatToPlainString(eV.t["18wnuD"], { inputDeviceName: S })
                                    : eV.intl.string(eV.t.fRzCbB),
                                className: r()(lx.UT, { [lx.q6]: a }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: lx.$$,
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
                                    ? eV.intl.formatToPlainString(eV.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !a,
                                tooltipText: C
                                    ? eV.intl.format(eV.t["18wnuD"], { inputDeviceName: S })
                                    : eV.intl.string(eV.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(nJ.A, {
                targetElementRef: N,
                shouldShow: y,
                graphic: { type: "image", src: lP.A },
                onRequestClose: () => {
                    lT.N(lj.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eV.intl.string(lM.default.VG4zAf),
                body: eV.intl.string(lM.default["8VIRzR"]),
            }),
        ],
    });
}
var lL = n(935399),
    lD = n(505312),
    lw = n(848847),
    lU = n(22363),
    lG = n(802516),
    lF = n(573648),
    lB = n(128232),
    lV = n(277657),
    lH = n(690364),
    lW = n(522978);
let lK = "console_connection_coachmark",
    lz = new iz.A("ConsoleConnectionCoachmark");
function lY(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = l.useMemo(() => {
            function e(e) {
                (!(async function (e) {
                    let t;
                    e === J.fg2.XBOX ? lH.x() : lB.x();
                    try {
                        t = await (0, lV.V)(e);
                    } catch (t) {
                        (lz.error("Error starting console sign-in; falling back to the link modal", t),
                            (0, lW.A)({ platformType: e, location: lK }));
                        return;
                    }
                    e === J.fg2.XBOX ? lH.t([lK], t) : lB.t([lK], e, t);
                })(e),
                    t(n4.i.TAKE_ACTION));
            }
            return [
                {
                    text: lF.A.get(J.fg2.PLAYSTATION).name,
                    icon: lU.PlaystationNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(J.fg2.PLAYSTATION),
                },
                {
                    text: lF.A.get(J.fg2.XBOX).name,
                    icon: lG.XboxNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(J.fg2.XBOX),
                },
            ];
        }, [t]),
        r = l.useCallback(() => {
            t(n4.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(nJ.A, {
        targetElementRef: n,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5860f559ea2857185a554648b2a0b140e16bea35ed1dff11b697afd49ee2447.png",
            aspectRatio: "2/1",
        },
        title: eV.intl.string(eV.t.ZCib6v),
        body: eV.intl.string(eV.t.ikWQ2x),
        position: "top",
        caretConfig: { align: "end" },
        actions: a,
        onRequestClose: r,
    });
}
var lq = n(975807),
    lQ = n(425565),
    l$ = n(321671);
function lX(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = l.useMemo(
            () => [
                {
                    text: eV.intl.string(l$.default["j4n5/K"]),
                    variant: "primary",
                    onClick: () => {
                        ((0, lq.A)(lQ.C), t(n4.i.TAKE_ACTION));
                    },
                },
            ],
            [t],
        ),
        r = l.useCallback(() => {
            t(n4.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(nJ.A, {
        targetElementRef: n,
        size: "video",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/147b33df1db170b53e140d7ad45552731aa0b9b16b7a7358cb9916634167ee02.png",
            aspectRatio: "16/9",
        },
        title: eV.intl.string(l$.default.tmst3F),
        body: eV.intl.string(l$.default.sJHQqC),
        position: "top",
        caretConfig: { align: "end" },
        actions: a,
        onRequestClose: r,
    });
}
function lZ(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, k.Ay)(P.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(nJ.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
        },
        title: eV.intl.string(eV.t.Mjs8KR),
        body: eV.intl.string(eV.t.U0INks),
        actions: [
            {
                text: eV.intl.string(eV.t.NENZhS),
                onClick: () => {
                    ((0, tt.openUserSettings)(te.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(n4.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(n4.i.USER_DISMISS),
    });
}
var lJ = n(88001),
    l0 = n(107198),
    l1 = n(438705);
function l2(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
        r = l.useCallback(() => {
            (a(), (0, tt.openUserSettings)(te.X.SUBSCRIPTIONS_PANEL));
        }, [a]);
    return (0, i.jsx)(nJ.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: l1 },
        shouldShow: n,
        title: eV.intl.format(l0.default.bx8sR9, { premiumGroupProductName: (0, lJ.DP)() }),
        body: eV.intl.format(l0.default.Pw4OFZ, { premiumGroupProductName: (0, lJ.DP)() }),
        onRequestClose: a,
        actions: [{ text: eV.intl.string(l0.default.DD26QR), onClick: r }],
    });
}
var l3 = n(873298),
    l6 = n(840387);
function l8(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        a = (0, l6.Z)(),
        r = ny.KP.useSetting(),
        s = a && r !== l3.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(n4.i.TAKE_ACTION), (0, tt.openUserSettings)(te.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = l.useCallback(() => {
            t(n4.i.USER_DISMISS);
        }, [t]),
        c = s
            ? r === l3.KP.FRIENDS_ONLY
                ? eV.intl.string(eV.t["/hogEy"])
                : eV.intl.string(eV.t["6hEfm1"])
            : eV.intl.string(eV.t.bnNxW1);
    return (0, i.jsx)(nJ.A, {
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
        title: eV.intl.string(eV.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eV.intl.string(eV.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var l7 = n(415443);
function l5(e) {
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
        m = l.useRef(null),
        [f, p] = l.useState(!1);
    (0, lL.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iL._.subscribe(J.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iL._.unsubscribe(J.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = l.useCallback(() => {
            (p(!1), r());
        }, [r]),
        g = ed.A.coachmarkDismissibleContent;
    if (null != a) {
        let e = (0, l7.A)("1794585847729", !0);
        t =
            null != e
                ? eV.intl.formatToPlainString(eV.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
                : eV.intl.formatToPlainString(eV.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = eV.intl.string(eV.t.cduTBL);
    let A = tc.SettingsIcon,
        C = (0, lD.w)();
    return (
        (A = null != a ? lw.SettingsInfoIcon : C.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(lC.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: s,
                    "aria-label": eV.intl.string(eV.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...C.events,
                    plated: null != c,
                }),
                (0, i.jsx)(l2, { targetElementRef: m, shouldShow: f, onDismiss: () => p(!1) }),
                (0, i.jsx)(iK.Ay, {
                    contentTypes: o,
                    groupName: n4.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.TINY_BRONCO && null != I.hm
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(I.hm, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === d.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(l8, { markAsDismissed: n, targetElementRef: m })
                              : t === d.M.GIFT_CARDS_MARKETING_COACHMARK
                                ? (0, i.jsx)(lX, { markAsDismissed: n, targetElementRef: m })
                                : t === d.M.CONSOLE_CONNECTION_COACHMARK
                                  ? (0, i.jsx)(lY, { markAsDismissed: n, targetElementRef: m })
                                  : null != g && t === g
                                    ? (0, i.jsx)(lZ, { markAsDismissed: n, targetElementRef: m })
                                    : null;
                    },
                }),
            ],
        })
    );
}
var l9 = n(358285);
let l4 = iw.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    ae = 2.5 * th.A.Millis.SECOND,
    at = 2 * th.A.Millis.MINUTE,
    an = 5 * th.A.Millis.SECOND;
function ai(e) {
    let {
            ref: t,
            speaking: n,
            playingSoundboard: a,
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
        b = (0, ik.F_)({ avatarDecoration: C, size: (0, K.Te)(p._3.SIZE_32) }),
        T = (0, ei.A)(),
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
                [a, r] = l.useState(!1);
            return (
                (0, y.A)(() => r(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        iL._.subscribe(J.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iL._.unsubscribe(J.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
            );
        })(),
        j = (0, Y.K)(A);
    return null == u
        ? null
        : (0, i.jsx)(v.A, {
              object: J.ZSU.AVATAR,
              children: (0, i.jsx)(i_.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, iv.A)(u.id, u.getAvatarURL(void 0, i_.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(iA, {
                          currentUser: u,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: l9.dI,
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
                          className: r()(l9.Q9, { [l9.ZQ]: null != A }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), d?.(t));
                                  },
                                  "aria-label": eV.intl.string(eV.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: l9.$n,
                                  "data-jump-section": E,
                              }),
                              (0, i.jsx)(l4, {
                                  size: p._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: b,
                                  status: o ? J.clD.STREAMING : c,
                                  voiceStatus: (0, p.n$)(n, a),
                                  voiceDb: s,
                                  className: l9.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: l9.oM, children: f(T) }),
                          ],
                      });
                  },
              }),
          });
}
class al extends l.PureComponent {
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
        ((0, B.A)(e, t, J.JJy.ACCOUNT_PANEL), (0, V.XJ)(P.A.ACCOUNT, V.OP.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, F.A)(e, J.JJy.ACCOUNT_PANEL), (0, V.XJ)(P.A.ACCOUNT, V.OP.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            iM.A.isConnected() ? (0, tt.openUserSettings)(te.X.VOICE_AND_VIDEO_PANEL) : (0, tt.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e(578667),
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
                    n.e(795345),
                    n.e(894292),
                    n.e(153302),
                    n.e(88683),
                    n.e(239204),
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
                    n.e(195707),
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
                    n.e(284269),
                    n.e(572430),
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
                    n.e(920955),
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
                    n.e(553627),
                    n.e(887141),
                    n.e(736919),
                    n.e(440636),
                    n.e(568960),
                    n.e(459257),
                    n.e(924697),
                    n.e(549009),
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
                    n.e(770248),
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
                    n.e(918221),
                    n.e(377109),
                    n.e(656997),
                    n.e(828849),
                    n.e(74886),
                    n.e(582695),
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
                    n.e(436753),
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
                    n.e(697395),
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
                    n.e(615431),
                    n.e(30482),
                    n.e(257182),
                    n.e(883316),
                    n.e(49571),
                    n.e(577885),
                    n.e(643167),
                    n.e(599135),
                    n.e(942186),
                    n.e(242967),
                    n.e(557729),
                    n.e(463143),
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
                    n.e(689567),
                    n.e(319056),
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
                    n.e(393336),
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
                    n.e(714496),
                    n.e(692990),
                    n.e(305834),
                    n.e(745959),
                    n.e(858529),
                    n.e(481987),
                    n.e(595653),
                    n.e(958038),
                    n.e(532039),
                    n.e(719466),
                    n.e(14234),
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
                    n.e(913823),
                    n.e(21921),
                    n.e(885533),
                    n.e(282833),
                    n.e(391763),
                    n.e(393766),
                    n.e(811310),
                    n.e(258398),
                    n.e(676418),
                    n.e(572963),
                    n.e(70833),
                    n.e(897073),
                    n.e(161275),
                    n.e(761253),
                    n.e(844780),
                    n.e(401518),
                    n.e(571210),
                    n.e(166495),
                    n.e(362274),
                    n.e(49782),
                    n.e(570849),
                    n.e(45072),
                    n.e(942724),
                    n.e(139970),
                    n.e(173764),
                    n.e(188689),
                    n.e(940258),
                    n.e(830221),
                    n.e(858164),
                    n.e(521930),
                    n.e(357688),
                    n.e(308555),
                    n.e(857467),
                    n.e(977547),
                    n.e(508371),
                    n.e(885434),
                    n.e(88342),
                    n.e(586127),
                    n.e(554241),
                    n.e(41250),
                    n.e(724303),
                    n.e(179049),
                    n.e(132737),
                    n.e(53102),
                    n.e(344502),
                    n.e(146070),
                    n.e(836863),
                    n.e(538733),
                    n.e(311802),
                    n.e(658216),
                    n.e(698965),
                    n.e(854622),
                    n.e(629482),
                    n.e(590365),
                    n.e(989088),
                    n.e(37977),
                    n.e(136149),
                    n.e(470068),
                    n.e(817989),
                    n.e(88599),
                    n.e(780262),
                    n.e(918024),
                    n.e(720590),
                    n.e(147626),
                    n.e(613867),
                    n.e(870663),
                    n.e(689393),
                    n.e(727779),
                    n.e(412743),
                    n.e(382563),
                    n.e(585503),
                    n.e(437065),
                    n.e(891585),
                    n.e(203589),
                    n.e(709640),
                    n.e(382465),
                    n.e(294857),
                    n.e(15481),
                    n.e(179745),
                    n.e(952548),
                    n.e(893917),
                    n.e(668802),
                    n.e(631358),
                    n.e(459414),
                    n.e(335395),
                    n.e(636373),
                    n.e(882777),
                    n.e(433359),
                    n.e(945413),
                    n.e(235313),
                    n.e(402026),
                    n.e(163235),
                    n.e(230664),
                    n.e(655708),
                    n.e(632756),
                    n.e(564850),
                    n.e(941040),
                    n.e(124791),
                    n.e(35771),
                    n.e(648344),
                    n.e(170104),
                    n.e(491793),
                    n.e(889638),
                    n.e(256769),
                    n.e(553984),
                    n.e(902564),
                    n.e(142867),
                    n.e(884601),
                    n.e(782969),
                    n.e(30441),
                    n.e(704727),
                    n.e(374916),
                    n.e(214285),
                    n.e(248330),
                    n.e(373004),
                    n.e(803332),
                    n.e(776766),
                    n.e(938149),
                    n.e(408362),
                    n.e(741678),
                    n.e(504370),
                    n.e(96539),
                    n.e(225575),
                    n.e(676156),
                    n.e(852617),
                    n.e(102698),
                    n.e(125964),
                    n.e(415266),
                    n.e(787139),
                    n.e(737021),
                    n.e(775951),
                    n.e(495786),
                    n.e(428967),
                    n.e(731751),
                    n.e(254506),
                    n.e(378873),
                    n.e(874342),
                    n.e(138830),
                    n.e(258033),
                    n.e(757901),
                    n.e(976516),
                    n.e(400501),
                    n.e(985794),
                    n.e(695358),
                    n.e(767837),
                    n.e(473384),
                    n.e(129080),
                    n.e(432209),
                    n.e(996868),
                    n.e(238232),
                    n.e(368062),
                    n.e(859991),
                    n.e(667092),
                    n.e(608032),
                    n.e(477970),
                    n.e(709371),
                    n.e(466718),
                    n.e(330724),
                    n.e(599719),
                    n.e(823300),
                    n.e(987478),
                    n.e(579245),
                    n.e(603998),
                    n.e(252229),
                    n.e(531741),
                    n.e(523276),
                    n.e(77473),
                    n.e(390213),
                    n.e(736926),
                    n.e(939171),
                    n.e(465157),
                    n.e(490010),
                    n.e(812042),
                    n.e(547801),
                    n.e(550033),
                    n.e(916758),
                    n.e(729963),
                    n.e(660249),
                    n.e(440142),
                    n.e(830938),
                    n.e(691671),
                    n.e(612287),
                    n.e(720064),
                    n.e(538513),
                    n.e(733416),
                    n.e(919726),
                    n.e(652212),
                    n.e(325047),
                    n.e(907424),
                    n.e(226714),
                    n.e(692513),
                    n.e(305557),
                    n.e(321640),
                    n.e(938579),
                    n.e(36227),
                    n.e(50097),
                    n.e(975933),
                    n.e(322942),
                    n.e(460773),
                    n.e(93907),
                    n.e(944801),
                    n.e(229666),
                    n.e(92295),
                    n.e(208018),
                    n.e(589916),
                    n.e(781202),
                    n.e(848625),
                    n.e(458273),
                    n.e(968763),
                    n.e(163069),
                    n.e(883952),
                    n.e(26001),
                    n.e(159957),
                    n.e(838056),
                    n.e(935948),
                    n.e(414591),
                    n.e(652111),
                    n.e(144179),
                    n.e(215920),
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
                    n.e(203930),
                    n.e(903663),
                    n.e(741111),
                    n.e(954289),
                    n.e(295998),
                    n.e(480945),
                    n.e(819193),
                    n.e(276297),
                    n.e(365011),
                    n.e(780611),
                    n.e(201243),
                    n.e(950535),
                    n.e(246969),
                    n.e(880672),
                    n.e(269786),
                    n.e(113945),
                    n.e(228850),
                    n.e(437961),
                    n.e(999873),
                    n.e(908081),
                    n.e(720045),
                    n.e(914248),
                    n.e(458886),
                    n.e(922606),
                    n.e(527687),
                    n.e(646284),
                    n.e(557830),
                    n.e(904774),
                    n.e(78601),
                    n.e(726294),
                    n.e(829260),
                    n.e(557940),
                    n.e(342234),
                    n.e(81189),
                    n.e(9205),
                    n.e(144989),
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
                    n.e(763096),
                    n.e(781949),
                    n.e(504098),
                    n.e(78465),
                    n.e(746479),
                    n.e(872893),
                    n.e(225612),
                    n.e(127659),
                    n.e(525499),
                    n.e(377663),
                    n.e(341701),
                    n.e(472789),
                    n.e(137937),
                    n.e(42834),
                    n.e(604172),
                    n.e(468083),
                    n.e(803191),
                    n.e(548730),
                    n.e(39689),
                    n.e(871467),
                    n.e(350949),
                    n.e(788976),
                    n.e(992478),
                    n.e(276814),
                    n.e(368684),
                    n.e(568881),
                    n.e(51892),
                    n.e(841838),
                    n.e(396325),
                    n.e(141049),
                    n.e(830351),
                    n.e(396854),
                    n.e(967874),
                    n.e(512162),
                    n.e(866008),
                    n.e(531158),
                    n.e(760989),
                    n.e(79216),
                    n.e(369501),
                    n.e(303710),
                    n.e(545006),
                    n.e(419360),
                    n.e(528384),
                    n.e(949013),
                    n.e(202669),
                    n.e(886913),
                    n.e(860003),
                    n.e(808979),
                    n.e(749736),
                    n.e(14020),
                    n.e(587732),
                    n.e(645830),
                    n.e(733771),
                    n.e(946039),
                    n.e(995602),
                    n.e(850298),
                    n.e(258568),
                    n.e(578090),
                    n.e(896480),
                    n.e(569468),
                    n.e(966598),
                    n.e(886492),
                    n.e(101851),
                    n.e(146149),
                    n.e(360536),
                    n.e(986300),
                    n.e(686774),
                    n.e(138733),
                    n.e(228011),
                    n.e(759174),
                    n.e(175284),
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
                    n.e(507127),
                    n.e(932011),
                    n.e(384820),
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
                    n.e(10622),
                    n.e(523638),
                    n.e(819305),
                    n.e(864926),
                    n.e(450541),
                    n.e(647999),
                    n.e(465574),
                    n.e(679700),
                    n.e(967102),
                    n.e(220803),
                    n.e(195782),
                    n.e(659624),
                    n.e(646191),
                    n.e(262720),
                    n.e(454085),
                    n.e(483518),
                    n.e(185928),
                    n.e(462155),
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
                    n.e(83577),
                    n.e(313052),
                    n.e(639721),
                    n.e(419631),
                    n.e(82384),
                    n.e(956814),
                    n.e(903820),
                    n.e(876892),
                    n.e(334624),
                    n.e(971508),
                    n.e(816799),
                    n.e(356675),
                    n.e(143295),
                    n.e(352351),
                    n.e(293285),
                    n.e(311525),
                    n.e(671710),
                    n.e(499240),
                    n.e(483102),
                    n.e(704457),
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
                    n.e(488292),
                    n.e(939081),
                    n.e(874913),
                    n.e(710569),
                    n.e(717602),
                    n.e(239734),
                    n.e(515818),
                    n.e(645671),
                    n.e(993720),
                    n.e(800916),
                    n.e(654658),
                    n.e(657081),
                    n.e(233049),
                    n.e(445254),
                    n.e(569443),
                    n.e(809548),
                    n.e(543456),
                    n.e(96857),
                ]).then(n.bind(n, 230016));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, H.s)("UserSettingsMenu", P.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, H.s)("AudioDeviceMenu", P.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, ib.d)({ location: "Account" });
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
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            s =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > at;
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
                      this.speakingWhileMutedTooltipTimeout.start(ae, () =>
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
        if ((0, T.A)({ activities: t, status: a, applicationStream: n, voiceChannel: s }))
            return (0, i.jsxs)(O.A, {
                hoverText: r,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: nE.Ay.humanizeStatus(a) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: l9.XD,
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
                  hoverText: r,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: nE.Ay.humanizeStatus(a) }),
                      (0, i.jsx)(en.A, { activity: o, emojiClassName: l9.Zg, className: l9.WO }),
                  ],
              })
            : null != a && a !== J.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(O.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, i.jsx)(M, { text: nE.Ay.humanizeStatus(a) }),
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
                          className: l9.eW,
                          children: (0, i.jsx)(iG.A, {
                              className: r()({ [l9.e8]: null != e }),
                              children: (0, i.jsx)(ea.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? el.G.ANIMATED : el.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: l9.XP,
                          children: (0, i.jsx)(iU.A, { children: this.renderStatus() }),
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
            : (0, i.jsx)(ld, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: a,
                  children: (0, i.jsx)(ai, {
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
            : (0, i.jsx)(C.sk, {
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          ref: this.containerRef,
                          className: r()(l9.kL, { [l9.UG]: null != n, [l9.bc]: !l, [l9.G5]: a }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(Q.A, { nameplate: t, hovered: s, placement: q.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(aa, {
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
function aa(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: a,
            serverMute: r,
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
            deviceChangedTooltipType: b,
            dismissTooltips: y,
            speaking: T,
        } = e,
        S = (0, Y.K)(v);
    function N() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(l5, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: C,
            dismissibleContents: [...E.settings, ...e],
            iconForeground: null != v ? l9.t4 : void 0,
            nameplate: v,
        });
    }
    return (0, i.jsxs)("div", {
        className: l9.Uo,
        style: S,
        children: [
            (0, i.jsx)(lk, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: o,
                awaitingRemote: a,
                onMouseEnter: d,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != v ? l9.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === b,
                dismissTooltips: y,
                speaking: T,
            }),
            (0, i.jsx)(l_, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: f,
                onContextMenu: g,
                awaitingRemote: a,
                iconForeground: null != v ? l9.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === b,
                dismissTooltips: y,
            }),
            null != I.hE
                ? (0, i.jsx)(l.Suspense, { fallback: N(), children: (0, i.jsx)(I.hE, { occluded: x, children: N }) })
                : N(),
        ],
    });
}
function ar(e) {
    let t = (0, c.bG)([iM.A], () => null != iM.A.getChannelId()),
        n = (0, ef.Py)(e),
        i = l.useRef(new m.Ep()),
        [a, r] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (r(!0),
            i.current.start(an, () => {
                r(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        (r(!1), i.current.stop());
    }, []);
    return (
        (0, b.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: a, dismissTooltip: s }
    );
}
function as() {
    let e,
        t,
        n,
        a,
        r = (0, c.bG)([eR.default], () => eR.default.getCurrentUser()),
        s = (0, c.bG)([n5.default], () => n5.default.getId()),
        {
            activities: m,
            streaming: f,
            status: p,
        } = (0, c.cf)([ii.A], () => {
            let e = ii.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: ii.A.getStatus(),
            };
        }),
        h = (0, c.bG)([iS.A], () => iS.A.getAnyStreamForUser(s)),
        g = (0, _.A)({ userId: s }),
        A = (0, c.bG)([iE.A], () => iE.A.isUserPlayingSounds(s)),
        C = (0, c.bG)([iP.A], () => iP.A.getVoiceVolume(s)),
        x = nE.Ay.useUserTag(r, { decoration: "never" }),
        v = (0, c.bG)([iM.A, iI.A], () => {
            let e = iM.A.getChannelId();
            return null != e ? iI.A.getChannel(e) : null;
        }),
        { mute: b, selfMute: y, suppress: T } = (0, iT.A)(v),
        { selfDeaf: S, deaf: I } = (0, iy.A)(v),
        N = (0, c.bG)([w.A], () => ((0, U.kK)() ? w.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        j = (0, c.bG)([iR.Ay], () => iR.Ay.getSpeakingWhileMuted()),
        R = (0, c.bG)([G.A], () => G.A.isFullscreenInContext()),
        M = (0, c.bG)([ij.A], () => ij.A.hasLayers()),
        O = (0, E.re)(E.DX) || M || iD.P.isDisallowPopupsSet() || R,
        F = (0, c.bG)([er.default], () => null != er.default.getAwaitingRemoteSessionInfo()),
        B = (0, c.bG)([iO.A], () => iO.A.getGuildId()),
        V = r?.avatarDecoration,
        H = (0, W.A)(V),
        K = nE.Ay.useName(r) ?? "",
        { analyticsLocations: Y } = (0, k.Ay)(P.A.ACCOUNT),
        q = (0, z.r)({ user: r, guildId: void 0 }),
        { isQuestBarEmpty: Q } = (0, iC.c9)(),
        $ = (0, c.bG)([ix.A, eR.default, iN.A], () => {
            let e,
                t = ix.A.getSyncingWith(),
                n = ix.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iN.A.getParty(e) ?? []))
                        .map((e) => eR.default.getUser(e))
                        .filter(nG.Vq)
                        .value()),
                i.length > 1
            );
        }),
        en = { avatar: [], settings: [] },
        ei = (0, nT.Hy)({ location: "Account" }) && !O,
        el = em.A.useIsEligible(),
        ea = ed.A.coachmarkDismissibleContent,
        ef = (0, L.d)({ location: "AccountCoachmark" }),
        ep =
            ((e = (0, c.bG)([eo.A], () => eo.A.hasLoaded(ec.oD.PRELOADED_USER_SETTINGS))),
            (t = (0, es.HX)(d.M.GIFT_CARDS_MARKETING_COACHMARK)),
            (n = e && !t),
            (a = (0, eu.y)({ location: "AccountCoachmark", countGiftCardWallet: !0, canFetchPaymentSources: n })),
            n && a),
        eh = (function (e) {
            let { enabled: t } = et.useConfig({ location: e }),
                n = (0, c.bG)(
                    [X.A],
                    () =>
                        !X.A.isFetching() &&
                        !X.A.getAccounts().some((e) => {
                            let { type: t } = e;
                            return ee.has(t);
                        }),
                ),
                i = (0, c.bG)([Z.A], () => Z.A.hasConsented(J.YAq.PERSONALIZATION));
            return t && n && i;
        })("AccountCoachmark"),
        eg = (0, D.b)({ currentUserId: r?.id, enabled: ef });
    O ||
        (en.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != eg && en.avatar.push(d.M.BADGE_DIRECTORY_NUX_POPOVER),
        el && null != ea && en.settings.push(ea),
        ep && en.settings.push(d.M.GIFT_CARDS_MARKETING_COACHMARK),
        eh && en.settings.push(d.M.CONSOLE_CONNECTION_COACHMARK),
        en.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: eA, dismissTooltip: eC } = ar(lE.oh.AUDIO_INPUT),
        { shouldShowTooltip: eE, dismissTooltip: ex } = ar(lE.oh.AUDIO_OUTPUT),
        ev = l.useMemo(() => (eA ? "input" : eE ? "output" : void 0), [eA, eE]),
        e_ = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        eC();
                        break;
                    case "output":
                        ex();
                }
            },
            [eC, ex],
        );
    return (0, i.jsx)(k.f5, {
        value: Y,
        children: (0, i.jsx)(al, {
            currentUser: r,
            username: K,
            activities: m,
            applicationStream: h,
            voiceChannel: v,
            dismissibleContents: en,
            badgeDirectoryNuxPopoverVariant: eg,
            isOrbchievementsEnabled: ei,
            userTag: x,
            occluded: O,
            selfDeaf: S,
            selfMute: y,
            serverDeaf: I,
            serverMute: b,
            speaking: g,
            playingSoundboard: A,
            voiceDb: C,
            speakingWhileMuted: j,
            status: p,
            streaming: f,
            suppress: T,
            webBuildOverride: N,
            awaitingRemote: F,
            nameplate: q,
            selectedGuildId: B,
            avatarDecoration: H,
            isQuestBarEmpty: Q,
            isListenAlongVisible: $,
            deviceChangedTooltipType: ev,
            onDismissDeviceChangedTooltip: () => e_(ev),
        }),
    });
}
