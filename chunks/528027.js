r.d(t, { Z: () => v });
var n = r(200651);
r(192379);
var i = r(120356),
    s = r.n(i),
    o = r(596454),
    l = r(377171),
    a = r(403910),
    c = r(549631),
    h = r(366523);
function v(e) {
    var t;
    let { guildId: r, emojiId: i, emojiName: v, className: u } = e,
        f = (0, a.Z)(r, i);
    return null != f || null != v
        ? (0, n.jsx)(o.Z, {
              emojiId: null == f ? void 0 : f.id,
              emojiName: null != v ? v : null == f ? void 0 : f.name,
              animated: null != (t = null == f ? void 0 : f.animated) && t,
              className: s()(h.emojiIcon, u)
          })
        : (0, n.jsx)(c.Z, {
              className: s()(h.emojiIcon, u),
              color: l.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
