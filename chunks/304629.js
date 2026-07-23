t.r(l), t.d(l, { default: () => T });
var s = t(627968),
    a = t(64700),
    n = t(989349),
    i = t.n(n),
    r = t(17928),
    d = t(939249),
    c = t(834730),
    o = t(323384),
    u = t(661531),
    m = t(297264),
    x = t(821609),
    h = t(292666),
    j = t(260598),
    g = t(289873),
    v = t(364522),
    f = t(948230),
    p = t(783791),
    N = t(998939),
    b = t(972786),
    E = t(656485),
    k = t(152367),
    A = t(408278),
    C = t(477155),
    y = t(375708),
    _ = t(833576);
function I(e) {
    let { title: l, onBack: t } = e;
    return (0, s.jsxs)("header", {
        className: _.w,
        children: [
            null == t
                ? (0, s.jsx)(k.D, { size: "custom", width: 20, height: 20, color: u.A.colors.TEXT_STRONG })
                : (0, s.jsx)(A.K, {
                      "aria-label": y.intl.string(y.t["13/7kX"]),
                      icon: C.r,
                      variant: "icon-only",
                      size: "sm",
                      onClick: t,
                  }),
            (0, s.jsx)(c.E, { variant: "text-md/medium", color: "text-strong", children: l }),
        ],
    });
}
var S = t(321593),
    w = t(818085),
    R = t(401029);
