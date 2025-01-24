t.d(n, {
    QH: function () {
        return f;
    },
    sp: function () {
        return m;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(120356),
    s = t.n(l),
    o = t(481060),
    u = t(476770),
    a = t(814960),
    c = t(484979);
function d(e) {
    let { disabled: n, field: t, value: l, radioItemClassName: u, radioItemIconClassName: a, onChange: d } = e,
        { choices: f } = t,
        m = r.useMemo(
            () =>
                f.map((e, n) => ({
                    name: e,
                    value: n,
                    radioItemIconClassName: s()(c.multipleChoiceIcon, a)
                })),
            [f, a]
        );
    return (0, i.jsx)(o.RadioGroup, {
        radioPosition: 'right',
        disabled: n,
        options: m,
        value: l,
        onChange: d,
        radioItemClassName: u
    });
}
function f(e) {
    let { formField: n } = e,
        t = null != n.response ? n.choices[n.response] : '';
    return (0, i.jsx)(u.CA, {
        title: n.label,
        children: (0, i.jsx)(a.Gi, {
            className: c.disabledFieldBackground,
            value: t,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: n, onChange: t } = e;
    return (0, i.jsx)(u.hK, {
        title: n.label,
        children: (0, i.jsx)(d, {
            field: n,
            value: n.response,
            onChange: t
        })
    });
}
