n.d(t, { A: () => d });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(473169);
let s = (e) => {
        let { element: t, onChange: n, initialOption: s } = e,
            [d, o] = a.useState("");
        a.useEffect(() => {
            o(s ?? "");
        }, [s]);
        let u = t.name,
            { title: c, options: m } = t.data,
            _ = a.useCallback(
                (e) => {
                    null != e && (o(e), n(e));
                },
                [n],
            );
        return (0, l.jsx)(
            "div",
            {
                className: r.QB,
                children: (0, l.jsx)(i.l6P, {
                    label: c,
                    value: d,
                    required: t.should_submit_data,
                    onSelectionChange: _,
                    options: m,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            },
            u,
        );
    },
    d = (e) => {
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
