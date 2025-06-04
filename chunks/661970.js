var r = n(154028),
    i = n(880181),
    a = n(568033),
    o = n(677671),
    s = Object;
e.exports = o
    ? function (e) {
          return 'symbol' == typeof e;
      }
    : function (e) {
          var t = r('Symbol');
          return i(t) && a(t.prototype, s(e));
      };
