"use strict";
n.d(t, { Z: () => c });
var r = n(627968);
n(64700);
var i = n(597770),
    s = n(102741),
    a = n(45938),
    o = n(937008),
    l = n(985018),
    u = n(296589);
function c(e) {
    let { giftMessage: t = l.intl.string(l.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: c } = (0, o.Pv)();
    return !n || (0, a.Ik)(c)
        ? null
        : (0, r.jsx)(s.A, {
              className: u.z,
              iconSize: s.A.Sizes.SMALL,
              icon: i.o,
              color: null == t ? s.A.Colors.PRIMARY : s.A.Colors.SECONDARY,
              children: t,
          });
}
