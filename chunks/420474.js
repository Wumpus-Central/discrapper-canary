n.d(t, {
    A: () => y,
});
var r = n(140851),
    i = n(205238),
    a = n(853717),
    s = n(389704),
    o = n(821085),
    l = n(688899),
    c = n(175924),
    u = n(444746),
    d = n(514467),
    f = n(543894),
    p = n(865645),
    _ = n(619881),
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
    return t === r.R9 ? (0, h.A)((0, i.A)(e, n)) : (0, u.vq)(t) ? g(t, n) : (0, h.A)((0, a.A)((0, l.A)(e)));
}

function b(e) {
    var t = (0, s.A)((0, f.A)(e)),
        n = ["absolute", "fixed"].indexOf((0, c.A)(e).position) >= 0 && (0, u.sb)(e) ? (0, o.A)(e) : e;
    return (0, u.vq)(n)
        ? t.filter(function (e) {
              return (0, u.vq)(e) && (0, p.A)(e, n) && "body" !== (0, _.A)(e);
          })
        : [];
}

function y(e, t, n, r) {
    var i = [].concat("clippingParents" === t ? b(e) : [].concat(t), [n]),
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
