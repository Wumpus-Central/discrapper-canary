var r = n(410323),
    i = n(321727),
    a = n(304880),
    s = n(633851),
    o = r("".replace),
    l = RegExp("^[" + s + "]+"),
    c = RegExp("(^|[^" + s + "])[" + s + "]+$"),
    u = function (e) {
        return function (t) {
            var n = a(i(t));
            return 1 & e && (n = o(n, l, "")), 2 & e && (n = o(n, c, "$1")), n;
        };
    };
e.exports = {
    start: u(1),
    end: u(2),
    trim: u(3),
};
