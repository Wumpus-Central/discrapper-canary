n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    a = n(73800),
    i = n(481060),
    l = n(843716),
    o = n(20493);
let s = (e) => {
        let { element: t, onChange: n, initialOption: s } = e,
            [c, d] = a.useState('');
        a.useEffect(() => {
            d(null != s ? s : '');
        }, [s]);
        let u = t.name,
            { title: m, options: p } = t.data,
            _ = a.useCallback(
                (e) => {
                    null != e && (d(e), n(e));
                },
                [n]
            );
        return (0, r.jsxs)(
            'div',
            {
                className: o.marginBottom8,
                children: [
                    null != m &&
                        (0, r.jsx)('div', {
                            className: o.marginBottom8,
                            children: (0, r.jsxs)(i.Text, {
                                variant: 'text-sm/bold',
                                children: [
                                    m,
                                    t.should_submit_data &&
                                        (0, r.jsx)('span', {
                                            className: l.required,
                                            children: '*'
                                        })
                                ]
                            })
                        }),
                    (0, r.jsx)(i.q4e, {
                        value: c,
                        onChange: _,
                        options: p
                    })
                ]
            },
            u
        );
    },
    c = (e) => {
        let { elements: t, onChange: n, state: a } = e,
            i = t.map((e) => {
                var t, i;
                let l = e.name;
                return (0, r.jsx)(
                    s,
                    {
                        element: e,
                        initialOption: null != (i = null == a || null == (t = a[l]) ? void 0 : t.value) ? i : void 0,
                        onChange: (e) => n(l, e)
                    },
                    l
                );
            });
        return (0, r.jsx)('div', { children: i });
    };
