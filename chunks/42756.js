"use strict";
var r = n(210140),
    i = n(339626),
    a = n(250594),
    s = n(583178),
    o = n(77958),
    l = s("IE_PROTO"),
    u = Object,
    c = u.prototype;
e.exports = o
    ? u.getPrototypeOf
    : function (e) {
          var t = a(e);
          if (r(t, l)) return t[l];
          var n = t.constructor;
          return i(n) && t instanceof n ? n.prototype : t instanceof u ? c : null;
      };
