n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(793030),
    l = n(422034),
    u = n(182294),
    c = n(388032),
    d = n(865048);
function f(e) {
    let { affinities: t, className: n } = e,
        a = (e) => (null != e.globalName ? e.globalName : e.username),
        f = r.useMemo(
            () =>
                t.length > 1
                    ? c.intl.formatToPlainString(c.t.HaVk0d, {
                          username: a(t[0]),
                          numFriends: t.length - 1
                      })
                    : '',
            [t]
        );
    if (t.length <= 1) return null;
    let _ = t.map((e, n) =>
        (0, i.jsx)(
            l.O,
            {
                affinity: e,
                applyMask: n !== t.length - 1,
                size: u.EF.SIZE_20
            },
            e.id
        )
    );
    return (0, i.jsxs)('div', {
        className: s()(d.container, n),
        children: [
            (0, i.jsx)('div', {
                className: d.iconContainer,
                children: _
            }),
            (0, i.jsx)('div', {
                className: d.textContainer,
                children: (0, i.jsx)(o.xv, {
                    variant: 'text-sm/medium',
                    children: f
                })
            })
        ]
    });
}
