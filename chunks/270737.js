r.d(t, { V: () => l });
var n = r(627968),
    o = r(64700),
    u = r(744682);
let i = {
        mute: {
            name: "mute",
            start: 0,
            duration: 70,
        },
        unmute: {
            name: "unmute",
            start: 100,
            duration: 70,
        },
        hover_unmuted: {
            name: "hover_unmuted",
            start: 180,
            duration: 40,
        },
        hover_muted: {
            name: "hover_muted",
            start: 240,
            duration: 40,
        },
        sparkle_off_muted: {
            name: "sparkle_off_muted",
            start: 299,
            duration: 40,
        },
        sparkle_on: {
            name: "sparkle_on",
            start: 370,
            duration: 40,
        },
        sparkle_off: {
            name: "sparkle_off",
            start: 450,
            duration: 40,
        },
    },
    l = (e) => {
        let t = o.useRef(null),
            l = o.useRef(e);
        l.current = e;
        let a = o.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            c = o.useCallback(() => {
                if (null == t.current) return;
                let r = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.play(r);
            }, [e]),
            s = o.useCallback(() => {
                if (null == t.current) return;
                let r = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.stopIfPlaying(r);
            }, [e]),
            b = o.useCallback((e) => {
                var o, a;
                return (0, n.jsx)(
                    u.P,
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
                    (a = a =
                        {
                            src: () => r.e("89759").then(r.t.bind(r, 244450, 19)),
                            ref: t,
                            initialAnimation: l.current,
                            markers: i,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    o),
                );
            }, []);
        return {
            events: {
                onClick: a,
                onMouseEnter: c,
                onMouseLeave: s,
            },
            play: a,
            getDuration: o.useCallback(() => {
                var e;
                return null == (e = t.current) ? void 0 : e.getDuration();
            }, []),
            getCurrentFrame: o.useCallback(() => {
                var e, r;
                return null != (e = null == (r = t.current) ? void 0 : r.getCurrentFrame()) ? e : null;
            }, []),
            Component: b,
        };
    };
