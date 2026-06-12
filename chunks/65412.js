"use strict";
n.d(t, { A: () => s, C: () => a });
let i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    r = [];
for (let e = 0; e < i.length; e++) r[i[e].charCodeAt(0)] = e;
function s(e) {
    let t = (3 * e.length) / 4;
    "=" == e[e.length - 2] ? (t -= 2) : "=" == e[e.length - 1] && (t -= 1);
    let n = new Uint8Array(t),
        i = 0,
        s = 0,
        a,
        o = 0;
    for (let t = 0; t < e.length; t++) {
        if (void 0 === (a = r[e.charCodeAt(t)]))
            switch (e[t]) {
                case "=":
                    s = 0;
                case "\n":
                case "\r":
                case "	":
                case " ":
                    continue;
                default:
                    throw Error("invalid base64 string.");
            }
        switch (s) {
            case 0:
                (o = a), (s = 1);
                break;
            case 1:
                (n[i++] = (o << 2) | ((48 & a) >> 4)), (o = a), (s = 2);
                break;
            case 2:
                (n[i++] = ((15 & o) << 4) | ((60 & a) >> 2)), (o = a), (s = 3);
                break;
            case 3:
                (n[i++] = ((3 & o) << 6) | a), (s = 0);
        }
    }
    if (1 == s) throw Error("invalid base64 string.");
    return n.subarray(0, i);
}
function a(e) {
    let t = "",
        n = 0,
        r,
        s = 0;
    for (let a = 0; a < e.length; a++)
        switch (((r = e[a]), n)) {
            case 0:
                (t += i[r >> 2]), (s = (3 & r) << 4), (n = 1);
                break;
            case 1:
                (t += i[s | (r >> 4)]), (s = (15 & r) << 2), (n = 2);
                break;
            case 2:
                (t += i[s | (r >> 6)]), (t += i[63 & r]), (n = 0);
        }
    return n && ((t += i[s]), (t += "="), 1 == n && (t += "=")), t;
}
(r[45] = i.indexOf("+")), (r[95] = i.indexOf("/"));
