t.d(n, {
    QC: function () {
        return m;
    },
    dd: function () {
        return h;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    s = t(481060),
    o = t(454585),
    u = t(476770),
    c = t(388032),
    a = t(484979);
function d(e) {
    let { terms: n, channelId: t, className: r } = e;
    return (0, i.jsx)('div', {
        className: l()(a.termsFieldBody, r),
        children: n.map((e, n) =>
            (0, i.jsxs)(
                'div',
                {
                    className: a.termsRow,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(n + 1, '.')
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: a.termsRowContent,
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
    return (0, i.jsx)(s.Checkbox, {
        size: 20,
        type: s.Checkbox.Types.INVERTED,
        value: t,
        onChange: n,
        disabled: r,
        style: { borderWidth: 2 },
        className: a.checkbox,
        children: (0, i.jsx)(s.Text, {
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function m(e) {
    let { formField: n } = e;
    return (0, i.jsx)(u.Ih, {
        icon: s.BookCheckIcon,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!n.response
    });
}
let h = (e) => {
    let { channelId: n, formField: t, onChange: r } = e;
    return (0, i.jsxs)(u.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, i.jsx)(d, {
                className: a.disabledFieldBackground,
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
