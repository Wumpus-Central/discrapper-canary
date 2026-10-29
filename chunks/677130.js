l.d(t, { default: () => V });
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
    p = l(939249),
    f = l(152367),
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
                            l.e("202622"),
                            l.e("916758"),
                            l.e("947802"),
                            l.e("741111"),
                            l.e("778042"),
                            l.e("623927"),
                            l.e("763096"),
                            l.e("736621"),
                            l.e("534485"),
                            l.e("992166"),
                            l.e("667034"),
                            l.e("722440"),
                            l.e("426126"),
                        ]).then(l.bind(l, 457565));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return a
        ? (0, i.jsxs)(p.D, {
              className: b.u,
              onClick: r,
              "aria-label": y.intl.string(A.default.yI85oV),
              children: [
                  (0, i.jsx)(f.D, { size: "md", color: x.A.colors.ICON_SUBTLE }),
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
    v = l(403362);
l(321073);
var w = l(633075),
    P = l(210598),
    k = l(714889),
    C = l(503698),
    I = l.n(C),
    U = l(683438),
    G = l(140735),
    R = l(661439),
    D = l(429913),
    O = l(90165),
    W = l(978806),
    H = l(976527);
function L(e) {
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
        (0, R.X)();
    }, []);
    let g = (0, D.A)(t.map((e) => e.applicationId)),
        p = (0, r.yK)([O.A], () =>
            g.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? O.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        f = n.useMemo(() => {
            let e = new Set(o ?? []),
                l = m - 7776e6;
            return t
                .map((t, i) => {
                    let n = p[i] ?? null;
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
        }, [t, g, o, p, m]),
        x = n.useMemo(() => {
            let e = u.trim().toLowerCase();
            return "" === e
                ? f
                : f.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [f, u]);
    return (0, i.jsxs)("div", {
        className: H.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(U.I, {
                            query: u,
                            onChange: h,
                            onClear: () => h(""),
                            placeholder: y.intl.string(y.t.fBRUk1),
                            "aria-label": y.intl.string(y.t.fBRUk1),
                        }),
                        (0, i.jsx)(G.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: y.intl.format(y.t["r/EUap"], { count: x.length }),
                        }),
                    ],
                }),
            x.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": y.intl.string(y.t.mW75GT),
                      className: I()(H.Vg, { [H.i0]: l }),
                      children: x.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(W.A, {
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
                      className: H.wV,
                      children: (0, i.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: y.intl.string(y.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var _ = l(49999),
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
            (0, i.jsx)("li", { children: (0, i.jsx)(N, { onOpen: l }) }),
        ],
    });
}
function V(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: d, highlightedApplicationIds: g, initialCategory: p, ...f } = e;
    n.useEffect(
        () => () => {
            (0, E.Dr)(s.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: _.i.AUTO_DISMISS });
        },
        [],
    );
    let x = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        j = (function () {
            let e = (0, k.A)(),
                [t, l] = n.useState(e);
            return (e.length > t.length && l(e), n.useMemo(() => t, [t, void 0]));
        })(),
        { applicationWidgets: A, interestsWidgets: b } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof w.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, interestsWidgets: l };
                })(j),
            [j],
        ),
        N = A.length > 0,
        C = b.length > 0,
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
            })({ initialCategory: p, hasInterests: C, hasGameStats: N, highlightedApplicationIds: g }),
        ),
        [G, R] = n.useState(!1),
        D = n.useCallback(() => {
            (R(!0), l());
        }, [l]);
    if (null == x) return null;
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
                    (0, v.xb)(e);
            }
        })(I),
        H = (g?.length ?? 0) > 0;
    return (
        (t =
            N || C
                ? "gameStats" === I
                    ? N
                        ? (0, i.jsx)("div", {
                              className: q.lU,
                              children: (0, i.jsx)(L, {
                                  applicationWidgets: A,
                                  dense: A.length >= 20,
                                  handleAddWidget: D,
                                  isSubmitting: G,
                                  trackUserProfileEditAction: d,
                                  highlightedApplicationIds: g,
                              }),
                          })
                        : (0, i.jsx)(B, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(W) }) })
                    : C
                      ? (0, i.jsx)("div", {
                            className: q.lU,
                            children: (0, i.jsx)(M, {
                                widgets: b,
                                onAddWidget: D,
                                isSubmitting: G,
                                trackUserProfileEditAction: d,
                            }),
                        })
                      : (0, i.jsx)(B, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(W) }) })
                : (0, i.jsx)(B, { children: y.intl.string(y.t["1nkDOs"]) })),
        (0, i.jsxs)(c.d, {
            size: "lg",
            onClose: l,
            "aria-label": O,
            ...f,
            children: [
                (0, i.jsx)(o.rQ, { title: O }),
                (0, i.jsxs)("div", {
                    className: q.rf,
                    children: [
                        (0, i.jsxs)(u.V, {
                            className: q.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: I,
                            onItemSelect: (e) => {
                                null != e && U(e);
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
                                        H && (0, i.jsx)(h.E, { type: "new", variant: "primary" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.V.Panel, {
                            id: I,
                            "aria-label": y.intl.string(W),
                            className: q.Qs,
                            children: (0, i.jsx)(m.Gt, { className: q.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
