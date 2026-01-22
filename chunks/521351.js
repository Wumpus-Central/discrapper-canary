var r = n(503628),
    i = n(339626),
    a = /#|\.prototype\./,
    s = function (e, t) {
        var n = l[o(e)];
        return n === u || (n !== c && (i(t) ? r(t) : !!t));
    },
    o = (s.normalize = function (e) {
        return String(e).replace(a, ".").toLowerCase();
    }),
    l = (s.data = {}),
    c = (s.NATIVE = "N"),
    u = (s.POLYFILL = "P");
e.exports = s;
