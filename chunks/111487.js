n.d(t, { A: () => o, g: () => a });
var l = n(477900);
n(582128);
var i = n(565645),
    r = n(202027),
    s = n(771653);
let a = { SMALL: s.EX, MEDIUM: s.Y, LARGE: s.as };
function o(e) {
    let { emojiId: t, emojiName: n, defaultComponent: s, size: o = a.MEDIUM } = e,
        { customEmoji: u, unicodeEmoji: c } = (0, r.A)(t, n);
    return null == u && null == c
        ? s
        : (0, l.jsx)(i.A, {
              emojiName: null != u ? u?.name : n,
              animated: null != u && u.animated,
              emojiId: u?.id,
              autoplay: !0,
              className: o,
          });
}
