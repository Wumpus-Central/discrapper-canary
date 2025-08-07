n.d(t, { Z: () => V }), n(388685), n(539854);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(692547),
    c = n(755721),
    d = n(481060),
    u = n(224706),
    m = n(225433),
    p = n(570928),
    g = n(594190),
    h = n(320724),
    f = n(297700),
    b = n(817788),
    x = n(509003),
    _ = n(77498),
    j = n(283595),
    E = n(626135),
    C = n(251625),
    O = n(358085),
    v = n(210887),
    S = n(981631),
    T = n(388032),
    I = n(443474),
    N = n(20795),
    y = n(893354),
    A = n(588866),
    P = n(20493);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = l.ZP.connectStores([v.Z], () => ({ theme: v.Z.theme }))(d.ubH),
    w = (0, O.isWindows)();
function k(e) {
    let { onClose: t } = e,
        n = (0, l.e7)([g.ZP], () => g.ZP.getCandidateGames()),
        [s, o] = r.useState(null),
        m = n.map((e) => ({
            key: e.pid,
            value: e,
            label: null != e.name ? e.name : "",
        }));
    return (0, i.jsxs)(d.VqE, {
        className: a()(I.addGamePopout, N.elevationBorderHigh),
        "aria-label": T.intl.string(T.t.GTCx0t),
        children: [
            (0, i.jsx)(d.VcW, {
                placeholder: T.intl.string(T.t.XqMe3N),
                value: s,
                options: m,
                onChange: function (e) {
                    o(e);
                },
                renderOptionLabel: (e) =>
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.label,
                    }),
            }),
            (0, i.jsx)(d.$i$, { className: a()(P.marginTop8, P.marginBottom8) }),
            (0, i.jsxs)("div", {
                className: a()(I.actions, y.horizontal),
                children: [
                    (0, i.jsx)(c.zx, {
                        className: I.cancelButton,
                        look: c.iL.LINK,
                        color: c.Tt.PRIMARY,
                        onClick: t,
                        children: T.intl.string(T.t["ETE/oK"]),
                    }),
                    (0, i.jsx)(d.zxk, {
                        variant: "primary",
                        text: T.intl.string(T.t.GTCx0t),
                        disabled: null == s,
                        onClick: function () {
                            null != s && (u.Z.addGame(s.pid, s.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { rawGame: t, nowPlaying: s = !1, isOverride: c, subgames: h, isSubgame: b = !1, parentGame: C } = e,
        O = (0, l.cj)([g.ZP, _.Z, j.Z], () => (0, g.FZ)(t, g.ZP, _.Z, j.Z)),
        { canToggleDetection: v, isCurrentGameDetectionEnabled: N } = (0, l.cj)([g.ZP], () => ({
            canToggleDetection: null == C || g.ZP.isDetectionEnabled(C),
            isCurrentGameDetectionEnabled: g.ZP.isDetectionEnabled(O),
        })),
        P = (0, l.e7)([g.ZP], () => g.ZP.getVisibleGame()),
        [Z, k] = r.useState(!1),
        M = r.useMemo(
            () =>
                (0, x.le)(O)
                    ? b
                        ? O.gameName
                        : T.intl.formatToPlainString(T.t.G6BGd3, { subgameName: O.gameName })
                    : O.name,
            [O, b],
        ),
        [B, U] = r.useState(null != M ? M : "???"),
        V = a()(y.flexCenter, {
            [I.game]: !s,
            [I.activeGame]: s,
            [A.card]: !s,
            [I.nowPlaying]: null != O && s,
            [I.hoverCardNoMargin]: !s && !b,
            [I.subgame]: b,
            [I.gameHasSubgame]: null != h && h.length > 0,
        });
    function G() {
        null != h && h.length > 0 && N
            ? (0, d.ZDy)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 82659));
                  return (t) =>
                      (0, i.jsx)(
                          e,
                          D(R({}, t), {
                              title: T.intl.formatToPlainString(T.t.PZ4fKS, { platform: M }),
                              subtitle: T.intl.formatToPlainString(T.t.ZIQbfX, { platform: M }),
                              actions: [
                                  {
                                      text: T.intl.string(T.t["ETE/oK"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: T.intl.string(T.t.Fmjzt7),
                                      onClick: () => u.Z.toggleDetection(O),
                                      variant: "primary",
                                  },
                              ],
                          }),
                      );
              })
            : u.Z.toggleDetection(O);
    }
    function F() {
        if (Z) return;
        let e = null != O.id ? _.Z.getDetectableGame(O.id) : null;
        E.default.track(S.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, x.le)(O) ? O.gameName : O.name,
        }),
            (0, d.showToast)(
                (0, d.createToast)(
                    T.intl.formatToPlainString(T.t["6klMOj"], { gameName: (0, x.le)(O) ? O.gameName : O.name }),
                    d.ToastType.SUCCESS,
                ),
            ),
            k(!0);
    }
    let H =
        (null != C && C.id === (null == P ? void 0 : P.id)) ||
        O.id === (null == P ? void 0 : P.id) ||
        (null != h && h.some((e) => e.id === (null == P ? void 0 : P.id)));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: V,
                children: [
                    (0, i.jsxs)("div", {
                        className: a()(I.gameNameLastPlayed, y.vertical),
                        children: [
                            O.verified && !c
                                ? (0, i.jsxs)("div", {
                                      className: I.detectedApplication,
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: I.gameName,
                                              children: M,
                                          }),
                                          (0, i.jsx)(d.ua7, {
                                              text: T.intl.string(T.t["4PJP5u"]),
                                              children: (e) =>
                                                  (0, i.jsx)(
                                                      f.Z,
                                                      D(
                                                          R(
                                                              {
                                                                  className: I.gameVerifiedIcon,
                                                                  size: 18,
                                                                  color: o.Z.unsafe_rawColors.BRAND_500.css,
                                                              },
                                                              e,
                                                          ),
                                                          {
                                                              children: (0, i.jsx)(d.kmB, {
                                                                  size: "custom",
                                                                  width: 18,
                                                                  height: 18,
                                                                  color: o.Z.unsafe_rawColors.WHITE_500.css,
                                                              }),
                                                          },
                                                      ),
                                                  ),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)("input", {
                                      className: a()(I.gameName, I.gameNameInput),
                                      type: "text",
                                      maxLength: 128,
                                      value: B,
                                      onBlur: function () {
                                          O.name !== B && u.Z.editName(O, B);
                                      },
                                      onKeyDown: function (e) {
                                          13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => U(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: n } = O;
                                return (
                                    s || O.id === (null == P ? void 0 : P.id)
                                        ? (e = T.intl.string(T.t.VbV5dn))
                                        : null != t && "" !== t && (e = T.intl.format(T.t.gGeOEx, { when: t })),
                                    (0, i.jsx)("div", {
                                        className: I.lastPlayed,
                                        children: (0, i.jsx)(p.Z, {
                                            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    c || Z
                        ? null
                        : (0, i.jsx)("div", {
                              className: a()(y.flexCenter, y.noWrap, y.justifyBetween, I.toggleContainer),
                              children: (0, i.jsx)(d.ua7, {
                                  text: T.intl.string(T.t["y0B+lp"]),
                                  children: (e) => {
                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                      return (0, i.jsx)(d.P3F, {
                                          "aria-label": T.intl.string(T.t["y0B+lp"]),
                                          className: I.toggleIcon,
                                          onClick: F,
                                          onMouseEnter: t,
                                          onMouseLeave: n,
                                          children: (0, i.jsx)(d.U65, {
                                              size: "md",
                                              color: "currentColor",
                                              className: I.toggleIconOn,
                                              colorClass: I.fill,
                                          }),
                                      });
                                  },
                              }),
                          }),
                    (function () {
                        let { detectable: e } = O,
                            t =
                                e && v
                                    ? (0, i.jsx)(d.tEF, {
                                          size: "md",
                                          color: "currentColor",
                                          className: I.toggleIconOn,
                                          colorClass: I.fill,
                                      })
                                    : (0, i.jsx)(d.kZF, {
                                          size: "md",
                                          color: "currentColor",
                                          className: v ? I.toggleIconOff : I.toggleIconInactive,
                                          colorClass: I.fill,
                                      });
                        return (0, i.jsx)("div", {
                            className: a()(y.flexCenter, y.noWrap, y.justifyBetween, I.toggleContainer),
                            children: (0, i.jsx)(d.ua7, {
                                text: T.intl.string(T.t.QmitzM),
                                children: (e) => {
                                    let { onMouseEnter: n, onMouseLeave: r } = e;
                                    return v
                                        ? (0, i.jsx)(d.P3F, {
                                              "aria-label": T.intl.string(T.t.QmitzM),
                                              className: I.toggleIcon,
                                              onClick: G,
                                              onMouseEnter: n,
                                              onMouseLeave: r,
                                              children: t,
                                          })
                                        : t;
                                },
                            }),
                        });
                    })(),
                    (function () {
                        if (!w || (0, x.le)(O)) return null;
                        let { overlay: e, overlayWarn: t } = O,
                            n = e
                                ? (0, i.jsx)(d.pzj, {
                                      size: "md",
                                      color: "currentColor",
                                      className: I.toggleIconOn,
                                      colorClass: I.fill,
                                  })
                                : (0, i.jsx)(d.o8v, {
                                      size: "md",
                                      color: "currentColor",
                                      className: I.toggleIconOff,
                                      colorClass: I.fill,
                                  }),
                            r = t
                                ? (0, i.jsx)(d.ua7, {
                                      text: T.intl.string(T.t.Vfw2Ly),
                                      children: (e) => (0, i.jsx)("i", R({ className: I.overlayWarningIcon }, e)),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: a()(y.flexCenter, y.noWrap, y.justifyBetween, I.toggleContainer),
                            children: [
                                r,
                                (0, i.jsx)(d.ua7, {
                                    text: T.intl.string(T.t["1+O+Tk"]),
                                    children: (t) => {
                                        let { onMouseEnter: r, onMouseLeave: s } = t;
                                        return (0, i.jsx)(d.P3F, {
                                            "aria-label": T.intl.string(T.t["1+O+Tk"]),
                                            className: I.toggleIcon,
                                            onClick: () => {
                                                var t;
                                                return (t = !e), void u.Z.toggleOverlay(O, t, t);
                                            },
                                            onMouseEnter: r,
                                            onMouseLeave: s,
                                            children: n,
                                        });
                                    },
                                }),
                            ],
                        });
                    })(),
                    (s && !c) || H
                        ? null
                        : (0, i.jsx)(m.Z, {
                              className: I.removeGame,
                              onClick: function () {
                                  u.Z.deleteEntry(O),
                                      null == h ||
                                          h.forEach((e) => {
                                              u.Z.deleteEntry(e);
                                          });
                              },
                          }),
                ],
            }),
            null != h &&
                h.length > 0 &&
                (0, i.jsx)("div", {
                    className: I.subgameContainer,
                    children: h.map((e, t) =>
                        (0, i.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(L, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: O,
                                    }),
                                    t !== h.length - 1 && (0, i.jsx)("div", { className: I.border }),
                                ],
                            },
                            (0, g.rH)(e),
                        ),
                    ),
                }),
        ],
    });
}
function M() {
    return (0, i.jsx)("div", {
        className: a()(y.flexCenter, I.notDetected, I.activeGame),
        children: (0, i.jsxs)("div", {
            className: a()(I.gameNameLastPlayed, y.vertical),
            children: [
                (0, i.jsx)("div", {
                    className: I.gameName,
                    children: T.intl.string(T.t["H68X9/"]),
                }),
                (0, i.jsx)("div", {
                    className: I.lastPlayed,
                    children: T.intl.string(T.t.T5Ilm5),
                }),
            ],
        }),
    });
}
function B(e) {
    let { children: t } = e;
    return (0, i.jsxs)(Z, {
        className: P.marginTop40,
        children: [
            (0, i.jsx)(d.oxh, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250,
            }),
            t,
        ],
    });
}
let U = (0, C.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    V = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            s = (0, l.Wu)([g.ZP], () => g.ZP.getGamesSeen(!1)),
            { runningGame: o, overrideExePaths: u } = (0, l.cj)([g.ZP], () => ({
                runningGame: g.ZP.getVisibleGame(),
                overrideExePaths: U(...g.ZP.getOverrides()),
            })),
            { gameHistory: m, robloxSubgameHistory: p } = r.useMemo(
                () =>
                    s.reduce((e, t) => ((0, x.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                        gameHistory: [],
                        robloxSubgameHistory: [],
                    }),
                [s],
            ),
            f = r.useRef(null);
        return (
            r.useEffect(() => ((0, h.Ky)(), h.P7), []),
            (0, i.jsxs)(d.hjN, {
                tag: "h1",
                title: n ? T.intl.string(T.t.AVDyEh) : null,
                className: t,
                children: [
                    null != o
                        ? (0, i.jsx)(
                              L,
                              {
                                  rawGame: o,
                                  isOverride: u.has(o.exePath),
                                  nowPlaying: !0,
                              },
                              (0, g.rH)(o),
                          )
                        : (0, i.jsx)(M, {}),
                    (0, i.jsxs)("div", {
                        className: a()(I.nowPlayingAdd, P.marginReset, P.marginTop8, P.marginBottom20),
                        children: [
                            (0, i.jsx)("span", { children: T.intl.string(T.t.xwhoqK) }),
                            (0, i.jsx)(d.yRy, {
                                targetElementRef: f,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsx)(k, { onClose: t });
                                },
                                align: "center",
                                position: "bottom",
                                children: (e) =>
                                    (0, i.jsx)(
                                        c.zx,
                                        D(R({}, e), {
                                            look: c.iL.LINK,
                                            size: c.Ph.MIN,
                                            color: c.Tt.LINK,
                                            buttonRef: f,
                                            children: T.intl.string(T.t.GjgdXV),
                                        }),
                                    ),
                            }),
                        ],
                    }),
                    0 === m.length
                        ? (0, i.jsx)(B, { children: (0, i.jsx)(d.OZU, { children: T.intl.string(T.t["1yiJws"]) }) })
                        : (0, i.jsxs)(d.hjN, {
                              className: P.marginTop40,
                              children: [
                                  (0, i.jsx)(d.vwX, {
                                      className: P.marginBottom4,
                                      children: T.intl.string(T.t.jCOdv7),
                                  }),
                                  (0, i.jsx)(d.R94, {
                                      type: d.geA.DESCRIPTION,
                                      children: T.intl.format(T.t.KPA3m5, { igdbLink: "https://www.igdb.com/about" }),
                                  }),
                                  m.map((e) =>
                                      (0, i.jsx)(
                                          L,
                                          {
                                              rawGame: e,
                                              isOverride: u.has(e.exePath),
                                              subgames: e.id === b.eB ? p : void 0,
                                          },
                                          (0, g.rH)(e),
                                      ),
                                  ),
                              ],
                          }),
                ],
            })
        );
    };
