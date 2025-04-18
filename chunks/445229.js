n.d(t, { Z: () => h });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    u = n(99690),
    c = n(594174),
    d = n(823379),
    m = n(5192),
    p = n(388032),
    f = n(542776);
function v(e) {
    let { user: t } = e,
        n = m.ZP.useName(null, null, t);
    return (0, r.jsxs)('div', {
        className: f.userItem,
        children: [
            (0, r.jsx)(u.Z, { user: t }),
            (0, r.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
function h(e) {
    let { clip: t, className: n } = e,
        l = (0, o.Wu)([c.default], () => t.users.map(c.default.getUser).filter(d.lm)),
        u = a.useCallback(
            (e) => {
                let { row: t } = e,
                    n = l[t];
                return null == n ? null : (0, r.jsx)(v, { user: n }, t);
            },
            [l]
        );
    return (0, r.jsxs)('div', {
        className: i()(n, f.root),
        children: [
            (0, r.jsx)('div', {
                className: f.__invalid_header,
                children: (0, r.jsxs)(s.vwX, {
                    className: f.title,
                    children: [
                        p.NW.string(p.t.WTozwc),
                        (0, r.jsxs)('div', {
                            className: f.userCountPill,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    color: 'text-normal',
                                    variant: 'text-xs/medium',
                                    children: l.length
                                }),
                                (0, r.jsx)(s.iFz, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: f.userCountIcon
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)(s.aVo, {
                className: f.__invalid_userList,
                sectionHeight: 0,
                rowHeight: 40,
                sections: [l.length],
                renderRow: u
            })
        ]
    });
}
