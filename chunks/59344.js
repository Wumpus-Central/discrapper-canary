"use strict";
n.d(t, { C: () => v, Y: () => y });
let r = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
    i = new Set([
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
function a(e) {
    if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
        if (n) return "rtl" === n.direction;
        if (t.script) return r.has(t.script);
    }
    let t = e.split("-")[0];
    return i.has(t);
}
var o = n(582128),
    s = n(446649);
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
    return { locale: e, direction: a(e) ? "rtl" : "ltr" };
}
let c = u(),
    d = new Set();
function f() {
    for (let e of ((c = u()), d)) e(c);
}
function p() {
    let e = (0, s.wR)(),
        [t, n] = (0, o.useState)(c);
    return ((0, o.useEffect)(
        () => (
            0 === d.size && window.addEventListener("languagechange", f),
            d.add(n),
            () => {
                d.delete(n), 0 === d.size && window.removeEventListener("languagechange", f);
            }
        ),
        [],
    ),
    e)
        ? { locale: "en-US", direction: "ltr" }
        : t;
}
let h = o.createContext(null);
function m(e) {
    let { locale: t, children: n } = e,
        r = o.useMemo(() => ({ locale: t, direction: a(t) ? "rtl" : "ltr" }), [t]);
    return o.createElement(h.Provider, { value: r }, n);
}
function g(e) {
    let { children: t } = e,
        n = p();
    return o.createElement(h.Provider, { value: n }, t);
}
function v(e) {
    let { locale: t, children: n } = e;
    return t ? o.createElement(m, { locale: t, children: n }) : o.createElement(g, { children: n });
}
function y() {
    let e = p();
    return (0, o.useContext)(h) || e;
}
