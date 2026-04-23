"use strict";
n.d(t, { k: () => i });
var r = n(839006);
function i(e, t, n) {
    let i,
        s,
        a = [],
        o = t.reduce((e, t) => {
            let n = t.replace(r.KB, "");
            return a.push(n), (e[n] = t), e;
        }, {}),
        l = (0, r.B4)(a, e);
    return (l.matchedSupportedLocale &&
        l.matchedDesiredLocale &&
        ((i = l.matchedSupportedLocale),
        (s = o[l.matchedDesiredLocale].slice(l.matchedDesiredLocale.length) || void 0)),
    i)
        ? { locale: i, extension: s }
        : { locale: n() };
}
