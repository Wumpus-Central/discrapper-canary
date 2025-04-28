var e = r(154028),
    o = r(880181),
    i = r(568033),
    u = r(677671),
    c = Object;
t.exports = u
    ? function (t) {
          return 'symbol' == typeof t;
      }
    : function (t) {
          var n = e('Symbol');
          return o(n) && i(n.prototype, c(t));
      };
