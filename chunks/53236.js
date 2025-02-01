var i = n(671235).default;
function r(e, t) {
    if ('object' != i(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' != i(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
(e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
