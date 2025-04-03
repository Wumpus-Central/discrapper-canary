var r = n(96403),
    o = n(463374),
    a = n(342545),
    i = n(219479),
    s = r(''.replace),
    c = RegExp('^[' + i + ']+'),
    l = RegExp('(^|[^' + i + '])[' + i + ']+$'),
    u = function (e) {
        return function (t) {
            var n = a(o(t));
            return 1 & e && (n = s(n, c, '')), 2 & e && (n = s(n, l, '$1')), n;
        };
    };
e.exports = {
    start: u(1),
    end: u(2),
    trim: u(3)
};
