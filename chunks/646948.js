var i = n(141603),
    r = n(735471),
    a = n(611345),
    s = n(964653),
    o = n(925768),
    l = s('IE_PROTO'),
    u = Object,
    c = u.prototype;
e.exports = o
    ? u.getPrototypeOf
    : function (e) {
          var t = a(e);
          if (i(t, l)) return t[l];
          var n = t.constructor;
          return r(n) && t instanceof n ? n.prototype : t instanceof u ? c : null;
      };
