var s = t(477900);
t(582128);
var n = t(855986),
    i = t(683071),
    a = t(851767),
    l = t(83931),
    u = t(792996);
t.d(
    r,
    {},
    {
        A: function (e) {
            let { userId: r, className: t } = e,
                c = (0, l.W)(r),
                d = (0, n.bG)([a.A], () => a.A.getUserProfile(r)?.fetchError);
            return c || null == d
                ? null
                : (0, s.jsx)("div", {
                      className: t,
                      children: (0, s.jsx)(i.w, {
                          type: "warning",
                          message: u.intl.string(u.t.L9wE7H),
                          role: "status",
                      }),
                  });
        },
    },
);
