n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(388032),
    a = n(647487);
let s = (e) => {
    let { hasHub: t } = e;
    return (0, i.jsxs)('div', {
        className: a.container,
        children: [
            (0, i.jsx)('div', {
                className: a.iconContainer,
                children: (0, i.jsx)(l.aVH, {
                    size: 'md',
                    color: l.TVs.colors.WHITE.css
                })
            }),
            (0, i.jsx)(l.Text, {
                color: 'header-primary',
                variant: 'text-lg/semibold',
                className: a.header,
                children: t ? r.intl.string(r.t.hsSHh4) : r.intl.string(r.t.Wf6iio)
            }),
            (0, i.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: a.__invalid_description,
                children: t ? r.intl.string(r.t.FZ2J3d) : r.intl.string(r.t.TvHcv7)
            }),
            (0, i.jsx)('div', { className: a.gap }),
            (0, i.jsx)(l.zxk, {
                size: l.zxk.Sizes.LARGE,
                color: t ? l.zxk.Colors.PRIMARY : l.zxk.Colors.GREEN,
                onClick: () =>
                    (0, l.ZDy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    className: a.addButton,
                    color: 'none',
                    children: t ? r.intl.string(r.t.IyjHDw) : r.intl.string(r.t['KU/aNz'])
                })
            })
        ]
    });
};
