n.d(t, { Z: () => s }), n(388685);
var r = n(54381);
n(473749);
var l = n(793030),
    i = n(492918);
let a = (e) => {
        let { onChange: t, label: n, subtitle: a, selected: s } = e;
        return (0, r.jsx)("div", {
            className: i.checkboxRow,
            children: (0, r.jsx)(l.XZJ, {
                checked: s,
                onChange: t,
                label: n,
                description: a,
            }),
        });
    },
    s = (e) => {
        let { element: t, state: n, onChange: l } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let { data: i } = t;
        return (0, r.jsx)("div", {
            children: i.map((e, t) => {
                let [i, s, o] = e;
                return (0, r.jsx)(
                    a,
                    {
                        onChange: () => l(i, s),
                        selected: i in n,
                        label: s,
                        subtitle: o,
                    },
                    "".concat(t, "+button"),
                );
            }),
        });
    };
