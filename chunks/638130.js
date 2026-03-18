n.d(t, { f: () => x });
var i = n(627968),
    s = n(64700),
    l = n(252452),
    a = n(444802),
    r = n(975571),
    o = n(524738),
    d = n(421248),
    c = n(42765),
    u = n(871930),
    _ = n(531525),
    m = n(652215),
    g = n(985018),
    A = n(456144);
function x() {
    let e = (0, a.WX)(),
        t = s.useMemo(
            () => [
                {
                    title: g.intl.string(g.t.GYpoAq),
                    component: d.Z,
                    orientation: "vertical",
                    setting: _.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION,
                },
                {
                    title: g.intl.string(g.t["16/3Bi"]),
                    component: c.q,
                    orientation: "vertical",
                    setting: _.H.GORE_MEDIA_REDACTION,
                },
            ],
            [],
        ),
        n = s.useCallback((e) => {
            l.A.setSection(m.nc_.CONTENT_AND_SOCIAL, e);
        }, []);
    return (0, i.jsxs)(u.h, {
        setting: _.H.SENSITIVE_CONTENT_FILTERS,
        children: [
            (0, i.jsx)(u._, {
                header: g.intl.string(g.t["Hj/But"]),
                description: g.intl.format(g.t.dliU4j, { learnMoreLink: r.A.getArticleURL(e) }),
            }),
            (0, i.jsx)(o._, { tabs: t, onTabChange: n, orientation: "vertical", tabsClassName: A.v }),
        ],
    });
}
