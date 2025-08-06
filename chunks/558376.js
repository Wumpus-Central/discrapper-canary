n.d(t, { Z: () => l });
var r = n(285363),
    i = n(874900),
    o = n(977489),
    a = n(636226),
    s = n(894417);
function l(e) {
    var t,
        n = (0, r.Z)(e),
        l = (0, a.Z)(e),
        c = null == (t = e.ownerDocument) ? void 0 : t.body,
        u = (0, s.Fp)(n.scrollWidth, n.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0),
        d = (0, s.Fp)(n.scrollHeight, n.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0),
        f = -l.scrollLeft + (0, o.Z)(e),
        _ = -l.scrollTop;
    return (
        'rtl' === (0, i.Z)(c || n).direction && (f += (0, s.Fp)(n.clientWidth, c ? c.clientWidth : 0) - u),
        {
            width: u,
            height: d,
            x: f,
            y: _
        }
    );
}
