n.d(t, { P: () => s });
var r = n(54381),
    i = n(473749),
    l = n(709014);
let a = {
        disable: {
            name: "disable",
            start: 0,
            duration: 70,
        },
        enable: {
            name: "enable",
            start: 100,
            duration: 70,
        },
        hover_enabled: {
            name: "hover_enabled",
            start: 200,
            duration: 70,
        },
        hover_disabled: {
            name: "hover_disabled",
            start: 300,
            duration: 70,
        },
    },
    s = (e) => {
        let t = i.useRef(null),
            s = i.useRef(e);
        s.current = e;
        let o = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            c = i.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.play(n);
            }, [e]),
            u = i.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.stopIfPlaying(n);
            }, [e]),
            d = i.useCallback((e) => {
                var i, o;
                return (0, r.jsx)(
                    l.L,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (o = o =
                        {
                            src: () => n.e("7584").then(n.t.bind(n, 883488, 19)),
                            ref: t,
                            initialAnimation: s.current,
                            markers: a,
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
                    i),
                );
            }, []);
        return {
            events: {
                onClick: o,
                onMouseEnter: c,
                onMouseLeave: u,
            },
            play: o,
            getDuration: i.useCallback(() => {
                var e;
                return null == (e = t.current) ? void 0 : e.getDuration();
            }, []),
            getCurrentFrame: i.useCallback(() => {
                var e, n;
                return null != (n = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? n : null;
            }, []),
            Component: d,
        };
    };
