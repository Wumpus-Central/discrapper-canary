i.d(t, { Z: () => u });
var s = i(200651),
    a = i(192379),
    n = i(120356),
    r = i.n(n),
    l = i(481060),
    c = i(450269),
    d = i(388032),
    o = i(184330);
let u = (e) => {
    let { headerId: t, guild: i, onAgreedChange: n } = e,
        { rules: u, rulesAccepted: m } = (0, c.V)(i.id);
    return (
        a.useEffect(() => {
            n(m);
        }, [n, m]),
        (0, s.jsxs)('div', {
            className: o.container,
            children: [
                (0, s.jsxs)('div', {
                    className: o.content,
                    children: [
                        (0, s.jsx)('div', { className: r()(o.stepImage, o.checkImage) }),
                        (0, s.jsx)(l.X6q, {
                            variant: 'heading-xl/semibold',
                            className: o.header,
                            id: t,
                            children: d.intl.string(d.t.Q8OFNz)
                        }),
                        (0, s.jsx)(l.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: o.headerCaption,
                            children: d.intl.string(d.t['20piMT'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: o.form,
                    children: [
                        (0, s.jsx)(l.vwX, {
                            required: !0,
                            children: d.intl.string(d.t.HsM7a2)
                        }),
                        u.map((e) =>
                            (0, s.jsx)(
                                'div',
                                {
                                    className: o.checkboxWrapper,
                                    children: (0, s.jsxs)(l.XZJ, {
                                        type: l.XZJ.Types.ROW,
                                        value: e.checked,
                                        align: l.XZJ.Aligns.TOP,
                                        onChange: e.onCheck,
                                        children: [
                                            (0, s.jsx)(l.Text, {
                                                variant: 'text-md/semibold',
                                                className: o.checkboxTitle,
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
