n.d(t, { Z: () => W }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(224706),
    f = n(225433),
    _ = n(570928),
    p = n(220410),
    h = n(594190),
    m = n(320724),
    g = n(297700),
    E = n(817788),
    b = n(509003),
    y = n(77498),
    O = n(283595),
    v = n(626135),
    I = n(251625),
    T = n(358085),
    S = n(210887),
    A = n(273313),
    C = n(981631),
    N = n(388032),
    R = n(313911),
    P = n(285236),
    w = n(465106),
    D = n(10198);
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
let k = s.ZP.connectStores([S.Z], () => ({ theme: S.Z.theme }))(u.ubH),
    U = (0, T.isWindows)(),
    G = 18,
    B = "https://www.igdb.com/about";
function Z(e) {
    let { onClose: t } = e,
        n = (0, s.e7)([h.ZP], () => h.ZP.getCandidateGames()),
        [a, l] = i.useState(null);
    function f(e) {
        l(e);
    }
    function _() {
        null != a && (d.Z.addGame(a.pid, a.name), t());
    }
    let p = n.map((e) => ({
        key: e.pid,
        value: e,
        label: null != e.name ? e.name : "",
    }));
    return (0, r.jsxs)(u.VqE, {
        className: o()(R.addGamePopout, P.elevationBorderHigh),
        "aria-label": N.intl.string(N.t.GTCx0t),
        children: [
            (0, r.jsx)(u.VcW, {
                placeholder: N.intl.string(N.t.XqMe3N),
                value: a,
                options: p,
                onChange: f,
                renderOptionLabel: (e) =>
                    (0, r.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.label,
                    }),
            }),
            (0, r.jsx)(u.$i$, { className: o()(D.marginTop8, D.marginBottom8) }),
            (0, r.jsxs)("div", {
                className: o()(R.actions, w.horizontal),
                children: [
                    (0, r.jsx)(c.zx, {
                        className: R.cancelButton,
                        look: c.iL.LINK,
                        color: c.Tt.PRIMARY,
                        onClick: t,
                        children: N.intl.string(N.t["ETE/oK"]),
                    }),
                    (0, r.jsx)(u.zxk, {
                        variant: "primary",
                        text: N.intl.string(N.t.GTCx0t),
                        disabled: null == a,
                        onClick: _,
                    }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { rawGame: t, nowPlaying: a = !1, isOverride: c, subgames: m, isSubgame: E = !1, parentGame: I } = e,
        T = (0, s.cj)([h.ZP, y.Z, O.Z], () => (0, h.FZ)(t, h.ZP, y.Z, O.Z)),
        { canToggleDetection: S, isCurrentGameDetectionEnabled: A } = (0, s.cj)([h.ZP], () => ({
            canToggleDetection: null == I || h.ZP.isDetectionEnabled(I),
            isCurrentGameDetectionEnabled: h.ZP.isDetectionEnabled(T),
        })),
        P = (0, p.P6)("UserSettingsGameActivity"),
        D = (0, s.e7)([h.ZP], () => h.ZP.getVisibleGame()),
        [x, j] = i.useState(!1),
        k = i.useMemo(
            () =>
                (0, b.le)(T)
                    ? E
                        ? T.gameName
                        : N.intl.formatToPlainString(N.t.G6BGd3, { subgameName: T.gameName })
                    : T.name,
            [T, E],
        ),
        [B, Z] = i.useState(null != k ? k : "???"),
        V = o()(w.flexCenter, {
            [R.game]: !a,
            [R.activeGame]: a,
            [R.nowPlaying]: null != T && a,
            [R.subgame]: E,
            [R.gameHasSubgame]: null != m && m.length > 0,
        });
    function H() {
        d.Z.deleteEntry(T),
            null == m ||
                m.forEach((e) => {
                    d.Z.deleteEntry(e);
                });
    }
    function Y() {
        T.name !== B && d.Z.editName(T, B);
    }
    function W(e) {
        13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
    }
    function K(e) {
        d.Z.toggleOverlay(T, e, e);
    }
    function z() {
        null != m && m.length > 0 && A
            ? (0, u.ZDy)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 82659));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          M(L({}, t), {
                              title: N.intl.formatToPlainString(N.t.PZ4fKS, { platform: k }),
                              subtitle: N.intl.formatToPlainString(N.t.ZIQbfX, { platform: k }),
                              actions: [
                                  {
                                      text: N.intl.string(N.t["ETE/oK"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: N.intl.string(N.t.Fmjzt7),
                                      onClick: () => {
                                          d.Z.toggleDetection(T), t.onClose();
                                      },
                                      variant: "primary",
                                  },
                              ],
                          }),
                      );
              })
            : d.Z.toggleDetection(T);
    }
    function q() {
        if (x) return;
        let e = null != T.id ? y.Z.getDetectableGame(T.id) : null;
        v.default.track(C.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, b.le)(T) ? T.gameName : T.name,
        }),
            P
                ? (j(!0),
                  (0, u.ZDy)(async () => {
                      let { default: t } = await n.e("82077").then(n.bind(n, 953848));
                      return (n) => {
                          var i, a, o;
                          return (0, r.jsx)(
                              t,
                              M(L({}, n), {
                                  detectedActivity: {
                                      name: null != (i = T.name) ? i : "",
                                      application_id:
                                          null != (o = null != (a = null == e ? void 0 : e.id) ? a : T.id) ? o : void 0,
                                      type: C.IIU.PLAYING,
                                  },
                                  onSubmitted: () => {},
                              }),
                          );
                      };
                  }))
                : ((0, u.showToast)(
                      (0, u.createToast)(
                          N.intl.formatToPlainString(N.t["6klMOj"], { gameName: (0, b.le)(T) ? T.gameName : T.name }),
                          u.ToastType.SUCCESS,
                      ),
                  ),
                  j(!0));
    }
    function X() {
        return T.verified && !c
            ? (0, r.jsxs)("div", {
                  className: R.detectedApplication,
                  children: [
                      (0, r.jsx)("div", {
                          className: R.gameName,
                          children: k,
                      }),
                      (0, r.jsx)(u.ua7, {
                          text: N.intl.string(N.t["4PJP5u"]),
                          children: (e) =>
                              (0, r.jsx)(
                                  g.Z,
                                  M(
                                      L(
                                          {
                                              className: R.gameVerifiedIcon,
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
                  className: o()(R.gameName, R.gameNameInput),
                  type: "text",
                  maxLength: 128,
                  value: B,
                  onBlur: Y,
                  onKeyDown: W,
                  onChange: (e) => Z(e.target.value),
              });
    }
    function Q() {
        let e,
            { played: t, exePath: n } = T;
        return (
            a || en
                ? (e = N.intl.string(N.t.VbV5dn))
                : null != t && "" !== t && (e = N.intl.format(N.t.gGeOEx, { when: t })),
            (0, r.jsx)("div", {
                className: R.lastPlayed,
                children: (0, r.jsx)(_.Z, {
                    hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                    children: e,
                }),
            })
        );
    }
    function J() {
        if (!U || null != I) return null;
        let { overlay: e, overlayWarn: t } = T,
            n = e
                ? (0, r.jsx)(u.pzj, {
                      size: "md",
                      color: "currentColor",
                      className: R.toggleIconOn,
                      colorClass: R.fill,
                  })
                : (0, r.jsx)(u.o8v, {
                      size: "md",
                      color: "currentColor",
                      className: R.toggleIconOff,
                      colorClass: R.fill,
                  }),
            i = t
                ? (0, r.jsx)(u.ua7, {
                      text: N.intl.string(N.t.Vfw2Ly),
                      children: (e) => (0, r.jsx)("i", L({ className: R.overlayWarningIcon }, e)),
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: o()(w.flexCenter, w.noWrap, w.justifyBetween, R.toggleContainer),
            children: [
                i,
                (0, r.jsx)(u.ua7, {
                    text: N.intl.string(N.t["1+O+Tk"]),
                    children: (t) => {
                        let { onMouseEnter: i, onMouseLeave: a } = t;
                        return (0, r.jsx)(u.P3F, {
                            "aria-label": N.intl.string(N.t["1+O+Tk"]),
                            className: R.toggleIcon,
                            onClick: () => K(!e),
                            onMouseEnter: i,
                            onMouseLeave: a,
                            children: n,
                        });
                    },
                }),
            ],
        });
    }
    function $() {
        let { detectable: e } = T,
            t =
                e && S
                    ? (0, r.jsx)(u.tEF, {
                          size: "md",
                          color: "currentColor",
                          className: R.toggleIconOn,
                          colorClass: R.fill,
                      })
                    : (0, r.jsx)(u.kZF, {
                          size: "md",
                          color: "currentColor",
                          className: S ? R.toggleIconOff : R.toggleIconInactive,
                          colorClass: R.fill,
                      });
        return (0, r.jsx)("div", {
            className: o()(w.flexCenter, w.noWrap, w.justifyBetween, R.toggleContainer),
            children: (0, r.jsx)(u.ua7, {
                text: N.intl.string(N.t.QmitzM),
                children: (e) => {
                    let { onMouseEnter: n, onMouseLeave: i } = e;
                    return S
                        ? (0, r.jsx)(u.P3F, {
                              "aria-label": N.intl.string(N.t.QmitzM),
                              className: R.toggleIcon,
                              onClick: z,
                              onMouseEnter: n,
                              onMouseLeave: i,
                              children: t,
                          })
                        : t;
                },
            }),
        });
    }
    function ee() {
        return x
            ? null
            : (0, r.jsx)("div", {
                  className: o()(w.flexCenter, w.noWrap, w.justifyBetween, R.toggleContainer),
                  children: (0, r.jsx)(u.ua7, {
                      text: N.intl.string(N.t["y0B+lp"]),
                      children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: n } = e;
                          return (0, r.jsx)(u.P3F, {
                              "aria-label": N.intl.string(N.t["y0B+lp"]),
                              className: R.toggleIcon,
                              onClick: q,
                              onMouseEnter: t,
                              onMouseLeave: n,
                              children: (0, r.jsx)(u.U65, {
                                  size: "md",
                                  color: "currentColor",
                                  className: R.toggleIconOn,
                                  colorClass: R.fill,
                              }),
                          });
                      },
                  }),
              });
    }
    function et() {
        return (0, r.jsx)(f.Z, {
            className: R.removeGame,
            onClick: H,
        });
    }
    let en = null != D && (0, h.rH)(T) === (0, h.rH)(D),
        er =
            (null != I && I.id === (null == D ? void 0 : D.id)) ||
            en ||
            (null != m && m.some((e) => e.id === (null == D ? void 0 : D.id)));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: V,
                children: [
                    (0, r.jsxs)("div", {
                        className: o()(R.gameNameLastPlayed, w.vertical),
                        children: [X(), Q()],
                    }),
                    c ? null : ee(),
                    $(),
                    J(),
                    (a && !c) || er ? null : et(),
                ],
            }),
            null != m &&
                m.length > 0 &&
                !a &&
                (0, r.jsx)("div", {
                    className: R.subgameContainer,
                    children: m.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(F, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: T,
                                    }),
                                    t !== m.length - 1 && (0, r.jsx)("div", { className: R.border }),
                                ],
                            },
                            (0, h.rH)(e),
                        ),
                    ),
                }),
        ],
    });
}
function V() {
    return (0, r.jsx)("div", {
        className: o()(w.flexCenter, R.notDetected, R.activeGame),
        children: (0, r.jsxs)("div", {
            className: o()(R.gameNameLastPlayed, w.vertical),
            children: [
                (0, r.jsx)("div", {
                    className: R.gameName,
                    children: N.intl.string(N.t["H68X9/"]),
                }),
                (0, r.jsx)("div", {
                    className: R.lastPlayed,
                    children: N.intl.string(N.t.T5Ilm5),
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
let Y = (0, I.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    W = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            a = (0, s.Wu)([h.ZP], () => h.ZP.getGamesSeen(!1)),
            { runningGame: l, overrideExePaths: c } = (0, s.cj)([h.ZP], () => ({
                runningGame: h.ZP.getVisibleGame(),
                overrideExePaths: Y(...h.ZP.getOverrides()),
            })),
            { gameHistory: d, robloxSubgameHistory: f } = i.useMemo(
                () =>
                    a.reduce((e, t) => ((0, b.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                        gameHistory: [],
                        robloxSubgameHistory: [],
                    }),
                [a],
            ),
            _ = i.useRef(null);
        function p() {
            return 0 === d.length
                ? (0, r.jsx)(H, { children: (0, r.jsx)(u.OZU, { children: N.intl.string(N.t["1yiJws"]) }) })
                : (0, r.jsxs)(u.hjN, {
                      className: D.marginTop40,
                      children: [
                          (0, r.jsx)(u.vwX, {
                              className: R.addedGamesTitle,
                              children: N.intl.string(N.t.jCOdv7),
                          }),
                          (0, r.jsx)(u.R94, {
                              className: R.addedGamesDescription,
                              type: u.geA.DESCRIPTION,
                              children: N.intl.format(N.t.KPA3m5, { igdbLink: B }),
                          }),
                          d.map((e) =>
                              (0, r.jsx)(
                                  F,
                                  {
                                      rawGame: e,
                                      isOverride: c.has(e.exePath),
                                      subgames: e.id === E.eB ? f : void 0,
                                  },
                                  (0, h.rH)(e),
                              ),
                          ),
                      ],
                  });
        }
        return (
            i.useEffect(() => ((0, m.Ky)(), m.P7), []),
            (0, r.jsxs)(A.Z, {
                title: n ? N.intl.string(N.t.AVDyEh) : null,
                className: t,
                children: [
                    null != l
                        ? (0, r.jsx)(
                              F,
                              {
                                  rawGame: l,
                                  isOverride: c.has(l.exePath),
                                  nowPlaying: !0,
                                  subgames: l.id === E.eB ? f : void 0,
                              },
                              (0, h.rH)(l),
                          )
                        : (0, r.jsx)(V, {}),
                    (0, r.jsxs)("div", {
                        className: o()(R.nowPlayingAdd, D.marginReset, D.marginTop8, D.marginBottom20),
                        children: [
                            (0, r.jsx)("span", { children: N.intl.string(N.t.xwhoqK) }),
                            (0, r.jsx)(u.yRy, {
                                targetElementRef: _,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(Z, { onClose: t });
                                },
                                align: "center",
                                position: "bottom",
                                children: (e) =>
                                    (0, r.jsx)(
                                        u.Avr,
                                        M(L({}, e), {
                                            buttonRef: _,
                                            variant: "primary",
                                            textVariant: "text-sm/medium",
                                            text: N.intl.string(N.t.GjgdXV),
                                        }),
                                    ),
                            }),
                        ],
                    }),
                    p(),
                ],
            })
        );
    };
