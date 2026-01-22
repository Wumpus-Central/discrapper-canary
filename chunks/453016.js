l.d(t, {
    _V: () => o,
    aS: () => c,
    y4: () => d,
});
var n = l(627968);
l(64700);
var r = l(397927),
    s = l(31457),
    i = l(260197),
    a = l(985018);
function o(e) {
    let { value: t, placeholder: l, onChange: s, disabled: a, autofocus: o } = e;
    return (0, n.jsx)(r.ksK, {
        maxLength: i.cs,
        value: null != t ? t : "",
        placeholder: l,
        onChange: s,
        disabled: a,
        autoFocus: o,
    });
}
function c(e) {
    let { formField: t } = e;
    return (0, n.jsx)(s._H, {
        title: t.label,
        children: (0, n.jsx)(r.fs1, {
            value: t.response,
            disabled: !0,
        }),
    });
}
function d(e) {
    let { formField: t, autofocus: l, onChange: r } = e;
    return (0, n.jsx)(s.cS, {
        title: t.label,
        children: (0, n.jsx)(o, {
            onChange: r,
            value: t.response,
            autofocus: l,
            placeholder: a.intl.string(a.t["Sqn+Wh"]),
        }),
    });
}
