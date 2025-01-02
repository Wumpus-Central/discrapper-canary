t.d(n, {
    BO: function () {
        return d;
    },
    QH: function () {
        return I;
    },
    sp: function () {
        return E;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(120356),
    u = t.n(l),
    o = t(481060),
    s = t(489813),
    a = t(707592),
    c = t(119866);
function d(e) {
    let { disabled: n, field: t, value: l, radioItemClassName: s, radioItemIconClassName: a, onChange: d } = e,
        { choices: I } = t,
        E = i.useMemo(
            () =>
                I.map((e, n) => ({
                    name: e,
                    value: n,
                    radioItemIconClassName: u()(c.multipleChoiceIcon, a)
                })),
            [I, a]
        );
    return (0, r.jsx)(o.RadioGroup, {
        disabled: n,
        options: E,
        value: l,
        onChange: d,
        radioItemClassName: s,
        withTransparentBackground: !0
    });
}
function I(e) {
    let { formField: n } = e,
        t = null != n.response ? n.choices[n.response] : '';
    return (0, r.jsx)(s.hK, {
        title: n.label,
        children: (0, r.jsx)(a.Gi, {
            className: c.fieldBackground,
            value: t,
            disabled: !0
        })
    });
}
function E(e) {
    let { formField: n, onChange: t } = e;
    return (0, r.jsx)(s.hK, {
        title: n.label,
        children: (0, r.jsx)(d, {
            radioItemClassName: c.fieldBackground,
            field: n,
            value: n.response,
            onChange: t
        })
    });
}
