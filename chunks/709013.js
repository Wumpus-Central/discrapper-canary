(l.d(t, { default: () => H }), l(321073));
var i = l(477900),
    n = l(582128),
    s = l(540185),
    a = l(17928),
    r = l(554146),
    d = l(834730),
    c = l(224640),
    u = l(20742),
    o = l(761508),
    g = l(508770),
    h = l(689175),
    m = l(826673),
    x = l(192308),
    p = l(939249),
    f = l(152367),
    j = l(661531),
    A = l(71393),
    b = l(683180),
    y = l(50617),
    N = l(375708),
    E = l(201799);
function S(e) {
    let { onOpen: t } = e,
        s = (0, a.bG)([A.A], () => (0, b.RZ)(A.A.getGuildsArray(), "VibegrationsCustomWidgetAddOption").length > 0, []),
        r = n.useCallback(() => {
            (t?.(),
                (0, x.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("142753"),
                            l.e("268582"),
                            l.e("571586"),
                            l.e("215347"),
                        ]).then(l.bind(l, 591633));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return s
        ? (0, i.jsxs)(p.D, {
              className: E.u,
              onClick: r,
              "aria-label": N.intl.string(y.default["27bu14"]),
              children: [
                  (0, i.jsx)(f.D, { size: "md", color: j.A.colors.ICON_SUBTLE }),
                  (0, i.jsx)(d.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: N.intl.string(y.default["4OR+L+"]),
                  }),
              ],
          })
        : null;
}
var P = l(287809),
    v = l(403362),
    k = l(633075),
    I = l(210598),
    U = l(503698),
    C = l.n(U),
    w = l(683438),
    G = l(140735),
    R = l(661439),
    O = l(429913),
    L = l(90165),
    W = l(788259),
    D = l(976527);
function _(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: s,
            isSubmitting: r,
            trackUserProfileEditAction: c,
            highlightedApplicationIds: u,
        } = e,
        [o, g] = n.useState(""),
        [h] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, R.X)();
    }, []);
    let m = (0, O.A)(t.map((e) => e.applicationId)),
        x = (0, a.yK)([L.A], () =>
            m.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? L.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        p = n.useMemo(() => {
            let e = new Set(u ?? []),
                l = h - 7776e6;
            return t
                .map((t, i) => {
                    let n = x[i] ?? null;
                    return {
                        widget: t,
                        searchName: (m[i]?.name ?? "").toLowerCase(),
                        isHighlighted: e.has(t.applicationId),
                        recentlyPlayedAt: null != n && n > l ? n : null,
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
        }, [t, m, u, x, h]),
        f = n.useMemo(() => {
            let e = o.trim().toLowerCase();
            return "" === e
                ? p
                : p.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [p, o]);
    return (0, i.jsxs)("div", {
        className: D.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(w.I, {
                            query: o,
                            onChange: g,
                            onClear: () => g(""),
                            placeholder: N.intl.string(N.t.fBRUk1),
                            "aria-label": N.intl.string(N.t.fBRUk1),
                        }),
                        (0, i.jsx)(G.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: N.intl.format(N.t["r/EUap"], { count: f.length }),
                        }),
                    ],
                }),
            f.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": N.intl.string(N.t.mW75GT),
                      className: C()(D.Vg, { [D.i0]: l }),
                      children: f.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(W.A, {
                                      widget: t,
                                      onAddWidget: s,
                                      loading: r,
                                      size: l ? "small" : "default",
                                      trackUserProfileEditAction: c,
                                      isHighlighted: n,
                                      hideApplicationWidgetStatus: l,
                                  }),
                              },
                              t.getUniqueKey(),
                          );
                      }),
                  })
                : (0, i.jsx)("div", {
                      className: D.wV,
                      children: (0, i.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: N.intl.string(N.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var M = l(96173),
    q = l(49999),
    K = l(901366);
function V(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: K.HY,
        children: (0, i.jsx)(d.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function B(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: s } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": N.intl.string(N.t["+EIBSA"]),
        className: K.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(W.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: n,
                            trackUserProfileEditAction: s,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, i.jsx)("li", { children: (0, i.jsx)(S, { onOpen: l }) }),
        ],
    });
}
function H(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: d, highlightedApplicationIds: x, initialCategory: p, ...f } = e;
    n.useEffect(
        () => () => {
            (0, m.Dr)(r.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: q.i.AUTO_DISMISS });
        },
        [],
    );
    let j = (0, a.bG)([P.default], () => P.default.getCurrentUser()),
        A = (function () {
            let e = (0, M.A)(),
                [t, l] = n.useState(e);
            return (
                n.useEffect(() => {
                    e.length > t.length && l(e);
                }, [e, t]),
                n.useMemo(() => t, [t, void 0])
            );
        })(),
        { applicationWidgets: b, collectionWidgets: y } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof k.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(A),
            [A],
        ),
        E = b.length > 0,
        S = y.length > 0,
        [U, C] = n.useState(() =>
            (function (e) {
                let { initialCategory: t, hasInterests: l, hasGameStats: i, highlightedApplicationIds: n } = e;
                return (n?.length ?? 0) > 0
                    ? "gameStats"
                    : null != t
                      ? t
                      : l
                        ? "interests"
                        : i
                          ? "gameStats"
                          : "interests";
            })({ initialCategory: p, hasInterests: S, hasGameStats: E, highlightedApplicationIds: x }),
        ),
        [w, G] = n.useState(!1),
        R = n.useCallback(() => {
            (G(!0), l());
        }, [l]);
    if (null == j) return null;
    let O = N.intl.string(N.t["grUgR+"]),
        L = (function (e) {
            switch (e) {
                case "interests":
                    return N.t.NpchGq;
                case "gameStats":
                    return N.t.EKR8Ps;
                case "createYourOwn":
                    return N.t.eGAirq;
                default:
                    (0, v.xb)(e);
            }
        })(U),
        W = (x?.length ?? 0) > 0;
    return (
        (t =
            E || S
                ? "gameStats" === U
                    ? E
                        ? (0, i.jsx)("div", {
                              className: K.lU,
                              children: (0, i.jsx)(_, {
                                  applicationWidgets: b,
                                  dense: b.length >= 20,
                                  handleAddWidget: R,
                                  isSubmitting: w,
                                  trackUserProfileEditAction: d,
                                  highlightedApplicationIds: x,
                              }),
                          })
                        : (0, i.jsx)(V, { children: N.intl.format(N.t.mcdIFp, { tabName: N.intl.string(L) }) })
                    : S
                      ? (0, i.jsx)("div", {
                            className: K.lU,
                            children: (0, i.jsx)(B, {
                                widgets: y,
                                onAddWidget: R,
                                isSubmitting: w,
                                trackUserProfileEditAction: d,
                            }),
                        })
                      : (0, i.jsx)(V, { children: N.intl.format(N.t.mcdIFp, { tabName: N.intl.string(L) }) })
                : (0, i.jsx)(V, { children: N.intl.string(N.t["1nkDOs"]) })),
        (0, i.jsxs)(c.d, {
            size: "lg",
            onClose: l,
            "aria-label": O,
            ...f,
            children: [
                (0, i.jsx)(u.rQ, { title: O }),
                (0, i.jsxs)("div", {
                    className: K.rf,
                    children: [
                        (0, i.jsxs)(o.V, {
                            className: K.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: U,
                            onItemSelect: (e) => {
                                null != e && C(e);
                            },
                            "aria-label": N.intl.string(N.t.bKOzux),
                            children: [
                                (0, i.jsxs)(o.V.Item, {
                                    className: K.pc,
                                    id: "interests",
                                    "aria-label": N.intl.string(N.t.NpchGq),
                                    children: [
                                        N.intl.string(N.t.NpchGq),
                                        (0, I.t0)() && null != y.find((e) => e.type === s.x.PERSONAL)
                                            ? (0, i.jsx)(g.E, { type: "new", variant: "brand" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(o.V.Item, {
                                    className: K.pc,
                                    id: "gameStats",
                                    "aria-label": N.intl.string(N.t.EKR8Ps),
                                    children: [
                                        N.intl.string(N.t.EKR8Ps),
                                        W && (0, i.jsx)(g.E, { type: "new", variant: "brand" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.V.Panel, {
                            id: U,
                            "aria-label": N.intl.string(L),
                            className: K.Qs,
                            children: (0, i.jsx)(h.Gt, { className: K.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
