n.d(t, { l: () => a });
var r = n(200651),
    i = n(192379),
    l = n(709014);
let o = {
        deafen: {
            name: 'deafen',
            start: 0,
            duration: 70
        },
        undeafen: {
            name: 'undeafen',
            start: 110,
            duration: 70
        },
        hover_undeafened: {
            name: 'hover_undeafened',
            start: 200,
            duration: 70
        },
        hover_deafened: {
            name: 'hover_deafened',
            start: 300,
            duration: 70
        }
    },
    a = (e) => {
        let t = i.useRef(null),
            a = i.useRef(e);
        a.current = e;
        let s = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: s,
                onMouseEnter: c,
                onMouseLeave: i.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: s,
            Component: i.useCallback((e) => {
                var i, s;
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
                    })({}, e)),
                    (s = s =
                        {
                            src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                            ref: t,
                            initialAnimation: a.current,
                            markers: o
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    i)
                );
            }, [])
        };
    };
