"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(683071),
    a = n(922590),
    o = n(841595),
    l = n(375708);
function u(e) {
    let { userId: t, className: n } = e,
        u = (0, a.f1)(t),
        c = (0, a.fi)(t),
        d = (0, r.bG)([o.A], () => o.A.getUserProfile(t)?.fetchError);
    return u.length > 0 || c.length > 0 || null == d
        ? null
        : (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(s.w, { type: "warning", children: l.intl.string(l.t.L9wE7H) }),
          });
}
