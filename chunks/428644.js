n.d(t, { A: () => c }), n(65821);
var r = n(64700),
    i = n(728458);
function a(e, t, n) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = (e, t, n, a, o) => {
    let c = (0, r.useRef)(!1),
        u = {
            componentName: e,
            sentryErrorOptions: o,
            stateToCapture: a,
        },
        d = (0, r.useRef)(u);
    (0, r.useEffect)(() => {
        d.current = u;
    }),
        (0, r.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: r, stateToCapture: a } = d.current;
            if (t && !c.current) {
                c.current = !0;
                let t = setTimeout(() => {
                    let t = Error("".concat(e, " is taking too long to load."));
                    i.A.setExtra({
                        loadingState: a,
                        loadingTimeSeconds: n,
                    }),
                        i.A.captureException(t, l(s({}, r), { tags: s({}, null == r ? void 0 : r.tags) }));
                }, 1000 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
