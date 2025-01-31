n.d(t, { U: () => a });
var i = {},
    r = function (e, t, n, i) {
        if ('undefined' == typeof document && !i) return null;
        var r = i ? new i() : document.createElement('canvas');
        (r.width = 2 * n), (r.height = 2 * n);
        var a = r.getContext('2d');
        return a ? ((a.fillStyle = e), a.fillRect(0, 0, r.width, r.height), (a.fillStyle = t), a.fillRect(0, 0, n, n), a.translate(n, n), a.fillRect(0, 0, n, n), r.toDataURL()) : null;
    },
    a = function (e, t, n, a) {
        var s = e + '-' + t + '-' + n + (a ? '-server' : '');
        if (i[s]) return i[s];
        var o = r(e, t, n, a);
        return (i[s] = o), o;
    };
