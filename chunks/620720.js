n.d(t, { Z: () => s });
var r = n(310680),
    i = n(660027),
    o = n(49691),
    a = n(538018);
function s(e, t) {
    void 0 === t && (t = []);
    var n,
        l = (0, r.Z)(e),
        c = l === (null == (n = e.ownerDocument) ? void 0 : n.body),
        u = (0, o.Z)(l),
        d = c ? [u].concat(u.visualViewport || [], (0, a.Z)(l) ? l : []) : l,
        f = t.concat(d);
    return c ? f : f.concat(s((0, i.Z)(d)));
}
