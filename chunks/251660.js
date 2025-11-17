n.d(t, { s: () => d });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(700582),
    l = n(51144),
    c = n(388032),
    u = n(695681);
let d = (e) => {
    let { className: t, giftRecipient: n } = e;
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: a()(u.content, t),
              children: (0, r.jsx)(o.gNt, {
                  label: c.intl.string(c.t.xFn72s),
                  children: (0, r.jsxs)("div", {
                      className: u.giftRecipientInfo,
                      children: [
                          (0, r.jsx)(s.Z, {
                              user: n,
                              size: o.EFr.SIZE_44,
                          }),
                          (0, r.jsx)(o.Text, {
                              className: u.giftRecipientName,
                              variant: "text-md/normal",
                              children: l.ZP.getName(n),
                          }),
                          (0, r.jsx)(o.Text, {
                              className: u.giftRecipientTag,
                              variant: "text-md/normal",
                              children: l.ZP.getUserTag(n),
                          }),
                      ],
                  }),
              }),
          });
};
