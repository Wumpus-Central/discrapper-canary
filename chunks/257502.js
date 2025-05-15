n.d(t, { _: () => o });
var r = n(255367),
    i = n(73800),
    l = n(709014);
let a = {
        click: {
            name: 'click',
            start: 0,
            duration: 66
        },
        hover: {
            name: 'hover',
            start: 90,
            duration: 40
        }
    },
    o = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            s = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
            }, []),
            c = i.useCallback((t) => {
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
                            src: () => n.e('76994').then(n.t.bind(n, 146891, 19)),
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
            }, []);
        return {
            events: {
                onMouseEnter: o,
                onMouseLeave: s
            },
            play: t,
            getDuration: i.useCallback(() => {
                var t;
                return null == (t = e.current) ? void 0 : t.getDuration();
            }, []),
            getCurrentFrame: i.useCallback(() => {
                var t, n;
                return null != (n = null == (t = e.current) ? void 0 : t.getCurrentFrame()) ? n : null;
            }, []),
            Component: c
        };
    };
