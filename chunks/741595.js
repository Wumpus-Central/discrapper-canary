var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(308083),
    c = n(240938);
function d(e) {
    let { playstyle: t, onUpdatePlaystyle: n } = e,
        l = (0, s.useToken)(s.tokens.colors.WHITE),
        d = r.useMemo(() => Object.values((0, o.f4)()), []);
    return (0, i.jsx)('div', {
        className: c.playstyleSelect,
        children: d.map((e) =>
            (0, i.jsxs)(
                s.Clickable,
                {
                    className: a()(c.playstyleOption, c.selectableOption, { [c.selectedOption]: e.type === t }),
                    onClick: () => n(e.type),
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-xxl/medium',
                            children: e.emoji
                        }),
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-md/medium',
                            className: c.playstyleTitle,
                            children: e.title
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: e.subtitle
                        }),
                        e.type === t &&
                            (0, i.jsx)(s.CircleCheckIcon, {
                                size: 'md',
                                color: 'currentColor',
                                secondaryColor: l.hex(),
                                className: c.checkmark
                            })
                    ]
                },
                e.type
            )
        )
    });
}
t.Z = (e) => {
    let { title: t, description: n, onUpdatePlaystyle: r, playstyle: l, error: a } = e;
    return (0, i.jsxs)('div', {
        className: c.slideContent,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xxl/medium',
                className: c.title,
                children: t
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: c.subtitle,
                children: n
            }),
            null != a &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: c.errorText,
                    children: a
                }),
            (0, i.jsx)(d, {
                playstyle: l,
                onUpdatePlaystyle: r
            })
        ]
    });
};
