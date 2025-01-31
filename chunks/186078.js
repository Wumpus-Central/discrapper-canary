n.d(i, {
    BO: () => d,
    QH: () => E,
    sp: () => I
});
var t = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(489813),
    u = n(707592),
    c = n(119866);
function d(e) {
    let { disabled: i, field: n, value: r, radioItemClassName: o, radioItemIconClassName: u, onChange: d } = e,
        { choices: E } = n,
        I = l.useMemo(
            () =>
                E.map((e, i) => ({
                    name: e,
                    value: i,
                    radioItemIconClassName: a()(c.multipleChoiceIcon, u)
                })),
            [E, u]
        );
    return (0, t.jsx)(s.FXm, {
        disabled: i,
        options: I,
        value: r,
        onChange: d,
        radioItemClassName: o,
        withTransparentBackground: !0
    });
}
function E(e) {
    let { formField: i } = e,
        n = null != i.response ? i.choices[i.response] : '';
    return (0, t.jsx)(o.hK, {
        title: i.label,
        children: (0, t.jsx)(u.Gi, {
            className: c.fieldBackground,
            value: n,
            disabled: !0
        })
    });
}
function I(e) {
    let { formField: i, onChange: n } = e;
    return (0, t.jsx)(o.hK, {
        title: i.label,
        children: (0, t.jsx)(d, {
            radioItemClassName: c.fieldBackground,
            field: i,
            value: i.response,
            onChange: n
        })
    });
}
