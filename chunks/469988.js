var i = n(200651);
n(192379);
var r = n(481060),
    l = n(388032),
    a = n(776597);
t.Z = (e) => {
    let { hasHub: t } = e;
    return (0, i.jsxs)('div', {
        className: a.container,
        children: [
            (0, i.jsx)('div', {
                className: a.iconContainer,
                children: (0, i.jsx)(r.HubIcon, {
                    size: 'md',
                    color: r.tokens.colors.WHITE.css
                })
            }),
            (0, i.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-lg/semibold',
                className: a.header,
                children: t ? l.intl.string(l.t.hsSHh4) : l.intl.string(l.t.Wf6iio)
            }),
            (0, i.jsx)(r.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: a.__invalid_description,
                children: t ? l.intl.string(l.t.FZ2J3d) : l.intl.string(l.t.TvHcv7)
            }),
            (0, i.jsx)('div', { className: a.gap }),
            (0, i.jsx)(r.Button, {
                size: r.Button.Sizes.LARGE,
                color: t ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
                onClick: () =>
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-sm/semibold',
                    className: a.addButton,
                    color: 'none',
                    children: t ? l.intl.string(l.t.IyjHDw) : l.intl.string(l.t['KU/aNz'])
                })
            })
        ]
    });
};
