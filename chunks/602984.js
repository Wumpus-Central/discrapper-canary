r.d(n, {
    U: function () {
        return o;
    }
});
var i = {},
    a = function (e, n, r, i) {
        if ('undefined' == typeof document && !i) return null;
        var a = i ? new i() : document.createElement('canvas');
        (a.width = 2 * r), (a.height = 2 * r);
        var o = a.getContext('2d');
        return o ? ((o.fillStyle = e), o.fillRect(0, 0, a.width, a.height), (o.fillStyle = n), o.fillRect(0, 0, r, r), o.translate(r, r), o.fillRect(0, 0, r, r), a.toDataURL()) : null;
    },
    o = function (e, n, r, o) {
        var s = e + '-' + n + '-' + r + (o ? '-server' : '');
        if (i[s]) return i[s];
        var l = a(e, n, r, o);
        return (i[s] = l), l;
    };
