l.d(t, { default: () => B });
var i = l(477900),
    n = l(582128),
    r = l(855986),
    a = l(834730),
    s = l(224640),
    d = l(20742),
    c = l(761508),
    o = l(805251),
    u = l(516521),
    m = l(192308),
    h = l(939249),
    g = l(152367),
    f = l(646514),
    p = l(526767),
    x = l(191850),
    j = l(792996),
    b = l(491340);
function A(e) {
    let { onOpen: t } = e,
        r = (0, p.r)("ConjureCustomWidgetAddOption"),
        s = n.useCallback(() => {
            (t?.(),
                (0, m.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e(916758),
                            l.e(356664),
                            l.e(741111),
                            l.e(763096),
                            l.e(386594),
                            l.e(967874),
                            l.e(736621),
                            l.e(117928),
                            l.e(426126),
                        ]).then(l.bind(l, 457565));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return r
        ? (0, i.jsxs)(h.D, {
              className: b.u,
              onClick: s,
              children: [
                  (0, i.jsx)(g.MagicWandIcon, { size: "md", color: f.A.colors.ICON_SUBTLE }),
                  (0, i.jsx)(a.E, {
                      variant: "body-md/medium",
                      color: "text-strong",
                      children: j.intl.string(x.default["5WHmVU"]),
                  }),
              ],
          })
        : null;
}
var y = l(469958),
    N = l(763314),
    v = l(287809),
    U = l(403362);
l(321073);
var S = l(633075),
    w = l(116281),
    k = l(503698),
    P = l.n(k),
    C = l(683438),
    E = l(140735),
    I = l(661439),
    G = l(429913),
    O = l(90165),
    q = l(362831),
    H = l(976527);
function K(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: s,
            isSubmitting: d,
            trackUserProfileEditAction: c,
            highlightedApplicationIds: o,
        } = e,
        [u, m] = n.useState(""),
        [h] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, I.X)();
    }, []);
    let g = (0, G.A)(t.map((e) => e.applicationId)),
        f = (0, r.yK)([O.A], () =>
            g.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? O.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        p = n.useMemo(() => {
            let e = new Set(o ?? []),
                l = h - 7776e6;
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
        }, [t, g, o, f, h]),
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
        className: H.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(C.I, {
                            query: u,
                            onChange: m,
                            onClear: () => m(""),
                            placeholder: j.intl.string(j.t.fBRUk1),
                            "aria-label": j.intl.string(j.t.fBRUk1),
                        }),
                        (0, i.jsx)(E.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: j.intl.format(j.t["r/EUap"], { count: x.length }),
                        }),
                    ],
                }),
            x.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": j.intl.string(j.t.mW75GT),
                      className: P()(H.Vg, { [H.i0]: l }),
                      children: x.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(q.A, {
                                      widget: t,
                                      onAddWidget: s,
                                      loading: d,
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
                      children: (0, i.jsx)(a.E, {
                          variant: "body-md/medium",
                          color: "text-subtle",
                          children: j.intl.string(j.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var R = l(901366);
function W(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: R.HY,
        children: (0, i.jsx)(a.E, { variant: "body-md/medium", color: "text-subtle", children: t }),
    });
}
function L(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: r } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": j.intl.string(j.t["+EIBSA"]),
        className: R.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(q.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: n,
                            trackUserProfileEditAction: r,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, i.jsx)("li", { children: (0, i.jsx)(A, { onOpen: l }) }),
        ],
    });
}
function V(e) {
    let { offers: t, onClose: l, trackUserProfileEditAction: n } = e;
    return (0, i.jsx)("div", {
        className: R.Gm,
        children: t.map((e) => {
            let { guildId: t, guildName: r, widgets: s } = e;
            return (0, i.jsxs)(
                "section",
                {
                    className: R.Gm,
                    children: [
                        (0, i.jsx)(a.E, { variant: "body-sm/semibold", color: "text-subtle", children: r }),
                        (0, i.jsx)("ul", {
                            "aria-label": r,
                            className: R.Gm,
                            children: s.map((e) =>
                                (0, i.jsx)(
                                    "li",
                                    {
                                        children: (0, i.jsx)(q.A, {
                                            widget: e,
                                            trackUserProfileEditAction: n,
                                            onSelect: () => {
                                                (l(), (0, N.A)(e.applicationId));
                                            },
                                        }),
                                    },
                                    e.getUniqueKey(),
                                ),
                            ),
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function B(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: a, highlightedApplicationIds: m, initialCategory: h, ...g } = e,
        f = (0, r.bG)([v.default], () => v.default.getCurrentUser()),
        p = (function () {
            let e = (0, w.A)(),
                [t, l] = n.useState(e),
                i = new Set(t.map((e) => e.getUniqueKey())),
                r = e.filter((e) => !i.has(e.getUniqueKey()));
            return (r.length > 0 && l([...t, ...r]), n.useMemo(() => t, [t, void 0]));
        })(),
        { applicationWidgets: b, interestsWidgets: A } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof S.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, interestsWidgets: l };
                })(p),
            [p],
        ),
        N = (0, y.A)(),
        k = b.length > 0,
        P = A.length > 0,
        C = N.length > 0,
        [E, I] = n.useState(null),
        G =
            null != E && ("fromYourServers" !== E || C)
                ? E
                : (function (e) {
                      let {
                          initialCategory: t,
                          hasInterests: l,
                          hasGameStats: i,
                          hasServerWidgets: n,
                          highlightedApplicationIds: r,
                      } = e;
                      return (r?.length ?? 0) > 0
                          ? "gameStats"
                          : null != t
                            ? t
                            : l
                              ? "interests"
                              : i
                                ? "gameStats"
                                : n
                                  ? "fromYourServers"
                                  : "interests";
                  })({
                      initialCategory: h,
                      hasInterests: P,
                      hasGameStats: k,
                      hasServerWidgets: C,
                      highlightedApplicationIds: m,
                  }),
        [O, q] = n.useState(!1),
        H = n.useCallback(() => {
            (q(!0), l());
        }, [l]);
    if (null == f) return null;
    let B = j.intl.string(j.t["grUgR+"]),
        M = (function (e) {
            switch (e) {
                case "interests":
                    return j.t.NpchGq;
                case "gameStats":
                    return j.t.EKR8Ps;
                case "createYourOwn":
                    return j.t.eGAirq;
                case "fromYourServers":
                    return x.default.OUrOHL;
                default:
                    (0, U.xb)(e);
            }
        })(G),
        Y = (m?.length ?? 0) > 0;
    return (
        (t =
            k || P || C
                ? "fromYourServers" === G
                    ? C
                        ? (0, i.jsx)("div", {
                              className: R.lU,
                              children: (0, i.jsx)(V, { offers: N, onClose: l, trackUserProfileEditAction: a }),
                          })
                        : (0, i.jsx)(W, { children: j.intl.format(j.t.mcdIFp, { tabName: j.intl.string(M) }) })
                    : "gameStats" === G
                      ? k
                          ? (0, i.jsx)("div", {
                                className: R.lU,
                                children: (0, i.jsx)(K, {
                                    applicationWidgets: b,
                                    dense: b.length >= 20,
                                    handleAddWidget: H,
                                    isSubmitting: O,
                                    trackUserProfileEditAction: a,
                                    highlightedApplicationIds: m,
                                }),
                            })
                          : (0, i.jsx)(W, { children: j.intl.format(j.t.mcdIFp, { tabName: j.intl.string(M) }) })
                      : P
                        ? (0, i.jsx)("div", {
                              className: R.lU,
                              children: (0, i.jsx)(L, {
                                  widgets: A,
                                  onAddWidget: H,
                                  isSubmitting: O,
                                  trackUserProfileEditAction: a,
                              }),
                          })
                        : (0, i.jsx)(W, { children: j.intl.format(j.t.mcdIFp, { tabName: j.intl.string(M) }) })
                : (0, i.jsx)(W, { children: j.intl.string(j.t["1nkDOs"]) })),
        (0, i.jsxs)(s.d, {
            size: "lg",
            onClose: l,
            "aria-label": B,
            ...g,
            children: [
                (0, i.jsx)(d.rQ, { title: B }),
                (0, i.jsxs)("div", {
                    className: R.rf,
                    children: [
                        (0, i.jsxs)(c.V, {
                            className: R.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: G,
                            onItemSelect: (e) => {
                                null != e && I(e);
                            },
                            "aria-label": j.intl.string(j.t.bKOzux),
                            children: [
                                (0, i.jsx)(c.V.Item, {
                                    className: R.pc,
                                    id: "interests",
                                    "aria-label": j.intl.string(j.t.NpchGq),
                                    children: j.intl.string(j.t.NpchGq),
                                }),
                                (0, i.jsxs)(c.V.Item, {
                                    className: R.pc,
                                    id: "gameStats",
                                    "aria-label": j.intl.string(j.t.EKR8Ps),
                                    children: [
                                        j.intl.string(j.t.EKR8Ps),
                                        Y && (0, i.jsx)(o.E, { type: "new", variant: "primary" }),
                                    ],
                                }),
                                C
                                    ? (0, i.jsx)(c.V.Item, {
                                          className: R.pc,
                                          id: "fromYourServers",
                                          "aria-label": j.intl.string(x.default.OUrOHL),
                                          children: j.intl.string(x.default.OUrOHL),
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(c.V.Panel, {
                            id: G,
                            "aria-label": j.intl.string(M),
                            className: R.Qs,
                            children: (0, i.jsx)(u.Gt, { className: R.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
