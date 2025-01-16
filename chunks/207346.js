n.d(t, {
    Z: function () {
        return d;
    }
});
var l = n(200651);
n(192379);
var a = n(481060),
    i = n(547972),
    o = n(703288),
    s = n(332325),
    r = n(388032),
    c = n(173855);
function d(e) {
    let { filterQuery: t, setFilterQuery: n, onClose: d, sortOrder: u, setSortOrder: m } = e;
    return (0, l.jsxs)(a.ModalHeader, {
        className: c.root,
        separator: !1,
        children: [
            (0, l.jsx)(a.ClipsIcon, {
                size: 'xs',
                color: 'currentColor',
                className: c.icon
            }),
            (0, l.jsx)(a.Heading, {
                className: c.title,
                variant: 'heading-xxl/bold',
                children: r.intl.string(r.t.z2jK6e)
            }),
            (0, l.jsx)('div', {
                className: c.betaTag,
                children: (0, l.jsx)(o.Z, {})
            }),
            (0, l.jsx)(a.SearchBar, {
                autoFocus: !0,
                size: a.SearchBar.Sizes.MEDIUM,
                placeholder: r.intl.string(r.t['5h0QOD']),
                className: c.queryInput,
                query: t,
                onChange: n,
                onClear: () => n('')
            }),
            (0, l.jsx)(a.Select, {
                placeholder: r.intl.string(r.t['0XtAW1']),
                className: c.sortInput,
                options: [
                    {
                        value: 'descending',
                        label: r.intl.string(r.t.SCsC5u)
                    },
                    {
                        value: 'ascending',
                        label: r.intl.string(r.t.fdx7aG)
                    }
                ],
                isSelected: (e) => e === u,
                select: m,
                serialize: (e) => e
            }),
            (0, l.jsx)(a.Button, {
                color: a.ButtonColors.TRANSPARENT,
                size: a.Button.Sizes.NONE,
                className: c.settingsButton,
                look: a.Button.Looks.FILLED,
                onClick: () => {
                    (0, i.Z)(s.Z.CLIPS), d();
                },
                children: (0, l.jsx)(a.SettingsIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsx)(a.ModalCloseButton, {
                className: c.button,
                onClick: d
            })
        ]
    });
}
