var n = e(503628),
    o = e(339626),
    i = /#|\.prototype\./,
    u = function (r, t) {
        var e = c[a(r)];
        return e === s || (e !== f && (o(t) ? n(t) : !!t));
    },
    a = (u.normalize = function (r) {
        return String(r).replace(i, ".").toLowerCase();
    }),
    c = (u.data = {}),
    f = (u.NATIVE = "N"),
    s = (u.POLYFILL = "P");
r.exports = u;
