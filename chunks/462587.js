var r = n(764908),
    o = n(691593),
    a = n(829575),
    i = n(185698),
    s = n(689933),
    c = n(45051),
    l = Function,
    u = r([].concat),
    d = r([].join),
    p = {},
    h = function (e, t, n) {
        if (!i(p, t)) {
            for (var r = [], o = 0; o < t; o++) r[o] = 'a[' + o + ']';
            p[t] = l('C,a', 'return new C(' + d(r, ',') + ')');
        }
        return p[t](e, n);
    };
e.exports = c
    ? l.bind
    : function (e) {
          var t = o(this),
              n = t.prototype,
              r = s(arguments, 1),
              i = function () {
                  var n = u(r, s(arguments));
                  return this instanceof i ? h(t, n.length, n) : t.apply(e, n);
              };
          return a(n) && (i.prototype = n), i;
      };
