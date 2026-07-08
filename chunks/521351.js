var n = e(503628),
    o = e(339626),
    i = /#|\.prototype\./,
    a = function (r, t) {
        var e = c[u(r)];
        return e === p || (e !== f && (o(t) ? n(t) : !!t));
    },
    u = (a.normalize = function (r) {
        return String(r).replace(i, ".").toLowerCase();
    }),
    c = (a.data = {}),
    f = (a.NATIVE = "N"),
    p = (a.POLYFILL = "P");
r.exports = a;
