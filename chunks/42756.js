"use strict";
var r = n(210140),
    i = n(339626),
    s = n(250594),
    a = n(583178),
    o = n(77958),
    l = a("IE_PROTO"),
    u = Object,
    c = u.prototype;
e.exports = o
    ? u.getPrototypeOf
    : function (e) {
          var t = s(e);
          if (r(t, l)) return t[l];
          var n = t.constructor;
          return i(n) && t instanceof n ? n.prototype : t instanceof u ? c : null;
      };
