n.d(t, { n: () => p });
var i = n(255367);
n(73800);
var r = n(925513),
    s = n(63063),
    l = n(526156),
    a = n(821035),
    o = n(768604),
    c = n(838436),
    d = n(526761),
    u = n(726985),
    m = n(981631),
    g = n(388032);
function p() {
    let e = (0, r.v6)(),
        t = [
            {
                title: g.intl.string(g.t.GYpoAg),
                component: () => (0, i.jsx)(a.P, { isNested: !0 }),
                orientation: 'vertical',
                setting: u.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION
            },
            {
                title: g.intl.string(g.t['16/3Bg']),
                component: o.I,
                orientation: 'vertical',
                setting: u.s6.GORE_MEDIA_REDACTION
            }
        ];
    return (0, i.jsxs)(c.U, {
        setting: u.s6.SENSITIVE_CONTENT_FILTERS,
        scrollPosition: d.FY.EXPLICIT_MEDIA_REDACTION_V2,
        children: [
            (0, i.jsx)(c.H, {
                header: g.intl.string(g.t['Hj/Bur']),
                description: g.intl.format(g.t.dliU4u, { learnMoreLink: s.Z.getArticleURL(e) })
            }),
            (0, i.jsx)(l.Z, {
                parentSetting: u.s6.CONTENT_SOCIAL,
                settingsSection: m.oAB.CONTENT_AND_SOCIAL,
                tabs: t,
                orientation: 'vertical'
            })
        ]
    });
}
