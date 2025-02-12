var r = a(740362),
    n = a(354848),
    _ = a(339718),
    o = a(883539),
    i = a(442975),
    c = o('IE_PROTO'),
    s = Object,
    E = s.prototype;
t.exports = i
    ? s.getPrototypeOf
    : function (t) {
          var e = _(t);
          if (r(e, c)) return e[c];
          var a = e.constructor;
          return n(a) && e instanceof a ? a.prototype : e instanceof s ? E : null;
      };
