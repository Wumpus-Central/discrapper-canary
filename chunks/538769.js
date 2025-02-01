var i = n(294377),
    r = n(735471),
    a = n(875604),
    s = n(756234),
    o = Object;
e.exports = s
    ? function (e) {
          return 'symbol' == typeof e;
      }
    : function (e) {
          var t = i('Symbol');
          return r(t) && a(t.prototype, o(e));
      };
