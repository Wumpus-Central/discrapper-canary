n.d(t, { Z: () => s });
var r = n(882159),
    i = n(894417),
    o = n(49691),
    a = n(436857);
function s(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var s = e.getBoundingClientRect(),
        l = 1,
        c = 1;
    t && (0, r.Re)(e) && ((l = (e.offsetWidth > 0 && (0, i.NM)(s.width) / e.offsetWidth) || 1), (c = (e.offsetHeight > 0 && (0, i.NM)(s.height) / e.offsetHeight) || 1));
    var u = ((0, r.kK)(e) ? (0, o.Z)(e) : window).visualViewport,
        d = !(0, a.Z)() && n,
        f = (s.left + (d && u ? u.offsetLeft : 0)) / l,
        _ = (s.top + (d && u ? u.offsetTop : 0)) / c,
        p = s.width / l,
        h = s.height / c;
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
