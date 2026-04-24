n.d(t, { Z: () => c });
var l = n(627968);
n(64700);
var a = n(597770),
    i = n(102741),
    r = n(45938),
    s = n(937008),
    o = n(985018),
    u = n(296589);
function c(e) {
    let { giftMessage: t = o.intl.string(o.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: c } = (0, s.Pv)();
    return !n || (0, r.Ik)(c)
        ? null
        : (0, l.jsx)(i.A, {
              className: u.z,
              iconSize: i.A.Sizes.SMALL,
              icon: a.o,
              color: null == t ? i.A.Colors.PRIMARY : i.A.Colors.SECONDARY,
              children: t,
          });
}
