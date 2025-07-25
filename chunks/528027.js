n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(596454),
    o = n(377171),
    a = n(403910),
    c = n(549631),
    u = n(366523);
function d(e) {
    var t;
    let { guildId: n, emojiId: i, emojiName: d, className: f } = e,
        p = (0, a.Z)(n, i);
    return null != p || null != d
        ? (0, r.jsx)(s.Z, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated: null != (t = null == p ? void 0 : p.animated) && t,
              className: l()(u.emojiIcon, f)
          })
        : (0, r.jsx)(c.Z, {
              className: l()(u.emojiIcon, f),
              color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
