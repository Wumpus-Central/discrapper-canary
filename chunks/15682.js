n.d(t, { Z: () => s }), n(388685);
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(521545);
let a = (e) => {
        let { onChange: t, label: n, subtitle: a, selected: s } = e;
        return (0, r.jsx)("div", {
            className: i.checkboxRow,
            children: (0, r.jsxs)(l.XZJ, {
                type: l.XZJ.Types.INVERTED,
                onChange: () => t(),
                value: s,
                children: [
                    (0, r.jsx)(l.Text, {
                        color: "interactive-active",
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, r.jsx)(l.Text, {
                              color: "interactive-active",
                              variant: "text-sm/normal",
                              children: a,
                          })
                        : null,
                ],
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
