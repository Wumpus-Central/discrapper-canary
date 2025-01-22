e.d(n, {
    Z: function () {
        return d;
    }
});
var i = e(200651);
e(192379);
var r = e(120356),
    l = e.n(r),
    u = e(596454),
    o = e(377171),
    a = e(403910),
    s = e(549631),
    c = e(989384);
function d(t) {
    var n;
    let { guildId: e, emojiId: r, emojiName: d, className: f } = t,
        _ = (0, a.Z)(e, r);
    return null != _ || null != d
        ? (0, i.jsx)(u.Z, {
              emojiId: null == _ ? void 0 : _.id,
              emojiName: null != d ? d : null == _ ? void 0 : _.name,
              animated: null !== (n = null == _ ? void 0 : _.animated) && void 0 !== n && n,
              className: l()(c.emojiIcon, f)
          })
        : (0, i.jsx)(s.Z, {
              className: l()(c.emojiIcon, f),
              color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
