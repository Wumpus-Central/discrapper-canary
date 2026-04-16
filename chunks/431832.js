n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(521933),
    r = n(876696),
    a = n(985018),
    o = n(103579);
function d(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, i.jsxs)(s.wx6, {
                    type: "warning",
                    children: [
                        (0, i.jsx)(s.Heading, { variant: "heading-md/medium", children: a.intl.string(a.t.tuGzBT) }),
                        (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            className: o.PA,
                            children: a.intl.string(a.t.NAzplE),
                        }),
                        (0, i.jsx)(r.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, i.jsxs)(s.wx6, {
              type: "critical",
              children: [
                  (0, i.jsx)(s.Heading, { variant: "heading-md/medium", children: a.intl.string(a.t["/3qnL/"]) }),
                  (0, i.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      className: o.PA,
                      children: a.intl.string(a.t.qKs3vg),
                  }),
                  (0, i.jsx)(s.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: a.intl.string(a.t["7psymi"]),
                      onClick: () => l.A.openClaimAccountModal(),
                  }),
              ],
          });
}
