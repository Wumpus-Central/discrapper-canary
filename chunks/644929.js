n.d(t, {
    QC: () => p,
    dd: () => f
}),
    n(47120);
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(454585),
    s = n(476770),
    c = n(388032),
    d = n(641198);
function u(e) {
    let { terms: t, channelId: n, className: a } = e;
    return (0, r.jsx)('div', {
        className: i()(d.termsFieldBody, a),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                'div',
                {
                    className: d.termsRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: d.termsRowContent,
                            children: l.Z.parseGuildVerificationFormRule(e, !0, { channelId: n })
                        })
                    ]
                },
                'term-'.concat(t)
            )
        )
    });
}
function m(e) {
    let { onChange: t, checked: n, disabled: a } = e;
    return (0, r.jsx)(o.XZJ, {
        size: 24,
        type: o.XZJ.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: a,
        style: { borderWidth: 2 },
        className: d.checkbox,
        children: (0, r.jsx)(o.Text, {
            variant: 'text-md/normal',
            children: c.NW.string(c.t['2EXfGB'])
        })
    });
}
function p(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.Ih, {
        icon: o.snC,
        text: c.NW.string(c.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let f = (e) => {
    let { channelId: t, formField: n, onChange: a } = e;
    return (0, r.jsxs)(s.hK, {
        title: c.NW.string(c.t.Q8OFNz),
        children: [
            (0, r.jsx)(u, {
                className: d.disabledFieldBackground,
                terms: n.values,
                channelId: t
            }),
            (0, r.jsx)(m, {
                onChange: a,
                checked: n.response
            })
        ]
    });
};
