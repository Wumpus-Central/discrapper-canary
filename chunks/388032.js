n.r(t),
    n.d(t, {
        getAvailableLocales: () => u.u5,
        getLanguages: () => u.Vb,
        getSystemLocale: () => d,
        initialLocale: () => _,
        international: () => c.Z,
        intl: () => p,
        systemLocale: () => f,
        t: () => l.k
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(469918),
    s = n(477660),
    o = n.n(s),
    l = n(253185),
    u = n(424395),
    c = n(814877);
function d(e) {
    return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
}
let f = d('en-US'),
    _ = (0, u.YI)(f, 'en-US'),
    p = new a.IntlManager({
        initialLocale: _,
        defaultLocale: 'en-US'
    }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, i.jsx)('em', { children: e }, t),
            $b: (e, t) => (0, i.jsx)('strong', { children: e }, t),
            $del: (e, t) => (0, i.jsx)('del', { children: e }, t),
            $p: (e, t) => (0, i.jsx)('p', { children: e }, t),
            $code: (e, t) => (0, i.jsx)('code', { children: e }, t),
            $link: (e, t, i) => {
                let [a] = i,
                    { Anchor: s } = n(756715),
                    l = {};
                switch (typeof a) {
                    case 'string':
                        l.href = o().sanitizeUrl(a);
                        break;
                    case 'function':
                    default:
                        l.onClick = a;
                        break;
                    case 'object':
                        var u;
                        if (null == a) break;
                        (l.onClick = null !== (u = a.onClick) && void 0 !== u ? u : a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, r.createElement)(
                    s,
                    {
                        ...l,
                        key: t
                    },
                    e
                );
            }
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter
    });
