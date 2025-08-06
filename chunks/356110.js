n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(843716),
    s = n(20493);
let o = (e) => {
        let { element: t, onChange: n, initialOption: o } = e,
            [c, d] = l.useState("");
        l.useEffect(() => {
            d(null != o ? o : "");
        }, [o]);
        let u = t.name,
            { title: m, options: p } = t.data,
            g = l.useCallback(
                (e) => {
                    null != e && (d(e), n(e));
                },
                [n],
            );
        return (0, r.jsxs)(
            "div",
            {
                className: s.marginBottom8,
                children: [
                    null != m &&
                        (0, r.jsx)("div", {
                            className: s.marginBottom8,
                            children: (0, r.jsxs)(i.Text, {
                                variant: "text-sm/bold",
                                children: [
                                    m,
                                    t.should_submit_data &&
                                        (0, r.jsx)("span", {
                                            className: a.required,
                                            children: "*",
                                        }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(i.q4e, {
                        value: c,
                        onChange: g,
                        options: p,
                    }),
                ],
            },
            u,
        );
    },
    c = (e) => {
        let { elements: t, onChange: n, state: l } = e,
            i = t.map((e) => {
                var t, i;
                let a = e.name;
                return (0, r.jsx)(
                    o,
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
