n.d(t, { Z: () => o }), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(652339);
let a = (e) => {
        let { onChange: t, label: n, subtitle: a, selected: o } = e;
        return (0, r.jsx)("div", {
            className: l.checkboxRow,
            children: (0, r.jsxs)(i.XZJ, {
                type: i.XZJ.Types.INVERTED,
                onChange: () => t(),
                value: o,
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
    o = (e) => {
        let { element: t, state: n, onChange: i } = e;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        let { data: l } = t;
        return (0, r.jsx)("div", {
            children: l.map((e, t) => {
                let [l, o, s] = e;
                return (0, r.jsx)(
                    a,
                    {
                        onChange: () => i(l, o),
                        selected: l in n,
                        label: o,
                        subtitle: s,
                    },
                    "".concat(t, "+button"),
                );
            }),
        });
    };
