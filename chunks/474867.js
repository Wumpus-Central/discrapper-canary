function t() {
    try {
        var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return ((e.exports = t =
        function () {
            return !!n;
        }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports))();
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
