n.d(t, { y: () => b }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(432022),
    s = n(397927),
    o = n(480504),
    l = n(652215),
    c = n(613568);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 200,
    h = {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 },
    },
    m = p(d({}, h), { config: { duration: 50 } }),
    g = p(d({}, h), { config: (e, t) => (t ? { duration: 800 } : { duration: 200 }) });
function E(e) {
    let { readyState: t, placeholderImg: n, placeholderStyle: o } = e,
        u = t === l.Rv1.LOADING,
        [f] = i.useState(() => Date.now()),
        p = t === l.Rv1.READY && Date.now() - f < _,
        g = (0, s.pnh)(u && null != n, p ? m : h);
    return (0, r.jsx)(r.Fragment, {
        children: g(
            (e, t) =>
                t &&
                (0, r.jsx)(a.animated.img, {
                    style: d({}, o, e),
                    className: c.bc,
                    src: n,
                    alt: "",
                }),
        ),
    });
}
function b(e) {
    let { readyState: t, aspectRatio: n, placeholder: u, placeholderVersion: d, placeholderStyle: f, children: p } = e,
        _ = t === l.Rv1.LOADING,
        [h] = i.useState(_),
        [m, b] = i.useState(!1),
        y = (0, o._)(u, d, h);
    i.useEffect(() => {
        let e = setTimeout(() => {
            b(!0);
        }, 2000);
        return () => {
            clearTimeout(e);
        };
    }, [h]);
    let O = (0, s.pnh)(_ && m, g);
    return (0, r.jsxs)("div", {
        className: c.bX,
        style: { aspectRatio: n },
        children: [
            p,
            null != y &&
                (0, r.jsx)(E, {
                    readyState: t,
                    placeholderImg: y,
                    placeholderStyle: f,
                }),
            O(
                (e, t) =>
                    t &&
                    (0, r.jsx)(a.animated.div, {
                        style: e,
                        className: c.oM,
                        children: (0, r.jsx)(s.y$y, {
                            type: s.tVU.SPINNING_CIRCLE_SIMPLE,
                            className: c.Xd,
                        }),
                    }),
            ),
        ],
    });
}
