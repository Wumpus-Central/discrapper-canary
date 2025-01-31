n.d(t, {
    B8: () => s,
    Jn: () => u,
    L_: () => d,
    Ym: () => l,
    g7: () => f,
    m4: () => o,
    sA: () => _,
    wb: () => c
});
var i = '[-+]?\\d*\\.?\\d+',
    r = i + '%';
function a() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var s = RegExp('rgb' + a(i, i, i)),
    o = RegExp('rgba' + a(i, i, i, i)),
    l = RegExp('hsl' + a(i, r, r)),
    u = RegExp('hsla' + a(i, r, r, i)),
    c = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    f = /^#([0-9a-fA-F]{6})$/,
    _ = /^#([0-9a-fA-F]{8})$/;
