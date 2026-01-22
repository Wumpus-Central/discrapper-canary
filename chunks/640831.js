n.d(t, {
    B3: () => o,
    E1: () => f,
    KI: () => l,
    NV: () => u,
    Qh: () => s,
    UM: () => p,
    Ui: () => d,
    V$: () => c,
});
var r = "[-+]?\\d*\\.?\\d+",
    i = r + "%";
function a() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var s = RegExp("rgb" + a(r, r, r)),
    o = RegExp("rgba" + a(r, r, r, r)),
    l = RegExp("hsl" + a(r, i, i)),
    c = RegExp("hsla" + a(r, i, i, r)),
    u = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    f = /^#([0-9a-fA-F]{6})$/,
    p = /^#([0-9a-fA-F]{8})$/;
