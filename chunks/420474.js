"use strict";
n.d(t, { A: () => g });
var r = n(140851),
    i = n(205238),
    s = n(853717),
    a = n(389704),
    o = n(821085),
    l = n(688899),
    u = n(175924),
    d = n(444746),
    c = n(514467),
    _ = n(543894),
    f = n(865645),
    E = n(619881),
    h = n(395177),
    p = n(273101);
function m(e, t, n) {
    var a;
    return t === r.R9
        ? (0, h.A)((0, i.A)(e, n))
        : (0, d.vq)(t)
          ? (((a = (0, c.A)(t, !1, "fixed" === n)).top = a.top + t.clientTop),
            (a.left = a.left + t.clientLeft),
            (a.bottom = a.top + t.clientHeight),
            (a.right = a.left + t.clientWidth),
            (a.width = t.clientWidth),
            (a.height = t.clientHeight),
            (a.x = a.left),
            (a.y = a.top),
            a)
          : (0, h.A)((0, s.A)((0, l.A)(e)));
}
function g(e, t, n, r) {
    var i,
        s,
        l = [].concat(
            "clippingParents" === t
                ? ((i = (0, a.A)((0, _.A)(e))),
                  (s = ["absolute", "fixed"].indexOf((0, u.A)(e).position) >= 0 && (0, d.sb)(e) ? (0, o.A)(e) : e),
                  (0, d.vq)(s)
                      ? i.filter(function (e) {
                            return (0, d.vq)(e) && (0, f.A)(e, s) && "body" !== (0, E.A)(e);
                        })
                      : [])
                : [].concat(t),
            [n],
        ),
        c = l[0],
        h = l.reduce(
            function (t, n) {
                var i = m(e, n, r);
                return (
                    (t.top = (0, p.T9)(i.top, t.top)),
                    (t.right = (0, p.jk)(i.right, t.right)),
                    (t.bottom = (0, p.jk)(i.bottom, t.bottom)),
                    (t.left = (0, p.T9)(i.left, t.left)),
                    t
                );
            },
            m(e, c, r),
        );
    return (h.width = h.right - h.left), (h.height = h.bottom - h.top), (h.x = h.left), (h.y = h.top), h;
}
