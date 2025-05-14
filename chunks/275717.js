var e = r(621523),
    o = r(880181),
    i = /#|\.prototype\./,
    u = function (t, n) {
        var r = a[c(t)];
        return r === s || (r !== f && (o(n) ? e(n) : !!n));
    },
    c = (u.normalize = function (t) {
        return String(t).replace(i, '.').toLowerCase();
    }),
    a = (u.data = {}),
    f = (u.NATIVE = 'N'),
    s = (u.POLYFILL = 'P');
t.exports = u;
