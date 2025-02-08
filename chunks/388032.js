n.r(t),
    n.d(t, {
        getAvailableLocales: () => l.u5,
        getLanguages: () => l.Vb,
        getSystemLocale: () => f,
        initialLocale: () => p,
        international: () => c.Z,
        intl: () => h,
        systemLocale: () => _,
        t: () => m
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(914552),
    s = n(477660),
    o = n.n(s),
    l = n(424395),
    u = n(959994),
    c = n(471049),
    d = n(630624);
function f(e) {
    return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
}
let _ = f('en-US'),
    p = (0, l.YI)(_, 'en-US'),
    h = new a.IntlManager({
        initialLocale: p,
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
    }),
    m = {
        ...u.Z,
        ...d.Z
    };
