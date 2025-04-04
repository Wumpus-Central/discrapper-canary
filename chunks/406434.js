n.d(t, { Z: () => s });
var r = n(126387),
    i = n(632471),
    o = n(205208),
    a = n(740078);
function s(e) {
    var t,
        n = e.reference,
        s = e.element,
        l = e.placement,
        c = l ? (0, r.Z)(l) : null,
        u = l ? (0, i.Z)(l) : null,
        d = n.x + n.width / 2 - s.width / 2,
        f = n.y + n.height / 2 - s.height / 2;
    switch (c) {
        case a.we:
            t = {
                x: d,
                y: n.y - s.height
            };
            break;
        case a.I:
            t = {
                x: d,
                y: n.y + n.height
            };
            break;
        case a.F2:
            t = {
                x: n.x + n.width,
                y: f
            };
            break;
        case a.t$:
            t = {
                x: n.x - s.width,
                y: f
            };
            break;
        default:
            t = {
                x: n.x,
                y: n.y
            };
    }
    var _ = c ? (0, o.Z)(c) : null;
    if (null != _) {
        var p = 'y' === _ ? 'height' : 'width';
        switch (u) {
            case a.BL:
                t[_] = t[_] - (n[p] / 2 - s[p] / 2);
                break;
            case a.ut:
                t[_] = t[_] + (n[p] / 2 - s[p] / 2);
        }
    }
    return t;
}
