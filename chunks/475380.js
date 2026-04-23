n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    u = n(192308),
    c = n(478016),
    g = n(31300),
    m = n(1215),
    _ = n(939249),
    A = n(39623),
    h = n(952270),
    p = n(138134),
    x = n(544420),
    E = n(414079),
    T = n(29160),
    S = n(15285),
    f = n(496885),
    b = n(847521),
    C = n(760751),
    v = n(189081),
    N = n(954571),
    I = n(723702),
    y = n(652215),
    j = n(650583),
    O = n(985018),
    R = n(402627),
    L = n(653307);
let D = (0, I.isWindows)();
function P(e) {
    let { rawGame: t, nowPlaying: l = !1, isOverride: G, subgames: M, isSubgame: U = !1, parentGame: k } = e,
        V = (0, r.cf)([S.Ay, C.A, v.A], () => (0, S.xU)(t, S.Ay, C.A, v.A)),
        { canToggleDetection: w, isCurrentGameDetectionEnabled: B } = (0, r.cf)([S.Ay], () => ({
            canToggleDetection: null == k || S.Ay.isDetectionEnabled(k),
            isCurrentGameDetectionEnabled: S.Ay.isDetectionEnabled(V),
        })),
        F = (0, r.bG)([S.Ay], () => S.Ay.getVisibleGame()),
        [z, H] = s.useState(!1),
        Y = s.useMemo(
            () =>
                (0, b.n1)(V)
                    ? U
                        ? V.gameName
                        : O.intl.formatToPlainString(O.t.G6BGdx, { subgameName: V.gameName })
                    : V.name,
            [V, U],
        ),
        [X, K] = s.useState(Y ?? "???"),
        W = a()(L.tR, { [R.LO]: !l, [R.Rw]: l, [R.FB]: null != V && l, [R.xL]: U, [R.fG]: null != M && M.length > 0 });
    function Z() {
        null != M && M.length > 0 && B
            ? (0, u.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("4823").then(n.bind(n, 158954));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          title: O.intl.formatToPlainString(O.t.PZ4fKc, { platform: Y }),
                          subtitle: O.intl.formatToPlainString(O.t.ZIQbfb, { platform: Y }),
                          actions: [
                              { text: O.intl.string(O.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: O.intl.string(O.t.Fmjztz),
                                  onClick: () => {
                                      x.Ay.toggleDetection(V), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : x.Ay.toggleDetection(V);
    }
    let q = null != F && (0, S.Es)(V) === (0, S.Es)(F),
        Q = (null != k && k.id === F?.id) || q || (null != M && M.some((e) => e.id === F?.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: W,
                children: [
                    (0, i.jsxs)("div", {
                        className: a()(R.$K, L.Vd),
                        children: [
                            V.verified && !G
                                ? (0, i.jsxs)("div", {
                                      className: R.HS,
                                      children: [
                                          (0, i.jsx)("div", { className: R.mO, children: Y }),
                                          (0, i.jsx)(d.m, {
                                              text: O.intl.string(O.t["4PJP5p"]),
                                              children: (0, i.jsx)(f.A, {
                                                  className: R.qf,
                                                  size: 18,
                                                  color: o.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, i.jsx)(c.U, {
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
                                      className: a()(R.mO, R.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: X,
                                      onBlur: function () {
                                          V.name !== X && x.Ay.editName(V, X);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === j.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => K(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: s } = V;
                                return (
                                    l || q
                                        ? (e = O.intl.string(O.t.VbV5dv))
                                        : null != n && "" !== n && (e = O.intl.format(O.t["gGeOE+"], { when: n })),
                                    (0, i.jsx)("div", {
                                        className: R.GN,
                                        children: (0, i.jsx)(T.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, I.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    G || z
                        ? null
                        : (0, i.jsx)("div", {
                              className: a()(L.tR, L.oA, L.LT, R.E3),
                              children: (0, i.jsx)(d.m, {
                                  text: O.intl.string(O.t["y0B+lo"]),
                                  children: (0, i.jsx)(_.D, {
                                      "aria-label": O.intl.string(O.t["y0B+lo"]),
                                      className: R.ym,
                                      onClick: function () {
                                          if (z) return;
                                          let e = null != V.id ? C.A.getDetectableGame(V.id) : null;
                                          N.default.track(y.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, b.n1)(V) ? V.gameName : V.name,
                                          }),
                                              H(!0),
                                              (0, u.openModalLazy)(async () => {
                                                  let { default: t } = await n.e("27495").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, i.jsx)(t, {
                                                          ...n,
                                                          detectedActivity: {
                                                              name: V.name ?? "",
                                                              application_id: e?.id ?? V.id ?? void 0,
                                                              type: y.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, i.jsx)(p.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: R.Lj,
                                          colorClass: R.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = V,
                            t =
                                e && w
                                    ? (0, i.jsx)(A.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: R.Lj,
                                          colorClass: R.GS,
                                      })
                                    : (0, i.jsx)(h.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: w ? R.$V : R.zN,
                                          colorClass: R.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: a()(L.tR, L.oA, L.LT, R.E3),
                            children: (0, i.jsx)(d.m, {
                                text: O.intl.string(O.t.QmitzM),
                                children: w
                                    ? (0, i.jsx)(_.D, {
                                          "aria-label": O.intl.string(O.t.QmitzM),
                                          className: R.ym,
                                          onClick: Z,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!D || null != k) return null;
                        let { overlay: e, overlayWarn: t } = V,
                            n = e
                                ? (0, i.jsx)(g.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: R.Lj,
                                      colorClass: R.GS,
                                  })
                                : (0, i.jsx)(m.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: R.$V,
                                      colorClass: R.GS,
                                  }),
                            s = t
                                ? (0, i.jsx)(d.m, {
                                      text: O.intl.string(O.t.Vfw2L5),
                                      children: (0, i.jsx)("i", { className: R.kb }),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: a()(L.tR, L.oA, L.LT, R.E3),
                            children: [
                                s,
                                (0, i.jsx)(d.m, {
                                    text: O.intl.string(O.t["1+O+Tu"]),
                                    children: (0, i.jsx)(_.D, {
                                        "aria-label": O.intl.string(O.t["1+O+Tu"]),
                                        className: R.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void x.Ay.toggleOverlay(V, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (l && !G) || Q
                        ? null
                        : (0, i.jsx)(E.A, {
                              className: R.LS,
                              onClick: function () {
                                  x.Ay.deleteEntry(V),
                                      M?.forEach((e) => {
                                          x.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != M &&
                M.length > 0 &&
                !l &&
                (0, i.jsx)("div", {
                    className: R.AQ,
                    children: M.map((e, t) =>
                        (0, i.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(P, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: V }),
                                    t !== M.length - 1 && (0, i.jsx)("div", { className: R.PQ }),
                                ],
                            },
                            (0, S.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
