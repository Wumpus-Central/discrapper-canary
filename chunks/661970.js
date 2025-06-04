var r = n(154028),
    i = n(880181),
    o = n(568033),
    a = n(677671),
    s = Object;
e.exports = a
    ? function (e) {
          return 'symbol' == typeof e;
      }
    : function (e) {
          var t = r('Symbol');
          return i(t) && o(t.prototype, s(e));
      };
