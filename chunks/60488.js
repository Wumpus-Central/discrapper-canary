r.d(t, { v: () => a });
var n = r(951288),
    o = r(647438),
    l = r(709014);
let u = {
        earn: {
            name: "earn",
            start: 0,
            duration: 180,
        },
        spend: {
            name: "spend",
            start: 240,
            duration: 180,
        },
    },
    a = (e) => {
        let t = o.useRef(null),
            a = o.useRef(e);
        a.current = e;
        let c = o.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            i = o.useCallback((e) => {
                var o, c;
                return (0, n.jsx)(
                    l.L,
                    ((o = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, e)),
                    (c = c =
                        {
                            src: () => r.e("44980").then(r.t.bind(r, 304306, 19)),
                            ref: t,
                            initialAnimation: a.current,
                            markers: u,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(c)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                          }),
                    o),
                );
            }, []);
        return {
            events: {},
            play: c,
            getDuration: o.useCallback(() => {
                var e;
                return null == (e = t.current) ? void 0 : e.getDuration();
            }, []),
            getCurrentFrame: o.useCallback(() => {
                var e, r;
                return null != (r = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? r : null;
            }, []),
            Component: i,
        };
    };
