(n.r(t),
    n.d(t, {
        international: () => p,
        initialLocale: () => g,
        intl: () => S,
        getSystemLocale: () => T,
        useSyncMessages: () => N,
        t: () => E,
        getLanguages: () => A.kG,
        getAvailableLocales: () => A.Be,
        systemLocale: () => m,
    }));
var i = n(477900),
    r = n(582128),
    a = n(632296),
    s = n(478676),
    l = n.n(s),
    o = n(855494);
let { createLoader: d } = n(632296),
    c = d({ "en-US": () => n.e("360115").then(n.bind(n, 236158)) }, "en-US"),
    { makeMessagesProxy: u } = n(632296),
    _ = u(c),
    E = (0, a.chainMessagesObjects)(o.A, _);
var A = n(226536);
let { createLoader: h } = n(632296),
    f = h({ "en-US": () => n.e("386098").then(n.bind(n, 26185)) }, "en-US"),
    { makeMessagesProxy: I } = n(632296),
    p = I(f);
function T(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let m = T("en-US"),
    g = (0, A.kt)(m, "en-US"),
    S = new a.IntlManager({ initialLocale: g, defaultLocale: "en-US" }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, i.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, i.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, i.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, i.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, i.jsx)("code", { children: e }, t),
            $link: (e, t, i) => {
                let [a] = i,
                    { Anchor: s } = n(28863),
                    o = {};
                switch (typeof a) {
                    case "string":
                        o.href = l().sanitizeUrl(a);
                        break;
                    case "function":
                    default:
                        o.onClick = a;
                        break;
                    case "object":
                        if (null == a) break;
                        ((o.onClick = a.onClick ?? a), (o.onContextMenu = a.onContextMenu));
                }
                return (0, r.createElement)(s, { ...o, key: t }, e);
            },
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter,
    });
function N(e) {
    return (0, A.tp)(e, S);
}
