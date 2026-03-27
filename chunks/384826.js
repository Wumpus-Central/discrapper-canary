n.d(t, { A: () => d });
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(518977),
    s = n(885106);
let d = (e) => {
    let { element: t, onChange: n, state: d } = e,
        o = t.name,
        { title: c, options: u } = t.data,
        _ = d?.[o]?.value ?? void 0,
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
                            t = (0, i.Gw)(e.value);
                        } catch {}
                        return { id: e.id ?? e.value, value: e.value, label: t };
                    })
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [u],
        ),
        h = a.useCallback(
            (e) => {
                null != e && (x(e), n(o, e));
            },
            [n, o],
        );
    return (0, l.jsx)("div", {
        className: s.QB,
        children: (0, l.jsx)(r.ZiE, {
            label: c,
            value: m,
            required: t.should_submit_data,
            onSelectionChange: h,
            options: p,
            selectionMode: "single",
            maxOptionsVisible: 4,
            fullWidth: !0,
        }),
    });
};
