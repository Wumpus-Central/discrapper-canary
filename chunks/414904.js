l.d(t, { default: () => H });
var i = l(477900),
    n = l(582128),
    a = l(540185),
    r = l(855986),
    s = l(554146),
    d = l(834730),
    c = l(224640),
    o = l(20742),
    u = l(761508),
    h = l(805251),
    m = l(516521),
    g = l(192308),
    f = l(939249),
    p = l(152367),
    x = l(646514),
    j = l(526767),
    A = l(191850),
    b = l(792996),
    y = l(491340);
function N(e) {
    let { onOpen: t } = e,
        a = (0, j.r)("ConjureCustomWidgetAddOption"),
        r = n.useCallback(() => {
            (t?.(),
                (0, g.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e(916758),
                            l.e(356664),
                            l.e(741111),
                            l.e(386594),
                            l.e(763096),
                            l.e(967874),
                            l.e(202622),
                            l.e(736621),
                            l.e(117928),
                            l.e(426126),
                        ]).then(l.bind(l, 457565));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return a
        ? (0, i.jsxs)(f.D, {
              className: y.u,
              onClick: r,
              "aria-label": b.intl.string(A.default.yI85oV),
              children: [
                  (0, i.jsx)(p.MagicWandIcon, { size: "md", color: x.A.colors.ICON_SUBTLE }),
                  (0, i.jsx)(d.E, {
                      variant: "body-md/medium",
                      color: "text-strong",
                      children: b.intl.string(A.default["5WHmVU"]),
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
    I = l(116281),
    k = l(503698),
    U = l.n(k),
    C = l(683438),
    G = l(140735),
    R = l(661439),
    W = l(429913),
    O = l(90165),
    D = l(297520),
    M = l(976527);
function _(e) {
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
    let g = (0, W.A)(t.map((e) => e.applicationId)),
        f = (0, r.yK)([O.A], () =>
            g.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? O.A.getLastPlayedDateTime(t) : null;
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
        className: M.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(C.I, {
                            query: u,
                            onChange: h,
                            onClear: () => h(""),
                            placeholder: b.intl.string(b.t.fBRUk1),
                            "aria-label": b.intl.string(b.t.fBRUk1),
                        }),
                        (0, i.jsx)(G.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: b.intl.format(b.t["r/EUap"], { count: x.length }),
                        }),
                    ],
                }),
            x.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": b.intl.string(b.t.mW75GT),
                      className: U()(M.Vg, { [M.i0]: l }),
                      children: x.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(D.A, {
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
                      className: M.wV,
                      children: (0, i.jsx)(d.E, {
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: b.intl.string(b.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var B = l(49999),
    L = l(901366);
function V(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: L.HY,
        children: (0, i.jsx)(d.E, { variant: "body-md/medium", color: "text-subtle", children: t }),
    });
}
function q(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: a } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": b.intl.string(b.t["+EIBSA"]),
        className: L.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(D.A, {
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
function H(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: d, highlightedApplicationIds: g, initialCategory: f, ...p } = e;
    n.useEffect(
        () => () => {
            (0, E.Dr)(s.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: B.i.AUTO_DISMISS });
        },
        [],
    );
    let x = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        j = (function () {
            let e = (0, I.A)(),
                [t, l] = n.useState(e);
            return (e.length > t.length && l(e), n.useMemo(() => t, [t, void 0]));
        })(),
        { applicationWidgets: A, interestsWidgets: y } = n.useMemo(
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
        k = y.length > 0,
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
            })({ initialCategory: f, hasInterests: k, hasGameStats: N, highlightedApplicationIds: g }),
        ),
        [G, R] = n.useState(!1),
        W = n.useCallback(() => {
            (R(!0), l());
        }, [l]);
    if (null == x) return null;
    let O = b.intl.string(b.t["grUgR+"]),
        D = (function (e) {
            switch (e) {
                case "interests":
                    return b.t.NpchGq;
                case "gameStats":
                    return b.t.EKR8Ps;
                case "createYourOwn":
                    return b.t.eGAirq;
                default:
                    (0, v.xb)(e);
            }
        })(U),
        M = (g?.length ?? 0) > 0;
    return (
        (t =
            N || k
                ? "gameStats" === U
                    ? N
                        ? (0, i.jsx)("div", {
                              className: L.lU,
                              children: (0, i.jsx)(_, {
                                  applicationWidgets: A,
                                  dense: A.length >= 20,
                                  handleAddWidget: W,
                                  isSubmitting: G,
                                  trackUserProfileEditAction: d,
                                  highlightedApplicationIds: g,
                              }),
                          })
                        : (0, i.jsx)(V, { children: b.intl.format(b.t.mcdIFp, { tabName: b.intl.string(D) }) })
                    : k
                      ? (0, i.jsx)("div", {
                            className: L.lU,
                            children: (0, i.jsx)(q, {
                                widgets: y,
                                onAddWidget: W,
                                isSubmitting: G,
                                trackUserProfileEditAction: d,
                            }),
                        })
                      : (0, i.jsx)(V, { children: b.intl.format(b.t.mcdIFp, { tabName: b.intl.string(D) }) })
                : (0, i.jsx)(V, { children: b.intl.string(b.t["1nkDOs"]) })),
        (0, i.jsxs)(c.d, {
            size: "lg",
            onClose: l,
            "aria-label": O,
            ...p,
            children: [
                (0, i.jsx)(o.rQ, { title: O }),
                (0, i.jsxs)("div", {
                    className: L.rf,
                    children: [
                        (0, i.jsxs)(u.V, {
                            className: L.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: U,
                            onItemSelect: (e) => {
                                null != e && C(e);
                            },
                            "aria-label": b.intl.string(b.t.bKOzux),
                            children: [
                                (0, i.jsxs)(u.V.Item, {
                                    className: L.pc,
                                    id: "interests",
                                    "aria-label": b.intl.string(b.t.NpchGq),
                                    children: [
                                        b.intl.string(b.t.NpchGq),
                                        (0, P.t0)() && null != y.find((e) => e.type === a.x.PERSONAL)
                                            ? (0, i.jsx)(h.E, { type: "new", variant: "primary" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(u.V.Item, {
                                    className: L.pc,
                                    id: "gameStats",
                                    "aria-label": b.intl.string(b.t.EKR8Ps),
                                    children: [
                                        b.intl.string(b.t.EKR8Ps),
                                        M && (0, i.jsx)(h.E, { type: "new", variant: "primary" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.V.Panel, {
                            id: U,
                            "aria-label": b.intl.string(D),
                            className: L.Qs,
                            children: (0, i.jsx)(m.Gt, { className: L.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
