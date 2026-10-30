(n.r(t),
    n.d(t, {
        international: () => S,
        initialLocale: () => O,
        intl: () => R,
        getSystemLocale: () => N,
        useSyncMessages: () => L,
        t: () => I,
        getLanguages: () => p.kG,
        getAvailableLocales: () => p.Be,
        systemLocale: () => C,
    }));
var i = n(477900),
    r = n(582128),
    a = n(632296),
    s = n(478676),
    l = n.n(s),
    o = n(473717);
let { createLoader: d } = n(632296),
    c = d(
        {
            bg: () => n.e("447831").then(n.t.bind(n, 673866, 19)),
            cs: () => n.e("163040").then(n.t.bind(n, 540067, 19)),
            da: () => n.e("297363").then(n.t.bind(n, 80670, 19)),
            de: () => n.e("172935").then(n.t.bind(n, 417274, 19)),
            el: () => n.e("733041").then(n.t.bind(n, 569288, 19)),
            "en-GB": () => n.e("186443").then(n.t.bind(n, 698502, 19)),
            "es-419": () => n.e("898887").then(n.t.bind(n, 77626, 19)),
            "es-ES": () => n.e("406427").then(n.t.bind(n, 101206, 19)),
            fi: () => n.e("484045").then(n.t.bind(n, 35612, 19)),
            fr: () => n.e("937334").then(n.t.bind(n, 382933, 19)),
            hi: () => n.e("151239").then(n.t.bind(n, 148218, 19)),
            hr: () => n.e("188892").then(n.t.bind(n, 535255, 19)),
            hu: () => n.e("760875").then(n.t.bind(n, 119910, 19)),
            id: () => n.e("401821").then(n.t.bind(n, 444780, 19)),
            it: () => n.e("65997").then(n.t.bind(n, 271964, 19)),
            ja: () => n.e("979265").then(n.t.bind(n, 259608, 19)),
            ko: () => n.e("611796").then(n.t.bind(n, 234175, 19)),
            lt: () => n.e("260662").then(n.t.bind(n, 400277, 19)),
            nl: () => n.e("172840").then(n.t.bind(n, 261211, 19)),
            no: () => n.e("692203").then(n.t.bind(n, 839014, 19)),
            pl: () => n.e("923074").then(n.t.bind(n, 759705, 19)),
            "pt-BR": () => n.e("655099").then(n.t.bind(n, 916278, 19)),
            ro: () => n.e("751919").then(n.t.bind(n, 668786, 19)),
            ru: () => n.e("74733").then(n.t.bind(n, 820668, 19)),
            "sv-SE": () => n.e("831922").then(n.t.bind(n, 711305, 19)),
            th: () => n.e("835602").then(n.t.bind(n, 466985, 19)),
            tr: () => n.e("920016").then(n.t.bind(n, 763987, 19)),
            uk: () => n.e("186326").then(n.t.bind(n, 338485, 19)),
            vi: () => n.e("360893").then(n.t.bind(n, 928396, 19)),
            "zh-CN": () => n.e("361082").then(n.t.bind(n, 593025, 19)),
            "zh-TW": () => n.e("734214").then(n.t.bind(n, 193893, 19)),
            "en-US": () => n.e("125293").then(n.bind(n, 547388)),
        },
        "en-US",
    ),
    { makeMessagesProxy: u } = n(632296),
    _ = u(c),
    { createLoader: E } = n(632296),
    A = E({ "en-US": () => n.e("350282").then(n.bind(n, 375697)) }, "en-US"),
    { makeMessagesProxy: h } = n(632296),
    f = h(A),
    I = (0, a.chainMessagesObjects)(o.A, (0, a.chainMessagesObjects)(_, f));
var p = n(226536);
let { createLoader: T } = n(632296),
    m = T({ "en-US": () => n.e("421293").then(n.bind(n, 224444)) }, "en-US"),
    { makeMessagesProxy: g } = n(632296),
    S = g(m);
function N(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let C = N("en-US"),
    O = (0, p.kt)(C, "en-US"),
    R = new a.IntlManager({ initialLocale: O, defaultLocale: "en-US" }).withFormatters({
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
function L(e) {
    return (0, p.tp)(e, R);
}
