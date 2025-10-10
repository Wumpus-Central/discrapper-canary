n.d(t, { Z: () => s }), n(388685);
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    a = n(652339);
let o = (e) => {
        let { onChange: t, label: n, subtitle: o, selected: s } = e;
        return (0, r.jsx)("div", {
            className: a.checkboxRow,
            children: (0, r.jsxs)(i.$q, {
                type: i.M0.INVERTED,
                onChange: () => t(),
                value: s,
                children: [
                    (0, r.jsx)(l.Text, {
                        color: "interactive-active",
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != o
                        ? (0, r.jsx)(l.Text, {
                              color: "interactive-active",
                              variant: "text-sm/normal",
                              children: o,
                          })
                        : null,
                ],
            }),
        });
    },
    s = (e) => {
        let { element: t, state: n, onChange: i } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let { data: l } = t;
        return (0, r.jsx)("div", {
            children: l.map((e, t) => {
                let [l, a, s] = e;
                return (0, r.jsx)(
                    o,
                    {
                        onChange: () => i(l, a),
                        selected: l in n,
                        label: a,
                        subtitle: s,
                    },
                    "".concat(t, "+button"),
                );
            }),
        });
    };
