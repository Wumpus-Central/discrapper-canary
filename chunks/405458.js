var a = r(489161),
    n = Array.prototype.concat,
    s = Array.prototype.slice,
    o = (e.exports = function (e) {
        for (var t = [], r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            a(i) ? (t = n.call(t, s.call(i))) : t.push(i);
        }
        return t;
    });
o.wrap = function (e) {
    return function () {
        return e(o(arguments));
    };
};
