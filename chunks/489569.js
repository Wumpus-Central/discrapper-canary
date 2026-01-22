a.d(t, {
    t: () => l,
});
var s = a(23339);

function l(e, t) {
    for (var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++) l[r - 2] = arguments[r];
    let n = l.reduce((e, t) => e + (0, s.$G)(t), ""),
        i = e["".concat(t).concat(n)];
    return null == i ? "" : i;
}
