var r = a(154028),
    n = a(880181),
    _ = a(568033),
    o = a(677671),
    i = Object;
t.exports = o
    ? function (t) {
          return 'symbol' == typeof t;
      }
    : function (t) {
          var e = r('Symbol');
          return n(e) && _(e.prototype, i(t));
      };
