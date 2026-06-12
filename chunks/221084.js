var i = n(509185),
    r = Object.create;
e.exports = (function () {
    function e() {}
    return function (t) {
        if (!i(t)) return {};
        if (r) return r(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
    };
})();
