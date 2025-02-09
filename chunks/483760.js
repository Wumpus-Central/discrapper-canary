t.d(n, {
    QH: () => m,
    sp: () => _
});
var o = t(200651),
    r = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(481060),
    l = t(476770),
    c = t(814960),
    d = t(802044);
function u(e) {
    let { disabled: n, field: t, value: i, radioItemClassName: l, radioItemIconClassName: c, onChange: u } = e,
        { choices: m } = t,
        _ = r.useMemo(
            () =>
                m.map((e, n) => ({
                    name: e,
                    value: n,
                    radioItemIconClassName: s()(d.multipleChoiceIcon, c),
                    radioBarClassName: d.multipleChoiceItem
                })),
            [m, c]
        );
    return (0, o.jsx)(a.FXm, {
        radioPosition: 'right',
        disabled: n,
        options: _,
        value: i,
        onChange: u,
        radioItemClassName: l,
        itemTitleClassName: d.multipleChoiceTitle
    });
}
function m(e) {
    let { formField: n } = e,
        t = null != n.response ? n.choices[n.response] : '';
    return (0, o.jsx)(l.CA, {
        title: n.label,
        children: (0, o.jsx)(c.Gi, {
            className: d.disabledFieldBackground,
            value: t,
            disabled: !0
        })
    });
}
function _(e) {
    let { formField: n, onChange: t } = e;
    return (0, o.jsx)(l.hK, {
        title: n.label,
        children: (0, o.jsx)(u, {
            field: n,
            value: n.response,
            onChange: t
        })
    });
}
