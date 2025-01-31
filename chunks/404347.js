n.d(t, { Z: () => a });
var i = n(978856),
    r = n(764303);
function a(e, t) {
    if (null == e) return {};
    var n,
        a,
        s = {},
        o = i(e);
    for (a = 0; a < o.length; a++) (n = o[a]), r(t).call(t, n) >= 0 || (s[n] = e[n]);
    return s;
}
