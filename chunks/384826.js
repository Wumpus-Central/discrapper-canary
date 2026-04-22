"use strict";
n.d(t, { A: () => d });
var a = n(627968),
    i = n(64700),
    r = n(783878),
    l = n(518977),
    s = n(818050);
let d = (e) => {
    let { element: t, onChange: n, state: d } = e,
        o = t.name,
        { title: c, options: u } = t.data,
        _ = d?.[o]?.value ?? void 0,
        [m, p] = i.useState(_);
    i.useEffect(() => {
        p(_);
    }, [_]);
    let h = i.useMemo(
            () =>
                u
                    .map((e) => {
                        let t = e.label;
                        try {
                            t = (0, l.Gw)(e.value);
                        } catch {}
                        return { id: e.id ?? e.value, value: e.value, label: t };
                    })
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [u],
        ),
        g = i.useCallback(
            (e) => {
                null != e && (p(e), n(o, e));
            },
            [n, o],
        );
    return (0, a.jsx)("div", {
        className: s.QB,
        children: (0, a.jsx)(r.Z, {
            label: c,
            value: m,
            required: t.should_submit_data,
            onSelectionChange: g,
            options: h,
            selectionMode: "single",
            maxOptionsVisible: 4,
            fullWidth: !0,
        }),
    });
};
