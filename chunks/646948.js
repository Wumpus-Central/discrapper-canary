var i = r(141603),
    a = r(735471),
    o = r(611345),
    s = r(964653),
    l = r(925768),
    u = s('IE_PROTO'),
    c = Object,
    d = c.prototype;
e.exports = l
    ? c.getPrototypeOf
    : function (e) {
          var n = o(e);
          if (i(n, u)) return n[u];
          var r = n.constructor;
          return a(r) && n instanceof r ? r.prototype : n instanceof c ? d : null;
      };
