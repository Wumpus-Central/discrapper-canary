r.r(n),
    r.d(n, {
        getAvailableLocales: function () {
            return c.u5;
        },
        getLanguages: function () {
            return c.Vb;
        },
        getSystemLocale: function () {
            return h;
        },
        initialLocale: function () {
            return m;
        },
        international: function () {
            return f.Z;
        },
        intl: function () {
            return g;
        },
        systemLocale: function () {
            return p;
        },
        t: function () {
            return E;
        }
    });
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(969090);
var l = r(477660),
    u = r.n(l),
    c = r(424395),
    d = r(610398),
    f = r(754419),
    _ = r(776288);
function h(e) {
    return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
}
let p = h('en-US'),
    m = (0, c.YI)(p, 'en-US'),
    g = new o.IntlManager({
        initialLocale: m,
        defaultLocale: 'en-US'
    }).withFormatters({
        format: (0, o.makeReactFormatter)({
            $i: (e, n) => (0, a.jsx)('em', { children: e }, n),
            $b: (e, n) => (0, a.jsx)('strong', { children: e }, n),
            $del: (e, n) => (0, a.jsx)('del', { children: e }, n),
            $p: (e, n) => (0, a.jsx)('p', { children: e }, n),
            $code: (e, n) => (0, a.jsx)('code', { children: e }, n),
            $link: (e, n, i) => {
                let [a] = i,
                    { Anchor: o } = r(756715),
                    l = {};
                switch (typeof a) {
                    case 'string':
                        l.href = u().sanitizeUrl(a);
                        break;
                    case 'function':
                    default:
                        l.onClick = a;
                        break;
                    case 'object':
                        var c;
                        if (null == a) break;
                        (l.onClick = null !== (c = a.onClick) && void 0 !== c ? c : a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, s.createElement)(
                    o,
                    {
                        ...l,
                        key: n
                    },
                    e
                );
            }
        }),
        formatToPlainString: o.stringFormatter,
        formatToMarkdownString: o.markdownFormatter,
        formatToParts: o.astFormatter
    }),
    E = {
        ...d.Z,
        ..._.Z
    };
