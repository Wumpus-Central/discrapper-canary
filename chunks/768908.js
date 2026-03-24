n.d(t, { Ay: () => H, T: () => F, Wx: () => B, cH: () => V }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(544420),
    m = n(414079),
    _ = n(29160),
    g = n(15285),
    x = n(843402),
    A = n(496885),
    h = n(227309),
    p = n(847521),
    f = n(760751),
    T = n(189081),
    S = n(954571),
    E = n(583613),
    b = n(723702),
    C = n(544028),
    v = n(790174),
    N = n(652215),
    I = n(650583),
    j = n(985018),
    y = n(900506),
    O = n(976092),
    R = n(20976),
    L = n(473169);
let P = r.Ay.connectStores([C.A], () => ({ theme: C.A.theme }))(c.ppr),
    D = (0, b.isWindows)();
function G(e) {
    let { onClose: t } = e,
        n = (0, r.bG)([g.Ay], () => g.Ay.getCandidateGames()),
        [l, o] = s.useState(null),
        d = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, i.jsxs)(c.lGe, {
        className: a()(y.H2, O.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, i.jsx)(c.ZiE, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: l,
                options: d,
                onSelectionChange: function (e) {
                    o(e);
                },
            }),
            (0, i.jsx)(c.cGx, { className: a()(L.Ot, L.QB) }),
            (0, i.jsxs)("div", {
                className: a()(y.o1, R.xM),
                children: [
                    (0, i.jsx)(c.QWc, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
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
function M(e) {
    let { rawGame: t, nowPlaying: l = !1, isOverride: x, subgames: h, isSubgame: E = !1, parentGame: b } = e,
        C = (0, r.cf)([g.Ay, f.A, T.A], () => (0, g.xU)(t, g.Ay, f.A, T.A)),
        { canToggleDetection: v, isCurrentGameDetectionEnabled: O } = (0, r.cf)([g.Ay], () => ({
            canToggleDetection: null == b || g.Ay.isDetectionEnabled(b),
            isCurrentGameDetectionEnabled: g.Ay.isDetectionEnabled(C),
        })),
        L = (0, r.bG)([g.Ay], () => g.Ay.getVisibleGame()),
        [P, G] = s.useState(!1),
        U = s.useMemo(
            () =>
                (0, p.n1)(C)
                    ? E
                        ? C.gameName
                        : j.intl.formatToPlainString(j.t.G6BGdx, { subgameName: C.gameName })
                    : C.name,
            [C, E],
        ),
        [k, w] = s.useState(U ?? "???"),
        V = a()(R.tR, { [y.LO]: !l, [y.Rw]: l, [y.FB]: null != C && l, [y.xL]: E, [y.fG]: null != h && h.length > 0 });
    function B() {
        null != h && h.length > 0 && O
            ? (0, c.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          title: j.intl.formatToPlainString(j.t.PZ4fKc, { platform: U }),
                          subtitle: j.intl.formatToPlainString(j.t.ZIQbfb, { platform: U }),
                          actions: [
                              { text: j.intl.string(j.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: j.intl.string(j.t.Fmjztz),
                                  onClick: () => {
                                      u.A.toggleDetection(C), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : u.A.toggleDetection(C);
    }
    let F = null != L && (0, g.Es)(C) === (0, g.Es)(L),
        H = (null != b && b.id === L?.id) || F || (null != h && h.some((e) => e.id === L?.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: V,
                children: [
                    (0, i.jsxs)("div", {
                        className: a()(y.$K, R.Vd),
                        children: [
                            C.verified && !x
                                ? (0, i.jsxs)("div", {
                                      className: y.HS,
                                      children: [
                                          (0, i.jsx)("div", { className: y.mO, children: U }),
                                          (0, i.jsx)(d.m_, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, i.jsx)(A.A, {
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
                                          C.name !== k && u.A.editName(C, k);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === I.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => w(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: n } = C;
                                return (
                                    l || F
                                        ? (e = j.intl.string(j.t.VbV5dv))
                                        : null != t && "" !== t && (e = j.intl.format(j.t["gGeOE+"], { when: t })),
                                    (0, i.jsx)("div", {
                                        className: y.GN,
                                        children: (0, i.jsx)(_.A, {
                                            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    x || P
                        ? null
                        : (0, i.jsx)("div", {
                              className: a()(R.tR, R.oA, R.LT, y.E3),
                              children: (0, i.jsx)(d.m_, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, i.jsx)(c.DUT, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: y.ym,
                                      onClick: function () {
                                          if (P) return;
                                          let e = null != C.id ? f.A.getDetectableGame(C.id) : null;
                                          S.default.track(N.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, p.n1)(C) ? C.gameName : C.name,
                                          }),
                                              G(!0),
                                              (0, c.mMO)(async () => {
                                                  let { default: t } = await n.e("27495").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, i.jsx)(t, {
                                                          ...n,
                                                          detectedActivity: {
                                                              name: C.name ?? "",
                                                              application_id: e?.id ?? C.id ?? void 0,
                                                              type: N.$pd.PLAYING,
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
                        let { detectable: e } = C,
                            t =
                                e && v
                                    ? (0, i.jsx)(c.bMW, {
                                          size: "md",
                                          color: "currentColor",
                                          className: y.Lj,
                                          colorClass: y.GS,
                                      })
                                    : (0, i.jsx)(c.G3N, {
                                          size: "md",
                                          color: "currentColor",
                                          className: v ? y.$V : y.zN,
                                          colorClass: y.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: a()(R.tR, R.oA, R.LT, y.E3),
                            children: (0, i.jsx)(d.m_, {
                                text: j.intl.string(j.t.QmitzM),
                                children: v
                                    ? (0, i.jsx)(c.DUT, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: y.ym,
                                          onClick: B,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!D || null != b) return null;
                        let { overlay: e, overlayWarn: t } = C,
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
                            s = t
                                ? (0, i.jsx)(d.m_, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, i.jsx)("i", { className: y.kb }),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: a()(R.tR, R.oA, R.LT, y.E3),
                            children: [
                                s,
                                (0, i.jsx)(d.m_, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, i.jsx)(c.DUT, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: y.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void u.A.toggleOverlay(C, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (l && !x) || H
                        ? null
                        : (0, i.jsx)(m.A, {
                              className: y.LS,
                              onClick: function () {
                                  u.A.deleteEntry(C),
                                      h?.forEach((e) => {
                                          u.A.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != h &&
                h.length > 0 &&
                !l &&
                (0, i.jsx)("div", {
                    className: y.AQ,
                    children: h.map((e, t) =>
                        (0, i.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(M, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: C }),
                                    t !== h.length - 1 && (0, i.jsx)("div", { className: y.PQ }),
                                ],
                            },
                            (0, g.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function U() {
    return (0, i.jsx)("div", {
        className: a()(R.tR, y.eS, y.Rw),
        children: (0, i.jsxs)("div", {
            className: a()(y.$K, R.Vd),
            children: [
                (0, i.jsx)("div", { className: y.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, i.jsx)("div", { className: y.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
function k(e) {
    let { children: t } = e;
    return (0, i.jsxs)(P, {
        className: L.eT,
        children: [(0, i.jsx)(c.G8R, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }), t],
    });
}
let w = (0, E.L_)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    V = () => {
        let e = (0, r.yK)([g.Ay], () => g.Ay.getGamesSeen(!1)),
            { runningGame: t, overrideExePaths: n } = (0, r.cf)([g.Ay], () => ({
                runningGame: g.Ay.getVisibleGame(),
                overrideExePaths: w(...g.Ay.getOverrides()),
            }));
        s.useEffect(() => ((0, x.a2)(), x.e0), []);
        let l = s.useMemo(() => e.reduce((e, t) => ((0, p.n1)(t) && e.push(t), e), []), [e]);
        return null != t
            ? (0, i.jsx)(
                  M,
                  { rawGame: t, isOverride: n.has(t.exePath), nowPlaying: !0, subgames: t.id === h.a7 ? l : void 0 },
                  (0, g.Es)(t),
              )
            : (0, i.jsx)(U, {});
    },
    B = () => {
        let e = s.useRef(null);
        return (0, i.jsxs)("div", {
            className: a()(y.ax, L.Gf),
            children: [
                (0, i.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
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
                            text: j.intl.string(j.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
    F = (e) => {
        let { hideHeader: t = !1 } = e,
            n = (0, r.yK)([g.Ay], () => g.Ay.getGamesSeen(!1)),
            l = (0, r.bG)([g.Ay], () => w(...g.Ay.getOverrides()));
        s.useEffect(() => ((0, x.a2)(), x.e0), []);
        let { gameHistory: a, robloxSubgameHistory: o } = s.useMemo(
            () =>
                n.reduce((e, t) => ((0, p.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                    gameHistory: [],
                    robloxSubgameHistory: [],
                }),
            [n],
        );
        return 0 === a.length
            ? (0, i.jsx)(k, { children: (0, i.jsx)(c.SGT, { children: j.intl.string(j.t["1yiJwn"]) }) })
            : (0, i.jsx)(c.nVY, {
                  label: t ? void 0 : j.intl.string(j.t.jCOdvx),
                  description: t ? void 0 : j.intl.format(j.t.KPA3m9, { igdbLink: "https://www.igdb.com/about" }),
                  children: (0, i.jsx)("div", {
                      children: a.map((e) =>
                          (0, i.jsx)(
                              M,
                              { rawGame: e, isOverride: l.has(e.exePath), subgames: e.id === h.a7 ? o : void 0 },
                              (0, g.Es)(e),
                          ),
                      ),
                  }),
              });
    },
    H = function (e) {
        let { className: t } = e;
        return (0, i.jsxs)(v.A, {
            className: t,
            children: [(0, i.jsx)(V, {}), (0, i.jsx)(B, {}), (0, i.jsx)(c.cGx, { gap: 20 }), (0, i.jsx)(F, {})],
        });
    };
