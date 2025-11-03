n.d(t, { K: () => y });
var r = n(522942),
    i = n(131016);
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = "--custom-display-name-styles-gradient-start-color",
    u = "--custom-display-name-styles-gradient-end-color",
    d = "--custom-display-name-styles-main-color",
    f = "--custom-display-name-styles-light-1-color",
    _ = "--custom-display-name-styles-light-2-color",
    p = "--custom-display-name-styles-dark-1-color",
    h = "--custom-display-name-styles-dark-2-color",
    m = "--custom-display-name-styles-wrap",
    g = "--custom-display-name-styles-font-opacity";
function E(e) {
    let { main: t, light1: n, light2: r, dark1: a, dark2: o } = (0, i.hX)(e);
    return {
        [d]: t,
        [f]: n,
        [_]: r,
        [p]: a,
        [h]: o,
    };
}
function b(e) {
    return 0 === e.length
        ? {}
        : {
              [c]: e[0],
              [u]: e.length > 1 ? e[1] : e[0],
              [d]: e[0],
          };
}
function y(e, t) {
    let { shouldWrap: n = !1, fontOpacity: i = 1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = {};
    switch (e) {
        case r.m.GRADIENT:
        case r.m.GLOW:
            a = b(t);
            break;
        case r.m.NEON:
        case r.m.POP:
        case r.m.TOON:
        case r.m.SOLID:
        default:
            t.length > 0 && (a = E(t[0]));
    }
    return l(o({}, a), {
        [m]: n ? "wrap" : "nowrap",
        [g]: i,
    });
}
