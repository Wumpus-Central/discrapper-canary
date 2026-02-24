n.d(t, { Ay: () => Y, T: () => B, Wx: () => H, cH: () => w }), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(544420),
    _ = n(414079),
    m = n(29160),
    A = n(15285),
    g = n(843402),
    h = n(496885),
    x = n(227309),
    p = n(847521),
    E = n(760751),
    C = n(189081),
    T = n(954571),
    S = n(583613),
    I = n(723702),
    f = n(544028),
    N = n(790174),
    b = n(652215),
    j = n(650583),
    v = n(985018),
    O = n(38872),
    R = n(754694),
    y = n(641254),
    P = n(522759);
let L = r.Ay.connectStores([f.A], () => ({ theme: f.A.theme }))(d.ppr),
    D = (0, I.isWindows)();
function G(e) {
    let { onClose: t } = e,
        n = (0, r.bG)([A.Ay], () => A.Ay.getCandidateGames()),
        [a, o] = s.useState(null),
        c = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, i.jsxs)(d.lGe, {
        className: l()(O.H2, R.Y_),
        "aria-label": v.intl.string(v.t.GTCx0p),
        children: [
            (0, i.jsx)(d.ZiE, {
                selectionMode: "single",
                placeholder: v.intl.string(v.t.XqMe3N),
                value: a,
                options: c,
                onSelectionChange: function (e) {
                    o(e);
                },
            }),
            (0, i.jsx)(d.cGx, { className: l()(P.Ot, P.QB) }),
            (0, i.jsxs)("div", {
                className: l()(O.o1, y.xM),
                children: [
                    (0, i.jsx)(d.QWc, { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: t }),
                    (0, i.jsx)(d.Button, {
                        variant: "primary",
                        text: v.intl.string(v.t.GTCx0p),
                        disabled: null == a,
                        onClick: function () {
                            null != a && (u.A.addGame(a.pid, a.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { rawGame: t, nowPlaying: a = !1, isOverride: g, subgames: x, isSubgame: S = !1, parentGame: I } = e,
        f = (0, r.cf)([A.Ay, E.A, C.A], () => (0, A.xU)(t, A.Ay, E.A, C.A)),
        { canToggleDetection: N, isCurrentGameDetectionEnabled: R } = (0, r.cf)([A.Ay], () => ({
            canToggleDetection: null == I || A.Ay.isDetectionEnabled(I),
            isCurrentGameDetectionEnabled: A.Ay.isDetectionEnabled(f),
        })),
        P = (0, r.bG)([A.Ay], () => A.Ay.getVisibleGame()),
        [L, G] = s.useState(!1),
        U = s.useMemo(
            () =>
                (0, p.n1)(f)
                    ? S
                        ? f.gameName
                        : v.intl.formatToPlainString(v.t.G6BGdx, { subgameName: f.gameName })
                    : f.name,
            [f, S],
        ),
        [k, V] = s.useState(U ?? "???"),
        w = l()(y.tR, { [O.LO]: !a, [O.Rw]: a, [O.FB]: null != f && a, [O.xL]: S, [O.fG]: null != x && x.length > 0 });
    function H() {
        null != x && x.length > 0 && R
            ? (0, d.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          title: v.intl.formatToPlainString(v.t.PZ4fKc, { platform: U }),
                          subtitle: v.intl.formatToPlainString(v.t.ZIQbfb, { platform: U }),
                          actions: [
                              { text: v.intl.string(v.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: v.intl.string(v.t.Fmjztz),
                                  onClick: () => {
                                      u.A.toggleDetection(f), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : u.A.toggleDetection(f);
    }
    let B = null != P && (0, A.Es)(f) === (0, A.Es)(P),
        Y = (null != I && I.id === P?.id) || B || (null != x && x.some((e) => e.id === P?.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: w,
                children: [
                    (0, i.jsxs)("div", {
                        className: l()(O.$K, y.Vd),
                        children: [
                            f.verified && !g
                                ? (0, i.jsxs)("div", {
                                      className: O.HS,
                                      children: [
                                          (0, i.jsx)("div", { className: O.mO, children: U }),
                                          (0, i.jsx)(c.m_, {
                                              text: v.intl.string(v.t["4PJP5p"]),
                                              children: (0, i.jsx)(h.A, {
                                                  className: O.qf,
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
                                      className: l()(O.mO, O.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: k,
                                      onBlur: function () {
                                          f.name !== k && u.A.editName(f, k);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === j.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => V(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: n } = f;
                                return (
                                    a || B
                                        ? (e = v.intl.string(v.t.VbV5dv))
                                        : null != t && "" !== t && (e = v.intl.format(v.t["gGeOE+"], { when: t })),
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
                    g || L
                        ? null
                        : (0, i.jsx)("div", {
                              className: l()(y.tR, y.oA, y.LT, O.E3),
                              children: (0, i.jsx)(c.m_, {
                                  text: v.intl.string(v.t["y0B+lo"]),
                                  children: (0, i.jsx)(d.DUT, {
                                      "aria-label": v.intl.string(v.t["y0B+lo"]),
                                      className: O.ym,
                                      onClick: function () {
                                          if (L) return;
                                          let e = null != f.id ? E.A.getDetectableGame(f.id) : null;
                                          T.default.track(b.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, p.n1)(f) ? f.gameName : f.name,
                                          }),
                                              G(!0),
                                              (0, d.mMO)(async () => {
                                                  let { default: t } = await n.e("27495").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, i.jsx)(t, {
                                                          ...n,
                                                          detectedActivity: {
                                                              name: f.name ?? "",
                                                              application_id: e?.id ?? f.id ?? void 0,
                                                              type: b.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, i.jsx)(d.iFK, {
                                          size: "md",
                                          color: "currentColor",
                                          className: O.Lj,
                                          colorClass: O.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = f,
                            t =
                                e && N
                                    ? (0, i.jsx)(d.bMW, {
                                          size: "md",
                                          color: "currentColor",
                                          className: O.Lj,
                                          colorClass: O.GS,
                                      })
                                    : (0, i.jsx)(d.G3N, {
                                          size: "md",
                                          color: "currentColor",
                                          className: N ? O.$V : O.zN,
                                          colorClass: O.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: l()(y.tR, y.oA, y.LT, O.E3),
                            children: (0, i.jsx)(c.m_, {
                                text: v.intl.string(v.t.QmitzM),
                                children: N
                                    ? (0, i.jsx)(d.DUT, {
                                          "aria-label": v.intl.string(v.t.QmitzM),
                                          className: O.ym,
                                          onClick: H,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!D || null != I) return null;
                        let { overlay: e, overlayWarn: t } = f,
                            n = e
                                ? (0, i.jsx)(d.kN9, {
                                      size: "md",
                                      color: "currentColor",
                                      className: O.Lj,
                                      colorClass: O.GS,
                                  })
                                : (0, i.jsx)(d.nkR, {
                                      size: "md",
                                      color: "currentColor",
                                      className: O.$V,
                                      colorClass: O.GS,
                                  }),
                            s = t
                                ? (0, i.jsx)(c.m_, {
                                      text: v.intl.string(v.t.Vfw2L5),
                                      children: (0, i.jsx)("i", { className: O.kb }),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: l()(y.tR, y.oA, y.LT, O.E3),
                            children: [
                                s,
                                (0, i.jsx)(c.m_, {
                                    text: v.intl.string(v.t["1+O+Tu"]),
                                    children: (0, i.jsx)(d.DUT, {
                                        "aria-label": v.intl.string(v.t["1+O+Tu"]),
                                        className: O.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void u.A.toggleOverlay(f, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (a && !g) || Y
                        ? null
                        : (0, i.jsx)(_.A, {
                              className: O.LS,
                              onClick: function () {
                                  u.A.deleteEntry(f),
                                      x?.forEach((e) => {
                                          u.A.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != x &&
                x.length > 0 &&
                !a &&
                (0, i.jsx)("div", {
                    className: O.AQ,
                    children: x.map((e, t) =>
                        (0, i.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(M, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: f }),
                                    t !== x.length - 1 && (0, i.jsx)("div", { className: O.PQ }),
                                ],
                            },
                            (0, A.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function U() {
    return (0, i.jsx)("div", {
        className: l()(y.tR, O.eS, O.Rw),
        children: (0, i.jsxs)("div", {
            className: l()(O.$K, y.Vd),
            children: [
                (0, i.jsx)("div", { className: O.mO, children: v.intl.string(v.t.H68X9x) }),
                (0, i.jsx)("div", { className: O.GN, children: v.intl.string(v.t.T5Ilmw) }),
            ],
        }),
    });
}
function k(e) {
    let { children: t } = e;
    return (0, i.jsxs)(L, {
        className: P.eT,
        children: [(0, i.jsx)(d.G8R, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }), t],
    });
}
let V = (0, S.L_)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    w = () => {
        let e = (0, r.yK)([A.Ay], () => A.Ay.getGamesSeen(!1)),
            { runningGame: t, overrideExePaths: n } = (0, r.cf)([A.Ay], () => ({
                runningGame: A.Ay.getVisibleGame(),
                overrideExePaths: V(...A.Ay.getOverrides()),
            }));
        s.useEffect(() => ((0, g.a2)(), g.e0), []);
        let a = s.useMemo(() => e.reduce((e, t) => ((0, p.n1)(t) && e.push(t), e), []), [e]);
        return null != t
            ? (0, i.jsx)(
                  M,
                  { rawGame: t, isOverride: n.has(t.exePath), nowPlaying: !0, subgames: t.id === x.a7 ? a : void 0 },
                  (0, A.Es)(t),
              )
            : (0, i.jsx)(U, {});
    },
    H = () => {
        let e = s.useRef(null);
        return (0, i.jsxs)("div", {
            className: l()(O.ax, P.Gf),
            children: [
                (0, i.jsx)("span", { children: v.intl.string(v.t.xwhoqM) }),
                (0, i.jsx)(d.YNO, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(G, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, i.jsx)(d.QWc, {
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
    B = (e) => {
        let { hideHeader: t = !1 } = e,
            n = (0, r.yK)([A.Ay], () => A.Ay.getGamesSeen(!1)),
            a = (0, r.bG)([A.Ay], () => V(...A.Ay.getOverrides()));
        s.useEffect(() => ((0, g.a2)(), g.e0), []);
        let { gameHistory: l, robloxSubgameHistory: o } = s.useMemo(
            () =>
                n.reduce((e, t) => ((0, p.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                    gameHistory: [],
                    robloxSubgameHistory: [],
                }),
            [n],
        );
        return 0 === l.length
            ? (0, i.jsx)(k, { children: (0, i.jsx)(d.SGT, { children: v.intl.string(v.t["1yiJwn"]) }) })
            : (0, i.jsx)(d.nVY, {
                  label: t ? void 0 : v.intl.string(v.t.jCOdvx),
                  description: t ? void 0 : v.intl.format(v.t.KPA3m9, { igdbLink: "https://www.igdb.com/about" }),
                  children: (0, i.jsx)("div", {
                      children: l.map((e) =>
                          (0, i.jsx)(
                              M,
                              { rawGame: e, isOverride: a.has(e.exePath), subgames: e.id === x.a7 ? o : void 0 },
                              (0, A.Es)(e),
                          ),
                      ),
                  }),
              });
    },
    Y = function (e) {
        let { className: t, showHeader: n = !0 } = e;
        return (0, i.jsxs)(N.A, {
            title: n ? v.intl.string(v.t.AVDyEj) : null,
            className: t,
            children: [(0, i.jsx)(w, {}), (0, i.jsx)(H, {}), (0, i.jsx)(d.cGx, { gap: 20 }), (0, i.jsx)(B, {})],
        });
    };
