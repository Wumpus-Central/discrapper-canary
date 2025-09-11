var r = n(611509),
    i = n(625105);
(e.exports = function (e, t, n) {
    if (r()) return Reflect.construct.apply(null, arguments);
    var a = [null];
    a.push.apply(a, t);
    var o = new (e.bind.apply(e, a))();
    return n && i(o, n.prototype), o;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
