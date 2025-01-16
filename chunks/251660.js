t.d(n, {
    s: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(481060),
    a = t(700582),
    c = t(51144),
    o = t(388032),
    u = t(453476);
let d = (e) => {
    let { className: n, giftRecipient: t } = e;
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: r()(u.content, n),
              children: [
                  (0, i.jsx)(s.FormTitle, { children: o.intl.string(o.t.xFn72t) }),
                  (0, i.jsxs)('div', {
                      className: u.giftRecipientInfo,
                      children: [
                          (0, i.jsx)(a.Z, {
                              user: t,
                              className: u.__invalid_giftRecipient,
                              size: s.AvatarSizes.SIZE_20
                          }),
                          (0, i.jsx)(s.Heading, {
                              className: u.giftRecipientName,
                              variant: 'text-md/normal',
                              children: c.ZP.getName(t)
                          }),
                          (0, i.jsx)(s.Heading, {
                              className: u.giftRecipientTag,
                              variant: 'text-md/normal',
                              children: c.ZP.getUserTag(t)
                          })
                      ]
                  })
              ]
          });
};
