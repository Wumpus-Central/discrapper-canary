n.d(t, { Ay: () => F, T: () => H, Wx: () => B, cH: () => w }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(544420),
    _ = n(414079),
    m = n(29160),
    g = n(15285),
    A = n(843402),
    h = n(496885),
    x = n(227309),
    p = n(847521),
    T = n(760751),
    E = n(189081),
    C = n(954571),
    S = n(583613),
    f = n(723702),
    N = n(544028),
    b = n(790174),
    I = n(652215),
    v = n(650583),
    j = n(985018),
    O = n(900506),
    y = n(976092),
    R = n(20976),
    P = n(473169);
let D = a.Ay.connectStores([N.A], () => ({ theme: N.A.theme }))(c.ppr),
    L = (0, f.isWindows)();
function M(e) {
    let { onClose: t } = e,
        n = (0, a.bG)([g.Ay], () => g.Ay.getCandidateGames()),
        [l, o] = s.useState(null),
        d = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, i.jsxs)(c.lGe, {
        className: r()(O.H2, y.Y_),
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
            (0, i.jsx)(c.cGx, { className: r()(P.Ot, P.QB) }),
            (0, i.jsxs)("div", {
                className: r()(O.o1, R.xM),
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
function G(e) {
    let { rawGame: t, nowPlaying: l = !1, isOverride: A, subgames: x, isSubgame: S = !1, parentGame: f } = e,
        N = (0, a.cf)([g.Ay, T.A, E.A], () => (0, g.xU)(t, g.Ay, T.A, E.A)),
        { canToggleDetection: b, isCurrentGameDetectionEnabled: y } = (0, a.cf)([g.Ay], () => ({
            canToggleDetection: null == f || g.Ay.isDetectionEnabled(f),
            isCurrentGameDetectionEnabled: g.Ay.isDetectionEnabled(N),
        })),
        P = (0, a.bG)([g.Ay], () => g.Ay.getVisibleGame()),
        [D, M] = s.useState(!1),
        U = s.useMemo(
            () =>
                (0, p.n1)(N)
                    ? S
                        ? N.gameName
                        : j.intl.formatToPlainString(j.t.G6BGdx, { subgameName: N.gameName })
                    : N.name,
            [N, S],
        ),
        [k, V] = s.useState(U ?? "???"),
        w = r()(R.tR, { [O.LO]: !l, [O.Rw]: l, [O.FB]: null != N && l, [O.xL]: S, [O.fG]: null != x && x.length > 0 });
    function B() {
        null != x && x.length > 0 && y
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
                                      u.A.toggleDetection(N), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : u.A.toggleDetection(N);
    }
    let H = null != P && (0, g.Es)(N) === (0, g.Es)(P),
        F = (null != f && f.id === P?.id) || H || (null != x && x.some((e) => e.id === P?.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: w,
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(O.$K, R.Vd),
                        children: [
                            N.verified && !A
                                ? (0, i.jsxs)("div", {
                                      className: O.HS,
                                      children: [
                                          (0, i.jsx)("div", { className: O.mO, children: U }),
                                          (0, i.jsx)(d.m_, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, i.jsx)(h.A, {
                                                  className: O.qf,
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
                                      className: r()(O.mO, O.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: k,
                                      onBlur: function () {
                                          N.name !== k && u.A.editName(N, k);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === v.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => V(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: n } = N;
                                return (
                                    l || H
                                        ? (e = j.intl.string(j.t.VbV5dv))
                                        : null != t && "" !== t && (e = j.intl.format(j.t["gGeOE+"], { when: t })),
                                    (0, i.jsx)("div", {
                                        className: O.GN,
                                        children: (0, i.jsx)(m.A, {
                                            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    A || D
                        ? null
                        : (0, i.jsx)("div", {
                              className: r()(R.tR, R.oA, R.LT, O.E3),
                              children: (0, i.jsx)(d.m_, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, i.jsx)(c.DUT, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: O.ym,
                                      onClick: function () {
                                          if (D) return;
                                          let e = null != N.id ? T.A.getDetectableGame(N.id) : null;
                                          C.default.track(I.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, p.n1)(N) ? N.gameName : N.name,
                                          }),
                                              M(!0),
                                              (0, c.mMO)(async () => {
                                                  let { default: t } = await n.e("27495").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, i.jsx)(t, {
                                                          ...n,
                                                          detectedActivity: {
                                                              name: N.name ?? "",
                                                              application_id: e?.id ?? N.id ?? void 0,
                                                              type: I.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, i.jsx)(c.iFK, {
                                          size: "md",
                                          color: "currentColor",
                                          className: O.Lj,
                                          colorClass: O.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = N,
                            t =
                                e && b
                                    ? (0, i.jsx)(c.bMW, {
                                          size: "md",
                                          color: "currentColor",
                                          className: O.Lj,
                                          colorClass: O.GS,
                                      })
                                    : (0, i.jsx)(c.G3N, {
                                          size: "md",
                                          color: "currentColor",
                                          className: b ? O.$V : O.zN,
                                          colorClass: O.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: r()(R.tR, R.oA, R.LT, O.E3),
                            children: (0, i.jsx)(d.m_, {
                                text: j.intl.string(j.t.QmitzM),
                                children: b
                                    ? (0, i.jsx)(c.DUT, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: O.ym,
                                          onClick: B,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!L || null != f) return null;
                        let { overlay: e, overlayWarn: t } = N,
                            n = e
                                ? (0, i.jsx)(c.kN9, {
                                      size: "md",
                                      color: "currentColor",
                                      className: O.Lj,
                                      colorClass: O.GS,
                                  })
                                : (0, i.jsx)(c.nkR, {
                                      size: "md",
                                      color: "currentColor",
                                      className: O.$V,
                                      colorClass: O.GS,
                                  }),
                            s = t
                                ? (0, i.jsx)(d.m_, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, i.jsx)("i", { className: O.kb }),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: r()(R.tR, R.oA, R.LT, O.E3),
                            children: [
                                s,
                                (0, i.jsx)(d.m_, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, i.jsx)(c.DUT, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: O.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void u.A.toggleOverlay(N, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (l && !A) || F
                        ? null
                        : (0, i.jsx)(_.A, {
                              className: O.LS,
                              onClick: function () {
                                  u.A.deleteEntry(N),
                                      x?.forEach((e) => {
                                          u.A.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != x &&
                x.length > 0 &&
                !l &&
                (0, i.jsx)("div", {
                    className: O.AQ,
                    children: x.map((e, t) =>
                        (0, i.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(G, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: N }),
                                    t !== x.length - 1 && (0, i.jsx)("div", { className: O.PQ }),
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
        className: r()(R.tR, O.eS, O.Rw),
        children: (0, i.jsxs)("div", {
            className: r()(O.$K, R.Vd),
            children: [
                (0, i.jsx)("div", { className: O.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, i.jsx)("div", { className: O.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
function k(e) {
    let { children: t } = e;
    return (0, i.jsxs)(D, {
        className: P.eT,
        children: [(0, i.jsx)(c.G8R, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }), t],
    });
}
let V = (0, S.L_)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    w = () => {
        let e = (0, a.yK)([g.Ay], () => g.Ay.getGamesSeen(!1)),
            { runningGame: t, overrideExePaths: n } = (0, a.cf)([g.Ay], () => ({
                runningGame: g.Ay.getVisibleGame(),
                overrideExePaths: V(...g.Ay.getOverrides()),
            }));
        s.useEffect(() => ((0, A.a2)(), A.e0), []);
        let l = s.useMemo(() => e.reduce((e, t) => ((0, p.n1)(t) && e.push(t), e), []), [e]);
        return null != t
            ? (0, i.jsx)(
                  G,
                  { rawGame: t, isOverride: n.has(t.exePath), nowPlaying: !0, subgames: t.id === x.a7 ? l : void 0 },
                  (0, g.Es)(t),
              )
            : (0, i.jsx)(U, {});
    },
    B = () => {
        let e = s.useRef(null);
        return (0, i.jsxs)("div", {
            className: r()(O.ax, P.Gf),
            children: [
                (0, i.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, i.jsx)(c.YNO, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(M, { onClose: t });
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
    H = (e) => {
        let { hideHeader: t = !1 } = e,
            n = (0, a.yK)([g.Ay], () => g.Ay.getGamesSeen(!1)),
            l = (0, a.bG)([g.Ay], () => V(...g.Ay.getOverrides()));
        s.useEffect(() => ((0, A.a2)(), A.e0), []);
        let { gameHistory: r, robloxSubgameHistory: o } = s.useMemo(
            () =>
                n.reduce((e, t) => ((0, p.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                    gameHistory: [],
                    robloxSubgameHistory: [],
                }),
            [n],
        );
        return 0 === r.length
            ? (0, i.jsx)(k, { children: (0, i.jsx)(c.SGT, { children: j.intl.string(j.t["1yiJwn"]) }) })
            : (0, i.jsx)(c.nVY, {
                  label: t ? void 0 : j.intl.string(j.t.jCOdvx),
                  description: t ? void 0 : j.intl.format(j.t.KPA3m9, { igdbLink: "https://www.igdb.com/about" }),
                  children: (0, i.jsx)("div", {
                      children: r.map((e) =>
                          (0, i.jsx)(
                              G,
                              { rawGame: e, isOverride: l.has(e.exePath), subgames: e.id === x.a7 ? o : void 0 },
                              (0, g.Es)(e),
                          ),
                      ),
                  }),
              });
    },
    F = function (e) {
        let { className: t, showHeader: n = !0 } = e;
        return (0, i.jsxs)(b.A, {
            title: n ? j.intl.string(j.t.AVDyEj) : null,
            className: t,
            children: [(0, i.jsx)(w, {}), (0, i.jsx)(B, {}), (0, i.jsx)(c.cGx, { gap: 20 }), (0, i.jsx)(H, {})],
        });
    };
