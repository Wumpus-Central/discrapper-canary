var r = n(974067),
    i = n(784812),
    a = n(499657);
e.exports = function (e) {
    var t = i(e);
    return 1 == t.length && t[0][2]
        ? a(t[0][0], t[0][1])
        : function (n) {
              return n === e || r(n, e, t);
          };
};
