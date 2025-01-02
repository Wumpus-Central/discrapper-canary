t.d(n, {
    EK: function () {
        return d;
    },
    G0: function () {
        return I;
    },
    QC: function () {
        return E;
    },
    dd: function () {
        return m;
    }
}),
    t(47120);
var r = t(200651);
t(192379);
var i = t(120356),
    l = t.n(i),
    u = t(481060),
    o = t(454585),
    s = t(489813),
    a = t(388032),
    c = t(119866);
function d(e) {
    let { terms: n, channelId: t, className: i } = e;
    return (0, r.jsx)('div', {
        className: l()(c.termsFieldBody, i),
        children: n.map((e, n) =>
            (0, r.jsxs)(
                'div',
                {
                    className: c.termsRow,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(n + 1, '.')
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            className: c.termsRowContent,
                            children: o.Z.parseGuildVerificationFormRule(e, !0, { channelId: t })
                        })
                    ]
                },
                'term-'.concat(n)
            )
        )
    });
}
function I(e) {
    let { onChange: n, checked: t, disabled: i } = e;
    return (0, r.jsx)(u.Checkbox, {
        size: 20,
        type: u.Checkbox.Types.INVERTED,
        value: t,
        onChange: n,
        disabled: i,
        style: { borderWidth: 2 },
        className: c.checkbox,
        children: (0, r.jsx)(u.Text, {
            variant: 'text-sm/normal',
            children: a.intl.string(a.t['2EXfGB'])
        })
    });
}
function E(e) {
    let { formField: n } = e;
    return (0, r.jsx)(s.Ih, {
        icon: u.BookCheckIcon,
        text: a.intl.string(a.t['2xbmoK']),
        meetsRequirement: !!n.response
    });
}
let m = (e) => {
    let { channelId: n, formField: t, onChange: i } = e;
    return (0, r.jsxs)(s.hK, {
        title: a.intl.string(a.t.Q8OFNz),
        children: [
            (0, r.jsx)(d, {
                className: c.fieldBackground,
                terms: t.values,
                channelId: n
            }),
            (0, r.jsx)(I, {
                onChange: i,
                checked: t.response
            })
        ]
    });
};
