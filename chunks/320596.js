var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(481060),
    l = r(454585),
    u = r(273744),
    c = r(388032),
    d = r(852206),
    f = r(232186);
let p = (e) => {
        let {
                data: { title: n, subtitle: r, placeholder: i, rows: p, character_limit: h, pattern: _ },
                onChange: m,
                initialText: g,
                isRequired: E
            } = e,
            v = o.useRef(
                l.Z.reactParserFor({
                    ...l.Z.defaultRules,
                    link: u.s
                })
            ),
            [y, b] = o.useState(''),
            [I, T] = o.useState('');
        o.useEffect(() => {
            var e;
            b(null !== (e = null == g ? void 0 : g.value) && void 0 !== e ? e : '');
        }, [g]);
        let S = o.useCallback(
            (e) => {
                let n = null != _ ? new RegExp(_) : null;
                null != n && null == n.exec(e)
                    ? (T(c.intl.string(c.t['24xrGR'])),
                      m({
                          value: e,
                          isValid: !1
                      }))
                    : null != e &&
                      (T(''),
                      b(e),
                      m({
                          value: e,
                          isValid: !0
                      }));
            },
            [m, _]
        );
        return (0, a.jsxs)('div', {
            className: f.marginBottom8,
            children: [
                null != n &&
                    (0, a.jsx)('div', {
                        className: f.marginBottom8,
                        children: (0, a.jsxs)(s.Text, {
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
                (0, a.jsx)(s.TextArea, {
                    maxLength: h,
                    onChange: S,
                    value: y,
                    error: I,
                    rows: p,
                    placeholder: i,
                    autoFocus: !0
                }),
                null != r &&
                    (0, a.jsx)('div', {
                        children: (0, a.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: v.current(r)
                        })
                    })
            ]
        });
    },
    h = (e) => {
        let { elements: n, onChange: r, state: i } = e,
            o = n.map((e) => {
                var n;
                let o = e.name;
                return (0, a.jsx)(
                    p,
                    {
                        data: e.data,
                        onChange: (e) => r(o, e.value, e.isValid),
                        initialText: null !== (n = null == i ? void 0 : i[o]) && void 0 !== n ? n : void 0,
                        isRequired: e.should_submit_data
                    },
                    o
                );
            });
        return (0, a.jsx)('div', { children: o });
    };
n.Z = h;
