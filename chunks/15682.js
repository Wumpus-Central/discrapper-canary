n.d(t, { Z: () => s }), n(47120);
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(62487);
let a = (e) => {
        let { onChange: t, label: n, subtitle: a, selected: s } = e;
        return (0, l.jsx)('div', {
            className: r.checkboxRow,
            children: (0, l.jsxs)(i.XZJ, {
                type: i.XZJ.Types.INVERTED,
                onChange: () => t(),
                value: s,
                children: [
                    (0, l.jsx)(i.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != a
                        ? (0, l.jsx)(i.Text, {
                              color: 'interactive-active',
                              variant: 'text-sm/normal',
                              children: a
                          })
                        : null
                ]
            })
        });
    },
    s = (e) => {
        let { element: t, state: n, onChange: i } = e;
        if ((null == t ? void 0 : t.type) !== 'checkbox') return null;
        let { data: r } = t;
        return (0, l.jsx)('div', {
            children: r.map((e, t) => {
                let [r, s, o] = e;
                return (0, l.jsx)(
                    a,
                    {
                        onChange: () => i(r, s),
                        selected: r in n,
                        label: s,
                        subtitle: o
                    },
                    ''.concat(t, '+button')
                );
            })
        });
    };
