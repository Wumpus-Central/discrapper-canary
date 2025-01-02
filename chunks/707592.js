t.d(n, {
    Gi: function () {
        return c;
    },
    YJ: function () {
        return d;
    },
    zY: function () {
        return I;
    }
});
var r = t(200651);
t(192379);
var i = t(120356),
    l = t.n(i),
    u = t(481060),
    o = t(489813),
    s = t(592286),
    a = t(119866);
function c(e) {
    let { value: n, placeholder: t, onChange: i, disabled: o, autofocus: c, className: d } = e;
    return (0, r.jsx)(u.TextInput, {
        inputClassName: l()(a.textInputFieldBodyInput, d),
        maxLength: s.tL,
        value: null != n ? n : '',
        placeholder: t,
        onChange: i,
        disabled: o,
        autoFocus: c
    });
}
function d(e) {
    let { formField: n } = e;
    return (0, r.jsx)(o.hK, {
        title: n.label,
        children: (0, r.jsx)(u.TextArea, {
            className: l()(a.textInputFieldBodyInput, a.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function I(e) {
    let { formField: n, autofocus: t, onChange: i } = e;
    return (0, r.jsx)(o.hK, {
        title: n.label,
        children: (0, r.jsx)(c, {
            className: a.fieldBackground,
            onChange: i,
            value: n.response,
            autofocus: t
        })
    });
}
