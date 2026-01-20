n.d(t, { Z: () => o }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(478411);
let s = (e) => {
        let { element: t, onChange: n, initialOption: s } = e,
            [o, c] = l.useState("");
        l.useEffect(() => {
            c(null != s ? s : "");
        }, [s]);
        let d = t.name,
            { title: u, options: m } = t.data,
            b = l.useCallback(
                (e) => {
                    null != e && (c(e), n(e));
                },
                [n],
            );
        return (0, r.jsx)(
            "div",
            {
                className: a.marginBottom8,
                children: (0, r.jsx)(i.PhF, {
                    label: u,
                    value: o,
                    required: t.should_submit_data,
                    onSelectionChange: b,
                    options: m,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            },
            d,
        );
    },
    o = (e) => {
        let { elements: t, onChange: n, state: l } = e,
            i = t.map((e) => {
                var t, i;
                let a = e.name;
                return (0, r.jsx)(
                    s,
                    {
                        element: e,
                        initialOption: null != (i = null == l || null == (t = l[a]) ? void 0 : t.value) ? i : void 0,
                        onChange: (e) => n(a, e),
                    },
                    a,
                );
            });
        return (0, r.jsx)("div", { children: i });
    };
