"use strict";
var i = n(210140),
    r = n(339626),
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
          if (i(t, l)) return t[l];
          var n = t.constructor;
          return r(n) && t instanceof n ? n.prototype : t instanceof u ? c : null;
      };
