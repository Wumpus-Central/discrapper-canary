n.d(t, { Z: () => m }), n(388685), n(413496), n(433524), n(35282);
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(454585),
    o = n(273744),
    s = n(388032),
    c = n(232890),
    d = n(20493);
let u = (e) => {
        var t, n;
        let {
                data: { title: u, subtitle: m, placeholder: p, rows: x, character_limit: b, pattern: _ },
                onChange: f,
                initialText: h,
                isRequired: g
            } = e,
            v = l.useRef(
                a.Z.reactParserFor(
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, a.Z.defaultRules)),
                    (n = n = { link: o.s }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                )
            ),
            [j, y] = l.useState(''),
            [O, Z] = l.useState(null);
        l.useEffect(() => {
            var e;
            y(null != (e = null == h ? void 0 : h.value) ? e : '');
        }, [h]);
        let I = l.useCallback(
            (e) => {
                let t = null != _ ? new RegExp(_) : null;
                null == t || t.test(e)
                    ? null != e &&
                      (Z(null),
                      y(e),
                      f({
                          value: e,
                          isValid: !0
                      }))
                    : (Z(s.intl.string(s.t['24xrGR'])),
                      f({
                          value: e,
                          isValid: !1
                      }));
            },
            [f, _]
        );
        return (0, r.jsxs)('div', {
            className: d.marginBottom8,
            children: [
                null != u &&
                    (0, r.jsx)('div', {
                        className: d.marginBottom8,
                        children: (0, r.jsxs)(i.Text, {
                            variant: 'text-sm/bold',
                            children: [
                                u,
                                g &&
                                    (0, r.jsx)('span', {
                                        className: c.required,
                                        children: '*'
                                    })
                            ]
                        })
                    }),
                (0, r.jsx)(i.Kx8, {
                    maxLength: b,
                    onChange: I,
                    value: j,
                    error: O,
                    rows: x,
                    placeholder: p,
                    autoFocus: !0
                }),
                null != m &&
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            children: v.current(m)
                        })
                    })
            ]
        });
    },
    m = (e) => {
        let { elements: t, onChange: n, state: l } = e,
            i = t.map((e) => {
                var t;
                let i = e.name;
                return (0, r.jsx)(
                    u,
                    {
                        data: e.data,
                        onChange: (e) => n(i, e.value, e.isValid),
                        initialText: null != (t = null == l ? void 0 : l[i]) ? t : void 0,
                        isRequired: e.should_submit_data
                    },
                    i
                );
            });
        return (0, r.jsx)('div', { children: i });
    };
