n.d(t, { E: () => s });
var l = n(627968),
    r = n(64700),
    i = n(744682);
let a = {
        all: {
            name: "all",
            start: 0,
            duration: 66,
        },
    },
    s = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            s = r.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            c = r.useCallback((t) => {
                var r, s;
                return (0, l.jsx)(
                    i.P,
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, t)),
                    (s = s =
                        {
                            src: () => n.e("5506").then(n.t.bind(n, 429286, 19)),
                            ref: e,
                            markers: a,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    r),
                );
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: s,
                onMouseLeave: o,
            },
            play: t,
            getDuration: r.useCallback(() => {
                var t;
                return null == (t = e.current) ? void 0 : t.getDuration();
            }, []),
            getCurrentFrame: r.useCallback(() => {
                var t, n;
                return null != (t = null == (n = e.current) ? void 0 : n.getCurrentFrame()) ? t : null;
            }, []),
            Component: c,
        };
    };
