n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(544420),
    m = n(414079),
    g = n(29160),
    _ = n(15285),
    x = n(496885),
    h = n(847521),
    A = n(760751),
    p = n(189081),
    T = n(954571),
    f = n(723702),
    S = n(652215),
    E = n(650583),
    b = n(985018),
    C = n(402627),
    v = n(653307);
let N = (0, f.isWindows)();
function I(e) {
    let { rawGame: t, nowPlaying: l = !1, isOverride: j, subgames: y, isSubgame: O = !1, parentGame: R } = e,
        L = (0, a.cf)([_.Ay, A.A, p.A], () => (0, _.xU)(t, _.Ay, A.A, p.A)),
        { canToggleDetection: P, isCurrentGameDetectionEnabled: D } = (0, a.cf)([_.Ay], () => ({
            canToggleDetection: null == R || _.Ay.isDetectionEnabled(R),
            isCurrentGameDetectionEnabled: _.Ay.isDetectionEnabled(L),
        })),
        G = (0, a.bG)([_.Ay], () => _.Ay.getVisibleGame()),
        [M, U] = s.useState(!1),
        k = s.useMemo(
            () =>
                (0, h.n1)(L)
                    ? O
                        ? L.gameName
                        : b.intl.formatToPlainString(b.t.G6BGdx, { subgameName: L.gameName })
                    : L.name,
            [L, O],
        ),
        [w, V] = s.useState(k ?? "???"),
        B = r()(v.tR, { [C.LO]: !l, [C.Rw]: l, [C.FB]: null != L && l, [C.xL]: O, [C.fG]: null != y && y.length > 0 });
    function F() {
        null != y && y.length > 0 && D
            ? (0, c.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          title: b.intl.formatToPlainString(b.t.PZ4fKc, { platform: k }),
                          subtitle: b.intl.formatToPlainString(b.t.ZIQbfb, { platform: k }),
                          actions: [
                              { text: b.intl.string(b.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: b.intl.string(b.t.Fmjztz),
                                  onClick: () => {
                                      u.Ay.toggleDetection(L), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : u.Ay.toggleDetection(L);
    }
    let H = null != G && (0, _.Es)(L) === (0, _.Es)(G),
        z = (null != R && R.id === G?.id) || H || (null != y && y.some((e) => e.id === G?.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: B,
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(C.$K, v.Vd),
                        children: [
                            L.verified && !j
                                ? (0, i.jsxs)("div", {
                                      className: C.HS,
                                      children: [
                                          (0, i.jsx)("div", { className: C.mO, children: k }),
                                          (0, i.jsx)(d.m_, {
                                              text: b.intl.string(b.t["4PJP5p"]),
                                              children: (0, i.jsx)(x.A, {
                                                  className: C.qf,
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
                                      className: r()(C.mO, C.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: w,
                                      onBlur: function () {
                                          L.name !== w && u.Ay.editName(L, w);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === E.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => V(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: s } = L;
                                return (
                                    l || H
                                        ? (e = b.intl.string(b.t.VbV5dv))
                                        : null != n && "" !== n && (e = b.intl.format(b.t["gGeOE+"], { when: n })),
                                    (0, i.jsx)("div", {
                                        className: C.GN,
                                        children: (0, i.jsx)(g.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, f.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    j || M
                        ? null
                        : (0, i.jsx)("div", {
                              className: r()(v.tR, v.oA, v.LT, C.E3),
                              children: (0, i.jsx)(d.m_, {
                                  text: b.intl.string(b.t["y0B+lo"]),
                                  children: (0, i.jsx)(c.DUT, {
                                      "aria-label": b.intl.string(b.t["y0B+lo"]),
                                      className: C.ym,
                                      onClick: function () {
                                          if (M) return;
                                          let e = null != L.id ? A.A.getDetectableGame(L.id) : null;
                                          T.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, h.n1)(L) ? L.gameName : L.name,
                                          }),
                                              U(!0),
                                              (0, c.mMO)(async () => {
                                                  let { default: t } = await n.e("49876").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, i.jsx)(t, {
                                                          ...n,
                                                          detectedActivity: {
                                                              name: L.name ?? "",
                                                              application_id: e?.id ?? L.id ?? void 0,
                                                              type: S.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, i.jsx)(c.iFK, {
                                          size: "md",
                                          color: "currentColor",
                                          className: C.Lj,
                                          colorClass: C.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = L,
                            t =
                                e && P
                                    ? (0, i.jsx)(c.bMW, {
                                          size: "md",
                                          color: "currentColor",
                                          className: C.Lj,
                                          colorClass: C.GS,
                                      })
                                    : (0, i.jsx)(c.G3N, {
                                          size: "md",
                                          color: "currentColor",
                                          className: P ? C.$V : C.zN,
                                          colorClass: C.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: r()(v.tR, v.oA, v.LT, C.E3),
                            children: (0, i.jsx)(d.m_, {
                                text: b.intl.string(b.t.QmitzM),
                                children: P
                                    ? (0, i.jsx)(c.DUT, {
                                          "aria-label": b.intl.string(b.t.QmitzM),
                                          className: C.ym,
                                          onClick: F,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!N || null != R) return null;
                        let { overlay: e, overlayWarn: t } = L,
                            n = e
                                ? (0, i.jsx)(c.kN9, {
                                      size: "md",
                                      color: "currentColor",
                                      className: C.Lj,
                                      colorClass: C.GS,
                                  })
                                : (0, i.jsx)(c.nkR, {
                                      size: "md",
                                      color: "currentColor",
                                      className: C.$V,
                                      colorClass: C.GS,
                                  }),
                            s = t
                                ? (0, i.jsx)(d.m_, {
                                      text: b.intl.string(b.t.Vfw2L5),
                                      children: (0, i.jsx)("i", { className: C.kb }),
                                  })
                                : null;
                        return (0, i.jsxs)("div", {
                            className: r()(v.tR, v.oA, v.LT, C.E3),
                            children: [
                                s,
                                (0, i.jsx)(d.m_, {
                                    text: b.intl.string(b.t["1+O+Tu"]),
                                    children: (0, i.jsx)(c.DUT, {
                                        "aria-label": b.intl.string(b.t["1+O+Tu"]),
                                        className: C.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void u.Ay.toggleOverlay(L, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (l && !j) || z
                        ? null
                        : (0, i.jsx)(m.A, {
                              className: C.LS,
                              onClick: function () {
                                  u.Ay.deleteEntry(L),
                                      y?.forEach((e) => {
                                          u.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != y &&
                y.length > 0 &&
                !l &&
                (0, i.jsx)("div", {
                    className: C.AQ,
                    children: y.map((e, t) =>
                        (0, i.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(I, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: L }),
                                    t !== y.length - 1 && (0, i.jsx)("div", { className: C.PQ }),
                                ],
                            },
                            (0, _.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
