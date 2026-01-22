var r = n(260789),
    i = n(987307);
(e.exports = function (e, t, n) {
    if (r()) return Reflect.construct.apply(null, arguments);
    var a = [null];
    a.push.apply(a, t);
    var s = new (e.bind.apply(e, a))();
    return n && i(s, n.prototype), s;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
