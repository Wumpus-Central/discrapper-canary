"use strict";
r.d(t, { A: () => o, C: () => a });
let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    i = [];
for (let e = 0; e < n.length; e++) i[n[e].charCodeAt(0)] = e;
function o(e) {
    let t = (3 * e.length) / 4;
    "=" == e[e.length - 2] ? (t -= 2) : "=" == e[e.length - 1] && (t -= 1);
    let r = new Uint8Array(t),
        n = 0,
        o = 0,
        a,
        s = 0;
    for (let t = 0; t < e.length; t++) {
        if (void 0 === (a = i[e.charCodeAt(t)]))
            switch (e[t]) {
                case "=":
                    o = 0;
                case "\n":
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
        switch (o) {
            case 0:
                (s = a), (o = 1);
                break;
            case 1:
                (r[n++] = (s << 2) | ((48 & a) >> 4)), (s = a), (o = 2);
                break;
            case 2:
                (r[n++] = ((15 & s) << 4) | ((60 & a) >> 2)), (s = a), (o = 3);
                break;
            case 3:
                (r[n++] = ((3 & s) << 6) | a), (o = 0);
        }
    }
    if (1 == o) throw Error("invalid base64 string.");
    return r.subarray(0, n);
}
function a(e) {
    let t = "",
        r = 0,
        i,
        o = 0;
    for (let a = 0; a < e.length; a++)
        switch (((i = e[a]), r)) {
            case 0:
                (t += n[i >> 2]), (o = (3 & i) << 4), (r = 1);
                break;
            case 1:
                (t += n[o | (i >> 4)]), (o = (15 & i) << 2), (r = 2);
                break;
            case 2:
                (t += n[o | (i >> 6)]), (t += n[63 & i]), (r = 0);
        }
    return r && ((t += n[o]), (t += "="), 1 == r && (t += "=")), t;
}
(i[45] = n.indexOf("+")), (i[95] = n.indexOf("/"));
