function n(e) {
    return 'IntlMessagesProxy' === e[Symbol.toStringTag];
}
function r(e, t) {
    let r = n(e),
        i = n(t),
        o = e;
    return r && i ? (e.$$loader.fallbackWith(t.$$loader), (o = e)) : r || i ? (r && !i ? (o = Object.assign(e.$$baseObject, t)) : i && !r && (o = Object.assign(t.$$baseObject, e))) : (o = Object.assign(Object.assign({}, t), e)), o;
}
function i(e) {
    function t(t) {
        return (n) => e.get(t, n);
    }
    let n = {},
        r = new Proxy(n, {
            ownKeys: (e) => Reflect.ownKeys(e),
            getOwnPropertyDescriptor: (e, n) => (e[n] || (e[n] = t(n)), Reflect.getOwnPropertyDescriptor(e, n)),
            get: (e, n) => ('$$typeof' === n ? 'object' : n === Symbol.toStringTag ? 'IntlMessagesProxy' : (e[n] || (e[n] = t(n)), e[n]))
        });
    return (
        Object.defineProperty(r, '$$baseObject', {
            value: n,
            enumerable: !1,
            configurable: !1,
            writable: !1
        }),
        Object.defineProperty(r, '$$loader', {
            value: e,
            enumerable: !1,
            configurable: !1,
            writable: !1
        }),
        r
    );
}
Object.defineProperty(t, '__esModule', { value: !0 }), (t.chainMessagesObjects = r), (t.makeMessagesProxy = i);
