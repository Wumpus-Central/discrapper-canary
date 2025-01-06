n.d(e, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(596454),
    u = n(377171),
    a = n(403910),
    s = n(549631),
    c = n(989384);
function d(t) {
    var e;
    let { guildId: n, emojiId: r, emojiName: d, className: f } = t,
        _ = (0, a.Z)(n, r);
    return null != _ || null != d
        ? (0, i.jsx)(o.Z, {
              emojiId: null == _ ? void 0 : _.id,
              emojiName: null != d ? d : null == _ ? void 0 : _.name,
              animated: null !== (e = null == _ ? void 0 : _.animated) && void 0 !== e && e,
              className: l()(c.emojiIcon, f)
          })
        : (0, i.jsx)(s.Z, {
              className: l()(c.emojiIcon, f),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
