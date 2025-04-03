n.d(t, { w: () => a });
var r = n(200651),
    l = n(192379),
    o = n(709014);
let i = {
        hover: {
            name: 'hover',
            start: 0,
            duration: 59
        },
        click: {
            name: 'click',
            start: 68,
            duration: 26
        }
    },
    a = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            a = l.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []);
        return {
            events: {
                onMouseEnter: a,
                onMouseLeave: l.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('hover');
                }, [])
            },
            play: t,
            Component: l.useCallback((t) => {
                var l, a;
                return (0, r.jsx)(
                    o.L,
                    ((l = (function (e) {
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
                    })({}, t)),
                    (a = a =
                        {
                            src: () => n.e('56855').then(n.t.bind(n, 206509, 19)),
                            ref: e,
                            markers: i
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    l)
                );
            }, [])
        };
    };
