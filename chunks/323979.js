var r = a(545576),
    n = a(354848),
    o = a(838957),
    _ = a(769992),
    i = Object;
t.exports = _
    ? function (t) {
          return 'symbol' == typeof t;
      }
    : function (t) {
          var e = r('Symbol');
          return n(e) && o(e.prototype, i(t));
      };
