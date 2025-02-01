n.d(t, { Z: () => a });
var i = n(675717),
    r = Object.create;
let a = (function () {
    function e() {}
    return function (t) {
        if (!(0, i.Z)(t)) return {};
        if (r) return r(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
    };
})();
