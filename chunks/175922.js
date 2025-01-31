n.d(t, { Z: () => o });
var i = n(882159),
    r = n(894417),
    a = n(49691),
    s = n(436857);
function o(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var o = e.getBoundingClientRect(),
        l = 1,
        u = 1;
    t && (0, i.Re)(e) && ((l = (e.offsetWidth > 0 && (0, r.NM)(o.width) / e.offsetWidth) || 1), (u = (e.offsetHeight > 0 && (0, r.NM)(o.height) / e.offsetHeight) || 1));
    var c = ((0, i.kK)(e) ? (0, a.Z)(e) : window).visualViewport,
        d = !(0, s.Z)() && n,
        f = (o.left + (d && c ? c.offsetLeft : 0)) / l,
        _ = (o.top + (d && c ? c.offsetTop : 0)) / u,
        p = o.width / l,
        h = o.height / u;
    return {
        width: p,
        height: h,
        top: _,
        right: f + p,
        bottom: _ + h,
        left: f,
        x: f,
        y: _
    };
}
