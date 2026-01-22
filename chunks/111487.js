n.d(t, {
    A: () => l,
    g: () => o,
});
var r = n(627968);
n(64700);
var i = n(565645),
    a = n(202027),
    s = n(322107);
let o = {
    SMALL: s.EX,
    MEDIUM: s.Y,
    LARGE: s.as,
};

function l(e) {
    let { emojiId: t, emojiName: n, defaultComponent: s, size: l = o.MEDIUM } = e,
        { customEmoji: c, unicodeEmoji: u } = (0, a.A)(t, n);
    return null == c && null == u
        ? s
        : (0, r.jsx)(i.A, {
              emojiName: null != c ? (null == c ? void 0 : c.name) : n,
              animated: null != c && c.animated,
              emojiId: null == c ? void 0 : c.id,
              autoplay: !0,
              className: l,
          });
}
