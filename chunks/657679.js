n.d(t, { A: () => o });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(473169);
let s = (e) => {
        let { element: t, onChange: n, initialOption: s } = e,
            [o, d] = a.useState("");
        a.useEffect(() => {
            d(s ?? "");
        }, [s]);
        let c = t.name,
            { title: u, options: _ } = t.data,
            m = a.useMemo(() => _.map((e) => ({ ...e, id: e.id ?? e.value })), [_]),
            x = a.useCallback(
                (e) => {
                    null != e && (d(e), n(e));
                },
                [n],
            );
        return (0, l.jsx)(
            "div",
            {
                className: r.QB,
                children: (0, l.jsx)(i.l6P, {
                    label: u,
                    value: o,
                    required: t.should_submit_data,
                    onSelectionChange: x,
                    options: m,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            },
            c,
        );
    },
    o = (e) => {
        let { elements: t, onChange: n, state: a } = e,
            i = t.map((e) => {
                let t = e.name;
                return (0, l.jsx)(
                    s,
                    { element: e, initialOption: a?.[t]?.value ?? void 0, onChange: (e) => n(t, e) },
                    t,
                );
            });
        return (0, l.jsx)("div", { children: i });
    };
