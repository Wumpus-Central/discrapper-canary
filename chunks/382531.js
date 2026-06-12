var i = n(974067),
    r = n(784812),
    s = n(499657);
e.exports = function (e) {
    var t = r(e);
    return 1 == t.length && t[0][2]
        ? s(t[0][0], t[0][1])
        : function (n) {
              return n === e || i(n, e, t);
          };
};
