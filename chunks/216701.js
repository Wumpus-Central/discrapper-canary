n.d(t, {
    R: () => s,
    Z: () => l
});
var r = n(200651);
n(192379);
var i = n(596454),
    o = n(307707),
    a = n(377396);
let s = {
    SMALL: a.small,
    MEDIUM: a.medium,
    LARGE: a.large
};
function l(e) {
    let { emojiId: t, emojiName: n, defaultComponent: a, size: l = s.MEDIUM } = e,
        { customEmoji: c, unicodeEmoji: u } = (0, o.Z)(t, n);
    return null == c && null == u
        ? a
        : (0, r.jsx)(i.Z, {
              emojiName: null != c ? (null == c ? void 0 : c.name) : n,
              animated: null != c && c.animated,
              emojiId: null == c ? void 0 : c.id,
              autoplay: !0,
              className: l
          });
}
