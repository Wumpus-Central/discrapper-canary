n.d(t, {
    QC: () => _,
    dd: () => h
}),
    n(47120);
var o = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    s = n(454585),
    l = n(476770),
    c = n(388032),
    d = n(35761);
function u(e) {
    let { terms: t, channelId: n, className: r } = e;
    return (0, o.jsx)('div', {
        className: i()(d.termsFieldBody, r),
        children: t.map((e, t) =>
            (0, o.jsxs)(
                'div',
                {
                    className: d.termsRow,
                    children: [
                        (0, o.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, o.jsx)(a.Text, {
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
    let { onChange: t, checked: n, disabled: r } = e;
    return (0, o.jsx)(a.XZJ, {
        size: 24,
        type: a.XZJ.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: r,
        style: { borderWidth: 2 },
        className: d.checkbox,
        children: (0, o.jsx)(a.Text, {
            variant: 'text-md/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function _(e) {
    let { formField: t } = e;
    return (0, o.jsx)(l.Ih, {
        icon: a.snC,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let h = (e) => {
    let { channelId: t, formField: n, onChange: r } = e;
    return (0, o.jsxs)(l.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, o.jsx)(u, {
                className: d.disabledFieldBackground,
                terms: n.values,
                channelId: t
            }),
            (0, o.jsx)(m, {
                onChange: r,
                checked: n.response
            })
        ]
    });
};
