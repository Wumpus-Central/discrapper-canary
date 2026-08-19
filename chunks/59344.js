"use strict";
r.d(t, { C: () => y, Y: () => g });
let n = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
    o = new Set([
        "ae",
        "ar",
        "arc",
        "bcc",
        "bqi",
        "ckb",
        "dv",
        "fa",
        "glk",
        "he",
        "ku",
        "mzn",
        "nqo",
        "pnb",
        "ps",
        "sd",
        "ug",
        "ur",
        "yi",
    ]);
function i(e) {
    if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
        if (r) return "rtl" === r.direction;
        if (t.script) return n.has(t.script);
    }
    let t = e.split("-")[0];
    return o.has(t);
}
var a = r(582128),
    s = r(446649);
let l = Symbol.for("react-aria.i18n.locale");
function u() {
    let e =
        ("u" > typeof window && window[l]) ||
        ("u" > typeof navigator && (navigator.language || navigator.userLanguage)) ||
        "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch {
        e = "en-US";
    }
    return { locale: e, direction: i(e) ? "rtl" : "ltr" };
}
let c = u(),
    f = new Set();
function p() {
    for (let e of ((c = u()), f)) e(c);
}
function d() {
    let e = (0, s.wR)(),
        [t, r] = (0, a.useState)(c);
    return ((0, a.useEffect)(
        () => (
            0 === f.size && window.addEventListener("languagechange", p),
            f.add(r),
            () => {
                f.delete(r), 0 === f.size && window.removeEventListener("languagechange", p);
            }
        ),
        [],
    ),
    e)
        ? { locale: "en-US", direction: "ltr" }
        : t;
}
let h = a.createContext(null);
function m(e) {
    let { locale: t, children: r } = e,
        n = a.useMemo(() => ({ locale: t, direction: i(t) ? "rtl" : "ltr" }), [t]);
    return a.createElement(h.Provider, { value: n }, r);
}
function v(e) {
    let { children: t } = e,
        r = d();
    return a.createElement(h.Provider, { value: r }, t);
}
function y(e) {
    let { locale: t, children: r } = e;
    return t ? a.createElement(m, { locale: t, children: r }) : a.createElement(v, { children: r });
}
function g() {
    let e = d();
    return (0, a.useContext)(h) || e;
}
