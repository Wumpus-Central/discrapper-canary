r.d(t, { Z: () => a });
var n = r(675717),
    o = Object.create;
let a = (function () {
    function e() {}
    return function (t) {
        if (!(0, n.Z)(t)) return {};
        if (o) return o(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
    };
})();
