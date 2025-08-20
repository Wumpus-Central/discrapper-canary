n.d(t, { l: () => d });
var r = n(951288),
    i = n(647438),
    a = n(709014);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
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
        deafen: {
            name: "deafen",
            start: 0,
            duration: 70,
        },
        undeafen: {
            name: "undeafen",
            start: 110,
            duration: 70,
        },
        hover_undeafened: {
            name: "hover_undeafened",
            start: 200,
            duration: 70,
        },
        hover_deafened: {
            name: "hover_deafened",
            start: 300,
            duration: 70,
        },
    },
    d = (e) => {
        let t = i.useRef(null),
            o = i.useRef(e);
        o.current = e;
        let l = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            d = i.useCallback(() => {
                if (null == t.current) return;
                let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.play(n);
            }, [e]),
            f = i.useCallback(() => {
                if (null == t.current) return;
                let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.stopIfPlaying(n);
            }, [e]),
            _ = i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        a.L,
                        c(s({}, e), {
                            src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
                            ref: t,
                            initialAnimation: o.current,
                            markers: u,
                        }),
                    ),
                [],
            );
        return {
            events: {
                onClick: l,
                onMouseEnter: d,
                onMouseLeave: f,
            },
            play: l,
            getDuration: i.useCallback(() => {
                var e;
                return null == (e = t.current) ? void 0 : e.getDuration();
            }, []),
            getCurrentFrame: i.useCallback(() => {
                var e, n;
                return null != (n = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? n : null;
            }, []),
            Component: _,
        };
    };
