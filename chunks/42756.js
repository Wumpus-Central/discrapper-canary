var n = e(210140),
    o = e(339626),
    i = e(250594),
    a = e(583178),
    u = e(77958),
    c = a("IE_PROTO"),
    f = Object,
    p = f.prototype;
r.exports = u
    ? f.getPrototypeOf
    : function (r) {
          var t = i(r);
          if (n(t, c)) return t[c];
          var e = t.constructor;
          return o(e) && t instanceof e ? e.prototype : t instanceof f ? p : null;
      };
