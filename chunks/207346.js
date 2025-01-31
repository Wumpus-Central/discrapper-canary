l.d(t, { Z: () => d });
var a = l(200651);
l(192379);
var n = l(481060),
    i = l(547972),
    s = l(703288),
    r = l(332325),
    o = l(388032),
    c = l(173855);
function d(e) {
    let { filterQuery: t, setFilterQuery: l, onClose: d, sortOrder: u, setSortOrder: m } = e;
    return (0, a.jsxs)(n.xBx, {
        className: c.root,
        separator: !1,
        children: [
            (0, a.jsx)(n.AlX, {
                size: 'xs',
                color: 'currentColor',
                className: c.icon
            }),
            (0, a.jsx)(n.X6q, {
                className: c.title,
                variant: 'heading-xxl/bold',
                children: o.intl.string(o.t.z2jK6e)
            }),
            (0, a.jsx)('div', {
                className: c.betaTag,
                children: (0, a.jsx)(s.Z, {})
            }),
            (0, a.jsx)(n.E1j, {
                autoFocus: !0,
                size: n.E1j.Sizes.MEDIUM,
                placeholder: o.intl.string(o.t['5h0QOD']),
                className: c.queryInput,
                query: t,
                onChange: l,
                onClear: () => l('')
            }),
            (0, a.jsx)(n.PhF, {
                placeholder: o.intl.string(o.t['0XtAW1']),
                className: c.sortInput,
                options: [
                    {
                        value: 'descending',
                        label: o.intl.string(o.t.SCsC5u)
                    },
                    {
                        value: 'ascending',
                        label: o.intl.string(o.t.fdx7aG)
                    }
                ],
                isSelected: (e) => e === u,
                select: m,
                serialize: (e) => e
            }),
            (0, a.jsx)(n.zxk, {
                color: n.Ttl.TRANSPARENT,
                size: n.zxk.Sizes.NONE,
                className: c.settingsButton,
                look: n.zxk.Looks.FILLED,
                onClick: () => {
                    (0, i.Z)(r.Z.CLIPS), d();
                },
                children: (0, a.jsx)(n.ewm, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, a.jsx)(n.olH, {
                className: c.button,
                onClick: d
            })
        ]
    });
}
