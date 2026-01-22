n.d(t, {
    g: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(744682);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}

function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {
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
    d = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play("click");
            }, []),
            s = i.useCallback(() => {
                null != e.current && e.current.play("hover");
            }, []),
            l = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("hover");
            }, []),
            d = i.useCallback(
                (t) =>
                    (0, r.jsx)(
                        a.P,
                        c(o({}, t), {
                            src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
                            ref: e,
                            markers: u,
                        }),
                    ),
                [],
            );
        return {
            events: {
                onMouseEnter: s,
                onMouseLeave: l,
            },
            play: t,
            getDuration: i.useCallback(() => {
                var t;
                return null == (t = e.current) ? void 0 : t.getDuration();
            }, []),
            getCurrentFrame: i.useCallback(() => {
                var t, n;
                return null != (t = null == (n = e.current) ? void 0 : n.getCurrentFrame()) ? t : null;
            }, []),
            Component: d,
        };
    };
