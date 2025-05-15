n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(19391),
    l = n(600243),
    c = n(875425),
    u = n(388032),
    d = n(701526);
function f(e) {
    let { label: t, onClick: n } = e,
        i = (0, s.Z)(t);
    return (0, r.jsx)(a.DY3, {
        text: i,
        children: (0, r.jsx)(a.P3F, {
            onClick: n,
            className: d.toolbarItem,
            'aria-label': u.intl.formatToPlainString(u.t.mDVlTk, { label: i }),
            children: (0, r.jsx)(l.Z, {
                label: t,
                size: 'xxs',
                className: d.icon
            })
        })
    });
}
function _(e) {
    let { onSelect: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(d.toolbar, n),
        children: c.Ub.map((e) =>
            (0, r.jsx)(
                f,
                {
                    label: e.value,
                    onClick: () => t(e.value)
                },
                e.value
            )
        )
    });
}
