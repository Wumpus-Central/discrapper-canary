l.d(t, { default: () => F });
var i = l(477900),
    n = l(582128),
    r = l(540185),
    s = l(855986),
    a = l(554146),
    d = l(834730),
    c = l(224640),
    o = l(20742),
    u = l(761508),
    m = l(805251),
    h = l(516521),
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
        r = (0, j.r)("ConjureCustomWidgetAddOption"),
        s = n.useCallback(() => {
            (t?.(),
                (0, g.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e(916758),
                            l.e(356664),
                            l.e(741111),
                            l.e(763096),
                            l.e(386594),
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
    return r
        ? (0, i.jsxs)(f.D, {
              className: y.u,
              onClick: s,
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
var v = l(387580),
    S = l(763314),
    E = l(826673),
    U = l(287809),
    P = l(403362);
l(321073);
var w = l(633075),
    I = l(210598),
    k = l(116281),
    C = l(503698),
    G = l.n(C),
    O = l(683438),
    R = l(140735),
    L = l(661439),
    W = l(429913),
    H = l(90165),
    D = l(297520),
    M = l(976527);
function _(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: r,
            isSubmitting: a,
            trackUserProfileEditAction: c,
            highlightedApplicationIds: o,
        } = e,
        [u, m] = n.useState(""),
        [h] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, L.X)();
    }, []);
    let g = (0, W.A)(t.map((e) => e.applicationId)),
        f = (0, s.yK)([H.A], () =>
            g.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? H.A.getLastPlayedDateTime(t) : null;
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
        className: M.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(O.I, {
                            query: u,
                            onChange: m,
                            onClear: () => m(""),
                            placeholder: b.intl.string(b.t.fBRUk1),
                            "aria-label": b.intl.string(b.t.fBRUk1),
                        }),
                        (0, i.jsx)(R.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: b.intl.format(b.t["r/EUap"], { count: x.length }),
                        }),
                    ],
                }),
            x.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": b.intl.string(b.t.mW75GT),
                      className: G()(M.Vg, { [M.i0]: l }),
                      children: x.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(D.A, {
                                      widget: t,
                                      onAddWidget: r,
                                      loading: a,
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
var q = l(49999),
    B = l(901366);
function K(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: B.HY,
        children: (0, i.jsx)(d.E, { variant: "body-md/medium", color: "text-subtle", children: t }),
    });
}
function V(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: r } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": b.intl.string(b.t["+EIBSA"]),
        className: B.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(D.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: n,
                            trackUserProfileEditAction: r,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, i.jsx)("li", { children: (0, i.jsx)(N, { onOpen: l }) }),
        ],
    });
}
function Y(e) {
    let { offers: t, onClose: l, trackUserProfileEditAction: n } = e;
    return (0, i.jsx)("div", {
        className: B.Gm,
        children: t.map((e) => {
            let { guildId: t, guildName: r, widgets: s } = e;
            return (0, i.jsxs)(
                "section",
                {
                    className: B.Gm,
                    children: [
                        (0, i.jsx)(d.E, { variant: "body-sm/semibold", color: "text-subtle", children: r }),
                        (0, i.jsx)("ul", {
                            "aria-label": r,
                            className: B.Gm,
                            children: s.map((e) =>
                                (0, i.jsx)(
                                    "li",
                                    {
                                        children: (0, i.jsx)(D.A, {
                                            widget: e,
                                            trackUserProfileEditAction: n,
                                            onSelect: () => {
                                                (l(), (0, S.A)(e.applicationId));
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
function F(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: d, highlightedApplicationIds: g, initialCategory: f, ...p } = e;
    n.useEffect(
        () => () => {
            (0, E.Dr)(a.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: q.i.AUTO_DISMISS });
        },
        [],
    );
    let x = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        j = (function () {
            let e = (0, k.A)(),
                [t, l] = n.useState(e);
            return (e.length > t.length && l(e), n.useMemo(() => t, [t, void 0]));
        })(),
        { applicationWidgets: y, interestsWidgets: N } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof w.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, interestsWidgets: l };
                })(j),
            [j],
        ),
        S = (0, v.A)(),
        C = y.length > 0,
        G = N.length > 0,
        O = S.length > 0,
        [R, L] = n.useState(null),
        W =
            null != R && ("fromYourServers" !== R || O)
                ? R
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
                      initialCategory: f,
                      hasInterests: G,
                      hasGameStats: C,
                      hasServerWidgets: O,
                      highlightedApplicationIds: g,
                  }),
        [H, D] = n.useState(!1),
        M = n.useCallback(() => {
            (D(!0), l());
        }, [l]);
    if (null == x) return null;
    let F = b.intl.string(b.t["grUgR+"]),
        T = (function (e) {
            switch (e) {
                case "interests":
                    return b.t.NpchGq;
                case "gameStats":
                    return b.t.EKR8Ps;
                case "createYourOwn":
                    return b.t.eGAirq;
                case "fromYourServers":
                    return A.default.OUrOHL;
                default:
                    (0, P.xb)(e);
            }
        })(W),
        z = (g?.length ?? 0) > 0;
    return (
        (t =
            C || G || O
                ? "fromYourServers" === W
                    ? O
                        ? (0, i.jsx)("div", {
                              className: B.lU,
                              children: (0, i.jsx)(Y, { offers: S, onClose: l, trackUserProfileEditAction: d }),
                          })
                        : (0, i.jsx)(K, { children: b.intl.format(b.t.mcdIFp, { tabName: b.intl.string(T) }) })
                    : "gameStats" === W
                      ? C
                          ? (0, i.jsx)("div", {
                                className: B.lU,
                                children: (0, i.jsx)(_, {
                                    applicationWidgets: y,
                                    dense: y.length >= 20,
                                    handleAddWidget: M,
                                    isSubmitting: H,
                                    trackUserProfileEditAction: d,
                                    highlightedApplicationIds: g,
                                }),
                            })
                          : (0, i.jsx)(K, { children: b.intl.format(b.t.mcdIFp, { tabName: b.intl.string(T) }) })
                      : G
                        ? (0, i.jsx)("div", {
                              className: B.lU,
                              children: (0, i.jsx)(V, {
                                  widgets: N,
                                  onAddWidget: M,
                                  isSubmitting: H,
                                  trackUserProfileEditAction: d,
                              }),
                          })
                        : (0, i.jsx)(K, { children: b.intl.format(b.t.mcdIFp, { tabName: b.intl.string(T) }) })
                : (0, i.jsx)(K, { children: b.intl.string(b.t["1nkDOs"]) })),
        (0, i.jsxs)(c.d, {
            size: "lg",
            onClose: l,
            "aria-label": F,
            ...p,
            children: [
                (0, i.jsx)(o.rQ, { title: F }),
                (0, i.jsxs)("div", {
                    className: B.rf,
                    children: [
                        (0, i.jsxs)(u.V, {
                            className: B.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: W,
                            onItemSelect: (e) => {
                                null != e && L(e);
                            },
                            "aria-label": b.intl.string(b.t.bKOzux),
                            children: [
                                (0, i.jsxs)(u.V.Item, {
                                    className: B.pc,
                                    id: "interests",
                                    "aria-label": b.intl.string(b.t.NpchGq),
                                    children: [
                                        b.intl.string(b.t.NpchGq),
                                        (0, I.t0)() && null != N.find((e) => e.type === r.x.PERSONAL)
                                            ? (0, i.jsx)(m.E, { type: "new", variant: "primary" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(u.V.Item, {
                                    className: B.pc,
                                    id: "gameStats",
                                    "aria-label": b.intl.string(b.t.EKR8Ps),
                                    children: [
                                        b.intl.string(b.t.EKR8Ps),
                                        z && (0, i.jsx)(m.E, { type: "new", variant: "primary" }),
                                    ],
                                }),
                                O
                                    ? (0, i.jsx)(u.V.Item, {
                                          className: B.pc,
                                          id: "fromYourServers",
                                          "aria-label": b.intl.string(A.default.OUrOHL),
                                          children: b.intl.string(A.default.OUrOHL),
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(u.V.Panel, {
                            id: W,
                            "aria-label": b.intl.string(T),
                            className: B.Qs,
                            children: (0, i.jsx)(h.Gt, { className: B.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
