r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(882159),
    a = r(894417),
    o = r(49691),
    s = r(436857);
function l(e, n, r) {
    void 0 === n && (n = !1), void 0 === r && (r = !1);
    var l = e.getBoundingClientRect(),
        u = 1,
        c = 1;
    n && (0, i.Re)(e) && ((u = (e.offsetWidth > 0 && (0, a.NM)(l.width) / e.offsetWidth) || 1), (c = (e.offsetHeight > 0 && (0, a.NM)(l.height) / e.offsetHeight) || 1));
    var d = ((0, i.kK)(e) ? (0, o.Z)(e) : window).visualViewport,
        f = !(0, s.Z)() && r,
        p = (l.left + (f && d ? d.offsetLeft : 0)) / u,
        h = (l.top + (f && d ? d.offsetTop : 0)) / c,
        _ = l.width / u,
        m = l.height / c;
    return {
        width: _,
        height: m,
        top: h,
        right: p + _,
        bottom: h + m,
        left: p,
        x: p,
        y: h
    };
}
