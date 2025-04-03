r.d(t, { Z: () => u });
var s = r(200651),
    a = r(192379),
    i = r(120356),
    n = r.n(i),
    c = r(481060),
    l = r(450269),
    o = r(388032),
    d = r(878003);
let u = (e) => {
    let { headerId: t, guild: r, onAgreedChange: i } = e,
        { rules: u, rulesAccepted: m } = (0, l.V)(r.id);
    return (
        a.useEffect(() => {
            i(m);
        }, [i, m]),
        (0, s.jsxs)('div', {
            className: d.container,
            children: [
                (0, s.jsxs)('div', {
                    className: d.content,
                    children: [
                        (0, s.jsx)('div', { className: n()(d.stepImage, d.checkImage) }),
                        (0, s.jsx)(c.X6q, {
                            variant: 'heading-xl/semibold',
                            className: d.header,
                            id: t,
                            children: o.NW.string(o.t.Q8OFNz)
                        }),
                        (0, s.jsx)(c.Text, {
                            color: 'none',
                            variant: 'text-md/normal',
                            className: d.headerCaption,
                            children: o.NW.string(o.t['20piMT'])
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: d.form,
                    children: [
                        (0, s.jsx)(c.vwX, {
                            required: !0,
                            children: o.NW.string(o.t.HsM7a2)
                        }),
                        u.map((e) =>
                            (0, s.jsx)(
                                'div',
                                {
                                    className: d.checkboxWrapper,
                                    children: (0, s.jsxs)(c.XZJ, {
                                        type: c.XZJ.Types.ROW,
                                        value: e.checked,
                                        align: c.XZJ.Aligns.TOP,
                                        onChange: e.onCheck,
                                        children: [
                                            (0, s.jsx)(c.Text, {
                                                variant: 'text-md/semibold',
                                                className: d.checkboxTitle,
                                                children: e.title
                                            }),
                                            (0, s.jsx)(c.Text, {
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
