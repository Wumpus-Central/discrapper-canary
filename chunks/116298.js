var i = r(134533),
    a = r(690244),
    o = i() && a('%Object.defineProperty%', !0),
    s = i.hasArrayLengthDefineBug(),
    l = s && r(453312),
    u = r(192853)('Object.prototype.propertyIsEnumerable');
e.exports = function (e, n, r, i, a, c) {
    if (!o) {
        if (!e(c) || !c['[[Configurable]]'] || !c['[[Writable]]'] || (a in i && u(i, a) !== !!c['[[Enumerable]]'])) return !1;
        var d = c['[[Value]]'];
        return (i[a] = d), n(i[a], d);
    }
    return s && 'length' === a && '[[Value]]' in c && l(i) && i.length !== c['[[Value]]'] ? ((i.length = c['[[Value]]']), i.length === c['[[Value]]']) : (o(i, a, r(c)), !0);
};
