n.d(i, {
    EK: () => d,
    G0: () => E,
    QC: () => I,
    dd: () => f
}),
    n(47120);
var t = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(454585),
    o = n(489813),
    u = n(388032),
    c = n(119866);
function d(e) {
    let { terms: i, channelId: n, className: r } = e;
    return (0, t.jsx)('div', {
        className: l()(c.termsFieldBody, r),
        children: i.map((e, i) =>
            (0, t.jsxs)(
                'div',
                {
                    className: c.termsRow,
                    children: [
                        (0, t.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(i + 1, '.')
                        }),
                        (0, t.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: c.termsRowContent,
                            children: s.Z.parseGuildVerificationFormRule(e, !0, { channelId: n })
                        })
                    ]
                },
                'term-'.concat(i)
            )
        )
    });
}
function E(e) {
    let { onChange: i, checked: n, disabled: r } = e;
    return (0, t.jsx)(a.XZJ, {
        size: 20,
        type: a.XZJ.Types.INVERTED,
        value: n,
        onChange: i,
        disabled: r,
        style: { borderWidth: 2 },
        className: c.checkbox,
        children: (0, t.jsx)(a.Text, {
            variant: 'text-sm/normal',
            children: u.intl.string(u.t['2EXfGB'])
        })
    });
}
function I(e) {
    let { formField: i } = e;
    return (0, t.jsx)(o.Ih, {
        icon: a.snC,
        text: u.intl.string(u.t['2xbmoK']),
        meetsRequirement: !!i.response
    });
}
let f = (e) => {
    let { channelId: i, formField: n, onChange: r } = e;
    return (0, t.jsxs)(o.hK, {
        title: u.intl.string(u.t.Q8OFNz),
        children: [
            (0, t.jsx)(d, {
                className: c.fieldBackground,
                terms: n.values,
                channelId: i
            }),
            (0, t.jsx)(E, {
                onChange: r,
                checked: n.response
            })
        ]
    });
};
