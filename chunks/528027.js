n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(596454),
    a = n(377171),
    o = n(403910),
    d = n(549631),
    u = n(798149);
function c(e) {
    var t;
    let { guildId: n, emojiId: l, emojiName: c, className: h } = e,
        g = (0, o.Z)(n, l);
    return null != g || null != c
        ? (0, i.jsx)(s.Z, {
              emojiId: null == g ? void 0 : g.id,
              emojiName: null != c ? c : null == g ? void 0 : g.name,
              animated: null !== (t = null == g ? void 0 : g.animated) && void 0 !== t && t,
              className: r()(u.emojiIcon, h)
          })
        : (0, i.jsx)(d.Z, {
              className: r()(u.emojiIcon, h),
              color: a.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
