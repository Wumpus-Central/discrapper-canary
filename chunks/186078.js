n.d(t, {
    BO: () => u,
    QH: () => m,
    sp: () => x
});
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    s = n(489813),
    c = n(707592),
    d = n(119866);
function u(e) {
    let { disabled: t, field: n, value: r, radioItemClassName: s, radioItemIconClassName: c, onChange: u } = e,
        { choices: m } = n,
        x = i.useMemo(
            () =>
                m.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: l()(d.multipleChoiceIcon, c)
                })),
            [m, c]
        );
    return (0, a.jsx)(o.FXm, {
        disabled: t,
        options: x,
        value: r,
        onChange: u,
        radioItemClassName: s,
        withTransparentBackground: !0
    });
}
function m(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : '';
    return (0, a.jsx)(s.hK, {
        title: t.label,
        children: (0, a.jsx)(c.Gi, {
            className: d.fieldBackground,
            value: n,
            disabled: !0
        })
    });
}
function x(e) {
    let { formField: t, onChange: n } = e;
    return (0, a.jsx)(s.hK, {
        title: t.label,
        children: (0, a.jsx)(u, {
            radioItemClassName: d.fieldBackground,
            field: t,
            value: t.response,
            onChange: n
        })
    });
}
