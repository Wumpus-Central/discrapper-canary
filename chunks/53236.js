var i = r(671235).default;
function a(e, n) {
    if ('object' != i(e) || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
        var a = r.call(e, n || 'default');
        if ('object' != i(a)) return a;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === n ? String : Number)(e);
}
(e.exports = a), (e.exports.__esModule = !0), (e.exports.default = e.exports);
