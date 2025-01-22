r.d(n, {
    s: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(700582),
    u = r(51144),
    c = r(388032),
    d = r(453476);
let f = (e) => {
    let { className: n, giftRecipient: r } = e;
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: o()(d.content, n),
              children: [
                  (0, i.jsx)(s.FormTitle, { children: c.intl.string(c.t.xFn72t) }),
                  (0, i.jsxs)('div', {
                      className: d.giftRecipientInfo,
                      children: [
                          (0, i.jsx)(l.Z, {
                              user: r,
                              className: d.__invalid_giftRecipient,
                              size: s.AvatarSizes.SIZE_20
                          }),
                          (0, i.jsx)(s.Heading, {
                              className: d.giftRecipientName,
                              variant: 'text-md/normal',
                              children: u.ZP.getName(r)
                          }),
                          (0, i.jsx)(s.Heading, {
                              className: d.giftRecipientTag,
                              variant: 'text-md/normal',
                              children: u.ZP.getUserTag(r)
                          })
                      ]
                  })
              ]
          });
};
