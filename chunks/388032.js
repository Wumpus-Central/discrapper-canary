n.d(t, {
    Kj: () => c,
    NW: () => f,
    St: () => d,
    Vb: () => u.Vb,
    t: () => l.k,
    u5: () => u.u5
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(389117),
    s = n(477660),
    o = n.n(s),
    l = n(253185),
    u = n(424395);
n(490097);
let c = (function (e) {
        return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
    })('en-US'),
    d = (0, u.YI)(c, 'en-US'),
    f = new a.IntlManager({
        initialLocale: d,
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
                return (0, i.createElement)(
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
