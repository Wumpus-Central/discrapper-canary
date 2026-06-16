"use strict";
var n = e(512008),
    o = e(309270),
    s = e(529030),
    i = e(157494),
    u = e(348666),
    c = i("IE_PROTO"),
    a = Object,
    f = a.prototype;
t.exports = u
    ? a.getPrototypeOf
    : function (t) {
          var r = s(t);
          if (n(r, c)) return r[c];
          var e = r.constructor;
          return o(e) && r instanceof e ? e.prototype : r instanceof a ? f : null;
      };
