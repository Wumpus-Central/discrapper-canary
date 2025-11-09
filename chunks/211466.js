n.d(t, { n: () => h });
var r = n(951288);
n(647438);
var i = n(925513),
    a = n(63063),
    o = n(526156),
    s = n(821035),
    l = n(768604),
    c = n(838436),
    u = n(526761),
    d = n(726985),
    f = n(981631),
    _ = n(388032),
    p = n(627256);
function h() {
    let e = (0, i.v6)(),
        t = [
            {
                title: _.intl.string(_.t.GYpoAq),
                component: () => (0, r.jsx)(s.P, {}),
                orientation: "vertical",
                setting: d.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION,
            },
            {
                title: _.intl.string(_.t["16/3Bi"]),
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
                header: _.intl.string(_.t["Hj/But"]),
                description: _.intl.format(_.t.dliU4j, { learnMoreLink: a.Z.getArticleURL(e) }),
            }),
            (0, r.jsx)(o.Z, {
                parentSetting: d.s6.CONTENT_SOCIAL,
                settingsSection: f.oAB.CONTENT_AND_SOCIAL,
                tabs: t,
                orientation: "vertical",
                tabsClassName: p.tabs,
            }),
        ],
    });
}
