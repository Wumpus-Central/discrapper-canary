n.d(t, { Z: () => s }), n(953529);
var r = n(255367),
    i = n(73800),
    a = n(481060),
    l = n(693994),
    c = n(388032),
    o = n(383932);
let s = (e) => {
    let { onSubmit: t, disabled: n } = e,
        s = i.useCallback(async () => {
            await t({}), window.location.reload();
        }, [t]);
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-lg/bold',
                className: o.title,
                children: c.intl.string(l.default.v52itr)
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                className: o.description,
                children: c.intl.string(l.default['5am8Dw'])
            }),
            (0, r.jsx)(a.Kqy, {
                direction: 'horizontal',
                justify: 'end',
                children: (0, r.jsx)(a.zxk, {
                    onClick: s,
                    size: a.zxk.Sizes.MEDIUM,
                    color: a.zxk.Colors.BRAND,
                    look: a.zxk.Looks.FILLED,
                    disabled: n,
                    children: c.intl.string(l.default.GDsHl5)
                })
            })
        ]
    });
};
