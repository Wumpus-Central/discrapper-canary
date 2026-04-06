var r = n(842595),
    i = n(850361);
(e.exports = function (e, t, n) {
    if (r()) return Reflect.construct.apply(null, arguments);
    var s = [null];
    s.push.apply(s, t);
    var a = new (e.bind.apply(e, s))();
    return n && i(a, n.prototype), a;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
