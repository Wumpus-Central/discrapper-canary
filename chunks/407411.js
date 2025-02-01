var i = n(474867),
    r = n(587816);
function a(e, t, n) {
    if (i()) return Reflect.construct.apply(null, arguments);
    var a = [null];
    a.push.apply(a, t);
    var s = new (e.bind.apply(e, a))();
    return n && r(s, n.prototype), s;
}
(e.exports = a), (e.exports.__esModule = !0), (e.exports.default = e.exports);
