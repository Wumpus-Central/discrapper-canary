"use strict";
r.d(t, { P1: () => c, zD: () => d });
var i = r(627968);
r(64700);
var a = r(260598),
    n = r(31457),
    s = r(260197),
    l = r(985018);
function o(e) {
    let { value: t, placeholder: r, onChange: n, disabled: l, autofocus: o } = e;
    return (0, i.jsx)(a.f, {
        maxLength: s.nQ,
        value: t ?? "",
        placeholder: r ?? "",
        onChange: n,
        disabled: l,
        autoFocus: o,
        autosize: !0,
        showRemainingCharacterCount: !l,
    });
}
function c(e) {
    let { formField: t } = e;
    return (0, i.jsx)(n._H, { title: t.label, children: (0, i.jsx)(o, { value: t.response, disabled: !0 }) });
}
function d(e) {
    let { formField: t, autofocus: r, onChange: a } = e;
    return (0, i.jsx)(n.cS, {
        title: t.label,
        children: (0, i.jsx)(o, {
            value: t.response,
            onChange: a,
            autofocus: r,
            placeholder: l.intl.string(l.t["Sqn+Wh"]),
        }),
    });
}
