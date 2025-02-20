n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var a = n(442837),
    i = n(481060),
    l = n(706454),
    s = n(709054),
    o = n(997431),
    c = n(388032),
    u = n(62552);
function m(e) {
    let { profile: t } = e,
        n = (0, a.e7)([l.default], () => l.default.locale),
        m = (0, o.M)(s.default.extractTimestamp(t.id), n);
    return (0, r.jsxs)('div', {
        className: u.header,
        children: [
            (0, r.jsx)(i.X6q, {
                variant: 'heading-lg/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, r.jsxs)('div', {
                className: u.members,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: u.dot }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: c.NW.format(c.t.zRl6XV, { count: t.memberCount })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: u.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: u.dotOnline }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: c.NW.format(c.t['LC+S+v'], { membersOnline: t.onlineCount })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: u.established,
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: c.NW.format(c.t['zb2Q5+'], { createdAtDate: m })
                })
            })
        ]
    });
}
