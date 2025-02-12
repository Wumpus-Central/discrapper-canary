a.d(e, {
    Fv: () => i,
    Qy: () =>
        function t(e, a = 3, r = 102400) {
            let n = i(e, a);
            return ~-encodeURI(JSON.stringify(n)).split(/%..|./).length > r ? t(e, a - 1, r) : n;
        }
});
var r = a(573736),
    n = a(41754),
    _ = a(370336),
    o = a(688838);
function i(t, e = 100, a = Infinity) {
    try {
        return (function t(e, a, i = Infinity, c = Infinity, s = (0, n.i)()) {
            let [E, l] = s;
            if (null == a || (['number', 'boolean', 'string'].includes(typeof a) && !Number.isNaN(a))) return a;
            let u = (function (t, e) {
                try {
                    if ('domain' === t && e && 'object' == typeof e && e._events) return '[Domain]';
                    if ('domainEmitter' === t) return '[DomainEmitter]';
                    if ('undefined' != typeof global && e === global) return '[Global]';
                    if ('undefined' != typeof window && e === window) return '[Window]';
                    if ('undefined' != typeof document && e === document) return '[Document]';
                    if ((0, r.y1)(e)) return '[VueViewModel]';
                    if ((0, r.Cy)(e)) return '[SyntheticEvent]';
                    if ('number' == typeof e && e != e) return '[NaN]';
                    if ('function' == typeof e) return `[Function: ${(0, o.$P)(e)}]`;
                    if ('symbol' == typeof e) return `[${String(e)}]`;
                    if ('bigint' == typeof e) return `[BigInt: ${String(e)}]`;
                    let a = (function (t) {
                        let e = Object.getPrototypeOf(t);
                        return e ? e.constructor.name : 'null prototype';
                    })(e);
                    if (/^HTML(\w*)Element$/.test(a)) return `[HTMLElement: ${a}]`;
                    return `[object ${a}]`;
                } catch (t) {
                    return `**non-serializable** (${t})`;
                }
            })(e, a);
            if (!u.startsWith('[object ')) return u;
            if (a.__sentry_skip_normalization__) return a;
            let I = 'number' == typeof a.__sentry_override_normalization_depth__ ? a.__sentry_override_normalization_depth__ : i;
            if (0 === I) return u.replace('object ', '');
            if (E(a)) return '[Circular ~]';
            if (a && 'function' == typeof a.toJSON)
                try {
                    let e = a.toJSON();
                    return t('', e, I - 1, c, s);
                } catch (t) {}
            let R = Array.isArray(a) ? [] : {},
                d = 0,
                A = (0, _.Sh)(a);
            for (let e in A) {
                if (!Object.prototype.hasOwnProperty.call(A, e)) continue;
                if (d >= c) {
                    R[e] = '[MaxProperties ~]';
                    break;
                }
                let a = A[e];
                (R[e] = t(e, a, I - 1, c, s)), d++;
            }
            return l(a), R;
        })('', t, e, a);
    } catch (t) {
        return { ERROR: `**non-serializable** (${t})` };
    }
}
