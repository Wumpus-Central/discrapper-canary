n.d(t, { Z: () => m });
var a = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    r = n(706454),
    s = n(709054),
    o = n(997431),
    c = n(388032),
    d = n(552304);
function m(e) {
    let { profile: t } = e,
        n = (0, i.e7)([r.default], () => r.default.locale),
        m = (0, o.M)(s.default.extractTimestamp(t.id), n);
    return (0, a.jsxs)('div', {
        className: d.header,
        children: [
            (0, a.jsx)(l.X6q, {
                variant: 'heading-lg/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, a.jsxs)('div', {
                className: d.members,
                children: [
                    (0, a.jsxs)('div', {
                        className: d.memberCount,
                        children: [
                            (0, a.jsx)('div', { className: d.dot }),
                            (0, a.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: c.intl.format(c.t.zRl6XV, { count: t.memberCount })
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: d.memberCount,
                        children: [
                            (0, a.jsx)('div', { className: d.dotOnline }),
                            (0, a.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: c.intl.format(c.t['LC+S+v'], { membersOnline: t.onlineCount })
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: d.established,
                children: (0, a.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: c.intl.format(c.t['zb2Q5+'], { createdAtDate: m })
                })
            })
        ]
    });
}
