"use strict";
n.d(t, { Z: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(102741),
    s = n(45938),
    o = n(937008),
    l = n(985018),
    u = n(389118);
function c(e) {
    let { giftMessage: t = l.intl.string(l.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: c } = (0, o.Pv)();
    return !n || (0, s.Ik)(c)
        ? null
        : (0, r.jsx)(a.A, {
              className: u.z,
              iconSize: a.A.Sizes.SMALL,
              icon: i.okO,
              color: null == t ? a.A.Colors.PRIMARY : a.A.Colors.SECONDARY,
              children: t,
          });
}
