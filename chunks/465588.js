n.d(t, {
    jn: () => m,
    lX: () => p
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(476770),
    s = n(592286),
    c = n(388032),
    d = n(641198);
function u(e) {
    let { value: t, placeholder: n, onChange: a, disabled: l, className: c, autofocus: u } = e;
    return (0, r.jsx)(o.Kx8, {
        className: i()(d.paragraphFieldBody, c),
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
function m(e) {
    let { formField: t } = e;
    return (0, r.jsx)(l.CA, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: d.disabledFieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function p(e) {
    let { formField: t, autofocus: n, onChange: a } = e;
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            value: t.response,
            onChange: a,
            autofocus: n,
            placeholder: c.NW.string(c.t['Sqn+Wl'])
        })
    });
}
