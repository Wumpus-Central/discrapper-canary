t.d(n, {
    BO: function () {
        return d;
    },
    QH: function () {
        return f;
    },
    sp: function () {
        return h;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(120356),
    u = t.n(l),
    o = t(481060),
    a = t(489813),
    s = t(707592),
    c = t(119866);
function d(e) {
    let { disabled: n, field: t, value: l, radioItemClassName: a, radioItemIconClassName: s, onChange: d } = e,
        { choices: f } = t,
        h = r.useMemo(
            () =>
                f.map((e, n) => ({
                    name: e,
                    value: n,
                    radioItemIconClassName: u()(c.multipleChoiceIcon, s)
                })),
            [f, s]
        );
    return (0, i.jsx)(o.RadioGroup, {
        disabled: n,
        options: h,
        value: l,
        onChange: d,
        radioItemClassName: a,
        withTransparentBackground: !0
    });
}
function f(e) {
    let { formField: n } = e,
        t = null != n.response ? n.choices[n.response] : '';
    return (0, i.jsx)(a.hK, {
        title: n.label,
        children: (0, i.jsx)(s.Gi, {
            className: c.fieldBackground,
            value: t,
            disabled: !0
        })
    });
}
function h(e) {
    let { formField: n, onChange: t } = e;
    return (0, i.jsx)(a.hK, {
        title: n.label,
        children: (0, i.jsx)(d, {
            radioItemClassName: c.fieldBackground,
            field: n,
            value: n.response,
            onChange: t
        })
    });
}
