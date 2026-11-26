(n.d(t, { g: () => rl, A: () => rs }), n(321073));
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
    E = n(312138);
if (221552 == n.j) var C = n(192308);
var v = n(442433),
    x = n(820284),
    _ = n(717558),
    b = n(964486),
    y = n(220839),
    T = n(397244),
    S = n(755388),
    I = n(160808),
    N = n(156150),
    j = n(866323),
    R = n(120842);
function O(e) {
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
var M = n(29160),
    P = n(793574),
    k = n(688810),
    L = n(643056),
    D = n(139523),
    w = n(521502),
    U = n(380610),
    G = n(628983),
    F = n(105530),
    B = n(18235),
    V = n(183184),
    H = n(384059),
    W = n(480890),
    z = n(826673),
    K = n(142617),
    Y = n(361158),
    q = n(359527),
    Q = n(820828),
    $ = n(601255),
    X = n(562819),
    Z = n(449582),
    J = n(351952),
    ee = n(88686),
    et = n(214881),
    en = n(945810),
    ei = n(417869),
    el = n(153488),
    er = n(652215);
let ea = new Set([er.fg2.PLAYSTATION, er.fg2.PLAYSTATION_STAGING, er.fg2.XBOX]),
    es = (0, en.mj)({
        name: "2026-11-console-connection-coachmark",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    });
var eo = n(302223),
    eu = n(609425),
    ec = n(922301),
    ed = n(16371),
    em = n(643501),
    ef = n(520535),
    ep = n(552122),
    eh = n(74848),
    eg = n(607399),
    eA = n(646514),
    eE = n(305866),
    eC = n(707554),
    ev = n(95362),
    ex = n(22231),
    e_ = n(805251),
    eb = n(935154),
    ey = n(780338);
if (221552 != n.j) var C = n(192308);
var eT = n(224640),
    eS = n(165862),
    eI = n(877784),
    eN = n(812993),
    ej = n(26137),
    eR = n(473935),
    eO = n(765671),
    eM = n(861304),
    eP = n(287809),
    ek = n(682618),
    eL = n(257339),
    eD = n(982240),
    ew = n(620143),
    eU = n(737667),
    eG = n(470739),
    eF = n(289873),
    eB = n(366056),
    eV = n(477782),
    eH = n(320448),
    eW = n(834730),
    ez = n(993401),
    eK = n(792996),
    eY = n(211450);
function eq(e) {
    return (0, i.jsx)("div", {
        className: eY.wE,
        children: (0, i.jsx)(eS.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eQ(e) {
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
            shouldKeepSubmenuOpen: f,
        } = e,
        p = null != n,
        A = (0, ez.rE)({ action: t, onClick: n }),
        [E, v] = l.useState(!1),
        x = l.useRef(null),
        _ = c ?? x,
        b = null != u,
        y = b && p,
        T = l.useCallback(() => {
            v(!0);
        }, []),
        S = l.useCallback(() => {
            (0, C.ue)() || f?.() || v(!1);
        }, [f]);
    function I() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: eY.iA, children: (0, i.jsx)(r, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eY.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eW.E, {
                                    color: "currentColor",
                                    variant: "body-sm/medium",
                                    className: eY.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(eW.E, { color: "currentColor", variant: "body-xs/medium", children: s }),
                            ],
                        }),
                        o,
                    ],
                }),
            ],
        });
    }
    function N(e) {
        let t;
        return (
            (t = y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.D, { className: eY.ef, onClick: A, children: I() }),
                          (0, i.jsx)(g.D, {
                              className: eY.ap,
                              "aria-label": eK.intl.string(eK.t.PdRCRg),
                              ...e,
                              onClick: T,
                              children: (0, i.jsx)(eH.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : b
                  ? (0, i.jsxs)(g.D, {
                        className: eY.ef,
                        ...e,
                        onClick: T,
                        children: [
                            I(),
                            (0, i.jsx)("div", {
                                className: eY.ap,
                                children: (0, i.jsx)(eH.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(g.D, { className: eY.ef, onClick: A, children: I() })),
            (0, i.jsx)("div", { ref: _, className: eY.jG, children: t })
        );
    }
    return b
        ? (0, i.jsx)("li", {
              className: eY.j$,
              onMouseEnter: T,
              onMouseLeave: S,
              children: (0, i.jsx)(h.Y, {
                  targetElementRef: d ?? _,
                  align: m,
                  spacing: 0,
                  renderPopout: u,
                  shouldShow: E,
                  onRequestClose: S,
                  children: N,
              }),
          })
        : (0, i.jsx)("li", { className: eY.j$, children: N() });
}
function e$(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var eX = n(719718),
    eZ = n(261336),
    eJ = n(796104),
    e0 = n(402102);
let e1 = {
        FAKE_DATA: { stats: { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } }, character: null },
        GLOBAL_STATS: { stats: null, character: null },
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
        UNAVAILABLE: { availability: e0.u.UNAVAILABLE },
        NO_CHARACTER: { availability: e0.u.NO_CHARACTER },
        COMPACT_ASSETS: { compactAssets: !0 },
    },
    e2 = (0, n(196765).v)(() => ({ isNoCharacter: !1, isCompactAssets: !1 }));
var e5 = n(858899);
function e3(e, t) {
    (0, e5.P0)({ text: e, variant: "success" === t ? "success" : "critical" });
}
var e6 = n(96494);
function e8(e, t, n) {
    return {
        id: e,
        label: t,
        action: () => {
            let e = (function () {
                let { isNoCharacter: e, isCompactAssets: t } = e2.getState();
                return { ...(e ? e1.NO_CHARACTER : {}), ...(t ? e1.COMPACT_ASSETS : {}) };
            })();
            return (0, eZ.D)("qa_menu", { ...e, ...n });
        },
    };
}
let e7 = [
    e8("open", e6.default.yLZjcu),
    {
        id: "reset-all",
        label: e6.default.WM19oT,
        action: async () => {
            (await (0, eJ.sm)())
                ? e3(eK.intl.string(eK.t.i4jeWR), "success")
                : e3(eK.intl.string(eK.t.fEptJP), "failure");
        },
    },
    {
        id: "reset-progress",
        label: e6.default.HYMZmZ,
        action: () => {
            ((0, eJ.BS)(), e3(eK.intl.string(eK.t.i4jeWR), "success"));
        },
    },
    {
        id: "reset-character",
        label: e6.default.Q9JHSs,
        action: async () => {
            (await (0, eJ.Z0)())
                ? e3(eK.intl.string(eK.t.i4jeWR), "success")
                : e3(eK.intl.string(eK.t.fEptJP), "failure");
        },
    },
    e8("open-fake-data", e6.default.kPBZ5M, e1.FAKE_DATA),
    e8("open-global-stats", e6.default.UwiUbM, e1.GLOBAL_STATS),
    e8("open-zero-stats", e6.default.BYW9oX, e1.ZERO_STATS),
];
e8("open-unavailable", e6.default["58TARv"], e1.UNAVAILABLE);
let e9 = ["reset-all", "reset-progress", "reset-character"];
var e4 = n(852717),
    te = n(641214);
function tt() {
    return (0, i.jsx)(eF.y, { type: eF.t.SPINNING_CIRCLE_SIMPLE, className: te.u1, itemClassName: te.$N });
}
function tn(e) {
    let { onClose: t } = e,
        n = (0, K.hF)("CheckpointUserStatusMenuItem"),
        l = (function (e) {
            switch (e) {
                case "off":
                    return [];
                case "reset_only":
                    return e7.filter((e) => e9.includes(e.id));
                case "all":
                    return e7;
            }
        })(n),
        r = (0, c.bG)([eX.A], () => eX.A.isFetching);
    return (0, i.jsx)(eQ, {
        icon: r ? tt : eB.ExperimentalCheckpointIcon,
        label: eK.intl.string(e4.default["8hclXY"]),
        sublabel: (0, i.jsx)("span", { className: te.$B, children: eK.intl.string(e4.default.BFc4lY) }),
        onClick: async function () {
            (await (0, eZ.D)("user_profile_account_popout"), t());
        },
        renderSubmenu:
            "off" !== n
                ? (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(eq, {
                          navId: "checkpoint-qa-submenu",
                          "aria-label": eK.intl.string(e6.default["9dS734"]),
                          className: te.gn,
                          onClose: n,
                          children: l.map((e) =>
                              (0, i.jsx)(
                                  eV.Dr,
                                  {
                                      id: e.id,
                                      label: eK.intl.string(e.label),
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
var ti = n(176781),
    tl = n(780964),
    tr = n(766075),
    ta = n(734066),
    ts = n(419490),
    to = n(409067),
    tu = n(271597),
    tc = n(315710),
    td = n(534514),
    tm = n(475358),
    tf = n(866665),
    tp = n(408278),
    th = n(625903),
    tg = n(404778),
    tA = n(516521),
    tE = n(821609),
    tC = n(532624),
    tv = n(927813),
    tx = n(879631),
    t_ = n(350535),
    tb = n(341923),
    ty = n(572164),
    tT = n(953932),
    tS = n(280483),
    tI = n(890856),
    tN = n(713517),
    tj = n(609174),
    tR = n(151184);
function tO(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        r = (0, tj.Y_)(),
        a = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, tu.p)({ initialEditingClipId: r.id }));
            },
            [r, t],
        );
    return (0, i.jsx)(tE.$, {
        onClick: a,
        icon: ex.PencilIcon,
        variant: n,
        size: "sm",
        text: eK.intl.string(eK.t.bt75uw),
        fullWidth: !0,
    });
}
var tM = n(82716),
    tP = n(449397),
    tk = n(399053),
    tL = n(285072),
    tD = n(575172);
let tw = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: r, className: s } = e,
        o = l.useRef(null),
        u = (0, Q.Oc)(t),
        { isHoveringOrFocusing: c } = (0, tN.A)(o),
        d = l.useCallback(() => {
            (r?.(), (0, tu.p)({ initialEditingClipId: t.id }));
        }, [t.id, r]);
    return (0, i.jsx)(tj.Cl, {
        clip: t,
        children: (0, i.jsx)(tI.s, {
            ref: o,
            "aria-label": eK.intl.string(eK.t.bt75uw),
            onClick: d,
            className: a()(tD.Z1, s),
            children: (0, i.jsx)("div", {
                ref: u,
                className: tD.xn,
                tabIndex: -1,
                children: (0, i.jsxs)(tk.d, {
                    isStatic: !0,
                    children: [
                        n &&
                            (0, i.jsx)("div", {
                                className: tD.Ad,
                                children: (0, i.jsx)(e_.E, { type: "new", variant: "primary" }),
                            }),
                        (0, i.jsxs)(tL.h, {
                            isVisible: c,
                            className: tD.Lw,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: tD.mY,
                                    children: [(0, i.jsx)(tM.z, {}), (0, i.jsx)(tR.k, {})],
                                }),
                                (0, i.jsxs)("div", {
                                    className: tD.E_,
                                    children: [
                                        (0, i.jsx)(tO, { onBeforeEdit: r, variant: "overlay-secondary" }),
                                        (0, i.jsx)(tP.e, {}),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
});
var tU = n(696016),
    tG = n(753070),
    tF = n(683825),
    tB = n(48127);
function tV(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: r, setPopoutRef: s } = e;
    (0, tS.A)();
    let o = (0, Q.Zs)(r),
        u = l.useRef(null);
    (0, tc.tj)(u, { disable: o });
    let d = (0, c.yK)([ts.Ay], () => Object.values(ts.Ay.getClips())),
        m = (0, c.bG)([ts.Ay], () => ts.Ay.getSettings()),
        f = (0, c.bG)([ts.Ay], () => ts.Ay.getNewClipIds()),
        p = (0, tb.H)(),
        h = (0, c.bG)([ts.Ay], () => ts.Ay.getEnableAutoclipping()),
        g = (0, c.bG)([tC.Ay], () => tC.Ay.getKeybindForAction(er.hCu.SAVE_CLIP)),
        A = l.useCallback(
            (e) => {
                ((u.current = e), s?.(e));
            },
            [s],
        ),
        E = !m.showPovClipsInGallery,
        C = l.useMemo(() => {
            let e = d.filter((e) => e.type === tU.nQ.CLIP && "" !== e.thumbnail && (!E || !(0, to.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [d, E]),
        v = l.useMemo(() => C.slice(0, 16), [C]),
        x = C.length > 16,
        _ = null != g ? t_.dI(g.shortcut, !0) : null,
        b = [
            (0, tx.$)(m.clipsLength / tv.A.Millis.SECOND),
            (0, tG.zr)(m.clipsQuality.resolution),
            eK.intl.formatToPlainString(eK.t.Qb44XH, { fps: m.clipsQuality.frameRate }),
        ];
    return (
        p && b.push(eK.intl.string(tF.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: A,
            className: a()(tB.SW, { [tB.cB]: o }),
            "aria-hidden": o || void 0,
            inert: o,
            role: "dialog",
            "aria-label": eK.intl.string(eK.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tB.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tB.$,
                            children: [
                                (0, i.jsx)(td.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: eK.intl.string(eK.t.z2jK6X),
                                }),
                                null != _ && (0, i.jsx)(tm.e, { className: tB.P, shortcut: _ }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tB.$s,
                            children: [
                                (0, i.jsx)(tf.m, {
                                    text: eK.intl.string(eK.t["3D5yo/"]),
                                    children: (0, i.jsx)(tp.K, {
                                        onClick: () => n(),
                                        icon: th.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eK.intl.string(eK.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(tf.m, {
                                    text: eK.intl.string(tF.default["55C2MH"]),
                                    children: (0, i.jsx)(tp.K, {
                                        onClick: () => t(),
                                        icon: ti.ClipsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eK.intl.string(tF.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tB.ov,
                    children: [
                        b.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tB.LO, children: "\u2022" }),
                                        (0, i.jsx)(eW.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tB.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        p &&
                            (0, i.jsx)(eW.E, {
                                variant: "body-xs/semibold",
                                color: h ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tB.wS,
                                children: h ? eK.intl.string(tF.default.lTwKmt) : eK.intl.string(tF.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(tg.c, {}),
                v.length > 0
                    ? (0, i.jsxs)(tA.Ch, {
                          className: tB.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              v.map((e) => (0, i.jsx)(tw, { clip: e, isNew: f.includes(e.id), onClose: r }, e.id)),
                              x &&
                                  (0, i.jsx)("div", {
                                      className: tB.qr,
                                      children: (0, i.jsx)(tE.$, {
                                          onClick: () => t(),
                                          text: eK.intl.string(tF.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tH, { keybindString: _ }),
            ],
        })
    );
}
function tH(e) {
    let { keybindString: t } = e,
        n = (0, ty.E)();
    return (0, i.jsxs)("div", {
        className: tB.p$,
        children: [
            (0, i.jsx)(eW.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: tB.qO,
                children: eK.intl.string(tF.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eW.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: tB.CZ,
                      children: eK.intl.format(tF.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eW.E,
                                  {
                                      variant: "body-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(tm.e, { shortcut: t }, "keybind"),
                      }),
                  })
                : (0, i.jsx)(tT.A, {}),
        ],
    });
}
function tW(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        r = (0, ta.sw)(),
        a = !(0, c.bG)([ts.Ay], () => ts.Ay.getSettings().showPovClipsInGallery),
        s = (0, c.bG)(
            [ts.Ay],
            () => {
                let e = ts.Ay.getNewClipIds();
                return a
                    ? e.filter((e) => {
                          let t = ts.Ay.getClipById(e);
                          return null != t && !(0, to.kD)(t);
                      }).length
                    : e.length;
            },
            [a],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, tu.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = l.useCallback(() => {
            (t(), (0, tr.openUserSettings)(tl.X.CLIPS_PANEL));
        }, [t]);
    return r
        ? (0, i.jsx)(eQ, {
              action: "PRESS_CLIPS",
              icon: ti.ClipsIcon,
              label: eK.intl.string(eK.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(eN.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              shouldKeepSubmenuOpen: Q.zp,
              renderSubmenu: (e) => (0, i.jsx)(tV, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tz = n(971217),
    tK = n(577390),
    tY = n(287727),
    tq = n(31956),
    tQ = n(744808),
    t$ = n(645507),
    tX = n(263775),
    tZ = n(970931),
    tJ = n(789645),
    t0 = n(775602),
    t1 = n(832248),
    t2 = n(462887),
    t5 = n(736653),
    t3 = n(439174),
    t6 = n(270060),
    t8 = n(105909),
    t7 = n(682901);
function t9() {
    let e = (0, t8.Xb)(),
        t = (0, t6.h)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = t7.sp.length - 1; t >= 0; t--) {
        let i = t7.VD[t7.sp[t]],
            l = new Date(e);
        if ((l.setMonth(l.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let t4 = {
        [t7.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [t7.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [t7.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [t7.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [t7.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [t7.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [t7.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [t7.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    ne = {
        [t7.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [t7.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [t7.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [t7.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [t7.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [t7.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [t7.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [t7.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var nt = n(570484);
let nn = l.lazy(() => Promise.all([n.e(969274), n.e(924832)]).then(n.bind(n, 748579)));
function ni() {
    let e = (0, c.bG)([t0.Ay], () => t0.Ay.useReducedMotion),
        t = (0, t1.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = t9(),
                t = (0, t2.M)((0, t5.Ay)());
            if (null == e) return null;
            let n = t4[e],
                i = ne[e],
                l = {
                    currentBadge: (0, t3.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                r = t7.sp.indexOf(e);
            if (r > 0) {
                let e = t7.sp[r - 1],
                    n = t4[e];
                ((l.prevBadge = (0, t3.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [r, a] = l.useState(null);
    return (null != n && null == r && a(n), e || !t || null == r) ? null : (0, i.jsx)(nl, { levelUpData: r });
}
function nl(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        r = l.useCallback(() => {
            t1.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tc.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: nt.i,
            children: [
                (0, i.jsx)("div", {
                    className: nt.b,
                    children: (0, i.jsx)(tf.m, {
                        text: eK.intl.string(eK.t.cpT0Cq),
                        children: (0, i.jsx)(tp.K, {
                            icon: tJ.XSmallIcon,
                            variant: "secondary",
                            size: "sm",
                            onClick: r,
                            "aria-label": eK.intl.string(eK.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(nn, { levelUpData: t }) }),
            ],
        }),
    });
}
var nr = n(397562),
    na = n(206835),
    ns = n(183555),
    no = n(527212),
    nu = n(100663),
    nc = n(718019),
    nd = n(56810),
    nm = n(915614),
    nf = n(689233),
    np = n(559506),
    nh = n(646986),
    ng = n(494213),
    nA = n(946356),
    nE = n(465829),
    nC = n(624479),
    nv = n(206845),
    nx = n(957565),
    n_ = n(427262),
    nb = n(62119);
function ny(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, ns.NJ)();
    return nx.p5
        ? (0, i.jsx)(nv.A, {
              text: eK.intl.string(eK.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: n_.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(nb.c, { [nb.R]: n }),
                      "aria-label": eK.intl.string(eK.t.y5MwJy),
                      children: (0, i.jsx)(nC.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var nT = n(804329),
    nS = n(442228),
    nI = n(253932),
    nN = n(362862),
    nj = n(621466),
    nR = n(318254),
    nO = n(863610),
    nM = n(421773),
    nP = n(318346),
    nk = n(923138),
    nL = n(309954),
    nD = n(673125),
    nw = n(489422),
    nU = n(769001);
function nG(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: r, onCloseAccountPopout: s } = e;
    (0, nk.I)({ enabled: !0 });
    let { balance: o } = (0, nL.W)(),
        u = (0, c.bG)([nD.Ay], () =>
            nD.Ay.userOpenedWalletViaProfileDCF ? nD.Y0.NEW_ACHIEVEMENT : nD.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            nD.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: d, onMouseEnter: m, onMouseLeave: f, setIsHovered: p, cancelTimers: A } = (0, nM.A)(0, 500),
        E = l.useCallback(() => {
            (0, C.ue)() || f();
        }, [f]),
        v = l.useRef(null),
        x = l.useRef(null),
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
                if ((0, C.ue)()) return;
                let t = (0, nj.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${eY.j$}`);
                null != n && n !== v.current && (A(), p(!1));
            }
        }, [d, A, p]));
    let y = l.useRef(!1);
    l.useEffect(() => {
        d || (y.current = !1);
    }, [d]);
    let T = l.useCallback(() => {
            (y.current ||
                ((y.current = !0),
                (0, nP.Y)({
                    pageType: P.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: P.A.ORB_WALLET,
                    ctaObject: P.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        S = (0, ez.rE)({ action: "PRESS_ORBS", onClick: T });
    l.useEffect(() => {
        let e = n?.current,
            t = v.current;
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
                    ? eK.intl.format(eK.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(nO.n, { dotRadius: 3.5, themed: !0, className: nU.K }),
            [o],
        ),
        N = l.useMemo(
            () =>
                u === nD.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(e_.E, { type: "new", variant: "primary" })
                    : u === nD.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(e_.E, { type: { text: eK.intl.string(eK.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        j = l.useCallback(() => {
            (A(), p(!1), s());
        }, [A, p, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nj.vq)(t, Node) && null != v.current && v.current.contains(t) && A();
            },
            [A],
        );
    return (0, i.jsx)("li", {
        ref: v,
        className: eY.j$,
        onMouseEnter: T,
        onMouseLeave: E,
        children: (0, i.jsx)(h.Y, {
            targetElementRef: t,
            align: "bottom",
            spacing: -16,
            renderPopout: () =>
                (0, i.jsx)("div", {
                    ref: b,
                    onMouseEnter: m,
                    onMouseLeave: R,
                    children: (0, i.jsx)(nw.vG, { onCloseWallet: j, returnRef: x, isProfilePopout: !0 }),
                }),
            shouldShow: d,
            onRequestClose: E,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: eY.jG,
                    children: (0, i.jsxs)(g.D, {
                        innerRef: x,
                        className: eY.ef,
                        ...e,
                        onClick: S,
                        children: [
                            (0, i.jsx)("div", {
                                className: eY.iA,
                                children: (0, i.jsx)(nR.OrbsIcon, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: eY.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eW.E, {
                                        color: "currentColor",
                                        variant: "body-sm/medium",
                                        className: eY.W1,
                                        children: I,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(eY.ap, nU._),
                                children: [
                                    N,
                                    (0, i.jsx)(eH.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nF = n(290863),
    nB = n(351906),
    nV = n(562153),
    nH = n(448645),
    nW = n(628284),
    nz = n(695366),
    nK = n(413599),
    nY = n(619019),
    nq = n(129230),
    nQ = n(429707),
    n$ = n(274303),
    nX = n(994125),
    nZ = n(347853),
    nJ = n(573879),
    n0 = n(559117),
    n1 = n(43105),
    n2 = n(661439),
    n5 = n(385113),
    n3 = n(352003),
    n6 = n(429913),
    n8 = n(334074),
    n7 = n(633075),
    n9 = n(667049),
    n4 = n(46653),
    ie = n(90165),
    it = n(403362),
    ii = n(49999),
    il = n(518477);
function ir(e) {
    let { targetElementRef: t, onClose: r } = e,
        [a, s] = l.useState(!1),
        o = (0, c.bG)([n4.default], () => n4.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, c.yK)([n5.A], () => n5.A.getFeaturedApplicationIds());
            ((0, n3.A)(e),
                l.useEffect(() => {
                    (0, n2.X)();
                }, []));
            let t = (0, c.bG)([n4.default], () => n4.default.getId()),
                n = (0, n9.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof n7.R), [n]),
                r = (0, n6.A)(e),
                a = l.useMemo(() => r.filter(it.Vq), [r]),
                s = (0, c.cf)([ie.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = ie.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: u, markAsDismissed: m } = (0, n8.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: n8.SH,
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
                n.e(256257),
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
                n.e(790484),
                n.e(211004),
                n.e(269714),
                n.e(62849),
                n.e(489020),
                n.e(670058),
                n.e(527798),
                n.e(892877),
                n.e(483754),
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
                n.e(795854),
                n.e(870088),
                n.e(300641),
                n.e(571163),
                n.e(586662),
                n.e(831377),
                n.e(709976),
                n.e(750955),
                n.e(953343),
                n.e(279774),
                n.e(763945),
                n.e(261204),
                n.e(686731),
                n.e(807432),
                n.e(873532),
                n.e(590088),
                n.e(807003),
                n.e(46083),
                n.e(889957),
                n.e(747802),
                n.e(716541),
                n.e(906470),
                n.e(736663),
                n.e(361243),
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
                n.e(143882),
                n.e(546547),
                n.e(102075),
                n.e(412408),
                n.e(193457),
                n.e(892937),
                n.e(420446),
                n.e(490449),
                n.e(614476),
                n.e(362420),
                n.e(589154),
                n.e(888499),
                n.e(839182),
                n.e(934487),
                n.e(493118),
                n.e(490161),
                n.e(595990),
                n.e(218781),
                n.e(324469),
                n.e(70379),
                n.e(417333),
                n.e(127962),
                n.e(834552),
                n.e(993103),
                n.e(708757),
                n.e(863232),
                n.e(517888),
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
                n.e(686367),
                n.e(971508),
                n.e(755936),
                n.e(147662),
                n.e(316344),
                n.e(801012),
                n.e(274501),
                n.e(965152),
                n.e(544571),
                n.e(692990),
                n.e(305834),
                n.e(745959),
                n.e(858529),
                n.e(481987),
                n.e(595653),
                n.e(958038),
                n.e(719466),
                n.e(352805),
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
                n.e(142867),
                n.e(554241),
                n.e(96539),
                n.e(724303),
                n.e(229787),
                n.e(495786),
                n.e(53102),
                n.e(717479),
                n.e(780262),
                n.e(88599),
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
                n.e(918024),
                n.e(884601),
                n.e(782969),
                n.e(776766),
                n.e(504370),
                n.e(225575),
                n.e(428967),
                n.e(62613),
                n.e(129080),
                n.e(238232),
                n.e(608032),
                n.e(477970),
                n.e(823300),
                n.e(252229),
                n.e(523276),
                n.e(77473),
                n.e(736926),
                n.e(812042),
                n.e(547801),
                n.e(729963),
                n.e(440142),
                n.e(186212),
                n.e(830938),
                n.e(144472),
                n.e(538513),
                n.e(838090),
                n.e(919726),
                n.e(325047),
                n.e(359258),
                n.e(203930),
                n.e(50097),
                n.e(151640),
                n.e(903663),
                n.e(144179),
                n.e(536973),
                n.e(908081),
                n.e(914248),
                n.e(922606),
                n.e(646284),
                n.e(829260),
                n.e(965061),
                n.e(555732),
                n.e(246969),
                n.e(746479),
                n.e(401980),
                n.e(568881),
                n.e(946430),
                n.e(350949),
                n.e(582486),
                n.e(671367),
                n.e(134504),
                n.e(248985),
                n.e(704374),
                n.e(553683),
                n.e(280098),
                n.e(181162),
                n.e(186546),
                n.e(547298),
                n.e(571294),
                n.e(966048),
                n.e(443256),
                n.e(247339),
                n.e(373566),
                n.e(114633),
                n.e(909063),
                n.e(720161),
                n.e(621351),
                n.e(825650),
                n.e(247290),
                n.e(659624),
                n.e(318035),
                n.e(963172),
                n.e(272887),
                n.e(855173),
                n.e(803410),
                n.e(237946),
                n.e(677407),
                n.e(550260),
                n.e(410017),
                n.e(69658),
                n.e(634786),
                n.e(469709),
                n.e(569443),
                n.e(49282),
                n.e(235683),
                n.e(749487),
            ]).then(n.bind(n, 471133));
    }, [u.length]),
    0 === u.length)
        ? null
        : (0, i.jsx)(n1.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: eK.intl.string(eK.t.HMWL9c),
              body: eK.intl.string(eK.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      ii.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: eK.intl.string(eK.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          (s(!0),
                              (0, nu.openUserProfileModal)({ userId: o, tabSection: il.RP.WIDGETS })
                                  .then(() => {
                                      let e = u.map((e) => e.id);
                                      ((0, C.mM)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e(546547),
                                                  n.e(102075),
                                                  n.e(412408),
                                                  n.e(193457),
                                                  n.e(892937),
                                                  n.e(490161),
                                                  n.e(487697),
                                                  n.e(913823),
                                                  n.e(555732),
                                                  n.e(181162),
                                                  n.e(547298),
                                                  n.e(720161),
                                                  n.e(855173),
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
                                              ii.i.TAKE_ACTION,
                                          ),
                                          r());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var ia = n(894768),
    is = n(818348),
    io = n(709516);
function iu() {
    let e = (0, c.bG)([ia.A], () => ia.A.getStatus()),
        t = (0, n_.MU)(e) ?? "",
        n = e === is.cl.INVISIBLE || e === is.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: io.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [eK.intl.string(eK.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(tf.m, {
                    text: eK.intl.string(eK.t.L99HQm),
                    children: (0, i.jsx)(nz.CircleErrorIcon, {
                        size: "xs",
                        color: eA.A.colors.STATUS_WARNING,
                        "aria-label": eK.intl.string(eK.t.L99HQm),
                    }),
                }),
        ],
    });
}
var ic = n(146901),
    id = n(827827);
let im = [
        { duration: 15 * tv.A.Millis.MINUTE, label: () => eK.intl.string(eK.t["8ot6gv"]) },
        { duration: tv.A.Millis.HOUR, label: () => eK.intl.string(eK.t.UMWBZr) },
        { duration: 8 * tv.A.Millis.HOUR, label: () => eK.intl.string(eK.t.EpAXPC) },
        { duration: tv.A.Millis.DAY, label: () => eK.intl.string(eK.t["755t4q"]) },
        { duration: 3 * tv.A.Millis.DAY, label: () => eK.intl.string(eK.t["f3/1ch"]) },
        { duration: void 0, label: () => eK.intl.string(eK.t["46dqJY"]) },
    ],
    ip = "forever";
function ih(e) {
    let { status: t, currentStatus: n, description: l } = e,
        r = t !== er.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: im.map((e) => {
                let { duration: l, label: r } = e;
                return (0, i.jsx)(
                    eV.Dr,
                    {
                        id: `${t}-${l}`,
                        label: r(),
                        action: () => (0, id.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? ip,
                );
            }),
        });
    return (0, i.jsx)(eV.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: r,
        label: (0, n_.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(eb.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, id.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: r ? a : void 0,
    });
}
function ig(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, ic._)(e);
    return "today" === t
        ? eK.intl.formatToPlainString(eK.t.ZxxHIO, { timeString: i })
        : eK.intl.formatToPlainString(eK.t["9OFjSe"], { dateString: n, timeString: i });
}
var iA = n(996988),
    iE = n(207634),
    iC = n(47453);
function iv(e) {
    let { currentUser: t, onClose: n, setPopoutRef: r, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        h = (0, no.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, k.Ay)(P.A.USER_PROFILE_ACCOUNT_POPOUT),
        E = (0, ns.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, nr.A)(g, h, il.R7.ACCOUNT_POPOUT);
    let { ref: v } = (0, eO.Ay)(),
        { isHoveringOrFocusing: x, isHovering: _ } = (0, tN.A)(v);
    (l.useEffect(() => {
        r?.(v.current);
    }, [v, r]),
        l.useEffect(
            () => (
                t1.A.setState({ isOpen: !0 }),
                () => t1.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let b = (0, c.bG)([nF.A], () => nF.A.getStatus(t.id)),
        y = ig(nI.CY.useSetting()),
        T = (0, c.bG)([nB.A], () => nB.A.hidePersonalInformation),
        S = (0, tZ.kB)(),
        I = nI.Q_.useSetting(),
        N = (function (e) {
            let t = nI.CY.useSetting(),
                n = (0, tZ.kB)(),
                l = nI.Jr.useSetting();
            function r(i) {
                let l = ig(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case er.clD.DND:
                        return n ? eK.intl.string(eK.t.day5A6) : eK.intl.string(eK.t["tq/fMK"]);
                    case er.clD.INVISIBLE:
                        return eK.intl.string(eK.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: im.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            eV.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, tZ.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? ip,
                        );
                    }),
                }),
                s = ih({ status: er.clD.ONLINE, currentStatus: e }),
                o = ih({ status: er.clD.IDLE, currentStatus: e, description: r(er.clD.IDLE) }),
                u = ih({ status: er.clD.DND, currentStatus: e, description: r(er.clD.DND) }),
                c = ih({ status: er.clD.INVISIBLE, currentStatus: e, description: r(er.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(eV.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(eV.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      eV.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: eK.intl.string(eK.t.gJRnwK),
                                          iconLeft: ey.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: ey.BellSlashIcon },
                                          badge: { text: eK.intl.string(eK.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? eK.intl.format(eK.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            eK.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : eK.intl.string(eK.t["Br1q+x"]),
                                          action: () => {
                                              (0, tZ.ES)(!n);
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
        })(b),
        j = (function (e) {
            let t = (0, c.bG)([eP.default], () => eP.default.getCurrentUser()),
                n = (0, c.bG)([nB.A], () => nB.A.hidePersonalInformation),
                l = (0, c.bG)([nK.A], () => (0, t2.M)(nK.A.theme)),
                { multiAccountUsers: r } = (0, nX.K)(),
                a = r.map((r) => {
                    let a = new nY.A(r),
                        s = a.id === t?.id,
                        o = r.tokenStatus === n$.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        eV.Dr,
                        {
                            id: a.id,
                            focusedClassName: n0.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: n0.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": r.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: n0.DD,
                                            children: [
                                                (0, i.jsx)(eW.E, {
                                                    className: n0.gE,
                                                    variant: "body-sm/normal",
                                                    children: n_.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(eW.E, {
                                                        className: n0.df,
                                                        variant: "body-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(nW.CircleCheckIcon, {
                                                size: "sm",
                                                color: t
                                                    ? eA.A.unsafe_rawColors.WHITE.css
                                                    : eA.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? eA.A.unsafe_rawColors.BRAND_500.css
                                                        : eA.A.unsafe_rawColors.WHITE.css,
                                                className: n0.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nz.CircleErrorIcon, {
                                                color: eA.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? eA.A.unsafe_rawColors.BRAND_500.css
                                                        : eA.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: n0.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nZ.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nq.default.track(er.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: er.JJy.USER_PROFILE },
                                        }),
                                        nQ.Mx(n, void 0, nJ.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(eV.bX, {}),
                            (0, i.jsx)(eV.Dr, {
                                id: "manage-accounts",
                                label: eK.intl.string(eK.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nZ.A)());
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        R = (0, na.A)({ analyticsLocations: g }),
        O = (0, nH.TW)(t),
        M = (0, L.d)({ location: "UserProfileAccountPopout" }),
        D = (function (e) {
            let { location: t, enabled: n } = e,
                i = (0, c.bG)([eP.default], () => eP.default.getCurrentUser()?.id);
            l.useEffect(() => {
                n && null != i && !eD.Ay.hasCatalogFor(i) && (0, ek.RS)(i);
            }, [i, n]);
            let r = (0, c.bG)(
                    [eD.Ay],
                    () => (n && null != i && eD.Ay.hasCatalogFor(i) ? eD.Ay.getUnreadBadges(i).length : 0),
                    [i, n],
                ),
                a = (0, c.bG)(
                    [eD.Ay, eL.A],
                    () => {
                        if (0 === r) return 0;
                        let e = eL.A.getSeenBadgeIndicators();
                        return eD.Ay.getBadges(i).filter(
                            (t) =>
                                !0 !== t.has_updates &&
                                (t.owned || t.is_earnable) &&
                                (0, eU.Ce)(t.badge_id) &&
                                !e.has(t.badge_id),
                        ).length;
                    },
                    [i, r],
                );
            return (0, ew.e)({ location: t, hasUnread: r > 0 }) ? r + a : 0;
        })({ location: "UserProfileAccountPopout", enabled: M }),
        w = l.useRef(null),
        U = l.useRef(null),
        G = l.useRef(null),
        F = (0, tY.A)(h?.profileFrame?.skuId),
        B = (0, tK.A)(h?.profileFrame?.skuId);
    (0, tq.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: E, analyticsLocations: g });
    let V = l.useRef((0, t1.A)((e) => e.shouldRenderTenureLevelUp)),
        H = l.useMemo(() => (0, t$.A)(), []),
        [W, z] = l.useState(() => t1.A.getState().shouldRenderTenureLevelUp);
    function Y(e) {
        (n?.(), (0, nu.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...E, ...e }));
    }
    l.useEffect(() => {
        let e = setTimeout(() => {
            z(!1);
        }, 500);
        return () => clearTimeout(e);
    }, []);
    let q = h?.widgets != null && h.widgets.length > 0,
        Q = l.useCallback(() => {
            n();
        }, [n]),
        $ = l.useCallback(() => {
            (R(), Q());
        }, [R, Q]),
        X = (0, nN.Hy)({ location: "UserProfileAccountPopout" }),
        Z = (0, K.FX)("UserProfileAccountPopout"),
        J = (0, t1.A)((e) => e.shouldScrollToOrbsMenuItem),
        [ee, et] = (0, tX.kn)([d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE], {
            groupName: void 0,
            bypassAutoDismiss: !0,
        }),
        en = l.useId();
    return (0, i.jsx)(k.f5, {
        value: g,
        children: (0, i.jsx)(ns.of, {
            value: E,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(eE.l, {
                ref: v,
                "aria-labelledby": en,
                className: a()(eY.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eC.H, { id: en, children: eK.intl.string(eK.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eC.F, {
                        children: [
                            (0, i.jsxs)(nA.A, {
                                className: eY.BK,
                                user: t,
                                displayProfile: h,
                                themeType: iA.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: iC.wx,
                                        children: [
                                            (0, i.jsx)(nm.A, { user: t, displayProfile: h, themeType: iA.d.POPOUT }),
                                            (0, i.jsx)(nc.A, {
                                                user: t,
                                                displayProfile: h,
                                                avatarSize: iE.T[iA.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : Y,
                                            }),
                                            (0, i.jsx)(nT.A, {
                                                ref: w,
                                                user: t,
                                                themeType: iA.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(ev.Ip, {
                                        ref: G,
                                        className: eY.rf,
                                        style: { pointerEvents: W ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(np.A, { userId: t.id }),
                                            (0, i.jsx)(nE.Ay, {
                                                className: eY.eF,
                                                user: t,
                                                displayName: nV.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : Y,
                                                displayNameTrailing: (0, i.jsx)(ny, { user: t, isVisible: x }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(nd.A, {
                                                    displayProfile: h,
                                                    themeType: iA.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, i.jsx)(nf.A, { isPremiumUser: O, onInteraction: n }),
                                            (0, i.jsx)(nS.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: T,
                                                onClose: n,
                                            }),
                                            q &&
                                                (0, i.jsx)(ng.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: Y,
                                                }),
                                            (0, i.jsx)(nh.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: Y,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eY.T_,
                                                children: [
                                                    Z &&
                                                        (0, i.jsx)(nA.A.Overlay, {
                                                            className: eY.g0,
                                                            children: (0, i.jsx)(e$, {
                                                                children: (0, i.jsx)(tn, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, i.jsx)(nA.A.Overlay, {
                                                        className: eY.g0,
                                                        children: (0, i.jsxs)(e$, {
                                                            children: [
                                                                (0, i.jsx)(eQ, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: eK.intl.string(eK.t.s5vZlQ),
                                                                    icon: ex.PencilIcon,
                                                                    trailing:
                                                                        null != ee
                                                                            ? (0, i.jsx)("div", {
                                                                                  className: eY.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, i.jsx)(e_.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (null != ee && et(ii.i.TAKE_ACTION), $());
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, i.jsx)(eQ, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(iu, {}),
                                                                    sublabel: null != y && y,
                                                                    icon: () =>
                                                                        (0, i.jsx)(eb.nW, { status: b, size: 12 }),
                                                                    trailing:
                                                                        (S || b === er.clD.DND) &&
                                                                        (0, i.jsx)(ey.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: eg.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eq, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eY.hQ,
                                                                                  "aria-label": eK.intl.string(
                                                                                      eK.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: N,
                                                                              });
                                                                          },
                                                                    onClick: eg.Fr
                                                                        ? () => {
                                                                              (n(),
                                                                                  (0, C.mM)(
                                                                                      () =>
                                                                                          new Promise((e) =>
                                                                                              e((e) => {
                                                                                                  let {
                                                                                                      onClose: t,
                                                                                                      ...n
                                                                                                  } = e;
                                                                                                  return (0, i.jsx)(
                                                                                                      eT.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              eK.intl.string(
                                                                                                                  eK.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eS.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  eK.intl.string(
                                                                                                                      eK
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
                                                                M &&
                                                                    (0, i.jsx)(eQ, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: eI.RibbonIcon,
                                                                        label: eK.intl.string(eK.t.l6w3Vj),
                                                                        trailing:
                                                                            D > 0
                                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                                      children: [
                                                                                          (0, i.jsx)(eN.hV, {
                                                                                              count: D,
                                                                                              color: eA.A.colors
                                                                                                  .BADGE_PRIMARY_BACKGROUND
                                                                                                  .css,
                                                                                              "aria-hidden": !0,
                                                                                          }),
                                                                                          (0, i.jsx)(A.A, {
                                                                                              children:
                                                                                                  eK.intl.formatToPlainString(
                                                                                                      eK.t.v9Dvub,
                                                                                                      { count: D },
                                                                                                  ),
                                                                                          }),
                                                                                      ],
                                                                                  })
                                                                                : null,
                                                                        onClick: () => {
                                                                            ((0, eM.default)({
                                                                                actionName: "badge_directory_opened",
                                                                                displayedUserId: t.id,
                                                                                isSociallyNavigated: !1,
                                                                                hasUnreadIndicator: D > 0,
                                                                                source: "account_popout",
                                                                            }),
                                                                                n(),
                                                                                (0, eG.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tW, { onClose: n, popoutContainerRef: v }),
                                                                X &&
                                                                    (0, i.jsx)(nG, {
                                                                        popoutContainerRef: v,
                                                                        scrollerRef: G,
                                                                        shouldScrollIntoView: J,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(nA.A.Overlay, {
                                                        className: eY.g0,
                                                        children: (0, i.jsxs)(e$, {
                                                            children: [
                                                                (0, i.jsx)(eQ, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: ej.UserCircleIcon,
                                                                    label: eK.intl.string(eK.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nZ.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eq, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": eK.intl.string(eK.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: j,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    nx.p5 &&
                                                                    I &&
                                                                    (0, i.jsx)(eQ, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: eR.IdIcon,
                                                                        label: eK.intl.string(eK.t["/AXYnE"]),
                                                                        onClick: () => {
                                                                            ((0, nx.C)(t.id), n());
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
                                        (0, i.jsx)(tz.A, { skuId: h.profileEffect.skuId, isHovering: _ }),
                                    null != F && (0, i.jsx)(tQ.A, { frame: F, fadeIn: B }),
                                ],
                            }),
                            (0, i.jsx)(ir, { targetElementRef: U, onClose: n }),
                            (0, i.jsx)(ni, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ix = n(201805),
    i_ = n(209932),
    ib = n(655116),
    iy = n(365958),
    iT = n(342296),
    iS = n(852712),
    iI = n(389960),
    iN = n(173660),
    ij = n(616356),
    iR = n(734057),
    iO = n(629016),
    iM = n(186111),
    iP = n(988468),
    ik = n(495867),
    iL = n(967198),
    iD = n(485296),
    iw = n(977997),
    iU = n(486020),
    iG = n(188567),
    iF = n(536194),
    iB = n(253400),
    iV = n(994314),
    iH = n(485599),
    iW = n(116833);
function iz(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: eK.intl.string(eK.t.uwDBSq),
                  body: eK.intl.formatToPlainString(eK.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: eK.intl.string(eK.t["5GD53o"]), body: eK.intl.string(eK.t["2Rb7tE"]) };
    return (0, i.jsx)(n1.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: iW.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: eK.intl.string(eK.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function iK(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(iz, {
        ...t,
        onPrimaryAction: () => {
            (l(ii.i.TAKE_ACTION), (0, eM.trackOwnBadgeDirectoryOpened)("nux"), (0, eG.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(ii.i.USER_DISMISS),
        targetElementRef: n,
    });
}
function iY(e) {
    let { targetElementRef: t, markAsDismissed: n } = e;
    return (0, i.jsx)(n1.A, {
        targetElementRef: t,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        title: eK.intl.string(e4.default.gY1STb),
        body: eK.intl.string(e4.default["Vlu+rH"]),
        onRequestClose: () => n(ii.i.USER_DISMISS),
        actions: [
            {
                text: eK.intl.string(e4.default.e3fPDg),
                onClick: async () => {
                    (await (0, eZ.D)("relaunch_coachmark")) && n(ii.i.TAKE_ACTION);
                },
            },
        ],
    });
}
var iq = n(206248);
function iQ(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: r, shouldShow: a = !0, children: s } = e,
        o = (0, ta.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            a && o
                ? (0, i.jsx)(iq.H, {
                      targetElementRef: t,
                      title: eK.intl.string(tF.default.Qn21R6),
                      body: eK.intl.string(tF.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: r,
                      caretConfig: { align: "center" },
                      action: {
                          text: eK.intl.string(eK.t.RzWDqY),
                          onClick: function () {
                              (n(ii.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(ii.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var i$ = n(379848),
    iX = n(626584),
    iZ = n(757036),
    iJ = n(531685),
    i0 = n(259065),
    i1 = n(842671),
    i2 = n(78294);
let i5 = new iX.A("DisplayNameStylesFlywheelCoachmark");
function i3(e) {
    let { markAsDismissed: t, targetElementRef: n, children: r } = e,
        { analyticsLocations: a } = (0, k.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, c.bG)([iJ.A], () => iJ.A.isFocused()),
        u = (0, iZ.L)(t7.PremiumTypes.TIER_2),
        d = (0, l.useCallback)(() => {
            t(ii.i.TAKE_ACTION);
            let e = eP.default.getCurrentUser();
            null != e &&
                (0, nu.openUserProfileModal)({
                    userId: e.id,
                    sourceAnalyticsLocations: a,
                    onModalOpen: () => {
                        (0, i0.L)({ analyticsLocations: a, stackingBehavior: "stack" });
                    },
                });
        }, [t, a]),
        m = (0, l.useCallback)(() => {
            t(ii.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(i5.error) : o || s.current?.pause();
    }, [o]);
    let f = u ? [eK.intl.string(i1.default.TyUdka)] : [eK.intl.string(i1.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            (0, i.jsx)(n1.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: m,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: i2.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: eK.intl.string(i1.default.cYwrp8),
                body: f,
                actions: [{ text: eK.intl.string(eK.t["4P5I8V"]), variant: "primary", onClick: d }],
            }),
        ],
    });
}
var i6 = n(45780),
    i8 = n(696451),
    i7 = n(71393),
    i9 = n(685073),
    i4 = n(73153);
let le = { lastSeenInfos: {} },
    lt = le;
class ln extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        lt = e ?? le;
    }
    getState() {
        return lt;
    }
    getGuildLastSeenInfo(e) {
        return lt.lastSeenInfos[e] ?? null;
    }
}
let li = new ln(i4.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        lt.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        lt = le;
    },
});
var ll = n(514661);
let lr = new iX.A("GuildTagAvailableCoachmark");
function la(e) {
    let t = (0, c.bG)([i7.A], () => i7.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            i4.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, ll.A)(t?.id ?? null, () => n(ii.i.TAKE_ACTION));
    if (null == t || !(0, i9.q0)(t))
        return (lr.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eK.intl.string(eK.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: eK.intl.string(eK.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(n1.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iW.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eK.intl.formatToPlainString(eK.t["m/Tc3n"], { guildName: t.name }),
                body: eK.intl.string(eK.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(ii.i.USER_DISMISS),
            }),
        ],
    });
}
function ls(e) {
    let t = (0, c.bG)([i7.A], () => i7.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, ll.A)(t?.id ?? null, () => n(ii.i.TAKE_ACTION));
    if (null == t || !(0, i9.q0)(t))
        return (lr.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: eK.intl.string(eK.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: eK.intl.string(eK.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(n1.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iW.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: eK.intl.formatToPlainString(eK.t.VFqnyU, { guildName: t.name }),
                body: eK.intl.string(eK.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(ii.i.USER_DISMISS),
            }),
        ],
    });
}
var lo = n(843010),
    lu = n(764231),
    lc = n(208223);
function ld(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = t9(),
        r = (0, c.bG)([t0.Ay], () => t0.Ay.useReducedMotion),
        a = (0, t1.A)((e) => e.isOpen),
        s = (0, lo.G)(),
        o = !r && null != l && !a && !s,
        u = (0, ew.e)({ location: "TenureLevelUpPopover", hasUnread: o });
    return !o || u
        ? null
        : (0, i.jsx)(i$.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  return (0, i.jsx)(lm, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: r,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function lm(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: r, shouldShow: a } = e,
        s = t7.sp.indexOf(t),
        o = (0, lc.I)(t7.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, l.useCallback)(() => {
            (n(ii.i.TAKE_ACTION),
                t1.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iG._.dispatch(er.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(ii.i.USER_DISMISS);
        }, [n]),
        d = t7.VD[t],
        m = eK.intl.formatToPlainString(eK.t.ewkaVR, {
            timeMilestone: (0, lu.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: eK.intl.string(eK.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(n1.A, {
        targetElementRef: r,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: eK.intl.string(eK.t.VoDxsV),
        body: m,
        actions: f,
    });
}
var lf = n(764014);
function lp(e) {
    let { targetElementRef: t } = e,
        n = (0, t1.A)((e) => e.isOpen),
        [l, r] = (0, tX.kn)(n ? [] : [d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: ii.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return l === d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(n1.A, {
              targetElementRef: t,
              graphic: { type: "image", src: lf.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: eK.intl.string(eK.t["Q+dH5r"]),
              body: eK.intl.string(eK.t.YKJw4W),
              onRequestClose: () => r(ii.i.USER_DISMISS),
              actions: [
                  {
                      text: eK.intl.string(eK.t.dcOuei),
                      onClick: function () {
                          (r(ii.i.TAKE_ACTION),
                              t1.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nD.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              iG._.dispatch(er.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function lh(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, ix.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [r, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, i6.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ""),
                l = (0, c.bG)(
                    [i7.A, eP.default, i8.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = i7.A.getGuild(e);
                        if (void 0 === t || !(0, i9.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = eP.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = i8.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tX.ww)(l && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? "null");
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                r = (0, c.bG)([li], () => (null === l ? null : li.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([i7.A], () => i7.A.getGuild(l)?.profile?.tag),
                s = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && r?.tag === a,
                u = null !== l && s && !o;
            return (0, tX.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? r === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(ls, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(la, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ld, { groupName: ii.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(lp, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(i$.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: ii.m.ACCOUNT_NAME_ZONE,
                            children: (t) => {
                                let { visibleContent: n, markAsDismissed: l } = t;
                                switch (n) {
                                    case d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                                        return (0, i.jsx)(i3, {
                                            markAsDismissed: l,
                                            targetElementRef: e.targetElementRef,
                                            children: e.children,
                                        });
                                    case d.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                                        return (0, i.jsx)(iQ, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: tu.p,
                                            children: e.children,
                                        });
                                    case d.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(iK, {
                                                    variantProps: e.badgeDirectoryNuxPopoverVariant,
                                                    markAsDismissed: l,
                                                    targetElementRef: e.targetElementRef,
                                                }),
                                            ],
                                        });
                                    case d.M.BUILD_A_BEAR_RELAUNCH_COACHMARK:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(iY, {
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
var lg = n(348858),
    lA = n(615675),
    lE = n(900797),
    lC = n(847374),
    lv = n(617354),
    lx = n(96020),
    l_ = n(42473),
    lb = n(731854),
    ly = n(516171),
    lT = n(577755);
function lS(e) {
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
        } = (0, lg.I)(m ? "undeafen" : "deafen"),
        E = n ? lA.HeadphonesDenyIcon : f,
        { name: C } = (0, eh.x5)(lb.oh.AUDIO_OUTPUT),
        v = (0, lv.A)(t, n, r),
        { analyticsLocations: x } = (0, k.Ay)(P.A.AUDIO_OUTPUT_BUTTON),
        _ = l.useRef(null);
    return (
        l.useEffect(() => () => p(), [m, p]),
        (0, i.jsx)(k.f5, {
            value: x,
            children: (0, i.jsx)(h.Y, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        d(),
                        (0, i.jsx)(k.f5, {
                            value: x,
                            children: (0, i.jsx)(lx.A, {
                                onInteraction: (0, W.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                        f = d ? lE.ChevronSmallUpIcon : lC.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: a()(ly.Lh, { [ly.v8]: m, [ly.q6]: d }),
                        children: [
                            (0, i.jsx)(l_.A, {
                                "aria-checked": m,
                                "aria-label": eK.intl.string(eK.t.wjcRFX),
                                className: ly.eT,
                                disabled: r,
                                icon: (0, i.jsx)(E, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? eA.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? lT.o : void 0,
                                innerClassName: a()({ [lT.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: v,
                            }),
                            (0, i.jsx)(l_.A, {
                                className: a()(ly.UT, { [ly.q6]: d }),
                                disabled: r,
                                icon: (0, i.jsx)(f, {
                                    className: ly.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? eA.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eK.intl.formatToPlainString(eK.t["f+DDY/"], { outputDeviceName: C })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? eK.intl.format(eK.t["f+DDY/"], { outputDeviceName: C })
                                    : eK.intl.string(eK.t.aA4Vce),
                                "aria-label": c
                                    ? eK.intl.formatToPlainString(eK.t["f+DDY/"], { outputDeviceName: C })
                                    : eK.intl.string(eK.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lI = n(523875),
    lN = n(666654),
    lj = n(993719);
let lR = {};
class lO extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lR[e] ?? !1;
    }
}
let lM = new lO(i4.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lR[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lR[t] = !1;
    },
});
var lP = n(362823),
    lk = n(980923),
    lL = n(796262),
    lD = n(222176),
    lw = n(973324);
function lU(e) {
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
            shouldShowInputDeviceChangedTooltip: E,
            shouldShowPTTJoinTooltip: C,
            dismissTooltips: v,
            speaking: x,
        } = e,
        _ = (0, c.bG)([iP.Ay], () => iP.Ay.getMode() === lb.TB.PUSH_TO_TALK),
        b = (0, c.bG)([iP.Ay], () => iP.Ay.getSettings().modeOptions.shortcut),
        y = (0, c.bG)([lM], () => lM.getIsTutorialActive(lP.v.MUTE_TUTORIAL)),
        T = (0, c.bG)([ik.A], () => null != ik.A.getChannelId()),
        { name: S } = (0, eh.x5)(lb.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, iS.d)({ location: "MicrophoneButton" }),
        N = l.useRef(null),
        j = n || s || r,
        R = (0, lI.L)(j ? "unmute" : "mute"),
        { analyticsLocations: O } = (0, k.Ay)(P.A.AUDIO_INPUT_BUTTON),
        { Component: M, events: L, play: D } = R,
        w = r || s ? lN.MicrophoneDenyIcon : M;
    l.useEffect(() => () => D(), [j, D]);
    let U = (0, lk.A)(n, r, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eK.intl.string(eK.t["29gnR4"]), tooltipForceOpen: !0 }
        : C || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eK.intl.format(eK.t.c1qUOQ, { keybind: t_.dI(b).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let G = _ && T,
        F = j ? eA.A.colors.ICON_VOICE_MUTED : "currentColor",
        B = l.useCallback(() => {
            (f(), y && lj.N(lP.v.MUTE_TUTORIAL));
        }, [f, y]);
    return (0, i.jsxs)(k.f5, {
        value: O,
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: N,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        v(),
                        (0, i.jsx)(k.f5, {
                            value: O,
                            children: (0, i.jsx)(lx.A, {
                                onInteraction: (0, W.s)("AudioDeviceMenu", P.A.ACCOUNT),
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
                        s = r ? lE.ChevronSmallUpIcon : lC.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: N,
                        className: a()(ly.Lh, { [ly.v8]: j, [ly.q6]: r }),
                        children: [
                            (0, i.jsx)(l_.A, {
                                "aria-checked": j,
                                "aria-label": eK.intl.string(eK.t.w4m945),
                                className: ly.eT,
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
                                children: G ? (0, i.jsx)("div", { className: a()(lD.U, { [lD.z]: x }) }) : null,
                            }),
                            (0, i.jsx)(l_.A, {
                                "aria-label": E
                                    ? eK.intl.formatToPlainString(eK.t["18wnuD"], { inputDeviceName: S })
                                    : eK.intl.string(eK.t.fRzCbB),
                                className: a()(ly.UT, { [ly.q6]: r }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: ly.$$,
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
                                tooltipType: E ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: E,
                                tooltipPositionKey: E
                                    ? eK.intl.formatToPlainString(eK.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !r,
                                tooltipText: E
                                    ? eK.intl.format(eK.t["18wnuD"], { inputDeviceName: S })
                                    : eK.intl.string(eK.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(n1.A, {
                targetElementRef: N,
                shouldShow: y,
                graphic: { type: "image", src: lw.A },
                onRequestClose: () => {
                    lj.N(lP.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eK.intl.string(lL.default.VG4zAf),
                body: eK.intl.string(lL.default["8VIRzR"]),
            }),
        ],
    });
}
var lG = n(935399),
    lF = n(505312),
    lB = n(848847),
    lV = n(22363),
    lH = n(802516),
    lW = n(573648),
    lz = n(128232),
    lK = n(277657),
    lY = n(690364),
    lq = n(522978);
let lQ = "console_connection_coachmark",
    l$ = new iX.A("ConsoleConnectionCoachmark");
function lX(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = l.useMemo(() => {
            function e(e) {
                (!(async function (e) {
                    let t;
                    e === er.fg2.XBOX ? lY.x() : lz.x();
                    try {
                        t = await (0, lK.V)(e);
                    } catch (t) {
                        (l$.error("Error starting console sign-in; falling back to the link modal", t),
                            (0, lq.A)({ platformType: e, location: lQ }));
                        return;
                    }
                    e === er.fg2.XBOX ? lY.t([lQ], t) : lz.t([lQ], e, t);
                })(e),
                    t(ii.i.TAKE_ACTION));
            }
            return [
                {
                    text: lW.A.get(er.fg2.PLAYSTATION).name,
                    icon: lV.PlaystationNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(er.fg2.PLAYSTATION),
                },
                {
                    text: lW.A.get(er.fg2.XBOX).name,
                    icon: lH.XboxNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(er.fg2.XBOX),
                },
            ];
        }, [t]),
        a = l.useCallback(() => {
            t(ii.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(n1.A, {
        targetElementRef: n,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5860f559ea2857185a554648b2a0b140e16bea35ed1dff11b697afd49ee2447.png",
            aspectRatio: "2/1",
        },
        title: eK.intl.string(eK.t.ZCib6v),
        body: eK.intl.string(eK.t.ikWQ2x),
        position: "top",
        caretConfig: { align: "end" },
        actions: r,
        onRequestClose: a,
    });
}
function lZ(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, k.Ay)(P.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(n1.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/fcf847e6a0778e63233f830819236b2b36b763964a681cc16be294394b72d93b.svg",
            aspectRatio: "6/4",
        },
        title: eK.intl.string(eK.t["6CxPoB"]),
        body: [eK.intl.format(eK.t.IVzJ8G, { settingsHook: (e) => e })],
        actions: [
            {
                text: eK.intl.string(eK.t.NENZhS),
                onClick: function () {
                    ((0, tr.openUserSettings)(tl.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(ii.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(ii.i.USER_DISMISS),
    });
}
var lJ = n(88001),
    l0 = n(107198),
    l1 = n(438705);
function l2(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: r } = e,
        a = l.useCallback(() => {
            (r(), (0, tr.openUserSettings)(tl.X.SUBSCRIPTIONS_PANEL));
        }, [r]);
    return (0, i.jsx)(n1.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: l1 },
        shouldShow: n,
        title: eK.intl.format(l0.default.bx8sR9, { premiumGroupProductName: (0, lJ.DP)() }),
        body: eK.intl.format(l0.default.Pw4OFZ, { premiumGroupProductName: (0, lJ.DP)() }),
        onRequestClose: r,
        actions: [{ text: eK.intl.string(l0.default.DD26QR), onClick: a }],
    });
}
var l5 = n(873298),
    l3 = n(840387);
function l6(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = (0, l3.Z)(),
        a = nI.KP.useSetting(),
        s = r && a !== l5.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(ii.i.TAKE_ACTION), (0, tr.openUserSettings)(tl.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = l.useCallback(() => {
            t(ii.i.USER_DISMISS);
        }, [t]),
        c = s
            ? a === l5.KP.FRIENDS_ONLY
                ? eK.intl.string(eK.t["/hogEy"])
                : eK.intl.string(eK.t["6hEfm1"])
            : eK.intl.string(eK.t.bnNxW1);
    return (0, i.jsx)(n1.A, {
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
        title: eK.intl.string(eK.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: eK.intl.string(eK.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var l8 = n(415443);
function l7(e) {
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
    (0, lG.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iG._.subscribe(er.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iG._.unsubscribe(er.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = l.useCallback(() => {
            (p(!1), a());
        }, [a]),
        g = ef.A.coachmarkDismissibleContent;
    if (null != r) {
        let e = (0, l8.A)("1795726747488", !0);
        t =
            null != e
                ? eK.intl.formatToPlainString(eK.t.wve4kg, { webBuildOverride: r.id, builtAt: e })
                : eK.intl.formatToPlainString(eK.t.Gzh6ZP, { webBuildOverride: r.id });
    } else t = eK.intl.string(eK.t.cduTBL);
    let A = th.SettingsIcon,
        E = (0, lF.w)();
    return (
        (A = null != r ? lB.SettingsInfoIcon : E.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l_.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: s,
                    "aria-label": eK.intl.string(eK.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...E.events,
                    plated: null != c,
                }),
                (0, i.jsx)(l2, { targetElementRef: m, shouldShow: f, onDismiss: () => p(!1) }),
                (0, i.jsx)(i$.Ay, {
                    contentTypes: o,
                    groupName: ii.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === d.M.TINY_BRONCO && null != I.hm
                            ? (0, i.jsx)(l.Suspense, {
                                  fallback: null,
                                  children: (0, i.jsx)(I.hm, { markAsDismissed: n, targetElementRef: m }),
                              })
                            : t === d.M.PRIVATE_PROFILE_COACHMARK
                              ? (0, i.jsx)(l6, { markAsDismissed: n, targetElementRef: m })
                              : t === d.M.CONSOLE_CONNECTION_COACHMARK
                                ? (0, i.jsx)(lX, { markAsDismissed: n, targetElementRef: m })
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
let l4 = iB.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    re = 2.5 * tv.A.Millis.SECOND,
    rt = 2 * tv.A.Millis.MINUTE,
    rn = 5 * tv.A.Millis.SECOND;
function ri(e) {
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
            avatarDecoration: E,
            "data-jump-section": C,
        } = e,
        v = l.useRef(null),
        _ = t ?? v,
        b = (0, iU.F_)({ avatarDecoration: E, size: (0, X.Te)(p._3.SIZE_32) }),
        T = (0, eu.A)(),
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
                (0, y.A)(() => a(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        iG._.subscribe(er.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iG._.unsubscribe(er.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: r ? n : void 0, setHighlightBadge: i }
            );
        })(),
        j = (0, J.K)(A),
        R = (0, Q.bg)(),
        O = (0, Q.Td)();
    return null == u
        ? null
        : (0, i.jsx)(x.A, {
              object: er.ZSU.AVATAR,
              children: (0, i.jsx)(iT.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !R,
                  preload: () =>
                      (0, iy.A)(u.id, u.getAvatarURL(void 0, iT.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(iv, {
                          currentUser: u,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: a()(l9.dI, { [l9.UU]: O }),
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
                          className: a()(l9.Q9, { [l9.ZQ]: null != A }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), d?.(t));
                                  },
                                  "aria-label": eK.intl.string(eK.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: l9.$n,
                                  "data-jump-section": C,
                              }),
                              (0, i.jsx)(l4, {
                                  size: p._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: b,
                                  status: o ? er.clD.STREAMING : c,
                                  voiceStatus: (0, p.n$)(n, r),
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
class rl extends l.PureComponent {
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
        ((0, V.A)(e, t, er.JJy.ACCOUNT_PANEL), (0, H.XJ)(P.A.ACCOUNT, H.OP.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, B.A)(e, er.JJy.ACCOUNT_PANEL), (0, H.XJ)(P.A.ACCOUNT, H.OP.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            ik.A.isConnected() ? (0, tr.openUserSettings)(tl.X.VOICE_AND_VIDEO_PANEL) : (0, tr.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, v.L3)(e, async () => {
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
                    n.e(795854),
                    n.e(870088),
                    n.e(300641),
                    n.e(571163),
                    n.e(586662),
                    n.e(831377),
                    n.e(709976),
                    n.e(750955),
                    n.e(953343),
                    n.e(279774),
                    n.e(763945),
                    n.e(261204),
                    n.e(686731),
                    n.e(807432),
                    n.e(873532),
                    n.e(590088),
                    n.e(807003),
                    n.e(46083),
                    n.e(889957),
                    n.e(747802),
                    n.e(716541),
                    n.e(906470),
                    n.e(736663),
                    n.e(361243),
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
                    n.e(658961),
                    n.e(9796),
                    n.e(952068),
                    n.e(768289),
                    n.e(772565),
                    n.e(169191),
                    n.e(79492),
                    n.e(533781),
                    n.e(328276),
                    n.e(592e3),
                    n.e(524434),
                    n.e(653294),
                    n.e(672402),
                    n.e(226229),
                    n.e(118994),
                    n.e(516497),
                    n.e(24774),
                    n.e(326794),
                    n.e(670870),
                    n.e(684231),
                    n.e(570690),
                    n.e(886631),
                    n.e(74336),
                    n.e(978898),
                    n.e(406322),
                    n.e(942571),
                    n.e(464759),
                    n.e(763343),
                    n.e(194704),
                    n.e(3942),
                    n.e(274461),
                    n.e(270520),
                    n.e(384054),
                    n.e(731841),
                    n.e(544242),
                    n.e(816348),
                    n.e(165291),
                    n.e(109383),
                    n.e(957643),
                    n.e(301815),
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
                    n.e(141648),
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
                    n.e(401425),
                    n.e(934081),
                    n.e(880186),
                    n.e(302458),
                    n.e(556436),
                    n.e(280574),
                    n.e(102137),
                    n.e(655282),
                    n.e(375971),
                    n.e(792818),
                    n.e(861161),
                    n.e(579958),
                    n.e(27612),
                    n.e(770248),
                    n.e(657266),
                    n.e(622074),
                    n.e(438208),
                    n.e(903758),
                    n.e(768071),
                    n.e(96922),
                    n.e(292699),
                    n.e(373738),
                    n.e(531521),
                    n.e(56501),
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
                    n.e(494925),
                    n.e(269714),
                    n.e(593779),
                    n.e(918221),
                    n.e(377109),
                    n.e(656997),
                    n.e(828849),
                    n.e(74886),
                    n.e(143882),
                    n.e(944121),
                    n.e(245851),
                    n.e(971848),
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
                    n.e(633567),
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
                    n.e(279626),
                    n.e(859516),
                    n.e(903731),
                    n.e(181166),
                    n.e(572149),
                    n.e(257182),
                    n.e(493118),
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
                    n.e(219472),
                    n.e(524620),
                    n.e(16651),
                    n.e(846582),
                    n.e(53719),
                    n.e(474677),
                    n.e(992535),
                    n.e(317383),
                    n.e(319056),
                    n.e(311913),
                    n.e(868052),
                    n.e(106980),
                    n.e(974969),
                    n.e(310933),
                    n.e(114386),
                    n.e(179028),
                    n.e(899719),
                    n.e(212037),
                    n.e(277162),
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
                    n.e(751543),
                    n.e(926132),
                    n.e(834552),
                    n.e(993103),
                    n.e(708757),
                    n.e(863232),
                    n.e(517888),
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
                    n.e(686367),
                    n.e(971508),
                    n.e(755936),
                    n.e(147662),
                    n.e(316344),
                    n.e(801012),
                    n.e(274501),
                    n.e(965152),
                    n.e(544571),
                    n.e(692990),
                    n.e(305834),
                    n.e(745959),
                    n.e(858529),
                    n.e(481987),
                    n.e(595653),
                    n.e(958038),
                    n.e(719466),
                    n.e(352805),
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
                    n.e(676418),
                    n.e(572963),
                    n.e(844780),
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
                    n.e(161275),
                    n.e(830221),
                    n.e(761253),
                    n.e(521930),
                    n.e(357688),
                    n.e(308555),
                    n.e(857467),
                    n.e(508371),
                    n.e(858164),
                    n.e(142867),
                    n.e(885434),
                    n.e(88342),
                    n.e(586127),
                    n.e(977547),
                    n.e(554241),
                    n.e(96539),
                    n.e(41250),
                    n.e(724303),
                    n.e(179049),
                    n.e(132737),
                    n.e(495786),
                    n.e(53102),
                    n.e(717479),
                    n.e(344502),
                    n.e(146070),
                    n.e(836863),
                    n.e(311802),
                    n.e(780262),
                    n.e(698965),
                    n.e(854622),
                    n.e(834968),
                    n.e(590365),
                    n.e(989088),
                    n.e(37977),
                    n.e(136149),
                    n.e(470068),
                    n.e(817989),
                    n.e(88599),
                    n.e(147626),
                    n.e(647177),
                    n.e(613867),
                    n.e(870663),
                    n.e(689393),
                    n.e(727779),
                    n.e(412743),
                    n.e(717602),
                    n.e(382563),
                    n.e(585503),
                    n.e(437065),
                    n.e(891585),
                    n.e(203589),
                    n.e(709640),
                    n.e(382465),
                    n.e(294857),
                    n.e(15481),
                    n.e(952548),
                    n.e(893917),
                    n.e(668802),
                    n.e(631358),
                    n.e(459414),
                    n.e(335395),
                    n.e(636373),
                    n.e(882777),
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
                    n.e(648344),
                    n.e(170104),
                    n.e(491793),
                    n.e(889638),
                    n.e(553984),
                    n.e(918024),
                    n.e(902564),
                    n.e(884601),
                    n.e(782969),
                    n.e(731751),
                    n.e(423775),
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
                    n.e(225575),
                    n.e(676156),
                    n.e(852617),
                    n.e(177102),
                    n.e(256769),
                    n.e(125964),
                    n.e(415266),
                    n.e(737021),
                    n.e(775951),
                    n.e(428967),
                    n.e(254506),
                    n.e(62613),
                    n.e(874342),
                    n.e(911667),
                    n.e(533015),
                    n.e(976516),
                    n.e(400501),
                    n.e(985794),
                    n.e(695358),
                    n.e(767837),
                    n.e(473384),
                    n.e(129080),
                    n.e(432209),
                    n.e(229657),
                    n.e(996868),
                    n.e(238232),
                    n.e(368062),
                    n.e(859991),
                    n.e(667092),
                    n.e(608032),
                    n.e(477970),
                    n.e(709371),
                    n.e(330724),
                    n.e(599719),
                    n.e(480436),
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
                    n.e(258398),
                    n.e(691671),
                    n.e(812042),
                    n.e(547801),
                    n.e(550033),
                    n.e(916758),
                    n.e(729963),
                    n.e(660249),
                    n.e(440142),
                    n.e(652212),
                    n.e(186212),
                    n.e(830938),
                    n.e(612287),
                    n.e(720064),
                    n.e(538513),
                    n.e(733416),
                    n.e(838090),
                    n.e(919726),
                    n.e(325047),
                    n.e(359258),
                    n.e(692513),
                    n.e(305557),
                    n.e(321640),
                    n.e(938579),
                    n.e(36227),
                    n.e(203930),
                    n.e(50097),
                    n.e(144141),
                    n.e(975933),
                    n.e(151640),
                    n.e(903663),
                    n.e(460773),
                    n.e(93907),
                    n.e(26001),
                    n.e(944801),
                    n.e(159957),
                    n.e(229666),
                    n.e(92295),
                    n.e(208018),
                    n.e(589916),
                    n.e(848625),
                    n.e(458273),
                    n.e(968763),
                    n.e(163069),
                    n.e(883952),
                    n.e(838056),
                    n.e(935948),
                    n.e(414591),
                    n.e(652111),
                    n.e(144179),
                    n.e(215920),
                    n.e(536973),
                    n.e(658216),
                    n.e(590814),
                    n.e(896804),
                    n.e(708536),
                    n.e(298107),
                    n.e(411353),
                    n.e(258709),
                    n.e(508829),
                    n.e(526778),
                    n.e(603303),
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
                    n.e(458886),
                    n.e(269786),
                    n.e(113945),
                    n.e(228850),
                    n.e(437961),
                    n.e(908081),
                    n.e(720045),
                    n.e(914248),
                    n.e(922606),
                    n.e(527687),
                    n.e(646284),
                    n.e(904774),
                    n.e(78601),
                    n.e(726294),
                    n.e(690901),
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
                    n.e(555732),
                    n.e(911064),
                    n.e(246969),
                    n.e(462010),
                    n.e(763096),
                    n.e(781949),
                    n.e(964898),
                    n.e(746479),
                    n.e(775934),
                    n.e(225612),
                    n.e(401980),
                    n.e(127659),
                    n.e(377663),
                    n.e(568881),
                    n.e(341701),
                    n.e(472789),
                    n.e(137937),
                    n.e(42834),
                    n.e(468083),
                    n.e(803191),
                    n.e(548730),
                    n.e(39689),
                    n.e(946430),
                    n.e(871467),
                    n.e(350949),
                    n.e(788976),
                    n.e(992478),
                    n.e(368684),
                    n.e(51892),
                    n.e(841838),
                    n.e(396325),
                    n.e(141049),
                    n.e(695221),
                    n.e(396854),
                    n.e(897073),
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
                    n.e(525499),
                    n.e(949013),
                    n.e(202669),
                    n.e(886913),
                    n.e(860003),
                    n.e(808979),
                    n.e(749736),
                    n.e(10622),
                    n.e(587732),
                    n.e(645830),
                    n.e(733771),
                    n.e(946039),
                    n.e(995602),
                    n.e(349740),
                    n.e(795752),
                    n.e(578090),
                    n.e(896480),
                    n.e(96200),
                    n.e(569468),
                    n.e(966598),
                    n.e(886492),
                    n.e(146149),
                    n.e(360536),
                    n.e(686774),
                    n.e(138733),
                    n.e(228011),
                    n.e(759174),
                    n.e(998882),
                    n.e(175284),
                    n.e(983947),
                    n.e(944727),
                    n.e(350681),
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
                    n.e(156132),
                    n.e(101851),
                    n.e(154168),
                    n.e(320272),
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
                    n.e(313052),
                    n.e(639721),
                    n.e(419631),
                    n.e(82384),
                    n.e(956814),
                    n.e(903820),
                    n.e(876892),
                    n.e(334624),
                    n.e(816799),
                    n.e(356675),
                    n.e(492618),
                    n.e(179157),
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
                    n.e(524084),
                    n.e(990080),
                    n.e(44264),
                    n.e(444790),
                    n.e(983058),
                    n.e(87641),
                    n.e(488292),
                    n.e(939081),
                    n.e(874913),
                    n.e(710569),
                    n.e(239734),
                    n.e(515818),
                    n.e(850572),
                    n.e(645671),
                    n.e(993720),
                    n.e(800916),
                    n.e(654658),
                    n.e(578658),
                    n.e(434566),
                    n.e(445254),
                    n.e(569443),
                    n.e(809548),
                    n.e(543456),
                    n.e(96857),
                ]).then(n.bind(n, 230016));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: v.Z_, onInteraction: (0, W.s)("UserSettingsMenu", P.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, W.s)("AudioDeviceMenu", P.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, v.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, iS.d)({ location: "Account" });
                    return (0, i.jsx)(k.f5, {
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
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(k.f5, {
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
        let { selfMute: e, speakingWhileMuted: t, occluded: n, deviceChangedTooltipType: i } = this.props,
            { hoveringOnMute: l } = this.state,
            r =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > rt;
        t
            ? !l &&
              e &&
              !n &&
              r &&
              null == i &&
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(re, () =>
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
            return (0, i.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(A.A, { children: n_.Ay.humanizeStatus(r) }),
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
            ? (0, i.jsxs)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(A.A, { children: n_.Ay.humanizeStatus(r) }),
                      (0, i.jsx)(eo.A, { activity: o, emojiClassName: l9.Zg, className: l9.WO }),
                  ],
              })
            : null != r && r !== er.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(O, { text: n_.Ay.humanizeStatus(r) }),
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
                          className: l9.eW,
                          children: (0, i.jsx)(iH.A, {
                              className: a()({ [l9.e8]: null != e }),
                              children: (0, i.jsx)(ed.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? ec.G.ANIMATED : ec.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: l9.XP,
                          children: (0, i.jsx)(iV.A, { children: this.renderStatus() }),
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
            : (0, i.jsx)(lh, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: r,
                  children: (0, i.jsx)(ri, {
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
            : (0, i.jsx)(E.sk, {
                  children: (e) =>
                      (0, i.jsxs)("div", {
                          ref: this.containerRef,
                          className: a()(l9.kL, { [l9.UG]: null != n, [l9.bc]: !l, [l9.G5]: r }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(et.A, { nameplate: t, hovered: s, placement: ee.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(rr, {
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
function rr(e) {
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
            handleOpenSettingsContextMenu: E,
            dismissibleContents: C,
            occluded: v,
            nameplate: x,
            accountContainerRef: _,
            deviceChangedTooltipType: b,
            dismissTooltips: y,
            speaking: T,
        } = e,
        S = (0, J.K)(x);
    function N() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(l7, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: E,
            dismissibleContents: [...C.settings, ...e],
            iconForeground: null != x ? l9.t4 : void 0,
            nameplate: x,
        });
    }
    return (0, i.jsxs)("div", {
        className: l9.Uo,
        style: S,
        children: [
            (0, i.jsx)(lU, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: a,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != x ? l9.t4 : void 0,
                nameplate: x,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === b,
                dismissTooltips: y,
                speaking: T,
            }),
            (0, i.jsx)(lS, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: f,
                onContextMenu: g,
                awaitingRemote: r,
                iconForeground: null != x ? l9.t4 : void 0,
                nameplate: x,
                shouldShowOutputDeviceChangedTooltip: "output" === b,
                dismissTooltips: y,
            }),
            null != I.hE
                ? (0, i.jsx)(l.Suspense, { fallback: N(), children: (0, i.jsx)(I.hE, { occluded: v, children: N }) })
                : N(),
        ],
    });
}
function ra(e) {
    let t = (0, c.bG)([ik.A], () => null != ik.A.getChannelId()),
        n = (0, eh.Py)(e),
        i = l.useRef(new m.Ep()),
        [r, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(rn, () => {
                a(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        (a(!1), i.current.stop());
    }, []);
    return (
        (0, b.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: r, dismissTooltip: s }
    );
}
function rs() {
    let e = (0, c.bG)([eP.default], () => eP.default.getCurrentUser()),
        t = (0, c.bG)([n4.default], () => n4.default.getId()),
        {
            activities: n,
            streaming: r,
            status: a,
        } = (0, c.cf)([ia.A], () => {
            let e = ia.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: ia.A.getStatus(),
            };
        }),
        s = (0, c.bG)([ij.A], () => ij.A.getAnyStreamForUser(t)),
        m = (0, _.A)({ userId: t }),
        f = (0, c.bG)([i_.A], () => i_.A.isUserPlayingSounds(t)),
        p = (0, c.bG)([iD.A], () => iD.A.getVoiceVolume(t)),
        h = n_.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([ik.A, iR.A], () => {
            let e = ik.A.getChannelId();
            return null != e ? iR.A.getChannel(e) : null;
        }),
        { mute: A, selfMute: E, suppress: v } = (0, iN.A)(g),
        { selfDeaf: x, deaf: b } = (0, iI.A)(g),
        y = (0, c.bG)([w.A], () => ((0, U.kK)() ? w.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        T = (0, c.bG)(
            [iP.Ay, iw.A],
            () => {
                var e;
                return (
                    iP.Ay.getSpeakingWhileMuted() &&
                    ((e = null != g ? iw.A.getVoiceStateForChannel(g.id) : null),
                    !(v || e?.mute) && (!g?.isGuildStageVoice() || (0, F.eY)(e) === F.zF.ON_STAGE))
                );
            },
            [g, v],
        ),
        S = (0, c.bG)([G.A], () => G.A.isFullscreenInContext()),
        I = (0, c.bG)([iM.A], () => iM.A.hasLayers()),
        N = (0, C.re)(C.DX) || I || iF.P.isDisallowPopupsSet() || S,
        j = (0, c.bG)([em.default], () => null != em.default.getAwaitingRemoteSessionInfo()),
        R = (0, c.bG)([iL.A], () => iL.A.getGuildId()),
        O = e?.avatarDecoration,
        M = (0, $.A)(O),
        B = n_.Ay.useName(e) ?? "",
        { analyticsLocations: V } = (0, k.Ay)(P.A.ACCOUNT),
        H = (0, Z.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: W } = (0, ix.c9)(),
        Q = (0, c.bG)([ib.A, eP.default, iO.A], () => {
            let e,
                t = ib.A.getSyncingWith(),
                n = ib.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iO.A.getParty(e) ?? []))
                        .map((e) => eP.default.getUser(e))
                        .filter(it.Vq)
                        .value()),
                i.length > 1
            );
        }),
        X = { avatar: [], settings: [] },
        J = (0, nN.Hy)({ location: "Account" }) && !N,
        ee = ep.A.useIsEligible(),
        et = ef.A.coachmarkDismissibleContent,
        en = (0, L.d)({ location: "AccountCoachmark" }),
        eo = (function (e) {
            let { enabled: t } = es.useConfig({ location: e }),
                n = (0, c.bG)(
                    [ei.A],
                    () =>
                        !ei.A.isFetching() &&
                        !ei.A.getAccounts().some((e) => {
                            let { type: t } = e;
                            return ea.has(t);
                        }),
                ),
                i = (0, c.bG)([el.A], () => el.A.hasConsented(er.YAq.PERSONALIZATION));
            return t && n && i;
        })("AccountCoachmark"),
        eu = (0, D.b)({ currentUserId: e?.id, enabled: en }),
        ec = (function (e) {
            let t = (0, K.Pr)(e),
                n = (0, z.HX)(d.M.BUILD_A_BEAR_INTRO),
                i = (0, Y.xr)((e) => e.fullScreenLayers.some((e) => e.key === q.p)),
                r = l.useRef(i),
                [a, s] = l.useState(!1);
            return (
                l.useEffect(() => {
                    i !== r.current && ((r.current = i), i || s(!0));
                }, [i]),
                t && n && !i && a
            );
        })("AccountCoachmark");
    N ||
        (X.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != eu && X.avatar.push(d.M.BADGE_DIRECTORY_NUX_POPOVER),
        ec && X.avatar.push(d.M.BUILD_A_BEAR_RELAUNCH_COACHMARK),
        ee && null != et && X.settings.push(et),
        eo && X.settings.push(d.M.CONSOLE_CONNECTION_COACHMARK),
        X.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: ed, dismissTooltip: eh } = ra(lb.oh.AUDIO_INPUT),
        { shouldShowTooltip: eg, dismissTooltip: eA } = ra(lb.oh.AUDIO_OUTPUT),
        eE = l.useMemo(() => (ed ? "input" : eg ? "output" : void 0), [ed, eg]),
        eC = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        eh();
                        break;
                    case "output":
                        eA();
                }
            },
            [eh, eA],
        );
    return (0, i.jsx)(k.f5, {
        value: V,
        children: (0, i.jsx)(rl, {
            currentUser: e,
            username: B,
            activities: n,
            applicationStream: s,
            voiceChannel: g,
            dismissibleContents: X,
            badgeDirectoryNuxPopoverVariant: eu,
            isOrbchievementsEnabled: J,
            userTag: h,
            occluded: N,
            selfDeaf: x,
            selfMute: E,
            serverDeaf: b,
            serverMute: A,
            speaking: m,
            playingSoundboard: f,
            voiceDb: p,
            speakingWhileMuted: T,
            status: a,
            streaming: r,
            suppress: v,
            webBuildOverride: y,
            awaitingRemote: j,
            nameplate: H,
            selectedGuildId: R,
            avatarDecoration: M,
            isQuestBarEmpty: W,
            isListenAlongVisible: Q,
            deviceChangedTooltipType: eE,
            onDismissDeviceChangedTooltip: () => eC(eE),
        }),
    });
}
