n.d(t, { s: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(700582),
    l = n(51144),
    u = n(388032),
    c = n(595288);
let d = (e) => {
    let { className: t, giftRecipient: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: a()(c.content, t),
              children: [
                  (0, i.jsx)(s.vwX, { children: u.intl.string(u.t.xFn72t) }),
                  (0, i.jsxs)('div', {
                      className: c.giftRecipientInfo,
                      children: [
                          (0, i.jsx)(o.Z, {
                              user: n,
                              className: c.__invalid_giftRecipient,
                              size: s.EFr.SIZE_20
                          }),
                          (0, i.jsx)(s.X6q, {
                              className: c.giftRecipientName,
                              variant: 'text-md/normal',
                              children: l.ZP.getName(n)
                          }),
                          (0, i.jsx)(s.X6q, {
                              className: c.giftRecipientTag,
                              variant: 'text-md/normal',
                              children: l.ZP.getUserTag(n)
                          })
                      ]
                  })
              ]
          });
};
