"use strict";
n.d(t, { D: () => d });
var r = n(909144),
    i = n(64700),
    s = n(341221);
let a = Symbol.for("react-aria.i18n.locale");
function o() {
    let e =
        ("u" > typeof window && window[a]) ||
        ("u" > typeof navigator && (navigator.language || navigator.userLanguage)) ||
        "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e]);
    } catch {
        e = "en-US";
    }
    return { locale: e, direction: (0, r.V)(e) ? "rtl" : "ltr" };
}
let l = o(),
    u = new Set();
function c() {
    for (let e of ((l = o()), u)) e(l);
}
function d() {
    let e = (0, s.wR)(),
        [t, n] = (0, i.useState)(l);
    return ((0, i.useEffect)(
        () => (
            0 === u.size && window.addEventListener("languagechange", c),
            u.add(n),
            () => {
                u.delete(n), 0 === u.size && window.removeEventListener("languagechange", c);
            }
        ),
        [],
    ),
    e)
        ? { locale: "en-US", direction: "ltr" }
        : t;
}
