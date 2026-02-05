n.d(t, { f: () => g });
var i = n(627968);
n(64700);
var s = n(444802),
    r = n(975571),
    a = n(524738),
    l = n(421248),
    o = n(42765),
    c = n(871930),
    d = n(355097),
    u = n(531525),
    _ = n(652215),
    m = n(985018),
    A = n(456144);
function g() {
    let e = (0, s.WX)(),
        t = [
            {
                title: m.intl.string(m.t.GYpoAq),
                component: l.Z,
                orientation: "vertical",
                setting: u.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION,
            },
            {
                title: m.intl.string(m.t["16/3Bi"]),
                component: o.q,
                orientation: "vertical",
                setting: u.H.GORE_MEDIA_REDACTION,
            },
        ];
    return (0, i.jsxs)(c.h, {
        setting: u.H.SENSITIVE_CONTENT_FILTERS,
        scrollPosition: d.d1.EXPLICIT_MEDIA_REDACTION_V2,
        children: [
            (0, i.jsx)(c._, {
                header: m.intl.string(m.t["Hj/But"]),
                description: m.intl.format(m.t.dliU4j, { learnMoreLink: r.A.getArticleURL(e) }),
            }),
            (0, i.jsx)(a.A, {
                parentSetting: u.H.CONTENT_SOCIAL,
                settingsSection: _.nc_.CONTENT_AND_SOCIAL,
                tabs: t,
                orientation: "vertical",
                tabsClassName: A.v,
            }),
        ],
    });
}
