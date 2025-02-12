t.d(n, {
    QC: () => _,
    dd: () => h
}),
    t(47120);
var o = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(481060),
    a = t(454585),
    l = t(476770),
    c = t(388032),
    d = t(35761);
function u(e) {
    let { terms: n, channelId: t, className: r } = e;
    return (0, o.jsx)('div', {
        className: i()(d.termsFieldBody, r),
        children: n.map((e, n) =>
            (0, o.jsxs)(
                'div',
                {
                    className: d.termsRow,
                    children: [
                        (0, o.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(n + 1, '.')
                        }),
                        (0, o.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: d.termsRowContent,
                            children: a.Z.parseGuildVerificationFormRule(e, !0, { channelId: t })
                        })
                    ]
                },
                'term-'.concat(n)
            )
        )
    });
}
function m(e) {
    let { onChange: n, checked: t, disabled: r } = e;
    return (0, o.jsx)(s.XZJ, {
        size: 24,
        type: s.XZJ.Types.INVERTED,
        value: t,
        onChange: n,
        disabled: r,
        style: { borderWidth: 2 },
        className: d.checkbox,
        children: (0, o.jsx)(s.Text, {
            variant: 'text-md/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function _(e) {
    let { formField: n } = e;
    return (0, o.jsx)(l.Ih, {
        icon: s.snC,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!n.response
    });
}
let h = (e) => {
    let { channelId: n, formField: t, onChange: r } = e;
    return (0, o.jsxs)(l.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, o.jsx)(u, {
                className: d.disabledFieldBackground,
                terms: t.values,
                channelId: n
            }),
            (0, o.jsx)(m, {
                onChange: r,
                checked: t.response
            })
        ]
    });
};
