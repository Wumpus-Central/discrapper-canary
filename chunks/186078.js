n.d(t, {
    BO: () => d,
    QH: () => m,
    sp: () => f
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(489813),
    c = n(707592),
    u = n(667084);
function d(e) {
    let { disabled: t, field: n, value: l, radioItemClassName: a, radioItemIconClassName: c, onChange: d } = e,
        { choices: m } = n,
        f = i.useMemo(
            () =>
                m.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: o()(u.multipleChoiceIcon, c),
                    radioBarClassName: u.multipleChoiceItem
                })),
            [m, c]
        );
    return (0, r.jsx)(s.FXm, {
        radioPosition: 'right',
        disabled: t,
        options: f,
        value: l,
        onChange: d,
        radioItemClassName: a,
        itemTitleClassName: u.multipleChoiceTitle
    });
}
function m(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : '';
    return (0, r.jsx)(a.CA, {
        title: t.label,
        children: (0, r.jsx)(c.Gi, {
            className: u.disabledFieldBackground,
            value: n,
            disabled: !0
        })
    });
}
function f(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(a.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            field: t,
            value: t.response,
            onChange: n
        })
    });
}
