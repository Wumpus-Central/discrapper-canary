var r = a(46166),
    n = a(107378),
    _ = a(849513);
t.exports = function (t) {
    var e = n(t);
    return 1 == e.length && e[0][2]
        ? _(e[0][0], e[0][1])
        : function (a) {
              return a === t || r(a, t, e);
          };
};
