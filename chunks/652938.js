"use strict";
n.d(t, { k: () => r });
let i = [];
for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).slice(1));
function r(e, t = 0) {
    return (
        i[e[t + 0]] +
        i[e[t + 1]] +
        i[e[t + 2]] +
        i[e[t + 3]] +
        "-" +
        i[e[t + 4]] +
        i[e[t + 5]] +
        "-" +
        i[e[t + 6]] +
        i[e[t + 7]] +
        "-" +
        i[e[t + 8]] +
        i[e[t + 9]] +
        "-" +
        i[e[t + 10]] +
        i[e[t + 11]] +
        i[e[t + 12]] +
        i[e[t + 13]] +
        i[e[t + 14]] +
        i[e[t + 15]]
    );
}
