n.d(t, { A: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(63063),
    s = n(586382),
    a = n(594980),
    o = n(515025),
    c = n(981631),
    u = n(388032),
    d = n(563772);
function m(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)(i.hjN, {
        className: d.container,
        children: [
            (0, r.jsxs)('div', {
                className: d.column,
                children: [
                    (0, r.jsxs)(i.vwX, {
                        className: d.title,
                        children: [u.intl.string(u.t.tzGY0t), (0, r.jsx)(s.hH, { guild: t })]
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: d.text,
                        children: u.intl.string(u.t.F7bbrq)
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: d.text,
                        children: u.intl.format(u.t.ZYA9PT, { articleURL: l.Z.getArticleURL(c.BhN.GUILD_INVITE_SPLASH) })
                    }),
                    (0, r.jsx)(a.c, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: d.button
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.column,
                children: (0, r.jsx)(o.h, {
                    guild: t,
                    canManageGuild: n
                })
            })
        ]
    });
}
