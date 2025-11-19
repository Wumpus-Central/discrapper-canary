n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(596454),
    s = n(377171),
    l = n(108447),
    c = n(549631),
    u = n(603751);
function d(e) {
    var t;
    let { guildId: n, emojiId: i, emojiName: d, className: f } = e,
        _ = (0, l.Z)(n, i);
    return null != _ || null != d
        ? (0, r.jsx)(o.Z, {
              emojiId: null == _ ? void 0 : _.id,
              emojiName: null != d ? d : null == _ ? void 0 : _.name,
              animated: null != (t = null == _ ? void 0 : _.animated) && t,
              className: a()(u.emojiIcon, f),
          })
        : (0, r.jsx)(c.Z, {
              className: a()(u.emojiIcon, f),
              color: s.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
          });
}
