i.d(n, {
    EK: function () {
        return d;
    },
    G0: function () {
        return g;
    },
    QC: function () {
        return E;
    },
    dd: function () {
        return I;
    }
}),
    i(47120);
var e = i(200651);
i(192379);
var r = i(120356),
    l = i.n(r),
    s = i(481060),
    u = i(454585),
    o = i(489813),
    a = i(388032),
    c = i(119866);
function d(t) {
    let { terms: n, channelId: i, className: r } = t;
    return (0, e.jsx)('div', {
        className: l()(c.termsFieldBody, r),
        children: n.map((t, n) =>
            (0, e.jsxs)(
                'div',
                {
                    className: c.termsRow,
                    children: [
                        (0, e.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(n + 1, '.')
                        }),
                        (0, e.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: c.termsRowContent,
                            children: u.Z.parseGuildVerificationFormRule(t, !0, { channelId: i })
                        })
                    ]
                },
                'term-'.concat(n)
            )
        )
    });
}
function g(t) {
    let { onChange: n, checked: i, disabled: r } = t;
    return (0, e.jsx)(s.Checkbox, {
        size: 20,
        type: s.Checkbox.Types.INVERTED,
        value: i,
        onChange: n,
        disabled: r,
        style: { borderWidth: 2 },
        className: c.checkbox,
        children: (0, e.jsx)(s.Text, {
            variant: 'text-sm/normal',
            children: a.intl.string(a.t['2EXfGB'])
        })
    });
}
function E(t) {
    let { formField: n } = t;
    return (0, e.jsx)(o.Ih, {
        icon: s.BookCheckIcon,
        text: a.intl.string(a.t['2xbmoK']),
        meetsRequirement: !!n.response
    });
}
let I = (t) => {
    let { channelId: n, formField: i, onChange: r } = t;
    return (0, e.jsxs)(o.hK, {
        title: a.intl.string(a.t.Q8OFNz),
        children: [
            (0, e.jsx)(d, {
                className: c.fieldBackground,
                terms: i.values,
                channelId: n
            }),
            (0, e.jsx)(g, {
                onChange: r,
                checked: i.response
            })
        ]
    });
};
