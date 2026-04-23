"use strict";
n.d(t, { A: () => o });
var r = n(444746),
    i = n(273101),
    s = n(559374),
    a = n(190792);
function o(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var o = e.getBoundingClientRect(),
        l = 1,
        u = 1;
    t &&
        (0, r.sb)(e) &&
        ((l = (e.offsetWidth > 0 && (0, i.LI)(o.width) / e.offsetWidth) || 1),
        (u = (e.offsetHeight > 0 && (0, i.LI)(o.height) / e.offsetHeight) || 1));
    var c = ((0, r.vq)(e) ? (0, s.A)(e) : window).visualViewport,
        d = !(0, a.A)() && n,
        _ = (o.left + (d && c ? c.offsetLeft : 0)) / l,
        f = (o.top + (d && c ? c.offsetTop : 0)) / u,
        p = o.width / l,
        h = o.height / u;
    return { width: p, height: h, top: f, right: _ + p, bottom: f + h, left: _, x: _, y: f };
}
