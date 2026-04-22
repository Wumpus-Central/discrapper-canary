n.d(t, { CI: () => d, MZ: () => c });
var r = n(627968),
    s = n(64700),
    i = n(158954),
    l = n(31457),
    a = n(453016);
function o(e) {
    let { disabled: t, field: n, value: l, onChange: a } = e,
        { choices: o } = n,
        d = s.useMemo(() => o.map((e, t) => ({ name: e, value: t })), [o]);
    return (0, r.jsx)(i.z6M, { options: d, value: l, onChange: (e) => a?.({ value: e }), disabled: t });
}
function d(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : "";
    return (0, r.jsx)(l._H, { title: t.label, children: (0, r.jsx)(a._V, { value: n, disabled: !0 }) });
}
function c(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(l.cS, { title: t.label, children: (0, r.jsx)(o, { field: t, value: t.response, onChange: n }) });
}
