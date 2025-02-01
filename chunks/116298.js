var i = n(134533),
    r = n(690244),
    a = i() && r('%Object.defineProperty%', !0),
    s = i.hasArrayLengthDefineBug(),
    o = s && n(453312),
    l = n(192853)('Object.prototype.propertyIsEnumerable');
e.exports = function (e, t, n, i, r, u) {
    if (!a) {
        if (!e(u) || !u['[[Configurable]]'] || !u['[[Writable]]'] || (r in i && l(i, r) !== !!u['[[Enumerable]]'])) return !1;
        var c = u['[[Value]]'];
        return (i[r] = c), t(i[r], c);
    }
    return s && 'length' === r && '[[Value]]' in u && o(i) && i.length !== u['[[Value]]'] ? ((i.length = u['[[Value]]']), i.length === u['[[Value]]']) : (a(i, r, n(u)), !0);
};
