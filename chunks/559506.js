n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(683071),
    a = n(922590),
    o = n(622543),
    s = n(985018);
function d(e) {
    let { userId: t, className: n } = e,
        d = (0, a.f1)(t),
        u = (0, a.fi)(t),
        _ = (0, i.bG)([o.A], () => o.A.getUserProfile(t)?.fetchError);
    return d.length > 0 || u.length > 0 || null == _
        ? null
        : (0, l.jsx)("div", {
              className: n,
              children: (0, l.jsx)(r.w, { type: "warning", children: s.intl.string(s.t.L9wE7H) }),
          });
}
