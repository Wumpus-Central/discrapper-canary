n.d(t, { f: () => x });
var i = n(627968),
    s = n(64700),
    l = n(252452),
    a = n(444802),
    r = n(975571),
    o = n(524738),
    d = n(106148),
    c = n(421248),
    u = n(42765),
    _ = n(531525),
    m = n(652215),
    g = n(985018),
    A = n(831306);
function x() {
    let e = (0, a.WX)(),
        t = s.useMemo(
            () => [
                {
                    title: g.intl.string(g.t.GYpoAq),
                    component: c.Z,
                    orientation: "vertical",
                    setting: _.Ho.SEXUALLY_EXPLICIT_MEDIA_REDACTION,
                },
                {
                    title: g.intl.string(g.t["16/3Bi"]),
                    component: u.q,
                    orientation: "vertical",
                    setting: _.Ho.GORE_MEDIA_REDACTION,
                },
            ],
            [],
        ),
        n = s.useCallback((e) => {
            l.A.setSection(m.nc_.CONTENT_AND_SOCIAL, e);
        }, []);
    return (0, i.jsxs)(d.h, {
        children: [
            (0, i.jsx)(d._, {
                header: g.intl.string(g.t["Hj/But"]),
                description: g.intl.format(g.t.dliU4j, { learnMoreLink: r.A.getArticleURL(e) }),
            }),
            (0, i.jsx)(o._, { tabs: t, onTabChange: n, orientation: "vertical", tabsClassName: A.v }),
        ],
    });
}
