n.d(t, { f: () => A });
var i = n(627968),
    s = n(64700),
    l = n(252452),
    a = n(444802),
    r = n(975571),
    o = n(429041),
    d = n(639491),
    u = n(106148),
    c = n(397620),
    g = n(652215),
    m = n(985018),
    _ = n(759049);
function A() {
    let e = (0, a.WX)(),
        t = s.useMemo(
            () => [
                {
                    id: "explicit-media-redaction",
                    title: m.intl.string(m.t.GYpoAq),
                    component: o.Z,
                    orientation: "vertical",
                },
                {
                    id: "gore-media-redaction",
                    title: m.intl.string(m.t["16/3Bi"]),
                    component: d.q,
                    orientation: "vertical",
                },
            ],
            [],
        ),
        n = s.useCallback((e) => {
            l.A.setSection(g.nc_.CONTENT_AND_SOCIAL, e);
        }, []);
    return (0, i.jsxs)(u.h, {
        children: [
            (0, i.jsx)(u._, {
                header: m.intl.string(m.t["Hj/But"]),
                description: m.intl.format(m.t.dliU4j, { learnMoreLink: r.A.getArticleURL(e) }),
            }),
            (0, i.jsx)(c.A, { tabs: t, onTabChange: n, orientation: "vertical", tabsClassName: _.v }),
        ],
    });
}
