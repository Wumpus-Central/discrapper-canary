var r = a(936940),
    n = a(354848),
    _ = /#|\.prototype\./,
    o = function (t, e) {
        var a = c[i(t)];
        return a === E || (a !== s && (n(e) ? r(e) : !!e));
    },
    i = (o.normalize = function (t) {
        return String(t).replace(_, '.').toLowerCase();
    }),
    c = (o.data = {}),
    s = (o.NATIVE = 'N'),
    E = (o.POLYFILL = 'P');
t.exports = o;
