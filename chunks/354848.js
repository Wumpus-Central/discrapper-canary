var r = a(174124),
    n = r.all;
t.exports = r.IS_HTMLDDA
    ? function (t) {
          return 'function' == typeof t || t === n;
      }
    : function (t) {
          return 'function' == typeof t;
      };
