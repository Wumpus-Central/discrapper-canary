n.d(t, { Z: () => a });
var r = n(978856),
    o = n(764303);
function a(e, t) {
    if (null == e) return {};
    var n,
        a,
        i = {},
        s = r(e);
    for (a = 0; a < s.length; a++) (n = s[a]), o(t).call(t, n) >= 0 || (i[n] = e[n]);
    return i;
}
