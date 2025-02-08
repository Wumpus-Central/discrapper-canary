n.d(t, {
    Q8: () => d,
    jn: () => u,
    lX: () => m
});
var a = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    l = n(481060),
    o = n(489813),
    s = n(592286),
    c = n(119866);
function d(e) {
    let { value: t, placeholder: n, onChange: i, disabled: o, className: d, autofocus: u } = e;
    return (0, a.jsx)(l.Kx8, {
        className: r()(c.paragraphFieldBody, d),
        maxLength: s.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: i,
        disabled: o,
        autoFocus: u,
        autosize: !0,
        showRemainingCharacterCount: !o
    });
}
function u(e) {
    let { formField: t } = e;
    return (0, a.jsx)(o.hK, {
        title: t.label,
        children: (0, a.jsx)(d, {
            className: c.fieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: i } = e;
    return (0, a.jsx)(o.hK, {
        title: t.label,
        children: (0, a.jsx)(d, {
            className: c.fieldBackground,
            value: t.response,
            onChange: i,
            autofocus: n
        })
    });
}
