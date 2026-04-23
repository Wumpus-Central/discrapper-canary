a.d(t, { t: () => l });
var s = a(23339);
function l(e, t) {
    for (var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++) l[r - 2] = arguments[r];
    let i = l.reduce((e, t) => e + (0, s.$G)(t), ""),
        n = e[`${t}${i}`];
    return null == n ? "" : n;
}
