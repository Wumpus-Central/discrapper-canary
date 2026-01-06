n.r(t),
    n.d(t, {
        getAvailableLocales: () => u.u5,
        getLanguages: () => u.Vb,
        getSystemLocale: () => h,
        initialLocale: () => E,
        international: () => d.Z,
        intl: () => b,
        systemLocale: () => g,
        t: () => c.k,
        useSyncMessages: () => y,
    }),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(354012),
    o = n(159635),
    s = n.n(o),
    l = n(926973),
    c = n(253185),
    u = n(424395),
    d = n(589531);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let g = h("en-US"),
    E = (0, u.YI)(g, "en-US"),
    b = new a.IntlManager({
        initialLocale: E,
        defaultLocale: "en-US",
    }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, r.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, r.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, r.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, r.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, r.jsx)("code", { children: e }, t),
            $link: (e, t, r) => {
                let [a] = r,
                    { Anchor: o } = n(756715),
                    l = {};
                switch (typeof a) {
                    case "string":
                        l.href = s().sanitizeUrl(a);
                        break;
                    case "function":
                    default:
                        l.onClick = a;
                        break;
                    case "object":
                        var c;
                        if (null == a) break;
                        (l.onClick = null != (c = a.onClick) ? c : a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, i.createElement)(o, m(p({}, l), { key: t }), e);
            },
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter,
    });
(0, l.yu)(b);
let y = (e) => (0, u.j1)(e, b);
