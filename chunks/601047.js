r.d(t, { P1: () => d, zD: () => c });
var n = r(627968);
r(64700);
var i = r(260598),
    l = r(31457),
    a = r(260197),
    s = r(985018);
function o(e) {
    let { value: t, placeholder: r, onChange: l, disabled: s, autofocus: o } = e;
    return (0, n.jsx)(i.f, {
        maxLength: a.nQ,
        value: t ?? "",
        placeholder: r ?? "",
        onChange: l,
        disabled: s,
        autoFocus: o,
        autosize: !0,
        showRemainingCharacterCount: !s,
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, n.jsx)(l._H, { title: t.label, children: (0, n.jsx)(o, { value: t.response, disabled: !0 }) });
}
function c(e) {
    let { formField: t, autofocus: r, onChange: i } = e;
    return (0, n.jsx)(l.cS, {
        title: t.label,
        children: (0, n.jsx)(o, {
            value: t.response,
            onChange: i,
            autofocus: r,
            placeholder: s.intl.string(s.t["Sqn+Wh"]),
        }),
    });
}
