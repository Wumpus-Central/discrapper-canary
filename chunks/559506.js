l.d(t, { A: () => c });
var C = l(477900);
l(582128);
var a = l(17928),
    n = l(683071),
    r = l(321191),
    i = l(83931),
    s = l(375708);
function c(e) {
    let { userId: t, className: l } = e,
        c = (0, i.W)(t),
        u = (0, a.bG)([r.A], () => r.A.getUserProfile(t)?.fetchError);
    return c || null == u
        ? null
        : (0, C.jsx)("div", {
              className: l,
              children: (0, C.jsx)(n.w, { type: "warning", children: s.intl.string(s.t.L9wE7H) }),
          });
}
