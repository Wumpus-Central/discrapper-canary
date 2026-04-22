"use strict";
n.d(t, { FK: () => s, PC: () => a });
var r = n(374994),
    i = n(185928);
function s(e) {
    let { angle: t, colors: n } = e;
    return `linear-gradient(${t}deg, ${n
        .map((e) => {
            let { token: t, stop: n } = e;
            return `${(0, r.nt)(t, { saturation: 1 })} ${n}%`;
        })
        .join(", ")})`;
}
n(818348);
let a = (e) => i.dP[e];
