n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(683071),
    a = n(922590),
    s = n(622543),
    o = n(985018);
function u(e) {
    let { userId: t, className: n } = e,
        u = (0, a.f1)(t),
        d = (0, a.fi)(t),
        c = (0, i.bG)([s.A], () => s.A.getUserProfile(t)?.fetchError);
    return u.length > 0 || d.length > 0 || null == c
        ? null
        : (0, l.jsx)("div", {
              className: n,
              children: (0, l.jsx)(r.w, { type: "warning", children: o.intl.string(o.t.L9wE7H) }),
          });
}
