var i = r(474867),
    a = r(587816);
function s(e, n, r) {
    if (i()) return Reflect.construct.apply(null, arguments);
    var s = [null];
    s.push.apply(s, n);
    var o = new (e.bind.apply(e, s))();
    return r && a(o, r.prototype), o;
}
(e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);
