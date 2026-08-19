"use strict";
r.d(t, { A: () => i, C: () => a });
let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    o = [];
for (let e = 0; e < n.length; e++) o[n[e].charCodeAt(0)] = e;
function i(e) {
    let t = (3 * e.length) / 4;
    "=" == e[e.length - 2] ? (t -= 2) : "=" == e[e.length - 1] && (t -= 1);
    let r = new Uint8Array(t),
        n = 0,
        i = 0,
        a,
        s = 0;
    for (let t = 0; t < e.length; t++) {
        if (void 0 === (a = o[e.charCodeAt(t)]))
            switch (e[t]) {
                case "=":
                    i = 0;
                case "\n":
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
        switch (i) {
            case 0:
                (s = a), (i = 1);
                break;
            case 1:
                (r[n++] = (s << 2) | ((48 & a) >> 4)), (s = a), (i = 2);
                break;
            case 2:
                (r[n++] = ((15 & s) << 4) | ((60 & a) >> 2)), (s = a), (i = 3);
                break;
            case 3:
                (r[n++] = ((3 & s) << 6) | a), (i = 0);
        }
    }
    if (1 == i) throw Error("invalid base64 string.");
    return r.subarray(0, n);
}
function a(e) {
    let t = "",
        r = 0,
        o,
        i = 0;
    for (let a = 0; a < e.length; a++)
        switch (((o = e[a]), r)) {
            case 0:
                (t += n[o >> 2]), (i = (3 & o) << 4), (r = 1);
                break;
            case 1:
                (t += n[i | (o >> 4)]), (i = (15 & o) << 2), (r = 2);
                break;
            case 2:
                (t += n[i | (o >> 6)]), (t += n[63 & o]), (r = 0);
        }
    return r && ((t += n[i]), (t += "="), 1 == r && (t += "=")), t;
}
(o[45] = n.indexOf("+")), (o[95] = n.indexOf("/"));
