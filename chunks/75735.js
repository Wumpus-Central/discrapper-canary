n.d(t, { o: () => d });
var r = n(200651),
    i = n(192379),
    o = n(709014);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
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
                a(e, t, n[t]);
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
        disable: {
            name: 'disable',
            start: 0,
            duration: 70
        },
        enable: {
            name: 'enable',
            start: 100,
            duration: 70
        },
        hover_enabled: {
            name: 'hover_enabled',
            start: 180,
            duration: 70
        },
        hover_disabled: {
            name: 'hover_disabled',
            start: 280,
            duration: 70
        }
    },
    d = (e) => {
        let t = i.useRef(null),
            a = i.useRef(e);
        a.current = e;
        let l = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            d = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: l,
                onMouseEnter: d,
                onMouseLeave: i.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: l,
            Component: i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        o.L,
                        c(s({}, e), {
                            src: () => n.e('8366').then(n.t.bind(n, 553427, 19)),
                            ref: t,
                            initialAnimation: a.current,
                            markers: u
                        })
                    ),
                []
            )
        };
    };
