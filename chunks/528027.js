n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(596454),
    l = n(377171),
    a = n(403910),
    c = n(549631),
    u = n(366523);
function d(e) {
    var t;
    let { guildId: n, emojiId: s, emojiName: d, className: f } = e,
        p = (0, a.Z)(n, s);
    return null != p || null != d
        ? (0, r.jsx)(o.Z, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated: null != (t = null == p ? void 0 : p.animated) && t,
              className: i()(u.emojiIcon, f)
          })
        : (0, r.jsx)(c.Z, {
              className: i()(u.emojiIcon, f),
              color: l.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
