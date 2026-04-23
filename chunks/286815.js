"use strict";
n.d(t, { b: () => i });
var r = n(993385);
function i(e) {
    var t = (0, r.$)(e);
    return null === t
        ? e
        : "rgba(" +
              ((0xff000000 & (t = t || 0)) >>> 24) +
              ", " +
              ((0xff0000 & t) >>> 16) +
              ", " +
              ((65280 & t) >>> 8) +
              ", " +
              (255 & t) / 255 +
              ")";
}
