n.d(t, {
    K5: () => s,
    g2: () => a,
    rK: () => u
});
var r = n(868635),
    i = n(816383),
    o = 1;
function a(e) {
    var t = e.nodeType === o ? e : e.parentElement;
    if (!t) return null;
    var n = t.getBoundingClientRect(),
        r = n.top;
    return {
        x: n.left,
        y: r
    };
}
function s(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function l(e) {
    var t;
    return 'IMG' === e.nodeName && ((0, r.v)() || !(null !== (t = document.documentElement) && void 0 !== t && t.contains(e)));
}
function c(e, t, n, i) {
    var o = e ? t.width : n,
        a = e ? t.height : i;
    return (
        (0, r.G)() && e && ((a /= window.devicePixelRatio), (o /= window.devicePixelRatio)),
        {
            dragPreviewWidth: o,
            dragPreviewHeight: a
        }
    );
}
function u(e, t, n, o, s) {
    var u = l(t),
        d = a(u ? e : t),
        f = {
            x: n.x - d.x,
            y: n.y - d.y
        },
        p = e.offsetWidth,
        _ = e.offsetHeight,
        h = o.anchorX,
        m = o.anchorY,
        g = c(u, t, p, _),
        E = g.dragPreviewWidth,
        v = g.dragPreviewHeight,
        b = function () {
            var e = new i.I([0, 0.5, 1], [f.y, (f.y / _) * v, f.y + v - _]).interpolate(m);
            return (0, r.G)() && u && (e += (window.devicePixelRatio - 1) * v), e;
        },
        y = function () {
            return new i.I([0, 0.5, 1], [f.x, (f.x / p) * E, f.x + E - p]).interpolate(h);
        },
        O = s.offsetX,
        S = s.offsetY,
        I = 0 === S || S;
    return {
        x: 0 === O || O ? O : y(),
        y: I ? S : b()
    };
}
