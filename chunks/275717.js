var r = n(621523),
    i = n(880181),
    a = /#|\.prototype\./,
    o = function (e, t) {
        var n = l[s(e)];
        return n === u || (n !== c && (i(t) ? r(t) : !!t));
    },
    s = (o.normalize = function (e) {
        return String(e).replace(a, '.').toLowerCase();
    }),
    l = (o.data = {}),
    c = (o.NATIVE = 'N'),
    u = (o.POLYFILL = 'P');
e.exports = o;
