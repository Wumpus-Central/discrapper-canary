n.d(t, { Qy: () => l });
var r = n(573736),
    i = n(41754),
    a = n(370336),
    o = n(688838);
function s(e, t = 100, n = Infinity) {
    try {
        return c('', e, t, n);
    } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
    }
}
function l(e, t = 3, n = 102400) {
    let r = s(e, t);
    return f(r) > n ? l(e, t - 1, n) : r;
}
function c(e, t, n = Infinity, r = Infinity, o = (0, i.i)()) {
    let [s, l] = o;
    if (null == t || (['number', 'boolean', 'string'].includes(typeof t) && !Number.isNaN(t))) return t;
    let d = u(e, t);
    if (!d.startsWith('[object ')) return d;
    if (t.__sentry_skip_normalization__) return t;
    let _ = 'number' == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
    if (0 === _) return d.replace('object ', '');
    if (s(t)) return '[Circular ~]';
    let f = t;
    if (f && 'function' == typeof f.toJSON)
        try {
            let e = f.toJSON();
            return c('', e, _ - 1, r, o);
        } catch (e) {}
    let p = Array.isArray(t) ? [] : {},
        h = 0,
        m = (0, a.Sh)(t);
    for (let e in m) {
        if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
        if (h >= r) {
            p[e] = '[MaxProperties ~]';
            break;
        }
        let t = m[e];
        ((p[e] = c(e, t, _ - 1, r, o)), h++);
    }
    return (l(t), p);
}
function u(e, t) {
    try {
        if ('domain' === e && t && 'object' == typeof t && t._events) return '[Domain]';
        if ('domainEmitter' === e) return '[DomainEmitter]';
        if ('undefined' != typeof global && t === global) return '[Global]';
        if ('undefined' != typeof window && t === window) return '[Window]';
        if ('undefined' != typeof document && t === document) return '[Document]';
        if ((0, r.y1)(t)) return '[VueViewModel]';
        if ((0, r.Cy)(t)) return '[SyntheticEvent]';
        if ('number' == typeof t && t != t) return '[NaN]';
        if ('function' == typeof t) return `[Function: ${(0, o.$P)(t)}]`;
        if ('symbol' == typeof t) return `[${String(t)}]`;
        if ('bigint' == typeof t) return `[BigInt: ${String(t)}]`;
        let n = d(t);
        if (/^HTML(\w*)Element$/.test(n)) return `[HTMLElement: ${n}]`;
        return `[object ${n}]`;
    } catch (e) {
        return `**non-serializable** (${e})`;
    }
}
function d(e) {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : 'null prototype';
}
function _(e) {
    return ~-encodeURI(e).split(/%..|./).length;
}
function f(e) {
    return _(JSON.stringify(e));
}
