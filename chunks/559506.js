"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(922590),
    o = n(622543),
    l = n(985018);
function u(e) {
    let { userId: t, className: n } = e,
        u = (0, s.f1)(t),
        c = (0, s.fi)(t),
        d = (0, i.bG)([o.A], () => o.A.getUserProfile(t)?.fetchError);
    return u.length > 0 || c.length > 0 || null == d
        ? null
        : (0, r.jsx)("div", {
              className: n,
              children: (0, r.jsx)(a.wx6, { type: "warning", children: l.intl.string(l.t.p3Q9Y2) }),
          });
}
