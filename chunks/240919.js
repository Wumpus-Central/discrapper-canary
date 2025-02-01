var i = n(706165),
    r = n(690244)('%TypeError%'),
    a = n(632384),
    s = n(710157),
    o = n(713720);
e.exports = function (e) {
    if ('Object' !== a(e)) throw new r('ToPropertyDescriptor requires an object');
    var t = {};
    if ((i(e, 'enumerable') && (t['[[Enumerable]]'] = s(e.enumerable)), i(e, 'configurable') && (t['[[Configurable]]'] = s(e.configurable)), i(e, 'value') && (t['[[Value]]'] = e.value), i(e, 'writable') && (t['[[Writable]]'] = s(e.writable)), i(e, 'get'))) {
        var n = e.get;
        if (void 0 !== n && !o(n)) throw new r('getter must be a function');
        t['[[Get]]'] = n;
    }
    if (i(e, 'set')) {
        var l = e.set;
        if (void 0 !== l && !o(l)) throw new r('setter must be a function');
        t['[[Set]]'] = l;
    }
    if ((i(t, '[[Get]]') || i(t, '[[Set]]')) && (i(t, '[[Value]]') || i(t, '[[Writable]]'))) throw new r('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
    return t;
};
