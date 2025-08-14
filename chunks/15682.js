n.d(t, { Z: () => s }), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(652339);
let a = (e) => {
        let { onChange: t, label: n, subtitle: a, selected: s } = e;
        return (0, r.jsx)("div", {
            className: l.checkboxRow,
            children: (0, r.jsxs)(i.XZJ, {
                type: i.XZJ.Types.INVERTED,
                onChange: () => t(),
                value: s,
                children: [
                    (0, r.jsx)(i.Text, {
                        color: "interactive-active",
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, r.jsx)(i.Text, {
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
        let { element: t, state: n, onChange: i } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let { data: l } = t;
        return (0, r.jsx)("div", {
            children: l.map((e, t) => {
                let [l, s, o] = e;
                return (0, r.jsx)(
                    a,
                    {
                        onChange: () => i(l, s),
                        selected: l in n,
                        label: s,
                        subtitle: o,
                    },
                    "".concat(t, "+button"),
                );
            }),
        });
    };
