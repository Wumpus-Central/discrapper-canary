l.d(e, { A: () => A });
var a = l(477900);
l(582128);
var s = l(17928),
    u = l(683071),
    n = l(321191),
    r = l(83931),
    c = l(105292);
function A(t) {
    let { userId: e, className: l } = t,
        A = (0, r.W)(e),
        i = (0, s.bG)([n.A], () => n.A.getUserProfile(e)?.fetchError);
    return A || null == i
        ? null
        : (0, a.jsx)("div", {
              className: l,
              children: (0, a.jsx)(u.w, { type: "warning", message: c.intl.string(c.t.L9wE7H), role: "status" }),
          });
}
