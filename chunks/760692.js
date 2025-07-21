n.d(t, { K: () => l });
var r = n(522942),
    i = n(131016);
let a = {
    GRADIENT_START_COLOR: '--custom-display-name-styles-gradient-start-color',
    GRADIENT_END_COLOR: '--custom-display-name-styles-gradient-end-color',
    MAIN: '--custom-display-name-styles-main-color',
    LIGHT_1: '--custom-display-name-styles-light-1-color',
    LIGHT_2: '--custom-display-name-styles-light-2-color',
    DARK_1: '--custom-display-name-styles-dark-1-color',
    DARK_2: '--custom-display-name-styles-dark-2-color'
};
function o(e) {
    let { main: t, light1: n, light2: r, dark1: o, dark2: s } = (0, i.h)(e);
    return {
        [a.MAIN]: t,
        [a.LIGHT_1]: n,
        [a.LIGHT_2]: r,
        [a.DARK_1]: o,
        [a.DARK_2]: s
    };
}
function s(e) {
    return e.length < 2
        ? {}
        : {
              [a.GRADIENT_START_COLOR]: e[0],
              [a.GRADIENT_END_COLOR]: e[1]
          };
}
function l(e, t) {
    if (0 === t.length) return {};
    switch (e) {
        case r.m.GRADIENT:
            return s(t);
        case r.m.NEON:
        case r.m.POP:
        case r.m.TOON:
        case r.m.SOLID:
            return o(t[0]);
        default:
            return {};
    }
}
