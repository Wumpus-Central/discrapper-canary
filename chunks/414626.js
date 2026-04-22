"use strict";
r.d(t, { CI: () => c, MZ: () => d });
var i = r(627968),
    a = r(64700),
    n = r(954197),
    s = r(31457),
    l = r(453016);
function o(e) {
    let { disabled: t, field: r, value: s, onChange: l } = e,
        { choices: o } = r,
        c = a.useMemo(() => o.map((e, t) => ({ name: e, value: t })), [o]);
    return (0, i.jsx)(n.z, { options: c, value: s, onChange: (e) => l?.({ value: e }), disabled: t });
}
function c(e) {
    let { formField: t } = e,
        r = null != t.response ? t.choices[t.response] : "";
    return (0, i.jsx)(s._H, { title: t.label, children: (0, i.jsx)(l._V, { value: r, disabled: !0 }) });
}
function d(e) {
    let { formField: t, onChange: r } = e;
    return (0, i.jsx)(s.cS, { title: t.label, children: (0, i.jsx)(o, { field: t, value: t.response, onChange: r }) });
}
