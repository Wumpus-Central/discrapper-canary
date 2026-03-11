n.d(t, { Ay: () => F, T: () => B, Wx: () => H, cH: () => w }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(544420),
    _ = n(414079),
    g = n(29160),
    A = n(15285),
    m = n(843402),
    h = n(496885),
    p = n(227309),
    x = n(847521),
    E = n(760751),
    T = n(189081),
    S = n(954571),
    C = n(583613),
    I = n(723702),
    f = n(544028),
    N = n(790174),
    b = n(652215),
    v = n(650583),
    O = n(985018),
    j = n(38872),
    R = n(754694),
    y = n(641254),
    P = n(522759);
let D = r.Ay.connectStores([f.A], () => ({ theme: f.A.theme }))(c.ppr),
    L = (0, I.isWindows)();
function G(e) {
    let { onClose: t } = e,
        n = (0, r.bG)([A.Ay], () => A.Ay.getCandidateGames()),
        [l, o] = s.useState(null),
        d = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, i.jsxs)(c.lGe, {
        className: a()(j.H2, R.Y_),
        "aria-label": O.intl.string(O.t.GTCx0p),
        children: [
            (0, i.jsx)(c.ZiE, {
                selectionMode: "single",
                placeholder: O.intl.string(O.t.XqMe3N),
                value: l,
                options: d,
                onSelectionChange: function (e) {
                    o(e);
                },
            }),
            (0, i.jsx)(c.cGx, { className: a()(P.Ot, P.QB) }),
            (0, i.jsxs)("div", {
                className: a()(j.o1, y.xM),
                children: [
                    (0, i.jsx)(c.QWc, { variant: "secondary", text: O.intl.string(O.t["ETE/oC"]), onClick: t }),
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: O.intl.string(O.t.GTCx0p),
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
    let { rawGame: t, nowPlaying: l = !1, isOverride: m, subgames: p, isSubgame: C = !1, parentGame: I } = e,
        f = (0, r.cf)([A.Ay, E.A, T.A], () => (0, A.xU)(t, A.Ay, E.A, T.A)),
        { canToggleDetection: N, isCurrentGameDetectionEnabled: R } = (0, r.cf)([A.Ay], () => ({
            canToggleDetection: null == I || A.Ay.isDetectionEnabled(I),
            isCurrentGameDetectionEnabled: A.Ay.isDetectionEnabled(f),
        })),
        P = (0, r.bG)([A.Ay], () => A.Ay.getVisibleGame()),
        [D, G] = s.useState(!1),
        U = s.useMemo(
            () =>
                (0, x.n1)(f)
                    ? C
                        ? f.gameName
                        : O.intl.formatToPlainString(O.t.G6BGdx, { subgameName: f.gameName })
                    : f.name,
            [f, C],
        ),
        [k, V] = s.useState(U ?? "???"),
        w = a()(y.tR, { [j.LO]: !l, [j.Rw]: l, [j.FB]: null != f && l, [j.xL]: C, [j.fG]: null != p && p.length > 0 });
    function H() {
        null != p && p.length > 0 && R
            ? (0, c.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          title: O.intl.formatToPlainString(O.t.PZ4fKc, { platform: U }),
                          subtitle: O.intl.formatToPlainString(O.t.ZIQbfb, { platform: U }),
                          actions: [
                              { text: O.intl.string(O.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: O.intl.string(O.t.Fmjztz),
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
        F = (null != I && I.id === P?.id) || B || (null != p && p.some((e) => e.id === P?.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: w,
                children: [
                    (0, i.jsxs)("div", {
                        className: a()(j.$K, y.Vd),
                        children: [
                            f.verified && !m
                                ? (0, i.jsxs)("div", {
                                      className: j.HS,
                                      children: [
                                          (0, i.jsx)("div", { className: j.mO, children: U }),
                                          (0, i.jsx)(d.m_, {
                                              text: O.intl.string(O.t["4PJP5p"]),
                                              children: (0, i.jsx)(h.A, {
                                                  className: j.qf,
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
                                      className: a()(j.mO, j.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: k,
                                      onBlur: function () {
                                          f.name !== k && u.A.editName(f, k);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === v.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => V(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: n } = f;
                                return (
                                    l || B
                                        ? (e = O.intl.string(O.t.VbV5dv))
                                        : null != t && "" !== t && (e = O.intl.format(O.t["gGeOE+"], { when: t })),
                                    (0, i.jsx)("div", {
                                        className: j.GN,
                                        children: (0, i.jsx)(g.A, {
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
                              className: a()(y.tR, y.oA, y.LT, j.E3),
                              children: (0, i.jsx)(d.m_, {
                                  text: O.intl.string(O.t["y0B+lo"]),
                                  children: (0, i.jsx)(c.DUT, {
                                      "aria-label": O.intl.string(O.t["y0B+lo"]),
                                      className: j.ym,
                                      onClick: function () {
                                          if (D) return;
                                          let e = null != f.id ? E.A.getDetectableGame(f.id) : null;
                                          S.default.track(b.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, x.n1)(f) ? f.gameName : f.name,
                                          }),
                                              G(!0),
                                              (0, c.mMO)(async () => {
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
                                      children: (0, i.jsx)(c.iFK, {
                                          size: "md",
                                          color: "currentColor",
                                          className: j.Lj,
                                          colorClass: j.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = f,
                            t =
                                e && N
                                    ? (0, i.jsx)(c.bMW, {
                                          size: "md",
                                          color: "currentColor",
                                          className: j.Lj,
                                          colorClass: j.GS,
                                      })
                                    : (0, i.jsx)(c.G3N, {
                                          size: "md",
                                          color: "currentColor",
                                          className: N ? j.$V : j.zN,
                                          colorClass: j.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: a()(y.tR, y.oA, y.LT, j.E3),
                            children: (0, i.jsx)(d.m_, {
                                text: O.intl.string(O.t.QmitzM),
                                children: N
                                    ? (0, i.jsx)(c.DUT, {
                                          "aria-label": O.intl.string(O.t.QmitzM),
                                          className: j.ym,
                                          onClick: H,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!L || null != I) return null;
                        let { overlay: e, overlayWarn: t } = f,
                            n = e
                                ? (0, i.jsx)(c.kN9, {
                                      size: "md",
                                      color: "currentColor",
                                      className: j.Lj,
                                      colorClass: j.GS,
                                  })
                                : (0, i.jsx)(c.nkR, {
                                      size: "md",
                                      color: "currentColor",
                                      className: j.$V,
                                      colorClass: j.GS,
                                  }),
                            s = t
                                ? (0, i.jsx)(d.m_, {
                                      text: O.intl.string(O.t.Vfw2L5),
                                      children: (0, i.jsx)("i", { className: j.kb }),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: a()(y.tR, y.oA, y.LT, j.E3),
                            children: [
                                s,
                                (0, i.jsx)(d.m_, {
                                    text: O.intl.string(O.t["1+O+Tu"]),
                                    children: (0, i.jsx)(c.DUT, {
                                        "aria-label": O.intl.string(O.t["1+O+Tu"]),
                                        className: j.ym,
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
                    (l && !m) || F
                        ? null
                        : (0, i.jsx)(_.A, {
                              className: j.LS,
                              onClick: function () {
                                  u.A.deleteEntry(f),
                                      p?.forEach((e) => {
                                          u.A.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != p &&
                p.length > 0 &&
                !l &&
                (0, i.jsx)("div", {
                    className: j.AQ,
                    children: p.map((e, t) =>
                        (0, i.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(M, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: f }),
                                    t !== p.length - 1 && (0, i.jsx)("div", { className: j.PQ }),
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
        className: a()(y.tR, j.eS, j.Rw),
        children: (0, i.jsxs)("div", {
            className: a()(j.$K, y.Vd),
            children: [
                (0, i.jsx)("div", { className: j.mO, children: O.intl.string(O.t.H68X9x) }),
                (0, i.jsx)("div", { className: j.GN, children: O.intl.string(O.t.T5Ilmw) }),
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
let V = (0, C.L_)(function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new Set(t.map((e) => e.exePath));
    }),
    w = () => {
        let e = (0, r.yK)([A.Ay], () => A.Ay.getGamesSeen(!1)),
            { runningGame: t, overrideExePaths: n } = (0, r.cf)([A.Ay], () => ({
                runningGame: A.Ay.getVisibleGame(),
                overrideExePaths: V(...A.Ay.getOverrides()),
            }));
        s.useEffect(() => ((0, m.a2)(), m.e0), []);
        let l = s.useMemo(() => e.reduce((e, t) => ((0, x.n1)(t) && e.push(t), e), []), [e]);
        return null != t
            ? (0, i.jsx)(
                  M,
                  { rawGame: t, isOverride: n.has(t.exePath), nowPlaying: !0, subgames: t.id === p.a7 ? l : void 0 },
                  (0, A.Es)(t),
              )
            : (0, i.jsx)(U, {});
    },
    H = () => {
        let e = s.useRef(null);
        return (0, i.jsxs)("div", {
            className: a()(j.ax, P.Gf),
            children: [
                (0, i.jsx)("span", { children: O.intl.string(O.t.xwhoqM) }),
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
                            text: O.intl.string(O.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
    B = (e) => {
        let { hideHeader: t = !1 } = e,
            n = (0, r.yK)([A.Ay], () => A.Ay.getGamesSeen(!1)),
            l = (0, r.bG)([A.Ay], () => V(...A.Ay.getOverrides()));
        s.useEffect(() => ((0, m.a2)(), m.e0), []);
        let { gameHistory: a, robloxSubgameHistory: o } = s.useMemo(
            () =>
                n.reduce((e, t) => ((0, x.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                    gameHistory: [],
                    robloxSubgameHistory: [],
                }),
            [n],
        );
        return 0 === a.length
            ? (0, i.jsx)(k, { children: (0, i.jsx)(c.SGT, { children: O.intl.string(O.t["1yiJwn"]) }) })
            : (0, i.jsx)(c.nVY, {
                  label: t ? void 0 : O.intl.string(O.t.jCOdvx),
                  description: t ? void 0 : O.intl.format(O.t.KPA3m9, { igdbLink: "https://www.igdb.com/about" }),
                  children: (0, i.jsx)("div", {
                      children: a.map((e) =>
                          (0, i.jsx)(
                              M,
                              { rawGame: e, isOverride: l.has(e.exePath), subgames: e.id === p.a7 ? o : void 0 },
                              (0, A.Es)(e),
                          ),
                      ),
                  }),
              });
    },
    F = function (e) {
        let { className: t, showHeader: n = !0 } = e;
        return (0, i.jsxs)(N.A, {
            title: n ? O.intl.string(O.t.AVDyEj) : null,
            className: t,
            children: [(0, i.jsx)(w, {}), (0, i.jsx)(H, {}), (0, i.jsx)(c.cGx, { gap: 20 }), (0, i.jsx)(B, {})],
        });
    };
