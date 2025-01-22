var i = r(474867),
    a = r(587816);
function o(e, n, r) {
    if (i()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, n);
    var s = new (e.bind.apply(e, o))();
    return r && a(s, r.prototype), s;
}
(e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
