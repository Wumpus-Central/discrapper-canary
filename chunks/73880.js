n.d(i, {
    Q8: () => c,
    jn: () => d,
    lX: () => E
});
var t = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(489813),
    o = n(592286),
    u = n(119866);
function c(e) {
    let { value: i, placeholder: n, onChange: l, disabled: s, className: c, autofocus: d } = e;
    return (0, t.jsx)(a.Kx8, {
        className: r()(u.paragraphFieldBody, c),
        maxLength: o.RS,
        value: null != i ? i : '',
        placeholder: null != n ? n : '',
        onChange: l,
        disabled: s,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !s
    });
}
function d(e) {
    let { formField: i } = e;
    return (0, t.jsx)(s.hK, {
        title: i.label,
        children: (0, t.jsx)(c, {
            className: u.fieldBackground,
            value: i.response,
            disabled: !0
        })
    });
}
function E(e) {
    let { formField: i, autofocus: n, onChange: l } = e;
    return (0, t.jsx)(s.hK, {
        title: i.label,
        children: (0, t.jsx)(c, {
            className: u.fieldBackground,
            value: i.response,
            onChange: l,
            autofocus: n
        })
    });
}
