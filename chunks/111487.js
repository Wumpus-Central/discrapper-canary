"use strict";
n.d(t, { A: () => l, g: () => o });
var r = n(627968);
n(64700);
var i = n(565645),
    s = n(202027),
    a = n(375668);
let o = { SMALL: a.EX, MEDIUM: a.Y, LARGE: a.as };
function l(e) {
    let { emojiId: t, emojiName: n, defaultComponent: a, size: l = o.MEDIUM } = e,
        { customEmoji: u, unicodeEmoji: c } = (0, s.A)(t, n);
    return null == u && null == c
        ? a
        : (0, r.jsx)(i.A, {
              emojiName: null != u ? u?.name : n,
              animated: null != u && u.animated,
              emojiId: u?.id,
              autoplay: !0,
              className: l,
          });
}
