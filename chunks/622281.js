var r = a(354848),
    n = a(174124),
    _ = n.all;
t.exports = n.IS_HTMLDDA
    ? function (t) {
          return 'object' == typeof t ? null !== t : r(t) || t === _;
      }
    : function (t) {
          return 'object' == typeof t ? null !== t : r(t);
      };
