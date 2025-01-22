n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(434650),
    o = n(626135),
    s = n(463571),
    c = n(744142),
    d = n(132871),
    u = n(981631),
    p = n(388032),
    m = n(535040);
function _(e) {
    let { applicationId: t, applications: n, className: c, listingClassName: _, title: g, showViewAll: h, onViewOne: I, onViewAll: v } = e,
        b = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
                i = (0, d.useApplicationDirectoryHistory)((e) => e.guildId),
                [r, s] = a.useState(),
                c = (0, l.O)((e) => {
                    e && s(t);
                });
            return (
                a.useEffect(() => {
                    r === t &&
                        o.default.track(u.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: n,
                            guild_id: i
                        });
                }, [r, t, n, i]),
                c
            );
        })({
            applicationId: t,
            similarAppIds: a.useMemo(() => n.map((e) => e.id), [n])
        });
    return (0, i.jsxs)('div', {
        className: c,
        ref: b,
        children: [
            null != g
                ? (0, i.jsxs)('div', {
                      className: m.header,
                      children: [
                          (0, i.jsx)(r.Heading, {
                              variant: 'heading-lg/semibold',
                              children: g
                          }),
                          h
                              ? (0, i.jsx)(r.Button, {
                                    look: r.Button.Looks.LINK,
                                    color: r.Button.Colors.LINK,
                                    onClick: v,
                                    children: p.intl.string(p.t['e+T3go'])
                                })
                              : null
                      ]
                  })
                : null,
            (0, i.jsx)('ul', {
                className: m.list,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        s.Z,
                        {
                            href: u.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
                            children: (0, i.jsx)(f, {
                                className: _,
                                application: e,
                                onClick: (n) => {
                                    let { mutualGuilds: i } = n;
                                    return I({
                                        application: e,
                                        mutualGuilds: i,
                                        index: t
                                    });
                                }
                            })
                        },
                        e.id
                    )
                )
            })
        ]
    });
}
function f(e) {
    return (0, i.jsx)(c.Z, { ...e });
}
