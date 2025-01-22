r.d(n, {
    w: function () {
        return f;
    }
});
var i = r(259630),
    a = r(731750),
    o = r(19929),
    s = r(548097),
    l = r(739292);
function u(e, n) {
    return Object.keys(e).reduce(function (r, a) {
        return (r[a] = (0, i.pi)({ timeZone: n }, e[a])), r;
    }, {});
}
function c(e, n) {
    return Object.keys((0, i.pi)((0, i.pi)({}, e), n)).reduce(function (r, a) {
        return (r[a] = (0, i.pi)((0, i.pi)({}, e[a] || {}), n[a] || {})), r;
    }, {});
}
function d(e, n) {
    if (!n) return e;
    var r = o.C.formats;
    return (0, i.pi)((0, i.pi)((0, i.pi)({}, r), e), {
        date: c(u(r.date, n), u(e.date || {}, n)),
        time: c(u(r.time, n), u(e.time || {}, n))
    });
}
var f = function (e, n, r, o, u) {
    var c = e.locale,
        f = e.formats,
        p = e.messages,
        h = e.defaultLocale,
        _ = e.defaultFormats,
        m = e.fallbackOnEmptyString,
        g = e.onError,
        E = e.timeZone,
        v = e.defaultRichTextElements;
    void 0 === r && (r = { id: '' });
    var y = r.id,
        b = r.defaultMessage;
    (0, a.kG)(!!y, '[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue');
    var I = String(y),
        T = p && Object.prototype.hasOwnProperty.call(p, I) && p[I];
    if (Array.isArray(T) && 1 === T.length && T[0].type === l.wD.literal) return T[0].value;
    if (!o && T && 'string' == typeof T && !v) return T.replace(/'\{(.*?)\}'/gi, '{$1}');
    if (((o = (0, i.pi)((0, i.pi)({}, v), o || {})), (f = d(f, E)), (_ = d(_, E)), !T)) {
        if (!1 === m && '' === T) return T;
        if (((!b || (c && c.toLowerCase() !== h.toLowerCase())) && g(new s.$6(r, c)), b))
            try {
                var S = n.getMessageFormat(b, h, _, u);
                return S.format(o);
            } catch (e) {
                return g(new s.X9('Error formatting default message for: "'.concat(I, '", rendering default message verbatim'), c, r, e)), 'string' == typeof b ? b : I;
            }
        return I;
    }
    try {
        var S = n.getMessageFormat(T, c, f, (0, i.pi)({ formatters: n }, u || {}));
        return S.format(o);
    } catch (e) {
        g(new s.X9('Error formatting message: "'.concat(I, '", using ').concat(b ? 'default message' : 'id', ' as fallback.'), c, r, e));
    }
    if (b)
        try {
            var S = n.getMessageFormat(b, h, _, u);
            return S.format(o);
        } catch (e) {
            g(new s.X9('Error formatting the default message for: "'.concat(I, '", rendering message verbatim'), c, r, e));
        }
    return 'string' == typeof T ? T : 'string' == typeof b ? b : I;
};
