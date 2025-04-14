n.d(t, {
    EK: () => u,
    G0: () => m,
    QC: () => x,
    dd: () => h
}),
    n(388685);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(454585),
    o = n(489813),
    c = n(388032),
    d = n(667084);
function u(e) {
    let { terms: t, channelId: n, className: l } = e;
    return (0, r.jsx)('div', {
        className: i()(d.termsFieldBody, l),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                'div',
                {
                    className: d.termsRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: d.termsRowContent,
                            children: s.Z.parseGuildVerificationFormRule(e, !0, { channelId: n })
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
    return (0, r.jsx)(a.XZJ, {
        size: 24,
        type: a.XZJ.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: l,
        style: { borderWidth: 2 },
        className: d.checkbox,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-md/normal',
            children: c.NW.string(c.t['2EXfGB'])
        })
    });
}
function x(e) {
    let { formField: t } = e;
    return (0, r.jsx)(o.Ih, {
        icon: a.snC,
        text: c.NW.string(c.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let h = (e) => {
    let { channelId: t, formField: n, onChange: l } = e;
    return (0, r.jsxs)(o.hK, {
        title: c.NW.string(c.t.Q8OFNz),
        children: [
            (0, r.jsx)(u, {
                className: d.disabledFieldBackground,
                terms: n.values,
                channelId: t
            }),
            (0, r.jsx)(m, {
                onChange: l,
                checked: n.response
            })
        ]
    });
};
