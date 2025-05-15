var r = n(134533),
    i = n(461648),
    o = r.hasArrayLengthDefineBug(),
    a = o && n(805906),
    s = n(166691)('Object.prototype.propertyIsEnumerable');
e.exports = function (e, t, n, r, l, c) {
    if (!i) {
        if (!e(c) || !c['[[Configurable]]'] || !c['[[Writable]]'] || (l in r && s(r, l) !== !!c['[[Enumerable]]'])) return !1;
        var u = c['[[Value]]'];
        return (r[l] = u), t(r[l], u);
    }
    return o && 'length' === l && '[[Value]]' in c && a(r) && r.length !== c['[[Value]]'] ? ((r.length = c['[[Value]]']), r.length === c['[[Value]]']) : (i(r, l, n(c)), !0);
};
