var r = n(477900),
    l = n(582128),
    a = n(771871),
    t = n(31457),
    c = n(453016);
function o(e) {
    let { disabled: s, field: n, value: t, onChange: c } = e,
        { choices: o } = n,
        i = l.useMemo(() => o.map((e, s) => ({ name: e, value: s })), [o]);
    return (0, r.jsx)(a.z, { options: i, value: t, onChange: (e) => c?.({ value: e }), disabled: s });
}
n.d(
    s,
    {},
    {
        CI: function (e) {
            let { formField: s } = e,
                n = null != s.response ? s.choices[s.response] : "";
            return (0, r.jsx)(t._H, { title: s.label, children: (0, r.jsx)(c._V, { value: n, disabled: !0 }) });
        },
        MZ: function (e) {
            let { formField: s, onChange: n } = e;
            return (0, r.jsx)(t.cS, {
                title: s.label,
                children: (0, r.jsx)(o, { field: s, value: s.response, onChange: n }),
            });
        },
    },
);
