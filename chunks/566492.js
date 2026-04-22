"use strict";
n.d(t, { P: () => a });
var r = n(508425),
    i = n(945096);
let s = "--custom-display-name-styles-main-color";
function a(e, t) {
    let { shouldWrap: n = !1, fontOpacity: a = 1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = {};
    switch (e) {
        case r.z.GRADIENT:
        case r.z.GLOW:
            o =
                0 === t.length
                    ? {}
                    : {
                          "--custom-display-name-styles-gradient-start-color": t[0],
                          "--custom-display-name-styles-gradient-end-color": t.length > 1 ? t[1] : t[0],
                          [s]: t[0],
                      };
            break;
        case r.z.NEON:
        case r.z.POP:
        case r.z.TOON:
        case r.z.SOLID:
        default:
            t.length > 0 &&
                (o = (function (e) {
                    let {
                        main: t,
                        light1: n,
                        light2: r,
                        dark1: a,
                        dark2: o,
                        toonStroke: l,
                        neonStroke: u,
                    } = (0, i.$0)(e);
                    return {
                        [s]: t,
                        "--custom-display-name-styles-light-1-color": n,
                        "--custom-display-name-styles-light-2-color": r,
                        "--custom-display-name-styles-dark-1-color": a,
                        "--custom-display-name-styles-dark-2-color": o,
                        "--custom-display-name-styles-toon-stroke-color": l,
                        "--custom-display-name-styles-neon-stroke-color": u,
                    };
                })(t[0]));
    }
    return {
        ...o,
        "--custom-display-name-styles-wrap": n ? "wrap" : "nowrap",
        "--custom-display-name-styles-font-opacity": a,
    };
}
