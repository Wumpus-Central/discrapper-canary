"use strict";
n.d(t, { A: () => a, C: () => s });
let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    i = [];
for (let e = 0; e < r.length; e++) i[r[e].charCodeAt(0)] = e;
function a(e) {
    let t = (3 * e.length) / 4;
    "=" == e[e.length - 2] ? (t -= 2) : "=" == e[e.length - 1] && (t -= 1);
    let n = new Uint8Array(t),
        r = 0,
        a = 0,
        s,
        o = 0;
    for (let t = 0; t < e.length; t++) {
        if (void 0 === (s = i[e.charCodeAt(t)]))
            switch (e[t]) {
                case "=":
                    a = 0;
                case "\n":
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
        switch (a) {
            case 0:
                (o = s), (a = 1);
                break;
            case 1:
                (n[r++] = (o << 2) | ((48 & s) >> 4)), (o = s), (a = 2);
                break;
            case 2:
                (n[r++] = ((15 & o) << 4) | ((60 & s) >> 2)), (o = s), (a = 3);
                break;
            case 3:
                (n[r++] = ((3 & o) << 6) | s), (a = 0);
        }
    }
    if (1 == a) throw Error("invalid base64 string.");
    return n.subarray(0, r);
}
function s(e) {
    let t = "",
        n = 0,
        i,
        a = 0;
    for (let s = 0; s < e.length; s++)
        switch (((i = e[s]), n)) {
            case 0:
                (t += r[i >> 2]), (a = (3 & i) << 4), (n = 1);
                break;
            case 1:
                (t += r[a | (i >> 4)]), (a = (15 & i) << 2), (n = 2);
                break;
            case 2:
                (t += r[a | (i >> 6)]), (t += r[63 & i]), (n = 0);
        }
    return n && ((t += r[a]), (t += "="), 1 == n && (t += "=")), t;
}
(i[45] = r.indexOf("+")), (i[95] = r.indexOf("/"));
