n.d(t, {
    BO: () => u,
    QH: () => m,
    sp: () => x
});
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(481060),
    o = n(489813),
    c = n(707592),
    d = n(667084);
function u(e) {
    let { disabled: t, field: n, value: a, radioItemClassName: o, radioItemIconClassName: c, onChange: u } = e,
        { choices: m } = n,
        x = l.useMemo(
            () =>
                m.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: i()(d.multipleChoiceIcon, c)
                })),
            [m, c]
        );
    return (0, r.jsx)(s.FXm, {
        disabled: t,
        options: x,
        value: a,
        onChange: u,
        radioItemClassName: o,
        withTransparentBackground: !0
    });
}
function m(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : '';
    return (0, r.jsx)(o.hK, {
        title: t.label,
        children: (0, r.jsx)(c.Gi, {
            className: d.fieldBackground,
            value: n,
            disabled: !0
        })
    });
}
function x(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(o.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            radioItemClassName: d.fieldBackground,
            field: t,
            value: t.response,
            onChange: n
        })
    });
}
