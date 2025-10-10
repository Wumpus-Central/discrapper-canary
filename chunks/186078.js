n.d(t, {
    BO: () => d,
    QH: () => C,
    sp: () => m,
});
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    a = n(755721),
    s = n(489813),
    c = n(707592),
    u = n(624463);
function d(e) {
    let { disabled: t, field: n, value: i, radioItemClassName: s, radioItemIconClassName: c, onChange: d } = e,
        { choices: C } = n,
        m = l.useMemo(
            () =>
                C.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: o()(u.multipleChoiceIcon, c),
                    radioBarClassName: u.multipleChoiceItem,
                })),
            [C, c],
        );
    return (0, r.jsx)(a.Gu, {
        radioPosition: "right",
        disabled: t,
        options: m,
        value: i,
        onChange: d,
        radioItemClassName: s,
        itemTitleClassName: u.multipleChoiceTitle,
    });
}
function C(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : "";
    return (0, r.jsx)(s.CA, {
        title: t.label,
        children: (0, r.jsx)(c.Gi, {
            value: n,
            disabled: !0,
        }),
    });
}
function m(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            field: t,
            value: t.response,
            onChange: n,
        }),
    });
}
