n.d(t, {
    BO: () => s,
    QH: () => c,
    sp: () => u,
});
var r = n(54381),
    l = n(473749),
    i = n(793030),
    o = n(489813),
    a = n(707592);
function s(e) {
    let { disabled: t, field: n, value: o, onChange: a } = e,
        { choices: s } = n,
        c = l.useMemo(
            () =>
                s.map((e, t) => ({
                    name: e,
                    value: t,
                })),
            [s],
        );
    return (0, r.jsx)(i.Eep, {
        options: c,
        value: o,
        onChange: (e) => (null == a ? void 0 : a({ value: e })),
        disabled: t,
    });
}
function c(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : "";
    return (0, r.jsx)(o.CA, {
        title: t.label,
        children: (0, r.jsx)(a.Gi, {
            value: n,
            disabled: !0,
        }),
    });
}
function u(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(o.hK, {
        title: t.label,
        children: (0, r.jsx)(s, {
            field: t,
            value: t.response,
            onChange: n,
        }),
    });
}
