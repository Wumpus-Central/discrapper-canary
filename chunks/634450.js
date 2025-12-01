function r(e) {
    return "/" === e.charAt(0);
}
function i(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
    e.pop();
}
n.d(t, { Z: () => a });
let a = function (e, t) {
    void 0 === t && (t = "");
    var n,
        a = (e && e.split("/")) || [],
        o = (t && t.split("/")) || [],
        s = e && r(e),
        l = t && r(t),
        c = s || l;
    if ((e && r(e) ? (o = a) : a.length && (o.pop(), (o = o.concat(a))), !o.length)) return "/";
    if (o.length) {
        var u = o[o.length - 1];
        n = "." === u || ".." === u || "" === u;
    } else n = !1;
    for (var d = 0, f = o.length; f >= 0; f--) {
        var p = o[f];
        "." === p ? i(o, f) : ".." === p ? (i(o, f), d++) : d && (i(o, f), d--);
    }
    if (!c) for (; d--; ) o.unshift("..");
    !c || "" === o[0] || (o[0] && r(o[0])) || o.unshift("");
    var _ = o.join("/");
    return n && "/" !== _.substr(-1) && (_ += "/"), _;
};
