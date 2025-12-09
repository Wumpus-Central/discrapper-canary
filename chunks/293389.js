n.d(t, { Z: () => W }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(668339),
    u = n(481060),
    d = n(224706),
    f = n(225433),
    p = n(570928),
    _ = n(594190),
    m = n(320724),
    h = n(297700),
    g = n(817788),
    E = n(509003),
    b = n(77498),
    y = n(283595),
    O = n(626135),
    v = n(251625),
    S = n(358085),
    I = n(210887),
    T = n(273313),
    A = n(981631),
    C = n(295907),
    N = n(388032),
    P = n(740508),
    R = n(315091),
    D = n(149715),
    w = n(197571);
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
function B(e) {
    let { onClose: t } = e,
        n = (0, s.e7)([_.ZP], () => _.ZP.getCandidateGames()),
        [a, l] = i.useState(null);
    function f(e) {
        l(e);
    }
    function p() {
        null != a && (d.Z.addGame(a.pid, a.name), t());
    }
    let m = n.map((e) => ({
        key: e.pid,
        value: e,
        label: null != e.name ? e.name : "",
    }));
    return (0, r.jsxs)(u.VqE, {
        className: o()(P.addGamePopout, R.elevationBorderHigh),
        "aria-label": N.intl.string(N.t.GTCx0p),
        children: [
            (0, r.jsx)(c.d, {
                placeholder: N.intl.string(N.t.XqMe3N),
                value: a,
                options: m,
                onChange: f,
                renderOptionLabel: (e) =>
                    (0, r.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.label,
                    }),
            }),
            (0, r.jsx)(u.izJ, { className: o()(w.marginTop8, w.marginBottom8) }),
            (0, r.jsxs)("div", {
                className: o()(P.actions, D.horizontal),
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
                        onClick: p,
                    }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { rawGame: t, nowPlaying: a = !1, isOverride: c, subgames: m, isSubgame: g = !1, parentGame: v } = e,
        S = (0, s.cj)([_.ZP, b.Z, y.Z], () => (0, _.FZ)(t, _.ZP, b.Z, y.Z)),
        { canToggleDetection: I, isCurrentGameDetectionEnabled: T } = (0, s.cj)([_.ZP], () => ({
            canToggleDetection: null == v || _.ZP.isDetectionEnabled(v),
            isCurrentGameDetectionEnabled: _.ZP.isDetectionEnabled(S),
        })),
        R = (0, s.e7)([_.ZP], () => _.ZP.getVisibleGame()),
        [w, x] = i.useState(!1),
        j = i.useMemo(
            () =>
                (0, E.le)(S)
                    ? g
                        ? S.gameName
                        : N.intl.formatToPlainString(N.t.G6BGdx, { subgameName: S.gameName })
                    : S.name,
            [S, g],
        ),
        [k, Z] = i.useState(null != j ? j : "???"),
        B = o()(D.flexCenter, {
            [P.game]: !a,
            [P.activeGame]: a,
            [P.nowPlaying]: null != S && a,
            [P.subgame]: g,
            [P.gameHasSubgame]: null != m && m.length > 0,
        });
    function V() {
        d.Z.deleteEntry(S),
            null == m ||
                m.forEach((e) => {
                    d.Z.deleteEntry(e);
                });
    }
    function H() {
        S.name !== k && d.Z.editName(S, k);
    }
    function Y(e) {
        e.key === C.vn.ENTER && (e.currentTarget.blur(), e.preventDefault());
    }
    function W(e) {
        d.Z.toggleOverlay(S, e, e);
    }
    function K() {
        null != m && m.length > 0 && T
            ? (0, u.ZDy)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 793030));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          M(L({}, t), {
                              title: N.intl.formatToPlainString(N.t.PZ4fKc, { platform: j }),
                              subtitle: N.intl.formatToPlainString(N.t.ZIQbfb, { platform: j }),
                              actions: [
                                  {
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: N.intl.string(N.t.Fmjztz),
                                      onClick: () => {
                                          d.Z.toggleDetection(S), t.onClose();
                                      },
                                      variant: "primary",
                                  },
                              ],
                          }),
                      );
              })
            : d.Z.toggleDetection(S);
    }
    function z() {
        if (w) return;
        let e = null != S.id ? b.Z.getDetectableGame(S.id) : null;
        O.default.track(A.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, E.le)(S) ? S.gameName : S.name,
        }),
            x(!0),
            (0, u.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e("82077"), n.e("87087")]).then(n.bind(n, 953848));
                return (n) => {
                    var i, a, o;
                    return (0, r.jsx)(
                        t,
                        M(L({}, n), {
                            detectedActivity: {
                                name: null != (i = S.name) ? i : "",
                                application_id:
                                    null != (o = null != (a = null == e ? void 0 : e.id) ? a : S.id) ? o : void 0,
                                type: A.IIU.PLAYING,
                            },
                            onSubmitted: () => {},
                        }),
                    );
                };
            });
    }
    function q() {
        return S.verified && !c
            ? (0, r.jsxs)("div", {
                  className: P.detectedApplication,
                  children: [
                      (0, r.jsx)("div", {
                          className: P.gameName,
                          children: j,
                      }),
                      (0, r.jsx)(u.aML, {
                          "data-migration-pending": !0,
                          text: N.intl.string(N.t["4PJP5p"]),
                          children: (e) =>
                              (0, r.jsx)(
                                  h.Z,
                                  M(
                                      L(
                                          {
                                              className: P.gameVerifiedIcon,
                                              size: G,
                                              color: l.Z.unsafe_rawColors.BRAND_500.css,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, r.jsx)(u.kmB, {
                                              size: "custom",
                                              width: G,
                                              height: G,
                                              color: l.Z.unsafe_rawColors.WHITE_500.css,
                                          }),
                                      },
                                  ),
                              ),
                      }),
                  ],
              })
            : (0, r.jsx)("input", {
                  className: o()(P.gameName, P.gameNameInput),
                  type: "text",
                  maxLength: 128,
                  value: k,
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
    function X() {
        if (!U || null != v) return null;
        let { overlay: e, overlayWarn: t } = S,
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
                ? (0, r.jsx)(u.aML, {
                      "data-migration-pending": !0,
                      text: N.intl.string(N.t.Vfw2L5),
                      children: (e) => (0, r.jsx)("i", L({ className: P.overlayWarningIcon }, e)),
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: o()(D.flexCenter, D.noWrap, D.justifyBetween, P.toggleContainer),
            children: [
                i,
                (0, r.jsx)(u.aML, {
                    "data-migration-pending": !0,
                    text: N.intl.string(N.t["1+O+Tu"]),
                    children: (t) =>
                        (0, r.jsx)(
                            u.P3F,
                            M(L({}, t), {
                                "aria-label": N.intl.string(N.t["1+O+Tu"]),
                                className: P.toggleIcon,
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
                    ? (0, r.jsx)(u.tEF, {
                          size: "md",
                          color: "currentColor",
                          className: P.toggleIconOn,
                          colorClass: P.fill,
                      })
                    : (0, r.jsx)(u.kZF, {
                          size: "md",
                          color: "currentColor",
                          className: I ? P.toggleIconOff : P.toggleIconInactive,
                          colorClass: P.fill,
                      });
        return (0, r.jsx)("div", {
            className: o()(D.flexCenter, D.noWrap, D.justifyBetween, P.toggleContainer),
            children: (0, r.jsx)(u.aML, {
                "data-migration-pending": !0,
                text: N.intl.string(N.t.QmitzM),
                children: (e) =>
                    I
                        ? (0, r.jsx)(
                              u.P3F,
                              M(L({}, e), {
                                  "aria-label": N.intl.string(N.t.QmitzM),
                                  className: P.toggleIcon,
                                  onClick: K,
                                  children: t,
                              }),
                          )
                        : t,
            }),
        });
    }
    function $() {
        return w
            ? null
            : (0, r.jsx)("div", {
                  className: o()(D.flexCenter, D.noWrap, D.justifyBetween, P.toggleContainer),
                  children: (0, r.jsx)(u.aML, {
                      "data-migration-pending": !0,
                      text: N.intl.string(N.t["y0B+lo"]),
                      children: (e) =>
                          (0, r.jsx)(
                              u.P3F,
                              M(L({}, e), {
                                  "aria-label": N.intl.string(N.t["y0B+lo"]),
                                  className: P.toggleIcon,
                                  onClick: z,
                                  children: (0, r.jsx)(u.U65, {
                                      size: "md",
                                      color: "currentColor",
                                      className: P.toggleIconOn,
                                      colorClass: P.fill,
                                  }),
                              }),
                          ),
                  }),
              });
    }
    function ee() {
        return (0, r.jsx)(f.Z, {
            className: P.removeGame,
            onClick: V,
        });
    }
    let et = null != R && (0, _.rH)(S) === (0, _.rH)(R),
        en =
            (null != v && v.id === (null == R ? void 0 : R.id)) ||
            et ||
            (null != m && m.some((e) => e.id === (null == R ? void 0 : R.id)));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: B,
                children: [
                    (0, r.jsxs)("div", {
                        className: o()(P.gameNameLastPlayed, D.vertical),
                        children: [q(), Q()],
                    }),
                    c ? null : $(),
                    J(),
                    X(),
                    (a && !c) || en ? null : ee(),
                ],
            }),
            null != m &&
                m.length > 0 &&
                !a &&
                (0, r.jsx)("div", {
                    className: P.subgameContainer,
                    children: m.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(F, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: S,
                                    }),
                                    t !== m.length - 1 && (0, r.jsx)("div", { className: P.border }),
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
        className: o()(D.flexCenter, P.notDetected, P.activeGame),
        children: (0, r.jsxs)("div", {
            className: o()(P.gameNameLastPlayed, D.vertical),
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
        className: w.marginTop40,
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
    W = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            a = (0, s.Wu)([_.ZP], () => _.ZP.getGamesSeen(!1)),
            { runningGame: l, overrideExePaths: c } = (0, s.cj)([_.ZP], () => ({
                runningGame: _.ZP.getVisibleGame(),
                overrideExePaths: Y(..._.ZP.getOverrides()),
            })),
            { gameHistory: d, robloxSubgameHistory: f } = i.useMemo(
                () =>
                    a.reduce((e, t) => ((0, E.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                        gameHistory: [],
                        robloxSubgameHistory: [],
                    }),
                [a],
            ),
            p = i.useRef(null);
        function h() {
            return 0 === d.length
                ? (0, r.jsx)(H, { children: (0, r.jsx)(u.OZU, { children: N.intl.string(N.t["1yiJwn"]) }) })
                : (0, r.jsx)(u.C3N, {
                      className: w.marginTop40,
                      label: N.intl.string(N.t.jCOdvx),
                      description: N.intl.format(N.t.KPA3m9, { igdbLink: Z }),
                      children: d.map((e) =>
                          (0, r.jsx)(
                              F,
                              {
                                  rawGame: e,
                                  isOverride: c.has(e.exePath),
                                  subgames: e.id === g.eB ? f : void 0,
                              },
                              (0, _.rH)(e),
                          ),
                      ),
                  });
        }
        return (
            i.useEffect(() => ((0, m.Ky)(), m.P7), []),
            (0, r.jsxs)(T.Z, {
                title: n ? N.intl.string(N.t.AVDyEj) : null,
                className: t,
                children: [
                    null != l
                        ? (0, r.jsx)(
                              F,
                              {
                                  rawGame: l,
                                  isOverride: c.has(l.exePath),
                                  nowPlaying: !0,
                                  subgames: l.id === g.eB ? f : void 0,
                              },
                              (0, _.rH)(l),
                          )
                        : (0, r.jsx)(V, {}),
                    (0, r.jsxs)("div", {
                        className: o()(P.nowPlayingAdd, w.marginReset, w.marginTop8, w.marginBottom20),
                        children: [
                            (0, r.jsx)("span", { children: N.intl.string(N.t.xwhoqM) }),
                            (0, r.jsx)(u.yRy, {
                                targetElementRef: p,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(B, { onClose: t });
                                },
                                align: "center",
                                position: "bottom",
                                children: (e) =>
                                    (0, r.jsx)(
                                        u.Avr,
                                        M(L({}, e), {
                                            buttonRef: p,
                                            variant: "primary",
                                            textVariant: "text-sm/medium",
                                            text: N.intl.string(N.t.GjgdXe),
                                        }),
                                    ),
                            }),
                        ],
                    }),
                    h(),
                ],
            })
        );
    };
