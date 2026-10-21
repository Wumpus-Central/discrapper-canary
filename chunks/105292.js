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
    o = n(855494);
let { createLoader: d } = n(632296),
    c = d(
        {
            bg: () => n.e("192870").then(n.t.bind(n, 659781, 19)),
            cs: () => n.e("603181").then(n.t.bind(n, 53564, 19)),
            da: () => n.e("369414").then(n.t.bind(n, 4517, 19)),
            de: () => n.e("760018").then(n.t.bind(n, 410857, 19)),
            el: () => n.e("80880").then(n.t.bind(n, 954035, 19)),
            "en-GB": () => n.e("91760").then(n.t.bind(n, 676467, 19)),
            "es-419": () => n.e("839542").then(n.t.bind(n, 920149, 19)),
            "es-ES": () => n.e("911244").then(n.t.bind(n, 703751, 19)),
            fi: () => n.e("657036").then(n.t.bind(n, 168007, 19)),
            fr: () => n.e("342743").then(n.t.bind(n, 428170, 19)),
            hi: () => n.e("340026").then(n.t.bind(n, 89601, 19)),
            hr: () => n.e("171793").then(n.t.bind(n, 674856, 19)),
            hu: () => n.e("932806").then(n.t.bind(n, 640997, 19)),
            id: () => n.e("60316").then(n.t.bind(n, 714967, 19)),
            it: () => n.e("704172").then(n.t.bind(n, 224679, 19)),
            ja: () => n.e("727232").then(n.t.bind(n, 73347, 19)),
            ko: () => n.e("46121").then(n.t.bind(n, 163920, 19)),
            lt: () => n.e("797299").then(n.t.bind(n, 188798, 19)),
            nl: () => n.e("315529").then(n.t.bind(n, 805936, 19)),
            no: () => n.e("599338").then(n.t.bind(n, 956273, 19)),
            pl: () => n.e("28783").then(n.t.bind(n, 656306, 19)),
            "pt-BR": () => n.e("673324").then(n.t.bind(n, 378855, 19)),
            ro: () => n.e("629262").then(n.t.bind(n, 233373, 19)),
            ru: () => n.e("503740").then(n.t.bind(n, 210487, 19)),
            "sv-SE": () => n.e("324545").then(n.t.bind(n, 528920, 19)),
            th: () => n.e("97351").then(n.t.bind(n, 361146, 19)),
            tr: () => n.e("570773").then(n.t.bind(n, 227892, 19)),
            uk: () => n.e("739831").then(n.t.bind(n, 625706, 19)),
            vi: () => n.e("63644").then(n.t.bind(n, 878807, 19)),
            "zh-CN": () => n.e("306277").then(n.t.bind(n, 576836, 19)),
            "zh-TW": () => n.e("366365").then(n.t.bind(n, 128812, 19)),
            "en-US": () => n.e("515122").then(n.bind(n, 634121)),
        },
        "en-US",
    ),
    { makeMessagesProxy: u } = n(632296),
    _ = u(c),
    { createLoader: E } = n(632296),
    A = E({ "en-US": () => n.e("360115").then(n.bind(n, 236158)) }, "en-US"),
    { makeMessagesProxy: h } = n(632296),
    f = h(A),
    I = (0, a.chainMessagesObjects)(o.A, (0, a.chainMessagesObjects)(_, f));
var p = n(226536);
let { createLoader: T } = n(632296),
    m = T({ "en-US": () => n.e("386098").then(n.bind(n, 26185)) }, "en-US"),
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
