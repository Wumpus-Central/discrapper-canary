l.d(t, { default: () => T });
var i = l(477900),
    n = l(582128),
    r = l(540185),
    a = l(855986),
    s = l(554146),
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
        a = n.useCallback(() => {
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
    return r
        ? (0, i.jsxs)(f.D, {
              className: y.u,
              onClick: a,
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
    E = l(107559),
    S = l(826673),
    U = l(71393),
    P = l(287809),
    w = l(403362);
l(321073);
var I = l(633075),
    k = l(210598),
    C = l(116281),
    G = l(503698),
    O = l.n(G),
    R = l(683438),
    L = l(140735),
    W = l(661439),
    H = l(429913),
    D = l(90165),
    M = l(297520),
    _ = l(976527);
function q(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: r,
            isSubmitting: s,
            trackUserProfileEditAction: c,
            highlightedApplicationIds: o,
        } = e,
        [u, m] = n.useState(""),
        [h] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, W.X)();
    }, []);
    let g = (0, H.A)(t.map((e) => e.applicationId)),
        f = (0, a.yK)([D.A], () =>
            g.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? D.A.getLastPlayedDateTime(t) : null;
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
        className: _.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(R.I, {
                            query: u,
                            onChange: m,
                            onClear: () => m(""),
                            placeholder: b.intl.string(b.t.fBRUk1),
                            "aria-label": b.intl.string(b.t.fBRUk1),
                        }),
                        (0, i.jsx)(L.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: b.intl.format(b.t["r/EUap"], { count: x.length }),
                        }),
                    ],
                }),
            x.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": b.intl.string(b.t.mW75GT),
                      className: O()(_.Vg, { [_.i0]: l }),
                      children: x.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(M.A, {
                                      widget: t,
                                      onAddWidget: r,
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
                      className: _.wV,
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
    K = l(901366);
function V(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: K.HY,
        children: (0, i.jsx)(d.E, { variant: "body-md/medium", color: "text-subtle", children: t }),
    });
}
function Y(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: r } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": b.intl.string(b.t["+EIBSA"]),
        className: K.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(M.A, {
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
function F(e) {
    let { offers: t, onClose: l, trackUserProfileEditAction: n } = e,
        r = (0, a.cf)(
            [U.A],
            () =>
                Object.fromEntries(
                    t.map((e) => {
                        let { guildId: t } = e;
                        return [t, U.A.getGuild(t)?.name ?? ""];
                    }),
                ),
            [t],
        );
    return (0, i.jsx)("div", {
        className: K.Gm,
        children: t.map((e) => {
            let { guildId: t, widgets: a } = e;
            return (0, i.jsxs)(
                "section",
                {
                    className: K.Gm,
                    children: [
                        (0, i.jsx)(d.E, { variant: "body-sm/semibold", color: "text-subtle", children: r[t] }),
                        (0, i.jsx)("ul", {
                            "aria-label": r[t],
                            className: K.Gm,
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    "li",
                                    {
                                        children: (0, i.jsx)(M.A, {
                                            widget: e,
                                            trackUserProfileEditAction: n,
                                            onSelect: () => {
                                                (l(), (0, E.A)(e.applicationId));
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
function T(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: d, highlightedApplicationIds: g, initialCategory: f, ...p } = e;
    n.useEffect(
        () => () => {
            (0, S.Dr)(s.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: B.i.AUTO_DISMISS });
        },
        [],
    );
    let x = (0, a.bG)([P.default], () => P.default.getCurrentUser()),
        j = (function () {
            let e = (0, C.A)(),
                [t, l] = n.useState(e);
            return (e.length > t.length && l(e), n.useMemo(() => t, [t, void 0]));
        })(),
        { applicationWidgets: y, interestsWidgets: N } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof I.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, interestsWidgets: l };
                })(j),
            [j],
        ),
        E = (0, v.A)(),
        U = y.length > 0,
        G = N.length > 0,
        O = E.length > 0,
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
                      hasGameStats: U,
                      hasServerWidgets: O,
                      highlightedApplicationIds: g,
                  }),
        [H, D] = n.useState(!1),
        M = n.useCallback(() => {
            (D(!0), l());
        }, [l]);
    if (null == x) return null;
    let _ = b.intl.string(b.t["grUgR+"]),
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
                    (0, w.xb)(e);
            }
        })(W),
        z = (g?.length ?? 0) > 0;
    return (
        (t =
            U || G || O
                ? "fromYourServers" === W
                    ? O
                        ? (0, i.jsx)("div", {
                              className: K.lU,
                              children: (0, i.jsx)(F, { offers: E, onClose: l, trackUserProfileEditAction: d }),
                          })
                        : (0, i.jsx)(V, { children: b.intl.format(b.t.mcdIFp, { tabName: b.intl.string(T) }) })
                    : "gameStats" === W
                      ? U
                          ? (0, i.jsx)("div", {
                                className: K.lU,
                                children: (0, i.jsx)(q, {
                                    applicationWidgets: y,
                                    dense: y.length >= 20,
                                    handleAddWidget: M,
                                    isSubmitting: H,
                                    trackUserProfileEditAction: d,
                                    highlightedApplicationIds: g,
                                }),
                            })
                          : (0, i.jsx)(V, { children: b.intl.format(b.t.mcdIFp, { tabName: b.intl.string(T) }) })
                      : G
                        ? (0, i.jsx)("div", {
                              className: K.lU,
                              children: (0, i.jsx)(Y, {
                                  widgets: N,
                                  onAddWidget: M,
                                  isSubmitting: H,
                                  trackUserProfileEditAction: d,
                              }),
                          })
                        : (0, i.jsx)(V, { children: b.intl.format(b.t.mcdIFp, { tabName: b.intl.string(T) }) })
                : (0, i.jsx)(V, { children: b.intl.string(b.t["1nkDOs"]) })),
        (0, i.jsxs)(c.d, {
            size: "lg",
            onClose: l,
            "aria-label": _,
            ...p,
            children: [
                (0, i.jsx)(o.rQ, { title: _ }),
                (0, i.jsxs)("div", {
                    className: K.rf,
                    children: [
                        (0, i.jsxs)(u.V, {
                            className: K.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: W,
                            onItemSelect: (e) => {
                                null != e && L(e);
                            },
                            "aria-label": b.intl.string(b.t.bKOzux),
                            children: [
                                (0, i.jsxs)(u.V.Item, {
                                    className: K.pc,
                                    id: "interests",
                                    "aria-label": b.intl.string(b.t.NpchGq),
                                    children: [
                                        b.intl.string(b.t.NpchGq),
                                        (0, k.t0)() && null != N.find((e) => e.type === r.x.PERSONAL)
                                            ? (0, i.jsx)(m.E, { type: "new", variant: "primary" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(u.V.Item, {
                                    className: K.pc,
                                    id: "gameStats",
                                    "aria-label": b.intl.string(b.t.EKR8Ps),
                                    children: [
                                        b.intl.string(b.t.EKR8Ps),
                                        z && (0, i.jsx)(m.E, { type: "new", variant: "primary" }),
                                    ],
                                }),
                                O
                                    ? (0, i.jsx)(u.V.Item, {
                                          className: K.pc,
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
                            className: K.Qs,
                            children: (0, i.jsx)(h.Gt, { className: K.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
