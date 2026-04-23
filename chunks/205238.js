"use strict";
n.d(t, { A: () => o });
var r = n(559374),
    i = n(688899),
    s = n(421336),
    a = n(190792);
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
        var f = (0, a.A)();
        (f || (!f && "fixed" === t)) && ((d = l.offsetLeft), (_ = l.offsetTop));
    }
    return { width: u, height: c, x: d + (0, s.A)(e), y: _ };
}
