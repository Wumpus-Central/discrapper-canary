n.d(t, {
    Ay: () => z,
    T: () => F,
    Wx: () => B,
    cH: () => Y,
}),
    n(896048),
    n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(544420),
    g = n(414079),
    h = n(29160),
    x = n(15285),
    A = n(843402),
    p = n(496885),
    m = n(227309),
    j = n(847521),
    b = n(760751),
    O = n(189081),
    S = n(954571),
    E = n(583613),
    f = n(723702),
    v = n(544028),
    T = n(790174),
    C = n(652215),
    y = n(650583),
    N = n(985018),
    I = n(900506),
    _ = n(976092),
    P = n(20976),
    G = n(473169);

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
let L = a.Ay.connectStores([v.A], () => ({
        theme: v.A.theme,
    }))(d.ppr),
    k = (0, f.isWindows)();

function w(e) {
    let { onClose: t } = e,
        n = (0, a.bG)([x.Ay], () => x.Ay.getCandidateGames()),
        [l, o] = s.useState(null),
        c = n.map((e) => ({
            id: e.pid.toString(),
            value: e,
            label: null != e.name ? e.name : "",
        }));
    return (0, i.jsxs)(d.lGe, {
        className: r()(I.H2, _.Y_),
        "aria-label": N.intl.string(N.t.GTCx0p),
        children: [
            (0, i.jsx)(d.ZiE, {
                selectionMode: "single",
                placeholder: N.intl.string(N.t.XqMe3N),
                value: l,
                options: c,
                onSelectionChange: function (e) {
                    o(e);
                },
            }),
            (0, i.jsx)(d.cGx, {
                className: r()(G.Ot, G.QB),
            }),
            (0, i.jsxs)("div", {
                className: r()(I.o1, P.xM),
                children: [
                    (0, i.jsx)(d.QWc, {
                        variant: "secondary",
                        text: N.intl.string(N.t["ETE/oC"]),
                        onClick: t,
                    }),
                    (0, i.jsx)(d.Button, {
                        variant: "primary",
                        text: N.intl.string(N.t.GTCx0p),
                        disabled: null == l,
                        onClick: function () {
                            null != l && (u.A.addGame(l.pid, l.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}

function V(e) {
    let { rawGame: t, nowPlaying: l = !1, isOverride: A, subgames: m, isSubgame: E = !1, parentGame: f } = e,
        v = (0, a.cf)([x.Ay, b.A, O.A], () => (0, x.xU)(t, x.Ay, b.A, O.A)),
        { canToggleDetection: T, isCurrentGameDetectionEnabled: _ } = (0, a.cf)([x.Ay], () => ({
            canToggleDetection: null == f || x.Ay.isDetectionEnabled(f),
            isCurrentGameDetectionEnabled: x.Ay.isDetectionEnabled(v),
        })),
        G = (0, a.bG)([x.Ay], () => x.Ay.getVisibleGame()),
        [L, w] = s.useState(!1),
        M = s.useMemo(
            () =>
                (0, j.n1)(v)
                    ? E
                        ? v.gameName
                        : N.intl.formatToPlainString(N.t.G6BGdx, {
                              subgameName: v.gameName,
                          })
                    : v.name,
            [v, E],
        ),
        [U, H] = s.useState(null != M ? M : "???"),
        Y = r()(P.tR, {
            [I.LO]: !l,
            [I.Rw]: l,
            [I.FB]: null != v && l,
            [I.xL]: E,
            [I.fG]: null != m && m.length > 0,
        });

    function B() {
        null != m && m.length > 0 && _
            ? (0, d.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (t) =>
                      (0, i.jsx)(
                          e,
                          D(R({}, t), {
                              title: N.intl.formatToPlainString(N.t.PZ4fKc, {
                                  platform: M,
                              }),
                              subtitle: N.intl.formatToPlainString(N.t.ZIQbfb, {
                                  platform: M,
                              }),
                              actions: [
                                  {
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: () => t.onClose(),
                                      variant: "secondary",
                                  },
                                  {
                                      text: N.intl.string(N.t.Fmjztz),
                                      onClick: () => {
                                          u.A.toggleDetection(v), t.onClose();
                                      },
                                      variant: "primary",
                                  },
                              ],
                          }),
                      );
              })
            : u.A.toggleDetection(v);
    }
    let F = null != G && (0, x.Es)(v) === (0, x.Es)(G),
        z =
            (null != f && f.id === (null == G ? void 0 : G.id)) ||
            F ||
            (null != m && m.some((e) => e.id === (null == G ? void 0 : G.id)));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: Y,
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(I.$K, P.Vd),
                        children: [
                            v.verified && !A
                                ? (0, i.jsxs)("div", {
                                      className: I.HS,
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: I.mO,
                                              children: M,
                                          }),
                                          (0, i.jsx)(c.m_, {
                                              text: N.intl.string(N.t["4PJP5p"]),
                                              children: (0, i.jsx)(p.A, {
                                                  className: I.qf,
                                                  size: 18,
                                                  color: o.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, i.jsx)(d.Uzd, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: o.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, i.jsx)("input", {
                                      className: r()(I.mO, I.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: U,
                                      onBlur: function () {
                                          v.name !== U && u.A.editName(v, U);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === y.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => H(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: n } = v;
                                return (
                                    l || F
                                        ? (e = N.intl.string(N.t.VbV5dv))
                                        : null != t &&
                                          "" !== t &&
                                          (e = N.intl.format(N.t["gGeOE+"], {
                                              when: t,
                                          })),
                                    (0, i.jsx)("div", {
                                        className: I.GN,
                                        children: (0, i.jsx)(h.A, {
                                            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    A || L
                        ? null
                        : (0, i.jsx)("div", {
                              className: r()(P.tR, P.oA, P.LT, I.E3),
                              children: (0, i.jsx)(c.m_, {
                                  text: N.intl.string(N.t["y0B+lo"]),
                                  children: (0, i.jsx)(d.DUT, {
                                      "aria-label": N.intl.string(N.t["y0B+lo"]),
                                      className: I.ym,
                                      onClick: function () {
                                          if (L) return;
                                          let e = null != v.id ? b.A.getDetectableGame(v.id) : null;
                                          S.default.track(C.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: null == e ? void 0 : e.id,
                                              game_name: (0, j.n1)(v) ? v.gameName : v.name,
                                          }),
                                              w(!0),
                                              (0, d.mMO)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      n.e("27495"),
                                                      n.e("79692"),
                                                  ]).then(n.bind(n, 651930));
                                                  return (n) => {
                                                      var s, l, r;
                                                      return (0, i.jsx)(
                                                          t,
                                                          D(R({}, n), {
                                                              detectedActivity: {
                                                                  name: null != (s = v.name) ? s : "",
                                                                  application_id:
                                                                      null !=
                                                                      (l =
                                                                          null != (r = null == e ? void 0 : e.id)
                                                                              ? r
                                                                              : v.id)
                                                                          ? l
                                                                          : void 0,
                                                                  type: C.$pd.PLAYING,
                                                              },
                                                              onSubmitted: () => {},
                                                          }),
                                                      );
                                                  };
                                              });
                                      },
                                      children: (0, i.jsx)(d.iFK, {
                                          size: "md",
                                          color: "currentColor",
                                          className: I.Lj,
                                          colorClass: I.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = v,
                            t =
                                e && T
                                    ? (0, i.jsx)(d.bMW, {
                                          size: "md",
                                          color: "currentColor",
                                          className: I.Lj,
                                          colorClass: I.GS,
                                      })
                                    : (0, i.jsx)(d.G3N, {
                                          size: "md",
                                          color: "currentColor",
                                          className: T ? I.$V : I.zN,
                                          colorClass: I.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: r()(P.tR, P.oA, P.LT, I.E3),
                            children: (0, i.jsx)(c.m_, {
                                text: N.intl.string(N.t.QmitzM),
                                children: T
                                    ? (0, i.jsx)(d.DUT, {
                                          "aria-label": N.intl.string(N.t.QmitzM),
                                          className: I.ym,
                                          onClick: B,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!k || null != f) return null;
                        let { overlay: e, overlayWarn: t } = v,
                            n = e
                                ? (0, i.jsx)(d.kN9, {
                                      size: "md",
                                      color: "currentColor",
                                      className: I.Lj,
                                      colorClass: I.GS,
                                  })
                                : (0, i.jsx)(d.nkR, {
                                      size: "md",
                                      color: "currentColor",
                                      className: I.$V,
                                      colorClass: I.GS,
                                  }),
                            s = t
                                ? (0, i.jsx)(c.m_, {
                                      text: N.intl.string(N.t.Vfw2L5),
                                      children: (0, i.jsx)("i", {
                                          className: I.kb,
                                      }),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: r()(P.tR, P.oA, P.LT, I.E3),
                            children: [
                                s,
                                (0, i.jsx)(c.m_, {
                                    text: N.intl.string(N.t["1+O+Tu"]),
                                    children: (0, i.jsx)(d.DUT, {
                                        "aria-label": N.intl.string(N.t["1+O+Tu"]),
                                        className: I.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void u.A.toggleOverlay(v, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (l && !A) || z
                        ? null
                        : (0, i.jsx)(g.A, {
                              className: I.LS,
                              onClick: function () {
                                  u.A.deleteEntry(v),
                                      null == m ||
                                          m.forEach((e) => {
                                              u.A.deleteEntry(e);
                                          });
                              },
                          }),
                ],
            }),
            null != m &&
                m.length > 0 &&
                !l &&
                (0, i.jsx)("div", {
                    className: I.AQ,
                    children: m.map((e, t) =>
                        (0, i.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(V, {
                                        rawGame: e,
                                        isOverride: !1,
                                        isSubgame: !0,
                                        parentGame: v,
                                    }),
                                    t !== m.length - 1 &&
                                        (0, i.jsx)("div", {
                                            className: I.PQ,
                                        }),
                                ],
                            },
                            (0, x.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}

function M() {
    return (0, i.jsx)("div", {
        className: r()(P.tR, I.eS, I.Rw),
        children: (0, i.jsxs)("div", {
            className: r()(I.$K, P.Vd),
            children: [
                (0, i.jsx)("div", {
                    className: I.mO,
                    children: N.intl.string(N.t.H68X9x),
                }),
                (0, i.jsx)("div", {
                    className: I.GN,
                    children: N.intl.string(N.t.T5Ilmw),
                }),
            ],
        }),
    });
}

function U(e) {
    let { children: t } = e;
    return (0, i.jsxs)(L, {
        className: G.eT,
        children: [
            (0, i.jsx)(d.G8R, {
                darkSrc: n(839628),
                lightSrc: n(446404),
                width: 430,
                height: 250,
            }),
            t,
        ],
    });
}
let H = (0, E.L_)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    Y = () => {
        let e = (0, a.yK)([x.Ay], () => x.Ay.getGamesSeen(!1)),
            { runningGame: t, overrideExePaths: n } = (0, a.cf)([x.Ay], () => ({
                runningGame: x.Ay.getVisibleGame(),
                overrideExePaths: H(...x.Ay.getOverrides()),
            }));
        s.useEffect(() => ((0, A.a2)(), A.e0), []);
        let l = s.useMemo(() => e.reduce((e, t) => ((0, j.n1)(t) && e.push(t), e), []), [e]);
        return null != t
            ? (0, i.jsx)(
                  V,
                  {
                      rawGame: t,
                      isOverride: n.has(t.exePath),
                      nowPlaying: !0,
                      subgames: t.id === m.a7 ? l : void 0,
                  },
                  (0, x.Es)(t),
              )
            : (0, i.jsx)(M, {});
    },
    B = () => {
        let e = s.useRef(null);
        return (0, i.jsxs)("div", {
            className: r()(I.ax, G.Gf),
            children: [
                (0, i.jsx)("span", {
                    children: N.intl.string(N.t.xwhoqM),
                }),
                (0, i.jsx)(d.YNO, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(w, {
                            onClose: t,
                        });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, i.jsx)(
                            d.QWc,
                            D(R({}, t), {
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
    F = (e) => {
        let { hideHeader: t = !1 } = e,
            n = (0, a.yK)([x.Ay], () => x.Ay.getGamesSeen(!1)),
            l = (0, a.bG)([x.Ay], () => H(...x.Ay.getOverrides()));
        s.useEffect(() => ((0, A.a2)(), A.e0), []);
        let { gameHistory: r, robloxSubgameHistory: o } = s.useMemo(
            () =>
                n.reduce((e, t) => ((0, j.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                    gameHistory: [],
                    robloxSubgameHistory: [],
                }),
            [n],
        );
        return 0 === r.length
            ? (0, i.jsx)(U, {
                  children: (0, i.jsx)(d.SGT, {
                      children: N.intl.string(N.t["1yiJwn"]),
                  }),
              })
            : (0, i.jsx)(d.nVY, {
                  label: t ? void 0 : N.intl.string(N.t.jCOdvx),
                  description: t
                      ? void 0
                      : N.intl.format(N.t.KPA3m9, {
                            igdbLink: "https://www.igdb.com/about",
                        }),
                  children: (0, i.jsx)("div", {
                      children: r.map((e) =>
                          (0, i.jsx)(
                              V,
                              {
                                  rawGame: e,
                                  isOverride: l.has(e.exePath),
                                  subgames: e.id === m.a7 ? o : void 0,
                              },
                              (0, x.Es)(e),
                          ),
                      ),
                  }),
              });
    },
    z = function (e) {
        let { className: t, showHeader: n = !0 } = e;
        return (0, i.jsxs)(T.A, {
            title: n ? N.intl.string(N.t.AVDyEj) : null,
            className: t,
            children: [
                (0, i.jsx)(Y, {}),
                (0, i.jsx)(B, {}),
                (0, i.jsx)(d.cGx, {
                    gap: 20,
                }),
                (0, i.jsx)(F, {}),
            ],
        });
    };
