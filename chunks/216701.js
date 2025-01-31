n.d(t, {
    R: () => o,
    Z: () => l
});
var i = n(200651);
n(192379);
var r = n(596454),
    a = n(307707),
    s = n(928797);
let o = {
    SMALL: s.small,
    MEDIUM: s.medium,
    LARGE: s.large
};
function l(e) {
    let { emojiId: t, emojiName: n, defaultComponent: s, size: l = o.MEDIUM } = e,
        { customEmoji: u, unicodeEmoji: c } = (0, a.Z)(t, n);
    return null == u && null == c
        ? (0, i.jsx)(i.Fragment, { children: s })
        : (0, i.jsx)(r.Z, {
              emojiName: null != u ? (null == u ? void 0 : u.name) : n,
              animated: null != u && u.animated,
              emojiId: null == u ? void 0 : u.id,
              autoplay: !0,
              className: l
          });
}
