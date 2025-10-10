n.d(t, { _: () => o });
var i = n(951288),
    r = n(647438),
    l = n(709014);
let a = {
        click: {
            name: "click",
            start: 0,
            duration: 66,
        },
        hover: {
            name: "hover",
            start: 90,
            duration: 40,
        },
    },
    o = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play("click");
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.play("hover");
            }, []),
            s = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("hover");
            }, []),
            c = r.useCallback((t) => {
                var r, o;
                return (0, i.jsx)(
                    l.L,
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, t)),
                    (o = o =
                        {
                            src: () => n.e("76994").then(n.t.bind(n, 146891, 19)),
                            ref: e,
                            markers: a,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    r),
                );
            }, []);
        return {
            events: {
                onMouseEnter: o,
                onMouseLeave: s,
            },
            play: t,
            getDuration: r.useCallback(() => {
                var t;
                return null == (t = e.current) ? void 0 : t.getDuration();
            }, []),
            getCurrentFrame: r.useCallback(() => {
                var t, n;
                return null != (n = null == (t = e.current) ? void 0 : t.getCurrentFrame()) ? n : null;
            }, []),
            Component: c,
        };
    };
