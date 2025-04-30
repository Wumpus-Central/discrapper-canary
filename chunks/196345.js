n.d(t, {
    EK: () => d,
    G0: () => C,
    QC: () => m,
    dd: () => b
}),
    n(388685);
var r = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    i = n(481060),
    a = n(454585),
    s = n(489813),
    c = n(388032),
    u = n(667084);
function d(e) {
    let { terms: t, channelId: n, className: l } = e;
    return (0, r.jsx)('div', {
        className: o()(u.termsFieldBody, l),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                'div',
                {
                    className: u.termsRow,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            className: u.termsRowContent,
                            children: a.Z.parseGuildVerificationFormRule(e, !0, { channelId: n })
                        })
                    ]
                },
                'term-'.concat(t)
            )
        )
    });
}
function C(e) {
    let { onChange: t, checked: n, disabled: l } = e;
    return (0, r.jsx)(i.XZJ, {
        size: 24,
        type: i.XZJ.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: l,
        style: { borderWidth: 2 },
        className: u.checkbox,
        children: (0, r.jsx)(i.Text, {
            variant: 'text-md/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function m(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.Ih, {
        icon: i.snC,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let b = (e) => {
    let { channelId: t, formField: n, onChange: l } = e;
    return (0, r.jsxs)(s.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, r.jsx)(d, {
                className: u.disabledFieldBackground,
                terms: n.values,
                channelId: t
            }),
            (0, r.jsx)(C, {
                onChange: l,
                checked: n.response
            })
        ]
    });
};
