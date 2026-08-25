l.d(t, { default: () => F });
var i = l(477900),
    n = l(582128),
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
        [l, i] = n.useState(t);
    return (
        n.useEffect(() => {
            t.length > l.length && i(t);
        }, [t, l]),
        n.useMemo(() => {
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
        [A, b] = n.useState(!1),
        y = { onClick: () => t(), text: x.intl.string(x.t.cpT0Cq) },
        N = n.useCallback(() => {
            b(!0), t();
        }, [t]);
    return null == h
        ? null
        : (0, i.jsx)(r.Modal, {
              title: x.intl.string(x.t["grUgR+"]),
              actions: j ? [] : [y],
              size: j ? "md" : "sm",
              onClose: t,
              ...s,
              children: j
                  ? (0, i.jsx)("ul", {
                        "aria-label": x.intl.string(x.t["+EIBSA"]),
                        className: f.f,
                        children: p.map((e) =>
                            (0, i.jsx)(
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
                  : (0, i.jsx)(c.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: x.intl.string(x.t["1nkDOs"]),
                    }),
          });
}
l(321073);
var j = l(224640),
    A = l(20742),
    b = l(761508),
    y = l(508770),
    N = l(689175),
    v = l(192308),
    C = l(939249),
    k = l(152367),
    E = l(71393),
    P = l(683180),
    w = l(295813),
    I = l(201799);
function U(e) {
    let { onOpen: t } = e,
        a = (0, d.bG)([E.A], () => (0, P.RZ)(E.A.getGuildsArray(), "VibegrationsCustomWidgetAddOption").length > 0, []),
        s = n.useCallback(() => {
            t?.(),
                (0, v.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("531198"),
                            l.e("446427"),
                            l.e("882736"),
                            l.e("553465"),
                            l.e("269606"),
                            l.e("208307"),
                        ]).then(l.bind(l, 938872));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    return a
        ? (0, i.jsxs)(C.D, {
              className: I.u,
              onClick: s,
              "aria-label": x.intl.string(w.default["27bu14"]),
              children: [
                  (0, i.jsx)(k.D, { size: "custom", width: 24, height: 24, color: "var(--icon-secondary)" }),
                  (0, i.jsx)(c.E, {
                      variant: "text-sm/semibold",
                      color: "text-default",
                      children: x.intl.string(w.default["4OR+L+"]),
                  }),
              ],
          })
        : null;
}
var S = l(403362),
    G = l(210598),
    R = l(503698),
    O = l.n(R),
    W = l(683438),
    q = l(140735),
    K = l(661439),
    L = l(429913),
    V = l(90165),
    D = l(976527);
function H(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: a,
            isSubmitting: s,
            trackUserProfileEditAction: r,
            highlightedApplicationIds: u,
        } = e,
        [o, h] = n.useState(""),
        [m] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, K.X)();
    }, []);
    let f = (0, L.A)(t.map((e) => e.applicationId)),
        p = (0, d.yK)([V.A], () =>
            f.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? V.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        j = n.useMemo(() => {
            let e = new Set(u ?? []),
                l = m - 7776e6;
            return t
                .map((t, i) => {
                    let n = p[i] ?? null;
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
        }, [t, f, u, p, m]),
        A = n.useMemo(() => {
            let e = o.trim().toLowerCase();
            return "" === e
                ? j
                : j.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [j, o]);
    return (0, i.jsxs)("div", {
        className: D.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W.I, {
                            query: o,
                            onChange: h,
                            onClear: () => h(""),
                            placeholder: x.intl.string(x.t.fBRUk1),
                            "aria-label": x.intl.string(x.t.fBRUk1),
                        }),
                        (0, i.jsx)(q.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: x.intl.format(x.t["r/EUap"], { count: A.length }),
                        }),
                    ],
                }),
            A.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": x.intl.string(x.t.mW75GT),
                      className: O()(D.Vg, { [D.i0]: l }),
                      children: A.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(g.A, {
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
                      children: (0, i.jsx)(c.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: x.intl.string(x.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var M = l(488634);
function z(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: M.HY,
        children: (0, i.jsx)(c.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function T(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: a } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": x.intl.string(x.t["+EIBSA"]),
        className: M.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(g.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: n,
                            trackUserProfileEditAction: a,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, i.jsx)("li", { children: (0, i.jsx)(U, { onOpen: l }) }),
        ],
    });
}
function B(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: a, highlightedApplicationIds: s, initialCategory: r, ...c } = e,
        h = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        f = m(),
        {
            applicationWidgets: p,
            collectionWidgets: v,
            personalWidget: C,
        } = n.useMemo(
            () =>
                (function (e) {
                    let t,
                        l = [],
                        i = [];
                    for (let n of e) n instanceof o.R ? l.push(n) : n instanceof G.Tu ? (t = n) : i.push(n);
                    return { applicationWidgets: l, collectionWidgets: i, personalWidget: t };
                })(f),
            [f],
        ),
        k = p.length > 0,
        E = v.length > 0,
        P = null != C,
        [w, I] = n.useState(() =>
            (function (e) {
                let {
                    initialCategory: t,
                    hasInterests: l,
                    hasGameStats: i,
                    hasCreateYourOwn: n,
                    highlightedApplicationIds: a,
                } = e;
                return (a?.length ?? 0) > 0
                    ? "gameStats"
                    : null != t
                      ? t
                      : l
                        ? "interests"
                        : i
                          ? "gameStats"
                          : n
                            ? "createYourOwn"
                            : "interests";
            })({
                initialCategory: r,
                hasInterests: E,
                hasGameStats: k,
                hasCreateYourOwn: P,
                highlightedApplicationIds: s,
            }),
        ),
        [U, R] = n.useState(!1),
        O = n.useCallback(() => {
            R(!0), l();
        }, [l]);
    if (null == h) return null;
    let W = x.intl.string(x.t["grUgR+"]),
        q = (function (e) {
            switch (e) {
                case "interests":
                    return x.t.NpchGq;
                case "gameStats":
                    return x.t.EKR8Ps;
                case "createYourOwn":
                    return x.t.eGAirq;
                default:
                    (0, S.xb)(e);
            }
        })(w),
        K = (s?.length ?? 0) > 0;
    return (
        (t =
            k || E || P
                ? "gameStats" === w
                    ? k
                        ? (0, i.jsx)("div", {
                              className: M.lU,
                              children: (0, i.jsx)(H, {
                                  applicationWidgets: p,
                                  dense: p.length >= 20,
                                  handleAddWidget: O,
                                  isSubmitting: U,
                                  trackUserProfileEditAction: a,
                                  highlightedApplicationIds: s,
                              }),
                          })
                        : (0, i.jsx)(z, { children: x.intl.format(x.t.mcdIFp, { tabName: x.intl.string(q) }) })
                    : "createYourOwn" === w
                      ? null != C
                          ? (0, i.jsx)("div", {
                                className: M.lU,
                                children: (0, i.jsx)(g.A, {
                                    widget: C,
                                    onAddWidget: O,
                                    loading: U,
                                    trackUserProfileEditAction: a,
                                }),
                            })
                          : (0, i.jsx)(z, { children: x.intl.format(x.t.mcdIFp, { tabName: x.intl.string(q) }) })
                      : E
                        ? (0, i.jsx)("div", {
                              className: M.lU,
                              children: (0, i.jsx)(T, {
                                  widgets: v,
                                  onAddWidget: O,
                                  isSubmitting: U,
                                  trackUserProfileEditAction: a,
                              }),
                          })
                        : (0, i.jsx)(z, { children: x.intl.format(x.t.mcdIFp, { tabName: x.intl.string(q) }) })
                : (0, i.jsx)(z, { children: x.intl.string(x.t["1nkDOs"]) })),
        (0, i.jsxs)(j.d, {
            size: "lg",
            onClose: l,
            "aria-label": W,
            ...c,
            children: [
                (0, i.jsx)(A.rQ, { title: W }),
                (0, i.jsxs)("div", {
                    className: M.rf,
                    children: [
                        (0, i.jsxs)(b.V, {
                            className: M.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: w,
                            onItemSelect: (e) => {
                                null != e && I(e);
                            },
                            "aria-label": x.intl.string(x.t.bKOzux),
                            children: [
                                (0, i.jsx)(b.V.Item, {
                                    className: M.pc,
                                    id: "interests",
                                    children: x.intl.string(x.t.NpchGq),
                                }),
                                (0, i.jsxs)(b.V.Item, {
                                    className: M.pc,
                                    id: "gameStats",
                                    "aria-label": x.intl.string(x.t.EKR8Ps),
                                    children: [
                                        x.intl.string(x.t.EKR8Ps),
                                        K && (0, i.jsx)(y.E, { type: "new", variant: "brand" }),
                                    ],
                                }),
                                P
                                    ? (0, i.jsxs)(b.V.Item, {
                                          className: M.pc,
                                          id: "createYourOwn",
                                          "aria-label": x.intl.string(x.t.eGAirq),
                                          children: [
                                              x.intl.string(x.t.eGAirq),
                                              (0, G.t0)() && (0, i.jsx)(y.E, { type: "new", variant: "brand" }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(b.V.Panel, {
                            id: w,
                            "aria-label": x.intl.string(q),
                            className: M.Qs,
                            children: (0, i.jsx)(N.Gt, { className: M.XG, fade: !0, children: t }),
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
        ? (0, i.jsx)(B, { initialCategory: t, ...l })
        : (0, i.jsx)(p, { ...l });
}
