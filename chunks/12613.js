n.d(t, { A: () => s }), n(896048);
var l = n(627968);
n(64700);
var r = n(158954),
    a = n(746305);
let i = (e) => {
        let { onChange: t, label: n, subtitle: i, selected: s } = e;
        return (0, l.jsx)("div", {
            className: a.y,
            children: (0, l.jsx)(r.Sc0, {
                checked: s,
                onChange: t,
                label: n,
                description: i,
            }),
        });
    },
    s = (e) => {
        let { element: t, state: n, onChange: r } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let { data: a } = t;
        return (0, l.jsx)("div", {
            children: a.map((e, t) => {
                let [a, s, o] = e;
                return (0, l.jsx)(
                    i,
                    {
                        onChange: () => r(a, s),
                        selected: a in n,
                        label: s,
                        subtitle: o,
                    },
                    "".concat(t, "+button"),
                );
            }),
        });
    };
