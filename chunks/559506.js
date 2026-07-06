n.d(e, { A: () => u });
var t = n(627968);
n(64700);
var i = n(17928),
    s = n(683071),
    c = n(321191),
    l = n(83931),
    a = n(375708);
function u(r) {
    let { userId: e, className: n } = r,
        u = (0, l.W)(e),
        d = (0, i.bG)([c.A], () => c.A.getUserProfile(e)?.fetchError);
    return u || null == d
        ? null
        : (0, t.jsx)("div", {
              className: n,
              children: (0, t.jsx)(s.w, { type: "warning", children: a.intl.string(a.t.L9wE7H) }),
          });
}
