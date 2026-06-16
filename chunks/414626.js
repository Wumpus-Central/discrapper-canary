n.d(s, { CI: () => i, MZ: () => d });
var r = n(627968),
    t = n(64700),
    l = n(773812),
    a = n(31457),
    c = n(453016);
function o(e) {
    let { disabled: s, field: n, value: a, onChange: c } = e,
        { choices: o } = n,
        i = t.useMemo(() => o.map((e, s) => ({ name: e, value: s })), [o]);
    return (0, r.jsx)(l.z, { options: i, value: a, onChange: (e) => c?.({ value: e }), disabled: s });
}
function i(e) {
    let { formField: s } = e,
        n = null != s.response ? s.choices[s.response] : "";
    return (0, r.jsx)(a._H, { title: s.label, children: (0, r.jsx)(c._V, { value: n, disabled: !0 }) });
}
function d(e) {
    let { formField: s, onChange: n } = e;
    return (0, r.jsx)(a.cS, { title: s.label, children: (0, r.jsx)(o, { field: s, value: s.response, onChange: n }) });
}
