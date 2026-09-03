var n = e(683570),
    o = e(309270),
    s = e(715804),
    i = e(524011),
    u = Object;
t.exports = i
    ? function (t) {
          return "symbol" == typeof t;
      }
    : function (t) {
          var r = n("Symbol");
          return o(r) && s(r.prototype, u(t));
      };
