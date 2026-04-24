"use strict";
n.d(t, { A: () => o, g: () => r });
var l = n(627968);
n(64700);
var i = n(565645),
    s = n(202027),
    a = n(401252);
let r = { SMALL: a.EX, MEDIUM: a.Y, LARGE: a.as };
function o(e) {
    let { emojiId: t, emojiName: n, defaultComponent: a, size: o = r.MEDIUM } = e,
        { customEmoji: c, unicodeEmoji: u } = (0, s.A)(t, n);
    return null == c && null == u
        ? a
        : (0, l.jsx)(i.A, {
              emojiName: null != c ? c?.name : n,
              animated: null != c && c.animated,
              emojiId: c?.id,
              autoplay: !0,
              className: o,
          });
}
