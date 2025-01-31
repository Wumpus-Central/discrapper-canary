n.d(t, { Z: () => o });
var i = n(49691),
    r = n(285363),
    a = n(977489),
    s = n(436857);
function o(e, t) {
    var n = (0, i.Z)(e),
        o = (0, r.Z)(e),
        l = n.visualViewport,
        u = o.clientWidth,
        c = o.clientHeight,
        d = 0,
        f = 0;
    if (l) {
        (u = l.width), (c = l.height);
        var _ = (0, s.Z)();
        (_ || (!_ && 'fixed' === t)) && ((d = l.offsetLeft), (f = l.offsetTop));
    }
    return {
        width: u,
        height: c,
        x: d + (0, a.Z)(e),
        y: f
    };
}
