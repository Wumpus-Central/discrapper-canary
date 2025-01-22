r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(793030),
    u = r(422034),
    c = r(182294),
    d = r(388032),
    f = r(865048);
function p(e) {
    let { affinities: n, className: r } = e,
        o = (e) => (null != e.globalName ? e.globalName : e.username),
        p = a.useMemo(
            () =>
                n.length > 1
                    ? d.intl.formatToPlainString(d.t.HaVk0d, {
                          username: o(n[0]),
                          numFriends: n.length - 1
                      })
                    : '',
            [n]
        );
    if (n.length <= 1) return null;
    let h = n.map((e, r) =>
        (0, i.jsx)(
            u.O,
            {
                affinity: e,
                applyMask: r !== n.length - 1,
                size: c.EF.SIZE_20
            },
            e.id
        )
    );
    return (0, i.jsxs)('div', {
        className: s()(f.container, r),
        children: [
            (0, i.jsx)('div', {
                className: f.iconContainer,
                children: h
            }),
            (0, i.jsx)('div', {
                className: f.textContainer,
                children: (0, i.jsx)(l.xv, {
                    variant: 'text-sm/medium',
                    children: p
                })
            })
        ]
    });
}
