"use strict";
r.d(t, { C: () => g, Y: () => v });
let n = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
    a = new Set([
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
function s(e) {
    if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
        if (r) return "rtl" === r.direction;
        if (t.script) return n.has(t.script);
    }
    let t = e.split("-")[0];
    return a.has(t);
}
var i = r(64700),
    o = r(341221);
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
    return { locale: e, direction: s(e) ? "rtl" : "ltr" };
}
let c = u(),
    d = new Set();
function f() {
    for (let e of ((c = u()), d)) e(c);
}
function p() {
    let e = (0, o.wR)(),
        [t, r] = (0, i.useState)(c);
    return ((0, i.useEffect)(
        () => (
            0 === d.size && window.addEventListener("languagechange", f),
            d.add(r),
            () => {
                d.delete(r), 0 === d.size && window.removeEventListener("languagechange", f);
            }
        ),
        [],
    ),
    e)
        ? { locale: "en-US", direction: "ltr" }
        : t;
}
let h = i.createContext(null);
function m(e) {
    let { locale: t, children: r } = e,
        n = i.useMemo(() => ({ locale: t, direction: s(t) ? "rtl" : "ltr" }), [t]);
    return i.createElement(h.Provider, { value: n }, r);
}
function _(e) {
    let { children: t } = e,
        r = p();
    return i.createElement(h.Provider, { value: r }, t);
}
function g(e) {
    let { locale: t, children: r } = e;
    return t ? i.createElement(m, { locale: t, children: r }) : i.createElement(_, { children: r });
}
function v() {
    let e = p();
    return (0, i.useContext)(h) || e;
}
