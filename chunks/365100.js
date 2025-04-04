n.d(t, { Z: () => s });
var r = n(49691),
    i = n(285363),
    o = n(977489),
    a = n(436857);
function s(e, t) {
    var n = (0, r.Z)(e),
        s = (0, i.Z)(e),
        l = n.visualViewport,
        c = s.clientWidth,
        u = s.clientHeight,
        d = 0,
        f = 0;
    if (l) {
        (c = l.width), (u = l.height);
        var _ = (0, a.Z)();
        (_ || (!_ && 'fixed' === t)) && ((d = l.offsetLeft), (f = l.offsetTop));
    }
    return {
        width: c,
        height: u,
        x: d + (0, o.Z)(e),
        y: f
    };
}
