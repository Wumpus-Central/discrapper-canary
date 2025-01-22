var i = r(706165),
    a = r(690244)('%TypeError%'),
    o = r(632384),
    s = r(710157),
    l = r(713720);
e.exports = function (e) {
    if ('Object' !== o(e)) throw new a('ToPropertyDescriptor requires an object');
    var n = {};
    if ((i(e, 'enumerable') && (n['[[Enumerable]]'] = s(e.enumerable)), i(e, 'configurable') && (n['[[Configurable]]'] = s(e.configurable)), i(e, 'value') && (n['[[Value]]'] = e.value), i(e, 'writable') && (n['[[Writable]]'] = s(e.writable)), i(e, 'get'))) {
        var r = e.get;
        if (void 0 !== r && !l(r)) throw new a('getter must be a function');
        n['[[Get]]'] = r;
    }
    if (i(e, 'set')) {
        var u = e.set;
        if (void 0 !== u && !l(u)) throw new a('setter must be a function');
        n['[[Set]]'] = u;
    }
    if ((i(n, '[[Get]]') || i(n, '[[Set]]')) && (i(n, '[[Value]]') || i(n, '[[Writable]]'))) throw new a('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
    return n;
};
