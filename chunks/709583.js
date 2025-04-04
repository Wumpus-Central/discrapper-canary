var e = n(185698),
    o = n(971428),
    i = n(475424),
    u = n(459079),
    s = n(336769),
    c = u('IE_PROTO'),
    f = Object,
    a = f.prototype;
t.exports = s
    ? f.getPrototypeOf
    : function (t) {
          var r = i(t);
          if (e(r, c)) return r[c];
          var n = r.constructor;
          return o(n) && r instanceof n ? n.prototype : r instanceof f ? a : null;
      };
