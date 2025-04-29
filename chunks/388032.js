n.r(t),
    n.d(t, {
        getAvailableLocales: () => c.u5,
        getLanguages: () => c.Vb,
        getSystemLocale: () => h,
        initialLocale: () => g,
        international: () => u.Z,
        intl: () => E,
        systemLocale: () => m,
        t: () => l.k,
        useSyncMessages: () => b
    }),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(66685),
    a = n(159635),
    s = n.n(a),
    l = n(253185),
    c = n(424395),
    u = n(120235);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
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
function p(e, t) {
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
    return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
}
let m = h('en-US'),
    g = (0, c.YI)(m, 'en-US'),
    E = new o.IntlManager({
        initialLocale: g,
        defaultLocale: 'en-US'
    }).withFormatters({
        format: (0, o.makeReactFormatter)({
            $i: (e, t) => (0, r.jsx)('em', { children: e }, t),
            $b: (e, t) => (0, r.jsx)('strong', { children: e }, t),
            $del: (e, t) => (0, r.jsx)('del', { children: e }, t),
            $p: (e, t) => (0, r.jsx)('p', { children: e }, t),
            $code: (e, t) => (0, r.jsx)('code', { children: e }, t),
            $link: (e, t, r) => {
                let [o] = r,
                    { Anchor: a } = n(756715),
                    l = {};
                switch (typeof o) {
                    case 'string':
                        l.href = s().sanitizeUrl(o);
                        break;
                    case 'function':
                    default:
                        l.onClick = o;
                        break;
                    case 'object':
                        var c;
                        if (null == o) break;
                        (l.onClick = null != (c = o.onClick) ? c : o), (l.onContextMenu = o.onContextMenu);
                }
                return (0, i.createElement)(a, p(f({}, l), { key: t }), e);
            }
        }),
        formatToPlainString: o.stringFormatter,
        formatToMarkdownString: o.markdownFormatter,
        formatToParts: o.astFormatter
    }),
    b = (e) => (0, c.j1)(e, E);
