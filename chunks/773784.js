(n.d(t, { g: () => ri, A: () => ra }), n(321073));
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
    w = n(139523),
    D = n(521502),
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
    em = n(520535),
    ef = n(552122),
    ep = n(74848),
    eh = n(607399),
    eg = n(646514),
    eA = n(305866),
    eC = n(707554),
    eE = n(95362),
    ex = n(22231),
    ev = n(805251),
    e_ = n(935154),
    eb = n(780338);
if (221552 != n.j) var E = n(192308);
var ey = n(224640),
    eT = n(165862),
    eS = n(877784),
    eI = n(812993),
    eN = n(26137),
    ej = n(473935),
    eR = n(765671),
    eO = n(861304),
    eM = n(287809),
    eP = n(682618),
    ek = n(257339),
    eL = n(982240),
    ew = n(620143),
    eD = n(737667),
    eU = n(470739),
    eG = n(289873),
    eF = n(366056),
    eB = n(477782),
    eV = n(320448),
    eH = n(834730),
    eW = n(993401),
    ez = n(792996),
    eK = n(211450);
function eY(e) {
    return (0, i.jsx)("div", {
        className: eK.wE,
        children: (0, i.jsx)(eT.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
        }),
    });
}
function eq(e) {
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
        p = (0, eW.rE)({ action: t, onClick: n }),
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
                (0, i.jsx)("div", { className: eK.iA, children: (0, i.jsx)(r, { size: "xs", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: eK.$H,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(eH.E, {
                                    color: "currentColor",
                                    variant: "body-sm/medium",
                                    className: eK.W1,
                                    children: a,
                                }),
                                (0, i.jsx)(eH.E, { color: "currentColor", variant: "body-xs/medium", children: s }),
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
                          (0, i.jsx)(g.D, { className: eK.ef, onClick: p, children: S() }),
                          (0, i.jsx)(g.D, {
                              className: eK.ap,
                              "aria-label": ez.intl.string(ez.t.PdRCRg),
                              ...e,
                              onClick: y,
                              children: (0, i.jsx)(eV.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                          }),
                      ],
                  })
                : _
                  ? (0, i.jsxs)(g.D, {
                        className: eK.ef,
                        ...e,
                        onClick: y,
                        children: [
                            S(),
                            (0, i.jsx)("div", {
                                className: eK.ap,
                                children: (0, i.jsx)(eV.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    })
                  : (0, i.jsx)(g.D, { className: eK.ef, onClick: p, children: S() })),
            (0, i.jsx)("div", { ref: v, className: eK.jG, children: t })
        );
    }
    return _
        ? (0, i.jsx)("li", {
              className: eK.j$,
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
        : (0, i.jsx)("li", { className: eK.j$, children: I() });
}
function eQ(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
}
var e$ = n(719718),
    eX = n(261336),
    eZ = n(796104),
    eJ = n(402102);
let e0 = {
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
        UNAVAILABLE: { availability: eJ.u.UNAVAILABLE },
        NO_CHARACTER: { availability: eJ.u.NO_CHARACTER },
        COMPACT_ASSETS: { compactAssets: !0 },
    },
    e1 = (0, n(196765).v)(() => ({ isNoCharacter: !1, isCompactAssets: !1 }));
var e2 = n(858899);
function e3(e, t) {
    (0, e2.P0)({ text: e, variant: "success" === t ? "success" : "critical" });
}
var e6 = n(96494);
function e5(e, t, n) {
    return {
        id: e,
        label: t,
        action: () => {
            let e = (function () {
                let { isNoCharacter: e, isCompactAssets: t } = e1.getState();
                return { ...(e ? e0.NO_CHARACTER : {}), ...(t ? e0.COMPACT_ASSETS : {}) };
            })();
            return (0, eX.D)("qa_menu", { ...e, ...n });
        },
    };
}
let e8 = [
    e5("open", e6.default.yLZjcu),
    {
        id: "reset-all",
        label: e6.default.WM19oT,
        action: async () => {
            (await (0, eZ.sm)())
                ? e3(ez.intl.string(ez.t.i4jeWR), "success")
                : e3(ez.intl.string(ez.t.fEptJP), "failure");
        },
    },
    {
        id: "reset-progress",
        label: e6.default.HYMZmZ,
        action: () => {
            ((0, eZ.BS)(), e3(ez.intl.string(ez.t.i4jeWR), "success"));
        },
    },
    {
        id: "reset-character",
        label: e6.default.Q9JHSs,
        action: async () => {
            (await (0, eZ.Z0)())
                ? e3(ez.intl.string(ez.t.i4jeWR), "success")
                : e3(ez.intl.string(ez.t.fEptJP), "failure");
        },
    },
    e5("open-fake-data", e6.default.kPBZ5M, e0.FAKE_DATA),
    e5("open-global-stats", e6.default.UwiUbM, e0.GLOBAL_STATS),
    e5("open-zero-stats", e6.default.BYW9oX, e0.ZERO_STATS),
];
e5("open-unavailable", e6.default["58TARv"], e0.UNAVAILABLE);
let e7 = ["reset-all", "reset-progress", "reset-character"];
var e9 = n(852717),
    e4 = n(641214);
function te() {
    return (0, i.jsx)(eG.y, { type: eG.t.SPINNING_CIRCLE_SIMPLE, className: e4.u1, itemClassName: e4.$N });
}
function tt(e) {
    let { onClose: t } = e,
        n = (0, K.hF)("CheckpointUserStatusMenuItem"),
        l = (function (e) {
            switch (e) {
                case "off":
                    return [];
                case "reset_only":
                    return e8.filter((e) => e7.includes(e.id));
                case "all":
                    return e8;
            }
        })(n),
        r = (0, c.bG)([e$.A], () => e$.A.isFetching);
    return (0, i.jsx)(eq, {
        icon: r ? te : eF.ExperimentalCheckpointIcon,
        label: ez.intl.string(e9.default["8hclXY"]),
        sublabel: (0, i.jsx)("span", { className: e4.$B, children: ez.intl.string(e9.default.BFc4lY) }),
        onClick: async function () {
            (await (0, eX.D)("user_profile_account_popout"), t());
        },
        renderSubmenu:
            "off" !== n
                ? (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(eY, {
                          navId: "checkpoint-qa-submenu",
                          "aria-label": ez.intl.string(e6.default["9dS734"]),
                          className: e4.gn,
                          onClose: n,
                          children: l.map((e) =>
                              (0, i.jsx)(
                                  eB.Dr,
                                  {
                                      id: e.id,
                                      label: ez.intl.string(e.label),
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
var tn = n(176781),
    ti = n(780964),
    tl = n(766075),
    tr = n(734066),
    ta = n(419490),
    ts = n(409067),
    to = n(271597),
    tu = n(534514),
    tc = n(475358),
    td = n(866665),
    tm = n(408278),
    tf = n(625903),
    tp = n(404778),
    th = n(516521),
    tg = n(821609),
    tA = n(532624),
    tC = n(927813),
    tE = n(879631),
    tx = n(350535),
    tv = n(341923),
    t_ = n(572164),
    tb = n(953932),
    ty = n(280483),
    tT = n(890856),
    tS = n(713517),
    tI = n(609174),
    tN = n(151184);
function tj(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        r = (0, tI.Y_)(),
        a = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.preventDefault(), t?.(), (0, to.p)({ initialEditingClipId: r.id }));
            },
            [r, t],
        );
    return (0, i.jsx)(tg.$, {
        onClick: a,
        icon: ex.PencilIcon,
        variant: n,
        size: "sm",
        text: ez.intl.string(ez.t.bt75uw),
        fullWidth: !0,
    });
}
var tR = n(82716),
    tO = n(449397),
    tM = n(399053),
    tP = n(285072),
    tk = n(575172);
let tL = l.memo(function (e) {
    let { clip: t, isNew: n, onClose: r, className: s } = e,
        o = l.useRef(null),
        { isHoveringOrFocusing: u } = (0, tS.A)(o),
        c = l.useCallback(() => {
            (r?.(), (0, to.p)({ initialEditingClipId: t.id }));
        }, [t.id, r]);
    return (0, i.jsx)(tI.Cl, {
        clip: t,
        children: (0, i.jsx)(tT.s, {
            ref: o,
            "aria-label": ez.intl.string(ez.t.bt75uw),
            onClick: c,
            className: a()(tk.Z1, s),
            children: (0, i.jsxs)(tM.d, {
                isStatic: !0,
                children: [
                    n &&
                        (0, i.jsx)("div", {
                            className: tk.Ad,
                            children: (0, i.jsx)(ev.E, { type: "new", variant: "primary" }),
                        }),
                    (0, i.jsxs)(tP.h, {
                        isVisible: u,
                        className: tk.Lw,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tk.mY,
                                children: [(0, i.jsx)(tR.z, {}), (0, i.jsx)(tN.k, {})],
                            }),
                            (0, i.jsxs)("div", {
                                className: tk.E_,
                                children: [
                                    (0, i.jsx)(tj, { onBeforeEdit: r, variant: "overlay-secondary" }),
                                    (0, i.jsx)(tO.e, {}),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
var tw = n(696016),
    tD = n(753070),
    tU = n(683825),
    tG = n(48127);
function tF(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: r, setPopoutRef: a } = e;
    (0, ty.A)();
    let s = (0, c.yK)([ta.Ay], () => Object.values(ta.Ay.getClips())),
        o = (0, c.bG)([ta.Ay], () => ta.Ay.getSettings()),
        u = (0, c.bG)([ta.Ay], () => ta.Ay.getNewClipIds()),
        d = (0, tv.H)(),
        m = (0, c.bG)([ta.Ay], () => ta.Ay.getEnableAutoclipping()),
        f = (0, c.bG)([tA.Ay], () => tA.Ay.getKeybindForAction(el.hCu.SAVE_CLIP)),
        p = l.useCallback(
            (e) => {
                a?.(e);
            },
            [a],
        ),
        h = !o.showPovClipsInGallery,
        g = l.useMemo(() => {
            let e = s.filter((e) => e.type === tw.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, ts.kD)(e)));
            return (e.sort((e, t) => t.createdAt - e.createdAt), e);
        }, [s, h]),
        A = l.useMemo(() => g.slice(0, 16), [g]),
        C = g.length > 16,
        E = null != f ? tx.dI(f.shortcut, !0) : null,
        x = [
            (0, tE.$)(o.clipsLength / tC.A.Millis.SECOND),
            (0, tD.zr)(o.clipsQuality.resolution),
            ez.intl.formatToPlainString(ez.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
        ];
    return (
        d && x.push(ez.intl.string(tU.default.XWkJoi)),
        (0, i.jsxs)("div", {
            ref: p,
            className: tG.SW,
            role: "dialog",
            "aria-label": ez.intl.string(ez.t.z2jK6X),
            children: [
                (0, i.jsxs)("div", {
                    className: tG.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tG.$,
                            children: [
                                (0, i.jsx)(tu.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: ez.intl.string(ez.t.z2jK6X),
                                }),
                                null != E && (0, i.jsx)(tc.e, { className: tG.P, shortcut: E }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tG.$s,
                            children: [
                                (0, i.jsx)(td.m, {
                                    text: ez.intl.string(ez.t["3D5yo/"]),
                                    children: (0, i.jsx)(tm.K, {
                                        onClick: () => n(),
                                        icon: tf.SettingsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ez.intl.string(ez.t["3D5yo/"]),
                                    }),
                                }),
                                (0, i.jsx)(td.m, {
                                    text: ez.intl.string(tU.default["55C2MH"]),
                                    children: (0, i.jsx)(tm.K, {
                                        onClick: () => t(),
                                        icon: tn.ClipsIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ez.intl.string(tU.default["55C2MH"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: tG.ov,
                    children: [
                        x.map((e, t) =>
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        t > 0 && (0, i.jsx)("span", { className: tG.LO, children: "\u2022" }),
                                        (0, i.jsx)(eH.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            tag: "span",
                                            className: tG.c5,
                                            children: e,
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
                        d &&
                            (0, i.jsx)(eH.E, {
                                variant: "body-xs/semibold",
                                color: m ? "text-strong" : "text-feedback-critical",
                                tag: "span",
                                className: tG.wS,
                                children: m ? ez.intl.string(tU.default.lTwKmt) : ez.intl.string(tU.default.GNDqtf),
                            }),
                    ],
                }),
                (0, i.jsx)(tp.c, {}),
                A.length > 0
                    ? (0, i.jsxs)(th.Ch, {
                          className: tG.Vg,
                          fade: !0,
                          disableFocusRingScope: !0,
                          children: [
                              A.map((e) => (0, i.jsx)(tL, { clip: e, isNew: u.includes(e.id), onClose: r }, e.id)),
                              C &&
                                  (0, i.jsx)("div", {
                                      className: tG.qr,
                                      children: (0, i.jsx)(tg.$, {
                                          onClick: () => t(),
                                          text: ez.intl.string(tU.default["55C2MH"]),
                                          variant: "secondary",
                                          size: "sm",
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(tB, { keybindString: E }),
            ],
        })
    );
}
function tB(e) {
    let { keybindString: t } = e,
        n = (0, t_.E)();
    return (0, i.jsxs)("div", {
        className: tG.p$,
        children: [
            (0, i.jsx)(eH.E, {
                variant: "body-md/medium",
                color: "text-default",
                className: tG.qO,
                children: ez.intl.string(tU.default.mjfghy),
            }),
            n
                ? null != t &&
                  (0, i.jsx)(eH.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      className: tG.CZ,
                      children: ez.intl.format(tU.default.y4zC7j, {
                          protipHook: (e) =>
                              (0, i.jsx)(
                                  eH.E,
                                  {
                                      variant: "body-sm/medium",
                                      color: "text-feedback-positive",
                                      tag: "span",
                                      children: e,
                                  },
                                  "protip",
                              ),
                          keybind: (0, i.jsx)(tc.e, { shortcut: t }, "keybind"),
                      }),
                  })
                : (0, i.jsx)(tb.A, {}),
        ],
    });
}
function tV(e) {
    let { onClose: t, popoutContainerRef: n } = e,
        r = (0, tr.sw)(),
        a = !(0, c.bG)([ta.Ay], () => ta.Ay.getSettings().showPovClipsInGallery),
        s = (0, c.bG)(
            [ta.Ay],
            () => {
                let e = ta.Ay.getNewClipIds();
                return a
                    ? e.filter((e) => {
                          let t = ta.Ay.getClipById(e);
                          return null != t && !(0, ts.kD)(t);
                      }).length
                    : e.length;
            },
            [a],
        ),
        o = l.useCallback(
            (e) => {
                (t(), (0, to.p)({ initialEditingClipId: e }));
            },
            [t],
        ),
        u = l.useCallback(() => {
            (t(), (0, tl.openUserSettings)(ti.X.CLIPS_PANEL));
        }, [t]);
    return r
        ? (0, i.jsx)(eq, {
              action: "PRESS_CLIPS",
              icon: tn.ClipsIcon,
              label: ez.intl.string(ez.t.z2jK6X),
              trailing: s > 0 ? (0, i.jsx)(eI.hV, { count: s }) : null,
              onClick: () => o(),
              submenuTargetElementRef: n,
              submenuAlign: "bottom",
              renderSubmenu: (e) => (0, i.jsx)(tF, { ...e, onOpenGallery: o, onOpenSettings: u, onClose: t }),
          })
        : null;
}
var tH = n(971217),
    tW = n(577390),
    tz = n(287727),
    tK = n(31956),
    tY = n(744808),
    tq = n(645507),
    tQ = n(263775),
    t$ = n(970931),
    tX = n(315710),
    tZ = n(789645),
    tJ = n(775602),
    t0 = n(832248),
    t1 = n(462887),
    t2 = n(736653),
    t3 = n(439174),
    t6 = n(270060),
    t5 = n(105909),
    t8 = n(682901);
function t7() {
    let e = (0, t5.Xb)(),
        t = (0, t6.h)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = t8.sp.length - 1; t >= 0; t--) {
        let i = t8.VD[t8.sp[t]],
            l = new Date(e);
        if ((l.setMonth(l.getMonth() + i.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
let t9 = {
        [t8.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
        [t8.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
        [t8.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
        [t8.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
        [t8.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
        [t8.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
        [t8.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
        [t8.Ac.PREMIUM_TENURE_72_MONTH]: { dark: " #829AE8, #DDB4FF, #A2D6FF", light: " #6881D4, #956CB8, #5491A0" },
    },
    t4 = {
        [t8.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light: "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
        },
        [t8.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light: "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
        },
        [t8.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light: "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
        },
        [t8.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light: "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
        },
        [t8.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light: "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
        },
        [t8.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light: "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
        },
        [t8.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light: "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
        },
        [t8.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light: "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
        },
    };
var ne = n(570484);
let nt = l.lazy(() => Promise.all([n.e(969274), n.e(924832)]).then(n.bind(n, 748579)));
function nn() {
    let e = (0, c.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        t = (0, t0.A)((e) => e.shouldRenderTenureLevelUp),
        n = (function () {
            let e = t7(),
                t = (0, t1.M)((0, t2.Ay)());
            if (null == e) return null;
            let n = t9[e],
                i = t4[e],
                l = {
                    currentBadge: (0, t3.e0)(e),
                    currentBadgeTextGradient: t ? n?.dark : n?.light,
                    levelUpVideoSrc: t ? i?.dark : i?.light,
                },
                r = t8.sp.indexOf(e);
            if (r > 0) {
                let e = t8.sp[r - 1],
                    n = t9[e];
                ((l.prevBadge = (0, t3.e0)(e)), (l.prevBadgeTextGradient = t ? n?.dark : n?.light));
            }
            return l;
        })(),
        [r, a] = l.useState(null);
    return (null != n && null == r && a(n), e || !t || null == r) ? null : (0, i.jsx)(ni, { levelUpData: r });
}
function ni(e) {
    let { levelUpData: t } = e,
        n = l.useRef(null),
        r = l.useCallback(() => {
            t0.A.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (0, i.jsx)(tX.Ok, {
        containerRef: n,
        children: (0, i.jsxs)("div", {
            className: ne.i,
            children: [
                (0, i.jsx)("div", {
                    className: ne.b,
                    children: (0, i.jsx)(td.m, {
                        text: ez.intl.string(ez.t.cpT0Cq),
                        children: (0, i.jsx)(tm.K, {
                            icon: tZ.XSmallIcon,
                            variant: "secondary",
                            size: "sm",
                            onClick: r,
                            "aria-label": ez.intl.string(ez.t.cpT0Cq),
                        }),
                    }),
                }),
                (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(nt, { levelUpData: t }) }),
            ],
        }),
    });
}
var nl = n(397562),
    nr = n(206835),
    na = n(183555),
    ns = n(527212),
    no = n(100663),
    nu = n(718019),
    nc = n(56810),
    nd = n(915614),
    nm = n(689233),
    nf = n(559506),
    np = n(646986),
    nh = n(494213),
    ng = n(946356),
    nA = n(465829),
    nC = n(624479),
    nE = n(206845),
    nx = n(957565),
    nv = n(427262),
    n_ = n(62119);
function nb(e) {
    let { user: t, isVisible: n } = e,
        { trackUserProfileAction: l } = (0, na.NJ)();
    return nx.p5
        ? (0, i.jsx)(nE.A, {
              text: ez.intl.string(ez.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: nv.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
              onCopy: () => l({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, i.jsx)(g.D, {
                      ...e,
                      className: a()(n_.c, { [n_.R]: n }),
                      "aria-label": ez.intl.string(ez.t.y5MwJy),
                      children: (0, i.jsx)(nC.CopyIcon, { size: "xs", color: "currentColor" }),
                  }),
          })
        : null;
}
var ny = n(804329),
    nT = n(442228),
    nS = n(253932),
    nI = n(362862),
    nN = n(621466),
    nj = n(318254),
    nR = n(863610),
    nO = n(421773),
    nM = n(318346),
    nP = n(923138),
    nk = n(309954),
    nL = n(673125),
    nw = n(489422),
    nD = n(769001);
function nU(e) {
    let { popoutContainerRef: t, scrollerRef: n, shouldScrollIntoView: r, onCloseAccountPopout: s } = e;
    (0, nP.I)({ enabled: !0 });
    let { balance: o } = (0, nk.W)(),
        u = (0, c.bG)([nL.Ay], () =>
            nL.Ay.userOpenedWalletViaProfileDCF ? nL.Y0.NEW_ACHIEVEMENT : nL.Ay.clientUnreadNotificationType,
        );
    l.useEffect(
        () => () => {
            nL.Ay.setUserOpenedWalletViaProfileDCF(!1);
        },
        [],
    );
    let { isHovered: d, onMouseEnter: m, onMouseLeave: f, setIsHovered: p, cancelTimers: A } = (0, nO.A)(0, 500),
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
                let t = (0, nN.vq)(e.target, Element) ? e.target : null,
                    n = t?.closest(`.${eK.j$}`);
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
                (0, nM.Y)({
                    pageType: P.A.USER_PROFILE_ACCOUNT_POPOUT,
                    sectionType: P.A.ORB_WALLET,
                    ctaObject: P.A.ORB_WALLET_OPEN_FROM_PROFILE,
                })),
                m());
        }, [m]),
        S = (0, eW.rE)({ action: "PRESS_ORBS", onClick: T });
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
                    ? ez.intl.format(ez.t["8xDISf"], { balance: String(o) })
                    : (0, i.jsx)(nR.n, { dotRadius: 3.5, themed: !0, className: nD.K }),
            [o],
        ),
        N = l.useMemo(
            () =>
                u === nL.Y0.NEW_ACHIEVEMENT
                    ? (0, i.jsx)(ev.E, { type: "new", variant: "primary" })
                    : u === nL.Y0.UNCLAIMED_ACHIEVEMENT
                      ? (0, i.jsx)(ev.E, { type: { text: ez.intl.string(ez.t.O13yhz) }, variant: "primary" })
                      : null,
            [u],
        ),
        j = l.useCallback(() => {
            (A(), p(!1), s());
        }, [A, p, s]),
        R = l.useCallback(
            (e) => {
                let { relatedTarget: t } = e;
                (0, nN.vq)(t, Node) && null != x.current && x.current.contains(t) && A();
            },
            [A],
        );
    return (0, i.jsx)("li", {
        ref: x,
        className: eK.j$,
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
                    children: (0, i.jsx)(nw.vG, { onCloseWallet: j, returnRef: v, isProfilePopout: !0 }),
                }),
            shouldShow: d,
            onRequestClose: C,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: eK.jG,
                    children: (0, i.jsxs)(g.D, {
                        innerRef: v,
                        className: eK.ef,
                        ...e,
                        onClick: S,
                        children: [
                            (0, i.jsx)("div", {
                                className: eK.iA,
                                children: (0, i.jsx)(nj.OrbsIcon, { color: "currentColor", size: "xs" }),
                            }),
                            (0, i.jsx)("div", {
                                className: eK.$H,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(eH.E, {
                                        color: "currentColor",
                                        variant: "body-sm/medium",
                                        className: eK.W1,
                                        children: I,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(eK.ap, nD._),
                                children: [
                                    N,
                                    (0, i.jsx)(eV.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
var nG = n(290863),
    nF = n(351906),
    nB = n(562153),
    nV = n(448645),
    nH = n(628284),
    nW = n(695366),
    nz = n(413599),
    nK = n(619019),
    nY = n(129230),
    nq = n(429707),
    nQ = n(274303),
    n$ = n(994125),
    nX = n(347853),
    nZ = n(573879),
    nJ = n(559117),
    n0 = n(43105),
    n1 = n(661439),
    n2 = n(385113),
    n3 = n(352003),
    n6 = n(429913),
    n5 = n(334074),
    n8 = n(633075),
    n7 = n(667049),
    n9 = n(46653),
    n4 = n(90165),
    ie = n(403362),
    it = n(49999),
    ii = n(518477);
function il(e) {
    let { targetElementRef: t, onClose: r } = e,
        [a, s] = l.useState(!1),
        o = (0, c.bG)([n9.default], () => n9.default.getId()),
        { eligibleApplications: u, markAsDismissed: m } = (function () {
            let e = (0, c.yK)([n2.A], () => n2.A.getFeaturedApplicationIds());
            ((0, n3.A)(e),
                l.useEffect(() => {
                    (0, n1.X)();
                }, []));
            let t = (0, c.bG)([n9.default], () => n9.default.getId()),
                n = (0, n7.A)(t),
                i = l.useMemo(() => n.filter((e) => e instanceof n8.R), [n]),
                r = (0, n6.A)(e),
                a = l.useMemo(() => r.filter(ie.Vq), [r]),
                s = (0, c.cf)([n4.A], () => {
                    let t = {};
                    for (let n of e) {
                        let e = a.find((e) => e.id === n)?.getCanonicalGameId();
                        null != e && (t[n] = n4.A.getLastPlayedDateTime(e));
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
                { eligibleToShow: u, markAsDismissed: m } = (0, n5.hj)({
                    applications: o,
                    dismissibleContent: d.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
                    cooldownConfig: n5.SH,
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
        : (0, i.jsx)(n0.A, {
              targetElementRef: t,
              position: "right",
              gradientColor: "blue",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/c7446f4156b0cb7fde3b34dd50bb48a7f4699c72a5b2e42ba16091f8c8a93a13.svg",
              },
              title: ez.intl.string(ez.t.HMWL9c),
              body: ez.intl.string(ez.t["9hfy3A"]),
              onRequestClose: () =>
                  m(
                      u.map((e) => e.id),
                      it.i.USER_DISMISS,
                  ),
              actions: [
                  {
                      text: ez.intl.string(ez.t.VSLDly),
                      loading: a,
                      onClick: function () {
                          (s(!0),
                              (0, no.openUserProfileModal)({ userId: o, tabSection: ii.RP.WIDGETS })
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
                                              it.i.TAKE_ACTION,
                                          ),
                                          r());
                                  })
                                  .finally(() => s(!1)));
                      },
                  },
              ],
          });
}
var ir = n(894768),
    ia = n(818348),
    is = n(709516);
function io() {
    let e = (0, c.bG)([ir.A], () => ir.A.getStatus()),
        t = (0, nv.MU)(e) ?? "",
        n = e === ia.cl.INVISIBLE || e === ia.cl.OFFLINE;
    return (0, i.jsxs)("div", {
        className: is.k,
        children: [
            (0, i.jsxs)(A.A, { tag: "div", children: [ez.intl.string(ez.t.AHoLf4), ":"] }),
            t,
            t.length > 0 &&
                n &&
                (0, i.jsx)(td.m, {
                    text: ez.intl.string(ez.t.L99HQm),
                    children: (0, i.jsx)(nW.CircleErrorIcon, {
                        size: "xs",
                        color: eg.A.colors.STATUS_WARNING,
                        "aria-label": ez.intl.string(ez.t.L99HQm),
                    }),
                }),
        ],
    });
}
var iu = n(146901),
    ic = n(827827);
let id = [
        { duration: 15 * tC.A.Millis.MINUTE, label: () => ez.intl.string(ez.t["8ot6gv"]) },
        { duration: tC.A.Millis.HOUR, label: () => ez.intl.string(ez.t.UMWBZr) },
        { duration: 8 * tC.A.Millis.HOUR, label: () => ez.intl.string(ez.t.EpAXPC) },
        { duration: tC.A.Millis.DAY, label: () => ez.intl.string(ez.t["755t4q"]) },
        { duration: 3 * tC.A.Millis.DAY, label: () => ez.intl.string(ez.t["f3/1ch"]) },
        { duration: void 0, label: () => ez.intl.string(ez.t["46dqJY"]) },
    ],
    im = "forever";
function ip(e) {
    let { status: t, currentStatus: n, description: l } = e,
        r = t !== el.clD.ONLINE,
        a = (0, i.jsx)(i.Fragment, {
            children: id.map((e) => {
                let { duration: l, label: r } = e;
                return (0, i.jsx)(
                    eB.Dr,
                    {
                        id: `${t}-${l}`,
                        label: r(),
                        action: () => (0, ic.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? im,
                );
            }),
        });
    return (0, i.jsx)(eB.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: r,
        label: (0, nv.MU)(t),
        subtext: l,
        iconLeft: () => (0, i.jsx)(e_.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, ic.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: r ? a : void 0,
    });
}
function ih(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, iu._)(e);
    return "today" === t
        ? ez.intl.formatToPlainString(ez.t.ZxxHIO, { timeString: i })
        : ez.intl.formatToPlainString(ez.t["9OFjSe"], { dateString: n, timeString: i });
}
var ig = n(996988),
    iA = n(207634),
    iC = n(47453);
function iE(e) {
    let { currentUser: t, onClose: n, setPopoutRef: r, highlightBadge: s, openedAt: o, className: u } = e,
        m = __OVERLAY__,
        h = (0, ns.Ay)(t.id, void 0),
        { analyticsLocations: g } = (0, k.Ay)(P.A.USER_PROFILE_ACCOUNT_POPOUT),
        C = (0, na.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, nl.A)(g, h, ii.R7.ACCOUNT_POPOUT);
    let { ref: x } = (0, eR.Ay)(),
        { isHoveringOrFocusing: v, isHovering: _ } = (0, tS.A)(x);
    (l.useEffect(() => {
        r?.(x.current);
    }, [x, r]),
        l.useEffect(
            () => (
                t0.A.setState({ isOpen: !0 }),
                () => t0.A.setState({ isOpen: !1, shouldRenderTenureLevelUp: !1, shouldScrollToOrbsMenuItem: !1 })
            ),
            [],
        ));
    let b = (0, c.bG)([nG.A], () => nG.A.getStatus(t.id)),
        y = ih(nS.CY.useSetting()),
        T = (0, c.bG)([nF.A], () => nF.A.hidePersonalInformation),
        S = (0, t$.kB)(),
        I = nS.Q_.useSetting(),
        N = (function (e) {
            let t = nS.CY.useSetting(),
                n = (0, t$.kB)(),
                l = nS.Jr.useSetting();
            function r(i) {
                let l = ih(t);
                if (e === i && null != l) return l;
                switch (i) {
                    case el.clD.DND:
                        return n ? ez.intl.string(ez.t.day5A6) : ez.intl.string(ez.t["tq/fMK"]);
                    case el.clD.INVISIBLE:
                        return ez.intl.string(ez.t.zPc6Mc);
                    default:
                        return;
                }
            }
            let a = (0, i.jsx)(i.Fragment, {
                    children: id.map((t) => {
                        let { duration: n, label: l } = t;
                        return (0, i.jsx)(
                            eB.Dr,
                            {
                                id: `${e}-${n}`,
                                label: l(),
                                action: () => {
                                    (0, t$.ES)(!0, n);
                                },
                                dontCloseOnAction: !0,
                            },
                            n ?? im,
                        );
                    }),
                }),
                s = ip({ status: el.clD.ONLINE, currentStatus: e }),
                o = ip({ status: el.clD.IDLE, currentStatus: e, description: r(el.clD.IDLE) }),
                u = ip({ status: el.clD.DND, currentStatus: e, description: r(el.clD.DND) }),
                c = ip({ status: el.clD.INVISIBLE, currentStatus: e, description: r(el.clD.INVISIBLE) });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    s,
                    (0, i.jsx)(eB.bX, {}, "menu-separator-statuses"),
                    o,
                    u,
                    c,
                    n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(eB.bX, {}, "menu-separator-statuses"),
                                  (0, i.jsx)(
                                      eB.Dr,
                                      {
                                          id: "quiet-mode",
                                          "aria-label": "focus mode",
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: ez.intl.string(ez.t.gJRnwK),
                                          iconLeft: eb.BellSlashIcon,
                                          leadingAccessory: { type: "icon", icon: eb.BellSlashIcon },
                                          badge: { text: ez.intl.string(ez.t.ApAu9f) },
                                          subtext:
                                              null != l && "0" !== l
                                                  ? ez.intl.format(ez.t.BWD8fs, {
                                                        endTime: new Date(Number(l)).toLocaleString(
                                                            ez.intl.currentLocale,
                                                            {
                                                                month: "numeric",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "2-digit",
                                                            },
                                                        ),
                                                    })
                                                  : ez.intl.string(ez.t["Br1q+x"]),
                                          action: () => {
                                              (0, t$.ES)(!n);
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
            let t = (0, c.bG)([eM.default], () => eM.default.getCurrentUser()),
                n = (0, c.bG)([nF.A], () => nF.A.hidePersonalInformation),
                l = (0, c.bG)([nz.A], () => (0, t1.M)(nz.A.theme)),
                { multiAccountUsers: r } = (0, n$.K)(),
                a = r.map((r) => {
                    let a = new nK.A(r),
                        s = a.id === t?.id,
                        o = r.tokenStatus === nQ.U.INVALID,
                        u = n ? null : `#${a.discriminator}`;
                    return (0, i.jsx)(
                        eB.Dr,
                        {
                            id: a.id,
                            focusedClassName: nJ.in,
                            void_label: (e) => {
                                let { isFocused: t } = e;
                                return (0, i.jsxs)("div", {
                                    className: nJ.ci,
                                    children: [
                                        (0, i.jsx)(f.eu, {
                                            src: a.getAvatarURL(void 0, 40),
                                            size: p._3.SIZE_24,
                                            "aria-label": r.username,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: nJ.DD,
                                            children: [
                                                (0, i.jsx)(eH.E, {
                                                    className: nJ.gE,
                                                    variant: "body-sm/normal",
                                                    children: nv.Ay.getUserTag(a, {
                                                        mode: "username",
                                                        identifiable: n ? "never" : "always",
                                                    }),
                                                }),
                                                !a.hasUniqueUsername() &&
                                                    (0, i.jsx)(eH.E, {
                                                        className: nJ.df,
                                                        variant: "body-sm/normal",
                                                        children: u,
                                                    }),
                                            ],
                                        }),
                                        s &&
                                            (0, i.jsx)(nH.CircleCheckIcon, {
                                                size: "sm",
                                                color: t
                                                    ? eg.A.unsafe_rawColors.WHITE.css
                                                    : eg.A.unsafe_rawColors.BRAND_500.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? eg.A.unsafe_rawColors.BRAND_500.css
                                                        : eg.A.unsafe_rawColors.WHITE.css,
                                                className: nJ.s0,
                                            }),
                                        o &&
                                            (0, i.jsx)(nW.CircleErrorIcon, {
                                                color: eg.A.unsafe_rawColors.RED_400.css,
                                                secondaryColor:
                                                    (t && l) || (t && !l)
                                                        ? eg.A.unsafe_rawColors.BRAND_500.css
                                                        : eg.A.unsafe_rawColors.WHITE.css,
                                                size: "xs",
                                                className: nJ.s0,
                                            }),
                                    ],
                                });
                            },
                            action: () => {
                                if ((e?.(), o)) (0, nX.A)();
                                else {
                                    var n;
                                    (n = a.id) !== t?.id &&
                                        (nY.default.track(el.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: el.JJy.USER_PROFILE },
                                        }),
                                        nq.Mx(n, void 0, nZ.WX.MULTI_ACCOUNT_MENU));
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
                            (0, i.jsx)(eB.bX, {}),
                            (0, i.jsx)(eB.Dr, {
                                id: "manage-accounts",
                                label: ez.intl.string(ez.t.WbFpq4),
                                action: () => {
                                    (e?.(), (0, nX.A)());
                                },
                            }),
                        ],
                    }),
                ),
                a
            );
        })(n),
        R = (0, nr.A)({ analyticsLocations: g }),
        O = (0, nV.TW)(t),
        M = (0, L.d)({ location: "UserProfileAccountPopout" }),
        w = (function (e) {
            let { location: t, enabled: n } = e,
                i = (0, c.bG)([eM.default], () => eM.default.getCurrentUser()?.id);
            l.useEffect(() => {
                n && null != i && !eL.Ay.hasCatalogFor(i) && (0, eP.RS)(i);
            }, [i, n]);
            let r = (0, c.bG)(
                    [eL.Ay],
                    () => (n && null != i && eL.Ay.hasCatalogFor(i) ? eL.Ay.getUnreadBadges(i).length : 0),
                    [i, n],
                ),
                a = (0, c.bG)(
                    [eL.Ay, ek.A],
                    () => {
                        if (0 === r) return 0;
                        let e = ek.A.getSeenBadgeIndicators();
                        return eL.Ay.getBadges(i).filter(
                            (t) =>
                                !0 !== t.has_updates &&
                                (t.owned || t.is_earnable) &&
                                (0, eD.Ce)(t.badge_id) &&
                                !e.has(t.badge_id),
                        ).length;
                    },
                    [i, r],
                );
            return (0, ew.e)({ location: t, hasUnread: r > 0 }) ? r + a : 0;
        })({ location: "UserProfileAccountPopout", enabled: M }),
        D = l.useRef(null),
        U = l.useRef(null),
        G = l.useRef(null),
        F = (0, tz.A)(h?.profileFrame?.skuId),
        B = (0, tW.A)(h?.profileFrame?.skuId);
    (0, tK.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: C, analyticsLocations: g });
    let V = l.useRef((0, t0.A)((e) => e.shouldRenderTenureLevelUp)),
        H = l.useMemo(() => (0, tq.A)(), []),
        [W, z] = l.useState(() => t0.A.getState().shouldRenderTenureLevelUp);
    function Y(e) {
        (n?.(), (0, no.openUserProfileModal)({ customStatusPrompt: H, sourceAnalyticsLocations: g, ...C, ...e }));
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
        X = (0, nI.Hy)({ location: "UserProfileAccountPopout" }),
        Z = (0, K.FX)("UserProfileAccountPopout"),
        J = (0, t0.A)((e) => e.shouldScrollToOrbsMenuItem),
        [ee, et] = (0, tQ.kn)([d.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE], {
            groupName: void 0,
            bypassAutoDismiss: !0,
        }),
        en = l.useId();
    return (0, i.jsx)(k.f5, {
        value: g,
        children: (0, i.jsx)(na.of, {
            value: C,
            openedAt: o,
            fetchStartedAt: h?.fetchStartedAt,
            fetchEndedAt: h?.fetchEndedAt,
            isLoaded: h?.isLoaded,
            children: (0, i.jsxs)(eA.l, {
                ref: x,
                "aria-labelledby": en,
                className: a()(eK.jC, u),
                "data-layer": "base",
                children: [
                    (0, i.jsx)(A.A, {
                        children: (0, i.jsx)(eC.H, { id: en, children: ez.intl.string(ez.t["5fWB8U"]) }),
                    }),
                    (0, i.jsxs)(eC.F, {
                        children: [
                            (0, i.jsxs)(ng.A, {
                                className: eK.BK,
                                user: t,
                                displayProfile: h,
                                themeType: ig.d.POPOUT,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: iC.wx,
                                        children: [
                                            (0, i.jsx)(nd.A, { user: t, displayProfile: h, themeType: ig.d.POPOUT }),
                                            (0, i.jsx)(nu.A, {
                                                user: t,
                                                displayProfile: h,
                                                avatarSize: iA.T[ig.d.POPOUT].avatarSize,
                                                onOpenProfile: m ? void 0 : Y,
                                            }),
                                            (0, i.jsx)(ny.A, {
                                                ref: D,
                                                user: t,
                                                themeType: ig.d.POPOUT,
                                                onCloseProfile: n,
                                                prompt: H,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(eE.Ip, {
                                        ref: G,
                                        className: eK.rf,
                                        style: { pointerEvents: W ? "none" : void 0 },
                                        children: [
                                            (0, i.jsx)(nf.A, { userId: t.id }),
                                            (0, i.jsx)(nA.Ay, {
                                                className: eK.eF,
                                                user: t,
                                                displayName: nB.Ay.getName(void 0, null, t),
                                                onClickName: m ? void 0 : Y,
                                                displayNameTrailing: (0, i.jsx)(nb, { user: t, isVisible: v }),
                                                pronouns: h?.pronouns,
                                                trailing: (0, i.jsx)(nc.A, {
                                                    displayProfile: h,
                                                    themeType: ig.d.POPOUT,
                                                    onClose: n,
                                                    shouldOpenBadgeTooltip: null != s ? (e) => e === s : void 0,
                                                    shouldGlowTenureBadge: V.current,
                                                }),
                                            }),
                                            (0, i.jsx)(nm.A, { isPremiumUser: O, onInteraction: n }),
                                            (0, i.jsx)(nT.A, {
                                                userId: t.id,
                                                userBio: h?.bio,
                                                hidePersonalInformation: T,
                                                onClose: n,
                                            }),
                                            q &&
                                                (0, i.jsx)(nh.A, {
                                                    user: t,
                                                    widgets: h?.widgets,
                                                    onOpenUserProfileModal: Y,
                                                }),
                                            (0, i.jsx)(np.A, {
                                                user: t,
                                                currentUser: t,
                                                onOpenUserProfileModal: Y,
                                                onClose: n,
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: eK.T_,
                                                children: [
                                                    Z &&
                                                        (0, i.jsx)(ng.A.Overlay, {
                                                            className: eK.g0,
                                                            children: (0, i.jsx)(eQ, {
                                                                children: (0, i.jsx)(tt, { onClose: n }),
                                                            }),
                                                        }),
                                                    (0, i.jsx)(ng.A.Overlay, {
                                                        className: eK.g0,
                                                        children: (0, i.jsxs)(eQ, {
                                                            children: [
                                                                (0, i.jsx)(eq, {
                                                                    action: "EDIT_PROFILE",
                                                                    label: ez.intl.string(ez.t.s5vZlQ),
                                                                    icon: ex.PencilIcon,
                                                                    trailing:
                                                                        null != ee
                                                                            ? (0, i.jsx)("div", {
                                                                                  className: eK.IO,
                                                                                  "aria-hidden": !0,
                                                                                  children: (0, i.jsx)(ev.E, {
                                                                                      type: "new",
                                                                                      variant: "primary",
                                                                                  }),
                                                                              })
                                                                            : null,
                                                                    onClick: () => {
                                                                        (null != ee && et(it.i.TAKE_ACTION), $());
                                                                    },
                                                                    ref: U,
                                                                }),
                                                                (0, i.jsx)(eq, {
                                                                    action: "PRESS_SET_STATUS",
                                                                    label: (0, i.jsx)(io, {}),
                                                                    sublabel: null != y && y,
                                                                    icon: () =>
                                                                        (0, i.jsx)(e_.nW, { status: b, size: 12 }),
                                                                    trailing:
                                                                        (S || b === el.clD.DND) &&
                                                                        (0, i.jsx)(eb.BellSlashIcon, { size: "xxs" }),
                                                                    renderSubmenu: eh.Fr
                                                                        ? void 0
                                                                        : (e) => {
                                                                              let { closePopout: t } = e;
                                                                              return (0, i.jsx)(eY, {
                                                                                  navId: "set-status-submenu",
                                                                                  className: eK.hQ,
                                                                                  "aria-label": ez.intl.string(
                                                                                      ez.t.E13trI,
                                                                                  ),
                                                                                  onClose: t,
                                                                                  children: N,
                                                                              });
                                                                          },
                                                                    onClick: eh.Fr
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
                                                                                                      ey.d,
                                                                                                      {
                                                                                                          onClose: t,
                                                                                                          ...n,
                                                                                                          size: "sm",
                                                                                                          "aria-label":
                                                                                                              ez.intl.string(
                                                                                                                  ez.t[
                                                                                                                      "3Uj+2p"
                                                                                                                  ],
                                                                                                              ),
                                                                                                          children: (0,
                                                                                                          i.jsx)(eT.W, {
                                                                                                              "data-menu-migrated":
                                                                                                                  !0,
                                                                                                              navId: "set-status-submenu-mobile-web",
                                                                                                              variant:
                                                                                                                  "fixed",
                                                                                                              "aria-label":
                                                                                                                  ez.intl.string(
                                                                                                                      ez
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
                                                                    (0, i.jsx)(eq, {
                                                                        action: "PRESS_VIEW_BADGES",
                                                                        icon: eS.RibbonIcon,
                                                                        label: ez.intl.string(ez.t.l6w3Vj),
                                                                        trailing:
                                                                            w > 0
                                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                                      children: [
                                                                                          (0, i.jsx)(eI.hV, {
                                                                                              count: w,
                                                                                              color: eg.A.colors
                                                                                                  .BADGE_PRIMARY_BACKGROUND
                                                                                                  .css,
                                                                                              "aria-hidden": !0,
                                                                                          }),
                                                                                          (0, i.jsx)(A.A, {
                                                                                              children:
                                                                                                  ez.intl.formatToPlainString(
                                                                                                      ez.t.v9Dvub,
                                                                                                      { count: w },
                                                                                                  ),
                                                                                          }),
                                                                                      ],
                                                                                  })
                                                                                : null,
                                                                        onClick: () => {
                                                                            ((0, eO.default)({
                                                                                actionName: "badge_directory_opened",
                                                                                displayedUserId: t.id,
                                                                                isSociallyNavigated: !1,
                                                                                hasUnreadIndicator: w > 0,
                                                                                source: "account_popout",
                                                                            }),
                                                                                n(),
                                                                                (0, eU.openBadgeDirectoryModal)({
                                                                                    viewingCurrentUserBadges: !0,
                                                                                }));
                                                                        },
                                                                    }),
                                                                (0, i.jsx)(tV, { onClose: n, popoutContainerRef: x }),
                                                                X &&
                                                                    (0, i.jsx)(nU, {
                                                                        popoutContainerRef: x,
                                                                        scrollerRef: G,
                                                                        shouldScrollIntoView: J,
                                                                        onCloseAccountPopout: n,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, i.jsx)(ng.A.Overlay, {
                                                        className: eK.g0,
                                                        children: (0, i.jsxs)(eQ, {
                                                            children: [
                                                                (0, i.jsx)(eq, {
                                                                    action: "PRESS_SWITCH_ACCOUNTS",
                                                                    icon: eN.UserCircleIcon,
                                                                    label: ez.intl.string(ez.t.oMNyYN),
                                                                    onClick: () => {
                                                                        (n(), (0, nX.A)());
                                                                    },
                                                                    renderSubmenu: (e) => {
                                                                        let { closePopout: t } = e;
                                                                        return (0, i.jsx)(eY, {
                                                                            navId: "switch-accounts-submenu",
                                                                            "aria-label": ez.intl.string(ez.t.wFhVqL),
                                                                            onClose: t,
                                                                            children: j,
                                                                        });
                                                                    },
                                                                }),
                                                                !__OVERLAY__ &&
                                                                    nx.p5 &&
                                                                    I &&
                                                                    (0, i.jsx)(eq, {
                                                                        action: "COPY_USER_ID",
                                                                        icon: ej.IdIcon,
                                                                        label: ez.intl.string(ez.t["/AXYnE"]),
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
                                        (0, i.jsx)(tH.A, { skuId: h.profileEffect.skuId, isHovering: _ }),
                                    null != F && (0, i.jsx)(tY.A, { frame: F, fadeIn: B }),
                                ],
                            }),
                            (0, i.jsx)(il, { targetElementRef: U, onClose: n }),
                            (0, i.jsx)(nn, {}),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ix = n(201805),
    iv = n(209932),
    i_ = n(655116),
    ib = n(365958),
    iy = n(342296),
    iT = n(852712),
    iS = n(389960),
    iI = n(173660),
    iN = n(616356),
    ij = n(734057),
    iR = n(629016),
    iO = n(186111),
    iM = n(988468),
    iP = n(495867),
    ik = n(967198),
    iL = n(485296),
    iw = n(977997),
    iD = n(486020),
    iU = n(188567),
    iG = n(536194),
    iF = n(253400),
    iB = n(994314),
    iV = n(485599),
    iH = n(116833);
function iW(e) {
    let t = "progress" === e.variant,
        n = t
            ? {
                  title: ez.intl.string(ez.t.uwDBSq),
                  body: ez.intl.formatToPlainString(ez.t.Mk5nzZ, { count: e.newBadgeCount }),
              }
            : { title: ez.intl.string(ez.t["5GD53o"]), body: ez.intl.string(ez.t["2Rb7tE"]) };
    return (0, i.jsx)(n0.A, {
        targetElementRef: e.targetElementRef,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        size: "lg",
        graphic: {
            type: "dynamic",
            component: iH.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
            props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
        },
        title: n.title,
        body: n.body,
        actions: [{ variant: "primary", text: ez.intl.string(ez.t.pHo9tZ), onClick: e.onPrimaryAction }],
        onRequestClose: e.onRequestClose,
    });
}
function iz(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: l } = e;
    return (0, i.jsx)(iW, {
        ...t,
        onPrimaryAction: () => {
            (l(it.i.TAKE_ACTION), (0, eO.trackOwnBadgeDirectoryOpened)("nux"), (0, eU.openBadgeDirectoryModal)());
        },
        onRequestClose: () => l(it.i.USER_DISMISS),
        targetElementRef: n,
    });
}
function iK(e) {
    let { targetElementRef: t, markAsDismissed: n } = e;
    return (0, i.jsx)(n0.A, {
        targetElementRef: t,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        title: ez.intl.string(e9.default.gY1STb),
        body: ez.intl.string(e9.default["Vlu+rH"]),
        onRequestClose: () => n(it.i.USER_DISMISS),
        actions: [
            {
                text: ez.intl.string(e9.default.e3fPDg),
                onClick: async () => {
                    (await (0, eX.D)("relaunch_coachmark")) && n(it.i.TAKE_ACTION);
                },
            },
        ],
    });
}
var iY = n(206248);
function iq(e) {
    let { targetElementRef: t, markAsDismissed: n, onCheckItOut: l, position: r, shouldShow: a = !0, children: s } = e,
        o = (0, tr.sw)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s,
            a && o
                ? (0, i.jsx)(iY.H, {
                      targetElementRef: t,
                      title: ez.intl.string(tU.default.Qn21R6),
                      body: ez.intl.string(tU.default.eFDg0b),
                      badge: "beta",
                      assetUrl:
                          "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
                      disableMediaViewer: !0,
                      position: r,
                      caretConfig: { align: "center" },
                      action: {
                          text: ez.intl.string(ez.t.RzWDqY),
                          onClick: function () {
                              (n(it.i.TAKE_ACTION), l());
                          },
                      },
                      onRequestClose: function () {
                          n(it.i.USER_DISMISS);
                      },
                  })
                : null,
        ],
    });
}
var iQ = n(379848),
    i$ = n(626584),
    iX = n(757036),
    iZ = n(531685),
    iJ = n(259065),
    i0 = n(842671),
    i1 = n(78294);
let i2 = new i$.A("DisplayNameStylesFlywheelCoachmark");
function i3(e) {
    let { markAsDismissed: t, targetElementRef: n, children: r } = e,
        { analyticsLocations: a } = (0, k.Ay)(),
        s = (0, l.useRef)(null),
        o = (0, c.bG)([iZ.A], () => iZ.A.isFocused()),
        u = (0, iX.L)(t8.PremiumTypes.TIER_2),
        d = (0, l.useCallback)(() => {
            t(it.i.TAKE_ACTION);
            let e = eM.default.getCurrentUser();
            null != e &&
                (0, no.openUserProfileModal)({
                    userId: e.id,
                    sourceAnalyticsLocations: a,
                    onModalOpen: () => {
                        (0, iJ.L)({ analyticsLocations: a, stackingBehavior: "stack" });
                    },
                });
        }, [t, a]),
        m = (0, l.useCallback)(() => {
            t(it.i.USER_DISMISS);
        }, [t]);
    (0, l.useEffect)(() => {
        o && s.current?.paused ? s.current?.play().catch(i2.error) : o || s.current?.pause();
    }, [o]);
    let f = u ? [ez.intl.string(i0.default.TyUdka)] : [ez.intl.string(i0.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r,
            (0, i.jsx)(n0.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: m,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: { type: "video", ref: s, src: i1.A, aspectRatio: "21/9", loop: !0 },
                size: "lg",
                title: ez.intl.string(i0.default.cYwrp8),
                body: f,
                actions: [{ text: ez.intl.string(ez.t["4P5I8V"]), variant: "primary", onClick: d }],
            }),
        ],
    });
}
var i6 = n(45780),
    i5 = n(696451),
    i8 = n(71393),
    i7 = n(685073),
    i9 = n(73153);
let i4 = { lastSeenInfos: {} },
    le = i4;
class lt extends c.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        le = e ?? i4;
    }
    getState() {
        return le;
    }
    getGuildLastSeenInfo(e) {
        return le.lastSeenInfos[e] ?? null;
    }
}
let ln = new lt(i9.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        le.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        le = i4;
    },
});
var li = n(514661);
let ll = new i$.A("GuildTagAvailableCoachmark");
function lr(e) {
    let t = (0, c.bG)([i8.A], () => i8.A.getGuild(e.guildId));
    function n(n) {
        (t?.profile?.tag != null &&
            i9.h.dispatch({
                type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                guildId: t.id,
                lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n));
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, li.A)(t?.id ?? null, () => n(it.i.TAKE_ACTION));
    if (null == t || !(0, i7.q0)(t))
        return (ll.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: ez.intl.string(ez.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: ez.intl.string(ez.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(n0.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iH.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ez.intl.formatToPlainString(ez.t["m/Tc3n"], { guildName: t.name }),
                body: ez.intl.string(ez.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(it.i.USER_DISMISS),
            }),
        ],
    });
}
function la(e) {
    let t = (0, c.bG)([i8.A], () => i8.A.getGuild(e.guildId));
    function n(t) {
        e.onDismiss?.(t);
    }
    let { isAdopting: l, onAdoptTag: r, onEditProfile: a } = (0, li.A)(t?.id ?? null, () => n(it.i.TAKE_ACTION));
    if (null == t || !(0, i7.q0)(t))
        return (ll.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children);
    let s = [
        { text: ez.intl.string(ez.t.jwEaiX), loading: l, onClick: r, variant: "primary" },
        { text: ez.intl.string(ez.t.s5vZlQ), onClick: a, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            e.children,
            (0, i.jsx)(n0.A, {
                targetElementRef: e.targetElementRef,
                shouldShow: !0,
                position: "top",
                graphic: {
                    type: "dynamic",
                    component: iH.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                    props: { guildId: t.id, guildProfile: t.profile },
                },
                title: ez.intl.formatToPlainString(ez.t.VFqnyU, { guildName: t.name }),
                body: ez.intl.string(ez.t.DrAXIr),
                actions: s,
                size: "md",
                onRequestClose: () => n(it.i.USER_DISMISS),
            }),
        ],
    });
}
var ls = n(843010),
    lo = n(764231),
    lu = n(208223);
function lc(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = t7(),
        r = (0, c.bG)([tJ.Ay], () => tJ.Ay.useReducedMotion),
        a = (0, t0.A)((e) => e.isOpen),
        s = (0, ls.G)(),
        o = !r && null != l && !a && !s,
        u = (0, ew.e)({ location: "TenureLevelUpPopover", hasUnread: o });
    return !o || u
        ? null
        : (0, i.jsx)(iQ.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  return (0, i.jsx)(ld, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: r,
                      targetElementRef: n,
                      shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function ld(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, targetElementRef: r, shouldShow: a } = e,
        s = t8.sp.indexOf(t),
        o = (0, lu.I)(t8.sp[s > 0 ? s - 1 : s]).ambient,
        u = (0, l.useCallback)(() => {
            (n(it.i.TAKE_ACTION),
                t0.A.setState({ shouldRenderTenureLevelUp: !0 }),
                iU._.dispatch(el.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [n]),
        c = (0, l.useCallback)(() => {
            n(it.i.USER_DISMISS);
        }, [n]),
        d = t8.VD[t],
        m = ez.intl.formatToPlainString(ez.t.ewkaVR, {
            timeMilestone: (0, lo.T)(d.id, d.tenureReqNumMonths)?.toLocaleLowerCase(),
        }),
        f = [{ text: ez.intl.string(ez.t.RzWDqY), variant: "primary", onClick: u }];
    return (0, i.jsx)(n0.A, {
        targetElementRef: r,
        onRequestClose: c,
        shouldShow: a,
        caretConfig: { align: "center" },
        graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
        size: "lg",
        title: ez.intl.string(ez.t.VoDxsV),
        body: m,
        actions: f,
    });
}
var lm = n(764014);
function lf(e) {
    let { targetElementRef: t } = e,
        n = (0, t0.A)((e) => e.isOpen),
        [l, r] = (0, tQ.kn)(n ? [] : [d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK], {
            groupName: it.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        });
    return l === d.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
        ? (0, i.jsx)(n0.A, {
              targetElementRef: t,
              graphic: { type: "image", src: lm.A },
              position: "top",
              alignmentStrategy: "edge",
              align: "left",
              caretConfig: { align: "start" },
              title: ez.intl.string(ez.t["Q+dH5r"]),
              body: ez.intl.string(ez.t.YKJw4W),
              onRequestClose: () => r(it.i.USER_DISMISS),
              actions: [
                  {
                      text: ez.intl.string(ez.t.dcOuei),
                      onClick: function () {
                          (r(it.i.TAKE_ACTION),
                              t0.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                              nL.Ay.setUserOpenedWalletViaProfileDCF(!0),
                              iU._.dispatch(el.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
                      },
                  },
              ],
          })
        : null;
}
function lp(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, ix.c9)(),
        l = null != e.targetElementRef.current && t && n,
        [r, a] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = (0, i6.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ""),
                l = (0, c.bG)(
                    [i8.A, eM.default, i5.Ay],
                    () => {
                        if (null === e) return !1;
                        let t = i8.A.getGuild(e);
                        if (void 0 === t || !(0, i7.Rg)(t) || null == t.profile || null === t.profile.tag) return !1;
                        let n = eM.default.getCurrentUser();
                        if (
                            void 0 === n ||
                            (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
                        )
                            return !1;
                        let i = i5.Ay.getMember(e, n.id);
                        return null != i && !i.isPending;
                    },
                    [e],
                );
            return (0, tQ.ww)(l && n && !i ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? "null");
        })(e.guildId, { shouldShow: l }),
        [s, o] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { shouldShow: n = !0 } = t,
                i = e?.primaryGuild,
                l = i?.identityGuildId ?? null,
                r = (0, c.bG)([ln], () => (null === l ? null : ln.getGuildLastSeenInfo(l))),
                a = (0, c.bG)([i8.A], () => i8.A.getGuild(l)?.profile?.tag),
                s = null != a && i?.identityGuildId === l && i?.tag === null,
                o = null != l && r?.tag === a,
                u = null !== l && s && !o;
            return (0, tQ.Wl)(u && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, { cooldownDurationMs: 864e5 });
        })(e.currentUser, { shouldShow: l });
    return l
        ? r === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, i.jsx)(la, {
                  guildId: e.guildId,
                  onDismiss: a,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
              })
            : s === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, i.jsx)(lr, {
                    guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                    onDismiss: o,
                    targetElementRef: e.targetElementRef,
                    children: e.children,
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(lc, { groupName: it.m.ACCOUNT_NAME_ZONE, targetElementRef: e.targetElementRef }),
                        e.isOrbchievementsEnabled && (0, i.jsx)(lf, { targetElementRef: e.targetElementRef }),
                        (0, i.jsx)(iQ.Ay, {
                            contentTypes: e.additionalDCs ?? [],
                            groupName: it.m.ACCOUNT_NAME_ZONE,
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
                                        return (0, i.jsx)(iq, {
                                            markAsDismissed: l,
                                            position: "top",
                                            targetElementRef: e.targetElementRef,
                                            onCheckItOut: to.p,
                                            children: e.children,
                                        });
                                    case d.M.BADGE_DIRECTORY_NUX_POPOVER:
                                        return (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                e.children,
                                                (0, i.jsx)(iz, {
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
                                                (0, i.jsx)(iK, {
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
var lh = n(348858),
    lg = n(615675),
    lA = n(900797),
    lC = n(847374),
    lE = n(617354),
    lx = n(96020),
    lv = n(42473),
    l_ = n(731854),
    lb = n(516171),
    ly = n(577755);
function lT(e) {
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
        } = (0, lh.I)(m ? "undeafen" : "deafen"),
        C = n ? lg.HeadphonesDenyIcon : f,
        { name: E } = (0, ep.x5)(l_.oh.AUDIO_OUTPUT),
        x = (0, lE.A)(t, n, r),
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
                        f = d ? lA.ChevronSmallUpIcon : lC.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: _,
                        className: a()(lb.Lh, { [lb.v8]: m, [lb.q6]: d }),
                        children: [
                            (0, i.jsx)(lv.A, {
                                "aria-checked": m,
                                "aria-label": ez.intl.string(ez.t.wjcRFX),
                                className: lb.eT,
                                disabled: r,
                                icon: (0, i.jsx)(C, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? eg.A.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? ly.o : void 0,
                                innerClassName: a()({ [ly.T]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: g,
                                onMouseLeave: A,
                                plated: null != u,
                                redGlow: m,
                                role: "switch",
                                tooltipText: x,
                            }),
                            (0, i.jsx)(lv.A, {
                                className: a()(lb.UT, { [lb.q6]: d }),
                                disabled: r,
                                icon: (0, i.jsx)(f, {
                                    className: lb.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? eg.A.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != u,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? ez.intl.formatToPlainString(ez.t["f+DDY/"], { outputDeviceName: E })
                                    : void 0,
                                tooltipShouldShow: !d,
                                tooltipText: c
                                    ? ez.intl.format(ez.t["f+DDY/"], { outputDeviceName: E })
                                    : ez.intl.string(ez.t.aA4Vce),
                                "aria-label": c
                                    ? ez.intl.formatToPlainString(ez.t["f+DDY/"], { outputDeviceName: E })
                                    : ez.intl.string(ez.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
var lS = n(523875),
    lI = n(666654),
    lN = n(993719);
let lj = {};
class lR extends c.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return lj[e] ?? !1;
    }
}
let lO = new lR(i9.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
        let { tutorialKey: t } = e;
        lj[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
        let { tutorialKey: t } = e;
        lj[t] = !1;
    },
});
var lM = n(362823),
    lP = n(980923),
    lk = n(796262),
    lL = n(222176),
    lw = n(973324);
function lD(e) {
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
        _ = (0, c.bG)([iM.Ay], () => iM.Ay.getMode() === l_.TB.PUSH_TO_TALK),
        b = (0, c.bG)([iM.Ay], () => iM.Ay.getSettings().modeOptions.shortcut),
        y = (0, c.bG)([lO], () => lO.getIsTutorialActive(lM.v.MUTE_TUTORIAL)),
        T = (0, c.bG)([iP.A], () => null != iP.A.getChannelId()),
        { name: S } = (0, ep.x5)(l_.oh.AUDIO_INPUT),
        { enabledInputProfiles: I } = (0, iT.d)({ location: "MicrophoneButton" }),
        N = l.useRef(null),
        j = n || s || r,
        R = (0, lS.L)(j ? "unmute" : "mute"),
        { analyticsLocations: O } = (0, k.Ay)(P.A.AUDIO_INPUT_BUTTON),
        { Component: M, events: L, play: w } = R,
        D = r || s ? lI.MicrophoneDenyIcon : M;
    l.useEffect(() => () => w(), [j, w]);
    let U = (0, lP.A)(n, r, s, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: ez.intl.string(ez.t["29gnR4"]), tooltipForceOpen: !0 }
        : E || A
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: ez.intl.format(ez.t.c1qUOQ, { keybind: tx.dI(b).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: U };
    let G = _ && T,
        F = j ? eg.A.colors.ICON_VOICE_MUTED : "currentColor",
        B = l.useCallback(() => {
            (f(), y && lN.N(lM.v.MUTE_TUTORIAL));
        }, [f, y]);
    return (0, i.jsxs)(k.f5, {
        value: O,
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: N,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        x(),
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
                        s = r ? lA.ChevronSmallUpIcon : lC.ChevronSmallDownIcon;
                    return (0, i.jsxs)("div", {
                        ref: N,
                        className: a()(lb.Lh, { [lb.v8]: j, [lb.q6]: r }),
                        children: [
                            (0, i.jsx)(lv.A, {
                                "aria-checked": j,
                                "aria-label": ez.intl.string(ez.t.w4m945),
                                className: lb.eT,
                                disabled: o,
                                icon: (0, i.jsx)(D, { size: "custom", width: 20, height: 20, color: F, className: u }),
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
                                children: G ? (0, i.jsx)("div", { className: a()(lL.U, { [lL.z]: v }) }) : null,
                            }),
                            (0, i.jsx)(lv.A, {
                                "aria-label": C
                                    ? ez.intl.formatToPlainString(ez.t["18wnuD"], { inputDeviceName: S })
                                    : ez.intl.string(ez.t.fRzCbB),
                                className: a()(lb.UT, { [lb.q6]: r }),
                                disabled: o,
                                icon: (0, i.jsx)(s, {
                                    className: lb.$$,
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
                                    ? ez.intl.formatToPlainString(ez.t["18wnuD"], { inputDeviceName: S })
                                    : void 0,
                                tooltipShouldShow: !r,
                                tooltipText: C
                                    ? ez.intl.format(ez.t["18wnuD"], { inputDeviceName: S })
                                    : ez.intl.string(ez.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(n0.A, {
                targetElementRef: N,
                shouldShow: y,
                graphic: { type: "image", src: lw.A },
                onRequestClose: () => {
                    lN.N(lM.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: ez.intl.string(lk.default.VG4zAf),
                body: ez.intl.string(lk.default["8VIRzR"]),
            }),
        ],
    });
}
var lU = n(935399),
    lG = n(505312),
    lF = n(848847),
    lB = n(22363),
    lV = n(802516),
    lH = n(573648),
    lW = n(128232),
    lz = n(277657),
    lK = n(690364),
    lY = n(522978);
let lq = "console_connection_coachmark",
    lQ = new i$.A("ConsoleConnectionCoachmark");
function l$(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = l.useMemo(() => {
            function e(e) {
                (!(async function (e) {
                    let t;
                    e === el.fg2.XBOX ? lK.x() : lW.x();
                    try {
                        t = await (0, lz.V)(e);
                    } catch (t) {
                        (lQ.error("Error starting console sign-in; falling back to the link modal", t),
                            (0, lY.A)({ platformType: e, location: lq }));
                        return;
                    }
                    e === el.fg2.XBOX ? lK.t([lq], t) : lW.t([lq], e, t);
                })(e),
                    t(it.i.TAKE_ACTION));
            }
            return [
                {
                    text: lH.A.get(el.fg2.PLAYSTATION).name,
                    icon: lB.PlaystationNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(el.fg2.PLAYSTATION),
                },
                {
                    text: lH.A.get(el.fg2.XBOX).name,
                    icon: lV.XboxNeutralIcon,
                    variant: "secondary",
                    onClick: () => e(el.fg2.XBOX),
                },
            ];
        }, [t]),
        a = l.useCallback(() => {
            t(it.i.USER_DISMISS);
        }, [t]);
    return (0, i.jsx)(n0.A, {
        targetElementRef: n,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f5860f559ea2857185a554648b2a0b140e16bea35ed1dff11b697afd49ee2447.png",
            aspectRatio: "2/1",
        },
        title: ez.intl.string(ez.t.ZCib6v),
        body: ez.intl.string(ez.t.ikWQ2x),
        position: "top",
        caretConfig: { align: "end" },
        actions: r,
        onRequestClose: a,
    });
}
function lX(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        { analyticsLocations: l } = (0, k.Ay)(P.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(n0.A, {
        targetElementRef: n,
        align: "center",
        position: "top",
        caretConfig: { align: "end" },
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/fcf847e6a0778e63233f830819236b2b36b763964a681cc16be294394b72d93b.svg",
            aspectRatio: "6/4",
        },
        title: ez.intl.string(ez.t["6CxPoB"]),
        body: [ez.intl.format(ez.t.IVzJ8G, { settingsHook: (e) => e })],
        actions: [
            {
                text: ez.intl.string(ez.t.NENZhS),
                onClick: function () {
                    ((0, tl.openUserSettings)(ti.X.NOTIFICATION_HOLIDAY_SOUNDPACK, { analyticsLocations: l }),
                        t(it.i.TAKE_ACTION));
                },
            },
        ],
        gradientColor: "purple",
        onRequestClose: () => t(it.i.USER_DISMISS),
    });
}
var lZ = n(88001),
    lJ = n(107198),
    l0 = n(438705);
function l1(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: r } = e,
        a = l.useCallback(() => {
            (r(), (0, tl.openUserSettings)(ti.X.SUBSCRIPTIONS_PANEL));
        }, [r]);
    return (0, i.jsx)(n0.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: l0 },
        shouldShow: n,
        title: ez.intl.format(lJ.default.bx8sR9, { premiumGroupProductName: (0, lZ.DP)() }),
        body: ez.intl.format(lJ.default.Pw4OFZ, { premiumGroupProductName: (0, lZ.DP)() }),
        onRequestClose: r,
        actions: [{ text: ez.intl.string(lJ.default.DD26QR), onClick: a }],
    });
}
var l2 = n(873298),
    l3 = n(840387);
function l6(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        r = (0, l3.Z)(),
        a = nS.KP.useSetting(),
        s = r && a !== l2.KP.FRIENDS_AND_ALL_GUILDS,
        o = l.useCallback(() => {
            (t(it.i.TAKE_ACTION), (0, tl.openUserSettings)(ti.X.PROFILE_PRIVACY_CATEGORY));
        }, [t]),
        u = l.useCallback(() => {
            t(it.i.USER_DISMISS);
        }, [t]),
        c = s
            ? a === l2.KP.FRIENDS_ONLY
                ? ez.intl.string(ez.t["/hogEy"])
                : ez.intl.string(ez.t["6hEfm1"])
            : ez.intl.string(ez.t.bnNxW1);
    return (0, i.jsx)(n0.A, {
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
        title: ez.intl.string(ez.t.Ve4nS1),
        body: c,
        size: "md",
        gradientColor: "purple",
        actions: [{ text: ez.intl.string(ez.t.eOoTMX), variant: "primary", onClick: o }],
    });
}
var l5 = n(415443);
function l8(e) {
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
    (0, lU.Ay)(() => {
        function e() {
            return p(!0);
        }
        return (
            iU._.subscribe(el.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                iU._.unsubscribe(el.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let h = l.useCallback(() => {
            (p(!1), a());
        }, [a]),
        g = em.A.coachmarkDismissibleContent;
    if (null != r) {
        let e = (0, l5.A)("1795640575596", !0);
        t =
            null != e
                ? ez.intl.formatToPlainString(ez.t.wve4kg, { webBuildOverride: r.id, builtAt: e })
                : ez.intl.formatToPlainString(ez.t.Gzh6ZP, { webBuildOverride: r.id });
    } else t = ez.intl.string(ez.t.cduTBL);
    let A = tf.SettingsIcon,
        C = (0, lG.w)();
    return (
        (A = null != r ? lF.SettingsInfoIcon : C.Component),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(lv.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: h,
                    onContextMenu: s,
                    "aria-label": ez.intl.string(ez.t.cduTBL),
                    icon: (0, i.jsx)(A, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...C.events,
                    plated: null != c,
                }),
                (0, i.jsx)(l1, { targetElementRef: m, shouldShow: f, onDismiss: () => p(!1) }),
                (0, i.jsx)(iQ.Ay, {
                    contentTypes: o,
                    groupName: it.m.ACCOUNT_NAME_ZONE,
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
                                ? (0, i.jsx)(l$, { markAsDismissed: n, targetElementRef: m })
                                : null != g && t === g
                                  ? (0, i.jsx)(lX, { markAsDismissed: n, targetElementRef: m })
                                  : null;
                    },
                }),
            ],
        })
    );
}
var l7 = n(358285);
let l9 = iF.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    l4 = 2.5 * tC.A.Millis.SECOND,
    re = 2 * tC.A.Millis.MINUTE,
    rt = 5 * tC.A.Millis.SECOND;
function rn(e) {
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
        b = (0, iD.F_)({ avatarDecoration: C, size: (0, $.Te)(p._3.SIZE_32) }),
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
                (0, y.A)(() => a(!0), 750),
                l.useEffect(() => {
                    function t(t) {
                        let { highlightBadge: n } = t;
                        (null != n && i(n), e.current?.());
                    }
                    return (
                        iU._.subscribe(el.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            iU._.unsubscribe(el.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
              children: (0, i.jsx)(iy.A, {
                  user: u,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, ib.A)(u.id, u.getAvatarURL(void 0, iy.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, i.jsx)(iE, {
                          currentUser: u,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: n,
                          setPopoutRef: l,
                          className: l7.dI,
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
                          className: a()(l7.Q9, { [l7.ZQ]: null != A }),
                          children: [
                              (0, i.jsx)(g.D, {
                                  ...m,
                                  onClick: (t) => {
                                      (t.stopPropagation(), e.onClick?.(t), d?.(t));
                                  },
                                  "aria-label": ez.intl.string(ez.t["5fWB8U"]),
                                  focusProps: { ringTarget: _ },
                                  className: l7.$n,
                                  "data-jump-section": E,
                              }),
                              (0, i.jsx)(l9, {
                                  size: p._3.SIZE_32,
                                  src: u.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: b,
                                  status: o ? el.clD.STREAMING : c,
                                  voiceStatus: (0, p.n$)(n, r),
                                  voiceDb: s,
                                  className: l7.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: l7.oM, children: f(T) }),
                          ],
                      });
                  },
              }),
          });
}
class ri extends l.PureComponent {
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
        ((0, V.A)(e, t, el.JJy.ACCOUNT_PANEL), (0, H.XJ)(P.A.ACCOUNT, H.OP.MIC, n));
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        ((0, B.A)(e, el.JJy.ACCOUNT_PANEL), (0, H.XJ)(P.A.ACCOUNT, H.OP.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
        (this.dismissTooltips(),
            iP.A.isConnected() ? (0, tl.openUserSettings)(ti.X.VOICE_AND_VIDEO_PANEL) : (0, tl.openUserSettings)());
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
                    n.e(587308),
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
                    n.e(35771),
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
                    n.e(944801),
                    n.e(159957),
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
                    n.e(904870),
                    n.e(434566),
                    n.e(445254),
                    n.e(569443),
                    n.e(809548),
                    n.e(543456),
                    n.e(96857),
                ]).then(n.bind(n, 230016));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, W.s)("UserSettingsMenu", P.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, W.s)("AudioDeviceMenu", P.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        (this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(360536), n.e(678827)]).then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, iT.d)({ location: "Account" });
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
        let { selfMute: e, speakingWhileMuted: t, occluded: n, deviceChangedTooltipType: i } = this.props,
            { hoveringOnMute: l } = this.state,
            r =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > re;
        t
            ? !l &&
              e &&
              !n &&
              r &&
              null == i &&
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(l4, () =>
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
                    (0, i.jsx)(A.A, { children: nv.Ay.humanizeStatus(r) }),
                    (0, i.jsx)(S.A, {
                        user: l,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: s,
                        textClassName: l7.XD,
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
                      (0, i.jsx)(A.A, { children: nv.Ay.humanizeStatus(r) }),
                      (0, i.jsx)(es.A, { activity: o, emojiClassName: l7.Zg, className: l7.WO }),
                  ],
              })
            : null != r && r !== el.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, i.jsx)(M.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(O, { text: nv.Ay.humanizeStatus(r) }),
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
                          className: l7.eW,
                          children: (0, i.jsx)(iV.A, {
                              className: a()({ [l7.e8]: null != e }),
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
                          className: l7.XP,
                          children: (0, i.jsx)(iB.A, { children: this.renderStatus() }),
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
            : (0, i.jsx)(lp, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  badgeDirectoryNuxPopoverVariant: t,
                  additionalDCs: l.avatar,
                  isOrbchievementsEnabled: r,
                  children: (0, i.jsx)(rn, {
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
                          className: a()(l7.kL, { [l7.UG]: null != n, [l7.bc]: !l, [l7.G5]: r }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, i.jsx)(ee.A, { nameplate: t, hovered: s, placement: J.u.ACCOUNT }),
                              this.renderNameZone(e),
                              (0, i.jsx)(rl, {
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
function rl(e) {
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
            deviceChangedTooltipType: b,
            dismissTooltips: y,
            speaking: T,
        } = e,
        S = (0, Z.K)(v);
    function N() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, i.jsx)(l8, {
            webBuildOverride: c,
            onClick: A,
            onContextMenu: C,
            dismissibleContents: [...E.settings, ...e],
            iconForeground: null != v ? l7.t4 : void 0,
            nameplate: v,
        });
    }
    return (0, i.jsxs)("div", {
        className: l7.Uo,
        style: S,
        children: [
            (0, i.jsx)(lD, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: a,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: d,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != v ? l7.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: u,
                shouldShowInputDeviceChangedTooltip: !u && "input" === b,
                dismissTooltips: y,
                speaking: T,
            }),
            (0, i.jsx)(lT, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: f,
                onContextMenu: g,
                awaitingRemote: r,
                iconForeground: null != v ? l7.t4 : void 0,
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
function rr(e) {
    let t = (0, c.bG)([iP.A], () => null != iP.A.getChannelId()),
        n = (0, ep.Py)(e),
        i = l.useRef(new m.Ep()),
        [r, a] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(rt, () => {
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
function ra() {
    let e = (0, c.bG)([eM.default], () => eM.default.getCurrentUser()),
        t = (0, c.bG)([n9.default], () => n9.default.getId()),
        {
            activities: n,
            streaming: r,
            status: a,
        } = (0, c.cf)([ir.A], () => {
            let e = ir.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === u.$.STREAMING;
                    }),
                status: ir.A.getStatus(),
            };
        }),
        s = (0, c.bG)([iN.A], () => iN.A.getAnyStreamForUser(t)),
        m = (0, _.A)({ userId: t }),
        f = (0, c.bG)([iv.A], () => iv.A.isUserPlayingSounds(t)),
        p = (0, c.bG)([iL.A], () => iL.A.getVoiceVolume(t)),
        h = nv.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([iP.A, ij.A], () => {
            let e = iP.A.getChannelId();
            return null != e ? ij.A.getChannel(e) : null;
        }),
        { mute: A, selfMute: C, suppress: x } = (0, iI.A)(g),
        { selfDeaf: v, deaf: b } = (0, iS.A)(g),
        y = (0, c.bG)([D.A], () => ((0, U.kK)() ? D.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        T = (0, c.bG)(
            [iM.Ay, iw.A],
            () => {
                var e;
                return (
                    iM.Ay.getSpeakingWhileMuted() &&
                    ((e = null != g ? iw.A.getVoiceStateForChannel(g.id) : null),
                    !(x || e?.mute) && (!g?.isGuildStageVoice() || (0, F.eY)(e) === F.zF.ON_STAGE))
                );
            },
            [g, x],
        ),
        S = (0, c.bG)([G.A], () => G.A.isFullscreenInContext()),
        I = (0, c.bG)([iO.A], () => iO.A.hasLayers()),
        N = (0, E.re)(E.DX) || I || iG.P.isDisallowPopupsSet() || S,
        j = (0, c.bG)([ed.default], () => null != ed.default.getAwaitingRemoteSessionInfo()),
        R = (0, c.bG)([ik.A], () => ik.A.getGuildId()),
        O = e?.avatarDecoration,
        M = (0, Q.A)(O),
        B = nv.Ay.useName(e) ?? "",
        { analyticsLocations: V } = (0, k.Ay)(P.A.ACCOUNT),
        H = (0, X.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: W } = (0, ix.c9)(),
        $ = (0, c.bG)([i_.A, eM.default, iR.A], () => {
            let e,
                t = i_.A.getSyncingWith(),
                n = i_.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(iR.A.getParty(e) ?? []))
                        .map((e) => eM.default.getUser(e))
                        .filter(ie.Vq)
                        .value()),
                i.length > 1
            );
        }),
        Z = { avatar: [], settings: [] },
        J = (0, nI.Hy)({ location: "Account" }) && !N,
        ee = ef.A.useIsEligible(),
        et = em.A.coachmarkDismissibleContent,
        es = (0, L.d)({ location: "AccountCoachmark" }),
        eo = (function (e) {
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
        eu = (0, w.b)({ currentUserId: e?.id, enabled: es }),
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
        (Z.avatar.push(d.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
        null != eu && Z.avatar.push(d.M.BADGE_DIRECTORY_NUX_POPOVER),
        ec && Z.avatar.push(d.M.BUILD_A_BEAR_RELAUNCH_COACHMARK),
        ee && null != et && Z.settings.push(et),
        eo && Z.settings.push(d.M.CONSOLE_CONNECTION_COACHMARK),
        Z.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: ep, dismissTooltip: eh } = rr(l_.oh.AUDIO_INPUT),
        { shouldShowTooltip: eg, dismissTooltip: eA } = rr(l_.oh.AUDIO_OUTPUT),
        eC = l.useMemo(() => (ep ? "input" : eg ? "output" : void 0), [ep, eg]),
        eE = l.useCallback(
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
        children: (0, i.jsx)(ri, {
            currentUser: e,
            username: B,
            activities: n,
            applicationStream: s,
            voiceChannel: g,
            dismissibleContents: Z,
            badgeDirectoryNuxPopoverVariant: eu,
            isOrbchievementsEnabled: J,
            userTag: h,
            occluded: N,
            selfDeaf: v,
            selfMute: C,
            serverDeaf: b,
            serverMute: A,
            speaking: m,
            playingSoundboard: f,
            voiceDb: p,
            speakingWhileMuted: T,
            status: a,
            streaming: r,
            suppress: x,
            webBuildOverride: y,
            awaitingRemote: j,
            nameplate: H,
            selectedGuildId: R,
            avatarDecoration: M,
            isQuestBarEmpty: W,
            isListenAlongVisible: $,
            deviceChangedTooltipType: eC,
            onDismissDeviceChangedTooltip: () => eE(eC),
        }),
    });
}
