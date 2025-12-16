n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(952306),
    o = n(418632),
    s = n(388032),
    l = n(335094);
function c(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, r.jsxs)(i.M14, {
                    type: "warning",
                    children: [
                        (0, r.jsx)(i.Heading, {
                            variant: "heading-md/medium",
                            children: s.intl.string(s.t.tuGzBT),
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            className: l.inlineNoticeText,
                            children: s.intl.string(s.t.NAzplE),
                        }),
                        (0, r.jsx)(o.Z, {
                            size: "sm",
                            variant: "secondary",
                        }),
                    ],
                })
        : (0, r.jsxs)(i.M14, {
              type: "critical",
              children: [
                  (0, r.jsx)(i.Heading, {
                      variant: "heading-md/medium",
                      children: s.intl.string(s.t["/3qnL/"]),
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      className: l.inlineNoticeText,
                      children: s.intl.string(s.t.qKs3vg),
                  }),
                  (0, r.jsx)(i.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: s.intl.string(s.t["7psymi"]),
                      onClick: () => a.Z.openClaimAccountModal(),
                  }),
              ],
          });
}
