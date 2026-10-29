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
    o = n(995632);
let { createLoader: d } = n(632296),
    c = d(
        {
            bg: () => n.e("556780").then(n.t.bind(n, 787879, 19)),
            cs: () => n.e("89147").then(n.t.bind(n, 182198, 19)),
            da: () => n.e("728220").then(n.t.bind(n, 956183, 19)),
            de: () => n.e("646056").then(n.t.bind(n, 360667, 19)),
            el: () => n.e("243662").then(n.t.bind(n, 625309, 19)),
            "en-GB": () => n.e("707622").then(n.t.bind(n, 607365, 19)),
            "es-419": () => n.e("643296").then(n.t.bind(n, 112995, 19)),
            "es-ES": () => n.e("409278").then(n.t.bind(n, 985485, 19)),
            fi: () => n.e("889318").then(n.t.bind(n, 10437, 19)),
            fr: () => n.e("592029").then(n.t.bind(n, 985900, 19)),
            hi: () => n.e("353248").then(n.t.bind(n, 81187, 19)),
            hr: () => n.e("424475").then(n.t.bind(n, 357654, 19)),
            hu: () => n.e("594828").then(n.t.bind(n, 565511, 19)),
            id: () => n.e("360378").then(n.t.bind(n, 858113, 19)),
            it: () => n.e("804394").then(n.t.bind(n, 46769, 19)),
            ja: () => n.e("521386").then(n.t.bind(n, 488433, 19)),
            ko: () => n.e("663631").then(n.t.bind(n, 426258, 19)),
            lt: () => n.e("890473").then(n.t.bind(n, 915536, 19)),
            nl: () => n.e("107203").then(n.t.bind(n, 681294, 19)),
            no: () => n.e("514240").then(n.t.bind(n, 400195, 19)),
            pl: () => n.e("676773").then(n.t.bind(n, 843332, 19)),
            "pt-BR": () => n.e("857734").then(n.t.bind(n, 755045, 19)),
            ro: () => n.e("371444").then(n.t.bind(n, 235167, 19)),
            ru: () => n.e("762998").then(n.t.bind(n, 526037, 19)),
            "sv-SE": () => n.e("119671").then(n.t.bind(n, 997866, 19)),
            th: () => n.e("169341").then(n.t.bind(n, 507596, 19)),
            tr: () => n.e("266719").then(n.t.bind(n, 464162, 19)),
            uk: () => n.e("858313").then(n.t.bind(n, 37680, 19)),
            vi: () => n.e("271030").then(n.t.bind(n, 349013, 19)),
            "zh-CN": () => n.e("46699").then(n.t.bind(n, 257446, 19)),
            "zh-TW": () => n.e("806551").then(n.t.bind(n, 383370, 19)),
            "en-US": () => n.e("140064").then(n.bind(n, 825635)),
        },
        "en-US",
    ),
    { makeMessagesProxy: u } = n(632296),
    _ = u(c),
    { createLoader: E } = n(632296),
    A = E({ "en-US": () => n.e("186425").then(n.bind(n, 831328)) }, "en-US"),
    { makeMessagesProxy: h } = n(632296),
    f = h(A),
    I = (0, a.chainMessagesObjects)(o.A, (0, a.chainMessagesObjects)(_, f));
var p = n(226536);
let { createLoader: T } = n(632296),
    m = T({ "en-US": () => n.e("478136").then(n.bind(n, 351339)) }, "en-US"),
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
