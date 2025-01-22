r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(126387),
    a = r(632471),
    o = r(205208),
    s = r(740078);
function l(e) {
    var n,
        r = e.reference,
        l = e.element,
        u = e.placement,
        c = u ? (0, i.Z)(u) : null,
        d = u ? (0, a.Z)(u) : null,
        f = r.x + r.width / 2 - l.width / 2,
        p = r.y + r.height / 2 - l.height / 2;
    switch (c) {
        case s.we:
            n = {
                x: f,
                y: r.y - l.height
            };
            break;
        case s.I:
            n = {
                x: f,
                y: r.y + r.height
            };
            break;
        case s.F2:
            n = {
                x: r.x + r.width,
                y: p
            };
            break;
        case s.t$:
            n = {
                x: r.x - l.width,
                y: p
            };
            break;
        default:
            n = {
                x: r.x,
                y: r.y
            };
    }
    var h = c ? (0, o.Z)(c) : null;
    if (null != h) {
        var _ = 'y' === h ? 'height' : 'width';
        switch (d) {
            case s.BL:
                n[h] = n[h] - (r[_] / 2 - l[_] / 2);
                break;
            case s.ut:
                n[h] = n[h] + (r[_] / 2 - l[_] / 2);
        }
    }
    return n;
}
