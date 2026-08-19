var n = r(842595),
    o = r(850361);
(e.exports = function (e, t, r) {
    if (n()) return Reflect.construct.apply(null, arguments);
    var i = [null];
    i.push.apply(i, t);
    var a = new (e.bind.apply(e, i))();
    return r && o(a, r.prototype), a;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
