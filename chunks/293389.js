n.d(t, { Z: () => Y }), n(388685), n(539854);
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
    A = n(981631),
    C = n(388032),
    N = n(313911),
    R = n(285236),
    P = n(465106),
    w = n(10198);
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
let M = s.ZP.connectStores([S.Z], () => ({ theme: S.Z.theme }))(u.ubH),
    k = (0, T.isWindows)(),
    U = 18,
    G = "https://www.igdb.com/about";
function B(e) {
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
        className: o()(N.addGamePopout, R.elevationBorderHigh),
        "aria-label": C.intl.string(C.t.GTCx0t),
        children: [
            (0, r.jsx)(u.VcW, {
                placeholder: C.intl.string(C.t.XqMe3N),
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
            (0, r.jsx)(u.$i$, { className: o()(w.marginTop8, w.marginBottom8) }),
            (0, r.jsxs)("div", {
                className: o()(N.actions, P.horizontal),
                children: [
                    (0, r.jsx)(c.zx, {
                        className: N.cancelButton,
                        look: c.iL.LINK,
                        color: c.Tt.PRIMARY,
                        onClick: t,
                        children: C.intl.string(C.t["ETE/oK"]),
                    }),
                    (0, r.jsx)(u.zxk, {
                        variant: "primary",
                        text: C.intl.string(C.t.GTCx0t),
                        disabled: null == a,
                        onClick: _,
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { rawGame: t, nowPlaying: a = !1, isOverride: c, subgames: m, isSubgame: E = !1, parentGame: I } = e,
        T = (0, s.cj)([h.ZP, y.Z, O.Z], () => (0, h.FZ)(t, h.ZP, y.Z, O.Z)),
        { canToggleDetection: S, isCurrentGameDetectionEnabled: R } = (0, s.cj)([h.ZP], () => ({
            canToggleDetection: null == I || h.ZP.isDetectionEnabled(I),
            isCurrentGameDetectionEnabled: h.ZP.isDetectionEnabled(T),
        })),
        w = (0, p.P6)("UserSettingsGameActivity"),
        D = (0, s.e7)([h.ZP], () => h.ZP.getVisibleGame()),
        [L, M] = i.useState(!1),
        G = i.useMemo(
            () =>
                (0, b.le)(T)
                    ? E
                        ? T.gameName
                        : C.intl.formatToPlainString(C.t.G6BGd3, { subgameName: T.gameName })
                    : T.name,
            [T, E],
        ),
        [B, F] = i.useState(null != G ? G : "???"),
        V = o()(P.flexCenter, {
            [N.game]: !a,
            [N.activeGame]: a,
            [N.nowPlaying]: null != T && a,
            [N.subgame]: E,
            [N.gameHasSubgame]: null != m && m.length > 0,
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
        null != m && m.length > 0 && R
            ? (0, u.ZDy)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 82659));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          j(x({}, t), {
                              title: C.intl.formatToPlainString(C.t.PZ4fKS, { platform: G }),
                              subtitle: C.intl.formatToPlainString(C.t.ZIQbfX, { platform: G }),
                              actions: [
                                  {
                                      text: C.intl.string(C.t["ETE/oK"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: C.intl.string(C.t.Fmjzt7),
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
        if (L) return;
        let e = null != T.id ? y.Z.getDetectableGame(T.id) : null;
        v.default.track(A.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, b.le)(T) ? T.gameName : T.name,
        }),
            w
                ? (M(!0),
                  (0, u.ZDy)(async () => {
                      let { default: t } = await n.e("82077").then(n.bind(n, 953848));
                      return (n) => {
                          var i, a, o;
                          return (0, r.jsx)(
                              t,
                              j(x({}, n), {
                                  detectedActivity: {
                                      name: null != (i = T.name) ? i : "",
                                      application_id:
                                          null != (o = null != (a = null == e ? void 0 : e.id) ? a : T.id) ? o : void 0,
                                      type: A.IIU.PLAYING,
                                  },
                                  onSubmitted: () => {},
                              }),
                          );
                      };
                  }))
                : ((0, u.showToast)(
                      (0, u.createToast)(
                          C.intl.formatToPlainString(C.t["6klMOj"], { gameName: (0, b.le)(T) ? T.gameName : T.name }),
                          u.ToastType.SUCCESS,
                      ),
                  ),
                  M(!0));
    }
    function X() {
        return T.verified && !c
            ? (0, r.jsxs)("div", {
                  className: N.detectedApplication,
                  children: [
                      (0, r.jsx)("div", {
                          className: N.gameName,
                          children: G,
                      }),
                      (0, r.jsx)(u.ua7, {
                          text: C.intl.string(C.t["4PJP5u"]),
                          children: (e) =>
                              (0, r.jsx)(
                                  g.Z,
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
                                          children: (0, r.jsx)(u.kmB, {
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
                  value: B,
                  onBlur: Y,
                  onKeyDown: W,
                  onChange: (e) => F(e.target.value),
              });
    }
    function Q() {
        let e,
            { played: t, exePath: n } = T;
        return (
            a || en
                ? (e = C.intl.string(C.t.VbV5dn))
                : null != t && "" !== t && (e = C.intl.format(C.t.gGeOEx, { when: t })),
            (0, r.jsx)("div", {
                className: N.lastPlayed,
                children: (0, r.jsx)(_.Z, {
                    hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                    children: e,
                }),
            })
        );
    }
    function J() {
        if (!k || null != I) return null;
        let { overlay: e, overlayWarn: t } = T,
            n = e
                ? (0, r.jsx)(u.pzj, {
                      size: "md",
                      color: "currentColor",
                      className: N.toggleIconOn,
                      colorClass: N.fill,
                  })
                : (0, r.jsx)(u.o8v, {
                      size: "md",
                      color: "currentColor",
                      className: N.toggleIconOff,
                      colorClass: N.fill,
                  }),
            i = t
                ? (0, r.jsx)(u.ua7, {
                      text: C.intl.string(C.t.Vfw2Ly),
                      children: (e) => (0, r.jsx)("i", x({ className: N.overlayWarningIcon }, e)),
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: o()(P.flexCenter, P.noWrap, P.justifyBetween, N.toggleContainer),
            children: [
                i,
                (0, r.jsx)(u.ua7, {
                    text: C.intl.string(C.t["1+O+Tk"]),
                    children: (t) => {
                        let { onMouseEnter: i, onMouseLeave: a } = t;
                        return (0, r.jsx)(u.P3F, {
                            "aria-label": C.intl.string(C.t["1+O+Tk"]),
                            className: N.toggleIcon,
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
                          className: N.toggleIconOn,
                          colorClass: N.fill,
                      })
                    : (0, r.jsx)(u.kZF, {
                          size: "md",
                          color: "currentColor",
                          className: S ? N.toggleIconOff : N.toggleIconInactive,
                          colorClass: N.fill,
                      });
        return (0, r.jsx)("div", {
            className: o()(P.flexCenter, P.noWrap, P.justifyBetween, N.toggleContainer),
            children: (0, r.jsx)(u.ua7, {
                text: C.intl.string(C.t.QmitzM),
                children: (e) => {
                    let { onMouseEnter: n, onMouseLeave: i } = e;
                    return S
                        ? (0, r.jsx)(u.P3F, {
                              "aria-label": C.intl.string(C.t.QmitzM),
                              className: N.toggleIcon,
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
        return L
            ? null
            : (0, r.jsx)("div", {
                  className: o()(P.flexCenter, P.noWrap, P.justifyBetween, N.toggleContainer),
                  children: (0, r.jsx)(u.ua7, {
                      text: C.intl.string(C.t["y0B+lp"]),
                      children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: n } = e;
                          return (0, r.jsx)(u.P3F, {
                              "aria-label": C.intl.string(C.t["y0B+lp"]),
                              className: N.toggleIcon,
                              onClick: q,
                              onMouseEnter: t,
                              onMouseLeave: n,
                              children: (0, r.jsx)(u.U65, {
                                  size: "md",
                                  color: "currentColor",
                                  className: N.toggleIconOn,
                                  colorClass: N.fill,
                              }),
                          });
                      },
                  }),
              });
    }
    function et() {
        return (0, r.jsx)(f.Z, {
            className: N.removeGame,
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
                        className: o()(N.gameNameLastPlayed, P.vertical),
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
                    className: N.subgameContainer,
                    children: m.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(Z, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: T,
                                    }),
                                    t !== m.length - 1 && (0, r.jsx)("div", { className: N.border }),
                                ],
                            },
                            (0, h.rH)(e),
                        ),
                    ),
                }),
        ],
    });
}
function F() {
    return (0, r.jsx)("div", {
        className: o()(P.flexCenter, N.notDetected, N.activeGame),
        children: (0, r.jsxs)("div", {
            className: o()(N.gameNameLastPlayed, P.vertical),
            children: [
                (0, r.jsx)("div", {
                    className: N.gameName,
                    children: C.intl.string(C.t["H68X9/"]),
                }),
                (0, r.jsx)("div", {
                    className: N.lastPlayed,
                    children: C.intl.string(C.t.T5Ilm5),
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
let H = (0, I.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    Y = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            a = (0, s.Wu)([h.ZP], () => h.ZP.getGamesSeen(!1)),
            { runningGame: l, overrideExePaths: d } = (0, s.cj)([h.ZP], () => ({
                runningGame: h.ZP.getVisibleGame(),
                overrideExePaths: H(...h.ZP.getOverrides()),
            })),
            { gameHistory: f, robloxSubgameHistory: _ } = i.useMemo(
                () =>
                    a.reduce((e, t) => ((0, b.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                        gameHistory: [],
                        robloxSubgameHistory: [],
                    }),
                [a],
            ),
            p = i.useRef(null);
        function g() {
            return 0 === f.length
                ? (0, r.jsx)(V, { children: (0, r.jsx)(u.OZU, { children: C.intl.string(C.t["1yiJws"]) }) })
                : (0, r.jsxs)(u.hjN, {
                      className: w.marginTop40,
                      children: [
                          (0, r.jsx)(u.vwX, {
                              className: N.addedGamesTitle,
                              children: C.intl.string(C.t.jCOdv7),
                          }),
                          (0, r.jsx)(u.R94, {
                              className: N.addedGamesDescription,
                              type: u.geA.DESCRIPTION,
                              children: C.intl.format(C.t.KPA3m5, { igdbLink: G }),
                          }),
                          f.map((e) =>
                              (0, r.jsx)(
                                  Z,
                                  {
                                      rawGame: e,
                                      isOverride: d.has(e.exePath),
                                      subgames: e.id === E.eB ? _ : void 0,
                                  },
                                  (0, h.rH)(e),
                              ),
                          ),
                      ],
                  });
        }
        return (
            i.useEffect(() => ((0, m.Ky)(), m.P7), []),
            (0, r.jsxs)(u.hjN, {
                tag: "h1",
                title: n ? C.intl.string(C.t.AVDyEh) : null,
                className: t,
                children: [
                    null != l
                        ? (0, r.jsx)(
                              Z,
                              {
                                  rawGame: l,
                                  isOverride: d.has(l.exePath),
                                  nowPlaying: !0,
                                  subgames: l.id === E.eB ? _ : void 0,
                              },
                              (0, h.rH)(l),
                          )
                        : (0, r.jsx)(F, {}),
                    (0, r.jsxs)("div", {
                        className: o()(N.nowPlayingAdd, w.marginReset, w.marginTop8, w.marginBottom20),
                        children: [
                            (0, r.jsx)("span", { children: C.intl.string(C.t.xwhoqK) }),
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
                                        c.zx,
                                        j(x({}, e), {
                                            look: c.iL.LINK,
                                            size: c.Ph.MIN,
                                            color: c.Tt.LINK,
                                            buttonRef: p,
                                            children: C.intl.string(C.t.GjgdXV),
                                        }),
                                    ),
                            }),
                        ],
                    }),
                    g(),
                ],
            })
        );
    };
