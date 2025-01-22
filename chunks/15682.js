var i = r(47120);
var a = r(200651);
r(192379);
var o = r(481060),
    s = r(753801);
let l = (e) => {
        let { onChange: n, label: r, subtitle: i, selected: l } = e;
        return (0, a.jsx)('div', {
            className: s.checkboxRow,
            children: (0, a.jsxs)(o.Checkbox, {
                type: o.Checkbox.Types.INVERTED,
                onChange: () => n(),
                value: l,
                children: [
                    (0, a.jsx)(o.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: r
                    }),
                    null != i
                        ? (0, a.jsx)(o.Text, {
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
        let { data: o } = n;
        return (0, a.jsx)('div', {
            children: o.map((e, n) => {
                let [o, s, u] = e;
                return (0, a.jsx)(
                    l,
                    {
                        onChange: () => i(o, s),
                        selected: o in r,
                        label: s,
                        subtitle: u
                    },
                    ''.concat(n, '+button')
                );
            })
        });
    };
n.Z = u;
