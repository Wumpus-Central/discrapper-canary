(n.d(t, { Z: () => l }), n(388685));
var r = n(255367);
n(73800);
var a = n(481060),
    i = n(521545);
let o = (e) => {
        let { onChange: t, label: n, subtitle: o, selected: l } = e;
        return (0, r.jsx)('div', {
            className: i.checkboxRow,
            children: (0, r.jsxs)(a.XZJ, {
                type: a.XZJ.Types.INVERTED,
                onChange: () => t(),
                value: l,
                children: [
                    (0, r.jsx)(a.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != o
                        ? (0, r.jsx)(a.Text, {
                              color: 'interactive-active',
                              variant: 'text-sm/normal',
                              children: o
                          })
                        : null
                ]
            })
        });
    },
    l = (e) => {
        let { element: t, state: n, onChange: a } = e;
        if ((null == t ? void 0 : t.type) !== 'checkbox') return null;
        let { data: i } = t;
        return (0, r.jsx)('div', {
            children: i.map((e, t) => {
                let [i, l, s] = e;
                return (0, r.jsx)(
                    o,
                    {
                        onChange: () => a(i, l),
                        selected: i in n,
                        label: l,
                        subtitle: s
                    },
                    ''.concat(t, '+button')
                );
            })
        });
    };
