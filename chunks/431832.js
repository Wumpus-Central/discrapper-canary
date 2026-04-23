n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(683071),
    l = n(534514),
    a = n(834730),
    r = n(821609),
    o = n(521933),
    d = n(876696),
    u = n(985018),
    c = n(103579);
function g(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, i.jsxs)(s.w, {
                    type: "warning",
                    children: [
                        (0, i.jsx)(l.D, { variant: "heading-md/medium", children: u.intl.string(u.t.tuGzBT) }),
                        (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            className: c.PA,
                            children: u.intl.string(u.t.NAzplE),
                        }),
                        (0, i.jsx)(d.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, i.jsxs)(s.w, {
              type: "critical",
              children: [
                  (0, i.jsx)(l.D, { variant: "heading-md/medium", children: u.intl.string(u.t["/3qnL/"]) }),
                  (0, i.jsx)(a.E, { variant: "text-sm/normal", className: c.PA, children: u.intl.string(u.t.qKs3vg) }),
                  (0, i.jsx)(r.$, {
                      variant: "secondary",
                      size: "sm",
                      text: u.intl.string(u.t["7psymi"]),
                      onClick: () => o.A.openClaimAccountModal(),
                  }),
              ],
          });
}
