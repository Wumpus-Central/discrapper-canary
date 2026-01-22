n.d(t, {
    A: () => o,
});
var r = n(559374),
    i = n(688899),
    a = n(421336),
    s = n(190792);

function o(e, t) {
    var n = (0, r.A)(e),
        o = (0, i.A)(e),
        l = n.visualViewport,
        c = o.clientWidth,
        u = o.clientHeight,
        d = 0,
        f = 0;
    if (l) {
        (c = l.width), (u = l.height);
        var p = (0, s.A)();
        (p || (!p && "fixed" === t)) && ((d = l.offsetLeft), (f = l.offsetTop));
    }
    return {
        width: c,
        height: u,
        x: d + (0, a.A)(e),
        y: f,
    };
}
