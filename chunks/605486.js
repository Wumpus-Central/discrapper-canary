t.exports = function (t, r) {
    return 1 === r
        ? function (r, n) {
              return r[t](n);
          }
        : function (r, n, e) {
              return r[t](n, e);
          };
};
