n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(945),
    o = n(232186);
let l = (e) => {
        let { element: t, onChange: n, initialOption: l } = e,
            [u, c] = r.useState('');
        r.useEffect(() => {
            c(null != l ? l : '');
        }, [l]);
        let d = t.name,
            { title: f, options: _ } = t.data,
            p = r.useCallback(
                (e) => {
                    null != e && (c(e), n(e));
                },
                [n]
            );
        return (0, i.jsxs)(
            'div',
            {
                className: o.marginBottom8,
                children: [
                    null != f &&
                        (0, i.jsx)('div', {
                            className: o.marginBottom8,
                            children: (0, i.jsxs)(a.Text, {
                                variant: 'text-sm/bold',
                                children: [
                                    f,
                                    t.should_submit_data &&
                                        (0, i.jsx)('span', {
                                            className: s.required,
                                            children: '*'
                                        })
                                ]
                            })
                        }),
                    (0, i.jsx)(a.q4e, {
                        value: u,
                        onChange: p,
                        options: _
                    })
                ]
            },
            d
        );
    },
    u = (e) => {
        let { elements: t, onChange: n, state: r } = e,
            a = t.map((e) => {
                var t, a;
                let s = e.name;
                return (0, i.jsx)(
                    l,
                    {
                        element: e,
                        initialOption: null !== (a = null == r ? void 0 : null === (t = r[s]) || void 0 === t ? void 0 : t.value) && void 0 !== a ? a : void 0,
                        onChange: (e) => n(s, e)
                    },
                    s
                );
            });
        return (0, i.jsx)('div', { children: a });
    };
