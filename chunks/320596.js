n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(454585),
    o = n(273744),
    l = n(388032),
    u = n(852206),
    c = n(232186);
let d = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: d, rows: f, character_limit: _, pattern: p },
                onChange: h,
                initialText: m,
                isRequired: g
            } = e,
            E = r.useRef(
                s.Z.reactParserFor({
                    ...s.Z.defaultRules,
                    link: o.s
                })
            ),
            [v, y] = r.useState(''),
            [I, b] = r.useState('');
        r.useEffect(() => {
            var e;
            y(null !== (e = null == m ? void 0 : m.value) && void 0 !== e ? e : '');
        }, [m]);
        let T = r.useCallback(
            (e) => {
                let t = null != p ? new RegExp(p) : null;
                null != t && null == t.exec(e)
                    ? (b(l.intl.string(l.t['24xrGR'])),
                      h({
                          value: e,
                          isValid: !1
                      }))
                    : null != e &&
                      (b(''),
                      y(e),
                      h({
                          value: e,
                          isValid: !0
                      }));
            },
            [h, p]
        );
        return (0, i.jsxs)('div', {
            className: c.marginBottom8,
            children: [
                null != t &&
                    (0, i.jsx)('div', {
                        className: c.marginBottom8,
                        children: (0, i.jsxs)(a.Text, {
                            variant: 'text-sm/bold',
                            children: [
                                t,
                                g &&
                                    (0, i.jsx)('span', {
                                        className: u.required,
                                        children: '*'
                                    })
                            ]
                        })
                    }),
                (0, i.jsx)(a.Kx8, {
                    maxLength: _,
                    onChange: T,
                    value: v,
                    error: I,
                    rows: f,
                    placeholder: d,
                    autoFocus: !0
                }),
                null != n &&
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: E.current(n)
                        })
                    })
            ]
        });
    },
    f = (e) => {
        let { elements: t, onChange: n, state: r } = e,
            a = t.map((e) => {
                var t;
                let a = e.name;
                return (0, i.jsx)(
                    d,
                    {
                        data: e.data,
                        onChange: (e) => n(a, e.value, e.isValid),
                        initialText: null !== (t = null == r ? void 0 : r[a]) && void 0 !== t ? t : void 0,
                        isRequired: e.should_submit_data
                    },
                    a
                );
            });
        return (0, i.jsx)('div', { children: a });
    };
