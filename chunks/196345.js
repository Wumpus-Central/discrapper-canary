n.d(t, {
    EK: () => d,
    G0: () => u
}),
    n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(454585);
n(489813);
var o = n(388032),
    c = n(667084);
function d(e) {
    let { terms: t, channelId: n, className: i } = e;
    return (0, r.jsx)('div', {
        className: s()(c.termsFieldBody, i),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                'div',
                {
                    className: c.termsRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: c.termsRowContent,
                            children: l.Z.parseGuildVerificationFormRule(e, !0, { channelId: n })
                        })
                    ]
                },
                'term-'.concat(t)
            )
        )
    });
}
function u(e) {
    let { onChange: t, checked: n, disabled: i } = e;
    return (0, r.jsx)(a.XZJ, {
        size: 20,
        type: a.XZJ.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: i,
        style: { borderWidth: 2 },
        className: c.checkbox,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-sm/normal',
            children: o.NW.string(o.t['2EXfGB'])
        })
    });
}
