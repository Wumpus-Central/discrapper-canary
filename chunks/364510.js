var a = r(33608),
    n = r(405458),
    s = Object.hasOwnProperty,
    o = Object.create(null);
for (var i in a) s.call(a, i) && (o[a[i]] = i);
var c = (e.exports = {
    to: {},
    get: {}
});
function u(e, t, r) {
    return Math.min(Math.max(t, e), r);
}
function l(e) {
    var t = Math.round(e).toString(16).toUpperCase();
    return t.length < 2 ? '0' + t : t;
}
(c.get = function (e) {
    var t, r;
    switch (e.substring(0, 3).toLowerCase()) {
        case 'hsl':
            (t = c.get.hsl(e)), (r = 'hsl');
            break;
        case 'hwb':
            (t = c.get.hwb(e)), (r = 'hwb');
            break;
        default:
            (t = c.get.rgb(e)), (r = 'rgb');
    }
    return t
        ? {
              model: r,
              value: t
          }
        : null;
}),
    (c.get.rgb = function (e) {
        if (!e) return null;
        var t,
            r,
            n,
            o = [0, 0, 0, 1];
        if ((t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
            for (r = 0, n = t[2], t = t[1]; r < 3; r++) {
                var i = 2 * r;
                o[r] = parseInt(t.slice(i, i + 2), 16);
            }
            n && (o[3] = parseInt(n, 16) / 255);
        } else if ((t = e.match(/^#([a-f0-9]{3,4})$/i))) {
            for (r = 0, n = (t = t[1])[3]; r < 3; r++) o[r] = parseInt(t[r] + t[r], 16);
            n && (o[3] = parseInt(n + n, 16) / 255);
        } else if ((t = e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) {
            for (r = 0; r < 3; r++) o[r] = parseInt(t[r + 1], 0);
            t[4] && (t[5] ? (o[3] = 0.01 * parseFloat(t[4])) : (o[3] = parseFloat(t[4])));
        } else if ((t = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) {
            for (r = 0; r < 3; r++) o[r] = Math.round(2.55 * parseFloat(t[r + 1]));
            t[4] && (t[5] ? (o[3] = 0.01 * parseFloat(t[4])) : (o[3] = parseFloat(t[4])));
        } else if (!(t = e.match(/^(\w+)$/))) return null;
        else return 'transparent' === t[1] ? [0, 0, 0, 0] : s.call(a, t[1]) ? (((o = a[t[1]])[3] = 1), o) : null;
        for (r = 0; r < 3; r++) o[r] = u(o[r], 0, 255);
        return (o[3] = u(o[3], 0, 1)), o;
    }),
    (c.get.hsl = function (e) {
        if (!e) return null;
        var t = e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
        if (t) {
            var r = parseFloat(t[4]);
            return [((parseFloat(t[1]) % 360) + 360) % 360, u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(r) ? 1 : r, 0, 1)];
        }
        return null;
    }),
    (c.get.hwb = function (e) {
        if (!e) return null;
        var t = e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
        if (t) {
            var r = parseFloat(t[4]);
            return [((parseFloat(t[1]) % 360) + 360) % 360, u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(r) ? 1 : r, 0, 1)];
        }
        return null;
    }),
    (c.to.hex = function () {
        var e = n(arguments);
        return '#' + l(e[0]) + l(e[1]) + l(e[2]) + (e[3] < 1 ? l(Math.round(255 * e[3])) : '');
    }),
    (c.to.rgb = function () {
        var e = n(arguments);
        return e.length < 4 || 1 === e[3] ? 'rgb(' + Math.round(e[0]) + ', ' + Math.round(e[1]) + ', ' + Math.round(e[2]) + ')' : 'rgba(' + Math.round(e[0]) + ', ' + Math.round(e[1]) + ', ' + Math.round(e[2]) + ', ' + e[3] + ')';
    }),
    (c.to.rgb.percent = function () {
        var e = n(arguments),
            t = Math.round((e[0] / 255) * 100),
            r = Math.round((e[1] / 255) * 100),
            a = Math.round((e[2] / 255) * 100);
        return e.length < 4 || 1 === e[3] ? 'rgb(' + t + '%, ' + r + '%, ' + a + '%)' : 'rgba(' + t + '%, ' + r + '%, ' + a + '%, ' + e[3] + ')';
    }),
    (c.to.hsl = function () {
        var e = n(arguments);
        return e.length < 4 || 1 === e[3] ? 'hsl(' + e[0] + ', ' + e[1] + '%, ' + e[2] + '%)' : 'hsla(' + e[0] + ', ' + e[1] + '%, ' + e[2] + '%, ' + e[3] + ')';
    }),
    (c.to.hwb = function () {
        var e = n(arguments),
            t = '';
        return e.length >= 4 && 1 !== e[3] && (t = ', ' + e[3]), 'hwb(' + e[0] + ', ' + e[1] + '%, ' + e[2] + '%' + t + ')';
    }),
    (c.to.keyword = function (e) {
        return o[e.slice(0, 3)];
    });
