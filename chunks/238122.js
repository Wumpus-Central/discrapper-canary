n.d(t, { Z: () => m }), n(47120), n(474991), n(398202), n(301563);
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
                data: { title: u, subtitle: m, placeholder: x, rows: p, character_limit: f, pattern: b },
                onChange: h,
                initialText: _,
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
            [j, N] = l.useState(''),
            [y, O] = l.useState('');
        l.useEffect(() => {
            var e;
            N(null != (e = null == _ ? void 0 : _.value) ? e : '');
        }, [_]);
        let Z = l.useCallback(
            (e) => {
                let t = null != b ? new RegExp(b) : null;
                null != t && null == t.exec(e)
                    ? (O(s.NW.string(s.t['24xrGR'])),
                      h({
                          value: e,
                          isValid: !1
                      }))
                    : null != e &&
                      (O(''),
                      N(e),
                      h({
                          value: e,
                          isValid: !0
                      }));
            },
            [h, b]
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
                    maxLength: f,
                    onChange: Z,
                    value: j,
                    error: y,
                    rows: p,
                    placeholder: x,
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
