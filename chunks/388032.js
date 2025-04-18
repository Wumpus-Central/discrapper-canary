n.d(t, {
    Kj: () => p,
    NW: () => m,
    St: () => h,
    Vb: () => c.Vb,
    j1: () => g,
    t: () => l.k,
    u5: () => c.u5
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(164484),
    o = n(477660),
    s = n.n(o),
    l = n(253185),
    c = n(424395);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(120235);
let p = (function (e) {
        return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
    })('en-US'),
    h = (0, c.YI)(p, 'en-US'),
    m = new a.IntlManager({
        initialLocale: h,
        defaultLocale: 'en-US'
    }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, r.jsx)('em', { children: e }, t),
            $b: (e, t) => (0, r.jsx)('strong', { children: e }, t),
            $del: (e, t) => (0, r.jsx)('del', { children: e }, t),
            $p: (e, t) => (0, r.jsx)('p', { children: e }, t),
            $code: (e, t) => (0, r.jsx)('code', { children: e }, t),
            $link: (e, t, r) => {
                let [a] = r,
                    { Anchor: o } = n(756715),
                    l = {};
                switch (typeof a) {
                    case 'string':
                        l.href = s().sanitizeUrl(a);
                        break;
                    case 'function':
                    default:
                        l.onClick = a;
                        break;
                    case 'object':
                        var c;
                        if (null == a) break;
                        (l.onClick = null != (c = a.onClick) ? c : a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, i.createElement)(o, _(d({}, l), { key: t }), e);
            }
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter
    }),
    g = (e) => (0, c.j1)(e, m);
