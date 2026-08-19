var n = e(210140),
    o = e(339626),
    a = e(250594),
    i = e(583178),
    p = e(77958),
    f = i("IE_PROTO"),
    u = Object,
    y = u.prototype;
r.exports = p
    ? u.getPrototypeOf
    : function (r) {
          var t = a(r);
          if (n(t, f)) return t[f];
          var e = t.constructor;
          return o(e) && t instanceof e ? e.prototype : t instanceof u ? y : null;
      };
