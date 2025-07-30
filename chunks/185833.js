n.d(t, {
    B8: () => o,
    Jn: () => c,
    L_: () => d,
    Ym: () => l,
    g7: () => f,
    m4: () => s,
    sA: () => _,
    wb: () => u
});
var r = '[-+]?\\d*\\.?\\d+',
    i = r + '%';
function a() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var o = RegExp('rgb' + a(r, r, r)),
    s = RegExp('rgba' + a(r, r, r, r)),
    l = RegExp('hsl' + a(r, i, i)),
    c = RegExp('hsla' + a(r, i, i, r)),
    u = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    f = /^#([0-9a-fA-F]{6})$/,
    _ = /^#([0-9a-fA-F]{8})$/;
