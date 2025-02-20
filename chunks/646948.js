var r = n(141603),
    i = n(735471),
    o = n(611345),
    a = n(964653),
    s = n(925768),
    l = a('IE_PROTO'),
    c = Object,
    u = c.prototype;
e.exports = s
    ? c.getPrototypeOf
    : function (e) {
          var t = o(e);
          if (r(t, l)) return t[l];
          var n = t.constructor;
          return i(n) && t instanceof n ? n.prototype : t instanceof c ? u : null;
      };
