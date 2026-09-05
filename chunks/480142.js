l.d(t, { default: () => Y });
var i = l(477900),
    n = l(582128),
    a = l(554146),
    s = l(793574),
    r = l(826673);
let d = (0, l(945810).mj)({
    name: "2026-07-gdop-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var c = l(189213),
    u = l(17928),
    o = l(834730),
    g = l(287809),
    h = l(633075),
    m = l(788259),
    f = l(96173);
function x(e) {
    let t = (0, f.A)(),
        [l, i] = n.useState(t);
    return (
        n.useEffect(() => {
            t.length > l.length && i(t);
        }, [t, l]),
        n.useMemo(() => {
            if (null == e || 0 === e.length) return l;
            function t(t) {
                return null != e && t instanceof h.R && e.includes(t.applicationId);
            }
            return [...l.filter(t), ...l.filter((e) => !t(e))];
        }, [l, e])
    );
}
var p = l(375708),
    j = l(455007);
function A(e) {
    let { onClose: t, trackUserProfileEditAction: l, highlightedApplicationIds: a, ...s } = e,
        r = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        d = x(a),
        f = d.length > 0,
        [A, b] = n.useState(!1),
        y = { onClick: () => t(), text: p.intl.string(p.t.cpT0Cq) },
        E = n.useCallback(() => {
            b(!0), t();
        }, [t]);
    return null == r
        ? null
        : (0, i.jsx)(c.Modal, {
              title: p.intl.string(p.t["grUgR+"]),
              actions: f ? [] : [y],
              size: f ? "md" : "sm",
              onClose: t,
              ...s,
              children: f
                  ? (0, i.jsx)("ul", {
                        "aria-label": p.intl.string(p.t["+EIBSA"]),
                        className: j.f,
                        children: d.map((e) =>
                            (0, i.jsx)(
                                m.A,
                                {
                                    widget: e,
                                    onAddWidget: E,
                                    loading: A,
                                    trackUserProfileEditAction: l,
                                    isHighlighted: null != a && e instanceof h.R && a.includes(e.applicationId),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    })
                  : (0, i.jsx)(o.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: p.intl.string(p.t["1nkDOs"]),
                    }),
          });
}
l(321073);
var b = l(540185),
    y = l(224640),
    E = l(20742),
    N = l(761508),
    v = l(508770),
    S = l(689175),
    C = l(192308),
    P = l(939249),
    I = l(152367),
    k = l(71393),
    U = l(683180),
    R = l(759967),
    w = l(201799);
function G(e) {
    let { onOpen: t } = e,
        a = (0, u.bG)([k.A], () => (0, U.RZ)(k.A.getGuildsArray(), "VibegrationsCustomWidgetAddOption").length > 0, []),
        s = n.useCallback(() => {
            t?.(),
                (0, C.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("531198"),
                            l.e("446427"),
                            l.e("882736"),
                            l.e("763612"),
                            l.e("553465"),
                            l.e("634230"),
                            l.e("737861"),
                        ]).then(l.bind(l, 938872));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    return a
        ? (0, i.jsxs)(P.D, {
              className: w.u,
              onClick: s,
              "aria-label": p.intl.string(R.default["27bu14"]),
              children: [
                  (0, i.jsx)(I.D, { size: "custom", width: 24, height: 24, color: "var(--icon-secondary)" }),
                  (0, i.jsx)(o.E, {
                      variant: "text-sm/semibold",
                      color: "text-default",
                      children: p.intl.string(R.default["4OR+L+"]),
                  }),
              ],
          })
        : null;
}
var O = l(403362),
    W = l(210598),
    D = l(503698),
    L = l.n(D),
    _ = l(683438),
    q = l(140735),
    M = l(661439),
    K = l(429913),
    H = l(90165),
    T = l(976527);
function V(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: a,
            isSubmitting: s,
            trackUserProfileEditAction: r,
            highlightedApplicationIds: d,
        } = e,
        [c, g] = n.useState(""),
        [h] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, M.X)();
    }, []);
    let f = (0, K.A)(t.map((e) => e.applicationId)),
        x = (0, u.yK)([H.A], () =>
            f.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? H.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        j = n.useMemo(() => {
            let e = new Set(d ?? []),
                l = h - 7776e6;
            return t
                .map((t, i) => {
                    let n = x[i] ?? null;
                    return {
                        widget: t,
                        searchName: (f[i]?.name ?? "").toLowerCase(),
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
        }, [t, f, d, x, h]),
        A = n.useMemo(() => {
            let e = c.trim().toLowerCase();
            return "" === e
                ? j
                : j.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [j, c]);
    return (0, i.jsxs)("div", {
        className: T.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(_.I, {
                            query: c,
                            onChange: g,
                            onClear: () => g(""),
                            placeholder: p.intl.string(p.t.fBRUk1),
                            "aria-label": p.intl.string(p.t.fBRUk1),
                        }),
                        (0, i.jsx)(q.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: p.intl.format(p.t["r/EUap"], { count: A.length }),
                        }),
                    ],
                }),
            A.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": p.intl.string(p.t.mW75GT),
                      className: L()(T.Vg, { [T.i0]: l }),
                      children: A.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(m.A, {
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
                      className: T.wV,
                      children: (0, i.jsx)(o.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: p.intl.string(p.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var z = l(488634);
function B(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: z.HY,
        children: (0, i.jsx)(o.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function F(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: a } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": p.intl.string(p.t["+EIBSA"]),
        className: z.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(m.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: n,
                            trackUserProfileEditAction: a,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, i.jsx)("li", { children: (0, i.jsx)(G, { onOpen: l }) }),
        ],
    });
}
function Q(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: a, highlightedApplicationIds: s, initialCategory: r, ...d } = e,
        c = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        o = x(),
        { applicationWidgets: m, collectionWidgets: f } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof h.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(o),
            [o],
        ),
        j = m.length > 0,
        A = f.length > 0,
        [C, P] = n.useState(() =>
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
            })({ initialCategory: r, hasInterests: A, hasGameStats: j, highlightedApplicationIds: s }),
        ),
        [I, k] = n.useState(!1),
        U = n.useCallback(() => {
            k(!0), l();
        }, [l]);
    if (null == c) return null;
    let R = p.intl.string(p.t["grUgR+"]),
        w = (function (e) {
            switch (e) {
                case "interests":
                    return p.t.NpchGq;
                case "gameStats":
                    return p.t.EKR8Ps;
                case "createYourOwn":
                    return p.t.eGAirq;
                default:
                    (0, O.xb)(e);
            }
        })(C),
        G = (s?.length ?? 0) > 0;
    return (
        (t =
            j || A
                ? "gameStats" === C
                    ? j
                        ? (0, i.jsx)("div", {
                              className: z.lU,
                              children: (0, i.jsx)(V, {
                                  applicationWidgets: m,
                                  dense: m.length >= 20,
                                  handleAddWidget: U,
                                  isSubmitting: I,
                                  trackUserProfileEditAction: a,
                                  highlightedApplicationIds: s,
                              }),
                          })
                        : (0, i.jsx)(B, { children: p.intl.format(p.t.mcdIFp, { tabName: p.intl.string(w) }) })
                    : A
                      ? (0, i.jsx)("div", {
                            className: z.lU,
                            children: (0, i.jsx)(F, {
                                widgets: f,
                                onAddWidget: U,
                                isSubmitting: I,
                                trackUserProfileEditAction: a,
                            }),
                        })
                      : (0, i.jsx)(B, { children: p.intl.format(p.t.mcdIFp, { tabName: p.intl.string(w) }) })
                : (0, i.jsx)(B, { children: p.intl.string(p.t["1nkDOs"]) })),
        (0, i.jsxs)(y.d, {
            size: "lg",
            onClose: l,
            "aria-label": R,
            ...d,
            children: [
                (0, i.jsx)(E.rQ, { title: R }),
                (0, i.jsxs)("div", {
                    className: z.rf,
                    children: [
                        (0, i.jsxs)(N.V, {
                            className: z.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: C,
                            onItemSelect: (e) => {
                                null != e && P(e);
                            },
                            "aria-label": p.intl.string(p.t.bKOzux),
                            children: [
                                (0, i.jsxs)(N.V.Item, {
                                    className: z.pc,
                                    id: "interests",
                                    "aria-label": p.intl.string(p.t.NpchGq),
                                    children: [
                                        p.intl.string(p.t.NpchGq),
                                        (0, W.t0)() && null != f.find((e) => e.type === b.x.PERSONAL)
                                            ? (0, i.jsx)(v.E, { type: "new", variant: "brand" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(N.V.Item, {
                                    className: z.pc,
                                    id: "gameStats",
                                    "aria-label": p.intl.string(p.t.EKR8Ps),
                                    children: [
                                        p.intl.string(p.t.EKR8Ps),
                                        G && (0, i.jsx)(v.E, { type: "new", variant: "brand" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(N.V.Panel, {
                            id: C,
                            "aria-label": p.intl.string(w),
                            className: z.Qs,
                            children: (0, i.jsx)(S.Gt, { className: z.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var X = l(49999);
function Y(e) {
    let { initialCategory: t, ...l } = e,
        c = d.useConfig({ location: s.A.USER_PROFILE_APPLICATION_WIDGET }).enabled;
    return (
        n.useEffect(
            () => () => {
                (0, r.Dr)(a.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: X.i.AUTO_DISMISS });
            },
            [],
        ),
        c ? (0, i.jsx)(Q, { initialCategory: t, ...l }) : (0, i.jsx)(A, { ...l })
    );
}
