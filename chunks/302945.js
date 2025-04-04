n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(422034),
    c = n(182294),
    u = n(388032),
    d = n(798984);
function f(e) {
    let { affinities: t, className: n } = e,
        o = (e) => (null != e.globalName ? e.globalName : e.username),
        f = i.useMemo(
            () =>
                t.length > 1
                    ? u.NW.formatToPlainString(u.t.HaVk0d, {
                          username: o(t[0]),
                          numFriends: t.length - 1
                      })
                    : '',
            [t]
        );
    if (t.length <= 1) return null;
    let _ = t.map((e, n) =>
        (0, r.jsx)(
            l.O,
            {
                affinity: e,
                applyMask: n !== t.length - 1,
                size: c.EF.SIZE_20
            },
            e.id
        )
    );
    return (0, r.jsxs)('div', {
        className: a()(d.container, n),
        children: [
            (0, r.jsx)('div', {
                className: d.iconContainer,
                children: _
            }),
            (0, r.jsx)('div', {
                className: d.textContainer,
                children: (0, r.jsx)(s.xv, {
                    variant: 'text-sm/medium',
                    children: f
                })
            })
        ]
    });
}
