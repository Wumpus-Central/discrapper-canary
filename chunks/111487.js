"use strict";
n.d(t, { A: () => o, g: () => l });
var i = n(477900);
n(582128);
var r = n(565645),
    a = n(202027),
    s = n(630828);
let l = { SMALL: s.EX, MEDIUM: s.Y, LARGE: s.as };
function o(e) {
    let { emojiId: t, emojiName: n, defaultComponent: s, size: o = l.MEDIUM } = e,
        { customEmoji: d, unicodeEmoji: c } = (0, a.A)(t, n);
    return null == d && null == c
        ? s
        : (0, i.jsx)(r.A, {
              emojiName: null != d ? d?.name : n,
              animated: null != d && d.animated,
              emojiId: d?.id,
              autoplay: !0,
              className: o,
          });
}
