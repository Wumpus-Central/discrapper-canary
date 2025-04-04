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
    return 'IMG' === e.nodeName && ((0, r.v)() || !(null != (t = document.documentElement) && t.contains(e)));
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
        _ = e.offsetWidth,
        p = e.offsetHeight,
        h = o.anchorX,
        m = o.anchorY,
        g = c(u, t, _, p),
        E = g.dragPreviewWidth,
        b = g.dragPreviewHeight,
        y = function () {
            var e = new i.I([0, 0.5, 1], [f.y, (f.y / p) * b, f.y + b - p]).interpolate(m);
            return (0, r.G)() && u && (e += (window.devicePixelRatio - 1) * b), e;
        },
        v = function () {
            return new i.I([0, 0.5, 1], [f.x, (f.x / _) * E, f.x + E - _]).interpolate(h);
        },
        O = s.offsetX,
        I = s.offsetY,
        S = 0 === I || I;
    return {
        x: 0 === O || O ? O : v(),
        y: S ? I : y()
    };
}
