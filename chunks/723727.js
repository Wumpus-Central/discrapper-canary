function n(e) {
    return e.map((e) => String.fromCharCode(e)).join("");
}
function r(e) {
    if (e.length >= 8) {
        let t = n(e.slice(0, 8));
        if ("ASCII\0\0\0" === t) return n(e.slice(8));
        if ("JIS\0\0\0\0\0" === t) return "[JIS encoded text]";
        if ("UNICODE\0" === t) return "[Unicode encoded text]";
        else if ("\0\0\0\0\0\0\0\0" === t) return "[Undefined encoding]";
    }
    return "Undefined";
}
function o(e) {
    return e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600;
}
i.d(t, { Cn: () => r, Jn: () => n, e7: () => o });
