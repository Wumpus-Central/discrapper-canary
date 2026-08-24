var n = r(842595),
    i = r(850361);
(e.exports = function (e, t, r) {
    if (n()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, t);
    var a = new (e.bind.apply(e, o))();
    return r && i(a, r.prototype), a;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
