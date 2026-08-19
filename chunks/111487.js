"use strict";
n.d(t, { A: () => o, g: () => a });
var l = n(477900);
n(582128);
var i = n(565645),
    s = n(202027),
    r = n(630828);
let a = { SMALL: r.EX, MEDIUM: r.Y, LARGE: r.as };
function o(e) {
    let { emojiId: t, emojiName: n, defaultComponent: r, size: o = a.MEDIUM } = e,
        { customEmoji: u, unicodeEmoji: c } = (0, s.A)(t, n);
    return null == u && null == c
        ? r
        : (0, l.jsx)(i.A, {
              emojiName: null != u ? u?.name : n,
              animated: null != u && u.animated,
              emojiId: u?.id,
              autoplay: !0,
              className: o,
          });
}
