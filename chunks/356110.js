n.d(t, { Z: () => c }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    l = n(378722),
    o = n(10198);
let s = (e) => {
        let { element: t, onChange: n, initialOption: s } = e,
            [c, d] = i.useState("");
        i.useEffect(() => {
            d(null != s ? s : "");
        }, [s]);
        let u = t.name,
            { title: _, options: m } = t.data,
            p = i.useCallback(
                (e) => {
                    null != e && (d(e), n(e));
                },
                [n],
            );
        return (0, r.jsxs)(
            "div",
            {
                className: o.marginBottom8,
                children: [
                    null != _ &&
                        (0, r.jsx)("div", {
                            className: o.marginBottom8,
                            children: (0, r.jsxs)(a.Text, {
                                variant: "text-sm/bold",
                                children: [
                                    _,
                                    t.should_submit_data &&
                                        (0, r.jsx)("span", {
                                            className: l.required,
                                            children: "*",
                                        }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(a.q4e, {
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
        let { elements: t, onChange: n, state: i } = e,
            a = t.map((e) => {
                var t, a;
                let l = e.name;
                return (0, r.jsx)(
                    s,
                    {
                        element: e,
                        initialOption: null != (a = null == i || null == (t = i[l]) ? void 0 : t.value) ? a : void 0,
                        onChange: (e) => n(l, e),
                    },
                    l,
                );
            });
        return (0, r.jsx)("div", { children: a });
    };
