n.d(t, {
    De: () => o,
    Fv: () => f,
    Mg: () => r.Mg,
    TZ: () => d,
    Zg: () => l,
    _I: () => c,
    aF: () => s,
}),
    n(35282),
    n(388685),
    n(704826);
var r = n(374470);
let i = /[\u0300-\u036f]/g,
    a = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function o(e) {
    return null == e ? "" : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
}
let s = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\u2026";
    if (null == e || null == t) return "";
    if (e.length > t) {
        let r = a.test(e) ? [...e].slice(0, t - n.length).join("") : e.substring(0, t - n.length);
        return "".concat(r.replace(/[\s.]+$/, "")).concat(n);
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
let c = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(i, "").normalize("NFC");
function u(e) {
    let t = n(510085),
        r = "";
    return (
        [...e.normalize("NFD")].forEach((e) => {
            var n;
            r += null != (n = t[e]) ? n : e;
        }),
        r.normalize("NFD").toLocaleLowerCase()
    );
}
function d(e) {
    var t;
    if (void 0 === (null == (t = Intl) ? void 0 : t.Segmenter)) return e.length;
    let n = new Intl.Segmenter().segment(e),
        r = 0;
    for (let e of n) r += 1;
    return r;
}
let f = null == String.prototype.normalize ? (e) => e : u;
