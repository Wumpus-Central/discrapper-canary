var e = n(294377),
    o = n(735471),
    i = n(875604),
    u = n(756234),
    s = Object;
t.exports = u
    ? function (t) {
          return 'symbol' == typeof t;
      }
    : function (t) {
          var r = e('Symbol');
          return o(r) && i(r.prototype, s(t));
      };
