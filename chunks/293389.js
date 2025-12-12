n.d(t, { Z: () => K }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(668339),
    u = n(681715),
    d = n(481060),
    f = n(224706),
    p = n(225433),
    _ = n(570928),
    m = n(594190),
    h = n(320724),
    g = n(297700),
    E = n(817788),
    b = n(509003),
    y = n(77498),
    O = n(283595),
    v = n(626135),
    S = n(251625),
    I = n(358085),
    T = n(210887),
    C = n(273313),
    A = n(981631),
    N = n(295907),
    P = n(388032),
    R = n(675433),
    w = n(533348),
    D = n(727829),
    x = n(478411);
function L(e, t, n) {
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
function j(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = s.ZP.connectStores([T.Z], () => ({ theme: T.Z.theme }))(d.ubH),
    G = (0, I.isWindows)(),
    Z = 18,
    F = "https://www.igdb.com/about";
function B(e) {
    let { onClose: t } = e,
        n = (0, s.e7)([m.ZP], () => m.ZP.getCandidateGames()),
        [a, l] = i.useState(null);
    function u(e) {
        l(e);
    }
    function p() {
        null != a && (f.Z.addGame(a.pid, a.name), t());
    }
    let _ = n.map((e) => ({
        key: e.pid,
        value: e,
        label: null != e.name ? e.name : "",
    }));
    return (0, r.jsxs)(d.VqE, {
        className: o()(R.addGamePopout, w.elevationBorderHigh),
        "aria-label": P.intl.string(P.t.GTCx0p),
        children: [
            (0, r.jsx)(c.d, {
                placeholder: P.intl.string(P.t.XqMe3N),
                value: a,
                options: _,
                onChange: u,
                renderOptionLabel: (e) =>
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: e.label,
                    }),
            }),
            (0, r.jsx)(d.izJ, { className: o()(x.marginTop8, x.marginBottom8) }),
            (0, r.jsxs)("div", {
                className: o()(R.actions, D.horizontal),
                children: [
                    (0, r.jsx)(d.Avr, {
                        variant: "secondary",
                        text: P.intl.string(P.t["ETE/oC"]),
                        onClick: t,
                    }),
                    (0, r.jsx)(d.Button, {
                        variant: "primary",
                        text: P.intl.string(P.t.GTCx0p),
                        disabled: null == a,
                        onClick: p,
                    }),
                ],
            }),
        ],
    });
}
function V(e) {
    let { rawGame: t, nowPlaying: a = !1, isOverride: c, subgames: h, isSubgame: E = !1, parentGame: S } = e,
        I = (0, s.cj)([m.ZP, y.Z, O.Z], () => (0, m.FZ)(t, m.ZP, y.Z, O.Z)),
        { canToggleDetection: T, isCurrentGameDetectionEnabled: C } = (0, s.cj)([m.ZP], () => ({
            canToggleDetection: null == S || m.ZP.isDetectionEnabled(S),
            isCurrentGameDetectionEnabled: m.ZP.isDetectionEnabled(I),
        })),
        w = (0, s.e7)([m.ZP], () => m.ZP.getVisibleGame()),
        [x, L] = i.useState(!1),
        M = i.useMemo(
            () =>
                (0, b.le)(I)
                    ? E
                        ? I.gameName
                        : P.intl.formatToPlainString(P.t.G6BGdx, { subgameName: I.gameName })
                    : I.name,
            [I, E],
        ),
        [U, F] = i.useState(null != M ? M : "???"),
        B = o()(D.flexCenter, {
            [R.game]: !a,
            [R.activeGame]: a,
            [R.nowPlaying]: null != I && a,
            [R.subgame]: E,
            [R.gameHasSubgame]: null != h && h.length > 0,
        });
    function H() {
        f.Z.deleteEntry(I),
            null == h ||
                h.forEach((e) => {
                    f.Z.deleteEntry(e);
                });
    }
    function Y() {
        I.name !== U && f.Z.editName(I, U);
    }
    function W(e) {
        e.key === N.vn.ENTER && (e.currentTarget.blur(), e.preventDefault());
    }
    function K(e) {
        f.Z.toggleOverlay(I, e, e);
    }
    function z() {
        null != h && h.length > 0 && C
            ? (0, d.ZDy)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 793030));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          k(j({}, t), {
                              title: P.intl.formatToPlainString(P.t.PZ4fKc, { platform: M }),
                              subtitle: P.intl.formatToPlainString(P.t.ZIQbfb, { platform: M }),
                              actions: [
                                  {
                                      text: P.intl.string(P.t["ETE/oC"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: P.intl.string(P.t.Fmjztz),
                                      onClick: () => {
                                          f.Z.toggleDetection(I), t.onClose();
                                      },
                                      variant: "primary",
                                  },
                              ],
                          }),
                      );
              })
            : f.Z.toggleDetection(I);
    }
    function q() {
        if (x) return;
        let e = null != I.id ? y.Z.getDetectableGame(I.id) : null;
        v.default.track(A.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
            application_id: null == e ? void 0 : e.id,
            game_name: (0, b.le)(I) ? I.gameName : I.name,
        }),
            L(!0),
            (0, d.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e("82077"), n.e("30709")]).then(n.bind(n, 953848));
                return (n) => {
                    var i, a, o;
                    return (0, r.jsx)(
                        t,
                        k(j({}, n), {
                            detectedActivity: {
                                name: null != (i = I.name) ? i : "",
                                application_id:
                                    null != (o = null != (a = null == e ? void 0 : e.id) ? a : I.id) ? o : void 0,
                                type: A.IIU.PLAYING,
                            },
                            onSubmitted: () => {},
                        }),
                    );
                };
            });
    }
    function Q() {
        return I.verified && !c
            ? (0, r.jsxs)("div", {
                  className: R.detectedApplication,
                  children: [
                      (0, r.jsx)("div", {
                          className: R.gameName,
                          children: M,
                      }),
                      (0, r.jsx)(u.u, {
                          text: P.intl.string(P.t["4PJP5p"]),
                          children: (0, r.jsx)(g.Z, {
                              className: R.gameVerifiedIcon,
                              size: Z,
                              color: l.Z.unsafe_rawColors.BRAND_500.css,
                              children: (0, r.jsx)(d.kmB, {
                                  size: "custom",
                                  width: Z,
                                  height: Z,
                                  color: l.Z.unsafe_rawColors.WHITE_500.css,
                              }),
                          }),
                      }),
                  ],
              })
            : (0, r.jsx)("input", {
                  className: o()(R.gameName, R.gameNameInput),
                  type: "text",
                  maxLength: 128,
                  value: U,
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
                ? (e = P.intl.string(P.t.VbV5dv))
                : null != t && "" !== t && (e = P.intl.format(P.t["gGeOE+"], { when: t })),
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
        if (!G || null != S) return null;
        let { overlay: e, overlayWarn: t } = I,
            n = e
                ? (0, r.jsx)(d.pzj, {
                      size: "md",
                      color: "currentColor",
                      className: R.toggleIconOn,
                      colorClass: R.fill,
                  })
                : (0, r.jsx)(d.o8v, {
                      size: "md",
                      color: "currentColor",
                      className: R.toggleIconOff,
                      colorClass: R.fill,
                  }),
            i = t
                ? (0, r.jsx)(u.u, {
                      text: P.intl.string(P.t.Vfw2L5),
                      children: (0, r.jsx)("i", { className: R.overlayWarningIcon }),
                  })
                : null;
        return (0, r.jsxs)("div", {
            className: o()(D.flexCenter, D.noWrap, D.justifyBetween, R.toggleContainer),
            children: [
                i,
                (0, r.jsx)(u.u, {
                    text: P.intl.string(P.t["1+O+Tu"]),
                    children: (0, r.jsx)(d.P3F, {
                        "aria-label": P.intl.string(P.t["1+O+Tu"]),
                        className: R.toggleIcon,
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
                    ? (0, r.jsx)(d.tEF, {
                          size: "md",
                          color: "currentColor",
                          className: R.toggleIconOn,
                          colorClass: R.fill,
                      })
                    : (0, r.jsx)(d.kZF, {
                          size: "md",
                          color: "currentColor",
                          className: T ? R.toggleIconOff : R.toggleIconInactive,
                          colorClass: R.fill,
                      });
        return (0, r.jsx)("div", {
            className: o()(D.flexCenter, D.noWrap, D.justifyBetween, R.toggleContainer),
            children: (0, r.jsx)(u.u, {
                text: P.intl.string(P.t.QmitzM),
                children: T
                    ? (0, r.jsx)(d.P3F, {
                          "aria-label": P.intl.string(P.t.QmitzM),
                          className: R.toggleIcon,
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
                  className: o()(D.flexCenter, D.noWrap, D.justifyBetween, R.toggleContainer),
                  children: (0, r.jsx)(u.u, {
                      text: P.intl.string(P.t["y0B+lo"]),
                      children: (0, r.jsx)(d.P3F, {
                          "aria-label": P.intl.string(P.t["y0B+lo"]),
                          className: R.toggleIcon,
                          onClick: q,
                          children: (0, r.jsx)(d.U65, {
                              size: "md",
                              color: "currentColor",
                              className: R.toggleIconOn,
                              colorClass: R.fill,
                          }),
                      }),
                  }),
              });
    }
    function et() {
        return (0, r.jsx)(p.Z, {
            className: R.removeGame,
            onClick: H,
        });
    }
    let en = null != w && (0, m.rH)(I) === (0, m.rH)(w),
        er =
            (null != S && S.id === (null == w ? void 0 : w.id)) ||
            en ||
            (null != h && h.some((e) => e.id === (null == w ? void 0 : w.id)));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: B,
                children: [
                    (0, r.jsxs)("div", {
                        className: o()(R.gameNameLastPlayed, D.vertical),
                        children: [Q(), X()],
                    }),
                    c ? null : ee(),
                    $(),
                    J(),
                    (a && !c) || er ? null : et(),
                ],
            }),
            null != h &&
                h.length > 0 &&
                !a &&
                (0, r.jsx)("div", {
                    className: R.subgameContainer,
                    children: h.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(V, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: I,
                                    }),
                                    t !== h.length - 1 && (0, r.jsx)("div", { className: R.border }),
                                ],
                            },
                            (0, m.rH)(e),
                        ),
                    ),
                }),
        ],
    });
}
function H() {
    return (0, r.jsx)("div", {
        className: o()(D.flexCenter, R.notDetected, R.activeGame),
        children: (0, r.jsxs)("div", {
            className: o()(R.gameNameLastPlayed, D.vertical),
            children: [
                (0, r.jsx)("div", {
                    className: R.gameName,
                    children: P.intl.string(P.t.H68X9x),
                }),
                (0, r.jsx)("div", {
                    className: R.lastPlayed,
                    children: P.intl.string(P.t.T5Ilmw),
                }),
            ],
        }),
    });
}
function Y(e) {
    let { children: t } = e;
    return (0, r.jsxs)(U, {
        className: x.marginTop40,
        children: [
            (0, r.jsx)(d.oxh, {
                darkSrc: n(879601),
                lightSrc: n(889000),
                width: 430,
                height: 250,
            }),
            t,
        ],
    });
}
let W = (0, S.oH)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    K = function (e) {
        let { className: t, showHeader: n = !0 } = e,
            a = (0, s.Wu)([m.ZP], () => m.ZP.getGamesSeen(!1)),
            { runningGame: l, overrideExePaths: c } = (0, s.cj)([m.ZP], () => ({
                runningGame: m.ZP.getVisibleGame(),
                overrideExePaths: W(...m.ZP.getOverrides()),
            })),
            { gameHistory: u, robloxSubgameHistory: f } = i.useMemo(
                () =>
                    a.reduce((e, t) => ((0, b.le)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                        gameHistory: [],
                        robloxSubgameHistory: [],
                    }),
                [a],
            ),
            p = i.useRef(null);
        function _() {
            return 0 === u.length
                ? (0, r.jsx)(Y, { children: (0, r.jsx)(d.OZU, { children: P.intl.string(P.t["1yiJwn"]) }) })
                : (0, r.jsx)(d.C3N, {
                      className: x.marginTop40,
                      label: P.intl.string(P.t.jCOdvx),
                      description: P.intl.format(P.t.KPA3m9, { igdbLink: F }),
                      children: u.map((e) =>
                          (0, r.jsx)(
                              V,
                              {
                                  rawGame: e,
                                  isOverride: c.has(e.exePath),
                                  subgames: e.id === E.eB ? f : void 0,
                              },
                              (0, m.rH)(e),
                          ),
                      ),
                  });
        }
        return (
            i.useEffect(() => ((0, h.Ky)(), h.P7), []),
            (0, r.jsxs)(C.Z, {
                title: n ? P.intl.string(P.t.AVDyEj) : null,
                className: t,
                children: [
                    null != l
                        ? (0, r.jsx)(
                              V,
                              {
                                  rawGame: l,
                                  isOverride: c.has(l.exePath),
                                  nowPlaying: !0,
                                  subgames: l.id === E.eB ? f : void 0,
                              },
                              (0, m.rH)(l),
                          )
                        : (0, r.jsx)(H, {}),
                    (0, r.jsxs)("div", {
                        className: o()(R.nowPlayingAdd, x.marginReset, x.marginTop8, x.marginBottom20),
                        children: [
                            (0, r.jsx)("span", { children: P.intl.string(P.t.xwhoqM) }),
                            (0, r.jsx)(d.yRy, {
                                targetElementRef: p,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(B, { onClose: t });
                                },
                                align: "center",
                                position: "bottom",
                                children: (e) =>
                                    (0, r.jsx)(
                                        d.Avr,
                                        k(j({}, e), {
                                            buttonRef: p,
                                            variant: "primary",
                                            textVariant: "text-sm/medium",
                                            text: P.intl.string(P.t.GjgdXe),
                                        }),
                                    ),
                            }),
                        ],
                    }),
                    _(),
                ],
            })
        );
    };
