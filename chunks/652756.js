n.d(t, {
    K5: () => o,
    g2: () => s,
    rK: () => c
});
var i = n(868635),
    r = n(816383),
    a = 1;
function s(e) {
    var t = e.nodeType === a ? e : e.parentElement;
    if (!t) return null;
    var n = t.getBoundingClientRect(),
        i = n.top;
    return {
        x: n.left,
        y: i
    };
}
function o(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function l(e) {
    var t;
    return 'IMG' === e.nodeName && ((0, i.v)() || !(null !== (t = document.documentElement) && void 0 !== t && t.contains(e)));
}
function u(e, t, n, r) {
    var a = e ? t.width : n,
        s = e ? t.height : r;
    return (
        (0, i.G)() && e && ((s /= window.devicePixelRatio), (a /= window.devicePixelRatio)),
        {
            dragPreviewWidth: a,
            dragPreviewHeight: s
        }
    );
}
function c(e, t, n, a, o) {
    var c = l(t),
        d = s(c ? e : t),
        f = {
            x: n.x - d.x,
            y: n.y - d.y
        },
        _ = e.offsetWidth,
        p = e.offsetHeight,
        h = a.anchorX,
        m = a.anchorY,
        g = u(c, t, _, p),
        E = g.dragPreviewWidth,
        v = g.dragPreviewHeight,
        y = function () {
            var e = new r.I([0, 0.5, 1], [f.y, (f.y / p) * v, f.y + v - p]).interpolate(m);
            return (0, i.G)() && c && (e += (window.devicePixelRatio - 1) * v), e;
        },
        I = function () {
            return new r.I([0, 0.5, 1], [f.x, (f.x / _) * E, f.x + E - _]).interpolate(h);
        },
        T = o.offsetX,
        b = o.offsetY,
        S = 0 === b || b;
    return {
        x: 0 === T || T ? T : I(),
        y: S ? b : y()
    };
}
