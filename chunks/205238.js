"use strict";
n.d(t, { A: () => o });
var r = n(559374),
    i = n(688899),
    a = n(421336),
    s = n(190792);
function o(e, t) {
    var n = (0, r.A)(e),
        o = (0, i.A)(e),
        l = n.visualViewport,
        u = o.clientWidth,
        c = o.clientHeight,
        d = 0,
        _ = 0;
    if (l) {
        (u = l.width), (c = l.height);
        var f = (0, s.A)();
        (f || (!f && "fixed" === t)) && ((d = l.offsetLeft), (_ = l.offsetTop));
    }
    return { width: u, height: c, x: d + (0, a.A)(e), y: _ };
}
