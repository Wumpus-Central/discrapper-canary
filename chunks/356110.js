var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(945),
    u = r(232186);
let c = (e) => {
        let { element: n, onChange: r, initialOption: i } = e,
            [c, d] = s.useState('');
        s.useEffect(() => {
            d(null != i ? i : '');
        }, [i]);
        let f = n.name,
            { title: _, options: h } = n.data,
            p = s.useCallback(
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
                    null != _ &&
                        (0, a.jsx)('div', {
                            className: u.marginBottom8,
                            children: (0, a.jsxs)(o.Text, {
                                variant: 'text-sm/bold',
                                children: [
                                    _,
                                    n.should_submit_data &&
                                        (0, a.jsx)('span', {
                                            className: l.required,
                                            children: '*'
                                        })
                                ]
                            })
                        }),
                    (0, a.jsx)(o.SingleSelect, {
                        value: c,
                        onChange: p,
                        options: h
                    })
                ]
            },
            f
        );
    },
    d = (e) => {
        let { elements: n, onChange: r, state: i } = e,
            s = n.map((e) => {
                var n, s;
                let o = e.name;
                return (0, a.jsx)(
                    c,
                    {
                        element: e,
                        initialOption: null !== (s = null == i ? void 0 : null === (n = i[o]) || void 0 === n ? void 0 : n.value) && void 0 !== s ? s : void 0,
                        onChange: (e) => r(o, e)
                    },
                    o
                );
            });
        return (0, a.jsx)('div', { children: s });
    };
n.Z = d;
