t.d(n, {
    BO: function () {
        return d;
    },
    QH: function () {
        return E;
    },
    sp: function () {
        return f;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(120356),
    u = t.n(l),
    a = t(481060),
    o = t(489813),
    s = t(707592),
    c = t(119866);
function d(e) {
    let { disabled: n, field: t, value: l, radioItemClassName: o, radioItemIconClassName: s, onChange: d } = e,
        { choices: E } = t,
        f = r.useMemo(
            () =>
                E.map((e, n) => ({
                    name: e,
                    value: n,
                    radioItemIconClassName: u()(c.multipleChoiceIcon, s)
                })),
            [E, s]
        );
    return (0, i.jsx)(a.RadioGroup, {
        disabled: n,
        options: f,
        value: l,
        onChange: d,
        radioItemClassName: o,
        withTransparentBackground: !0
    });
}
function E(e) {
    let { formField: n } = e,
        t = null != n.response ? n.choices[n.response] : '';
    return (0, i.jsx)(o.hK, {
        title: n.label,
        children: (0, i.jsx)(s.Gi, {
            className: c.fieldBackground,
            value: t,
            disabled: !0
        })
    });
}
function f(e) {
    let { formField: n, onChange: t } = e;
    return (0, i.jsx)(o.hK, {
        title: n.label,
        children: (0, i.jsx)(d, {
            radioItemClassName: c.fieldBackground,
            field: n,
            value: n.response,
            onChange: t
        })
    });
}
