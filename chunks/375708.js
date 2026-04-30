"use strict";
n.r(t),
    n.d(t, {
        international: () => A,
        initialLocale: () => S,
        intl: () => N,
        getSystemLocale: () => I,
        useSyncMessages: () => y,
        t: () => f,
        getLanguages: () => p,
        getAvailableLocales: () => h,
        systemLocale: () => T,
    });
var i = n(627968),
    r = n(64700),
    s = n(919523),
    a = n(791332),
    o = n.n(a),
    l = n(692914);
let { createLoader: u } = n(919523),
    c = u({ "en-US": () => n.e("16423").then(n.bind(n, 342778)) }, "en-US"),
    { makeMessagesProxy: d } = n(919523),
    _ = d(c),
    f = (0, s.chainMessagesObjects)(l.A, _);
function h() {
    let e = n(692914).A;
    return p()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((t) => {
            let { code: n, name: i } = t;
            return { value: n, name: i, localizedName: e[(0, s.runtimeHashMessageKey)(n)] };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: i } = t;
            return (n = n.toLowerCase()) < (i = i.toLowerCase()) ? -1 : +(n > i);
        });
}
function p() {
    return n(416678);
}
let { createLoader: E } = n(919523),
    m = E({ "en-US": () => n.e("80558").then(n.bind(n, 125309)) }, "en-US"),
    { makeMessagesProxy: g } = n(919523),
    A = g(m);
function I(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let T = I("en-US"),
    S = (function (e, t) {
        let n = p()
            .filter((e) => {
                let { enabled: t } = e;
                return t;
            })
            .map((e) => {
                let { code: t } = e;
                return t;
            });
        if (n.includes(e)) return e;
        let i = e.split("-");
        return n.includes(i[0])
            ? i[0]
            : "zh" === i[0] && i.length > 1 && "Hant" === i[1]
              ? (n.find((e) => "zh-TW" === e) ?? t)
              : (n.find((e) => e.split("-")[0] === i[0]) ?? t);
    })(T, "en-US"),
    N = new s.IntlManager({ initialLocale: S, defaultLocale: "en-US" }).withFormatters({
        format: (0, s.makeReactFormatter)({
            $i: (e, t) => (0, i.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, i.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, i.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, i.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, i.jsx)("code", { children: e }, t),
            $link: (e, t, i) => {
                let [s] = i,
                    { Anchor: a } = n(349288),
                    l = {};
                switch (typeof s) {
                    case "string":
                        l.href = o().sanitizeUrl(s);
                        break;
                    case "function":
                    default:
                        l.onClick = s;
                        break;
                    case "object":
                        if (null == s) break;
                        (l.onClick = s.onClick ?? s), (l.onContextMenu = s.onContextMenu);
                }
                return (0, r.createElement)(a, { ...l, key: t }, e);
            },
        }),
        formatToPlainString: s.stringFormatter,
        formatToMarkdownString: s.markdownFormatter,
        formatToParts: s.astFormatter,
    }),
    y = (e) => {
        r.useSyncExternalStore(
            (t) => e.onChange(t),
            () => e.isLocaleLoaded(N.currentLocale),
        );
    };
