"use strict";
n.d(t, { $G: () => a, EJ: () => o, S8: () => _, W7: () => d, oN: () => l, sS: () => u, xI: () => r.xI });
var r = n(621466);
let i = /[\u0300-\u036f]/g,
    s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function a(e) {
    return null == e ? "" : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
let o = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "…";
    if (null == e || null == t) return "";
    if (e.length > t) {
        let r = s.test(e) ? [...e].slice(0, t - n.length).join("") : e.substring(0, t - n.length);
        return `${r.replace(/[\s.]+$/, "")}${n}`;
    }
    return e;
};
function l(e) {
    return null != e
        ? e
              .replace(/'s /g, " ")
              .replace(/\w+/g, (e) => e[0])
              .replace(/\s/g, "")
        : "";
}
let u = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(i, "").normalize("NFC");
function c(e) {
    let t = n(209034),
        r = "";
    return (
        [...e.normalize("NFD")].forEach((e) => {
            r += t[e] ?? e;
        }),
        r.normalize("NFD").toLocaleLowerCase()
    );
}
function d(e) {
    if (void 0 === Intl?.Segmenter) return e.length;
    let t = new Intl.Segmenter().segment(e),
        n = 0;
    for (let e of t) n += 1;
    return n;
}
let _ = null == String.prototype.normalize ? (e) => e : c;
