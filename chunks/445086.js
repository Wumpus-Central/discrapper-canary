var i = n(134533)(),
    r = n(690244),
    a = i && r('%Object.defineProperty%', !0);
if (a)
    try {
        a({}, 'a', { value: 1 });
    } catch (e) {
        a = !1;
    }
var s = r('%SyntaxError%'),
    o = r('%TypeError%'),
    l = n(49662);
e.exports = function (e, t, n) {
    if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`obj` must be an object or a function`');
    if ('string' != typeof t && 'symbol' != typeof t) throw new o('`property` must be a string or a symbol`');
    if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3]) throw new o('`nonEnumerable`, if provided, must be a boolean or null');
    if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4]) throw new o('`nonWritable`, if provided, must be a boolean or null');
    if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5]) throw new o('`nonConfigurable`, if provided, must be a boolean or null');
    if (arguments.length > 6 && 'boolean' != typeof arguments[6]) throw new o('`loose`, if provided, must be a boolean');
    var i = arguments.length > 3 ? arguments[3] : null,
        r = arguments.length > 4 ? arguments[4] : null,
        u = arguments.length > 5 ? arguments[5] : null,
        c = arguments.length > 6 && arguments[6],
        d = !!l && l(e, t);
    if (a)
        a(e, t, {
            configurable: null === u && d ? d.configurable : !u,
            enumerable: null === i && d ? d.enumerable : !i,
            value: n,
            writable: null === r && d ? d.writable : !r
        });
    else if (!c && (i || r || u)) throw new s('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
    else e[t] = n;
};
