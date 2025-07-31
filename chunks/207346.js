n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var l = n(755721),
    a = n(481060),
    i = n(547972),
    o = n(703288),
    s = n(332325),
    c = n(388032),
    u = n(537796);
function d(e) {
    let { filterQuery: t, setFilterQuery: n, onClose: d, sortOrder: p, setSortOrder: m } = e;
    return (0, r.jsxs)(a.xBx, {
        className: u.root,
        separator: !1,
        children: [
            (0, r.jsx)(a.AlX, {
                size: 'xs',
                color: 'currentColor',
                className: u.icon
            }),
            (0, r.jsx)(a.X6q, {
                className: u.title,
                variant: 'heading-xxl/bold',
                children: c.intl.string(c.t.z2jK6e)
            }),
            (0, r.jsx)('div', {
                className: u.betaTag,
                children: (0, r.jsx)(o.Z, {})
            }),
            (0, r.jsx)(a.E1j, {
                autoFocus: !0,
                placeholder: c.intl.string(c.t['5h0QOD']),
                className: u.queryInput,
                query: t,
                onChange: n,
                onClear: () => n('')
            }),
            (0, r.jsx)(a.PhF, {
                placeholder: c.intl.string(c.t['0XtAW1']),
                className: u.sortInput,
                options: [
                    {
                        value: 'descending',
                        label: c.intl.string(c.t.SCsC5u)
                    },
                    {
                        value: 'ascending',
                        label: c.intl.string(c.t.fdx7aG)
                    }
                ],
                isSelected: (e) => e === p,
                select: m,
                serialize: (e) => e
            }),
            (0, r.jsx)(l.zx, {
                color: l.Tt.TRANSPARENT,
                size: l.zx.Sizes.NONE,
                className: u.settingsButton,
                look: l.zx.Looks.FILLED,
                onClick: () => {
                    ((0, i.Z)(s.Z.CLIPS), d());
                },
                children: (0, r.jsx)(a.ewm, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(a.olH, {
                className: u.button,
                onClick: d
            })
        ]
    });
}
