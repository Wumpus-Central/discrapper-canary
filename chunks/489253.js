n.d(t, {
    A: () => x,
}),
    n(228524),
    n(896048);
var l = n(627968),
    a = n(64700),
    r = n(172218),
    i = n(397927),
    s = n(486020),
    c = n(82293),
    o = n(412461),
    d = n(273423),
    u = n(867333),
    p = n(973172),
    h = n(652215),
    m = n(985018),
    b = n(265005);

function f(e) {
    let { applicationId: t, similarApplications: n, onSelectApplication: i, similarLoadId: s } = e,
        c = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
                [l, i] = a.useState(),
                s = (0, r.K)((e) => {
                    e && i(t);
                });
            return (
                a.useEffect(() => {
                    l === t &&
                        (0, o.TR)(h.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: n,
                        });
                }, [l, t, n]),
                s
            );
        })({
            applicationId: t,
            similarAppIds: a.useMemo(() => n.map((e) => e.id), [n]),
        });
    return (0, l.jsx)("div", {
        className: b.hQ,
        ref: c,
        children: n.map((e, n) =>
            (0, l.jsx)(
                g,
                {
                    applicationId: t,
                    similarApplication: e,
                    onSelectApplication: i,
                    similarLoadId: s,
                    position: n,
                },
                e.id,
            ),
        ),
    });
}

function g(e) {
    var t, n, r;
    let { applicationId: c, similarApplication: u, onSelectApplication: m, position: f, similarLoadId: g } = e,
        x = (0, p.A)({
            application: u,
        }),
        v = null == (n = u.categories) ? void 0 : n[0],
        j = a.useMemo(
            () =>
                s.Ay.getApplicationIconURL({
                    id: u.id,
                    icon: u.icon,
                    size: 48,
                }),
            [u],
        ),
        A = a.useCallback(() => {
            (0, o.TR)(h.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: c,
                suggested_application_id: u.id,
                position: f,
                load_id: g,
                shown_mutual_guilds_count: x.length,
            }),
                m(u.id);
        }, [m, u.id, c, x.length, g, f]);
    return (0, l.jsxs)(i.DUT, {
        onClick: A,
        className: b.vU,
        children: [
            (0, l.jsxs)("div", {
                className: b.nT,
                children: [
                    (0, l.jsx)("img", {
                        src: j,
                        alt: "",
                        className: b.my,
                        height: 48,
                        width: 48,
                    }),
                    (0, l.jsxs)("div", {
                        className: b.gn,
                        children: [
                            (0, l.jsx)("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: "hidden",
                                },
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    className: b.JB,
                                    children: u.name,
                                }),
                            }),
                            null != v
                                ? (0, l.jsx)(i.Text, {
                                      className: b.m4,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: v.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(i.Text, {
                className: b.i3,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children:
                    null != (t = null == (r = u.directory_entry) ? void 0 : r.short_description) ? t : u.description,
            }),
            (0, l.jsx)(d.A, {
                application: u,
                textVariant: "text-xs/medium",
                mutualGuilds: x,
                mutualGuildShownMax: 3,
                guildIconSize: d.I.SMALL,
                compact: !0,
            }),
        ],
    });
}
let x = function (e) {
    let { applicationId: t, fetchState: n, similarApplications: a, onSelectApplication: r, similarLoadId: s } = e;
    return n !== c.e.FETCHING && (null == a || 0 === a.length)
        ? null
        : (0, l.jsxs)("div", {
              className: b.hd,
              children: [
                  (0, l.jsx)("div", {
                      className: b.yF,
                  }),
                  (0, l.jsx)(i.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      className: b.bV,
                      children: m.intl.string(m.t.E8wCnk),
                  }),
                  (0, l.jsx)(u.A, {
                      loading: n === c.e.FETCHING,
                      children:
                          null != a
                              ? (0, l.jsx)(f, {
                                    applicationId: t,
                                    similarApplications: a,
                                    onSelectApplication: r,
                                    similarLoadId: s,
                                })
                              : null,
                  }),
              ],
          });
};
