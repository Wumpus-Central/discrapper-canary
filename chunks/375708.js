"use strict";
n.r(t),
    n.d(t, {
        international: () => T,
        initialLocale: () => S,
        intl: () => N,
        getSystemLocale: () => m,
        useSyncMessages: () => C,
        t: () => E,
        getLanguages: () => h,
        getAvailableLocales: () => A,
        systemLocale: () => g,
    });
var i = n(477900),
    r = n(582128),
    a = n(982253),
    s = n(478676),
    l = n.n(s),
    o = n(692914);
let { createLoader: d } = n(982253),
    c = d({ "en-US": () => n.e("16423").then(n.bind(n, 342778)) }, "en-US"),
    { makeMessagesProxy: u } = n(982253),
    _ = u(c),
    E = (0, a.chainMessagesObjects)(o.A, _);
function A() {
    let e = n(692914).A;
    return h()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((t) => {
            let { code: n, name: i } = t;
            return { value: n, name: i, localizedName: e[(0, a.runtimeHashMessageKey)(n)] };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: i } = t;
            return (n = n.toLowerCase()) < (i = i.toLowerCase()) ? -1 : +(n > i);
        });
}
function h() {
    return n(416678);
}
let { createLoader: I } = n(982253),
    f = I({ "en-US": () => n.e("80558").then(n.bind(n, 125309)) }, "en-US"),
    { makeMessagesProxy: p } = n(982253),
    T = p(f);
function m(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let g = m("en-US"),
    S = (function (e, t) {
        let n = h()
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
    })(g, "en-US"),
    N = new a.IntlManager({ initialLocale: S, defaultLocale: "en-US" }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, i.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, i.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, i.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, i.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, i.jsx)("code", { children: e }, t),
            $link: (e, t, i) => {
                let [a] = i,
                    { Anchor: s } = n(349288),
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
                        (o.onClick = a.onClick ?? a), (o.onContextMenu = a.onContextMenu);
                }
                return (0, r.createElement)(s, { ...o, key: t }, e);
            },
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter,
    });
function C(e) {
    r.useSyncExternalStore(
        (t) => e.onChange(t),
        () => e.isLocaleLoaded(N.currentLocale),
    );
}
