n.d(t, {
    EK: () => u,
    G0: () => m,
    QC: () => x,
    dd: () => h
}),
    n(47120);
var a = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    l = n(481060),
    o = n(454585),
    s = n(489813),
    c = n(388032),
    d = n(260018);
function u(e) {
    let { terms: t, channelId: n, className: i } = e;
    return (0, a.jsx)('div', {
        className: r()(d.termsFieldBody, i),
        children: t.map((e, t) =>
            (0, a.jsxs)(
                'div',
                {
                    className: d.termsRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: d.termsRowContent,
                            children: o.Z.parseGuildVerificationFormRule(e, !0, { channelId: n })
                        })
                    ]
                },
                'term-'.concat(t)
            )
        )
    });
}
function m(e) {
    let { onChange: t, checked: n, disabled: i } = e;
    return (0, a.jsx)(l.XZJ, {
        size: 20,
        type: l.XZJ.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: i,
        style: { borderWidth: 2 },
        className: d.checkbox,
        children: (0, a.jsx)(l.Text, {
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function x(e) {
    let { formField: t } = e;
    return (0, a.jsx)(s.Ih, {
        icon: l.snC,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let h = (e) => {
    let { channelId: t, formField: n, onChange: i } = e;
    return (0, a.jsxs)(s.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, a.jsx)(u, {
                className: d.fieldBackground,
                terms: n.values,
                channelId: t
            }),
            (0, a.jsx)(m, {
                onChange: i,
                checked: n.response
            })
        ]
    });
};
