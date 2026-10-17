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
    o = n(346148);
let { createLoader: d } = n(632296),
    c = d(
        {
            bg: () => n.e("181552").then(n.t.bind(n, 843571, 19)),
            cs: () => n.e("359079").then(n.t.bind(n, 143130, 19)),
            da: () => n.e("864400").then(n.t.bind(n, 433555, 19)),
            de: () => n.e("73060").then(n.t.bind(n, 989391, 19)),
            el: () => n.e("722650").then(n.t.bind(n, 952929, 19)),
            "en-GB": () => n.e("78314").then(n.t.bind(n, 153905, 19)),
            "es-419": () => n.e("822500").then(n.t.bind(n, 776719, 19)),
            "es-ES": () => n.e("466922").then(n.t.bind(n, 887409, 19)),
            fi: () => n.e("215370").then(n.t.bind(n, 799697, 19)),
            fr: () => n.e("15425").then(n.t.bind(n, 983512, 19)),
            hi: () => n.e("229916").then(n.t.bind(n, 488343, 19)),
            hr: () => n.e("192263").then(n.t.bind(n, 101306, 19)),
            hu: () => n.e("363152").then(n.t.bind(n, 361043, 19)),
            id: () => n.e("708814").then(n.t.bind(n, 701981, 19)),
            it: () => n.e("737982").then(n.t.bind(n, 334925, 19)),
            ja: () => n.e("69206").then(n.t.bind(n, 519733, 19)),
            ko: () => n.e("350595").then(n.t.bind(n, 325646, 19)),
            lt: () => n.e("725941").then(n.t.bind(n, 651860, 19)),
            nl: () => n.e("195055").then(n.t.bind(n, 265842, 19)),
            no: () => n.e("657836").then(n.t.bind(n, 857895, 19)),
            pl: () => n.e("998153").then(n.t.bind(n, 415472, 19)),
            "pt-BR": () => n.e("899322").then(n.t.bind(n, 943425, 19)),
            ro: () => n.e("911048").then(n.t.bind(n, 492603, 19)),
            ru: () => n.e("902490").then(n.t.bind(n, 545313, 19)),
            "sv-SE": () => n.e("949859").then(n.t.bind(n, 632750, 19)),
            th: () => n.e("59921").then(n.t.bind(n, 507496, 19)),
            tr: () => n.e("611027").then(n.t.bind(n, 937758, 19)),
            uk: () => n.e("426381").then(n.t.bind(n, 364892, 19)),
            vi: () => n.e("22650").then(n.t.bind(n, 699137, 19)),
            "zh-CN": () => n.e("570047").then(n.t.bind(n, 236994, 19)),
            "zh-TW": () => n.e("24979").then(n.t.bind(n, 745246, 19)),
            "en-US": () => n.e("441180").then(n.bind(n, 739415)),
        },
        "en-US",
    ),
    { makeMessagesProxy: u } = n(632296),
    _ = u(c),
    { createLoader: E } = n(632296),
    A = E({ "en-US": () => n.e("532341").then(n.bind(n, 873748)) }, "en-US"),
    { makeMessagesProxy: h } = n(632296),
    f = h(A),
    I = (0, a.chainMessagesObjects)(o.A, (0, a.chainMessagesObjects)(_, f));
var p = n(226536);
let { createLoader: T } = n(632296),
    m = T({ "en-US": () => n.e("598892").then(n.bind(n, 449255)) }, "en-US"),
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
