n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(199849),
    a = n(481060),
    s = n(984019),
    o = n(478411);
let c = (e) => {
        let { element: t, onChange: n, initialOption: c } = e,
            [d, u] = l.useState("");
        l.useEffect(() => {
            u(null != c ? c : "");
        }, [c]);
        let m = t.name,
            { title: b, options: p } = t.data,
            g = l.useCallback(
                (e) => {
                    null != e && (u(e), n(e));
                },
                [n],
            );
        return (0, r.jsxs)(
            "div",
            {
                children: [
                    null != b &&
                        (0, r.jsx)("div", {
                            className: o.marginBottom8,
                            children: (0, r.jsxs)(a.Text, {
                                variant: "text-sm/bold",
                                children: [
                                    b,
                                    t.should_submit_data &&
                                        (0, r.jsx)("span", {
                                            className: s.required,
                                            children: "*",
                                        }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(i.y6, {
                        value: d,
                        onChange: g,
                        options: p,
                    }),
                ],
            },
            m,
        );
    },
    d = (e) => {
        let { elements: t, onChange: n, state: l } = e,
            i = t.map((e) => {
                var t, i;
                let a = e.name;
                return (0, r.jsx)(
                    c,
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
