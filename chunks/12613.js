n.d(t, { A: () => s });
var l = n(627968);
n(64700);
var a = n(158954),
    i = n(746305);
let r = (e) => {
        let { onChange: t, label: n, subtitle: r, selected: s } = e;
        return (0, l.jsx)("div", {
            className: i.y,
            children: (0, l.jsx)(a.Sc0, { checked: s, onChange: t, label: n, description: r }),
        });
    },
    s = (e) => {
        let { element: t, state: n, onChange: a } = e;
        if (t?.type !== "checkbox") return null;
        let { data: i } = t;
        return (0, l.jsx)("div", {
            children: i.map((e, t) => {
                let [i, s, d] = e;
                return (0, l.jsx)(
                    r,
                    { onChange: () => a(i, s), selected: i in n, label: s, subtitle: d },
                    `${t}+button`,
                );
            }),
        });
    };
