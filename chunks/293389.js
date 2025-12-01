n.d(t, { Z: () => Y }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(481060),
    u = n(224706),
    d = n(225433),
    f = n(570928),
    p = n(594190),
    _ = n(320724),
    m = n(297700),
    h = n(817788),
    g = n(509003),
    E = n(77498),
    b = n(283595),
    y = n(626135),
    O = n(251625),
    v = n(358085),
    S = n(210887),
    I = n(273313),
    T = n(981631),
    A = n(295907),
    C = n(388032),
    N = n(740508),
    P = n(315091),
    R = n(149715),
    w = n(197571);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = s.ZP.connectStores([S.Z], () => ({ theme: S.Z.theme }))(c.ubH),
    k = (0, v.isWindows)(),
    U = 18,
    G = "https://www.igdb.com/about";
function Z(e) {
    let { onClose: t } = e,
        n = (0, s.e7)([p.ZP], () => p.ZP.getCandidateGames()),
        [a, l] = i.useState(null);
    function d(e) {
        l(e);
    }
    function f() {
        null != a && (u.Z.addGame(a.pid, a.name), t());
    }
    let _ = n.map((e) => ({
        key: e.pid,
        value: e,
        label: null != e.name ? e.name : "",
    }));
    return (0, r.jsxs)(c.VqE, {
        className: o()(N.addGamePopout, P.elevationBorderHigh),
        "aria-label": C.intl.string(C.t.GTCx0p),
        children: [
            (0, r.jsx)(c.VcW, {
                placeholder: C.intl.string(C.t.XqMe3N),
                value: a,
                options: _,
                onChange: d,
                renderOptionLabel: (e) =>
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.label,
                    }),
            }),
            (0, r.jsx)(c.izJ, { className: o()(w.marginTop8, w.marginBottom8) }),
            (0, r.jsxs)("div", {
                className: o()(N.actions, R.horizontal),
                children: [
                    (0, r.jsx)(c.Avr, {
                        variant: "secondary",
                        text: C.intl.string(C.t["ETE/oC"]),
                        onClick: t,
                    }),
                    (0, r.jsx)(c.Button, {
                        variant: "primary",
                        text: C.intl.string(C.t.GTCx0p),
                        disabled: null == a,
                        onClick: f,
                    }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { rawGame: t, nowPlaying: a = !1, isOverride: _, subgames: h, isSubgame: O = !1, parentGame: v } = e,
        S = (0, s.cj)([p.ZP, E.Z, b.Z], () => (0, p.FZ)(t, p.ZP, E.Z, b.Z)),
        { canToggleDetection: I, isCurrentGameDetectionEnabled: P } = (0, s.cj)([p.ZP], () => ({
            canToggleDetection: null == v || p.ZP.isDetectionEnabled(v),
            isCurrentGameDetectionEnabled: p.ZP.isDetectionEnabled(S),
        })),
        w = (0, s.e7)([p.ZP], () => p.ZP.getVisibleGame()),
        [D, L] = i.useState(!1),
        M = i.useMemo(
            () =>
                (0, g.le)(S)
                    ? O
                        ? S.gameName
                        : C.intl.formatToPlainString(C.t.G6BGdx, { subgameName: S.gameName })
                    : S.name,
            [S, O],
        ),
        [G, Z] = i.useState(null != M ? M : "???"),
        F = o()(R.flexCenter, {
            [N.game]: !a,
            [N.activeGame]: a,
            [N.nowPlaying]: null != S && a,
            [N.subgame]: O,
            [N.gameHasSubgame]: null != h && h.length > 0,
        });
    function V() {
        u.Z.deleteEntry(S),
            null == h ||
                h.forEach((e) => {
                    u.Z.deleteEntry(e);
                });
    }
    function H() {
        S.name !== G && u.Z.editName(S, G);
    }
    function Y(e) {
        e.key === A.vn.ENTER && (e.currentTarget.blur(), e.preventDefault());
    }
    function W(e) {
        u.Z.toggleOverlay(S, e, e);
    }
    function K() {
        null != h && h.length > 0 && P
            ? (0, c.ZDy)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 793030));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          j(x({}, t), {
                              title: C.intl.formatToPlainString(C.t.PZ4fKc, { platform: M }),
                              subtitle: C.intl.formatToPlainString(C.t.ZIQbfb, { platform: M }),
                              actions: [
                                  {
                                      text: C.intl.string(C.t["ETE/oC"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: C.intl.string(C.t.Fmjztz),
                                      onClick: () => {
                                          u.Z.toggleDetection(S), t.onClose();
                                      },
                                      variant: "primary",
                                  },
                              ],
                          }),
                      );
              })
            : u.Z.toggleDetection(S);
    }
    function z() {
        if (D) return;
        let e = null != S.id ? E.Z.getDetectableGame(S.id) : null;
        y.default.track(T.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, g.le)(S) ? S.gameName : S.name,
        }),
            L(!0),
            (0, c.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e("82077"), n.e("87087")]).then(n.bind(n, 953848));
                return (n) => {
                    var i, a, o;
                    return (0, r.jsx)(
                        t,
                        j(x({}, n), {
                            detectedActivity: {
                                name: null != (i = S.name) ? i : "",
                                application_id:
                                    null != (o = null != (a = null == e ? void 0 : e.id) ? a : S.id) ? o : void 0,
                                type: T.IIU.PLAYING,
                            },
                            onSubmitted: () => {},
                        }),
                    );
                };
            });
    }
    function q() {
        return S.verified && !_
            ? (0, r.jsxs)("div", {
                  className: N.detectedApplication,
                  children: [
                      (0, r.jsx)("div", {
                          className: N.gameName,
                          children: M,
                      }),
                      (0, r.jsx)(c.aML, {
                          "data-migration-pending": !0,
                          text: C.intl.string(C.t["4PJP5p"]),
                          children: (e) =>
                              (0, r.jsx)(
                                  m.Z,
                                  j(
                                      x(
                                          {
                                              className: N.gameVerifiedIcon,
                                              size: U,
                                              color: l.Z.unsafe_rawColors.BRAND_500.css,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, r.jsx)(c.kmB, {
                                              size: "custom",
                                              width: U,
                                              height: U,
                                              color: l.Z.unsafe_rawColors.WHITE_500.css,
                                          }),
                                      },
                                  ),
                              ),
                      }),
                  ],
              })
            : (0, r.jsx)("input", {
                  className: o()(N.gameName, N.gameNameInput),
                  type: "text",
                  maxLength: 128,
                  value: G,
                  onBlur: H,
                  onKeyDown: Y,
                  onChange: (e) => Z(e.target.value),
              });
    }
    function Q() {
        let e,
            { played: t, exePath: n } = S;
        return (
            a || et
                ? (e = C.intl.string(C.t.VbV5dv))
                : null != t && "" !== t && (e = C.intl.format(C.t["gGeOE+"], { when: t })),
            (0, r.jsx)("div", {
                className: N.lastPlayed,
                children: (0, r.jsx)(f.Z, {
                    hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                    children: e,
                }),
            })
        );
    }
    function X() {
        if (!k || null != v) return null;
        let { overlay: e, overlayWarn: t } = S,
            n = e
                ? (0, r.jsx)(c.pzj, {
                      size: "md",
                      color: "currentColor",
                      className: N.toggleIconOn,
                      colorClass: N.fill,
                  })
                : (0, r.jsx)(c.o8v, {
                      size: "md",
                      color: "currentColor",
                      className: N.toggleIconOff,
                      colorClass: N.fill,
                  }),
            i = t
                ? (0, r.jsx)(c.aML, {
                      "data-migration-pending": !0,
                      text: C.intl.string(C.t.Vfw2L5),
                      children: (e) => (0, r.jsx)("i", x({ className: N.overlayWarningIcon }, e)),
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: o()(R.flexCenter, R.noWrap, R.justifyBetween, N.toggleContainer),
            children: [
                i,
                (0, r.jsx)(c.aML, {
                    "data-migration-pending": !0,
                    text: C.intl.string(C.t["1+O+Tu"]),
                    children: (t) =>
                        (0, r.jsx)(
                            c.P3F,
                            j(x({}, t), {
                                "aria-label": C.intl.string(C.t["1+O+Tu"]),
                                className: N.toggleIcon,
                                onClick: () => W(!e),
                                children: n,
                            }),
                        ),
                }),
            ],
        });
    }
    function J() {
        let { detectable: e } = S,
            t =
                e && I
                    ? (0, r.jsx)(c.tEF, {
                          size: "md",
                          color: "currentColor",
                          className: N.toggleIconOn,
                          colorClass: N.fill,
                      })
                    : (0, r.jsx)(c.kZF, {
                          size: "md",
                          color: "currentColor",
                          className: I ? N.toggleIconOff : N.toggleIconInactive,
                          colorClass: N.fill,
                      });
        return (0, r.jsx)("div", {
            className: o()(R.flexCenter, R.noWrap, R.justifyBetween, N.toggleContainer),
            children: (0, r.jsx)(c.aML, {
                "data-migration-pending": !0,
                text: C.intl.string(C.t.QmitzM),
                children: (e) =>
                    I
                        ? (0, r.jsx)(
                              c.P3F,
                              j(x({}, e), {
                                  "aria-label": C.intl.string(C.t.QmitzM),
                                  className: N.toggleIcon,
                                  onClick: K,
                                  children: t,
                              }),
                          )
                        : t,
            }),
        });
    }
    function $() {
        return D
            ? null
            : (0, r.jsx)("div", {
                  className: o()(R.flexCenter, R.noWrap, R.justifyBetween, N.toggleContainer),
                  children: (0, r.jsx)(c.aML, {
                      "data-migration-pending": !0,
                      text: C.intl.string(C.t["y0B+lo"]),
                      children: (e) =>
                          (0, r.jsx)(
                              c.P3F,
                              j(x({}, e), {
                                  "aria-label": C.intl.string(C.t["y0B+lo"]),
                                  className: N.toggleIcon,
                                  onClick: z,
                                  children: (0, r.jsx)(c.U65, {
                                      size: "md",
                                      color: "currentColor",
                                      className: N.toggleIconOn,
                                      colorClass: N.fill,
                                  }),
                              }),
                          ),
                  }),
              });
    }
    function ee() {
        return (0, r.jsx)(d.Z, {
            className: N.removeGame,
            onClick: V,
        });
    }
    let et = null != w && (0, p.rH)(S) === (0, p.rH)(w),
        en =
            (null != v && v.id === (null == w ? void 0 : w.id)) ||
            et ||
            (null != h && h.some((e) => e.id === (null == w ? void 0 : w.id)));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: F,
                children: [
                    (0, r.jsxs)("div", {
                        className: o()(N.gameNameLastPlayed, R.vertical),
                        children: [q(), Q()],
                    }),
                    _ ? null : $(),
                    J(),
                    X(),
                    (a && !_) || en ? null : ee(),
                ],
            }),
            null != h &&
                h.length > 0 &&
                !a &&
                (0, r.jsx)("div", {
                    className: N.subgameContainer,
                    children: h.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(B, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: S,
                                    }),
                                    t !== h.length - 1 && (0, r.jsx)("div", { className: N.border }),
                                ],
                            },
                            (0, p.rH)(e),
                        ),
                    ),
                }),
        ],
    });
}
function F() {
    return (0, r.jsx)("div", {
        className: o()(R.flexCenter, N.notDetected, N.activeGame),
        children: (0, r.jsxs)("div", {
            className: o()(N.gameNameLastPlayed, R.vertical),
            children: [
                (0, r.jsx)("div", {
                    className: N.gameName,
                    children: C.intl.string(C.t.H68X9x),
                }),
                (0, r.jsx)("div", {
                    className: N.lastPlayed,
                    children: C.intl.string(C.t.T5Ilmw),
                }),
            ],
        }),
    });
}
function V(e) {
    let { children: t } = e;
    return (0, r.jsxs)(M, {
        className: w.marginTop40,
        children: [
            (0, r.jsx)(c.oxh, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250,
            }),
            t,
        ],
    });
}
let H = (0, O.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    Y = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            a = (0, s.Wu)([p.ZP], () => p.ZP.getGamesSeen(!1)),
            { runningGame: l, overrideExePaths: u } = (0, s.cj)([p.ZP], () => ({
                runningGame: p.ZP.getVisibleGame(),
                overrideExePaths: H(...p.ZP.getOverrides()),
            })),
            { gameHistory: d, robloxSubgameHistory: f } = i.useMemo(
                () =>
                    a.reduce((e, t) => ((0, g.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                        gameHistory: [],
                        robloxSubgameHistory: [],
                    }),
                [a],
            ),
            m = i.useRef(null);
        function E() {
            return 0 === d.length
                ? (0, r.jsx)(V, { children: (0, r.jsx)(c.OZU, { children: C.intl.string(C.t["1yiJwn"]) }) })
                : (0, r.jsx)(c.C3N, {
                      className: w.marginTop40,
                      label: C.intl.string(C.t.jCOdvx),
                      description: C.intl.format(C.t.KPA3m9, { igdbLink: G }),
                      children: d.map((e) =>
                          (0, r.jsx)(
                              B,
                              {
                                  rawGame: e,
                                  isOverride: u.has(e.exePath),
                                  subgames: e.id === h.eB ? f : void 0,
                              },
                              (0, p.rH)(e),
                          ),
                      ),
                  });
        }
        return (
            i.useEffect(() => ((0, _.Ky)(), _.P7), []),
            (0, r.jsxs)(I.Z, {
                title: n ? C.intl.string(C.t.AVDyEj) : null,
                className: t,
                children: [
                    null != l
                        ? (0, r.jsx)(
                              B,
                              {
                                  rawGame: l,
                                  isOverride: u.has(l.exePath),
                                  nowPlaying: !0,
                                  subgames: l.id === h.eB ? f : void 0,
                              },
                              (0, p.rH)(l),
                          )
                        : (0, r.jsx)(F, {}),
                    (0, r.jsxs)("div", {
                        className: o()(N.nowPlayingAdd, w.marginReset, w.marginTop8, w.marginBottom20),
                        children: [
                            (0, r.jsx)("span", { children: C.intl.string(C.t.xwhoqM) }),
                            (0, r.jsx)(c.yRy, {
                                targetElementRef: m,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(Z, { onClose: t });
                                },
                                align: "center",
                                position: "bottom",
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.Avr,
                                        j(x({}, e), {
                                            buttonRef: m,
                                            variant: "primary",
                                            textVariant: "text-sm/medium",
                                            text: C.intl.string(C.t.GjgdXe),
                                        }),
                                    ),
                            }),
                        ],
                    }),
                    E(),
                ],
            })
        );
    };
