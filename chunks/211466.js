n.d(t, { n: () => g });
var i = n(255367);
n(73800);
var r = n(63063),
    s = n(526156),
    l = n(821035),
    a = n(72118),
    o = n(838436),
    c = n(526761),
    d = n(726985),
    u = n(981631),
    m = n(388032);
function g() {
    let e = [
        {
            title: 'Sexually explicit media',
            component: () => (0, i.jsx)(l.P, { isNested: !0 }),
            orientation: 'vertical',
            setting: d.s6.SEXUALLY_EXPLICIT_MEDIA_REDACTION
        },
        {
            title: 'Gore',
            component: a.I,
            orientation: 'vertical',
            setting: d.s6.GORE_MEDIA_REDACTION
        }
    ];
    return (0, i.jsxs)(o.U, {
        setting: d.s6.SENSITIVE_CONTENT_FILTERS,
        scrollPosition: c.FY.EXPLICIT_MEDIA_REDACTION_V2,
        children: [
            (0, i.jsx)(o.H, {
                header: m.intl.string(m.t['Hj/Bur']),
                description: m.intl.format(m.t.dliU4u, { learnMoreLink: r.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION) })
            }),
            (0, i.jsx)(s.Z, {
                parentSetting: d.s6.CONTENT_SOCIAL,
                settingsSection: u.oAB.CONTENT_AND_SOCIAL,
                tabs: e,
                orientation: 'vertical'
            })
        ]
    });
}
