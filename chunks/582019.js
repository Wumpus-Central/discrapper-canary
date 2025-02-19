n.d(t, { j: () => o });
var r = n(200651),
    i = n(192379),
    l = n(709014);
let a = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    o = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: o,
                onMouseLeave: i.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('all');
                }, [])
            },
            play: t,
            Component: i.useCallback((t) => {
                var i, o;
                return (0, r.jsx)(
                    l.L,
                    ((i = (function (e) {
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
                    (o = o =
                        {
                            src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
                            ref: e,
                            markers: a
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    i)
                );
            }, [])
        };
    };
