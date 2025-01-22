var i = r(714760);
e.exports = function (e, n, r) {
    return r
        ? i(
              e.entries(),
              function (e) {
                  return n(e[1], e[0]);
              },
              !0
          )
        : e.forEach(n);
};
