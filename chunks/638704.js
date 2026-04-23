"use strict";
n.d(t, { A: () => o });
var r = n(559751),
    i = n(499702),
    s = n(264816),
    a = n(140851);
function o(e) {
    var t,
        n = e.reference,
        o = e.element,
        l = e.placement,
        u = l ? (0, r.A)(l) : null,
        c = l ? (0, i.A)(l) : null,
        d = n.x + n.width / 2 - o.width / 2,
        _ = n.y + n.height / 2 - o.height / 2;
    switch (u) {
        case a.Mn:
            t = { x: d, y: n.y - o.height };
            break;
        case a.sQ:
            t = { x: d, y: n.y + n.height };
            break;
        case a.pG:
            t = { x: n.x + n.width, y: _ };
            break;
        case a.kb:
            t = { x: n.x - o.width, y: _ };
            break;
        default:
            t = { x: n.x, y: n.y };
    }
    var f = u ? (0, s.A)(u) : null;
    if (null != f) {
        var p = "y" === f ? "height" : "width";
        switch (c) {
            case a.ni:
                t[f] = t[f] - (n[p] / 2 - o[p] / 2);
                break;
            case a._N:
                t[f] = t[f] + (n[p] / 2 - o[p] / 2);
        }
    }
    return t;
}
