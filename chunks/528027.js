n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(692547),
    s = n(596454),
    l = n(108447),
    c = n(549631),
    u = n(755424);
function d(e) {
    var t;
    let { guildId: n, emojiId: i, emojiName: d, className: f } = e,
        p = (0, l.Z)(n, i);
    return null != p || null != d
        ? (0, r.jsx)(s.Z, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated: null != (t = null == p ? void 0 : p.animated) && t,
              className: a()(u.emojiIcon, f),
          })
        : (0, r.jsx)(c.Z, {
              className: a()(u.emojiIcon, f),
              color: o.Z.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
          });
}
