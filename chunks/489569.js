a.d(t, { t: () => l });
var s = a(23339);
function l(e, t) {
    for (var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++) l[i - 2] = arguments[i];
    let r = l.reduce((e, t) => e + (0, s.$G)(t), ""),
        n = e[`${t}${r}`];
    return null == n ? "" : n;
}
