n.d(t, { A: () => o });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(518977),
    s = n(473169);
let o = (e) => {
    let { element: t, onChange: n, state: o } = e,
        d = t.name,
        { title: c, options: u } = t.data,
        _ = o?.[d]?.value ?? void 0,
        [m, x] = a.useState(_);
    a.useEffect(() => {
        x(_);
    }, [_]);
    let p = a.useMemo(
            () =>
                u
                    .map((e) => {
                        let t = e.label;
                        try {
                            t = (0, r.Gw)(e.value);
                        } catch {}
                        return { id: e.id ?? e.value, value: e.value, label: t };
                    })
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [u],
        ),
        g = a.useCallback(
            (e) => {
                null != e && (x(e), n(d, e));
            },
            [n, d],
        );
    return (0, l.jsx)("div", {
        className: s.QB,
        children: (0, l.jsx)(i.ZiE, {
            label: c,
            value: m,
            required: t.should_submit_data,
            onSelectionChange: g,
            options: p,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
