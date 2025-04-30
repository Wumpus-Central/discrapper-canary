n.d(t, {
    BO: () => d,
    QH: () => C,
    sp: () => m
});
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(489813),
    c = n(707592),
    u = n(667084);
function d(e) {
    let { disabled: t, field: n, value: o, radioItemClassName: s, radioItemIconClassName: c, onChange: d } = e,
        { choices: C } = n,
        m = l.useMemo(
            () =>
                C.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: i()(u.multipleChoiceIcon, c),
                    radioBarClassName: u.multipleChoiceItem
                })),
            [C, c]
        );
    return (0, r.jsx)(a.FXm, {
        radioPosition: 'right',
        disabled: t,
        options: m,
        value: o,
        onChange: d,
        radioItemClassName: s,
        itemTitleClassName: u.multipleChoiceTitle
    });
}
function C(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : '';
    return (0, r.jsx)(s.CA, {
        title: t.label,
        children: (0, r.jsx)(c.Gi, {
            className: u.disabledFieldBackground,
            value: n,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            field: t,
            value: t.response,
            onChange: n
        })
    });
}
