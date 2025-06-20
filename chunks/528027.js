n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    o = n(596454),
    l = n(377171),
    a = n(403910),
    c = n(549631),
    u = n(366523);
function d(e) {
    var t;
    let { guildId: n, emojiId: i, emojiName: d, className: p } = e,
        f = (0, a.Z)(n, i);
    return null != f || null != d
        ? (0, r.jsx)(o.Z, {
              emojiId: null == f ? void 0 : f.id,
              emojiName: null != d ? d : null == f ? void 0 : f.name,
              animated: null != (t = null == f ? void 0 : f.animated) && t,
              className: s()(u.emojiIcon, p)
          })
        : (0, r.jsx)(c.Z, {
              className: s()(u.emojiIcon, p),
              color: l.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
