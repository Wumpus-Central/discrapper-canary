var r = n(46015),
    i = n(497464),
    o = n(382698),
    a = n(868984),
    s = r(''.replace),
    l = RegExp('^[' + a + ']+'),
    c = RegExp('(^|[^' + a + '])[' + a + ']+$'),
    u = function (e) {
        return function (t) {
            var n = o(i(t));
            return 1 & e && (n = s(n, l, '')), 2 & e && (n = s(n, c, '$1')), n;
        };
    };
e.exports = {
    start: u(1),
    end: u(2),
    trim: u(3)
};
