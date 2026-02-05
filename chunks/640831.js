"use strict";
n.d(t, { B3: () => o, E1: () => _, KI: () => l, NV: () => c, Qh: () => s, UM: () => f, Ui: () => d, V$: () => u });
var r = "[-+]?\\d*\\.?\\d+",
    i = r + "%";
function a() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var s = RegExp("rgb" + a(r, r, r)),
    o = RegExp("rgba" + a(r, r, r, r)),
    l = RegExp("hsl" + a(r, i, i)),
    u = RegExp("hsla" + a(r, i, i, r)),
    c = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    _ = /^#([0-9a-fA-F]{6})$/,
    f = /^#([0-9a-fA-F]{8})$/;
