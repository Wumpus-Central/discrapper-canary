n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var a = n(158954),
    i = n(397927),
    r = n(746305);
let s = (e) => {
        let { onChange: t, label: n, subtitle: i, selected: s } = e;
        return (0, l.jsx)("div", {
            className: r.yc,
            children: (0, l.jsx)(a.Sc0, { checked: s, onChange: t, label: n, description: i }),
        });
    },
    d = (e) => {
        let { element: t, title: n, state: a, onChange: d } = e;
        if (t?.type !== "checkbox") return null;
        let { data: o } = t;
        return (0, l.jsxs)("div", {
            children: [
                null != n &&
                    (0, l.jsxs)(i.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: r.DD,
                        children: [n, t.should_submit_data && (0, l.jsx)("span", { className: r.mw, children: "*" })],
                    }),
                o.map((e, t) => {
                    let [n, i, r] = e;
                    return (0, l.jsx)(
                        s,
                        { onChange: () => d(n, i), selected: n in a, label: i, subtitle: r },
                        `${t}+button`,
                    );
                }),
            ],
        });
    };
