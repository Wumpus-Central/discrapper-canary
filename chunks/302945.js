n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(422034),
    c = n(182294),
    u = n(388032),
    d = n(798984);
function _(e) {
    let { affinities: t, className: n } = e,
        a = (e) => (null != e.globalName ? e.globalName : e.username),
        _ = i.useMemo(
            () =>
                t.length > 1
                    ? u.intl.formatToPlainString(u.t.HaVk0d, {
                          username: a(t[0]),
                          numFriends: t.length - 1
                      })
                    : '',
            [t]
        );
    if (t.length <= 1) return null;
    let f = t.map((e, n) =>
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
        className: o()(d.container, n),
        children: [
            (0, r.jsx)('div', {
                className: d.iconContainer,
                children: f
            }),
            (0, r.jsx)('div', {
                className: d.textContainer,
                children: (0, r.jsx)(s.xv, {
                    variant: 'text-sm/medium',
                    children: _
                })
            })
        ]
    });
}
