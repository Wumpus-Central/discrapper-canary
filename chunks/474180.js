var r = a(936940),
    n = a(354848),
    o = /#|\.prototype\./,
    _ = function (t, e) {
        var a = c[i(t)];
        return a === E || (a !== s && (n(e) ? r(e) : !!e));
    },
    i = (_.normalize = function (t) {
        return String(t).replace(o, '.').toLowerCase();
    }),
    c = (_.data = {}),
    s = (_.NATIVE = 'N'),
    E = (_.POLYFILL = 'P');
t.exports = _;
