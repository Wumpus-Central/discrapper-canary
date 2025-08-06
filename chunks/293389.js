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
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: c, isSubgame: h = !1, parentGame: b } = e,
        C = (0, l.cj)([g.ZP, _.Z, j.Z], () => (0, g.FZ)(t, g.ZP, _.Z, j.Z)),
        O = (0, l.e7)([g.ZP], () => null == b || g.ZP.isDetectionEnabled(b)),
        v = (0, l.e7)([g.ZP], () => g.ZP.getVisibleGame()),
        [N, P] = r.useState(!1),
        Z = r.useMemo(
            () =>
                (0, x.le)(C)
                    ? h
                        ? C.gameName
                        : T.intl.formatToPlainString(T.t.G6BGd3, { subgameName: C.gameName })
                    : C.name,
            [C, h],
        ),
        [k, M] = r.useState(null != Z ? Z : "???"),
        B = a()(y.flexCenter, {
            [I.game]: !n,
            [I.activeGame]: n,
            [A.card]: !n,
            [I.nowPlaying]: null != C && n,
            [I.hoverCardNoMargin]: !n && !h,
            [I.subgame]: h,
            [I.gameHasSubgame]: null != c && c.length > 0,
        });
    function U() {
        u.Z.toggleDetection(C);
    }
    function V() {
        if (N) return;
        let e = null != C.id ? _.Z.getDetectableGame(C.id) : null;
        E.default.track(S.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, x.le)(C) ? C.gameName : C.name,
        }),
            (0, d.showToast)(
                (0, d.createToast)(
                    T.intl.formatToPlainString(T.t["6klMOj"], { gameName: (0, x.le)(C) ? C.gameName : C.name }),
                    d.ToastType.SUCCESS,
                ),
            ),
            P(!0);
    }
    let G =
        (null != b && b.id === (null == v ? void 0 : v.id)) ||
        C.id === (null == v ? void 0 : v.id) ||
        (null != c && c.some((e) => e.id === (null == v ? void 0 : v.id)));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: B,
                children: [
                    (0, i.jsxs)("div", {
                        className: a()(I.gameNameLastPlayed, y.vertical),
                        children: [
                            C.verified && !s
                                ? (0, i.jsxs)("div", {
                                      className: I.detectedApplication,
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: I.gameName,
                                              children: Z,
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
                                      value: k,
                                      onBlur: function () {
                                          C.name !== k && u.Z.editName(C, k);
                                      },
                                      onKeyDown: function (e) {
                                          13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => M(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: r } = C;
                                return (
                                    n || C.id === (null == v ? void 0 : v.id)
                                        ? (e = T.intl.string(T.t.VbV5dn))
                                        : null != t && "" !== t && (e = T.intl.format(T.t.gGeOEx, { when: t })),
                                    (0, i.jsx)("div", {
                                        className: I.lastPlayed,
                                        children: (0, i.jsx)(p.Z, {
                                            hoverText: null != r && "" !== r ? r.toUpperCase() : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    s || N
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
                                          onClick: V,
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
                        let { detectable: e } = C,
                            t =
                                e && O
                                    ? (0, i.jsx)(d.tEF, {
                                          size: "md",
                                          color: "currentColor",
                                          className: I.toggleIconOn,
                                          colorClass: I.fill,
                                      })
                                    : (0, i.jsx)(d.kZF, {
                                          size: "md",
                                          color: "currentColor",
                                          className: O ? I.toggleIconOff : I.toggleIconInactive,
                                          colorClass: I.fill,
                                      });
                        return (0, i.jsx)("div", {
                            className: a()(y.flexCenter, y.noWrap, y.justifyBetween, I.toggleContainer),
                            children: (0, i.jsx)(d.ua7, {
                                text: T.intl.string(T.t.QmitzM),
                                children: (e) => {
                                    let { onMouseEnter: n, onMouseLeave: r } = e;
                                    return O
                                        ? (0, i.jsx)(d.P3F, {
                                              "aria-label": T.intl.string(T.t.QmitzM),
                                              className: I.toggleIcon,
                                              onClick: U,
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
                        if (!w) return null;
                        let { overlay: e, overlayWarn: t } = C,
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
                                                return (t = !e), void u.Z.toggleOverlay(C, t, t);
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
                    (n && !s) || G
                        ? null
                        : (0, i.jsx)(m.Z, {
                              className: I.removeGame,
                              onClick: function () {
                                  u.Z.deleteEntry(C),
                                      null == c ||
                                          c.forEach((e) => {
                                              u.Z.deleteEntry(e);
                                          });
                              },
                          }),
                ],
            }),
            null != c &&
                c.length > 0 &&
                (0, i.jsx)("div", {
                    className: I.subgameContainer,
                    children: c.map((e, t) =>
                        (0, i.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(L, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: C,
                                    }),
                                    t !== c.length - 1 && (0, i.jsx)("div", { className: I.border }),
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
