n.d(t, { Z: () => l });
var i = n(285363),
    r = n(874900),
    a = n(977489),
    s = n(636226),
    o = n(894417);
function l(e) {
    var t,
        n = (0, i.Z)(e),
        l = (0, s.Z)(e),
        u = null == (t = e.ownerDocument) ? void 0 : t.body,
        c = (0, o.Fp)(n.scrollWidth, n.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0),
        d = (0, o.Fp)(n.scrollHeight, n.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0),
        f = -l.scrollLeft + (0, a.Z)(e),
        _ = -l.scrollTop;
    return (
        'rtl' === (0, r.Z)(u || n).direction && (f += (0, o.Fp)(n.clientWidth, u ? u.clientWidth : 0) - c),
        {
            width: c,
            height: d,
            x: f,
            y: _
        }
    );
}
