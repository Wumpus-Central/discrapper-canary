a.d(t, { Z: () => h });
var n = a(200651),
    l = a(192379),
    i = a(120356),
    r = a.n(i),
    o = a(442837),
    s = a(481060),
    u = a(99690),
    d = a(594174),
    c = a(823379),
    m = a(5192),
    p = a(388032),
    v = a(852190);
function f(e) {
    let { user: t } = e,
        a = m.ZP.useName(null, null, t);
    return (0, n.jsxs)('div', {
        className: v.userItem,
        children: [
            (0, n.jsx)(u.Z, { user: t }),
            (0, n.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: a
            })
        ]
    });
}
function h(e) {
    let { clip: t, className: a } = e,
        i = (0, o.Wu)([d.default], () => t.users.map(d.default.getUser).filter(c.lm)),
        u = l.useCallback(
            (e) => {
                let { row: t } = e,
                    a = i[t];
                return null == a ? null : (0, n.jsx)(f, { user: a }, t);
            },
            [i]
        );
    return (0, n.jsxs)('div', {
        className: r()(a, v.root),
        children: [
            (0, n.jsx)('div', {
                className: v.__invalid_header,
                children: (0, n.jsxs)(s.vwX, {
                    className: v.title,
                    children: [
                        p.intl.string(p.t.WTozwc),
                        (0, n.jsxs)('div', {
                            className: v.userCountPill,
                            children: [
                                (0, n.jsx)(s.Text, {
                                    color: 'text-normal',
                                    variant: 'text-xs/medium',
                                    children: i.length
                                }),
                                (0, n.jsx)(s.iFz, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: v.userCountIcon
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, n.jsx)(s.aVo, {
                className: v.__invalid_userList,
                sectionHeight: 0,
                rowHeight: 40,
                sections: [i.length],
                renderRow: u
            })
        ]
    });
}
