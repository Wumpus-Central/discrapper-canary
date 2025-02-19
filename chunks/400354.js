r.d(t, { l: () => a });
var n = r(200651),
    i = r(192379),
    o = r(709014);
let l = {
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
        let c = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            u = i.useCallback(() => {
                if (null == t.current) return;
                let r = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(r);
            }, [e]);
        return {
            events: {
                onClick: c,
                onMouseEnter: u,
                onMouseLeave: i.useCallback(() => {
                    if (null == t.current) return;
                    let r = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                    t.current.stopIfPlaying(r);
                }, [e])
            },
            play: c,
            Component: i.useCallback((e) => {
                var i, c;
                return (0, n.jsx)(
                    o.L,
                    ((i = (function (e) {
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
                    (c = c =
                        {
                            src: () => r.e('68449').then(r.t.bind(r, 406785, 19)),
                            ref: t,
                            initialAnimation: a.current,
                            markers: l
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(c)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e));
                          }),
                    i)
                );
            }, [])
        };
    };
