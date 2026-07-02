"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(683071),
    a = n(321191),
    o = n(83931),
    l = n(375708);
function u(e) {
    let { userId: t, className: n } = e,
        u = (0, o.W)(t),
        c = (0, r.bG)([a.A], () => a.A.getUserProfile(t)?.fetchError);
    return u || null == c
        ? null
        : (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(s.w, { type: "warning", children: l.intl.string(l.t.L9wE7H) }),
          });
}
