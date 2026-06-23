"use strict";
n.d(t, { FK: () => s, PC: () => a });
var i = n(374994);
n(385803);
var r = n(185928);
function s(e) {
    let { angle: t, colors: n } = e;
    return `linear-gradient(${t}deg, ${n
        .map((e) => {
            let { token: t, stop: n } = e;
            return `${(0, i.nt)(t, { saturation: 1 })} ${n}%`;
        })
        .join(", ")})`;
}
function a(e) {
    return r.dP[e];
}
n(818348);
