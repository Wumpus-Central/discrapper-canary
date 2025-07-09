n.d(t, { n: () => g });
var i = n(255367);
n(73800);
var r = n(925513),
    s = n(63063),
    a = n(526156),
    l = n(821035),
    o = n(768604),
    c = n(838436),
    d = n(526761),
    u = n(726985),
    m = n(981631),
    p = n(388032);
function g() {
    let e = (0, r.v6)(),
        t = [
            {
                title: p.intl.string(p.t.GYpoAg),
                component: () => (0, i.jsx)(l.P, { isNested: !0 }),
                orientation: 'vertical',
                setting: u.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION
            },
            {
                title: p.intl.string(p.t['16/3Bg']),
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
                header: p.intl.string(p.t['Hj/Bur']),
                description: p.intl.format(p.t.dliU4u, { learnMoreLink: s.Z.getArticleURL(e) })
            }),
            (0, i.jsx)(a.Z, {
                parentSetting: u.s6.CONTENT_SOCIAL,
                settingsSection: m.oAB.CONTENT_AND_SOCIAL,
                tabs: t,
                orientation: 'vertical'
            })
        ]
    });
}
