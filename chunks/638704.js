n.d(t, { A: () => o });
var r = n(559751),
    i = n(499702),
    a = n(264816),
    s = n(140851);
function o(e) {
    var t,
        n = e.reference,
        o = e.element,
        l = e.placement,
        c = l ? (0, r.A)(l) : null,
        u = l ? (0, i.A)(l) : null,
        d = n.x + n.width / 2 - o.width / 2,
        f = n.y + n.height / 2 - o.height / 2;
    switch (c) {
        case s.Mn:
            t = {
                x: d,
                y: n.y - o.height,
            };
            break;
        case s.sQ:
            t = {
                x: d,
                y: n.y + n.height,
            };
            break;
        case s.pG:
            t = {
                x: n.x + n.width,
                y: f,
            };
            break;
        case s.kb:
            t = {
                x: n.x - o.width,
                y: f,
            };
            break;
        default:
            t = {
                x: n.x,
                y: n.y,
            };
    }
    var p = c ? (0, a.A)(c) : null;
    if (null != p) {
        var _ = "y" === p ? "height" : "width";
        switch (u) {
            case s.ni:
                t[p] = t[p] - (n[_] / 2 - o[_] / 2);
                break;
            case s._N:
                t[p] = t[p] + (n[_] / 2 - o[_] / 2);
        }
    }
    return t;
}
