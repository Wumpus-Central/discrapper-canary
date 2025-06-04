var r = n(621523),
    i = n(880181),
    o = /#|\.prototype\./,
    a = function (e, t) {
        var n = l[s(e)];
        return n === u || (n !== c && (i(t) ? r(t) : !!t));
    },
    s = (a.normalize = function (e) {
        return String(e).replace(o, '.').toLowerCase();
    }),
    l = (a.data = {}),
    c = (a.NATIVE = 'N'),
    u = (a.POLYFILL = 'P');
e.exports = a;
