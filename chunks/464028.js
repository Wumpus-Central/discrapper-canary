n.d(t, { f: () => x });
var i = n(627968),
    s = n(64700),
    l = n(252452),
    a = n(444802),
    r = n(975571),
    o = n(429041),
    d = n(639491),
    c = n(106148),
    u = n(397620),
    m = n(652215),
    _ = n(985018),
    g = n(338425);
function x() {
    let e = (0, a.WX)(),
        t = s.useMemo(
            () => [
                {
                    id: "explicit-media-redaction",
                    title: _.intl.string(_.t.GYpoAq),
                    component: o.Z,
                    orientation: "vertical",
                },
                {
                    id: "gore-media-redaction",
                    title: _.intl.string(_.t["16/3Bi"]),
                    component: d.q,
                    orientation: "vertical",
                },
            ],
            [],
        ),
        n = s.useCallback((e) => {
            l.A.setSection(m.nc_.CONTENT_AND_SOCIAL, e);
        }, []);
    return (0, i.jsxs)(c.h, {
        children: [
            (0, i.jsx)(c._, {
                header: _.intl.string(_.t["Hj/But"]),
                description: _.intl.format(_.t.dliU4j, { learnMoreLink: r.A.getArticleURL(e) }),
            }),
            (0, i.jsx)(u.A, { tabs: t, onTabChange: n, orientation: "vertical", tabsClassName: g.v }),
        ],
    });
}
