"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(683071),
    s = n(543572),
    l = n(83931),
    o = n(375708);
function d(e) {
    let { userId: t, className: n } = e,
        d = (0, l.W)(t),
        c = (0, r.bG)([s.A], () => s.A.getUserProfile(t)?.fetchError);
    return d || null == c
        ? null
        : (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(a.w, { type: "warning", children: o.intl.string(o.t.L9wE7H) }),
          });
}
