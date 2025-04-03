var e = n(141603),
    o = n(735471),
    i = n(611345),
    u = n(964653),
    s = n(925768),
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
