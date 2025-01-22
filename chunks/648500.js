var i = r(675717),
    a = Object.create,
    o = (function () {
        function e() {}
        return function (n) {
            if (!(0, i.Z)(n)) return {};
            if (a) return a(n);
            e.prototype = n;
            var r = new e();
            return (e.prototype = void 0), r;
        };
    })();
n.Z = o;
