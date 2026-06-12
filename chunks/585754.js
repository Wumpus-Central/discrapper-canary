var i = n(696382),
    r = n(49691),
    s = n(190436);
e.exports = function (e) {
    var t = r(e);
    return 1 == t.length && t[0][2]
        ? s(t[0][0], t[0][1])
        : function (n) {
              return n === e || i(n, e, t);
          };
};
