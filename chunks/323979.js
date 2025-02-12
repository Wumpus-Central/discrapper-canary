var r = a(545576),
    n = a(354848),
    _ = a(838957),
    o = a(769992),
    i = Object;
t.exports = o
    ? function (t) {
          return 'symbol' == typeof t;
      }
    : function (t) {
          var e = r('Symbol');
          return n(e) && _(e.prototype, i(t));
      };
