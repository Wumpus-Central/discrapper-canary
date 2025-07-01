n.d(t, { O: () => a });
var r = n(255367),
    i = n(73800),
    l = n(709014);
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
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.play(n);
            }, [e]),
            u = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.stopIfPlaying(n);
            }, [e]),
            d = i.useCallback((e) => {
                var i, s;
                return (0, r.jsx)(
                    l.L,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
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
            }, []);
        return {
            events: {
                onClick: s,
                onMouseEnter: c,
                onMouseLeave: u
            },
            play: s,
            getDuration: i.useCallback(() => {
                var e;
                return null == (e = t.current) ? void 0 : e.getDuration();
            }, []),
            getCurrentFrame: i.useCallback(() => {
                var e, n;
                return null != (n = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? n : null;
            }, []),
            Component: d
        };
    };
