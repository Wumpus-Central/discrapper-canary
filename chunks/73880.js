n.d(t, {
    Q8: () => d,
    jn: () => u,
    lX: () => m
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(489813),
    s = n(592286),
    c = n(667084);
function d(e) {
    let { value: t, placeholder: n, onChange: a, disabled: l, className: d, autofocus: u } = e;
    return (0, r.jsx)(o.Kx8, {
        className: i()(c.paragraphFieldBody, d),
        maxLength: s.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: a,
        disabled: l,
        autoFocus: u,
        autosize: !0,
        showRemainingCharacterCount: !l
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: a } = e;
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            value: t.response,
            onChange: a,
            autofocus: n
        })
    });
}
