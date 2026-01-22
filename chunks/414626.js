n.d(t, {
    CI: () => c,
    MZ: () => d,
    mR: () => s,
});
var r = n(627968),
    l = n(64700),
    i = n(158954),
    o = n(31457),
    a = n(453016);

function s(e) {
    let { disabled: t, field: n, value: o, onChange: a } = e,
        { choices: s } = n,
        c = l.useMemo(
            () =>
                s.map((e, t) => ({
                    name: e,
                    value: t,
                })),
            [s],
        );
    return (0, r.jsx)(i.z6M, {
        options: c,
        value: o,
        onChange: (e) =>
            null == a
                ? void 0
                : a({
                      value: e,
                  }),
        disabled: t,
    });
}

function c(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : "";
    return (0, r.jsx)(o._H, {
        title: t.label,
        children: (0, r.jsx)(a._V, {
            value: n,
            disabled: !0,
        }),
    });
}

function d(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(o.cS, {
        title: t.label,
        children: (0, r.jsx)(s, {
            field: t,
            value: t.response,
            onChange: n,
        }),
    });
}
