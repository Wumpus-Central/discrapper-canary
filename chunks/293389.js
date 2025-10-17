n.d(t, { Z: () => H }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(481060),
    u = n(224706),
    d = n(225433),
    f = n(570928),
    _ = n(594190),
    p = n(320724),
    h = n(297700),
    m = n(817788),
    g = n(509003),
    E = n(77498),
    b = n(283595),
    y = n(626135),
    O = n(251625),
    v = n(358085),
    I = n(210887),
    T = n(273313),
    S = n(981631),
    A = n(388032),
    C = n(740508),
    N = n(315091),
    R = n(149715),
    P = n(197571);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
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
function x(e, t) {
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
let M = s.ZP.connectStores([I.Z], () => ({ theme: I.Z.theme }))(c.ubH),
    k = (0, v.isWindows)(),
    j = 18,
    U = "https://www.igdb.com/about";
function G(e) {
    let { onClose: t } = e,
        n = (0, s.e7)([_.ZP], () => _.ZP.getCandidateGames()),
        [a, l] = i.useState(null);
    function d(e) {
        l(e);
    }
    function f() {
        null != a && (u.Z.addGame(a.pid, a.name), t());
    }
    let p = n.map((e) => ({
        key: e.pid,
        value: e,
        label: null != e.name ? e.name : "",
    }));
    return (0, r.jsxs)(c.VqE, {
        className: o()(C.addGamePopout, N.elevationBorderHigh),
        "aria-label": A.intl.string(A.t.GTCx0t),
        children: [
            (0, r.jsx)(c.VcW, {
                placeholder: A.intl.string(A.t.XqMe3N),
                value: a,
                options: p,
                onChange: d,
                renderOptionLabel: (e) =>
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.label,
                    }),
            }),
            (0, r.jsx)(c.izJ, { className: o()(P.marginTop8, P.marginBottom8) }),
            (0, r.jsxs)("div", {
                className: o()(C.actions, R.horizontal),
                children: [
                    (0, r.jsx)(c.Avr, {
                        variant: "secondary",
                        text: A.intl.string(A.t["ETE/oK"]),
                        onClick: t,
                    }),
                    (0, r.jsx)(c.Button, {
                        variant: "primary",
                        text: A.intl.string(A.t.GTCx0t),
                        disabled: null == a,
                        onClick: f,
                    }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { rawGame: t, nowPlaying: a = !1, isOverride: p, subgames: m, isSubgame: O = !1, parentGame: v } = e,
        I = (0, s.cj)([_.ZP, E.Z, b.Z], () => (0, _.FZ)(t, _.ZP, E.Z, b.Z)),
        { canToggleDetection: T, isCurrentGameDetectionEnabled: N } = (0, s.cj)([_.ZP], () => ({
            canToggleDetection: null == v || _.ZP.isDetectionEnabled(v),
            isCurrentGameDetectionEnabled: _.ZP.isDetectionEnabled(I),
        })),
        P = (0, s.e7)([_.ZP], () => _.ZP.getVisibleGame()),
        [w, L] = i.useState(!1),
        M = i.useMemo(
            () =>
                (0, g.le)(I)
                    ? O
                        ? I.gameName
                        : A.intl.formatToPlainString(A.t.G6BGd3, { subgameName: I.gameName })
                    : I.name,
            [I, O],
        ),
        [U, G] = i.useState(null != M ? M : "???"),
        Z = o()(R.flexCenter, {
            [C.game]: !a,
            [C.activeGame]: a,
            [C.nowPlaying]: null != I && a,
            [C.subgame]: O,
            [C.gameHasSubgame]: null != m && m.length > 0,
        });
    function F() {
        u.Z.deleteEntry(I),
            null == m ||
                m.forEach((e) => {
                    u.Z.deleteEntry(e);
                });
    }
    function V() {
        I.name !== U && u.Z.editName(I, U);
    }
    function H(e) {
        13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault());
    }
    function Y(e) {
        u.Z.toggleOverlay(I, e, e);
    }
    function W() {
        null != m && m.length > 0 && N
            ? (0, c.ZDy)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 793030));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          x(D({}, t), {
                              title: A.intl.formatToPlainString(A.t.PZ4fKS, { platform: M }),
                              subtitle: A.intl.formatToPlainString(A.t.ZIQbfX, { platform: M }),
                              actions: [
                                  {
                                      text: A.intl.string(A.t["ETE/oK"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: A.intl.string(A.t.Fmjzt7),
                                      onClick: () => {
                                          u.Z.toggleDetection(I), t.onClose();
                                      },
                                      variant: "primary",
                                  },
                              ],
                          }),
                      );
              })
            : u.Z.toggleDetection(I);
    }
    function K() {
        if (w) return;
        let e = null != I.id ? E.Z.getDetectableGame(I.id) : null;
        y.default.track(S.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, g.le)(I) ? I.gameName : I.name,
        }),
            L(!0),
            (0, c.ZDy)(async () => {
                let { default: t } = await n.e("82077").then(n.bind(n, 953848));
                return (n) => {
                    var i, a, o;
                    return (0, r.jsx)(
                        t,
                        x(D({}, n), {
                            detectedActivity: {
                                name: null != (i = I.name) ? i : "",
                                application_id:
                                    null != (o = null != (a = null == e ? void 0 : e.id) ? a : I.id) ? o : void 0,
                                type: S.IIU.PLAYING,
                            },
                            onSubmitted: () => {},
                        }),
                    );
                };
            });
    }
    function z() {
        return I.verified && !p
            ? (0, r.jsxs)("div", {
                  className: C.detectedApplication,
                  children: [
                      (0, r.jsx)("div", {
                          className: C.gameName,
                          children: M,
                      }),
                      (0, r.jsx)(c.aML, {
                          "data-migration-pending": !0,
                          text: A.intl.string(A.t["4PJP5u"]),
                          children: (e) =>
                              (0, r.jsx)(
                                  h.Z,
                                  x(
                                      D(
                                          {
                                              className: C.gameVerifiedIcon,
                                              size: j,
                                              color: l.Z.unsafe_rawColors.BRAND_500.css,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, r.jsx)(c.kmB, {
                                              size: "custom",
                                              width: j,
                                              height: j,
                                              color: l.Z.unsafe_rawColors.WHITE_500.css,
                                          }),
                                      },
                                  ),
                              ),
                      }),
                  ],
              })
            : (0, r.jsx)("input", {
                  className: o()(C.gameName, C.gameNameInput),
                  type: "text",
                  maxLength: 128,
                  value: U,
                  onBlur: V,
                  onKeyDown: H,
                  onChange: (e) => G(e.target.value),
              });
    }
    function q() {
        let e,
            { played: t, exePath: n } = I;
        return (
            a || ee
                ? (e = A.intl.string(A.t.VbV5dn))
                : null != t && "" !== t && (e = A.intl.format(A.t.gGeOEx, { when: t })),
            (0, r.jsx)("div", {
                className: C.lastPlayed,
                children: (0, r.jsx)(f.Z, {
                    hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                    children: e,
                }),
            })
        );
    }
    function X() {
        if (!k || null != v) return null;
        let { overlay: e, overlayWarn: t } = I,
            n = e
                ? (0, r.jsx)(c.pzj, {
                      size: "md",
                      color: "currentColor",
                      className: C.toggleIconOn,
                      colorClass: C.fill,
                  })
                : (0, r.jsx)(c.o8v, {
                      size: "md",
                      color: "currentColor",
                      className: C.toggleIconOff,
                      colorClass: C.fill,
                  }),
            i = t
                ? (0, r.jsx)(c.aML, {
                      "data-migration-pending": !0,
                      text: A.intl.string(A.t.Vfw2Ly),
                      children: (e) => (0, r.jsx)("i", D({ className: C.overlayWarningIcon }, e)),
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: o()(R.flexCenter, R.noWrap, R.justifyBetween, C.toggleContainer),
            children: [
                i,
                (0, r.jsx)(c.aML, {
                    "data-migration-pending": !0,
                    text: A.intl.string(A.t["1+O+Tk"]),
                    children: (t) =>
                        (0, r.jsx)(
                            c.P3F,
                            x(D({}, t), {
                                "aria-label": A.intl.string(A.t["1+O+Tk"]),
                                className: C.toggleIcon,
                                onClick: () => Y(!e),
                                children: n,
                            }),
                        ),
                }),
            ],
        });
    }
    function Q() {
        let { detectable: e } = I,
            t =
                e && T
                    ? (0, r.jsx)(c.tEF, {
                          size: "md",
                          color: "currentColor",
                          className: C.toggleIconOn,
                          colorClass: C.fill,
                      })
                    : (0, r.jsx)(c.kZF, {
                          size: "md",
                          color: "currentColor",
                          className: T ? C.toggleIconOff : C.toggleIconInactive,
                          colorClass: C.fill,
                      });
        return (0, r.jsx)("div", {
            className: o()(R.flexCenter, R.noWrap, R.justifyBetween, C.toggleContainer),
            children: (0, r.jsx)(c.aML, {
                "data-migration-pending": !0,
                text: A.intl.string(A.t.QmitzM),
                children: (e) =>
                    T
                        ? (0, r.jsx)(
                              c.P3F,
                              x(D({}, e), {
                                  "aria-label": A.intl.string(A.t.QmitzM),
                                  className: C.toggleIcon,
                                  onClick: W,
                                  children: t,
                              }),
                          )
                        : t,
            }),
        });
    }
    function J() {
        return w
            ? null
            : (0, r.jsx)("div", {
                  className: o()(R.flexCenter, R.noWrap, R.justifyBetween, C.toggleContainer),
                  children: (0, r.jsx)(c.aML, {
                      "data-migration-pending": !0,
                      text: A.intl.string(A.t["y0B+lp"]),
                      children: (e) =>
                          (0, r.jsx)(
                              c.P3F,
                              x(D({}, e), {
                                  "aria-label": A.intl.string(A.t["y0B+lp"]),
                                  className: C.toggleIcon,
                                  onClick: K,
                                  children: (0, r.jsx)(c.U65, {
                                      size: "md",
                                      color: "currentColor",
                                      className: C.toggleIconOn,
                                      colorClass: C.fill,
                                  }),
                              }),
                          ),
                  }),
              });
    }
    function $() {
        return (0, r.jsx)(d.Z, {
            className: C.removeGame,
            onClick: F,
        });
    }
    let ee = null != P && (0, _.rH)(I) === (0, _.rH)(P),
        et =
            (null != v && v.id === (null == P ? void 0 : P.id)) ||
            ee ||
            (null != m && m.some((e) => e.id === (null == P ? void 0 : P.id)));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: Z,
                children: [
                    (0, r.jsxs)("div", {
                        className: o()(C.gameNameLastPlayed, R.vertical),
                        children: [z(), q()],
                    }),
                    p ? null : J(),
                    Q(),
                    X(),
                    (a && !p) || et ? null : $(),
                ],
            }),
            null != m &&
                m.length > 0 &&
                !a &&
                (0, r.jsx)("div", {
                    className: C.subgameContainer,
                    children: m.map((e, t) =>
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
                                    t !== m.length - 1 && (0, r.jsx)("div", { className: C.border }),
                                ],
                            },
                            (0, _.rH)(e),
                        ),
                    ),
                }),
        ],
    });
}
function Z() {
    return (0, r.jsx)("div", {
        className: o()(R.flexCenter, C.notDetected, C.activeGame),
        children: (0, r.jsxs)("div", {
            className: o()(C.gameNameLastPlayed, R.vertical),
            children: [
                (0, r.jsx)("div", {
                    className: C.gameName,
                    children: A.intl.string(A.t["H68X9/"]),
                }),
                (0, r.jsx)("div", {
                    className: C.lastPlayed,
                    children: A.intl.string(A.t.T5Ilm5),
                }),
            ],
        }),
    });
}
function F(e) {
    let { children: t } = e;
    return (0, r.jsxs)(M, {
        className: P.marginTop40,
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
let V = (0, O.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    H = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            a = (0, s.Wu)([_.ZP], () => _.ZP.getGamesSeen(!1)),
            { runningGame: l, overrideExePaths: u } = (0, s.cj)([_.ZP], () => ({
                runningGame: _.ZP.getVisibleGame(),
                overrideExePaths: V(..._.ZP.getOverrides()),
            })),
            { gameHistory: d, robloxSubgameHistory: f } = i.useMemo(
                () =>
                    a.reduce((e, t) => ((0, g.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                        gameHistory: [],
                        robloxSubgameHistory: [],
                    }),
                [a],
            ),
            h = i.useRef(null);
        function E() {
            return 0 === d.length
                ? (0, r.jsx)(F, { children: (0, r.jsx)(c.OZU, { children: A.intl.string(A.t["1yiJws"]) }) })
                : (0, r.jsx)(c.C3N, {
                      className: P.marginTop40,
                      label: A.intl.string(A.t.jCOdv7),
                      description: A.intl.format(A.t.KPA3m5, { igdbLink: U }),
                      children: d.map((e) =>
                          (0, r.jsx)(
                              B,
                              {
                                  rawGame: e,
                                  isOverride: u.has(e.exePath),
                                  subgames: e.id === m.eB ? f : void 0,
                              },
                              (0, _.rH)(e),
                          ),
                      ),
                  });
        }
        return (
            i.useEffect(() => ((0, p.Ky)(), p.P7), []),
            (0, r.jsxs)(T.Z, {
                title: n ? A.intl.string(A.t.AVDyEh) : null,
                className: t,
                children: [
                    null != l
                        ? (0, r.jsx)(
                              B,
                              {
                                  rawGame: l,
                                  isOverride: u.has(l.exePath),
                                  nowPlaying: !0,
                                  subgames: l.id === m.eB ? f : void 0,
                              },
                              (0, _.rH)(l),
                          )
                        : (0, r.jsx)(Z, {}),
                    (0, r.jsxs)("div", {
                        className: o()(C.nowPlayingAdd, P.marginReset, P.marginTop8, P.marginBottom20),
                        children: [
                            (0, r.jsx)("span", { children: A.intl.string(A.t.xwhoqK) }),
                            (0, r.jsx)(c.yRy, {
                                targetElementRef: h,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(G, { onClose: t });
                                },
                                align: "center",
                                position: "bottom",
                                children: (e) =>
                                    (0, r.jsx)(
                                        c.Avr,
                                        x(D({}, e), {
                                            buttonRef: h,
                                            variant: "primary",
                                            textVariant: "text-sm/medium",
                                            text: A.intl.string(A.t.GjgdXV),
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
