n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(481060),
    a = n(547972),
    i = n(703288),
    o = n(332325),
    s = n(388032),
    c = n(537796);
function u(e) {
    let { filterQuery: t, setFilterQuery: n, onClose: u, sortOrder: d, setSortOrder: p } = e;
    return (0, r.jsxs)(l.xBx, {
        className: c.root,
        separator: !1,
        children: [
            (0, r.jsx)(l.AlX, {
                size: 'xs',
                color: 'currentColor',
                className: c.icon
            }),
            (0, r.jsx)(l.X6q, {
                className: c.title,
                variant: 'heading-xxl/bold',
                children: s.NW.string(s.t.z2jK6e)
            }),
            (0, r.jsx)('div', {
                className: c.betaTag,
                children: (0, r.jsx)(i.Z, {})
            }),
            (0, r.jsx)(l.E1j, {
                autoFocus: !0,
                size: l.E1j.Sizes.MEDIUM,
                placeholder: s.NW.string(s.t['5h0QOD']),
                className: c.queryInput,
                query: t,
                onChange: n,
                onClear: () => n('')
            }),
            (0, r.jsx)(l.PhF, {
                placeholder: s.NW.string(s.t['0XtAW1']),
                className: c.sortInput,
                options: [
                    {
                        value: 'descending',
                        label: s.NW.string(s.t.SCsC5u)
                    },
                    {
                        value: 'ascending',
                        label: s.NW.string(s.t.fdx7aG)
                    }
                ],
                isSelected: (e) => e === d,
                select: p,
                serialize: (e) => e
            }),
            (0, r.jsx)(l.zxk, {
                color: l.Ttl.TRANSPARENT,
                size: l.zxk.Sizes.NONE,
                className: c.settingsButton,
                look: l.zxk.Looks.FILLED,
                onClick: () => {
                    (0, a.Z)(o.Z.CLIPS), u();
                },
                children: (0, r.jsx)(l.ewm, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(l.olH, {
                className: c.button,
                onClick: u
            })
        ]
    });
}
