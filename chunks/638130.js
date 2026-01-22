n.d(t, { f: () => h });
var r = n(627968);
n(64700);
var i = n(444802),
    a = n(975571),
    s = n(524738),
    o = n(421248),
    l = n(42765),
    c = n(871930),
    u = n(355097),
    d = n(531525),
    f = n(652215),
    p = n(985018),
    _ = n(456144);
function h() {
    let e = (0, i.WX)(),
        t = [
            {
                title: p.intl.string(p.t.GYpoAq),
                component: o.Z,
                orientation: "vertical",
                setting: d.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION,
            },
            {
                title: p.intl.string(p.t["16/3Bi"]),
                component: l.q,
                orientation: "vertical",
                setting: d.H.GORE_MEDIA_REDACTION,
            },
        ];
    return (0, r.jsxs)(c.h, {
        setting: d.H.SENSITIVE_CONTENT_FILTERS,
        scrollPosition: u.d1.EXPLICIT_MEDIA_REDACTION_V2,
        children: [
            (0, r.jsx)(c._, {
                header: p.intl.string(p.t["Hj/But"]),
                description: p.intl.format(p.t.dliU4j, { learnMoreLink: a.A.getArticleURL(e) }),
            }),
            (0, r.jsx)(s.A, {
                parentSetting: d.H.CONTENT_SOCIAL,
                settingsSection: f.nc_.CONTENT_AND_SOCIAL,
                tabs: t,
                orientation: "vertical",
                tabsClassName: _.v,
            }),
        ],
    });
}
