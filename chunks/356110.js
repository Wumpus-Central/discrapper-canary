n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(199849),
    a = n(481060),
    s = n(100993),
    o = n(197571);
let d = (e) => {
        let { element: t, onChange: n, initialOption: d } = e,
            [c, u] = l.useState("");
        l.useEffect(() => {
            u(null != d ? d : "");
        }, [d]);
        let m = t.name,
            { title: p, options: g } = t.data,
            _ = l.useCallback(
                (e) => {
                    null != e && (u(e), n(e));
                },
                [n],
            );
        return (0, r.jsxs)(
            "div",
            {
                className: o.marginBottom8,
                children: [
                    null != p &&
                        (0, r.jsx)("div", {
                            className: o.marginBottom8,
                            children: (0, r.jsxs)(a.Text, {
                                variant: "text-sm/bold",
                                children: [
                                    p,
                                    t.should_submit_data &&
                                        (0, r.jsx)("span", {
                                            className: s.required,
                                            children: "*",
                                        }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(i.y6, {
                        value: c,
                        onChange: _,
                        options: g,
                    }),
                ],
            },
            m,
        );
    },
    c = (e) => {
        let { elements: t, onChange: n, state: l } = e,
            i = t.map((e) => {
                var t, i;
                let a = e.name;
                return (0, r.jsx)(
                    d,
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
