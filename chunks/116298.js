var r = n(134533),
    i = n(690244),
    o = r() && i('%Object.defineProperty%', !0),
    a = r.hasArrayLengthDefineBug(),
    s = a && n(453312),
    l = n(192853)('Object.prototype.propertyIsEnumerable');
e.exports = function (e, t, n, r, i, c) {
    if (!o) {
        if (!e(c) || !c['[[Configurable]]'] || !c['[[Writable]]'] || (i in r && l(r, i) !== !!c['[[Enumerable]]'])) return !1;
        var u = c['[[Value]]'];
        return (r[i] = u), t(r[i], u);
    }
    return a && 'length' === i && '[[Value]]' in c && s(r) && r.length !== c['[[Value]]'] ? ((r.length = c['[[Value]]']), r.length === c['[[Value]]']) : (o(r, i, n(c)), !0);
};
