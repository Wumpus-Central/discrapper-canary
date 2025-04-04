var r = n(871959);
e.exports = function (e, t, n) {
    return n
        ? r(
              e.entries(),
              function (e) {
                  return t(e[1], e[0]);
              },
              !0
          )
        : e.forEach(t);
};
