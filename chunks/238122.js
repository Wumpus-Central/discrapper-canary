n.d(t, { Z: () => m }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    d = n(598621),
    c = n(814632);
let u = (e) => {
        let {
                data: { title: t, subtitle: n, placeholder: u, rows: m, character_limit: x, pattern: _ },
                onChange: h,
                initialText: v,
                isRequired: g
            } = e,
            p = i.useRef(
                a.Z.reactParserFor({
                    ...a.Z.defaultRules,
                    link: s.s
                })
            ),
            [f, b] = i.useState(''),
            [Z, j] = i.useState('');
        i.useEffect(() => {
            var e;
            b(null !== (e = null == v ? void 0 : v.value) && void 0 !== e ? e : '');
        }, [v]);
        let I = i.useCallback(
            (e) => {
                let t = null != _ ? new RegExp(_) : null;
                null != t && null == t.exec(e)
                    ? (j(o.intl.string(o.t['24xrGR'])),
                      h({
                          value: e,
                          isValid: !1
                      }))
                    : null != e &&
                      (j(''),
                      b(e),
                      h({
                          value: e,
                          isValid: !0
                      }));
            },
            [h, _]
        );
        return (0, l.jsxs)('div', {
            className: c.marginBottom8,
            children: [
                null != t &&
                    (0, l.jsx)('div', {
                        className: c.marginBottom8,
                        children: (0, l.jsxs)(r.Text, {
                            variant: 'text-sm/bold',
                            children: [
                                t,
                                g &&
                                    (0, l.jsx)('span', {
                                        className: d.required,
                                        children: '*'
                                    })
                            ]
                        })
                    }),
                (0, l.jsx)(r.Kx8, {
                    maxLength: x,
                    onChange: I,
                    value: f,
                    error: Z,
                    rows: m,
                    placeholder: u,
                    autoFocus: !0
                }),
                null != n &&
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: p.current(n)
                        })
                    })
            ]
        });
    },
    m = (e) => {
        let { elements: t, onChange: n, state: i } = e,
            r = t.map((e) => {
                var t;
                let r = e.name;
                return (0, l.jsx)(
                    u,
                    {
                        data: e.data,
                        onChange: (e) => n(r, e.value, e.isValid),
                        initialText: null !== (t = null == i ? void 0 : i[r]) && void 0 !== t ? t : void 0,
                        isRequired: e.should_submit_data
                    },
                    r
                );
            });
        return (0, l.jsx)('div', { children: r });
    };
