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
            return _;
        },
        t: function () {
            return E;
        }
    });
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(969090);
var l = r(477660),
    u = r.n(l),
    c = r(424395),
    d = r(610398),
    f = r(754419),
    p = r(776288);
function h(e) {
    return [Array.isArray(navigator.languages) ? navigator.languages[0] : null, navigator.language, navigator.browserLanguage, navigator.userLanguage, e].find((e) => null != e && '' !== e);
}
let _ = h('en-US'),
    m = (0, c.YI)(_, 'en-US'),
    g = new s.IntlManager({
        initialLocale: m,
        defaultLocale: 'en-US'
    }).withFormatters({
        format: (0, s.makeReactFormatter)({
            $i: (e, n) => (0, a.jsx)('em', { children: e }, n),
            $b: (e, n) => (0, a.jsx)('strong', { children: e }, n),
            $del: (e, n) => (0, a.jsx)('del', { children: e }, n),
            $p: (e, n) => (0, a.jsx)('p', { children: e }, n),
            $code: (e, n) => (0, a.jsx)('code', { children: e }, n),
            $link: (e, n, i) => {
                let [a] = i,
                    { Anchor: s } = r(756715),
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
                return (0, o.createElement)(
                    s,
                    {
                        ...l,
                        key: n
                    },
                    e
                );
            }
        }),
        formatToPlainString: s.stringFormatter,
        formatToMarkdownString: s.markdownFormatter,
        formatToParts: s.astFormatter
    }),
    E = {
        ...d.Z,
        ...p.Z
    };
