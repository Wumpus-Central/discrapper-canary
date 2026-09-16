(l.d(t, { default: () => H }), l(321073));
var i = l(477900),
    n = l(582128),
    a = l(540185),
    s = l(224640),
    r = l(20742),
    d = l(17928),
    c = l(554146),
    u = l(834730),
    o = l(761508),
    g = l(508770),
    h = l(689175),
    m = l(826673),
    x = l(192308),
    p = l(939249),
    f = l(152367),
    j = l(71393),
    A = l(683180),
    b = l(50617),
    y = l(375708),
    N = l(201799);
function E(e) {
    let { onOpen: t } = e,
        a = (0, d.bG)([j.A], () => (0, A.RZ)(j.A.getGuildsArray(), "VibegrationsCustomWidgetAddOption").length > 0, []),
        s = n.useCallback(() => {
            (t?.(),
                (0, x.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("531198"),
                            l.e("446427"),
                            l.e("571586"),
                            l.e("763612"),
                            l.e("553465"),
                            l.e("634230"),
                            l.e("686125"),
                        ]).then(l.bind(l, 938872));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return a
        ? (0, i.jsxs)(p.D, {
              className: N.u,
              onClick: s,
              "aria-label": y.intl.string(b.default["27bu14"]),
              children: [
                  (0, i.jsx)(f.D, { size: "custom", width: 24, height: 24, color: "var(--icon-secondary)" }),
                  (0, i.jsx)(u.E, {
                      variant: "text-sm/semibold",
                      color: "text-default",
                      children: y.intl.string(b.default["4OR+L+"]),
                  }),
              ],
          })
        : null;
}
var S = l(287809),
    P = l(403362),
    v = l(633075),
    k = l(210598),
    w = l(503698),
    I = l.n(w),
    U = l(683438),
    C = l(140735),
    G = l(661439),
    R = l(429913),
    O = l(90165),
    W = l(788259),
    D = l(976527);
function L(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: a,
            isSubmitting: s,
            trackUserProfileEditAction: r,
            highlightedApplicationIds: c,
        } = e,
        [o, g] = n.useState(""),
        [h] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, G.X)();
    }, []);
    let m = (0, R.A)(t.map((e) => e.applicationId)),
        x = (0, d.yK)([O.A], () =>
            m.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? O.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        p = n.useMemo(() => {
            let e = new Set(c ?? []),
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
        }, [t, m, c, x, h]),
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
                        (0, i.jsx)(U.I, {
                            query: o,
                            onChange: g,
                            onClear: () => g(""),
                            placeholder: y.intl.string(y.t.fBRUk1),
                            "aria-label": y.intl.string(y.t.fBRUk1),
                        }),
                        (0, i.jsx)(C.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: y.intl.format(y.t["r/EUap"], { count: f.length }),
                        }),
                    ],
                }),
            f.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": y.intl.string(y.t.mW75GT),
                      className: I()(D.Vg, { [D.i0]: l }),
                      children: f.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(W.A, {
                                      widget: t,
                                      onAddWidget: a,
                                      loading: s,
                                      size: l ? "small" : "default",
                                      trackUserProfileEditAction: r,
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
                      children: (0, i.jsx)(u.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: y.intl.string(y.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var M = l(96173),
    _ = l(49999),
    q = l(901366);
function K(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: q.HY,
        children: (0, i.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function V(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: a } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": y.intl.string(y.t["+EIBSA"]),
        className: q.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(W.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: n,
                            trackUserProfileEditAction: a,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, i.jsx)("li", { children: (0, i.jsx)(E, { onOpen: l }) }),
        ],
    });
}
function H(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: u, highlightedApplicationIds: x, initialCategory: p, ...f } = e;
    n.useEffect(
        () => () => {
            (0, m.Dr)(c.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: _.i.AUTO_DISMISS });
        },
        [],
    );
    let j = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
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
        { applicationWidgets: b, collectionWidgets: N } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof v.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(A),
            [A],
        ),
        E = b.length > 0,
        w = N.length > 0,
        [I, U] = n.useState(() =>
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
            })({ initialCategory: p, hasInterests: w, hasGameStats: E, highlightedApplicationIds: x }),
        ),
        [C, G] = n.useState(!1),
        R = n.useCallback(() => {
            (G(!0), l());
        }, [l]);
    if (null == j) return null;
    let O = y.intl.string(y.t["grUgR+"]),
        W = (function (e) {
            switch (e) {
                case "interests":
                    return y.t.NpchGq;
                case "gameStats":
                    return y.t.EKR8Ps;
                case "createYourOwn":
                    return y.t.eGAirq;
                default:
                    (0, P.xb)(e);
            }
        })(I),
        D = (x?.length ?? 0) > 0;
    return (
        (t =
            E || w
                ? "gameStats" === I
                    ? E
                        ? (0, i.jsx)("div", {
                              className: q.lU,
                              children: (0, i.jsx)(L, {
                                  applicationWidgets: b,
                                  dense: b.length >= 20,
                                  handleAddWidget: R,
                                  isSubmitting: C,
                                  trackUserProfileEditAction: u,
                                  highlightedApplicationIds: x,
                              }),
                          })
                        : (0, i.jsx)(K, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(W) }) })
                    : w
                      ? (0, i.jsx)("div", {
                            className: q.lU,
                            children: (0, i.jsx)(V, {
                                widgets: N,
                                onAddWidget: R,
                                isSubmitting: C,
                                trackUserProfileEditAction: u,
                            }),
                        })
                      : (0, i.jsx)(K, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(W) }) })
                : (0, i.jsx)(K, { children: y.intl.string(y.t["1nkDOs"]) })),
        (0, i.jsxs)(s.d, {
            size: "lg",
            onClose: l,
            "aria-label": O,
            ...f,
            children: [
                (0, i.jsx)(r.rQ, { title: O }),
                (0, i.jsxs)("div", {
                    className: q.rf,
                    children: [
                        (0, i.jsxs)(o.V, {
                            className: q.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: I,
                            onItemSelect: (e) => {
                                null != e && U(e);
                            },
                            "aria-label": y.intl.string(y.t.bKOzux),
                            children: [
                                (0, i.jsxs)(o.V.Item, {
                                    className: q.pc,
                                    id: "interests",
                                    "aria-label": y.intl.string(y.t.NpchGq),
                                    children: [
                                        y.intl.string(y.t.NpchGq),
                                        (0, k.t0)() && null != N.find((e) => e.type === a.x.PERSONAL)
                                            ? (0, i.jsx)(g.E, { type: "new", variant: "brand" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(o.V.Item, {
                                    className: q.pc,
                                    id: "gameStats",
                                    "aria-label": y.intl.string(y.t.EKR8Ps),
                                    children: [
                                        y.intl.string(y.t.EKR8Ps),
                                        D && (0, i.jsx)(g.E, { type: "new", variant: "brand" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.V.Panel, {
                            id: I,
                            "aria-label": y.intl.string(W),
                            className: q.Qs,
                            children: (0, i.jsx)(h.Gt, { className: q.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
