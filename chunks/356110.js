n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(378722),
    s = n(10198);
let o = (e) => {
        let { element: t, onChange: n, initialOption: o } = e,
            [c, d] = i.useState("");
        i.useEffect(() => {
            d(null != o ? o : "");
        }, [o]);
        let u = t.name,
            { title: m, options: p } = t.data,
            g = i.useCallback(
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
                            children: (0, r.jsxs)(l.Text, {
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
                    (0, r.jsx)(l.q4e, {
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
        let { elements: t, onChange: n, state: i } = e,
            l = t.map((e) => {
                var t, l;
                let a = e.name;
                return (0, r.jsx)(
                    o,
                    {
                        element: e,
                        initialOption: null != (l = null == i || null == (t = i[a]) ? void 0 : t.value) ? l : void 0,
                        onChange: (e) => n(a, e),
                    },
                    a,
                );
            });
        return (0, r.jsx)("div", { children: l });
    };
