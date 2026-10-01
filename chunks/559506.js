l.d(e, { A: () => A });
var a = l(477900);
l(582128);
var n = l(17928),
    r = l(683071),
    u = l(321191),
    c = l(83931),
    s = l(375708);
function A(t) {
    let { userId: e, className: l } = t,
        A = (0, c.W)(e),
        i = (0, n.bG)([u.A], () => u.A.getUserProfile(e)?.fetchError);
    return A || null == i
        ? null
        : (0, a.jsx)("div", {
              className: l,
              children: (0, a.jsx)(r.w, { type: "warning", children: s.intl.string(s.t.L9wE7H) }),
          });
}
