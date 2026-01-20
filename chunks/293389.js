n.d(t, {
    ZP: () => q,
    bs: () => z,
    pJ: () => K,
    qI: () => W,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(681715),
    u = n(481060),
    d = n(224706),
    f = n(225433),
    p = n(570928),
    _ = n(594190),
    h = n(320724),
    m = n(297700),
    g = n(817788),
    E = n(509003),
    b = n(404577),
    y = n(283595),
    O = n(626135),
    v = n(251625),
    S = n(358085),
    I = n(210887),
    T = n(273313),
    C = n(981631),
    A = n(295907),
    N = n(388032),
    P = n(675433),
    w = n(533348),
    R = n(727829),
    D = n(478411);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = s.ZP.connectStores([I.Z], () => ({ theme: I.Z.theme }))(u.ubH),
    U = (0, S.isWindows)(),
    G = 18,
    Z = "https://www.igdb.com/about";
function F(e) {
    let { onClose: t } = e,
        n = (0, s.e7)([_.ZP], () => _.ZP.getCandidateGames()),
        [a, l] = i.useState(null);
    function c(e) {
        l(e);
    }
    function f() {
        null != a && (d.Z.addGame(a.pid, a.name), t());
    }
    let p = n.map((e) => ({
        id: e.pid.toString(),
        value: e,
        label: null != e.name ? e.name : "",
    }));
    return (0, r.jsxs)(u.VqE, {
        className: o()(P.addGamePopout, w.elevationBorderHigh),
        "aria-label": N.intl.string(N.t.GTCx0p),
        children: [
            (0, r.jsx)(u.VcW, {
                selectionMode: "single",
                placeholder: N.intl.string(N.t.XqMe3N),
                value: a,
                options: p,
                onSelectionChange: c,
            }),
            (0, r.jsx)(u.izJ, { className: o()(D.marginTop8, D.marginBottom8) }),
            (0, r.jsxs)("div", {
                className: o()(P.actions, R.horizontal),
                children: [
                    (0, r.jsx)(u.Avr, {
                        variant: "secondary",
                        text: N.intl.string(N.t["ETE/oC"]),
                        onClick: t,
                    }),
                    (0, r.jsx)(u.Button, {
                        variant: "primary",
                        text: N.intl.string(N.t.GTCx0p),
                        disabled: null == a,
                        onClick: f,
                    }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { rawGame: t, nowPlaying: a = !1, isOverride: h, subgames: g, isSubgame: v = !1, parentGame: S } = e,
        I = (0, s.cj)([_.ZP, b.Z, y.Z], () => (0, _.FZ)(t, _.ZP, b.Z, y.Z)),
        { canToggleDetection: T, isCurrentGameDetectionEnabled: w } = (0, s.cj)([_.ZP], () => ({
            canToggleDetection: null == S || _.ZP.isDetectionEnabled(S),
            isCurrentGameDetectionEnabled: _.ZP.isDetectionEnabled(I),
        })),
        D = (0, s.e7)([_.ZP], () => _.ZP.getVisibleGame()),
        [x, j] = i.useState(!1),
        k = i.useMemo(
            () =>
                (0, E.le)(I)
                    ? v
                        ? I.gameName
                        : N.intl.formatToPlainString(N.t.G6BGdx, { subgameName: I.gameName })
                    : I.name,
            [I, v],
        ),
        [Z, F] = i.useState(null != k ? k : "???"),
        V = o()(R.flexCenter, {
            [P.game]: !a,
            [P.activeGame]: a,
            [P.nowPlaying]: null != I && a,
            [P.subgame]: v,
            [P.gameHasSubgame]: null != g && g.length > 0,
        });
    function H() {
        d.Z.deleteEntry(I),
            null == g ||
                g.forEach((e) => {
                    d.Z.deleteEntry(e);
                });
    }
    function Y() {
        I.name !== Z && d.Z.editName(I, Z);
    }
    function W(e) {
        e.key === A.vn.ENTER && (e.currentTarget.blur(), e.preventDefault());
    }
    function K(e) {
        d.Z.toggleOverlay(I, e, e);
    }
    function z() {
        null != g && g.length > 0 && w
            ? (0, u.ZDy)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 793030));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          M(L({}, t), {
                              title: N.intl.formatToPlainString(N.t.PZ4fKc, { platform: k }),
                              subtitle: N.intl.formatToPlainString(N.t.ZIQbfb, { platform: k }),
                              actions: [
                                  {
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: N.intl.string(N.t.Fmjztz),
                                      onClick: () => {
                                          d.Z.toggleDetection(I), t.onClose();
                                      },
                                      variant: "primary",
                                  },
                              ],
                          }),
                      );
              })
            : d.Z.toggleDetection(I);
    }
    function q() {
        if (x) return;
        let e = null != I.id ? b.Z.getDetectableGame(I.id) : null;
        O.default.track(C.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, E.le)(I) ? I.gameName : I.name,
        }),
            j(!0),
            (0, u.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e("82077"), n.e("30709")]).then(n.bind(n, 953848));
                return (n) => {
                    var i, a, o;
                    return (0, r.jsx)(
                        t,
                        M(L({}, n), {
                            detectedActivity: {
                                name: null != (i = I.name) ? i : "",
                                application_id:
                                    null != (o = null != (a = null == e ? void 0 : e.id) ? a : I.id) ? o : void 0,
                                type: C.IIU.PLAYING,
                            },
                            onSubmitted: () => {},
                        }),
                    );
                };
            });
    }
    function Q() {
        return I.verified && !h
            ? (0, r.jsxs)("div", {
                  className: P.detectedApplication,
                  children: [
                      (0, r.jsx)("div", {
                          className: P.gameName,
                          children: k,
                      }),
                      (0, r.jsx)(c.u, {
                          text: N.intl.string(N.t["4PJP5p"]),
                          children: (0, r.jsx)(m.Z, {
                              className: P.gameVerifiedIcon,
                              size: G,
                              color: l.Z.unsafe_rawColors.BRAND_500.css,
                              children: (0, r.jsx)(u.kmB, {
                                  size: "custom",
                                  width: G,
                                  height: G,
                                  color: l.Z.unsafe_rawColors.WHITE.css,
                              }),
                          }),
                      }),
                  ],
              })
            : (0, r.jsx)("input", {
                  className: o()(P.gameName, P.gameNameInput),
                  type: "text",
                  maxLength: 128,
                  value: Z,
                  onBlur: Y,
                  onKeyDown: W,
                  onChange: (e) => F(e.target.value),
              });
    }
    function X() {
        let e,
            { played: t, exePath: n } = I;
        return (
            a || en
                ? (e = N.intl.string(N.t.VbV5dv))
                : null != t && "" !== t && (e = N.intl.format(N.t["gGeOE+"], { when: t })),
            (0, r.jsx)("div", {
                className: P.lastPlayed,
                children: (0, r.jsx)(p.Z, {
                    hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                    children: e,
                }),
            })
        );
    }
    function J() {
        if (!U || null != S) return null;
        let { overlay: e, overlayWarn: t } = I,
            n = e
                ? (0, r.jsx)(u.pzj, {
                      size: "md",
                      color: "currentColor",
                      className: P.toggleIconOn,
                      colorClass: P.fill,
                  })
                : (0, r.jsx)(u.o8v, {
                      size: "md",
                      color: "currentColor",
                      className: P.toggleIconOff,
                      colorClass: P.fill,
                  }),
            i = t
                ? (0, r.jsx)(c.u, {
                      text: N.intl.string(N.t.Vfw2L5),
                      children: (0, r.jsx)("i", { className: P.overlayWarningIcon }),
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: o()(R.flexCenter, R.noWrap, R.justifyBetween, P.toggleContainer),
            children: [
                i,
                (0, r.jsx)(c.u, {
                    text: N.intl.string(N.t["1+O+Tu"]),
                    children: (0, r.jsx)(u.P3F, {
                        "aria-label": N.intl.string(N.t["1+O+Tu"]),
                        className: P.toggleIcon,
                        onClick: () => K(!e),
                        children: n,
                    }),
                }),
            ],
        });
    }
    function $() {
        let { detectable: e } = I,
            t =
                e && T
                    ? (0, r.jsx)(u.tEF, {
                          size: "md",
                          color: "currentColor",
                          className: P.toggleIconOn,
                          colorClass: P.fill,
                      })
                    : (0, r.jsx)(u.kZF, {
                          size: "md",
                          color: "currentColor",
                          className: T ? P.toggleIconOff : P.toggleIconInactive,
                          colorClass: P.fill,
                      });
        return (0, r.jsx)("div", {
            className: o()(R.flexCenter, R.noWrap, R.justifyBetween, P.toggleContainer),
            children: (0, r.jsx)(c.u, {
                text: N.intl.string(N.t.QmitzM),
                children: T
                    ? (0, r.jsx)(u.P3F, {
                          "aria-label": N.intl.string(N.t.QmitzM),
                          className: P.toggleIcon,
                          onClick: z,
                          children: t,
                      })
                    : t,
            }),
        });
    }
    function ee() {
        return x
            ? null
            : (0, r.jsx)("div", {
                  className: o()(R.flexCenter, R.noWrap, R.justifyBetween, P.toggleContainer),
                  children: (0, r.jsx)(c.u, {
                      text: N.intl.string(N.t["y0B+lo"]),
                      children: (0, r.jsx)(u.P3F, {
                          "aria-label": N.intl.string(N.t["y0B+lo"]),
                          className: P.toggleIcon,
                          onClick: q,
                          children: (0, r.jsx)(u.U65, {
                              size: "md",
                              color: "currentColor",
                              className: P.toggleIconOn,
                              colorClass: P.fill,
                          }),
                      }),
                  }),
              });
    }
    function et() {
        return (0, r.jsx)(f.Z, {
            className: P.removeGame,
            onClick: H,
        });
    }
    let en = null != D && (0, _.rH)(I) === (0, _.rH)(D),
        er =
            (null != S && S.id === (null == D ? void 0 : D.id)) ||
            en ||
            (null != g && g.some((e) => e.id === (null == D ? void 0 : D.id)));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: V,
                children: [
                    (0, r.jsxs)("div", {
                        className: o()(P.gameNameLastPlayed, R.vertical),
                        children: [Q(), X()],
                    }),
                    h ? null : ee(),
                    $(),
                    J(),
                    (a && !h) || er ? null : et(),
                ],
            }),
            null != g &&
                g.length > 0 &&
                !a &&
                (0, r.jsx)("div", {
                    className: P.subgameContainer,
                    children: g.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(B, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: I,
                                    }),
                                    t !== g.length - 1 && (0, r.jsx)("div", { className: P.border }),
                                ],
                            },
                            (0, _.rH)(e),
                        ),
                    ),
                }),
        ],
    });
}
function V() {
    return (0, r.jsx)("div", {
        className: o()(R.flexCenter, P.notDetected, P.activeGame),
        children: (0, r.jsxs)("div", {
            className: o()(P.gameNameLastPlayed, R.vertical),
            children: [
                (0, r.jsx)("div", {
                    className: P.gameName,
                    children: N.intl.string(N.t.H68X9x),
                }),
                (0, r.jsx)("div", {
                    className: P.lastPlayed,
                    children: N.intl.string(N.t.T5Ilmw),
                }),
            ],
        }),
    });
}
function H(e) {
    let { children: t } = e;
    return (0, r.jsxs)(k, {
        className: D.marginTop40,
        children: [
            (0, r.jsx)(u.oxh, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250,
            }),
            t,
        ],
    });
}
let Y = (0, v.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    W = () => {
        let e = (0, s.Wu)([_.ZP], () => _.ZP.getGamesSeen(!1)),
            { runningGame: t, overrideExePaths: n } = (0, s.cj)([_.ZP], () => ({
                runningGame: _.ZP.getVisibleGame(),
                overrideExePaths: Y(..._.ZP.getOverrides()),
            }));
        i.useEffect(() => ((0, h.Ky)(), h.P7), []);
        let a = i.useMemo(() => e.reduce((e, t) => ((0, E.le)(t) && e.push(t), e), []), [e]);
        return null != t
            ? (0, r.jsx)(
                  B,
                  {
                      rawGame: t,
                      isOverride: n.has(t.exePath),
                      nowPlaying: !0,
                      subgames: t.id === g.eB ? a : void 0,
                  },
                  (0, _.rH)(t),
              )
            : (0, r.jsx)(V, {});
    },
    K = () => {
        let e = i.useRef(null);
        return (0, r.jsxs)("div", {
            className: o()(P.nowPlayingAdd, D.marginReset),
            children: [
                (0, r.jsx)("span", { children: N.intl.string(N.t.xwhoqM) }),
                (0, r.jsx)(u.yRy, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(F, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, r.jsx)(
                            u.Avr,
                            M(L({}, t), {
                                buttonRef: e,
                                variant: "primary",
                                textVariant: "text-sm/medium",
                                text: N.intl.string(N.t.GjgdXe),
                            }),
                        ),
                }),
            ],
        });
    },
    z = (e) => {
        let { hideHeader: t = !1 } = e,
            n = (0, s.Wu)([_.ZP], () => _.ZP.getGamesSeen(!1)),
            a = (0, s.e7)([_.ZP], () => Y(..._.ZP.getOverrides()));
        i.useEffect(() => ((0, h.Ky)(), h.P7), []);
        let { gameHistory: o, robloxSubgameHistory: l } = i.useMemo(
            () =>
                n.reduce((e, t) => ((0, E.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                    gameHistory: [],
                    robloxSubgameHistory: [],
                }),
            [n],
        );
        return 0 === o.length
            ? (0, r.jsx)(H, { children: (0, r.jsx)(u.OZU, { children: N.intl.string(N.t["1yiJwn"]) }) })
            : (0, r.jsx)(u.C3N, {
                  label: t ? void 0 : N.intl.string(N.t.jCOdvx),
                  description: t ? void 0 : N.intl.format(N.t.KPA3m9, { igdbLink: Z }),
                  children: (0, r.jsx)("div", {
                      children: o.map((e) =>
                          (0, r.jsx)(
                              B,
                              {
                                  rawGame: e,
                                  isOverride: a.has(e.exePath),
                                  subgames: e.id === g.eB ? l : void 0,
                              },
                              (0, _.rH)(e),
                          ),
                      ),
                  }),
              });
    },
    q = function (e) {
        let { className: t, showHeader: n = !0 } = e;
        return (0, r.jsxs)(T.Z, {
            title: n ? N.intl.string(N.t.AVDyEj) : null,
            className: t,
            children: [(0, r.jsx)(W, {}), (0, r.jsx)(K, {}), (0, r.jsx)(u.izJ, { gap: 20 }), (0, r.jsx)(z, {})],
        });
    };
