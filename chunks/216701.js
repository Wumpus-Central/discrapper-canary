n.d(t, {
    R: () => s,
    Z: () => l
});
var r = n(255367);
n(73800);
var i = n(596454),
    a = n(307707),
    o = n(377396);
let s = {
    SMALL: o.small,
    MEDIUM: o.medium,
    LARGE: o.large
};
function l(e) {
    let { emojiId: t, emojiName: n, defaultComponent: o, size: l = s.MEDIUM } = e,
        { customEmoji: c, unicodeEmoji: u } = (0, a.Z)(t, n);
    return null == c && null == u
        ? o
        : (0, r.jsx)(i.Z, {
              emojiName: null != c ? (null == c ? void 0 : c.name) : n,
              animated: null != c && c.animated,
              emojiId: null == c ? void 0 : c.id,
              autoplay: !0,
              className: l
          });
}
