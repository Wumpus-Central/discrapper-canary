n.d(t, {
    K5: () => s,
    g2: () => o,
    rK: () => u
});
var r = n(868635),
    i = n(816383),
    a = 1;
function o(e) {
    var t = e.nodeType === a ? e : e.parentElement;
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
    var a = e ? t.width : n,
        o = e ? t.height : i;
    return (
        (0, r.G)() && e && ((o /= window.devicePixelRatio), (a /= window.devicePixelRatio)),
        {
            dragPreviewWidth: a,
            dragPreviewHeight: o
        }
    );
}
function u(e, t, n, a, s) {
    var u = l(t),
        d = o(u ? e : t),
        _ = {
            x: n.x - d.x,
            y: n.y - d.y
        },
        f = e.offsetWidth,
        p = e.offsetHeight,
        h = a.anchorX,
        m = a.anchorY,
        g = c(u, t, f, p),
        E = g.dragPreviewWidth,
        b = g.dragPreviewHeight,
        y = function () {
            var e = new i.I([0, 0.5, 1], [_.y, (_.y / p) * b, _.y + b - p]).interpolate(m);
            return ((0, r.G)() && u && (e += (window.devicePixelRatio - 1) * b), e);
        },
        O = function () {
            return new i.I([0, 0.5, 1], [_.x, (_.x / f) * E, _.x + E - f]).interpolate(h);
        },
        v = s.offsetX,
        I = s.offsetY,
        T = 0 === I || I;
    return {
        x: 0 === v || v ? v : O(),
        y: T ? I : y()
    };
}
