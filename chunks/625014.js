var i = r(96403),
    a = r(463374),
    o = r(342545),
    s = r(219479),
    l = i(''.replace),
    u = RegExp('^[' + s + ']+'),
    c = RegExp('(^|[^' + s + '])[' + s + ']+$'),
    d = function (e) {
        return function (n) {
            var r = o(a(n));
            return 1 & e && (r = l(r, u, '')), 2 & e && (r = l(r, c, '$1')), r;
        };
    };
e.exports = {
    start: d(1),
    end: d(2),
    trim: d(3)
};
