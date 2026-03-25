n.d(t, { A: () => I });
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
    x = n(496885),
    A = n(847521),
    h = n(760751),
    p = n(189081),
    f = n(954571),
    T = n(723702),
    S = n(652215),
    E = n(650583),
    b = n(985018),
    C = n(492254),
    v = n(20976);
let N = (0, T.isWindows)();
function I(e) {
    let { rawGame: t, nowPlaying: l = !1, isOverride: T, subgames: j, isSubgame: y = !1, parentGame: O } = e,
        R = (0, r.cf)([g.Ay, h.A, p.A], () => (0, g.xU)(t, g.Ay, h.A, p.A)),
        { canToggleDetection: L, isCurrentGameDetectionEnabled: P } = (0, r.cf)([g.Ay], () => ({
            canToggleDetection: null == O || g.Ay.isDetectionEnabled(O),
            isCurrentGameDetectionEnabled: g.Ay.isDetectionEnabled(R),
        })),
        D = (0, r.bG)([g.Ay], () => g.Ay.getVisibleGame()),
        [G, M] = s.useState(!1),
        U = s.useMemo(
            () =>
                (0, A.n1)(R)
                    ? y
                        ? R.gameName
                        : b.intl.formatToPlainString(b.t.G6BGdx, { subgameName: R.gameName })
                    : R.name,
            [R, y],
        ),
        [k, w] = s.useState(U ?? "???"),
        V = a()(v.tR, { [C.LO]: !l, [C.Rw]: l, [C.FB]: null != R && l, [C.xL]: y, [C.fG]: null != j && j.length > 0 });
    function B() {
        null != j && j.length > 0 && P
            ? (0, c.mMO)(async () => {
                  let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          title: b.intl.formatToPlainString(b.t.PZ4fKc, { platform: U }),
                          subtitle: b.intl.formatToPlainString(b.t.ZIQbfb, { platform: U }),
                          actions: [
                              { text: b.intl.string(b.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: b.intl.string(b.t.Fmjztz),
                                  onClick: () => {
                                      u.A.toggleDetection(R), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : u.A.toggleDetection(R);
    }
    let F = null != D && (0, g.Es)(R) === (0, g.Es)(D),
        H = (null != O && O.id === D?.id) || F || (null != j && j.some((e) => e.id === D?.id));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: V,
                children: [
                    (0, i.jsxs)("div", {
                        className: a()(C.$K, v.Vd),
                        children: [
                            R.verified && !T
                                ? (0, i.jsxs)("div", {
                                      className: C.HS,
                                      children: [
                                          (0, i.jsx)("div", { className: C.mO, children: U }),
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
                                      className: a()(C.mO, C.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: k,
                                      onBlur: function () {
                                          R.name !== k && u.A.editName(R, k);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === E.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => w(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    { played: t, exePath: n } = R;
                                return (
                                    l || F
                                        ? (e = b.intl.string(b.t.VbV5dv))
                                        : null != t && "" !== t && (e = b.intl.format(b.t["gGeOE+"], { when: t })),
                                    (0, i.jsx)("div", {
                                        className: C.GN,
                                        children: (0, i.jsx)(_.A, {
                                            hoverText: null != n && "" !== n ? n.toUpperCase() : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    T || G
                        ? null
                        : (0, i.jsx)("div", {
                              className: a()(v.tR, v.oA, v.LT, C.E3),
                              children: (0, i.jsx)(d.m_, {
                                  text: b.intl.string(b.t["y0B+lo"]),
                                  children: (0, i.jsx)(c.DUT, {
                                      "aria-label": b.intl.string(b.t["y0B+lo"]),
                                      className: C.ym,
                                      onClick: function () {
                                          if (G) return;
                                          let e = null != R.id ? h.A.getDetectableGame(R.id) : null;
                                          f.default.track(S.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, A.n1)(R) ? R.gameName : R.name,
                                          }),
                                              M(!0),
                                              (0, c.mMO)(async () => {
                                                  let { default: t } = await n.e("27495").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, i.jsx)(t, {
                                                          ...n,
                                                          detectedActivity: {
                                                              name: R.name ?? "",
                                                              application_id: e?.id ?? R.id ?? void 0,
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
                        let { detectable: e } = R,
                            t =
                                e && L
                                    ? (0, i.jsx)(c.bMW, {
                                          size: "md",
                                          color: "currentColor",
                                          className: C.Lj,
                                          colorClass: C.GS,
                                      })
                                    : (0, i.jsx)(c.G3N, {
                                          size: "md",
                                          color: "currentColor",
                                          className: L ? C.$V : C.zN,
                                          colorClass: C.GS,
                                      });
                        return (0, i.jsx)("div", {
                            className: a()(v.tR, v.oA, v.LT, C.E3),
                            children: (0, i.jsx)(d.m_, {
                                text: b.intl.string(b.t.QmitzM),
                                children: L
                                    ? (0, i.jsx)(c.DUT, {
                                          "aria-label": b.intl.string(b.t.QmitzM),
                                          className: C.ym,
                                          onClick: B,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!N || null != O) return null;
                        let { overlay: e, overlayWarn: t } = R,
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
                            className: a()(v.tR, v.oA, v.LT, C.E3),
                            children: [
                                s,
                                (0, i.jsx)(d.m_, {
                                    text: b.intl.string(b.t["1+O+Tu"]),
                                    children: (0, i.jsx)(c.DUT, {
                                        "aria-label": b.intl.string(b.t["1+O+Tu"]),
                                        className: C.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void u.A.toggleOverlay(R, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (l && !T) || H
                        ? null
                        : (0, i.jsx)(m.A, {
                              className: C.LS,
                              onClick: function () {
                                  u.A.deleteEntry(R),
                                      j?.forEach((e) => {
                                          u.A.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != j &&
                j.length > 0 &&
                !l &&
                (0, i.jsx)("div", {
                    className: C.AQ,
                    children: j.map((e, t) =>
                        (0, i.jsxs)(
                            s.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(I, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: R }),
                                    t !== j.length - 1 && (0, i.jsx)("div", { className: C.PQ }),
                                ],
                            },
                            (0, g.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
