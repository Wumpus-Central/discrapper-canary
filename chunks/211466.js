n.d(t, { n: () => m });
var r = n(54381);
n(473749);
var i = n(925513),
    a = n(63063),
    o = n(526156),
    s = n(821035),
    l = n(768604),
    c = n(838436),
    u = n(526761),
    d = n(726985),
    f = n(981631),
    p = n(388032),
    _ = n(20492);
function m() {
    let e = (0, i.v6)(),
        t = [
            {
                title: p.intl.string(p.t.GYpoAq),
                component: () => (0, r.jsx)(s.P, {}),
                orientation: "vertical",
                setting: d.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION,
            },
            {
                title: p.intl.string(p.t["16/3Bi"]),
                component: () => (0, r.jsx)(l.I, {}),
                orientation: "vertical",
                setting: d.s6.GORE_MEDIA_REDACTION,
            },
        ];
    return (0, r.jsxs)(c.U, {
        setting: d.s6.SENSITIVE_CONTENT_FILTERS,
        scrollPosition: u.FY.EXPLICIT_MEDIA_REDACTION_V2,
        children: [
            (0, r.jsx)(c.H, {
                header: p.intl.string(p.t["Hj/But"]),
                description: p.intl.format(p.t.dliU4j, { learnMoreLink: a.Z.getArticleURL(e) }),
            }),
            (0, r.jsx)(o.Z, {
                parentSetting: d.s6.CONTENT_SOCIAL,
                settingsSection: f.oAB.CONTENT_AND_SOCIAL,
                tabs: t,
                orientation: "vertical",
                tabsClassName: _.tabs,
            }),
        ],
    });
}
