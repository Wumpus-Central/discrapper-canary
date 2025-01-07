function n() {
    try {
        var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return ((e.exports = n =
        function () {
            return !!r;
        }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports))();
}
(e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
