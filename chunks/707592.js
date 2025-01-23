t.d(n, {
    Gi: function () {
        return c;
    },
    YJ: function () {
        return d;
    },
    zY: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    u = t(481060),
    a = t(489813),
    o = t(592286),
    s = t(119866);
function c(e) {
    let { value: n, placeholder: t, onChange: r, disabled: a, autofocus: c, className: d } = e;
    return (0, i.jsx)(u.TextInput, {
        inputClassName: l()(s.textInputFieldBodyInput, d),
        maxLength: o.tL,
        value: null != n ? n : '',
        placeholder: t,
        onChange: r,
        disabled: a,
        autoFocus: c
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, i.jsx)(a.hK, {
        title: n.label,
        children: (0, i.jsx)(u.TextArea, {
            className: l()(s.textInputFieldBodyInput, s.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function E(e) {
    let { formField: n, autofocus: t, onChange: r } = e;
    return (0, i.jsx)(a.hK, {
        title: n.label,
        children: (0, i.jsx)(c, {
            className: s.fieldBackground,
            onChange: r,
            value: n.response,
            autofocus: t
        })
    });
}
