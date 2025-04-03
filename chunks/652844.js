n.d(t, { O: () => a });
var r = n(200651),
    l = n(192379),
    i = n(709014);
let o = {
        mute: {
            name: 'mute',
            start: 0,
            duration: 70
        },
        unmute: {
            name: 'unmute',
            start: 100,
            duration: 70
        },
        hover_unmuted: {
            name: 'hover_unmuted',
            start: 180,
            duration: 40
        },
        hover_muted: {
            name: 'hover_muted',
            start: 240,
            duration: 40
        }
    },
    a = (e) => {
        let t = l.useRef(null),
            a = l.useRef(e);
        a.current = e;
        let s = l.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = l.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: s,
                onMouseEnter: c,
                onMouseLeave: l.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: s,
            Component: l.useCallback((e) => {
                var l, s;
                return (0, r.jsx)(
                    i.L,
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
                    })({}, e)),
                    (s = s =
                        {
                            src: () => n.e('410').then(n.t.bind(n, 992285, 19)),
                            ref: t,
                            initialAnimation: a.current,
                            markers: o
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    l)
                );
            }, [])
        };
    };
