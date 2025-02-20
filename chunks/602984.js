n.d(t, { U: () => o });
var r = {},
    i = function (e, t, n, r) {
        if ('undefined' == typeof document && !r) return null;
        var i = r ? new r() : document.createElement('canvas');
        (i.width = 2 * n), (i.height = 2 * n);
        var o = i.getContext('2d');
        return o ? ((o.fillStyle = e), o.fillRect(0, 0, i.width, i.height), (o.fillStyle = t), o.fillRect(0, 0, n, n), o.translate(n, n), o.fillRect(0, 0, n, n), i.toDataURL()) : null;
    },
    o = function (e, t, n, o) {
        var a = e + '-' + t + '-' + n + (o ? '-server' : '');
        if (r[a]) return r[a];
        var s = i(e, t, n, o);
        return (r[a] = s), s;
    };
