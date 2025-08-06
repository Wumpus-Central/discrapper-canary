e.exports = function () {
    if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return !1;
    if ('symbol' == typeof Symbol.iterator) return !0;
    var e = {},
        t = Symbol('test'),
        n = Object(t);
    if ('string' == typeof t || '[object Symbol]' !== Object.prototype.toString.call(t) || '[object Symbol]' !== Object.prototype.toString.call(n)) return !1;
    var r = 42;
    for (var i in ((e[t] = r), e)) return !1;
    if (('function' == typeof Object.keys && 0 !== Object.keys(e).length) || ('function' == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length)) return !1;
    var o = Object.getOwnPropertySymbols(e);
    if (1 !== o.length || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
    if ('function' == typeof Object.getOwnPropertyDescriptor) {
        var a = Object.getOwnPropertyDescriptor(e, t);
        if (a.value !== r || !0 !== a.enumerable) return !1;
    }
    return !0;
};
