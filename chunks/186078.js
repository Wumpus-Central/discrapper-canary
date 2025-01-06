i.d(n, {
    BO: function () {
        return d;
    },
    QH: function () {
        return g;
    },
    sp: function () {
        return E;
    }
});
var e = i(200651),
    r = i(192379),
    l = i(120356),
    s = i.n(l),
    u = i(481060),
    o = i(489813),
    a = i(707592),
    c = i(119866);
function d(t) {
    let { disabled: n, field: i, value: l, radioItemClassName: o, radioItemIconClassName: a, onChange: d } = t,
        { choices: g } = i,
        E = r.useMemo(
            () =>
                g.map((t, n) => ({
                    name: t,
                    value: n,
                    radioItemIconClassName: s()(c.multipleChoiceIcon, a)
                })),
            [g, a]
        );
    return (0, e.jsx)(u.RadioGroup, {
        disabled: n,
        options: E,
        value: l,
        onChange: d,
        radioItemClassName: o,
        withTransparentBackground: !0
    });
}
function g(t) {
    let { formField: n } = t,
        i = null != n.response ? n.choices[n.response] : '';
    return (0, e.jsx)(o.hK, {
        title: n.label,
        children: (0, e.jsx)(a.Gi, {
            className: c.fieldBackground,
            value: i,
            disabled: !0
        })
    });
}
function E(t) {
    let { formField: n, onChange: i } = t;
    return (0, e.jsx)(o.hK, {
        title: n.label,
        children: (0, e.jsx)(d, {
            radioItemClassName: c.fieldBackground,
            field: n,
            value: n.response,
            onChange: i
        })
    });
}
