var i = n(96403),
    r = n(463374),
    a = n(342545),
    s = n(219479),
    o = i(''.replace),
    l = RegExp('^[' + s + ']+'),
    u = RegExp('(^|[^' + s + '])[' + s + ']+$'),
    c = function (e) {
        return function (t) {
            var n = a(r(t));
            return 1 & e && (n = o(n, l, '')), 2 & e && (n = o(n, u, '$1')), n;
        };
    };
e.exports = {
    start: c(1),
    end: c(2),
    trim: c(3)
};
