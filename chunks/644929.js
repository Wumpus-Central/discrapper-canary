n.d(t, {
    QC: () => x,
    dd: () => f
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    o = n(454585),
    a = n(476770),
    u = n(388032),
    c = n(484979);
function d(e) {
    let { terms: t, channelId: n, className: l } = e;
    return (0, i.jsx)('div', {
        className: r()(c.termsFieldBody, l),
        children: t.map((e, t) =>
            (0, i.jsxs)(
                'div',
                {
                    className: c.termsRow,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: c.termsRowContent,
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
    let { onChange: t, checked: n, disabled: l } = e;
    return (0, i.jsx)(s.XZJ, {
        size: 24,
        type: s.XZJ.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: l,
        style: { borderWidth: 2 },
        className: c.checkbox,
        children: (0, i.jsx)(s.Text, {
            variant: 'text-md/normal',
            children: u.intl.string(u.t['2EXfGB'])
        })
    });
}
function x(e) {
    let { formField: t } = e;
    return (0, i.jsx)(a.Ih, {
        icon: s.snC,
        text: u.intl.string(u.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let f = (e) => {
    let { channelId: t, formField: n, onChange: l } = e;
    return (0, i.jsxs)(a.hK, {
        title: u.intl.string(u.t.Q8OFNz),
        children: [
            (0, i.jsx)(d, {
                className: c.disabledFieldBackground,
                terms: n.values,
                channelId: t
            }),
            (0, i.jsx)(m, {
                onChange: l,
                checked: n.response
            })
        ]
    });
};
