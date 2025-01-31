n.d(t, { Z: () => f });
var i = n(49691),
    r = n(316138),
    a = n(874900),
    s = n(882159),
    o = n(953177),
    l = n(660027),
    u = n(408431);
function c(e) {
    return (0, s.Re)(e) && 'fixed' !== (0, a.Z)(e).position ? e.offsetParent : null;
}
function d(e) {
    var t = /firefox/i.test((0, u.Z)());
    if (/Trident/i.test((0, u.Z)()) && (0, s.Re)(e) && 'fixed' === (0, a.Z)(e).position) return null;
    var n = (0, l.Z)(e);
    for ((0, s.Zq)(n) && (n = n.host); (0, s.Re)(n) && 0 > ['html', 'body'].indexOf((0, r.Z)(n)); ) {
        var i = (0, a.Z)(n);
        if ('none' !== i.transform || 'none' !== i.perspective || 'paint' === i.contain || -1 !== ['transform', 'perspective'].indexOf(i.willChange) || (t && 'filter' === i.willChange) || (t && i.filter && 'none' !== i.filter)) return n;
        n = n.parentNode;
    }
    return null;
}
function f(e) {
    for (var t = (0, i.Z)(e), n = c(e); n && (0, o.Z)(n) && 'static' === (0, a.Z)(n).position; ) n = c(n);
    return n && ('html' === (0, r.Z)(n) || ('body' === (0, r.Z)(n) && 'static' === (0, a.Z)(n).position)) ? t : n || d(e) || t;
}
