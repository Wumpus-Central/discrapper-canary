n.d(t, { Z: () => u }), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(308083),
    c = n(130116);
function d(e) {
    let { playstyle: t, onUpdatePlaystyle: n } = e,
        s = (0, l.dQu)(l.TVs.colors.WHITE),
        d = i.useMemo(() => Object.values((0, o.f4)()), []);
    return (0, r.jsx)('div', {
        className: c.playstyleSelect,
        children: d.map((e) =>
            (0, r.jsxs)(
                l.P3F,
                {
                    className: a()(c.playstyleOption, c.selectableOption, { [c.selectedOption]: e.type === t }),
                    onClick: () => n(e.type),
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-xxl/medium',
                            children: e.emoji
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-md/medium',
                            className: c.playstyleTitle,
                            children: e.title
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: e.subtitle
                        }),
                        e.type === t &&
                            (0, r.jsx)(l.owK, {
                                size: 'md',
                                color: 'currentColor',
                                secondaryColor: s.hex(),
                                className: c.checkmark
                            })
                    ]
                },
                e.type
            )
        )
    });
}
let u = (e) => {
    let { title: t, description: n, onUpdatePlaystyle: i, playstyle: s, error: a } = e;
    return (0, r.jsxs)('div', {
        className: c.slideContent,
        children: [
            (0, r.jsx)(l.X6q, {
                variant: 'heading-xxl/medium',
                className: c.title,
                children: t
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: c.subtitle,
                children: n
            }),
            null != a &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'status-danger',
                    className: c.errorText,
                    children: a
                }),
            (0, r.jsx)(d, {
                playstyle: s,
                onUpdatePlaystyle: i
            })
        ]
    });
};
