n.d(t, {
    A: () => o,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(397927),
    i = n(473169);
let s = (e) => {
        let { element: t, onChange: n, initialOption: s } = e,
            [o, c] = r.useState("");
        r.useEffect(() => {
            c(null != s ? s : "");
        }, [s]);
        let d = t.name,
            { title: u, options: m } = t.data,
            b = r.useCallback(
                (e) => {
                    null != e && (c(e), n(e));
                },
                [n],
            );
        return (0, l.jsx)(
            "div",
            {
                className: i.QB,
                children: (0, l.jsx)(a.l6P, {
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
        let { elements: t, onChange: n, state: r } = e,
            a = t.map((e) => {
                var t, a;
                let i = e.name;
                return (0, l.jsx)(
                    s,
                    {
                        element: e,
                        initialOption: null != (t = null == r || null == (a = r[i]) ? void 0 : a.value) ? t : void 0,
                        onChange: (e) => n(i, e),
                    },
                    i,
                );
            });
        return (0, l.jsx)("div", {
            children: a,
        });
    };
