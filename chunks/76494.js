var r = n(41518);
(e.exports = function (e, t, n, i, a) {
    var s = r(e, t, n, i, a);
    return s.next().then(function (e) {
        return e.done ? e.value : s.next();
    });
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
