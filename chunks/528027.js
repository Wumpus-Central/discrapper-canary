n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(596454),
    s = n(377171),
    a = n(403910),
    u = n(549631),
    d = n(837578);
function c(e) {
    var t;
    let { guildId: n, emojiId: r, emojiName: c, className: h } = e,
        f = (0, a.Z)(n, r);
    return null != f || null != c
        ? (0, i.jsx)(o.Z, {
              emojiId: null == f ? void 0 : f.id,
              emojiName: null != c ? c : null == f ? void 0 : f.name,
              animated: null !== (t = null == f ? void 0 : f.animated) && void 0 !== t && t,
              className: l()(d.emojiIcon, h)
          })
        : (0, i.jsx)(u.Z, {
              className: l()(d.emojiIcon, h),
              color: s.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
