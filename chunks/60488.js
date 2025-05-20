r.d(t, { v: () => o });
var n = r(255367),
    a = r(73800),
    l = r(709014);
let i = {
        earn: {
            name: 'earn',
            start: 0,
            duration: 180
        },
        spend: {
            name: 'spend',
            start: 240,
            duration: 180
        }
    },
    o = (e) => {
        let t = a.useRef(null),
            o = a.useRef(e);
        o.current = e;
        let u = a.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = a.useCallback((e) => {
                var a, u;
                return (0, n.jsx)(
                    l.L,
                    ((a = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, e)),
                    (u = u =
                        {
                            src: () => r.e('44980').then(r.t.bind(r, 304306, 19)),
                            ref: t,
                            initialAnimation: o.current,
                            markers: i
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(u)).forEach(function (e) {
                              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e));
                          }),
                    a)
                );
            }, []);
        return {
            events: {},
            play: u,
            getDuration: a.useCallback(() => {
                var e;
                return null == (e = t.current) ? void 0 : e.getDuration();
            }, []),
            getCurrentFrame: a.useCallback(() => {
                var e, r;
                return null != (r = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? r : null;
            }, []),
            Component: c
        };
    };
