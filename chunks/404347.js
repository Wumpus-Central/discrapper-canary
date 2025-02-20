n.d(t, { Z: () => o });
var r = n(978856),
    i = n(764303);
function o(e, t) {
    if (null == e) return {};
    var n,
        o,
        a = {},
        s = r(e);
    for (o = 0; o < s.length; o++) (n = s[o]), i(t).call(t, n) >= 0 || (a[n] = e[n]);
    return a;
}
