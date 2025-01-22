r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(49691),
    a = r(316138),
    o = r(874900),
    s = r(882159),
    l = r(953177),
    u = r(660027),
    c = r(408431);
function d(e) {
    return (0, s.Re)(e) && 'fixed' !== (0, o.Z)(e).position ? e.offsetParent : null;
}
function f(e) {
    var n = /firefox/i.test((0, c.Z)());
    if (/Trident/i.test((0, c.Z)()) && (0, s.Re)(e) && 'fixed' === (0, o.Z)(e).position) return null;
    var r = (0, u.Z)(e);
    for ((0, s.Zq)(r) && (r = r.host); (0, s.Re)(r) && 0 > ['html', 'body'].indexOf((0, a.Z)(r)); ) {
        var i = (0, o.Z)(r);
        if ('none' !== i.transform || 'none' !== i.perspective || 'paint' === i.contain || -1 !== ['transform', 'perspective'].indexOf(i.willChange) || (n && 'filter' === i.willChange) || (n && i.filter && 'none' !== i.filter)) return r;
        r = r.parentNode;
    }
    return null;
}
function p(e) {
    for (var n = (0, i.Z)(e), r = d(e); r && (0, l.Z)(r) && 'static' === (0, o.Z)(r).position; ) r = d(r);
    return r && ('html' === (0, a.Z)(r) || ('body' === (0, a.Z)(r) && 'static' === (0, o.Z)(r).position)) ? n : r || f(e) || n;
}
