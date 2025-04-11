r.d(t, {
    QC: () => m,
    dd: () => h
}),
    r(388685);
var n = r(200651);
r(192379);
var i = r(120356),
    o = r.n(i),
    l = r(481060),
    s = r(454585),
    a = r(476770),
    c = r(388032),
    u = r(641198);
function d(e) {
    let { terms: t, channelId: r, className: i } = e;
    return (0, n.jsx)('div', {
        className: o()(u.termsFieldBody, i),
        children: t.map((e, t) =>
            (0, n.jsxs)(
                'div',
                {
                    className: u.termsRow,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: u.termsRowContent,
                            children: s.Z.parseGuildVerificationFormRule(e, !0, { channelId: r })
                        })
                    ]
                },
                'term-'.concat(t)
            )
        )
    });
}
function f(e) {
    let { onChange: t, checked: r, disabled: i } = e;
    return (0, n.jsx)(l.XZJ, {
        size: 24,
        type: l.XZJ.Types.INVERTED,
        value: r,
        onChange: t,
        disabled: i,
        style: { borderWidth: 2 },
        className: u.checkbox,
        children: (0, n.jsx)(l.Text, {
            variant: 'text-md/normal',
            children: c.NW.string(c.t['2EXfGB'])
        })
    });
}
function m(e) {
    let { formField: t } = e;
    return (0, n.jsx)(a.Ih, {
        icon: l.snC,
        text: c.NW.string(c.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let h = (e) => {
    let { channelId: t, formField: r, onChange: i } = e;
    return (0, n.jsxs)(a.hK, {
        title: c.NW.string(c.t.Q8OFNz),
        children: [
            (0, n.jsx)(d, {
                className: u.disabledFieldBackground,
                terms: r.values,
                channelId: t
            }),
            (0, n.jsx)(f, {
                onChange: i,
                checked: r.response
            })
        ]
    });
};
