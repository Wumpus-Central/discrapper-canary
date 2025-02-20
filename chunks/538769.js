var r = n(294377),
    i = n(735471),
    o = n(875604),
    a = n(756234),
    s = Object;
e.exports = a
    ? function (e) {
          return 'symbol' == typeof e;
      }
    : function (e) {
          var t = r('Symbol');
          return i(t) && o(t.prototype, s(e));
      };
