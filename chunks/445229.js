n.d(t, {
    Z: function () {
        return b;
    }
});
var a = n(200651),
    l = n(192379),
    i = n(120356),
    r = n.n(i),
    o = n(442837),
    s = n(481060),
    u = n(99690),
    d = n(594174),
    c = n(823379),
    m = n(5192),
    p = n(388032),
    v = n(913022);
function f(e) {
    let { user: t } = e,
        n = m.ZP.useName(null, null, t);
    return (0, a.jsxs)('div', {
        className: v.userItem,
        children: [
            (0, a.jsx)(u.Z, { user: t }),
            (0, a.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
function b(e) {
    let { clip: t, className: n } = e,
        i = (0, o.Wu)([d.default], () => t.users.map(d.default.getUser).filter(c.lm)),
        u = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = i[t];
                return null == n ? null : (0, a.jsx)(f, { user: n }, t);
            },
            [i]
        );
    return (0, a.jsxs)('div', {
        className: r()(n, v.root),
        children: [
            (0, a.jsx)('div', {
                className: v.__invalid_header,
                children: (0, a.jsxs)(s.FormTitle, {
                    className: v.title,
                    children: [
                        p.intl.string(p.t.WTozwc),
                        (0, a.jsxs)('div', {
                            className: v.userCountPill,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    color: 'text-normal',
                                    variant: 'text-xs/medium',
                                    children: i.length
                                }),
                                (0, a.jsx)(s.FriendsIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: v.userCountIcon
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, a.jsx)(s.List, {
                className: v.__invalid_userList,
                sectionHeight: 0,
                rowHeight: 40,
                sections: [i.length],
                renderRow: u
            })
        ]
    });
}
