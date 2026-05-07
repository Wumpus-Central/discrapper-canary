"use strict";
n.d(t, { $G: () => a, EJ: () => o, S8: () => d, W7: () => c, oN: () => l, sS: () => u, xI: () => i.xI });
var i = n(621466);
let r = /[\u0300-\u036f]/g,
    s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function a(e) {
    return null == e ? "" : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
let o = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\u2026";
    if (null == e || null == t) return "";
    if (e.length > t) {
        let i = s.test(e) ? [...e].slice(0, t - n.length).join("") : e.substring(0, t - n.length);
        return `${i.replace(/[\s.]+$/, "")}${n}`;
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
let u = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(r, "").normalize("NFC");
function c(e) {
    if (void 0 === Intl?.Segmenter) return e.length;
    let t = new Intl.Segmenter().segment(e),
        n = 0;
    for (let e of t) n += 1;
    return n;
}
let d =
    null == String.prototype.normalize
        ? (e) => e
        : function (e) {
              let t = n(209034),
                  i = "";
              return (
                  [...e.normalize("NFD")].forEach((e) => {
                      i += t[e] ?? e;
                  }),
                  i.normalize("NFD").toLocaleLowerCase()
              );
          };
