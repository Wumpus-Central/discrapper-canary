n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(596454),
    u = n(377171),
    a = n(403910),
    c = n(549631),
    s = n(352537);
function d(e) {
    var t;
    let { guildId: n, emojiId: i, emojiName: d, className: f } = e,
        m = (0, a.Z)(n, i);
    return null != m || null != d
        ? (0, r.jsx)(o.Z, {
              emojiId: null == m ? void 0 : m.id,
              emojiName: null != d ? d : null == m ? void 0 : m.name,
              animated: null != (t = null == m ? void 0 : m.animated) && t,
              className: l()(s.emojiIcon, f),
          })
        : (0, r.jsx)(c.Z, {
              className: l()(s.emojiIcon, f),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
          });
}
