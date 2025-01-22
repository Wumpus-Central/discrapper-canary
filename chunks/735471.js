var i = r(941332),
    a = i.all;
e.exports = i.IS_HTMLDDA
    ? function (e) {
          return 'function' == typeof e || e === a;
      }
    : function (e) {
          return 'function' == typeof e;
      };
