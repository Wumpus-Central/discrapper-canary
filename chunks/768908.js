n.d(t, { Ay: () => F, T: () => H, Wx: () => B, cH: () => V }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(544420),
    h = n(414079),
    A = n(29160),
    g = n(15285),
    m = n(843402),
    p = n(496885),
    _ = n(227309),
    x = n(847521),
    f = n(760751),
    E = n(189081),
    C = n(954571),
    I = n(583613),
    S = n(723702),
    b = n(544028),
    N = n(790174),
    T = n(652215),
    j = n(650583),
    v = n(985018),
    y = n(900506),
    R = n(976092),
    O = n(20976),
    L = n(473169);
let D = r.Ay.connectStores([b.A], () => ({ theme: b.A.theme }))(c.ppr),
    M = (0, S.isWindows)();
function G(e) {
    let { onClose: t } = e,
        n = (0, r.bG)([g.Ay], () => g.Ay.getCandidateGames()),
        [s, o] = l.useState(null),
        d = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, i.jsxs)(c.lGe, {
        className: a()(y.H2, R.Y_),
        "aria-label": v.intl.string(v.t.GTCx0p),
        children: [
            (0, i.jsx)(c.ZiE, {
                selectionMode: "single",
                placeholder: v.intl.string(v.t.XqMe3N),
                value: s,
                options: d,
                onSelectionChange: function (e) {
                    o(e);
                },
            }),
            (0, i.jsx)(c.cGx, { className: a()(L.Ot, L.QB) }),
            (0, i.jsxs)("div", {
                className: a()(y.o1, O.xM),
                children: [
                    (0, i.jsx)(c.QWc, { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: t }),
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: v.intl.string(v.t.GTCx0p),
                        disabled: null == s,
                        onClick: function () {
                            null != s && (u.A.addGame(s.pid, s.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { rawGame: t, nowPlaying: s = !1, isOverride: m, subgames: _, isSubgame: I = !1, parentGame: S } = e,
        b = (0, r.cf)([g.Ay, f.A, E.A], () => (0, g.xU)(t, g.Ay, f.A, E.A)),
        { canToggleDetection: N, isCurrentGameDetectionEnabled: R } = (0, r.cf)([g.Ay], () => ({
            canToggleDetection: null == S || g.Ay.isDetectionEnabled(S),
            isCurrentGameDetectionEnabled: g.Ay.isDetectionEnabled(b),
        })),
        L = (0, r.bG)([g.Ay], () => g.Ay.getVisibleGame()),
        [D, G] = l.useState(!1),
        P = l.useMemo(
            () =>
                (0, x.n1)(b)
                    ? I
                        ? b.gameName
                        : v.intl.formatToPlainString(v.t.G6BGdx, { subgameName: b.gameName })
                    : b.name,
            [b, I],
        ),
        [k, w] = l.useState(P ?? "???"),
        V = a()(O.tR, { [y.LO]: !s, [y.Rw]: s, [y.FB]: null != b && s, [y.xL]: I, [y.fG]: null != _ && _.length > 0 });
    function B() {
        null != _ && _.length > 0 && R
            ? (0, c.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          title: v.intl.formatToPlainString(v.t.PZ4fKc, { platform: P }),
                          subtitle: v.intl.formatToPlainString(v.t.ZIQbfb, { platform: P }),
                          actions: [
                              { text: v.intl.string(v.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: v.intl.string(v.t.Fmjztz),
                                  onClick: () => {
                                      u.A.toggleDetection(b), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : u.A.toggleDetection(b);
    }
    let H = null != L && (0, g.Es)(b) === (0, g.Es)(L),
        F = (null != S && S.id === L?.id) || H || (null != _ && _.some((e) => e.id === L?.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: V,
                children: [
                    (0, i.jsxs)("div", {
                        className: a()(y.$K, O.Vd),
                        children: [
                            b.verified && !m
                                ? (0, i.jsxs)("div", {
                                      className: y.HS,
                                      children: [
                                          (0, i.jsx)("div", { className: y.mO, children: P }),
                                          (0, i.jsx)(d.m_, {
                                              text: v.intl.string(v.t["4PJP5p"]),
                                              children: (0, i.jsx)(p.A, {
                                                  className: y.qf,
                                                  size: 18,
                                                  color: o.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, i.jsx)(c.Uzd, {
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
                                      className: a()(y.mO, y.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: k,
                                      onBlur: function () {
                                          b.name !== k && u.A.editName(b, k);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === j.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => w(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: n } = b;
                                return (
                                    s || H
                                        ? (e = v.intl.string(v.t.VbV5dv))
                                        : null != t && "" !== t && (e = v.intl.format(v.t["gGeOE+"], { when: t })),
                                    (0, i.jsx)("div", {
                                        className: y.GN,
                                        children: (0, i.jsx)(A.A, {
                                            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    m || D
                        ? null
                        : (0, i.jsx)("div", {
                              className: a()(O.tR, O.oA, O.LT, y.E3),
                              children: (0, i.jsx)(d.m_, {
                                  text: v.intl.string(v.t["y0B+lo"]),
                                  children: (0, i.jsx)(c.DUT, {
                                      "aria-label": v.intl.string(v.t["y0B+lo"]),
                                      className: y.ym,
                                      onClick: function () {
                                          if (D) return;
                                          let e = null != b.id ? f.A.getDetectableGame(b.id) : null;
                                          C.default.track(T.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, x.n1)(b) ? b.gameName : b.name,
                                          }),
                                              G(!0),
                                              (0, c.mMO)(async () => {
                                                  let { default: t } = await n.e("27495").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, i.jsx)(t, {
                                                          ...n,
                                                          detectedActivity: {
                                                              name: b.name ?? "",
                                                              application_id: e?.id ?? b.id ?? void 0,
                                                              type: T.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, i.jsx)(c.iFK, {
                                          size: "md",
                                          color: "currentColor",
                                          className: y.Lj,
                                          colorClass: y.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = b,
                            t =
                                e && N
                                    ? (0, i.jsx)(c.bMW, {
                                          size: "md",
                                          color: "currentColor",
                                          className: y.Lj,
                                          colorClass: y.GS,
                                      })
                                    : (0, i.jsx)(c.G3N, {
                                          size: "md",
                                          color: "currentColor",
                                          className: N ? y.$V : y.zN,
                                          colorClass: y.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: a()(O.tR, O.oA, O.LT, y.E3),
                            children: (0, i.jsx)(d.m_, {
                                text: v.intl.string(v.t.QmitzM),
                                children: N
                                    ? (0, i.jsx)(c.DUT, {
                                          "aria-label": v.intl.string(v.t.QmitzM),
                                          className: y.ym,
                                          onClick: B,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!M || null != S) return null;
                        let { overlay: e, overlayWarn: t } = b,
                            n = e
                                ? (0, i.jsx)(c.kN9, {
                                      size: "md",
                                      color: "currentColor",
                                      className: y.Lj,
                                      colorClass: y.GS,
                                  })
                                : (0, i.jsx)(c.nkR, {
                                      size: "md",
                                      color: "currentColor",
                                      className: y.$V,
                                      colorClass: y.GS,
                                  }),
                            l = t
                                ? (0, i.jsx)(d.m_, {
                                      text: v.intl.string(v.t.Vfw2L5),
                                      children: (0, i.jsx)("i", { className: y.kb }),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: a()(O.tR, O.oA, O.LT, y.E3),
                            children: [
                                l,
                                (0, i.jsx)(d.m_, {
                                    text: v.intl.string(v.t["1+O+Tu"]),
                                    children: (0, i.jsx)(c.DUT, {
                                        "aria-label": v.intl.string(v.t["1+O+Tu"]),
                                        className: y.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void u.A.toggleOverlay(b, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (s && !m) || F
                        ? null
                        : (0, i.jsx)(h.A, {
                              className: y.LS,
                              onClick: function () {
                                  u.A.deleteEntry(b),
                                      _?.forEach((e) => {
                                          u.A.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != _ &&
                _.length > 0 &&
                !s &&
                (0, i.jsx)("div", {
                    className: y.AQ,
                    children: _.map((e, t) =>
                        (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(U, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: b }),
                                    t !== _.length - 1 && (0, i.jsx)("div", { className: y.PQ }),
                                ],
                            },
                            (0, g.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function P() {
    return (0, i.jsx)("div", {
        className: a()(O.tR, y.eS, y.Rw),
        children: (0, i.jsxs)("div", {
            className: a()(y.$K, O.Vd),
            children: [
                (0, i.jsx)("div", { className: y.mO, children: v.intl.string(v.t.H68X9x) }),
                (0, i.jsx)("div", { className: y.GN, children: v.intl.string(v.t.T5Ilmw) }),
            ],
        }),
    });
}
function k(e) {
    let { children: t } = e;
    return (0, i.jsxs)(D, {
        className: L.eT,
        children: [(0, i.jsx)(c.G8R, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }), t],
    });
}
let w = (0, I.L_)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    V = () => {
        let e = (0, r.yK)([g.Ay], () => g.Ay.getGamesSeen(!1)),
            { runningGame: t, overrideExePaths: n } = (0, r.cf)([g.Ay], () => ({
                runningGame: g.Ay.getVisibleGame(),
                overrideExePaths: w(...g.Ay.getOverrides()),
            }));
        l.useEffect(() => ((0, m.a2)(), m.e0), []);
        let s = l.useMemo(() => e.reduce((e, t) => ((0, x.n1)(t) && e.push(t), e), []), [e]);
        return null != t
            ? (0, i.jsx)(
                  U,
                  { rawGame: t, isOverride: n.has(t.exePath), nowPlaying: !0, subgames: t.id === _.a7 ? s : void 0 },
                  (0, g.Es)(t),
              )
            : (0, i.jsx)(P, {});
    },
    B = () => {
        let e = l.useRef(null);
        return (0, i.jsxs)("div", {
            className: a()(y.ax, L.Gf),
            children: [
                (0, i.jsx)("span", { children: v.intl.string(v.t.xwhoqM) }),
                (0, i.jsx)(c.YNO, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(G, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, i.jsx)(c.QWc, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: v.intl.string(v.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
    H = (e) => {
        let { hideHeader: t = !1 } = e,
            n = (0, r.yK)([g.Ay], () => g.Ay.getGamesSeen(!1)),
            s = (0, r.bG)([g.Ay], () => w(...g.Ay.getOverrides()));
        l.useEffect(() => ((0, m.a2)(), m.e0), []);
        let { gameHistory: a, robloxSubgameHistory: o } = l.useMemo(
            () =>
                n.reduce((e, t) => ((0, x.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                    gameHistory: [],
                    robloxSubgameHistory: [],
                }),
            [n],
        );
        return 0 === a.length
            ? (0, i.jsx)(k, { children: (0, i.jsx)(c.SGT, { children: v.intl.string(v.t["1yiJwn"]) }) })
            : (0, i.jsx)(c.nVY, {
                  label: t ? void 0 : v.intl.string(v.t.jCOdvx),
                  description: t ? void 0 : v.intl.format(v.t.KPA3m9, { igdbLink: "https://www.igdb.com/about" }),
                  children: (0, i.jsx)("div", {
                      children: a.map((e) =>
                          (0, i.jsx)(
                              U,
                              { rawGame: e, isOverride: s.has(e.exePath), subgames: e.id === _.a7 ? o : void 0 },
                              (0, g.Es)(e),
                          ),
                      ),
                  }),
              });
    },
    F = function (e) {
        let { className: t, showHeader: n = !0 } = e;
        return (0, i.jsxs)(N.A, {
            title: n ? v.intl.string(v.t.AVDyEj) : null,
            className: t,
            children: [(0, i.jsx)(V, {}), (0, i.jsx)(B, {}), (0, i.jsx)(c.cGx, { gap: 20 }), (0, i.jsx)(H, {})],
        });
    };
