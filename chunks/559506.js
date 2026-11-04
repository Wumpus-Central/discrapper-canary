var a = l(477900);
l(582128);
var s = l(855986),
    u = l(683071),
    n = l(851767),
    r = l(83931),
    c = l(792996);
l.d(
    e,
    {},
    {
        A: function (t) {
            let { userId: e, className: l } = t,
                A = (0, r.W)(e),
                i = (0, s.bG)([n.A], () => n.A.getUserProfile(e)?.fetchError);
            return A || null == i
                ? null
                : (0, a.jsx)("div", {
                      className: l,
                      children: (0, a.jsx)(u.w, {
                          type: "warning",
                          message: c.intl.string(c.t.L9wE7H),
                          role: "status",
                      }),
                  });
        },
    },
);
