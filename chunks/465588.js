r.d(t, {
    jn: () => f,
    lX: () => m
});
var n = r(200651);
r(192379);
var i = r(120356),
    o = r.n(i),
    l = r(481060),
    s = r(476770),
    a = r(592286),
    c = r(388032),
    u = r(641198);
function d(e) {
    let { value: t, placeholder: r, onChange: i, disabled: s, className: c, autofocus: d } = e;
    return (0, n.jsx)(l.Kx8, {
        className: o()(u.paragraphFieldBody, c),
        maxLength: a.RS,
        value: null != t ? t : '',
        placeholder: null != r ? r : '',
        onChange: i,
        disabled: s,
        autoFocus: d,
        autosize: !0,
        showRemainingCharacterCount: !s
    });
}
function f(e) {
    let { formField: t } = e;
    return (0, n.jsx)(s.CA, {
        title: t.label,
        children: (0, n.jsx)(d, {
            className: u.disabledFieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: t, autofocus: r, onChange: i } = e;
    return (0, n.jsx)(s.hK, {
        title: t.label,
        children: (0, n.jsx)(d, {
            value: t.response,
            onChange: i,
            autofocus: r,
            placeholder: c.NW.string(c.t['Sqn+Wl'])
        })
    });
}
