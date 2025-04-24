n.d(t, { l: () => a });
var i = n(200651),
    r = n(192379),
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
        let t = r.useRef(null),
            a = r.useRef(e);
        a.current = e;
        let s = r.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = r.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]),
            u = r.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.stopIfPlaying(n);
            }, [e]),
            d = r.useCallback((e) => {
                var r, s;
                return (0, i.jsx)(
                    l.L,
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
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
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    r)
                );
            }, []);
        return {
            events: {
                onClick: s,
                onMouseEnter: c,
                onMouseLeave: u
            },
            play: s,
            getDuration: r.useCallback(() => {
                var e;
                return null == (e = t.current) ? void 0 : e.getDuration();
            }, []),
            getCurrentFrame: r.useCallback(() => {
                var e, n;
                return null != (n = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? n : null;
            }, []),
            Component: d
        };
    };
