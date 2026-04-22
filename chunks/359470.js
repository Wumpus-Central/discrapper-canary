var a = r(577033),
    n = r(787425),
    o = Object.hasOwnProperty,
    s = Object.create(null);
for (var i in a) o.call(a, i) && (s[a[i]] = i);
var l = (e.exports = { to: {}, get: {} });
function c(e, t, r) {
    return Math.min(Math.max(t, e), r);
}
function u(e) {
    var t = Math.round(e).toString(16).toUpperCase();
    return t.length < 2 ? "0" + t : t;
}
(l.get = function (e) {
    var t, r;
    switch (e.substring(0, 3).toLowerCase()) {
        case "hsl":
            (t = l.get.hsl(e)), (r = "hsl");
            break;
        case "hwb":
            (t = l.get.hwb(e)), (r = "hwb");
            break;
        default:
            (t = l.get.rgb(e)), (r = "rgb");
    }
    return t ? { model: r, value: t } : null;
}),
    (l.get.rgb = function (e) {
        if (!e) return null;
        var t,
            r,
            n,
            s = [0, 0, 0, 1];
        if ((t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
            for (r = 0, n = t[2], t = t[1]; r < 3; r++) {
                var i = 2 * r;
                s[r] = parseInt(t.slice(i, i + 2), 16);
            }
            n && (s[3] = parseInt(n, 16) / 255);
        } else if ((t = e.match(/^#([a-f0-9]{3,4})$/i))) {
            for (r = 0, n = (t = t[1])[3]; r < 3; r++) s[r] = parseInt(t[r] + t[r], 16);
            n && (s[3] = parseInt(n + n, 16) / 255);
        } else if (
            (t = e.match(
                /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
            ))
        ) {
            for (r = 0; r < 3; r++) s[r] = parseInt(t[r + 1], 0);
            t[4] && (t[5] ? (s[3] = 0.01 * parseFloat(t[4])) : (s[3] = parseFloat(t[4])));
        } else if (
            (t = e.match(
                /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
            ))
        ) {
            for (r = 0; r < 3; r++) s[r] = Math.round(2.55 * parseFloat(t[r + 1]));
            t[4] && (t[5] ? (s[3] = 0.01 * parseFloat(t[4])) : (s[3] = parseFloat(t[4])));
        } else if (!(t = e.match(/^(\w+)$/))) return null;
        else return "transparent" === t[1] ? [0, 0, 0, 0] : o.call(a, t[1]) ? (((s = a[t[1]])[3] = 1), s) : null;
        for (r = 0; r < 3; r++) s[r] = c(s[r], 0, 255);
        return (s[3] = c(s[3], 0, 1)), s;
    }),
    (l.get.hsl = function (e) {
        if (!e) return null;
        var t = e.match(
            /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
        );
        if (t) {
            var r = parseFloat(t[4]);
            return [
                ((parseFloat(t[1]) % 360) + 360) % 360,
                c(parseFloat(t[2]), 0, 100),
                c(parseFloat(t[3]), 0, 100),
                c(isNaN(r) ? 1 : r, 0, 1),
            ];
        }
        return null;
    }),
    (l.get.hwb = function (e) {
        if (!e) return null;
        var t = e.match(
            /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
        );
        if (t) {
            var r = parseFloat(t[4]);
            return [
                ((parseFloat(t[1]) % 360) + 360) % 360,
                c(parseFloat(t[2]), 0, 100),
                c(parseFloat(t[3]), 0, 100),
                c(isNaN(r) ? 1 : r, 0, 1),
            ];
        }
        return null;
    }),
    (l.to.hex = function () {
        var e = n(arguments);
        return "#" + u(e[0]) + u(e[1]) + u(e[2]) + (e[3] < 1 ? u(Math.round(255 * e[3])) : "");
    }),
    (l.to.rgb = function () {
        var e = n(arguments);
        return e.length < 4 || 1 === e[3]
            ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")"
            : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")";
    }),
    (l.to.rgb.percent = function () {
        var e = n(arguments),
            t = Math.round((e[0] / 255) * 100),
            r = Math.round((e[1] / 255) * 100),
            a = Math.round((e[2] / 255) * 100);
        return e.length < 4 || 1 === e[3]
            ? "rgb(" + t + "%, " + r + "%, " + a + "%)"
            : "rgba(" + t + "%, " + r + "%, " + a + "%, " + e[3] + ")";
    }),
    (l.to.hsl = function () {
        var e = n(arguments);
        return e.length < 4 || 1 === e[3]
            ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
            : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
    }),
    (l.to.hwb = function () {
        var e = n(arguments),
            t = "";
        return (
            e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
        );
    }),
    (l.to.keyword = function (e) {
        return s[e.slice(0, 3)];
    });
