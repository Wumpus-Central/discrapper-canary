"use strict";
r.d(t, { C: () => y, Y: () => g });
let n = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
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
function o(e) {
    if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
        if (r) return "rtl" === r.direction;
        if (t.script) return n.has(t.script);
    }
    let t = e.split("-")[0];
    return i.has(t);
}
var a = r(447502),
    s = r(582128);
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
    return { locale: e, direction: o(e) ? "rtl" : "ltr" };
}
let c = u(),
    f = new Set();
function d() {
    for (let e of ((c = u()), f)) e(c);
}
function p() {
    let e = (0, a.wR)(),
        [t, r] = (0, s.useState)(c);
    return ((0, s.useEffect)(
        () => (
            0 === f.size && window.addEventListener("languagechange", d),
            f.add(r),
            () => {
                f.delete(r), 0 === f.size && window.removeEventListener("languagechange", d);
            }
        ),
        [],
    ),
    e)
        ? { locale: ("u" > typeof window && window[l]) || "en-US", direction: "ltr" }
        : t;
}
let h = s.createContext(null);
function m(e) {
    let { locale: t, children: r } = e,
        n = s.useMemo(() => ({ locale: t, direction: o(t) ? "rtl" : "ltr" }), [t]);
    return s.createElement(h.Provider, { value: n }, r);
}
function v(e) {
    let { children: t } = e,
        r = p();
    return s.createElement(h.Provider, { value: r }, t);
}
function y(e) {
    let { locale: t, children: r } = e;
    return t ? s.createElement(m, { locale: t, children: r }) : s.createElement(v, { children: r });
}
function g() {
    let e = p();
    return (0, s.useContext)(h) || e;
}
