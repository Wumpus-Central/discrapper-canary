r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(310680),
    a = r(660027),
    o = r(49691),
    s = r(538018);
function l(e, n) {
    void 0 === n && (n = []);
    var r,
        u = (0, i.Z)(e),
        c = u === (null == (r = e.ownerDocument) ? void 0 : r.body),
        d = (0, o.Z)(u),
        f = c ? [d].concat(d.visualViewport || [], (0, s.Z)(u) ? u : []) : u,
        p = n.concat(f);
    return c ? p : p.concat(l((0, a.Z)(f)));
}
