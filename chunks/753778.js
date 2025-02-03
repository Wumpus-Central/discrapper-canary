n.d(t, { w: () => d });
var i = n(259630),
    r = n(731750),
    a = n(19929),
    s = n(548097),
    o = n(739292);
function l(e, t) {
    return Object.keys(e).reduce(function (n, r) {
        return (n[r] = (0, i.pi)({ timeZone: t }, e[r])), n;
    }, {});
}
function u(e, t) {
    return Object.keys((0, i.pi)((0, i.pi)({}, e), t)).reduce(function (n, r) {
        return (n[r] = (0, i.pi)((0, i.pi)({}, e[r] || {}), t[r] || {})), n;
    }, {});
}
function c(e, t) {
    if (!t) return e;
    var n = a.C.formats;
    return (0, i.pi)((0, i.pi)((0, i.pi)({}, n), e), {
        date: u(l(n.date, t), l(e.date || {}, t)),
        time: u(l(n.time, t), l(e.time || {}, t))
    });
}
var d = function (e, t, n, a, l) {
    var u = e.locale,
        d = e.formats,
        f = e.messages,
        _ = e.defaultLocale,
        p = e.defaultFormats,
        h = e.fallbackOnEmptyString,
        m = e.onError,
        g = e.timeZone,
        E = e.defaultRichTextElements;
    void 0 === n && (n = { id: '' });
    var v = n.id,
        y = n.defaultMessage;
    (0, r.kG)(!!v, '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue');
    var I = String(v),
        b = f && Object.prototype.hasOwnProperty.call(f, I) && f[I];
    if (Array.isArray(b) && 1 === b.length && b[0].type === o.wD.literal) return b[0].value;
    if (!a && b && 'string' == typeof b && !E) return b.replace(/'\{(.*?)\}'/gi, '{$1}');
    if (((a = (0, i.pi)((0, i.pi)({}, E), a || {})), (d = c(d, g)), (p = c(p, g)), !b)) {
        if (!1 === h && '' === b) return b;
        if (((!y || (u && u.toLowerCase() !== _.toLowerCase())) && m(new s.$6(n, u)), y))
            try {
                var T = t.getMessageFormat(y, _, p, l);
                return T.format(a);
            } catch (e) {
                return m(new s.X9('Error formatting default message for: "'.concat(I, '", rendering default message verbatim'), u, n, e)), 'string' == typeof y ? y : I;
            }
        return I;
    }
    try {
        var T = t.getMessageFormat(b, u, d, (0, i.pi)({ formatters: t }, l || {}));
        return T.format(a);
    } catch (e) {
        m(new s.X9('Error formatting message: "'.concat(I, '", using ').concat(y ? 'default message' : 'id', ' as fallback.'), u, n, e));
    }
    if (y)
        try {
            var T = t.getMessageFormat(y, _, p, l);
            return T.format(a);
        } catch (e) {
            m(new s.X9('Error formatting the default message for: "'.concat(I, '", rendering message verbatim'), u, n, e));
        }
    return 'string' == typeof b ? b : 'string' == typeof y ? y : I;
};
