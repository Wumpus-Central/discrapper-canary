n.d(t, { Z: () => d }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(272630),
    s = n(814632);
let o = (e) => {
        let { element: t, onChange: n, initialOption: o } = e,
            [d, c] = i.useState('');
        i.useEffect(() => {
            c(null != o ? o : '');
        }, [o]);
        let u = t.name,
            { title: m, options: x } = t.data,
            _ = i.useCallback(
                (e) => {
                    null != e && (c(e), n(e));
                },
                [n]
            );
        return (0, l.jsxs)(
            'div',
            {
                className: s.marginBottom8,
                children: [
                    null != m &&
                        (0, l.jsx)('div', {
                            className: s.marginBottom8,
                            children: (0, l.jsxs)(r.Text, {
                                variant: 'text-sm/bold',
                                children: [
                                    m,
                                    t.should_submit_data &&
                                        (0, l.jsx)('span', {
                                            className: a.required,
                                            children: '*'
                                        })
                                ]
                            })
                        }),
                    (0, l.jsx)(r.q4e, {
                        value: d,
                        onChange: _,
                        options: x
                    })
                ]
            },
            u
        );
    },
    d = (e) => {
        let { elements: t, onChange: n, state: i } = e,
            r = t.map((e) => {
                var t, r;
                let a = e.name;
                return (0, l.jsx)(
                    o,
                    {
                        element: e,
                        initialOption: null !== (r = null == i ? void 0 : null === (t = i[a]) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : void 0,
                        onChange: (e) => n(a, e)
                    },
                    a
                );
            });
        return (0, l.jsx)('div', { children: r });
    };
