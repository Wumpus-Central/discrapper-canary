var i = r(134533)(),
    a = r(690244),
    o = i && a('%Object.defineProperty%', !0);
if (o)
    try {
        o({}, 'a', { value: 1 });
    } catch (e) {
        o = !1;
    }
var s = a('%SyntaxError%'),
    l = a('%TypeError%'),
    u = r(49662);
e.exports = function (e, n, r) {
    if (!e || ('object' != typeof e && 'function' != typeof e)) throw new l('`obj` must be an object or a function`');
    if ('string' != typeof n && 'symbol' != typeof n) throw new l('`property` must be a string or a symbol`');
    if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3]) throw new l('`nonEnumerable`, if provided, must be a boolean or null');
    if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4]) throw new l('`nonWritable`, if provided, must be a boolean or null');
    if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5]) throw new l('`nonConfigurable`, if provided, must be a boolean or null');
    if (arguments.length > 6 && 'boolean' != typeof arguments[6]) throw new l('`loose`, if provided, must be a boolean');
    var i = arguments.length > 3 ? arguments[3] : null,
        a = arguments.length > 4 ? arguments[4] : null,
        c = arguments.length > 5 ? arguments[5] : null,
        d = arguments.length > 6 && arguments[6],
        f = !!u && u(e, n);
    if (o)
        o(e, n, {
            configurable: null === c && f ? f.configurable : !c,
            enumerable: null === i && f ? f.enumerable : !i,
            value: r,
            writable: null === a && f ? f.writable : !a
        });
    else if (!d && (i || a || c)) throw new s('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
    else e[n] = r;
};
