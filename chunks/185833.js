r.d(n, {
    B8: function () {
        return s;
    },
    Jn: function () {
        return c;
    },
    L_: function () {
        return f;
    },
    Ym: function () {
        return u;
    },
    g7: function () {
        return p;
    },
    m4: function () {
        return l;
    },
    sA: function () {
        return h;
    },
    wb: function () {
        return d;
    }
});
var i = '[-+]?\\d*\\.?\\d+',
    a = i + '%';
function o() {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var s = RegExp('rgb' + o(i, i, i)),
    l = RegExp('rgba' + o(i, i, i, i)),
    u = RegExp('hsl' + o(i, a, a)),
    c = RegExp('hsla' + o(i, a, a, i)),
    d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    f = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    p = /^#([0-9a-fA-F]{6})$/,
    h = /^#([0-9a-fA-F]{8})$/;
