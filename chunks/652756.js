r.d(n, {
    K5: function () {
        return l;
    },
    g2: function () {
        return s;
    },
    rK: function () {
        return d;
    }
});
var i = r(868635),
    a = r(816383),
    o = 1;
function s(e) {
    var n = e.nodeType === o ? e : e.parentElement;
    if (!n) return null;
    var r = n.getBoundingClientRect(),
        i = r.top;
    return {
        x: r.left,
        y: i
    };
}
function l(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function u(e) {
    var n;
    return 'IMG' === e.nodeName && ((0, i.v)() || !(null !== (n = document.documentElement) && void 0 !== n && n.contains(e)));
}
function c(e, n, r, a) {
    var o = e ? n.width : r,
        s = e ? n.height : a;
    return (
        (0, i.G)() && e && ((s /= window.devicePixelRatio), (o /= window.devicePixelRatio)),
        {
            dragPreviewWidth: o,
            dragPreviewHeight: s
        }
    );
}
function d(e, n, r, o, l) {
    var d = u(n),
        f = s(d ? e : n),
        p = {
            x: r.x - f.x,
            y: r.y - f.y
        },
        h = e.offsetWidth,
        _ = e.offsetHeight,
        m = o.anchorX,
        g = o.anchorY,
        E = c(d, n, h, _),
        v = E.dragPreviewWidth,
        y = E.dragPreviewHeight,
        b = function () {
            var e = new a.I([0, 0.5, 1], [p.y, (p.y / _) * y, p.y + y - _]).interpolate(g);
            return (0, i.G)() && d && (e += (window.devicePixelRatio - 1) * y), e;
        },
        I = function () {
            return new a.I([0, 0.5, 1], [p.x, (p.x / h) * v, p.x + v - h]).interpolate(m);
        },
        T = l.offsetX,
        S = l.offsetY,
        A = 0 === S || S;
    return {
        x: 0 === T || T ? T : I(),
        y: A ? S : b()
    };
}
