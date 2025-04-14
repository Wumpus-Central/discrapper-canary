n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(596454),
    a = n(377171),
    s = n(403910),
    u = n(549631),
    c = n(366523);
function d(e) {
    var t;
    let { guildId: n, emojiId: i, emojiName: d, className: f } = e,
        p = (0, s.Z)(n, i);
    return null != p || null != d
        ? (0, r.jsx)(o.Z, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated: null != (t = null == p ? void 0 : p.animated) && t,
              className: l()(c.emojiIcon, f)
          })
        : (0, r.jsx)(u.Z, {
              className: l()(c.emojiIcon, f),
              color: a.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
