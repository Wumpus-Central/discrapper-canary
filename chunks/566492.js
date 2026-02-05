"use strict";
n.d(t, { P: () => E });
var r = n(508425),
    i = n(945096);
let a = "--custom-display-name-styles-gradient-start-color",
    s = "--custom-display-name-styles-gradient-end-color",
    o = "--custom-display-name-styles-main-color",
    l = "--custom-display-name-styles-light-1-color",
    u = "--custom-display-name-styles-light-2-color",
    c = "--custom-display-name-styles-dark-1-color",
    d = "--custom-display-name-styles-dark-2-color",
    _ = "--custom-display-name-styles-toon-stroke-color",
    f = "--custom-display-name-styles-neon-stroke-color",
    p = "--custom-display-name-styles-wrap",
    h = "--custom-display-name-styles-font-opacity";
function m(e) {
    let { main: t, light1: n, light2: r, dark1: a, dark2: s, toonStroke: p, neonStroke: h } = (0, i.$0)(e);
    return { [o]: t, [l]: n, [u]: r, [c]: a, [d]: s, [_]: p, [f]: h };
}
function g(e) {
    return 0 === e.length ? {} : { [a]: e[0], [s]: e.length > 1 ? e[1] : e[0], [o]: e[0] };
}
function E(e, t) {
    let { shouldWrap: n = !1, fontOpacity: i = 1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = {};
    switch (e) {
        case r.z.GRADIENT:
        case r.z.GLOW:
            a = g(t);
            break;
        case r.z.NEON:
        case r.z.POP:
        case r.z.TOON:
        case r.z.SOLID:
        default:
            t.length > 0 && (a = m(t[0]));
    }
    return { ...a, [p]: n ? "wrap" : "nowrap", [h]: i };
}
