n.d(t, { w: () => a });
var o = n(200651),
    i = n(192379),
    r = n(709014);
let l = {
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
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            a = i.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []);
        return {
            events: {
                onMouseEnter: a,
                onMouseLeave: i.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('hover');
                }, [])
            },
            play: t,
            Component: i.useCallback((t) => {
                var i, a;
                return (0, o.jsx)(
                    r.L,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (o = o.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                o.forEach(function (t) {
                                    var o;
                                    (o = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: o,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = o);
                                });
                        }
                        return e;
                    })({}, t)),
                    (a = a =
                        {
                            src: () => n.e('56855').then(n.t.bind(n, 206509, 19)),
                            ref: e,
                            markers: l
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var o = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, o);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    i)
                );
            }, [])
        };
    };
