var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(481060),
    l = r(945),
    u = r(232186);
let c = (e) => {
        let { element: n, onChange: r, initialOption: i } = e,
            [c, d] = o.useState('');
        o.useEffect(() => {
            d(null != i ? i : '');
        }, [i]);
        let f = n.name,
            { title: p, options: h } = n.data,
            _ = o.useCallback(
                (e) => {
                    null != e && (d(e), r(e));
                },
                [r]
            );
        return (0, a.jsxs)(
            'div',
            {
                className: u.marginBottom8,
                children: [
                    null != p &&
                        (0, a.jsx)('div', {
                            className: u.marginBottom8,
                            children: (0, a.jsxs)(s.Text, {
                                variant: 'text-sm/bold',
                                children: [
                                    p,
                                    n.should_submit_data &&
                                        (0, a.jsx)('span', {
                                            className: l.required,
                                            children: '*'
                                        })
                                ]
                            })
                        }),
                    (0, a.jsx)(s.SingleSelect, {
                        value: c,
                        onChange: _,
                        options: h
                    })
                ]
            },
            f
        );
    },
    d = (e) => {
        let { elements: n, onChange: r, state: i } = e,
            o = n.map((e) => {
                var n, o;
                let s = e.name;
                return (0, a.jsx)(
                    c,
                    {
                        element: e,
                        initialOption: null !== (o = null == i ? void 0 : null === (n = i[s]) || void 0 === n ? void 0 : n.value) && void 0 !== o ? o : void 0,
                        onChange: (e) => r(s, e)
                    },
                    s
                );
            });
        return (0, a.jsx)('div', { children: o });
    };
n.Z = d;
