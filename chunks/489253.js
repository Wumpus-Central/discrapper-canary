a.d(t, { A: () => A });
var n = a(627968),
    i = a(64700),
    s = a(172218),
    l = a(397927),
    r = a(486020),
    o = a(82293),
    c = a(412461),
    d = a(273423),
    u = a(867333),
    h = a(973172),
    m = a(652215),
    p = a(985018),
    _ = a(265005);
function g(e) {
    let { applicationId: t, similarApplications: a, onSelectApplication: l, similarLoadId: r } = e,
        o = (function (e) {
            let { applicationId: t, similarAppIds: a } = e,
                [n, l] = i.useState(),
                r = (0, s.K)((e) => {
                    e && l(t);
                });
            return (
                i.useEffect(() => {
                    n === t &&
                        (0, c.TR)(m.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: a,
                        });
                }, [n, t, a]),
                r
            );
        })({ applicationId: t, similarAppIds: i.useMemo(() => a.map((e) => e.id), [a]) });
    return (0, n.jsx)("div", {
        className: _.hQ,
        ref: o,
        children: a.map((e, a) =>
            (0, n.jsx)(
                x,
                { applicationId: t, similarApplication: e, onSelectApplication: l, similarLoadId: r, position: a },
                e.id,
            ),
        ),
    });
}
function x(e) {
    let { applicationId: t, similarApplication: a, onSelectApplication: s, position: o, similarLoadId: u } = e,
        p = (0, h.A)({ application: a }),
        g = a.categories?.[0],
        x = i.useMemo(() => r.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }), [a]),
        A = i.useCallback(() => {
            (0, c.TR)(m.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: a.id,
                position: o,
                load_id: u,
                shown_mutual_guilds_count: p.length,
            }),
                s(a.id);
        }, [s, a.id, t, p.length, u, o]);
    return (0, n.jsxs)(l.DUT, {
        onClick: A,
        className: _.vU,
        children: [
            (0, n.jsxs)("div", {
                className: _.nT,
                children: [
                    (0, n.jsx)("img", { src: x, alt: "", className: _.my, height: 48, width: 48 }),
                    (0, n.jsxs)("div", {
                        className: _.gn,
                        children: [
                            (0, n.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, n.jsx)(l.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    className: _.JB,
                                    children: a.name,
                                }),
                            }),
                            null != g
                                ? (0, n.jsx)(l.Text, {
                                      className: _.m4,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: g.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(l.Text, {
                className: _.i3,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: a.directory_entry?.short_description ?? a.description,
            }),
            (0, n.jsx)(d.A, {
                application: a,
                textVariant: "text-xs/medium",
                mutualGuilds: p,
                mutualGuildShownMax: 3,
                guildIconSize: d.I.SMALL,
                compact: !0,
            }),
        ],
    });
}
let A = function (e) {
    let { applicationId: t, fetchState: a, similarApplications: i, onSelectApplication: s, similarLoadId: r } = e;
    return a !== o.e.FETCHING && (null == i || 0 === i.length)
        ? null
        : (0, n.jsxs)("div", {
              className: _.hd,
              children: [
                  (0, n.jsx)("div", { className: _.yF }),
                  (0, n.jsx)(l.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      className: _.bV,
                      children: p.intl.string(p.t.E8wCnk),
                  }),
                  (0, n.jsx)(u.A, {
                      loading: a === o.e.FETCHING,
                      children:
                          null != i
                              ? (0, n.jsx)(g, {
                                    applicationId: t,
                                    similarApplications: i,
                                    onSelectApplication: s,
                                    similarLoadId: r,
                                })
                              : null,
                  }),
              ],
          });
};
