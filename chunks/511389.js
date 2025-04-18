var r = n(706165),
    i = n(815329),
    a = n(983018),
    o = n(907614),
    s = n(951575);
e.exports = function (e) {
    if (!s(e)) throw new i('ToPropertyDescriptor requires an object');
    var t = {};
    if ((r(e, 'enumerable') && (t['[[Enumerable]]'] = o(e.enumerable)), r(e, 'configurable') && (t['[[Configurable]]'] = o(e.configurable)), r(e, 'value') && (t['[[Value]]'] = e.value), r(e, 'writable') && (t['[[Writable]]'] = o(e.writable)), r(e, 'get'))) {
        var n = e.get;
        if (void 0 !== n && !a(n)) throw new i('getter must be a function');
        t['[[Get]]'] = n;
    }
    if (r(e, 'set')) {
        var l = e.set;
        if (void 0 !== l && !a(l)) throw new i('setter must be a function');
        t['[[Set]]'] = l;
    }
    if ((r(t, '[[Get]]') || r(t, '[[Set]]')) && (r(t, '[[Value]]') || r(t, '[[Writable]]'))) throw new i('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
    return t;
};
