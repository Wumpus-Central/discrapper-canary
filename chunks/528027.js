n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(596454),
    o = n(377171),
    a = n(403910),
    u = n(549631),
    c = n(221237);
function d(e) {
    var t;
    let { guildId: n, emojiId: r, emojiName: d, className: h } = e,
        p = (0, a.Z)(n, r);
    return null != p || null != d
        ? (0, i.jsx)(l.Z, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated: null != (t = null == p ? void 0 : p.animated) && t,
              className: s()(c.emojiIcon, h),
          })
        : (0, i.jsx)(u.Z, {
              className: s()(c.emojiIcon, h),
              color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
          });
}
