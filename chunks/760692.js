n.d(t, { K: () => f });
var r = n(522942),
    i = n(131016);
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
function a(e) {
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
let c = {
    GRADIENT_START_COLOR: "--custom-display-name-styles-gradient-start-color",
    GRADIENT_END_COLOR: "--custom-display-name-styles-gradient-end-color",
    MAIN: "--custom-display-name-styles-main-color",
    LIGHT_1: "--custom-display-name-styles-light-1-color",
    LIGHT_2: "--custom-display-name-styles-light-2-color",
    DARK_1: "--custom-display-name-styles-dark-1-color",
    DARK_2: "--custom-display-name-styles-dark-2-color",
    WRAP: "--custom-display-name-styles-wrap",
};
function u(e) {
    let { main: t, light1: n, light2: r, dark1: o, dark2: a } = (0, i.hX)(e);
    return {
        [c.MAIN]: t,
        [c.LIGHT_1]: n,
        [c.LIGHT_2]: r,
        [c.DARK_1]: o,
        [c.DARK_2]: a,
    };
}
function d(e) {
    return e.length < 2
        ? {}
        : {
              [c.GRADIENT_START_COLOR]: e[0],
              [c.GRADIENT_END_COLOR]: e[1],
          };
}
function f(e, t) {
    let { shouldWrap: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (0 === t.length) return {};
    let i = {};
    switch (e) {
        case r.m.GRADIENT:
        case r.m.GLOW:
            i = d(t);
            break;
        case r.m.NEON:
        case r.m.POP:
        case r.m.TOON:
        case r.m.SOLID:
        default:
            i = u(t[0]);
    }
    return l(a({}, i), { [c.WRAP]: n ? "wrap" : "nowrap" });
}
