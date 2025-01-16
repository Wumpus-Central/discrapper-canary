var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(454585),
    u = r(273744),
    c = r(388032),
    d = r(852206),
    f = r(232186);
let _ = (e) => {
        let {
                data: { title: n, subtitle: r, placeholder: i, rows: _, character_limit: h, pattern: p },
                onChange: m,
                initialText: g,
                isRequired: E
            } = e,
            v = s.useRef(
                l.Z.reactParserFor({
                    ...l.Z.defaultRules,
                    link: u.s
                })
            ),
            [I, T] = s.useState(''),
            [b, y] = s.useState('');
        s.useEffect(() => {
            var e;
            T(null !== (e = null == g ? void 0 : g.value) && void 0 !== e ? e : '');
        }, [g]);
        let S = s.useCallback(
            (e) => {
                let n = null != p ? new RegExp(p) : null;
                null != n && null == n.exec(e)
                    ? (y(c.intl.string(c.t['24xrGR'])),
                      m({
                          value: e,
                          isValid: !1
                      }))
                    : null != e &&
                      (y(''),
                      T(e),
                      m({
                          value: e,
                          isValid: !0
                      }));
            },
            [m, p]
        );
        return (0, a.jsxs)('div', {
            className: f.marginBottom8,
            children: [
                null != n &&
                    (0, a.jsx)('div', {
                        className: f.marginBottom8,
                        children: (0, a.jsxs)(o.Text, {
                            variant: 'text-sm/bold',
                            children: [
                                n,
                                E &&
                                    (0, a.jsx)('span', {
                                        className: d.required,
                                        children: '*'
                                    })
                            ]
                        })
                    }),
                (0, a.jsx)(o.TextArea, {
                    maxLength: h,
                    onChange: S,
                    value: I,
                    error: b,
                    rows: _,
                    placeholder: i,
                    autoFocus: !0
                }),
                null != r &&
                    (0, a.jsx)('div', {
                        children: (0, a.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: v.current(r)
                        })
                    })
            ]
        });
    },
    h = (e) => {
        let { elements: n, onChange: r, state: i } = e,
            s = n.map((e) => {
                var n;
                let s = e.name;
                return (0, a.jsx)(
                    _,
                    {
                        data: e.data,
                        onChange: (e) => r(s, e.value, e.isValid),
                        initialText: null !== (n = null == i ? void 0 : i[s]) && void 0 !== n ? n : void 0,
                        isRequired: e.should_submit_data
                    },
                    s
                );
            });
        return (0, a.jsx)('div', { children: s });
    };
n.Z = h;
