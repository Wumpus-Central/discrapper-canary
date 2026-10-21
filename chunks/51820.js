(l.d(t, { default: () => V }), l(321073));
var i = l(477900),
    n = l(582128),
    a = l(540185),
    r = l(17928),
    s = l(554146),
    d = l(834730),
    c = l(224640),
    o = l(20742),
    u = l(761508),
    h = l(62010),
    m = l(689175),
    g = l(192308),
    f = l(939249),
    p = l(152367),
    x = l(661531),
    j = l(526767),
    A = l(248675),
    y = l(105292),
    b = l(491340);
function N(e) {
    let { onOpen: t } = e,
        a = (0, j.rH)("ConjureCustomWidgetAddOption"),
        r = n.useCallback(() => {
            (t?.(),
                (0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("356664"),
                            l.e("337341"),
                            l.e("333730"),
                            l.e("722440"),
                            l.e("736621"),
                            l.e("187836"),
                            l.e("426126"),
                        ]).then(l.bind(l, 457565));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return a
        ? (0, i.jsxs)(f.D, {
              className: b.u,
              onClick: r,
              "aria-label": y.intl.string(A.default.yI85oV),
              children: [
                  (0, i.jsx)(p.D, { size: "md", color: x.A.colors.ICON_SUBTLE }),
                  (0, i.jsx)(d.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: y.intl.string(A.default["5WHmVU"]),
                  }),
              ],
          })
        : null;
}
var E = l(826673),
    S = l(287809),
    v = l(403362),
    w = l(633075),
    P = l(210598),
    k = l(503698),
    C = l.n(k),
    I = l(683438),
    U = l(140735),
    G = l(661439),
    R = l(429913),
    D = l(90165),
    O = l(950272),
    W = l(976527);
function H(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: a,
            isSubmitting: s,
            trackUserProfileEditAction: c,
            highlightedApplicationIds: o,
        } = e,
        [u, h] = n.useState(""),
        [m] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, G.X)();
    }, []);
    let g = (0, R.A)(t.map((e) => e.applicationId)),
        f = (0, r.yK)([D.A], () =>
            g.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? D.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        p = n.useMemo(() => {
            let e = new Set(o ?? []),
                l = m - 7776e6;
            return t
                .map((t, i) => {
                    let n = f[i] ?? null;
                    return {
                        widget: t,
                        searchName: (g[i]?.name ?? "").toLowerCase(),
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
        }, [t, g, o, f, m]),
        x = n.useMemo(() => {
            let e = u.trim().toLowerCase();
            return "" === e
                ? p
                : p.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [p, u]);
    return (0, i.jsxs)("div", {
        className: W.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(I.I, {
                            query: u,
                            onChange: h,
                            onClear: () => h(""),
                            placeholder: y.intl.string(y.t.fBRUk1),
                            "aria-label": y.intl.string(y.t.fBRUk1),
                        }),
                        (0, i.jsx)(U.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: y.intl.format(y.t["r/EUap"], { count: x.length }),
                        }),
                    ],
                }),
            x.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": y.intl.string(y.t.mW75GT),
                      className: C()(W.Vg, { [W.i0]: l }),
                      children: x.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(O.A, {
                                      widget: t,
                                      onAddWidget: a,
                                      loading: s,
                                      size: l ? "small" : "default",
                                      trackUserProfileEditAction: c,
                                      isHighlighted: n,
                                  }),
                              },
                              t.getUniqueKey(),
                          );
                      }),
                  })
                : (0, i.jsx)("div", {
                      className: W.wV,
                      children: (0, i.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: y.intl.string(y.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var L = l(96173),
    _ = l(49999),
    q = l(901366);
function B(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: q.HY,
        children: (0, i.jsx)(d.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function M(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: a } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": y.intl.string(y.t["+EIBSA"]),
        className: q.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(O.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: n,
                            trackUserProfileEditAction: a,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, i.jsx)("li", { children: (0, i.jsx)(N, { onOpen: l }) }),
        ],
    });
}
function V(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: d, highlightedApplicationIds: g, initialCategory: f, ...p } = e;
    n.useEffect(
        () => () => {
            (0, E.Dr)(s.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: _.i.AUTO_DISMISS });
        },
        [],
    );
    let x = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        j = (function () {
            let e = (0, L.A)(),
                [t, l] = n.useState(e);
            return (
                n.useEffect(() => {
                    e.length > t.length && l(e);
                }, [e, t]),
                n.useMemo(() => t, [t, void 0])
            );
        })(),
        { applicationWidgets: A, collectionWidgets: b } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof w.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(j),
            [j],
        ),
        N = A.length > 0,
        k = b.length > 0,
        [C, I] = n.useState(() =>
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
            })({ initialCategory: f, hasInterests: k, hasGameStats: N, highlightedApplicationIds: g }),
        ),
        [U, G] = n.useState(!1),
        R = n.useCallback(() => {
            (G(!0), l());
        }, [l]);
    if (null == x) return null;
    let D = y.intl.string(y.t["grUgR+"]),
        O = (function (e) {
            switch (e) {
                case "interests":
                    return y.t.NpchGq;
                case "gameStats":
                    return y.t.EKR8Ps;
                case "createYourOwn":
                    return y.t.eGAirq;
                default:
                    (0, v.xb)(e);
            }
        })(C),
        W = (g?.length ?? 0) > 0;
    return (
        (t =
            N || k
                ? "gameStats" === C
                    ? N
                        ? (0, i.jsx)("div", {
                              className: q.lU,
                              children: (0, i.jsx)(H, {
                                  applicationWidgets: A,
                                  dense: A.length >= 20,
                                  handleAddWidget: R,
                                  isSubmitting: U,
                                  trackUserProfileEditAction: d,
                                  highlightedApplicationIds: g,
                              }),
                          })
                        : (0, i.jsx)(B, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(O) }) })
                    : k
                      ? (0, i.jsx)("div", {
                            className: q.lU,
                            children: (0, i.jsx)(M, {
                                widgets: b,
                                onAddWidget: R,
                                isSubmitting: U,
                                trackUserProfileEditAction: d,
                            }),
                        })
                      : (0, i.jsx)(B, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(O) }) })
                : (0, i.jsx)(B, { children: y.intl.string(y.t["1nkDOs"]) })),
        (0, i.jsxs)(c.d, {
            size: "lg",
            onClose: l,
            "aria-label": D,
            ...p,
            children: [
                (0, i.jsx)(o.rQ, { title: D }),
                (0, i.jsxs)("div", {
                    className: q.rf,
                    children: [
                        (0, i.jsxs)(u.V, {
                            className: q.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: C,
                            onItemSelect: (e) => {
                                null != e && I(e);
                            },
                            "aria-label": y.intl.string(y.t.bKOzux),
                            children: [
                                (0, i.jsxs)(u.V.Item, {
                                    className: q.pc,
                                    id: "interests",
                                    "aria-label": y.intl.string(y.t.NpchGq),
                                    children: [
                                        y.intl.string(y.t.NpchGq),
                                        (0, P.t0)() && null != b.find((e) => e.type === a.x.PERSONAL)
                                            ? (0, i.jsx)(h.E, { type: "new", variant: "primary" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(u.V.Item, {
                                    className: q.pc,
                                    id: "gameStats",
                                    "aria-label": y.intl.string(y.t.EKR8Ps),
                                    children: [
                                        y.intl.string(y.t.EKR8Ps),
                                        W && (0, i.jsx)(h.E, { type: "new", variant: "primary" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.V.Panel, {
                            id: C,
                            "aria-label": y.intl.string(O),
                            className: q.Qs,
                            children: (0, i.jsx)(m.Gt, { className: q.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
