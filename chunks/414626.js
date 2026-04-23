r.d(t, { CI: () => d, MZ: () => c });
var n = r(627968),
    i = r(64700),
    l = r(954197),
    a = r(31457),
    s = r(453016);
function o(e) {
    let { disabled: t, field: r, value: a, onChange: s } = e,
        { choices: o } = r,
        d = i.useMemo(() => o.map((e, t) => ({ name: e, value: t })), [o]);
    return (0, n.jsx)(l.z, { options: d, value: a, onChange: (e) => s?.({ value: e }), disabled: t });
}
function d(e) {
    let { formField: t } = e,
        r = null != t.response ? t.choices[t.response] : "";
    return (0, n.jsx)(a._H, { title: t.label, children: (0, n.jsx)(s._V, { value: r, disabled: !0 }) });
}
function c(e) {
    let { formField: t, onChange: r } = e;
    return (0, n.jsx)(a.cS, { title: t.label, children: (0, n.jsx)(o, { field: t, value: t.response, onChange: r }) });
}
