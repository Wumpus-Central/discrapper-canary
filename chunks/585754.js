var r = n(696382),
    i = n(49691),
    a = n(190436);
e.exports = function (e) {
    var t = i(e);
    return 1 == t.length && t[0][2]
        ? a(t[0][0], t[0][1])
        : function (n) {
              return n === e || r(n, e, t);
          };
};
