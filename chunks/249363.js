n.d(t, { A: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(63063),
    a = n(586382),
    l = n(594980),
    o = n(515025),
    c = n(981631),
    d = n(388032),
    u = n(563772);
function m(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)(i.hjN, {
        className: u.container,
        children: [
            (0, r.jsxs)('div', {
                className: u.column,
                children: [
                    (0, r.jsxs)(i.vwX, {
                        className: u.title,
                        children: [d.NW.string(d.t.tzGY0t), (0, r.jsx)(a.hH, { guild: t })]
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: u.text,
                        children: d.NW.string(d.t.F7bbrq)
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: u.text,
                        children: d.NW.format(d.t.ZYA9PT, { articleURL: s.Z.getArticleURL(c.BhN.GUILD_INVITE_SPLASH) })
                    }),
                    (0, r.jsx)(l.c, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: u.button
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: u.column,
                children: (0, r.jsx)(o.h, {
                    guild: t,
                    canManageGuild: n
                })
            })
        ]
    });
}
