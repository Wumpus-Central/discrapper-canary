n.d(t, { f: () => g });
var i = n(627968);
n(64700);
var s = n(444802),
    l = n(975571),
    a = n(524738),
    r = n(421248),
    o = n(42765),
    d = n(871930),
    c = n(531525),
    u = n(652215),
    _ = n(985018),
    m = n(456144);
function g() {
    let e = (0, s.WX)(),
        t = [
            {
                title: _.intl.string(_.t.GYpoAq),
                component: r.Z,
                orientation: "vertical",
                setting: c.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION,
            },
            {
                title: _.intl.string(_.t["16/3Bi"]),
                component: o.q,
                orientation: "vertical",
                setting: c.H.GORE_MEDIA_REDACTION,
            },
        ];
    return (0, i.jsxs)(d.h, {
        setting: c.H.SENSITIVE_CONTENT_FILTERS,
        children: [
            (0, i.jsx)(d._, {
                header: _.intl.string(_.t["Hj/But"]),
                description: _.intl.format(_.t.dliU4j, { learnMoreLink: l.A.getArticleURL(e) }),
            }),
            (0, i.jsx)(a.A, {
                parentSetting: c.H.CONTENT_SOCIAL,
                settingsSection: u.nc_.CONTENT_AND_SOCIAL,
                tabs: t,
                orientation: "vertical",
                tabsClassName: m.v,
            }),
        ],
    });
}
