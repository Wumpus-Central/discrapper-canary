var r = n(948029);
(e.exports = function (e, t, n, i, a) {
    var o = r(e, t, n, i, a);
    return o.next().then(function (e) {
        return e.done ? e.value : o.next();
    });
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
