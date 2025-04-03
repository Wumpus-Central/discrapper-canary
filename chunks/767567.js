var a = t(198208),
    o = t(46818).default;
(e.exports = function (e, r) {
    if ('object' !== o(e) || null === e) return e;
    var t = e[a];
    if (void 0 !== t) {
        var n = t.call(e, r || 'default');
        if ('object' !== o(n)) return n;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(e);
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
