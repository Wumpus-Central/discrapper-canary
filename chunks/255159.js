var r = n(260789),
    i = n(987307);
(e.exports = function (e, t, n) {
    if (r()) return Reflect.construct.apply(null, arguments);
    var s = [null];
    s.push.apply(s, t);
    var a = new (e.bind.apply(e, s))();
    return n && i(a, n.prototype), a;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
