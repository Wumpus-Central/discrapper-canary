n.d(t, { P: () => A });
var r = n(508425),
    i = n(945096);
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
let c = "--custom-display-name-styles-gradient-start-color",
    u = "--custom-display-name-styles-gradient-end-color",
    d = "--custom-display-name-styles-main-color",
    f = "--custom-display-name-styles-light-1-color",
    p = "--custom-display-name-styles-light-2-color",
    _ = "--custom-display-name-styles-dark-1-color",
    h = "--custom-display-name-styles-dark-2-color",
    m = "--custom-display-name-styles-toon-stroke-color",
    g = "--custom-display-name-styles-neon-stroke-color",
    E = "--custom-display-name-styles-wrap",
    b = "--custom-display-name-styles-font-opacity";
function y(e) {
    let { main: t, light1: n, light2: r, dark1: a, dark2: s, toonStroke: o, neonStroke: l } = (0, i.$0)(e);
    return {
        [d]: t,
        [f]: n,
        [p]: r,
        [_]: a,
        [h]: s,
        [m]: o,
        [g]: l,
    };
}
function O(e) {
    return 0 === e.length
        ? {}
        : {
              [c]: e[0],
              [u]: e.length > 1 ? e[1] : e[0],
              [d]: e[0],
          };
}
function A(e, t) {
    let { shouldWrap: n = !1, fontOpacity: i = 1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = {};
    switch (e) {
        case r.z.GRADIENT:
        case r.z.GLOW:
            a = O(t);
            break;
        case r.z.NEON:
        case r.z.POP:
        case r.z.TOON:
        case r.z.SOLID:
        default:
            t.length > 0 && (a = y(t[0]));
    }
    return l(s({}, a), {
        [E]: n ? "wrap" : "nowrap",
        [b]: i,
    });
}
