n.d(t, { Z: () => c }), n(953529);
var a = n(255367),
    r = n(73800),
    l = n(481060),
    i = n(693994),
    s = n(388032),
    o = n(383932);
let c = (e) => {
    let { onSubmit: t, disabled: n } = e,
        c = r.useCallback(async () => {
            await t({}), window.location.reload();
        }, [t]);
    return (0, a.jsxs)('div', {
        className: o.container,
        children: [
            (0, a.jsx)(l.X6q, {
                variant: 'heading-lg/bold',
                className: o.title,
                children: s.intl.string(i.default.v52itr)
            }),
            (0, a.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                className: o.description,
                children: s.intl.string(i.default['5am8Dw'])
            }),
            (0, a.jsx)(l.Kqy, {
                direction: 'horizontal',
                justify: 'end',
                children: (0, a.jsx)(l.zxk, {
                    onClick: c,
                    size: l.zxk.Sizes.MEDIUM,
                    color: l.zxk.Colors.BRAND,
                    look: l.zxk.Looks.FILLED,
                    disabled: n,
                    children: s.intl.string(i.default.GDsHl5)
                })
            })
        ]
    });
};
