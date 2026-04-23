n.d(t, { A: () => d });
var l = n(627968),
    a = n(64700),
    i = n(783878),
    r = n(518977),
    s = n(818050);
let d = (e) => {
    let { element: t, onChange: n, state: d } = e,
        o = t.name,
        { title: c, options: u } = t.data,
        _ = d?.[o]?.value ?? void 0,
        [m, h] = a.useState(_);
    a.useEffect(() => {
        h(_);
    }, [_]);
    let g = a.useMemo(
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
        p = a.useCallback(
            (e) => {
                null != e && (h(e), n(o, e));
            },
            [n, o],
        );
    return (0, l.jsx)("div", {
        className: s.QB,
        children: (0, l.jsx)(i.Z, {
            label: c,
            value: m,
            required: t.should_submit_data,
            onSelectionChange: p,
            options: g,
            selectionMode: "single",
            maxOptionsVisible: 4,
            fullWidth: !0,
        }),
    });
};
