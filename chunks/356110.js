n.d(t, { Z: () => c }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(481060),
    o = n(100993),
    l = n(197571);
let s = (e) => {
        let { element: t, onChange: n, initialOption: s } = e,
            [c, d] = a.useState("");
        a.useEffect(() => {
            d(null != s ? s : "");
        }, [s]);
        let u = t.name,
            { title: _, options: m } = t.data,
            p = a.useCallback(
                (e) => {
                    null != e && (d(e), n(e));
                },
                [n],
            );
        return (0, r.jsxs)(
            "div",
            {
                className: l.marginBottom8,
                children: [
                    null != _ &&
                        (0, r.jsx)("div", {
                            className: l.marginBottom8,
                            children: (0, r.jsxs)(i.Text, {
                                variant: "text-sm/bold",
                                children: [
                                    _,
                                    t.should_submit_data &&
                                        (0, r.jsx)("span", {
                                            className: o.required,
                                            children: "*",
                                        }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(i.q4e, {
                        value: c,
                        onChange: p,
                        options: m,
                    }),
                ],
            },
            u,
        );
    },
    c = (e) => {
        let { elements: t, onChange: n, state: a } = e,
            i = t.map((e) => {
                var t, i;
                let o = e.name;
                return (0, r.jsx)(
                    s,
                    {
                        element: e,
                        initialOption: null != (i = null == a || null == (t = a[o]) ? void 0 : t.value) ? i : void 0,
                        onChange: (e) => n(o, e),
                    },
                    o,
                );
            });
        return (0, r.jsx)("div", { children: i });
    };
