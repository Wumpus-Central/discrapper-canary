n.d(t, {
    A: () => o,
});
var r = n(444746),
    i = n(273101),
    a = n(559374),
    s = n(190792);

function o(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var o = e.getBoundingClientRect(),
        l = 1,
        c = 1;
    t &&
        (0, r.sb)(e) &&
        ((l = (e.offsetWidth > 0 && (0, i.LI)(o.width) / e.offsetWidth) || 1),
        (c = (e.offsetHeight > 0 && (0, i.LI)(o.height) / e.offsetHeight) || 1));
    var u = ((0, r.vq)(e) ? (0, a.A)(e) : window).visualViewport,
        d = !(0, s.A)() && n,
        f = (o.left + (d && u ? u.offsetLeft : 0)) / l,
        p = (o.top + (d && u ? u.offsetTop : 0)) / c,
        _ = o.width / l,
        h = o.height / c;
    return {
        width: _,
        height: h,
        top: p,
        right: f + _,
        bottom: p + h,
        left: f,
        x: f,
        y: p,
    };
}
