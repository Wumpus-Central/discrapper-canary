n.d(t, { Z: () => f });
var r = n(49691),
    i = n(316138),
    o = n(874900),
    a = n(882159),
    s = n(953177),
    l = n(660027),
    c = n(408431);
function u(e) {
    return (0, a.Re)(e) && 'fixed' !== (0, o.Z)(e).position ? e.offsetParent : null;
}
function d(e) {
    var t = /firefox/i.test((0, c.Z)());
    if (/Trident/i.test((0, c.Z)()) && (0, a.Re)(e) && 'fixed' === (0, o.Z)(e).position) return null;
    var n = (0, l.Z)(e);
    for ((0, a.Zq)(n) && (n = n.host); (0, a.Re)(n) && 0 > ['html', 'body'].indexOf((0, i.Z)(n)); ) {
        var r = (0, o.Z)(n);
        if ('none' !== r.transform || 'none' !== r.perspective || 'paint' === r.contain || -1 !== ['transform', 'perspective'].indexOf(r.willChange) || (t && 'filter' === r.willChange) || (t && r.filter && 'none' !== r.filter)) return n;
        n = n.parentNode;
    }
    return null;
}
function f(e) {
    for (var t = (0, r.Z)(e), n = u(e); n && (0, s.Z)(n) && 'static' === (0, o.Z)(n).position; ) n = u(n);
    return n && ('html' === (0, i.Z)(n) || ('body' === (0, i.Z)(n) && 'static' === (0, o.Z)(n).position)) ? t : n || d(e) || t;
}
