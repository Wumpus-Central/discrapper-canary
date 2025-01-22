var i = r(294377),
    a = r(735471),
    o = r(875604),
    s = r(756234),
    l = Object;
e.exports = s
    ? function (e) {
          return 'symbol' == typeof e;
      }
    : function (e) {
          var n = i('Symbol');
          return a(n) && o(n.prototype, l(e));
      };
