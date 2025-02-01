var r = a(354848),
    n = a(174124),
    o = n.all;
t.exports = n.IS_HTMLDDA
    ? function (t) {
          return 'object' == typeof t ? null !== t : r(t) || t === o;
      }
    : function (t) {
          return 'object' == typeof t ? null !== t : r(t);
      };
