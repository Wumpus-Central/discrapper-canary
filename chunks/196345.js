t.d(n, {
    EK: function () {
        return d;
    },
    G0: function () {
        return f;
    },
    QC: function () {
        return E;
    },
    dd: function () {
        return I;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    u = t(481060),
    o = t(454585),
    a = t(489813),
    s = t(388032),
    c = t(119866);
function d(e) {
    let { terms: n, channelId: t, className: r } = e;
    return (0, i.jsx)('div', {
        className: l()(c.termsFieldBody, r),
        children: n.map((e, n) =>
            (0, i.jsxs)(
                'div',
                {
                    className: c.termsRow,
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(n + 1, '.')
                        }),
                        (0, i.jsx)(u.Text, {
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
function f(e) {
    let { onChange: n, checked: t, disabled: r } = e;
    return (0, i.jsx)(u.Checkbox, {
        size: 20,
        type: u.Checkbox.Types.INVERTED,
        value: t,
        onChange: n,
        disabled: r,
        style: { borderWidth: 2 },
        className: c.checkbox,
        children: (0, i.jsx)(u.Text, {
            variant: 'text-sm/normal',
            children: s.intl.string(s.t['2EXfGB'])
        })
    });
}
function E(e) {
    let { formField: n } = e;
    return (0, i.jsx)(a.Ih, {
        icon: u.BookCheckIcon,
        text: s.intl.string(s.t['2xbmoK']),
        meetsRequirement: !!n.response
    });
}
let I = (e) => {
    let { channelId: n, formField: t, onChange: r } = e;
    return (0, i.jsxs)(a.hK, {
        title: s.intl.string(s.t.Q8OFNz),
        children: [
            (0, i.jsx)(d, {
                className: c.fieldBackground,
                terms: t.values,
                channelId: n
            }),
            (0, i.jsx)(f, {
                onChange: r,
                checked: t.response
            })
        ]
    });
};
