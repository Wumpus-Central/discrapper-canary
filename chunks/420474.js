"use strict";
n.d(t, { A: () => I });
var r = n(140851),
    i = n(205238),
    a = n(853717),
    s = n(389704),
    o = n(821085),
    l = n(688899),
    u = n(175924),
    c = n(444746),
    d = n(514467),
    _ = n(543894),
    f = n(865645),
    p = n(619881),
    h = n(395177),
    m = n(273101);
function g(e, t) {
    var n = (0, d.A)(e, !1, "fixed" === t);
    return (
        (n.top = n.top + e.clientTop),
        (n.left = n.left + e.clientLeft),
        (n.bottom = n.top + e.clientHeight),
        (n.right = n.left + e.clientWidth),
        (n.width = e.clientWidth),
        (n.height = e.clientHeight),
        (n.x = n.left),
        (n.y = n.top),
        n
    );
}
function E(e, t, n) {
    return t === r.R9 ? (0, h.A)((0, i.A)(e, n)) : (0, c.vq)(t) ? g(t, n) : (0, h.A)((0, a.A)((0, l.A)(e)));
}
function A(e) {
    var t = (0, s.A)((0, _.A)(e)),
        n = ["absolute", "fixed"].indexOf((0, u.A)(e).position) >= 0 && (0, c.sb)(e) ? (0, o.A)(e) : e;
    return (0, c.vq)(n)
        ? t.filter(function (e) {
              return (0, c.vq)(e) && (0, f.A)(e, n) && "body" !== (0, p.A)(e);
          })
        : [];
}
function I(e, t, n, r) {
    var i = [].concat("clippingParents" === t ? A(e) : [].concat(t), [n]),
        a = i[0],
        s = i.reduce(
            function (t, n) {
                var i = E(e, n, r);
                return (
                    (t.top = (0, m.T9)(i.top, t.top)),
                    (t.right = (0, m.jk)(i.right, t.right)),
                    (t.bottom = (0, m.jk)(i.bottom, t.bottom)),
                    (t.left = (0, m.T9)(i.left, t.left)),
                    t
                );
            },
            E(e, a, r),
        );
    return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
}
