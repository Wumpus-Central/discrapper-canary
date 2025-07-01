var n = r(46015),
    i = r(497464),
    s = r(382698),
    a = r(868984),
    o = n(''.replace),
    u = RegExp('^[' + a + ']+'),
    h = RegExp('(^|[^' + a + '])[' + a + ']+$'),
    c = function (t) {
        return function (e) {
            var r = s(i(e));
            return (1 & t && (r = o(r, u, '')), 2 & t && (r = o(r, h, '$1')), r);
        };
    };
t.exports = {
    start: c(1),
    end: c(2),
    trim: c(3)
};
