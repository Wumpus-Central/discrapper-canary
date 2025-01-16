var i = r(47120);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(753801);
let l = (e) => {
        let { onChange: n, label: r, subtitle: i, selected: l } = e;
        return (0, a.jsx)('div', {
            className: o.checkboxRow,
            children: (0, a.jsxs)(s.Checkbox, {
                type: s.Checkbox.Types.INVERTED,
                onChange: () => n(),
                value: l,
                children: [
                    (0, a.jsx)(s.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: r
                    }),
                    null != i
                        ? (0, a.jsx)(s.Text, {
                              color: 'interactive-active',
                              variant: 'text-sm/normal',
                              children: i
                          })
                        : null
                ]
            })
        });
    },
    u = (e) => {
        let { element: n, state: r, onChange: i } = e;
        if ((null == n ? void 0 : n.type) !== 'checkbox') return null;
        let { data: s } = n;
        return (0, a.jsx)('div', {
            children: s.map((e, n) => {
                let [s, o, u] = e;
                return (0, a.jsx)(
                    l,
                    {
                        onChange: () => i(s, o),
                        selected: s in r,
                        label: o,
                        subtitle: u
                    },
                    ''.concat(n, '+button')
                );
            })
        });
    };
n.Z = u;
