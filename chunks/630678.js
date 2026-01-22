function r(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    r(t, e);
    var n = t.prototype;
    return (
        (n.getType = function () {
            return this.get("type");
        }),
        (n.getMutability = function () {
            return this.get("mutability");
        }),
        (n.getData = function () {
            return this.get("data");
        }),
        t
    );
})(
    (0, n(116740).Record)({
        type: "TOKEN",
        mutability: "IMMUTABLE",
        data: Object,
    }),
);
