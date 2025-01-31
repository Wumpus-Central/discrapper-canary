n.d(t, { Z: () => o });
var i = n(310680),
    r = n(660027),
    a = n(49691),
    s = n(538018);
function o(e, t) {
    void 0 === t && (t = []);
    var n,
        l = (0, i.Z)(e),
        u = l === (null == (n = e.ownerDocument) ? void 0 : n.body),
        c = (0, a.Z)(l),
        d = u ? [c].concat(c.visualViewport || [], (0, s.Z)(l) ? l : []) : l,
        f = t.concat(d);
    return u ? f : f.concat(o((0, r.Z)(d)));
}