function F(e) {
    let { project: l, onSelect: t } = e,
        a = (0, r.bG)([p.A], () => p.A.isThinking(l.id), [l.id]),
        n =
            null == l.updated_at
                ? null
                : y.intl.formatToPlainString(w.default.oMDaqr, { time: i()(l.updated_at).fromNow() });
    return (0, s.jsxs)(d.D, {
        className: R.OY,
        onClick: t,
        children: [
            (0, s.jsxs)("div", {
                className: R.MM,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: R.j1,
                        children: l.name,
                    }),
                    (0, s.jsxs)("div", {
                        className: R.h3,
                        children: [
                            (0, s.jsx)(o.k, {
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: u.A.unsafe_rawColors.GREEN_300.css,
                            }),
                            (0, s.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: y.intl.string(w.default.sPSPIs),
                            }),
                            null == n
                                ? null
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(c.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              "aria-hidden": "true",
                                              children: "\xb7",
                                          }),
                                          (0, s.jsx)(c.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              children: n,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                ],
            }),
            a
                ? (0, s.jsx)("span", { role: "img", "aria-label": y.intl.string(w.default.ui2IQ2), className: R.v8 })
                : null,
        ],
    });
}
function T() {
    let e = (0, r.yK)([b.A], () => b.A.getAllProjects()),
        l = (0, r.bG)([b.A], () => b.A.getProjectsFetchState()),
        [t, n] = a.useState(""),
        [i, d] = a.useState(""),
        [o, u] = a.useState(null),
        [p, k] = a.useState(!1),
        [A, C] = a.useState(null),
        _ = t.trim(),
        T = i.trim(),
        D = a.useMemo(
            () =>
                e
                    .slice()
                    .sort((e, l) =>
                        null == e.updated_at ? 1 : null == l.updated_at ? -1 : l.updated_at.localeCompare(e.updated_at),
                    ),
            [e],
        );
    a.useEffect(() => {
        (0, f.hF)();
    }, []);
    let K = a.useCallback(async () => {
            if ("" !== _ && "" !== T) {
                k(!0), C(null);
                try {
                    let e = await (0, f.gA)({ name: _ });
                    (0, N.Hc)(e), (0, N.dv)(e, T), u(e), n(""), d("");
                } catch (e) {
                    C(e instanceof Error ? e.message : y.intl.string(w.default.KKkp5Y));
                } finally {
                    k(!1);
                }
            }
        }, [T, _]),
        P = y.intl.string(w.default.LcuTXC),
        z = y.intl.string(w.default.TU9IGR),
        G = null == o ? null : (e.find((e) => e.id === o) ?? null);
    return null != o
        ? (0, s.jsxs)("div", {
              className: R.nj,
              children: [
                  (0, s.jsx)(I, { title: G?.name ?? y.intl.string(w.default.F2dRba), onBack: () => u(null) }),
                  (0, s.jsx)("main", {
                      className: R.JX,
                      children:
                          null == G
                              ? (0, s.jsxs)("div", {
                                    className: R.sD,
                                    children: [
                                        (0, s.jsx)(m.D, {
                                            variant: "heading-lg/semibold",
                                            children: y.intl.string(w.default.F2dRba),
                                        }),
                                        (0, s.jsx)(c.E, {
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: y.intl.string(w.default.GnEJ3o),
                                        }),
                                        (0, s.jsx)(x.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: y.intl.string(w.default["42EdIV"]),
                                            onClick: f.hF,
                                        }),
                                    ],
                                })
                              : (0, s.jsxs)("div", {
                                    className: R.xR,
                                    children: [
                                        (0, s.jsx)(S.A, { projectId: G.id }),
                                        (0, s.jsx)(E.A, { projectId: G.id, open: !0 }, G.id),
                                    ],
                                }),
                  }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: R.nj,
              children: [
                  (0, s.jsx)(I, { title: y.intl.string(w.default.Xmvb23) }),
                  (0, s.jsx)("main", {
                      className: R.rf,
                      children: (0, s.jsxs)("div", {
                          className: R.Qs,
                          children: [
                              (0, s.jsxs)("section", {
                                  className: R.Ix,
                                  children: [
                                      (0, s.jsx)(m.D, {
                                          variant: "heading-xl/semibold",
                                          children: y.intl.string(w.default["2tYpRK"]),
                                      }),
                                      (0, s.jsxs)("div", {
                                          className: R.DA,
                                          children: [
                                              (0, s.jsx)(h.k, {
                                                  value: t,
                                                  maxLength: 128,
                                                  placeholder: P,
                                                  "aria-label": P,
                                                  onChange: (e) => {
                                                      n(e), C(null);
                                                  },
                                              }),
                                              (0, s.jsx)(j.f, {
                                                  label: z,
                                                  hideLabel: !0,
                                                  rows: 5,
                                                  value: i,
                                                  placeholder: z,
                                                  error: A,
                                                  onChange: (e) => {
                                                      d(e), C(null);
                                                  },
                                              }),
                                              (0, s.jsx)("div", {
                                                  className: R.VP,
                                                  children: (0, s.jsx)(x.$, {
                                                      variant: "primary",
                                                      size: "md",
                                                      text: y.intl.string(y.t.CumH4u),
                                                      disabled: "" === _ || "" === T || p,
                                                      loading: p,
                                                      onClick: K,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, s.jsxs)("section", {
                                  className: R.hK,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: R.RM,
                                          children: [
                                              (0, s.jsx)(c.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  children: y.intl.string(w.default.Bo5fE3),
                                              }),
                                              (0, s.jsx)(c.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: y.intl.string(w.default.YnAFtT),
                                              }),
                                          ],
                                      }),
                                      (null == l || "loading" === l.type) && 0 === e.length
                                          ? (0, s.jsx)("div", { className: R.E8, children: (0, s.jsx)(g.y, {}) })
                                          : l?.type === "error" && 0 === e.length
                                            ? (0, s.jsxs)("div", {
                                                  className: R.E8,
                                                  children: [
                                                      (0, s.jsx)(c.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          children: y.intl.string(w.default["IN/HRP"]),
                                                      }),
                                                      (0, s.jsx)(x.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: y.intl.string(w.default["42EdIV"]),
                                                          onClick: f.hF,
                                                      }),
                                                  ],
                                              })
                                            : (0, s.jsx)(v.Ip, {
                                                  className: R.K$,
                                                  children: D.map((e) =>
                                                      (0, s.jsx)(F, { project: e, onSelect: () => u(e.id) }, e.id),
                                                  ),
                                              }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
