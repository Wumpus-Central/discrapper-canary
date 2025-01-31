n.d(t, { Z: () => o });
var i = n(126387),
    r = n(632471),
    a = n(205208),
    s = n(740078);
function o(e) {
    var t,
        n = e.reference,
        o = e.element,
        l = e.placement,
        u = l ? (0, i.Z)(l) : null,
        c = l ? (0, r.Z)(l) : null,
        d = n.x + n.width / 2 - o.width / 2,
        f = n.y + n.height / 2 - o.height / 2;
    switch (u) {
        case s.we:
            t = {
                x: d,
                y: n.y - o.height
            };
            break;
        case s.I:
            t = {
                x: d,
                y: n.y + n.height
            };
            break;
        case s.F2:
            t = {
                x: n.x + n.width,
                y: f
            };
            break;
        case s.t$:
            t = {
                x: n.x - o.width,
                y: f
            };
            break;
        default:
            t = {
                x: n.x,
                y: n.y
            };
    }
    var _ = u ? (0, a.Z)(u) : null;
    if (null != _) {
        var p = 'y' === _ ? 'height' : 'width';
        switch (c) {
            case s.BL:
                t[_] = t[_] - (n[p] / 2 - o[p] / 2);
                break;
            case s.ut:
                t[_] = t[_] + (n[p] / 2 - o[p] / 2);
        }
    }
    return t;
}
