l.d(t, { default: () => F });
var n = l(477900),
    i = l(582128),
    a = l(793574);
let s = (0, l(945810).mj)({
    name: "2026-07-gdop-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var r = l(189213),
    d = l(17928),
    c = l(834730),
    u = l(287809),
    o = l(633075),
    g = l(788259),
    h = l(96173);
function m(e) {
    let t = (0, h.A)(),
        [l, n] = i.useState(t);
    return (
        i.useEffect(() => {
            t.length > l.length && n(t);
        }, [t, l]),
        i.useMemo(() => {
            if (null == e || 0 === e.length) return l;
            function t(t) {
                return null != e && t instanceof o.R && e.includes(t.applicationId);
            }
            return [...l.filter(t), ...l.filter((e) => !t(e))];
        }, [l, e])
    );
}
var x = l(375708),
    f = l(455007);
function p(e) {
    let { onClose: t, trackUserProfileEditAction: l, highlightedApplicationIds: a, ...s } = e,
        h = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        p = m(a),
        j = p.length > 0,
        [A, b] = i.useState(!1),
        y = { onClick: () => t(), text: x.intl.string(x.t.cpT0Cq) },
        N = i.useCallback(() => {
            b(!0), t();
        }, [t]);
    return null == h
        ? null
        : (0, n.jsx)(r.Modal, {
              title: x.intl.string(x.t["grUgR+"]),
              actions: j ? [] : [y],
              size: j ? "md" : "sm",
              onClose: t,
              ...s,
              children: j
                  ? (0, n.jsx)("ul", {
                        "aria-label": x.intl.string(x.t["+EIBSA"]),
                        className: f.f,
                        children: p.map((e) =>
                            (0, n.jsx)(
                                g.A,
                                {
                                    widget: e,
                                    onAddWidget: N,
                                    loading: A,
                                    trackUserProfileEditAction: l,
                                    isHighlighted: null != a && e instanceof o.R && a.includes(e.applicationId),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    })
                  : (0, n.jsx)(c.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: x.intl.string(x.t["1nkDOs"]),
                    }),
          });
}
l(321073);
var j = l(540185),
    A = l(224640),
    b = l(20742),
    y = l(761508),
    N = l(508770),
    v = l(689175),
    C = l(192308),
    E = l(939249),
    k = l(152367),
    P = l(71393),
    S = l(683180),
    I = l(295813),
    U = l(201799);
function w(e) {
    let { onOpen: t } = e,
        a = (0, d.bG)([P.A], () => (0, S.RZ)(P.A.getGuildsArray(), "VibegrationsCustomWidgetAddOption").length > 0, []),
        s = i.useCallback(() => {
            t?.(),
                (0, C.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("531198"),
                            l.e("446427"),
                            l.e("882736"),
                            l.e("553465"),
                            l.e("269606"),
                            l.e("208307"),
                        ]).then(l.bind(l, 938872));
                        return (t) => (0, n.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    return a
        ? (0, n.jsxs)(E.D, {
              className: U.u,
              onClick: s,
              "aria-label": x.intl.string(I.default["27bu14"]),
              children: [
                  (0, n.jsx)(k.D, { size: "custom", width: 24, height: 24, color: "var(--icon-secondary)" }),
                  (0, n.jsx)(c.E, {
                      variant: "text-sm/semibold",
                      color: "text-default",
                      children: x.intl.string(I.default["4OR+L+"]),
                  }),
              ],
          })
        : null;
}
var R = l(403362),
    G = l(210598),
    O = l(503698),
    W = l.n(O),
    q = l(683438),
    L = l(140735),
    K = l(661439),
    D = l(429913),
    H = l(90165),
    M = l(976527);
function V(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: a,
            isSubmitting: s,
            trackUserProfileEditAction: r,
            highlightedApplicationIds: u,
        } = e,
        [o, h] = i.useState(""),
        [m] = i.useState(() => Date.now());
    i.useEffect(() => {
        (0, K.X)();
    }, []);
    let f = (0, D.A)(t.map((e) => e.applicationId)),
        p = (0, d.yK)([H.A], () =>
            f.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? H.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        j = i.useMemo(() => {
            let e = new Set(u ?? []),
                l = m - 7776e6;
            return t
                .map((t, n) => {
                    let i = p[n] ?? null;
                    return {
                        widget: t,
                        searchName: (f[n]?.name ?? "").toLowerCase(),
                        isHighlighted: e.has(t.applicationId),
                        recentlyPlayedAt: null != i && i > l ? i : null,
                    };
                })
                .sort((e, t) =>
                    e.isHighlighted !== t.isHighlighted
                        ? e.isHighlighted
                            ? -1
                            : 1
                        : e.recentlyPlayedAt !== t.recentlyPlayedAt
                          ? null == e.recentlyPlayedAt
                              ? 1
                              : null == t.recentlyPlayedAt
                                ? -1
                                : t.recentlyPlayedAt - e.recentlyPlayedAt
                          : e.searchName.localeCompare(t.searchName),
                );
        }, [t, f, u, p, m]),
        A = i.useMemo(() => {
            let e = o.trim().toLowerCase();
            return "" === e
                ? j
                : j.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [j, o]);
    return (0, n.jsxs)("div", {
        className: M.kL,
        children: [
            l &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(q.I, {
                            query: o,
                            onChange: h,
                            onClear: () => h(""),
                            placeholder: x.intl.string(x.t.fBRUk1),
                            "aria-label": x.intl.string(x.t.fBRUk1),
                        }),
                        (0, n.jsx)(L.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: x.intl.format(x.t["r/EUap"], { count: A.length }),
                        }),
                    ],
                }),
            A.length > 0
                ? (0, n.jsx)("ul", {
                      "aria-label": x.intl.string(x.t.mW75GT),
                      className: W()(M.Vg, { [M.i0]: l }),
                      children: A.map((e) => {
                          let { widget: t, isHighlighted: i } = e;
                          return (0, n.jsx)(
                              "li",
                              {
                                  children: (0, n.jsx)(g.A, {
                                      widget: t,
                                      onAddWidget: a,
                                      loading: s,
                                      size: l ? "small" : "default",
                                      trackUserProfileEditAction: r,
                                      isHighlighted: i,
                                      hideApplicationWidgetStatus: l,
                                  }),
                              },
                              t.getUniqueKey(),
                          );
                      }),
                  })
                : (0, n.jsx)("div", {
                      className: M.wV,
                      children: (0, n.jsx)(c.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: x.intl.string(x.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var z = l(488634);
function B(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", {
        className: z.HY,
        children: (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function T(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: i, trackUserProfileEditAction: a } = e;
    return (0, n.jsxs)("ul", {
        "aria-label": x.intl.string(x.t["+EIBSA"]),
        className: z.Gm,
        children: [
            t.map((e) =>
                (0, n.jsx)(
                    "li",
                    {
                        children: (0, n.jsx)(g.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: i,
                            trackUserProfileEditAction: a,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, n.jsx)("li", { children: (0, n.jsx)(w, { onOpen: l }) }),
        ],
    });
}
function _(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: a, highlightedApplicationIds: s, initialCategory: r, ...c } = e,
        g = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        h = m(),
        { applicationWidgets: f, collectionWidgets: p } = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let n of e) n instanceof o.R ? t.push(n) : l.push(n);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(h),
            [h],
        ),
        C = f.length > 0,
        E = p.length > 0,
        [k, P] = i.useState(() =>
            (function (e) {
                let { initialCategory: t, hasInterests: l, hasGameStats: n, highlightedApplicationIds: i } = e;
                return (i?.length ?? 0) > 0
                    ? "gameStats"
                    : null != t
                      ? t
                      : l
                        ? "interests"
                        : n
                          ? "gameStats"
                          : "interests";
            })({ initialCategory: r, hasInterests: E, hasGameStats: C, highlightedApplicationIds: s }),
        ),
        [S, I] = i.useState(!1),
        U = i.useCallback(() => {
            I(!0), l();
        }, [l]);
    if (null == g) return null;
    let w = x.intl.string(x.t["grUgR+"]),
        O = (function (e) {
            switch (e) {
                case "interests":
                    return x.t.NpchGq;
                case "gameStats":
                    return x.t.EKR8Ps;
                case "createYourOwn":
                    return x.t.eGAirq;
                default:
                    (0, R.xb)(e);
            }
        })(k),
        W = (s?.length ?? 0) > 0;
    return (
        (t =
            C || E
                ? "gameStats" === k
                    ? C
                        ? (0, n.jsx)("div", {
                              className: z.lU,
                              children: (0, n.jsx)(V, {
                                  applicationWidgets: f,
                                  dense: f.length >= 20,
                                  handleAddWidget: U,
                                  isSubmitting: S,
                                  trackUserProfileEditAction: a,
                                  highlightedApplicationIds: s,
                              }),
                          })
                        : (0, n.jsx)(B, { children: x.intl.format(x.t.mcdIFp, { tabName: x.intl.string(O) }) })
                    : E
                      ? (0, n.jsx)("div", {
                            className: z.lU,
                            children: (0, n.jsx)(T, {
                                widgets: p,
                                onAddWidget: U,
                                isSubmitting: S,
                                trackUserProfileEditAction: a,
                            }),
                        })
                      : (0, n.jsx)(B, { children: x.intl.format(x.t.mcdIFp, { tabName: x.intl.string(O) }) })
                : (0, n.jsx)(B, { children: x.intl.string(x.t["1nkDOs"]) })),
        (0, n.jsxs)(A.d, {
            size: "lg",
            onClose: l,
            "aria-label": w,
            ...c,
            children: [
                (0, n.jsx)(b.rQ, { title: w }),
                (0, n.jsxs)("div", {
                    className: z.rf,
                    children: [
                        (0, n.jsxs)(y.V, {
                            className: z.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: k,
                            onItemSelect: (e) => {
                                null != e && P(e);
                            },
                            "aria-label": x.intl.string(x.t.bKOzux),
                            children: [
                                (0, n.jsxs)(y.V.Item, {
                                    className: z.pc,
                                    id: "interests",
                                    "aria-label": x.intl.string(x.t.NpchGq),
                                    children: [
                                        x.intl.string(x.t.NpchGq),
                                        (0, G.t0)() && null != p.find((e) => e.type === j.x.PERSONAL)
                                            ? (0, n.jsx)(N.E, { type: "new", variant: "brand" })
                                            : null,
                                    ],
                                }),
                                (0, n.jsxs)(y.V.Item, {
                                    className: z.pc,
                                    id: "gameStats",
                                    "aria-label": x.intl.string(x.t.EKR8Ps),
                                    children: [
                                        x.intl.string(x.t.EKR8Ps),
                                        W && (0, n.jsx)(N.E, { type: "new", variant: "brand" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)(y.V.Panel, {
                            id: k,
                            "aria-label": x.intl.string(O),
                            className: z.Qs,
                            children: (0, n.jsx)(v.Gt, { className: z.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function F(e) {
    let { initialCategory: t, ...l } = e;
    return s.useConfig({ location: a.A.USER_PROFILE_APPLICATION_WIDGET }).enabled
        ? (0, n.jsx)(_, { initialCategory: t, ...l })
        : (0, n.jsx)(p, { ...l });
}
