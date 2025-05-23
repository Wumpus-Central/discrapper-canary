n.d(t, { Z: () => o }), n(388685);
var r = n(255367);
n(73800);
var a = n(481060),
    i = n(56589);
let l = (e) => {
        let { onChange: t, label: n, subtitle: l, selected: o } = e;
        return (0, r.jsx)('div', {
            className: i.checkboxRow,
            children: (0, r.jsxs)(a.XZJ, {
                type: a.XZJ.Types.INVERTED,
                onChange: () => t(),
                value: o,
                children: [
                    (0, r.jsx)(a.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != l
                        ? (0, r.jsx)(a.Text, {
                              color: 'interactive-active',
                              variant: 'text-sm/normal',
                              children: l
                          })
                        : null
                ]
            })
        });
    },
    o = (e) => {
        let { element: t, state: n, onChange: a } = e;
        if ((null == t ? void 0 : t.type) !== 'checkbox') return null;
        let { data: i } = t;
        return (0, r.jsx)('div', {
            children: i.map((e, t) => {
                let [i, o, s] = e;
                return (0, r.jsx)(
                    l,
                    {
                        onChange: () => a(i, o),
                        selected: i in n,
                        label: o,
                        subtitle: s
                    },
                    ''.concat(t, '+button')
                );
            })
        });
    };
