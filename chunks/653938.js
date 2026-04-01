t.d(e, { k: () => r });
var a = t(839006);
function r(n, e, t) {
    let r,
        i,
        s = [],
        u = e.reduce((n, e) => {
            let t = e.replace(a.KB, "");
            return s.push(t), (n[t] = e), n;
        }, {}),
        o = (0, a.B4)(s, n);
    return (o.matchedSupportedLocale &&
        o.matchedDesiredLocale &&
        ((r = o.matchedSupportedLocale),
        (i = u[o.matchedDesiredLocale].slice(o.matchedDesiredLocale.length) || void 0)),
    r)
        ? { locale: r, extension: i }
        : { locale: t() };
}
