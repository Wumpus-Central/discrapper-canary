var s = i(200651),
    n = i(192379),
    r = i(120356),
    a = i.n(r),
    l = i(481060),
    o = i(450269),
    d = i(388032),
    c = i(331592);
t.Z = (e) => {
    let { headerId: t, guild: i, onAgreedChange: r } = e,
        { rules: u, rulesAccepted: m } = (0, o.V)(i.id);
    return (
        n.useEffect(() => {
            r(m);
        }, [r, m]),
        (0, s.jsxs)('div', {
            className: c.container,
            children: [
                (0, s.jsxs)('div', {
                    className: c.content,
                    children: [
                        (0, s.jsx)('div', { className: a()(c.stepImage, c.checkImage) }),
                        (0, s.jsx)(l.Heading, {
                            variant: 'heading-xl/semibold',
                            className: c.header,
                            id: t,
                            children: d.intl.string(d.t.Q8OFNz)
                        }),
                        (0, s.jsx)(l.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: c.headerCaption,
                            children: d.intl.string(d.t['20piMT'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: c.form,
                    children: [
                        (0, s.jsx)(l.FormTitle, {
                            required: !0,
                            children: d.intl.string(d.t.HsM7a2)
                        }),
                        u.map((e) =>
                            (0, s.jsx)(
                                'div',
                                {
                                    className: c.checkboxWrapper,
                                    children: (0, s.jsxs)(l.Checkbox, {
                                        type: l.Checkbox.Types.ROW,
                                        value: e.checked,
                                        align: l.Checkbox.Aligns.TOP,
                                        onChange: e.onCheck,
                                        children: [
                                            (0, s.jsx)(l.Text, {
                                                variant: 'text-md/semibold',
                                                className: c.checkboxTitle,
                                                children: e.title
                                            }),
                                            (0, s.jsx)(l.Text, {
                                                variant: 'text-sm/normal',
                                                children: e.body
                                            })
                                        ]
                                    })
                                },
                                e.key
                            )
                        )
                    ]
                })
            ]
        })
    );
};
