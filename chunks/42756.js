var n = e(210140),
    o = e(339626),
    a = e(250594),
    i = e(583178),
    p = e(77958),
    u = i("IE_PROTO"),
    y = Object,
    f = y.prototype;
r.exports = p
    ? y.getPrototypeOf
    : function (r) {
          var t = a(r);
          if (n(t, u)) return t[u];
          var e = t.constructor;
          return o(e) && t instanceof e ? e.prototype : t instanceof y ? f : null;
      };
