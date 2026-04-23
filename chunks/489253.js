a.d(t, { A: () => C });
var n = a(627968),
    l = a(64700),
    i = a(172218),
    s = a(534514),
    r = a(939249),
    o = a(834730),
    c = a(486020),
    d = a(82293),
    u = a(412461),
    h = a(273423),
    m = a(867333),
    p = a(973172),
    _ = a(652215),
    g = a(985018),
    x = a(668168);
function A(e) {
    let { applicationId: t, similarApplications: a, onSelectApplication: s, similarLoadId: r } = e,
        o = (function (e) {
            let { applicationId: t, similarAppIds: a } = e,
                [n, s] = l.useState(),
                r = (0, i.K)((e) => {
                    e && s(t);
                });
            return (
                l.useEffect(() => {
                    n === t &&
                        (0, u.TR)(_.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: a,
                        });
                }, [n, t, a]),
                r
            );
        })({ applicationId: t, similarAppIds: l.useMemo(() => a.map((e) => e.id), [a]) });
    return (0, n.jsx)("div", {
        className: x.hQ,
        ref: o,
        children: a.map((e, a) =>
            (0, n.jsx)(
                f,
                { applicationId: t, similarApplication: e, onSelectApplication: s, similarLoadId: r, position: a },
                e.id,
            ),
        ),
    });
}
function f(e) {
    let { applicationId: t, similarApplication: a, onSelectApplication: i, position: d, similarLoadId: m } = e,
        g = (0, p.A)({ application: a }),
        A = a.categories?.[0],
        f = l.useMemo(() => c.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }), [a]),
        C = l.useCallback(() => {
            (0, u.TR)(_.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: a.id,
                position: d,
                load_id: m,
                shown_mutual_guilds_count: g.length,
            }),
                i(a.id);
        }, [i, a.id, t, g.length, m, d]);
    return (0, n.jsxs)(r.D, {
        onClick: C,
        className: x.vU,
        children: [
            (0, n.jsxs)("div", {
                className: x.nT,
                children: [
                    (0, n.jsx)("img", { src: f, alt: "", className: x.my, height: 48, width: 48 }),
                    (0, n.jsxs)("div", {
                        className: x.gn,
                        children: [
                            (0, n.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, n.jsx)(s.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    className: x.JB,
                                    children: a.name,
                                }),
                            }),
                            null != A
                                ? (0, n.jsx)(o.E, {
                                      className: x.m4,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: A.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(o.E, {
                className: x.i3,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: a.directory_entry?.short_description ?? a.description,
            }),
            (0, n.jsx)(h.A, {
                application: a,
                textVariant: "text-xs/medium",
                mutualGuilds: g,
                mutualGuildShownMax: 3,
                guildIconSize: h.I.SMALL,
                compact: !0,
            }),
        ],
    });
}
let C = function (e) {
    let { applicationId: t, fetchState: a, similarApplications: l, onSelectApplication: i, similarLoadId: r } = e;
    return a !== d.e.FETCHING && (null == l || 0 === l.length)
        ? null
        : (0, n.jsxs)("div", {
              className: x.hd,
              children: [
                  (0, n.jsx)("div", { className: x.yF }),
                  (0, n.jsx)(s.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      className: x.bV,
                      children: g.intl.string(g.t.E8wCnk),
                  }),
                  (0, n.jsx)(m.A, {
                      loading: a === d.e.FETCHING,
                      children:
                          null != l
                              ? (0, n.jsx)(A, {
                                    applicationId: t,
                                    similarApplications: l,
                                    onSelectApplication: i,
                                    similarLoadId: r,
                                })
                              : null,
                  }),
              ],
          });
};
