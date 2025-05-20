n.d(t, { s: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(700582),
    l = n(51144),
    c = n(388032),
    u = n(691825);
let d = (e) => {
    let { className: t, giftRecipient: n } = e;
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: a()(u.content, t),
              children: [
                  (0, r.jsx)(o.vwX, { children: c.intl.string(c.t.xFn72t) }),
                  (0, r.jsxs)('div', {
                      className: u.giftRecipientInfo,
                      children: [
                          (0, r.jsx)(s.Z, {
                              user: n,
                              className: u.__invalid_giftRecipient,
                              size: o.EFr.SIZE_20
                          }),
                          (0, r.jsx)(o.X6q, {
                              className: u.giftRecipientName,
                              variant: 'text-md/normal',
                              children: l.ZP.getName(n)
                          }),
                          (0, r.jsx)(o.X6q, {
                              className: u.giftRecipientTag,
                              variant: 'text-md/normal',
                              children: l.ZP.getUserTag(n)
                          })
                      ]
                  })
              ]
          });
};
