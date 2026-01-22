n.d(t, {
    HL: () => m,
    gy: () => f,
    vw: () => h,
    vy: () => _,
}),
    n(896048),
    n(142703);
var r = n(627968),
    i = n(64700),
    a = n(432022),
    s = n(397927);
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
function l(e) {
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
let c = -n(182417).pt.duration / 1000 / 2,
    u = 4,
    d = 0.2,
    f = (0, i.createContext)({
        addSpringRef: () => {},
        removeSpringRef: () => {},
    });
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    return 1 - Math.pow(1 - e, t);
}
function _() {
    let e = (0, i.useRef)(null),
        t = (0, s.zhh)({
            ref: e,
            from: {
                transform: "translate3d(0, 50px, 0)",
                opacity: 0,
            },
            to: {
                transform: "translate3d(0, 0px, 0)",
                opacity: 1,
            },
            config: {
                duration: 1000 * d,
                easing: (e) => e * e,
            },
        }),
        { addSpringRef: n, removeSpringRef: r } = (0, i.useContext)(f);
    return (
        (0, i.useEffect)(
            () => (
                n(e),
                () => {
                    r(e);
                }
            ),
            [n, r],
        ),
        t
    );
}
function h(e) {
    let { children: t, spring: n, className: i, style: s } = e;
    return (0, r.jsx)(a.animated.div, {
        className: i,
        style: l({}, n, s),
        children: t,
    });
}
function m() {
    let e = (0, i.useRef)(new Set()),
        [t, n] = (0, i.useState)([]),
        r = t.map((e, n) => (t.length <= 1 ? -c : Math.max(0, p((n / (t.length - 1)) * d, u) - c)));
    (0, a.useChain)(t, r);
    let s = (0, i.useCallback)((t) => {
        e.current.add(t);
    }, []);
    (0, i.useEffect)(() => {
        setImmediate(() => n(Array.from(e.current)));
    }, []);
    let o = (0, i.useCallback)((t) => {
        e.current.delete(t);
    }, []);
    return (0, i.useMemo)(
        () => ({
            addSpringRef: s,
            removeSpringRef: o,
        }),
        [s, o],
    );
}
